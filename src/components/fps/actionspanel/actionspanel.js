import React from 'react'
import styles from './actionspanel.module.css'

export default function ActionPanel(props) {
    return (
        <div
            className={`${styles.panel} D_FPS_ACTIONS_PANEL
                ${props.border && styles.border} 
                ${props.title && styles.with_title}
                ${props.column && styles.column}
                ${props.alignRight && styles.alignRight}
                ${props.alignCenter && styles.alignCenter}
                ${props.stretch && styles.stretch}
                `}
            style={
                {
                    marginTop: props.margin && props.margin.top,
                    marginBottom: props.margin && props.margin.bottom,
                    marginLeft: props.margin && props.margin.left,
                    marginRight: props.margin && props.margin.right,
                    maxWidth: props.width
                }
            }
        >
            {props.title && <div className={`${styles.title} D_FPS_AP_TITLE`}>{props.title}</div>}
            {props.children}
        </div>
    )
}