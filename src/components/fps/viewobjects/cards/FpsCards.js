import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import icon from './../../../../icons/fps-cards.svg'
import Backdrop from '../../backdrop/backdrop'
import { Cards } from './cards'

function FpsCards({ data, onEvent, id }) {
    if (!data) { data = {} }

    const tableTitle = data.tableTitle || null
    const tableQuickSearch = data.tableQuickSearch || null
    const tableFilters = data.tableFilters || null
    const writeFields = data.writeFields || []

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    const [showObject, setShowObject] = useState()
    const handleCloseShowObject = () => {
        setShowObject(false)}

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

            <Cards
                data={data}
                onEvent={onEvent}
                id={id}
                onExpand={val => { setShowObject(val) }}
            />

        </React.Fragment>
    )
}
FpsCards.settings = {
    icon: icon,
    name: 'Cards view',
    sysName: 'FpsCards',
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'List title', sysName: 'tableTitle', type: 'input' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        // { name: 'Filters', sysName: 'tableFilters', type: 'on_off' },
        // { name: 'Quick search', sysName: 'tableQuickSearch', type: 'on_off' },
    ]
}
export default FpsCards