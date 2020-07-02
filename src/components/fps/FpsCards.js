import React from 'react'
import styles from '../../styles.module.css'
import icon from './../../icons/fps-cards.svg'

function FpsCards({ data, onEvent, id }) {
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
            {data.headerField && <h2>{data.headerField}</h2>}
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
                {data.error &&
                    <SomethingWentWrong
                        icon='warning'
                        message={data.error}
                    />}
                {tableData.length === 0 &&
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
// FpsCards.settings = {
//   icon: icon,
//   name: 'Cards view',
//   sysName: 'FpsCards',
//   form: [
//     { name: 'Select SL', sysName: 'sl', type: 'api-endpoint' },
//     { name: 'pageSize', sysName: 'successText', type: 'input' },
//     { name: 'headerField', sysName: 'headerField', type: 'input' }
//   ]
// }
export default FpsCards
