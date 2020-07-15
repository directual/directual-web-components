import React, { useState } from 'react'
import {
    useTable,
    usePagination
} from 'react-table'
import styles from './table.module.css'
import icon from './../../../icons/fps-table.svg'
import Input from '../dataentry/input/input'
import Backdrop from '../backdrop/backdrop'
import { Table } from './table'
import { ObjectCard } from './objectCard'
import ActionPanel from '../actionspanel/actionspanel'
import Button from '../button/button'


function FpsTableTitle({ tableQuickSearch, tableTitle, tableFilters, onFilter, onSearch }) {
    const [showSearch, setShowSearch] = useState(false)
    const [showFilters, setShowFilters] = useState(false)
    return (
        <div className={styles.tableTitle}>
            {tableTitle && <h1>{tableTitle}</h1>}
            {(tableQuickSearch || tableFilters) &&
                <div className={styles.tableActions}>
                    <Button icon='filter'></Button>
                    <div className={styles.tableQuickSearchField}>
                        {showSearch ?
                            <Input
                                type='search'
                                placeholder='Search...'
                                width={300}
                                onPressEnter={value => {
                                    onSearch(value)
                                }}
                                tip='Press Enter for searching'
                                onClear={() => {
                                    onSearch('')
                                    setShowSearch(false)
                                }}
                                nomargin />
                            : 
                            <Button icon='search'
                                onClick={()=>setShowSearch(true)}></Button>
                        }
                    </div>
                </div>}
        </div>
    )
}

function FpsTable({ data, onEvent, id }) {
    if (!data) { data = {} }

    const tableTitle = data.tableTitle || null
    const tableQuickSearch = data.tableQuickSearch || null
    const tableFilters = data.tableFilters || null

    const [showObject, setShowObject] = useState()
    const handleCloseShowObject = () => {
        setShowObject(false)
    }

    const search = value => {
        value ?
            alert('Поиск пока не работает. А ищем мы ' + value)
            :
            alert('Сбрасываем поиск')
        // todo: оживить поиск
    }
    return (
        <div className={styles.fpsTable}>

            {showObject &&
                <React.Fragment>
                    <Backdrop onClick={handleCloseShowObject} hoverable />
                    <div className={styles.firstObjectCard}>
                        <ObjectCard onClose={handleCloseShowObject} object={showObject} /></div>
                </React.Fragment>}

            <FpsTableTitle
                tableTitle={tableTitle}
                tableFilters={tableFilters}
                tableQuickSearch={tableQuickSearch}
                onSearch={value => search(value)}
                onFilter={() => { }}
            />

            <Table
                data={data}
                onEvent={onEvent}
                id={id}
                onClick={val => { setShowObject(val) }}
            />

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