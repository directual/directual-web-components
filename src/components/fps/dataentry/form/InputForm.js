import React, { useState, useEffect, useRef } from 'react'
import Input from '../input/input'
import { Markdown } from '../../article/mkd'
import Hint from '../../hint/hint'
import moment from 'moment'
import styles from '../../viewobjects/table/table.module.css'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'

export function InputForm(props) {
    // console.log(props.field)
    if (!props.field.include) { return null }
    const type = `${props.field.dataType}${props.field.format ? `_${props.field.format}` : ''}`
    // console.log(type)
    switch (type) {
        case 'json':
        case 'json_checkboxes':
        case 'json_slider':
        case 'json_rangeSlider':
        case 'json_radioOptions':
        case 'json_keyValue':
            return <FieldJson {...props} />
        case 'string_markdown':
            return <FieldMkd {...props} />
        case 'string_webLink':
            return <FieldText {...props} link />
        case 'decimal':
        case 'number':
        case 'number_positiveNum':
        case 'string_email':
        case 'string_phone':
        case 'file':
            return <FieldStandard {...props} />
        case 'boolean':
            return <FieldBoolean {...props} />
        case 'date':
            return <FieldDate {...props} />
        case 'link':
        case 'arrayLink':
            return <FieldLink {...props} />
        default:
            return <FieldText {...props} code={type == 'string_html'} />
    }
}

function FieldText({ field, onChange, placeholder, editingOn, code, defaultValue, link, hintType, isHint }) {
    const addHttp = link => {
        if (link.substring(0, 4) != 'http') { link = 'http://' + link }
        return link
    }
    if (!editingOn) return <div>
        {!field.displayAsButton &&
            <span className={styles.label}>
                {field.name || field.sysName}</span>}

        {field.descriptionFlag && field.description &&
            <span className={styles.description}>
                {field.description}</span>}
        {!link && !isHint &&
            <div>{defaultValue || (field.defaultValueOn && field.defaultValue) || ''}</div>}
        {link &&
            <React.Fragment>
                {field.displayAsButton ?
                    <ActionPanel>
                        <Button
                            newWindow
                            icon={field.button && field.button.icon}
                            accent={field.button && field.button.type == 'accent'}
                            danger={field.button && field.button.type == 'danger'}
                            link={addHttp(defaultValue)}>
                            {(field.button && field.button.title) || field.name || field.sysName}
                        </Button></ActionPanel>
                    :
                    <a href={addHttp(defaultValue)} target='_blank'>{defaultValue}</a>}
            </React.Fragment>}
        {isHint &&
            <Hint margin={{ top: 1, bottom: 24 }} ok={hintType == 'ok'} error={hintType == 'danger'}>{defaultValue}</Hint>}
    </div>
    return <Input
        type='textarea'
        rows='auto'
        code={code}
        onChange={onChange}
        disabled={!editingOn}
        required={field.required}
        placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={placeholder != "true" ? (field.content || field.id) : ''}
        description={field.descriptionFlag && field.description}
        defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue) || ''}
    />
}

function FieldStandard({ field, onChange, placeholder, editingOn, defaultValue }) {
    if (!editingOn) return <div>
        <span className={styles.label}>
            {field.name || field.sysName}</span>

        {field.descriptionFlag && field.description &&
            <span className={styles.description}>
                {field.description}</span>}
        <div>{defaultValue || (field.defaultValueOn && field.defaultValue) || ''}</div>
    </div>
    return <Input
        type={field.dataType != 'string' ? field.dataType : field.format} // для email, phone
        positive={field.format == 'positiveNum'}
        onChange={onChange}
        edit={editingOn}
        disabled={!editingOn}
        required={field.required}
        placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={placeholder != "true" ? (field.content || field.id) : ''}
        description={field.descriptionFlag && field.description}
        defaultValue={field.defaultValueOn && field.defaultValue}
    />
}

function FieldBoolean({ field, onChange, placeholder, editingOn, defaultValue }) {
    const getBooleanDefaultValue = defVal => {
        if (typeof defVal == 'string') { return defVal }
        if (typeof defVal == 'undefined') { return 'undefined' }
        if (defVal) { return 'true' } else { return 'false' }
    }
    return <Input type='radio'
        options={[
            { value: 'true', label: !field.formatOptions ? 'true' : field.formatOptions.booleanOptions && field.formatOptions.booleanOptions[0] ? field.formatOptions.booleanOptions[0] : 'true' },
            { value: 'false', label: !field.formatOptions ? 'false' : field.formatOptions.booleanOptions && field.formatOptions.booleanOptions[1] ? field.formatOptions.booleanOptions[1] : 'false' }
        ]}
        onChange={onChange}
        disabled={!editingOn}
        label={field.content || field.id}
        description={field.descriptionFlag && field.description}
        defaultValue={getBooleanDefaultValue(defaultValue || (field.defaultValueOn && field.defaultValue))}
    />
}

function FieldDate({ field, onChange, placeholder, editingOn, defaultValue }) {
    console.log('DATE')
    console.log(field)
    return <Input type='date'
        defaultValue={field.defaultValueOn && field.defaultValue}

        timeConstraints={field.formatOptions && field.formatOptions.timeConstraints}
        dateFormat={field.formatOptions ? field.formatOptions.dateFormat : 'DD/MM/Y '}
        timeFormat={field.formatOptions ? field.formatOptions.timeFormat : 'HH:mm'}
        locale={field.formatOptions ? field.formatOptions.dateLocale : 'en-gb'}
        utc={field.formatOptions ? field.formatOptions.isUTC == 'true' : true}
        validWeekDays={field.formatOptions ? field.formatOptions.validWeekDays : null}

        onChange={onChange}
        disabled={!editingOn}
        label={placeholder != "true" ? (field.content || field.id) : ''}
        placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        description={field.descriptionFlag && field.description}
        defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
    />
}

function FieldMkd({ field, onChange, placeholder, editingOn, defaultValue }) {
    //console.log(field)
    return <React.Fragment>
        <Input
            type='markdown'
            onChange={onChange}
            edit={editingOn}
            disabled={!editingOn}
            required={field.required}
            placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
            label={placeholder != "true" ? (field.content || field.id) : ''}
            description={field.descriptionFlag && field.description}
            defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
        />
    </React.Fragment>
}

function FieldJson({ field, onChange, placeholder, editingOn, defaultValue }) {

    const parseJson = json => {
        let parsedJson = {}
        if (typeof json == 'object') return json
        try {
            parsedJson = JSON.parse(json)
        }
        catch (e) {
            console.log(json);
            console.log(e);
        }
        return parsedJson
    }

    const stringifyJson = json => {
        if (typeof json == 'string') return json
        return JSON.stringify(json)
    }

    return <React.Fragment>
        {field && !field.format &&
            <Input type='json'
                onChange={onChange}
                disabled={!editingOn}
                rows='auto'
                label={placeholder != "true" ? (field.content || field.id) : ''}
                placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
                required={field.required}
                description={field.descriptionFlag && field.description}
                defaultValue={(defaultValue && stringifyJson(defaultValue)) || (field.defaultValueOn && field.defaultValue)}
            />}

        {field && field.format == 'checkboxes' &&
            <Input type='checkboxGroup'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.descriptionFlag && field.description}
                customOptionType={field.formatOptions.customOptionType}
                customOptionLabel={field.formatOptions.customOptionLabel}
                customOptionPlaceholder={field.formatOptions.customOptionPlaceholder}
                options={field.formatOptions.multipleChoice}
                customOption={field.formatOptions.customOption}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (field.defaultValueOn && field.defaultValue) || {}}
            />}

        {field && field.format == 'radioOptions' &&
            <Input type='radioJson'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.descriptionFlag && field.description}
                customOptionType={field.formatOptions.customOptionType}
                customOptionLabel={field.formatOptions.customOptionLabel}
                customOptionPlaceholder={field.formatOptions.customOptionPlaceholder}
                options={field.formatOptions.multipleChoice}
                customOption={field.formatOptions.customOption}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (field.defaultValueOn && field.defaultValue) || {}}
            />}

        {field && field.format == 'keyValue' &&
            <Input type='optionsHandler'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.descriptionFlag && field.description}
                objectStructure={field.formatOptions.keyValue ?
                    [field.formatOptions.keyValue.key, field.formatOptions.keyValue.value]
                    : ['key', 'value']}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (field.defaultValueOn && field.defaultValue) || {}}
            />}

        {field && field.format == 'slider' &&
            <Input type='slider'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.descriptionFlag && field.description}
                defaultValue={(defaultValue && parseJson(defaultValue)) || ((field.defaultValueOn && field.defaultValue) ? { firstValue: field.defaultValue.firstValue } :
                    {
                        firstValue: Math.floor((field.formatOptions.range.max - field.formatOptions.range.min) * 0 + field.formatOptions.range.min)
                    })
                }
                min={field.formatOptions.range && field.formatOptions.range.min}
                max={field.formatOptions.range && field.formatOptions.range.max}
                step={field.formatOptions.range && field.formatOptions.range.step}
                unitName={field.formatOptions.unitName}
            />}
        {field && field.format == "slider" && !field.formatOptions.range &&
            <div style={{ marginBottom: 24 }}>{`Slider "${field.content || field.id}" is not configured`}</div>
        }
        {field && field.format == "rangeSlider" && !field.formatOptions.range &&
            <div style={{ marginBottom: 24 }}>{`Range slider "${field.content || field.id}" is not configured`}</div>
        }
        {field && field.format == "rangeSlider" && field.formatOptions.range &&
            <Input type='range'
                disabled={!editingOn}
                onChange={value => onChange && onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.descriptionFlag && field.description}
                defaultValue={(defaultValue && parseJson(defaultValue)) || ((field.defaultValueOn && field.defaultValue) ? field.defaultValue :
                    {
                        firstValue: Math.floor((field.formatOptions.range.max - field.formatOptions.range.min) * 0 + field.formatOptions.range.min),
                        secondValue: Math.floor((field.formatOptions.range.max - field.formatOptions.range.min) * 1 + field.formatOptions.range.min)
                    })
                }
                min={field.formatOptions.range && field.formatOptions.range.min}
                max={field.formatOptions.range && field.formatOptions.range.max}
                step={field.formatOptions.range && field.formatOptions.range.step}
                unitName={field.formatOptions.unitName}
            />}
    </React.Fragment>
}

function FieldLink({ field, onChange, placeholder, editingOn, defaultValue }) {
    //console.log(field)
    const [edit, setEdit] = useState(false)
    if (field.searchData && field.searchData.length > 0) {
        return <Input
            type={field.dataType == 'link' ? 'select' : 'multiselect'}
            onChange={onChange}
            disabled={!editingOn}
            required={field.required}
            placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
            label={placeholder != "true" ? (field.content || field.id) : ''}
            description={field.descriptionFlag && field.description}
            defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
            options={field.searchData}
        />
    } else {
        return <Input
            type='textarea'
            rows='auto'
            onChange={onChange}
            disabled={!editingOn}
            required={field.required}
            placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
            label={placeholder != "true" ? (field.content || field.id) : ''}
            description={field.descriptionFlag && field.description}
            defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
        />
    }
}