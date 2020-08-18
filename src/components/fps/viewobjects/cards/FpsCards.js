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
        setShowObject(false);
        //setLoading(false)
    }

    const [loading, setLoading] = useState(false)

    const search = value => {
        value ?
            alert('Поиск пока не работает. А ищем мы ' + value)
            :
            alert('Сбрасываем поиск')
        // todo: оживить поиск
    }

    const sendMsg = (msg) => {
        console.log('running sendMsg')
        const message = { ...msg, _id: 'form_' + id }
        setLoading(true)
        if (onEvent) {
            onEvent(message)
        }
    }

    useEffect(() => {
        console.log('data has been changed')
        console.log(data)
        setLoading(false)
        if (data.isSuccessWrite) {
          //setLoading(false)
        }
        if (!data.isSuccessWrite && data.writeError) {
            //setLoading(false)
            alert(data.writeError)
          }
      }, [data])

    const submit = (model) => {
        console.log('submitting...')
        if (model) {
            for (const field in model) {
                if (typeof model[field] == 'object') { delete model[field]}  // removing links, arraylinks (for a while)
                // todo: сделать нормальную работу с ссылками и массивами ссылок
                if (writeFields.indexOf(field) == -1) { delete model[field] } // removing fields not for writing
            }
        } 
        console.log(model)
        sendMsg(model)
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
                            submit={submit}
                            params={data.params}
                            loading={loading}
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
                loading={loading}
                onFilter={() => { }}
            />
            <Cards
                data={data}
                onExpand={val => { setShowObject(val) }}
                onEvent={onEvent}
                id={id}
                loading={loading}
                setLoading={value => setLoading(value)}
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