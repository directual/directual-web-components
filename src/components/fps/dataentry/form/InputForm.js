import React, { useState, useEffect, useRef } from 'react'
import Input from '../input/input'
import { Markdown } from '../../article/mkd'
import Hint from '../../hint/hint'
import moment from 'moment'

export function InputForm(props) {

    if (!props.field.include) { return null }
    const type = `${props.field.dataType}${props.field.format ? `_${props.field.format}` : ''}`
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

function FieldText({ field, onChange, placeholder, editingOn, code, defaultValue }) {
    console.log(defaultValue || (field.defaultValueOn && field.defaultValue))
    return <Input
        type='textarea'
        rows='auto'
        code={code}
        onChange={onChange}
        disabled={!editingOn}
        required={field.required}
        placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={placeholder != "true" ? (field.content || field.id) : ''}
        description={field.description}
        defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue) || ''}
    />
}

function FieldStandard({ field, onChange, placeholder, editingOn, defaultValue }) {
    return <Input
        type={field.dataType != 'string' ? field.dataType : field.format} // для email, phone
        positive={field.format == 'positiveNum'}
        onChange={onChange}
        edit={editingOn}
        disabled={!editingOn}
        required={field.required}
        placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={placeholder != "true" ? (field.content || field.id) : ''}
        description={field.description}
        defaultValue={field.defaultValueOn && field.defaultValue}
    />
}

function FieldBoolean({ field, onChange, placeholder, editingOn, defaultValue }) {
    const getBooleanDefaultValue = defVal => {
        if (typeof defVal == 'string' ) {return defVal}
        if (typeof defVal == 'undefined') {return 'undefined'}
        if (defVal) { return 'true' } else {return 'false'}
    }
    return <Input type='radio'
        options={[
            { value: 'true', label: field.formatOptions.booleanOptions && field.formatOptions.booleanOptions[0] ? field.formatOptions.booleanOptions[0] : 'true' },
            { value: 'false', label: field.formatOptions.booleanOptions && field.formatOptions.booleanOptions[1] ? field.formatOptions.booleanOptions[1] : 'false' }
        ]}
        onChange={onChange}
        disabled={!editingOn}
        label={field.content || field.id}
        description={field.description}
        defaultValue={getBooleanDefaultValue(defaultValue || (field.defaultValueOn && field.defaultValue))}
    />
}

function FieldDate({ field, onChange, placeholder, editingOn, defaultValue }) {
    return <Input type='date'
        defaultValue={field.defaultValueOn && field.defaultValue}
        utc
        timeFormat={`${field.dateTimeOn ? ' HH:mm' : ''}`}
        onChange={onChange}
        disabled={!editingOn}
        label={placeholder != "true" ? (field.content || field.id) : ''}
        placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        description={field.description}
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
            description={field.description}
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

    return <React.Fragment>
        {field && !field.format &&
            <Input type='json'
                onChange={onChange}
                disabled={!editingOn}
                rows='auto'
                label={placeholder != "true" ? (field.content || field.id) : ''}
                placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
                required={field.required}
                description={field.description}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (field.defaultValueOn && field.defaultValue)}
            />}

        {field && field.format == 'checkboxes' &&
            <Input type='checkboxGroup'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.description}
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
                description={field.description}
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
                description={field.description}
                objectStructure={field.formatOptions.keyValue ?
                    [field.formatOptions.keyValue.key, field.formatOptions.keyValue.value]
                    : ['key', 'value']}
                defaultValue={ (defaultValue && parseJson(defaultValue)) || (field.defaultValueOn && field.defaultValue) || {}}
            />}

        {field && field.format == 'slider' &&
            <Input type='slider'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.description}
                defaultValue={ (defaultValue && parseJson(defaultValue)) || ((field.defaultValueOn && field.defaultValue) ? { firstValue: field.defaultValue.firstValue } :
                    {
                        firstValue: Math.floor((field.formatOptions.range.max - field.formatOptions.range.min) * 0.3 + field.formatOptions.range.min)
                    })
                }
                min={field.formatOptions.range && field.formatOptions.range.min}
                max={field.formatOptions.range && field.formatOptions.range.max}
                step={field.formatOptions.range && field.formatOptions.range.step}
                unitName={field.formatOptions.unitName}
            />}
        {field && field.format == "rangeSlider" &&
            <Input type='range'
                disabled={!editingOn}
                onChange={value => onChange(JSON.stringify(value))}
                label={placeholder != "true" ? (field.content || field.id) : ''}
                description={field.description}
                defaultValue={ (defaultValue && parseJson(defaultValue)) || ((field.defaultValueOn && field.defaultValue) ? field.defaultValue :
                    {
                        firstValue: Math.floor((field.formatOptions.range.max - field.formatOptions.range.min) * 0.3 + field.formatOptions.range.min),
                        secondValue: Math.floor((field.formatOptions.range.max - field.formatOptions.range.min) * 0.6 + field.formatOptions.range.min)
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
            description={field.description}
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
            description={field.description}
            defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
        />
    }
}