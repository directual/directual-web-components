import React, { useState } from "react"
import styles from './form2.module.css'
import { FormSection } from "./FpsForm"
import InnerHTML from 'dangerously-set-html-content'
import Hint from '../../hint/hint'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'
import Input from '../input/input'
import { InputRow } from '../input/input'
import { InputForm } from './InputForm'
import FpsForm2Input from './FpsForm2Input'
import FpsForm2Action from './FpsForm2Action'
import _ from 'lodash'

export default function FormElement(props) {
    const { element, template, checkHidden } = props

    let render
    switch (element.type) {
        case "subheader":
            render = <ElementSubheader {...props} />
            break;
        case "text":
            render = <ElementText {...props} />
            break;
        case "hint":
            render = <ElementHint {...props} />
            break;
        case "submit":
            render = <ElementSubmit {...props} />
            break;
        case "input":
            render = <ElementInput {...props} />
            break;
        case "action":
            render = <ElementAction {...props} checkHidden={checkHidden} />
            break;
        case "redirect":
            render = <ElementRedirect {...props} />
            break;
        default:
            render = <div>??</div>
            break;
    }

    return <div className={`${styles.elementWrapper} D_FPS_FORM2_ELEMENT_WRAPPER`}>{render}</div>
}

function ElementInput(props) {
    const { element, template, dict, lang, loading, setState, editModel, model, data, state, locale } = props

    const inputs = _.get(element, "_input_fields") || []

    return <InputRow column={_.get(element, "_input_fields_in_a_row_column") == "column"}>
        {inputs.filter(field => !field._field_hidden).map(field => (field._field || field._state_field) ? <FpsForm2Input
            {...props}
            key={field.id}
            field={field}
            onChange={value => {
                field._input_type == "state" ?
                    setState({ ...state, [field._state_field]: value })
                    :
                    editModel(field._field)(value)
            }}
        /> : <div>Field is not configured</div>
        )}
    </InputRow>
}

function ElementAction(props) {
    const { element, templateState, template, callEndpointPOST, setState, setModel, model, data, state } = props
    const [loading, setLoading] = useState(false)

    const action_list = _.get(element, "_actions") || []
    const actions = _.get(data, "params.actions")

    const transformObject = array => _.reduce(array, (result, item) => {
        if (!array || array.length == 0) return {};
        const { field, value } = item;
        result[field] = template(value);
        return result;
    }, {});

    const transformState = (array, type) => _.reduce(array, (result, item) => {
        if (!array || array.length == 0) return {};
        const { field, value } = item;
        if (field.substring(0,9) == "FormState" && type == "state") {
            result[field.substring(10)] =  template(value);
        }
        if (field.substring(0,9) !== "FormState" && type == "model") {
            result[field] =  template(value);
        }
        return result;
    }, {});

    const performAction = (action) => {
        if (action.resetModel) {
            setModel({})
        }
        if (action.actionType == "endpoint") {
            const payload = transformObject(action.mapping)
            setLoading(true)
            callEndpointPOST(action.endpoint, payload, (result) => {
                setLoading(false)
                // console.log(result)
            })
        }
        if (action.actionType == "state") {
            const payloadState = transformState(action.stateMapping, "state")
            const payloadModel = transformState(action.stateMapping, "model")
            setState({ ...state, ...payloadState })
            setModel({ ...model, ...payloadModel })
        }
    }

    return <ActionPanel margin={{ left: 1 }}>
        {action_list.map(action => action._action ? <FpsForm2Action
            {...props}
            key={action.id}
            loading={loading}
            setLoading={setLoading}
            actionFormat={action}
            action={_.find(actions, { id: action._action })}
            onPerform={() => performAction(_.find(actions, { id: action._action }))}
        /> : <div>Action is not configured</div>
        )}
    </ActionPanel>
}

function ElementSubheader(props) {
    const { element, template } = props
    const title = template(element.subheaderTitle)
    return <FormSection title={title} />
}

function ElementText(props) {
    const { element, template } = props
    const text = template(element.paraText)
    return text ? <InnerHTML allowRerender={true} html={text} /> : ""
}

function ElementSubmit(props) {
    const { element, template, state, setState, onSubmit, dict, lang } = props
    const [loading, setLoading] = useState(false)
    const submitIcon = element.submitIcon
    const submitLabel = element.submitLabel
    const submit = () => {
        setLoading(true)
        onSubmit(result => {
            setLoading(false)
        })
    }
    return <div>
        {state._submitError && <Hint margin={{ top: 0, bottom: 18 }} error closable onClose={() => setState({ ...state, _submitError: "" })}>
            {state._submitError}
        </Hint>}
        <Button onClick={submit} loading={loading} accent icon={submitIcon}>{submitLabel || dict[lang].form.submit}</Button>
    </div>
}

function ElementHint(props) {
    const { element, template } = props
    const hintText = template(element.hintText)
    const hintTitle = template(element.hintTitle)
    let isOk = element.hintColor == "ok"
    let isError = element.hintColor == "error"
    if (element.hintColor == "useTemplating") {
        const value = template("{{" + element.hintTemplating + "}}")
        if (value == "true") { isOk = true }
        if (value == "false") { isError = true }
    }

    return <Hint
        margin={{ top: 0, bottom: 0 }}
        title={hintTitle}
        ok={isOk}
        error={isError}
    >
        {hintText && <InnerHTML allowRerender={true} html={hintText} />}
    </Hint>
}

function ElementRedirect(props) {
    const { element, template, handleRoute } = props
    
    const url = template(element.redirect_url)
const delay = element.redirect_delay || 0

    setTimeout(()=>{
        handleRoute(url)()
    }, delay * 1000 )

    return <div></div>
}