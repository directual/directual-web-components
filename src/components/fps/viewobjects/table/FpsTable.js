import styles from './table.module.css'
import icon from './../../../../icons/fps-table.svg'
import Backdrop from '../../backdrop/backdrop'
import { Table } from './table'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import React, { useState, useEffect } from 'react'
import { ComponentWrapper } from '../../wrapper/wrapper'
import moment from 'moment'
import { Paging } from '../paging/paging'
import { LazyLoading } from '../paging/lazyLoading'
import Button from '../../button/button'
import { dict } from '../../locale'
import { addUrlParam, removeUrlParam, clearURL } from '../../queryParams'
import Hint from '../../hint/hint'
import _ from 'lodash'
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

function FpsTable({ auth, data, onEvent, id, currentBP, locale, handleRoute }) {
    if (!data) { data = {} }

    const [currentData,setCurrentData] = useState(data)

    useEffect(()=>{
        // console.log('=== update data ===')
        // console.log(currentData)
        // console.log(' vvv ')
        // console.log(data)
        setCurrentData(data);
    }, [data])

    console.log('---currentData FpsTable---')
    console.log(currentData)

    const cx = null
    const dqlService = debounce(performFiltering, 600);
    const searchService = debounce(search, 600);

    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

    const [loading, setLoading] = useState(false)
    const [qSearch, setQSearch] = useState(currentData.quickSearch === "true")
    const [searchValue, setSearchValue] = useState()

    const [currentDQL, setCurrentDQL] = useState('')
    const [currentSort, setCurrentSort] = useState({})

    const [showObject, setShowObject] = useState()

    const [cardsData, setCardsData] = useState(_.get(currentData, "data") || [])

    const tableTitle = currentData.tableTitle || null
    const writeFields = currentData.writeFields || []

    const tableFieldScheme = currentData.fieldScheme || []
    const tableStructures = currentData.structures || {}

    const tableHeaders = currentData.headers || []

    const pageSize = currentData.pageSize || 0
    const totalPages = currentData.totalPages || 0
    const currentPage = currentData.pageNumber || 0

    function performFiltering(dql, sort) {
        clearTimeout(cx);
        console.log('=== F I L T E R I N G ! ===')
        console.log(dql)
        setCurrentDQL(dql)
        setCurrentSort(sort)
        console.log('=== S O R T I N G ! ===')
        console.log(sort)
        const page = 0 // dql || _.get(sort,'field') ? currentPage : 0
        sendMsg({ dql, sort }, null, { page })
    }

    useEffect(() => {
        setLoading(false)
        if (currentData.isSuccessWrite) {
        }
        if (!currentData.isSuccessWrite && currentData.writeError) {
            console.log('data write error')
            console.log('error ==> ' + currentData.writeError)
        }
        setQSearch(currentData.quickSearch === "true")
    }, [currentData])


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
                const dataType = currentData.headers.filter(i => i.sysName == prop) &&
                    currentData.headers.filter(i => i.sysName == prop)[0] &&
                    currentData.headers.filter(i => i.sysName == prop)[0].dataType
                if (dataType == 'date') { msg[prop] = moment(msg[prop]) }
            }
        }
        const message =
        { //...{ dql: currentDQL, sort: currentSort }, 
            ...msg, _id: 'form_' + id, _sl_name: sl, _options: options
        }
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
            const fieldsDQL = currentData.headers && currentData.headers.map(i => i.sysName);
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
        console.log("refresh")
        console.log(skipLoading)
        !skipLoading && setLoading(true)
        !skipLoading && setCurrentDQL('')
        !skipLoading && setCurrentSort({})
        !skipLoading && setSearchValue('')
        onEvent({ dql: '', page: currentPage, _id: id })
        !skipLoading && removeUrlParam(id + '_dql')
    }

    const [lazyLoadingHandler, setLazyLoadingHandler] = useState(false)

    function setPage(page) {
        if (_.get(currentData, "params.lazyLoading")) { setLazyLoadingHandler(true) }
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
                if (saveModel[field] && typeof saveModel[field] == 'object' && _.get(currentData, `params.data.fields[${field}].dataType`) != 'date') {
                    // console.log('removing links')
                    delete saveModel[field]
                }  // removing links
                if (writeFields.indexOf(field) == -1) {
                    // console.log(`removing ${field} as a field not for writing`)
                    delete saveModel[field]
                } // removing fields not for writing
                if (currentData.params.data.fields[field] && _.get(currentData, `params.data.fields[${field}].dataType`) == 'date' && typeof saveModel[field] == 'number') {
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
        //sendMsg(mapping, sl, undefined, options)

        const isDelayedRefresh = currentDQL || _.get(currentSort, 'field') || currentPage

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

        // console.log("actionCond")
        // console.log(actionCond)

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
            // console.log(`user id ${auth && auth.user} is not in ${cond.checkValue}`)
            // console.log('cond.target = ' + cond.target)
            if (cond.target == 'id_not_in' && (!auth || !auth.user || compareRoleArrays(auth.user, cond.checkValue))) {
                console.log(`user id ${auth && auth.user} is in ${cond.checkValue}`)
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
        let copydata = currentData.data || []
        if (lazyLoadingHandler) {
            setLazyLoadingHandler(false)
            setCardsData([...cardsData, ...copydata])
        } else {
            setCardsData(copydata)
        }
        const queryString = typeof window !== 'undefined' ? window.location.search : '';
        const urlParams = new URLSearchParams(queryString);
        const currentID = urlParams && urlParams.get(id + '_id')
        const urlPage = urlParams && urlParams.get(id + '_page')
        const urlDql = urlParams && urlParams.get(id + '_dql')
        // if (urlDql && !currentDQL) {search(urlDql, urlPage || 0)}
        // if (!urlDql && urlPage && urlPage != currentPage) {setPage(urlPage)}
        if (currentID) {
            const foundObject = copydata.filter(i => i.id == currentID) ? copydata.filter(i => i.id == currentID)[0] : null
            if (foundObject) { setShowObject(foundObject) } else { console.log("no foundObject") }
        }
    }, [currentData]);

    useEffect(() => {
        if (showObject && showObject.id) {
            addUrlParam({ key: id + '_id', value: showObject.id })
        } else {
            //removeUrlParam(id + '_id')
        }
    }, [showObject])

    const params = (currentData || {}).params || {}

    const { hideExpandTD, autoRefresh, largeFont } = params
    let autoRefreshPeriod = params.autoRefreshPeriod || 60 // минута по умолчанию
    autoRefreshPeriod = autoRefreshPeriod * 1000

    useEffect(() => {
        let count = 0
        if (!autoRefresh) { return }
        const interval = setInterval(() => {
            count++
            console.log('autoRefresh rerender № ' + count);
            refresh(true)
        }, autoRefreshPeriod);
        return () => clearInterval(interval);
    }, []);

    if (!currentData || currentData == {} || !currentData.params) { return <div /> }


    return (
        <ComponentWrapper currentBP={currentBP}>
            {currentData.writeError && currentData.writeError != 'dql is not allowed for write' && <Hint title={dict[lang].form.error} error>{currentData.writeError}</Hint>}
            {/* <Button onClick={refresh} icon='refresh'>refresh</Button> */}
            {showObject &&
                <React.Fragment>
                    <Backdrop onClick={handleCloseShowObject} hoverable />
                    <div className={styles.firstObjectCard}>
                        <ObjectCard
                            currentBP={currentBP}
                            handleRoute={handleRoute}
                            onClose={handleCloseShowObject}
                            onTerminate={handleCloseShowObject}
                            object={showObject}
                            locale={locale}
                            submit={submit}
                            dict={dict}
                            lang={lang}
                            auth={auth}
                            firstCard
                            refresh={refresh}
                            checkActionCond={(cond, obj) => checkActionCond(edenrichConds(cond, obj))}
                            shareble
                            executeAction={submitAction}
                            params={params}
                            loading={loading}
                            tableFieldScheme={tableFieldScheme}
                            tableStructures={tableStructures}
                            writeFields={writeFields}
                        /></div>
                </React.Fragment>}

            <TableTitle
                tableFilters={_.get(params, 'filterParams') || {}}
                displayFilters={_.get(params, 'filterParams.isFiltering') || _.get(params, 'filterParams.isSorting')}
                performFiltering={dqlService}
                params={params}
                currentBP={currentBP}
                tableTitle={tableTitle}
                searchValue={searchValue}
                tableQuickSearch={currentData.quickSearch == 'true'}
                search={currentData.data && currentData.data.length > 0 ? true : false}
                onSearch={searchService}
                loading={loading}
                dict={dict}
                lang={lang}
                onFilter={() => { }}
            />
            <Table
                currentBP={currentBP}
                data={currentData}
                cardsData={cardsData}
                dict={dict}
                lang={lang}
                largeFont={largeFont}
                hideExpandTD={hideExpandTD}
                params={params}
                searchValue={searchValue}
                checkActionCond={(cond, obj) => checkActionCond(edenrichConds(cond, obj))}
                // onExpand={val => { _.get(data,'params.data.cardsOrPage') == 'page' ? handleRoute('./' + val.id)() : setShowObject(val) }}
                onExpand={val => {
                    _.get(currentData, 'params.data.cardsOrPage') == 'page' ? handleRoute(`./${_.get(currentData, 'params.data.additionalPath') ? _.get(currentData, 'params.data.additionalPath') + '/' : ''}` + val.id)() :
                        _.get(currentData, 'params.data.cardsOrPage') == 'anotherPage' ? handleRoute(`/${_.get(currentData, 'params.data.anotherPage')}/` + val.id)() :
                            _.get(currentData, 'params.data.cardsOrPage') == 'disable' ? undefined :
                                setShowObject(val)
                }}
                // onExpand={val => { setShowObject(val) }}
                //setPage={page => { sendMsg(null, null, { page: page }) }}
                auth={auth}
                submitAction={submitAction}
                id={id}
                loading={loading}
                setLoading={value => setLoading(value)}
            />
            {_.get(currentData, "params.lazyLoading") ?
                <LazyLoading
                    setPage={setPage}
                    pageSize={pageSize}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setLoading={setLoading}
                    loading={loading}
                /> :
                totalPages > 0 && tableHeaders.length != 0 &&
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

FpsTable.propTypes = {
    data: PropTypes.object.isRequired,
    auth: PropTypes.object,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    handleRoute: PropTypes.func
};

FpsTable.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG",
    onChange: undefined,
    handleRoute: undefined
};

FpsTable.settings = {
    icon: icon,
    name: 'Table view',
    sysName: 'FpsTable',
    form: [
        { name: 'API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Table title', sysName: 'tableTitle', type: 'input' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        // { name: 'Quick search', sysName: 'quickSearch', type: 'turn_on_off' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}
export default FpsTable