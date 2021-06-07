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


function FpsCards({ auth, data, onEvent, id, currentBP }) {
    if (!data) { data = {} }

    console.log('---data---')
    console.log(data)

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
            const requestDQL = fieldsDQL.map(i => "'" + i + "'" + ' like ' + "'" + value + "'").join(' OR ')
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
        const saveModel = { ...model }
        if (saveModel) {
            for (const field in saveModel) {
                console.log(field)
                if (saveModel[field] && typeof saveModel[field] == 'object' && data.params.data.fields[field].dataType != 'date') {
                    console.log('removing links')
                    delete saveModel[field]
                }  // removing links
                if (writeFields.indexOf(field) == -1) {
                    console.log(`removing ${field} as a field not for writing`)
                    delete saveModel[field]
                } // removing fields not for writing
                if (data.params.data.fields[field].dataType == 'date' && typeof saveModel[field] == 'number') {
                    saveModel[field] = moment(saveModel[field])
                }
            }
        }
        sendMsg(saveModel)
    }

    const submitAction = (mapping, sl) => {
        console.log('submitting action...')
        sendMsg(mapping, sl)
    }

    //Check action conditionals
    const checkActionCond = (actionCond) => {
        if (!actionCond) { return true }
        const compareRoleArrays = (userRolesString, rolesString) => {
            if (!userRolesString || !rolesString) return false
            let match = false
            const userRoles = userRolesString.split(',')
            const roles = rolesString.split(',')
            userRoles.forEach(userRole => {
                roles.forEach(role => {
                    if (userRole == role) { match = true }
                })
            })
            return match
        }
        let match = true
        actionCond.forEach(cond => {
            if (typeof cond.fieldValue == 'object' && cond.fieldValue) { cond.fieldValue = cond.fieldValue.id }
            if (cond.target == 'id' && (!auth || auth.user !== cond.checkValue)) {
                // console.log(auth.user + ' != ' + cond.checkValue)
                // console.log('ID does not match');
                match = false
            }
            if (cond.target == 'role' && (!auth || !auth.role || (!compareRoleArrays(auth.role, cond.checkValue)))) {
                console.log('Role does not match');
                match = false
            }
            if ((cond.target == 'field' || cond.target == 'linkedField') && (!cond.fieldValue ||
                cond.fieldValue.toString().toLowerCase() != cond.value.toString().toLowerCase())) {
                console.log(cond.fieldValue + ' != ' + cond.value);
                console.log('Field is wrong');
                match = false
            }
        })
        return match
    }

    return (
        <ComponentWrapper currentBP={currentBP}>
            {showObject &&
                <React.Fragment>
                    <Backdrop onClick={handleCloseShowObject} hoverable />
                    <div className={styles.firstObjectCard}>
                        <ObjectCard
                            currentBP={currentBP}
                            onClose={handleCloseShowObject}
                            onTerminate={handleCloseShowObject}
                            object={showObject}
                            submit={submit}
                            auth={auth}
                            checkActionCond={checkActionCond}
                            //shareble
                            firstCard
                            executeAction={submitAction}
                            params={data.params}
                            loading={loading}
                            tableFieldScheme={tableFieldScheme}
                            tableStructures={tableStructures}
                            writeFields={writeFields}
                        /></div>
                </React.Fragment>}

            {/* {currentBP ? currentBP : 'no currentBP'} */}
            <TableTitle
                currentBP={currentBP}
                tableTitle={tableTitle}
                searchValue={searchValue}
                tableQuickSearch={data.quickSearch == 'true'}
                search={data.data && data.data.length > 0 ? true : false}
                onSearch={value => search(value)}
                loading={loading}
                onFilter={() => { }}
            />
            <Cards
                currentBP={currentBP}
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
        { name: 'Quick search', sysName: 'quickSearch', type: 'turn_on_off' },
    ]
}
export default FpsCards