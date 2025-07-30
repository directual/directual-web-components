import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import styles from './cards2.module.css'
import icon from './../../../../icons/fps-cards.svg'
import _ from 'lodash'
import Button from '../../button/button';
import Hint from '../../hint/hint';
import Input, { InputRow } from '../../dataentry/input/input';
import { debounce } from 'lodash'
import { template } from '../../templating/template'
import InnerHTML from 'dangerously-set-html-content'
import NewPaging from './NewPaging'
import { dict } from '../../locale'
import ActionPanel from '../../actionspanel/actionspanel';
import { TableTitle } from '../tableTitle/TableTitle'
import Loader from '../../loader/loader';
import Skeleton from '../../skeleton/skeleton';

// ДЕБАГ: Безопасная обёртка для InnerHTML
const SafeInnerHTML = ({ html, label = 'unknown', ...props }) => {
    if (html === null || html === undefined) {
        console.error(`[CARDS2 DEBUG] html prop is ${html} for ${label}`, { html, label });
        return null; // Рендерим ничего вместо краша
    }
    return <InnerHTML {...props} html={html} />;
};

function FpsCards2({ auth, data, onEvent, socket, callEndpoint, context, templateEngine, id, currentBP, locale, handleRoute, debug }) {

    console.log("== FpsCards2 data ===")
    console.log(data)
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

    currentBP = currentBP || 'tablet' // костылек, чтобы хоть какой-то BP передавался
    //console.log("currentBP = " + currentBP)

    const title = _.get(data, "params.cards_title")
    const showCounter = _.get(data, "params.general.showObjCount")
    const cardsLayout = _.get(data, "params.cards_layout")
    const [objects, setObjects] = useState(_.get(data, "data", []))
    const card_border = _.get(data, "params.card_border", 1)
    const card_border_radius = _.get(data, "params.card_border_radius")
    const sl = _.get(data, "sl")

    const cx = null
    const dqlService = debounce(performFiltering, 600);

    const comp_ID = _.get(data, "params.comp_ID")

    const [error, setError] = useState("")

    const getPageFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const savedPage = urlParams.get(`page_${comp_ID}`);
        return savedPage ? Number(savedPage) : 0;
    };
    const [page, setPage] = useState(getPageFromUrl);
    const [loading, setLoading] = useState(false)
    const [initialLoading, setInitialLoading] = useState(debug ? false : true) // в дебаг режиме сразу не показываем скелетон
    const isFirstRender = useRef(true)

    const updatePageInUrl = (newPage) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(`page_${comp_ID}`, newPage);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
    };

    const sendMsg = (msg, sl, pageInfo, options) => {
        console.log('submitting...')
        pageInfo = pageInfo || { page: currentPage }
        if (sl === "") { sl = undefined }
        // костылек для даты
        for (const prop in msg) {
            if (typeof msg[prop] == 'number' && msg[prop] > 1000000000000) {
                const dataType = data.headers.filter(i => i.sysName == prop) &&
                    data.headers.filter(i => i.sysName == prop)[0] &&
                    data.headers.filter(i => i.sysName == prop)[0].dataType
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

    function performFiltering(dql, sort) {
        clearTimeout(cx);
        console.log('=== F I L T E R I N G ! ===')
        console.log(dql)
        // setCurrentDQL(dql)
        // setCurrentSort(sort)
        console.log('=== S O R T I N G ! ===')
        console.log(sort)
        const page = 0 // dql || _.get(sort,'field') ? currentPage : 0
        sendMsg({ dql, sort }, null, { page })
    }

    const nextPage = () => {
        setPage(prevPage => {
            const newPage = prevPage + 1;
            updatePageInUrl(newPage);
            return newPage;
        });
    };

    const prevPage = () => {
        setPage(prevPage => {
            const newPage = Math.max(prevPage - 1, 0);
            updatePageInUrl(newPage);
            return newPage;
        });
    };

    const firstPage = () => {
        setPage(0);
        updatePageInUrl(0);
    };

    const lastPage = () => {
        const pageSize = _.get(dataInfo, 'pageable.pageSize', data.pageSize || 10);
        const totalPages = Math.max(1, Math.ceil(_.get(dataInfo, 'total', 0) / pageSize));
        const lastPageNumber = Math.max(0, totalPages - 1);
        setPage(lastPageNumber);
        updatePageInUrl(lastPageNumber);
    };

    // grid settings
    const breakPoints = {
        wideDesktop: _.get(data, "params.grid_layout__wideDesktop", 4),
        desktop: _.get(data, "params.grid_layout__desktop", 3),
        tablet: _.get(data, "params.grid_layout__tablet", 2),
        mobile: _.get(data, "params.grid_layout__mobile", 1),
    }
    const grid_layout__gap = _.get(data, "params.grid_layout__gap", 22)
    const field_quantity = _.get(data, "params.card_type_cart.quantity")

    const flex_layout__gap = _.get(data, "params.flex_layout__gap", 22)
    const flex_layout__width = _.get(data, "params.flex_layout__width", 250)

    // функция для рендера скелетонов
    const renderSkeletons = (isFlexLayout = false) => {
        // для pageLoading берем размер из dataInfo, для initialLoading из data
        const pageSize = pageLoading 
            ? _.get(dataInfo, 'pageable.pageSize', data.pageSize || 10)
            : data.pageSize || 10
        const card_min_height = _.get(data, "params.card_min_height") || "120px"
        
        return Array(pageSize).fill(null).map((_, index) => (
            <div
                key={`skeleton-${index}`}
                style={(!card_border_radius && card_border_radius !== 0) ? {
                    borderWidth: card_border,
                    ...(isFlexLayout && { width: flex_layout__width })
                } : {
                    borderWidth: card_border,
                    borderRadius: card_border_radius,
                    ...(isFlexLayout && { width: flex_layout__width })
                }}
                className={`FPS_CARDS2__CARD ${styles.cards2_card}`}>
                <Skeleton 
                    height={card_min_height}
                    style={{ borderRadius: card_border_radius }}
                />
            </div>
        ))
    }

    // edit object from card

    const callEndpointPOST = (endpoint, body, finish) => {
        console.log('===> calling endpoint POST /' + endpoint)
        console.log(body)
        // добавляем httpParams к параметрам запроса
        const httpParams = _.get(data, "params.httpParams") || _.get(data, "httpParams") || {}
        
        callEndpoint && callEndpoint(
            endpoint,
            "POST",
            body,
            httpParams,
            (result, data) => {
                if (result == "ok") {
                    console.log('finish')
                    console.log(data)
                    finish && finish()
                    //   try {
                    //     console.log("response data")
                    //     console.log(data)
                    //     const response = JSON.parse(data)
                    //     // update state
                    //     if (!isEmpty(_.get(response, "state"))) {
                    //       const stateUpdate = _.get(response, "state")
                    //       setState({ ...state, ...stateUpdate })
                    //     }
                    //     // update model/object
                    //     if (!isEmpty(_.get(response, "object"))) {
                    //       const modelUpdate = _.get(response, "object")
                    //       setModel({ ...model, ...modelUpdate })
                    //     }
                    //     if (!isEmpty(_.get(response, "model"))) {
                    //       const modelUpdate = _.get(response, "model")
                    //       setModel({ ...model, ...modelUpdate })
                    //     }
                    //     if (!isEmpty(_.get(response, "redirect")) &&
                    //       !isEmpty(_.get(response, "redirect.target"))) {
                    //       let delay = 0
                    //       if (!isEmpty(_.get(response, "redirect.delay"))) {
                    //         delay = typeof _.get(response, "redirect.delay") == 'number' ? _.get(response, "redirect.delay") : parseInt(_.get(response, "redirect.delay"))
                    //       }
                    //       let target = _.get(response, "redirect.target")
                    //       setTimeout(() => {
                    //         if (target.startsWith("http")) {
                    //           window.location.href = target;
                    //         } else {
                    //           handleRoute(target)()
                    //         }
                    //       }, delay)
                    //     }
                    //     // refresh
                    //     if (_.get(response, "refresh")) {
                    //       refreshOptions()
                    //     }
                    //   } catch (err) {
                    //     console.log(err)
                    //   }
                } else {
                    console.log('callEndpoint result is not OK')
                }
            }
        )
    }

    const callEndpointGET = (endpoint, params, finish) => {
        console.log('===> calling endpoint GET /' + endpoint)
        // добавляем httpParams к параметрам запроса
        const httpParams = _.get(data, "params.httpParams") || _.get(data, "httpParams") || {}
        const requestParams = { ...httpParams, ...params }
        
        callEndpoint && callEndpoint(
            endpoint,
            "GET",
            undefined,
            requestParams,
            (result, content, json, data) => {
                if (result == "ok") {
                    finish && finish(content, data)
                }
                else {
                    setError && setError(content)
                    finish && finish([])
                }
            }
        )
    }

    const favoritesOn = _.get(data, "params.card_type_dir.favoritesOn", false)
    const favoritesEndpoint = _.get(data, "params.card_type_dir.favoritesEndpoint", "")
    const favoritesField = _.get(data, "params.card_type_dir.favoritesField", "")
    const favoritesHiddenField = _.get(data, "params.card_type_dir.favoritesHiddenField", "")
    const favoritesIconOn = _.get(data, "params.card_type_dir.favoritesIconOn", "starFill")
    const favoritesIconOff = _.get(data, "params.card_type_dir.favoritesIconOff", "star")
    const [favorites, setFavorites] = useState([])
    const [favLoading, setFavLoading] = useState(false)
    const [pageLoading, setPageLoading] = useState(false)
    const [dataInfo, setDataInfo] = useState( // {}
        // fake dataInfo
        {
            "pageable": {
                "page": 1,
                "size": 3,
                "fields": [
                    "id",
                    "field1"
                ],
                "orders": [],
                "offset": 3,
                "orderLimit": 1000,
                "countAsEstimated": false,
                "pageNumber": 1,
                "pageSize": 3
            },
            "total": 8,
            "warnings": [],
            "empty": false,
            "numberOfElements": 3
        }
    )


    // FAVORITES
    useEffect(() => {
        setFavLoading(true)
        favoritesOn && favoritesEndpoint && callEndpointGET(favoritesEndpoint, { pageSize: 100 }, data => {
            setFavorites(data);
            setFavLoading(false)
        })
    }, [])

    // PAGINATION
    useEffect(() => {
        if (debug) {
            // в дебаг режиме не делаем пагинацию
            console.log("Cards2 Debug mode: pagination disabled")
            return;
        }
        
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        console.log("page => " + page)
        if (data && data.sl) {
            setPageLoading(true)
            callEndpointGET(data.sl, {
                pageSize: data.pageSize || 10,
                page: page
            }, (result, data) => {
                // console.log("PAGINATION RESULT")
                // console.log(result)
                // console.log(data)
                const dataInfo = _.get(data, "result.data", {})
                if (dataInfo && dataInfo.content) {
                    delete dataInfo.content
                }
                setDataInfo(dataInfo)
                setObjects(result)
                setPageLoading(false)
            })
        }
    }, [page, debug]) // добавляем debug в dependencies

    // INITIAL PAGE LOAD - check URL for page parameter on mount
    useEffect(() => {
        if (debug) {
            // в дебаг режиме не загружаем данные, используем то что пришло в props
            console.log("Cards2 Debug mode: using data from props, skipping API calls")
            return;
        }
        
        const urlPage = getPageFromUrl() || 0;
        if (data && data.sl) { // в любом случае загружаем данные, чтобы достать dataInfo
            console.log("Loading initial page from URL: " + urlPage)
            setPageLoading(true)
            callEndpointGET(data.sl, {
                pageSize: data.pageSize || 10,
                page: urlPage
            }, (result, data) => {
                // console.log("INITIAL PAGE LOAD RESULT")
                // console.log(result)
                // console.log(data)
                const dataInfo = _.get(data, "result.data", {})
                if (dataInfo && dataInfo.content) {
                    delete dataInfo.content
                }
                setDataInfo(dataInfo)
                setObjects(result)
                setPageLoading(false)
                setInitialLoading(false) // отключаем показ скелетонов после первой загрузки
            })
        } else {
            setInitialLoading(false) // если нет sl, то скелетоны не нужны
        }
    }, [debug]) // добавляем debug в dependencies

    // SOCKET UPDATES - фоновое обновление при изменении socket
    useEffect(() => {
        if (debug) {
            // в дебаг режиме не обновляем данные по socket
            console.log("Cards2 Debug mode: socket updates disabled")
            return;
        }
        
        if (!socket) return; // если socket не передан, ничего не делаем
        
        if (data && data.sl) {
            console.log("Socket changed, updating data in background...")
            // обновляем данные БЕЗ лоадеров
            callEndpointGET(data.sl, {
                pageSize: data.pageSize || 10,
                page: page
            }, (result, responseData) => {
                console.log("Background update completed")
                const dataInfo = _.get(responseData, "result.data", {})
                if (dataInfo && dataInfo.content) {
                    delete dataInfo.content
                }
                setDataInfo(dataInfo)
                setObjects(result)
                // НЕ обновляем initialLoading и pageLoading - это фоновое обновление
            })
        }
    }, [socket, debug]) // добавляем debug в dependencies

    return <div className={`FPS_CARDS2 ${styles.cards2}`}>
        {/* {pageLoading && <Loader />} */}
        {/* {(title || showCounter) && <div className={`FPS_CARDS2__HEADER ${styles.cards2_header}`}>
            {title && <h2>{title && <InnerHTML allowRerender={true} html={title} />}</h2>}
            {showCounter && <div className={`FPS_CARDS2__HEADER-counter ${styles.cards2_header_counter}`}>5 items</div>}
        </div>} */}

        <TableTitle
            tableFilters={_.get(data.params, 'filterParams') || {}}
            displayFilters={_.get(data.params, 'filterParams.isFiltering') || _.get(data.params, 'filterParams.isSorting')}
            performFiltering={dqlService}
            // performFiltering={dql => console.log(dql)}
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
            params={data.params}
            currentBP={currentBP}
            tableTitle={title}
            //searchValue={searchValue}
            //tableQuickSearch={data.quickSearch == 'true'}
            // search={data.data && data.data.length > 0 ? true : false}
            // onSearch={searchService}
            // loading={loading}
            dict={dict}
            lang={lang}
            onFilter={() => { }}
        />

        {!cardsLayout && <Hint error title="No cards layout" margin={{ top: 0, bottom: 0 }}>
            <p>Please, select cards layout in the settings</p>
        </Hint>}

        {/* CSS GRID */}
        {cardsLayout == "grid" && <div className={`FPS_CARDS2__WRAPPER LAYOUT_grid
            ${styles.cards2_wrapper} 
            ${styles.layout_grid}`}
            style={{
                gap: grid_layout__gap,
                gridTemplateColumns: _.join(_.times(breakPoints[currentBP], _.constant('1fr')), ' ')
            }}
        >
            {(initialLoading || pageLoading) ? renderSkeletons() : objects
                .filter(object => !!_.get(object, field_quantity, 1)) // filter items with quantity == 0
                .map(object => <div
                    style={(!card_border_radius && card_border_radius !== 0) ? {
                        borderWidth: card_border,
                    } : {
                        borderWidth: card_border,
                        borderRadius: card_border_radius
                    }}
                    className={`FPS_CARDS2__CARD ${styles.cards2_card}`}>
                    <Card
                        key={object.id}
                        data={data}
                        context={context}
                        lang={lang}
                        favLoading={favLoading}
                        favorites={favorites}
                        handleRoute={handleRoute}
                        callEndpointGET={callEndpointGET}
                        callEndpointPOST={callEndpointPOST}
                        object={object}
                        favoritesField={favoritesField}
                        templateEngine={templateEngine}
                        addToFavorites={(value) => {
                            console.log("addToFavorites")
                            if (favoritesEndpoint && favoritesField && favoritesHiddenField) {
                                setFavLoading(true)
                                let payload = {
                                    [favoritesField]: object.id,
                                    [favoritesHiddenField]: !value
                                }
                                if (!value) {
                                    let copyFav = [...favorites]
                                    _.remove(copyFav, (obj) => obj[favoritesField] === object.id)
                                    setFavorites(copyFav)
                                    const favID = _.get(favorites.filter(i => i[favoritesField] == object.id)[0], "id")
                                    if (favID) _.set(payload, "id", favID)
                                } else {
                                    let copyFav = [...favorites]
                                    copyFav.push({ [favoritesField]: object.id })
                                    setFavorites(copyFav)
                                }

                                callEndpointPOST(favoritesEndpoint, payload, () => setFavLoading(false))

                            }
                        }}
                    />
                </div>)}

        </div>}

        {/* FLEX LAYOUT */}
        {cardsLayout == "flex" && <div className={`FPS_CARDS2__WRAPPER LAYOUT_flex
            ${styles.cards2_wrapper} 
            ${styles.layout_flex}`}
            style={{
                gap: flex_layout__gap,
            }}
        >
            {(initialLoading || pageLoading) ? renderSkeletons(true) : objects
                .filter(object => !!_.get(object, field_quantity, 1)) // filter items with quantity == 0
                .map(object => <div
                    style={(!card_border_radius && card_border_radius !== 0) ? {
                        borderWidth: card_border,
                        width: flex_layout__width
                    } : {
                        borderWidth: card_border,
                        borderRadius: card_border_radius,
                        width: flex_layout__width
                    }}
                    className={`FPS_CARDS2__CARD ${styles.cards2_card}`}>
                    <Card
                        key={object.id}
                        data={data}
                        context={context}
                        lang={lang}
                        favLoading={favLoading}
                        favorites={favorites}
                        handleRoute={handleRoute}
                        callEndpointGET={callEndpointGET}
                        callEndpointPOST={callEndpointPOST}
                        object={object}
                        favoritesField={favoritesField}
                        templateEngine={templateEngine}
                        addToFavorites={(value) => {
                            console.log("addToFavorites")
                            if (favoritesEndpoint && favoritesField && favoritesHiddenField) {
                                setFavLoading(true)
                                let payload = {
                                    [favoritesField]: object.id,
                                    [favoritesHiddenField]: !value
                                }
                                if (!value) {
                                    let copyFav = [...favorites]
                                    _.remove(copyFav, (obj) => obj[favoritesField] === object.id)
                                    setFavorites(copyFav)
                                    const favID = _.get(favorites.filter(i => i[favoritesField] == object.id)[0], "id")
                                    if (favID) _.set(payload, "id", favID)
                                } else {
                                    let copyFav = [...favorites]
                                    copyFav.push({ [favoritesField]: object.id })
                                    setFavorites(copyFav)
                                }

                                callEndpointPOST(favoritesEndpoint, payload, () => setFavLoading(false))

                            }
                        }}
                    />
                </div>)}

        </div>}

        {/* Показываем пагинацию только если allowPagination === true */}
        {_.get(data, 'params.general.allowPagination') === true && <NewPaging
            totalObjects={_.get(dataInfo, 'total', 0)}
            objectsPerPage={_.get(dataInfo, 'pageable.pageSize', data.pageSize || 10)}
            showPageSizeDropdown={true}
            onPageSizeChange={(newPageSize) => {
                // Сбрасываем на первую страницу при изменении размера страницы
                console.log("onPageSizeChange")
                console.log("newPageSize:", newPageSize)
                // Здесь можно добавить логику для обновления pageSize в data
            }}
            currentPage={_.get(dataInfo, 'pageable.page', 0)}
            totalPages={Math.max(1, Math.ceil(_.get(dataInfo, 'total', 0) / _.get(dataInfo, 'pageable.pageSize', data.pageSize || 10)))}
            nextPage={nextPage}
            dataInfo={dataInfo}
            prevPage={prevPage}
            firstPage={firstPage}
            locale={locale}
            lastPage={lastPage}
            loading={pageLoading}
        />}
    </div>
}

function Card(props) {

    const { object, data, lang, favoritesField, addToFavorites, favLoading, templateEngine, handleRoute, favorites, callEndpointPOST, callEndpointGET, context } = props

    const cardType = _.get(data, "params.card_layout_type")
    const html_type_content = _.get(data, "params.html_type_content")
    const templatingEngine = _.get(data, "params.paraTemplateEngine")
    const card_padding = _.get(data, "params.card_padding", 12)
    const card_min_height = _.get(data, "params.card_min_height") || "none"
    const card_border = _.get(data, "params.card_border", 1)
    const card_border_radius = _.get(data, "params.card_border_radius")
    const image_shape = _.get(data, "params.card_type_cart.image_shape")
    const image_padding = _.get(data, "params.card_type_cart.image_padding", 0)
    const image_border_radius = _.get(data, "params.card_type_cart.image_border_radius", 0)

    const field_header = _.get(data, "params.card_type_cart.header")
    const field_image = _.get(data, "params.card_type_cart.image[0]") !== "{" ? "{{" + _.get(data, "params.card_type_cart.image") + "}}" : _.get(data, "params.card_type_cart.image")
    const field_description = _.get(data, "params.card_type_cart.description")
    const field_price = _.get(data, "params.card_type_cart.price")
    const field_quantity = _.get(data, "params.card_type_cart.quantity")

    const dir_image_field = _.get(data, "params.card_type_dir.image[0]") !== "{" ? "{{" + _.get(data, "params.card_type_dir.image") + "}}" : _.get(data, "params.card_type_dir.image")
    const dir_image_height = _.get(data, "params.card_type_dir.image_height", 50)
    const dir_image_radius = _.get(data, "params.card_type_dir.image_border_radius", 0)
    const dir_image_padding = _.get(data, "params.card_type_dir.image_padding", 0)
    const dir_cardBody = _.get(data, "params.card_type_dir.body", "")
    const dir_image_position = _.get(data, "params.card_type_dir.image_position", "top")
    const dir_templatingEngine = _.get(data, "params.card_type_dir.paraTemplateEngine", "api")
    const [description, setDescription] = useState("")
    const [cardBody, setCardBody] = useState("")
    const [cardLoading, setCardLoading] = useState(true)

    const favoritesOn = _.get(data, "params.card_type_dir.favoritesOn", false)
    const favoritesIconOn = _.get(data, "params.card_type_dir.favoritesIconOn") || "starFill"
    const favoritesIconOff = _.get(data, "params.card_type_dir.favoritesIconOff") || "star"
    const favoritesPosition = _.get(data, "params.card_type_dir.favoritesPosition", "left")

    const actionsOn = _.get(data, "params.card_type_dir.actionsOn", false)
    const actionsArray = _.get(data, "params.card_type_dir._actions", [])
    const actionsSettings = _.get(data, "params.actions", [])
    const actionsLayout = _.get(data, "params.card_type_dir.actionsLayout", "line")

    const isRouting = _.get(data, "params.routing") == "redirect"
    const routingPath = _.get(data, "params.routing_where", '')


    useEffect(() => {

        //if (templatingEngine == 'front') return;

        const bodyToRender = cardType == "custom" ? html_type_content : dir_cardBody

        const fetchData = async (payload, setValue) => {
            const templValue = templateEngine ? await templateEngine(payload, object) : "Templating error";
            setValue(templValue || ""); // Добавляем проверку на null/undefined
        };
        
        const loadCardData = async () => {
            setCardLoading(true);
            try {
                await Promise.all([
                    fetchData(field_description, setDescription),
                    fetchData(bodyToRender, setCardBody)
                ]);
            } catch (error) {
                console.error('Error loading card data:', error);
            } finally {
                setCardLoading(false);
            }
        };
        
        loadCardData();
    }, [])

    const changeQuantity = (count) => {
        callEndpointPOST(_.get(data, "sl"), { id: object.id, [field_quantity]: count })
    }

    const cx = null
    const onChangeQuantity = debounce(changeQuantity, 500);

    const isFavorite = _.some(favorites, { [favoritesField]: object.id })

    // показываем скелетон во время загрузки карточки
    if (cardLoading) {
        return <Skeleton 
            height={card_min_height}
            style={{ 
                borderRadius: card_border_radius,
                borderWidth: card_border,
                borderStyle: 'solid',
                borderColor: 'transparent'
            }}
        />
    }

    if (cardType == "cart") return <div
        className={`Cards2_typeCart ${styles.cards2_typeCart}`}>
        {image_shape !== "no_image" && <div
            className={`Cards2_typeCart__imageWrapper ${styles.cards2_typeCart__imageWrapper}`}>
            <div
                className={`Cards2_typeCart__image ${styles.cards2_typeCart__image}`}
                style={{
                    width: _.get(data, "params.card_type_cart.image_width", 50),
                    height: _.get(data, "params.card_type_cart.image_height", 50),
                    overflow: "hidden",
                    margin: image_padding,
                    borderRadius: image_shape == "circle" ? "100%" : image_border_radius,
                    backgroundImage: `url(${template(field_image, object)})`
                }}
            />
        </div>}
        <div
            style={{
                padding: card_padding,
                minHeight: card_min_height,
            }}
            className={`Cards2_typeCart__bodyWrapper ${styles.cards2_typeCart__bodyWrapper}`}>
            <div className={`Cards2_typeCart__header ${styles.cards2_typeCart__header}`}>
                {template(field_header, object) && <SafeInnerHTML allowRerender={true} html={template(field_header, object)} label="field_header" />}
            </div>
            {field_description && description && <div className={`Cards2_typeCart__description ${styles.cards2_typeCart__description}`}>
                <SafeInnerHTML allowRerender={true} html={description} label="description" />
            </div>}
            <div className={`Cards2_typeCart__price ${styles.cards2_typeCart__price}`}>
                {template(field_price, object) && <SafeInnerHTML allowRerender={true} html={template(field_price, object)} label="field_price" />}
            </div>
            <CartControls
                object={object}
                quantity={_.get(object, field_quantity, 1)}
                changeQuantity={onChangeQuantity} />
        </div>
    </div>

    let flexDirection = 'column'
    let imagePos = 'vert'

    switch (dir_image_position) {
        case 'left':
            flexDirection = 'row'
            imagePos = 'hor'
            break;
        case 'right':
            flexDirection = 'row-reverse'
            imagePos = 'hor'
            break;
        case 'top':
            flexDirection = 'column'
            break;
        case 'bottom':
            flexDirection = 'column-reverse'
            break;
    }

    if (cardType == "regular") return <a
        className={`Cards2_typeRegular ${styles.cards2_typeRegular}`}
        style={{
            flexDirection: flexDirection
        }}
        onClick={e => {
            e.preventDefault()
            if (isRouting && routingPath) {
                let path = template(routingPath, object)
                if (path[0] !== '.' && path[0] !== '/') {
                    path = './' + path
                }
                handleRoute(path)(e)
            }
        }}>

        {/* IMAGE */}
        {dir_image_position !== "no_image" && <div
            className={`Cards2_typeRegular__image ${styles.cards2_typeRegular__image}`}
            style={{
                height: imagePos == 'vert' ? dir_image_height : 'auto',
                width: imagePos == 'hor' ? dir_image_height : 'auto',
                overflow: "hidden",
                margin: dir_image_padding,
                borderRadius: dir_image_radius,
                backgroundImage: `url(${template(dir_image_field, object)})`,
            }}>
            {favoritesOn && <div
                style={
                    {
                        opacity: favLoading ? .1 : .6,
                        left: favoritesPosition == 'left' ? 10 : 'auto',
                        right: favoritesPosition == 'right' ? 10 : 'auto',
                    }}
                onClick={e => { e.stopPropagation(); favLoading ? undefined : addToFavorites(!isFavorite) }}
                className={`Cards2_typeRegular__favButton ${styles.cards2_typeRegular__favButton}`}>
                <div className={`${styles.cards2_typeRegular__favButton__icon} icon icon-${isFavorite ? favoritesIconOn : favoritesIconOff}`} />
            </div>}
        </div>}

        {/* CARD BODY */}
        <div style={{ padding: card_padding, position: "relative", minHeight: card_min_height, flexGrow: 2 }}>
            {dir_image_position == "no_image" && favoritesOn && <div
                style={
                    {
                        opacity: favLoading ? .1 : .6,
                        left: favoritesPosition == 'left' ? 10 : 'auto',
                        right: favoritesPosition == 'right' ? 10 : 'auto',
                    }}
                onClick={e => { e.stopPropagation(); favLoading ? undefined : addToFavorites(!isFavorite) }}
                className={`Cards2_typeRegular__favButton ${styles.cards2_typeRegular__favButton}`}>
                <div className={`${styles.cards2_typeRegular__favButton__icon} icon icon-${isFavorite ? favoritesIconOn : favoritesIconOff}`} />
            </div>}

            {cardBody && dir_templatingEngine != 'front' && <SafeInnerHTML allowRerender={true} html={cardBody} label="cardBody" />}
            {dir_cardBody && dir_templatingEngine == 'front' && <SafeInnerHTML allowRerender={true} html={template(dir_cardBody, object)} label="cardBody" />}

            {actionsOn && actionsArray.length > 0 && <div className={`${styles.FPS_Cards_ActionPanel} FPS_Cards_ActionPanel`}>
                <CardActions
                    actionsArray={actionsArray}
                    object={object}
                    actionsLayout={actionsLayout}
                    context={context}
                    callEndpointPOST={callEndpointPOST}
                    actionsSettings={actionsSettings}
                />
            </div>}
        </div>

    </a>

    if (cardType == "custom") return <a
        className={`Cards2_typeRegular ${styles.cards2_typeRegular}`}
        style={{
            minHeight: card_min_height,
            margin: card_padding
        }}
        onClick={e => {
            e.preventDefault()
            if (isRouting && routingPath) {
                let path = template(routingPath, object)
                if (path[0] !== '.' && path[0] !== '/') {
                    path = './' + path
                }
                handleRoute(path)(e)
            }
        }}>
        {html_type_content && templatingEngine != 'api' && <SafeInnerHTML allowRerender={true} html={template(html_type_content, object)} label="html_type_content" />}
        {cardBody && templatingEngine == 'api' && <SafeInnerHTML allowRerender={true} html={cardBody} label="html_type_content" />}
    </a>

    return <div >
        —
    </div>
}

function CardActions(props) {
    const { actionsSettings, actionsLayout, callEndpointPOST, object, context, actionsArray } = props
    return <ActionPanel column={actionsLayout == 'column'}>
        {actionsArray.map(action => <CardAction
            {...props}
            action={action}
            key={action.id}
        />)}
    </ActionPanel>
}

function CardAction(props) {
    const { action, actionsSettings, object, callEndpointPOST } = props

    const settings = _.find(actionsSettings, { id: action.action_id });
    const label = action._action_label // || settings.name
    const [isClicked, setIsClicked] = useState(false)
    const [localLoading, setLocalLoading] = useState(false)

    const handleClick = e => {
        // console.log("performAction")
        // console.log(action)
        // console.log(settings)

        setLocalLoading(true)

        const transformObject = array => _.reduce(array, (result, item) => {
            if (!array || array.length == 0) return {};
            const { field, value } = item;
            result[field] = template(value, object);
            return result;
        }, {});

        if ((_.get(settings, "actionType") == "endpoint" || !_.get(action, "actionType")) && settings.endpoint) {
            let payload = transformObject(settings.mapping)

            console.log("payload")
            console.log(payload)

            callEndpointPOST(settings.endpoint, payload, (result) => {
                setLocalLoading(false)
                setIsClicked(true)
                console.log("callEndpointPOST result")
                console.log(result)
            })
        }
    }

    if (isClicked && action._action_oneTime) return <Hint margin={{ top: 0, bottom: 0 }}>
        {action._action_oneTime_message && <SafeInnerHTML allowRerender={true} html={action._action_oneTime_message} label="action_message" />}
    </Hint>

    return <Button
        onClick={handleClick}
        height={action._action_button_size == "small" ? 32 : 48}
        small={action._action_button_size == "small"}
        loading={localLoading}
        tooltip={action._action_addTooltip && action._action_addTooltip_text}
        icon={action._action_icon}
    >{label}</Button>
}

function CartControls(props) {

    const { object, changeQuantity, quantity } = props

    const [count, setCount] = useState(quantity)

    const saveCount = val => {
        setCount(val)
    }

    const addCount = () => {
        setCount(count + 1)
    }

    const deleteItem = () => {
        setCount(0)
    }

    const substrCount = () => {
        count > 0 && setCount(count - 1)
    }

    useEffect(() => {
        count !== quantity && changeQuantity(count)
    }, [count])

    return <div className={`Cards2_typeCart__controls ${styles.cards2_typeCart__controls}`}>
        <div onClick={substrCount}
            className={`icon icon-minus small 
                ${count < 1 && styles.disabled}
                ${styles.cards2_typeCart__controls__button}`} />
        <div className={`${styles.cards2_typeCart__controls__count}`}>{count || 0}</div>
        <div onClick={addCount}
            className={`icon icon-plus small ${styles.cards2_typeCart__controls__button}`} />
        <div className={`Cards2_typeCart__controls__delete ${styles.cards2_typeCart__controls__delete}`}>
            <div onClick={deleteItem}
                className={`icon icon-delete ${styles.cards2_typeCart__controls__button}`} />
        </div>

    </div>
}

FpsCards2.propTypes = {
    data: PropTypes.object.isRequired,
    auth: PropTypes.object,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    handleRoute: PropTypes.func,
    debug: PropTypes.bool
};

FpsCards2.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG",
    onChange: undefined,
    handleRoute: undefined,
    debug: false
};

FpsCards2.settings = {
    icon: icon,
    name: 'Cards view (2025)',
    sysName: 'FpsCards2',
    isLegacy: false,
    isMarketplace: false,
    form: [
        { name: 'Select API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}
export default FpsCards2
