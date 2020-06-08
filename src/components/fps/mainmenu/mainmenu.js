import React from 'react'
// import {
//     NavLink
// } from 'react-router-dom'
// import { authContext } from '../../../auth'
// import { Backdrop } from '../primitive/primitiveComponents'
// import { LogInLogOutButton } from '../rbac/rbac'

import './mainmenu.css'
import '../theme/theme.css'

export default function MainMenu(props) {

    return (
        <React.Fragment>
            <div className="dd-show-mobile-button"
            //style={{width:'50px', height:'50px', backgroundColor:'red' }}
            ></div>
            <div className="dd-mainmenu">
                <div className="dd-hide-mobile-menu-button"></div>
                <div className="dd-mainmenu-logo" style={{ backgroundImage: `url(${props.logoUrl})` }} />
                <ul className="dd-mainmenu-list">
                    <li className="mm-subheader">Subheader</li>
                    <li className="mm-item">
                        <a className="mm-item-link icon icon-babai">
                            Dashboard</a>
                        <a className="mm-item-link icon icon-babai">
                            Dashboard</a>
                        <a className="mm-item-link icon icon-babai">
                            Dashboard</a>
                    </li>
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
