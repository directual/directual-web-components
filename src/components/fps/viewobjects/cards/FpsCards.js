import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import icon from './../../../../icons/fps-cards.svg'
import Backdrop from '../../backdrop/backdrop'
import { Cards } from './cards'
import { ComponentWrapper } from '../../wrapper/wrapper'
import moment from 'moment'

function FpsCards({auth, data, onEvent, id }) {
    if (!data) { data = {} }

    // console.log('---data---')
    // console.log(data)

    const tableTitle = data.tableTitle || null
    const tableQuickSearch = data.tableQuickSearch || null
    const tableFilters = data.tableFilters || null
    const writeFields = data.writeFields || []

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    const [showObject, setShowObject] = useState()

    const handleCloseShowObject = () => {
        setShowObject(false);
    }

    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState()
    const [currentPage, setCurrentPage] = useState(0)
    const [currentDQL, setCurrentDQL] = useState(null)

    const search = value => {
        if (value) {
            setSearchValue(value)
            const fieldsDQL = data.headers && data.headers.map(i => i.sysName);
            const requestDQL = fieldsDQL.map(i=>i + ' like ' + "'" + value + "'").join(' OR ')
            sendMsg({dql: requestDQL})
        } else {
            setSearchValue('')
            sendMsg({dql: ''})
        }
    }


    const sendMsg = (msg, sl) => {
        console.log('submitting...')
        const message = { ...msg, _id: 'form_' + id, _sl_name: sl }
        console.log(message)
        setLoading(true)
        if (onEvent) {
            onEvent(message)
        }
    }

    useEffect(() => {
        setLoading(false)
        if (data.isSuccessWrite) {
            //setLoading(false)
        }
        if (!data.isSuccessWrite && data.writeError) {
            //setLoading(false)
            console.log('data write error')
            console.log(data.writeError)
        }
    }, [data])

    const submit = (model) => {
        if (model) {
            for (const field in model) {
                if (typeof model[field] == 'object' && data.params.data.fields[field].dataType != 'date') 
                    { delete model[field] }  // removing links
                if (writeFields.indexOf(field) == -1) { delete model[field] } // removing fields not for writing
                if (data.params.data.fields[field].dataType == 'date' && typeof model[field] == 'number') {
                    model[field] = moment(model[field])
                }
            }
        }
        postMsg(model)
    }

    const submitAction = (mapping, sl) => {
        console.log('submitting action...')
        postMsg(mapping, sl)
    }

    return (
        <ComponentWrapper>
            {showObject &&
                <React.Fragment>
                    <Backdrop onClick={handleCloseShowObject} hoverable />
                    <div className={styles.firstObjectCard}>
                        <ObjectCard
                            onClose={handleCloseShowObject}
                            object={showObject}
                            submit={submit}
                            auth={auth}
                            submitAction={submitAction}
                            params={data.params}
                            loading={loading}
                            tableFieldScheme={tableFieldScheme}
                            tableStructures={tableStructures}
                            writeFields={writeFields}
                        /></div>
                </React.Fragment>}

            <TableTitle
                tableTitle={tableTitle}
                searchValue={searchValue}
                tableQuickSearch={true}
                onSearch={value => search(value)}
                loading={loading}
                onFilter={() => { }}
            />
            <Cards
                data={data}
                params={data.params}
                searchValue={searchValue}
                onExpand={val => { setShowObject(val) }}
                onEvent={onEvent}
                auth={auth}
                submitAction={submitAction}
                id={id}
                loading={loading}
                setLoading={value => setLoading(value)}
            />



    </ComponentWrapper>
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