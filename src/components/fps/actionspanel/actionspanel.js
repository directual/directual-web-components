import React from 'react'
import styles from './actionspanel.module.css'

export default function ActionPanel(props) {
    return (
        <div
            className={`${styles.panel} 
                ${props.border && styles.border} 
                ${props.title && styles.with_title}
                ${props.column && styles.column}
                ${props.alignRight && styles.alignRight}
                ${props.alignCenter && styles.alignCenter}
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
            {props.title && <div className={styles.title}>{props.title}</div>}
            {props.children}
        </div>
    )
}