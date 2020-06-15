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

    let itemHeight
    const scrollList = (num, count) => {
        let rect = scrollDivRef.current.getBoundingClientRect()
        itemHeight = scrollDivRef.current.scrollHeight / count
        let calcScroll
        if ((num - 1) * itemHeight < scrollDivRef.current.scrollTop) {calcScroll = itemHeight * num}
        if ((num + 1) * itemHeight > (scrollDivRef.current.scrollTop + rect.height)) {calcScroll = itemHeight * (num - rect.height/itemHeight + 1)}
        scrollDivRef.current.scrollTo({
            top: calcScroll,
            left: 0,
            behavior: 'smooth'
          });
          console.log('current = ' + scrollDivRef.current.scrollTop)
        
    }

      useEffect(() => {
        props.selected && scrollList(props.options.indexOf(props.selected),props.options.length)
      })

    return (
        <React.Fragment>
            {props.options && props.options.length > 0 && props.focus && !props.disabled &&
                <li className={styles.options_counter}>
                    
                    {props.current && props.current.length > 0 ? `${props.current.length}/${props.options.length} chosen` :
                    <React.Fragment>{props.options.length} option{`${props.options.length > 1 ? 's':''}`}</React.Fragment>
                    }
                    </li>}
                
            <ul className={`${styles.list} ${styles.flat}`} ref={scrollDivRef}>
                {props.options && props.options.length == 0 &&
                    <SomethingWentWrong icon='ban'
                        message={`No options${props.filter ? ` like \"${props.filter}\"` : ''}`} />}

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
                            props.removeOption(props.current.filter(i => i.id == option.id)[0])
                            props.onClick() }}
                    >
                        {option.title}
                        </li>
                )}
            </ul>
        </React.Fragment>
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
    useEffect(() => { focus && inputEl.current.focus(); setFilter(''); setKeySelected() }, [focus])

    useEffect(() => { props.onChange(value); setKeySelected() }, [value])

    let FO;
    useEffect(() => {
        if (props.options) { FO = props.options.filter(el => {
            return String(el.title).toLowerCase().match(new RegExp(String(filter).toLowerCase()))
        })}
        setFilteredOptions(FO)
        setKeySelected('')
    }, [filter])

    let currentPosition;
    const handleKeyboard = (e) => {
        if (focus) {
            currentPosition = filteredOptions.indexOf(keySelected)
            console.log(e.key + ' key: ' + currentPosition)
            if (e.key == 'Backspace' && props.multi && filter=='') {
                let array = value || []
                array.pop()
                setValue(array)
                forceUpdate()
            }
            if (e.key == 'Backspace' && !props.multi && filter=='') {
                setValue('')
            }
            keySelected && filteredOptions && e.key == 'ArrowUp' && currentPosition == 0 &&
                setKeySelected('')
            keySelected && filteredOptions && e.key == 'ArrowDown' && currentPosition < filteredOptions.length &&
                setKeySelected(filteredOptions[currentPosition + 1])
            keySelected && filteredOptions && e.key == 'ArrowUp' && currentPosition > 0 &&
                setKeySelected(filteredOptions[currentPosition - 1])
            !keySelected && filteredOptions && e.key == 'ArrowDown' &&
                setKeySelected(filteredOptions[0])
            if (keySelected && filteredOptions && e.key == 'Enter')
                { 
                    if (value && value.length >= 0 && value.filter(i => i.id == keySelected.id) == 0) {chooseOption(keySelected)} 
                    else {props.multi && removeOption(value.filter(i => i.id == keySelected.id)[0])} 
                    !props.multi && chooseOption(keySelected); 
                    
                    setFocus(false) }
            
        }
    }

    const forceUpdate = useForceUpdate();

    const chooseOption = (option) => {
        !props.multi && setValue(option)
        if (props.multi) {
            let arr = value || []
            arr.indexOf(option) == -1 && arr.push(option)
            setValue(arr)
        }
    }

    const removeOption = (option) => {
        if (props.multi) { 
            let arr = value || []
            if (arr.indexOf(option) != -1) {
                arr.splice(arr.indexOf(option),1)
                console.log('removing...' + option.title)
                setValue(arr)
                forceUpdate()
            }
        }
    }

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div
                id='selectElement'
                className=
                {`${styles.select_field} ${focus && styles.focus} ${props.disabled && styles.disabled}`}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef}
            >
                {props.icon && !props.iconOptions &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}
                {props.iconOptions &&
                    <div className={`${styles.icon} icon icon-${value.icon}`}></div>}

                {props.multi &&
                    <ul className={styles.multilist}>
                        {value && value.length > 0 && value.map((item) =>
                            <li title={item.title}>
                                <div className={styles.title_item}>{item.title}</div>
                                <div className={`${styles.delete_item} icon icon-close`}
                                    onClick={(e) => {e.stopPropagation(); removeOption(item)}}
                                ></div>    
                            </li>
                        )}
                        
                        <li className={styles.multiplaceholder}>
                            {!filter && <div>{props.placeholder ? props.placeholder : 'Select the value'}</div>}
                            {focus &&
                            <input
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
                <div onClick={() => { setFocus(!focus)}} className={`${styles.arrow} icon icon-down ${focus && styles.twist}`}></div>}
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