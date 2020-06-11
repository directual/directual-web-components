import React from 'react'
import styles from './actionspanel.module.css'

export default function ActionPanel(props) {
    return (
        <div
            className={`${styles.panel} ${props.border && styles.border} ${props.title && styles.with_title}`}
            style={
                {
                    marginTop: props.margin && props.margin.top,
                    marginBottom: props.margin && props.margin.bottom,
                    marginLeft: props.margin && props.margin.left,
                    marginRight: props.margin && props.margin.right
                }
            }
        >
            {props.title && <div className={styles.title}>{props.title}</div>}
            {props.children}
        </div>
    )
}