import React, { useState, useEffect } from 'react'
import styles from './checkbox.module.css'
import Input from '../input/input'

export default function Checkbox(props) {
    const defaultValue = props.defaultValue || false
    const label = props.label || 'label'
    const disabled = props.disabled || false
    const customOption = props.customOption || false
    const customOptionType = props.customOptionType || 'string'

    const [checked, setChecked] = useState(defaultValue)

    return (
        <div className={styles.cb_wrap}>
            <label
                className={`${styles.checkbox} ${disabled && styles.disabled}`}
                onClick={e => { if (!disabled) { e.preventDefault(); setChecked(!checked) } }}
            >
                <div className={styles.cb_wrapper}>
                    <input
                        type='checkbox'
                        checked={checked} />
                    <span className={`${styles.pretty_checkbox} ${checked && `${styles.checked} icon icon-done`}`}></span>
                </div>
                {!customOption ?
                    <span className={styles.label}>{label}</span> :
                    <Input 
                        type = {customOptionType} 
                        nomargin 
                        //onClick={e => {e.stopPropagation(); }}
                    />

                }
            </label>
        </div>
    )
}