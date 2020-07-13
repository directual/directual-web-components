import React from 'react'
import styles from './backdrop.module.css'

export default function Backdrop(props) {
    return <div 
    className={`${styles.backdrop} 
    ${props.top && styles.top}
    ${props.rounded && styles.rounded}
    ${props.hoverable && styles.hoverable}
    `} 
    onClick={props.onClick}>
        {props.label &&
            <div className={styles.label}>{props.label}</div>
        }
    </div>
}