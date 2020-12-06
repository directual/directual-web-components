import React, { useState, useEffect, useRef } from 'react'
import styles from './structurefield.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong';

export default function StructureField(props) {

    //console.log(props)

    const [value, setValue] = useState(props.defaultValue)
    const [focus, setFocus] = useState(false);
    const [keyFocus, setKeyFocus] = useState(props.defaultValue)
    const selectRef = useRef(null);
    const inputEl = useRef(null);
    const [filter, setFilter] = useState('')

    useEffect(() => { setValue(props.defaultValue) }, [props.defaultValue])

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

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        e.stopPropagation()
        e.key == 'Escape' && setFocus(false)
    }
    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    //----------------------

    // при анфокусе сбрасываем фильтр
    useEffect(() => {
        focus && inputEl.current.focus();
        setFilter('');
        setKeyFocus(value)
        // костылек для GlovalVar, ContextVar
        // if (!focus && (value == 'GlobalVar' || value == 'ContextVar')) {
        //     console.log('vars themeselves could not be a value')
        //     setValue(null)
        //     props.onChangeExtended(null)
        //     props.onChange(null)
        // }
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
                currentStruct = (objPath.length != counter && getFieldDetails(i, currentStruct) && getFieldDetails(i, currentStruct).link) || currentStruct
            })
        }
        let displayValue = {
            sysName: val,
            name: getFieldDetails(objPath[objPath.length - 1], currentStruct) ? getFieldDetails(objPath[objPath.length - 1], currentStruct).name : 'unknown',
            dataType: getFieldDetails(objPath[objPath.length - 1], currentStruct) ? getFieldDetails(objPath[objPath.length - 1], currentStruct).dataType : 'unknown',
            struct: currentStruct
        }
        return displayValue
    }

    const clearValue = (e) => {
        e && e.stopPropagation();
        setValue(null);
        props.onChange && props.onChange(null);
        props.onChangeExtended && props.onChangeExtended(null);
        setFocus(false)
    }

    const handleKeyboard = (e) => {
        // if (!filter && e.key == 'Backspace') { clearValue() }
    }


    return (
        <div className={styles.select_wrapper} style={{ maxWidth: props.width || 'auto' }}>
            <div className=
                {`${styles.select_field} 
                    ${props.warning == 'error' ? styles.error : ''} 
                    ${props.warning && styles[props.warning]}
                    ${focus && styles.focus} 
                    ${props.disabled && styles.disabled}`}
                style={
                    {
                        maxHeight: props.fixHeight,
                        minHeight: props.fixHeight
                    }
                }
                onClick={() => { !focus && !props.disabled && setFocus(true) }}
                ref={selectRef} >

                {props.icon && !(value && value.icon && props.iconOptions) &&
                    <div className={`${styles.icon} icon icon-${props.icon}`}></div>}

                <div className={`${styles.value_wrapper} ${(props.filterFields || props.filterLinkFields) && styles.narrow}`}>
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
                            onKeyDown={handleKeyboard}
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
                {!props.disabled && value && focus &&
                    <div onClick={e => { clearValue(e) }} className={`${styles.clearValue} icon icon-ban ${(props.filterFields || props.filterLinkFields) && styles.moved}`}>Clear</div>}


                {/* filter */}
                {props.filterFields && <div title={`Data types: ${props.filterFields}`} className={`${styles.filterFields} icon icon-filter`}></div>}
                {props.filterLinkFields && <div title={`Links to: ${props.filterLinkFields}`} className={`${styles.filterFields} icon icon-filter`}></div>}

                {/* arrow */}
                {!props.disabled && <div onClick={() => { setFocus(!focus) }} className={`${styles.arrow} icon icon-down ${focus && styles.twist}`}></div>}

                <ListFields
                    fields={props.fields}
                    filter={filter}
                    focus={focus}
                    keyFocus={keyFocus}
                    showGlobalVars={props.showGlobalVars}
                    showContextVars={props.showContextVars}
                    hideSysFields={props.hideSysFields}
                    hideId={props.hideId}
                    structSysName={props.structSysName}
                    filterFields={props.filterFields}
                    filterLinkFields={props.filterLinkFields}
                    noPropagation={props.noPropagation}
                    value={value}
                    onChoose={(e, close, struct, type) => {
                        setValue(e); props.onChange(e); close && setFocus(false);
                        props.onChooseLinkStructSysName && struct && props.onChooseLinkStructSysName(struct);
                        props.onChooseType && props.onChooseType(type);
                        props.onChangeExtended && props.onChangeExtended(e, struct, type)
                    }}
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
        scrollListRight();
        positionList();
    }, [props.value, props.filter])


    const [listPosition, setListPosition] = useState('bottom')
    const [listHeight, setListHeight] = useState(350)

    const positionList = () => {
        let pos = 'bottom'
        let maxListHeight = listPosition;
        let freeSpace;
        if (listHolder.current) {
            let rect = listHolder.current.getBoundingClientRect()
            freeSpace = window.innerHeight - listHolder.current.getBoundingClientRect().top - 30
            if (freeSpace > 500) { maxListHeight = 400 } else { maxListHeight = freeSpace }
            if (freeSpace < 100) { maxListHeight = 350; pos = 'top' }
        }
        if (props.bottomSelect) { pos = 'top' }
        setListPosition(pos)
        setListHeight(maxListHeight)
    }

    return (
        <div ref={listHolder}
            className={styles.list}
            style={
                {
                    maxHeight: listHeight,
                    top: listPosition == 'bottom' ? '100%' : 'auto',
                    bottom: listPosition == 'top' ? '100%' : 'auto'
                }
            }
        >
            <StructListFields
                odd={false}
                focus={props.focus}
                fields={props.fields}
                filter={props.filter}
                firstLevel
                hideSysFields={props.hideSysFields}
                hideId={props.hideId}
                structSysName={props.structSysName}
                filterLinkFields={props.filterLinkFields}
                showGlobalVars={props.showGlobalVars}
                showContextVars={props.showContextVars}
                noPropagation={props.noPropagation}
                filterFields={props.filterFields}
                keyFocus={props.keyFocus}
                value={props.value}
                onChoose={(e, close, struct, type) => props.onChoose(e, close, struct, type)}
            />
        </div>
    )
}






function StructListFields(props) {

    const shiftPath = (value) => {
        let objPath = value && value.split('.');
        if (!value || objPath.length <= 1) {
            return null
        } else {
            objPath.shift();
        }
        return objPath.join('.')
    }

    const scrollDivRef = useRef(null)
    const [showBorder, setShowBorder] = useState(false)
    const [rerender, setRerender] = useState(true)

    const handleScroll = () => {
        if (scrollDivRef.current.scrollTop >= 10) {
            setShowBorder(true);

        } else { setShowBorder(false) }

    }

    const scrollToSelected = (num) => {
        if (scrollDivRef && scrollDivRef.current) {
            scrollDivRef.current.scrollTo({
                top: 52 * (num - 1),
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    const scrollToKeySelected = (num) => {
        let rect = scrollDivRef.current.getBoundingClientRect()
        const itemHeight = 50
        let calcScroll
        if ((num) * itemHeight < scrollDivRef.current.scrollTop) { calcScroll = itemHeight * (num - 1) }
        if ((num) * itemHeight > (scrollDivRef.current.scrollTop + rect.height - 40)) { calcScroll = itemHeight * (num - rect.height / itemHeight + 1) }
        scrollDivRef.current.scrollTo({
            top: calcScroll,
            left: 0,
            behavior: 'smooth'
        });
    }

    const selectOption = (field, close) => {
        props.onChoose(field.sysName,
            (field && field.dataType != 'link' || (props.filterLinkFields && true) || (props.noPropagation && true) || close),
            field.link || '',
            field && field.dataType)
    }

    // этой функцией мы выдергиваем детали поля из структуры
    const getFieldDetails = (fieldSysName, structSysName) => {
        const struct = props.fields && props.fields.filter(i => i.structName == structSysName) && props.fields.filter(i => i.structName == structSysName)[0] && props.fields.filter(i => i.structName == structSysName)[0].fields
        const fieldDetails = struct && struct.filter(i => i.sysName == fieldSysName) && struct.filter(i => i.sysName == fieldSysName)[0]
        return fieldDetails
    }
    const fields = props.fields && props.structSysName &&
        props.fields.filter(i =>
            (i.structName == props.structSysName)
        ) && props.fields.filter(i =>
            i.structName == props.structSysName
        )[0].fields

    const currentField = props.value && props.value.split('.')[0]
    const [currentKeyFocus, setCurrentKeyFocus] = useState(props.keyFocus && props.keyFocus.split('.')[0])
    const [filteredFields, setFilteredFields] = useState(fields)

    useEffect(() => {
        setCurrentKeyFocus(props.keyFocus && props.keyFocus.split('.')[0])
    }, [props.keyFocus])

    function isLast() {
        return !props.value || (props.value.split('.').length == 1 && getFieldDetails(props.value, props.structSysName) && getFieldDetails(props.value, props.structSysName).dataType != 'link')
    }

    const selectKeyOption = (close) => {
        // console.log(currentKeyFocus)
        const currentKeyIndex = !currentKeyFocus ? -1 :
            filteredFields.indexOf(filteredFields.filter(i => i.sysName == currentKeyFocus)[0])
        if (currentKeyIndex != -1) {
            //console.log(filteredFields[currentKeyIndex])
            selectOption(filteredFields[currentKeyIndex], close)
        }
    }

    // updating filteredFields
    useEffect(() => {
        const allFields = fields || []
        //const allFields = [...fields, ...GlobalVars, ...ContextVars]
        if (allFields && (props.filter || props.filterFields) && isLast()) {
            const SaveFiltFields = allFields.filter(el => {
                if (el) {
                    return (String(el.sysName).toLowerCase().match(new RegExp(String(props.filter).toLowerCase())) ||
                        String(el.name).toLowerCase().match(new RegExp(String(props.filter).toLowerCase())) ||
                        String(el.dataType).toLowerCase().match(new RegExp(String(props.filter).toLowerCase())))
                        && (!props.filterFields || props.filterFields.indexOf(el.dataType) != -1)
                        && (props.firstLevel || (!props.firstLevel && (el.sysName != 'GlobalVar' && el.sysName != 'ContextVar')))
                        && (!props.hideId || (props.hideId && el.dataType != 'id'))
                        && (!props.hideSysFields || (props.hideSysFields && el.sysName != '@who' && el.sysName != '@dateCreated' && el.sysName != '@dateChanged'))
                }
            })
            if (props.firstLevel) { console.log(SaveFiltFields) }
            setFilteredFields(SaveFiltFields || [])
        } else {
            const SaveFiltFields2 = allFields.filter(el => {
                return (
                    (!props.filterFields || props.filterFields.indexOf(el.dataType) != -1)
                    && (!props.hideId || (props.hideId && el.dataType != 'id'))
                    && (props.firstLevel || (!props.firstLevel && (el.sysName != 'GlobalVar' && el.sysName != 'ContextVar')))
                    && (!props.hideSysFields || (props.hideSysFields && el.sysName != '@who' && el.sysName != '@dateCreated' && el.sysName != '@dateChanged'))
                )

            })
            setFilteredFields(SaveFiltFields2 || [])
        }
    }, [props.filter, props.value, fields])

    const onChoose = (e, close, struct, type) => {
        const newValue = props.value.split('.')[0] + '.' + e
        props.onChoose(newValue, close, struct, type)
    }

    // key select
    const handleUserKeyPress = (e) => {
        //onsole.log(e.key)
        if ((e.key == 'ArrowDown' || e.key == 'ArrowUp') && isLast() && filteredFields) {
            // console.log(filteredFields)
            const currentKeyIndex = !currentKeyFocus ? -1 :
                filteredFields.indexOf(filteredFields.filter(i => i.sysName == currentKeyFocus)[0])
            if (e.key == 'ArrowDown') {
                currentKeyIndex + 1 < filteredFields.length ? setCurrentKeyFocus(filteredFields[currentKeyIndex + 1].sysName) :
                    setCurrentKeyFocus(filteredFields[0].sysName)
            }
            if (e.key == 'ArrowUp') {
                currentKeyIndex > 0 ? setCurrentKeyFocus(filteredFields[currentKeyIndex - 1].sysName) :
                    setCurrentKeyFocus(filteredFields[filteredFields.length - 1].sysName)
            }
        }
        if (e.key == 'Enter') {
            currentKeyFocus && isLast() && selectKeyOption(true)
        }
        if (e.key == 'ArrowRight') {
            const currentKeyIndex = !currentKeyFocus ? -1 :
                filteredFields.indexOf(filteredFields.filter(i => i.sysName == currentKeyFocus)[0]);
            currentKeyFocus && currentKeyIndex != -1 &&
                (filteredFields[currentKeyIndex].dataType == 'link') && isLast() && selectKeyOption()
        }
    }

    useEffect(() => {
        props.focus ? window.addEventListener('keydown', handleUserKeyPress)
            : window.removeEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress, props.focus]);
    //----------------------

    useEffect(() => {
        if (filteredFields) {
            const currentKeyIndex = !currentKeyFocus ? -1 :
                filteredFields.indexOf(filteredFields.filter(i => i.sysName == currentKeyFocus)[0])
            if (currentKeyIndex == -1 && filteredFields.length > 0) {
                setCurrentKeyFocus(filteredFields[0].sysName)
            }
            if (filteredFields == 0) {
                setCurrentKeyFocus(null)
            }
        }
    }, [filteredFields]);

    useEffect(() => {
        if (filteredFields) {
            // console.log(currentKeyFocus)
            const currentKeyIndex = !currentKeyFocus ? -1 :
                filteredFields.indexOf(filteredFields.filter(i => i.sysName == currentKeyFocus)[0])
            currentKeyIndex != -1 && scrollToKeySelected(currentKeyIndex)
        }
    }, [currentKeyFocus])

    //console.log(filteredFields)


    return (
        <React.Fragment>
            <div className={`${styles.structFields} ${props.odd && styles.odd}`}>
                <div className={styles.structName}>{props.structSysName}{(props.filter && isLast()) && ' (filtered)'}</div>
                <ul ref={scrollDivRef}
                    onScroll={handleScroll}
                    className={`${showBorder && styles.bordered}`}
                >
                    {filteredFields && filteredFields.map((field, i) => {
                        //console.log('handleScroll rerender')
                        if (currentField == field.sysName && rerender) {
                            scrollToSelected(i);
                            setRerender(false)
                        }
                        if ((props.filterLinkFields && field.link == props.filterLinkFields) || !props.filterLinkFields) {
                            return (
                                <li key={field.sysName}
                                    className={`
                                        ${styles.option} 
                                        ${currentKeyFocus == field.sysName && isLast() && styles.keyfocus}
                                        ${currentField == field.sysName && styles.selected}`}
                                    onClick={() => {
                                        selectOption(field)
                                    }}
                                >
                                    <div className={styles.objectName}>
                                        {`${field.name ? field.name : ''}`}
                                        {!field.name && <span className={styles.sysName}>{`{{`}{field.sysName}{`}}`}</span>}
                                    </div>
                                    <div className={`${styles.objectDetails} ${field.name && styles.small}`}>
                                        {field.name && <span className={styles.sysName}>{`{{`}{field.sysName}{`}} `}</span>}
                                        <span className={styles.dataType}>{`${field && field.dataType}${field.link ? ` → ${field.link}` : ''}`}</span></div>
                                    {field && field.dataType == 'link' && !props.filterLinkFields && !props.noPropagation &&
                                        <div className={`${styles.goToLink} icon icon-forward`}></div>}
                                </li>
                            )
                        }

                    })}
                    {(!filteredFields || filteredFields.length == 0) && <SomethingWentWrong icon='ban' message={`No fields${(props.filterFields && !props.filter) ? ` of types: ${props.filterFields.join(', ')}` : ``}`} />}
                    {props.filterLinkFields && (!fields.filter(i => i.link == props.filterLinkFields) || fields.filter(i => i.link == props.filterLinkFields).length == 0) &&
                        <SomethingWentWrong icon='ban' message={`No links to ${props.filterLinkFields}`} />
                    }
                </ul>
            </div>
            {props.value && !props.filterLinkFields && !props.noPropagation && (shiftPath(props.value) || (getFieldDetails(currentField, props.structSysName) && getFieldDetails(currentField, props.structSysName).dataType == 'link')) &&
                <StructListFields
                    fields={props.fields}
                    filter={props.filter}
                    focus={props.focus}
                    onChoose={(e, close, struct, type) => onChoose(e, close, struct, type)}
                    odd={!props.odd}
                    structSysName={getFieldDetails(currentField, props.structSysName) && getFieldDetails(currentField, props.structSysName).link}
                    filterFields={props.filterFields}
                    keyFocus={shiftPath(props.keyFocus)}
                    value={shiftPath(props.value)} />
            }
        </React.Fragment>
    )
}