import React from 'react'
import styles from './wrapper.module.css'

export function FpsWrapper(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}

export function ContentWrapper(props) {
    return (
        <div className={styles.content_wrapper}>
            {props.children}
        </div>
    )
}