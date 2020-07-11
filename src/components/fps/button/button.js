import React from 'react'
import styles from './button.module.css'

export default function Button(props) {

    return (
        <button
        onClick={!props.disabled && props.onClick}
        className={`${styles.button} 
            ${props.accent && styles.accent} 
            ${props.className && props.className} 
            ${props.disabled && styles.disabled}
            ${props.icon && `${styles.icon} icon icon-${props.icon}`}
            ${props.socialGoogle && `${styles.socialGoogle}`}
            ${props.danger && `${styles.danger}`}
            `}
        disabled={props.disabled && 'disabled'}
    >
        {props.children}</button>
    )
}