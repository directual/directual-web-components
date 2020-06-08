import React, { useEffect, useState } from 'react'
import './radio.css'

export function Radio(props) {
    const [selectedOption, setSelectedOption] = useState(props.defaultValue);
    return (
        <div className="dd-radio">
            {props.options && props.options.map(option =>
                <label>
                    <input
                        type="radio"
                        value={option.value}
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