import React, { useEffect, useState } from 'react'
import styles from './radio.module.css'
import Input from '../input/input'

export default function Radio(props) {
    const [selectedOption, setSelectedOption] = useState(props.defaultValue);
    const [customOption, setCustomOption] = useState(typeof props.defaultValue == 'object' ? true : false)
    const [customOptionVal, setCustomOptionVal] = 
        useState(props.defaultValue && typeof props.defaultValue == 'object' && props.defaultValue.customOption)

    // console.log('ОХУЕТЬ ДАЙТЕ ДВЕ')
    // console.log(props.defaultValue)
    // console.log(typeof props.defaultValue)
    // typeof props.defaultValue == 'object' && console.log(props.defaultValue.custom)

    const customOptionLabel = props.customOptionLabel || 'Other option'
    let customOptionType = props.customOptionType || 'string'
    const customOptionPlaceholder = props.customOptionPlaceholder || ''
    let timeFormat;
    timeFormat = customOptionType == 'datetime' &&  'hh:mm A'
    timeFormat = customOptionType == 'date' &&  ''
    if (customOptionType == 'datetime') {customOptionType = 'date'}
    
    const submitCustomOption = (val) => {
        const coval = val || customOptionVal
        customOption && props.onChange && props.onChange({customOption: coval})
    }

    useEffect(() => {
        if (JSON.stringify(props.defaultValue) != JSON.stringify(selectedOption)) { setSelectedOption(props.defaultValue); }
    }, [props.defaultValue])

    useEffect(() => {
        if (!customOption) {
            setCustomOptionVal(null)
            submitCustomOption(null)
        }
    }, [customOption])

    

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
                                submitCustomOption(null)
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
                                setCustomOptionVal(val);
                                setSelectedOption({customOption: val});
                                submitCustomOption(val);
                            }}
                            type={customOptionType}
                            defaultValue={customOptionVal}
                            nomargin />}
                </React.Fragment>
            }
        </div>
    )
}