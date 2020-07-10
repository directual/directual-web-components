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

    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/8b09feb3-0e52-45cc-b776-b0a7f9fc4a0e.svg')

    useEffect(()=>{
  
      if (props.themeName.colorScheme == 'darkMint' || props.themeName.colorScheme == 'warmNight' || props.themeName.colorScheme == 'hacker') {
        setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/0ec2892d-c7a8-46ac-8500-6b5069563d21.svg')
      }
      if (props.themeName.colorScheme == 'classic' || props.themeName.colorScheme == 'tiffany' || props.themeName.colorScheme == 'white') {
        setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/8b09feb3-0e52-45cc-b776-b0a7f9fc4a0e.svg')
      }
    }, [props.themeName])

    return (
        <React.Fragment>
            <SetTheme themeName={currentTheme}/>
            {/* <SetTheme themeName={props.themeName}/> */}
            <div className={styles.content_wrapper} id={props.id || undefined}>
                {props.children}
            </div>
            <div className={styles.diretualFooter}>
                <a target="_blank" className={styles.logo} href="https://directual.com?ref=fps_footer">
                    <img src={logoUrl} />
                </a>
                <span><span className={styles.madeon}>made on </span><a target="_blank" href="https://directual.com?ref=fps_footer">Directual</a></span>
            </div>
        </React.Fragment>
    )
}
