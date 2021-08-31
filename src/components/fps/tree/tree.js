import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Loader from '../loader/loader'
import styles from './tree.module.css'

export function Tree(props) {

    const { options, draggable, onCheck, loading, move } = props

    const defaultTree = {
        id: 'root',
        icon: 'folder',
        name: 'Root',
        isFolder: true,
        children: []
    }

    const [tree, setTree] = useState(props.defaultTree || defaultTree)
    const [isOpenned, setIsOppened] = useState({ root: true }) //, 2: true, 6: true, 1: true })
    const [selectedID, setSelectedID] = useState(props.selectedID || props.defaultTree.id || defaultTree.id)
    const [localLoading, setLocalLoading] = useState(true) // костыль под beautiful-dnd, чтобы DOM-дерево успело подгрузиться

    useEffect(() => composeTree(options), [options])
    useEffect(() => expandTree(), [tree])

    function selectOption(option) {
        setSelectedID(option)
        onCheck(option)
    }

    function composeTree(options) {
        // console.log('====composeTree=====')
        // console.log(options)
        function collectChildren(folder) {
            let children = (options || []).filter(i => { 
                return i.parentID == folder }) || []
            if (!children.length) {
                setLocalLoading(false)
                return []
            }
            return children.map(i => {
                return {
                    id: i.id,
                    name: i.name,
                    isFolder: i.isFolder,
                    icon: i.icon,
                    children: collectChildren(i.id)
                }
            })
        }
        let treeSave = { ...tree }
        treeSave.children = collectChildren(tree.id)
        // console.log(treeSave)
        setTree(treeSave)
    }

    function expandTree() {
        let saveIsOpenned = { ...isOpenned }
        function expandParent(parent) {
            saveIsOpenned[parent] = true
            if (parent == tree.id) {
                setIsOppened({ ...saveIsOpenned })
                return
            } else {
                const parentElement = options.filter(i => i.id == parent)[0].parentID
                expandParent(parentElement)
            }
        }
        const selectedElement = (options.filter(i => i.id == selectedID)[0] || {}).id
        selectedElement && expandParent(selectedElement)
    }

    const onDragEnd = (result) => {
        console.log('========onDragEnd=========')
        console.log(result)
        if (!result.destination) { return }
        const ID = result.draggableId.substring(5)
        const to = result.destination.droppableId.substring(7)
        if (ID == to) { return }
        move(ID, to)
    }

    return <div className={styles.treeWrapper}>
        {loading || localLoading ? <Loader>Loading tree...</Loader> : <DragDropContext onDragEnd={onDragEnd}>
            <Folder
                root
                key={tree.id}
                draggable={draggable}
                tree={tree}
                selectedID={selectedID}
                setSelectedID={selectOption}
                isOpenned={isOpenned}
                setIsOppened={setIsOppened}
            />
        </DragDropContext>}
    </div>
}



function Folder({ root, tree, isOpenned, setIsOppened, selectedID, setSelectedID, draggable, index }) {
    return <Droppable droppableId={`folder_${tree.id}`} type="tree">
        {(provided, snapshot) => (<div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`${styles.folder} ${snapshot.isDraggingOver ? styles.isDraggingOver : ''}`}
        >
            <Draggable draggableId={`drag_${tree.id}`} type="tree">
                {(provided, snapshot) => (<div><div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <div className={`
                        ${styles.folderName} 
                        ${styles.treeElement}
                        ${tree.id == selectedID ? styles.selected : ''}`}
                        onClick={() => {
                            ((tree.id !== selectedID && !isOpenned[tree.id] && !root)
                                || (tree.id == selectedID && !root)
                            ) ? setIsOppened({ ...isOpenned, [tree.id]: !isOpenned[tree.id] }) : undefined
                            setSelectedID(tree.id)
                        }}
                    >

                        {!root && <div className={`${styles.expandFolder} ${isOpenned[tree.id] ? styles.expanded : ''} icon icon-forward`}
                            onClick={e => {
                                e.stopPropagation()
                                setIsOppened({ ...isOpenned, [tree.id]: !isOpenned[tree.id] })
                            }} />}
                        <div className={`${styles.treeElementName} icon icon-${tree.icon}`}><span>{tree.name}</span></div>
                        {draggable && !isOpenned[tree.id] && !root && <div {...provided.dragHandleProps} className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
                    </div>
                    {isOpenned[tree.id] &&
                        <div className={`${styles.folderContent} ${root ? styles.noMargin : ''}`}>
                            {!tree.children.length && <div className={styles.empty}>folder is empty</div>}
                            {tree.children.map((child, index) => {
                                if (child.isFolder) {
                                    return <Folder
                                        key={child.id}
                                        index={index}
                                        draggable={draggable}
                                        tree={child}
                                        selectedID={selectedID}
                                        setSelectedID={setSelectedID}
                                        isOpenned={isOpenned}
                                        setIsOppened={setIsOppened}
                                    />
                                } else {
                                    return <Element
                                        element={child}
                                        index={index}
                                        key={child.id}
                                        draggable={draggable}
                                        selectedID={selectedID}
                                        setSelectedID={setSelectedID}
                                    />
                                }
                            })}
                        </div>}
                </div>
                    {snapshot.isDragging &&
                        <div style={{ opacity: .5 }}>
                            <div className={`
                                        ${styles.folderName} 
                                        ${styles.treeElement}
                                        ${tree.id == selectedID ? styles.selected : ''}`}
                                onClick={() => {
                                    ((tree.id !== selectedID && !isOpenned[tree.id] && !root)
                                        || (tree.id == selectedID && !root)
                                    ) ? setIsOppened({ ...isOpenned, [tree.id]: !isOpenned[tree.id] }) : undefined
                                    setSelectedID(tree.id)
                                }}
                            >

                                {!root && <div className={`${styles.expandFolder} ${isOpenned[tree.id] ? styles.expanded : ''} icon icon-forward`}
                                    onClick={e => {
                                        e.stopPropagation()
                                        setIsOppened({ ...isOpenned, [tree.id]: !isOpenned[tree.id] })
                                    }} />}
                                <div className={`${styles.treeElementName} icon icon-${tree.icon}`}><span>{tree.name}</span></div>
                                {draggable && !root && <div {...provided.dragHandleProps} className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
                            </div>
                            {isOpenned[tree.id] &&
                                <div className={`${styles.folderContent} ${root ? styles.noMargin : ''}`}>
                                    {!tree.children.length && <div className={styles.empty}>folder is empty</div>}
                                    {tree.children.map(child => {
                                        if (child.isFolder) {
                                            return <Folder
                                                key={child.id}
                                                draggable={draggable}
                                                tree={child}
                                                selectedID={selectedID}
                                                setSelectedID={setSelectedID}
                                                isOpenned={isOpenned}
                                                setIsOppened={setIsOppened}
                                            />
                                        } else {
                                            return <Element
                                                element={child}
                                                draggable={draggable}
                                                selectedID={selectedID}
                                                setSelectedID={setSelectedID}
                                            />
                                        }
                                    })}
                                </div>}
                        </div>
                    }
                </div>)}
            </Draggable>
        </div>)}
    </Droppable>
}

function Element({ element, selectedID, setSelectedID, draggable, index }) {
    return <Draggable draggableId={`drag_${element.id}`} type="tree">
        {(provided, snapshot) => (<div>
            <div className={`
                ${styles.treeElement}
                ${element.id == selectedID ? styles.selected : ''}`}
                onClick={() => setSelectedID(element.id)}
                {...provided.draggableProps}
                ref={provided.innerRef}
            >
                <div className={`${styles.treeElementName} icon icon-${element.icon}`}><span>{element.name}</span></div>
                {draggable && <div {...provided.dragHandleProps} className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
            </div>
            {snapshot.isDragging &&
                <div style={{ opacity: .5 }}>
                    <div className={`
                        ${styles.treeElement}
                        ${element.id == selectedID ? styles.selected : ''}`}
                    >
                        <div className={`${styles.treeElementName} icon icon-${element.icon}`}><span>{element.name}</span></div>
                        {draggable && <div {...provided.dragHandleProps} className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
                    </div>
                </div>}
        </div>)}
    </Draggable>
}


function Example() {

    const onDragEnd = (result) => {
        console.log('=================')
        console.log(result)
    }

    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='drop_1' type="tree">
            {(provided, snapshot) => (
                <div ref={provided.innerRef}
                    style={{ backgroundColor: snapshot.isDraggingOver ? 'orange' : 'yellow', margin: 5 }}
                    {...provided.droppableProps}>
                    <Draggable draggableId='drag_1_1' type="tree">
                        {(provided, snapshot) => (
                            <div>
                                <div {...provided.draggableProps}
                                    ref={provided.innerRef}
                                >
                                    <div style={{ padding: 10, margin: 5 }}>
                                        <span {...provided.dragHandleProps} >DRAG ME</span>
                                        draggable 1-1
                                    </div>
                                </div>
                                {snapshot.isDragging &&
                                    <div style={{ padding: 10, margin: 5, opacity: .5 }}>
                                        <span {...provided.dragHandleProps} >DRAG ME</span>
                                        draggable 1-1
                                    </div>
                                }
                            </div>
                        )}
                    </Draggable>

                    <Draggable draggableId='drag_1' type="tree">
                        {(provided, snapshot) => (
                            <div>
                                <div {...provided.draggableProps}
                                    ref={provided.innerRef}
                                >
                                    <div style={{ padding: 4, backgroundColor: 'red', margin: 5 }}>
                                        <span {...provided.dragHandleProps} >DRAG</span>
                                        draggable 1
                                    </div>
                                </div>
                                {snapshot.isDragging &&
                                    <div style={{ padding: 4, backgroundColor: 'red', margin: 5, opacity: .5 }}>
                                        <span {...provided.dragHandleProps} >DRAG</span>
                                        draggable 1
                                    </div>
                                }
                            </div>
                        )}
                    </Draggable>
                    <Draggable draggableId='drag_2' type="tree">
                        {(provided, snapshot) => (
                            <div>
                                <div {...provided.draggableProps}
                                    ref={provided.innerRef}
                                >
                                    <div style={{ padding: 4, backgroundColor: 'red', margin: 5 }}>
                                        <span {...provided.dragHandleProps} >DRAG</span>
                                        draggable 2
                                    </div>
                                </div>
                                {snapshot.isDragging &&
                                    <div style={{ padding: 4, backgroundColor: 'red', margin: 5, opacity: .5 }}>
                                        <span {...provided.dragHandleProps} >DRAG</span>
                                        draggable 2
                                    </div>
                                }
                                <Droppable droppableId='drop_3' type="tree">
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef}
                                            style={{ padding: 10, backgroundColor: snapshot.isDraggingOver ? 'orange' : 'yellow', margin: 5 }}
                                            {...provided.droppableProps}>
                                            droppable 2
                                            <Draggable draggableId='drag_4' type="tree">
                                                {(provided, snapshot) => (<div>
                                                    <div {...provided.draggableProps}
                                                        ref={provided.innerRef}
                                                    >
                                                        <div style={{ padding: 4, backgroundColor: 'red', margin: 5 }}>
                                                            <span {...provided.dragHandleProps} >DRAG</span>
                                                            draggable 4
                                                        </div>
                                                    </div>
                                                    {snapshot.isDragging &&
                                                        <div style={{ padding: 4, backgroundColor: 'red', margin: 5, opacity: .5 }}>
                                                            <span {...provided.dragHandleProps} >DRAG</span>
                                                            draggable 4
                                                        </div>
                                                    }
                                                    <Droppable droppableId='drop_4' type="tree">
                                                        {(provided, snapshot) => (
                                                            <div ref={provided.innerRef}
                                                                style={{ padding: 10, backgroundColor: snapshot.isDraggingOver ? 'orange' : 'yellow', margin: 5 }}
                                                                {...provided.droppableProps}>
                                                                droppable 2
                                                                <Draggable draggableId='drag_5' type="tree">
                                                                    {(provided, snapshot) => (<div>
                                                                        <div {...provided.draggableProps}
                                                                            ref={provided.innerRef}
                                                                        >
                                                                            <div style={{ padding: 4, backgroundColor: 'red', margin: 5 }}>
                                                                                <span {...provided.dragHandleProps} >DRAG</span>
                                                                                draggable 4
                                                                            </div>
                                                                        </div>
                                                                        {snapshot.isDragging &&
                                                                            <div style={{ padding: 4, backgroundColor: 'red', margin: 5, opacity: .5 }}>
                                                                                <span {...provided.dragHandleProps} >DRAG</span>
                                                                                draggable 4
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                    )}
                                                                </Draggable>
                                                                {/* {provided.placeholder} */}
                                                            </div>
                                                        )}
                                                    </Droppable>
                                                </div>
                                                )}
                                            </Draggable>
                                            {/* {provided.placeholder} */}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        )}
                    </Draggable>
                    {/* {provided.placeholder} */}
                </div>
            )}
        </Droppable>
        <Droppable droppableId='drop_2' type="tree">
            {(provided, snapshot) => (
                <div ref={provided.innerRef}
                    style={{ padding: 10, backgroundColor: snapshot.isDraggingOver ? 'orange' : 'yellow', margin: 5 }}
                    {...provided.droppableProps}>
                    droppable 2
                    <Draggable draggableId='drag_3' type="tree">
                        {(provided, snapshot) => (<div>
                            <div {...provided.draggableProps}
                                ref={provided.innerRef}
                            >
                                <div style={{ padding: 4, backgroundColor: 'red', margin: 5 }}>
                                    <span {...provided.dragHandleProps} >DRAG</span>
                                    draggable 3
                                </div>
                            </div>
                            {snapshot.isDragging &&
                                <div style={{ padding: 4, backgroundColor: 'red', margin: 5, opacity: .5 }}>
                                    <span {...provided.dragHandleProps} >DRAG</span>
                                    draggable 3
                                </div>
                            }
                        </div>
                        )}
                    </Draggable>
                    {/* {provided.placeholder} */}
                </div>
            )}
        </Droppable>
    </DragDropContext>
}