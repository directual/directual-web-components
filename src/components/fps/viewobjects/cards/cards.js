import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import ExpandedText from '../../expandedText/expandedText'
import { Paging } from '../paging/paging'

export function Cards({ data, onEvent, id, onExpand, loading, setLoading, searchValue }) {
    const tableHeaders = data.headers || []
    const tableData = enrichTableDataWithWriteFields(data) || []
    const tableParams = data.params || {
        cardHeaderComment: '',
        cardBodyText: ''
    }

    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const currentPage = data.pageNumber || 0
    const tableFilters = data.tableFilters || null

    const sendMsg = (msg) => {
        const message = { ...msg, _id: id }
        console.log(message)
        if (onEvent) {
            onEvent(message)
        }
    }

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    // обогащаем поля теми, что не пришли по данным, но мы их можем писать:
    function enrichTableDataWithWriteFields(data) {
        let saveData = [...data.data]
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


    return (
        <React.Fragment>
            <div className={`${styles.cardsWrapper} ${(data.error || tableData.length === 0 || tableHeaders.length === 0) && styles.emptyTable} ${loading && styles.loading}`}>
                {(tableData.length != 0 && tableHeaders.length != 0) && tableData.map((row, i) => {

                    // в этой хуете мы подтягиваем для Заголовка, Подзаголовка и Текста карточки visible name если поле типа link/arrayLink
                    const cardHeader = getInitialStructureParams().viewName && getInitialStructureParams().viewName &&
                        (getInitialStructureParams().viewName.length > 0 ?
                            getInitialStructureParams().viewName.map(i => typeof row[i] == 'object' ?
                                getLinkName(i, row[i])
                                : row[i]).join(' ')
                            : 'No visible name')
                    const cardHeaderComment = row && (typeof row[tableParams.cardHeaderComment] == 'object' ?
                        !Array.isArray(row[tableParams.cardHeaderComment]) ?
                            getLinkName(tableParams.cardHeaderComment, row[tableParams.cardHeaderComment])
                            : row[tableParams.cardHeaderComment].map(i => getLinkName(tableParams.cardHeaderComment, i))
                        : row[tableParams.cardHeaderComment])

                    const cardBodyText = row && (typeof row[tableParams.cardBodyText] == 'object' ?
                        !Array.isArray(row[tableParams.cardBodyText]) ?
                            getLinkName(tableParams.cardBodyText, row[tableParams.cardBodyText])
                            : row[tableParams.cardBodyText].map(i => getLinkName(tableParams.cardBodyText, i))
                        : row[tableParams.cardBodyText])
                    // ==================================

                    return (
                        <div key={i} className={`${styles.card} ${styles[tableParams.cardListLayout]}`}>
                            <div
                                className={`${styles.cardInnerWrapper}
                                ${styles[tableParams.cardImageType]}
                                ${tableParams.invertColors && styles.invertColors}
                                `}
                                onClick={() => !loading && onExpand(row)}>
                                
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
                                    {/* <div className={`${styles.details} icon icon-details`}></div> */}
                                    <h3 className={styles.cardHeader}>
                                        {cardHeader.length > 1 ? cardHeader : 'No visible name'}
                                    </h3>

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
                        message={`${searchValue ? `No object found for 'searchValue'` : `No objects`}`}
                    />}


            </div>
            {totalPages > 0 && tableData.length != 0 && tableHeaders.length != 0 &&
                <div className={styles.pagination}>
                    <Paging
                        sendMsg={sendMsg}
                        pageSize={pageSize}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setLoading={setLoading}
                        loading={loading}
                    />
                </div>}
        </React.Fragment>
    )
}