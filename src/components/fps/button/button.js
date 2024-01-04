import React, { useState, useRef, useEffect } from 'react'
import styles from './button.module.css'
import Loader from '../loader/loader'

export default function Button(props) {

    return (
        <React.Fragment>
            {!props.link ?
                <button
                    onClick={e => {
                        e.stopPropagation()
                        !props.disabled && props.onClick && props.onClick(e)
                    }}
                    style={{
                        height: props.height || 48
                    }}
                    className={`${styles.button} FPS_BUTTON
                        ${props.small && styles.small}
                        ${props.active && styles.active}
                        ${props.alighLeft && styles.alighLeft}
                        ${props.verySmall && styles.verySmall}
                        ${props.accent && styles.accent} 
                        ${props.className} 
                        ${props.loading && styles.loading}
                        ${(props.disabled || props.loading) && styles.disabled}
                        ${!props.children && styles.empty}
                        ${props.icon && !props.loading && `${styles.icon} icon icon-${props.icon}`}
                        ${props.socialGoogle && `${styles.socialGoogle}`}
                        ${props.socialFacebook && `${styles.socialFacebook}`}
                        ${props.danger && `${styles.danger}`}
                        ${props.inverseColor && `${styles.inverseColor}`}
                        ${props.transparent && `${styles.transparent}`}
                        `}
                    disabled={(props.disabled || props.loading) && 'disabled'}
                >
                    {props.loading && <Loader small accent={props.accent}></Loader>}
                    {props.children}</button>
                :
                <a className={`${styles.button} FPS_BUTTON
                    ${props.icon && `${styles.icon} icon icon-${props.icon}`}
                    ${props.small && styles.small}
                    ${props.verySmall && styles.verySmall}
                    ${!props.children && styles.empty}
                    ${props.accent && styles.accent} 
                    ${props.className} 
                    ${props.disabled && styles.disabled}
                    ${props.socialGoogle && `${styles.socialGoogle}`}
                    ${props.socialFacebook && `${styles.socialFacebook}`}
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

export function ButtonDropDown(props) {

    const [show, setShow] = useState(false)
    const dropMenu = useRef(null);
    const dropButton = useRef(null);

    useOutsideAlerter(dropMenu);

    const { shiftDropdown } = props

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (
                    //!props.lockDD && 
                    ref.current && !ref.current.contains(event.target) && !dropButton.current.contains(event.target)) {
                    setShow(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return <div
        className={`${styles.bdd} ${props.rightSide ? styles.rightSide : ''} ${props.overflowVisible ? styles.overflowVisible : ''}`}
        ref={dropButton}>
        <Button active={props.active} icon={props.icon} height={props.height} accent={props.accent} danger={props.danger}
            small={props.small} verySmall={props.verySmall}
            onClick={(e) => {
                setShow(!show)
            }}
        >{props.title}</Button>
        <div 
            style={shiftDropdown ? {marginLeft: shiftDropdown} : null }
            className={`${styles.dropdownMenu} ${show ? styles.show : ''}`} ref={dropMenu}
            onClick={() => !props.lockDD ? setShow(false) : undefined}>
            {props.children}
        </div>
    </div>
}