import React from 'react'
import styles from './button.module.css'

export default function Button(props) {

    return (
        <React.Fragment>
            {!props.link ?
                <button
                    onClick={!props.disabled && props.onClick}
                    className={`${styles.button} 
                        ${props.small && styles.small}
                        ${props.verySmall && styles.verySmall}
                        ${props.accent && styles.accent} 
                        ${props.className} 
                        ${props.disabled && styles.disabled}
                        ${!props.children && styles.empty}
                        ${props.icon && `${styles.icon} icon icon-${props.icon}`}
                        ${props.socialGoogle && `${styles.socialGoogle}`}
                        ${props.danger && `${styles.danger}`}
                        ${props.inverseColor && `${styles.inverseColor}`}
                        ${props.transparent && `${styles.transparent}`}
                        `}
                    disabled={props.disabled && 'disabled'}
                >
                    {props.children}</button>
                :
                <a className={`${styles.button}
                    ${props.icon && `${styles.icon} icon icon-${props.icon}`}
                    ${props.small && styles.small}
                    ${props.verySmall && styles.verySmall}
                    ${!props.children && styles.empty}
                    ${props.accent && styles.accent} 
                    ${props.className} 
                    ${props.disabled && styles.disabled}
                    ${props.socialGoogle && `${styles.socialGoogle}`}
                    ${props.danger && `${styles.danger}`}
                    ${props.inverseColor && `${styles.inverseColor}`}
                    ${props.transparent && `${styles.transparent}`}
                    `}
                    href={!props.disabled && props.link}
                    target={props.newWindow && '_blank'}
                >
                    {props.children}
                </a>
            }
        </React.Fragment>
    )
}