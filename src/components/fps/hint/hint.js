import React from 'react'

import styles from './hint.module.css'

// HINT

export default function Hint(props) {
    return (
        <blockquote className={`${styles.hint} ${props.ok && styles.ok} ${props.error && styles.error}`}>
            {props.title && <p className={styles.title}>{props.title}</p>}
            <p>{props.children}</p>
        </blockquote>
    )
}