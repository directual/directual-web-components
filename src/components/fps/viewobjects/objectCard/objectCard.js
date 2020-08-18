import React, { useState, useEffect } from 'react'
import styles from '../table/table.module.css'
import Backdrop from '../../backdrop/backdrop'
import ActionPanel from '../../actionspanel/actionspanel'
import Button from '../../button/button'
import Input from '../../dataentry/input/input'
import { FormSection } from '../../dataentry/form/FpsForm'
import Loader from '../../loader/loader'

export function ObjectCard(props) {
    const [showLinkedObject, setShowLinkedObject] = useState(false)
    const [linkedObject, setLinkedObject] = useState({})
    const [linkedObjectStruct, setLinkedObjectStruct] = useState()
    const [model, setModel] = useState(props.object)
    const [currentObject, setCurrentObject] = useState(props.object)

    // useEffect(() => {
    //     console.log('------object:---------')
    //     console.log(props.object)
    //     console.log('------------ form model: -------------')
    //     console.log(model)
    // }, [model])

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
        deepClone.forEach(i => i[0] = i[0].substring(sysname.length + 1)) // это меняет props.tableFieldScheme
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
            structure.visibleName = Object.values(JSON.parse(tableStructures[structure.id].jsonViewIdSettings)).map(i => i = i.sysName)
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
    //------------------------------

    const getLinkName = (sysname, obj) => {
        const structure = getStructure(obj, transformTableFieldScheme(sysname, props.tableFieldScheme), props.tableStructures)
        const linkName = structure.visibleName && structure.visibleName.map(field => obj[field]).join(' ')
        return linkName || 'No visible name'
    }

    const isEditable = field => {
        if (props.writeFields && props.writeFields.indexOf('id') != -1 &&
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


    return (
        <React.Fragment>
            <div className={styles.objectCard}>
                <div className={styles.objectCardHeader}>
                    <div onClick={props.onClose}
                        className={`${styles.closeObjectCard} icon icon-back ${showLinkedObject && styles.hidden}`}></div>
                    <h2>
                        {structure.visibleName ? structure.visibleName.map(headerField => object[headerField] ? object[headerField].value : null).join(' ')
                            :
                            'No visible name'}
                    </h2>
                </div>
                <div className={styles.objectCardBody}>
                    {Object.values(object).map(field =>
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
                                                <span>{field && field.value}</span> :
                                                <span className={`icon icon-${field && (field.value ? `done` : `ban`)}`}>{field && (field.value ? 'Yes' : 'No')}</span>}

                                        </React.Fragment> :
                                        <Input
                                            type={matchInputType(field.dataType)}
                                            label={field.name || field.sysName}
                                            defaultValue={field.dataType == 'boolean' ? ((model[field.sysName] == 'true' || model[field.sysName] == true) ? true : false): model[field.sysName]}
                                            options={
                                                [
                                                    { value: true, label: 'Yes' },
                                                    { value: false, label: 'No' },
                                                ]
                                            }
                                            onChange={value => setModel({ ...model, [field.sysName]: value })}
                                        />
                                    }
                                </React.Fragment>}
                            {field.dataType == 'id' && props.params.isDisplayID && <React.Fragment>
                                <span className={styles.label}>
                                    {field.name || field.sysName}</span>
                                {!field.value && <span className={styles.novalue}>—</span>}
                                <span>{field && field.value}</span>
                            </React.Fragment>
                            }

                            {(field.dataType == 'link') && <React.Fragment>
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
                            </React.Fragment>
                            }
                            {(field.dataType == 'arrayLink') && <React.Fragment>
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
                            </React.Fragment>
                            }

                        </div>
                    )}

                    {/* <a onClick={() => setShowLinkedObject(true)}>Click me</a> */}
                    {props.writeFields && props.writeFields.length > 0 &&
                        <React.Fragment>
                            {props.loading ? <Loader>Saving...</Loader> :
                                (props.writeFields && props.writeFields.indexOf('id') != -1 && props.writeFields.length > 1) &&
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
                                        <React.Fragment>
                                            <FormSection title='Danger zone' />
                                            {!confirmDelete ?
                                                <Button icon='delete' onClick={() => setConfirmDelete(true)} danger>Delete</Button> :
                                                <Button icon='delete' onClick={() => { props.submit({ [props.params.deleteField]: true, id: object.id.value }); props.onClose() }} danger>I'm totally sure, delete</Button>
                                            }
                                        </React.Fragment>}
                                </React.Fragment>}

                        </React.Fragment>}
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
                            tableFieldScheme={linkedObjectStruct}
                            tableStructures={props.tableStructures}
                        />
                    </React.Fragment>}
            </div>

        </React.Fragment>
    )
}
