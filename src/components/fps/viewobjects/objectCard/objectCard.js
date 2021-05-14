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
import { InputForm } from '../../dataentry/form/InputForm'

export function ObjectCard(props) {

    const [showLinkedObject, setShowLinkedObject] = useState(false)
    const [linkedObject, setLinkedObject] = useState({})
    const [linkedObjectStruct, setLinkedObjectStruct] = useState()
    const [model, setModel] = useState(props.object)
    const [currentObject, setCurrentObject] = useState(props.object)

    // support previous component version:
    const oldFashioned = (props.params && !props.params.data) ? true : false

    // console.log('==============card props==============')
    // console.log(props)

    const editingOn = props.params.data && props.params.data.fields &&
        props.params.data.fields.id && props.params.data.fields.id.write && props.params.data.fields.id.read &&
        props.params.data.writeFields && props.params.data.writeFields.length > 0


    // console.log('==============CARD MODEL==============')
    // console.log(model)

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        e.key == 'Escape' && props.onClose()
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    //----------------------

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        let newTableFieldScheme = tableFieldScheme.filter(i => i[0].startsWith(sysname + '.'))
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach(i => i[0] = i[0].substring(sysname.length + 1))
        return deepClone
    }

    // Gathers current structure info:
    const getStructure = (obj, tableFieldScheme, tableStructures) => {
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
    const structure = getStructure(props.object, [...props.tableFieldScheme], props.tableStructures)
    //-----------------------------

    //Gathers current object info (e.g. sysName, type):
    const composeObject = () => {
        let object = {}
        if (props.object && structure) {
            for (const field in props.object) {
                object[field] = {}
                if (structure.fieldStructure && field && field[0] != '@') {
                    object[field].value = props.object[field]
                    let fieldStructure = structure.fieldStructure.filter(i => i.sysName == field)[0]
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
    const object = composeObject()
    //console.log(object)

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

    // выполнить Action

    function submitAction(actionParams) {
        let mapping = {}
        actionParams.formMapping && actionParams.formMapping.forEach(row => {
            if (row.type == 'user') { mapping[row.target] = props.auth ? props.auth.user : null }
            if (row.type == 'const') { mapping[row.target] = row.value }
            if (row.type == 'objectField') {
                if (props.parentObject && props.parentObject[row.value]) { // из дочерней карточки дергаем поле из родительской
                    mapping[row.target] = typeof props.parentObject[row.value] != 'object' ?
                        props.parentObject[row.value] :
                        Array.isArray(props.parentObject[row.value]) ?
                            props.parentObject[row.value].map(i => i.id).join(',') :
                            props.parentObject[row.value].id
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
        props.executeAction(mapping, sl)
    }

    //------------------------------
    function getLinkName(sysname, obj) {
        console.log('obj')
        console.log(obj)
        const structure = getStructure(obj, transformTableFieldScheme(sysname, props.tableFieldScheme), props.tableStructures)
        const linkNameArr = [] 
        structure.visibleName && structure.visibleName.forEach(field => { 
            if(obj[field])  {
                linkNameArr.push(obj[field])
            }
        })
        const linkName = linkNameArr.length > 0 ? linkNameArr.join(' ') : null
        let displayID = ''
        if (typeof obj == 'string') { displayID = obj }
        return linkName || displayID || obj.id || 'No visible name'
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

            // let newArr = [];
            // let count = 0;
            // let flag = false;
            // arr.forEach((a, i) => {
            //     if (i == 0 && a.type != "action") {
            //         newArr.push(a);
            //     }
            //     if (i == 0 && a.type == "action") {
            //         newArr.push({ type: "actions", content: [a] });
            //         flag = true;
            //     }
            //     if (i != 0 && !flag && a.type == "action") {
            //         newArr.push({ type: "actions", content: [a] });
            //         flag = true;
            //         count++;
            //     }
            //     if (i != 0 && flag && a.type == "action") {
            //         newArr[count].content.push(a);
            //     }
            //     if (i != 0 && flag && a.type != "action") {
            //         newArr.push(a);
            //         count++;
            //         flag = false;
            //     }
            //     if (i != 0 && !flag && a.type != "action") {
            //         newArr.push(a);
            //         count++;
            //     }
            // });
            // return newArr;
        };
        const transformedFields = fields && fieldParams ? transform(fields, fieldParams) : []

        // console.log('transformedFields')
        // console.log(transformedFields)

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
                                        aType='actionForm'
                                        object={object}
                                        checkActionCond={props.checkActionCond}
                                        onClose={props.onTerminate}
                                        submitAction={submitAction}
                                        actionParams={props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                            props.params.actions.filter(i => action.id == 'action__' + i.id)[0]}
                                    />
                                } else {
                                    return <CardAction
                                        loading={props.loading}
                                        action={action.id}
                                        aType='actionButton'
                                        object={object}
                                        onClose={props.onTerminate}
                                        checkActionCond={props.checkActionCond}
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
                        editingOn={editingOn}
                        field={field}
                        formatDate={formatDate}
                        object={object}
                        setModel={value => { setModel(value); }}
                        setLinkedObject={setLinkedObject}
                        setShowLinkedObject={setShowLinkedObject}
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
                        currentObject={currentObject}
                        submit={props.submit}
                        setCurrentObject={setCurrentObject}
                        setModel={setModel}
                    />
                }
            </React.Fragment>
        )
    }

    return (
        <div className={styles.objectCard}>
            {props.shareble && // todo: сделать прямые ссылки на карточку
                <div title='Copy direct link to the object'
                    className={`${styles.shareObject} icon icon-copy`}
                    onClick={() => { }}
                ></div>
            }
            <div className={styles.objectCardHeader}>
                <div onClick={props.onClose}
                    className={`${styles.closeObjectCard} icon icon-back ${showLinkedObject && styles.hidden}`}></div>
                <h2 className={`${props.shareble && styles.narrowH2}`}>{props.params && props.params.data && props.params.data.subHeader}
                    {structure.visibleName ? structure.visibleName.map(headerField => object[headerField] ?
                        typeof object[headerField].value == 'object' ?
                            !Array.isArray(object[headerField].value) ?
                                getLinkName(headerField, object[headerField].value) :
                                object[headerField].value.map(i => getLinkName(headerField, i)).join(', ')
                            : object[headerField].dataType == 'date' ?
                                formatDate(object[headerField].value, object[headerField].formatOptions) :
                                object[headerField].value
                        : null).join(' ')
                        :
                        (object.id || 'No visible name')}
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
                            (object.id || 'No visible name')} />
                    <ObjectCard
                        onClose={() => { setShowLinkedObject(false) }}
                        onTerminate={() => props.onClose()}
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

function CardField({ field, object, model, setModel, debug, editingOn, formatDate,
    setLinkedObject, setLinkedObjectStruct, setShowLinkedObject, getLinkName }) {
    const [edit, setEdit] = useState(false)

    const getResolution = line => {
        const regex = /\....?.?.?$/g;
        const found = line.match(regex);
        return found ? found[0] : ''
    }

    // console.log(field)
    // console.log(object)
    field.formatOptions = object[field.sysName].formatOptions

    return (
        <div key={field.sysName} className={styles.objFieldWrapper}>

            {debug && <div>
                <p className='dd-debug'>{JSON.stringify(field)}</p>
                <p className='dd-debug'><b>object: </b>{JSON.stringify(object[field.sysName])}</p>
            </div>}

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
            {/* ========================== */}

            {/* СТРОКИ */}
            { (field.dataType == 'string') &&
                <React.Fragment>
                    <InputForm
                        field={field}
                        defaultValue={object[field.sysName].value}
                        editingOn={field.write && editingOn}
                        // to do:
                        isHint={field.displayAsHint}
                        hintType={field.hintType}
                        onChange={value => setModel({ ...model, [field.sysName]: value })}
                    /></React.Fragment>
            }

            {/* ДАТЫ */}
            { (field.dataType == 'date') &&
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
            { (field.dataType == 'boolean') &&
                <React.Fragment>
                    <InputForm
                        field={field}
                        defaultValue={typeof object[field.sysName].value == 'undefined' ? 'undefined' :
                            object[field.sysName].value ? 'true' : 'false'}
                        editingOn={field.write && editingOn}
                        onChange={value => setModel({ ...model, [field.sysName]: value })}
                    />
                    {/* {(field.write && editingOn) ?
                        <Input
                            type='radio'
                            label={field.name || field.sysName}
                            defaultValue={field.dataType == 'boolean' ? ((model[field.sysName] == 'true' || model[field.sysName] == true) ? true : false) : model[field.sysName]}
                            options={
                                [
                                    { value: true, label: 'Yes' },
                                    { value: false, label: 'No' },
                                ]
                            }
                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                        />
                        :
                        <FieldReadOnly field={field} object={object} weblink={{}} />} */}
                </React.Fragment>}

            {/* LINK & ARRAY LINK */}
            { (field.dataType == 'link' || field.dataType == 'arrayLink') &&
                <FieldLink
                    model={model}
                    editingOn={editingOn}
                    object={object}
                    editingOn={editingOn}
                    field={field}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                    setLinkedObject={setLinkedObject}
                    setLinkedObjectStruct={setLinkedObjectStruct}
                    setShowLinkedObject={setShowLinkedObject}
                    getLinkName={getLinkName}
                />
            }

            {/* JSON */}
            { (field.dataType == 'json') &&
                <InputForm
                    field={field}
                    defaultValue={object[field.sysName].value}
                    editingOn={field.write && editingOn}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                />
            }

            {/* ВСЕ ОСТАЛЬНОЕ */}
            { field.dataType != 'string' &&
                field.dataType != 'file' &&
                field.dataType != 'boolean' &&
                field.dataType != 'date' &&
                field.dataType != 'link' &&
                field.dataType != 'arrayLink' &&
                field.dataType != 'json' &&
                <React.Fragment>
                    {(field.write && editingOn) ?
                        <Input
                            type={field.dataType}
                            description={field.descriptionFlag && field.description}
                            label={field.name || field.sysName}
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

function SaveCard({ model, currentObject, submit, setCurrentObject, setModel, loading, editingOn }) {

    return (
        <div>
            {editingOn &&
                <ActionPanel margin={{ top: 24, bottom: 12 }}>
                    {loading ? <Loader>Loading...</Loader> :
                        <React.Fragment>
                            {/* <pre className='dd-debug'>{JSON.stringify(model,0,3)}</pre> */}
                            {/* <pre className='dd-debug'>{JSON.stringify(currentObject,0,3)}</pre> */}
                            <Button
                                disabled={JSON.stringify(model) === JSON.stringify(currentObject)}
                                accent
                                icon='done'
                                onClick={() => {
                                    // console.log('Save changes')
                                    // console.log(model)
                                    setCurrentObject(model);
                                    submit(model);
                                }}
                            >
                                Save changes</Button>
                            <Button danger icon='ban'
                                onClick={() => setModel(currentObject)}
                                disabled={JSON.stringify(model) === JSON.stringify(currentObject)}>
                                Discard changes</Button>
                        </React.Fragment>}
                </ActionPanel>}
        </div>
    )
}

function FieldLink({ field, model, onChange, setLinkedObject, object,
    setLinkedObjectStruct, setShowLinkedObject, getLinkName, editingOn }) {

    const [edit, setEdit] = useState(false)

    // console.log('Field  Link')
    // console.log(field)
    // console.log(object[field.sysName].value)
    // if (!object[field.sysName].value || object[field.sysName].value.length == 0) {
    //     return <React.Fragment>

    //     </React.Fragment>
    // }

    return (
        <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}
                {(field.write && editingOn) &&
                    <span
                        onClick={() => setEdit(!edit)}
                        className={`${styles.editPedal} icon icon-edit small`}>
                        {edit ? 'cancel editing' : 'edit'}
                    </span>
                }
            </span>
            {field.descriptionFlag && field.description &&
                <span className={styles.description}>
                    {field.description}</span>}

            {field.dataType == 'link' && field.read && object[field.sysName].value && !edit &&
                <div className={`${styles.linkFieldWrapper} ${!field.clickable && styles.notClickable}`}>
                    <a
                        onClick={() => {
                            if (field.clickable) {
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

            {field.dataType == 'arrayLink' && field.read && object[field.sysName].value && !edit &&
                <div className={`${styles.linkFieldWrapper} ${!field.clickable && styles.notClickable}`}>
                    {object[field.sysName].value && object[field.sysName].value.length > 0 && object[field.sysName].value.map((link, i) => {
                        return (
                            <a
                                key={i}
                                onClick={() => {
                                    if (field.clickable) {
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
                            >{getLinkName(field.sysName, link)}</a>)
                    })}
                </div>
            }

            {(!object[field.sysName].value || object[field.sysName].value.length == 0) && !edit && '—'}

            {edit && field.searchData &&
                <Input
                    type={`${field.dataType == 'link' ? 'select' : 'multiselect'}`}
                    options={field.searchData}
                    onChange={value => {
                        field.dataType == 'link' ?
                            onChange(value) :
                            (value && Array.isArray(value)) ? onChange(value.join(',')) : onChange(value)
                    }}
                    defaultValue={
                        field.dataType == 'link' ? object[field.sysName].value.id :
                            (object[field.sysName].value && object[field.sysName].value.length > 0
                                && object[field.sysName].value.map(i => i.id))
                    }
                    tip={field.searchData.length > 990 && 'Quick search is limited by 1000 options'}
                />
            }

            {edit && !field.searchData &&
                <Input
                    type='string'
                    onChange={onChange}
                    defaultValue={
                        field.dataType == 'link' ? object[field.sysName].value.id :
                            (object[field.sysName].value && object[field.sysName].value.length > 0
                                && object[field.sysName].value.map(i => i.id))
                    }
                    tip="Quick search option is disabled. Enter objects' IDs"
                />
            }
        </React.Fragment>
    )
}

function CardAction({ action, actionParams, debug, submitAction, onClose, checkActionCond, object, aType, loading }) {

    const [actionData, setActionData] = useState(actionParams)
    const [genericLoading, setGenericLoading] = useState(false)
    const [noData, setNoData] = useState(null)

    // console.log('====actionParams====')
    // console.log(actionParams)

    let conds = actionParams ? (actionParams.conditionals ? [...actionParams.conditionals] : null) : null
    if (conds) {
        conds.forEach(cond => {
            if (cond.target == 'id' && cond.type != 'const') {
                typeof object[cond.value].value != 'object' ? cond.checkValue = object[cond.value] :
                    cond.checkValue = object[cond.value].value || null // раньше тут было .id, а не .value проверить!
            }
            if (cond.target == 'id' && cond.type == 'const') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'role') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'field' || cond.target == 'linkedField') {
                cond.fieldValue = object[cond.field] && object[cond.field].value
            }
        })
    }

    const noActionData = () => {
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
            4000
        )
    }

    return (
        actionParams && checkActionCond && checkActionCond(conds) ?
            <div className={`${aType == 'actionButton' ? styles.actionButton : styles.actionForm}`}>
                {actionParams.displayAs == 'form' &&
                    <React.Fragment>
                        <FormSection title={actionParams.name} />
                        {/* <pre className='dd-debug'>{JSON.stringify(actionData, 0, 3)}</pre> */}
                        {actionParams.formFields && actionParams.formFields.length > 0 && actionParams.formFields.map(field => (field.field && <Input
                            type={field.field.dataType}
                            key={field.field.sysName}
                            width={400}
                            label={field.field.name}
                            onChange={value => {
                                const saveData = { ...actionData }
                                saveData.formData = { ...saveData.formData, [field.field.fieldSysName]: value }
                                setActionData(saveData)
                            }}
                        />))}
                    </React.Fragment>
                }
                {noData ? <div className={styles.noData}>{noData}</div> :
                    <Button
                        accent={actionParams.buttonType == 'accent'}
                        danger={actionParams.buttonType == 'danger'}
                        loading={loading || genericLoading}
                        onClick={() => {
                            // console.log(!actionData.formMapping);
                            // console.log(!actionData.formMapping && actionData.displayAs == 'button');

                            (((!actionData.formMapping || actionData.formMapping.length == 0) && actionData.displayAs == 'button') || 
                            ((!actionData.formData || actionData.formData.length == 0) && actionData.displayAs == 'form')) ?
                                noActionData()
                                :
                                submitAction(actionData)
                            actionParams.closePopup && onClose()
                        }}
                        icon={actionParams.buttonIcon}
                    >
                        {actionParams.buttonTitle || actionParams.name}</Button>}
            </div> : <React.Fragment></React.Fragment>
    )
}