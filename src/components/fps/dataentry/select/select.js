import React, { useState, useEffect, useRef } from 'react'
import styles from './select.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'

function List(props) {
    return (
        <React.Fragment>
            {props.options.length > 0 && props.focus &&
                <li className={styles.options_counter}>
                    {props.options.length} option{`${props.options.length > 1 ? 's':''}`}</li>}
            <ul className={`${styles.list} ${styles.flat}`}>

                {props.options.length == 0 &&
                    <SomethingWentWrong icon='ban'
                        message={`No options${props.filter ? ` like \"${props.filter}\"` : ''}`} />}
                {props.options && props.options.map(option =>
                    <li
                        className={`
                        ${styles.option}
                        ${props.current && props.current.id == option.id && styles.selected}
                        `}
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
    const [value, setValue] = useState();
    const inputEl = useRef(null);
    const [filter, setFilter] = useState('')
    const [filteredOptions, setFilteredOptions] = useState(props.options || [])
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
    useEffect(() => { focus && inputEl.current.focus(); setFilter('') }, [focus])

    useEffect(() => {
        let FO = props.options.filter(el => {
            return String(el.title).toLowerCase().match(new RegExp(String(filter).toLowerCase()))
        })
        setFilteredOptions(FO)
    }, [filter])

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div
                id='selectElement'
                className=
                {`${styles.select_field} ${focus && styles.focus}`}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef}
            >
                {props.icon &&
                <div className={`${styles.icon} icon icon-${props.icon}`}></div>}
                
                <div className={`${styles.icon_wrapper}`}>
                    {!value && !filter &&
                        <div className={`${styles.placeholder}`}>
                            {props.placeholder ? props.placeholder : 'Select the value'}</div>}
                    {value && !filter &&
                        <div className={styles.currentValue}>{value.title}</div>}
                    {focus &&
                        <input
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
                    chooseOption={option => { setValue(option); props.onChange(value) }}
                    current={value}
                    onClick={() => { setFocus(false) }}
                    options={filteredOptions}
                    filter={filter}
                    focus={focus}
                />
            </div>

        </div>
    )
}