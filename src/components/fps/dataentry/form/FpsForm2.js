import React, { useState, useEffect } from 'react'
import styles from './form2.module.css'
import icon from './../../../../icons/fps-form2.svg'
import { dict } from '../../locale'
import _, { isEmpty } from 'lodash'
import PropTypes from 'prop-types';
import InnerHTML from 'dangerously-set-html-content'
import FormElement from './FpsForm2Element'
import Hint from '../../hint/hint'

export default function FpsForm2({ auth, data, callEndpoint, onEvent, id, locale, handleRoute }) {

  const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'
  const defaultState = { "step": null }
  const params = _.get(data, "params")
  const fields = _.get(data, "fileds")
  const edditingOn = _.get(params, "general.edittingOn")
  const emptyValues = fakeSchemeForTemplating(_.get(data, "fileds")) //  формируем джейсончик для шаблонизации (пустой)
  function fakeSchemeForTemplating(fieldScheme) {
    let array = []
    try {
      array = fieldScheme.map(i => i.sysName)
    } catch (err) {
      console.error(err)
    }
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
  const [model, setModel] = useState(edditingOn ? flatternModel({ ...gatherDefaults(), ..._.get(data, "data[0]") }) : {})
  //const [state, setState] = useState(templateState(_.get(data, "params.state") || defaultState))
  const [state, setState] = useState(_.get(data, "params.state") || defaultState)
  const transformedState = { FormState: state, WebUser: auth }
  const defaultModel = { ...emptyValues, ...model, ...transformedState }
  const [loading, setLoading] = useState(false)

  const [highlightState, setHighlightState] = useState(false)
  const [highlightModel, setHighlightModel] = useState(false)

  useEffect(() => {
    setHighlightState(true)
    setTimeout(() => setHighlightState(false), 300)
  }, [state])

  function updateObjectIfDifferent(object1, object2) {
    _.forOwn(object2, (value, key) => {
      if (_.has(object1, key) && !_.isEqual(object1[key], value)) {
        _.set(object1, key, value);
      }
    });
    return object1;
  }

  // process Socket.io update
  useEffect(() => {
    console.log("update model (socket)")
    const newModel = ({ ...model }, flatternModel({ ..._.get(data, "data[0]") }))
    if (!_.isEqual(newModel, model)) {
      setModel(newModel)
    }
  }, [_.get(data, "data[0]")])

  useEffect(() => {
    setHighlightModel(true)
    setTimeout(() => setHighlightModel(false), 300)
  }, [model])

  // console.log("=== FpsForm2 data ===")
  // console.log(data)

  const sendMsg = (msg) => {
    const message = { ...msg, _id: 'form_' + id }
    setLoading(true)
    if (onEvent) {
      onEvent(message)
    }
  }

  const submit = (finish) => {
    setState({ ...state, _submitError: "" })
    const modelToSend = {}
    for (const f in model) {
      if (_.includes(_.get(data, 'writeFields'), f)) {
        modelToSend[f] = model[f]
      }
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
          // console.log(data)
          setLoading(false)
          finish && finish(data)
          setState({ ...state, step: "submitted" })
          setModel({}) // reset model
        } else {
          setState({ ...model, _apiError: data.msg })
          setLoading(false)
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
    const templateData = defaultModel;
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
      console.log(input)
      console.log(templateData)
      console.error('Error rendering template:', error);
      return '';
    }
  }
  function templateState(input) {
    const templateData = defaultModel
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
      console.log(input)
      console.log(templateData)
      console.error('Error rendering template:', error);
      return '';
    }
  }
  // ========================

  // =============
  const formTitle = template(_.get(params, "form_title"))
  const formDescription = template(_.get(params, "form_description"))
  const maxWidth = _.get(params, "form_maxWidth") || "auto"
  const object = _.get(data, "data[0]")
  const formSteps = _.get(params, "steps") || []
  const currentStep = (state.step ? _.find(formSteps, { sysName: state.step }) : _.get(formSteps, "[0]")) || {}
  // =============

  const editModel = field => value => {
    console.log("edit " + field + " => " + value)
    const copyModel = _.cloneDeep(model)
    _.set(copyModel, field, value)
    setModel(copyModel)
  }

  const checkHidden = element => {

    let isHidden = false
    if (element._conditionalView) {
      let field = template("{{" + element._conditionalView_field + "}}")
      let value = template(element._conditionalView_value)

      // { key: "==", value: "is equal" },
      if (element._conditionalView_operator == "==") {
        if (!_.isEqual(field, value)) {
          console.log("element is hidden")
          console.log("{{" + element._conditionalView_field + "}} → " + field + " !== " + value)
          isHidden = true
        }
      }

      // { key: "!==", value: "is NOT equal" },
      if (element._conditionalView_operator == "!==") {
        if (_.isEqual(field, value)) {
          console.log("element is hidden")
          console.log("{{" + element._conditionalView_field + "}} → " + field + " == " + value)
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
          console.log("element is hidden")
          console.log("{{" + element._conditionalView_field + "}} → " + field + " does NOT contain " + value)
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
          console.log("element is hidden")
          console.log("{{" + element._conditionalView_field + "}} → " + field + " contains " + value)
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
          console.log("element is hidden")
          console.log(value + " does NOT contain " + "{{" + element._conditionalView_field + "}} → " + field)
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
          console.log("element is hidden")
          console.log(value + " contains " + "{{" + element._conditionalView_field + "}} → " + field)
          isHidden = true
        }
      }

      // { key: "isNull", value: "is empty" },
      if (element._conditionalView_operator == "isNull") {
        if (!_.isEmpty(field)) {
          console.log("element is hidden")
          console.log("{{" + element._conditionalView_field + "}} → " + field + " is empty")
          isHidden = true
        }
      }

      // { key: "isNotNull", value: "is NOT empty" },
      if (element._conditionalView_operator == "isNotNull") {
        if (_.isEmpty(field)) {
          console.log("element is hidden")
          console.log("{{" + element._conditionalView_field + "}} → " + field + " is NOT empty")
          isHidden = true
        }
      }
    }
    return isHidden
  }

  return <div className={`${styles.formWrapper} D_FPS_FORM2_WRAPPER`}
    style={{ maxWidth }}
  >

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
    </pre>}

    {state._apiError && <Hint error closable onClose={() => setState({ ...state, _apiError: "" })}>
      {state._apiError}
    </Hint>}

    <div className={`${styles.formSection} D_FPS_FORM2_SECTION ${currentStep.CSSclass}`}
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

      {(currentStep.elements || []).filter(element => !checkHidden(element)).map(element => <FormElement
        model={model}
        data={data}
        checkHidden={checkHidden}
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
                console.log('finish')
                // console.log(data)
                try {
                  const response = JSON.parse(data)
                  // update state
                  if (!isEmpty(_.get(response, "state"))) {
                    const stateUpdate = _.get(response, "state")
                    // console.log("update state")
                    // console.log(stateUpdate)
                    setState({ ...state, ...stateUpdate })
                  }
                  // update model/object
                  if (!isEmpty(_.get(response, "object"))) {
                    const modelUpdate = _.get(response, "object")
                    // console.log("update object")
                    // console.log(modelUpdate)
                    setModel({ ...model, ...modelUpdate })
                  }
                  if (!isEmpty(_.get(response, "model"))) {
                    const modelUpdate = _.get(response, "model")
                    // console.log("update model")
                    // console.log(modelUpdate)
                    setModel({ ...model, ...modelUpdate })
                  }
                } catch (err) {
                  console.log(err)
                }
              }
            }
          )
        }}
        callEndpoint={(endpoint, params, finish, setOptions) => {
          console.log('===> calling endpoint /' + endpoint)
          console.log(params)

          const transformedArray = inputArray => _.map(inputArray, (item) => {
            const { id, ...rest } = item; // Destructure `id` and the rest of the properties
            const value = _.values(_.pickBy(rest, _.isString)).join(' '); // Concatenate string values
            return {
              key: id,
              value: _.trim(value) || id
            };
          });

          callEndpoint && callEndpoint(
            endpoint,
            "GET",
            undefined,
            params,
            (result, data) => {
              if (result == "ok") {
                finish && finish(transformedArray(data))
                setOptions && setOptions(transformedArray(data))
              }
            }
          )
        }}
        key={element.id} />)}
    </div>
  </div>
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
