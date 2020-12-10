import React from 'react'
import styles from './button.module.css'
import Loader from '../loader/loader'

export default function Button(props) {

    return (
        <React.Fragment>
            {!props.link ?
                <button
                    onClick={!props.disabled && props.onClick}
                    style={{
                        height: props.height || 48
                    }}
                    className={`${styles.button} 
                        ${props.small && styles.small}
                        ${props.verySmall && styles.verySmall}
                        ${props.accent && styles.accent} 
                        ${props.className} 
                        ${props.loading && styles.loading}
                        ${(props.disabled || props.loading) && styles.disabled}
                        ${!props.children && styles.empty}
                        ${props.icon && !props.loading && `${styles.icon} icon icon-${props.icon}`}
                        ${props.socialGoogle && `${styles.socialGoogle}`}
                        ${props.danger && `${styles.danger}`}
                        ${props.inverseColor && `${styles.inverseColor}`}
                        ${props.transparent && `${styles.transparent}`}
                        `}
                    disabled={ (props.disabled || props.loading) && 'disabled'}
                >
                    {props.loading && <Loader small accent={props.accent}></Loader>}
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
                    style={{
                        height: props.height || 48
                    }}
                    href={!props.disabled && props.link}
                    target={props.newWindow && '_blank'}
                >
                    {props.children}
                </a>
            }
        </React.Fragment>
    )
}