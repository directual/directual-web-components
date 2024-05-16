import React, { useState, useEffect, useRef } from 'react'
import styles from './form2.module.css'
import icon from './../../../../icons/fps-form2.svg'
import { dict } from '../../locale'
import _, { isEmpty } from 'lodash'
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-html-content'
import FormElement from './FpsForm2Element'
import FpsFormPopup from './FpsForm2Popup'
import Hint from '../../hint/hint'

export default function FpsForm2(props) {


  const { auth, data, callEndpoint, onEvent, id, locale, handleRoute } = props

  // console.log("=== FpsForm2 data ===")
  // console.log(data)

  const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'
  const defaultState = { "step": "default step", "popup": "" }
  const params = _.get(data, "params")
  const fields = _.get(data, "fileds")
  const edditingOn = _.get(params, "general.edittingOn")
  const emptyValues = fakeSchemeForTemplating(_.get(data, "fileds"), _.get(data, "fieldScheme")) //  формируем джейсончик для шаблонизации (пустой)

  function fakeSchemeForTemplating(fields, fieldScheme) {
    let array = []
    try {
      array = fields.map(i => i.sysName)
    } catch (err) {
      console.error(err)
    }
    array = [...array,
    ..._.map(_.sortedUniq(_.sortBy((fieldScheme || []).map(item => item[0]))), i => i.split(".")[0]),
    ]
    return _.zipObject(array, Array(array.length).fill(''))
  }

  const gatherDefaults = () => {
    let tempModel = {};
    (_.get(params, "steps") || []).forEach(step => {
      (step.elements || []).forEach(element => {
        if (element.type == "input") {
          (element._input_fields || []).forEach(field => {
            if (field._field_set_default && field._field_default_value) {
              tempModel[field._field] = field._field_default_value
            }
          })
        }
      })
    })
    return tempModel
  }
  const [model, setModel] = useState({ ...gatherDefaults() })
  const [originalModel, setOriginalModel] = useState({ ...gatherDefaults() })
  const previousModel = usePrevious(model);
  const [state, setState] = useState(_.get(data, "params.state") || defaultState)
  const previousState = usePrevious(state);
  const transformedState = { FormState: state, WebUser: auth }
  const defaultModel = { ...emptyValues, ...model, ...transformedState }
  const [loading, setLoading] = useState(false)

  const [highlightState, setHighlightState] = useState(false)
  const [highlightModel, setHighlightModel] = useState(false)

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const [autoSubmitStep, setAutoSubminStep] = useState(state.step)

  // AUTOSUBMIT
  useEffect(() => {
    if (!_.isEqual(previousState, state)) {
      setHighlightState(true)
      setTimeout(() => setHighlightState(false), 300)
    }
    if (_.get(params, "general.autosubmit") == "always" && autoSubmitStep !== state.step) {
      console.log("AUTOSUBMIT!")
      setAutoSubminStep(state.step)
      submit()
    }
    if (_.get(params, "general.autosubmit") == "steps"
      && _.includes(_.get(params, "general.autosubmit_steps").split(","), state.step
        && autoSubmitStep !== state.step)) {
      console.log("AUTOSUBMIT!")
      setAutoSubminStep(state.step)
      submit()
    }
  }, [state])

  const parseJson = json => {
    if (!json) return {}
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

  // process Socket.io update
  useEffect(() => {
    if (edditingOn) {
      // console.log("update model (socket)")
      let saveSate = { ...state }
      const newModel = ({ ...model, ...flatternModel({ ..._.get(data, "data[0]") }) })
      if (!_.isEqual(newModel, model)) {
        saveSate = { ...saveSate, ...templateState(_.get(data, "params.state"), newModel) }
        setModel(newModel)
        setOriginalModel(newModel)
      }
      // RESTORE STATE:
      if (_.get(params,"general.restoreState") && _.get(params,"general.saveStateTo")) {
        saveSate={...saveSate, ...parseJson(newModel[_.get(params,"general.saveStateTo")])}
      }
      setState(saveSate)
    }

  }, [_.get(data, "data[0]")])

  useEffect(() => {
    if (!_.isEqual(previousModel, model)) {
      setHighlightModel(true)
      setTimeout(() => setHighlightModel(false), 300)
    }
  }, [model])



  // LEGACY:
  const sendMsg = (msg) => {
    const message = { ...msg, _id: 'form_' + id }
    setLoading(true)
    if (onEvent) {
      onEvent(message)
    }
  }
  // =======

  function submit(finish) {
    setState({ ...state, _submitError: "" })
    let modelToSend = {}
    for (const f in model) {
      if (_.includes(_.get(data, 'writeFields'), f)) {
        modelToSend[f] = model[f]
      }
    }
    // State to object
    if (_.get(params, "general.saveState") && _.get(params, "general.saveStateTo")) {
      modelToSend[_.get(params, "general.saveStateTo")] = JSON.stringify(state)
    }

    // REQUIRED:
    const requiredFieldValues = _.chain(_.get(params, "steps"))
      .flatMap('elements')
      .flatMap('_input_fields')
      .filter('_field_required')
      .map('_field')
      .value();

    function excludeNonEmptyValues(obj, keys) {
      const filteredKeys = _.pickBy(obj, (value, key) => {
        return !_.isEmpty(value); // Exclude keys with non-empty values
      });
      return keys.filter(key => !(key in filteredKeys));
    }
    let emptyFields = excludeNonEmptyValues(modelToSend, requiredFieldValues)

    if (emptyFields.length > 0) {
      emptyFields = emptyFields.map(i => {
        const fieldName = _.find(fields, { sysName: i }).name
        return fieldName ? '"' + fieldName + '"' : '"' + i + '"'
      })
      const errMessage = dict[lang].form.emptyRequired + emptyFields.join(", ")
      setState({ ...state, _submitError: errMessage })
      finish()
      return;
    }
    console.log('submitting form...')
    console.log(modelToSend)
    setLoading(true)
    const endpoint = _.get(data, "sl")
    callEndpoint && callEndpoint(
      endpoint,
      "POST",
      modelToSend,
      undefined,
      (result, data) => {
        if (result == "ok") {
          finish && finish(data)
          // console.log("FINISH SUBMIT")
          // console.log(data)
          let saveState = { ...state }
          try {
            const response = JSON.parse(data)
            // update state
            if (!isEmpty(_.get(response, "state"))) {
              const stateUpdate = _.get(response, "state")
              // console.log("update state")
              // console.log(stateUpdate)
              saveState = { ...state, ...stateUpdate }
            }
          } catch (err) {
            console.log(err)
          }
          setLoading(false)
          finish && finish(data)
          setState({ ...saveState, step: "submitted" })
          setModel({}) // reset model
          setOriginalModel({})
        } else {
          setState({ ...state, _apiError: data.msg })
          setLoading(false)
          finish && finish()
        }
      }
    )
  }

  useEffect(() => {
    if (data.error || data.response) {
      setLoading(false)
    }
  }, [data.error, data.response])

  function flatternModel(m) {
    const flatternObject = a => {
      if (Array.isArray(a)) {
        return a.map(i => i.id || i).join(",")
      }
      if (typeof a == 'object') {
        return _.get(a, "id")
      }
      return a
    }
    return _.mapValues(m, flatternObject)
  }

  // front-end template engine
  function template(input) {
    const templateData = { ...defaultModel, ...(model || {}) };
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    if (!templateData) return ""
    const renderTemplate = (template) => {
      return _.template(template, {
        interpolate: /{{([\s\S]+?)}}/g
      })(templateData, {
        variable: '',
        evaluate: /<%([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      });
    };
    try {
      const result = renderTemplate(input);
      return result;
    } catch (error) {
      console.error("template")
      console.error(input)
      console.error(templateData)
      console.error('Error rendering template:', error);
      return '';
    }
  }
  function templateState(input, model) {
    const templateData = { ...defaultModel, ...(model || {}) }
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    // Custom function to handle undefined variables by replacing them with ""
    if (!templateData) return {}
    const renderTemplate = (template) => {
      return _.template(template, {
        interpolate: /{{([\s\S]+?)}}/g
      })(templateData, {
        variable: '',
        evaluate: /<%([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      });
    };
    // Use a try-catch block to handle errors gracefully
    try {
      const result = JSON.parse(renderTemplate(JSON.stringify(input)));
      return result;
    } catch (error) {
      // If there's an error during rendering, return an empty string
      console.error("templateState")
      console.error(input)
      console.error(templateData)
      console.error('Error rendering template:', error);
      return '';
    }
  }
  // ========================

  // =============
  const formTitle = template(_.get(params, "form_title"))
  const formDescription = template(_.get(params, "form_description"))
  const maxWidth = _.get(params, "form_maxWidth") || "auto"
  const popupWidth = _.get(params, "popup_width") || 400
  const closePopupOnClick = _.get(params, "general.closePopupOnClick") || false
  const object = _.get(data, "data[0]")
  const formSteps = _.get(params, "steps") || []
  const modelIsChanged = !_.isEqual(model, originalModel)

  //const currentStep = (state.step ? _.find(formSteps, { sysName: state.step }) : _.get(formSteps, "[0]")) || {}
  // =============

  const editModel = field => value => {
    console.log("edit " + field + " => " + value)
    const copyModel = _.cloneDeep(model)
    _.set(copyModel, field, value)
    setModel(copyModel)
  }

  const checkHidden = element => {

    const checkHiddenCondition = element => {
      let isHidden = false

      let field = template("{{" + element._conditionalView_field + "}}")
      let value = template(element._conditionalView_value)

      // { key: "modelNotChanged" },
      if (element._conditionalView_operator == "modelNotChanged") {
        if (modelIsChanged) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("model is changed")
          isHidden = true
        }
      }

      // { key: "modelChanged" },
      if (element._conditionalView_operator == "modelChanged") {
        if (!modelIsChanged) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("model is NOT changed")
          isHidden = true
        }
      }

      // { key: "==", value: "is equal" },
      if (element._conditionalView_operator == "==") {
        if (!_.isEqual(field, value)) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " !== " + value)
          isHidden = true
        }
      }

      // { key: "!==", value: "is NOT equal" },
      if (element._conditionalView_operator == "!==") {
        if (_.isEqual(field, value)) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " == " + value)
          isHidden = true
        }
      }

      // { key: "contains", value: "contains" },
      if (element._conditionalView_operator == "contains") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length == 0) || !field || !value) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " does NOT contain " + value)
          isHidden = true
        }
      }
      // { key: "notContains", value: "does NOT contain" },
      if (element._conditionalView_operator == "notContains") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length > 0) || !field || !value) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " contains " + value)
          isHidden = true
        }
      }

      // { key: "in", value: "in" },
      if (element._conditionalView_operator == "in") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length == 0) || !field || !value) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log(value + " does NOT contain " + "{{" + element._conditionalView_field + "}} → " + field)
          isHidden = true
        }
      }

      // { key: "notIn", value: "NOT in" }
      if (element._conditionalView_operator == "notIn") {
        value = value ? value.split(",") : null
        field = field ? field.split(",") : null
        if ((field && field.length > 0 &&
          value && value.length > 0
          && _.intersection(value, field).length > 0) || !field || !value) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log(value + " contains " + "{{" + element._conditionalView_field + "}} → " + field)
          isHidden = true
        }
      }

      // { key: "isNull", value: "is empty" },
      if (element._conditionalView_operator == "isNull") {
        if (!_.isEmpty(field)) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " is empty")
          isHidden = true
        }
      }

      // { key: "isNotNull", value: "is NOT empty" },
      if (element._conditionalView_operator == "isNotNull") {
        if (_.isEmpty(field)) {
          _.get(params, "general.showModel") && console.log("element is hidden")
          _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " is NOT empty")
          isHidden = true
        }
      }

      return isHidden
    }

    let result = false
    if (!_.get(element, "_conditionalView")) return false;
    if (!_.get(element, "_conditions") || _.get(element, "_conditions").length == 0) return false;

    if (_.get(element, "_action_conditionals_and_or") == "OR") {
      result = true
      _.get(element, "_conditions").forEach(element => {
        if (!checkHiddenCondition(element)) { result = false }
      })
    } else {
      _.get(element, "_conditions").forEach(element => {
        if (checkHiddenCondition(element)) { result = true }
      })
    }

    console.log(result)

    return result
  }

  if (_.get(data, 'error') == '403') {
    return <Hint error title="403" margin={{ top: 0, bottom: 0 }}>
      <p>{dict[lang].form.noPermissions}</p>
    </Hint>
  }

  const checkIfAllInputsHidden = element => {
    return element.type == "input" && _.every(element._input_fields, item => item._field_hidden === true);
  }

  const showSection = section => {
    if (section.sectionVisibility == "always") return true;
    if (section.sectionVisibility == "custom") {
      let current = state.step ? [state.step] : []
      let steps = section.sectionCustomVisibility ? section.sectionCustomVisibility.split(",") : []
      if (_.intersection(current, steps).length > 0) return true;
    }
    if (section.sysName == state.step) return true;
    return false;
  }


  return <div className={`${styles.formWrapper} D_FPS_FORM2_WRAPPER`}
    style={{ maxWidth }}
  >

    {/* POPUP */}
    {state.popup && <FpsFormPopup
      onClose={() => closePopupOnClick ? setState({ ...state, popup: "" }) : undefined}
      width={popupWidth}>
      {formSteps
        .filter(section => section.sysName == state.popup)
        .map(currentStep => {
          return <div className={`${styles.formSection} D_FPS_FORM2_SECTION ${currentStep.CSSclass}`}
            style={{
              gap: (currentStep.sectionGap || currentStep.sectionGap == 0) ?
                `${currentStep.sectionGap}px 0`
                :
                `18px 0`
            }}
          >
            {_.get(params, "general.showState") && <pre className={styles.debug}>
              <code>{currentStep.sysName}</code>
              <span>debug mode: STEP</span>
            </pre>}
            <RenderStep
              {...props}
              currentStep={currentStep}
              model={model}
              checkHidden={checkHidden}
              dict={dict}
              state={state}
              originalModel={originalModel}
              templateState={templateState}
              loading={loading}
              template={template}
              setState={setState}
              lang={lang}
              submit={submit}
              editModel={editModel}
              setModel={setModel}
              params={params}
              checkIfAllInputsHidden={checkIfAllInputsHidden}
            />
          </div>
        })}
    </FpsFormPopup>}

    {formTitle && <h2
      className={`${styles.formHeader} D_FPS_FORM2_HEADER`}>
      <InnerHTML allowRerender={true} html={formTitle} /></h2>}

    {formDescription && <div
      className={`${styles.formDescription} D_FPS_FORM2_DESCRIPTION`}>
      <InnerHTML allowRerender={true} html={formDescription} /></div>}

    {_.get(params, "general.showState") && <pre className={`${styles.debug} ${highlightState ? styles.highlight : ''}`}>
      <code>{JSON.stringify(state, 0, 3)}</code>
      <span>debug mode: STATE</span>
    </pre>}

    {_.get(params, "general.showModel") && <pre className={`${styles.debug} ${highlightModel ? styles.highlight : ''}`}>
      <code>{JSON.stringify(model, 0, 3)}</code>
      <span>debug mode: MODEL</span>
      {_.get(params, "general.autosubmit") == "always" && <code className='icon icon-move'>Autosubmit on each step change</code>}
      {_.get(params, "general.autosubmit") == "steps" && <code className='icon icon-move'>Autosubmit on: {_.get(params, "general.autosubmit_steps")}</code>}
      {modelIsChanged && <code className='icon icon-info'>Model is changed</code> }
    </pre>}

    {state._apiError && <Hint error closable onClose={() => setState({ ...state, _apiError: "" })}>
      {state._apiError}
    </Hint>}
    {formSteps
      .filter(showSection)
      .map(currentStep => {
        return <div className={`${styles.formSection} D_FPS_FORM2_SECTION ${currentStep.CSSclass}`}
          style={{
            gap: (currentStep.sectionGap || currentStep.sectionGap == 0) ?
              `${currentStep.sectionGap}px 0`
              :
              `18px 0`
          }}
        >
          {_.get(params, "general.showState") && <pre className={styles.debug}>
            <code>{currentStep.sysName}</code>
            <span>debug mode: STEP</span>
          </pre>}
          <RenderStep
            {...props}
            currentStep={currentStep}
            model={model}
            checkHidden={checkHidden}
            dict={dict}
            originalModel={originalModel}
            state={state}
            templateState={templateState}
            loading={loading}
            template={template}
            setState={setState}
            lang={lang}
            submit={submit}
            editModel={editModel}
            setModel={setModel}
            params={params}
            checkIfAllInputsHidden={checkIfAllInputsHidden}
          />
        </div>
      })}
  </div>
}

function RenderStep(props) {
  const { auth, data, callEndpoint, onEvent, id, handleRoute, currentStep, templateState, checkIfAllInputsHidden, editModel, originalModel,
    model, checkHidden, dict, locale, state, loading, template, setState, lang, submit, params, setModel } = props

  return (currentStep.elements || [])
    .filter(element => !checkHidden(element) && !checkIfAllInputsHidden(element))
    .map(element => <FormElement
      model={model}
      data={data}
      checkHidden={checkHidden}
      originalModel={originalModel}
      dict={dict}
      locale={locale}
      handleRoute={handleRoute}
      state={state}
      templateState={templateState}
      loading={loading}
      setState={setState}
      lang={lang}
      onSubmit={submit}
      template={template}
      editModel={editModel}
      setModel={setModel}
      element={element}
      callEndpointPOST={(endpoint, body, finish) => {
        console.log('===> calling endpoint /' + endpoint)
        console.log(body)
        callEndpoint && callEndpoint(
          endpoint,
          "POST",
          body,
          undefined,
          (result, data) => {
            if (result == "ok") {
              finish && finish(data)
              try {
                const response = JSON.parse(data)
                // update state
                if (!isEmpty(_.get(response, "state"))) {
                  const stateUpdate = _.get(response, "state")
                  setState({ ...state, ...stateUpdate })
                }
                // update model/object
                if (!isEmpty(_.get(response, "object"))) {
                  const modelUpdate = _.get(response, "object")
                  setModel({ ...model, ...modelUpdate })
                }
                if (!isEmpty(_.get(response, "model"))) {
                  const modelUpdate = _.get(response, "model")
                  setModel({ ...model, ...modelUpdate })
                }
              } catch (err) {
                console.log(err)
              }
            }
          }
        )
      }}
      callEndpoint={(endpoint, params, finish, setOptions, setError, dataStruct) => {
        // console.log('===> calling endpoint /' + endpoint)
        // console.log(params)
        const transformedArray = (inputArray, visibleNames) => _.map(inputArray, (item) => {
          const parseJson = json => {
            if (!json) return {}
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

          const { id, ...rest } = item; // Destructure `id` and the rest of the properties
          const value = _.trim(_.map(parseJson(visibleNames), field => _.get(item, field.sysName)).join(' ')) ||
            _.values(_.pickBy(rest, _.isString)).join(' '); // Concatenate string values
          return {
            key: id,
            value: _.trim(value) || id
          };
        });

        // fake request
        // setTimeout(() => {
        //   const data = [
        //     {
        //       "name": "John",
        //       "id": "310846eb-460e-452b-9c4b-a2e1f71e773e"
        //     },
        //     {
        //       "name": "Paul",
        //       "id": "ac32238e-e7cd-4038-90eb-752f97edbaf6"
        //     },
        //     {
        //       "name": "Peter",
        //       "id": "9100a8fb-4743-402a-b1f1-0081c7e2e777"
        //     },
        //     {
        //       "name": "Kate",
        //       "id": "31560763-541e-4643-be51-6e6041e2868e"
        //     },
        //     {
        //       "name": "Julia",
        //       "id": "66628fb9-07cb-4e4f-9e51-c03bd64d67d6"
        //     },
        //     {
        //       "name": "Monica",
        //       "id": "1d37d760-2f64-498a-9432-d9895ad5da00"
        //     }
        //   ]
        //   const visibleNames = '[{"sysName":"firstName"},{"sysName":"lastName"}]'
        //   finish && finish(transformedArray(data, visibleNames))
        //   setOptions && setOptions(transformedArray(data, visibleNames))
        // }, 1000)

        callEndpoint && callEndpoint(
          endpoint,
          "GET",
          undefined,
          params,
          (result, data, visibleNames) => {
            // console.log(result)
            // console.log(data)

            if (result == "ok") {
              finish && finish(transformedArray(data, visibleNames))
              setOptions && setOptions(transformedArray(data, visibleNames))
            }
            else {
              setError && setError(data)
              finish && finish([])
              setOptions && setOptions([])
            }
          }
        )
      }}
      key={element.id} />)
}

FpsForm2.propTypes = {
  data: PropTypes.object.isRequired,
  auth: PropTypes.object,
  locale: PropTypes.string,
  onChange: PropTypes.func,
};

FpsForm2.defaultProps = {
  data: {},
  auth: {},
  locale: "ENG",
  onChange: undefined,
};

FpsForm2.settings = {
  icon: icon,
  name: 'Multistep Form',
  sysName: 'FpsForm2',
  isLegacy: false,
  isMarketplace: true,
  form: [
    { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Component comment', sysName: 'comment', type: 'comment' },
  ]
}
