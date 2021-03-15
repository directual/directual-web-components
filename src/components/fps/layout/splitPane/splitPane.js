import React, { useState, useEffect, useRef } from 'react'
import styles from './splitPane.module.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const exampleData =
{
    reorder: true,
    sizeUnits: '%', // 'px', '%'
    panes:
        [
            { id: 'pane_01', content: <div>a</div>, initialSize: '50' },
            { id: 'pane_02', content: <div>b</div>, initialSize: '20' },
            { id: 'pane_03', content: <div>c</div>, initialSize: '30' }
        ]
}

export default function SplitPane(props) {
    const [panes, setPanes] = useState(props.panes || exampleData || {})

    const onDragEnd = result => {
        console.log(result)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='splitPane' direction='horizontal' type="splitPane">
                {(provided) => (
                    <div ref={provided.innerRef}
                        className={`${styles.splitPane}`} 
                        style={{ maxWidth: props.width || 'auto' }}
                        {...provided.droppableProps}>
                        {panes.panes && panes.panes.map((pane, index) => <React.Fragment>
                            <Pane pane={pane} index={index}/>
                            {index !== panes.panes.length - 1 && <DragMe />}
                        </React.Fragment>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

function Pane({ pane, index }) {
    return (
        <Draggable draggableId={pane.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${styles.pane}`}
                    ref={provided.innerRef}
                >
                    {pane.content}
                </div>
            )}
        </Draggable>
    )
}

function DragMe(props) {
    return <div className={`${styles.dragMe}`}>
        |
    </div>
}