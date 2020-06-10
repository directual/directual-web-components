import React from 'react'
import styles from './actionspanel.module.css'

export default function ActionPanel(props) {
    return (
        <div
            className={`${styles.panel} ${props.border && styles.border} ${props.title && styles.with_title}`}
            style={
                {
                    marginTop: props.margin,
                    marginBottom: props.margin
                }
            }
        >
            {props.title && <div className={styles.title}>{props.title}</div>}
            {props.children}
        </div>
    )
}