import React, { useState, useMemo, useEffect, useRef } from 'react'
import styles from './table.module.css'
import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
import { useTable } from 'react-table'
import Checkbox from '../../dataentry/checkbox/checkbox'

// Create an editable cell renderer
const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    fieldDetails,
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

    return <div className={styles.notEditableValue}>
        {typeof value == 'object' ? JSON.stringify(value) : value}
    </div>
}


// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
    Cell: EditableCell
}

function ReactTable({ columns, data, updateMyData, fieldDetails, skipPageReset, onExpand }) {
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
            fieldDetails
        },
    )

    // Render the UI for your table
    return (
        <div className={styles.table_wrapper}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {/* <th style={{ width: 20 }}>
                                <Checkbox label='' />
                            </th> */}
                            <th style={{ width: 30 }} />
                            {headerGroup.headers.map(column => {
                                //console.log(column)
                                return <React.Fragment>
                                    <th
                                        {...column.getHeaderProps()}
                                    >
                                        <span className={styles.columnHeader}>
                                            {column.Header || <code>{column.id}</code>}</span>
                                    </th>
                                </React.Fragment>
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {/* <td>
                                    <Checkbox label='' />
                                </td> */}
                                <td><a onClick={() => onExpand(row.original)} className={`icon icon-expand ${styles.expand}`} /></td>
                                {row.cells.map(cell =>
                                    <td {...cell.getCellProps()}
                                        className={`${styles.nowrap} ${styles.ellipsis}`}
                                    >{cell.render('Cell')}</td>
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
    params,
    checkActionCond,
}) {

    console.log(data)

    data.error = data.error && data.error == '403' ? 'You have no permissions for viewing form' : data.error
    data.error = data.error && data.error == '511' ? 'Table is not configured' : data.error

    // composing Table Header
    const tableParams = { ...data.params.tableParams }
    const fieldDetails = { ...data.params.data.fields }
    const tableFieldparams = { ...data.params.data.fields }

    for (const field in fieldDetails) {
        fieldDetails[field] = { ...fieldDetails[field], ...tableFieldparams[field] }
    }

    if (!tableParams) { return <SomethingWentWrong icon='ban' message='Table is not configured' /> }

    let tableColumns = []
    tableParams.fieldOrder.forEach(field => {
        if (tableParams.fieldParams[field] && tableParams.fieldParams[field].include) {
            tableColumns.push({
                Header: tableParams.fields[field].content,
                accessor: field,
            })
        }
    })

    // Gathers current structure info:
    const getStructure = (obj) => { // obj == row
        const tableFieldScheme = data.fieldScheme ? [...data.fieldScheme] : []
        const tableStructures = data.structures ? {...data.structures} : {}
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

    //------------------------------
    function getLinkName(sysname, obj) {
        const structure = getStructure(obj)
        const linkName = structure.visibleName && structure.visibleName.map(field => obj[field]).join(' ')
        let displayID = ''
        if (typeof obj == 'string') { displayID = obj }
        return linkName || displayID || 'No visible name'
    }
    //------------------------------

    // composing Table data 
    const tableData = useMemo(() => data.data, [data.data])
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
        updateMyData={updateMyData}
        fieldDetails={fieldDetails}
        skipPageReset={skipPageReset}
        onExpand={onExpand}
    />
}