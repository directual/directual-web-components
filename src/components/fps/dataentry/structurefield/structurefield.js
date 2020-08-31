import React, { useState, useEffect, useRef } from 'react'
import styles from './structurefield.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong';

export default function StructureField(props) {

    const [value, setValue] = useState(props.defaultValue)
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

    // при анфокусе сбрасываем фильтр
    useEffect(() => {
        focus && inputEl.current.focus();
        setFilter('');
        //setKeySelected()
    }, [focus, value])

    // этой функцией мы выдергиваем детали поля из структуры
    const getFieldDetails = (fieldSysName, structSysName) => {
        const struct = props.fields && props.fields.filter(i => i.structName == structSysName) && props.fields.filter(i => i.structName == structSysName)[0] && props.fields.filter(i => i.structName == structSysName)[0].fields
        const fieldDetails = struct && struct.filter(i => i.sysName == fieldSysName) && struct.filter(i => i.sysName == fieldSysName)[0]
        return fieldDetails
    }

    // тут мы получаем данные для отображения текущего Value: имя поля и тип
    const getValueDetails = val => {
        const objPath = val.split('.')
        let currentStruct = props.structSysName
        let counter = 0;
        if (objPath.length > 1) {
            objPath.forEach(i => {
                counter++
                currentStruct = (objPath.length != counter && getFieldDetails(i, currentStruct).link) || currentStruct
            })
        }
        let displayValue = {
            sysName: val,
            name: getFieldDetails(objPath[objPath.length - 1], currentStruct) ? getFieldDetails(objPath[objPath.length - 1], currentStruct).name : 'хз',
            dataType: getFieldDetails(objPath[objPath.length - 1], currentStruct) ? getFieldDetails(objPath[objPath.length - 1], currentStruct).dataType : 'хз',
            struct: currentStruct
        }
        return displayValue
    }

    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div className=
                {`${styles.select_field} 
                    ${props.warning == 'error' ? styles.error : ''} 
                    ${focus && styles.focus} 
                    ${props.disabled && styles.disabled}`}
                onClick={() => { !focus && setFocus(true) }}
                ref={selectRef} >

                {props.icon && !(value && value.icon && props.iconOptions) &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}

                <div className={`${styles.value_wrapper}`}>
                    {!value && !focus &&
                        <div className={`${styles.placeholder}`}>
                            {props.placeholder ? props.placeholder : 'Select the value'}</div>}
                    {value &&
                        <div className={`${styles.currentField} ${focus && styles.transparent}`}>
                            {getValueDetails(value).name &&
                                <div className={styles.objectName}>
                                    <strong>{getValueDetails(value).name}</strong> from {getValueDetails(value).struct}</div>}
                            <div className={`${styles.objectDetails} ${getValueDetails(value).name && styles.small}`}>
                                <span>{`{{`}{getValueDetails(value).sysName}{`}}`}</span> {getValueDetails(value).dataType}</div>
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
                {/* clear */}
                {!props.disabled && value && focus && <div onClick={e => {e.stopPropagation(); setValue(null) }} className={`${styles.clearValue} icon icon-ban ${(props.filterFields || props.filterLinkFields) && styles.moved}`}>clear</div>}


                {/* filter */}
                {props.filterFields && <div title={`Data types: ${props.filterFields}`} className={`${styles.filterFields} icon icon-filter`}></div>}
                {props.filterLinkFields && <div title={`Links to: ${props.filterLinkFields}`} className={`${styles.filterFields} icon icon-filter`}></div>}

                {/* arrow */}
                {!props.disabled && <div onClick={() => { setFocus(!focus) }} className={`${styles.arrow} icon icon-down ${focus && styles.twist}`}></div>}

                <ListFields
                    fields={props.fields}
                    filter={filter}
                    structSysName={props.structSysName}
                    filterFields={props.filterFields}
                    filterLinkFields={props.filterLinkFields}
                    value={value}
                    onChoose={(e, close) => { setValue(e); props.onChange(e), close && setFocus(false) }}
                />
            </div>

        </div>
    )
}

function ListFields(props) {
    const listHolder = useRef(null)

    const scrollListRight = () => {
        if (listHolder && listHolder.current) {
            listHolder.current.scrollTo({
                top: 0,
                left: 10000,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        scrollListRight()
    }, [props.value])


    return (
        <div ref={listHolder}
            className={styles.list}>
            <StructListFields
                odd={false}
                fields={props.fields}
                filter={props.filter}
                structSysName={props.structSysName}
                filterLinkFields={props.filterLinkFields}
                filterFields={props.filterFields}
                value={props.value}
                onChoose={(e, close) => props.onChoose(e, close)}
            />
        </div>
    )
}

function StructListFields(props) {

    const shiftPath = () => {
        let objPath = props.value && props.value.split('.');
        if (!props.value || objPath.length <= 1) {
            return null
        } else {
            objPath.shift();
        }
        return objPath.join('.')
    }

    const scrollDivRef = useRef(null)
    const [showBorder, setShowBorder] = useState(false)

    const handleScroll = () => {
        scrollDivRef.current.scrollTop >= 10 ?
            setShowBorder(true) :
            setShowBorder(false)
    }

    const scrollToSelected = (num) => {
        if (scrollDivRef && scrollDivRef.current) {
            scrollDivRef.current.scrollTo({
                top: 49 * (num - 1),
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    // этой функцией мы выдергиваем детали поля из структуры
    const getFieldDetails = (fieldSysName, structSysName) => {
        const struct = props.fields && props.fields.filter(i => i.structName == structSysName) && props.fields.filter(i => i.structName == structSysName)[0] && props.fields.filter(i => i.structName == structSysName)[0].fields
        const fieldDetails = struct && struct.filter(i => i.sysName == fieldSysName) && struct.filter(i => i.sysName == fieldSysName)[0]
        return fieldDetails
    }

    const fields = props.fields && props.structSysName && props.fields.filter(i => i.structName == props.structSysName) && props.fields.filter(i => i.structName == props.structSysName)[0].fields
    const currentField = props.value && props.value.split('.')[0]

    const [filteredFields, setFilteredFields] = useState(fields)

    const isLast = () => {
        return !props.value || (props.value.split('.').length == 1 && getFieldDetails(props.value, props.structSysName).dataType != 'link')
    }

    useEffect(() => {
        if (fields && props.filter && isLast()) {
            const SaveFiltFields = fields.filter(el => {
                return String(el.sysName).toLowerCase().match(new RegExp(String(props.filter).toLowerCase())) ||
                    String(el.name).toLowerCase().match(new RegExp(String(props.filter).toLowerCase())) ||
                    String(el.dataType).toLowerCase().match(new RegExp(String(props.filter).toLowerCase()))
            })
            setFilteredFields(SaveFiltFields)
        } else { setFilteredFields(fields) }
    }, [props.filter, props.value])

    const onChoose = (e, close) => {
        const newValue = props.value.split('.')[0] + '.' + e
        props.onChoose(newValue, close)
    }

    return (
        <React.Fragment>
            <div className={`${styles.structFields} ${props.odd && styles.odd}`}>
                <div className={styles.structName}>{props.structSysName}{(props.filter && isLast()) && ' (filtered)'}</div>
                <ul ref={scrollDivRef}
                    onScroll={handleScroll}
                    className={`${showBorder && styles.bordered}`}
                >
                    {filteredFields && filteredFields.map((field, i) => {
                        if (currentField == field.sysName) {
                            scrollToSelected(i)
                        }
                        if (!props.filterFields || props.filterFields.indexOf(field.dataType) != -1) {
                            if ((props.filterLinkFields && field.link == props.filterLinkFields) || !props.filterLinkFields) {
                                return (
                                    <li className={`${styles.option} ${currentField == field.sysName && styles.selected}`}
                                        onClick={() => {
                                            props.onChoose(field.sysName, (field.dataType != 'link' || props.filterLinkFields))
                                        }}
                                    >
                                        <div className={styles.objectName}>
                                            {`${field.name ? field.name : ''}`}
                                            {!field.name && <span className={styles.sysName}>{`{{`}{field.sysName}{`}}`}</span>}
                                        </div>
                                        <div className={`${styles.objectDetails} ${field.name && styles.small}`}>
                                            {field.name && <span className={styles.sysName}>{`{{`}{field.sysName}{`}} `}</span>}
                                            <span className={styles.dataType}>{`${field.dataType}${field.dataType == 'link' && field.link ? ` → ${field.link}` : ''}`}</span></div>
                                        {field.dataType == 'link' && !props.filterLinkFields &&
                                            <div className={`${styles.goToLink} icon icon-forward`}></div>}
                                    </li>
                                )
                            }
                        }
                    })}
                    {(!filteredFields || filteredFields.length == 0) && <SomethingWentWrong icon='ban' message='No fields' />}
                    {props.filterLinkFields && (!fields.filter(i => i.link == props.filterLinkFields) || fields.filter(i => i.link == props.filterLinkFields).length == 0) &&
                        <SomethingWentWrong icon='ban' message={`No links to ${props.filterLinkFields}`} />
                    }
                </ul>
            </div>
            {props.value && !props.filterLinkFields && (shiftPath() || getFieldDetails(currentField, props.structSysName).dataType == 'link') &&
                <StructListFields
                    fields={props.fields}
                    filter={props.filter}
                    onChoose={(e, close) => onChoose(e, close)}
                    odd={!props.odd}
                    structSysName={getFieldDetails(currentField, props.structSysName).link}
                    filterFields={props.filterFields}
                    value={shiftPath()} />
            }
        </React.Fragment>
    )
}