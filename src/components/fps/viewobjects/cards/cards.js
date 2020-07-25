import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import ExpandedText from '../../expandedText/expandedText'

export function Cards({ data, onEvent, id, onExpand }) {
    const tableHeader = data.headers || []
    const tableData = data.data || []
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

    data.error =
        data.error && data.error == '403'
            ? 'You have no permissions for viewing form'
            : data.error
    data.error =
        data.error && data.error == '511' ? 'Table is not configured' : data.error


    return (
        <div className={styles.cardsWrapper}>
            {tableData.map((row) => (
                <div className={styles.card}>
                    <div
                        className={`${styles.cardInnerWrapper} ${styles.horizontal}`}
                        onClick={() => onExpand(row)}>
                        <div className={styles.cardImage}></div>
                        <div className={styles.cardText}>
                            <div className={`${styles.details} icon icon-details`}></div>
                            <h3 className={styles.cardHeader}>Card Header</h3>
                            <div className={styles.cardHeaderComment}>Card header comment</div>
                            <ExpandedText textLength={150} className={styles.cardBodyText}>
                                Moscow was fast asleep when, seven time zones to the east, 
                                tens of thousands of people took to the streets chanting 
                                “We are the authority here!” and “Moscow, listen to us!” 
                                Some 30,000 people marched through Khabarovsk.
                            </ExpandedText>
                        </div>
                    </div>
                </div>))}
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