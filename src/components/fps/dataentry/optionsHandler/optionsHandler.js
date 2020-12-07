import React, { useState, useEffect } from 'react'
import styles from './optionsHandler.module.css'
import Input, { InputGroup } from '../input/input'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'

export default function OptionsHandler({ defaultValue, objectStructure, onChange, width, margin, debug, addButtonText, code }) {
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
                                    code={code}
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
                            onClick={e => {
                                e.stopPropagation()
                                e.preventDefault()
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
                small
                icon='plus'
                onClick={e => {
                    e.stopPropagation()
                    e.preventDefault()
                    const saveOptions = options ? [...options] : [];
                    saveOptions.push({})
                    setOptions(saveOptions)
                }}
            >{addButtonText || 'Add row'}</Button>
        </div>
    )
}

const filterExample = [
    {
        "exp": "all",    // “all” — эквивалент “и”; “any” — эквивалент “или”
        "filters": [
            {
                "exp": "==", // оператор сравнения
                "field": "number1", // поле, которое сравниваем
                "value": "1", // со значением (можно использовать шаблонизатор и структуры {{WebUser}}, {{HttpRequest}}
                "isExp": false // флаг выполнения value как JS-выражения
            },
            {
                "exp": "", // оператор сравнения
                "field": "", // поле, которое сравниваем
                "value": "1", // со значением (можно использовать шаблонизатор и структуры {{WebUser}}, {{HttpRequest}}
                "isExp": false // флаг выполнения value как JS-выражения
            }
        ]
    }
]

const dataFields = [
    {
        sysName: 'helloWorld',
        name: 'Привет мир',
        filters: [
            { key: 'is...', value: '==' },
            { key: 'is not...', value: '!=' },
            { key: 'like...', value: 'like' },
            { key: 'is empty...', value: 'isEmpty' },
            { key: 'is not empty...', value: 'isNotNull' },
            { key: 'any of...', value: 'in' },
            { key: 'regular expression...', value: 'regExp' }
        ]
    },
    {
        sysName: 'goodbyeMoscow',
        name: 'До свиданья, Москва',
        filters: [
            { key: 'is...', value: '==' },
            { key: 'is not...', value: '!=' },
            { key: 'is empty...', value: 'isEmpty' },
            { key: 'is not empty...', value: 'isNotNull' },
            { key: 'contains any of...', value: 'arrayContainsAny' },
            { key: 'contains all of...', value: 'arrayContainsAll' }
        ]
    }
]

export function AdvancedOptionsHandler({ defaultValue, applyButtonText, objectStructure, onChange, width, margin, debug, addButtonText, clearButtonText }) {
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
            <div className={styles.advOption}>
                <Input
                    type='select'
                    placeholder='Select the field'
                    className={styles.advancedOptionListInput}
                    nomargin />
                <Input
                    type='select'
                    placeholder='Comparison operator'
                    className={styles.advancedOptionListInput}
                    nomargin />
                <Input className={`${styles.advancedOptionListInput} ${styles.wide}`} nomargin />
                <div
                    className={`${styles.optionListButton} icon icon-delete`}
                ></div>
            </div>
            <ActionPanel>
                <Button
                    small
                    icon='done'
                    accent
                >{applyButtonText || 'apply'}</Button>
                <Button
                    small
                    icon='plus'
                >{addButtonText || 'Add row'}</Button>
                <Button
                    small
                    icon='ban'
                    danger
                >{clearButtonText || 'Delete all'}</Button>
            </ActionPanel>

        </div>
    )
}