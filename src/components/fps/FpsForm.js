import React, { useState } from 'react'
import styles from '../../styles.module.css'

export default function ({ data, onEvent, id }) {
  const successText = data.successText || 'success'
  const formName = data.formName || 'formName'
  const error = data.error
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

  const onChange = (field) => (e) => {
    const modelCopy = { ...model }
    modelCopy[field] = e.target.value
    setModel(modelCopy)
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(model)
    var containsError = false
    var modelErrorCopy = {}
    fileds.forEach((fields) => {
      if (!model[fields.sysName] || model[fields.sysName] === '') {
        modelErrorCopy[fields.sysName] = 'Please, fil the form'
        containsError = true
      }
    })
    setModelError(modelErrorCopy)
    if (!containsError) {
      sendMsg(model)
    }
  }

  return (
    <div className={styles.test}>
      <h1>{formName}</h1>
      {loading && <div>loading...</div>}

      {error && <div>error:{error}</div>}
      {isSuccessWrite && <div>{successText}</div>}
      {!isSuccessWrite && (
        <form onSubmit={submit}>
          {fileds.map((field) => (
            <div>
              {field.name} <input name='' onChange={onChange(field.sysName)} />
              {modelError[field.sysName] && <b>{modelError[field.sysName]}</b>}
            </div>
          ))}
          <input type='submit' />
        </form>
      )}
    </div>
  )
}
