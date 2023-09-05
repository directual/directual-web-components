import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Loader from '../loader/loader'
import styles from './tree.module.css'

export function Tree(props) {

    const { options, draggable, onCheck, loading, move, oneLevel, host, submitTree, currentTree, rootName } = props

    const defaultTree = {
        id: 'root',
        icon: 'folder',
        name: rootName || 'Root',
        isFolder: true,
        children: []
    }

    const trashFolder = options.filter(i => i.id == 'trash').length > 0 ? options.filter(i => i.id == 'trash')[0] : null

    const [tree, setTree] = useState(props.defaultTree || defaultTree)
    const [isOpenned, setIsOppened] = useState({ root: true })
    const [selectedID, setSelectedID] = useState(props.selectedID)
    const [localLoading, setLocalLoading] = useState(true) // костыль под beautiful-dnd, чтобы DOM-дерево успело подгрузиться

    const saveTree = (treeSave) => {
        // console.log("saveTree")
        setTree(treeSave)
        submitTree && submitTree(treeSave)
    }

    useEffect(() => !currentTree && composeTree(options), [options])
    useEffect(() => expandTree(), [tree])
    useEffect(() => {
        if (props.selectedID != selectedID) {
            setSelectedID(props.selectedID)
        }
    }, [props.selectedID])

    function selectOption(option) {
        setSelectedID(option)
        onCheck(option)
    }

    function composeTree(options) {
        // console.log('====composeTree=====')
        // console.log(options)
        function collectChildren(folder) {
            let children = (options || []).filter(i => {
                return i.parentID == folder
            }) || []
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
                    sysName: i.sysName,
                    children: collectChildren(i.id)
                }
            })
        }
        let treeSave = { ...tree }
        treeSave.children = collectChildren(tree.id)
        // console.log(treeSave)
        saveTree(treeSave)
    }

    function expandTree() {
        // console.log('expandTree')
        // console.log(selectedID)
        // console.log(trashFolder.id)
        if (oneLevel || (trashFolder && selectedID == trashFolder.id)) { return }
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

    // бля я мозг сломал, пока это писал
    const dndChild = (id, destination) => {

        console.log("dndChild")
        console.log(tree)

        const removeElement = (children, setNewChildren, setElement) => {
            children.forEach((child,index) => {
                if (child.id == id) {
                    setElement(child)
                    children.splice(index, 1) // remove element
                }
                child.children.length && removeElement(child.children, (newChildren) => {
                    child.children = newChildren;
                }, setElement)
            })
            setNewChildren(children)
        }

        let element = {}

        removeElement(tree.children, newChildren => {
            const copyTree = { ...tree }
            copyTree.children = newChildren;
            saveTree(copyTree)
        }, elm => {
            element = elm
        })

        const addElement = (children, setNewChildren, parentID, element) => {
            children.forEach((child,index) => {
                child.children.length && addElement(child.children, (newChildren) => {
                    child.children = newChildren;
                }, child.id, element)
            })
            if (destination == parentID) {
                children.splice(0, 0, element) // add element
            }
            setNewChildren(children)
        }

        addElement(tree.children, newChildren => {
            const copyTree = { ...tree }
            copyTree.children = newChildren;
            saveTree(copyTree)
        }, 'root', element)

    }

    const onDragEnd = (result) => {
        console.log('========onDragEnd=========')
        console.log(result)
        if (!result.destination) { return }
        const ID = result.draggableId.substring(5)
        const to = result.destination.droppableId.substring(7)
        if (ID == to) { return }
        if (currentTree) {
            dndChild(ID, to)
        } else { move(ID, to) }
    }

    if (oneLevel) {
        return <div className={styles.treeWrapper}>
            {loading || localLoading ? <Loader>Loading tree...</Loader> :
                <DragDropContext onDragEnd={onDragEnd}>
                    {options.map(folder => <PlainFolder
                        key={folder.id}
                        folder={folder}
                        selectedID={selectedID}
                        setSelectedID={selectOption}
                    //isOpenned={isOpenned}
                    // setIsOppened={setIsOppened}
                    />)}
                </DragDropContext>}
        </div>
    }

    const moveChild = (id, direction) => {
        const rearrangeChildren = (children, rearrange) => {
            const index = _.findIndex(children, { 'id': id });
            // console.log('index = ' + index)
            if (index != -1) {
                const element = children[index]
                children.splice(index, 1)
                if (direction == 'up') {
                    children.splice(index - 1, 0, element)
                } else { children.splice(index + 1, 0, element) }
                rearrange(children)
            } else {
                children.forEach((child, i) => {
                    if (child.children.length) {
                        rearrangeChildren(child.children, (rearranged) => {
                            child.children = rearranged;
                        })
                    }
                })
                rearrange(children)
            }
        }
        rearrangeChildren(tree.children, (rearranged) => {
            const copyTree = { ...tree }
            copyTree.children = rearranged;
            saveTree(copyTree)
        })
    }

    const moveUp = (id) => moveChild(id,'up')
    const moveDown = (id) =>  moveChild(id,'down')

    return <div className={styles.treeWrapper}>
        {loading || localLoading ? <Loader>Loading tree...</Loader> : <DragDropContext onDragEnd={onDragEnd}>
            <Folder
                root
                host={host}
                key={tree.id}
                draggable={draggable}
                tree={tree}
                moveUp={moveUp}
                moveDown={moveDown}
                selectedID={selectedID}
                setSelectedID={selectOption}
                isOpenned={isOpenned}
                setIsOppened={setIsOppened}
            />
        </DragDropContext>}
        {trashFolder && <hr className={styles.hr} />}
        {trashFolder && <PlainFolder
            folder={{
                id: trashFolder.id,
                icon: trashFolder.icon,
                value: trashFolder.name,
            }}
            selectedID={selectedID}
            setSelectedID={selectOption}
        />}
    </div>
}

function PlainFolder({ folder, setSelectedID, selectedID }) {

    return <div className={`
        ${styles.folderName} 
        ${styles.treeElement}
        ${folder.id == selectedID ? styles.selected : ''}`}
        onClick={() => {
            //console.log(folder.id)
            setSelectedID(folder.id)
        }}
    >
        <div className={`${styles.treeElementName} icon icon-${folder.icon}`}><span>{folder.value}</span></div>
    </div>
}


function Folder({ root, tree, isOpenned, setIsOppened, host, selectedID, setSelectedID, draggable, index, folderLength, moveUp, moveDown }) {
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
                        {draggable && index != 0 && !root && <div className={`${styles.noShrink} ${styles.up} icon icon-up`}
                            onClick={e => {
                                e.stopPropagation()
                                moveUp(tree.id)
                            }
                            } />}
                        {draggable && !root && index + 1 != folderLength && <div className={`${styles.noShrink} ${styles.up} icon icon-down`}
                            onClick={e => {
                                e.stopPropagation()
                                moveDown(tree.id)
                            }
                            } />}
                        {draggable && !isOpenned[tree.id] && !root && <div {...provided.dragHandleProps} className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
                    </div>
                    {isOpenned[tree.id] &&
                        <div className={`${styles.folderContent} ${root ? styles.noMargin : ''}`}>
                            {!tree.children.length && <div className={styles.empty}>folder is empty</div>}
                            {tree.children.map((child, index) => {
                                // console.log("tree.children")
                                // console.log(tree.children)
                                // console.log(tree.children.length)
                                if (child.isFolder) {
                                    return <Folder
                                        key={child.id}
                                        index={index}
                                        moveUp={moveUp}
                                        moveDown={moveDown}
                                        folderLength={tree.children.length}
                                        draggable={draggable}
                                        tree={child}
                                        host={host}
                                        selectedID={selectedID}
                                        setSelectedID={setSelectedID}
                                        isOpenned={isOpenned}
                                        setIsOppened={setIsOppened}
                                    />
                                } else {
                                    return <Element
                                        element={child}
                                        index={index}
                                        folderLength={tree.children.length}
                                        moveUp={moveUp}
                                        moveDown={moveDown}
                                        host={host}
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
                                    {tree.children.map((child, index) => {
                                        if (child.isFolder) {
                                            return <Folder
                                                key={child.id}
                                                index={index}
                                                folderLength={tree.children.length}
                                                draggable={draggable}
                                                moveUp={moveUp}
                                                moveDown={moveDown}
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
                                                moveUp={moveUp}
                                                moveDown={moveDown}
                                                folderLength={tree.children.length}
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

function Element({ element, host, selectedID, setSelectedID, draggable, index, folderLength, moveUp, moveDown }) {
    // console.log(element)
    return <Draggable draggableId={`drag_${element.id}`} type="tree">
        {(provided, snapshot) => (<div>
            <a className={`
                ${styles.treeElement}
                ${element.id == selectedID ? styles.selected : ''}`}
                onClick={(e) => {
                    e.preventDefault()
                    setSelectedID(element.id)
                }}
                {...provided.draggableProps}
                ref={provided.innerRef}
                href={host ? `${host}${element.sysName}` : null}
            >
                <div className={`${styles.treeElementName} icon icon-${element.icon}`}><span>{element.name}</span></div>
                {draggable && index != 0 && <div className={`${styles.noShrink} ${styles.up} icon icon-up`}
                    onClick={e => {
                        e.stopPropagation()
                        moveUp(element.id)
                    }
                    } />}
                {draggable && index + 1 != folderLength && <div className={`${styles.noShrink} ${styles.up} icon icon-down`}
                    onClick={e => {
                        e.stopPropagation()
                        moveDown(element.id)
                    }
                    } />}
                {draggable && <div {...provided.dragHandleProps} className={`${styles.noShrink} ${styles.drag} icon icon-details`} onClick={e => e.stopPropagation()} />}
            </a>
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