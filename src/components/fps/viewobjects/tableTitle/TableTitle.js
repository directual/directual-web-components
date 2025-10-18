import React, { useState, useRef, useEffect } from 'react'
import styles from '../table/table.module.css'
import Button, { ButtonDropDown } from '../../button/button'
import Filters from '../filters/Filters'
import Input from '../../dataentry/input/input'
import Loader from '../../loader/loader'
import ActionPanel from '../../actionspanel/actionspanel'
import { FormSection } from '../../dataentry/form/FpsForm'
import Hint from '../../hint/hint'
import _ from 'lodash'
import moment from 'moment'
import InnerHTML from 'dangerously-set-html-content'

const SafeInnerHTML = ({ html, label = 'unknown', ...props }) => {
    if (html === null || html === undefined) {
        console.error('[CARDS2 DEBUG] html prop is ' + html + ' for ' + label, { html: html, label: label })
        return null
    }
    return <InnerHTML {...props} allowRerender={true} html={html} />
};

export function TableTitle({ tableQuickSearch, search, tableTitle, tableFilters, onFilter, currentDQL, currentSort,
    chartFilters, displayChartFilters, updateChartFilters, chartLines, clearChartFilters, callEndpoint,
    onSearch, loading, searchValue, currentBP, displayFilters, lang, dict, performFiltering, params, urlKey, headers,
    customHTMLfilters = false, customHTMLfiltersContent = null,
}) {

    const [showSearch, setShowSearch] = useState(search)
    //const [showFilters, setShowFilters] = useState(false)

    // Получаем список полей из params.data.readFields или из headers (fallback для FpsCards2)
    const fields = _.get(params, 'data.readFields') || headers || []

    const fieldOptions = fields.map(i => {
        return {
            key: i.fieldSysName || i.sysName,
            value: i.name && i.name != ' ' ? i.name : (i.fieldSysName || i.sysName)
        }
    })

    // Инициализация API для кастомных фильтров
    useEffect(() => {
        if (customHTMLfilters) {
            // Создаем глобальный API для юзерского кода
            window.DirectualFilter = {
                // Стартовые данные (текущий фильтр, список полей для возможной фильтрации)
                props: {
                    currentFilter: currentDQL || '',
                    currentSort: currentSort || null,
                    fields: fieldOptions,
                    lang: lang,
                    dict: dict[lang] || {}
                },
                
                // Юзерский код вызывает это при каждом изменении фильтра
                emit: (dqlValue, sortOptions) => {
                    console.log('🔥 Custom filter emitted:', { dql: dqlValue, sort: sortOptions });
                    
                    // Определяем сортировку - либо переданная, либо текущая
                    let sortToApply = {};
                    
                    if (sortOptions) {
                        // Если передана сортировка из кастомного фильтра
                        if (typeof sortOptions === 'string' && sortOptions.includes(':')) {
                            const [field, direction] = sortOptions.split(':');
                            sortToApply = { field, direction };
                        } else if (typeof sortOptions === 'object' && sortOptions.field) {
                            sortToApply = sortOptions;
                        }
                    } else {
                        // Сохраняем текущую сортировку если новая не передана
                        if (typeof currentSort === 'string' && currentSort.includes(':')) {
                            const [field, direction] = currentSort.split(':');
                            sortToApply = { field, direction };
                        } else if (typeof currentSort === 'object' && currentSort.field) {
                            sortToApply = currentSort;
                        }
                    }
                    
                    // Фильтр подхватываем (в формате dql) и шлем выше в performFiltering, не нарушая контракта!
                    performFiltering(dqlValue || '', sortToApply);
                }
            };

            // Cleanup при размонтировании компонента
            return () => {
                if (window.DirectualFilter) {
                    delete window.DirectualFilter;
                }
            };
        }
    }, [customHTMLfilters, currentDQL, fieldOptions, lang, dict, currentSort, performFiltering]);

    //currentBP = 'mobile'

    // Если customHTMLfilters = true, то показываем custom HTML фильтры
    if (customHTMLfilters) {
        if (customHTMLfiltersContent) {
            return <SafeInnerHTML html={customHTMLfiltersContent} allowRerender={true} />
        } else {
            return <div>No custom HTML filters content</div>
        }
    }

    return (
        <React.Fragment>
            {(displayFilters || tableQuickSearch || tableTitle || displayChartFilters) &&
                <div className={`${styles.tableTitle} ${styles[currentBP]}`}>
                    {tableTitle && <div className={styles.tableTitleWrapper}>
                        <h2><span><SafeInnerHTML html={tableTitle} allowRerender={true} /></span></h2>
                    </div>}

                    {(displayFilters || displayChartFilters) && //!tableQuickSearch &&
                        <NewFilters
                            tableFilters={tableFilters}
                            dict={dict[lang]}
                            callEndpoint={callEndpoint}
                            lang={lang}
                            chartLines={chartLines}
                            displayFilters={displayFilters}
                            currentBP={currentBP}
                            chartFilters={chartFilters}
                            displayChartFilters={displayChartFilters}
                            clearChartFilters={clearChartFilters}
                            updateChartFilters={updateChartFilters}
                            tableTitle={tableTitle}
                            alignRight={currentBP != 'mobile' && tableTitle}
                            performFiltering={performFiltering}
                            loading={loading}
                            fieldOptions={fieldOptions}
                            currentDQL={currentDQL}
                            currentSort={currentSort}
                            urlKey={urlKey}
                        />}

                    {/* ==== old filters ==== */}
                    {/* vv vv vv vvv vv vv vv */}
                    {tableQuickSearch && !displayFilters &&
                        <div className={styles.tableActions}>
                            {showSearch &&
                                <Input
                                    type='string'
                                    icon='search'
                                    searchOnEnter={true}
                                    defaultValue={searchValue}
                                    inputClassName={styles.quickSearchInput}
                                    placeholder={`${dict[lang].search}...`}
                                    onChange={value => {
                                        onSearch(value)
                                    }}
                                    onClear={() => {
                                        onSearch('')
                                    }}
                                    nomargin />
                            }
                        </div>}
                    {/* ^^ ^^ ^^ ^^^ ^^ ^^ ^^ */}
                    {/* ==== old filters ==== */}

                </div>
            }
        </React.Fragment>
    )
}

function NewFilters({ tableFilters, performFiltering, lang, dict, loading, fieldOptions, alignRight, currentBP, tableTitle,
    chartFilters, displayChartFilters, updateChartFilters, displayFilters, chartLines, clearChartFilters, callEndpoint, currentDQL, currentSort, urlKey }) {


    const defaultFilters = {
        sort: {
            field: null,
            direction: null // 'desc' or 'asc' 
        },
        filters: {}
    }

    // Функция для чтения фильтров из URL
    const getFiltersFromUrl = () => {
        if (!urlKey || typeof window === 'undefined') return null;

        const urlParams = new URLSearchParams(window.location.search);
        const filtersParam = urlParams.get(`filters_${urlKey}`);
        const sortParam = urlParams.get(`sort_${urlKey}`);

        let result = {};

        // Парсим filters (JSON) из URL
        if (filtersParam) {
            try {
                result.filters = JSON.parse(decodeURIComponent(filtersParam));
            } catch (e) {
                console.error('Failed to parse filters from URL:', e);
            }
        }

        // Парсим sort из URL
        if (sortParam && sortParam.includes(':')) {
            const [field, direction] = sortParam.split(':');
            result.sort = { field, direction };
        }

        return Object.keys(result).length > 0 ? result : null;
    };

    // Функция для сохранения фильтров в URL
    const saveFiltersToUrl = (filtersObj, sort) => {
        if (!urlKey || typeof window === 'undefined') return;

        const urlParams = new URLSearchParams(window.location.search);

        // Очищаем старый dql_ параметр если он есть (миграция со старой версии)
        urlParams.delete(`dql_${urlKey}`);

        // Сохраняем filters как JSON (только если есть хоть один фильтр)
        const hasFilters = filtersObj && Object.keys(filtersObj).length > 0 &&
            Object.keys(filtersObj).some(key => filtersObj[key].value || filtersObj[key].valueFrom || filtersObj[key].valueTo);

        if (hasFilters) {
            urlParams.set(`filters_${urlKey}`, encodeURIComponent(JSON.stringify(filtersObj)));
        } else {
            urlParams.delete(`filters_${urlKey}`);
        }

        // Сохраняем sort
        if (sort && sort.field) {
            urlParams.set(`sort_${urlKey}`, `${sort.field}:${sort.direction || 'asc'}`);
        } else {
            urlParams.delete(`sort_${urlKey}`);
        }

        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams.toString()}`);
    };

    // Функция для инициализации фильтров из текущих значений или URL
    const initializeFiltersFromCurrent = () => {
        let initialFilters = { ...defaultFilters }

        // Сначала пробуем загрузить из URL
        const urlFilters = getFiltersFromUrl();

        if (urlFilters) {
            if (urlFilters.filters) {
                initialFilters.filters = urlFilters.filters;
            }
            if (urlFilters.sort) {
                initialFilters.sort = urlFilters.sort;
            }
        }
        // Если в URL нет данных, пробуем currentSort из пропсов
        else if (currentSort) {
            if (typeof currentSort === 'string' && currentSort.trim()) {
                // Предполагаем формат типа "fieldName:asc" или "fieldName:desc"
                const sortParts = currentSort.split(':')
                if (sortParts.length === 2) {
                    initialFilters.sort = {
                        field: sortParts[0],
                        direction: sortParts[1]
                    }
                }
            } else if (typeof currentSort === 'object' && currentSort.field) {
                // Если это уже объект с field и direction (как в FpsCards)
                initialFilters.sort = {
                    field: currentSort.field,
                    direction: currentSort.direction
                }
            }
        }

        return initialFilters
    }

    const getInitialOpenAI = () => {
        // OpenAI не восстанавливается из URL (т.к. это отдельный режим фильтрации)
        return currentDQL || '';
    };

    const [filters, setFilters] = useState(initializeFiltersFromCurrent)
    const [openAI, setOpenAI] = useState(getInitialOpenAI)
    const [isInitialized, setIsInitialized] = useState(false)

    // Применяем фильтры из URL при первом рендере
    useEffect(() => {
        if (!isInitialized && urlKey) {
            const urlFilters = getFiltersFromUrl();
            if (urlFilters) {
                const filtersToApply = urlFilters.filters || {};
                const sortToApply = urlFilters.sort || {};

                // Применяем фильтры через performFiltering
                const hasFilters = Object.keys(filtersToApply).length > 0;
                if (hasFilters || sortToApply.field) {
                    const dql = composeDQL(filtersToApply);
                    performFiltering(dql, sortToApply);
                }
            }
            setIsInitialized(true);
        }
    }, [isInitialized, urlKey]);

    const saveFilters = (saveFilters) => {
        const dqlToSave = openAI ? openAI : composeDQL(saveFilters.filters);
        performFiltering(dqlToSave, saveFilters.sort)
        setFilters(saveFilters)
        // Сохраняем в URL если включено (только обычные фильтры, не openAI)
        if (!openAI) {
            saveFiltersToUrl(saveFilters.filters, saveFilters.sort)
        }
    }


    const saveAIFilters = (dql) => {
        console.log("saveAIFilters")
        console.log(dql)
        setOpenAI(dql)
        const dqlWithPrefix = dql ? ">> " + dql : '';
        performFiltering(dqlWithPrefix, filters.sort)
        // OpenAI фильтры не сохраняем в URL (это отдельный режим)
        // Если OpenAI пустой, очищаем URL
        if (!dql) {
            saveFiltersToUrl({}, filters.sort)
        }
        //setFilters(saveFilters)
    }

    const clearFilters = () => {
        saveFilters({ ...defaultFilters })
        saveAIFilters('')
        // Очищаем URL
        saveFiltersToUrl({}, {})
    }

    function composeDQL(filters) {
        console.log("composing DQL")
        // console.log(filters)
        console.log(tableFilters)
        function composeExpression(exp, fieldName) {
            if (exp.type == "string") {
                const operator = _.get(tableFilters, `filterFields.${fieldName}.exactMatch`) == "exact" ? " = " : " like "
                return "('" + fieldName + "'" + operator + "'" + exp.value + "')"
            }
            if (exp.type == "boolean") { return "('" + fieldName + "'" + ' = ' + "'" + exp.value + "')" }
            if (exp.type == "date") {
                if (exp.valueTo && exp.valueFrom) {
                    return "('" + fieldName + "'" + ' >= ' + "'" + exp.valueFrom.toISOString() + "' AND '"
                        + fieldName + "'" + ' <= ' + "'" + exp.valueTo.toISOString() + "')"
                }
                if (exp.valueFrom) {
                    return "('" + fieldName + "'" + ' >= ' + "'" + exp.valueFrom.toISOString() + "')"
                }
                if (exp.valueTo) {
                    return "('" + fieldName + "'" + ' <= ' + "'" + exp.valueTo.toISOString() + "')"
                }
            }
            if (exp.type == "number") {
                if (exp.valueTo && exp.valueFrom) {
                    return "('" + fieldName + "'" + ' >= ' + "'" + exp.valueFrom + "' AND '"
                        + fieldName + "'" + ' <= ' + "'" + exp.valueTo + "')"
                }
                if (exp.valueFrom) {
                    return "('" + fieldName + "'" + ' >= ' + "'" + exp.valueFrom + "')"
                }
                if (exp.valueTo) {
                    return "('" + fieldName + "'" + ' <= ' + "'" + exp.valueTo + "')"
                }
            }
            if (exp.type == "multiOptions") {
                const operator = _.get(tableFilters, `filterFields.${fieldName}.dataType`) == "link" ? ' = ' : ' like '
                return "(" + Object.keys(exp.value).map(i => { return "('" + fieldName + `'${operator}'` + i + "')" }).join(" OR ") + ")"
            }
        }
        return (Object.keys(filters || {}) || []).filter(i => {
            return filters[i].value || filters[i].valueFrom || filters[i].valueTo
        }).map(i => { return composeExpression(filters[i], i) }).join(' AND ')
    }
    const filtersWrapper = useRef(null);

    //currentBP = 'mobile'
    const showFilters = (tableFilters && tableFilters.filterFields && Object.keys(tableFilters.filterFields || {}).filter(i => tableFilters.filterFields[i].active)) || []

    const getdefaultChartFilters = () => {
        const defaultFilters = {};
        (chartLines || []).forEach(i => {
            _.set(defaultFilters, [i.line_data], true)
        })
        return defaultFilters
    }

    const defaultChartFilters = getdefaultChartFilters()

    return <div ref={filtersWrapper} className={styles.newFilters}>
        <ActionPanel alignRight={alignRight} margin={currentBP == 'mobile' && tableTitle ? { top: 8, bottom: 0 } : null}>
            {_.get(tableFilters, "filteringType") == "openai" && <div>
                <OpenAI
                    saveAIFilters={saveAIFilters}
                    openAI={openAI}
                    alignRight={alignRight}
                />
            </div>}
            {displayChartFilters && <React.Fragment>
                <FilterField
                    currentBP={currentBP}
                    alignRight={alignRight}
                    chartFilters={chartFilters}
                    active={JSON.stringify(chartFilters) !== JSON.stringify(defaultChartFilters)}
                    dict={dict}
                    lang={lang}
                    chartLines={chartLines}
                    saveChartFilters={updateChartFilters}
                    filters={filters}
                    field={{
                        name: _.get(dict, 'chartLines') || 'Show chart lines',
                        type: 'chartLines',
                        options: (chartLines || []).map(i => {
                            return {
                                value: i.line_data,
                                label: <span className={styles.pupka}><span
                                    style={{ backgroundColor: i.color }}
                                    className={styles.pipka} /> {i.line_label || i.line_data}</span>
                            }
                        })
                    }}
                />
                <Button icon='filterClear' disabled={JSON.stringify(chartFilters) == JSON.stringify(defaultChartFilters)}
                    onClick={clearChartFilters} />
            </React.Fragment>}

            {tableFilters && tableFilters.isFiltering && tableFilters.filterFields
                && _.get(tableFilters, "filteringType") !== "openai" &&
                showFilters.map(filterField => <FilterField
                    active={_.get(filters, `filters[${filterField}].value`) ||
                        _.get(filters, `filters[${filterField}].valueFrom`) ||
                        _.get(filters, `filters[${filterField}].valueTo`)}
                    filters={filters}
                    saveFilters={saveFilters}
                    currentBP={currentBP}
                    alignRight={alignRight}
                    lang={lang}
                    callEndpoint={callEndpoint}
                    dict={dict}
                    key={filterField}
                    field={{
                        id: filterField,
                        name: tableFilters.filterFields[filterField].name,
                        type: tableFilters.filterFields[filterField].dataType,
                        operator: _.get(tableFilters, `filterFields.${filterField}.exactMatch`) == "exact" ? "exact match" : "like",
                        textsearch: tableFilters.filterFields[filterField].textsearch,
                        format: tableFilters.filterFields[filterField].format,
                        endpoint: tableFilters.filterFields[filterField].endpoint,
                        formatOptions: tableFilters.filterFields[filterField].formatOptions,
                        options: (_.get(tableFilters, `filterFields[${filterField}].linkDirectory`) || [])
                            .map(i => { return { value: i.id, label: i.text } })
                    }}
                />)}

            {tableFilters.isSorting &&
                <FilterField
                    active={_.get(filters, "sort.field")}
                    filters={filters}
                    lang={lang}
                    dict={dict}
                    currentBP={currentBP}
                    alignRight={alignRight}
                    saveFilters={saveFilters}
                    fieldOptions={fieldOptions}
                    openAI={openAI}
                    field={{
                        name: _.get(dict, 'sort') || 'Sort!',
                        type: 'sort',
                    }}
                />}
            {displayFilters && <Button icon='filterClear' disabled={JSON.stringify(filters) == JSON.stringify(defaultFilters) && !openAI} onClick={clearFilters} />}
        </ActionPanel>
    </div>
}

function OpenAI({ saveAIFilters, openAI, alignRight }) {

    const [value, setValue] = useState(openAI)

    useEffect(() => { value != openAI && setValue(openAI) }, [openAI])

    const saveValue = val => {
        setValue(val)
        saveAIFilters(val)
    }

    return <div style={{ marginRight: alignRight ? 0 : 6 }}>
        <Input
            type='string'
            defaultValue={value}
            onChange={setValue}
            onPressEnter={() => value && saveAIFilters(value)}
            onBlur={() => value && saveAIFilters(value)}
            onClear={() => saveAIFilters('')}
            nomargin
            autoWidth minWidth={300} maxWidth={600}
            className={!value ? styles.openAI_input : null}
        />
    </div>
}

function FilterField({ field, active, fieldOptions, openAI, filters, saveFilters, dict, alignRight, currentBP,
    saveChartFilters, chartFilters, lang, callEndpoint }) {

    const filterWrapper = useRef(null);

    const [left, setLeft] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        if (filterWrapper.current && filterWrapper.current.getBoundingClientRect().left != left) {
            setLeft(filterWrapper.current.getBoundingClientRect().left)
        }
    }, [filterWrapper, currentBP])

    const renderFilterName = (field) => {

        if ((_.get(field, 'type') == 'link' || _.get(field, 'type') == 'arrayLink')
            && _.get(field, 'textsearch') !== 'fulltext') return <div className={styles.newFilterName}>
                {_.get(field, 'name')}
                {_.get(filters, `filters[${field.id}].value`) && <div className={styles.newFilterCounter}>
                    {Object.keys(_.get(filters, `filters[${field.id}].value`)).length}
                </div>}
            </div>

        if (_.get(field, 'type') == 'sort') return <div className='icon icon-sort' style={{ marginLeft: -8 }}>
            {_.get(field, 'name')}
        </div>

        return <div>{_.get(field, 'name')}</div>
    }

    const shiftDropdown = -1 * (left - 6)

    const refreshOptions = (finish, filter, value, resetValue) => {
        let reqParams = {}
        reqParams = { ...reqParams, pageSize: 10 }
        reqParams = value && value.length > 0 ? { ...reqParams, _value: value.key || value } : reqParams
        reqParams = filter ? { ...reqParams, _filter: filter } : reqParams

        //setCurrentParams(params)
        callEndpoint(_.get(field, 'endpoint'), reqParams, finish, data => {
        }, err => {
            setError(err.msg)
        })
    }

    // console.log("filters")
    // console.log(filters)

    return <div ref={filterWrapper}>
        <ButtonDropDown key={_.get(field, 'id')} lockDD={true}
            currentBP={currentBP}
            rightSide={alignRight || (_.get(field, 'type') == 'sort' && shiftDropdown < -300 && currentBP !== 'mobile')}
            shiftDropdown={currentBP == 'mobile' ? shiftDropdown : 0}
            active={active}
            title={renderFilterName(field)} overflowVisible>
            <div className={styles.filterWrapper}>

                {(_.get(field, 'type') == 'chartLines') &&
                    <Input type="checkboxGroup"
                        nomargin
                        nowrap
                        onChange={saveChartFilters}
                        defaultValue={chartFilters}
                        options={field.options || []}
                    />
                }

                {(_.get(field, 'type') == 'link' || _.get(field, 'type') == 'arrayLink') &&
                    _.get(field, 'textsearch') !== 'fulltext' &&
                    _.get(field, 'textsearch') !== "endpoint" &&
                    <Input type="checkboxGroup"
                        nomargin
                        nowrap
                        defaultValue={_.get(filters, `filters[${field.id}].value`)}
                        onChange={value => {
                            if (JSON.stringify(value) == '{}') {
                                const newFilters = { ...filters };
                                _.set(newFilters, `filters[${field.id}].value`, null);
                                saveFilters(newFilters);
                            } else {
                                const newFilters = { ...filters };
                                _.set(newFilters, `filters[${field.id}].value`, value);
                                _.set(newFilters, `filters[${field.id}].type`, 'multiOptions');
                                saveFilters(newFilters);
                            }
                        }}
                        clearOption
                        options={field.options || []}
                    />
                }

                {(_.get(field, 'type') == 'link' || _.get(field, 'type') == 'arrayLink') &&
                    _.get(field, 'textsearch') == "endpoint" &&
                    <div>
                        {!_.get(field, 'endpoint') ? <div>Endpoint is not configured</div> : <div>
                            <Input type="dinamicMultiSelect"
                                width={250}
                                nomargin
                                defaultValue={_.keys(_.get(filters, `filters[${field.id}].value`))}
                                onChange={value => {
                                    const newFilters = { ...filters };
                                    if (value && value.length) {
                                        _.set(newFilters, `filters[${field.id}].value`, _.zipObject(value, _.fill(Array(value), true)));
                                        _.set(newFilters, `filters[${field.id}].type`, 'multiOptions');
                                    }
                                    else {
                                        _.set(newFilters, `filters[${field.id}].value`, null);
                                        saveFilters(newFilters);
                                    }
                                    saveFilters(newFilters);
                                }}
                                locale={lang}
                                onLoad={refreshOptions}
                            />
                        </div>}
                        {error && <Hint margin={{ top: 10, bottom: 0 }} closable error onClose={() => setError("")}>
                            {error}
                        </Hint>}

                    </div>
                    // <Input type="checkboxGroup"
                    //     nomargin
                    //     nowrap
                    //     defaultValue={_.get(filters, `filters[${field.id}].value`)}
                    //     onChange={value => {
                    //         if (JSON.stringify(value) == '{}') {
                    //             const newFilters = { ...filters };
                    //             _.set(newFilters, `filters[${field.id}].value`, null);
                    //             saveFilters(newFilters);
                    //         } else {
                    //             const newFilters = { ...filters };
                    //             _.set(newFilters, `filters[${field.id}].value`, value);
                    //             _.set(newFilters, `filters[${field.id}].type`, 'multiOptions');
                    //             saveFilters(newFilters);
                    //         }
                    //     }}
                    //     clearOption
                    //     options={field.options || []}
                    // />
                }

                {(_.get(field, 'type') == 'string' || _.get(field, 'type') == 'array' || _.get(field, 'type') == 'id' ||
                    _.get(field, 'textsearch') == 'fulltext') &&
                    <Input type="string"
                        nomargin
                        placeholder={field.operator || 'like'}
                        width={220}
                        defaultValue={_.get(filters, `filters[${field.id}].value`)}
                        onChange={value => {
                            const newFilters = { ...filters };
                            _.set(newFilters, `filters[${field.id}].value`, value);
                            _.set(newFilters, `filters[${field.id}].type`, 'string');
                            saveFilters(newFilters);
                        }}
                        icon='search'
                    />
                }

                {_.get(field, 'type') == 'boolean' && <Input type='radio'
                    options={[
                        { value: 'true', label: !field.formatOptions ? 'true' : field.formatOptions.booleanOptions && field.formatOptions.booleanOptions[0] ? field.formatOptions.booleanOptions[0] : 'true' },
                        { value: 'false', label: !field.formatOptions ? 'false' : field.formatOptions.booleanOptions && field.formatOptions.booleanOptions[1] ? field.formatOptions.booleanOptions[1] : 'false' }
                    ]}
                    nomargin
                    width={150}
                    onChange={value => {
                        const newFilters = { ...filters };
                        _.set(newFilters, `filters[${field.id}].value`, value);
                        _.set(newFilters, `filters[${field.id}].type`, 'boolean');
                        saveFilters(newFilters);
                    }}
                    defaultValue={_.get(filters, `filters[${field.id}].value`)}
                />}

                {(_.get(field, 'type') == 'sort') &&
                    <div className={styles.newFilterSort}>
                        <Input type="select"
                            nomargin
                            defaultValue={_.get(filters, 'sort.field')}
                            placeholder={dict.sortField} //'Sort field'
                            width={220}
                            //displayKey
                            options={fieldOptions}
                            icon='database'
                            onChange={value => {
                                const newFilters = { ...filters };
                                _.set(newFilters, 'sort.field', value);
                                if (value && !_.get(filters, 'sort.direction')) {
                                    _.set(newFilters, 'sort.direction', 'desc');
                                }
                                saveFilters(newFilters);
                            }}
                        />
                        <div className={`icon icon-arrowDown ${styles.sortDirection} ${_.get(filters, 'sort.direction') == 'desc' ? styles.active : ''}`}
                            onClick={() => {
                                const newFilters = { ...filters };
                                _.set(newFilters, 'sort.direction', 'desc');
                                saveFilters(newFilters);
                            }} />
                        <div className={`icon icon-arrowUp ${styles.sortDirection} ${_.get(filters, 'sort.direction') == 'asc' ? styles.active : ''}`}
                            onClick={() => {
                                const newFilters = { ...filters };
                                _.set(newFilters, 'sort.direction', 'asc');
                                saveFilters(newFilters);
                            }} />
                        <div className={`icon icon-ban ${styles.sortDirection}`}
                            onClick={() => {
                                const newFilters = { ...filters };
                                _.set(newFilters, 'sort.field', null);
                                _.set(newFilters, 'sort.direction', null);
                                saveFilters(newFilters);
                            }}
                        />
                    </div>
                }

                {(_.get(field, 'type') == 'number' || _.get(field, 'type') == 'decimal') &&
                    <div>
                        <Input type="decimal"
                            placeholder={_.get(dict, 'moreThan') || 'greater than'}
                            defaultValue={_.get(filters, `filters[${field.id}].valueFrom`)}
                            onChange={value => {
                                const newFilters = { ...filters };
                                _.set(newFilters, `filters[${field.id}].valueFrom`, value);
                                _.set(newFilters, `filters[${field.id}].type`, 'number');
                                saveFilters(newFilters);
                            }}
                            width={220}
                            icon='forward'
                        />
                        <Input type="decimal"
                            placeholder={_.get(dict, 'lessThan') || 'less than'}
                            defaultValue={_.get(filters, `filters[${field.id}].valueTo`)}
                            onChange={value => {
                                const newFilters = { ...filters };
                                _.set(newFilters, `filters[${field.id}].valueTo`, value);
                                _.set(newFilters, `filters[${field.id}].type`, 'number');
                                saveFilters(newFilters);
                            }}
                            width={220}
                            nomargin
                            icon='back'
                        />
                    </div>
                }

                {(_.get(field, 'type') == 'date') &&
                    <div>
                        <Input type='select' smallSelect
                            locale={lang}
                            width={220}
                            options={[
                                { key: 'today', value: _.get(dict, 'today') },
                                { key: 'yesterday', value: _.get(dict, 'yesterday') },
                                { key: 'lastWeek', value: _.get(dict, 'lastWeek') },
                                { key: 'last2Weeks', value: _.get(dict, 'last2Weeks') },
                                { key: 'lastMonth', value: _.get(dict, 'lastMonth') },
                                { key: 'tomorrow', value: _.get(dict, 'tomorrow') },
                                { key: 'nextWeek', value: _.get(dict, 'nextWeek') },
                                { key: 'next2Weeks', value: _.get(dict, 'next2Weeks') },
                                { key: 'nextMonth', value: _.get(dict, 'nextMonth') },
                            ]}
                            onChange={value => {
                                const newFilters = { ...filters };
                                let valueFrom = null
                                let valueTo = null
                                switch (value) {
                                    case 'yesterday':
                                        valueFrom = moment(now).startOf('day')
                                        valueTo = moment(now).endOf('day')
                                        break;
                                    case 'yesterday':
                                        valueFrom = moment().add(-1, 'day')
                                        valueTo = moment()
                                        break;
                                    case 'lastWeek':
                                        valueFrom = moment().add(-1, 'week')
                                        valueTo = moment()
                                        break;
                                    case 'last2Weeks':
                                        valueFrom = moment().add(-2, 'weeks')
                                        valueTo = moment()
                                        break;
                                    case 'lastMonth':
                                        valueFrom = moment().add(-1, 'month')
                                        valueTo = moment()
                                        break;
                                    case 'tomorrow':
                                        valueFrom = moment()
                                        valueTo = moment().add(1, 'day')
                                        break;
                                    case 'nextWeek':
                                        valueFrom = moment()
                                        valueTo = moment().add(1, 'week')
                                        break;
                                    case 'next2Weeks':
                                        valueFrom = moment()
                                        valueTo = moment().add(2, 'weeks')
                                        break;
                                    case 'nextMonth':
                                        valueFrom = moment()
                                        valueTo = moment().add(1, 'month')
                                        break;
                                    default:
                                        break;
                                }
                                _.set(newFilters, `filters[${field.id}].valueFrom`, valueFrom);
                                _.set(newFilters, `filters[${field.id}].valueTo`, valueTo);
                                _.set(newFilters, `filters[${field.id}].type`, 'date');
                                saveFilters(newFilters);
                            }}
                        />
                        <div style={{ display: 'none' }} className={`${styles.newFilterDateAs} DD_Table_NewFilters_Dates`}>
                            <a onClick={e => {
                                e.preventDefault()
                                const newFilters = { ...filters };
                                let valueFrom = moment().add(-7, 'days')
                                let valueTo = moment()
                                _.set(newFilters, `filters[${field.id}].valueFrom`, valueFrom);
                                _.set(newFilters, `filters[${field.id}].valueTo`, valueTo);
                                _.set(newFilters, `filters[${field.id}].type`, 'date');
                                saveFilters(newFilters);
                            }}>{_.get(dict, 'lastWeek')}</a>
                            <a onClick={e => {
                                e.preventDefault()
                                const newFilters = { ...filters };
                                let valueFrom = moment().add(-2, 'weeks')
                                let valueTo = moment()
                                _.set(newFilters, `filters[${field.id}].valueFrom`, valueFrom);
                                _.set(newFilters, `filters[${field.id}].valueTo`, valueTo);
                                _.set(newFilters, `filters[${field.id}].type`, 'date');
                                saveFilters(newFilters);
                            }}>{_.get(dict, 'last2Weeks')}</a>
                            <a onClick={e => {
                                e.preventDefault()
                                const newFilters = { ...filters };
                                let valueFrom = moment().add(-1, 'month')
                                let valueTo = moment()
                                _.set(newFilters, `filters[${field.id}].valueFrom`, valueFrom);
                                _.set(newFilters, `filters[${field.id}].valueTo`, valueTo);
                                _.set(newFilters, `filters[${field.id}].type`, 'date');
                                saveFilters(newFilters);
                            }}>{_.get(dict, 'lastMonth')}</a>
                        </div>
                        <Input type="date"
                            label={_.get(dict, 'from') || 'From'}
                            defaultValue={_.get(filters, `filters[${field.id}].valueFrom`)}
                            timeConstraints={field.formatOptions && field.formatOptions.timeConstraints}
                            dateFormat={field.formatOptions ? field.formatOptions.dateFormat : 'DD/MM/Y '}
                            timeFormat={field.formatOptions ? field.formatOptions.timeFormat : 'HH:mm'}
                            locale={field.formatOptions ? field.formatOptions.dateLocale : 'en-gb'}
                            utc={field.formatOptions ? field.formatOptions.isUTC == 'true' : true}
                            validWeekDays={field.formatOptions ? field.formatOptions.validWeekDays : null}
                            onChange={value => {
                                const newFilters = { ...filters };
                                _.set(newFilters, `filters[${field.id}].valueFrom`, value);
                                _.set(newFilters, `filters[${field.id}].type`, 'date');
                                saveFilters(newFilters);
                            }}
                            width={220}
                        />
                        <Input type="date"
                            nomargin
                            defaultValue={_.get(filters, `filters[${field.id}].valueTo`)}
                            timeConstraints={field.formatOptions && field.formatOptions.timeConstraints}
                            dateFormat={field.formatOptions ? field.formatOptions.dateFormat : 'DD/MM/Y '}
                            timeFormat={field.formatOptions ? field.formatOptions.timeFormat : 'HH:mm'}
                            locale={field.formatOptions ? field.formatOptions.dateLocale : 'en-gb'}
                            utc={field.formatOptions ? field.formatOptions.isUTC == 'true' : true}
                            validWeekDays={field.formatOptions ? field.formatOptions.validWeekDays : null}
                            onChange={value => {
                                const newFilters = { ...filters };
                                _.set(newFilters, `filters[${field.id}].valueTo`, value);
                                _.set(newFilters, `filters[${field.id}].type`, 'date');
                                saveFilters(newFilters);
                            }}
                            label={_.get(dict, 'to') || 'To'}
                            width={220}
                        />
                    </div>
                }
            </div>
        </ButtonDropDown>
    </div>
}