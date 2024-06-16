import React, { useState, useEffect } from 'react'
import styles from './checkbox.module.css'
import Input from '../input/input'

export default function Checkbox(props) {
    const defaultValue = props.checked || props.defaultValue || false
    const label = props.label
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

    const [customOptionVal, setCustomOptionVal] = useState(props.customOptionDefaultValue)

    useEffect(() => {
        props.onChangeCustomOption && props.onChangeCustomOption(customOptionVal)
        props.onChange && customOption && props.onChange(checked, customOptionVal);
    }, [customOptionVal])

    useEffect(() => {
        setChecked(props.checked || props.defaultValue)
    }, [props.checked, props.defaultValue])

    return (
        <div className={`${props.className || ''}`}>
            <div className={`${styles.cb_wrap}`}>
                <label
                    className={`${styles.checkbox} ${disabled && styles.disabled}`}
                    style={{ whiteSpace: props.nowrap ? 'nowrap' : 'normal' }}
                >
                    <div className={`${styles.cb_wrapper} ${!label && styles.nopadding}`}>
                        <input
                            type='checkbox'
                            onClick={e => {
                                if (!disabled) {
                                    e.stopPropagation()
                                    e.preventDefault();
                                    props.onChange && !customOption && props.onChange(!checked);
                                    props.onChange && customOption && props.onChange(!checked, customOptionVal);
                                    setChecked(!checked)
                                }
                            }}
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
                        defaultValue={customOptionVal}
                        timeFormat={timeFormat}
                        onChange={val => setCustomOptionVal(val)}
                        type={customOptionType}
                        value={customOptionVal}
                        nomargin
                        rows='auto'
                    />
                </div>
            }
        </div>
    )
}