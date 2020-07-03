import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out my garbage' },
        'task-2': { id: 'task-2', content: 'Whatch my favourite show' },
        'task-3': { id: 'task-3', content: 'Charge my phone' },
        'task-4': { id: 'task-4', content: 'Cook dinner' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
}

function Task(props) {
    const [expand,setExpand] = useState(false)
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided) => (
                <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div style={{paddingTop:4,paddingBottom:4}}>
                    <div style={{ padding: 5, backgroundColor: 'white', border:'solid 1px #aaa'}}
                        
                    >
                        <div onClick={()=>setExpand(!expand)}>{props.task.content}; {props.index}</div>
                        {expand && 
                            <div>a<br />
                            <input type='text' />
                            <br />c</div>
                        }
                    </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}


function Column(props) {
    return (
        <div style={{ backgroundColor: 'white', padding: 10 }}>
            <b>{props.column.title}</b>
            <Droppable droppableId={props.column.id}>
                {(provided) => (
                    <div ref={provided.innerRef}
                        {...provided.droppableProps}>
                            {props.tasks.map((task, index) =>
                                <Task key={task.id} task={task} index={index} />
                            )}
                            {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export function Dnd() {

    const [state, setState] = useState(initialData)

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }

        let saveData = {...state}
        const column = saveData.columns[result.destination.droppableId]
        const tasks = Array.from(column.taskIds)
        tasks.splice(result.source.index, 1)
        tasks.splice(result.destination.index, 0, result.draggableId)
        saveData.columns[result.destination.droppableId].taskIds = tasks
        setState(saveData)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map(columnID => {
                const column = state.columns[columnID]
                const tasks = column.taskIds.map(taskID => state.tasks[taskID])
                return (
                    <Column key={columnID} column={column} tasks={tasks} />
                )
            })}
        </DragDropContext>
    )
}