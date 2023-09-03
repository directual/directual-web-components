import React, { useState, useEffect, useRef } from 'react'
import styles from './wrapper.module.css'
import { SetTheme } from '../theme/theme'
import { dict } from '../locale'

export function FpsWrapper(props) {
    return (
        <div className={`${styles.wrapper} ${props.horizontal ? styles.horizontal : ''}`}>
            {props.children}
        </div>
    )
}

export function ComponentWrapper(props) {
    return (
        <div className={styles.componentWrapper}>
            {props.children}
        </div>
    )
}

export function ContentWrapper(props) {
    const [currentTheme, setCurrentTheme] = useState(props.themeName)
    useEffect(() => { setCurrentTheme(props.themeName) }, [props.themeName])

    const scrollDiv = useRef(null);

    const scrollHandler = () => {
        console.log("scroll")
    }

    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/8b09feb3-0e52-45cc-b776-b0a7f9fc4a0e.svg')

    useEffect(() => {

        if (props.themeName.colorScheme == 'darkMint' || props.themeName.colorScheme == 'warmNight' || props.themeName.colorScheme == 'hacker') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/0ec2892d-c7a8-46ac-8500-6b5069563d21.svg')
        }
        if (props.themeName.colorScheme == 'classic' || props.themeName.colorScheme == 'tiffany' ||
            props.themeName.colorScheme == 'white' || props.themeName.colorScheme == 'raspberry') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/8b09feb3-0e52-45cc-b776-b0a7f9fc4a0e.svg')
        }
    }, [props.themeName])

    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'

    return (
        <React.Fragment>
            <SetTheme themeName={currentTheme} />
            <div className={styles.outer_content_wrapper}>
                <div className={styles.content_wrapper} id={props.id || undefined} 
                    //ref={scrollDiv} onScroll={scrollHandler}
                    >
                    {props.children}
                </div>
            </div>
            {!props.whiteLabel && <div className={styles.diretualFooter}>
                <div className={styles.version}>
                    <a target="_blank" className={styles.logo} href="https://directual.com?ref=fps_footer">
                        <img src={logoUrl} />
                    </a>
                    <span>v.{props.version || 1}</span>
                </div>
                <span><span className={styles.madeon}>{dict[lang].madeOn} </span><a target="_blank" href="https://directual.com?ref=fps_footer">Directual</a>
                </span>
            </div>}
        </React.Fragment>
    )
}
