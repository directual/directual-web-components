import React, {useState, useEffect} from 'react'
// import {
//     NavLink
// } from 'react-router-dom'
// import { authContext } from '../../../auth'
// import { Backdrop } from '../primitive/primitiveComponents'
// import { LogInLogOutButton } from '../rbac/rbac'

import styles from './mainmenu.module.css'

export function Backdrop(props) {
    return <div className={styles.backdrop} onClick={props.onClick}></div>
}

export default function MainMenu(props) {
    const [showMM, setShowMM] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const hideMM = () => {
        setShowBackdrop(false);
        setShowMM(false)
    }
    return (
        <React.Fragment>
            {showBackdrop && <Backdrop onClick={hideMM}/>}
            <div className={styles.show_mobile_menu}
                onClick={() => { setShowMM(true); setShowBackdrop(true)}}></div>
            <div className={`${styles.mainmenu} ${showMM && styles.show}`}>
                <div className={styles.hide_mobile_menu}
                    onClick={hideMM}></div>
                <div className={styles.logo} style={{ backgroundImage: `url(${props.logoUrl})` }} />
                <ul className={styles.list}>
                    {props.menu.map(item => (
                        item.subheader ?
                            <li className={styles.subheader}>{item.title}</li> :
                            <li className={`${styles.item} ${item.disabled && styles.disabled}`}>
                                <a 
                                    className={`active icon ${item.icon && `icon-${item.icon}`}`}
                                    onClick={hideMM}
                                >
                                    {item.title}</a>
                            </li>
                    ))}
                </ul>
            </div>

        </React.Fragment>
    )
}


// export class MainMenu extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             showMobileMenu: false,
//         };
//     }
//     render() {

//         const handleCloseMobileMenu = () => {
//             this.setState({ showMobileMenu: false })

//         }
//         const handleShowMobileMenu = () => {
//             this.setState({ showMobileMenu: true })
//         }

//         return (
//             <React.Fragment>
//                 {this.state.showMobileMenu && <Backdrop onClick={handleCloseMobileMenu} />}
//                 <div className="show-mm-button" onClick={handleShowMobileMenu}></div>
//                 <div className={`main-menu ${this.state.showMobileMenu && `show`}`}>
//                     <div className="hide-mobile-menu" onClick={handleCloseMobileMenu}></div>
//                     <div className="main-menu-logo"
//                         style={
//                             {
//                                 backgroundImage: `url(${this.props.logoUrl})`
//                             }
//                         }
//                     />
//                     <ul className="main-menu-list">
//                         {this.props.menu.map(item =>
//                             <React.Fragment>
//                                 {!item.isAutorised && !item.hasRole &&
//                                     <React.Fragment>
//                                         {(item.type === 'subheader') && <li className="mm-subheader">{item.title}</li>}
//                                         {(item.type === 'link') &&
//                                             <li><NavLink
//                                                 onClick={handleCloseMobileMenu}
//                                                 exact to={item.path}
//                                                 className={`main-nav ${item.icon && `icon icon-${item.icon}`}`}>
//                                                 {item.title}
//                                             </NavLink>
//                                             </li>
//                                         }
//                                     </React.Fragment>
//                                 }
//                                 {item.isAutorised && authContext.isAutorised() && !item.hasRole &&
//                                     <React.Fragment>
//                                         {(item.type === 'subheader') && <li className="mm-subheader">{item.title}</li>}
//                                         {(item.type === 'link') &&
//                                             <li><NavLink
//                                                 onClick={handleCloseMobileMenu}
//                                                 exact to={item.path}
//                                                 className={`main-nav ${item.icon && `icon icon-${item.icon}`}`}>
//                                                 {item.title}
//                                             </NavLink>
//                                             </li>
//                                         }
//                                     </React.Fragment>
//                                 }
//                                 {item.hasRole && authContext.hasRole(item.hasRole) &&
//                                     <React.Fragment>
//                                         {(item.type === 'subheader') && <li className="mm-subheader">{item.title}</li>}
//                                         {(item.type === 'link') &&
//                                             <li><NavLink
//                                                 onClick={handleCloseMobileMenu}
//                                                 exact to={item.path}
//                                                 className={`main-nav ${item.icon && `icon icon-${item.icon}`}`}>
//                                                 {item.title}
//                                             </NavLink>
//                                             </li>
//                                         }
//                                     </React.Fragment>
//                                 }
//                             </React.Fragment>
//                         )}
//                     </ul>
//                     {/* <LogInLogOutButton onClick={handleCloseMobileMenu} /> */}
//                 </div>
//             </React.Fragment>
//         )
//     }
// }
//MainMenu.contextType = authContext
