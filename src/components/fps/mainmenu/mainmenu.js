import React, { useState, useEffect } from 'react'
import Backdrop from '../backdrop/backdrop'
import styles from './mainmenu.module.css'
import Button from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'


export default function MainMenu(props) {
    const [showMM, setShowMM] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const hideMM = () => {
        setShowBackdrop(false);
        setShowMM(false)
    }

    return (
        <React.Fragment>
            {showBackdrop && <Backdrop top onClick={hideMM} />}
            <div className={styles.show_mobile_menu}
                onClick={() => { setShowMM(true); setShowBackdrop(true) }}></div>
            <div className={`${styles.mainmenu} ${showMM && styles.show}`}>
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
                            <ActionPanel margin={{top:1, bottom:1}}>
                            <div className=
                                {`
                            ${styles.menuButton} 
                            ${props.profileButton.icon && `${styles.icon} icon icon-${props.profileButton.icon}`}
                            `}
                                style={{marginRight:6}}
                                onClick={hideMM}>
                                {props.profileButton.link}
                            </div>
                            {props.logOutButton && 
                                <Button height={50} icon='logoutAlt' onClick={()=>{hideMM(); props.logout && props.logout()}}/>
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
    )
}