import React, {useState, useEffect} from 'react'
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
    const [currentTheme,setCurrentTheme] = useState(props.themeName)
    useEffect(()=>{setCurrentTheme(props.themeName)},[props.themeName])
    return (
        <React.Fragment>
            <SetTheme themeName={currentTheme}/>
            {/* <SetTheme themeName={props.themeName}/> */}
            <div className={styles.content_wrapper} id={props.id || undefined}>
                {props.children}
            </div>
            <div className={styles.diretualFooter}>
                <a target="_blank" className={styles.logo} href="https://directual.com?ref=fps_footer">
                    <img src="https://api.alfa.directual.com/fileUploaded/directual-site/d23ba583-1053-454d-a05d-337e20d1bb82.svg" />
                </a>
                <span>Made on <a target="_blank" href="https://directual.com?ref=fps_footer">Directual</a></span>
            </div>
        </React.Fragment>
    )
}
