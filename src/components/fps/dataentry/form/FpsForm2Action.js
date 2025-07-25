import React, { useState, useEffect } from "react"
import styles from './form2.module.css'
import Button from '../../button/button'
import _ from 'lodash'
import Hint from "../../hint/hint"
import InnerHTML from 'dangerously-set-html-content'

export default function FpsForm2Action(props) {
    const { actionFormat, action, loading, handleRoute, onPerform, userDebug, params, checkHidden, template } = props

    const [performed, setPerformed] = useState(false)

    useEffect(() => {
        if (action && action.autoAction) {
            const delay = (action.autoAction_delay || 0) * 1000
            setTimeout(() => {
                !performed && onPerform(res => setPerformed(res))
            }, delay)
        }
    }, [])

    const link = _.get(action,"actionType") == 'link' ?
        template(action._href)
        : null

    let externalLink
    if (_.startsWith(link, 'https')) {
        externalLink = link
    }

    const sendAction = e => {
        if (link) {
            handleRoute(link)(e)
        } else {
            onPerform(res => {
                //console.log(res); 
                setPerformed(res);
            })
        }
    }

    if (!action) return <div>No action <code>{_.get(actionFormat, "id")}</code></div>
    if (action.autoAction) return <React.Fragment></React.Fragment>

    if (performed && actionFormat._action_oneTime) return <Hint margin={{ top: 0, bottom: 0 }}>
        {actionFormat._action_oneTime_message && <InnerHTML allowRerender={true} html={template(actionFormat._action_oneTime_message)} />}
    </Hint>


    const buttonPicture = actionFormat._action_label_picture == "picture" ?
        actionFormat._action_label_picture_source == 'from_tempalte' ?
            actionFormat._action_picure_templ ? template(actionFormat._action_picure_templ) : null
            : actionFormat._action_picure : null


    let button = <Button
        danger={actionFormat._action_button_type == "danger"}
        accent={actionFormat._action_button_type == "accent"}
        picture={buttonPicture}
        link={externalLink}
        color={actionFormat._action_picure_color}
        borderColor={actionFormat._action_picure_border_color}
        newWindow={action._blank}
        tooltip={actionFormat._action_addTooltip && template(actionFormat._action_addTooltip_text)}
        disabled={actionFormat._conditionalView &&
            !checkHidden(actionFormat) &&
            actionFormat._action_conditional_disable_or_hide == "disable"}
        onClick={sendAction}
        loading={loading}
        icon={actionFormat._action_icon}
    >{template(actionFormat._action_label || action.name)}</Button>

    // console.log("button")
    // console.log(!checkHidden(actionFormat))
    // console.log(!checkHidden(actionFormat, false, true))
    // console.log(template(actionFormat._action_label || action.name))
    // console.log("===")

    if (actionFormat._conditionalView &&
        !checkHidden(actionFormat) 
        && (!_.get(params, "general.debugConditions") || !userDebug)
        && actionFormat._action_conditional_disable_or_hide !== "disable"
    ) { button = <React.Fragment></React.Fragment> }

    if (_.get(params, "general.debugConditions") && userDebug) {
        return <div className={`${actionFormat._conditionalView && userDebug && _.get(params, "general.debugConditions") ? styles.debugConditions : ""}
        ${actionFormat._conditionalView && !checkHidden(actionFormat, false, true) && userDebug && _.get(params, "general.debugConditions") ?
                styles.hideDebug : ""}
        `}>
            {button}
            {actionFormat._conditionalView && userDebug && _.get(params, "general.debugConditions") && <div className={styles.condDebugDetails}>
                <code>
                    <p>{actionFormat._action_conditional_disable_or_hide == "disable" ? "disable button" : "hide button"} if:</p>
                    {checkHidden(actionFormat, true, true).name && <p  style={{ lineHeight: 1, marginBottom: 10}}><b>{checkHidden(actionFormat, true, true).name}</b></p>}
                    <pre style={{ whiteSpace: 'wrap', fontSize: 14 }}>{checkHidden(actionFormat, true, true).conditions}</pre>
                    <p>Result: <b>{!checkHidden(actionFormat, false, true) ? "true" : "false"}</b></p>
                    <pre style={{ whiteSpace: 'wrap', fontSize: 14 }}>{checkHidden(actionFormat, true, true).result}</pre>
                </code>
            </div>}
        </div>
    }
    else { return button }

}
