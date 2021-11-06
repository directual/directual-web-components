import React, { useState, useEffect, useRef } from 'react'
import Backdrop from '../backdrop/backdrop'
import styles from './mainmenu.module.css'
import Button, { ButtonDropDown } from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'


function DropDown(props) {

    const [show, setShow] = useState(false)
    const dropMenu = useRef(null);
    const dropButton = useRef(null);

    useOutsideAlerter(dropMenu);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && !dropButton.current.contains(event.target)) {
                    setShow(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return <div className={styles.bdd} ref={dropButton}>
        <div onClick={(e) => {
            setShow(!show)
        }}>{props.dropButton}</div>
        <div className={`${styles.dropdownMenu} ${show ? styles.show : ''}`} ref={dropMenu} onClick={() => setShow(false)}>
            {props.children}
        </div>
    </div>
}

export default function MainMenu(props) {
    const [showMM, setShowMM] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const hideMM = () => {
        setShowBackdrop(false);
        setShowMM(false)
    }

    let horizontalMenu = (props.menu || []).filter(i => i.subheader || !i.group) || []

    return <React.Fragment>
        {showBackdrop && <Backdrop top onClick={hideMM} />}
        <div className={styles.show_mobile_menu}
            onClick={() => { setShowMM(true); setShowBackdrop(true) }}></div>

        <div className={`${styles.horMainmenu} ${showMM && styles.show} ${!props.horizontal ? styles.hideHorizontal : ''}`}>
            {props.logoUrl ?
                <div className={styles.logo} style={{ backgroundImage: `url(${props.logoUrl})` }} /> :
                <div className={styles.title}>{props.title}</div>
            }

            <div className={styles.horMenuItems}>
                {horizontalMenu.map(item => (
                    !item.hidden && (item.subheader == 'true' || item.subheader == true) ?
                        <DropDown
                            dropButton={<div
                                key={item.name}
                                className={`${styles.itemHor} icon icon-down`}>
                                <a>{item.name}</a></div>}>
                            <div className={styles.ddMenu}>
                                {(props.menu || []).filter(i => i.group == item.name).map(ddItem => (
                                    <div
                                        key={ddItem.name}
                                        onClick={hideMM}
                                        className={`${styles.itemHor} ${props.currentRoute == ddItem.route && styles.active} 
                                    ${ddItem.disabled && styles.disabled} icon ${ddItem.icon ? `icon-${ddItem.icon}` : `icon-forward`}`}>
                                        {ddItem.link ? ddItem.link :
                                            <a href={!ddItem.disabled && ddItem.route}>{ddItem.name}</a>
                                        }
                                    </div>
                                ))}
                            </div>
                        </DropDown>
                        :
                        !item.hidden &&
                        <div
                            key={item.name}
                            onClick={hideMM}
                            className={`${styles.itemHor} ${props.currentRoute == item.route && styles.active} 
                            ${item.disabled && styles.disabled} icon ${item.icon ? `icon-${item.icon}` : `icon-forward`}`}>
                            {item.link ? item.link :
                                <a href={!item.disabled && item.route}>{item.name}</a>
                            }
                        </div>
                ))}
            </div>
            <div className={styles.horMenuProfile}>
                {props.loggedIn ?
                    <ButtonDropDown rightSide icon='down' title={props.userName}>
                        <div className=
                            {`
                            ${styles.menuButton} ${styles.horMenuProfileButton}
                            ${props.profileButton.icon && `${styles.icon} icon icon-${props.profileButton.icon}`}
                            `}>
                            {props.profileButton.link}
                        </div>
                        <Button icon='logoutAlt' danger onClick={() => { props.logout && props.logout() }}>{props.logoutText || 'Log out'}</Button>
                    </ButtonDropDown> :
                    <div className={`
                        ${styles.menuButton}
                        ${props.logInButton.icon && `${styles.icon} icon icon-${props.logInButton.icon}`}
                        ${styles.accent}`}>
                        {props.logInButton.link}
                    </div>}
            </div>
        </div>

        <div className={`${styles.mainmenu} ${showMM && styles.show} ${props.horizontal ? styles.hideHorizontal : ''}`}>
            <div className={styles.hide_mobile_menu}
                onClick={hideMM}></div>
            {props.logoUrl ?
                <div className={styles.logo} style={{ backgroundImage: `url(${props.logoUrl})` }} /> :
                <div className={styles.title}>{props.title}</div>
            }
            <ul className={styles.list}>
                {props.menu.map(item => (
                    !item.hidden && (item.subheader == 'true' || item.subheader == true) ?
                        <li
                            key={item.name}
                            className={styles.subheader}>{item.name}</li> :
                        !item.hidden &&
                        <li
                            key={item.name}
                            onClick={hideMM}
                            className={`${styles.item} ${props.currentRoute == item.route && styles.active} 
                                ${item.disabled && styles.disabled} icon ${item.icon ? `icon-${item.icon}` : `icon-forward`}`}>
                            {item.link ? item.link :
                                <a href={!item.disabled && item.route}>{item.name}</a>
                            }
                        </li>
                ))}
            </ul>
            <div className={styles.menuFooter}>
                {props.showUserButtons &&
                    <div className={styles.menuFooterButton}>
                        {props.loggedIn ?
                            <ActionPanel margin={{ top: 1, bottom: 1 }}>
                                <div className=
                                    {`
                            ${styles.menuButton} 
                            ${props.profileButton.icon && `${styles.icon} icon icon-${props.profileButton.icon}`}
                            `}
                                    style={{ marginRight: 6 }}
                                    onClick={hideMM}>
                                    {props.profileButton.link}
                                </div>
                                {props.logOutButton &&
                                    <Button height={50} icon='logoutAlt' onClick={() => { hideMM(); props.logout && props.logout() }} />
                                }
                            </ActionPanel>
                            :
                            <div className={`
                                    ${styles.menuButton}
                                    ${props.logInButton.icon && `${styles.icon} icon icon-${props.logInButton.icon}`}
                                    ${styles.accent}
                                    `}
                                onClick={hideMM}>
                                {props.logInButton.link}
                            </div>
                        }
                    </div>}
            </div>
        </div>
    </React.Fragment>
}