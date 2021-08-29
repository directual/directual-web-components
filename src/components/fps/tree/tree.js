import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './tree.module.css'

export function Tree(props) {

    const { options, draggable } = props

    // function composeTree(options) {
    //     console.log(options)
    //     let tree = {}
    //     let rootOptions = (options || []).filter(i => !i.parentID) || []
    //     rootOptions.forEach(i => { 
    //         tree[i.id] = {id: i.id, name: i.name, icon: i.icon, isFolder: i.isFolder}
    //     })
    //     console.log(tree)
    // }
    // composeTree(options)

    const [isOpenned, setIsOppened] = useState({
        root: true,
        1: true,
        2: false
    })

    const [selectedID, setSelectedID] = useState('root')

    const defaultTree = {
        id: 'root',
        icon: 'folder',
        name: 'Root',
        isFolder: true,
        children: [
            {
                id: 1, name: 'System', icon: "folder", isFolder: true,
                children: [
                    {
                        id: 4, name: 'Constants Constants Constants Constants Constants', icon: "folder", isFolder: true,
                        children: [
                            { id: 6, name: 'Email', icon: "database", isFolder: false },
                            { id: 7, name: 'SMS', icon: "database", isFolder: false }
                        ]
                    },
                    { id: 5, name: 'Files', icon: "clip", isFolder: false },
                ]
            },
            {
                id: 2, name: 'Logs', icon: "folder", isFolder: true,
                children: []
            },
            { id: 3, name: 'App users', icon: "user", isFolder: false },
        ]
    }

    const [tree, setTree] = useState(defaultTree)

    const onDragEnd = (result) => {
        console.log('=================')
        console.log(result)
    }

    return <div className={styles.treeWrapper}>
        <Folder
            root
            draggable={draggable}
            tree={tree}
            selectedID={selectedID}
            setSelectedID={setSelectedID}
            isOpenned={isOpenned}
            setIsOppened={setIsOppened}
        />
        <DraggableTree tree={tree} {...props} />
        <Example />
    </div>
}



function Folder({ root, tree, isOpenned, setIsOppened, selectedID, setSelectedID, draggable }) {
    return <div
        className={`${styles.folder} `}
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
                }}
            />}
            <div className={`${styles.treeElementName} icon icon-${tree.icon}`}><span>{tree.name}</span></div>
            {draggable && !root && <div className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
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

function Element({ element, selectedID, setSelectedID, draggable }) {
    return <div className={`
        ${styles.treeElement}
        ${element.id == selectedID ? styles.selected : ''}`}
        onClick={() => setSelectedID(element.id)}
    >
        <div className={`${styles.treeElementName} icon icon-${element.icon}`}><span>{element.name}</span></div>
        {draggable && <div className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
    </div>
}

function DraggableTree(props) {
    const { tree } = props
    const onDragEnd = (result) => {
        console.log('=================')
        console.log(result)
    }

    return <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='root' type="tree">
            {(provided, snapshot) => (
                <div ref={provided.innerRef}
                    style={{ padding: 10, backgroundColor: snapshot.isDraggingOver ? 'orange' : 'yellow', margin: 5 }}
                    {...provided.droppableProps}>
                    Root
                    {tree.children.map(folder => <DraggableFolder key={folder.id} folder={folder} />)}
                </div>
            )}
        </Droppable>

    </DragDropContext>
}

function DraggableFolder({ folder }) {
    return <Draggable draggableId={`drag_${folder.id}`} type="tree">
    {(provided, snapshot) => (
        <div>
            <div {...provided.draggableProps}
                ref={provided.innerRef}
            >
                <div style={{ padding: 10, margin: 5 }}>
                    <span {...provided.dragHandleProps} >[DRAG ME] </span>
                    {folder.name}
                </div>
            </div>
            {snapshot.isDragging &&
                <div style={{ padding: 10, margin: 5, opacity: .5 }}>
                    <span {...provided.dragHandleProps} >[DRAG ME] </span>
                    {folder.name}
                </div>
            }
        </div>
    )}
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