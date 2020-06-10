import React, { useEffect, useState, useMemo, useRef } from 'react'
import {
    useTable,
    usePagination
} from 'react-table'
import styles from './table.module.css'
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong'

function FpsTable({ data, onEvent, id }) {
    const tableHeader = data.headers || []
    const tableData = data.data || []
    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const currentPage = data.pageNumber || 0
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


    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     prepareRow,
    //     page,
    //     canPreviousPage,
    //     canNextPage,
    //     pageOptions,
    //     pageCount,
    //     gotoPage,
    //     nextPage,
    //     previousPage,
    //     setPageSize,
    //     // Get the state from the instance
    //     state: { pageIndex, pageSize },
    // } = useTable({ columns, data })

    return (
        <div className={styles.table}>
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
                                {tableHeader.map(column => (<td>{row[column.sysName]}</td>))}
                            </tr>))}
                    </tbody>
                </table>
                {data.error && <div>error:{data.error}</div>}
                {tableData.length === 0 && <div> Table is empty</div>}
                <SomethingWentWrong 
                    icon='warning' 
                    message='Something went totally wrong'      
                    />
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

            {/* <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table> */}
        </div>
    )
}
FpsTable.settings = {
    //icon: icon,
    name: 'Table view',
    sysName: 'FpsTable',
    form: [
      { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
      { name: 'Page size', sysName: 'successText', type: 'input' },
      //{ name: 'Global Filtering', sysName: 'globalFilteringOn', type: 'switch' },
      //{ name: 'Sorting', sysName: 'sortingOn', type: 'switch' },
    ]
  }
  export default FpsTable