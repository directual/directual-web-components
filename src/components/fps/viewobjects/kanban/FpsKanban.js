import React, { useState, useEffect } from 'react'
import styles from './kanban.module.css'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import { Kanban } from './kanban'
import icon from './../../../../icons/fps-kanban.svg'
import Backdrop from '../../backdrop/backdrop'
import { ComponentWrapper } from '../../wrapper/wrapper'
import moment from 'moment'
import { Paging } from '../paging/paging'
import Button from '../../button/button'
import { dict } from '../../locale'
import { addUrlParam, removeUrlParam, clearURL } from '../../queryParams'


function FpsKanban({ auth, data, onEvent, id, currentBP, locale }) {
    if (!data) { data = {} }

    console.log('---data FpsCards---')
    console.log(data)
    // console.log(id)
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'


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


    const sendMsg = (msg, sl, pageInfo) => {
        console.log('submitting...')
        pageInfo = pageInfo || { page: currentPage }
        if (sl === "") { sl = undefined }
        const message =
            { ...msg, _id: 'form_' + id, _sl_name: sl }
        console.log(message)
        console.log(pageInfo)
        setLoading(true)
        if (onEvent) {
            onEvent(message, pageInfo)
        }
    }

    const search = (value, page) => {
        if (value) {
            setSearchValue(value)
            !currentDQL && !page && removeUrlParam(id + '_page')
            const fieldsDQL = data.headers && data.headers.map(i => i.sysName);
            const requestDQL = fieldsDQL.map(i => "'" + i + "'" + ' like ' + "'" + value + "'").join(' OR ')
            setCurrentDQL(requestDQL)
            addUrlParam({ key: id + '_dql', value: value })
            sendMsg({ dql: requestDQL }, null, { page: page || 0 })
        } else {
            setSearchValue('')
            setCurrentDQL('')
            removeUrlParam(id + '_dql')
            removeUrlParam(id + '_page')
            sendMsg({ dql: '' }, null, { page: 0 })
        }
    }

    const refresh = () => {
        setLoading(true)
        setCurrentDQL('')
        setSearchValue('')
        onEvent({ dql: '', page: currentPage, _id: id })
        removeUrlParam(id + '_dql')
    }

    const setPage = page => {
        onEvent({ dql: currentDQL, _id: id},  { page: page }, {reqParam1: "true"} )
        page !== 0 ? addUrlParam({ key: id + '_page', value: page }) : removeUrlParam(id + '_page')
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
                if (data.params.data.fields[field] && data.params.data.fields[field].dataType == 'date' && typeof saveModel[field] == 'number') {
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
            userRolesString = userRolesString + ''
            if (!userRolesString || !rolesString) return false
            let match = false
            const userRoles = (userRolesString + '').split(',')
            const roles = (rolesString + '').split(',')
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
                console.log(auth.user + ' != ' + cond.checkValue)
                console.log('ID does not match');
                match = false
            }
            if (cond.target == 'id_in' && (!auth || !auth.user || !compareRoleArrays(auth.user, cond.checkValue))) {
                console.log(`user id ${auth && auth.user} is not in ${cond.checkValue}`)
                match = false
            }
            if (cond.target == 'id_not_in' && (!auth || !auth.user || compareRoleArrays(auth.user, cond.checkValue))) {
                console.log(`user id ${auth && auth.user} is in ${cond.checkValue}`)
                match = false
            }
            if (cond.target == 'role' && (!auth || !auth.role || (!compareRoleArrays(auth.role, cond.checkValue)))) {
                console.log('Role does not match');
                match = false
            }
            if ((cond.target == 'field' || cond.target == 'linkedField') && (!cond.fieldValue ||
                cond.fieldValue.toString().toLowerCase() != cond.value.toString().toLowerCase())) {
                console.log(cond.fieldValue + ' != ' + cond.value);
                console.log(cond)
                console.log('Field is wrong');
                match = false
            }
        })
        return match
    }

    const edenrichConds = (conds, object) => {
        let eConds = conds ? [...conds] : null
        // console.log('edenrichConds')
        // console.log(conds)
        // console.log(object)
        // console.log(auth)
        eConds && eConds.forEach(cond => {
            // console.log(cond)
            // console.log(object)
            if ((cond.target == 'id' || cond.target == 'id_in' || cond.target == 'id_not_in') && cond.type == 'const') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'role') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'field') {
                typeof object[cond.field] != 'object' ? cond.fieldValue = object[cond.field] :
                    cond.fieldValue = object[cond.field].value || null
                if (cond.value == 'false' && !cond.fieldValue) { cond.fieldValue = 'false' }
                // console.log('cond.fieldValue')
                // console.log(cond.fieldValue)

            }
            if ((cond.target == 'id' || cond.target == 'id_in' || cond.target == 'id_not_in') && cond.type != 'const') {
                typeof object[cond.value] != 'object' ? cond.checkValue = object[cond.value] :
                    cond.checkValue = object[cond.value].value || null // раньше тут было .id, а не .value проверить!
            }
        })
        return eConds
    }

    const handleCloseShowObject = () => {
        setShowObject(false);
        removeUrlParam(id + '_id')
    }

    // get direct link ID
    useEffect(() => {
        const queryString = typeof window !== 'undefined' ? window.location.search : '';
        const urlParams = new URLSearchParams(queryString);
        const currentID = urlParams && urlParams.get(id + '_id')
        const urlPage = urlParams && urlParams.get(id + '_page')
        const urlDql = urlParams && urlParams.get(id + '_dql')
        // if (urlDql && !currentDQL) {search(urlDql, urlPage || 0)}
        // if (!urlDql && urlPage && urlPage != currentPage) {setPage(urlPage)}
        if (currentID) {
            const foundObject = data.data.filter(i=> i.id == currentID) ? data.data.filter(i=> i.id == currentID)[0] : null
            if (foundObject) { setShowObject(foundObject)} else { console.log("no Object found")}
        }
    }, [data]);

    useEffect(()=> {
        if (showObject && showObject.id) {
            addUrlParam({ key: id + '_id', value: showObject.id })
        } else {
            //removeUrlParam(id + '_id')
        }
    }, [showObject])


    return (
        <ComponentWrapper currentBP={currentBP}>
            {/* <Button onClick={() => updateURL([{ key: "objectID", value: "100500" } ])} icon='refresh'>updateURL</Button>
            <Button onClick={() => clearURL()} icon='refresh'>clearURL</Button> */}
            {/* <Button onClick={() => removeUrlParam(id + '_page')} icon='refresh'>refresh page</Button> */}
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
                            dict={dict}
                            lang={lang}
                            checkActionCond={(cond, obj) => checkActionCond(edenrichConds(cond, obj))}
                            shareble
                            refresh={refresh}
                            firstCard
                            executeAction={submitAction}
                            params={data.params}
                            loading={loading}
                            tableFieldScheme={tableFieldScheme}
                            tableStructures={tableStructures}
                            writeFields={writeFields}
                        /></div>
                </React.Fragment>}

                <div>Component is under development</div>
                {/* <Kanban /> */}
            
        </ComponentWrapper>
    )
}
FpsKanban.settings = {
    icon: icon,
    name: 'Kanban',
    sysName: 'FpsKanban',
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
    ]
}
export default FpsKanban
