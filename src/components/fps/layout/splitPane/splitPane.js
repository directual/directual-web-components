import React, { useState, useEffect, useRef } from 'react'
import styles from './splitPane.module.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const defaultData =
{
    reorder: true,
    sizeUnits: '%', // 'px', '%'
    panes:
        [
            { id: 'pane_01', content: <div></div>, size: 100 },
        ]
}

export default function SplitPane(props) {
    const [panes, setPanes] = useState(props.panes || defaultData)
    const [wrapperSize, setWrapperSize] = useState()
    const wrapper = useRef(null)

    useEffect(() => {
        wrapper.current && setWrapperSize(wrapper.current.getBoundingClientRect().width)
    }, [wrapper])

    useEffect(() => {
        if (props.panes.panes.length != panes.panes.length) { setPanes(props.panes) }
    }, [props.panes])

    const onDragEnd = result => {
        if (!result.destination || !result.source) { return null; }
        console.log(result)
        const savePanes = { ...panes }
        const draggableElement = savePanes.panes[result.source.index]
        savePanes.panes.splice(result.source.index, 1)
        savePanes.panes.splice(result.destination.index, 0, draggableElement)
        setPanes(savePanes)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='dd-debug'>
                {panes.panes.map(i => i.size).map(size => size + '% ').join(' ')}
            </div>
            <div ref={wrapper} style={{ maxWidth: props.width || 'auto' }}>
                <Droppable droppableId='splitPane' direction='horizontal' type="splitPane">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}
                            className={`${styles.splitPane}`}
                            {...provided.droppableProps}>
                            {panes.panes && panes.panes.map((pane, index) =>
                                <Pane
                                    key={pane.id}
                                    pane={pane}
                                    sizes={panes.panes ? panes.panes.map(i => i.size) : []}
                                    index={index}
                                    panes={panes}
                                    wrapperSize={wrapperSize}
                                    last={index == panes.panes.length - 1}
                                    editPaneSize={(saveSize, newNextSize) => {
                                        const newPanes = { ...panes }
                                        newPanes.panes[index].size = saveSize
                                        newPanes.panes[index + 1].size = newNextSize
                                        setPanes(newPanes)
                                    }}
                                    isDraggingOver={snapshot.isDraggingOver} />
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

function Pane({ pane, index, isDraggingOver, last, sizes, wrapperSize, editPaneSize, panes }) {
    const paneDiv = useRef(null)

    const currentSize = parseFloat(panes.panes[index].size)
    const nextSize = !last ? parseFloat(panes.panes[index + 1].size) : 0

    const editSize = size => {
        const minSize = 10
        const maxSize = currentSize + nextSize - 10
        let saveSize = currentSize
        if (currentSize + size <= minSize) { saveSize = minSize }
        if (currentSize + size >= maxSize) { saveSize = maxSize }
        if (currentSize + size > minSize && currentSize + size < maxSize) {
            try {
                saveSize = (currentSize + size).toFixed(0)
            }
            catch (e) {
                console.log(currentSize)
                console.log(typeof currentSize)
                console.log(size)
                console.log(typeof size)
                console.log(e)
            }
        }
        const newNextSize = nextSize - (saveSize - currentSize)
        // console.log('saveSize = ' + saveSize)
        // console.log('newNextSize = ' + newNextSize)
        editPaneSize(saveSize, newNextSize)
    }

    const onMouseDownHandler = (index) => {
        const rect = paneDiv.current && paneDiv.current.getBoundingClientRect()
        if (!rect) { return null }
        const percentInPx = rect.width / sizes[index]
        const rightPos = rect.right
        //console.log(percentInPx)
        function disableSelect(event) {
            event.preventDefault();
        }
        const setSize = e => {
            const mousePos = e.clientX;
            const diffPercent = (mousePos - rightPos) / percentInPx
            editSize(diffPercent)
        }
        window.addEventListener("mousemove", setSize);
        window.addEventListener('selectstart', disableSelect);
        window.addEventListener("mouseup", e => {
            window.removeEventListener("mousemove", setSize)
            window.removeEventListener('selectstart', disableSelect);
        })
    }
    return (
        <Draggable draggableId={pane.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps}
                    className={`${styles.pane}`}
                    ref={provided.innerRef} >
                    <div ref={paneDiv}>
                        <div {...provided.dragHandleProps}
                            style={{ width: parseFloat(sizes[index]) * wrapperSize / 100 - 10 }}
                            className={styles.paneContent}>
                            {sizes[index]}<br />
                            {parseFloat(sizes[index]) * wrapperSize / 100}
                            {pane.content}
                        </div>
                        {!last &&
                            <DragMe
                                hide={isDraggingOver}
                                onMouseDown={e => onMouseDownHandler(index)}
                            />}
                    </div>
                </div>
            )}
        </Draggable>
    )
}

function DragMe(props) {

    return (
        <div
            onMouseDown={props.onMouseDown}
            className={`${styles.dragMe} ${props.hide ? styles.hide : ''}`}>
            <div className='icon icon-details' />
        </div>
    )
}