import React, { useState, useEffect, useRef } from 'react'
import styles from './select.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'

function List(props) {

    //   useEffect(() => {
    //     props.selected && refs[props.selected.id].current.scrollTo(0, 500);
    //   })

    return (
        <React.Fragment>
            {props.options && props.options.length > 0 && props.focus &&
                <li className={styles.options_counter}>
                    {props.options.length} option{`${props.options.length > 1 ? 's':''}`}</li>}

            <ul className={`${styles.list} ${styles.flat}`}>
                {props.options && props.options.length == 0 &&
                    <SomethingWentWrong icon='ban'
                        message={`No options${props.filter ? ` like \"${props.filter}\"` : ''}`} />}
                {props.options && props.options.map(option => 
                    <li
                        className={`
                        ${styles.option}
                        ${props.current && props.current.id == option.id && styles.selected}
                        ${props.selected && props.selected.id == option.id && styles.keySelected}
                        ${props.iconOptions && `${styles.optionIcon} icon icon-${option.icon}`}
                        `}
                        //ref={refs[option.id]}
                        key={option.id}
                        onClick={() => { props.chooseOption(option); props.onClick() }}
                    >
                        {option.title}</li>
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
            keySelected && filteredOptions && e.key == 'ArrowUp' && currentPosition == 0 &&
                setKeySelected('')
            keySelected && filteredOptions && e.key == 'ArrowDown' && currentPosition < filteredOptions.length &&
                setKeySelected(filteredOptions[currentPosition + 1])
            keySelected && filteredOptions && e.key == 'ArrowUp' && currentPosition > 0 &&
                setKeySelected(filteredOptions[currentPosition - 1])
            !keySelected && filteredOptions && e.key == 'ArrowDown' &&
                setKeySelected(filteredOptions[0])
            if (keySelected && filteredOptions && e.key == 'Enter')
                { setValue(keySelected); setFocus(false) }
            
        }
    }

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div
                id='selectElement'
                className=
                {`${styles.select_field} ${focus && styles.focus}`}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef}
            >
                {props.icon && !props.iconOptions &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}
                {props.iconOptions &&
                    <div className={`${styles.icon} icon icon-${value.icon}`}></div>}
                
                <div className={`${styles.icon_wrapper}`}>
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
                    }
                </div>
                <div onClick={() => setFocus(!focus)} className={`${styles.arrow} icon icon-down ${focus && styles.twist}`}></div>
                <List
                    chooseOption={option => setValue(option)}
                    current={value}
                    onClick={() => { setFocus(false) }}
                    options={filteredOptions}
                    filter={filter}
                    focus={focus}
                    selected={keySelected}
                    iconOptions={props.iconOptions}
                />
            </div>

        </div>
    )
}