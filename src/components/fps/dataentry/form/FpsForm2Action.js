import React, { useState, useEffect } from "react"
import styles from './form2.module.css'
import Button from '../../button/button'
import _ from 'lodash'

export default function FpsForm2Action(props) {
    const { actionFormat, action, loading, onPerform, checkHidden } = props

    if (actionFormat._conditionalView &&
        checkHidden(actionFormat) &&
        actionFormat._action_conditional_disable_or_hide !== "disable"
    ) return <React.Fragment></React.Fragment>

    return <Button
        danger={actionFormat._action_button_type == "danger"}
        accent={actionFormat._action_button_type == "accent"}
        disabled={actionFormat._conditionalView &&
            checkHidden(actionFormat) &&
            actionFormat._action_conditional_disable_or_hide == "disable"}
        onClick={onPerform}
        loading={loading}
        icon={actionFormat._action_icon}
    >{actionFormat._action_label || action.name}</Button>

}
