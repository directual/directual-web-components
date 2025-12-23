import styles from './table.module.css'
import icon from './../../../../icons/fps-table.svg'
import Backdrop from '../../backdrop/backdrop'
import { Table } from './table'
import { ObjectCard } from '../objectCard/objectCard'
import { TableTitle } from '../tableTitle/TableTitle'
import React, { useState, useEffect, useRef } from 'react'
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

function FpsTable({ auth, data, onEvent, id, currentBP, locale, handleRoute, callEndpoint, handleModalRoute }) {
    if (!data) { data = {} }

    const [currentData, setCurrentData] = useState(data)

    useEffect(() => {
        // console.log('=== update data ===')
        // console.log(currentData)
        // console.log(' vvv ')
        // console.log(data)
        setCurrentData(data);
    }, [data])

    // console.log('---currentData FpsTable---')
    // console.log(currentData)

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

    // Новая логика пагинации и фильтрации через callEndpoint
    const comp_ID = _.get(currentData, "params.comp_ID") || id

    const getPageFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const savedPage = urlParams.get(`page_${comp_ID}`);
        return savedPage ? Number(savedPage) : 0;
    };

    const updatePageInUrl = (newPage) => {
        const urlParams = new URLSearchParams(window.location.search);
        if (newPage > 0) {
            urlParams.set(`page_${comp_ID}`, newPage);
        } else {
            urlParams.delete(`page_${comp_ID}`);
        }
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
    };

    const [page, setPageState] = useState(getPageFromUrl);
    const [dql, setDQL] = useState('');
    const [sort, setSort] = useState({});
    const [pageLoading, setPageLoading] = useState(false);
    const [dataInfo, setDataInfo] = useState({});
    const isFirstRender = useRef(true);
    const isRestoringFromUrl = useRef(false);

    // Функция для GET-запросов к API
    function callEndpointGET(endpoint, params, finish) {
        console.log('===> calling endpoint GET /' + endpoint)
        const httpParams = _.get(currentData, "params.httpParams") || _.get(currentData, "httpParams") || {}
        const requestParams = { ...httpParams, ...params }

        callEndpoint && callEndpoint(
            endpoint,
            "GET",
            undefined,
            requestParams,
            (result, content, json, data) => {
                if (result == "ok") {
                    finish && finish(content, data)
                } else {
                    finish && finish([])
                }
            }
        )
    }

    // Новая функция refresh через callEndpoint
    function refresh(dqlParam, sortParam) {
        if (currentData && currentData.sl) {
            setPageLoading(true)
            const sortString = sortParam && sortParam.field ? `${sortParam.field}:${sortParam.direction || 'asc'}` : '';
            callEndpointGET(currentData.sl, {
                pageSize: currentData.pageSize || 10,
                page: page,
                dql: dqlParam,
                sort: sortString
            }, (result, responseData) => {
                const newDataInfo = _.get(responseData, "result.data", {})
                if (newDataInfo && newDataInfo.content) delete newDataInfo.content
                setDataInfo(newDataInfo)
                setCardsData(result)
                setPageLoading(false)
                setLoading(false)
            })
        }
    }

    function performFiltering(dqlParam, sortParam) {
        clearTimeout(cx);
        console.log('=== F I L T E R I N G ! ===')
        console.log(dqlParam)
        console.log('=== S O R T I N G ! ===')
        console.log(sortParam)
        
        // Сохраняем в стейт
        setDQL(dqlParam)
        setSort(sortParam)
        
        // Старая логика для совместимости
        setCurrentDQL(dqlParam)
        setCurrentSort(sortParam)
        
        // Если восстанавливаем из URL - данные уже загружены, просто обновляем стейт
        if (isRestoringFromUrl.current) {
            console.log('Restoring filters from URL, skipping refresh')
            isRestoringFromUrl.current = false
            return
        }
        
        // Если на первой странице - рефрешим сразу, иначе сбрасываем на 0
        if (page == 0) { 
            refresh(dqlParam, sortParam) 
        } else { 
            setPageState(0)
            updatePageInUrl(0)
        }
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
            const fieldsDQL = currentData.headers && currentData.headers.map(i => i.sysName);
            const requestDQL = fieldsDQL.map(i => "'" + i + "'" + ' like ' + "'" + value + "'").join(' OR ')
            setCurrentDQL(requestDQL)
            sendMsg({ dql: requestDQL }, null, { page: page || 0 })
        } else {
            setSearchValue('')
            setCurrentDQL('')
            sendMsg({ dql: '' }, null, { page: 0 })
        }
    }

    // Старая функция refresh для совместимости с autoRefresh
    const oldRefresh = (skipLoading) => {
        console.log("oldRefresh")
        console.log(skipLoading)
        !skipLoading && setLoading(true)
        !skipLoading && setCurrentDQL('')
        !skipLoading && setCurrentSort({})
        !skipLoading && setSearchValue('')
        onEvent({ dql: '', page: currentPage, _id: id })
    }

    const [lazyLoadingHandler, setLazyLoadingHandler] = useState(false)

    function setPage(newPage) {
        if (_.get(currentData, "params.lazyLoading")) { 
            setLazyLoadingHandler(true) 
        }
        setPageState(newPage)
        updatePageInUrl(newPage)
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

    // useEffect для пагинации - вызывает refresh при изменении page
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log("page => " + page)
        refresh(dql, sort)
    }, [page])

    // Initial load - загружаем данные с учётом page, filters, sort из URL
    useEffect(() => {
        // Читаем параметры из URL
        const getFiltersFromUrl = () => {
            if (!comp_ID || typeof window === 'undefined') return { dql: '', sort: {} };
            const urlParams = new URLSearchParams(window.location.search);
            const filtersParam = urlParams.get(`filters_${comp_ID}`);
            const sortParam = urlParams.get(`sort_${comp_ID}`);
            
            let urlDql = '';
            let urlSort = {};
            
            // Парсим filters и конвертируем в DQL
            if (filtersParam) {
                try {
                    const filters = JSON.parse(decodeURIComponent(filtersParam));
                    // Простая конвертация filters в DQL
                    const dqlParts = Object.keys(filters).filter(key => {
                        return filters[key].value || filters[key].valueFrom || filters[key].valueTo;
                    }).map(key => {
                        const f = filters[key];
                        if (f.type === 'string' || f.type === 'boolean') {
                            return `('${key}' like '${f.value}')`;
                        }
                        if (f.type === 'multiOptions' && f.value) {
                            return '(' + Object.keys(f.value).map(v => `('${key}' like '${v}')`).join(' OR ') + ')';
                        }
                        if (f.type === 'date' || f.type === 'number') {
                            const parts = [];
                            if (f.valueFrom) parts.push(`('${key}' >= '${f.valueFrom}')`);
                            if (f.valueTo) parts.push(`('${key}' <= '${f.valueTo}')`);
                            return parts.join(' AND ');
                        }
                        return '';
                    }).filter(Boolean);
                    urlDql = dqlParts.join(' AND ');
                } catch (e) {
                    console.error('Failed to parse filters from URL:', e);
                }
            }
            
            // Парсим sort
            if (sortParam && sortParam.includes(':')) {
                const [field, direction] = sortParam.split(':');
                urlSort = { field, direction };
            }
            
            return { dql: urlDql, sort: urlSort };
        };
        
        const urlPage = getPageFromUrl() || 0;
        const { dql: urlDql, sort: urlSort } = getFiltersFromUrl();
        
        // Если есть фильтры в URL - устанавливаем флаг
        if (urlDql || urlSort.field) {
            isRestoringFromUrl.current = true;
            setDQL(urlDql);
            setSort(urlSort);
            setCurrentDQL(urlDql);
            setCurrentSort(urlSort);
        }
        
        if (currentData && currentData.sl) {
            console.log("Loading initial data from URL: page=" + urlPage + ", dql=" + urlDql)
            setPageLoading(true)
            const sortString = urlSort && urlSort.field ? `${urlSort.field}:${urlSort.direction || 'asc'}` : '';
            callEndpointGET(currentData.sl, {
                pageSize: currentData.pageSize || 10,
                page: urlPage,
                dql: urlDql,
                sort: sortString
            }, (result, responseData) => {
                const newDataInfo = _.get(responseData, "result.data", {})
                if (newDataInfo && newDataInfo.content) delete newDataInfo.content
                setDataInfo(newDataInfo)
                setCardsData(result)
                setPageLoading(false)
            })
        }
    }, [])

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
            refresh(dql, sort)
        }, autoRefreshPeriod);
        return () => clearInterval(interval);
    }, [dql, sort]);

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
                            refresh={() => refresh(dql, sort)}
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
                callEndpoint={(endpoint, params, finish, setOptions, setError) => {

                    const transformedArray = (inputArray, visibleNames) => _.map(inputArray, (item) => {
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

                        const { id, ...rest } = item; // Destructure `id` and the rest of the properties
                        const value = _.trim(_.map(parseJson(visibleNames), field => _.get(item, field.sysName)).join(' ')) ||
                            _.values(_.pickBy(rest, _.isString)).join(' '); // Concatenate string values
                        const excludeFields = [..._.map(parseJson(visibleNames), i => i.sysName), ...["userpic", "image", "picture", "photo"]]
                        const description = _.trim((_.keys(_.omit(rest, excludeFields)) || []).map(i => rest[i]).join(" "))
                        return {
                            key: id,
                            value: _.trim(value) || id,
                            image: _.get(rest, "userpic") || _.get(rest, "image") || _.get(rest, "picture") || _.get(rest, "photo"),
                            description: description,
                        };
                    });
                    //fake request
                    // setTimeout(() => {
                    //     const data = [
                    //         {
                    //             "title": "Погрузка/разгрузка",
                    //             "id": "1"
                    //         },
                    //         {
                    //             "title": "Сортировка",
                    //             "id": "2"
                    //         },
                    //         {
                    //             "title": "Программирование на Python",
                    //             "id": "3"
                    //         }
                    //     ]
                    //     const visibleNames = '[{"sysName":"firstName"}]'
                    //     finish && finish(transformedArray(data, visibleNames))
                    //     setOptions && setOptions(transformedArray(data, visibleNames))
                    // }, 1000)

                    // false &&
                    callEndpoint && callEndpoint(
                        endpoint,
                        "GET",
                        undefined,
                        params,
                        (result, data, visibleNames) => {
                            // console.log(result)
                            // console.log(data)

                            if (result == "ok") {
                                finish && finish(transformedArray(data, visibleNames))
                                setOptions && setOptions(transformedArray(data, visibleNames))
                            }
                            else {
                                setError && setError(data)
                                finish && finish([])
                                setOptions && setOptions([])
                            }
                        }
                    )
                }}
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
                urlKey={comp_ID}
                headers={currentData.headers}
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
                    _.get(currentData, 'params.data.cardsOrPage') == 'page' ? handleRoute(`./${_.get(currentData, 'params.data.additionalPath') ? _.get(currentData, 'params.data.additionalPath') + '/' : ''}` + encodeURI(val[(_.get(currentData, 'params.data.pathField') || "id")]))() :
                        _.get(currentData, 'params.data.cardsOrPage') == 'modal' ? handleModalRoute(`/${_.get(currentData, 'params.data.anotherPage')}/` + encodeURI(val[(_.get(currentData, 'params.data.pathField') || "id")]))() :
                        _.get(currentData, 'params.data.cardsOrPage') == 'anotherPage' ? handleRoute(`/${_.get(currentData, 'params.data.anotherPage')}/` + encodeURI(val[(_.get(currentData, 'params.data.pathField') || "id")]))() :
                            _.get(currentData, 'params.data.cardsOrPage') == 'disable' ? undefined :
                                setShowObject(val)
                }}
                getExpandHref={val => {
                    const cardsOrPage = _.get(currentData, 'params.data.cardsOrPage');
                    if (cardsOrPage === 'page') {
                        const additionalPath = _.get(currentData, 'params.data.additionalPath');
                        const pathField = _.get(currentData, 'params.data.pathField') || 'id';
                        return `./${additionalPath ? additionalPath + '/' : ''}${encodeURI(val[pathField])}`;
                    }
                    if (cardsOrPage === 'modal') {
                        const anotherPage = _.get(currentData, 'params.data.anotherPage');
                        const pathField = _.get(currentData, 'params.data.pathField') || 'id';
                        return `/${anotherPage}/${encodeURI(val[pathField])}`;
                    }
                    if (cardsOrPage === 'anotherPage') {
                        const anotherPage = _.get(currentData, 'params.data.anotherPage');
                        const pathField = _.get(currentData, 'params.data.pathField') || 'id';
                        return `/${anotherPage}/${encodeURI(val[pathField])}`;
                    }
                    return undefined; // для попапов href не нужен
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
                        pageSize={_.get(dataInfo, 'pageable.pageSize', pageSize)}
                        dict={dict}
                        lang={lang}
                        totalPages={Math.max(1, Math.ceil(_.get(dataInfo, 'total', 0) / _.get(dataInfo, 'pageable.pageSize', pageSize)))}
                        currentPage={_.get(dataInfo, 'pageable.page', page)}
                        setLoading={setLoading}
                        loading={pageLoading || loading}
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