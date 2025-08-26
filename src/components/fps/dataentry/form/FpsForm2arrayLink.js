import React, { useState, useEffect } from "react"
import styles from './form2.module.css'
import { FormSection } from "./FpsForm"
import InnerHTML from 'dangerously-set-html-content'
import Hint from '../../hint/hint'
import Button from '../../button/button'
import ActionPanel from '../../actionspanel/actionspanel'
import Input from '../input/input'
import { InputRow } from '../input/input'
import { InputForm } from './InputForm'
import { FpsForm2Input, FpsForm2HiddenInput } from './FpsForm2Input'
import FpsForm2Action from './FpsForm2Action'
import FormSteps from './FormSteps'
import { template } from '../../templating/template'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import _ from 'lodash'

// Безопасный парсинг JSON, не крашится если говно
const safeJsonParse = (jsonString, fallback = []) => {
    try {
        if (!jsonString) return fallback
        return JSON.parse(jsonString) || fallback
    } catch (error) {
        console.warn('Не смог распарсить JSON, хуйня какая-то:', jsonString, error)
        return fallback
    }
}

// Парсинг imask из строки (скопировано из FpsForm2Input)
const parseWithCustomTypes = (str) => {
    if (!str) return;
    // Replace recognized type strings with actual constructors or RegExp/Date objects
    var typeReplacedStr = str
    try {
        typeReplacedStr = str
            .replace(/:\s*Number/g, ': Number')
            .replace(/:\s*Boolean/g, ': Boolean')
            .replace(/:\s*String/g, ': String')
            .replace(/:\s*\/(.*?)\//g, (_, regex) => `: new RegExp(${JSON.stringify(regex)})`)
            .replace(/:\s*new Date\('(.+?)'\)/g, (_, dateStr) => `: new Date('${dateStr}')`);
    } catch (error) {
        console.error("Parsing error:", error);
    }
    try {
        // Evaluate the string safely (ensure the string is from a trusted source)
        return new Function('return (' + typeReplacedStr + ')')();
    } catch (error) {
        console.error("Parsing error:", error);
        return null;
    }
};

// Получение информации о поле из linked структуры
const getLinkedFieldInfo = (fieldSysName, arrayLinkField, data) => {
    // Находим информацию об arrayLink поле в филдах
    const arrayLinkFieldInfo = _.find(_.get(data, "fileds"), { sysName: arrayLinkField }) || 
                               _.find(_.get(data, "headers"), { sysName: arrayLinkField })
    
    if (!arrayLinkFieldInfo || !arrayLinkFieldInfo.link) {
        return null
    }
    
    // Находим структуру по link name
    const linkedStructure = _.find(_.get(data, "structures"), (struct) => struct.sysName === arrayLinkFieldInfo.link)
    
    if (!linkedStructure) {
        return null
    }
    
    // Парсим jsonObject чтобы найти поле
    const fields = safeJsonParse(linkedStructure.jsonObject, [])
    const fieldInfo = _.find(fields, { sysName: fieldSysName })
    
    return fieldInfo
}

// Получение imask для поля
const getFieldImask = (fieldSysName, arrayLinkField, data) => {
    const fieldInfo = getLinkedFieldInfo(fieldSysName, arrayLinkField, data)
    if (!fieldInfo || !fieldInfo.formatOptions || !fieldInfo.formatOptions.imask) {
        return null
    }
    
    return parseWithCustomTypes(fieldInfo.formatOptions.imask)
}

const SafeInnerHTML = ({ html, label = 'unknown', ...props }) => {
    if (html === null || html === undefined) {
        console.error(`[CARDS2 DEBUG] html prop is ${html} for ${label}`, { html, label });
        return null; // Рендерим ничего вместо краша
    }
    return <InnerHTML {...props} html={html} />;
};

export default function ElementArray(props) {
    const { element, state, setState, extendedModel, setExtendedModel, data, editModelAL, model, setModel, currentBP, checkHidden, callEndpointPOST } = props

    // DEBUG ==========================================
    // console.log("data")
    // console.log(data)
    // console.log(element)
    // console.log(extendedModel)
    // console.log(tableColumns)
    // console.log(tableData)
    // ================================================

    const tableColumns = _.get(element, "array.table.rawData") ? safeJsonParse(_.get(element, "array.table.rawData"), []) :
        _.get(element, "array.table.data") || []
    const tableData = _.get(extendedModel, _.get(element, "array.table.field")) || []
    const add_on = _.get(element, "array.table.add")
    const delete_on = _.get(element, "array.table.delete")
    const edit_on = _.get(element, "array.table.edit")
    const sort_on = _.get(element, "array.table.sort")
    const endpoint = _.get(element, "array.table.endpoint")
    const buttonLabel = _.get(element, "array.table.buttonLabel", "Add element")

    const [isAdding, setIsAdding] = useState(false)
    const [tempItem, setTempItem] = useState({})

    if (!_.get(element, "array.table.field")) return <div />

    // Handler для drag'n'drop сортировки
    const onDragEnd = (result) => {
        if (!result.destination) {
            return; // Dropped outside the list
        }
        
        if (result.destination.index === result.source.index) {
            return; // No change in position
        }

        const sourceIndex = result.source.index
        const destinationIndex = result.destination.index
        
        // Создаем новый массив с измененным порядком
        const newTableData = Array.from(tableData)
        const [removed] = newTableData.splice(sourceIndex, 1)
        newTableData.splice(destinationIndex, 0, removed)
        
        // Обновляем extendedModel - используем setExtendedModel напрямую
        const fieldPath = _.get(element, "array.table.field")
        // Обновляем extendedModel напрямую, так как editModelAL не поддерживает reorder
        const currentExtModel = { ...extendedModel }
        _.set(currentExtModel, fieldPath, newTableData)
        setExtendedModel(currentExtModel)
        
        // Также обновляем модель (массив ID через запятую)
        const newModelValue = newTableData.map(item => item.id).join(",")
        const currentModel = { ...model }
        _.set(currentModel, fieldPath, newModelValue)
        setModel(currentModel)
        
        // Отправляем изменения на эндпоинт если он настроен
        if (endpoint && callEndpointPOST) {
            // Создаем payload для обновления порядка всех элементов
            const orderPayload = newTableData.map((item, index) => ({
                id: item.id,
                order: index
            }))
            
            console.log("Sending reorder to endpoint:", endpoint, orderPayload)
            callEndpointPOST(
                endpoint + '/reorder', // Предполагаем что есть специальный эндпоинт для изменения порядка
                { items: orderPayload },
                (result) => {
                    console.log("Reorder result:", result)
                },
                true
            )
        }
    }

    if (_.isArray(tableData)) {
        // console.log("tableData is array")
        // console.log(tableData)
    } else {
        // console.log("tableData is not array")
        // console.log(tableData)
        return <div>loading...</div>
    }

    const tableContent = (
        <table className={styles.form2Table}>
            <thead>
                <tr>
                    {tableColumns.map(column => <th
                        className={`TH_column_${column.id}`}
                        key={column.id}>{column.title || column.id}</th>)}
                    {(edit_on || delete_on) && <th className={`${styles.TH_column_ACTIONS} TH_column_ACTIONS`}></th>}
                </tr>
            </thead>
{sort_on ? (
                <Droppable droppableId="array-table">
                    {(provided) => (
                        <tbody ref={provided.innerRef} {...provided.droppableProps}>
                            {(tableData || []).map((item, index) => (
                                <Draggable key={item.id} draggableId={`item-${item.id}`} index={index}>
                                    {(provided, snapshot) => (
                                        <TableRow 
                                            item={item}
                                            delete_on={delete_on}
                                            edit_on={edit_on}
                                            callEndpointPOST={callEndpointPOST}
                                            endpoint={endpoint}
                                            data={data}
                                            arrayLinkField={_.get(element, "array.table.field")}
                                            deleteRow={() => {
                                                editModelAL(_.get(element, "array.table.field"))('delete', item.id)
                                            }}
                                            onFinishEditing={(item) => {
                                                editModelAL(_.get(element, "array.table.field"))('replace', item.id, item)
                                            }}
                                            tableColumns={tableColumns}
                                            isDraggable={true}
                                            isDragging={snapshot.isDragging}
                                            dragProps={{
                                                ref: provided.innerRef,
                                                ...provided.draggableProps,
                                                ...provided.dragHandleProps
                                            }}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            {isAdding && <TableRow key="adding"
                                adding={true}
                                callEndpointPOST={callEndpointPOST}
                                tempItem={tempItem}
                                setTempItem={setTempItem}
                                endpoint={endpoint}
                                data={data}
                                arrayLinkField={_.get(element, "array.table.field")}
                                cancelAdding={() => {
                                    setIsAdding(false)
                                    setTempItem({})
                                }}
                                onFinishAdding={(item) => {
                                    console.log("onFinishAdding! TODO")
                                    console.log(item)
                                    setIsAdding(false)
                                    setTempItem({})
                                    editModelAL(_.get(element, "array.table.field"))('add', item.id, item)
                                }}
                                tableColumns={tableColumns} />}
                        </tbody>
                    )}
                </Droppable>
            ) : (
                <tbody>
                    {(tableData || []).map(item => <TableRow key={item.id}
                        item={item}
                        delete_on={delete_on}
                        edit_on={edit_on}
                        callEndpointPOST={callEndpointPOST}
                        endpoint={endpoint}
                        data={data}
                        arrayLinkField={_.get(element, "array.table.field")}
                        deleteRow={() => {
                            editModelAL(_.get(element, "array.table.field"))('delete', item.id)
                        }}
                        onFinishEditing={(item) => {
                            editModelAL(_.get(element, "array.table.field"))('replace', item.id, item)
                        }}
                        tableColumns={tableColumns} />)}
                    {isAdding && <TableRow key="adding"
                        adding={true}
                        callEndpointPOST={callEndpointPOST}
                        tempItem={tempItem}
                        setTempItem={setTempItem}
                        endpoint={endpoint}
                        data={data}
                        arrayLinkField={_.get(element, "array.table.field")}
                        cancelAdding={() => {
                            setIsAdding(false)
                            setTempItem({})
                        }}
                        onFinishAdding={(item) => {
                            console.log("onFinishAdding! TODO")
                            console.log(item)
                            setIsAdding(false)
                            setTempItem({})
                            editModelAL(_.get(element, "array.table.field"))('add', item.id, item)
                        }}
                        tableColumns={tableColumns} />}
                </tbody>
            )}
        </table>
    )

    return <div className={`${styles.form2ArrayLink} FPS_FORM2_ARRAY_LINK`} data-sortable={sort_on ? "true" : "false"}>
        {sort_on ? (
            <DragDropContext onDragEnd={onDragEnd}>
                {tableContent}
            </DragDropContext>
        ) : (
            tableContent
        )}
        {add_on && !isAdding && <ActionPanel margin={{ top: 12, bottom: 12 }}>
            <Button verySmall height={32} icon="plus" onClick={() => { setIsAdding(true) }}>{buttonLabel}</Button>
        </ActionPanel>}
    </div>
}

function TableRow(props) {
    const { item, tableColumns, delete_on, deleteRow, edit_on, onFinishEditing,
        adding, setTempItem, tempItem, cancelAdding, onFinishAdding, callEndpointPOST, endpoint,
        data, arrayLinkField, isDraggable, isDragging, dragProps } = props

    const [isEditing, setIsEditing] = useState(false)
    const [editingItem, setEditingItem] = useState(item)
    const [isSending, setIsSending] = useState(false)

    const getValue = value => {
        if (_.isObject(value)) {
            return _.get(value, "id") || JSON.stringify(value)
        }
        return value
    }

    function flattenObject(obj) {
        return _.mapValues(obj, value => {
            if (_.isPlainObject(value) && 'id' in value) {
                return value.id
            }
            return value
        })
    }

    const sendObject = (finish) => {
        // пуляем объект в дополнительный эндпоинт
        let body = {}
        if (isEditing) {
            body = flattenObject(editingItem)
        } else {
            body = flattenObject(tempItem)
        }

        setIsSending(true)
        callEndpointPOST && callEndpointPOST(
            endpoint,
            body,
            (result, content) => {
                // console.log("sendObject result")
                // console.log(result)
                // console.log(content)
                finish && finish(_.get(content, "result.data[0]") || _.get(result, "result.data[0]"))
                setIsSending(false)
            },
            true
        )
    }

    if (isEditing) {
        return <tr {...(isDraggable ? dragProps : {})} className={isDragging ? styles.dragging : ""}>
            {tableColumns.map(column => {
                const fieldImask = getFieldImask(column.id, arrayLinkField, data)
                console.log(`[EDITING] Field ${column.id} imask:`, fieldImask)
                const inputProps = {
                    nomargin: true,
                    type: "string",
                    disabled: isSending,
                    placeholder: column.title || column.id,
                    defaultValue: getValue(_.get(editingItem, column.id)),
                    onChange: value => { setEditingItem({ ...editingItem, [column.id]: value }) }
                }
                if (fieldImask) {
                    inputProps.imask = fieldImask
                }
                return <td key={column.id}>
                    <Input {...inputProps} />
                </td>
            })}
            <td><ActionPanel>
                <Button icon="done" verySmall transparent height={32} onClick={() => { sendObject(onFinishEditing); setIsEditing(false) }} />
                <Button icon="ban" verySmall transparent height={32} onClick={() => { setIsEditing(false) }} />
            </ActionPanel></td>
        </tr>
    }

    if (adding) {
        return <tr>
            {tableColumns.map(column => {
                const fieldImask = getFieldImask(column.id, arrayLinkField, data)
                console.log(`[ADDING] Field ${column.id} imask:`, fieldImask)
                const inputProps = {
                    nomargin: true,
                    type: "string",
                    disabled: isSending,
                    placeholder: column.title || column.id,
                    defaultValue: _.get(tempItem, column.id),
                    onChange: value => { setTempItem({ ...tempItem, [column.id]: value }) }
                }
                if (fieldImask) {
                    inputProps.imask = fieldImask
                }
                return <td key={column.id}>
                    <Input {...inputProps} />
                </td>
            })}
            <td><ActionPanel>
                <Button icon="done" verySmall transparent height={32} onClick={() => sendObject(onFinishAdding)} />
                <Button icon="ban" verySmall transparent height={32} onClick={cancelAdding} />
            </ActionPanel></td>
        </tr>
    }

    return <tr {...(isDraggable ? dragProps : {})} className={isDragging ? styles.dragging : ""}>
        {tableColumns.map(column => <td key={column.id}>
            {template(column.content, item) &&
                <SafeInnerHTML allowRerender={true} html={template(column.content, item)} />
            }
        </td>)}
        {(edit_on || delete_on) && <td><ActionPanel>
            {edit_on && <Button icon="edit" verySmall transparent height={32} onClick={() => { setIsEditing(true) }} />}
            {delete_on && <Button icon="delete" verySmall transparent height={32} onClick={deleteRow} />}
        </ActionPanel>
        </td>}
    </tr>
}