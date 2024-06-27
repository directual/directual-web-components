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
//import debounce from 'lodash.debounce';
import { debounce } from 'lodash'
import moment from 'moment'

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
  const [extendedModel, setExtendedModel] = useState({ ...gatherDefaults() })
  const [originalModel, setOriginalModel] = useState({ ...gatherDefaults() })
  const previousModel = usePrevious(model);
  const [state, setState] = useState(_.get(data, "params.state") || defaultState)
  const previousState = usePrevious(state);
  const transformedState = {
    FormState: state, WebUser: { ...auth, ...{ id: auth.user } }
  }
  const defaultModel = { ...emptyValues, ...model, ...transformedState }
  const defaultExtModel = { ...emptyValues, ...extendedModel, ...transformedState }
  const [loading, setLoading] = useState(false)
  const modelIsChanged = !_.isEqual(model, originalModel)
  const [refresh, setRefresh] = useState(0)

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

  const cx = null
  const submitOnModel = debounce(submit, 400);
  const submitOnState = debounce(submit, 400);
  //const debouncedCallEndpint = debounce(callEndpoint, 700);

  // AUTOSUBMIT ON MODEL
  useEffect(() => {
    if (_.get(params, "general.autosubmit") == "model") {
      // any field:
      if (_.get(params, "general.autosubmit_model") && _.get(params, "general.autosubmit_model").length > 0) {
        let send = false
        _.get(params, "general.autosubmit_model").forEach(field => {
          if (_.get(previousModel, field) !== _.get(model, field)) { send = true }
        })
        if (send) {
          submitOnModel(undefined, true, undefined, true)
        }
      } else {
        submitOnModel(undefined, true, undefined, true)
      }
    }
  }, [model])

  // AUTOSUBMIT ON STATE
  useEffect(() => {
    if (!_.isEqual(previousState, state)) {
      setHighlightState(true)
      setTimeout(() => setHighlightState(false), 300)
    }
    if (_.get(params, "general.autosubmit") == "always" && autoSubmitStep !== state.step) {
      console.log("AUTOSUBMIT!")
      setAutoSubminStep(state.step)
      submitOnState(undefined, true, undefined, true)
    }
    if (_.get(params, "general.autosubmit") == "steps"
      && _.includes(_.get(params, "general.autosubmit_steps").split(","), state.step
        && autoSubmitStep !== state.step)) {
      console.log("AUTOSUBMIT!")
      setAutoSubminStep(state.step)
      submitOnState(undefined, true, undefined, true)
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

    // костыль под баг сокетов с левыми данными
    if (_.get(model, "id") && _.get(data, "data[0].id") && _.get(model, "id") !== _.get(data, "data[0].id")) {
      // хуйня пришла
      return;
    }

    if (edditingOn) {
      setExtendedModel({ ..._.get(data, "data[0]") })
      let saveSate = { ...state }
      const newModel = ({ ...model, ...flatternModel({ ..._.get(data, "data[0]") }) })
      if (!_.isEqual(newModel, model)) {
        saveSate = { ...saveSate, ...templateState(_.get(data, "params.state"), newModel) }
        setModel(newModel)
        setOriginalModel(newModel)
      }
      // RESTORE STATE:
      if (_.get(params, "general.restoreState") && _.get(params, "general.saveStateTo")) {
        saveSate = { ...saveSate, ...parseJson(newModel[_.get(params, "general.saveStateTo")]) }
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

  function submit(finish, submitKeepModel, targetStep, autoSubmit, submitMapping) {
    clearTimeout(cx);

    setState({ ...state, _submitError: "" })
    let modelToSend = {}

    for (const f in model) {
      if (_.includes(_.get(data, 'writeFields'), f)) {
        // проверка на дату
        const type = _.filter(_.get(data, 'fileds'), i => i.sysName == f)
          && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0]
          && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0].dataType

        if (type == 'date') {
          modelToSend[f] = moment(model[f]).toISOString()
        } else {
          modelToSend[f] = model[f]
        }

      }
    }

    // submit mapping:
    if (submitMapping) {
      submitMapping.forEach(mapping => {
        const f = mapping.field
        const value = template(mapping.value)
        if (_.includes(_.get(data, 'writeFields'), f)) {
          // проверка на дату
          const type = _.filter(_.get(data, 'fileds'), i => i.sysName == f)
            && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0]
            && _.filter(_.get(data, 'fileds'), i => i.sysName == f)[0].dataType

          if (type == 'date') {
            modelToSend[f] = moment(value).toISOString()
          } else {
            modelToSend[f] = value
          }
        }
      })
      // до кучи сохраняем автомаппинг в модель, чтобы сокетом не дрочить
    }

    if (!modelIsChanged && !_.isEqual(gatherDefaults(), model && !autoSubmit) &&
      !(_.get(params, "general.saveState") && _.get(params, "general.saveStateTo"))) {
      setState({ ...state, _submitError: "" })
      console.log('Model is not changed. Submit does not submit anything')
      setLoading(false)
      finish && finish()
      return;
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
      console.log(obj)
      const filteredKeys = _.pickBy(obj, (value, key) => {
        return !_.isEmpty((value || "").toString()); // Exclude keys with non-empty values
      });
      return keys.filter(key => !(key in filteredKeys));
    }

    let emptyFields = excludeNonEmptyValues(modelToSend, requiredFieldValues)


    if (emptyFields.length > 0 && !autoSubmit) {
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
          console.log("FINISH SUBMIT")
          //console.log(data)
          let saveState = { ...state }
          let stateUpdate = {}
          let modelUpdate = {}
          if (data && data.length > 0) {
            try {
              const response = JSON.parse(data)
              // update state
              if (!isEmpty(_.get(response, "state"))) {
                stateUpdate = _.get(response, "state") || {}
              }
              // update model
              if (!isEmpty(_.get(response, "model"))) {
                modelUpdate = _.get(response, "model") || {}
              }
              if (!isEmpty(_.get(response, "object"))) {
                modelUpdate = _.get(response, "object") || {}
              }
              // refresh
              if (_.get(response, "refresh")) {
                refreshOptions()
              }
              // redirect
              if (!isEmpty(_.get(response, "redirect")) &&
                !isEmpty(_.get(response, "redirect.target"))) {
                let delay = 0
                if (!isEmpty(_.get(response, "redirect.delay"))) {
                  delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
                }
                setTimeout(() => {
                  handleRoute(_.get(response, "redirect.target"))()
                }, delay)
              }
            } catch (err) {
              console.log(err)
            }
          }
          setLoading(false)
          finish && finish(data)
          autoSubmit ?
            setState({ ...saveState })
            : setState({ ...saveState, step: targetStep || "submitted", ...stateUpdate })

          if (submitKeepModel) { modelUpdate = { ...model, ...modelToSend, ...modelUpdate } }
          setModel(modelUpdate)
          setOriginalModel(modelUpdate)
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

  const formatDate = (value, formatOptions) => {
    if (!value) { return null }
    formatOptions = formatOptions || {}
    const formattedDate = formatOptions.isUTC == 'true' ?
      moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
      :
      moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
    return formattedDate
  }

  const getDateFields = () => {
    let dates = {}
    _.get(data, "headers", []).forEach(i => {
      if (i.dataType == 'date') {
        _.set(dates, i.sysName, i.formatOptions || {})
      }
    })
    _.get(data, "fileds", []).forEach(i => {
      if (i.dataType == 'date') {
        _.set(dates, i.sysName, i.formatOptions || {})
      }
    })
    return dates
  }

  function template(input) {

    if (!input || input == "{{undefined}}") return ""
    let templateData = { ...defaultExtModel, ...(model || {}), ...(extendedModel || {}) };
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    if (!templateData) return "";

    templateData = _.mapValues(templateData, (value, key) => {
      if (getDateFields().hasOwnProperty(key)) {
        return formatDate(value,getDateFields()[key])
      }
      return value;
    });

    // Function to convert object references to their desired string representation paths
    const preprocessTemplate = (str, data) => {
      const regex = /{{\s*([\w.]+)\s*}}/g;
      return str.replace(regex, (match, p1) => {
        const keys = p1.split('.');
        let value = data;
        keys.forEach(key => {
          if (value && value[key]) {
            value = value[key];
          }
        });
        // Check if the value is an object and replace it with the id property if it exists
        if (typeof value === 'object' && value !== null && value.id) {
          return `{{${p1}.id}}`;
        }
        return match;
      });
    };

    const preprocessedInput = preprocessTemplate(input, templateData);

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
      const result = renderTemplate(preprocessedInput);
      return result;
    } catch (error) {
      console.error("template error");
      console.error(input);
      console.error(templateData);
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

  //const currentStep = (state.step ? _.find(formSteps, { sysName: state.step }) : _.get(formSteps, "[0]")) || {}
  // =============

  const editModel = field => value => {
    console.log("edit " + field + " => " + value)
    const copyModel = _.cloneDeep(model)
    _.set(copyModel, field, value)
    setModel(copyModel)

    const copyExtendedModel = _.cloneDeep(extendedModel)
    _.set(copyExtendedModel, field, value)
    setExtendedModel(copyExtendedModel)
  }

  const checkHidden = element => {

    const checkHiddenCondition = element => {
      let isHidden = false

      let field = template("{{" + element._conditionalView_field + "}}")
      let value = template(element._conditionalView_value)

      // { key: "modelNotChanged" },
      if (element._conditionalView_operator == "modelNotChanged") {
        if (modelIsChanged) {
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("model is changed")
          isHidden = true
        }
      }

      // { key: "modelChanged" },
      if (element._conditionalView_operator == "modelChanged") {
        if (!modelIsChanged) {
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("model is NOT changed")
          isHidden = true
        }
      }

      // { key: "==", value: "is equal" },
      if (element._conditionalView_operator == "==") {
        if (typeof field == 'boolean') { field = JSON.stringify(field) }
        if (!_.isEqual(field, value)) {
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " !== " + value)
          isHidden = true
        }
      }

      // { key: "!==", value: "is NOT equal" },
      if (element._conditionalView_operator == "!==") {
        if (typeof field == 'boolean') { field = JSON.stringify(field) }
        if (_.isEqual(field, value)) {
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " == " + value)
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
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " does NOT contain " + value)
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
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " contains " + value)
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
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log(value + " does NOT contain " + "{{" + element._conditionalView_field + "}} → " + field)
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
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log(value + " contains " + "{{" + element._conditionalView_field + "}} → " + field)
          isHidden = true
        }
      }

      // { key: "isNull", value: "is empty" },
      if (element._conditionalView_operator == "isNull") {
        if (!_.isEmpty(field)) {
          // _.get(params, "general.showModel") && console.log("element is hidden")
          // _.get(params, "general.showModel") && console.log("{{" + element._conditionalView_field + "}} → " + field + " is empty")
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

    //console.log(result)

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
    if (section.sectionVisibility == "empty" && !state.step) return true;
    if (section.sectionVisibility == "custom") {
      let current = state.step ? [state.step] : []
      let steps = section.sectionCustomVisibility ? section.sectionCustomVisibility.split(",") : []
      if (_.intersection(current, steps).length > 0) return true;
    }
    if (section.sysName == state.step) return true;
    return false;
  }

  function refreshOptions() {
    console.log('refresh options ~ ' + refresh)
    setRefresh(refresh + 1)
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
              refresh={refresh}
              currentStep={currentStep}
              refreshOptions={refreshOptions}
              model={model}
              checkHidden={checkHidden}
              dict={dict}
              extendedModel={extendedModel}
              setExtendedModel={setExtendedModel}
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

    {_.get(params, "general.showFullModel") && <pre className={`${styles.debug} ${highlightState ? styles.highlight : ''}`}>
      <code>{JSON.stringify(extendedModel, 0, 3)}</code>
      <span>debug mode: EXT. MODEL</span>
    </pre>}

    {_.get(params, "general.showModel") && <pre className={`${styles.debug} ${highlightModel ? styles.highlight : ''}`}>
      <code>{JSON.stringify(model, 0, 3)}</code>
      <span>debug mode: MODEL</span>
      {_.get(params, "general.autosubmit") == "always" && <code className='icon icon-move'>Autosubmit on each step change</code>}
      {_.get(params, "general.autosubmit") == "steps" && <code className='icon icon-move'>Autosubmit on: {_.get(params, "general.autosubmit_steps")}</code>}
      {_.get(params, "general.autosubmit") == "model" && <code className='icon icon-move'>Autosubmit on model change
        {_.get(params, "general.autosubmit_model") && _.get(params, "general.autosubmit_model").length > 0 ? `. Trigger fields: ${_.get(params, "general.autosubmit_model").join(", ")}` : ''}</code>}
      {modelIsChanged && <code className='icon icon-info'>Model is changed</code>}
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
            refresh={refresh}
            refreshOptions={refreshOptions}
            currentStep={currentStep}
            model={model}
            extendedModel={extendedModel}
            setExtendedModel={setExtendedModel}
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
            setModel={m => {
              // console.log("m")
              // console.log(m)
              setModel(m)
            }}
            params={params}
            checkIfAllInputsHidden={checkIfAllInputsHidden}
          />
        </div>
      })}
  </div>
}

function RenderStep(props) {
  const { auth, data, callEndpoint, onEvent, id, handleRoute, currentStep, templateState, checkIfAllInputsHidden, editModel, originalModel,
    model, checkHidden, dict, locale, state, refreshOptions, refresh, extendedModel, setExtendedModel, loading, template, setState, lang, submit, params, setModel } = props


  const callEndpointPOST = (endpoint, body, finish) => {
    // console.log('===> calling endpoint /' + endpoint)
    // console.log(body)
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
            if (!isEmpty(_.get(response, "redirect")) &&
              !isEmpty(_.get(response, "redirect.target"))) {
              let delay = 0
              if (!isEmpty(_.get(response, "redirect.delay"))) {
                delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
              }
              setTimeout(() => {
                handleRoute(_.get(response, "redirect.target"))()
              }, delay)
            }
            // refresh
            if (_.get(response, "refresh")) {
              refreshOptions()
            }
          } catch (err) {
            console.log(err)
          }
        }
      }
    )
  }

  return <React.Fragment>{(currentStep.elements || [])
    //.filter(element => !checkHidden(element) && !checkIfAllInputsHidden(element))
    .map(element => <FormElement
      model={model}
      refresh={refresh}
      hidden={checkHidden(element)}
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
      extendedModel={extendedModel}
      setExtendedModel={setExtendedModel}
      editModel={editModel}
      setModel={setModel}
      // setModel={m => {
      //   console.log("m")
      //   console.log(m)
      //   setModel(m)
      // }}
      element={element}
      callEndpointPOST={callEndpointPOST}
      callEndpoint={(endpoint, params, finish, setOptions, setError) => {
        //params= {...params, _value: "a"} // убрать это для проверки корректности запроса!
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
            value: _.trim(value) || id,
            userpic: _.get(rest, "userpic"),
            position: _.get(rest, "position"),
          };
        });

        //fake request
        // setTimeout(() => {
        //   const data = [
        //     {
        //       "firstName": "Paul",
        //       "position": "человек-работник",
        //       "userpic": "https://cdn.prod.website-files.com/5d07a67a0a061929b6559525/63d7fe438ced734abd058268_author-pavel.jpg"
        //     },
        //     {
        //       "firstName": "Павел",
        //       "position": "человек-работник",
        //       "userpic": "https://cdn.prod.website-files.com/5d07a67a0a061929b6559525/63d7fe438ced734abd058268_author-pavel.jpg"
        //     },
        //   ]
        //   const visibleNames = '[{"sysName":"firstName"}]'
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
            // console.log('===> calling endpoint /' + endpoint)
            // console.log(params)

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
      key={element.id} />)}
    {(currentStep.elements || [])
      .filter(element => checkIfAllInputsHidden(element))
      .map(element => <FormElement
        model={model}
        refresh={refresh}
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
        callEndpointPOST={callEndpointPOST}
        callEndpoint={(endpoint, params, finish, setOptions, setError) => {
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
        key={element.id} />)}
  </React.Fragment>
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
  //isMarketplace: true,
  form: [
    { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    { name: 'Component comment', sysName: 'comment', type: 'comment' },
  ]
}
