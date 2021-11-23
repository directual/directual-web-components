import React, { useState, useEffect, useRef } from 'react'
import styles from './kanban.module.css'
// import SomethingWentWrong from '../../SomethingWentWrong/SomethingWentWrong'
// import ExpandedText from '../../expandedText/expandedText'
// import { Paging } from '../paging/paging'
// import moment from 'moment'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


const itemsFromBackend = [
    { id: 'item-1', content: "First task" },
    { id: 'item-2', content: "Second task" },
    { id: 'item-3', content: "Third task" },
    { id: 'item-4', content: "Fourth task" },
    { id: 'item-5', content: "Fifth task" },
    { id: 'item-6', content: "First task" },
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


export function Kanban({ data, onExpand, edenrichConds, loading, searchValue, auth, submitAction, params, checkActionCond, currentBP }) {
    const tableHeaders = data.headers || []
    const tableData = data || []
    const tableParams = data.params || {
        cardHeaderComment: '',
        cardBodyText: ''
    }

    const [columns, setColumns] = useState(columnsFromBackend);

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

    return (
        <div className={styles.kanban}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div
                            className={styles.column}
                            key={columnId}
                        >
                            <h2>{column.name}</h2>
                            <div style={{ margin: 8, flexGrow: 2 }}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={{
                                                    background: snapshot.isDraggingOver
                                                        ? "lightblue"
                                                        : "lightgrey",
                                                    padding: 4,
                                                    width: 250,
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
                                                                            padding: 16,
                                                                            margin: "0 0 8px 0",
                                                                            minHeight: "50px",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#263B4A"
                                                                                : "#456C86",
                                                                            color: "white",
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
        </div>
    );

}