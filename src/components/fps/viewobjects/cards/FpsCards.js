import React, { useState, useEffect } from 'react'
import styles from './cards.module.css'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import icon from './../../../../icons/fps-cards.svg'
import Backdrop from '../../backdrop/backdrop'
import { Cards } from './cards'
import Hint from '../../hint/hint'
import { ComponentWrapper } from '../../wrapper/wrapper'
import moment from 'moment'
import { Paging } from '../paging/paging'
import Button from '../../button/button'
import { dict } from '../../locale'
import { addUrlParam, removeUrlParam, clearURL } from '../../queryParams'
import _ from 'lodash'
import debounce from 'lodash.debounce';


function FpsCards({ auth, data, onEvent, id, currentBP, locale, handleRoute }) {
    if (!data) { data = {} }

    console.log('---data FpsCards---')
    console.log(data)

    const cx = null
    const dqlService = debounce(performFiltering, 600);
    const searchService = debounce(search, 600);

    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

    const [loading, setLoading] = useState(false)
    const [qSearch, setQSearch] = useState(data.quickSearch === "true")
    const [searchValue, setSearchValue] = useState()

    const [currentDQL, setCurrentDQL] = useState('')
    const [currentSort, setCurrentSort] = useState({})

    const [showObject, setShowObject] = useState()

    const tableTitle = data.tableTitle || null
    const writeFields = data.writeFields || []

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    const tableHeaders = data.headers || []

    const pageSize = data.pageSize || 0
    const totalPages = data.totalPages || 0
    const currentPage = data.pageNumber || 0

    function performFiltering(dql, sort) {
        clearTimeout(cx);
        // console.log('=== F I L T E R I N G ! ===')
        // console.log(dql)
        setCurrentDQL(dql)
        setCurrentSort(sort)
        // console.log('=== S O R T I N G ! ===')
        // console.log(sort)
        const page = 0 // dql || _.get(sort,'field') ? currentPage : 0
        sendMsg({ dql, sort }, null, { page })
    }

    useEffect(() => {
        setLoading(false)
        if (data.isSuccessWrite) {
        }
        if (!data.isSuccessWrite && data.writeError) {
            console.log('data write error')
            console.log('error ==> ' + data.writeError)
        }
        setQSearch(data.quickSearch === "true")
    }, [data])


    /**
     *
     * @param msg
     * @param sl
     * @param pageInfo
     * @param options - additional parameteres for rise event to eventEngine
     */

    const sendMsg = (msg, sl, pageInfo, options) => {
        console.log('submitting...')
        pageInfo = pageInfo || { page: currentPage }
        if (sl === "") { sl = undefined }
        // костылек для даты
        for (const prop in msg) {
            if (typeof msg[prop] == 'number' && msg[prop] > 1000000000000) { 
                const dataType = data.headers.filter(i=> i.sysName == prop) &&
                    data.headers.filter(i=> i.sysName == prop)[0] &&
                    data.headers.filter(i=> i.sysName == prop)[0].dataType
                if (dataType == 'date') { msg[prop] = moment(msg[prop]) } 
            }
        }
        const message =
            { //...{ dql: currentDQL, sort: currentSort }, 
                ...msg, _id: 'form_' + id, _sl_name: sl, _options: options }
        console.log(message)
        console.log(pageInfo)
        setLoading(true)
        if (onEvent) {
            let prom = onEvent(message, pageInfo)
            if (prom && prom.finally) {
                prom.finally(() => {
                    setLoading(false)
                })
            }
            return prom
        }

    }

    function search(value, page) {
        clearTimeout(cx);
        if (value) {
            setSearchValue(value)
            !currentDQL && !page && removeUrlParam(id + '_page')
            const fieldsDQL = data.headers && data.headers.map(i => i.sysName);
            const requestDQL = fieldsDQL.map(i => "'" + i + "'" + ' like ' + "'" + value + "'").join(' OR ')
            setCurrentDQL(requestDQL)
            //addUrlParam({ key: id + '_dql', value: value })
            sendMsg({ dql: requestDQL }, null, { page: page || 0 })
        } else {
            setSearchValue('')
            setCurrentDQL('')
            removeUrlParam(id + '_dql')
            removeUrlParam(id + '_page')
            sendMsg({ dql: '' }, null, { page: 0 })
        }
    }

    const refresh = (skipLoading) => {
        !skipLoading && setLoading(true)
        !skipLoading && setCurrentDQL('')
        !skipLoading && setCurrentSort({})
        !skipLoading && setSearchValue('')
        onEvent({ dql: '', page: currentPage, _id: id })
        !skipLoading && removeUrlParam(id + '_dql')
    }

    function setPage(page) {
        // alert('set page')
        let prom = onEvent({ dql: currentDQL, sort: currentSort, _id: id }, { page: page }, { reqParam1: "true" })
        page !== 0 ? addUrlParam({ key: id + '_page', value: page }) : removeUrlParam(id + '_page')
        if (prom && prom.finally) {
            prom.finally(() => {
                setLoading(false)
            })
        }
    }

    const submit = (model) => {
        const saveModel = { ...model }
        if (saveModel) {
            for (const field in saveModel) {
                console.log(field)
                if (saveModel[field] && typeof saveModel[field] == 'object' && _.get(data,`params.data.fields[${field}].dataType`) !== 'date') {
                    // console.log('removing links')
                    delete saveModel[field]
                }  // removing links
                if (writeFields.indexOf(field) == -1) {
                    // console.log(`removing ${field} as a field not for writing`)
                    delete saveModel[field]
                } // removing fields not for writing
                if (data.params.data.fields[field] && _.get(data,`params.data.fields[${field}].dataType`) == 'date' && typeof saveModel[field] == 'number') {
                    saveModel[field] = moment(saveModel[field])
                }
            }
        }
        const dqlParams = { dql: currentDQL, sort: currentSort }
        sendMsg({ ...saveModel })
        const isDelayedRefresh = currentDQL || _.get(currentSort, 'field') || currentPage
        isDelayedRefresh && setTimeout(() => {
            onEvent({ dql: currentDQL, sort: currentSort, _id: id }, { page: currentPage }, { reqParam1: "true" })
            removeUrlParam(id + '_id')
        }, 2000)
    }

    const submitAction = (mapping, sl, options) => {
        console.log('submitting action...')

        const isDelayedRefresh =  currentDQL || _.get(currentSort, 'field') || currentPage

        function submitDelayedAction() {
            sendMsg(mapping, sl, undefined, options)
            setTimeout(() => {
                onEvent({ dql: currentDQL, sort: currentSort, _id: id }, { page: currentPage }, { reqParam1: "true" })
            }, 2000)
        }

        return isDelayedRefresh ? submitDelayedAction() : sendMsg(mapping, sl, undefined, options)
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
                // console.log(auth.user + ' != ' + cond.checkValue)
                // console.log('ID does not match');
                match = false
            }
            if (cond.target == 'id_in' && (!auth || !auth.user || !compareRoleArrays(auth.user, cond.checkValue))) {
                // console.log(`user id ${auth && auth.user} is not in ${cond.checkValue}`)
                match = false
            }
            if (cond.target == 'isAutn' && (!auth || !auth.user)) {
                // console.log(`user is not authorised!`)
                match = false
            }
            if (cond.target == 'isNotAuth' && auth.user) {
                // console.log(`user is authorised!`)
                match = false
            }
            if (cond.target == 'id_not_in' && (!auth || !auth.user || compareRoleArrays(auth.user, cond.checkValue))) {
                // console.log(`user id ${auth && auth.user} is in ${cond.checkValue}`)
                match = false
            }
            if (cond.target == 'role' && (!auth || !auth.role || (!compareRoleArrays(auth.role, cond.checkValue)))) {
                // console.log('Role does not match');
                match = false
            }
            if ((cond.target == 'field' || cond.target == 'linkedField') && (!cond.fieldValue ||
                cond.fieldValue.toString().toLowerCase() != cond.value.toString().toLowerCase())) {
                // console.log(cond.fieldValue + ' != ' + cond.value);
                // console.log(cond)
                // console.log('Field is wrong');
                if (cond.value == 'false' && typeof cond.fieldValue == 'undefined') { match = true } else { match = false }
            }
        })
        return match
    }

    const parseJson = json => {
        if (!json) return {}
        let parsedJson = {}
        if (typeof json == 'object') return json
        try {
            parsedJson = JSON.parse(json)
        }
        catch (e) {
            console.log(json);
            console.log(e);
        }
        return parsedJson
    }

    const edenrichConds = (conds, object) => {
        let eConds = conds ? [...conds] : null
        // console.log('edenrichConds')
        // console.log(conds)
        // console.log(object)
        // console.log(auth)
        eConds && eConds.forEach(cond => {
            if ((cond.target == 'id' || cond.target == 'id_in' || cond.target == 'id_not_in') && cond.type == 'const') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'role') {
                cond.checkValue = cond.value
            }
            if (cond.target == 'field') {
                if (typeof object[cond.field] == 'object') {
                    if (object[cond.field].value) {
                        if (typeof object[cond.field].value == object || parseJson(object[cond.field].value) == 'object') {
                            cond.fieldValue = (parseJson(object[cond.field].value) || {}).id
                        } else {
                            cond.fieldValue = object[cond.field].value
                        }
                    } else {
                        cond.fieldValue = object[cond.field].id
                    }
                } else { cond.fieldValue = object[cond.field] }

                if (cond.value == 'false' && !cond.fieldValue) { cond.fieldValue = 'false' }

            }
            if ((cond.target == 'id' || cond.target == 'id_in' || cond.target == 'id_not_in') && cond.type != 'const') {
                typeof object[cond.value] != 'object' ? cond.checkValue = object[cond.value] :
                    object[cond.value] ? cond.checkValue = (object[cond.value].id || (typeof object[cond.value].value == 'object' && object[cond.value].value ? object[cond.value].value.id : object[cond.value].value) || null) : cond.checkValue = null // раньше тут было .id, а не .value проверить!
                if (Array.isArray(_.get(object[cond.value], "value")) && typeof _.get(object[cond.value], "value[0]") == 'object') {
                    cond.checkValue = _.get(object[cond.value], "value").map(i => i.id)
                }
            }
        })
        return eConds
    }

    const handleCloseShowObject = () => {
        setShowObject(null);
        setTimeout(() => removeUrlParam(id + '_id'), 300)
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
            const foundObject = data.data.filter(i => i.id == currentID) ? data.data.filter(i => i.id == currentID)[0] : null
            if (foundObject) { setShowObject(foundObject) } else { console.log("no Object found") }
        }
    }, [data]);

    useEffect(() => {
        if (showObject && showObject.id) {
            addUrlParam({ key: id + '_id', value: showObject.id })
        } else {
            //removeUrlParam(id + '_id')
        }
    }, [showObject])

    // return <div>test</div>

    return (
        <ComponentWrapper currentBP={currentBP}>

            {data.writeError && data.writeError != 'dql is not allowed for write' && <Hint title={dict[lang].form.error} error>{data.writeError}</Hint>}
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
                            data={data}
                            executeAction={submitAction}
                            params={data.params}
                            loading={loading}
                            tableFieldScheme={tableFieldScheme}
                            tableStructures={tableStructures}
                            writeFields={writeFields}
                        /></div>
                </React.Fragment>}

            <TableTitle
                tableFilters={_.get(data.params, 'filterParams') || {}}
                displayFilters={_.get(data.params, 'filterParams.isFiltering') || _.get(data.params, 'filterParams.isSorting')}
                performFiltering={dqlService}
                params={data.params}
                currentBP={currentBP}
                tableTitle={tableTitle}
                searchValue={searchValue}
                tableQuickSearch={data.quickSearch == 'true'}
                search={data.data && data.data.length > 0 ? true : false}
                onSearch={searchService}
                loading={loading}
                dict={dict}
                lang={lang}
                onFilter={() => { }}
            />
            <Cards
                currentBP={currentBP}
                dict={dict}
                lang={lang}
                data={data}
                params={data.params}
                searchValue={searchValue}
                checkActionCond={(cond, obj) => checkActionCond(edenrichConds(cond, obj))}
                onExpand={val => {
                    _.get(data, 'params.data.cardsOrPage') == 'page' ? handleRoute(`./${_.get(data, 'params.data.additionalPath') ? _.get(data, 'params.data.additionalPath') + '/' : ''}` + val.id)() :
                        _.get(data, 'params.data.cardsOrPage') == 'anotherPage' ? handleRoute(`/${_.get(data, 'params.data.anotherPage')}/` + val.id)() :
                            _.get(data, 'params.data.cardsOrPage') == 'disable' ? undefined :
                                setShowObject(val)
                }}
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
                        setPage={setPage}
                        pageSize={pageSize}
                        dict={dict}
                        lang={lang}
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
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
    ]
}
export default FpsCards
