import React, { useEffect, useState, useMemo, useRef } from 'react'
import {
    useTable,
    usePagination
} from 'react-table'
import styles from './table.module.css'
import SomethingWentWrong from '../SomethingWentWrong/SomethingWentWrong'
import icon from './../../../icons/fps-table.svg'
import Input from '../dataentry/input/input'
import Backdrop from '../backdrop/backdrop'

function ObjectCard(props) {
    const [showLinkedObject, setShowLinkedObject] = useState(false)
    return (
        <React.Fragment>
            <div className={styles.objectCard}>
                <div className={styles.objectCardHeader}>
                    <div onClick={props.onClose} 
                        className={`${styles.closeObjectCard} icon icon-back ${showLinkedObject && styles.hidden}`}></div>
                    <h2>Object view</h2>
                </div>
                <div className={styles.objectCardBody}>
                    <a onClick={() => setShowLinkedObject(true)}>Click me</a>
                </div>
                {showLinkedObject &&
                <React.Fragment>
                    <Backdrop onClick={()=>setShowLinkedObject(false)} hoverable rounded label='Закладочка'/>
                    <ObjectCard onClose={()=>setShowLinkedObject(false)}/>
                </React.Fragment>}
            </div>

        </React.Fragment>
    )
}


function FpsTable({ data, onEvent, id }) {
    if (!data) { data = {} }
    const tableHeader = data.headers || []
    const tableData = data.data || []
    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const desktopView = data.desktopView || 0
    const mobileView = data.mobileView || 0
    const currentPage = data.currentPage || 0
    const tableFilters = data.tableFilters || 0
    const tableQuickSearch = data.tableQuickSearch || 0
    const tableTitle = data.tableTitle || 0
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

    const [showObject, setShowObject] = useState()
    const handleCloseShowObject = () => {
        setShowObject(false)
    }
    return (
        <div className={styles.table}>
            {showObject && <React.Fragment>
                <Backdrop onClick={handleCloseShowObject} hoverable/>
                <div className={styles.firstObjectCard}>
                    <ObjectCard onClose={handleCloseShowObject} /></div>
            </React.Fragment>}
            <div className={styles.tableTitle}>
                {tableTitle && <h1>{tableTitle}</h1>}
                <div className={styles.tableActionPanel}>
                    <Input
                        type='search'
                        placeholder='Search...'
                        onPressEnter={value => {
                            //todo: request quick search
                            console.log('Looking for: ' + value)
                        }}
                        tip='Press Enter for searching'
                        onClear={() => {
                            //todo: clear quick search
                            console.log('Clear search!')
                        }}
                        nomargin />
                </div>
            </div>
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
                                {tableHeader.map(column => (
                                    <td>
                                        <a onClick={() => setShowObject(true)}>{row[column.sysName]}</a>
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

        </div>
    )
}
FpsTable.settings = {
    icon: icon,
    name: 'Table view',
    sysName: 'FpsTable',
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Table title', sysName: 'tableTitle', type: 'input' },
        { name: 'Desktop view', sysName: 'desktopView', type: 'tableView' },
        { name: 'Mobile view', sysName: 'mobileView', type: 'tableView' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        { name: 'Filters', sysName: 'tableFilters', type: 'boolean' },
        { name: 'Quick serch', sysName: 'tableQuickSearch', type: 'boolean' },
    ]
}
export default FpsTable