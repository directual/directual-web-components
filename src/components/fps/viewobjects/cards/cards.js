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
        const randomField = tableHeaders.filter(field => (field.dataType != 'link' && field.dataType != 'arrayLink'))[0].sysName
        const id = tableFieldScheme.filter(field => randomField == field[0])[0][1] || null
        const name = id && tableStructures[id] && tableStructures[id].name
        const viewName = id && tableStructures[id] && (tableStructures[id].jsonViewIdSettings ? (Object.values(JSON.parse(tableStructures[id].jsonViewIdSettings || [])).map(i => i = i.sysName)) : [])
        //console.log('viewName = ' + viewName)
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


    return (
        <React.Fragment>
            <div className={`${styles.cardsWrapper} ${(data.error || tableData.length === 0) && styles.emptyTable} ${loading && styles.loading}`}>
                {tableData.map((row, i) => {
                    const cardHeader = getInitialStructureParams().viewName && getInitialStructureParams().viewName && (getInitialStructureParams().viewName.length > 0 ? getInitialStructureParams().viewName.map(i => row[i]).join(' ') : 'No visible name')
                    return (
                        <div key={i} className={`${styles.card} ${styles[tableParams.cardListLayout]}`}>
                            <div
                                className={`${styles.cardInnerWrapper} 
                                ${styles[tableParams.cardImageType]} 
                                ${tableParams.invertColors && styles.invertColors}
                                `}
                                onClick={() => !loading && onExpand(row)}>
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
                                <div className={styles.cardText}>
                                    {/* <div className={`${styles.details} icon icon-details`}></div> */}
                                    <h3 className={styles.cardHeader}>
                                        {cardHeader.length > 1 ? cardHeader : 'no visible name'}
                                    </h3>
                                    {row[tableParams.cardHeaderComment] && <div className={styles.cardHeaderComment}>
                                        {row[tableParams.cardHeaderComment]}
                                    </div>}
                                    {row[tableParams.cardBodyText] && <ExpandedText textLength={120} className={styles.cardBodyText}>
                                        {row[tableParams.cardBodyText]}
                                    </ExpandedText>}
                                </div>
                            </div>
                        </div>)
                })}
                {data.error &&
                    <SomethingWentWrong
                        icon='warning'
                        message={data.error}
                    />}
                {tableData.length === 0 && !data.error &&
                    <SomethingWentWrong
                        icon='ban'
                        message={`${searchValue ? `No object found for 'searchValue'` : `No objects`}`}
                    />}


            </div>
            {totalPages > 0 &&
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