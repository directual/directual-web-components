import React, { useState, useEffect } from "react"
import styles from './form2.module.css'
import { FormSection } from "./FpsForm"
import InnerHTML from 'dangerously-set-html-content'
import Input from '../input/input'
import { InputForm } from './InputForm'
import FpsMap from '../map/map'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'
import FileUpload from '../fileupload/fileupload'
import Media from '../../media/media'
import _ from 'lodash'
import Hint from '../../hint/hint'
import { Tags } from '../../tags/Tags'
import { debounce } from 'lodash'

export function FpsForm2Input(props) {
    const { field, template, dict, userDebug, lang, loading, params, editModel, callEndpoint, model, data, state, locale, checkHidden } = props

    const fieldInfo = _.find(_.get(data, "fileds"), { sysName: field._field }) || {}
    const type = `${fieldInfo.dataType}${fieldInfo.format ? `_${fieldInfo.format}` : ''}`

    const debouncedCallEndpint = debounce(callEndpoint, 200);

    // console.log('field', field)
    // console.log('fieldInfo', fieldInfo)
    // console.log('data', data)

    if (field._conditionalView &&
        !checkHidden(field) &&
        !(_.get(params, "general.debugConditions") && userDebug) &&
        field._conditionalView_disable_or_hide !== "disable"
    ) return <React.Fragment></React.Fragment>

    const disabled = field._conditionalView &&
        !checkHidden(field) &&
        field._conditionalView_disable_or_hide == "disable"

    var toRender = <div></div>

    switch (type) {
        case 'json':
        case 'json_checkboxes':
        case 'json_slider':
        case 'json_rangeSlider':
        case 'json_radioOptions':
        case 'json_keyValue':
        case 'json_geo':
            toRender = <FieldJson {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'file_multipleFiles':
        case 'file_multipleImages':
        case 'file_image':
        case 'file':
            toRender = <FieldFile {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'date':
            toRender = <FieldDate {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'boolean':
            toRender = <FieldBoolean {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'link':
            toRender = <FieldLink {...props} callEndpoint={debouncedCallEndpint} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'arrayLink':
            toRender = <FieldArrayLink {...props} callEndpoint={debouncedCallEndpint} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'string_markdown':
            toRender = <FieldMkd {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'string_dql':
            toRender = <FieldDQL {...props} fields={_.get(data, "fileds")} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'string_html':
            toRender = <FieldHTML {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        case 'string_color':
            toRender = <FieldColor {...props} fieldInfo={fieldInfo} disabled={disabled} />
            break;
        default:
            toRender = <FieldText {...props} fieldInfo={fieldInfo} disabled={disabled} />
    }
    return <div className={`${field._conditionalView && userDebug && _.get(params, "general.debugConditions") ? styles.debugConditions : ""}`}>
        {toRender}
        {field._conditionalView && _.get(params, "general.debugConditions") && userDebug && <div className={styles.condDebugDetails}>
            <code>
                <p>{field._conditionalView_disable_or_hide == "disable" ? "disable input" : "hide input"} if:</p>
                {checkHidden(field, true, true).name && <p style={{ lineHeight: 1, marginBottom: 10}}><b>{checkHidden(field, true, true).name}</b></p>}
                <pre style={{ whiteSpace: 'wrap', fontSize: 14 }}>{checkHidden(field, true, true).conditions}</pre>
                <p>Result: <b>{!checkHidden(field, false, true) ? "true" : "false"}</b></p>
                <pre style={{ whiteSpace: 'wrap', fontSize: 14 }}>{checkHidden(field, true, true).result}</pre>
            </code>
        </div>}
    </div>
}

function FieldDQL(props) {
    const { field, locale, fields, lang, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { onChange, locale, lang, disabled }
    
    return <Input
        type="dqlconstructor"
        {...basicProps}
        fields={fields}
        nomargin
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        defaultValue={model[fieldInfo.sysName]}
        value={model[fieldInfo.sysName]}
    />
}

export function FpsForm2HiddenInput(props) {
    const { field, template, dict, lang, loading, editModel, callEndpoint, model, data, state, locale } = props

    const fieldInfo = _.find(_.get(data, "fileds"), { sysName: field._field }) || {}
    const type = `${fieldInfo.dataType}${fieldInfo.format ? `_${fieldInfo.format}` : ''}`

    const debouncedCallEndpint = debounce(callEndpoint, 300);
    let comp = <FieldText {...props} fieldInfo={fieldInfo} />

    switch (type) {
        case 'json':
        case 'json_checkboxes':
        case 'json_slider':
        case 'json_rangeSlider':
        case 'json_radioOptions':
        case 'json_keyValue':
        case 'json_geo':
            comp = <FieldJson {...props} fieldInfo={fieldInfo} />
            break;
        case 'file_multipleFiles':
        case 'file_multipleImages':
        case 'file_image':
        case 'file':
            comp = <FieldFile {...props} fieldInfo={fieldInfo} />
            break;
        case 'date':
            comp = <FieldDate {...props} fieldInfo={fieldInfo} />
            break;
        case 'boolean':
            comp = <FieldBoolean {...props} fieldInfo={fieldInfo} />
            break;
        case 'link':
            comp = <FieldLink {...props} callEndpoint={debouncedCallEndpint} fieldInfo={fieldInfo} />
            break;
        case 'arrayLink':
            comp = <FieldArrayLink {...props} callEndpoint={debouncedCallEndpint} fieldInfo={fieldInfo} />
            break;
        case 'string_markdown':
            comp = <FieldMkd {...props} fieldInfo={fieldInfo} />
            break;
        case 'string_html':
            comp = <FieldHTML {...props} fieldInfo={fieldInfo} />
            break;
        case 'string_color':
            comp = <FieldColor {...props} fieldInfo={fieldInfo} />
            break;
    }
    return <div style={{ display: 'none' }}>{comp}</div>
}

function FieldText(props) {

    const { field, locale, lang, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { locale, lang, disabled }

    const defaultDebounce = 0
    const debounceTime = _.get(field, "_field_set_debounce") ? _.get(field, "_field_debounce_value", defaultDebounce) : defaultDebounce
    const cx = null
    const debouncedOnChange = debounce(onChangeHandler, debounceTime)

    function onChangeHandler(value) {
        clearTimeout(cx);
        onChange(value)
    }

    const parseJson = json => {
        if (!json) return []
        let parsedJson = []
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

    const parseWithCustomTypes = (str) => {
        if (!str) return;
        // Replace recognized type strings with actual constructors or RegExp/Date objects
        var typeReplacedStr = str
        try {
            typeReplacedStr = str
                .replace(/:\s*Number/g, ': Number')
                .replace(/:\s*Boolean/g, ': Boolean')
                .replace(/:\s*String/g, ': String')
                .replace(/:\s*\/(.*?)\//g, (_, regex) => `: new RegExp(${JSON.stringify(regex)})`)
                .replace(/:\s*new Date\('(.+?)'\)/g, (_, dateStr) => `: new Date('${dateStr}')`);
        } catch (error) {
            console.error("Parsing error:", error);
        }
        try {
            // Evaluate the string safely (ensure the string is from a trusted source)
            return eval(`(${typeReplacedStr})`);
        } catch (error) {
            console.error("Parsing error:", error);
            return null;
        }
    };

    let imask = parseWithCustomTypes(_.get(fieldInfo, "formatOptions.imask"))

    if (field._input_type == "state") {

        if (field._edit_state_maskOn && field._edit_state_imask) {
            imask = parseWithCustomTypes(field._edit_state_imask)
        }
        else {
            imask = null
        }

        let options = field._edit_state_options || []
        if (field._edit_state_manual_json == "json") {
            if (field._edit_state_json_source) {
                options = parseJson(template(`{{${field._edit_state_json_source}}}`))
            } else {
                options = []
            }
        }

        if (field._edit_state_type == "select") {
            return <Input nomargin
                type="select"
                bottomSelect={field._field_link_bottomSelect}
                options={options}
                label={!field._field_hide_label ? (field._edit_state_input_label || field._state_field) : null}
                defaultValue={_.get(state, field._state_field)}
                {...basicProps}
                onChange={debouncedOnChange}
            />
        }
        if (field._edit_state_type == "multiselect") {
            return <Input nomargin
                type="multiselect"
                bottomSelect={field._field_link_bottomSelect}
                options={options}
                label={!field._field_hide_label ? (field._edit_state_input_label || field._state_field) : null}
                defaultValue={_.get(state, field._state_field).split(",")}
                description={field._field_add_description && template(field._field_description_text)}
                {...basicProps}
                onChange={value => (value && value.length) ? debouncedOnChange(value.join(",")) : debouncedOnChange("")}
            />
        }
        if (field._edit_state_type == "buttons") {
            return <Input nomargin
                type="pedal"
                options={options}
                // label={field._edit_state_input_label || field._state_field}
                defaultValue={_.get(state, field._state_field)}
                width={field._edit_state_pedal_width || undefined}
                stretch={field._edit_state_pedal_stretch}
                {...basicProps}
                onChange={debouncedOnChange}
            />
        }
        return <Input nomargin
            type={imask ? 'string' : "textarea"}
            rows='auto'
            imask={imask}
            options={field._edit_state_options}
            label={!field._field_hide_label ? (field._edit_state_input_label || field._state_field) : null}
            defaultValue={_.get(state, field._state_field)}
            description={field._field_add_description && template(field._field_description_text)}
            {...basicProps}
            onChange={debouncedOnChange}
        />
    }

    // if (fieldInfo.sysName == 'question2' || true) {
    //     console.log(fieldInfo)
    //     console.log(model)
    //     console.log(model[fieldInfo.sysName])

    return <Input
        type={fieldInfo.dataType !== 'string' ? fieldInfo.dataType : `${fieldInfo.format == 'password' ? 'password' :
            fieldInfo.format == 'phone' ? 'phone' :
                fieldInfo.format == 'email' ? 'email' : imask ? 'string' : 'textarea'}`}
        positive={fieldInfo.format == 'positiveNum'}
        rows='auto'
        imask={imask}
        //debug
        required={field._field_required}
        {...basicProps}
        onChange={debouncedOnChange}
        nomargin
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
    // }
    // return <div />
}

function FieldColor(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, lang, disabled } = props
    const basicProps = { onChange, locale, lang, disabled }

    return <Input
        type="color"
        positive={fieldInfo.format == 'positiveNum'}
        rows='auto'
        {...basicProps}
        required={field._field_required}
        nomargin
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}

function FieldMkd(props) {
    const { field, locale, template, model, state, onChange, fieldInfo, code, lang, disabled } = props
    const basicProps = { onChange, locale, lang, disabled }
    const defaultValue = model[fieldInfo.sysName]

    return <React.Fragment>
        <Input
            type='markdown'
            onChange={onChange}
            required={field._field_required}
            edit
            locale={locale}
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
            disabled={disabled}
        />
    </React.Fragment>
}

function FieldHTML(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { onChange, locale }
    const defaultValue = model[fieldInfo.sysName]

    const [cmValue, setCmValue] = useState("yay") //defaultValue || (field.defaultValueOn && field.defaultValue))
    const [preview, setPreview] = useState(false)

    return <div className={styles.htmlPreview}>
        {
            !preview ? <div onClick={() => setPreview(true)} className={`${styles.htmlShowPreview} icon icon-view small`}>Show preview</div> :
                <div onClick={() => setPreview(false)} className={`${styles.htmlHidePreview} icon icon-hide small`}>Hide preview</div>
        }
        {
            preview ?
                <div style={{ paddingTop: 20 }}>
                    <InnerHTML allowRerender={true} html={defaultValue} />
                </div>
                : <Input
                    type='textarea'
                    onChange={onChange}
                    disabled={disabled}
                    required={field._field_required}
                    code
                    locale={locale}
                    rows='auto'
                    label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                    // label={fieldInfo.name || fieldInfo.sysName}
                    description={field._field_add_description && template(field._field_description_text)}
                    tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                    nomargin
                    defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
                />
        }
    </div>
}

function FieldFile(props) {
    const { field, locale, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { onChange, locale }
    const defaultValue = model[fieldInfo.sysName]

    // return <div>???</div>

    return <FileUpload
        onChange={onChange}
        //allowUpload={field.fileUpload}
        locale={locale}
        maxFiles={fieldInfo.formatOptions ? fieldInfo.formatOptions.maxFiles : undefined}
        accept={fieldInfo.formatOptions ? fieldInfo.formatOptions.accept : undefined}
        edit
        disabled={disabled}
        required={field._field_required}
        allowUpload
        multiple={fieldInfo.format == 'multipleFiles' || fieldInfo.format == 'multipleImages'}
        host='/api/upload'
        images={fieldInfo.format == 'image' || fieldInfo.format == 'multipleImages'}
        nomargin
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        // label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={defaultValue}
    />
}

function FieldDate(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { onChange, locale }
    const defaultValue = model[fieldInfo.sysName]

    return <Input type='date'
        timeConstraints={fieldInfo.formatOptions && fieldInfo.formatOptions.timeConstraints}
        dateFormat={fieldInfo.formatOptions ? fieldInfo.formatOptions.dateFormat : 'DD/MM/Y '}
        timeFormat={fieldInfo.formatOptions ? fieldInfo.formatOptions.timeFormat : 'HH:mm'}
        locale={fieldInfo.formatOptions ? fieldInfo.formatOptions.dateLocale : 'en-gb'}
        utc={fieldInfo.formatOptions ? fieldInfo.formatOptions.isUTC == 'true' : true}
        validWeekDays={fieldInfo.formatOptions ? fieldInfo.formatOptions.validWeekDays : null}
        onChange={onChange}
        required={field._field_required}
        nomargin
        // debug
        disabled={disabled}
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        // label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={defaultValue}
    />
}

function FieldJson(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { onChange, locale }

    const defaultValue = model[fieldInfo.sysName]

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
        {fieldInfo && !fieldInfo.format &&
            <Input type='json'
                onChange={onChange}
                rows='auto'
                disabled={disabled}
                required={field._field_required}
                nomargin
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                defaultValue={(model[fieldInfo.sysName] && stringifyJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue)}
            />}

        {fieldInfo && fieldInfo.format == 'checkboxes' &&
            <Input type='checkboxGroup'
                required={field._field_required}
                nomargin
                disabled={disabled}
                onChange={value => onChange(JSON.stringify(value))}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                customOptionType={fieldInfo.formatOptions.customOptionType}
                customOptionLabel={fieldInfo.formatOptions.customOptionLabel}
                customOptionPlaceholder={fieldInfo.formatOptions.customOptionPlaceholder}
                options={fieldInfo.formatOptions.multipleChoice}
                customOption={fieldInfo.formatOptions.customOption}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue) || {}}
            />}

        {fieldInfo && fieldInfo.format == 'geo' &&
            <div style={{ marginBottom: 22 }}>
                {!_.get(fieldInfo, 'formatOptions.mapToken') ?
                    <div>Map token is not set (go to data structure fieldInfos configurations)</div>
                    :
                    <FpsMap
                        // mapRefreshOff={mapRefreshOff}
                        edit
                        disabled={disabled}
                        required={field._field_required}
                        nomargin
                        oneMarker={_.get(fieldInfo, 'formatOptions.oneMarker')}
                        height={_.get(fieldInfo, 'formatOptions.height') || 400}
                        maptoken={_.get(fieldInfo, 'formatOptions.mapToken')}
                        mapStyle={_.get(fieldInfo, 'formatOptions.mapColour')}
                        onChange={value => onChange(JSON.stringify(value))}
                        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                        // label={fieldInfo.name || fieldInfo.sysName}
                        defaultValue={(defaultValue && parseJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue) || {}}
                    />}

            </div>}

        {fieldInfo && fieldInfo.format == 'radioOptions' &&
            <Input type='radioJson'
                onChange={value => onChange(JSON.stringify(value))}
                required={field._field_required}
                nomargin
                disabled={disabled}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                customOptionType={fieldInfo.formatOptions.customOptionType}
                customOptionLabel={fieldInfo.formatOptions.customOptionLabel}
                customOptionPlaceholder={fieldInfo.formatOptions.customOptionPlaceholder}
                options={fieldInfo.formatOptions.multipleChoice}
                customOption={fieldInfo.formatOptions.customOption}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue) || {}}
            />}

        {fieldInfo && fieldInfo.format == 'keyValue' &&
            <Input type='optionsHandler'
                onChange={value => onChange(JSON.stringify(value))}
                required={field._field_required}
                nomargin
                disabled={disabled}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                objectStructure={fieldInfo.formatOptions.keyValue ?
                    [fieldInfo.formatOptions.keyValue.key, fieldInfo.formatOptions.keyValue.value]
                    : ['key', 'value']}
                defaultValue={(defaultValue && parseJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue) || {}}
            />}

        {fieldInfo && fieldInfo.format == 'slider' && fieldInfo.formatOptions.range &&
            <Input type='slider'
                onChange={value => onChange(JSON.stringify(value))}
                required={field._field_required}
                nomargin
                disabled={disabled}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                defaultValue={(defaultValue && parseJson(defaultValue)) || ((fieldInfo.defaultValueOn && fieldInfo.defaultValue) ? { firstValue: fieldInfo.defaultValue.firstValue } :
                    {
                        firstValue: fieldInfo.formatOptions.range ? Math.floor((fieldInfo.formatOptions.range.max - fieldInfo.formatOptions.range.min) * 0 + fieldInfo.formatOptions.range.min) : null
                    })
                }
                min={fieldInfo.formatOptions.range && fieldInfo.formatOptions.range.min}
                max={fieldInfo.formatOptions.range && fieldInfo.formatOptions.range.max}
                step={fieldInfo.formatOptions.range && fieldInfo.formatOptions.range.step}
                unitName={fieldInfo.formatOptions.unitName}
            />}
        {fieldInfo && fieldInfo.format == "slider" && !fieldInfo.formatOptions.range &&
            <div style={{ marginBottom: 24 }}>{`Slider "${fieldInfo.content || fieldInfo.id}" is not configured`}</div>
        }
        {fieldInfo && fieldInfo.format == "rangeSlider" && !fieldInfo.formatOptions.range &&
            <div style={{ marginBottom: 24 }}>{`Range slider "${fieldInfo.content || fieldInfo.id}" is not configured`}</div>
        }
        {fieldInfo && fieldInfo.format == "rangeSlider" && fieldInfo.formatOptions.range &&
            <Input type='range'
                onChange={value => onChange && onChange(JSON.stringify(value))}
                required={field._field_required}
                nomargin
                disabled={disabled}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                defaultValue={(defaultValue && parseJson(defaultValue)) || ((fieldInfo.defaultValueOn && fieldInfo.defaultValue) ? fieldInfo.defaultValue :
                    {
                        firstValue: Math.floor((fieldInfo.formatOptions.range.max - fieldInfo.formatOptions.range.min) * 0 + fieldInfo.formatOptions.range.min),
                        secondValue: Math.floor((fieldInfo.formatOptions.range.max - fieldInfo.formatOptions.range.min) * 1 + fieldInfo.formatOptions.range.min)
                    })
                }
                min={fieldInfo.formatOptions.range && fieldInfo.formatOptions.range.min}
                max={fieldInfo.formatOptions.range && fieldInfo.formatOptions.range.max}
                step={fieldInfo.formatOptions.range && fieldInfo.formatOptions.range.step}
                unitName={fieldInfo.formatOptions.unitName}
            />}
    </React.Fragment>
}

function FieldBoolean(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, disabled } = props
    const basicProps = { onChange, locale }

    const getBooleanDefaultValue = defVal => {
        if (typeof defVal == 'string') { return defVal }
        if (typeof defVal == 'undefined') { return 'undefined' }
        if (defVal) { return 'true' } else { return 'false' }
    }
    return <Input type='radio'
        disabled={disabled}
        options={[
            { value: 'true', label: !fieldInfo.formatOptions ? 'true' : fieldInfo.formatOptions.booleanOptions && fieldInfo.formatOptions.booleanOptions[0] ? fieldInfo.formatOptions.booleanOptions[0] : 'true' },
            { value: 'false', label: !fieldInfo.formatOptions ? 'false' : fieldInfo.formatOptions.booleanOptions && fieldInfo.formatOptions.booleanOptions[1] ? fieldInfo.formatOptions.booleanOptions[1] : 'false' }
        ]}
        onChange={onChange}
        required={field._field_required}
        nomargin
        locale={locale}
        // label={field.content || field.id}
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        // label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={getBooleanDefaultValue(model[fieldInfo.sysName])}
    />
}

export function FieldLink(props) {

    const { field, locale, template, model, state, setState, refresh, onChange, fieldInfo, code, callEndpoint, disabled } = props
    const basicProps = { onChange, locale, disabled }

    const [firstLoad, setFirstLoad] = useState(false)
    const [options, setOptions] = useState([])
    const [currentParams, setCurrentParams] =
        useState(_.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty))
    const params = _.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty)
    const [error, setError] = useState("")

    const refreshOptions = (finish, filter, value, resetValue) => {
        if (!field._field_arrayLink_endpoint) { return; }
        if (field._field_link_type !== "radio" &&
            field._field_link_type !== "radioImages" &&
            field._field_link_type !== "complexSelect" &&
            field._field_link_type !== "tags" &&
            field._field_link_type !== "select") {
            return;
        }
        let reqParams = params
        reqParams = { ...reqParams, pageSize: field._field_link_pageSize || 10 }
        reqParams = value && value.length > 0 ? { ...reqParams, _value: value.key || value } : reqParams
        reqParams = filter ? { ...reqParams, _filter: filter } : reqParams

        setCurrentParams(params)
        callEndpoint(field._field_arrayLink_endpoint, reqParams, finish, data => {
            // console.log("finish")
            // console.log(data)
            // механизм сброса если из-за новых параметров среди опций нет значения:
            const currentValue = model[fieldInfo.sysName]
            if (resetValue && (currentValue || currentValue == 0)) {
                if (!_.some(data, { key: currentValue }) && field._field_link_reset) {
                    onChange && onChange(null)
                }
            }

            if (field._field_link_saveQuantity && field._field_link_saveQuantity_Field) {
                const fieldName = field._field_link_saveQuantity_Field.substring(9)
                if (state[fieldName] !== data.length) { setState({ ...state, [fieldName]: data.length }) }
            }

            setOptions(data)
        }, err => {
            setError(err.msg)
        })
    }

    useEffect(i => {
        if (!_.isEqual(currentParams, params)
            && field._field_link_type !== "select"
            && field._field_link_type !== "complexSelect"
        ) {
            // у селекта другой механизм обновления опций — функция дергается прямо из компонента
            refreshOptions(undefined, undefined, undefined, true)
        }
    }, [params]) // update options when request params are changed

    useEffect(() => {
        refresh && refresh !== 0 && refreshOptions(undefined, undefined, model[fieldInfo.sysName])
    }, [refresh])

    useEffect(() => {
        if (
            (field._field_link_type == "radio"
                || field._field_link_type == "radioImages"
                || field._field_link_type == "tags"
            )
            && !firstLoad) {
            setFirstLoad(true);
            refreshOptions()
        }
    }, [])


    if (field._field_link_type == "select") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for the dropdown is not configured.</div>
        return <div><Input type="dinamicSelect"
            onLoad={refreshOptions}
            required={field._field_required}
            bottomSelect={field._field_link_bottomSelect}
            //debug
            refresh={refresh}
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            // label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            defaultValue={model[fieldInfo.sysName]}
            callParams={params}
            nomargin
            {...basicProps}
        />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    if (field._field_link_type == "complexSelect") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for the dropdown is not configured.</div>
        return <div><Input type="dinamicComplexSelect"
            onLoad={refreshOptions}
            required={field._field_required}
            bottomSelect={field._field_link_bottomSelect}
            //debug
            refresh={refresh}
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            // label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            defaultValue={model[fieldInfo.sysName]}
            callParams={params}
            nomargin
            {...basicProps}
        />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    if (field._field_link_type == "tags") {
        const categories =
            options.map(i => {
                return {
                    id: i.key,
                    text: i.value,
                    clickable: true
                }
            })

        const filterTags =
        {
            maxWidth: field._field_arrayLink_tags_width || 300,
            addButton: false,
            selectable: true,
            data: categories
        }

        const maxTags = 1

        const changeTags = (tagId, action) => {
            console.log(action + ' - ' + tagId)
            function manipulateArray(array, object) {
                if (!_.includes(array, object)) {
                    array.push(object)
                }
                else {
                    array = _.without(array, object);
                }
                return array;
            }
            let saveValue = model[fieldInfo.sysName] ? model[fieldInfo.sysName].split(",") : []
            let array = _.takeRight(manipulateArray(saveValue, tagId), maxTags)
            onChange(array.join(","))
        }

        const transfromValue = val => {
            if (!val) return {}
            const array = val ? val.split(",") : []
            return _.zipObject(array, _.fill(Array(array.length), true))
        }

        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for radio buttons is not configured.</div>
        return <div>
            <Input type="tags"

                FpsForm2
                tags={filterTags}
                onClick={tagId => changeTags(tagId, 'onClick')}
                onResetSelect={tagId => changeTags(tagId, 'onResetSelect')}

                required={field._field_required}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                defaultValue={transfromValue(model[fieldInfo.sysName])}
                nomargin
                locale={locale}
                disabled={disabled}
            // {...basicProps}
            />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    if (field._field_link_type == "radio") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for radio buttons is not configured.</div>
        return <div><Input type="radio"
            options={options.map(i => {
                return {
                    value: i.key,
                    label: i.value
                }
            })}
            required={field._field_required}
            //description={options.length}
            horizontal={field._field_link_radio_layout == "horizontal"}
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            // label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            defaultValue={model[fieldInfo.sysName]}
            nomargin
            {...basicProps}
        />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    if (field._field_link_type == "radioImages") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for radio buttons is not configured.</div>
        return <div><Input type="selectImages"
            radio
            options={options.map(i => {
                return {
                    key: i.key,
                    value: i.value
                }
            })}
            required={field._field_required}
            imageWidth={field._field_arrayLink_images_width}
            imageHeight={field._field_arrayLink_images_height}
            resize={field._field_arrayLink_images_resize}
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            // label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            defaultValue={model[fieldInfo.sysName]}
            nomargin
            {...basicProps}
        />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    return <Input
        type={`${field.format == 'password' ? 'password' : 'textarea'}`}
        rows='auto'
        required={field._field_required}
        code={code}
        disabled={disabled}
        nomargin
        locale={locale}
        onChange={onChange}
        //required={field.required}
        //placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        // label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}

function FieldArrayLink(props) {

    const { field, locale, template, model, state, setState, refresh, onChange, fieldInfo, code, callEndpoint, disabled } = props
    const basicProps = { onChange, locale, disabled }

    const [firstLoad, setFirstLoad] = useState(false)
    const [options, setOptions] = useState([])
    const [currentParams, setCurrentParams] =
        useState(_.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty))
    const params = _.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty)
    const [error, setError] = useState("")

    const refreshOptions = (finish, filter, value, resetValue) => {
        if (!field._field_arrayLink_endpoint) { return; }
        if (field._field_arrayLink_type !== "checkboxes"
            && field._field_arrayLink_type !== "select"
            && field._field_arrayLink_type !== "complexSelect"
            && field._field_arrayLink_type !== "tags"
            && field._field_arrayLink_type !== "userList"
            && field._field_arrayLink_type !== "checkboxImages"
        ) {
            return;
        }
        let reqParams = filter ? { _filter: filter, ...params } : params
        reqParams = { ...reqParams, pageSize: field._field_link_pageSize || 10 }
        reqParams = value ? { ...reqParams, _value: value.key || value } : reqParams
        setCurrentParams(params)
        callEndpoint(field._field_arrayLink_endpoint, reqParams, finish, data => {
            // console.log("finish")
            // console.log(data)

            // механизм сброса если из-за новых параметров среди опций нет значения:
            const currentValue = model[fieldInfo.sysName]
            if (resetValue && (currentValue || currentValue == 0)) {
                if (!_.some(data, { key: currentValue }) && field._field_link_reset) {
                    onChange && onChange(null)
                }
            }
            if (field._field_link_saveQuantity && field._field_link_saveQuantity_Field) {
                const fieldName = field._field_link_saveQuantity_Field.substring(9)
                if (state[fieldName] !== data.length) { setState({ ...state, [fieldName]: data.length }) }
            }
            setOptions(_.uniqBy(data, 'key'))
        }, err => {
            setError(err.msg)
        }, fieldInfo.link)
    }

    // console.log("== options ==")
    // console.log(options)

    useEffect(i => {
        if (!_.isEqual(currentParams, params)
            && field._field_arrayLink_type !== "select"
            && field._field_arrayLink_type !== "complexSelect"
        ) {
            // у селекта другой механизм обновления опций — функция дергается прямо из компонента
            refreshOptions(undefined, undefined, undefined, true)
        }
    }, [params]) // update options when request params are changed

    useEffect(() => {
        refresh && refresh !== 0 && refreshOptions(undefined, undefined, model[fieldInfo.sysName])
    }, [refresh])

    useEffect(() => {
        if ((
            (field._field_arrayLink_type == "checkboxes")
            || field._field_arrayLink_type == "checkboxImages"
            || field._field_arrayLink_type == "userList"
            || field._field_arrayLink_type == "tags"
        )
            && !firstLoad
        ) {
            setFirstLoad(true);
            refreshOptions(undefined, null, model[fieldInfo.sysName])
        }
    }, [])


    if (field._field_arrayLink_type == "tags") {
        const categories =
            options.map(i => {
                return {
                    id: i.key,
                    text: i.value,
                    clickable: true
                }
            })

        const filterTags =
        {
            maxWidth: field._field_arrayLink_tags_width || 300,
            addButton: false,
            selectable: true,
            data: categories
        }

        const maxTags = field._field_arrayLink_tags_count || 1000

        const changeTags = (tagId, action) => {
            console.log(action + ' - ' + tagId)
            function manipulateArray(array, object) {
                if (!_.includes(array, object)) {
                    array.push(object)
                }
                else {
                    array = _.without(array, object);
                }
                return array;
            }
            let saveValue = model[fieldInfo.sysName] ? model[fieldInfo.sysName].split(",") : []
            let array = _.takeRight(manipulateArray(saveValue, tagId), maxTags)
            onChange(array.join(","))
        }

        const transfromValue = val => {
            if (!val) return {}
            const array = val ? val.split(",") : []
            return _.zipObject(array, _.fill(Array(array.length), true))
        }

        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for radio buttons is not configured.</div>
        return <div>
            <Input type="tags"
                FpsForm2
                onlySelected={field._field_arrayLink_tags_onlySelected}
                tags={filterTags}
                onClick={tagId => field._field_arrayLink_tags_onlySelected ? undefined : changeTags(tagId, 'onClick')}
                onResetSelect={tagId => changeTags(tagId, 'onResetSelect')}

                required={field._field_required}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                defaultValue={transfromValue(model[fieldInfo.sysName])}
                nomargin
                disabled={disabled}
                locale={locale}
            // {...basicProps}
            />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    if (field._field_arrayLink_type == "checkboxImages") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for radio buttons is not configured.</div>
        return <div>
            <Input type="selectImages"
                disabled={disabled}
                options={
                    options.map(i => {
                        return {
                            key: i.key,
                            value: i.value
                        }
                    })
                    // [{ key: '1', value: "https://api.alfa.directual.com/fileUploaded/fpsform2/0037b933-27bc-455b-82d8-afb0cfc011a6.jpeg" },
                    // { key: '2', value: "https://api.alfa.directual.com/fileUploaded/fpsform2/0037b933-27bc-455b-82d8-afb0cfc011a6.jpeg" }]
                }
                required={field._field_required}
                imageWidth={field._field_arrayLink_images_width}
                imageHeight={field._field_arrayLink_images_height}
                resize={field._field_arrayLink_images_resize}
                //description={options.length}
                label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
                // label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
                defaultValue={model[fieldInfo.sysName]}
                nomargin
                {...basicProps}
            />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    // return <div><pre><code>{JSON.stringify(options, 0, 3)}</code></pre></div>

    if (field._field_arrayLink_type == "select") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for the dropdown is not configured.</div>
        return <div><Input type="dinamicMultiSelect"
            onLoad={refreshOptions}
            required={field._field_required}
            bottomSelect={field._field_link_bottomSelect}
            refresh={refresh}
            //debug
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            // label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            callParams={params}
            nomargin
            disabled={disabled}
            defaultValue={(model[fieldInfo.sysName] || "").split(",").filter(i => !!i)}
            onChange={value => {
                value ? onChange(value.join(",")) : onChange(null)
            }}
            locale={locale}
        />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }



    if (field._field_arrayLink_type == "checkboxes") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for checkboxes is not configured.</div>
        return <div><Input type="checkboxGroup"
            options={options.map(i => {
                return {
                    value: i.key,
                    label: i.value
                }
            })}
            required={field._field_required}
            disabled={disabled}
            //description={options.length}
            horizontal={field._field_arrayLink_checkbox_type == "horizontal"}
            label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
            // label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
            nomargin
            defaultValue={_.mapValues(_.keyBy((model[fieldInfo.sysName] || "").split(",")), () => true)}
            onChange={value => {
                onChange(_.keys(_.pickBy(value, (val, key) => key !== '')).join(","))
            }}
            locale={locale}
        />
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    if (field._field_arrayLink_type == "userList") {
        const users = options
            .filter(i => _.includes((model[fieldInfo.sysName] || "").split(","), i.key))
            .map(i => {
                return {
                    value: i.key,
                    label: i.value,
                    userpic: i.userpic,
                    position: i.position
                }
            }) || []

        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for user list is not configured.</div>
        return <div className={styles.userList}>
            {users.map(user => <div className={styles.userListItem}>
                <div className={styles.userListItemPicture}>
                    <img src={user.userpic} />
                </div>
                <div className={styles.userListIteInfo}>
                    <div className={styles.userListItemName}>{user.label || user.value}</div>
                    <div className={styles.userListItemPosition}>{user.position}</div>
                </div>
            </div>)}
            {/* <Input type="checkboxGroup"
            options={options.map(i => {
                return {
                    value: i.key,
                    label: i.value
                }
            })}
            required={field._field_required}
            disabled={disabled}
            //description={options.length}
            horizontal={field._field_arrayLink_checkbox_type == "horizontal"}
            label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            nomargin
            defaultValue={_.mapValues(_.keyBy((model[fieldInfo.sysName] || "").split(",")), () => true)}
            onChange={value => {
                onChange(_.keys(_.pickBy(value, (val, key) => key !== '')).join(","))
            }}
            locale={locale}
        /> */}
            {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                {error}
            </Hint>}
        </div>
    }

    return <Input
        type={`${field.format == 'password' ? 'password' : 'textarea'}`}
        rows='auto'
        required={field._field_required}
        code={code}
        disabled={disabled}
        nomargin
        locale={locale}
        onChange={onChange}
        //required={field.required}
        //placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={!field._field_hide_label ? (fieldInfo.name || fieldInfo.sysName) : null}
        // label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        tooltip={field._field_add_tooltip && template(field._field_tooltip_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}