import React, { useState, useMemo, useEffect, useRef } from 'react'
import styles from './table.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import { useTable } from 'react-table'
import Checkbox from '../../dataentry/checkbox/checkbox'
import Button from '../../button/button'
import moment from 'moment'

// Create an editable cell renderer
const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    fieldDetails,
    tableParams,
    getLinkName,
    updateMyData, // This is a custom function that we supplied to our table instance
}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    // todo: add Enter, Esc processing
    const onBlur = () => {
        updateMyData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    // todo: editting objects from the table
    // const [isEditing,setIsEditing] = useState(false)
    // if (fieldDetails[id].write) {
    //     return (
    //         isEditing ? 
    //         <input value={value} />
    //         :
    //         <div className={styles.editableValue} onClick={()=> setIsEditing(true)}>{value}</div>
    //     )
    // }

    // fieldDetails[id].format == "color" && console.log(tableParams[id])
    // fieldDetails[id].format == "color" && console.log(fieldDetails[id])

    //date
    const formatOptions = (fieldDetails[id] && fieldDetails[id].formatOptions) || {}

    function numberWithSpaces(x) {
        if (!x && x != 0) return null
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    if (!fieldDetails[id] || !fieldDetails[id].dataType) {
        return <div className={styles.notEditableValue}>
            {typeof value == 'object' ? JSON.stringify(value) : value}
        </div>
    }


    if (fieldDetails[id].dataType == 'date') {
        return <div className={`${styles.notEditableValue}`}>
            {!value ? null : formatOptions.isUTC == 'true' ?
                moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
                :
                moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')}
        </div>
    }

    //numbers
    if (fieldDetails[id].dataType == 'number' || fieldDetails[id].dataType == 'decimal') {
        return <div className={`${styles.notEditableValue} ${styles.number}`}>
            {numberWithSpaces(value)}
        </div>
    }

    //images
    if (fieldDetails[id].dataType == 'file' && value) {
        if (tableParams[id].fileImage) {
            return <div className={styles.cardImage}
                style={{
                    width: tableParams[id].fileImageSize || 80,
                    height: tableParams[id].fileImageSize || 80,
                    backgroundImage: `url(${value})`,
                    borderRadius: tableParams[id].fileImageFormat == 'circle' ? (tableParams[id].fileImageSize || 80) : 0
                }} />
        }
        return <div className={`${styles.notEditableValue} ${styles.number}`}>
            {value}
        </div>
    }

    //colour
    if (fieldDetails[id].format == "color" && value) {
        let colorValue = ''
        if (value[0] !== '#') { colorValue = '#' + value } else { colorValue = value }
        return <div className={styles.colorCell}>
            <div className={styles.colorLabel}
                style={{
                    width: tableParams[id].colorSize || 40,
                    height: tableParams[id].colorSize || 40,
                    backgroundColor: colorValue,
                    borderRadius: tableParams[id].colorFormat == 'circle' ? (tableParams[id].colorSize || 40) : 0
                }} />
            {tableParams[id].colorCode ? <span>{colorValue}</span> : ''}</div>
    }


    //booleans
    if (fieldDetails[id].dataType == 'boolean') {
        if (fieldDetails[id].formatOptions &&
            fieldDetails[id].formatOptions.booleanOptions &&
            fieldDetails[id].formatOptions.booleanOptions.length > 0) {
            return <div className={`${styles.notEditableValue} ${styles.boolean}`}>
                {value === true && <span className='icon icon-done'>{fieldDetails[id].formatOptions.booleanOptions[0]}</span>}
                {value === false && <span className='icon icon-ban'>{fieldDetails[id].formatOptions.booleanOptions[1]}</span>}
            </div>
        } else {
            return <div className={`${styles.notEditableValue} ${styles.boolean}`}>
                {value === true && <span className='icon icon-done'>true</span>}
                {value === false && <span className='icon icon-ban'>false</span>}
            </div>
        }
    }

    //weblink
    if (fieldDetails[id].format == 'webLink' && value) {
        if (tableParams[id].displayAsButton) {
            return <Button
                link={value}
                verySmall
                accent={tableParams[id].button && tableParams[id].button.type == 'accent'}
                danger={tableParams[id].button && tableParams[id].button.type == 'danger'}
                icon={tableParams[id].button && tableParams[id].button.icon}
                height={26}
                newWindow
            >
                {(tableParams[id].button && tableParams[id].button.title) || value}
            </Button>
        } else {
            return <a target="_blank" href={value}>{value}</a>
        }
    }

    // link:
    if (fieldDetails[id].dataType == 'link') {
        return <div className={`${styles.notEditableValue} ${styles.linkWrapper}`}>
            <div className={`${styles.linkText} ${styles.notClickable}`}>
                {typeof value == 'object' ? getLinkName(id, value) : value}
            </div>
        </div>
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

    // json Radio:
    if (fieldDetails[id].dataType == 'json' && fieldDetails[id].format == 'radioOptions') {
        if (!value || value == "{}") return <div />
        const json = parseJson(value)
        if (json.value) return <div className={`${styles.notEditableValue}`}>
            {fieldDetails[id].formatOptions.multipleChoice.filter(i => i.value == json.value)[0].label}
        </div>
        if (json.customOption) return <div className={`${styles.notEditableValue}`}>
            {json.customOption}
        </div>
        return <div className={`${styles.notEditableValue}`}>
        </div>
    }

    // json Checkboxes:
    if (fieldDetails[id].dataType == 'json' && fieldDetails[id].format == 'checkboxes') {
        // console.log('radio')
        // console.log(fieldDetails[id])
        if (!value || value == "{}") return <div />
        const json = parseJson(value)
        let options = []
        for (const option in json) {
            let newOption = ''
            if (option != 'customOption') {
                newOption = fieldDetails[id].formatOptions.multipleChoice.filter(i => i.value == option)[0].label
            }
            if (option == 'customOption') {
                newOption = json[option]
                options.push(newOption)
            }
            if (json[option] == true) {
                options.push(newOption)
            }
        }
        return <div className={`${styles.notEditableValue}`}>
            {options.map(option => <div className='icon icon-done small'>{option}</div>)}
        </div>
    }

    // array:
    if (fieldDetails[id].dataType == 'array' && value) {
        return <div className={`${styles.notEditableValue} ${styles.linkWrapper}`}>
            {value.length > 0 ?
                value.map(label => <div className={`${styles.labelText}`}>{label}</div>) :
                <div className={`${styles.labelText}`}>{value}</div>}
        </div>
    }

    // arrayLink:
    if (fieldDetails[id].dataType == 'arrayLink' && value) {
        return <div className={`${styles.notEditableValue} ${styles.linkWrapper}`}>
            {Array.isArray(value) ?
                value.map(label => <div className={`${styles.linkText} ${styles.notClickable}`}>{getLinkName(id, label)}</div>) :
                <div className={`${styles.linkText} ${styles.notClickable}`}>{value}</div>}
        </div>
    }

    // other types:
    return <div className={styles.notEditableValue}>
        {typeof value == 'object' ? JSON.stringify(value) : value}
    </div>
}


// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell
}

function ReactTable({ columns, hideExpandTD, data, largeFont, updateMyData, fieldDetails, tableParams, skipPageReset, getLinkName, onExpand }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        selectedFlatRows
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            // use the skipPageReset option to disable page resetting temporarily
            autoResetPage: !skipPageReset,
            // updateMyData isn't part of the API, but
            // anything we put into these options will
            // automatically be available on the instance.
            // That way we can call this function from our
            // cell renderer!
            updateMyData,
            fieldDetails,
            tableParams,
            getLinkName
        }
    )

    // Render the UI for your table
    return (
        <div className={styles.table_wrapper}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => {
                        return <tr {...headerGroup.getHeaderGroupProps()}>
                            {/* <th style={{ width: 20 }}>
                                <Checkbox label='' />
                            </th> */}
                            {!hideExpandTD && <th style={{ width: 30 }} />}
                            {headerGroup.headers.map(column => {
                                if (tableParams[column.id].colorRow || !tableParams[column.id].include) return null
                                return <React.Fragment>
                                    <th
                                        {...column.getHeaderProps()}
                                        style={(fieldDetails[column.id] && (fieldDetails[column.id].dataType == 'number' || fieldDetails[column.id].dataType == 'decimal')) ?
                                            { textAlign: 'right' } : {}}
                                    >
                                        <span className={styles.columnHeader}>
                                            {column.Header || <code>{column.id}</code>}</span>
                                    </th>
                                </React.Fragment>
                            })}
                        </tr>
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)

                        const isColorRow = row.cells.filter(cell => tableParams[cell.column.id] &&
                            tableParams[cell.column.id].include && tableParams[cell.column.id].colorRow) ?
                            row.cells.filter(cell => tableParams[cell.column.id]
                                && tableParams[cell.column.id].include
                                && tableParams[cell.column.id].colorRow)[0] : null
                        let colorRow = isColorRow ? isColorRow.row.values[isColorRow.column.id] ?
                            isColorRow.row.values[isColorRow.column.id] : 'default' : 'default'

                        colorRow = colorRow == 'default' ? colorRow : colorRow[0] == '#' ? colorRow : '#' + colorRow
                        return (
                            <tr onDoubleClick={() => onExpand(row.original)}
                                style={colorRow == 'default' ? {} :
                                    {
                                        backgroundColor: colorRow,
                                        border: 'none'
                                    }}
                                {...row.getRowProps()}>
                                {/* <td>
                                    <Checkbox label='' />
                                </td> */}
                                {!hideExpandTD && <td ><a onClick={() => onExpand(row.original)} className={`icon icon-expand ${styles.expand}`} /></td>}
                                {row.cells.map(cell => {

                                    const isColorCell = tableParams[cell.column.id].colorCell ? tableParams[cell.column.id] : null

                                    let colorCellValue = null
                                    if (isColorCell && (isColorCell.colorCellSource == 'const' || !isColorCell.colorCellSource)) {
                                        colorCellValue = isColorCell.colorCellConst
                                    }
                                    if (isColorCell && isColorCell.colorCellSource == 'field') {
                                        colorCellValue = row.original[isColorCell.colorCellField]
                                    }
                                    colorCellValue = !colorCellValue ? null : colorCellValue[0] == '#' ? colorCellValue : '#' + colorCellValue

                                    if ((tableParams[cell.column.id] && tableParams[cell.column.id].colorRow) ||
                                        !tableParams[cell.column.id].include) return null
                                    return <td
                                        {...cell.getCellProps()}
                                        style={colorCellValue ?
                                            isColorCell.colorCellType == 'text' ?
                                                { color: colorCellValue } :
                                                { backgroundColor: colorCellValue }
                                            : {}}
                                        className={`${styles.nowrap} ${styles.ellipsis} ${largeFont ? styles.largeFont : ''}`}

                                    >{cell.render('Cell')}</td>
                                }
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export function Table({
    data,
    onExpand,
    loading,
    searchValue,
    auth,
    submitAction,
    largeFont,
    params,
    hideExpandTD,
    checkActionCond,
}) {

    // console.log('FpsTable')
    // console.log(data)

    data.error = data.error && data.error == '403' ? 'You have no permissions for viewing form' : data.error
    data.error = data.error && data.error == '511' ? 'Table is not configured' : data.error

    // composing Table Header
    const tableParams = { ...data.params.tableParams }
    const fieldDetails = data.params.data ? { ...data.params.data.fields } : {}
    const tableFieldparams = data.params.data ? { ...data.params.data.fields } : {}

    // обогащаем поля теми, что не пришли по данным, но мы их можем писать:
    function enrichTableDataWithWriteFields(data) {
        let saveData = data.data ? [...data.data] : []
        saveData.forEach(field => {
            data.writeFields && data.writeFields.forEach(writeField => {
                if (!field[writeField]) { field[writeField] = '' }
            })
        })
        return saveData
    }

    for (const field in fieldDetails) {
        fieldDetails[field] = { ...fieldDetails[field], ...tableFieldparams[field] }
    }

    if (!tableParams || !tableParams.fieldOrder) {
        return <div className={styles.emptyTable}>
            <SomethingWentWrong icon='warning' message='Table is not configured' /></div>
    }

    let tableColumns = []
    tableParams.fieldOrder = tableParams.fieldOrder || []
    tableParams.fieldOrder.forEach(field => {
        if (tableParams.fieldParams[field]
            //&& tableParams.fieldParams[field].include
        ) {
            tableColumns.push({
                Header: tableParams.fields[field].content,
                accessor: field,
            })
        }
    })

    // Gathers current structure info:
    const getStructure = (obj, tableFieldScheme, tableStructures) => { // obj == row
        // console.log('getStructure')
        // console.log(obj)
        // const tableFieldScheme = data.fieldScheme ? [...data.fieldScheme] : []
        // const tableStructures = data.structures ? { ...data.structures } : {}
        let structure = {}
        for (const field in obj) {
            if (typeof obj[field] != 'object') {
                if (tableFieldScheme.filter(i => i[0] == field).length > 0) {
                    structure.id = tableFieldScheme.filter(i => i[0] === field)[0][1]
                }
            }
        }
        if (structure.id && tableStructures[structure.id]) {
            structure.sysName = tableStructures[structure.id].sysName
            structure.name = tableStructures[structure.id].name
            structure.visibleName = tableStructures[structure.id] && (tableStructures[structure.id].jsonViewIdSettings ? Object.values(JSON.parse(tableStructures[structure.id].jsonViewIdSettings)).map(i => i = i.sysName) : [])
            structure.fieldStructure = JSON.parse(tableStructures[structure.id].jsonObject)
        }
        return structure
    }

    //-----------------------------

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        let newTableFieldScheme = tableFieldScheme.filter(i => i[0].startsWith(sysname + '.'))
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach(i => i[0] = i[0].substring(sysname.length + 1))
        return deepClone
    }

    // форматируем дату для карточки (если есть) в соответствии с formatOptions
    const formatDate = (value, formatOptions) => {
        if (!value) { return null }
        formatOptions = formatOptions || {}
        const formattedDate = formatOptions.isUTC == 'true' ?
            moment.utc(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
            :
            moment(value).locale(formatOptions.dateLocale || 'ed-gb').format(formatOptions.dateFormat + formatOptions.timeFormat || 'DD/MM/Y, HH:mm, Z')
        return formattedDate
    }

    //------------------------------
    function getLinkName(sysname, obj, fieldScheme) {
        const tableFieldScheme = data.fieldScheme ? [...data.fieldScheme] : []
        fieldScheme = fieldScheme || tableFieldScheme
        const tableStructures = data.structures ? { ...data.structures } : {}
        const structure = getStructure(obj, transformTableFieldScheme(sysname, fieldScheme), tableStructures)
        const linkNameArr = []
        structure.visibleName && structure.visibleName.forEach(field => {
            // if (obj[field] || obj[field] == 0) {
            //     linkNameArr.push(obj[field])
            // }
            const fieldDetails = structure.fieldStructure.filter(i => i.sysName == field)[0]
            if (obj[field] || obj[field] == 0) {
                if (fieldDetails.dataType == 'date') {
                    linkNameArr.push(formatDate(obj[field], fieldDetails.formatOptions))
                } else {
                    if (typeof obj[field] == 'object') {
                        linkNameArr.push(getLinkName(field, obj[field], transformTableFieldScheme(sysname, fieldScheme)))
                    } else {
                        linkNameArr.push(obj[field])
                    }
                }
            }
        })
        const linkName = linkNameArr.length > 0 ? linkNameArr.join(' ') : null
        let displayID = ''
        if (typeof obj == 'string') { displayID = obj }
        return linkName == 0 ? '0' : linkName || displayID || obj.id || 'No visible name'
    }
    //------------------------------

    // composing Table data 
    const tableData = useMemo(() => enrichTableDataWithWriteFields(data), [data.data])
    const columns = useMemo(() => tableColumns, [])

    //const [tableData, setTableData] = useState(data.data)
    // const [originalData] = useState(data.data)
    const [skipPageReset, setSkipPageReset] = useState(false)

    // We need to keep the table from resetting the pageIndex when we
    // Update data. So we can keep track of that flag with a ref.

    // When our cell renderer calls updateMyData, we'll use
    // the rowIndex, columnId and new value to update the
    // original data
    const updateMyData = (rowIndex, columnId, value) => {
        // We also turn on the flag to not reset the page
        // setSkipPageReset(true)
        // setTableData(old =>
        //     old.map((row, index) => {
        //         if (index === rowIndex) {
        //             return {
        //                 ...old[rowIndex],
        //                 [columnId]: value,
        //             }
        //         }
        //         return row
        //     })
        // )
    }

    // After data chagnes, we turn the flag back off
    // so that if data actually changes when we're not
    // editing it, the page is reset
    useEffect(() => {
        setSkipPageReset(false)
    }, [tableData])

    if (data.error) {
        return <SomethingWentWrong
            icon='warning'
            message={data.error}
        />
    }
    if (tableData.length === 0) {
        return <SomethingWentWrong
            icon='ban'
            message={`${searchValue ? `No object found for ${searchValue}` : `No objects`}`}
        />
    }

    return <ReactTable
        columns={columns}
        data={tableData}
        hideExpandTD={hideExpandTD}
        largeFont={largeFont}
        getLinkName={getLinkName}
        updateMyData={updateMyData}
        fieldDetails={fieldDetails}
        skipPageReset={skipPageReset}
        onExpand={onExpand}
        tableParams={tableParams.fieldParams}
    />
}