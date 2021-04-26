import React, { useState, useMemo } from 'react'
import styles from './table.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import { useTable } from 'react-table'


export function Table({ data, onExpand, loading, searchValue, auth, submitAction, params, checkActionCond, currentBP }) {


    data.error =
        data.error && data.error == '403'
            ? 'You have no permissions for viewing form'
            : data.error
    data.error =
        data.error && data.error == '511' ? 'Table is not configured' : data.error

    // console.log('===data===:')
    // console.log(tableData)
    // console.log('===tableParams===:')
    // console.log(tableParams)

    // composing Table Header
    const tableParams = data.params.tableParams
    if (!tableParams) { return <SomethingWentWrong icon='ban' message='Table is not configured' /> }

    
    let tableColumns = []
    tableParams.fieldOrder.forEach(field => {
        if (tableParams.fieldParams[field] && tableParams.fieldParams[field].include) {
            tableColumns.push({
                Header: tableParams.fields[field].content,
                accessor: field,
            })
        }
    })

    // composing Table data 
    const tableData = useMemo(()=> data.data) //.map((row, index) => { return { ...row, key: index } }) || []
    const columns = useMemo(()=>tableColumns)

    console.log('tableColumns')
    console.log(tableColumns)
    console.log('tableData')
    console.log(tableData)

    const tableInstance = useTable({ columns: columns, data: tableData })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance


    if (data.error) {
        return <SomethingWentWrong
            icon='warning'
            message={data.error}
        />
    }
    if (tableData.length === 0) {
        return <SomethingWentWrong
            icon='ban'
            message={`${searchValue ? `No object found for ${searchValue}` : `No objects`}`}
        />
    }

    // const [selectedRowKeys,setSelectedRowKeys] = useState([])

    // const rowSelection = {
    //     selectedRowKeys,
    //     onChange: setSelectedRowKeys,
    //   };

    return <React.Fragment>
        <div className={styles.table_wrapper}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                >
                                    {column.render('Header')}
                                </th>
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
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    </React.Fragment>
}


function OldTable({ data, onEvent, id, onExpand }) {
    const tableHeader = data.headers || []
    const tableData = data.data || []
    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const currentPage = data.pageNumber || 0
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

    const renderTableCell = (cellData, type) => {
        switch (type) {
            case 'alink':
                return (
                    <span className={`${styles.previewLink}`}>
                        <span className={styles.noname}>no display name</span>
                    </span>)
            case 'link':
                return (
                    <span>
                        <span className={`${styles.previewLink}`}>
                            <span className={styles.noname}>no display name</span>
                        </span>
                    </span>)
            default:
                return <span>{cellData}</span>
        }

    }

    return (
        <div className={styles.table_wrapper}>
            <table>
                <thead>
                    <tr>
                        {onExpand && <td></td>}
                        {tableHeader.map(column => (<td>{column.name}</td>))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr>
                            {onExpand &&
                                <td>
                                    <span className={`${styles.expand} icon icon-expand`}
                                        onClick={() => onExpand(row)} />
                                </td>
                            }
                            {tableHeader.map((column, i) => {
                                const columnDataType = tableHeader.filter(header => header.sysName == column.sysName)[0].dataType;
                                return <td>{renderTableCell(row[column.sysName], columnDataType)}</td>
                                // 
                                //     {!row[column.sysName] && <span>—</span>}
                                //     {columnDataType == 'link' && row[column.sysName] &&
                                //         <span className={styles.previewLink}>Link Object</span>}
                                //     {columnDataType == 'arrayLink' && row[column.sysName] &&

                                //         <span className={styles.previewLink}>Link Object</span>

                                //         }
                                //     {columnDataType != 'arrayLink' && columnDataType != 'link' && row[column.sysName] &&
                                //         <span>{row[column.sysName]}</span>}
                                // </td>
                            }
                            )}
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