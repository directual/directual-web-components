import React from 'react'
import styles from './errors.module.css'
import Button from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'

export function Fps400(props) {
    return (
        <div className={styles.errorWrapper}>
            <div className={styles.textBlock}>
                <a href="https://directual.com" className={styles.logo}>
                    <img src="https://global-uploads.webflow.com/5d07a67a0a061929b6559525/5df9d681020103094358f3aa_logo_2020.svg" alt='directual' />
                </a>
                <h1>No app found</h1>
                <p>There is no app <strong>{props.app}</strong> on Directual platform</p>
                <ActionPanel margin={{ top: 32 }}>
                    <Button accent link='https://my.directual.com'>Create {props.app}</Button></ActionPanel>
            </div>
            <div className={styles.imageBlock}>
                <img src="https://api.alfa.directual.com/fileUploaded/directual-site/9173f289-0888-4cae-a2e8-68c74f3a4de0.jpg" />
            </div>
        </div>
    )
}