export function FpsFormOld({ auth, data, onEvent, id }) {

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
  
    const successText = data.successText || 'Submitted successfully'
    const formName = data.formName || ''
    const formDesc = data.formDesc || ''
    const formButton = data.formButton || 'Submit'
    const formButtonResubmit = data.formButtonResubmit || 'Submit again'
    const isSuccessWrite = data.isSuccessWrite
    let params = data.params || {}
    const fileds = []
    const formWidth = (data.maxWidth && parseInt(data.maxWidth)) || 'auto'
  
  
  
    console.log('------------ form data: -------------')
    console.log(data)
    // console.log('------------ auth: -------------')
    // console.log(auth)
    // console.log('------------ form model: -------------')
    // console.log(model)
  
    //console.log('rerender')
  
    // function sortFields(arr) {
    //   if (!arr) { return null }
    //   if (!params.fields) {
    //     params = { ...params, fields: {} }
    //   }
    //   arr.forEach((field, i) => {
    //     if (!params.fields[field.sysName]) {
    //       params.fields[field.sysName] = defaultParam
    //     } else {
    //       if (params.fields[field.sysName].hidden) {
    //         hiddenFields[field.sysName] = true
    //       }
    //     }
    //     arr[i].params = params.fields[field.sysName]
    //     arr[i].weight = arr[i].params.weight || 0;
    //   })
    //   return arr.sort((a, b) => a.weight - b.weight)
    // }
  
  
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
    let eidtID
  
    if (data.params.edit && auth.isAuth && auth.user) {
      eidtID = auth.user // если стоит галка, то забираем айди из юзера
    }
  
    eidtID = urlParams.get('@editObject') || eidtID; // если задаем в URL, приоритет выше
  
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
        if (field.params.required && !model[field.sysName] && !model[field.sysName] !== false && field.params.include && !field.params.hidden) { setIsValid(false); }
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
      return {
        sync,
        isSuccess,
        answerTitle,
        answerText
      }
    }
  
    // object editing TODO
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
            if (data.data[0] && typeof data.data[0][sysName] == 'string')
            {
              try {
                  getFieldVal = JSON.parse(data.data[0][sysName])
                }
                catch (e) {
                  console.log(e);
                }
            } else {
            getFieldVal = data.data[0] && data.data[0][sysName] }
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
        {formName && <h1>{formName}</h1>}
        {formDesc && showForm && (
          <p style={{ maxWidth: formWidth, marginBottom: 22 }}>
            {formDesc}
          </p>
        )}
  
        {loading && <Loader>Loading...</Loader>}
  
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