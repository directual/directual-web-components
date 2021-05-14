import React, { useState, useEffect, useRef } from 'react'
import styles from './cards.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import ExpandedText from '../../expandedText/expandedText'
import { Paging } from '../paging/paging'
import moment from 'moment'

export function Cards({ data, onExpand, loading, searchValue, auth, submitAction, params, checkActionCond, currentBP }) {
    const tableHeaders = data.headers || []
    const tableData = enrichTableDataWithWriteFields(data) || []
    const tableParams = data.params || {
        cardHeaderComment: '',
        cardBodyText: ''
    }

    // console.log('=========params=========')
    // console.log(tableParams)

    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const currentPage = data.pageNumber || 0

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    // обогащаем поля теми, что не пришли по данным, но мы их можем писать:
    function enrichTableDataWithWriteFields(data) {
        let saveData = data.data ? [...data.data] : []
        saveData.forEach(field => {
            data.writeFields && data.writeFields.forEach(writeField => {
                if (!field[writeField]) { field[writeField] = '' }
            })
        })
        return saveData
    }

    const getInitialStructureParams = () => {
        const randomField = tableHeaders.filter(field => (field.dataType != 'link' && field.dataType != 'arrayLink'))[0] && tableHeaders.filter(field => (field.dataType != 'link' && field.dataType != 'arrayLink'))[0].sysName
        const id = (tableFieldScheme.filter(field => randomField == field[0])[0] && tableFieldScheme.filter(field => randomField == field[0])[0][1]) || null
        const name = id && tableStructures[id] && tableStructures[id].name
        const viewName = id && tableStructures[id] && (tableStructures[id].jsonViewIdSettings ? (Object.values(JSON.parse(tableStructures[id].jsonViewIdSettings || [])).map(i => i = i && i.sysName)) : [])
        return (
            {
                id,
                name,
                viewName
            }
        )
    }

    data.error =
        data.error && data.error == '403'
            ? 'You have no permissions'
            : data.error
    data.error =
        data.error && data.error == '511' ? 'Table is not configured' : data.error

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

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        let newTableFieldScheme = tableFieldScheme.filter(i => i[0].startsWith(sysname + '.'))
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach(i => i[0] = i[0].substring(sysname.length + 1))
        return deepClone
    }

    const getLinkName = (sysname, obj) => {
        const structure = getStructure(obj, transformTableFieldScheme(sysname, tableFieldScheme), tableStructures)
        const linkName = structure.visibleName && structure.visibleName.map(field => obj[field]).join(' ')
        return linkName || 'No visible name'
    }

    const edenrichConds = (conds, object) => {
        let eConds = conds ? [...conds] : null
        // console.log('edenrichConds')
        // console.log(conds)
        // console.log(object)
        eConds && eConds.forEach(cond => {
            console.log(cond)
            console.log(object)
            if (cond.target == 'id' && cond.type == 'const') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'role') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'field') {
                typeof object[cond.value] != 'object' ? cond.fieldValue = object[cond.field] :
                    cond.fieldValue = object[cond.field].value || null
            }
            if (cond.target == 'id' && cond.type != 'const') {
                typeof object[cond.value] != 'object' ? cond.checkValue = object[cond.value] :
                    cond.checkValue = object[cond.value].value || null // раньше тут было .id, а не .value проверить!
            }
        })


        return eConds
    }

    return (
        <React.Fragment>
            <div className={`${styles.cardsWrapper} 
                ${(data.error || tableData.length === 0 || tableHeaders.length === 0) && styles.emptyTable} ${loading && styles.loading}`}>
                {(tableData.length != 0 && tableHeaders.length != 0) && tableData.map((row, i) => {
                    const object = row
                    // actions для меню быстрого доступа
                    const quickActions = params.actions ?
                        params.actions.filter(i => i.dropdown && i.displayAs == 'button'
                            && i.callFrom != 'linked'
                            && checkActionCond(edenrichConds(i.conditionals, object))) : []
                    // выполнить Action
                    function performAction(actionParams) {
                        //console.log(actionParams)
                        let mapping = {}
                        if (actionParams.formMapping.length == 0) {
                            console.log('action does nothing')
                            return null
                        }
                        actionParams.formMapping && actionParams.formMapping.forEach(row => {
                            if (row.type == 'user') { mapping[row.target] = auth ? auth.user : null }
                            if (row.type == 'const') { mapping[row.target] = row.value }
                            if (row.type == 'objectField') {
                                mapping[row.target] = typeof object[row.value] != 'object' ?
                                    object[row.value] :
                                    Array.isArray(object[row.value]) ?
                                        object[row.value].map(i => i.id).join(',') :
                                        object[row.value].id
                            }
                        })
                        const sl = actionParams.sysName
                        submitAction(mapping, sl)
                    }

                    // форматируем дату для карточки (если есть) в соответствии с formatOptions
                    const formatDate = (value, formatOptions) => {
                        formatOptions = formatOptions || {}
                        const formattedDate = formatOptions.isUTC == 'true' ?
                            moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
                            :
                            moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
                        return formattedDate
                    }

                    // в этой хуете мы подтягиваем для Заголовка, Подзаголовка и Текста карточки visible name если поле типа link/arrayLink
                    const cardHeader = getInitialStructureParams().viewName && getInitialStructureParams().viewName &&
                        (getInitialStructureParams().viewName.length > 0 ?
                            getInitialStructureParams().viewName.map(i => typeof row[i] == 'object' ?
                                !Array.isArray(row[i]) ?
                                    getLinkName(i, row[i]) :
                                    row[i].map(j => getLinkName(i, j)).join(', ')
                                :
                                !tableHeaders.filter(h => h.sysName == i)[0] ? '' :
                                    tableHeaders.filter(h => h.sysName == i)[0].dataType != 'date' ?
                                        row[i] :
                                        formatDate(row[i], tableHeaders.filter(h => h.sysName == i)[0].formatOptions)
                            ).join(' ')
                            : '')
                    const cardHeaderComment = row && (typeof row[tableParams.cardHeaderComment] == 'object' ?
                        !Array.isArray(row[tableParams.cardHeaderComment]) ?
                            getLinkName(tableParams.cardHeaderComment, row[tableParams.cardHeaderComment])
                            : row[tableParams.cardHeaderComment].map(i => getLinkName(tableParams.cardHeaderComment, i))
                        : (tableHeaders.filter(h => h.sysName == tableParams.cardHeaderComment)[0] &&
                            tableHeaders.filter(h => h.sysName == tableParams.cardHeaderComment)[0].dataType == 'date') ?
                            //<pre>{JSON.stringify(tableHeaders.filter(h => h.sysName == tableParams.cardHeaderComment)[0],0,3)}</pre> :
                            formatDate(row[tableParams.cardHeaderComment], tableHeaders.filter(h => h.sysName == tableParams.cardHeaderComment)[0].formatOptions) :
                            row[tableParams.cardHeaderComment]
                    )

                    const cardBodyText = row && (typeof row[tableParams.cardBodyText] == 'object' ?
                        !Array.isArray(row[tableParams.cardBodyText]) ?
                            getLinkName(tableParams.cardBodyText, row[tableParams.cardBodyText])
                            : row[tableParams.cardBodyText].map(i => getLinkName(tableParams.cardBodyText, i))

                        : (tableHeaders.filter(h => h.sysName == tableParams.cardBodyText)[0] &&
                            tableHeaders.filter(h => h.sysName == tableParams.cardBodyText)[0].dataType == 'date') ?
                            formatDate(row[tableParams.cardBodyText], tableHeaders.filter(h => h.sysName == tableParams.cardBodyText)[0].formatOptions) :
                            row[tableParams.cardBodyText]
                    )
                    // ==================================

                    return (
                        <div key={i} className={`${styles.card} ${styles[currentBP]} ${styles[tableParams.cardListLayout || 'grid']}`}>
                            <div
                                className={`${styles.cardInnerWrapper}
                                ${styles[tableParams.cardImageType]}
                                ${tableParams.invertColors && styles.invertColors}
                                `}
                                onClick={() => {
                                    //console.log(row) 
                                    !loading && onExpand(row)
                                }}>

                                {/* Картинка карточки */}
                                {tableParams.cardImageField &&
                                    <div className={`${styles.cardImage}`}
                                        style={{
                                            backgroundImage: `url(${row[tableParams.cardImageField]})`,
                                            width: (tableParams.cardImageType == "left" || tableParams.cardImageType == "leftCircle") ? parseInt(tableParams.cardImageSize) : 'auto',
                                            height: (tableParams.cardImageType == "top" || tableParams.cardImageType == "leftCircle") ? parseInt(tableParams.cardImageSize) : 'auto',
                                        }}
                                    >
                                        {!row[tableParams.cardImageField] && <span className='icon icon-ban'>no&nbsp;picture</span>}
                                    </div>}

                                {/* Текст карточки */}
                                <div className={styles.cardText}>

                                    {/* quick actions menu */}
                                    <QuickActionsControl quickActions={quickActions} performAction={performAction} />

                                    <h3 className={styles.cardHeader}>
                                        <span className={styles.txt}>{cardHeader.length > 0 ? cardHeader : 'No visible name'}</span>

                                        {/* counter: */}
                                        {(tableParams.counterField &&
                                            row && row[tableParams.counterField] &&
                                            row[tableParams.counterField] != 0 && row[tableParams.counterField] != "0") ?
                                            <span className={styles.counter} title={`${row[tableParams.counterField]} ${tableParams.counterText}`}>
                                                {row[tableParams.counterField]}</span> : ''}
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        {cardHeaderComment && (
                                            // если Array, то это у нас либо список labels, либо arrayLink
                                            // также чекаем на то, что это link/arrayLink, тогда добавляем классом linkText рамочку
                                            // для labels рамочка добавляется классом labelText
                                            !Array.isArray(cardHeaderComment) ?
                                                <div className={`${styles.cardHeaderComment} ${typeof row[tableParams.cardHeaderComment] == 'object' && styles.linkText}`}>
                                                    {cardHeaderComment}
                                                </div> :
                                                <div className={`${styles.headerArray} ${styles.cardHeaderComment}`}>
                                                    {cardHeaderComment.map(i =>
                                                        <div className={`${typeof row[tableParams.cardHeaderComment][0] == 'object' ? styles.linkText : styles.labelText}`}>
                                                            {i}
                                                        </div>)}
                                                </div>

                                        )}
                                        {cardBodyText && (
                                            // все также как у cardHeaderComment
                                            !Array.isArray(cardBodyText) ?
                                                <ExpandedText className={`${styles.cardBodyText} ${typeof row[tableParams.cardBodyText] == 'object' && styles.linkText}`}>
                                                    {cardBodyText}
                                                </ExpandedText> :
                                                <div className={`${styles.headerArray} ${styles.cardBodyText}`}>
                                                    {cardBodyText.map(i =>
                                                        <div className={`${typeof row[tableParams.cardBodyText][0] == 'object' ? styles.linkText : styles.labelText}`}>
                                                            {i}
                                                        </div>)}
                                                </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
                {data.error &&
                    <SomethingWentWrong
                        icon='warning'
                        message={data.error}
                    />
                }
                {(tableData.length === 0 || tableHeaders.length === 0) && !data.error &&
                    <SomethingWentWrong
                        icon='ban'
                        message={`${searchValue ? `No object found for ${searchValue}` : `No objects`}`}
                    />}


            </div>

        </React.Fragment>
    )
}

function QuickActionsControl({ quickActions, performAction }) {
    const [showQA, setShowQA] = useState(false)
    const quickMenu = useRef(null);

    useOutsideAlerter(quickMenu);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowQA(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <React.Fragment>
            {quickActions && quickActions.length > 0 &&
                <div

                    className={`${styles.details}`}>
                    <div
                        onClick={e => {
                            e.stopPropagation()
                            setShowQA(true)
                        }}
                        className={`${styles.detailsButton} icon icon-details`}
                    ></div>
                    <ul ref={quickMenu} className={`${styles.quickMenu} ${!showQA && styles.hide}`}>
                        {quickActions.map(action => <li
                            onClick={e => {
                                e.stopPropagation()
                                performAction(action)
                                setShowQA(false)
                            }}
                            className={`${action.buttonIcon ? 'icon small icon-' + action.buttonIcon : ''}`}>
                            <span>{action.buttonTitle || action.name}</span>
                        </li>)}
                    </ul>
                </div>}
        </React.Fragment>
    )
}