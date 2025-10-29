import React, { useState, useEffect, useRef } from "react"
import styles from './form2.module.css'
import { FormSection } from "./FpsForm"
import InnerHTML from 'dangerously-set-html-content'
import Hint from '../../hint/hint'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'
import Input from '../input/input'
import { InputRow } from '../input/input'
import { InputForm } from './InputForm'
import { FpsForm2Input, FpsForm2HiddenInput } from './FpsForm2Input'
import FpsForm2Action from './FpsForm2Action'
import FormSteps from './FormSteps'
import _ from 'lodash'
import ElementArray from './FpsForm2arrayLink'

function FormElementComponent(props) {
    const { element, template, params, checkHidden, userDebug, hidden, setModel, handleModalRoute } = props

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
            render = <ElementInput {...props} checkHidden={checkHidden} />
            break;
        case "action":
            render = <ElementAction {...props} checkHidden={checkHidden} />
            break;
        case "redirect":
            render = <ElementRedirect {...props} />
            break;
        case "steps":
            render = <ElementSteps {...props} />
            break;
        case "array":
            render = <ElementArray {...props} checkHidden={checkHidden}/>
            break;
        default:
            render = <div>Element type not found: {element.type}</div>
            break;
    }

    // console.log("element", element) // ОПТИМИЗАЦИЯ: убрал из рендера

    return <div style={hidden && !(_.get(params, "general.debugConditions") && userDebug) ? { display: 'none' } : {}} className={`${styles.elementWrapper} D_FPS_FORM2_ELEMENT_WRAPPER`}>
        <div className={`${(element._conditionalView && _.get(params, "general.debugConditions") && userDebug)
            ? `${styles.debugConditions} ${styles.debugElement}` : ""}
            ${(element._conditionalView && _.get(params, "general.debugConditions") && checkHidden(element, false, false))
                ? `${styles.hideElementDebug}` : ""}
            `}>
            {render}
            {element._conditionalView && _.get(params, "general.debugConditions") && userDebug && <div className={styles.condDebugDetails}>
                <code>
                    <p>Show element if:</p>
                    {checkHidden(element, true, false).name && <p style={{ lineHeight: 1, marginBottom: 10 }}><b>{checkHidden(element, true, false).name}</b></p>}
                    <pre style={{ whiteSpace: 'wrap', fontSize: 14 }}>{checkHidden(element, true, false).conditions}</pre>
                    <p>Result: <b>{checkHidden(element, false, false) ? "🚫 hidden" : "✅ visible"}</b></p>
                    <pre style={{ whiteSpace: 'wrap', fontSize: 14 }}>{checkHidden(element, true, false).result}</pre>
                </code>
            </div>}
        </div>
    </div>
}

// Мемоизируем FormElement для предотвращения ненужных ререндеров
export default React.memo(FormElementComponent)

function ElementSteps(props) {
    const { element, template, state } = props
    return <FormSteps
        {...props}
        type='progress'
        currentStep={state.step}
        filter={template(_.get(element, "_formSteps.settings.filter"))}
        formStepsSettings={element._formSteps}
    />
}

function ElementInput(props) {
    const { element, setState, editModel, state, currentBP } = props

    const inputs = _.get(element, "_input_fields") || []

    return <InputRow column={currentBP == "mobile" || _.get(element, "_input_fields_in_a_row_column") == "column"}>
        {inputs
            .filter(field => !field._field_hidden)
            .map(field => (field._field || field._state_field) ? <FpsForm2Input
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
        {inputs
            .filter(field => field._field_hidden)
            .map(field => (field._field || field._state_field) ? <FpsForm2HiddenInput
                {...props}
                key={field.id}
                field={field}
            // onChange={value => {
            //     field._input_type == "state" ?
            //         setState({ ...state, [field._state_field]: value })
            //         :
            //         editModel(field._field)(value)
            // }}
            /> : <div>Field is not configured</div>
            )}
    </InputRow>
}

function ElementAction(props) {
    const { element, templateState, template, onSubmit, callEndpointPOST, setState, extendedModel,
        setExtendedModel, setModel, model, data, state, originalModel, originalExtendedModel, setOriginalExtendedModel, dict, lang } = props
    const [loading, setLoading] = useState(false)

    const action_list = _.get(element, "_actions") || []
    const actions = _.get(data, "params.actions")
    const fields = _.get(data, "fileds")

    const transformObject = array => _.reduce(array, (result, item) => {
        if (!array || array.length == 0) return {};
        const { field, value } = item;
        result[field] = template(value, true);
        return result;
    }, {});

    const transformState = (array, type) => _.reduce(array, (result, item) => {
        if (!array || array.length == 0) return {};
        const { field, value } = item;
        if (field.substring(0, 9) == "FormState" && type == "state") {
            result[field.substring(10)] = template(value);
        }
        if (field.substring(0, 9) !== "FormState" && type == "model") {
            result[field] = template(value);
        }
        return result;
    }, {});

    const [error, setError] = useState("")

    const performAction = (action, actionFormat, finish) => {
        console.log("performAction")
        console.log(action)
        console.log(actionFormat)

        //finish(true) // я не понял почему мы вызываем finish(true) здесь, ведь это вызывается в onSubmit

        if (actionFormat._action_customRequired &&
            actionFormat._action_customRequired_fields &&
            actionFormat._action_customRequired_fields.length > 0) {
            function excludeNonEmptyValues(obj, keys) {
                const filteredKeys = _.pickBy(obj, (value, key) => {
                    return !_.isEmpty((value || "").toString()); // Exclude keys with non-empty values
                });
                return keys.filter(key => !(key in filteredKeys));
            }
            let emptyFields = excludeNonEmptyValues(model, actionFormat._action_customRequired_fields)

            if (emptyFields.length > 0) {
                emptyFields = emptyFields.map(i => {
                    const fieldName = _.find(fields, { sysName: i }).name
                    return fieldName ? '"' + fieldName + '"' : '"' + i + '"'
                })
                const errMessage = dict[lang].form.emptyRequired + emptyFields.join(", ")
                setError(errMessage)
                return;
            }
        }

        var copyModel = { ...model }
        var copyState = { ...state }
        var copyExtendedModel = { ...extendedModel }

        if (action.discardModel) {
            // console.log("originalModel")
            // console.log(originalModel)
            copyModel = originalModel
            setModel(originalModel)
            copyExtendedModel = originalExtendedModel
            setExtendedModel(originalExtendedModel)
        }

        if (_.get(action, "actionType") == "state" || _.get(action, "actionType") == "endpoint_state" || !_.get(action, "actionType")) {
            const payloadState = transformState(action.stateMapping, "state")
            const payloadModel = transformState(action.stateMapping, "model")
            copyState = { ...copyState, ...payloadState }
            copyModel = { ...copyModel, ...payloadModel }
            copyExtendedModel = { ...copyExtendedModel, ...payloadModel }

            if (action.actionSubmit && _.get(action, "actionType") !== "endpoint_state") { // второе условие для исключения дублирования сабмита
                setLoading(true)
                onSubmit(
                    (res) => {
                        // setState({ ...state, ...payloadState })
                        // setModel({ ...copyModel, ...payloadModel })
                        // setExtendedModel({ ...copyExtendedModel, ...payloadModel })
                        setLoading(false);
                        finish && finish(true);
                        // Сброс модели теперь обрабатывается в самой функции submit через resetModel параметр
                    },
                    true,
                    undefined,
                    true,
                    undefined,
                    { state: copyState, model: { ...model, ...payloadModel } },
                    actionFormat._action_standardRequired,
                    err => {
                        setError(err);
                        err && finish && finish(false);
                        setLoading(false)
                    },
                    action.resetModel
                )
            } else {
                setState(copyState)
                if (action.resetModel) {
                    copyModel = {}
                    copyExtendedModel = {}
                    setModel({})
                    setExtendedModel({})
                } else {
                    setModel(copyModel)
                    setExtendedModel(copyExtendedModel)
                }
                setLoading(false)
            }
        }

        if ((_.get(action, "actionType") == "endpoint" || _.get(action, "actionType") == "endpoint_state" || !_.get(action, "actionType")) && action.endpoint) {
            let payload = transformObject(action.mapping)
            if (action.sendModel) {
                payload = { ...copyModel, ...payload }
            }
            setLoading(true)
            if (action.actionSubmit) {
                console.log("onSubmit")
                onSubmit(
                    (res) => {
                        console.log("finish onSubmit", res)
                        console.log("payload => " + action.endpoint)
                        console.log(payload)
                        callEndpointPOST(action.endpoint, payload, (result) => {
                            setLoading(false)
                            finish && finish(true)
                            console.log("result => " + action.endpoint)
                            console.log(result)
                        })
                    },
                    true,
                    undefined,
                    true,
                    undefined,
                    { state: copyState, model: copyModel },
                    actionFormat._action_standardRequired,
                    err => {
                        setError(err);
                        err && finish && finish(false);
                        setLoading(false)
                    },
                    action.resetModel)
            } else {
                console.log("payload => " + action.endpoint)
                console.log(payload)
                callEndpointPOST(action.endpoint, payload, (result) => {
                    setLoading(false)
                    finish && finish(true);
                    console.log("result => " + action.endpoint)
                    console.log(result)
                })
            }
        }




    }

    return <React.Fragment>
        {error && <Hint margin={{ top: 0, bottom: 18 }} error closable onClose={() => setError("")}>
            {error}
        </Hint>}
        <ActionPanel
            alignRight={_.get(element, "_input_actions_alignment") == "right"}
            alignCenter={_.get(element, "_input_actions_alignment") == "center"}
            stretch={_.get(element, "_stretch_buttons")} margin={{ left: 1 }} column={_.get(element, "_input_actions_in_a_row_column") == "column"}>
            {action_list.map(action => action._action ? <FpsForm2Action
                {...props}
                key={action.id}
                loading={loading}
                setLoading={setLoading}
                actionFormat={action}
                action={_.find(actions, { id: action._action })}
                onPerform={finish => performAction(_.find(actions, { id: action._action }), action, finish)}
            /> : <div>Action is not configured</div>
            )}
        </ActionPanel>
    </React.Fragment>
}

function ElementSubheader(props) {
    const { element, template } = props
    const title = template(element.subheaderTitle)
    return <FormSection title={title} />
}

function ElementText(props) {
    const { element, template, templateEngine, dict, lang, extendedModel, state, data, callEndpointPOST, handleRoute, handleModalRoute, auth,
        onSubmit, setState, setExtendedModel, setModel, model, originalModel, originalExtendedModel } = props;

    const textRef = useRef(null)
    const actionsSettings = _.get(data, "params.actions", [])
    const fields = _.get(data, "fileds")
    const apiTemplate = element.paraTemplateEngine === 'api';
    const [loading, setLoading] = useState(false)

    // Use state for templatedText and include state and extendedModel in the dependencies
    const [templatedText, setTemplatedText] = useState(apiTemplate ? (dict[lang].loading || "loading...") : template(element.paraText, state));

    // Хелперы для трансформации (как в ElementAction)
    const transformObject = array => _.reduce(array, (result, item) => {
        if (!array || array.length == 0) return {};
        const { field, value } = item;
        result[field] = template(value, true);
        return result;
    }, {});

    const transformState = (array, type) => _.reduce(array, (result, item) => {
        if (!array || array.length == 0) return {};
        const { field, value } = item;
        if (field.substring(0, 9) == "FormState" && type == "state") {
            result[field.substring(10)] = template(value);
        }
        if (field.substring(0, 9) !== "FormState" && type == "model") {
            result[field] = template(value);
        }
        return result;
    }, {});

    // performAction - полная копия логики из ElementAction
    const performAction = (action, finish) => {
        console.log("performAction")
        console.log(action)

        var copyModel = { ...model }
        var copyState = { ...state }
        var copyExtendedModel = { ...extendedModel }

        if (action.discardModel) {
            copyModel = originalModel
            setModel(originalModel)
            copyExtendedModel = originalExtendedModel
            setExtendedModel(originalExtendedModel)
        }

        if (_.get(action, "actionType") == "state" || _.get(action, "actionType") == "endpoint_state" || !_.get(action, "actionType")) {
            const payloadState = transformState(action.stateMapping, "state")
            const payloadModel = transformState(action.stateMapping, "model")
            copyState = { ...copyState, ...payloadState }
            copyModel = { ...copyModel, ...payloadModel }
            copyExtendedModel = { ...copyExtendedModel, ...payloadModel }

            if (action.actionSubmit && _.get(action, "actionType") !== "endpoint_state") {
                setLoading(true)
                onSubmit(
                    (res) => {
                        setLoading(false);
                        finish && finish(true);
                    },
                    true,
                    undefined,
                    true,
                    undefined,
                    { state: copyState, model: { ...model, ...payloadModel } },
                    false, // actionFormat._action_standardRequired - для data-action не используем
                    err => {
                        err && finish && finish(false);
                        setLoading(false)
                    },
                    action.resetModel
                )
            } else {
                setState(copyState)
                if (action.resetModel) {
                    copyModel = {}
                    copyExtendedModel = {}
                    setModel({})
                    setExtendedModel({})
                } else {
                    setModel(copyModel)
                    setExtendedModel(copyExtendedModel)
                }
                setLoading(false)
            }
        }

        if ((_.get(action, "actionType") == "endpoint" || _.get(action, "actionType") == "endpoint_state" || !_.get(action, "actionType")) && action.endpoint) {
            let payload = transformObject(action.mapping)
            if (action.sendModel) {
                payload = { ...copyModel, ...payload }
            }
            setLoading(true)
            if (action.actionSubmit) {
                console.log("onSubmit")
                onSubmit(
                    (res) => {
                        console.log("finish onSubmit", res)
                        console.log("payload => " + action.endpoint)
                        console.log(payload)
                        callEndpointPOST(action.endpoint, payload, (result) => {
                            setLoading(false)
                            finish && finish(true)
                            console.log("result => " + action.endpoint)
                            console.log(result)
                        })
                    },
                    true,
                    undefined,
                    true,
                    undefined,
                    { state: copyState, model: copyModel },
                    false, // actionFormat._action_standardRequired
                    err => {
                        err && finish && finish(false);
                        setLoading(false)
                    },
                    action.resetModel)
            } else {
                console.log("payload => " + action.endpoint)
                console.log(payload)
                callEndpointPOST(action.endpoint, payload, (result) => {
                    setLoading(false)
                    finish && finish(true);
                    console.log("result => " + action.endpoint)
                    console.log(result)
                })
            }
        }
    }

    // Обработчик кликов по элементам с data-action-type в тексте
    useEffect(() => {
        const handleDataActionClick = (e) => {
            const target = e.target.closest('[data-action-type]')
            if (!target) return // если не data-action элемент, пропускаем событие дальше
            
            e.preventDefault()
            e.stopPropagation()
            
            const actionType = target.getAttribute('data-action-type')
            const actionData = target.getAttribute('data-action-data')
            
            console.log('Form text element data action clicked:', actionType, actionData)
            
            // Обрабатываем разные типы действий
            switch (actionType) {
                case 'action':
                    if (!actionData) {
                        console.warn('data-action-data not specified for action')
                        return
                    }
                    
                    // Ищем экшон в настройках
                    const actionSettings = _.find(actionsSettings, { name: actionData }) || _.find(actionsSettings, { id: actionData })
                    if (!actionSettings) {
                        console.warn('Action not found in actionsSettings:', actionData)
                        return
                    }
                    
                    console.log('Executing form text element action:', actionData, actionSettings)
                    
                    // Выполняем экшон через performAction (как в ElementAction)
                    performAction(actionSettings, (success) => {
                        console.log('Form text element action finished:', success)
                    })
                    break
                    
                case 'route':
                    if (!actionData) {
                        console.warn('data-action-data not specified for route action')
                        return
                    }
                    const routePath = template(actionData, true)
                    console.log('Form text element navigating to route:', routePath)
                    handleRoute && handleRoute(routePath)(e)
                    break
                    
                case 'modal':
                    if (!actionData) {
                        console.warn('data-action-data not specified for modal action')
                        return
                    }
                    const modalPath = template(actionData, true)
                    console.log('Form text element opening modal:', modalPath)
                    handleModalRoute && handleModalRoute(modalPath)(e)
                    break
                    
                default:
                    console.warn('Unknown data-action-type in form text element:', actionType)
            }
        }
        
        const textElement = textRef.current
        if (textElement) {
            textElement.addEventListener('click', handleDataActionClick)
            return () => {
                textElement.removeEventListener('click', handleDataActionClick)
            }
        }
    }, [extendedModel, state, callEndpointPOST, handleRoute, handleModalRoute, actionsSettings, template, templatedText, model, setState, setModel, setExtendedModel, onSubmit, originalModel, originalExtendedModel])

    useEffect(() => {
        const fetchData = async (payload, setValue) => {
            const templValue = templateEngine ? await templateEngine(payload, { ...extendedModel, ...state }) : "Templating error";
            setValue(templValue);
        };
        if (apiTemplate) {
            fetchData(element.paraText, setTemplatedText);
        } else {
            setTemplatedText(template(element.paraText, state));
        }
    }, [extendedModel, state, templateEngine, element.paraText, apiTemplate]);

    return templatedText ? (
        <div ref={textRef} className="FPS_FORM_TEXT_ELEMENT">
            <InnerHTML allowRerender={true} html={templatedText || ''} />
        </div>
    ) : "";
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
        },
            element.submitKeepModel,
            element.submitStep,
            false,
            element.submitAdditionalMapping && element.submitMapping && element.submitMapping.length > 0
                ? element.submitMapping : undefined)
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
        {hintText && <InnerHTML allowRerender={true} html={hintText || ''} />}
    </Hint>
}

function ElementRedirect(props) {
    const { element, template, handleRoute } = props

    const url = template(element.redirect_url)
    const delay = element.redirect_delay || 0

    setTimeout(() => {
        handleRoute(url)()
    }, delay * 1000)

    return <div></div>
}