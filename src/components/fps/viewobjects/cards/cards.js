import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import ExpandedText from '../../expandedText/expandedText'

export function Cards({ data, onEvent, id, onExpand }) {
    const tableHeaders = data.headers || []
    const tableData = data.data || []
    const tableParams = data.params || {
        cardHeaderComment: '',
        cardBodyText: ''
    }

    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const desktopView = data.desktopView || null
    const mobileView = data.mobileView || null
    const currentPage = data.currentPage || 0
    const tableFilters = data.tableFilters || null

    const sendMsg = (msg) => {
        const message = { ...msg, _id: id }
        if (onEvent) {
            onEvent(message)
        }
    }

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    const getInitialStructureParams = () => {
        const randomField = tableHeaders.filter(field => (field.dataType != 'link' && field.dataType != 'arrayLink'))[0].sysName
        const id = tableFieldScheme.filter(field => randomField == field[0])[0][1] || null
        const name = id && tableStructures[id] && tableStructures[id].name
        const viewName = id && tableStructures[id] && Object.values(JSON.parse(tableStructures[id].jsonViewIdSettings)).map(i => i = i.sysName)
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
            ? 'You have no permissions for viewing form'
            : data.error
    data.error =
        data.error && data.error == '511' ? 'Table is not configured' : data.error


    return (
        <div className={styles.cardsWrapper}>
            {tableData.map((row, i) => {
                const cardHeader = getInitialStructureParams().viewName && getInitialStructureParams().viewName.map(i => row[i]).join(' ')

                return (
                    <div key={i} className={`${styles.card} ${styles[tableParams.cardListLayout]}`}>
                        <div
                            className={`${styles.cardInnerWrapper} 
                                ${styles[tableParams.cardImageType]} 
                                ${tableParams.invertColors && styles.invertColors}
                                `}
                            onClick={() => onExpand(row)}>
                            {tableParams.cardImageField &&    
                            <div className={`${styles.cardImage}`}
                                style={{
                                    backgroundImage: `url(${row[tableParams.cardImageField]})`,
                                    width: (tableParams.cardImageType == "left" || tableParams.cardImageType == "leftCircle") ? parseInt(tableParams.cardImageSize) : 'auto',
                                    height: (tableParams.cardImageType == "top" || tableParams.cardImageType == "leftCircle") ? parseInt(tableParams.cardImageSize) : 'auto',
                                }}
                            >
                                {!row[tableParams.cardImageField] && <span className='icon icon-ban'>no&nbsp;picture</span>}
                            </div> }
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
                                </ExpandedText> }
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
                    message='Table is empty'
                />}
        </div>
    )
}