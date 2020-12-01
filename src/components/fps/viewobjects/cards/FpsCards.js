import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import icon from './../../../../icons/fps-cards.svg'
import Backdrop from '../../backdrop/backdrop'
import { Cards } from './cards'
import { ComponentWrapper } from '../../wrapper/wrapper'
import moment from 'moment'
import { Paging } from '../paging/paging'


function FpsCards({ auth, data, onEvent, id }) {
    if (!data) { data = {} }

    // console.log('---data---')
    // console.log(data)

    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState()

    const [currentDQL, setCurrentDQL] = useState('')

    const [showObject, setShowObject] = useState()

    const tableTitle = data.tableTitle || null
    const writeFields = data.writeFields || []

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    const tableHeaders = data.headers || []

    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const currentPage = data.pageNumber || 0

    useEffect(() => {
        setLoading(false)
        if (data.isSuccessWrite) {
        }
        if (!data.isSuccessWrite && data.writeError) {
            console.log('data write error')
            console.log(data.writeError)
        }
    }, [data])



    const handleCloseShowObject = () => {
        setShowObject(false);
    }

    const search = value => {
        if (value) {
            setSearchValue(value)
            const fieldsDQL = data.headers && data.headers.map(i => i.sysName);
            const requestDQL = fieldsDQL.map(i => i + ' like ' + "'" + value + "'").join(' OR ')
            setCurrentDQL(requestDQL)
            sendMsg({ dql: requestDQL }, null, { page: 0 })
        } else {
            setSearchValue('')
            setCurrentDQL('')
            sendMsg({ dql: '' }, null, { page: 0 })
        }
    }

    const sendMsg = (msg, sl, pageInfo) => {
        console.log('submitting...')
        if (sl === "") { sl = undefined }
        const message = { ...msg, _id: 'form_' + id, _sl_name: sl }
        console.log(message)
        console.log(pageInfo)
        setLoading(true)
        if (onEvent) {
            onEvent(message, pageInfo)
        }
    }

    const submit = (model) => {
        if (model) {
            for (const field in model) {
                if (typeof model[field] == 'object' && data.params.data.fields[field].dataType != 'date') { delete model[field] }  // removing links
                if (writeFields.indexOf(field) == -1) { delete model[field] } // removing fields not for writing
                if (data.params.data.fields[field].dataType == 'date' && typeof model[field] == 'number') {
                    model[field] = moment(model[field])
                }
            }
        }
        sendMsg(model)
    }

    const submitAction = (mapping, sl) => {
        console.log('submitting action...')
        sendMsg(mapping, sl)
    }

    //Check action conditionals
    const checkActionCond = (actionCond) => {
        // console.log('actionCond')
        // console.log(actionCond)
        // console.log(auth)
        
        if (!actionCond) { return true }
        if (!auth && actionCond) { return false }
        let match = true
        actionCond.forEach(cond => {
            if (cond.target == 'id' && auth.user !== cond.checkValue) {
                console.log(auth.user + ' != ' + cond.checkValue)
                console.log('ID does not match');
                match = false
            }
            if (cond.target == 'role' && !auth.role.match(new RegExp(cond.checkValue))) { 
                console.log('Role does not match'); 
                match = false 
            }
        })
        return match
    }

    return (
        <ComponentWrapper>
            {showObject &&
                <React.Fragment>
                    <Backdrop onClick={handleCloseShowObject} hoverable />
                    <div className={styles.firstObjectCard}>
                        <ObjectCard
                            onClose={handleCloseShowObject}
                            onTerminate={handleCloseShowObject}
                            object={showObject}
                            submit={submit}
                            auth={auth}
                            checkActionCond={checkActionCond}
                            //shareble
                            executeAction={submitAction}
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
                search={data.data && data.data.length > 0 ? true : false}
                onSearch={value => search(value)}
                loading={loading}
                onFilter={() => { }}
            />
            <Cards
                data={data}
                params={data.params}
                searchValue={searchValue}
                checkActionCond={checkActionCond}
                onExpand={val => { setShowObject(val) }}
                setPage={page => { sendMsg(null, null, { page: page }) }}
                auth={auth}
                submitAction={submitAction}
                id={id}
                loading={loading}
                setLoading={value => setLoading(value)}
            />

            {totalPages > 0 && tableHeaders.length != 0 &&
                <div className={styles.pagination}>
                    <Paging
                        setPage={page => onEvent({ page: page, _id: id })}
                        pageSize={pageSize}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setLoading={setLoading}
                        loading={loading}
                    />
                </div>}
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