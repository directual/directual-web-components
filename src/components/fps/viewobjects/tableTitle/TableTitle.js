import React, { useState, useRef, useEffect } from 'react'
import styles from '../table/table.module.css'
import Button, { ButtonDropDown } from '../../button/button'
import Filters from '../filters/Filters'
import Input from '../../dataentry/input/input'
import Loader from '../../loader/loader'
import ActionPanel from '../../actionspanel/actionspanel'
import { FormSection } from '../../dataentry/form/FpsForm'
import _ from 'lodash'

export function TableTitle({ tableQuickSearch, search, tableTitle, tableFilters, onFilter, currentDQL,
    onSearch, loading, searchValue, currentBP, displayFilters, lang, dict, performFiltering, params }) {
    const [showSearch, setShowSearch] = useState(search)
    //const [showFilters, setShowFilters] = useState(false)

    const fields = _.get(params, 'data.readFields') || []

    const fieldOptions = fields.map(i => {
        return {
            key: i.fieldSysName,
            value: i.name
        }
    })

    //currentBP = 'mobile'

    return (
        <React.Fragment>
            {(displayFilters || tableQuickSearch) &&
                <div className={`${styles.tableTitle} ${styles[currentBP]}`}>
                    {tableTitle && <div className={styles.tableTitleWrapper}>
                        <h2><span>{tableTitle}</span></h2>
                    </div>}

                    {loading && searchValue && <div className={styles.subtitle}><Loader> {_.get(dict[lang], 'loading') || "Loading..."}</Loader></div>}
                    {searchValue && !loading &&
                        <div className={styles.titleSearch}>
                            <span>{dict[lang].searching}: <strong>{searchValue}</strong></span>
                        </div>
                    }

                    {displayFilters && //!tableQuickSearch &&
                        <NewFilters
                            tableFilters={tableFilters}
                            dict={dict[lang]}
                            currentBP={currentBP}
                            tableTitle={tableTitle}
                            alignRight={currentBP != 'mobile' && tableTitle}
                            performFiltering={performFiltering}
                            loading={loading}
                            fieldOptions={fieldOptions}
                        />}

                    {/* ==== old filters ==== */}
                    {/* vv vv vv vvv vv vv vv */}
                    {tableQuickSearch && !displayFilters &&
                        <div className={styles.tableActions}>
                            {/* фильтры в 0.1 версии спрячем */}
                            {/* <Button
                            icon={`${!showFilters ? 'filter' : 'filterFill'}`}
                            onClick={() => setShowFilters(!showFilters)}
                        >{`${!showFilters ? 'Show filters' : 'Hide filters'}`}</Button> */}

                            {showSearch &&
                                <div className={styles.tableQuickSearchField}>
                                    <Input
                                        type='search'
                                        searchOnEnter={true}
                                        defaultValue={searchValue}
                                        inputClassName={styles.quickSearchInput}
                                        placeholder={`${dict[lang].search}...`}
                                        //debug
                                        //width={500}
                                        onPressEnter={value => {
                                            onSearch(value)
                                        }}
                                        onClear={() => {
                                            onSearch('')
                                            //setShowSearch(false)
                                        }}
                                        nomargin />
                                </div>
                                // :
                                // <Button icon='search'
                                //     onClick={() => setShowSearch(true)}></Button>
                            }
                        </div>}
                    {/* ^^ ^^ ^^ ^^^ ^^ ^^ ^^ */}
                    {/* ==== old filters ==== */}

                </div>
            }
        </React.Fragment>
    )
}

function NewFilters({ tableFilters, performFiltering, dict, loading, fieldOptions, alignRight, currentBP, tableTitle }) {


    const defaultFilters = {
        sort: {
            field: null,
            direction: null // 'desc' or 'asc' 
        },
        filters: {}
    }

    const [filters, setFilters] = useState(defaultFilters)

    const saveFilters = (saveFilters) => {
        performFiltering(composeDQL(saveFilters.filters), saveFilters.sort)
        setFilters(saveFilters)
    }

    const clearFilters = () => {
        saveFilters({ ...defaultFilters })
    }

    function composeDQL(filters) {
        // console.log("composing DQL")
        // console.log(filters)
        function composeExpression(exp, fieldName) {
            if (exp.type == "string") { return "('" + fieldName + "'" + ' like ' + "'" + exp.value + "')" }
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
                return "(" + Object.keys(exp.value).map(i => { return "('" + fieldName + "' like '" + i + "')" }).join(" OR ") + ")"
            }
        }
        return (Object.keys(filters || {}) || []).filter(i => {
            return filters[i].value || filters[i].valueFrom || filters[i].valueTo
        }).map(i => { return composeExpression(filters[i], i) }).join(' AND ')
    }
    const filtersWrapper = useRef(null);

    //currentBP = 'mobile'

    return <div ref={filtersWrapper} className={styles.newFilters}>
        <ActionPanel alignRight={alignRight} margin={currentBP == 'mobile' && tableTitle ? { top: 8, bottom: 0 } : null}>
            {tableFilters && tableFilters.isFiltering && tableFilters.filterFields && (Object.keys(tableFilters.filterFields) || [])
                .map(filterField => <FilterField
                    active={_.get(filters, `filters[${filterField}].value`) ||
                        _.get(filters, `filters[${filterField}].valueFrom`) ||
                        _.get(filters, `filters[${filterField}].valueTo`)}
                    filters={filters}
                    saveFilters={saveFilters}
                    currentBP={currentBP}
                    dict={dict}
                    key={filterField}
                    field={{
                        id: filterField,
                        name: tableFilters.filterFields[filterField].name,
                        type: tableFilters.filterFields[filterField].dataType,
                        textsearch: tableFilters.filterFields[filterField].textsearch,
                        format: tableFilters.filterFields[filterField].format,
                        formatOptions: tableFilters.filterFields[filterField].formatOptions,
                        options: (_.get(tableFilters, `filterFields[${filterField}].linkDirectory`) || [])
                            .map(i => { return { value: i.id, label: i.text } })
                    }}
                />)}

            {tableFilters.isSorting &&
                <FilterField
                    active={filters.sort.field}
                    filters={filters}
                    dict={dict}
                    currentBP={currentBP}
                    alignRight={alignRight}
                    saveFilters={saveFilters}
                    fieldOptions={fieldOptions}
                    field={{
                        name: _.get(dict, 'sort') || 'Sort!',
                        type: 'sort',
                    }}
                />}
            <Button icon='filterClear' disabled={JSON.stringify(filters) == JSON.stringify(defaultFilters)} onClick={clearFilters} />
        </ActionPanel>
    </div>
}

function FilterField({ field, active, fieldOptions, filters, saveFilters, dict, alignRight, currentBP }) {

    const filterWrapper = useRef(null);

    const [left, setLeft] = useState(0)

    useEffect(() => {
        if (filterWrapper.current && filterWrapper.current.getBoundingClientRect().left != left) {
            setLeft(filterWrapper.current.getBoundingClientRect().left)
        }
    }, [filterWrapper])

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

    const shiftDropdown = currentBP == 'mobile' ? (-1 * (left - 6)) : 0

    return <div ref={filterWrapper}>
        <ButtonDropDown key={_.get(field, 'id')} lockDD={true}
            currentBP={currentBP}
            rightSide={alignRight || (_.get(field, 'type') == 'sort' && shiftDropdown > 300 && currentBP !== 'mobile')}
            shiftDropdown={shiftDropdown}
            active={active}
            title={renderFilterName(field)} overflowVisible>
            <div className={styles.filterWrapper}>
                {(_.get(field, 'type') == 'link' || _.get(field, 'type') == 'arrayLink') &&
                    _.get(field, 'textsearch') !== 'fulltext' &&
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

                {(_.get(field, 'type') == 'string' || _.get(field, 'type') == 'array' || _.get(field, 'type') == 'id' ||
                    _.get(field, 'textsearch') == 'fulltext') &&
                    <Input type="string"
                        nomargin
                        placeholder='like'
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
                        _.set(newFilters, `filters[${field.id}].type`, 'string');
                        saveFilters(newFilters);
                    }}
                    defaultValue={_.get(filters, `filters[${field.id}].value`)}
                />}

                {(_.get(field, 'type') == 'sort') &&
                    <div className={styles.newFilterSort}>
                        <Input type="select"
                            nomargin
                            defaultValue={_.get(filters, 'sort.field')}
                            placeholder='Sort field'
                            width={220}
                            displayKey
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
                        <dic className={`icon icon-arrowDown ${styles.sortDirection} ${_.get(filters, 'sort.direction') == 'desc' ? styles.active : ''}`}
                            onClick={() => {
                                const newFilters = { ...filters };
                                _.set(newFilters, 'sort.direction', 'desc');
                                saveFilters(newFilters);
                            }} />
                        <dic className={`icon icon-arrowUp ${styles.sortDirection} ${_.get(filters, 'sort.direction') == 'asc' ? styles.active : ''}`}
                            onClick={() => {
                                const newFilters = { ...filters };
                                _.set(newFilters, 'sort.direction', 'asc');
                                saveFilters(newFilters);
                            }} />
                        <dic className={`icon icon-ban ${styles.sortDirection}`}
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