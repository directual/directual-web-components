import React, { useState, useEffect } from 'react'
import styles from './optionsHandler.module.css'
import Input, { InputGroup } from '../input/input'
import Button from '../../button/button'

export default function OptionsHandler({ defaultValue, objectStructure, onChange, width, margin, debug, addButtonText }) {
    const [options, setOptions] = useState(defaultValue)
    return (
        <div className={styles.optionsList}
            style={
                {
                    maxWidth: width || 'auto',
                    marginTop: margin ? margin.top : 0,
                    marginBottom: margin ? margin.bottom : 0,
                }
            }>

            {debug && <div className='dd-debug'>{JSON.stringify(options)}</div>}
            {options && options.map((option, i) => {
                return (
                    <div key={i} className={styles.option}>
                        {objectStructure && objectStructure.map(property => {
                            return (
                                <Input
                                    key={i + '-' + property}
                                    width={width / 2 || 'auto'}
                                    placeholder={property}
                                    className={styles.optionListInput}
                                    defaultValue={options[i][property]}
                                    onChange={e => {
                                        const saveOptions = [...options];
                                        saveOptions[i][property] = e;
                                        setOptions(saveOptions)
                                        onChange && onChange(saveOptions)
                                    }}
                                    nomargin />
                            )
                        })}
                        <div
                            className={`${styles.optionListButton} icon icon-delete`}
                            onClick={() => {
                                const saveOptions = [...options]
                                saveOptions.splice(i, 1)
                                setOptions(saveOptions)
                                onChange && onChange(saveOptions)
                            }}
                        ></div>
                    </div>
                )
            })}
            <Button
                icon='plus'
                onClick={() => {
                    const saveOptions = options ? [...options] : [];
                    saveOptions.push({})
                    setOptions(saveOptions)
                }}
            >{addButtonText || 'Add row'}</Button>
        </div>
    )
}

export function AdvancedOptionsHandler({ defaultValue, objectStructure, onChange, width, margin, debug, addButtonText }) {
    return (
        <div className={styles.optionsList}
            style={
                {
                    maxWidth: width || 'auto',
                    marginTop: margin ? margin.top : 0,
                    marginBottom: margin ? margin.bottom : 0,
                }
            }>
                oh
        </div>
    )
}