import React from 'react'
import styles from './wrapper.module.css'
import {SetTheme} from '../theme/theme'

export function FpsWrapper(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}

export function ContentWrapper(props) {
    return (
        <React.Fragment>
            <SetTheme themeName={props.themeName}/>
            <div className={styles.content_wrapper} id={props.id || undefined}>
                {props.children}
            </div>
        </React.Fragment>
    )
}
