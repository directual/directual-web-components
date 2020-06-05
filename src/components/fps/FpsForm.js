import React from 'react'
import styles from '../../styles.module.css'
import icon from './../../icons/fps-form.svg'

class FpsForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      model: {},
      loading: false,
      modelError: {},
      error: props.data.error,
      isSuccessWrite: props.data.isSuccessWrite
    }

    this.successText = props.data.successText || 'success'
    this.formName = props.data.formName || 'formName'
    this.fileds = props.data.fileds || []
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      error: nextProps.data.error,
      isSuccessWrite: nextProps.data.isSuccessWrite,
      loading: false
    })
    this.forceUpdate()
  }

  sendMsg = (msg) => {
    const message = { ...msg, _id: 'form_' + this.props.id }
    this.setState({ loading: true })
    console.log(message)
    if (this.props.onEvent) {
      this.props.onEvent(message)
    }
  }

  onChange = (field) => (e) => {
    const modelCopy = { ...this.state.model }
    modelCopy[field] = e.target.value
    this.setState({ model: modelCopy })
  }

  submit = (e) => {
    e.preventDefault()
    var containsError = false
    var modelErrorCopy = {}
    this.fileds.forEach((fields) => {
      if (
        !this.state.model[fields.sysName] ||
        this.state.model[fields.sysName] === ''
      ) {
        modelErrorCopy[fields.sysName] = 'Please, fil the form'
        containsError = true
      }
    })
    this.setState({ modelError: modelErrorCopy })
    if (containsError) {
      console.log(modelErrorCopy)
    }
    if (!containsError) {
      this.sendMsg(this.state.model)
    }
  }

  render() {
    return (
      <div className={styles.test}>
        <h1>{this.formName}</h1>
        {this.state.loading && <div>loading...</div>}

        {this.state.error && <div>error:{this.state.error}</div>}
        {this.state.isSuccessWrite && <div>{this.successText}</div>}
        {!this.state.isSuccessWrite && (
          <form onSubmit={this.submit}>
            {this.fileds.map((field) => (
              <div>
                {field.name}{' '}
                <input name='' onChange={this.onChange(field.sysName)} />
                {this.state.modelError[field.sysName] && (
                  <b>{this.state.modelError[field.sysName]}</b>
                )}
              </div>
            ))}
            <input type='submit' />
          </form>
        )}
      </div>
    )
  }
}

FpsForm.settings = {
  icon: icon,
  name: "Form",
  sysName: 'FpsForm',
  form: [
    {name: "Select SL", sysName:"sl", type:"api-enpoint"},
    {name: "Success text", sysName:"successText", type: "input"},
    {name: "Form name", sysName:'formName', type: "input"},
  ]
}
export default FpsForm
