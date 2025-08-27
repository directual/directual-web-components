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
// Убираем react-beautiful-dnd - будем использовать нативный HTML5 drag'n'drop
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

// Получение формата поля (например, markdown)
const getFieldFormat = (fieldSysName, arrayLinkField, data) => {
    const fieldInfo = getLinkedFieldInfo(fieldSysName, arrayLinkField, data)
    return fieldInfo ? fieldInfo.format : null
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

    // Нативный HTML5 drag'n'drop
    const [draggedIndex, setDraggedIndex] = useState(null)
    const [dropZoneIndex, setDropZoneIndex] = useState(null)

    const handleDragStart = (e, index) => {
        setDraggedIndex(index)
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/html', e.target.outerHTML)
        e.target.style.opacity = '0.5'
    }

    const handleDragEnd = (e) => {
        e.target.style.opacity = '1'
        setDraggedIndex(null)
        setDropZoneIndex(null)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }

    const handleDragEnter = (e, index) => {
        e.preventDefault()
        if (draggedIndex !== null && draggedIndex !== index) {
            setDropZoneIndex(index)
        }
    }

    const handleDragLeave = (e) => {
        // Проверяем что мы действительно покинули элемент
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setDropZoneIndex(null)
        }
    }

    const handleDrop = (e, dropIndex) => {
        e.preventDefault()
        setDropZoneIndex(null)
        
        if (draggedIndex === null || draggedIndex === dropIndex) {
            return
        }

        // Создаем новый массив с измененным порядком
        const newTableData = Array.from(tableData)
        const [removed] = newTableData.splice(draggedIndex, 1)
        newTableData.splice(dropIndex, 0, removed)

        // Обновляем extendedModel
        const fieldPath = _.get(element, "array.table.field")
        const currentExtModel = { ...extendedModel }
        _.set(currentExtModel, fieldPath, newTableData)
        setExtendedModel(currentExtModel)

        // Обновляем модель (массив ID через запятую)
        const newModelValue = newTableData.map(item => item.id).join(",")
        const currentModel = { ...model }
        _.set(currentModel, fieldPath, newModelValue)
        setModel(currentModel)

        setDraggedIndex(null)
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
                <tbody>
                    {(tableData || []).map((item, index) => <TableRow 
                        key={item.id}
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
                        // Нативный HTML5 drag'n'drop
                        isDraggable={sort_on}
                        dragIndex={index}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        isDragging={draggedIndex === index}
                        isDropZone={dropZoneIndex === index}
                    />)}
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
        </table>
    )

    return <div className={`${styles.form2ArrayLink} FPS_FORM2_ARRAY_LINK`} data-sortable={sort_on ? "true" : "false"}>
        {tableContent}
        {add_on && !isAdding && <ActionPanel margin={{ top: 12, bottom: 12 }}>
            <Button verySmall height={32} icon="plus" onClick={() => { setIsAdding(true) }}>{buttonLabel}</Button>
        </ActionPanel>}
    </div>
}

function TableRow(props) {
    const { item, tableColumns, delete_on, deleteRow, edit_on, onFinishEditing,
        adding, setTempItem, tempItem, cancelAdding, onFinishAdding, callEndpointPOST, endpoint,
        data, arrayLinkField, isDraggable, dragIndex, onDragStart, onDragEnd, onDragOver, 
        onDragEnter, onDragLeave, onDrop, isDragging, isDropZone } = props

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
        return <tr 
            draggable={isDraggable}
            onDragStart={(e) => isDraggable && onDragStart(e, dragIndex)}
            onDragEnd={(e) => isDraggable && onDragEnd(e)}
            onDragOver={(e) => isDraggable && onDragOver(e)}
            onDragEnter={(e) => isDraggable && onDragEnter(e, dragIndex)}
            onDragLeave={(e) => isDraggable && onDragLeave(e)}
            onDrop={(e) => isDraggable && onDrop(e, dragIndex)}
            className={`${isDragging ? styles.dragging : ""} ${isDropZone ? styles.dropZone : ""}`}
            style={{ cursor: isDraggable ? 'grab' : 'default' }}
        >
            {tableColumns.map(column => {
                const fieldImask = getFieldImask(column.id, arrayLinkField, data)
                const fieldFormat = getFieldFormat(column.id, arrayLinkField, data)
                console.log(`[EDITING] Field ${column.id} imask:`, fieldImask, 'format:', fieldFormat)

                if (fieldFormat === 'markdown') {
                    return <td key={column.id}>
                        <Input
                            type="markdown"
                            edit={true}
                            nomargin={true}
                            disabled={isSending}
                            defaultValue={getValue(_.get(editingItem, column.id))}
                            onChange={value => { setEditingItem({ ...editingItem, [column.id]: value }) }}
                        />
                    </td>
                }

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
            <td><ActionPanel nowrap>
                <Button icon="done" verySmall transparent height={32} onClick={() => { sendObject(onFinishEditing); setIsEditing(false) }} />
                <Button icon="ban" verySmall transparent height={32} onClick={() => { setIsEditing(false) }} />
            </ActionPanel></td>
        </tr>
    }

    if (adding) {
        return <tr>
            {tableColumns.map(column => {
                const fieldImask = getFieldImask(column.id, arrayLinkField, data)
                const fieldFormat = getFieldFormat(column.id, arrayLinkField, data)
                console.log(`[ADDING] Field ${column.id} imask:`, fieldImask, 'format:', fieldFormat)

                if (fieldFormat === 'markdown') {
                    return <td key={column.id}>
                        <Input
                            type="markdown"
                            edit={true}
                            nomargin={true}
                            disabled={isSending}
                            placeholder={column.title || column.id}
                            defaultValue={_.get(tempItem, column.id)}
                            onChange={value => { setTempItem({ ...tempItem, [column.id]: value }) }}
                        />
                    </td>
                }

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
            <td><ActionPanel nowrap>
                <Button icon="done" verySmall transparent height={32} onClick={() => sendObject(onFinishAdding)} />
                <Button icon="ban" verySmall transparent height={32} onClick={cancelAdding} />
            </ActionPanel></td>
        </tr>
    }

    return <tr 
        draggable={isDraggable}
        onDragStart={(e) => isDraggable && onDragStart(e, dragIndex)}
        onDragEnd={(e) => isDraggable && onDragEnd(e)}
        onDragOver={(e) => isDraggable && onDragOver(e)}
        onDragEnter={(e) => isDraggable && onDragEnter(e, dragIndex)}
        onDragLeave={(e) => isDraggable && onDragLeave(e)}
        onDrop={(e) => isDraggable && onDrop(e, dragIndex)}
        className={`${isDragging ? styles.dragging : ""} ${isDropZone ? styles.dropZone : ""}`}
        style={{ cursor: isDraggable ? 'grab' : 'default' }}
    >
        {tableColumns.map(column => {
            const fieldFormat = getFieldFormat(column.id, arrayLinkField, data)
            const cellValue = getValue(_.get(item, column.id))

            return <td key={column.id}>
                {fieldFormat === 'markdown' && column.content == "{{" + column.id + "}}" ? (
                    <Input
                        type="markdown"
                        edit={false}
                        nomargin={true}
                        defaultValue={cellValue}
                        readOnly={true}
                    />
                ) : (
                    template(column.content, item) &&
                    <SafeInnerHTML allowRerender={true} html={template(column.content, item)} />
                )}
            </td>
        })}
        {(edit_on || delete_on) && <td><ActionPanel nowrap>
            {edit_on && <Button icon="edit" verySmall transparent height={32} onClick={() => { setIsEditing(true) }} />}
            {delete_on && <Button icon="delete" verySmall transparent height={32} onClick={deleteRow} />}
        </ActionPanel>
        </td>}
    </tr>
}