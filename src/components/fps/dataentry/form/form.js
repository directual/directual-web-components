import React, { useState, useEffect } from 'react'
import styles from './form.module.css'
import Input from '../input/input'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'

export default function FpsForm({ data, onEvent, id, formWidth }) {
  const successText = data.successText || 'success'
  const formName = data.formName || 'formName'
  const isSuccessWrite = data.isSuccessWrite
  const fileds = data.fileds || []

  const [model, setModel] = useState({})
  const [loading, setLoading] = useState(false)
  const [modelError, setModelError] = useState({})

  const sendMsg = (msg) => {
    const message = { ...msg, _id: 'form_' + id }
    setLoading(true)
    if (onEvent) {
      onEvent(message)
    }
  }

  const onChange = (field, value) => {
    const modelCopy = { ...model }
    modelCopy[field] = value
    setModel(modelCopy)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(model)
    var containsError = false
    var modelErrorCopy = {}
    fileds.forEach((fields) => {
      if (!model[fields.sysName] || model[fields.sysName] === '') {
        modelErrorCopy[fields.sysName] = 'Please, fill the form'
        containsError = true
      }
    })
    setModelError(modelErrorCopy)
    if (!containsError) {
      sendMsg(model)
    }
  }
  data.error =
    data.error && data.error == '403'
      ? 'You have no permissions for viewing form'
      : data.error
  data.error =
    data.error && data.error == '511' ? 'Form is not configured' : data.error

  const typesMatching = {
    number: 'number',
    email: 'email'
  }

  return (
    <div className={styles.test}>
      <h1>{formName}</h1>

      {loading && <div>loading...</div>}
      {data.error && <div>error:{data.error}</div>}
      {isSuccessWrite && <div>{successText}</div>}

      {!isSuccessWrite && (
        <form onSubmit={submit} style={{maxWidth: formWidth ? formWidth : 'auto'}}>
          {fileds.map((field) => (
            <div>
              <Input
                label={field.sysName}
                placeholder={field.name}
                type={`${typesMatching[field.dataType] ? typesMatching[field.dataType] : 'string'}`}
                onChange={value => onChange(field.sysName, value)}
              />
              {modelError[field.sysName] && <b>{modelError[field.sysName]}</b>}
            </div>
          ))}
          <ActionPanel>
            <Button accent>Submit</Button>
          </ActionPanel>
        </form>
      )}
    </div>
  )
}
FpsForm.settings = {
  //icon: icon,
  name: 'Form',
  sysName: 'FpsForm',
  form: [
    { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    { name: 'Success text', sysName: 'successText', type: 'input' },
    { name: 'Form name', sysName: 'formName', type: 'input' }
  ]
}
