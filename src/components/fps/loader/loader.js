import React from 'react'
import styles from './loader.module.css'


export default function Loader(props) {
    return (
        <div className={styles.loaderWrapper}>
            <div className={`
                ${styles.loader} 
                ${props.accent && styles.accent}
                ${props.small && styles.small}
            `}><div></div><div></div><div></div><div></div></div>
            <div className={styles.loaderLabel}>{props.children}</div>
        </div>
    )
}