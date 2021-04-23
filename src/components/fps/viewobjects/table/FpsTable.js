import React, { useState } from 'react'
import styles from './table.module.css'
import icon from './../../../../icons/fps-table.svg'
import Backdrop from '../../backdrop/backdrop'
import { Table } from './table'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'

function FpsTable({ data, onEvent, id }) {
    if (!data) { data = {} }

    const tableTitle = data.tableTitle || null
    const tableQuickSearch = data.tableQuickSearch || null
    const tableFilters = data.tableFilters || null
    const writeFields = data.writeFields || []

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

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
        <React.Fragment>
            {showObject &&
                <React.Fragment>
                    <Backdrop onClick={handleCloseShowObject} hoverable />
                    <div className={styles.firstObjectCard}>
                        <ObjectCard
                            onClose={handleCloseShowObject}
                            object={showObject}
                            tableFieldScheme={tableFieldScheme}
                            tableStructures={tableStructures}
                            writeFields={writeFields}
                        /></div>
                </React.Fragment>}

            <TableTitle
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
                onExpand={val => { setShowObject(val) }}
            />

        </React.Fragment>
    )
}
FpsTable.settings = {
    icon: icon,
    name: 'Table view',
    sysName: 'FpsTable',
    form: [
        { name: 'API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Table title', sysName: 'tableTitle', type: 'input' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
    ]
}
export default FpsTable