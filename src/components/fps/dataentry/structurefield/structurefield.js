import React, { useState, useEffect, useRef } from 'react'
import styles from './structurefield.module.css'

export default function StructureField(props) {

    const testDefVal = {
        name: 'Field Display name',
        sysName: 'foo.bar',
        dataType: 'string'
    }

    const [value, setValue] = useState(props.defaultValue || testDefVal)
    const [focus, setFocus] = useState(false);
    const selectRef = useRef(null);
    const inputEl = useRef(null);
    const [filter, setFilter] = useState('')

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
        //setKeySelected()
    }, [focus])

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div
                className=
                {`${styles.select_field} 
                ${props.warning == 'error' ? styles.error : ''} 
                ${focus && styles.focus} 
                ${props.disabled && styles.disabled}`}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef}
            >
                {props.icon && !(value && value.icon && props.iconOptions) &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}

                <div className={`${styles.value_wrapper}`}>
                    {!value && !focus &&
                        <div className={`${styles.placeholder}`}>
                            {props.placeholder ? props.placeholder : 'Select the value'}</div>}
                    {value &&
                        <div className={`
                            ${styles.currentField}
                            ${focus && styles.transparent}
                            `}>
                            <div className={styles.objectName}>
                                {value.name}</div>
                            <div className={`${styles.objectDetails} ${value.name && styles.small}`}>
                                <span>{`{{`}{value.sysName}{`}}`}</span>, {value.dataType}</div>


                        </div>}
                    {focus &&
                        <input
                            //onKeyDown={handleKeyboard}
                            type="text"
                            placeholder={props.filterPlaceholder}
                            ref={inputEl}
                            disabled={props.disabled}
                            className={styles.filter}
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                        />
                    }
                </div>
                {props.filterFields &&
                    <div title={props.filterFields} className={`${styles.filterFields} icon icon-filter`}></div>
                }
                {!props.disabled &&
                    <div onClick={() => { setFocus(!focus) }} className={`${styles.arrow} icon icon-down ${focus && styles.twist}`}></div>}
            
                <ListFields />
            </div>

        </div>
    )
}

function ListFields(props) {
    return (
        <div 
            //ref={selectHolder}
            className={`${styles.list}`}
        >
             <ul className={styles.structFields}>
                <li>раз</li>
                <li>два</li>
                <li>три</li>
             </ul>
        </div>
    )
}