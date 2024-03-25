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

  const [hidden,setHidden] = useState(props.defaultValue)

  const onChangeState = (val) => {
    setHidden(val)
    props.onHide && props.onHide(val)
  } 

  if (props.hide) {
    return (
      <div className={`${styles.FormSection} ${styles.hidable} D_FPS_FORM_SECTION`} onClick={() => onChangeState(!hidden)}>
        <div className={`${styles.FormSectionLine} D_FPS_FORM_SECTION_LINE`} />
        <div className={`icon icon-down small ${styles.icon} ${hidden && styles.rotate}`} />
        <span className={styles.noPadding} >{props.title}</span>
        <div className={`icon icon-down small ${styles.icon} ${hidden && styles.rotate}`} />
        <div className={styles.FormSectionLine} />
      </div>
    )
  }
  return (
    <div className={`${styles.FormSection} D_FPS_FORM_SECTION`}>
      <div className={`${styles.FormSectionLine} D_FPS_FORM_SECTION_LINE`} />
      <span>{props.title}</span>
      <div className={`${styles.FormSectionLine} D_FPS_FORM_SECTION_LINE`} />
    </div>
  )
}

function FpsForm2({ auth, data, onEvent, id, locale }) {

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
      const isWritable = (_.get(data, 'params.data.writeFields') || []).filter(w => w.sysName == f).length > 0
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
      if (data.params.fields[field].defaultValueOn && data.params.fields[field].saveURL) {
        if (typeof window !== 'undefined' && window.location.href) {
          defModel[field] = window.location.href
        }
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
    // console.log("URL " + pathName)
    // console.log("queryString")
    // console.log(queryString)
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
      getFieldVal = (data.data[0] && data.data[0][sysName]) // || defaultModel()[sysName]

      if (dataType == "file" && Array.isArray(getFieldVal)) {
        return getFieldVal.join(",")
      }

      // костылек для масивов ссылок:
      if (Array.isArray(getFieldVal) && typeof getFieldVal[0] == 'string') {
        return getFieldVal.join(",")
      }

      if (dataType == 'boolean') {
        if (getFieldVal === true) { getFieldVal = 'true' }
        if (getFieldVal === false) { getFieldVal = 'false' }
      }
      if (typeof getFieldVal == 'object' && getFieldVal && Array.isArray(getFieldVal)) { getFieldVal = getFieldVal.map(i => { return i.id }) }
      if (typeof getFieldVal == 'object' && getFieldVal && !Array.isArray(getFieldVal)) { getFieldVal = getFieldVal.id }
      if (dataType == 'date' && getFieldVal) {
        getFieldVal = moment(getFieldVal)
      }
      if (eidtID && getFieldVal && fetchedObjectFields[sysName] != getFieldVal) {
        fetchedObjectFields = { ...fetchedObjectFields, id: eidtID, [sysName]: getFieldVal }
      }
      //if (getFieldVal && model[sysName] != getFieldVal) {setModel({...model, [sysName]: getFieldVal})}
      return getFieldVal
    }
  }

  useEffect(() => {
    let modelCopy = { ...defaultModel(), ...fetchedObjectFields, ...hiddenFieldsValues, ...hiddenAuth, ...model }; // model в конце! Иначе нахуй перетирается все что ввели
    if (eidtID) { modelCopy.id = eidtID } // тут проебывался где-то или перетирался id, посему записываем в явном виде
    setModel(modelCopy)
  }, [data.data])

  const onChange = (field, value) => {
    let modelCopy = { ...defaultModel(), ...fetchedObjectFields, ...hiddenFieldsValues, ...hiddenAuth, ...model }; // model в конце! Иначе нахуй перетирается все что ввели
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
        if (model[cond.field] != cond.value && cond.value != 'null' && cond.value != 'isNotNull') {
          // console.log("section can't be shown")
          // console.log(cond.field + ' = ' + model[cond.field] + ' != ' + cond.value)
          showSection = false
        }
        if (model[cond.field] && cond.value == 'null') {
          // console.log("section can't be shown")
          // console.log(cond.field + ' = ' + model[cond.field] + ' is not empty ')
          showSection = false
        }
        if (!model[cond.field] && cond.value == 'isNotNull') {
          // console.log("section can't be shown")
          // console.log(cond.field + ' = ' + model[cond.field] + ' is empty ')
          showSection = false
        }
      })
    }
    if (operator == 'or') {
      showSection = false
      conditionals.forEach(cond => {
        if (model[cond.field] == cond.value && cond.value != 'null' && cond.value != 'isNotNull') {
          showSection = true
        }
        if (!model[cond.field] && cond.value == 'null') {
          showSection = true
        }
        if (model[cond.field] && cond.value == 'isNotNull') {
          showSection = true
        }
      })
      if (!showSection) {
        // console.log("section can't be shown") 
      }
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
  const wf = (_.get(data, 'params.data.writeFields') || [])
    .filter(f => (_.get(data, `params.fields.${f.sysName}.include`) || _.get(data, `params.fields.${f.sysName}.defaultValueOn`)) && !_.get(data, `params.fields.${f.sysName}.disableEditing`))
  const wf_noHinned = (_.get(data, 'params.data.writeFields') || [])
    .filter(f => (_.get(data, `params.fields.${f.sysName}.include`)) && !_.get(data, `params.fields.${f.sysName}.disableEditing`))
  let idInclude = false;
  _.get(data, 'params.data.writeFields').forEach(f => { if (f.sysName == 'id') { idInclude = true } })
  const isEditable = (idInclude || !data.params.useEditing) && wf.length > 0

  // console.log(wf_noHinned)

  // console.log('wf')
  // console.log(wf.length > 0)
  // console.log('isEditable')
  // console.log(isEditable)
  // console.log(idInclude || !data.params.useEditing)

  return (
    <ComponentWrapper>
      {/* <Button icon='refresh' onClick={resubmit}>refresh</Button> */}
      {formName && <h2 className={`${styles.form_header} D_FPS_FORM_HEADER`}>{formName}</h2>}
      <div style={{ maxWidth: formWidth, marginBottom: formDesc ? 12 : 0 }}>
        {formDesc && showForm && (
          <Markdown value={formDesc} />
        )}</div>

      {loading && <Loader>{dict[lang].loading}</Loader>}

      {data.writeError && data.writeError != 'dql is not allowed for write' && <Hint title={dict[lang].form.error} error>{data.writeError}</Hint>}

      {data.error && !loading && data.error != 'dql is not allowed for write' &&  // dql это КОСТЫЛЬ — убрать когда пофиксим на API
        <Hint title={dict[lang].form.error} error>{data.error}</Hint>}

      {/* Standard response processing: */}
      {!showForm && !loading && !getResultAnswer().sync && <React.Fragment>
        {isSuccessWrite && <Hint 
          margin={{ top: wf_noHinned.length > 0 ? 24 : 0, bottom: 24 }}
          title={resultTitle} ok><div dangerouslySetInnerHTML={{ __html: resultMessage }} /></Hint>}
      </React.Fragment>}


      {/* Sync response processing: */}
      {!showForm && !data.error && !loading && getResultAnswer().sync && <React.Fragment>
        {data.response && !getResultAnswer().isSuccess && <React.Fragment>
          <Hint
            margin={{ top: wf_noHinned.length > 0 ? 24 : 0, bottom: 24 }} 
            title={getResultAnswer().answerTitle} error>
            <div dangerouslySetInnerHTML={{ __html: getResultAnswer().answerText }} />
          </Hint>
        </React.Fragment>}
        {data.response && getResultAnswer().isSuccess &&
          <Hint 
            margin={{ top: wf_noHinned.length > 0 ? 24 : 0, bottom: 0 }}
            title={getResultAnswer().answerTitle} ok>
            {data.params.result.isLink ? getResultAnswer().answerText :
              <div dangerouslySetInnerHTML={{ __html: getResultAnswer().answerText }} />}
          </Hint>}
      </React.Fragment>}

      {!showForm && resubmitType == 'button' && !disableResubmit && !loading && data.error != dict[lang].form.noPermissions && data.error != dict[lang].form.notConfigured &&
        <Button icon='refresh' onClick={resubmit}>{resultButton}</Button>}


      {showForm && !data.error && !loading &&
        <form onSubmit={submit} style={{ maxWidth: formWidth }}>
          {data.params.data.columnOrder.map(section =>
            data.params.data.columns[section].fieldIds
            && data.params.data.columns[section].fieldIds.length > 0
            &&
            <div //style={{ marginBottom: 38 }} 
              className={`${styles.marginBottom38_disable} ${checkSectionConditionals(data.params.data.columns[section].cond, data.params.data.columns[section].condOperator) ?
                '' : styles.hideSection}`}>
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
                  locale={locale}
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
            <ActionPanel margin={{ top: wf_noHinned.length > 0 ? 38 : 0, bottom: 0 }}>
              <Button accent disabled={!isValid}>{formButton}</Button>
            </ActionPanel>}

        </form>}
    </ComponentWrapper>)
}



// FpsForm2.settings = {
//   icon: icon,
//   name: 'Multistep Form',
//   sysName: 'FpsForm2',
//   form: [
//     { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
//     { name: 'Form title', sysName: 'formName', type: 'input' },
//     { name: 'Form description', sysName: 'formDesc', type: 'textarea' },
//     { name: 'Submit button text', sysName: 'formButton', type: 'input' },
//     { name: 'Labels or Placeholders', sysName: 'placeholder', type: 'labelOrPlaceholder' },
//     { name: 'Form max width, px', sysName: 'maxWidth', type: 'number' },
//     { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
//     { name: 'Component comment', sysName: 'comment', type: 'comment' },
//   ]
// }
