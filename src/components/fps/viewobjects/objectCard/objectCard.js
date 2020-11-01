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

export function ObjectCard(props) {
    const [showLinkedObject, setShowLinkedObject] = useState(false)
    const [linkedObject, setLinkedObject] = useState({})
    const [linkedObjectStruct, setLinkedObjectStruct] = useState()
    const [model, setModel] = useState(props.object)
    const [currentObject, setCurrentObject] = useState(props.object)

    // support previous component version:
    const oldFashioned = !props.params.data ? true : false

    console.log('==============props.params==============')
    console.log(props.params)
    console.log(oldFashioned)

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
                content: composeTabContent(props.params.data.columns[tab].fieldIds, fieldDetails, props.params.deleteField)
            }
        })
    }

    //------------------------------
    function getLinkName(sysname, obj) {
        const structure = getStructure(obj, transformTableFieldScheme(sysname, props.tableFieldScheme), props.tableStructures)
        const linkName = structure.visibleName && structure.visibleName.map(field => obj[field]).join(' ')
        return linkName || 'No visible name'
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
        return (line.match(/\n/g) || []).length;
    }

    const noTabs =
        <React.Fragment>
            {Object.values(object).map(field =>
                ((props.params && props.params.deleteField !== field.sysName) && (field.dataType !== 'id' || props.params.isDisplayID)) &&
                <div key={field.sysName} className={styles.objFieldWrapper}>
                    {field.dataType != 'link' &&
                        field.dataType != 'arrayLink' &&
                        field.dataType != 'id' && <React.Fragment>
                            {!isEditable(field) ?
                                <React.Fragment>
                                    <span className={styles.label}>
                                        {field.name || field.sysName}</span>
                                    {!field.value && field.dataType != 'boolean' && <span className={styles.novalue}>—</span>}
                                    {field.dataType != 'boolean' ?
                                        <span className={styles.fieldValue}>{field && field.value}</span> :
                                        <span className={`icon icon-${field && (field.value ? `done` : `ban`)}`}>{field && (field.value ? 'Yes' : 'No')}</span>}

                                </React.Fragment> :
                                <React.Fragment>
                                    {field.dataType == 'string' ?
                                        <Input
                                            type='textarea'
                                            rows={checkLineBreaks(model[field.sysName]) > 10 ? 10 : checkLineBreaks(model[field.sysName]) + 1}
                                            label={field.name || field.sysName}
                                            defaultValue={model[field.sysName]}
                                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                                        />
                                        :
                                        <Input
                                            type={matchInputType(field.dataType)}
                                            label={field.name || field.sysName}
                                            defaultValue={field.dataType == 'boolean' ? ((model[field.sysName] == 'true' || model[field.sysName] == true) ? true : false) : model[field.sysName]}
                                            options={
                                                [
                                                    { value: true, label: 'Yes' },
                                                    { value: false, label: 'No' },
                                                ]
                                            }
                                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                                        />}
                                </React.Fragment>}
                        </React.Fragment>}
                    {field.dataType == 'id' && props.params && props.params.isDisplayID &&
                        <React.Fragment>
                            <span className={styles.label}>
                                {field.name || field.sysName}</span>
                            {!field.value && <span className={styles.novalue}>—</span>}
                            <span>{field && field.value}</span>
                        </React.Fragment>
                    }
                    {field.dataType == 'link' &&
                        <React.Fragment>
                            {field.value &&
                                <React.Fragment>
                                    <span className={styles.label}>
                                        {field.name || field.sysName}</span>
                                    <div className={styles.linkFieldWrapper}>
                                        <a
                                            onClick={() => {
                                                setLinkedObject(field.value)
                                                setLinkedObjectStruct(transformTableFieldScheme(field.sysName, props.tableFieldScheme))
                                                setShowLinkedObject(true)
                                            }}
                                        >{getLinkName(field.sysName, field.value)}</a>
                                    </div>
                                </React.Fragment>}

                            {isEditable(field) &&
                                // props.object[field.sysName].id &&
                                <div className={styles.editLink}>
                                    <Input
                                        type='string'
                                        label={!field.value ? (field.name || field.sysName) : ''}
                                        tip={`Edit ${field.name || field.sysName} (value of the link field is object ID)`}
                                        defaultValue={currentObject[field.sysName] && (currentObject[field.sysName].id || currentObject[field.sysName])}
                                        onChange={value => setModel({ ...model, [field.sysName]: value })}
                                    />
                                </div>
                            }
                        </React.Fragment>
                    }
                    {field.dataType == 'arrayLink' && <React.Fragment>
                        <span className={styles.label}>
                            {field.name || field.sysName}</span>
                        <div className={styles.linkFieldWrapper}>
                            {field.value && field.value.map((link, i) => {
                                return (
                                    <a
                                        key={i}
                                        onClick={() => {
                                            setLinkedObject(link)
                                            setLinkedObjectStruct(transformTableFieldScheme(field.sysName, props.tableFieldScheme))
                                            setShowLinkedObject(true)
                                        }}
                                    >{getLinkName(field.sysName, link)}</a>)
                            })}
                        </div>
                        {isEditable(field) &&
                            //props.object[field.sysName] && props.object[field.sysName][0] && props.object[field.sysName][0].id &&
                            <div className={styles.editLink}>
                                <Input
                                    type='string'
                                    //label={`Edit ${field.name || field.sysName}`}
                                    tip={`Edit ${field.name || field.sysName} (value of the arrayLink field is object IDs, comma separated)`}
                                    defaultValue={currentObject[field.sysName] && (currentObject[field.sysName][0].id ? currentObject[field.sysName].map(i => i.id).join(',') : currentObject[field.sysName].join(','))}
                                    onChange={value => setModel({ ...model, [field.sysName]: value.split(',') })}
                                />
                            </div>
                        }
                    </React.Fragment>
                    }

                </div>
            )}

            {props.writeFields && props.writeFields.length > 0 &&
                <React.Fragment>
                    {props.loading ? <Loader>Saving...</Loader> :
                        (props.writeFields && props.writeFields.indexOf('id') != -1 && props.writeFields.length > 1) && object.id && object.id.value &&
                        <React.Fragment>
                            <ActionPanel margin={{ top: 24, bottom: 12 }}>
                                <Button
                                    disabled={JSON.stringify(model) === JSON.stringify(currentObject)}
                                    accent
                                    icon='done'
                                    onClick={() => { props.submit(model); setCurrentObject(model) }}>
                                    Save changes</Button>
                                <Button danger icon='ban'
                                    onClick={() => setModel(currentObject)}
                                    disabled={JSON.stringify(model) === JSON.stringify(currentObject)}>
                                    Discard changes</Button>
                            </ActionPanel>
                            {(props.params.deleteField && object.id && props.writeFields && props.writeFields.indexOf(props.params.deleteField) != -1) &&
                                // удаление
                                <React.Fragment>
                                    <FormSection title='Danger zone' />
                                    {!confirmDelete ?
                                        <Button icon='delete' onClick={() => setConfirmDelete(true)} danger>Delete</Button> :
                                        <Button icon='delete' onClick={() => { props.submit({ [props.params.deleteField]: true, id: object.id.value }); props.onClose() }} danger>I'm totally sure, delete</Button>
                                    }
                                </React.Fragment>}
                        </React.Fragment>}

                </React.Fragment>}
        </React.Fragment>

    // ============================= Generating Tab content ============================
    function composeTabContent(fields, fieldParams, deleteField) {
        return (
            <React.Fragment>
                {fields.map(fieldSysName => {
                    let field = fieldParams[fieldSysName]
                    field = {
                        ...field,
                        name: field.content,
                        sysName: field.id
                    }
                    if (field.id == 'action__delete') return <ActionDelete
                        submit={() => {
                            props.submit({ [deleteField]: true, id: object.id.value });
                            props.onClose()
                        }} />
                    if (!field.include || !object[field.sysName] || field.sysName == deleteField) { return null }
                    return <CardField
                        //debug
                        model={model}
                        field={field}
                        object={object}
                        setModel={value => setModel(value)}
                        setLinkedObject={setLinkedObject}
                        setShowLinkedObject={setShowLinkedObject}
                        getLinkName={getLinkName}
                        setLinkedObjectStruct={fieldSysName =>
                            setLinkedObjectStruct(transformTableFieldScheme(fieldSysName, props.tableFieldScheme))}
                    />
                })}

                {fields.filter(i =>
                    fieldParams[i].write == true
                    && fieldParams[i].include == true
                    && fieldParams[i].id != deleteField
                ) && fields.filter(i =>
                    fieldParams[i].write == true
                    && fieldParams[i].include == true
                    && fieldParams[i].id != deleteField
                ).length > 0 &&
                    <SaveCard
                        model={model}
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
            <div className={styles.objectCardHeader}>
                <div onClick={props.onClose}
                    className={`${styles.closeObjectCard} icon icon-back ${showLinkedObject && styles.hidden}`}></div>
                <h2>
                    {structure.visibleName ? structure.visibleName.map(headerField => object[headerField] ?
                        typeof object[headerField].value == 'object' ?
                            getLinkName(headerField, object[headerField].value)
                            : object[headerField].value
                        : null).join(' ')
                        :
                        'No visible name'}
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
                            'No visible name'} />
                    <ObjectCard
                        onClose={() => setShowLinkedObject(false)}
                        object={linkedObject}
                        params={{ isDisplayID: false }}
                        tableFieldScheme={linkedObjectStruct}
                        tableStructures={props.tableStructures}
                    />
                </React.Fragment>}
        </div>
    )
}


function CardField({ field, object, model, setModel, debug,
    setLinkedObject, setLinkedObjectStruct, setShowLinkedObject, getLinkName }) {
    const [edit, setEdit] = useState(false)

    const checkLineBreaks = line => {
        return (line.match(/\n/g) || []).length;
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
                        {field.write && <div
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
                        <Button icon={`${model[field.sysName] ? 'refresh' : 'upload'}`} small onClick={() => setEdit(!edit)}>
                            {model[field.sysName] ? 'Change file' : 'Upload file'}</Button>
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
                    {field.write ?
                        !field.markdown ?
                            <Input
                                type='textarea'
                                description={field.descriptionFlag && field.description}
                                rows={checkLineBreaks(model[field.sysName]) > 10 ? 10 : checkLineBreaks(model[field.sysName]) + 1}
                                label={field.name || field.sysName}
                                defaultValue={model[field.sysName]}
                                onChange={value => setModel({ ...model, [field.sysName]: value })}
                            />
                            :
                            <MkdField
                                description={field.descriptionFlag && field.description}
                                onChange={value => setModel({ ...model, [field.sysName]: value })}
                                object={object}
                                model={model}
                                field={field} />
                        :
                        <FieldReadOnly field={field} object={object}
                            weblink={{
                                flag: field.weblinkFlag,
                                weblink: field.weblink
                            }} />
                    }
                </React.Fragment>}

            {/* ДАТЫ! */}
            { (field.dataType == 'date') &&
                <React.Fragment>
                    {field.write ?
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
                    {field.write ?
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

            {/* LINK & ARRAY LINK*/}
            { (field.dataType == 'link' || field.dataType == 'arrayLink') &&
                <FieldLink
                    model={model}
                    object={object}
                    field={field}
                    onChange={value => setModel({ ...model, [field.sysName]: value })}
                    setLinkedObject={setLinkedObject}
                    setLinkedObjectStruct={setLinkedObjectStruct}
                    setShowLinkedObject={setShowLinkedObject}
                    getLinkName={getLinkName}
                />
            }

            {/* ВСЕ ОСТАЛЬНОЕ */}
            { field.dataType != 'string' &&
                field.dataType != 'file' &&
                field.dataType != 'boolean' &&
                field.dataType != 'date' &&
                field.dataType != 'link' &&
                field.dataType != 'arrayLink' &&
                <React.Fragment>
                    {field.write ?
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
                                <span className={styles.fieldValue}>{object[field.sysName].value}</span> :
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
            <FormSection title='Danger zone' />
            <ActionPanel margin={{ top: 0, bottom: 12 }}>
                {!confirmDelete ?
                    <Button icon='delete' onClick={() => setConfirmDelete(true)} danger>Delete</Button> :
                    <Button icon='delete' onClick={submit} danger>I'm totally sure, delete</Button>
                }
            </ActionPanel>
        </React.Fragment>
    )
}

function SaveCard({ model, currentObject, submit, setCurrentObject, setModel }) {

    return (
        <ActionPanel margin={{ top: 24, bottom: 12 }}>
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
        </ActionPanel>
    )
}

function MkdField({ field, model, object, onChange, description }) {
    return (
        <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}</span>

            {description &&
                <span className={styles.description}>
                    {description}</span>}

            <Markdown
                edit={field.write}
                value={model[field.sysName]}
                showTip='https://readme.directual.com/data/data-types/markdown-cheatsheet'
                height={250}
                preview='live' // 'live' or 'edit'
                onChange={onChange}
            />
        </React.Fragment>
    )
}

function FieldLink({ field, model, onChange, setLinkedObject, object,
    setLinkedObjectStruct, setShowLinkedObject, getLinkName }) {

    const [edit, setEdit] = useState(false)

    useEffect(()=> {
        onChange(object[field.sysName].value.id)
    }, [edit])

    return (
        <React.Fragment>
            <span className={styles.label}>
                {field.name || field.sysName}
                {field.write &&
                    <span
                        onClick={()=> setEdit(!edit)} 
                        className={`${styles.editPedal} icon icon-edit small`}>
                        {edit ? 'cancel editing' : 'edit'}
                    </span>
                }
            </span>
            {field.dataType == 'link' && field.read && object[field.sysName].value && !edit &&
                <div className={styles.linkFieldWrapper}>
                    <a
                        onClick={() => {
                            setLinkedObject(model[field.sysName])
                            setLinkedObjectStruct(field.sysName)
                            setShowLinkedObject(true)
                        }}
                    >{getLinkName(field.sysName, object[field.sysName].value)}</a>
                </div>
            }

            {field.dataType == 'arrayLink' && field.read && object[field.sysName].value && !edit && 
                <div className={styles.linkFieldWrapper}>
                    {object[field.sysName].value && object[field.sysName].value.length > 0 && object[field.sysName].value.map((link, i) => {
                        return (
                            <a
                                key={i}
                                onClick={() => {
                                    setLinkedObject(link)
                                    setLinkedObjectStruct(field.sysName)
                                    setShowLinkedObject(true)
                                }}
                            >{getLinkName(field.sysName, link)}</a>)
                    })}
                </div>
            }

            {!object[field.sysName].value && !edit && '—'}
            
            {edit && field.searchData &&
                <Input
                    type={`${field.dataType == 'link' ? 'select' : 'multiselect'}`}
                    options={field.searchData}
                    onChange={onChange}
                    defaultValue={
                        field.dataType == 'link' ? object[field.sysName].value.id :
                        (object[field.sysName].value && object[field.sysName].value.length > 0 
                            && object[field.sysName].value.map(i=>i.id))
                    }
                    tip = {field.searchData.length > 990 && 'Quick search is limited by 1000 options'}
                    />
            }
        </React.Fragment>
    )
}