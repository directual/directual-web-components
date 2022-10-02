import React, { useState, useEffect, useRef } from 'react'
import styles from './kanban.module.css'
// import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
// import ExpandedText from '../../expandedText/expandedText'
// import { Paging } from '../paging/paging'
// import moment from 'moment'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import _ from 'lodash';
import { Card } from '../cards/cards'
import Loader from '../../loader/loader';
import Button from '../../button/button'


const itemsFromBackend = [
    { id: 'item-1', content: "First task" },
    { id: 'item-2', content: "Second task" },
    { id: 'item-3', content: "Third task" },
    { id: 'item-4', content: "Fourth task" },
    { id: 'item-5', content: "Fifth task" },
    { id: 'item-6', content: <h1>hey hey hey</h1> },
    { id: 'item-7', content: "Second task" },
    { id: 'item-8', content: "Third task" },
    { id: 'item-9', content: "Fourth task" },
    { id: 'item-10', content: "Fifth task" },
    { id: 'item-11', content: "First task" },
    { id: 'item-12', content: "Second task" },
    { id: 'item-13', content: "Third task" },
    { id: 'item-14', content: "Fourth task" },
    { id: 'item-15', content: "Fifth task" }
];

const columnsFromBackend = {
    'column-1': {
        name: "Requested",
        items: itemsFromBackend
    },
    'column-2': {
        name: "To do",
        items: []
    },
    'column-3': {
        name: "In Progress",
        items: []
    },
    'column-4': {
        name: "Done",
        items: []
    },
    'column-5': {
        name: "Pohui",
        items: []
    }
};


export function Kanban({ data, onExpand, setLoading, edenrichConds, loading, searchValue, auth, submit, submitAction, params, checkActionCond, currentBP }) {

    const kanbanData = data.data || []

    const tableHeaders = data.headers || []

    const tableParams = data.params || {
        cardHeaderComment: '',
        cardBodyText: ''
    }

    const tableFieldScheme = data.fieldScheme || []
    const tableStructures = data.structures || {}

    const kanbanParams = _.get(data, 'params.kanbanParams') || {
        columns: [],
        dragndropOption: 'none'
    }
    const columnWidth = _.get(kanbanParams,'columnWidth') || 250
    const columnField = _.get(kanbanParams, 'columnField') || ''
    const dragndropOption = _.get(kanbanParams, 'dragndropOption') || ''
    const [successWeb3, setSuccessWeb3] = useState(false)
    const [kostyl, setKostyl] = useState(false)

    const getInitialStructureParams = () => {
        const randomFieldArray =
            (tableHeaders.filter(
                (field) => field.dataType != 'link' && field.dataType != 'arrayLink'
            )[0] &&
                tableHeaders.filter(
                    (field) => field.dataType != 'link' && field.dataType != 'arrayLink'
                )) ||
            []
        let randomField = randomFieldArray[0].sysName
        let id =
            (tableFieldScheme.filter((field) => randomField == field[0])[0] &&
                tableFieldScheme.filter((field) => randomField == field[0])[0][1]) ||
            null
        if (!id) {
            randomField = randomFieldArray[1].sysName
            id =
                (tableFieldScheme.filter((field) => randomField == field[0])[0] &&
                    tableFieldScheme.filter((field) => randomField == field[0])[0][1]) ||
                null
        }
        if (!id) {
            randomField = randomFieldArray[2].sysName
            id =
                (tableFieldScheme.filter((field) => randomField == field[0])[0] &&
                    tableFieldScheme.filter((field) => randomField == field[0])[0][1]) ||
                null
        }
        const name = id && tableStructures[id] && tableStructures[id].name
        // console.log('randomField')
        // console.log('tableFieldScheme')
        // console.log(tableFieldScheme)
        // console.log(randomField)
        // console.log('id')
        // console.log(id)
        // console.log(tableStructures[id])
        const viewName =
            id &&
            tableStructures[id] &&
            (tableStructures[id].jsonViewIdSettings
                ? Object.values(
                    JSON.parse(tableStructures[id].jsonViewIdSettings || [])
                ).map((i) => (i = i && i.sysName))
                : [])
        return {
            id,
            name,
            viewName
        }
    }

    // Gathers current structure info:
    const getStructure = (obj, tableFieldScheme, tableStructures) => {
        const structure = {}
        for (const field in obj) {
            if (typeof obj[field] !== 'object') {
                if (tableFieldScheme.filter((i) => i[0] == field).length > 0) {
                    structure.id = tableFieldScheme.filter((i) => i[0] === field)[0][1]
                }
            }
        }
        if (structure.id && tableStructures[structure.id]) {
            structure.sysName = tableStructures[structure.id].sysName
            structure.name = tableStructures[structure.id].name
            structure.visibleName =
                tableStructures[structure.id] &&
                (tableStructures[structure.id].jsonViewIdSettings
                    ? Object.values(
                        JSON.parse(tableStructures[structure.id].jsonViewIdSettings)
                    ).map((i) => (i = i.sysName))
                    : [])
            structure.fieldStructure = JSON.parse(
                tableStructures[structure.id].jsonObject
            )
        }
        return structure
    }

    const transformTableFieldScheme = (sysname, tableFieldScheme) => {
        const newTableFieldScheme = tableFieldScheme.filter((i) =>
            i[0].startsWith(sysname + '.')
        )
        var deepClone = JSON.parse(JSON.stringify(newTableFieldScheme))
        deepClone.forEach((i) => (i[0] = i[0].substring(sysname.length + 1)))
        return deepClone
    }

    const getLinkName = (sysname, obj, fieldScheme) => {
        fieldScheme = fieldScheme || tableFieldScheme
        const structure = getStructure(
            obj,
            transformTableFieldScheme(sysname, fieldScheme),
            tableStructures
        )
        const linkNameArr = []
        structure.visibleName &&
            structure.visibleName.forEach((field) => {
                const fieldDetails = structure.fieldStructure.filter(
                    (i) => i.sysName == field
                )[0]
                if (obj[field] || obj[field] == 0) {
                    if (fieldDetails.dataType == 'date') {
                        linkNameArr.push(formatDate(obj[field], fieldDetails.formatOptions))
                    } else {
                        if (typeof obj[field] === 'object') {
                            linkNameArr.push(
                                getLinkName(
                                    field,
                                    obj[field],
                                    transformTableFieldScheme(sysname, fieldScheme)
                                )
                            )
                        } else {
                            linkNameArr.push(obj[field])
                        }
                    }
                }
                // if (obj[field] || obj[field] == 0) {
                //     linkNameArr.push(obj[field])
                // }
            })
        const linkName = linkNameArr
            ? linkNameArr.length > 0
                ? linkNameArr.join(' ')
                : null
            : null
        let displayID = ''
        if (typeof obj === 'string') {
            displayID = obj
        }
        return linkName == 0
            ? '0'
            : linkName || displayID || obj.id || 'No visible name'
    }

    const enrichColumns = cols => {
        const newCols = {}
        Array.isArray(cols) && (cols || []).forEach(i => {
            const items = []
            kanbanData.forEach((obj, index) => {
                if (obj.id && (obj[columnField] == i.id || _.get(obj, `[${columnField}].id`) == i.id)) {
                    items.push({
                        id: obj.id,
                        content: <Card
                            params={tableParams}
                            row={obj}
                            key={index}
                            data={data}
                            i={index}
                            currentBP={currentBP}
                            tableParams={tableParams}
                            tableHeaders={tableHeaders}
                            loading={loading || kostyl}
                            successWeb3={successWeb3}
                            setLoading={setLoading}
                            setSuccessWeb3={setSuccessWeb3}
                            edenrichConds={edenrichConds}
                            searchValue={searchValue}
                            auth={auth}
                            submitAction={submitAction}
                            checkActionCond={checkActionCond}
                            onExpand={onExpand}
                            getLinkName={getLinkName}
                            getInitialStructureParams={getInitialStructureParams}
                        />
                    })
                }
            })
            if (!_.get(kanbanParams, `columnsVisibility[${i.id}].isHidden`)) { newCols[i.id] = { ...i, items: items } }
        })
        return newCols
    }

    const [columns, setColumns] = useState(enrichColumns(kanbanParams.columns));


    const onDragEnd = (result, columns, setColumns) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
            submit({ id: result.draggableId, [columnField]: result.destination.droppableId })
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    useEffect(() => {
        if (columns !== enrichColumns(kanbanParams.columns)) {
            console.log('reset kanban')
            setColumns(enrichColumns(kanbanParams.columns))
        }
    }, [kanbanParams.columns])

    useEffect(() => {
        if (columns !== enrichColumns(kanbanParams.columns)) {
            console.log('reset kanban')
            setColumns(enrichColumns(kanbanParams.columns))
            setKostyl(true)
            setTimeout(() => {
                setKostyl(false)
            }, 300)
        }
    }, [])

    return (<React.Fragment>
        {/* <Button small icon='refresh'
            height={38}
            onClick={() => {
                //setColumns(enrichColumns(kanbanParams.columns))
                setLoading(true)
                setTimeout(() => setLoading(false), 300)
            }
            }
        >Reload</Button> */}
        <div className={`${styles.kanban} ${loading ? styles.loading : ''}`}>
            {(loading) && <div className={styles.loadingCover}><Loader>Loading...</Loader></div>}
            {kostyl ? <Loader>Loading...</Loader> : <React.Fragment>

                <DragDropContext
                    onDragEnd={result => onDragEnd(result, columns, setColumns)}
                >
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div
                                className={styles.column}
                                key={columnId}
                            >
                                <h3 className={styles.kanbanHeader}>{column.name}</h3>
                                <div style={{ flexGrow: 2 }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    className={styles.droppableColumn}
                                                    style={{
                                                        background: snapshot.isDraggingOver
                                                            ? "var(--button-dropdown-hover-bgr)"
                                                            : "var(--layout-bgr)",
                                                        //padding: 4,
                                                        width: columnWidth,
                                                        minHeight: 500
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{
                                                                                userSelect: "none",
                                                                                // margin: "0 0 8px 0",
                                                                                // minHeight: "50px",
                                                                                opacity: snapshot.isDragging
                                                                                    ? "0.5"
                                                                                    : "1",
                                                                                ...provided.draggableProps.style
                                                                            }}
                                                                        >
                                                                            {item.content}
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        );
                    })}
                </DragDropContext>
            </React.Fragment>}
        </div>
    </React.Fragment>

    );

}