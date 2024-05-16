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

export default function FpsForm2Input(props) {
    const { field, template, dict, lang, loading, editModel, model, data, state, locale } = props

    const fieldInfo = _.find(_.get(data, "fileds"), { sysName: field._field }) || {}
    const type = `${fieldInfo.dataType}${fieldInfo.format ? `_${fieldInfo.format}` : ''}`

    switch (type) {
        case 'json':
        case 'json_checkboxes':
        case 'json_slider':
        case 'json_rangeSlider':
        case 'json_radioOptions':
        case 'json_keyValue':
        case 'json_geo':
            return <FieldJson {...props} fieldInfo={fieldInfo} />
        case 'file_multipleFiles':
        case 'file_multipleImages':
        case 'file_image':
        case 'file':
            return <FieldFile {...props} fieldInfo={fieldInfo} />
        case 'date':
            return <FieldDate {...props} fieldInfo={fieldInfo} />
        case 'boolean':
            return <FieldBoolean {...props} fieldInfo={fieldInfo} />
        case 'link':
            return <FieldLink {...props} fieldInfo={fieldInfo} />
        case 'arrayLink':
            return <FieldArrayLink {...props} fieldInfo={fieldInfo} />
        case 'string_markdown':
            return <FieldMkd {...props} fieldInfo={fieldInfo} />
        case 'string_html':
            return <FieldHTML {...props} fieldInfo={fieldInfo} />
        case 'string_color':
            return <FieldColor {...props} fieldInfo={fieldInfo} />
        default:
            return <FieldText {...props} fieldInfo={fieldInfo} />
    }
}


function FieldText(props) {

    const { field, locale, lang, template, model, state, onChange, fieldInfo, code } = props
    const basicProps = { onChange, locale, lang }

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

    if (field._input_type == "state") {

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
                options={options}
                label={field._edit_state_input_label || field._state_field}
                defaultValue={_.get(state, field._state_field)}
                {...basicProps}
            />
        }
        if (field._edit_state_type == "multiselect") {
            return <Input nomargin
                type="multiselect"
                options={options}
                label={field._edit_state_input_label || field._state_field}
                defaultValue={_.get(state, field._state_field).split(",")}
                {...basicProps}
                onChange={value => (value && value.length) ? onChange(value.join(",")) : onChange("")}
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
            />
        }
        return <Input nomargin
            type="textarea"
            rows='auto'
            options={field._edit_state_options}
            label={field._edit_state_input_label || field._state_field}
            defaultValue={_.get(state, field._state_field)}
            {...basicProps}
        />
    }

    return <Input
        type={fieldInfo.dataType !== 'string' ? fieldInfo.dataType : `${fieldInfo.format == 'password' ? 'password' :
            fieldInfo.format == 'phone' ? 'phone' :
                fieldInfo.format == 'email' ? 'email' : 'textarea'}`}
        positive={fieldInfo.format == 'positiveNum'}
        rows='auto'
        required={field._field_required}
        {...basicProps}
        nomargin
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}

function FieldColor(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
    const basicProps = { onChange, locale, lang }

    return <Input
        type="color"
        positive={fieldInfo.format == 'positiveNum'}
        rows='auto'
        {...basicProps}
        required={field._field_required}
        nomargin
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}

function FieldMkd(props) {
    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
    const basicProps = { onChange, locale, lang }
    const defaultValue = model[fieldInfo.sysName]

    return <React.Fragment>
        <Input
            type='markdown'
            onChange={onChange}
            required={field._field_required}
            edit
            locale={locale}
            label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
        />
    </React.Fragment>
}

function FieldHTML(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
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
                    required={field._field_required}
                    code
                    locale={locale}
                    rows='auto'
                    label={fieldInfo.name || fieldInfo.sysName}
                    description={field._field_add_description && template(field._field_description_text)}
                    nomargin
                    defaultValue={defaultValue || (field.defaultValueOn && field.defaultValue)}
                />
        }
    </div>
}

function FieldFile(props) {
    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
    const basicProps = { onChange, locale }
    const defaultValue = model[fieldInfo.sysName]

    return <FileUpload
        onChange={onChange}
        //allowUpload={field.fileUpload}
        locale={locale}
        edit
        required={field._field_required}
        allowUpload
        multiple={fieldInfo.format == 'multipleFiles' || fieldInfo.format == 'multipleImages'}
        host='/api/upload'
        images={fieldInfo.format == 'image' || fieldInfo.format == 'multipleImages'}
        nomargin
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={defaultValue}
    />
}

function FieldDate(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
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
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={defaultValue}
    />
}

function FieldJson(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
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
                required={field._field_required}
                nomargin
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                defaultValue={(model[fieldInfo.sysName] && stringifyJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue)}
            />}

        {fieldInfo && fieldInfo.format == 'checkboxes' &&
            <Input type='checkboxGroup'
                required={field._field_required}
                nomargin
                onChange={value => onChange(JSON.stringify(value))}
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
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
                        required={field._field_required}
                        nomargin
                        oneMarker={_.get(fieldInfo, 'formatOptions.oneMarker')}
                        height={_.get(fieldInfo, 'formatOptions.height') || 400}
                        maptoken={_.get(fieldInfo, 'formatOptions.mapToken')}
                        mapStyle={_.get(fieldInfo, 'formatOptions.mapColour')}
                        onChange={value => onChange(JSON.stringify(value))}
                        label={fieldInfo.name || fieldInfo.sysName}
                        defaultValue={(defaultValue && parseJson(defaultValue)) || (fieldInfo.defaultValueOn && fieldInfo.defaultValue) || {}}
                    />}

            </div>}

        {fieldInfo && fieldInfo.format == 'radioOptions' &&
            <Input type='radioJson'
                onChange={value => onChange(JSON.stringify(value))}
                required={field._field_required}
                nomargin
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
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
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
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
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
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
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
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

    const { field, locale, template, model, state, onChange, fieldInfo, code } = props
    const basicProps = { onChange, locale }

    const getBooleanDefaultValue = defVal => {
        if (typeof defVal == 'string') { return defVal }
        if (typeof defVal == 'undefined') { return 'undefined' }
        if (defVal) { return 'true' } else { return 'false' }
    }
    return <Input type='radio'
        options={[
            { value: 'true', label: !fieldInfo.formatOptions ? 'true' : fieldInfo.formatOptions.booleanOptions && fieldInfo.formatOptions.booleanOptions[0] ? fieldInfo.formatOptions.booleanOptions[0] : 'true' },
            { value: 'false', label: !fieldInfo.formatOptions ? 'false' : fieldInfo.formatOptions.booleanOptions && fieldInfo.formatOptions.booleanOptions[1] ? fieldInfo.formatOptions.booleanOptions[1] : 'false' }
        ]}
        onChange={onChange}
        required={field._field_required}
        nomargin
        locale={locale}
        // label={field.content || field.id}
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={getBooleanDefaultValue(model[fieldInfo.sysName])}
    />
}

function FieldLink(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, callEndpoint } = props
    const basicProps = { onChange, locale }

    const [firstLoad, setFirstLoad] = useState(false)
    const [options, setOptions] = useState([])
    const [currentParams, setCurrentParams] =
        useState(_.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty))
    const params = _.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty)
    const [error, setError] = useState("")

    const refreshOptions = (finish, filter, value) => {
        if (!field._field_arrayLink_endpoint) { return; }
        if (field._field_link_type !== "radio" &&
            field._field_link_type !== "radioImages" &&
            field._field_link_type !== "tags" &&
            field._field_link_type !== "select") {
            return;
        }
        let reqParams = filter ? { _filter: filter, ...params } : params
        reqParams = { ...reqParams, pageSize: field._field_link_pageSize || 10 }
        reqParams = value ? { ...reqParams, _value: value.key || value } : reqParams
        setCurrentParams(params)
        callEndpoint(field._field_arrayLink_endpoint, reqParams, finish, data => {
            // console.log("finish")
            // console.log(data)
            setOptions(data)
        }, err => {
            setError(err.msg)
        })
    }

    useEffect(i => {
        if (!_.isEqual(currentParams, params) && field._field_link_type !== "select") {
            // у селекта другой механизм обновления опций — функция дергается прямо из компонента
            refreshOptions()
        }
    }, [params]) // update options when request params are changed


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

    // return <div><pre><code>{JSON.stringify(options, 0, 3)}</code></pre></div>

    if (field._field_link_type == "select") {
        if (!field._field_arrayLink_endpoint) return <div>
            <div className={styles.form2label}>{fieldInfo.name || fieldInfo.sysName}</div>
            Endpoint for the dropdown is not configured.</div>
        return <div><Input type="dinamicSelect"
            onLoad={refreshOptions}
            required={field._field_required}
            //debug
            label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
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
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                defaultValue={transfromValue(model[fieldInfo.sysName])}
                nomargin
                locale={locale}
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
            label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
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
            label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
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
        nomargin
        locale={locale}
        onChange={onChange}
        //required={field.required}
        //placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}

function FieldArrayLink(props) {

    const { field, locale, template, model, state, onChange, fieldInfo, code, callEndpoint } = props
    const basicProps = { onChange, locale }

    const [firstLoad, setFirstLoad] = useState(false)
    const [options, setOptions] = useState([])
    const [currentParams, setCurrentParams] =
        useState(_.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty))
    const params = _.omitBy(_.mapValues(field._field_arrayLink_endpoint_params || {}, i => template("{{" + i + "}}")), _.isEmpty)
    const [error, setError] = useState("")

    const refreshOptions = (finish, filter, value) => {
        if (!field._field_arrayLink_endpoint) { return; }
        if (field._field_arrayLink_type !== "checkboxes"
            && field._field_arrayLink_type !== "select"
            && field._field_arrayLink_type !== "tags"
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
            setOptions(data)
        }, err => {
            setError(err.msg)
        }, fieldInfo.link)
    }

    useEffect(i => {
        if (!_.isEqual(currentParams, params) && field._field_arrayLink_type !== "select") {
            // у селекта другой механизм обновления опций — функция дергается прямо из компонента
            refreshOptions()
        }
    }, [params]) // update options when request params are changed

    useEffect(() => {
        if ((
            (field._field_arrayLink_type == "checkboxes")
            || field._field_arrayLink_type == "checkboxImages"
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
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
                defaultValue={transfromValue(model[fieldInfo.sysName])}
                nomargin
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
                label={fieldInfo.name || fieldInfo.sysName}
                description={field._field_add_description && template(field._field_description_text)}
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
            // debug
            label={fieldInfo.name || fieldInfo.sysName}
            description={field._field_add_description && template(field._field_description_text)}
            callParams={params}
            nomargin
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
        nomargin
        locale={locale}
        onChange={onChange}
        //required={field.required}
        //placeholder={`${placeholder == "true" ? `${field.content}${field.required ? '*' : ''}` : ''}`}
        label={fieldInfo.name || fieldInfo.sysName}
        description={field._field_add_description && template(field._field_description_text)}
        defaultValue={model[fieldInfo.sysName]}
    />
}