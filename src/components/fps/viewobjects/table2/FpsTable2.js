import React, { useState, useEffect, useMemo } from 'react'
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender } from '@tanstack/react-table'
import styles from './table2.module.css'
import icon from './../../../../icons/fps-table.svg'
import { ComponentWrapper } from '../../wrapper/wrapper'
import { dict } from '../../locale'
import Hint from '../../hint/hint'
import Loader from '../../loader/loader'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'

// Компонент для рендеринга ячеек
const CellRenderer = ({ getValue, row, column, table }) => {
    const value = getValue()
    const fieldDetails = table.options.meta?.fieldDetails?.[column.id]
    const tableParams = table.options.meta?.tableParams?.[column.id]
    
    if (!fieldDetails || !fieldDetails.dataType) {
        return <div className={styles.cellValue}>
            {typeof value === 'object' ? JSON.stringify(value) : value}
        </div>
    }

    // Обработка дат
    if (fieldDetails.dataType === 'date') {
        const formatOptions = (fieldDetails.formatOptions) || {}
        return (
            <div className={styles.cellValue}>
                {!value ? null : formatOptions.isUTC === 'true' ?
                    moment.utc(value).locale(formatOptions.dateLocale || 'en-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
                    :
                    moment(value).locale(formatOptions.dateLocale || 'en-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')}
            </div>
        )
    }

    // Обработка чисел
    if (fieldDetails.dataType === 'number' || fieldDetails.dataType === 'decimal') {
        const numberWithSpaces = (x) => {
            if (!x && x !== 0) return "0"
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }
        return (
            <div className={`${styles.cellValue} ${styles.number}`}>
                {numberWithSpaces(value)}
            </div>
        )
    }

    // Обработка булевых значений
    if (fieldDetails.dataType === 'boolean') {
        const formatOptions = fieldDetails.formatOptions || {}
        const hideIcons = _.get(formatOptions, 'hideStandardBooleanIcons')
        const classDone = hideIcons ? '' : 'icon icon-done'
        const classBan = hideIcons ? '' : 'icon icon-ban'
        
        if (formatOptions.booleanOptions && formatOptions.booleanOptions.length > 0) {
            return (
                <div className={`${styles.cellValue} ${styles.boolean}`}>
                    {value === true && <span className={classDone}>{formatOptions.booleanOptions[0]}</span>}
                    {value === false && <span className={classBan}>{formatOptions.booleanOptions[1]}</span>}
                </div>
            )
        } else {
            return (
                <div className={`${styles.cellValue} ${styles.boolean}`}>
                    {value === true && <span className={classDone}>true</span>}
                    {value === false && <span className={classBan}>false</span>}
                </div>
            )
        }
    }

    // Обработка ссылок
    if (fieldDetails.dataType === 'link') {
        const getLinkName = (value) => {
            if (typeof value === 'object' && value.title) {
                return value.title
            }
            return typeof value === 'object' ? JSON.stringify(value) : value
        }
        
        return (
            <div className={`${styles.cellValue} ${styles.linkWrapper}`}>
                <div className={styles.linkText}>
                    {getLinkName(value)}
                </div>
            </div>
        )
    }

    // Обработка файлов/изображений
    if (fieldDetails.dataType === 'file' && value && tableParams?.fileImage) {
        return (
            <div className={styles.cardImage}
                style={{
                    width: tableParams.fileImageSize || 80,
                    height: tableParams.fileImageSize || 80,
                    backgroundImage: Array.isArray(value) && value.length ? 
                        `url(${value[0]})` : 
                        `url(${(value || '').split(",")[0] || ''})`,
                    borderRadius: tableParams.fileImageFormat === 'circle' ? 
                        (tableParams.fileImageSize || 80) : 0
                }} 
            />
        )
    }

    // Дефолтный рендер
    return (
        <div className={styles.cellValue}>
            {typeof value === 'object' ? JSON.stringify(value) : value}
        </div>
    )
}

function FpsTable2({ 
    auth, 
    data, 
    onEvent, 
    id, 
    currentBP, 
    locale, 
    handleRoute,
    enableSearch = true,
    enableSorting = true
}) {
    if (!data) data = {}

    const [currentData, setCurrentData] = useState(data)
    const [loading, setLoading] = useState(false)
    const [sorting, setSorting] = useState([])
    const [globalFilter, setGlobalFilter] = useState('')

    const lang = locale ? locale.length === 3 ? locale : 'ENG' : 'ENG'

    useEffect(() => {
        setCurrentData(data)
        setLoading(false)
    }, [data])

    // Подготовка данных для таблицы
    const tableData = useMemo(() => {
        return currentData.data || []
    }, [currentData.data])

    // Подготовка колонок
    const columns = useMemo(() => {
        const tableParams = currentData.params?.tableParams
        const fieldDetails = currentData.params?.data?.fields || {}
        
        if (!tableParams?.fieldOrder) return []

        return tableParams.fieldOrder
            .filter(fieldId => tableParams.fieldParams?.[fieldId]?.include)
            .map(fieldId => ({
                id: fieldId,
                accessorKey: fieldId,
                header: tableParams.fields?.[fieldId]?.content || fieldId,
                cell: CellRenderer,
                enableSorting: enableSorting,
                enableGlobalFilter: enableSearch,
            }))
    }, [currentData.params])

    // Инициализация таблицы
    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
        getFilteredRowModel: enableSearch ? getFilteredRowModel() : undefined,
        state: {
            sorting: enableSorting ? sorting : [],
            globalFilter: enableSearch ? globalFilter : '',
        },
        onSortingChange: enableSorting ? setSorting : undefined,
        onGlobalFilterChange: enableSearch ? setGlobalFilter : undefined,
        enableSorting: enableSorting,
        enableGlobalFilter: enableSearch,
        meta: {
            fieldDetails: currentData.params?.data?.fields || {},
            tableParams: currentData.params?.tableParams?.fieldParams || {},
        },
    })

    // Обработчик клика по строке
    const handleRowClick = (row) => {
        const rowData = row.original
        const params = currentData.params?.data || {}
        
        if (params.cardsOrPage === 'page') {
            const pathField = params.pathField || "id"
            const additionalPath = params.additionalPath ? params.additionalPath + '/' : ''
            handleRoute && handleRoute(`./${additionalPath}${encodeURI(rowData[pathField])}`)()
        } else if (params.cardsOrPage === 'anotherPage') {
            const pathField = params.pathField || "id"
            handleRoute && handleRoute(`/${params.anotherPage}/${encodeURI(rowData[pathField])}`)()
        } else if (params.cardsOrPage !== 'disable') {
            // Здесь можно добавить открытие модального окна
            console.log('Открыть объект:', rowData)
        }
    }

    if (!currentData || !currentData.params) {
        return <div />
    }

    if (currentData.error) {
        return (
            <ComponentWrapper currentBP={currentBP}>
                <SomethingWentWrong
                    icon='warning'
                    message={currentData.error}
                />
            </ComponentWrapper>
        )
    }

    if (tableData.length === 0) {
        return (
            <ComponentWrapper currentBP={currentBP}>
                <SomethingWentWrong
                    icon='ban'
                    message={globalFilter ? 
                        `${_.get(dict[lang], 'table.noDataFound')} ${globalFilter}` : 
                        _.get(dict[lang], 'table.noData')}
                />
            </ComponentWrapper>
        )
    }

    const tableCellPadding = _.get(currentData.params, "tableCellPadding") || 12

    return (
        <ComponentWrapper currentBP={currentBP}>
            {currentData.writeError && currentData.writeError !== 'dql is not allowed for write' && 
                <Hint title={dict[lang].form.error} error>{currentData.writeError}</Hint>
            }
            
            {/* Поиск */}
            {enableSearch && (
                <div className={styles.searchWrapper}>
                    <input
                        value={globalFilter || ''}
                        onChange={e => setGlobalFilter(e.target.value)}
                        className={styles.searchInput}
                        placeholder="Поиск..."
                    />
                </div>
            )}

            <div className={styles.tableWrapper}>
                {loading && (
                    <div className={styles.tableLoadingOverlay}>
                        <div className={styles.tableLoader}>
                            <Loader>{_.get(dict[lang], 'loading') || "Loading..."}</Loader>
                        </div>
                    </div>
                )}
                
                <div className={loading ? styles.backgroundBlur : ''}>
                    <table className={styles.table}>
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id}>
                                    <th style={{ width: 30, padding: tableCellPadding }} />
                                    {headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            style={{ padding: tableCellPadding }}
                                            className={styles.columnHeader}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    {...{
                                                        className: enableSorting && header.column.getCanSort()
                                                            ? styles.sortableHeader
                                                            : '',
                                                        onClick: enableSorting ? header.column.getToggleSortingHandler() : undefined,
                                                    }}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                    {enableSorting && (() => {
                                                        const sortIcon = {
                                                            asc: ' 🔼',
                                                            desc: ' 🔽',
                                                        }[header.column.getIsSorted()];
                                                        return sortIcon != null ? sortIcon : null;
                                                    })()}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr
                                    key={row.id}
                                    className={styles.tableRow}
                                    onDoubleClick={() => handleRowClick(row)}
                                >
                                    <td style={{ padding: tableCellPadding }}>
                                        <a 
                                            onClick={() => handleRowClick(row)} 
                                            className={`icon icon-expand ${styles.expand}`} 
                                        />
                                    </td>
                                    {row.getVisibleCells().map(cell => (
                                        <td
                                            key={cell.id}
                                            style={{ padding: tableCellPadding }}
                                            className={`${styles.nowrap} ${styles.ellipsis}`}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ComponentWrapper>
    )
}

FpsTable2.propTypes = {
    data: PropTypes.object.isRequired,
    auth: PropTypes.object,
    locale: PropTypes.string,
    onEvent: PropTypes.func,
    handleRoute: PropTypes.func,
    id: PropTypes.string,
    currentBP: PropTypes.string,
    enableSearch: PropTypes.bool,
    enableSorting: PropTypes.bool,
}

FpsTable2.defaultProps = {
    data: {},
    auth: {},
    locale: "ENG",
    onEvent: undefined,
    handleRoute: undefined,
    id: "table2",
    currentBP: "lg",
    enableSearch: true,
    enableSorting: true,
}

FpsTable2.settings = {
    icon: icon,
    name: 'Table view v2 (TanStack)',
    sysName: 'FpsTable2',
    isLegacy: true,
    form: [
        { name: 'API-endpoint', sysName: 'sl', type: 'api-endpoint' },
        { name: 'Table title', sysName: 'tableTitle', type: 'input' },
        { name: 'Page size', sysName: 'pageSize', type: 'number' },
        { name: 'Default HTTP request params', sysName: 'httpParams', type: 'httpParams' },
        { name: 'Component comment', sysName: 'comment', type: 'comment' },
    ]
}

export default FpsTable2 