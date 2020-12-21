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

export function ObjectCard(props) {

    const [showLinkedObject, setShowLinkedObject] = useState(false)
    const [linkedObject, setLinkedObject] = useState({})
    const [linkedObjectStruct, setLinkedObjectStruct] = useState()
    const [model, setModel] = useState(props.object)
    const [currentObject, setCurrentObject] = useState(props.object)

    // support previous component version:
    const oldFashioned = (props.params && !props.params.data) ? true : false

    console.log('==============props==============')
    console.log(props)
    // console.log(oldFashioned)

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
                if (structure.fieldStructure) {
                    object[field].value = props.object[field]
                    let fieldStructure = structure.fieldStructure.filter(i => i.sysName == field)[0]
                    object[field].name = fieldStructure.name
                    object[field].sysName = field
                    object[field].dataType = fieldStructure.dataType
                }
            }
        }
        return object
    }
    const object = composeObject()

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
        const structure = getStructure(obj, transformTableFieldScheme(sysname, props.tableFieldScheme), props.tableStructures)
        const linkName = structure.visibleName && structure.visibleName.map(field => obj[field]).join(' ')
        let displayID = ''
        if (typeof obj == 'string') {displayID = obj}
        return linkName || displayID || 'No visible name'
    }

    const isEditable = field => {
        if (props.writeFields && props.writeFields.indexOf('id') != -1 && object.id && object.id.value &&
            field.sysName &&
            props.writeFields.indexOf(field.sysName) != -1) { return true } else { return false }
    }

    const matchInputType = type => {
        const types = {
            number: 'number',
            date: 'date',
            boolean: 'radio',
        }
        return types[type] || 'string'
    }
    const [confirmDelete, setConfirmDelete] = useState(false)

    const scrollDivRef = useRef(null)
    const [showBorder, setShowBorder] = useState(false)

    const handleScroll = () => {
        scrollDivRef.current.scrollTop >= 10 ?
            setShowBorder(true) :
            setShowBorder(false)
    }

    const checkLineBreaks = line => {
        return line && typeof line == 'string' ? (line.match(/\n/g) || []).length : 0
    }

    const noTabs = <div></div>

    function composeTabContent(fields, fieldParams, deleteField, actions) {

        // группируем actions
        const transform = (a, fieldParams) => {
            // console.log('transform')
            // console.log(a)
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
        return (
            <React.Fragment>
                {transformedFields.map((f, i) => {
                    const fieldSysName = f.id
                    let field = f.type != 'actions' ? fieldParams[fieldSysName] : f
                    field = {
                        ...field,
                        name: field.content,
                        sysName: field.id
                    }
                    if (field.id == 'action__delete') return
                    if (field.type == 'actions') {
                        return <div className={styles.actionsWrapper}>
                            {props.loading ? <Loader>Loading...</Loader> :
                                field.content.map(action => {
                                    if (action.id != 'action__delete') {
                                        const actionParams = props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                            props.params.actions.filter(i => action.id == 'action__' + i.id)[0]
                                        if (actionParams && actionParams.displayAs == 'form') {
                                            return <div className={styles.actionForm}><CardAction
                                                action={action.id}
                                                object={object}
                                                checkActionCond={props.checkActionCond}
                                                onClose={props.onTerminate}
                                                submitAction={submitAction}
                                                actionParams={props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                                    props.params.actions.filter(i => action.id == 'action__' + i.id)[0]}
                                            /></div>
                                        } else {
                                            return <div className={styles.actionButton}><CardAction
                                                action={action.id}
                                                object={object}
                                                onClose={props.onTerminate}
                                                checkActionCond={props.checkActionCond}
                                                submitAction={submitAction}
                                                actionParams={props.params.actions && props.params.actions.filter(i => action.id == 'action__' + i.id) &&
                                                    props.params.actions.filter(i => action.id == 'action__' + i.id)[0]}
                                            /></div>
                                        }
                                    } else {
                                        return <div className={styles.actionButton}><ActionDelete // Кнопочка Delete
                                            submit={() => {
                                                props.submit({ [deleteField]: true, id: object.id.value });
                                                props.onClose()
                                            }} /></div>
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
                        object={object}
                        setModel={value => { setModel(value); }}
                        setLinkedObject={setLinkedObject}
                        setShowLinkedObject={setShowLinkedObject}
                        getLinkName={getLinkName}
                        setLinkedObjectStruct={fieldSysName =>
                            setLinkedObjectStruct(transformTableFieldScheme(fieldSysName, props.tableFieldScheme))}
                    />
                })}

                {fields && fields.filter(i =>
                    fieldParams[i].write == true
                    && fieldParams[i].include == true
                    && fieldParams[i].id != deleteField
                ) && fields.filter(i =>
                    fieldParams[i].write == true
                    && fieldParams[i].include == true
                    && fieldParams[i].id != deleteField
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
            {props.shareble && 
                <div title='Copy direct link to the object' 
                    className={`${styles.shareObject} icon icon-copy`}
                    onClick={()=>{}}
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
                                moment(object[headerField].value).format('D MMM, YYYY') :
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
                        onClose={() => { setShowLinkedObject(false)}}
                        onTerminate={() => props.onClose()}
                        object={linkedObject && linkedObject.object}
                        params={linkedObject && {...linkedObject.params, actions: props.params.actions}}
                        parentObject={object}
                        tableFieldScheme={linkedObjectStruct}
                        executeAction={props.executeAction}
                        tableStructures={props.tableStructures}
                    />
                </React.Fragment>}
        </div>
    )
}

function CardField({ field, object, model, setModel, debug, editingOn,
    setLinkedObject, setLinkedObjectStruct, setShowLinkedObject, getLinkName }) {
    const [edit, setEdit] = useState(false)

    const checkLineBreaks = line => {
        return line ? (line.match(/\n/g) || []).length : 0;
    }

    const getResolution = line => {
        const regex = /\....?.?.?$/g;
        const found = line.match(regex);
        return found ? found[0] : ''
    }

    return (
        <div key={field.sysName} className={styles.objFieldWrapper}>

            {debug && <div>
                <p className='dd-debug'>{JSON.stringify(field)}</p>
                <p className='dd-debug'><b>object: </b>{JSON.stringify(object[field.sysName])}</p></div>}

            {/* {field.actions && field.actions.length > 0 && <div className='dd-debug'>бля! тут есть действия</div>} */}

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
                <FieldString
                    model={model}
                    checkLineBreaks={checkLineBreaks}
                    editingOn={editingOn}
                    object={object}
                    field={field}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                />
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
                            timeFormat={`${field.dateTimeOn ? `h:mm a` : ''}`}
                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                        /> :
                        <FieldReadOnly field={field} object={object} date weblink={{}} />
                    }
                </React.Fragment>}

            {/* BOOLEAN */}
            { (field.dataType == 'boolean') &&
                <React.Fragment>
                    {(field.write && editingOn) ?
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
                        <FieldReadOnly field={field} object={object} weblink={{}} />}
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
                <FieldJson
                    model={model}
                    editingOn={editingOn}
                    object={object}
                    field={field}
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

function FieldReadOnly({ field, object, weblink, date }) {

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
                            field.dateTimeOn ?
                                moment(object[field.sysName].value).format('D MMM, YYYY, h:mm a') :
                                moment(object[field.sysName].value).format('D MMM, YYYY')
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

function ActionDelete({ submit }) {

    const [confirmDelete, setConfirmDelete] = useState(false)

    return (
        <React.Fragment>
            {!confirmDelete ?
                <Button icon='delete' onClick={() => setConfirmDelete(true)} danger>Delete</Button> :
                <Button icon='delete' onClick={submit} danger>I'm totally sure, delete</Button>
            }
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
                            {/* <pre className='dd-debug'>{JSON.stringify(model,0,3)}</pre>
                            <pre className='dd-debug'>{JSON.stringify(currentObject,0,3)}</pre> */}
                            <Button
                                disabled={JSON.stringify(model) === JSON.stringify(currentObject)}
                                accent
                                icon='done'
                                onClick={() => { submit(model); setCurrentObject(model) }}
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

function FieldMkd({ field, model, object, onChange, description, editingOn }) {
    return (
        <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}</span>

            {description &&
                <span className={styles.description}>
                    {description}</span>}

            <Markdown
                edit={(field.write && editingOn)}
                value={model[field.sysName]}
                height={(field.write && editingOn) ? 350 : false}
                preview
                onChange={onChange}
            />
        </React.Fragment>
    )
}

function FieldJson({ field, model, onChange, object, editingOn }) {

    const jsonParse = def => {
        try {
            return JSON.stringify(JSON.parse(def), 0, 3)
        } catch (e) {
            console.log(e);
            return def
        }
    }

    const checkLineBreaks = line => {
        return line ? (line.match(/\n/g) || []).length : 0;
    }

    if (!field.jsonDisplay || !field.jsonDisplay.type || field.jsonDisplay.type == 'default') {
        return (
            <React.Fragment>
                {(field.write && editingOn) ?
                    <Input
                        type='textarea'
                        code
                        description={field.descriptionFlag && field.description}
                        rows='auto'
                        label={field.name || field.sysName}
                        defaultValue={jsonParse(model[field.sysName])}
                        onChange={onChange}
                    /> :
                    <FieldReadOnly field={field} object={object} weblink={{}} />}
            </React.Fragment>
        )
    }

    const jsonDefVal = def => {
        try {
            return JSON.parse(def)
        } catch (e) {
            console.log(e);
            return def
        }
    }

    if (field.jsonDisplay && (field.jsonDisplay.type == 'slider' || field.jsonDisplay.type == 'range')) {
        return (
            <div>
                <Input
                    type={field.jsonDisplay.type}
                    description={field.description}
                    disabled={!(field.write && editingOn)}
                    width={500}
                    //debug
                    label={field.name || field.sysName}
                    defaultValue={jsonDefVal(object[field.sysName].value)}
                    min={field.jsonDisplay.range && field.jsonDisplay.range.min}
                    max={field.jsonDisplay.range && field.jsonDisplay.range.max}
                    step={field.jsonDisplay.range && field.jsonDisplay.range.step}
                    unitName={field.jsonDisplay.unitName}
                    onChange={val => onChange(JSON.stringify(val))}
                />
            </div>
        )
    }

    if (field.jsonDisplay && field.jsonDisplay.type == 'radioStation') {
        return (
            <div>
                <Input
                    // debug
                    type='radio'
                    options={field.jsonDisplay && field.jsonDisplay.multipleChoice}
                    description={field.description}
                    disabled={!(field.write && editingOn)}
                    label={field.name || field.sysName}
                    onChange={val => onChange(JSON.stringify({ value: val }))}
                    defaultValue={jsonDefVal(model[field.sysName]) && jsonDefVal(model[field.sysName]).value}
                    customOption={field.jsonDisplay.customOption}
                    customOptionType={field.jsonDisplay.customOptionType}
                    customOptionLabel={field.jsonDisplay.customOptionLabel}
                    customOptionPlaceholder={field.jsonDisplay.customOptionPlaceholder}
                />
            </div>
        )
    }

    if (field.jsonDisplay && field.jsonDisplay.type == 'checkboxGroup') {
        return (
            <div>
                <Input
                    // debug
                    type='checkboxGroup'
                    options={field.jsonDisplay && field.jsonDisplay.multipleChoice}
                    description={field.description}
                    disabled={!(field.write && editingOn)}
                    label={field.name || field.sysName}
                    onChange={val => onChange(JSON.stringify(val))}
                    defaultValue={jsonDefVal(model[field.sysName])}
                    customOption={field.jsonDisplay.customOption}
                    customOptionType={field.jsonDisplay.customOptionType}
                    customOptionLabel={field.jsonDisplay.customOptionLabel}
                    customOptionPlaceholder={field.jsonDisplay.customOptionPlaceholder}
                />
            </div>
        )
    }

    return <div></div>
}

function FieldLink({ field, model, onChange, setLinkedObject, object,
    setLinkedObjectStruct, setShowLinkedObject, getLinkName, editingOn }) {

    const [edit, setEdit] = useState(false)

    // console.log('Field  Link')
    // console.log(field)

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
                                            columns: { main: 
                                                { 
                                                    id: 'main',
                                                    fieldIds: field.configureLinkedCard && field.configureLinkedCard.fieldOrder
                                                } },
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
                                                    columns: { main: 
                                                        { 
                                                            id: 'main',
                                                            fieldIds: field.configureLinkedCard && field.configureLinkedCard.fieldOrder
                                                        } },
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

function CardAction({ action, actionParams, debug, submitAction, onClose, checkActionCond, object }) {

    const [actionData, setActionData] = useState(actionParams)

    // console.log('====actionParams====')
    // console.log(actionParams)

    let conds = actionParams.conditionals ? [...actionParams.conditionals] : null
    if (conds) {
        conds.forEach(cond=>{
            if (cond.target == 'id' && cond.type != 'const') {
                typeof object[cond.value].value != 'object' ? cond.checkValue = object[cond.value].value :
                cond.checkValue = object[cond.value].value.id || null
            }
            if (cond.target == 'id' && cond.type == 'const') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'role') {
                cond.checkValue = cond.value
            }
        })
    }

    return (
        actionParams && checkActionCond && checkActionCond(conds) ?
        <React.Fragment>
            {actionParams.displayAs == 'form' &&
                <React.Fragment>
                    <FormSection title={actionParams.name} />
                    {/* <pre className='dd-debug'>{JSON.stringify(actionData, 0, 3)}</pre> */}
                    {actionParams.formFields && actionParams.formFields.length > 0 && actionParams.formFields.map(field => (<Input
                        type={field.field.dataType}
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
            <Button
                accent={actionParams.buttonType == 'accent'}
                danger={actionParams.buttonType == 'danger'}
                onClick={() => { 
                    submitAction(actionData)
                    actionParams.closePopup && onClose()
                }}
                icon={actionParams.buttonIcon}
            >
                {actionParams.buttonTitle || actionParams.name}</Button>
        </React.Fragment> : <React.Fragment></React.Fragment>
    )
}

function FieldString({ field, model, onChange, object, editingOn, checkLineBreaks }) {

    function validateUrl(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }

    if (field.stringDisplay == 'markdown') {
        if (field.write && editingOn) {
            return (
                <FieldMkd
                    description={field.descriptionFlag && field.description}
                    onChange={onChange}
                    object={object}
                    editingOn={editingOn}
                    model={model}
                    field={field} />
            )
        } else {
            return (
                <FieldMkd
                    description={field.descriptionFlag && field.description}
                    object={object}
                    model={model}
                    field={field} />
            )
        }
    }

    if (field.stringDisplay == 'hint') {
        if (field.write && editingOn) {
            return (
                <Input
                    type='textarea'
                    description={field.descriptionFlag && field.description}
                    rows='auto'
                    label={field.name || field.sysName}
                    defaultValue={model[field.sysName]}
                    onChange={onChange}
                />
            )
        } else {
            return (
                <React.Fragment>
                    <span className={styles.label}>
                        {field.name || field.sysName}</span>
                    <Hint
                        ok={field.hintType == 'ok'}
                        danger={field.hintType == 'danger'}
                        title={model[field.sysName]}
                        margin={{ top: 1, bottom: 24 }}
                    >{field.descriptionFlag && field.description}</Hint>
                </React.Fragment>
            )
        }
    }

    return (
        <React.Fragment>
            {(field.write && editingOn) ?
                <Input
                    type='textarea'
                    description={field.descriptionFlag && field.description}
                    rows='auto'
                    label={field.name || field.sysName}
                    defaultValue={model[field.sysName]}
                    onChange={onChange}
                />
                :
                <FieldReadOnly field={field} object={object}
                    weblink={{
                        flag: field.stringDisplay == 'link' && validateUrl(model[field.sysName]),
                        weblink: field.weblink
                    }} />

            }
        </React.Fragment>
    )
}