import React, { useState, useEffect, useRef } from 'react'
import styles from '../table/table.module.css'
import Backdrop from '../../backdrop/backdrop'
import ActionPanel from '../../actionspanel/actionspanel'
import Button from '../../button/button'
import Input from '../../dataentry/input/input'
import { FormSection } from '../../dataentry/form/FpsForm'
import Loader from '../../loader/loader'
import TabsPane from '../../layout/tabpane/tabpane'
import { Markdown } from '../../article/mkd'
import moment from 'moment'
import Hint from '../../hint/hint'
import Media from '../../media/media'
import { InputForm } from '../../dataentry/form/InputForm'
import _, { isInteger, isNumber } from 'lodash'
//import copy from 'copy-to-clipboard';


export function ObjectCard(props) {

    const [showLinkedObject, setShowLinkedObject] = useState(false)
    const [linkedObject, setLinkedObject] = useState({})
    const [linkedObjectStruct, setLinkedObjectStruct] = useState()
    const [model, setModel] = useState(props.object)
    const [currentObject, setCurrentObject] = useState(props.object)
    const [successWeb3, setSuccessWeb3] = useState(false)

    const { dict, lang } = props

    // support previous component version:
    const oldFashioned = (props.params && !props.params.data) ? true : false

    // console.log('==============card props==============')
    // console.log(props)

    const data = props.data || {}

    const editingOn = props.params.data && props.params.data.fields &&
        props.params.data.fields.id && props.params.data.fields.id.write && props.params.data.fields.id.read &&
        props.params.data.writeFields && props.params.data.writeFields.length > 0


    // console.log('==============CARD MODEL==============')
    // console.log(model)

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        e.key == 'Escape' && props.onClose()
    }

    const refresh = (notLoading) => {
        props.refresh(notLoading)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    //----------------------

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        // console.log('transformTableFieldScheme')
        // console.log(sysname)
        // console.log(tableFieldScheme)
        let newTableFieldScheme = tableFieldScheme.filter(i => i[0].startsWith(sysname + '.'))
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach(i => i[0] = i[0].substring(sysname.length + 1))
        return deepClone
    }

    // Gathers current structure info:
    const getStructure = (obj, tableFieldScheme, tableStructures) => {
        tableFieldScheme = tableFieldScheme || [...props.tableFieldScheme]
        tableStructures = tableStructures || props.tableStructures
        let structure = {}
        for (const field in obj) {
            if (typeof obj[field] != 'object') {
                if (tableFieldScheme.filter(i => i[0] == field).length > 0) {
                    structure.id = tableFieldScheme.filter(i => i[0] === field)[0][1]
                }
            }
        }
        if (structure.id && tableStructures[structure.id]) {
            structure.sysName = tableStructures[structure.id].sysName
            structure.name = tableStructures[structure.id].name
            structure.visibleName = tableStructures[structure.id] && (tableStructures[structure.id].jsonViewIdSettings ? Object.values(JSON.parse(tableStructures[structure.id].jsonViewIdSettings)).map(i => i = i.sysName) : [])
            structure.fieldStructure = JSON.parse(tableStructures[structure.id].jsonObject)
        }
        return structure
    }
    const structure = getStructure(props.object)
    //-----------------------------

    // console.log('props.object')
    // console.log(props.object)

    //Gathers current object info (e.g. sysName, type):
    const composeObject = (obj, str) => {
        // console.log('composeObject')
        // console.log(obj)
        // console.log(str)
        let object = {}
        if (obj && str) {
            for (const field in obj) {
                object[field] = {}
                if (str.fieldStructure && field && field[0] != '@') {
                    object[field].value = obj[field]
                    let fieldStructure = str.fieldStructure.filter(i => i.sysName == field)[0]
                    // console.log('====structure====')
                    // console.log(fieldStructure)
                    // console.log(field)
                    object[field].name = fieldStructure.name
                    object[field].sysName = field
                    object[field].dataType = fieldStructure.dataType
                    object[field].format = fieldStructure.format
                    object[field].formatOptions = fieldStructure.formatOptions
                }
            }
        }
        return object
    }
    const object = composeObject(props.object, structure)

    // arrange tabs:
    let cardTabs = []
    if (props.params.data) {
        cardTabs = props.params.data.columnOrder.map(tab => {
            let fieldDetails = {}
            for (const field in props.params.data.fieldParams) {
                fieldDetails[field] = props.params.data.fieldParams[field]
            }
            for (const field in props.params.data.fields) {
                fieldDetails[field] = { ...fieldDetails[field], ...props.params.data.fields[field] }
            }
            for (const field in fieldDetails) {
                if (props.params.fields && props.params.fields[field] && props.params.fields[field].searchData) {
                    fieldDetails[field].searchData = props.params.fields[field].searchData
                }
            }
            return {
                key: tab,
                title: props.params.data.columns[tab].title,
                content: composeTabContent(props.params.data.columns[tab].fieldIds, fieldDetails, props.params.deleteField, props.params && props.params.actions)
            }
        })
    }

    // perform an Action



    function submitAction(actionParams) {
        let mapping = {} // calling api-endpoint

        actionParams.formMapping && actionParams.formMapping.forEach(row => {
            // console.log('row')
            // console.log(row)
            // console.log(mapping)
            // В отличие от вызова аналогичной функции из cards.js мы должны собирать значения с вложенных объектов!
            if (row.type == 'user') { mapping[row.target] = props.auth ? props.auth.user : null }
            if (row.type == 'const') { mapping[row.target] = row.value }
            if (row.type == 'objectField') {
                // console.log('props.parentObject')
                // console.log(props.parentObject)
                if (props.parentObject && props.parentObject[row.value]) { // из дочерней карточки дергаем поле из родительской
                    mapping[row.target] = typeof props.parentObject[row.value].value != 'object' ?
                        props.parentObject[row.value].value : // вроде бы надо добавить value
                        Array.isArray(props.parentObject[row.value].value) ?
                            props.parentObject[row.value].value.map(i => i.id).join(',') :
                            props.parentObject[row.value].value.id
                } else { // из основной карточки дергаем из основной же
                    mapping[row.target] = typeof props.object[row.value] != 'object' ?
                        props.object[row.value] :
                        Array.isArray(props.object[row.value]) ?
                            props.object[row.value].map(i => i.id).join(',') :
                            props.object[row.value].id
                }
            }
            if (row.type == 'linkedField') { // из дочерней дергаем поля дочерней же
                mapping[row.target] = typeof props.object[row.value] != 'object' ?
                    props.object[row.value] :
                    Array.isArray(props.object[row.value]) ?
                        props.object[row.value].map(i => i.id).join(',') :
                        props.object[row.value].id
            }
        })
        mapping = { ...mapping, ...actionParams.formData }
        const sl = actionParams.sysName

        let options = {} // calling web3-api
        if (actionParams.web3) {
            options.web3 = true
        }
        const { auth } = props
        // gathering mapping for web3-api call:
        actionParams.web3Mapping &&
            actionParams.web3Mapping.length &&
            actionParams.web3Mapping.forEach((row) => {
                if (row.type == 'user') {
                    options[row.target] = auth ? auth.user : null
                }
                if (row.type == 'const') {
                    options[row.target] = row.value
                }
                if (row.type == 'objectField') {
                    // console.log('web3Mapping')
                    // console.log(row)
                    // console.log(object)
                    options[row.target] =
                        typeof object[row.value] !== 'object'
                            ? object[row.value]
                            : Array.isArray(object[row.value])
                                ? object[row.value].map((i) => i.id).join(',')
                                : (object[row.value].id || object[row.value].value)
                }
            })

        // actionParams.web3Mapping && 
        // actionParams.web3Mapping.length && 
        // actionParams.web3Mapping.forEach(row => {
        //     if (row.type == 'user') { options[row.target] = props.auth ? props.auth.user : null }
        //     if (row.type == 'user') { options[row.target] = props.auth ? props.auth.user : null }
        //     if (row.type == 'const') { options[row.target] = row.value }
        //     if (row.type == 'objectField') {
        //         options[row.target] = typeof object[row.value] != 'object' ?
        //             object[row.value] :
        //             Array.isArray(object[row.value]) ?
        //                 object[row.value].map(i => i.id).join(',') :
        //                 object[row.value].id
        //     }
        // })

        let result = props.executeAction(mapping, sl, options)
        if (result) {
            result
                .then((ok) => {
                    console.log("ok async" + ok)
                    setSuccessWeb3(true)
                })
                .catch((err) => {
                    console.log("err async")
                    console.log(err)
                })
        }
    }


    //------------------------------
    function getLinkName(sysname, obj, fieldScheme) {
        // console.log('getLinkName')
        // console.log(sysname)
        // console.log(obj)
        // console.log(fieldScheme)
        fieldScheme = fieldScheme || props.tableFieldScheme
        const structure = getStructure(obj, transformTableFieldScheme(sysname, fieldScheme), props.tableStructures)
        const linkNameArr = []
        structure.visibleName && structure.visibleName.forEach(field => {
            const fieldDetails = structure.fieldStructure.filter(i => i.sysName == field)[0]
            if (obj[field] || obj[field] == 0) {
                if (fieldDetails.dataType == 'date') {
                    linkNameArr.push(formatDate(obj[field], fieldDetails.formatOptions))
                } else {
                    if (typeof obj[field] == 'object') {
                        linkNameArr.push(getLinkName(field, obj[field], transformTableFieldScheme(sysname, fieldScheme)))
                    } else {
                        linkNameArr.push(obj[field])
                    }
                }
            }
        })
        const linkName = linkNameArr.length > 0 ? linkNameArr.join(' ') : null
        let displayID = ''
        if (typeof obj == 'string') { displayID = obj }
        return linkName == 0 ? '0' : linkName || displayID || obj.id || dict[lang].card.noVisibleName
    }

    const scrollDivRef = useRef(null)
    const [showBorder, setShowBorder] = useState(false)

    const handleScroll = () => {
        scrollDivRef.current.scrollTop >= 10 ?
            setShowBorder(true) :
            setShowBorder(false)
    }

    const noTabs = <div>Update components settings</div>

    function formatDate(value, formatOptions) {
        formatOptions = formatOptions || {}
        const formattedDate = formatOptions.isUTC == 'true' ?
            moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
            :
            moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
        return formattedDate
    }

    function composeTabContent(fields, fieldParams, deleteField, actions) {

        // группируем actions
        const transform = (a, fieldParams) => {
            const arr = a.map(i => { return { id: i, type: fieldParams[i] && fieldParams[i].type } })
            return arr.reduce((acc, item, i) => {
                const { type } = item;
                if (i === 0 && type !== "action") {
                    return [...acc, item];
                }
                const prevItem = arr[i - 1];
                const prevType = prevItem && prevItem.type;

                if (type === "action" && prevType !== "action") {
                    return [...acc, { type: "actions", content: [item] }];
                }
                if (type === "action" && prevType === "action") {
                    const accCopy = [...acc];
                    const group = accCopy.pop();
                    return [
                        ...accCopy,
                        { type: "actions", content: [...group.content, item] }
                    ];
                } else {
                    return [...acc, item];
                }
            }, []);
        };
        const transformedFields = fields && fieldParams ? transform(fields, fieldParams) : []

        return (
            <React.Fragment>
                {transformedFields.map((f, i) => {
                    const fieldSysName = f.id
                    let field = f.type != 'actions' ? fieldParams[fieldSysName] : f
                    if (!field) return <React.Fragment></React.Fragment>
                    field = {
                        ...field,
                        name: field.content,
                        sysName: field.id
                    }
                    if (field.type == 'actions') {
                        return <div className={styles.actionsWrapper}>
                            {field.content.map(action => {
                                const actionParams = props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                    props.params.actions.filter(i => action.id == 'action__' + i.id)[0]
                                if (actionParams && actionParams.displayAs == 'form') {
                                    return <CardAction
                                        loading={props.loading}
                                        action={action.id}
                                        writeError={data.writeError}
                                        aType='actionForm'
                                        successWeb3={successWeb3}
                                        object={object}
                                        refresh={refresh}
                                        checkActionCond={cond => props.checkActionCond(cond, object)}
                                        onClose={props.onTerminate}
                                        submitAction={submitAction}
                                        actionParams={props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                            props.params.actions.filter(i => action.id == 'action__' + i.id)[0]}
                                    />
                                } else {
                                    return <CardAction
                                        loading={props.loading}
                                        action={action.id}
                                        successWeb3={successWeb3}
                                        refresh={refresh}
                                        writeError={data.writeError}
                                        aType='actionButton'
                                        object={object}
                                        onClose={props.onTerminate}
                                        checkActionCond={cond => props.checkActionCond(cond, object)}
                                        submitAction={submitAction}
                                        actionParams={props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                            props.params.actions.filter(i => action.id == 'action__' + i.id)[0]}
                                    />
                                }
                            })}
                        </div>

                    }
                    if (!field.include || !object[field.sysName]) { return null } // скрытые поля
                    return <CardField
                        //debug
                        model={model}
                        key={i}
                        editingOn={editingOn}
                        dict={dict}
                        handleRoute={props.handleRoute}
                        lang={lang}
                        field={field}
                        formatDate={formatDate}
                        object={object}
                        setModel={value => { setModel(value); }}
                        setLinkedObject={setLinkedObject}
                        setShowLinkedObject={setShowLinkedObject}
                        getStructure={getStructure}
                        composeObject={composeObject}
                        transformTableFieldScheme={transformTableFieldScheme}
                        tableFieldScheme={props.tableFieldScheme}
                        getLinkName={getLinkName}
                        setLinkedObjectStruct={fieldSysName =>
                            setLinkedObjectStruct(transformTableFieldScheme(fieldSysName, props.tableFieldScheme))}
                    />
                })}
                {fields && fieldParams && fields.filter(i =>
                    fieldParams[i] && fieldParams[i].write == true
                    && fieldParams[i].include == true
                ) && fields.filter(i =>
                    fieldParams[i] && fieldParams[i].write == true
                    && fieldParams[i].include == true
                ).length > 0 &&
                    <SaveCard // Сохранить изменения
                        model={model}
                        loading={props.loading}
                        editingOn={editingOn}
                        dict={dict}
                        lang={lang}
                        currentObject={currentObject}
                        submit={props.submit}
                        setCurrentObject={setCurrentObject}
                        setModel={setModel}
                    />
                }
            </React.Fragment>
        )
    }

    let cardHeader = structure.visibleName ? structure.visibleName.map(headerField => object[headerField] ?
        typeof object[headerField].value == 'object' ?
            !Array.isArray(object[headerField].value) ?
                getLinkName(headerField, object[headerField].value) :
                object[headerField].value.map(i => getLinkName(headerField, i)).join(', ')
            : object[headerField].dataType == 'date' ?
                formatDate(object[headerField].value, object[headerField].formatOptions) :
                object[headerField].value
        : null).join(' ')
        :
        (object.id || dict[lang].card.noVisibleName)

    cardHeader = (cardHeader == ''
        || cardHeader == ' '
        || cardHeader == '  '
        || cardHeader == '   '
        || cardHeader == '    '
        || cardHeader == '     '
        || cardHeader == '      ') ? (object.id || dict[lang].card.noVisibleName) :
        cardHeader

    cardHeader = (typeof cardHeader == 'object') ? (cardHeader.value || dict[lang].card.noVisibleName) : cardHeader

    const copyUrlToClipboard = () => {
        //copy(window.location.href)
    }

    return (
        <div className={styles.objectCard}>
            {/* {props.shareble && // todo: сделать прямые ссылки на карточку
                <div title={dict[lang].card.copyLink}
                    className={`${styles.shareObject} icon icon-copy`}
                    onClick={copyUrlToClipboard}
                />
            }*/}
            {props.refresh &&
                <div title={dict[lang].card.refreshCard}
                    className={`${styles.refreshObject} icon icon-refresh`}
                    onClick={() => refresh(true)}
                />
            }
            <div className={styles.objectCardHeader}>
                <div onClick={props.onClose}
                    className={`${styles.closeObjectCard} icon ${props.firstCard ? 'icon-close' : 'icon-back'} ${showLinkedObject && styles.hidden}`}></div>
                <h2 className={`${props.shareble && styles.narrowH2}`}>{props.params && props.params.data && props.params.data.subHeader}
                    {cardHeader}
                </h2>
            </div>
            <div
                ref={scrollDivRef}
                onScroll={handleScroll}
                className=
                {`
                        ${styles.objectCardBody}
                        ${showBorder && styles.bordered}
                        ${oldFashioned && styles.notabs}
                        ${cardTabs.length == 1 && styles.notabs}
                    `}>
                {oldFashioned && noTabs}
                {!oldFashioned && cardTabs.length > 1 &&
                    <TabsPane
                        tabs={cardTabs}
                        currentTabKey={cardTabs[0].key}
                        fixedScroll
                    />}
                {!oldFashioned && cardTabs.length == 1 &&
                    cardTabs[0].content}
            </div>

            {showLinkedObject &&
                <React.Fragment>
                    <Backdrop onClick={() => setShowLinkedObject(false)} hoverable rounded
                        label={structure.visibleName ? structure.visibleName.map(headerField => object[headerField] ? object[headerField].value : null).join(' ')
                            :
                            (object.id || dict[lang].card.noVisibleName)} />
                    <ObjectCard
                        onClose={() => { setShowLinkedObject(false) }}
                        onTerminate={() => props.onClose()}
                        auth={props.auth}
                        refresh={refresh}
                        handleRoute={props.handleRoute}
                        data={data}
                        dict={dict}
                        lang={lang}
                        loading={props.loading}
                        object={linkedObject && linkedObject.object}
                        params={linkedObject && { ...linkedObject.params, actions: props.params.actions }}
                        parentObject={object}
                        tableFieldScheme={linkedObjectStruct}
                        executeAction={props.executeAction}
                        tableStructures={props.tableStructures}
                        checkActionCond={props.checkActionCond}
                    />
                </React.Fragment>}
        </div>
    )
}

function CardField({ field, object, handleRoute, model, setModel, debug, editingOn, formatDate, tableFieldScheme, dict, lang,
    setLinkedObject, setLinkedObjectStruct, setShowLinkedObject, getLinkName, transformTableFieldScheme, getStructure, composeObject }) {
    const [edit, setEdit] = useState(false)

    const getResolution = line => {
        if (!line) return null
        const regex = /\....?.?.?$/g;
        let found
        try {
            found = Array.isArray(line) && line[0] ? line[0].match(regex) : line.match(regex);
        }
        catch (e) {
            console.log(e);
        }
        return found ? found[0] : ''
    }

    // console.log(field.dataType)
    // console.log(field)
    // console.log(object)
    field.formatOptions = object[field.sysName].formatOptions

    return (
        <div key={field.sysName} className={styles.objFieldWrapper}>
            {debug && <div>
                <p className='dd-debug'>{JSON.stringify(field)}</p>
                <p className='dd-debug'><b>object: </b>{JSON.stringify(object[field.sysName])}</p>
            </div>}

            {/* FILES */}
            {(field.dataType == 'file') &&
                <InputForm
                    field={field}
                    defaultValue={object[field.sysName].value}
                    editingOn={field.write && editingOn}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                />
            }
            <div style={{ display: 'none' }}>
                {/* КАРТИНКИ */}
                {field.dataType == 'file' && field.read && field.fileImage &&
                    <React.Fragment>
                        <span className={styles.label}>
                            {field.name || field.sysName}</span>
                        <div className={styles.cardImage}
                            style={{
                                width: field.fileImageSize || 200,
                                height: field.fileImageSize || 200,
                                backgroundImage: `url(${object[field.sysName].value})`,
                                borderRadius: field.fileImageFormat == 'circle' ? (field.fileImageSize || 200) : 0
                            }}
                        >
                            {field.write && editingOn && <div
                                className={`${styles.editPic} icon icon-edit`}
                                onClick={() => setEdit(!edit)}
                            ></div>}
                            {!object[field.sysName].value && <span className={styles.noPic}>no picture</span>}
                        </div>
                    </React.Fragment>}

                {/* ФАЙЛЫ */}
                {field.dataType == 'file' && field.read && !field.fileImage &&
                    <React.Fragment>
                        <span className={styles.label}>
                            {field.name || field.sysName}</span>
                        <div className={styles.cardFile}>
                            {model[field.sysName] &&
                                <a href={model[field.sysName]} target="_blank" className={`${styles.download} icon icon-download`}>
                                    <span>Download <code>{' ' + getResolution(model[field.sysName]) || 'file'}</code></span>
                                </a>}
                            {field.write && editingOn &&
                                <Button icon={`${model[field.sysName] ? 'refresh' : 'upload'}`} small onClick={() => setEdit(!edit)}>
                                    {model[field.sysName] ? 'Change file' : 'Upload file'}</Button>}
                        </div>
                    </React.Fragment>}

                {/* ЗАГРУЗКА ФАЙЛА ИЛИ КАРТИНКИ */}
                {field.dataType == 'file' && edit &&
                    <Input
                        label={!field.read && (field.name || field.sysName)}
                        icon='clip'
                        description={field.descriptionFlag && field.description}
                        placeholder='Enter file URL'
                        defaultValue={model[field.sysName]}
                        onChange={value => setModel({ ...model, [field.sysName]: value })}
                    />}
            </div>
            {/* ========================== */}
            {/* СТРОКИ */}
            {(field.dataType == 'string') &&
                <React.Fragment>
                    <InputForm
                        field={field}
                        defaultValue={object[field.sysName].value}
                        editingOn={field.write && editingOn && !field.disableEditing}
                        // to do:
                        isHint={field.displayAsHint}
                        hintType={field.hintType}
                        onChange={value => setModel({ ...model, [field.sysName]: value })}
                    /></React.Fragment>
            }

            {/* ДАТЫ */}
            {(field.dataType == 'date') &&
                <React.Fragment>
                    {(field.write && editingOn) ?
                        <Input
                            type='date'
                            description={field.descriptionFlag && field.description}
                            label={field.name || field.sysName}
                            defaultValue={model[field.sysName]}

                            timeConstraints={field.formatOptions && field.formatOptions.timeConstraints}
                            dateFormat={field.formatOptions ? field.formatOptions.dateFormat : 'DD/MM/Y '}
                            timeFormat={field.formatOptions ? field.formatOptions.timeFormat : 'HH:mm'}
                            locale={field.formatOptions ? field.formatOptions.dateLocale : 'en-gb'}
                            utc={field.formatOptions ? field.formatOptions.isUTC == 'true' : true}
                            validWeekDays={field.formatOptions ? field.formatOptions.validWeekDays : null}

                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                        /> :
                        <FieldReadOnly formatDate={formatDate} field={field} object={object} date weblink={{}} />
                    }
                </React.Fragment>}

            {/* BOOLEAN */}
            {(field.dataType == 'boolean') &&
                <React.Fragment>
                    <InputForm
                        field={field}
                        defaultValue={typeof object[field.sysName].value == 'undefined' ? 'undefined' :
                            object[field.sysName].value ? 'true' : 'false'}
                        editingOn={field.write && editingOn}
                        onChange={value => setModel({ ...model, [field.sysName]: value })}
                    />
                </React.Fragment>}

            {/* LINK & ARRAY LINK */}
            {(field.dataType == 'link' || field.dataType == 'arrayLink') &&
                <FieldLink
                    model={model}
                    editingOn={editingOn}
                    object={object}
                    dict={dict}
                    handleRoute={handleRoute}
                    lang={lang}
                    field={field}
                    composeObject={composeObject}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                    setLinkedObject={setLinkedObject}
                    setLinkedObjectStruct={setLinkedObjectStruct}
                    setShowLinkedObject={setShowLinkedObject}
                    getLinkName={getLinkName}
                    getStructure={getStructure}
                    tableFieldScheme={tableFieldScheme}
                    transformTableFieldScheme={transformTableFieldScheme}
                />
            }

            {/* JSON */}
            {(field.dataType == 'json') &&
                <InputForm
                    field={field}
                    //mapRefreshOff
                    defaultValue={model[field.sysName] && (model[field.sysName].value || model[field.sysName])}
                    editingOn={field.write && editingOn}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                />
            }

            {/* ID */}
            {field.dataType == 'id' &&
                <Input
                    type='string'
                    copy
                    code
                    description={field.descriptionFlag && field.description}
                    label={field.name || field.sysName}
                    defaultValue={model[field.sysName]}
                />}

            {/* ВСЕ ОСТАЛЬНОЕ */}
            {field.dataType != 'string' &&
                field.dataType != 'file' &&
                field.dataType != 'boolean' &&
                field.dataType != 'date' &&
                field.dataType != 'link' &&
                field.dataType != 'arrayLink' &&
                field.dataType != 'json' &&
                field.dataType != 'id' &&
                <React.Fragment>
                    {(field.write && editingOn && !field.disableEditing) ?
                        <Input
                            type={field.dataType}
                            //tip='test'
                            positive={field.format == 'positiveNum'}
                            description={field.descriptionFlag && field.description}
                            label={field.name || field.sysName}
                            //defaultValue={object[field.sysName].value}
                            defaultValue={model[field.sysName]}
                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                        /> :
                        <FieldReadOnly field={field} object={object} weblink={{}} />}
                </React.Fragment>}



        </div>
    )
}

function FieldReadOnly({ field, object, weblink, date, formatDate }) {

    const jsonParse = def => {
        try {
            return JSON.stringify(JSON.parse(def), 0, 3)
        } catch (e) {
            console.log(e);
            return def
        }
    }

    return (
        <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}</span>

            {field.descriptionFlag && field.description &&
                <span className={styles.description}>
                    {field.description}</span>}

            {date ?
                <div>
                    {
                        (object[field.sysName] && object[field.sysName].value) ?
                            formatDate(object[field.sysName].value, field.formatOptions)
                            : '—'}
                </div> :
                <React.Fragment>

                    {field.dataType != 'boolean' ?
                        !object[field.sysName].value ?
                            <span className={styles.novalue}>—</span> :
                            !weblink.flag ?
                                <span className={styles.fieldValue}>
                                    {field.dataType != 'json' ?
                                        object[field.sysName].value :
                                        <pre><code>{jsonParse(object[field.sysName].value)}</code></pre>}
                                </span> :
                                <a href={object[field.sysName].value} target="_blank">
                                    {weblink.weblink || object[field.sysName].value}
                                </a>
                        :
                        <span className={`icon icon-${object[field.sysName] && (object[field.sysName].value ? `done` : `ban`)}`}>
                            {object[field.sysName] && (object[field.sysName].value ? 'Yes' : 'No')}</span>}
                </React.Fragment>}
        </React.Fragment>
    )
}

function SaveCard({ model, currentObject, submit, setCurrentObject, setModel, loading, editingOn, dict, lang }) {

    return (
        <div>
            {editingOn &&
                <ActionPanel margin={{ top: 24, bottom: 12 }}>
                    {/* <pre className='dd-debug'>{JSON.stringify(model,0,3)}</pre> */}
                    {/* <pre className='dd-debug'>{JSON.stringify(currentObject,0,3)}</pre> */}
                    <Button
                        disabled={JSON.stringify(model) === JSON.stringify(currentObject)}
                        accent
                        loading={loading}
                        icon='done'
                        onClick={() => {
                            console.log('Save changes')
                            console.log(model)
                            setCurrentObject(model);
                            submit(model);
                        }}
                    >
                        {dict[lang].card.saveChanges}</Button>
                    <Button danger icon='ban'
                        onClick={() => setModel(currentObject)}
                        loading={loading}
                        disabled={JSON.stringify(model) === JSON.stringify(currentObject)}>
                        {dict[lang].card.discardChanges}</Button>
                </ActionPanel>}
        </div>
    )
}

function FieldLink({ field, handleRoute, model, onChange, setLinkedObject, object, tableFieldScheme, dict, lang, composeObject,
    setLinkedObjectStruct, setShowLinkedObject, getLinkName, editingOn, transformTableFieldScheme, getStructure }) {

    const linkedObj = object[field.sysName].value ? Array.isArray(object[field.sysName].value) ? object[field.sysName].value[0] : object[field.sysName].value : {}
    const struct = getStructure(linkedObj, transformTableFieldScheme(field.sysName, tableFieldScheme))
    //const enrichedObject = composeObject(linkedObj, struct)

    // console.log("FieldLink")
    // console.log(object[field.sysName])
    // console.log(linkedObj)
    // console.log(struct)
    //if (object[field.sysName].sysName == "accountId") 
    //return <div />

    // в объекте может не быть каких-то полей, поэтому я ебанул синтетический объект, чтобы собрать
    // по структуре всю метаинформацию:
    let syntheticObject = {}
    struct && struct.fieldStructure && struct.fieldStructure.length &&
        struct.fieldStructure.forEach(i => {
            syntheticObject[i.sysName] = ''
        })

    const enrichedObject = composeObject(syntheticObject, struct)
    // console.log('enrichedObject')
    // console.log(enrichedObject)

    const [edit, setEdit] = useState(false)

    function numberWithSpaces(x) {
        if (!x && x != 0) return null
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const formatDate = (value, formatOptions) => {
        if (!value) { return null }
        formatOptions = formatOptions || {}
        const formattedDate = formatOptions.isUTC == 'true' ?
            moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
            :
            moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
        return formattedDate
    }

    // console.log('Field  Link')
    // console.log(field)

    const { sortArrayLink, sortByField, sortDirection } = field

    const sortArray = array => {
        const legacy = { // кусочек легаси, пусть будет
            asc: 'asc',
            desc: 'desc',
            ascending: 'asc',
            descending: 'desc'
        }
        const sort = sortDirection ? legacy[sortDirection] : 'asc'
        if (!array) return array
        if (!Array.isArray(array)) { array = [array] }

        if (!sortArrayLink || !sortByField) return array
        const sortedrray = _.orderBy(array, sortByField, sort)
        return sortedrray
    }

    const [renderAL, setRenderAL] = useState(sortArray(object[field.sysName].value) || [])
    const [costyl, setCostyl] = useState(object)

    useEffect(() => {
        if (JSON.stringify(costyl) != JSON.stringify(object)) {
            setCostyl(object)
            setRenderAL(sortArray(object[field.sysName].value) || [])
        }
    }, [object])

    useEffect(() => {
        if (JSON.stringify(model[field.sysName]) != JSON.stringify(renderAL) && typeof model[field.sysName] !== 'string') {
            setRenderAL(sortArray(model[field.sysName]) || [])
        }
    }, [model])

    const processField = (f, fieldName, nospaces) => {
        if (enrichedObject[fieldName].dataType == 'boolean') return f ? <div className='icon icon-done'>{_.get(enrichedObject[fieldName], 'formatOptions.booleanOptions[0]') || 'true'}</div> : <div className='icon icon-ban'>{_.get(enrichedObject[fieldName], 'formatOptions.booleanOptions[1]') || 'false'}</div>
        if (!f) return null
        if (!enrichedObject[fieldName]) return typeof f == 'object' ? getLinkName(fieldName, f, transformTableFieldScheme(field.sysName, tableFieldScheme)) : f
        if (enrichedObject[fieldName].dataType == 'date') return formatDate(f, enrichedObject[fieldName].formatOptions)
        if (enrichedObject[fieldName].dataType == 'file' && enrichedObject[fieldName].format == "image") return <img src={f} className={styles.cartImage} />
        if (enrichedObject[fieldName].dataType == 'file' && enrichedObject[fieldName].format == "multipleImages") return <img src={Array.isArray(f) ? f ? f[0] : null : f.split(',') ? f.split(',')[0] : null} className={styles.cartImage} />
        if (enrichedObject[fieldName].dataType == 'number') return nospaces ? f : numberWithSpaces(f)
        if (typeof f == 'object') return getLinkName(fieldName, f, transformTableFieldScheme(field.sysName, tableFieldScheme))
        return f
    }

    const removeItemCart = i => {
        // console.log('deleting item... ' + i)
        const saveAL = [...renderAL]
        saveAL.splice(i, 1)
        setRenderAL(saveAL)
        const newValue = saveAL.length > 0 ? saveAL.map(i => i.id || i).join(',') : null
        onChange(newValue)
    }

    // console.log('renderAL')
    // console.log(renderAL)

    const summByColumn = fieldName => {
        if (!renderAL.length) return 0
        if (renderAL.length == 1) return typeof renderAL[0][fieldName] == 'object' ? 1 : renderAL[0][fieldName]

        const sum = renderAL.reduce((total, num) => {
            const newTotal = typeof total == 'number' ? total :
                typeof total[fieldName] == 'number' ? total[fieldName] : total[fieldName] ? 1 : 0
            const plus = typeof num[fieldName] == 'number' ? num[fieldName] : num[fieldName] ? 1 : 0
            return parseFloat(newTotal) + parseFloat(plus)
        })
        let summ = typeof sum == 'number' ? parseFloat(sum) : 0 //.toFixed(2)

        return JSON.stringify(sum)
    }

    function transformObject(object) {
        for (const key in object) {
            if (_.isObject(object[key]) && 'id' in object[key]) {
                object[key] = object[key]['id'];
            }
        }
        return object;
    }

    const encodeValues = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                obj[key] = encodeURI(obj[key]);
            }
        }
        return obj;
    }

    const composeURL = f => {
        const encodedLinkedData = encodeValues(transformObject(_.cloneDeep(model[f.sysName])))
        const clickableField = "{{" + (_.trim(_.get(f, 'clickableField'), "/") || "id") + "}}"
        const encodedData = encodeValues(transformObject(_.cloneDeep(model)));
        const templateString = _.trim(_.get(f, 'clickableRoute'), '/')
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        const urlToRoute = (templateString ? "/" + _.template(templateString)(encodedData) + "/" : "./") + _.template(clickableField)(encodedLinkedData)
        return urlToRoute
    }

    const composeURLforAL = (f, m) => {
        const encodedLinkedData = encodeValues(transformObject(_.cloneDeep(m)))
        const clickableField = "{{" + (_.trim(_.get(f, 'clickableField'), "/") || "id") + "}}"
        const encodedData = encodeValues(transformObject(_.cloneDeep(model)));
        const templateString = _.trim(_.get(f, 'clickableRoute'), '/')
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        if (_.isEmpty(encodedLinkedData)) return ""
        const urlToRoute = (templateString ? "/" + _.template(templateString)(encodedData) + "/" : "./")
            + _.template(clickableField)(encodedLinkedData)
        return urlToRoute
    }

    if (field.veiwOption == 'cart') {
        if (!field.cartView) { return <div>{dict[lang].card.cart.notConfigured}</div> }
        const cart = field.cartView

        const columns = (cart.image ? 1 : 0) + (cart.title ? 1 : 0) + (cart.status ? 1 : 0) + (cart.quantity ? 1 : 0) + (cart.price ? 1 : 0)

        return <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}
            </span>
            {field.descriptionFlag && field.description &&
                <span className={styles.description}>
                    {field.description}</span>}

            <table className={styles.cart}>
                <thead>
                    <tr>
                        {cart.image && <th></th>}
                        {cart.title && <th>{dict[lang].card.cart.Title}</th>}
                        {cart.status && <th>{dict[lang].card.cart.Status}</th>}
                        {cart.quantity && <th className={styles.right}>{dict[lang].card.cart.Quantity}</th>}
                        {cart.price && <th className={styles.right}>{dict[lang].card.cart.Price}</th>}
                        {(field.write && editingOn && cart.deleteOn) && <th className={styles.right}></th>}
                    </tr>
                </thead>
                <tbody>
                    {!renderAL.length ? '—' : renderAL.map((item, i) => <tr key={i} className={field.clickable ? styles.clickable : ''}
                        onClick={(e) => {
                            if (_.get(field, 'clickableType') == 'page' && field.clickable) {
                                
                                e.preventDefault()
                                handleRoute(composeURLforAL(field, item))(e)
                            }
                            if (_.get(field, 'clickableType') !== 'page' && field.clickable) {
                                setLinkedObject({
                                    object: item,
                                    params: {
                                        data: {
                                            fields: field.configureLinkedCard && field.configureLinkedCard.fields,
                                            fieldParams: field.configureLinkedCard && field.configureLinkedCard.fieldParams,
                                            columns: {
                                                main:
                                                {
                                                    id: 'main',
                                                    fieldIds: field.configureLinkedCard && field.configureLinkedCard.fieldOrder
                                                }
                                            },
                                            columnOrder: ['main'],
                                            subHeader: field.subHeader || ''
                                        }
                                    }
                                })
                                setLinkedObjectStruct(field.sysName)
                                setShowLinkedObject(true)
                            }
                        }}
                    >
                        {cart.image && <td>{processField(item[cart.imageField], cart.imageField)}</td>}
                        {cart.title && <td>
                            {(_.get(field, 'clickableType') == 'page' && field.clickable) ?
                                <a style={{ userSelect: 'none' }} href={composeURLforAL(field, item)} onClick={e => e.preventDefault()}>
                                    {processField(item[cart.titleField], cart.titleField)}
                                </a>
                                : processField(item[cart.titleField], cart.titleField)}

                        </td>}
                        {cart.status && <td className={styles.right}>{processField(item[cart.statusField], cart.statusField)}</td>}
                        {cart.quantity && <td className={styles.right}>{numberWithSpaces(processField(item[cart.quantityField], cart.quantityField, true) || '0')}</td>}
                        {cart.quantity && cart.price && <td className={styles.right}>
                            {cart.priceUnits == '$' ? cart.priceUnits + ' ' : ''}
                            <strong>{numberWithSpaces((processField(item[cart.priceField], cart.priceField, true) * (processField(item[cart.quantityField], cart.quantityField, true) || 0)).toFixed(2)).replace(/\.00$/, '')}</strong>
                            {cart.priceUnits !== '$' ? ' ' + cart.priceUnits : ''}
                            <span className={styles.cardQuantity}>
                                {numberWithSpaces(processField(item[cart.quantityField], cart.quantityField) || '0', true)} x {cart.priceUnits == '$' ? cart.priceUnits : ''} {numberWithSpaces(processField(item[cart.priceField], cart.priceField, true).toFixed(2)).replace(/\.00$/, '')} {cart.priceUnits !== '$' ? cart.priceUnits : ''}</span>
                        </td>}
                        {!cart.quantity && cart.price && <td className={styles.right}>{cart.priceUnits == '$' ? cart.priceUnits : ''} <strong>{numberWithSpaces(processField(item[cart.priceField], cart.priceField, true).toFixed(2)).replace(/\.00$/, '')}</strong> {cart.priceUnits !== '$' ? cart.priceUnits : ''}</td>}
                        {(field.write && editingOn && cart.deleteOn) && <td className={styles.right}>
                            <div className={`${styles.deleteCartItem} icon icon-delete`}
                                onClick={e => {
                                    e.stopPropagation();
                                    removeItemCart(i)
                                }}
                            /></td>}
                    </tr>)}
                    {cart.price && <tr className={styles.total}>
                        <td className={styles.right} colSpan={columns}>{dict[lang].card.cart.Total}:&nbsp;&nbsp;{cart.priceUnits == '$' ? cart.priceUnits : ''} <strong>{renderAL.length ?
                            numberWithSpaces(renderAL.map(item => parseFloat(processField(item[cart.priceField], cart.priceField, true) * (cart.quantity ? (processField(item[cart.quantityField], cart.quantityField, true) || 0) : 1))).reduce((total, amount) => total + amount).toFixed(2)).replace(/\.00$/, '')
                            : 0}</strong> {cart.priceUnits !== '$' ? cart.priceUnits : ''}</td>
                        {(field.write && editingOn && cart.deleteOn) && <td></td>}
                    </tr>}
                </tbody>
            </table>
            {/* <br /><hr />< br />
            <pre style={{ fontSize: 12 }}>{JSON.stringify(cart, 0, 3)}</pre>
            <pre style={{ fontSize: 12 }}>{JSON.stringify(object[field.sysName].value, 0, 3)}</pre> */}
        </React.Fragment>
    }

    if (field.veiwOption == 'table') {
        if (!field.tableView) { return <div>Table is not configured</div> }

        const table = field.tableView || []

        return <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}
            </span>
            {field.descriptionFlag && field.description &&
                <span className={styles.description}>
                    {field.description}</span>}

            <table className={`${styles.cart} ${styles.tableAL}`}>
                <thead>
                    <tr>
                        {(table.columns || []).map(column => <th>{(enrichedObject[column.field] && enrichedObject[column.field].name) || column.field}</th>)}
                        {(field.write && editingOn && table.deleteOn) && <th className={styles.right}></th>}
                    </tr>
                </thead>
                <tbody>
                    {!renderAL.length ? '—' : renderAL.map((item, i) => <tr key={i} className={field.clickable ? styles.clickable : ''}
                        onClick={(e) => {
                            if (_.get(field, 'clickableType') == 'page' && field.clickable) {
                                e.preventDefault()
                                handleRoute(composeURLforAL(field, item))(e)
                            }
                            if (_.get(field, 'clickableType') !== 'page' && field.clickable) {
                                setLinkedObject({
                                    object: item,
                                    params: {
                                        data: {
                                            fields: field.configureLinkedCard && field.configureLinkedCard.fields,
                                            fieldParams: field.configureLinkedCard && field.configureLinkedCard.fieldParams,
                                            columns: {
                                                main:
                                                {
                                                    id: 'main',
                                                    fieldIds: field.configureLinkedCard && field.configureLinkedCard.fieldOrder
                                                }
                                            },
                                            columnOrder: ['main'],
                                            subHeader: field.subHeader || ''
                                        }
                                    }
                                })
                                setLinkedObjectStruct(field.sysName)
                                setShowLinkedObject(true)
                            }
                        }}
                    >
                        {(table.columns || []).map((column, i) => <td>
                            {(i == 0 && _.get(field, 'clickableType') == 'page' && field.clickable) ?
                                <a style={{ userSelect: 'none' }} href={composeURLforAL(field, item)} onClick={e => e.preventDefault()}>
                                    {processField(item[column.field], column.field)}
                                </a>
                                : processField(item[column.field], column.field)}
                        </td>)}
                        {(field.write && editingOn && table.deleteOn) && <td className={styles.right}>
                            <div className={`${styles.deleteCartItem} icon icon-delete`}
                                onClick={e => {
                                    e.stopPropagation();
                                    removeItemCart(i)
                                }}
                            /></td>}
                    </tr>)}
                    {table.itogo && <tr className={styles.total}>
                        {(table.columns || []).map(column => <td>
                            {column.itogo ? summByColumn(column.field) : ''}
                        </td>)}

                        {(field.write && editingOn && table.deleteOn) && <td></td>}
                    </tr>}
                </tbody>
            </table>
        </React.Fragment>
    }

    return (
        (field.write || (field.read && renderAL && JSON.stringify(renderAL) != '[""]')) ? <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}
                {(field.write && editingOn) &&
                    <span
                        onClick={() => setEdit(!edit)}
                        className={`${styles.editPedal} icon icon-edit small`}>
                        {edit ? dict[lang].card.cancelEditing : dict[lang].card.edit}
                    </span>
                }
            </span>
            {field.descriptionFlag && field.description &&
                <span className={styles.description}>
                    {field.description}</span>}

            {field.dataType == 'link' && field.read && renderAL && !edit && renderAL.length !== 0 &&
                <div className={`${styles.linkFieldWrapper} ${!field.clickable && styles.notClickable}`}>
                    <a href={(_.get(field, 'clickableType') == 'page'&& field.clickable) ? composeURL(field) : null}
                        onClick={(e) => {
                            if (_.get(field, 'clickableType') == 'page' && field.clickable) {
                                e.preventDefault()
                                handleRoute(composeURL(field))(e)
                            }
                            if (field.clickable && _.get(field, 'clickableType') !== 'page') {
                                setLinkedObject({
                                    object: object[field.sysName].value,
                                    params: {
                                        data: {
                                            fields: field.configureLinkedCard && field.configureLinkedCard.fields,
                                            fieldParams: field.configureLinkedCard && field.configureLinkedCard.fieldParams,
                                            columns: {
                                                main:
                                                {
                                                    id: 'main',
                                                    fieldIds: field.configureLinkedCard && field.configureLinkedCard.fieldOrder
                                                }
                                            },
                                            columnOrder: ['main'],
                                            subHeader: field.subHeader || ''
                                        }
                                    }
                                })
                                setLinkedObjectStruct(field.sysName)
                                setShowLinkedObject(true)
                            }
                        }}
                    >{getLinkName(field.sysName, object[field.sysName].value)}</a>
                </div>
            }

            {field.dataType == 'arrayLink' && field.read && renderAL && !edit &&
                <div className={`${styles.linkFieldWrapper} ${!field.clickable && styles.notClickable}`}>
                    {object[field.sysName].value && object[field.sysName].value.length > 0 && object[field.sysName].value.map((link, i) => {
                        return link ? <a
                            key={i}
                            href={(_.get(field, 'clickableType') == 'page'&& field.clickable) ? composeURLforAL(field, link) : null}
                            onClick={(e) => {
                                if (_.get(field, 'clickableType') == 'page' && field.clickable) {
                                    e.preventDefault()
                                    handleRoute(composeURLforAL(field, link))(e)
                                }
                                if (_.get(field, 'clickableType') !== 'page' && field.clickable) {
                                    setLinkedObject({
                                        object: link,
                                        params: {
                                            data: {
                                                fields: field.configureLinkedCard && field.configureLinkedCard.fields,
                                                fieldParams: field.configureLinkedCard && field.configureLinkedCard.fieldParams,
                                                columns: {
                                                    main:
                                                    {
                                                        id: 'main',
                                                        fieldIds: field.configureLinkedCard && field.configureLinkedCard.fieldOrder
                                                    }
                                                },
                                                columnOrder: ['main'],
                                                subHeader: field.subHeader || ''
                                            }
                                        }
                                    })
                                    setLinkedObjectStruct(field.sysName)
                                    setShowLinkedObject(true)
                                }
                            }}
                        >{getLinkName(field.sysName, link)}</a> : null
                    })}
                </div>
            }

            {(!renderAL || renderAL.length == 0) && !edit && '—'}

            {edit && field.searchData &&
                <Input
                    type={`${field.dataType == 'link' ? 'select' : 'multiselect'}`}
                    options={field.searchData}
                    locale={lang}
                    onChange={value => {
                        field.dataType == 'link' ?
                            onChange(value) :
                            (value && Array.isArray(value)) ? onChange(value.join(',')) : onChange(value)
                    }}
                    //debug
                    defaultValue={
                        field.dataType == 'link' ? Array.isArray(renderAL) && renderAL.length == 1
                            ? renderAL[0] ? (renderAL[0].id || renderAL[0]) : null : renderAL ? renderAL.id : null
                            :
                            (renderAL && renderAL.length > 0
                                && renderAL.map(i => i.id || i))
                    }
                    tip={field.searchData.length > 990 && 'Quick search is limited by 1000 options'}
                />
            }

            {edit && !field.searchData &&
                <Input
                    type='string'
                    onChange={onChange}
                    // description={JSON.stringify(renderAL)}
                    defaultValue={
                        field.dataType == 'link' ? Array.isArray(renderAL) && renderAL.length == 1
                            ? renderAL[0] ? (renderAL[0].id || renderAL[0]) : null : renderAL ? renderAL.id : null
                            :
                            (renderAL && renderAL.length > 0
                                && renderAL.map(i => i.id || i))
                    }
                    tip={dict[lang].card.dropdownDisabled} //"Dropdown option is disabled. Enter objects' IDs"
                />
            }
        </React.Fragment> : <div />
    )
}

function CardAction({ action, successWeb3, writeError, actionParams, debug, submitAction, onClose, checkActionCond, object, aType, loading, refresh }) {

    const [actionData, setActionData] = useState(actionParams)
    const [genericLoading, setGenericLoading] = useState(false)
    const [noData, setNoData] = useState(null)

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmitAction = () => {

        // refresh cards after action is taken
        // setTimeout(() => refresh(true), 3000) // one time
        // setTimeout(() => refresh(true), 5000) // two times

        if (((!actionData.formMapping || actionData.formMapping.length == 0) && actionData.displayAs == 'button') ||
            ((!actionData.formData || actionData.formData.length == 0) && actionData.displayAs == 'form')) {
            if (actionData.web3) {
                setIsSubmitted(true)
                submitAction(actionData)
            } else {
                noActionData()
            }
        }
        else {
            setIsSubmitted(true)
            submitAction(actionData)
        }
    }

    // console.log('====actionParams====')
    // console.log(actionParams)

    let conds = actionParams ? (actionParams.conditionals ? [...actionParams.conditionals] : null) : null

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

    conds && conds.forEach(cond => {
        // console.log(cond)
        // console.log(object)
        if ((cond.target == 'id' || cond.target == 'id_in' || cond.target == 'id_not_in') && cond.type == 'const') {
            cond.checkValue = cond.value
        }
        if (cond.target == 'role') {
            cond.checkValue = cond.value
        }
        if (cond.target == 'field') {
            if (typeof object[cond.field] == 'object') {
                if (object[cond.field].value) {
                    if (typeof object[cond.field].value == object || parseJson(object[cond.field].value) == 'object') {
                        cond.fieldValue = (parseJson(object[cond.field].value) || {}).id
                    } else {
                        cond.fieldValue = object[cond.field].value
                    }
                } else {
                    cond.fieldValue = object[cond.field].id
                }
            } else { cond.fieldValue = object[cond.field] }

            if (cond.value == 'false' && !cond.fieldValue) { cond.fieldValue = 'false' }

        }
        if ((cond.target == 'id' || cond.target == 'id_in' || cond.target == 'id_not_in') && cond.type != 'const') {
            typeof object[cond.value] != 'object' ? cond.checkValue = object[cond.value] :
                object[cond.value] ? cond.checkValue = (object[cond.value].id || (typeof object[cond.value].value == 'object' && object[cond.value].value ? object[cond.value].value.id : object[cond.value].value) || null) : cond.checkValue = null // раньше тут было .id, а не .value проверить!
        }
    })

    function noActionData() {
        setGenericLoading(true)
        setTimeout(
            () => {
                setGenericLoading(false)
                setNoData('Action does nothing')
            },
            500
        )
        setTimeout(
            () => {
                setNoData(null)
            },
            10000
        )
    }

    useEffect(() => {
        isSubmitted && !loading && actionParams.closePopup && onClose()
    }, [loading, isSubmitted])

    if (isSubmitted && writeError && !loading) {
        return <div style={{ width: '100%' }}>
            {actionParams.displayAs == 'form' && <FormSection title={actionParams.name} />}
            <Hint error>{writeError}</Hint>
        </div>
    }


    if (
        isSubmitted
        && actionParams.showMessage
        && !loading
        && (successWeb3 || !actionParams.web3)
    ) {
        return <div style={{ width: '100%' }}>
            {actionParams.displayAs == 'form' && <FormSection title={actionParams.name} />}
            <Hint ok margin={{ top: 1, bottom: 12 }}>
                <div dangerouslySetInnerHTML={{ __html: actionParams.resultMessage || 'Submitted' }} />
            </Hint>
            {actionParams.resultButton && <Button onClick={() => setIsSubmitted(false)} icon='refresh'>{actionParams.resultButton}</Button>}
        </div>
    }

    // console.log('actionParams')
    // console.log(actionParams)

    return (
        actionParams && checkActionCond && checkActionCond(conds) ?
            <div className={`${aType == 'actionButton' ? styles.actionButton : styles.actionForm}`}>
                {/* <pre className='dd-debug'>{JSON.stringify(actionData, 0, 3)}</pre> */}
                {actionParams.displayAs == 'form' &&
                    <React.Fragment>
                        <FormSection title={actionParams.name} />
                        {actionParams.formFields && actionParams.formFields.length > 0 &&
                            actionParams.formFields.map(field => (field.field && <InputForm
                                field={{
                                    ...field.field,
                                    include: true,
                                    content: field.field && field.field.name,
                                    id: field.field && field.field.fieldSysName
                                }}
                                key={field.field.sysName}
                                width={400}
                                // label={field.field.name}
                                editingOn
                                onChange={value => {
                                    const saveData = { ...actionData }
                                    saveData.formData = { ...saveData.formData, [field.field.fieldSysName]: value }
                                    setActionData(saveData)
                                }}
                            />))}
                    </React.Fragment>
                }

                {noData ? <React.Fragment>
                    {actionParams.showMessage ?
                        <div style={{ width: '100%' }}>
                            <Hint margin={{ top: 1, bottom: 12 }}>
                                <div dangerouslySetInnerHTML={{ __html: actionParams.resultMessage || noData }} />
                            </Hint>
                        </div>
                        : <div className={styles.noData}>{noData}</div>}

                </React.Fragment> :
                    <Button
                        accent={actionParams.buttonType == 'accent'}
                        danger={actionParams.buttonType == 'danger'}
                        loading={loading || genericLoading}
                        onClick={handleSubmitAction}
                        icon={actionParams.buttonIcon}
                    >
                        {actionParams.buttonTitle || actionParams.name}</Button>}
            </div> : <React.Fragment></React.Fragment>
    )
}

