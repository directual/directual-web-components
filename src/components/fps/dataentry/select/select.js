import React, { useState, useEffect, useRef } from 'react'
import styles from './select.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import _ from 'lodash'

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
            if (count > 10) { maxListHeight = 10 * 40 }
            if (maxListHeight > freeSpace && freeSpace >= 4 * 40) { maxListHeight = freeSpace - 32 }
            (freeSpace < 4 * 40) ? pos = 'top' : pos = 'bottom'
        }
        if (props.bottomSelect) { pos = 'top' }
        return {
            position: pos,
            height: maxListHeight
        }
    }

    useEffect(() => {
        props.selected && scrollList(props.options.indexOf(props.selected), props.options.length)
    })

    const noOptions = !props.thisIsSubSelect ? <SomethingWentWrong icon='ban'
        message={`${props.filter ? `${_.get(props.dict,'table.noDataFound')} \"${props.filter}\"` : `${_.get(props.dict,'table.noData')}`}`} /> :
        <span className={styles.noOptionsSmall}>No options</span>

    return (
        <div ref={selectHolder}>
            {props.options && props.options.length > 0 && props.focus && !props.disabled &&
                <li className={styles.options_counter}>

                    {props.current && props.current.length > 0 ? `${props.current.length}/${props.options.length} ${_.get(props.dict,'form.chosen')}` :
                        <React.Fragment>{props.options.length} 
                        {/* option{`${props.options.length > 1 ? 's' : ''}`} */}
                        </React.Fragment>
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
                    option &&
                    <li
                        className={`
                            ${styles.option}
                            ${props.current && props.current.key == option.key && styles.selected}
                            ${props.selected && props.selected.key == option.key && styles.keySelected}
                            ${(props.current && props.current.length > 0) && option && props.current.filter(i => i && i.key == option.key).length > 0 && styles.selected}
                            ${props.iconOptions && option.icon && `${styles.optionIcon} icon icon-${option.icon}`}
                        `}
                        //ref={refs[option.key]}
                        key={option.key}
                        onClick={() => {
                            
                            // console.log("onClick")
                            // console.log("props.current")
                            // console.log(props.current)
                            // console.log("option")
                            // console.log(option)
                            // console.log("props.current")
                            // console.log(props.current)

                            !props.multi && props.chooseOption(option)
                            props.current && props.current.length >= 0 && props.current.filter(i => i.key == option.key).length == 0 ?
                                props.chooseOption(option) :
                                props.current && props.current.length >= 0 && props.removeOption(props.current.filter(i => i.key == option.key)[0])
                            props.onClick()
                        }}
                    >
                        {option.value}
                        <span className={styles.displayKey}>
                            {`${props.displayKey ? ` {{${option.key}}}` : ''}`}
                        </span>
                        <span className={styles.displayKeyShort}>
                            {`${props.displayKeyShort ? ` [${option.key}]` : ''}`}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default function Select(props) {

    // console.log('select lang')
    // console.log(props.dict)

    function convertDefaultValue(def) {
        if (def === '[]' || (Array.isArray(def) && def.length == 1 && def[0] == "")) {
            def = null
        } // какой-то лютый костыль для редактирования объекта

        if (!props.options) { return null; }
        if (!props.multi && def) {
            let D = props.options.filter(i => i.key == def)[0];
            return D;
        }
        if (props.multi && def) {
            if (Array.isArray(def)) {
                const convDef = []  
                def.forEach(j => { 
                    if (props.options.filter(i => i && i.key == j)[0]) {
                        convDef.push(props.options.filter(i => i && i.key == j)[0]) } 
                    } 
                )
                // console.log('эвы чо епта')
                // console.log(convDef)
                return convDef
            }
            else {
                return Array.isArray(def.split(',')) && def.split(',').length > 0 && def.split(',').map(j => props.options.filter(i => i.key == j)[0])
            }
        }
        
        return props.multi ? [] : null
    }

    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState((props.defaultValue && convertDefaultValue(props.defaultValue)) || (props.multi && []) || null);
    const inputEl = useRef(null);
    const [filter, setFilter] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(props.options ? props.options.filter(i => i && i.key) : [])
    const [keySelected, setKeySelected] = useState()
    const selectRef = useRef(null);

    // const forceUpdate = useForceUpdate();


    useEffect(() => {
        let D = convertDefaultValue(props.defaultValue);
        setValue(D)
    }, [props.defaultValue])

    useEffect(() => {
        let D = convertDefaultValue(props.defaultValue);
        !value && setValue(D)
    }, [props.options])

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
                if (!el || !el.key)  { 
                    return false 
                } 
                try {return (String(el.value).toLowerCase().match(new RegExp(String(filter).toLowerCase())) || String(el.key).toLowerCase().match(new RegExp(String(filter).toLowerCase())))}
                catch(e) {
                    console.log(e)
                    return true
                }
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
                let array = value ? [...value] : []
                array.pop();
                array.length >= 1 ? submit(array) : submit([]);
            }
            if (e.key == 'Backspace' && !props.multi && filter == '') {
                submit(null)
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
                else { value && value.length >= 0 && props.multi && removeOption(value.filter(i => i.key == keySelected.key)[0]) }
                !props.multi && chooseOption(keySelected);

                setFocus(false)
            }

        }
    }

    useEffect(() => {
        setKeySelected();
        // value && !props.multi && props.onChange(value.key)
        // value && value.length > 0 && props.onChange(value.map(i => i.key))
        // if (!value || value.length == 0) { props.onChange(null); }
    }, [value])

    const submit = (val) => {
        setValue(val)
        setKeySelected();
        val && !props.multi && props.onChange(val.key)
        val && val.length > 0 && props.onChange(val.map(i => i.key))
        if (!val || val.length == 0) { props.onChange(null); }
    }



    const chooseOption = (option) => {
        !props.multi && submit(option)
        if (props.multi) {
            let arr = _.get(value,'[0].key') ? [...value] : []
            arr.indexOf(option) == -1 && arr.push(option)
            submit(arr)
        }
    }

    const removeOption = (option) => {
        if (props.multi) {
            let array = _.get(value,'[0].key') ? [...value] : []
            let index = array.indexOf(option)
            array.splice(index, 1)
            array.length >= 1 ? submit(array) : submit([]);
        }
    }

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            {/* <div className="debug">
            select value: {JSON.stringify(value)}<br />
            </div> */}
            <div
                id='selectElement'
                className=
                {`${styles.select_field} ${props.warning == 'error' ? styles.error : ''} 
                ${props.smallSelect && styles.smallSelect}
                ${focus && styles.focus} ${props.disabled && styles.disabled}`}
                style={{
                    minHeight: props.height || 34
                }}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef}
            >
                {props.icon && !(value && value.icon && props.iconOptions) &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}
                {props.iconOptions && value && value.icon &&
                    <div className={`${styles.icon} icon icon-${value && value.icon}`}></div>}
                {(props.subSelect && (props.subSelect.all || (value && value.key && props.subSelect.keys.filter(i => i == value.key).length > 0))) &&
                    <div className={styles.subselect}
                        onClick={e => {
                            e.stopPropagation()
                        }}>
                        <Select
                            //onChange={e => { }}
                            options={props.subSelect.options}
                            placeholder={props.subSelect.placeholder || 'choose'}
                            thisIsSubSelect
                            disabled={props.disabled}
                            defaultValue={props.subSelect.defaultValue}
                            onChange={props.onChangeSubselect ? props.onChangeSubselect : undefined}
                        />
                    </div>
                }
                {props.multi &&
                    <ul className={styles.multilist}>
                        {value && value.length > 0 && value.map((item) =>
                            item &&
                            <li title={item.value}>
                                <div className={styles.title_item}>
                                    {item.value} 
                                    {props.displayKey ? <code>{`{{${item.key}}}`}</code> : ''}
                                    {props.displayKeyShort ? <code>{`[${item.key}]`}</code> : ''}
                                </div>
                                {!props.disabled &&
                                    <div className={`${styles.delete_item} icon icon-close`}
                                        onClick={(e) => { e.stopPropagation(); removeOption(item) }}
                                    ></div>}
                            </li>
                        )}

                        <li className={styles.multiplaceholder}>
                            {!filter && <div>{props.placeholder ? props.placeholder : _.get(props.dict,'select')}</div>}
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
                                {props.placeholder ? props.placeholder :  _.get(props.dict,'select')}</div>}
                        {value && !filter &&
                            <div className={styles.currentValue}>{value.value}
                                <span className={styles.displayKey}>
                                    {`${props.displayKey ? ` {{${value.key}}}` : ''}`}
                                </span>
                                <span className={styles.displayKeyShort}>
                                    {`${props.displayKeyShort ? ` [${value.key}]` : ''}`}
                                </span>
                            </div>}
                        {focus &&
                            <input
                                onKeyDown={handleKeyboard}
                                type="text"
                                ref={inputEl}
                                disabled={props.disabled}
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
                    dict={props.dict}
                    removeOption={option => removeOption(option)}
                    current={_.get(value,'[0].key') ? value : []}
                    bottomSelect={props.bottomSelect}
                    onClick={() => { setFocus(false) }}
                    options={filteredOptions}
                    displayKey={props.displayKey}
                    displayKeyShort={props.displayKeyShort}
                    filter={filter}
                    focus={focus}
                    selected={keySelected}
                    disabled={props.disabled}
                    iconOptions={props.iconOptions}
                    multi={props.multi}
                    thisIsSubSelect={props.thisIsSubSelect}
                />
            </div>

        </div>
    )
}
