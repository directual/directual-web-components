import React from 'react'
import styles from './button.module.css'

export default function Button(props) {

    return (
        <button
        onClick={!props.disabled && props.onClick}
        className={`${styles.button} 
            ${props.accent && styles.accent} 
            ${props.disabled && styles.disabled}
            ${props.icon && `${styles.icon} icon icon-${props.icon}`}
            `}
        disabled={props.disabled && 'disabled'}
    >
        {props.children}</button>
    )
}