import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './select.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'

function useForceUpdate() {
    const [, setTick] = useState(0);
    const update = useCallback(() => {
        setTick(tick => tick + 1);
    }, [])
    return update;
}

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
                            ${props.current && props.current.id == option.id && styles.selected}
                            ${props.selected && props.selected.id == option.id && styles.keySelected}
                            ${props.current && props.current.length > 0 && props.current.filter(i => i.id == option.id).length > 0 && styles.selected}
                            ${props.iconOptions && `${styles.optionIcon} icon icon-${option.icon}`}
                        `}
                        //ref={refs[option.id]}
                        key={option.id}
                        onClick={() => {
                            !props.multi && props.chooseOption(option)
                            props.current && props.current.length >= 0 && props.current.filter(i => i.id == option.id).length == 0 ?
                                props.chooseOption(option) :
                                props.current && props.current.length >= 0 && props.removeOption(props.current.filter(i => i.id == option.id)[0])
                            props.onClick()
                        }}
                    >
                        {option.title}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default function Select(props) {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState(props.defaultValue || null);
    const inputEl = useRef(null);
    const [filter, setFilter] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(props.options || [])
    const [keySelected, setKeySelected] = useState()
    const selectRef = useRef(null);

    const forceUpdate = useForceUpdate();
    
    
    //useEffect(()=>{ !value && setValue(props.defaultValue)},[props.defaultValue])

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
        //!focus &&  props.checkValue()
    }, [focus])

    useEffect(() => { 
        console.log('hey, new value:'); 
        console.log(value); 
        props.onChange(value); 
        setKeySelected();
    }, 
    [value])

    let FO;
    useEffect(() => {
        if (props.options) {
            FO = props.options.filter(el => {
                return String(el.title).toLowerCase().match(new RegExp(String(filter).toLowerCase()))
            })
        }
        setFilteredOptions(FO)
        setKeySelected('')
    }, [filter, props.options])

    let currentPosition;
    const handleKeyboard = (e) => {
        if (focus && filteredOptions) {
            currentPosition = filteredOptions.indexOf(keySelected)
            //console.log(e.key + ' key: ' + currentPosition)
            if (e.key == 'Backspace' && props.multi && filter == '') {
                let array = value || []
                array.pop()
                setValue(array)
                props.onChange(array);
                forceUpdate()
            }
            if (e.key == 'Backspace' && !props.multi && filter == '') {
                setValue('')
                props.onChange('');
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
                if (value && value.length >= 0 && value.filter(i => i.id == keySelected.id) == 0) { chooseOption(keySelected) }
                else { props.multi && removeOption(value.filter(i => i.id == keySelected.id)[0]) }
                !props.multi && chooseOption(keySelected);

                setFocus(false)
            }

        }
    }


    const chooseOption = (option) => {
        !props.multi && setValue(option)
        if (props.multi) {
            let arr = value || []
            arr.indexOf(option) == -1 && arr.push(option)
            setValue(arr)
            props.onChange(arr);
        }
    }

    const removeOption = (option) => {
        if (props.multi) {
            let arr = value || []
            if (arr.indexOf(option) != -1) {
                arr.splice(arr.indexOf(option), 1)
                //console.log('removing...' + option.title)
                setValue(arr)
                forceUpdate()
                props.onChange(arr);

            }
        }
    }

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            {/* <hr />
            {JSON.stringify(value)}
            <hr /> */}
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
                        {value && value.length > 0 && value.map((item) =>
                            <li title={item.title}>
                                <div className={styles.title_item}>{item.title}</div>
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
                            <div className={styles.currentValue}>{value.title}</div>}
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
                    current={value}
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