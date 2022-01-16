import React, { useState, useEffect } from 'react'
import styles from './form.module.css'
import Input from '../input/input'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'
import Hint from '../../hint/hint'
import Loader from '../../loader/loader'
import icon from './../../../../icons/fps-form.svg'
import { ComponentWrapper } from './../../wrapper/wrapper'
import { Markdown } from '../../article/mkd'
import { InputForm } from './InputForm'
import { dict } from '../../locale'
import moment from 'moment'
import _ from 'lodash'

export function FormSection(props) {
  return (
    <div className={styles.FormSection}>
      <div className={styles.FormSectionLine} />
      <span>{props.title}</span>
      <div className={styles.FormSectionLine} />
    </div>
  )
}

export default function FpsForm({ auth, data, onEvent, id, locale }) {
  if (data.params.data) {
    return <FpsFormNew auth={auth || {}} data={data} locale={locale} onEvent={onEvent} id={id} />
  }
  else {
    return <FpsFormOld auth={auth || {}} data={data} locale={locale} onEvent={onEvent} id={id} />
  }
}

function FpsFormNew({ auth, data, onEvent, id, locale }) {

  const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'
  // console.log('locale')
  // console.log(locale)

  let hiddenFields = {}
  const [model, setModel] = useState(defaultModel())
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const successText = data.successText || dict[lang].form.submittedSuccessfuly
  const formName = data.formName || ''
  const formDesc = data.formDesc || ''
  const formButton = data.formButton || dict[lang].form.submit
  const formButtonResubmit = data.formButtonResubmit || dict[lang].form.submitAgain
  const isSuccessWrite = data.isSuccessWrite
  let params = data.params || {}
  const fileds = []
  const formWidth = (data.maxWidth && parseInt(data.maxWidth)) || 'auto'

  console.log('------------ form data: -------------')
  console.log(data)
  // console.log('------------ auth: -------------')
  // console.log(auth)
  console.log('------------ form model: -------------')
  console.log(model)

  const sendMsg = (msg) => {
    const message = { ...msg, _id: 'form_' + id }
    setLoading(true)
    setShowForm(false)
    if (onEvent) {
      onEvent(message)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    console.log('submitting form...')
    console.log(model)
    const modelCopy = {}
    for (const f in model) {
      const isWritable = (_.get(data,'params.data.writeFields') || []).filter(w => w.sysName == f).length > 0
      if (isWritable) {
        modelCopy[f] = model[f]
      }
    }
    sendMsg(modelCopy)
  }

  function defaultModel() {
    let defModel = {}
    for (const field in data.params.fields) {
      if (data.params.fields[field].defaultValueOn && (data.params.fields[field].defaultValue || data.params.fields[field].defaultValue == 0)) {
        defModel[field] = typeof data.params.fields[field].defaultValue == 'object' ?
          JSON.stringify(data.params.fields[field].defaultValue)
          : data.params.fields[field].defaultValue
      }
      if (data.params.fields[field].hidden) {
        hiddenFields[field] = true
      }
    }
    return defModel || {}
  }

  data.error =
    data.error && data.error == '403'
      ? dict[lang].form.noPermissions
      : data.error
  data.error =
    data.error && data.error == '511' ? dict[lang].form.notConfigured : data.error

  //Hidden fields from URL query params:
  const queryString = typeof window !== 'undefined' ? window.location.search : '';
  const pathName = typeof window !== 'undefined' ? window.location.pathname : '';
  const urlParams = new URLSearchParams(queryString);
  let hiddenFieldsValues
  for (const hiddenField in hiddenFields) {
    hiddenFieldsValues = { ...hiddenFieldsValues, [hiddenField]: urlParams.get(hiddenField) }
  }

  //Editting object
  let eidtID
  if ((data.params.edit || data.params.editObject == 'userID') && auth.isAuth && auth.user) {
    eidtID = auth.user // если стоит галка, то забираем айди из юзера
  }
  eidtID = urlParams.get('@editObject') || eidtID; // если задаем в URL, приоритет выше

  if (data.params.editObject == "url") {
    console.log("URL " + pathName)
    const params = pathName.split('/')
    eidtID = params.length ? params[params.length - 1] : null
  }

  // а если редактирование вырублено, вообще все обнуляем
  if (!data.params.useEditing) { eidtID = null } else { console.log('eidtID = ' + eidtID) }

  const [fetchedObj, setFetchetObj] = useState(false)
  const fetchObjectFields = (objId) => {
    console.log('fetching... id = ' + objId)
    setFetchetObj(true)
    const message = { dql: "id = '" + objId + "'", _id: id }
    if (onEvent) {
      onEvent(message)
    }
  }
  if (eidtID && !fetchedObj) {
    console.log(`fetching object (id = ${eidtID}) fields...`)
    fetchObjectFields(eidtID)
  }

  //Hidden auth
  const userAuth = auth ? auth.user : null
  const userRole = auth ? auth.role : null
  const includeAuth = data && data.params && data.params.auth && data.params.auth.isPerson
  const userAuthField = data && data.params && data.params.auth && data.params.auth.userIdField
  let hiddenAuth = {}
  if (includeAuth && userAuth && userAuthField) {
    hiddenAuth[userAuthField] = userAuth
  }

  // Validation:
  useEffect(() => {
    setIsValid(true)
    for (const field in data.params.data.fieldParams) {
      //if (field.isValid == false) { setIsValid(false); }
      if (data.params.data.fieldParams[field] && data.params.data.fieldParams[field].required &&
        data.fileds && data.fileds.length > 0 && data.fileds.filter(i => i.sysName == field) &&
        data.fileds.filter(i => i.sysName == field).length > 0 &&
        !model[field] && !model[field] !== false && data.params.data.fieldParams[field].include
        //&& !data.params.data.fieldParams[field].hidden
      ) {
        console.log('FAILED REQ VALIDATION')
        console.log(field)
        setIsValid(false);
      }
    }
  }, [model])

  useEffect(() => {
    if (data.error || data.response) {
      setLoading(false)
    }
  }, [data.error, data.response])

  const getResultAnswer = () => {
    let sync = false
    if (_.get(data, 'params.result.isSuccessField') ||
      _.get(data, 'params.result.resultMessageField') ||
      _.get(data, 'params.result.resultTitleField')) { sync = true }
    let isSuccess = true
    if (sync && data.response && _.get(data, 'params.result.isSuccessField')) { isSuccess = data.response[0] ? data.response[0][data.params.result.isSuccessField] : null }
    let answerTitle = ''
    if (sync && data.response && data.params.result.resultTitleField) { answerTitle = data.response[0] ? data.response[0][data.params.result.resultTitleField] : null }
    if (sync && data.response && !answerTitle) { answerTitle = isSuccess ? dict[lang].success : dict[lang].error }
    let answerText = ''
    if (sync && data.response && data.params.result.resultMessageField) { answerText = data.response[0] ? data.response[0][data.params.result.resultMessageField] : null }
    let answer
    if (data.params.result.isLink) {
      answer = <a href={answerText} target="_blank">{data.params.result.linkTitle || answerText}</a>
    } else (answer = answerText)
    return {
      sync,
      isSuccess,
      answerTitle,
      answerText: answer
    }
  }

  let fetchedObjectFields = {}
  const getFieldValue = (sysName, dataType) => {
    if (!data.data) { return } else {
      let getFieldVal
      getFieldVal = data.data[0] && data.data[0][sysName]
      if (dataType == 'boolean') {
        if (getFieldVal === true) { getFieldVal = 'true' }
        if (getFieldVal === false) { getFieldVal = 'false' }
      }
      if (typeof getFieldVal == 'object' && getFieldVal && Array.isArray(getFieldVal)) { getFieldVal = getFieldVal.map(i => { return i.id }) }
      if (typeof getFieldVal == 'object' && getFieldVal && !Array.isArray(getFieldVal)) { getFieldVal = getFieldVal.id }
      if (dataType == 'date') {
        getFieldVal = moment(getFieldVal)
      }
      if (eidtID && getFieldVal && fetchedObjectFields[sysName] != getFieldVal) {
        fetchedObjectFields = { ...fetchedObjectFields, id: eidtID, [sysName]: getFieldVal }
      }
      return getFieldVal
    }
  }

  useEffect(() => {
    let modelCopy = { ...fetchedObjectFields, ...hiddenFieldsValues, ...hiddenAuth, ...model }; // model в конце! Иначе нахуй перетирается все что ввели
    if (eidtID) { modelCopy.id = eidtID } // тут проебывался где-то или перетирался id, посему записываем в явном виде
    setModel(modelCopy)
  }, [data.data])

  const onChange = (field, value) => {
    let modelCopy = { ...fetchedObjectFields, ...hiddenFieldsValues, ...hiddenAuth, ...model }; // model в конце! Иначе нахуй перетирается все что ввели
    if (eidtID) { modelCopy.id = eidtID } // тут проебывался где-то или перетирался id, посему записываем в явном виде
    modelCopy[field] = value
    setModel(modelCopy)
  }

  const checkSectionConditionals = (conditionals, operator) => {
    operator = operator || 'and'
    if (!conditionals) { return true }
    let showSection
    // console.log('===cond===')
    // console.log(conditionals)
    // console.log(model)
    if (conditionals.length == 0) return true;
    if (operator == 'and') {
      showSection = true
      conditionals.forEach(cond => {
        if (model[cond.field] != cond.value && cond.value != 'null') {
          console.log("section can't be shown")
          console.log(cond.field + ' = ' + model[cond.field] + ' != ' + cond.value)
          showSection = false
        }
        if (model[cond.field] && cond.value == 'null') {
          console.log("section can't be shown")
          console.log(cond.field + ' = ' + model[cond.field] + ' is not empty ')
          showSection = false
        }
      })
    }
    if (operator == 'or') {
      showSection = false
      conditionals.forEach(cond => {
        if (model[cond.field] == cond.value && cond.value != 'null') {
          showSection = true
        }
        if (!model[cond.field] && cond.value == 'null') {
          showSection = true
        }
      })
      if (!showSection) { console.log("section can't be shown") }
    }
    return showSection
  }

  // RESULT
  const resultButton = _.get(data, 'params.resultScreen.resubmitButtonLabel') || formButtonResubmit
  const resultTitle = _.get(data, 'params.resultScreen.successMessageTitle') || dict[lang].form.thankYou
  const resultMessage = _.get(data, 'params.resultScreen.successMessage') || successText
  const disableResubmit = _.get(data, 'params.resultScreen.disableResubmit')
  const resubmitType = _.get(data, 'params.resultScreen.resubmitType') || 'button'

  const resubmit = () => {
    setShowForm(true)
    data.response == [];
    data.error = '';
    fetchObjectFields(eidtID)
    getResultAnswer().isSuccess && !data.error &&
      setModel({ ...defaultModel(), ...hiddenFieldsValues, ...hiddenAuth, ...fetchedObjectFields }) // скрытые поля, авторизация и фетч
  }

  useEffect(() => {
    if (!showForm && resubmitType == "timer_3sec" && !disableResubmit) {
      setTimeout(resubmit, 3000)
    }
    if (!showForm && resubmitType == "timer_6sec" && !disableResubmit) {
      setTimeout(resubmit, 6000)
    }
    if (!showForm && resubmitType == "timer_10sec" && !disableResubmit) {
      setTimeout(resubmit, 10000)
    }
  }, [data])


  // чекаем надо ли спрятать кнопку сабмита
  const wf = (_.get(data,'params.data.writeFields') || [])
    .filter(f => _.get(data,`params.fields.${f.sysName}.include`) && !_.get(data,`params.fields.${f.sysName}.disableEditing`))
  let idInclude = false;
  _.get(data,'params.data.writeFields').forEach(f => { if (f.sysName == 'id') { idInclude = true} })
  const isEditable = idInclude && wf.length > 0

  return (
    <ComponentWrapper>
      {/* <Button icon='refresh' onClick={resubmit}>refresh</Button> */}
      {formName && <h2 className={styles.form_header}>{formName}</h2>}
      <div style={{ maxWidth: formWidth, marginBottom: 12 }}>
        {formDesc && showForm && (
          <Markdown value={formDesc} />
        )}</div>

      {loading && <Loader>{dict[lang].loading}</Loader>}

      {data.error && !loading && data.error != 'dql is not allowed for write' &&  // dql это КОСТЫЛЬ — убрать когда пофиксим на API
        <Hint title={dict[lang].form.error} error>{data.error}</Hint>}

      {/* Standard response processing: */}
      {!showForm && !loading && !getResultAnswer().sync && <React.Fragment>
        {isSuccessWrite && <Hint title={resultTitle} ok><div dangerouslySetInnerHTML={{ __html: resultMessage }} /></Hint>}
      </React.Fragment>}


      {/* Sync response processing: */}
      {!showForm && !data.error && !loading && getResultAnswer().sync && <React.Fragment>
        {data.response && !getResultAnswer().isSuccess && <React.Fragment>
          <Hint title={getResultAnswer().answerTitle} error>
            <div dangerouslySetInnerHTML={{ __html: getResultAnswer().answerText }} />
          </Hint>
        </React.Fragment>}
        {data.response && getResultAnswer().isSuccess &&
          <Hint title={getResultAnswer().answerTitle} ok>
            {data.params.result.isLink ? getResultAnswer().answerText :
              <div dangerouslySetInnerHTML={{ __html: getResultAnswer().answerText }} />}
          </Hint>}
      </React.Fragment>}

      {!showForm && resubmitType == 'button' && !disableResubmit && !loading && data.error != dict[lang].form.noPermissions && data.error != dict[lang].form.notConfigured &&
        <Button icon='refresh' onClick={resubmit}>{resultButton}</Button>}


      {showForm && !loading &&
        <form onSubmit={submit} style={{ maxWidth: formWidth }}>
          {data.params.data.columnOrder.map(section =>
            data.params.data.columns[section].fieldIds
            && data.params.data.columns[section].fieldIds.length > 0
            && checkSectionConditionals(data.params.data.columns[section].cond, data.params.data.columns[section].condOperator) &&
            <div style={{ marginBottom: 38 }}>
              {data.params.data.columnOrder.length > 1 && data.params.data.columns[section].display &&
                <FormSection title=
                  {data.params.data.columns[section].title} />}
              {data.params.data.columns[section].fieldIds.map(fieldName => {
                const field =
                {
                  ...data.params.fields[fieldName],
                  ...data.params.data.fields[fieldName],
                  ...data.params.data.fieldParams[fieldName]
                }
                if (field.id[0] == '@') return null //системные поля
                //if (!field.write) return null // на чтение!
                if (field.hidden) return null
                return <InputForm
                  field={field}
                  editingOn={field.write && !field.disableEditing && isEditable}
                  placeholder={data.placeholder}
                  onChange={value => { onChange(field.id, value); console.log('onChange ' + field.id + ' => ' + value) }}
                  defaultValue={getFieldValue(field.id, field.dataType)}
                />
              }
              )}
            </div>
          )}

          {(!data.error || data.error == 'dql is not allowed for write') && isEditable &&  // dql это КОСТЫЛЬ — убрать когда пофиксим на API
            <ActionPanel>
              <Button accent disabled={!isValid}>{formButton}</Button>
            </ActionPanel>}

        </form>}
    </ComponentWrapper>)
}








function FpsFormOld({ auth, data, onEvent, id, locale }) {

  const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

  const defaultParam =
  {
    include: true,
    hidden: false,
    required: false,
    isTextarea: false,
    isMarkdown: false,
    textareaRows: 4,
    defaultValue: '',
    isPositive: false,
    quickSearch: true,
    allowAddLinks: false,
    dateTimeOn: true,
    isValid: true,
    weight: 0,
    jsonDisplay: 'default',
    range: {
      min: 0,
      max: 100,
      step: 1,
      unitName: ''
    }
  }

  let hiddenFields = {}

  const [model, setModel] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)

  const successText = data.successText || dict[lang].form.submittedSuccessfuly
  const formName = data.formName || ''
  const formDesc = data.formDesc || ''
  const formButton = data.formButton || dict[lang].form.submit
  const formButtonResubmit = data.formButtonResubmit || dict[lang].form.submitAgain
  const isSuccessWrite = data.isSuccessWrite
  let params = data.params || {}
  const fileds = sortFields(data.fileds) || []
  const formWidth = (data.maxWidth && parseInt(data.maxWidth)) || 'auto'



  console.log('------------ form data: -------------')
  console.log(data)
  // console.log('------------ auth: -------------')
  // console.log(auth)
  // console.log('------------ form model: -------------')
  // console.log(model)

  //console.log('rerender')

  function sortFields(arr) {
    if (!arr) { return null }
    if (!params.fields) {
      params = { ...params, fields: {} }
    }
    arr.forEach((field, i) => {
      if (!params.fields[field.sysName]) {
        params.fields[field.sysName] = defaultParam
      } else {
        if (params.fields[field.sysName].hidden) {
          hiddenFields[field.sysName] = true
        }
      }
      arr[i].params = params.fields[field.sysName]
      arr[i].weight = arr[i].params.weight || 0;
    })
    return arr.sort((a, b) => a.weight - b.weight)
  }


  const sendMsg = (msg) => {
    const message = { ...msg, _id: 'form_' + id }
    setLoading(true)
    setShowForm(false)
    if (onEvent) {
      onEvent(message)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    console.log('submitting form...')
    console.log(model)
    sendMsg(model)
  }

  data.error =
    data.error && data.error == '403'
      ? 'You have no permissions for viewing form'
      : data.error
  data.error =
    data.error && data.error == '511' ? 'Form is not configured' : data.error



  //Hidden fields from URL query params:
  const queryString = typeof window !== 'undefined' ? window.location.search : '';
  const urlParams = new URLSearchParams(queryString);
  let hiddenFieldsValues
  for (const hiddenField in hiddenFields) {
    hiddenFieldsValues = { ...hiddenFieldsValues, [hiddenField]: urlParams.get(hiddenField) }
  }

  //Get Object ID to edit
  let eidtID = null

  if ((data.params.edit || data.params.editObject == 'userID') && auth.isAuth && auth.user) {
    eidtID = auth.user // если стоит галка, то забираем айди из юзера
  }

  eidtID = urlParams.get('@editObject') || eidtID; // если задаем в URL, приоритет выше

  if (data.params.editObject == "url") {
    console.log("URL")
    console.log(queryString)
  }

  // а если редактирование вырублено, вообще все обнуляем
  if (!data.params.useEditing) { eidtID = null }



  const [fetchedObj, setFetchetObj] = useState(false)

  const fetchObjectFields = (objId) => {
    setFetchetObj(true)
    const message = { dql: "id = '" + objId + "'", _id: id }
    if (onEvent) {
      onEvent(message)
      console.log('onEvent')
      console.log(message)
    }
  }

  if (eidtID && !fetchedObj) {
    console.log(`fetching object (id = ${eidtID}) field...`)
    fetchObjectFields(eidtID)
  }

  //Hidden auth
  const userAuth = auth ? auth.user : null
  const userRole = auth ? auth.role : null
  const includeAuth = data && data.params && data.params.auth && data.params.auth.isPerson
  const userAuthField = data && data.params && data.params.auth && data.params.auth.userIdField
  let hiddenAuth = {}
  if (includeAuth && userAuth && userAuthField) {
    hiddenAuth[userAuthField] = userAuth
  }

  const typesMatching = (field) => {
    const matching = {
      number: 'number',
      email: 'email',
      string: 'string',
      link: 'select',
      arrayLink: 'multiselect',
      boolean: 'boolean',
      date: 'date',
      decimal: 'decimal',
      json: 'json'
    }
    if (field) {
      if (
        matching[field.dataType] == 'select' &&
        !params.fields[field.sysName].quickSearch
      ) {
        return 'string'
      }
      if (
        matching[field.dataType] == 'multiselect' &&
        !params.fields[field.sysName].quickSearch
      ) {
        return 'string'
      }
      if (
        matching[field.dataType] == 'string' &&
        params.fields[field.sysName].isTextarea
      ) {
        return 'textarea'
      }
      if (
        matching[field.dataType] == 'string' &&
        params.fields[field.sysName].isMarkdown
      ) {
        return 'markdown'
      }
      if (
        matching[field.dataType] == 'json' &&
        params.fields[field.sysName].jsonDisplay == 'radioStation'
      ) {
        return 'radio'
      }
      if (
        matching[field.dataType] == 'json' &&
        params.fields[field.sysName].jsonDisplay == 'checkboxGroup'
      ) {
        return 'checkboxGroup'
      }
      if (
        field.dataType == 'json' &&
        params.fields[field.sysName].jsonDisplay == 'range'
      ) {
        return 'range'
      }
      if (
        field.dataType == 'json' &&
        params.fields[field.sysName].jsonDisplay == 'slider'
      ) {
        return 'range'
      }
    }
    return matching[field.dataType]
  }

  // Validation:
  useEffect(() => {
    setIsValid(true)
    fileds.forEach(field => {
      if (field.isValid == false) { setIsValid(false); }
      if (field.params.required && !model[field.sysName] && !model[field.sysName] !== false && field.params.include && !field.params.hidden) {
        // console.log('FAILED REQ VALIDATION')
        // console.log(field)
        setIsValid(false);
      }
    }
    )
  }, [model])

  const validationHandler = (field, valid) => {
    if (fileds) { fileds[fileds.indexOf(fileds.filter(f => f.sysName == field)[0])].isValid = valid }
  }

  useEffect(() => {
    if (data.error || data.response) {
      setLoading(false)
    }
  }, [data.error, data.response])

  const getResultAnswer = () => {
    let sync = false
    if (data.params.result.isSuccessField ||
      data.params.result.resultMessageField ||
      data.params.result.resultTitleField) { sync = true }
    let isSuccess = true
    if (sync && data.response && data.params.result.isSuccessField) { isSuccess = data.response[0][data.params.result.isSuccessField] }
    let answerTitle = ''
    if (sync && data.response && data.params.result.resultTitleField) { answerTitle = data.response[0][data.params.result.resultTitleField] }
    if (sync && data.response && !answerTitle) { answerTitle = isSuccess ? 'Success' : 'Error' }
    let answerText = ''
    if (sync && data.response && data.params.result.resultMessageField) { answerText = data.response[0][data.params.result.resultMessageField] }
    let answer
    if (data.params.result.isLink) {
      answer = <a href={answerText} target="_blank">{data.params.result.linkTitle || answerText}</a>
    } else (answer = answerText)
    return {
      sync,
      isSuccess,
      answerTitle,
      answerText: answer
    }
  }

  // object editing
  let fetchedObjectFields = {}
  const getFieldValue = (sysName, dataType) => {
    if (!data.data) { return } else {
      let getFieldVal
      if (dataType == 'json' && data.data[0] && data.data[0][sysName]) {
        if (data.data[0] && data.data[0][sysName] && params.fields[sysName].jsonDisplay == 'radioStation') {
          try {
            getFieldVal = JSON.parse(data.data[0][sysName])
          }
          catch (e) {
            console.log(e);
          }
          getFieldVal = getFieldVal
        } else {
          if (data.data[0] && typeof data.data[0][sysName] == 'string') {
            try {
              getFieldVal = JSON.parse(data.data[0][sysName])
            }
            catch (e) {
              console.log(e);
            }
          } else {
            getFieldVal = data.data[0] && data.data[0][sysName]
          }
        }
      } else { getFieldVal = data.data[0] && data.data[0][sysName] }
      if (eidtID && (getFieldVal || getFieldVal === false)) { // отдельно проверку на false для boolean полей
        fetchedObjectFields = { ...fetchedObjectFields, id: eidtID, [sysName]: getFieldVal }
      }
      return getFieldVal
    }
  }


  const onChange = (field, value) => {
    let modelCopy = { ...fetchedObjectFields, ...hiddenFieldsValues, ...hiddenAuth, ...model }; // model в конце! Иначе нахуй перетирается все что ввели
    if (eidtID) { modelCopy.id = eidtID } // тут проебывался где-то или перетирался id, посему записываем в явном виде
    modelCopy[field] = value
    setModel(modelCopy)
  }


  return (
    <ComponentWrapper>
      {formName && <h2 style={{ marginBottom: 12 }}>{formName}</h2>}
      {formDesc && showForm && (
        <p style={{ maxWidth: formWidth, marginBottom: 22 }}>
          {formDesc}
        </p>
      )}

      {loading && <Loader>{dict[lang].loading}</Loader>}

      {data.error && !loading && data.error != 'dql is not allowed for write' &&  // dql это КОСТЫЛЬ — убрать когда пофиксим на API
        <Hint title='Form Error' error>{data.error}</Hint>}

      {/* Standard response processing: */}
      {!showForm && !loading && !getResultAnswer().sync && <React.Fragment>
        {isSuccessWrite && <Hint title='Thank you' ok>{successText}</Hint>}
      </React.Fragment>}


      {/* Custom response processing: */}
      {!showForm && !loading && getResultAnswer().sync && <React.Fragment>
        {data.response && !getResultAnswer().isSuccess && <React.Fragment>
          <Hint title={getResultAnswer().answerTitle} error>{getResultAnswer().answerText}</Hint>
        </React.Fragment>}
        {data.response && getResultAnswer().isSuccess &&
          <Hint title={getResultAnswer().answerTitle} ok>{getResultAnswer().answerText}</Hint>}
      </React.Fragment>}

      {!showForm && !loading && data.error != 'You have no permissions for viewing form' && data.error != 'Form is not configured' &&
        <Button icon='refresh' onClick={() => {
          setShowForm(true);
          data.response == [];
          data.error = '';
          fetchObjectFields(eidtID)
          getResultAnswer().isSuccess && !data.error && setModel({ ...hiddenFieldsValues, ...hiddenAuth, ...fetchedObjectFields }) // TODO : скрытые поля, авторизация и фетч
        }}>{formButtonResubmit}</Button>}

      {showForm && !loading && (
        <form onSubmit={submit} style={{ maxWidth: formWidth }}>
          {fileds.map((field) => (field.params.include && !field.params.hidden &&
            <div>
              {/* <div className='debug'>{field.sysName} value: {JSON.stringify(getFieldValue(field.sysName))}</div> */}
              {typesMatching(field) == 'boolean' &&
                <Input type='radio'
                  defaultValue={getFieldValue(field.sysName)}
                  label={field.name}
                  description={field.params.description}
                  required={field.params.required}
                  onChange={value => onChange(field.sysName, value)}
                  options={
                    [
                      {
                        value: true,
                        label: (field.params.booleanOptions && field.params.booleanOptions[0]) || 'Yes'
                      },
                      {
                        value: false,
                        label: (field.params.booleanOptions && field.params.booleanOptions[1]) || 'No'
                      }

                    ]
                  }
                />
              }
              {typesMatching(field) != 'boolean' &&
                <div>
                  <Input
                    sysName={field.sysName}
                    validationHandler={validationHandler}
                    label={(data.placeholder != "true" || typesMatching(field) == 'slider' || typesMatching(field) == 'range') ? field.name : ''}
                    placeholder={`${data.placeholder == "true" ? `${field.name}${field.params.required ? '*' : ''}` : ''}`}
                    required={field.params.required}
                    description={field.params.description}
                    positive={field.params.isPositive}
                    customOption={field.params.customOption}
                    customOptionType={field.params.customOptionType}
                    customOptionLabel={field.params.customOptionLabel}
                    customOptionPlaceholder={field.params.customOptionPlaceholder}
                    options={(typesMatching(field) == 'select' || typesMatching(field) == 'multiselect') ? (field.params.searchData || []) :
                      (field.params.multipleChoice || [])}
                    defaultValue={
                      params.fields[field.sysName].jsonDisplay == 'radioStation' ?
                        ((getFieldValue(field.sysName, field.dataType) && getFieldValue(field.sysName, field.dataType).value)
                          || field.params.defaultValue) :
                        (getFieldValue(field.sysName, field.dataType) || field.params.defaultValue)
                    }
                    timeFormat={`${field.params.dateTimeOn ? ' hh:mm A' : ''}`}
                    type={typesMatching(field)}
                    rows={field.params.textareaRows}
                    onChange={value => {
                      console.log(value)
                      let correctedValue
                      if (params.fields[field.sysName].jsonDisplay == 'radioStation' && typeof value == 'string') {
                        correctedValue = { value: value }
                      } else { correctedValue = value }
                      onChange(field.sysName, correctedValue)
                    }}
                    min={field.params && field.params.range && field.params.range.min}
                    max={field.params && field.params.range && field.params.range.max}
                    step={field.params && field.params.range && field.params.range.step}
                    unitName={field.params && field.params.unitName}
                    utc
                  />
                </div>
              }
              {/* {modelError[field.sysName] && <b>{modelError[field.sysName]}</b>} */}
            </div>
          ))}
          {(!data.error || data.error == 'dql is not allowed for write') &&  // dql это КОСТЫЛЬ — убрать когда пофиксим на API
            <ActionPanel>
              <Button accent disabled={!isValid}>{formButton}</Button>
            </ActionPanel>}
        </form>
      )}
    </ComponentWrapper>
  )
}
FpsForm.settings = {
  icon: icon,
  name: 'Form',
  sysName: 'FpsForm',
  form: [
    { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Form title', sysName: 'formName', type: 'input' },
    { name: 'Form description', sysName: 'formDesc', type: 'textarea' },
    { name: 'Submit button text', sysName: 'formButton', type: 'input' },
    // // { name: 'Re-submit button text', sysName: 'formButtonResubmit', type: 'input' },
    { name: 'Labels or Placeholders', sysName: 'placeholder', type: 'labelOrPlaceholder' },
    { name: 'Form max width, px', sysName: 'maxWidth', type: 'number' },
    { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
  ]
}
