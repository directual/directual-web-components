import React from 'react'
import styles from './SomethingWentWrong.module.css'

export default function SomethingWentWrong(props) {
    return (
        <div className={styles.sww}>
            <div 
                className={`${styles.title} ${props.icon && `${styles.icon} icon icon-${props.icon}`}`}>
                    {props.message}</div>
        </div>
    )
}