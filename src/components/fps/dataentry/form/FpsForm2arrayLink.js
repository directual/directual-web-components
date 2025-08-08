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
import _ from 'lodash'


const SafeInnerHTML = ({ html, label = 'unknown', ...props }) => {
    if (html === null || html === undefined) {
        console.error(`[CARDS2 DEBUG] html prop is ${html} for ${label}`, { html, label });
        return null; // Рендерим ничего вместо краша
    }
    return <InnerHTML {...props} html={html} />;
};

export default function ElementArray(props) {
    const { element, state, setState, extendedModel, editModelAL, model, currentBP, checkHidden, callEndpointPOST } = props

    // DEBUG ==========================================
    // console.log("ElementArray")
    // console.log(element)
    // console.log(extendedModel)
    // console.log(tableColumns)
    // console.log(tableData)
    // ================================================

    const tableColumns = JSON.parse(_.get(element, "array.table.rawData")) || []
    const tableData = _.get(extendedModel, _.get(element, "array.table.field")) || []
    const add_on = _.get(element, "array.table.add")
    const delete_on = _.get(element, "array.table.delete")
    const edit_on = _.get(element, "array.table.edit")
    const endpoint = _.get(element, "array.table.endpoint")

    const [isAdding, setIsAdding] = useState(false)
    const [tempItem, setTempItem] = useState({})

    return <div className={`${styles.form2ArrayLink} FPS_FORM2_ARRAY_LINK`}>
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
                {(tableData || []).map(item => <TableRow key={item.id}
                    item={item}
                    delete_on={delete_on}
                    edit_on={edit_on}
                    callEndpointPOST={callEndpointPOST}
                    endpoint={endpoint}
                    deleteRow={() => {
                        editModelAL(_.get(element, "array.table.field"))('delete', item.id)
                    }}
                    onFinishEditing={(item) => {
                        console.log("onFinishEditing! TODO")
                        console.log(item)
                        // TODO
                        //editModelAL(_.get(element, "array.table.field"))('replace', item.id, item)
                    }}
                    tableColumns={tableColumns} />)}
                {isAdding && <TableRow key="adding"
                    adding={true}
                    tempItem={tempItem}
                    setTempItem={setTempItem}
                    cancelAdding={() => {
                        setIsAdding(false)
                        setTempItem({})
                    }}
                    onFinishAdding={(item) => {
                        console.log("onFinishAdding! TODO")
                        console.log(item)
                        setIsAdding(false)
                        setTempItem({})
                        // TODO
                        //editModelAL(_.get(element, "array.table.field"))('add', item.id, item)
                    }}
                    tableColumns={tableColumns} />}
            </tbody>
        </table>
        {add_on && !isAdding && <ActionPanel margin={{ top: 12, bottom: 12 }}>
            <Button verySmall height={32} icon="plus" onClick={() => { setIsAdding(true) }}>Add element</Button>
        </ActionPanel>}
    </div>
}

function TableRow(props) {
    const { item, tableColumns, delete_on, deleteRow, edit_on, onFinishEditing,
        adding, setTempItem, tempItem, cancelAdding, onFinishAdding, callEndpointPOST, endpoint } = props

    const [isEditing, setIsEditing] = useState(false)
    const [editingItem, setEditingItem] = useState(item)

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

        callEndpointPOST && callEndpointPOST(
            endpoint,
            body,
            (result, content, data) => {
                console.log("sendObject result")
                console.log(result)
                console.log(content)
                console.log(data)
                finish && finish(content, data)
            },
            true
        )
    }

    if (isEditing) {
        return <tr>
            {tableColumns.map(column => <td key={column.id}>
                <Input nomargin type="string"
                    placeholder={column.title || column.id}
                    defaultValue={getValue(_.get(editingItem, column.id))}
                    onChange={value => { setEditingItem({ ...editingItem, [column.id]: value }) }} />
            </td>)}
            <td><ActionPanel>
                <Button icon="done" verySmall transparent height={32} onClick={() => sendObject(onFinishEditing)} />
                <Button icon="ban" verySmall transparent height={32} onClick={() => { setIsEditing(false) }} />
            </ActionPanel></td>
        </tr>
    }

    if (adding) {
        return <tr>
            {tableColumns.map(column => <td key={column.id}>
                <Input nomargin type="string"
                    placeholder={column.title || column.id}
                    defaultValue={_.get(tempItem, column.id)}
                    onChange={value => { setTempItem({ ...tempItem, [column.id]: value }) }} />
            </td>)}
            <td><ActionPanel>
                <Button icon="done" verySmall transparent height={32} onClick={() => sendObject(onFinishAdding)} />
                <Button icon="ban" verySmall transparent height={32} onClick={cancelAdding} />
            </ActionPanel></td>
        </tr>
    }

    return <tr>
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