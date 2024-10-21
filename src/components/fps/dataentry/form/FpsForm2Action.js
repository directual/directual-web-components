import React, { useState, useEffect } from "react"
import styles from './form2.module.css'
import Button from '../../button/button'
import _ from 'lodash'
import Hint from "../../hint/hint"
import InnerHTML from 'dangerously-set-html-content'

export default function FpsForm2Action(props) {
    const { actionFormat, action, loading, onPerform, checkHidden, template } = props

    const [performed, setPerformed] = useState(false)

    useEffect(() => {
        if (action && action.autoAction) {
            const delay = (action.autoAction_delay || 0) * 1000
            setTimeout(() => {
                !performed && onPerform()
                setPerformed(true)
            }, delay)
        }
    }, [])

    const sendAction = e => {
        onPerform()
        setPerformed(true)
    }

    if (!action) return <div>No action <code>action_1715086004658</code></div>
    if (action.autoAction) return <React.Fragment></React.Fragment>
    if (actionFormat._conditionalView &&
        !checkHidden(actionFormat) &&
        actionFormat._action_conditional_disable_or_hide !== "disable"
    ) return <React.Fragment></React.Fragment>

    if (performed && actionFormat._action_oneTime) return <Hint margin={{top:0, bottom:0}}>
        {actionFormat._action_oneTime_message && <InnerHTML allowRerender={true} html={template(actionFormat._action_oneTime_message)} />}
    </Hint>

    return <Button
        danger={actionFormat._action_button_type == "danger"}
        accent={actionFormat._action_button_type == "accent"}
        tooltip={actionFormat._action_addTooltip && template(actionFormat._action_addTooltip_text)}
        disabled={actionFormat._conditionalView &&
            !checkHidden(actionFormat) &&
            actionFormat._action_conditional_disable_or_hide == "disable"}
        onClick={sendAction}
        loading={loading}
        icon={actionFormat._action_icon}
    >{template(actionFormat._action_label || action.name)}</Button>

}
