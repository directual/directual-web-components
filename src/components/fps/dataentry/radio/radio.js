import React, { useEffect, useState } from 'react'
import styles from './radio.module.css'
import Input from '../input/input'

export default function Radio(props) {
    const [selectedOption, setSelectedOption] = useState(props.defaultValue);
    const [customOption, setCustomOption] = useState(null)
    const [customOptionVal, setCustomOptionVal] = useState(null)

    const customOptionLabel = props.customOptionLabel || 'Other option'
    let customOptionType = props.customOptionType || 'string'
    const customOptionPlaceholder = props.customOptionPlaceholder || ''
    let timeFormat;
    timeFormat = customOptionType == 'datetime' &&  'hh:mm A'
    timeFormat = customOptionType == 'date' &&  ''
    if (customOptionType == 'datetime') {customOptionType = 'date'}
    

    useEffect(() => {
        props.onChange && props.onChange('custom: ' + customOptionVal)
    }, [customOptionVal])

    const submitCustomOption = () => {
        customOption && props.onChange && props.onChange('custom: ' + customOptionVal)
    }

    return (
        <div className={`${styles.radio} ${props.disabled && styles.disabled}`}>
            <div className={`${styles.radio_flex}`}>
                {!props.radioImages && <React.Fragment>
                    {props.options && props.options.map(option =>
                        <label>
                            <input
                                type="radio"
                                value={option.value}
                                disabled={props.disabled}
                                checked={selectedOption === option.value}
                                onChange={e => {
                                    setCustomOption('');
                                    props.onChange && props.onChange(e)
                                    setSelectedOption(option.value)
                                }}
                            />
                            {option.label}
                        </label>
                    )}

                </React.Fragment>}

                {props.radioImages && <div className={styles.radioImages}>

                    {props.options && props.options.map(option =>
                        <label>
                            <div className={styles.label}>
                                <input
                                    type="radio"
                                    value={option.value}
                                    disabled={props.disabled}
                                    checked={selectedOption === option.value}
                                    onChange={e => {
                                        props.onChange && props.onChange(e)
                                        setSelectedOption(option.value)
                                    }}
                                />
                                {option.label}
                            </div>
                            <img src={option.image} />
                        </label>
                    )}
                </div>}

            </div>
            {props.customOption &&
                <React.Fragment>
                    <div className={`${styles.radio_flex}`}>
                    <label className={styles.customOption}
                        onClick={() => {
                            if (!props.disabled) {
                                setCustomOption(true);
                                setSelectedOption(customOptionVal);
                            }
                        }}
                    >
                        <input
                            type="radio"
                            disabled={props.disabled}
                            checked={customOption}
                        />
                        {customOptionLabel}
                    </label></div>
                    {customOption &&
                        <Input
                            disabled={props.disabled}
                            placeholder={customOptionPlaceholder}
                            timeFormat={timeFormat}
                            onChange={val => {
                                setCustomOptionVal(val)
                                setSelectedOption('custom: ' + val);
                                submitCustomOption()
                            }}
                            type={customOptionType}
                            value={customOptionVal}
                            nomargin />}
                </React.Fragment>
            }
        </div>
    )
}