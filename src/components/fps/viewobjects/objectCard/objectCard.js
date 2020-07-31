import React, { useState, useEffect } from 'react'
import styles from '../table/table.module.css'
import Backdrop from '../../backdrop/backdrop'

export function ObjectCard(props) {
    const [showLinkedObject, setShowLinkedObject] = useState(false)


  useEffect(() => {
    console.log('------object:---------')
    console.log(props.object)
    console.log(props.tableFieldScheme) // вот тут уже выдается измененный объект (см ниже функцию transformTableFieldScheme)
    console.log(props.tableStructures)
    console.log('-------------')

    transformTableFieldScheme('author_id',[...props.tableFieldScheme])
  }, [])

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        e.key == 'Escape' && props.onClose()
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => {window.removeEventListener('keydown', handleUserKeyPress);};
    }, [handleUserKeyPress]);
    //----------------------

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        console.log('transformTableFieldScheme ' + sysname)
        let newTableFieldScheme = tableFieldScheme.filter(i=>i[0].startsWith(sysname + '.'))
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach(i=>i[0] = i[0].substring(sysname.length + 1)) // это меняет props.tableFieldScheme
        console.log(deepClone)
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
                object[field].value = props.object[field]
                let fieldStructure = structure.fieldStructure.filter(i => i.sysName == field)[0]
                object[field].name = fieldStructure.name
                object[field].sysName = field
                object[field].dataType = fieldStructure.dataType
            }
        }
        return object
    }
    const object = composeObject()
    //------------------------------

    const getLinkName = (sysname, obj) => {
        const structure = getStructure(obj, transformTableFieldScheme(sysname, props.tableFieldScheme), props.tableStructures)
        console.log('debug')
        console.log(structure)
        console.log(sysname)
        console.log(obj)
        const linkName =  structure.visibleName && structure.visibleName.map(field => obj[field]).join(' ')
        return linkName || 'No visible name'
    }

    return (
        <React.Fragment>
            <div className={styles.objectCard}>
                <div className={styles.objectCardHeader}>
                    <div onClick={props.onClose}
                        className={`${styles.closeObjectCard} icon icon-back ${showLinkedObject && styles.hidden}`}></div>
                    <h2>
                        {structure.visibleName ? structure.visibleName.map(headerField => object[headerField].value).join(' ')
                            :
                            'No visible name'}
                    </h2>
                </div>
                <div className={styles.objectCardBody}>
                    {Object.values(object).map(field =>
                        <div key={field.sysName} className={styles.objFieldWrapper}>
                            <span className={styles.label}>
                                {field.name || field.sysName}</span>
                            {!field.value && <span className={styles.novalue}>—</span>}
                            {(field.dataType == 'link') &&
                                <div className={styles.linkFieldWrapper}>
                                    <a>{getLinkName(field.sysName, field.value)}</a>
                                </div>
                            }
                            {(field.dataType == 'arrayLink') &&
                                <div className={styles.linkFieldWrapper}>
                                    <a>однажды в суровую</a>
                                    <a>зимнюю пору</a>
                                    <a>я из лесу вышел</a>
                                </div>
                            }
                            {field.dataType != 'link' && field.dataType != 'arrayLink' &&
                                <span>{field.value}</span>}
                        </div>
                    )}

                    {/* <a onClick={() => setShowLinkedObject(true)}>Click me</a> */}
                </div>
                {showLinkedObject &&
                    <React.Fragment>
                        <Backdrop onClick={() => setShowLinkedObject(false)} hoverable rounded label={props.object ? props.object.title : ''} />
                        <ObjectCard onClose={() => setShowLinkedObject(false)} />
                    </React.Fragment>}
            </div>

        </React.Fragment>
    )
}
