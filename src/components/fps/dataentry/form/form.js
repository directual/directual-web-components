import React, { useState, useEffect } from 'react'
import styles from './form.module.css'
import Input from '../input/input'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'
import Hint from '../../hint/hint'
import Loader from '../../loader/loader'
import icon from './../../../../icons/fps-cards.svg'

export function FormSection(props) {
  return (
    <div className={styles.FormSection}>
      <span>{props.title}</span>
    </div>
  )
}

export default function FpsForm({ data, onEvent, id, formWidth }) {
  const successText = data.successText || 'Success'
  const formName = data.formName || ''
  const formDesc = data.formDesc || ''
  const formButton = data.formButton || 'Submit'
  const isSuccessWrite = data.isSuccessWrite
  const fileds = data.fileds || []
  const params = data.params || {}

  const [model, setModel] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)

  console.log('------------ form data: -------------')
  console.log(data)


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
    console.log('submitting...')
    console.log(model)
    sendMsg(model)
  }

  data.error =
    data.error && data.error == '403'
      ? 'You have no permissions for viewing form'
      : data.error
  data.error =
    data.error && data.error == '511' ? 'Form is not configured' : data.error

  let hiddenFields = {}

  fileds.forEach((field, i) => {
    if (!params.fields[field.sysName]) {
      params.fields[field.sysName] = {
        include: true,
        hidden: false,
        required: false,
        isTextarea: false,
        textareaRows: 4,
        defaultValue: '',
        isPositive: false,
        quickSearch: true,
        allowAddLinks: false,
        dateTimeOn: true,
        isValid: true
      }
    } else {
      if (params.fields[field.sysName].hidden) {
        hiddenFields[field.sysName] = true
      }
    }
    fileds[i].params = params.fields[field.sysName]
  })

  //Hidden fields from URL query params:
  const queryString = typeof window !== 'undefined' ? window.location.search : '';
  const urlParams = new URLSearchParams(queryString);
  let hiddenFieldsValues
  for (const hiddenField in hiddenFields) {
    hiddenFieldsValues = { ...hiddenFieldsValues, [hiddenField]: urlParams.get(hiddenField) }
  }

  const onChange = (field, value) => {
    const modelCopy = { ...model, ...hiddenFieldsValues }
    modelCopy[field] = value
    setModel(modelCopy)
  }

  const typesMatching = (field) => {
    const matching = {
      number: 'number',
      email: 'email',
      string: 'string',
      link: 'select',
      arrayLink: 'multiselect',
      boolean: 'radio',
      date: 'date'
    }
    if (
      matching[field.dataType] == 'string' &&
      params.fields[field.sysName].isTextarea
    ) {
      return 'textarea'
    }
    return matching[field.dataType]
  }

  // Validation:
  useEffect(() => {
    setIsValid(true)
    fileds.forEach(field => {
      field.isValid == false && setIsValid(false);
      field.params.required && !model[field.sysName] && field.params.include &&
        !field.params.hidden && setIsValid(false)
    })
  }, [model])

  const validationHandler = (field, valid) => {
    if (fileds) { fileds[fileds.indexOf(fileds.filter(f => f.sysName == field)[0])].isValid = valid }
  }

  useEffect(() => {
    if (data.error || data.response) {
      setLoading(false)
    }
  }, [data.error, data.response])

  return (
    <div className={styles.test}>
      {formName && <h1>{formName}</h1>}
      {formDesc && (
        <p style={{ maxWidth: parseInt(formWidth) || 'auto', marginBottom: 22 }}>
          {formDesc}
        </p>
      )}

      {loading && <Loader>Loading...</Loader>}

      {data.error &&
        <Hint title='Form Error' error>{data.error}</Hint>}

      {/* Standard response processing: */}
      {!data.params.result.isSuccessField && <React.Fragment>
        {isSuccessWrite && <Hint title='Success' ok>{successText}</Hint>}
      </React.Fragment>}


      {/* Custon response processing: */}
      {data.params.result.isSuccessField && <React.Fragment>
        {data.response && data.response[data.params.result.isSuccessField.key] == 'false' && <React.Fragment>
          <Hint title='Sync scenario negative response' error>{data.params.result.resultMessageField && data.response[data.params.result.resultMessageField.key]}</Hint>
          <Button icon='edit' onClick={()=>{
            setShowForm(true);

          }}>Edit my form response</Button>
          </React.Fragment>}
        {data.response && data.response[data.params.result.isSuccessField.key] == 'true' &&
          <Hint title='Sync scenario positive response' ok>{data.params.result.resultMessageField && data.response[data.params.result.resultMessageField.key]}</Hint>}
      </React.Fragment>}

      {showForm && !loading && (
        <form onSubmit={submit} style={{ maxWidth: formWidth ? parseInt(formWidth) : 'auto' }}>
          {fileds.map((field) => (field.params.include && !field.params.hidden &&
            <div>
              {typesMatching(field) == 'radio' &&
                <Input type='radio'
                  //defaultValue={false}
                  label={field.name}
                  onChange={value => onChange(field.sysName, value)}
                  options={
                    [
                      {
                        value: true,
                        label: 'Yes'
                      },
                      {
                        value: false,
                        label: 'No'
                      }

                    ]
                  }
                />
              }
              {typesMatching(field) != 'radio' &&
                <Input
                  sysName={field.sysName}
                  validationHandler={validationHandler}
                  label={data.placeholder != "true" ? field.name : ''}
                  placeholder={data.placeholder == "true" ? field.name : ''}
                  required={field.params.required}
                  positive={field.params.isPositive}
                  options={field.params.searchData || []}
                  defaultValue={field.params.defaultValue}
                  timeFormat={`${field.params.dateTimeOn ? ' hh:mm A' : ''}`}
                  type={typesMatching(field)}
                  rows={field.params.textareaRows}
                  onChange={value => onChange(field.sysName, value)}
                />}
              {/* {modelError[field.sysName] && <b>{modelError[field.sysName]}</b>} */}
            </div>
          ))}
          <ActionPanel>
            <Button accent disabled={!isValid}>{formButton}</Button>
          </ActionPanel>
        </form>
      )}
    </div>
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
    { name: 'Labels or Placeholders', sysName: 'placeholder', type: 'labelOrPlaceholder' },
    { name: 'Form max width, px', sysName: 'maxWidth', type: 'number' },
  ]
}
