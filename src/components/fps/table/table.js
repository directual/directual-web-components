import React, { useState } from 'react'
import styles from './table.module.css'
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong'

export function Table({ data, onEvent, id, onClick }) {
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
        <div className={styles.table_wrapper}>
            <table>
                <thead>
                    <tr>
                        {tableHeader.map(column => (<td>{column.name}</td>))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr>
                            {tableHeader.map((column, i) => (
                                <td>
                                    {(i == 0 && onClick) ?
                                        <a onClick={() => onClick(row.id)}>{row[column.sysName]}</a> :
                                        <span>{JSON.stringify(row[column.sysName])}</span>}
                                </td>))}
                        </tr>))}
                </tbody>
            </table>
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

            {totalPages > 0 &&
                <div className={styles.pagination}>
                    <div>pageSize: {pageSize}</div>
                    <div>totalPages: {totalPages}</div>
                    <div>totalObjects: ~{totalPages * pageSize}</div>
                    <div>currentPage: {currentPage}</div>
                    {currentPage != 0 &&
                        <button onClick={() => sendMsg({ page: currentPage - 1 })}>❮ Prev</button>}
                    {currentPage != totalPages &&
                        <button onClick={() => sendMsg({ page: currentPage + 1 })}>Next ❯</button>}
                </div>}
        </div>
    )
}