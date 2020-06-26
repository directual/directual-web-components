import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './select.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'

// function useForceUpdate() {
//     const [, setTick] = useState(0);
//     const update = useCallback(() => {
//         setTick(tick => tick + 1);
//     }, [])
//     return update;
// }

function List(props) {
    const scrollDivRef = useRef(null)
    const selectHolder = useRef(null)

    let itemHeight
    const scrollList = (num, count) => {
        let rect = scrollDivRef.current.getBoundingClientRect()
        itemHeight = scrollDivRef.current.scrollHeight / count
        let calcScroll
        if ((num - 1) * itemHeight < scrollDivRef.current.scrollTop) { calcScroll = itemHeight * num }
        if ((num + 1) * itemHeight > (scrollDivRef.current.scrollTop + rect.height)) { calcScroll = itemHeight * (num - rect.height / itemHeight + 1) }
        scrollDivRef.current.scrollTo({
            top: calcScroll,
            left: 0,
            behavior: 'smooth'
        });
    }

    const positionList = (count) => {
        let pos = 'bottom'
        let maxListHeight = 200;
        let freeSpace;
        if (scrollDivRef.current && selectHolder.current) {
            let rect = scrollDivRef.current.getBoundingClientRect()
            freeSpace = window.innerHeight - (selectHolder.current.getBoundingClientRect().top + selectHolder.current.getBoundingClientRect().height)
            //console.log(freeSpace)
            if (count > 10) { maxListHeight = 10 * 40 }
            //if (maxListHeight > freeSpace) { maxListHeight = freeSpace - 5 }
            if (maxListHeight > freeSpace && freeSpace >= 4 * 40) { maxListHeight = freeSpace - 32 }
            (freeSpace < 4 * 40) ? pos = 'top' : pos = 'bottom'
            //console.log('pos: ' + pos + ' height: ' + maxListHeight)
        }
        return {
            position: pos,
            height: maxListHeight
        }
    }

    useEffect(() => {
        props.selected && scrollList(props.options.indexOf(props.selected), props.options.length)
    })

    const noOptions = <SomethingWentWrong icon='ban'
    message={`No options${props.filter ? ` like \"${props.filter}\"` : ''}`} />

    return (
        <div ref={selectHolder}>
            {props.options && props.options.length > 0 && props.focus && !props.disabled &&
                <li className={styles.options_counter}>

                    {props.current && props.current.length > 0 ? `${props.current.length}/${props.options.length} chosen` :
                        <React.Fragment>{props.options.length} option{`${props.options.length > 1 ? 's' : ''}`}</React.Fragment>
                    }
                </li>}
            <ul className={`${styles.list} ${styles.flat}`}
                ref={scrollDivRef}
                style={
                    {
                        maxHeight: positionList(props.options ? props.options.length : 1).height,
                        top: positionList(props.options ? props.options.length : 1).position == 'bottom' ? '100%' : 'auto',
                        bottom: [positionList(props.options ? props.options.length : 1).position] == 'top' ? '100%' : 'auto'
                    }
                }
            >

                {!props.options && noOptions}

                {props.options && props.options.length == 0 && noOptions}

                {props.options && props.options.map(option =>
                    <li
                        className={`
                            ${styles.option}
                            ${props.current && props.current.key == option.key && styles.selected}
                            ${props.selected && props.selected.key == option.key && styles.keySelected}
                            ${(props.current && props.current.length > 0) && props.current.filter(i => i.key == option.key).length > 0 && styles.selected}
                            ${props.iconOptions && `${styles.optionIcon} icon icon-${option.icon}`}
                        `}
                        //ref={refs[option.key]}
                        key={option.key}
                        onClick={() => {
                            !props.multi && props.chooseOption(option)
                            props.current && props.current.length >= 0 && props.current.filter(i => i.key == option.key).length == 0 ?
                                props.chooseOption(option) :
                                props.current && props.current.length >= 0 && props.removeOption(props.current.filter(i => i.key == option.key)[0])
                            props.onClick()
                        }}
                    >
                        {option.value}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default function Select(props) {

    function convertDefaultValue(def) {
        if(!props.options) {console.log('ошибка 1'); return null;}
        if(!props.multi && def) {
            console.log('ошибка 2');
            return props.options.filter(i=>i.key == def)[0]}
        if(props.multi && def) {
            console.log('ошибка 3');
            return def.map(j => props.options.filter(i=>i.key == j)[0] )}
        console.log('ошибка 4');
    }

    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState(convertDefaultValue(props.defaultValue) || (props.multi && []) || null);
    const inputEl = useRef(null);
    const [filter, setFilter] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(props.options || [])
    const [keySelected, setKeySelected] = useState()
    const selectRef = useRef(null);

    // const forceUpdate = useForceUpdate();
    

    useEffect(()=>{console.log('вроде обновилось'); setValue(convertDefaultValue(props.defaultValue))},[props.defaultValue])

    useOutsideAlerter(selectRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFocus(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useEffect(() => { 
        focus && inputEl.current.focus(); 
        setFilter(''); 
        setKeySelected()
    }, [focus])

    let FO;
    useEffect(() => {
        if (props.options) {
            FO = props.options.filter(el => {
                return String(el.value).toLowerCase().match(new RegExp(String(filter).toLowerCase()))
            })
        }
        setFilteredOptions(FO)
        setKeySelected('')
    }, [filter, props.options])

    let currentPosition;
    const handleKeyboard = (e) => {
        if (focus && filteredOptions) {
            currentPosition = filteredOptions.indexOf(keySelected)
            if (e.key == 'Backspace' && props.multi && filter == '') {
                let array = [...value] || []
                array.pop();
                array.length >=1 ? setValue(array) : setValue('null_#!)#!(*&');
            }
            if (e.key == 'Backspace' && !props.multi && filter == '') {
                setValue('null_#!)#!(*&')
            }
            keySelected && filteredOptions && e.key == 'ArrowUp' && currentPosition == 0 &&
                setKeySelected('')
            keySelected && filteredOptions && e.key == 'ArrowDown' && currentPosition < filteredOptions.length &&
                setKeySelected(filteredOptions[currentPosition + 1])
            keySelected && filteredOptions && e.key == 'ArrowUp' && currentPosition > 0 &&
                setKeySelected(filteredOptions[currentPosition - 1])
            !keySelected && filteredOptions && e.key == 'ArrowDown' &&
                setKeySelected(filteredOptions[0])
            if (keySelected && filteredOptions && e.key == 'Enter') {
                if (value && value.length >= 0 && value.filter(i => i.key == keySelected.key) == 0) { chooseOption(keySelected) }
                else { props.multi && removeOption(value.filter(i => i.key == keySelected.key)[0]) }
                !props.multi && chooseOption(keySelected);

                setFocus(false)
            }

        }
    }

    useEffect(()=> {
        setKeySelected();
        console.log('change!')
        value && value != 'null_#!)#!(*&' && !props.multi && props.onChange(value.key)
        value && value != 'null_#!)#!(*&' && value.length > 0 && props.onChange(value.map(i=>i.key))
        if (value == 'null_#!)#!(*&') { props.onChange(null); console.log('обнуляем!')}
    }, [value])



    const chooseOption = (option) => {
        !props.multi && setValue(option)
        if (props.multi) {
            let arr = [...value] || []
            arr.indexOf(option) == -1 && arr.push(option)
            setValue(arr)
        }
    }

    const removeOption = (option) => {
        if (props.multi) {
            let arr = [...value] || []
            if (arr.indexOf(option) != -1) {
                arr.splice(arr.indexOf(option), 1)
                arr.length >= 1 ? setValue(arr): setValue('null_#!)#!(*&')
            }
        }
    }

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div className="debug">
            select value: {JSON.stringify(value)}<br />
            </div>
            <div
                id='selectElement'
                className=
                {`${styles.select_field} ${props.warning == 'error' ? styles.error : ''} ${focus && styles.focus} ${props.disabled && styles.disabled}`}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef}
            >
                {props.icon && !props.iconOptions &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}
                {props.iconOptions &&
                    <div className={`${styles.icon} icon icon-${value && value.icon}`}></div>}

                {props.multi &&
                    <ul className={styles.multilist}>
                        {value && value != 'null_#!)#!(*&' && value.length > 0 && value.map((item) =>
                            <li title={item.value}>
                                <div className={styles.title_item}>{item.value}</div>
                                {!props.disabled &&
                                    <div className={`${styles.delete_item} icon icon-close`}
                                        onClick={(e) => { e.stopPropagation(); removeOption(item) }}
                                    ></div>}
                            </li>
                        )}

                        <li className={styles.multiplaceholder}>
                            {!filter && <div>{props.placeholder ? props.placeholder : 'Select the value'}</div>}
                            {focus &&
                                <input
                                    disabled={props.disabled}
                                    onKeyDown={handleKeyboard}
                                    type="text"
                                    ref={inputEl}
                                    className={styles.filter}
                                    value={filter}
                                    onChange={e => setFilter(e.target.value)}
                                />}
                        </li>

                    </ul>
                }

                <div className={`${styles.value_wrapper}`}>

                    {!props.multi && <React.Fragment>
                        {!value && !filter &&
                            <div className={`${styles.placeholder}`}>
                                {props.placeholder ? props.placeholder : 'Select the value'}</div>}
                        {value && !filter &&
                            <div className={styles.currentValue}>{value.value}</div>}
                        {focus &&
                            <input
                                onKeyDown={handleKeyboard}
                                type="text"
                                ref={inputEl}
                                className={styles.filter}
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                            />
                        }</React.Fragment>}
                </div>
                {!props.disabled &&
                    <div onClick={() => { setFocus(!focus) }} className={`${styles.arrow} icon icon-down ${focus && styles.twist}`}></div>}
                <List
                    chooseOption={option => chooseOption(option)}
                    removeOption={option => removeOption(option)}
                    current={value != 'null_#!)#!(*&' ? value : null}
                    onClick={() => { setFocus(false) }}
                    options={filteredOptions}
                    filter={filter}
                    focus={focus}
                    selected={keySelected}
                    disabled={props.disabled}
                    iconOptions={props.iconOptions}
                    multi={props.multi}
                />
            </div>

        </div>
    )
}
