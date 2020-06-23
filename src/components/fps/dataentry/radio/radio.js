import React, { useEffect, useState } from 'react'
import styles from './radio.module.css'

export default function Radio(props) {
    const [selectedOption, setSelectedOption] = useState(props.defaultValue);
    return (
        <div className={`${styles.radio} ${props.disabled && styles.disabled}`}>
            {props.options && props.options.map(option =>
                <label>
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
                </label>
            )}
        </div>
    )
}