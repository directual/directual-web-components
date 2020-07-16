import React, { useState, useEffect } from 'react'
import styles from './checkbox.module.css'
import Input from '../input/input'

export default function Checkbox(props) {
    const defaultValue = props.defaultValue || false
    const label = props.label || 'Option'
    const disabled = props.disabled || false

    const customOption = props.customOption || false
    const customOptionLabel = props.customOptionLabel || 'Other option'
    let customOptionType = props.customOptionType || 'string'
    const customOptionPlaceholder = props.customOptionPlaceholder || ''
    let timeFormat;
    timeFormat = customOptionType == 'datetime' && 'hh:mm A'
    timeFormat = customOptionType == 'date' && ''
    if (customOptionType == 'datetime') { customOptionType = 'date' }

    const [checked, setChecked] = useState(defaultValue)

    const [customOptionVal, setCustomOptionVal] = useState(null)

    useEffect(() => {
        props.onChangeCustomOption && props.onChangeCustomOption(customOptionVal)
        props.onChange && customOption && props.onChange(customOptionVal);
    }, [customOptionVal])

    useEffect(() => {
        props.onChange && !customOption && props.onChange(checked);
        props.onChange && customOption && !checked && props.onChange(null);
    }, [checked])

    return (
        <React.Fragment>
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
                    <span className={styles.label}>{label}</span>
                </label>
            </div>
            {customOption && checked &&
                <div className={styles.customOptionWrapper}>
                    <Input
                        disabled={props.disabled}
                        placeholder={customOptionPlaceholder}
                        timeFormat={timeFormat}
                        onChange={val => setCustomOptionVal(val)}
                        type={customOptionType}
                        value={customOptionVal}
                        nomargin
                    />
                </div>
            }
        </React.Fragment>
    )
}