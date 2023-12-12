import React, { useState, useEffect, useRef } from 'react'
import Backdrop from '../backdrop/backdrop'
import styles from './mainmenu.module.css'
import Button, { ButtonDropDown } from '../button/button'
import ActionPanel from '../actionspanel/actionspanel'
import _ from 'lodash'


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
        <div className={`${styles.dropdownMenu} 
            ${props.rightSide ? styles.rightSide : ''}
            ${props.top ? styles.top : ''} ${show ? styles.show : ''}`} ref={dropMenu} onClick={() => setShow(false)}>
            {props.children}
        </div>
    </div>
}

// LEGACY MENU:
export default function MainMenu(props) {
    const [showMM, setShowMM] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const hideMM = () => {
        setShowBackdrop(false);
        setShowMM(false)
    }

    const logoSize = props.logoSize || { height: 52, width: 187 }

    let horizontalMenu = (props.menu || []).filter(i => i.subheader || !i.group) || []
    const isLeft = props.mobileLeftSide

    return <React.Fragment>
        {showBackdrop && <Backdrop top onClick={hideMM} />}
        <div className={`D_MeinMenu_show_MM ${styles.show_mobile_menu} ${isLeft ? styles.leftSide : ''}`}
            onClick={() => { setShowMM(true); setShowBackdrop(true) }}></div>

        <div className={`${styles.horMainmenu} ${showMM && styles.show} ${!props.horizontal ? styles.hideHorizontal : ''}`}>
            <div className={styles.horLogoWrapper}>
                {props.logoUrl ?
                    <a href="/" className={styles.logo} style={{ backgroundImage: `url(${props.logoUrl})`, width: logoSize.width, height: logoSize.height }} /> :
                    <a href="/" style={{ width: logoSize.width, height: logoSize.height }} className={styles.title}>{props.title}</a>
                }
            </div>
            <div className={styles.rasporka} />
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
                                        onClick={e => {
                                            hideMM();
                                            props.handleRoute(ddItem.route)(e)
                                        }}
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
                            onClick={e => {
                                hideMM();
                                props.handleRoute(item.route)(e)
                            }}
                            className={`${styles.itemHor} ${props.currentRoute == item.route && styles.active} 
                            ${item.disabled && styles.disabled} icon ${item.icon ? `icon-${item.icon}` : `icon-forward`}`}>
                            {item.link ? item.link :
                                <a href={!item.disabled && item.route}>{item.name}</a>
                            }
                        </div>
                ))}
            </div>
            {props.showUserButtons &&
                <div className={styles.horMenuProfile}>
                    {props.loggedIn ?
                        <ButtonDropDown rightSide icon='down' title={props.userName}>
                            <div className=
                                {`
                            ${styles.menuButton} ${styles.horMenuProfileButton}
                            ${props.profileButton.icon && `${styles.icon} icon icon-${props.profileButton.icon}`}
                            `}
                                onClick={e => {
                                    props.handleRoute('/profile')(e)
                                }}>
                                {props.profileButton.link}
                            </div>
                            <Button icon='logoutAlt' danger onClick={() => { props.logout && props.logout() }}>{props.logoutText || 'Log out'}</Button>
                        </ButtonDropDown> :
                        <div className={`
                        ${styles.menuButton}
                        ${props.logInButton.icon && `${styles.icon} icon icon-${props.logInButton.icon}`}
                        ${styles.accent}`}
                            onClick={e => {
                                props.handleRoute('/signin')(e)
                            }}>
                            {props.logInButton.link}
                        </div>}
                </div>}
        </div>

        <div className={`${styles.mainmenu} ${showMM && styles.show} ${isLeft ? styles.leftSide : ''} ${props.horizontal ? styles.hideHorizontal : ''}`}>
            <div className={styles.hide_mobile_menu}
                onClick={hideMM}></div>
            {props.logoUrl ?
                <a href="/" className={styles.logo} style={{ backgroundImage: `url(${props.logoUrl})`, width: logoSize.width, height: logoSize.height }} /> :
                <a href="/" style={{ width: logoSize.width, height: logoSize.height }} className={styles.title}>{props.title}</a>
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
                            onClick={e => {
                                hideMM();
                                props.handleRoute(item.route)(e)
                            }}
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
                                    onClick={e => {
                                        hideMM();
                                        props.handleRoute('/profile')(e)
                                    }}>
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
                                onClick={e => {
                                    hideMM();
                                    props.handleRoute('/signin')(e)
                                }}>
                                {props.logInButton.link}
                            </div>
                        }
                    </div>}
            </div>
        </div>
    </React.Fragment>
}

export function NewMobileTabs(props) {

    const mobileMenu = props.mobileMenu || { children: [] }
    const menuConfig = props.menuConfig || {}

    const tabsPadding = _.get(menuConfig, "rootMobileMenu.tabsPadding") == 0 ? 0 :
        _.get(menuConfig, "rootMobileMenu.tabsPadding") || 10
    const tabsMargin = _.get(menuConfig, "rootMobileMenu.tabsMargin") == 0 ? 0 :
        _.get(menuConfig, "rootMobileMenu.tabsMargin") || 5
    const tabsInnerPadding = _.get(menuConfig, "rootMobileMenu.tabsInnerPadding") || "10 10 10 10"
    const mobileTitlesSize = _.get(menuConfig, "rootMobileMenu.mobileTitlesSize") || 'small'

    return <div className={`${props.theme}`}
        style={tabsMargin !== 0 ? {
            margin: tabsMargin,
        } :
            {
                margin: tabsMargin,
                borderRadius: 0,
            }}
    >
        {/* TABS */}
        <div className={`${styles.mobileTabs} D_MainMenu_Mobile_Tabs ${styles.tabsTop} `}
            style={{ padding: tabsPadding }} >
            {mobileMenu.children.map(tab => <MobileTab
                currentRoute={props.currentRoute}
                tabsPadding={tabsPadding}
                auth={props.auth}
                mobileTitlesSize={mobileTitlesSize}
                handleRoute={props.handleRoute}
                tabsInnerPadding={tabsInnerPadding}
                key={tab.id}
                custom_labels={props.custom_labels}
                id={tab.id}
                tabConfig={_.get(menuConfig, [tab.id]) || {}}
            />)}

        </div>
        {/* ======================= */}
    </div>
}

function MobileTab(props) {

    const { tabsInnerPadding, tabConfig, currentRoute, mobileTitlesSize,
        custom_labels, auth, handleRoute, tabsPadding } = props

    const name = tabConfig.name || ""
    const iconType = tabConfig.iconType || 'no_icon'

    // padding
    let paddingTop = 10
    let paddingRight = 10
    let paddingBottom = 10
    let paddingLeft = 10

    let paddingArray = typeof tabsInnerPadding == 'string' ? tabsInnerPadding.split(' ') : [10, 10, 10, 10]
    try {
        paddingTop = parseInt(paddingArray[0])
        paddingRight = parseInt(paddingArray[1])
        paddingBottom = parseInt(paddingArray[2])
        paddingLeft = parseInt(paddingArray[3])
    } catch { }

    //checkig RBAC
    if (tabConfig.permissions == "all_unauthorised" && auth.isAuth) { return null }
    if (tabConfig.permissions == "all_registered" && !auth.isAuth) { return null }
    if (tabConfig.permissions == "roles" &&
        (!auth.isAuth || !auth.role || !tabConfig.specifyRoles ||
            _.intersection(auth.role.split(","), tabConfig.specifyRoles.split(",")).length == 0)
    ) { return null }
    //===========

    const getLabel = () => {
        if (_.get(tabConfig, "addLabel") !== "add_label") { return null }
        const label = _.get(custom_labels, tabConfig.menuLabel)
        if (label && label !== "0") {
            return <div className={`${styles.itemLabel} D_MainMenu_Item_Label`}>{label}</div>
        }
        else {
            return null
        }
    }

    return <a className={`${styles.mobileTab} D_MainMenu_Mobile_Tabs_Tab ${currentRoute == tabConfig.linkToPage && 'selected'}`}
        style={tabsPadding == 0 ? {
            padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`,
            borderRadius: 0
        }
            :
            { padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` }}
        onClick={e => {
            e.preventDefault()
            handleRoute(tabConfig.linkToPage)(e)
        }}
        href={tabConfig.linkToType !== 'external' ? null : tabConfig.linkToURL}
        target={tabConfig.linkToURLNewWindow && tabConfig.linkToType == 'external' ? '_blank' : ''}
    >
        {iconType == 'directual_icon' && tabConfig.menuDirectualIconSet && <React.Fragment>
            <div className={`icon veryLarge icon-${tabConfig.menuDirectualIconSet}`} />
        </React.Fragment>}

        {iconType == "remix_icon" && tabConfig.menuRemixIcon &&
            <div className={`${styles.customIcon} D_MainMenu_Item_customIcon`}>
                <svg
                    width={tabConfig.menuRemixIconSize || 24}
                    height={tabConfig.menuRemixIconSize || 24}
                    viewBox={`0 0 24 24`}
                >
                    <path
                        fill={currentRoute == tabConfig.linkToPage ?
                            (tabConfig.menuRemixIconColorSelected || '#000000') :
                            (tabConfig.menuRemixIconColor || '#000000')}
                        d={tabConfig.menuRemixIcon.Content}
                    ></path>
                </svg>
            </div>
        }

        {iconType == "custom_icon" && tabConfig.menuIconCustom &&
            <div className={`${styles.customIcon} D_MainMenu_Item_customIcon`}>
                <img
                    style={{
                        width: tabConfig.menuCustomIconSize || 24
                    }}
                    src={currentRoute == tabConfig.linkToPage && tabConfig.menuIconCustomSelected ?
                        tabConfig.menuIconCustomSelected
                        : tabConfig.menuIconCustom} /></div>
        }

        {name && <div className={`${styles.mobileTabTitle} D_MainMenu_Mobile_Tabs_Title 
            ${mobileTitlesSize == 'medium' ? 'mediumMobileTitleMenu' :
                mobileTitlesSize == 'large' ? 'largeMobileTitleMenu' : ''}`}>
            {name}
        </div>}
        {getLabel()}
    </a>
}

export function NewMainMenu(props) {

    // console.log("NewMainMenu")
    // console.log(props)

    const brakePoints = {
        mobile: { from: 0, to: 768 },
        desktop: { from: 769, to: 10000 },
    }

    const layoutRef = useRef(null);
    const [currentBP, setCurrentBP] = useState('desktop')
    const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)

    // Calculating layout width:
    useEffect(() => {
        if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
            setLayoutWidth(layoutRef.current.offsetWidth)
        }
    })
    useEffect(() => {
        if (layoutWidth <= brakePoints.mobile.to) {
            setCurrentBP('mobile')
        }
        if (layoutWidth >= brakePoints.desktop.from) {
            setCurrentBP('desktop')
        }
    }, [layoutWidth])

    useEffect(() => {
        const resizeListener = () => {
            if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(layoutRef.current.offsetWidth);
            }
        }
        window.addEventListener("resize", resizeListener);
        return () => { window.removeEventListener('resize', resizeListener); };
    }, []);
    // =========================

    const handleRoute = props.handleRoute

    // GENERAL MENU SETTINGS
    const menuConfig = props.menuConfig || {}
    const mainMenu = props.mainMenu || { children: [] }
    const mobileMenu = props.mobileMenu || { children: [] }
    const auth = props.auth || {}
    const showUserButtons = props.showUserButtons

    const custom_labels = props.custom_labels || {}

    // MENU LAYOUT
    const isHorizontal = props.horizontal || _.get(menuConfig, "rootMenu.menuPosition") == 'top'
    const sideMenuAlign = _.get(menuConfig, "rootMenu.sideMenuAlign") || 'left'

    // SIZE
    const resizable = _.get(menuConfig, "rootMenu.sideMenuSize") == "resizeble"
    const menuWidth = _.get(menuConfig, "rootMenu.menuWidth") || 200
    const menuCompactWidth = _.get(menuConfig, "rootMenu.menuCompactWidth") || 70
    const menuPadding = _.get(menuConfig, "rootMenu.menuPadding") == 0 ? 0 : _.get(menuConfig, "rootMenu.menuPadding") || 20
    const menuMargin = _.get(menuConfig, "rootMenu.menuMargin") == 0 ? 0 : _.get(menuConfig, "rootMenu.menuMargin") || 5

    const hideGroups = !_.get(menuConfig, "rootMenu.dontHideGroups")

    // MOBILE MENU
    const isTabs = (props.mobileMenuOption == "tabs_bottom" || props.mobileMenuOption == "tabs_top")
    const showMobileHeader = _.get(menuConfig, "rootMobileMenu.showMobileHeader")
    const showMobileAuthBlock = _.get(menuConfig, "rootMobileMenu.showMobileAuthBlock")
    const mobileHeaderLogo = _.get(menuConfig, "rootMobileMenu.mobileHeaderLogo") || "large"
    const mobileHeaderLogoPosition = _.get(menuConfig, "rootMobileMenu.mobileHeaderLogoPosition") || "left"
    const menuSideHideLogo = _.get(menuConfig, "rootMobileMenu.menuSideHideLogo")
    const mobileMenuPadding = _.get(menuConfig, "rootMobileMenu.mobileMenuPadding") || menuPadding
    const sideMenuPadding = _.get(menuConfig, "rootMobileMenu.sideMenuPadding") || menuPadding
    const leftSide = _.get(menuConfig, "rootMobileMenu.mobileMenuSide") == 'left'

    // LOGO:
    const logoOption = _.get(menuConfig, "rootMenu.logoOption") || "upload"
    const logoSize = { height: _.get(menuConfig, "rootMenu.logoHeight") || 52, width: _.get(menuConfig, "rootMenu.logoWidth") || 187 }
    const logoPosition = _.get(menuConfig, "rootMenu.logoPosition") || "left"
    const largeLogoURL = _.get(menuConfig, "rootMenu.largeLogoURL") || props.oldLogoUrl
    const smallLogoURL = _.get(menuConfig, "rootMenu.smallLogoURL")
    const menuLogoMargin = _.get(menuConfig, "rootMenu.menuLogoMargin") || 32
    const menuBorderWidth = _.get(menuConfig, "rootMenu.menuBorderWidth") || 0


    // =====================
    const [showMM, setShowMM] = useState(false)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const showMMhandler = () => {
        setShowBackdrop(true);
        setShowMM(true)
    }
    const hideMMhandler = () => {
        setShowBackdrop(false);
        setShowMM(false)
    }
    // =====================

    const scrollDivRef = useRef(null)
    const [showTopBorder, setShowTopBorder] = useState(false)
    const [showBottomBorder, setShowBottomBorder] = useState(false)

    const [compactMode, setCompactMode] = useState(_.get(menuConfig, "rootMenu.sideMenuSize") == "compact" || props.compactState)

    useEffect(() => {
        setCompactMode(props.compactState && !isHorizontal && currentBP !== 'mobile')
    }, [props.compactState])

    useEffect(() => {
        if (currentBP == 'mobile') { setCompactMode(false) }
    }, [currentBP])

    const compactModeHandler = mode => {
        setCompactMode(mode)
        localStorage.setItem(props.title + '_compactModeStorage', mode ? 'true' : 'false');
    }

    const handleScroll = () => {
        if (!scrollDivRef.current) { return undefined }
        const { scrollTop, scrollHeight, clientHeight } = scrollDivRef.current;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight;
        scrollTop >= 10 ?
            setShowTopBorder(true) :
            setShowTopBorder(false);
        scrollHeight > clientHeight && !isAtBottom ?
            setShowBottomBorder(true) :
            setShowBottomBorder(false);
    }

    const handleLogOut = () => {
        props.logOut && props.logOut()
    }

    return <React.Fragment>
        <div style={{ width: '100%', position: 'absolute', height: 0 }} ref={layoutRef}></div>

        {/* SIDE MOBILE MENU EXPNADER */}
        {showBackdrop && <Backdrop top onClick={hideMMhandler} />}
        {!isTabs && <div className={`D_MeinMenu_show_MM ${styles.show_mobile_menu} ${leftSide && currentBP == 'mobile' && styles.leftSide}`}
            style={leftSide ? {
                top: 4 + (showMobileHeader ? (mobileMenuPadding + menuMargin + menuBorderWidth) : 0),
                left: showMobileHeader ? (menuBorderWidth + menuMargin + mobileMenuPadding) : 6
            } : {
                top: 4 + (showMobileHeader ? (mobileMenuPadding + menuMargin + menuBorderWidth) : 0),
                right: showMobileHeader ? (menuBorderWidth + menuMargin + mobileMenuPadding) : 6
            }}
            onClick={showMMhandler}></div>}
        {/* ======================= */}

        {/* MOBILE HEADER */}
        {currentBP == 'mobile' && showMobileHeader && <div
            className={`${styles.newMobileMenuHeader} D_MobileMenuHeader  ${props.theme}`}
            style={menuMargin !== 0 ? {
                margin: menuMargin,
                borderWidth: menuBorderWidth,
                padding: mobileMenuPadding
            } :
                {
                    margin: menuMargin,
                    borderWidth: menuBorderWidth,
                    borderRadius: 0,
                    padding: mobileMenuPadding
                }}
        >
            <div className={`${styles.newLogoWrapper} D_MainMenu_Logo_Wrapper`}
                style={mobileHeaderLogoPosition == 'center' ? {
                    margin: '0 auto',
                    width: mobileHeaderLogo == "large" ? logoSize.width : logoSize.height
                } : mobileHeaderLogoPosition == 'right' ? {
                    margin: '0 0 0 auto',
                    width: mobileHeaderLogo == "large" ? logoSize.width : logoSize.height
                } : {}}
            >
                {mobileHeaderLogo == 'small' ?
                    <React.Fragment>
                        {logoOption == 'ai' ?
                            <div
                                onClick={handleRoute("/")}
                                style={{
                                    width: logoSize.height,
                                    height: logoSize.height,
                                    display: "flex",
                                    alignItems: "flex-end"
                                }}
                                dangerouslySetInnerHTML={{ __html: _.get(menuConfig, "rootMenu.generatedSmallLogo") }} />
                            :
                            <div
                                onClick={handleRoute("/")}
                                style={{
                                    backgroundImage: `url(${smallLogoURL})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    width: logoSize.height,
                                    height: logoSize.height
                                }} />
                        }
                    </React.Fragment>
                    :
                    <React.Fragment>
                        {logoOption == 'ai' ?
                            <div
                                onClick={handleRoute("/")}
                                style={{
                                    width: logoSize.width,
                                    height: logoSize.height,
                                    display: "flex",
                                    alignItems: "flex-end"
                                }}
                                dangerouslySetInnerHTML={{ __html: _.get(menuConfig, "rootMenu.generatedLogo") }} />
                            :
                            largeLogoURL ? <div
                                onClick={handleRoute("/")}
                                style={{
                                    backgroundImage: `url(${largeLogoURL})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    width: logoSize.width,
                                    height: logoSize.height
                                }} /> :
                                <div
                                    onClick={handleRoute("/")}
                                    style={{
                                        width: logoSize.width,
                                        height: logoSize.height,
                                        margin: 0
                                    }}
                                    className={styles.newTitle}>
                                    {props.title}</div>
                        }
                    </React.Fragment>}
            </div>
            {showMobileAuthBlock && showUserButtons && <div
                className={`${styles.mobileheaderAuth} D_MainMenu_Mobile_Auth`}
                style={!leftSide ? {
                    left: showMobileHeader ? (menuBorderWidth + menuMargin + mobileMenuPadding) : 6
                } : {
                    right: showMobileHeader ? (menuBorderWidth + menuMargin + mobileMenuPadding) : 6
                }}
            >
                {showUserButtons && <NewMainMenuAuth
                    auth={auth}
                    rightSide={leftSide}
                    handleRoute={route => e => {
                        hideMMhandler()
                        handleRoute(route)()
                    }}
                    mobileHeader
                    compactMode={true}
                    logOut={handleLogOut}
                />}
            </div>}
        </div>}
        {/* ======================= */}

        {/* HORIZONTAL MENU */}
        {currentBP == 'desktop' && isHorizontal &&
            <div className={`${styles.newMainmenu} D_MainMenu ${isHorizontal ? styles.isHorizontal : styles.hideDesktop} 
                ${isHorizontal ? "DD_Horizontal" : ""}
                ${showMM && styles.show} 
                ${props.theme} 
            ${compactMode ? `${styles.compactMode} compact_Mode` : ''
                }`}
                style={menuMargin !== 0 ? {
                    margin: menuMargin,
                    borderWidth: menuBorderWidth,
                    padding: menuPadding
                } :
                    {
                        margin: menuMargin,
                        borderWidth: menuBorderWidth,
                        borderRadius: 0,
                        padding: menuPadding
                    }}>
                <div className={`${styles.hide_mobile_menu} D_MainMenu_hide_mobile`}
                    onClick={hideMMhandler}></div>

                <div className={`${styles.newLogoWrapper} D_MainMenu_Logo_Wrapper`}>
                    {logoOption == 'ai' ?
                        <a onClick={e => {
                            e.preventDefault()
                            handleRoute("/")(e)
                        }}>
                            <div style={{
                                width: logoSize.width,
                                height: logoSize.height
                            }}
                                dangerouslySetInnerHTML={{ __html: _.get(menuConfig, "rootMenu.generatedLogo") }} />
                        </a>
                        : <React.Fragment>
                            {largeLogoURL ?
                                <a onClick={e => {
                                    e.preventDefault()
                                    handleRoute("/")(e)
                                }}
                                    className={`${styles.newLogo} D_MainMenu_Logo`}
                                    style={{
                                        backgroundImage: `url(${largeLogoURL})`,
                                        backgroundPosition: logoPosition == 'left' ? 'left center' : 'center center',
                                        width: logoSize.width,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        height: logoSize.height
                                    }} /> :
                                <a onClick={e => {
                                    e.preventDefault()
                                    handleRoute("/")(e)
                                }}
                                    style={{
                                        width: compactMode ? logoSize.height : logoSize.width,
                                        margin: logoPosition == 'center' ? '0 auto 0 auto' : 0,
                                        height: logoSize.height
                                    }}
                                    className={styles.newTitle}>
                                    {props.title}</a>
                            }
                        </React.Fragment>}
                </div>

                <div className={`${styles.newListSeparator} D_MainMenu_Separator Horizontal_One`} />

                <div className={`${styles.newList} D_MainMenu_List 
                ${sideMenuAlign == 'right' ? styles.alignRight :
                        sideMenuAlign == 'center' ? styles.alignCenter : ''}`}>
                    {(mainMenu.children || []).map(item =>
                        <NewMainMenuItem
                            item={item}
                            auth={auth}
                            sideMenuAlign={sideMenuAlign}
                            isHorizontal
                            custom_labels={custom_labels}
                            compactMode={compactMode}
                            currentRoute={props.currentRoute}
                            handleRoute={route => e => {
                                hideMMhandler(e)
                                handleRoute(route)(e)
                            }
                            }
                            menuConfig={menuConfig}
                            hideGroups={hideGroups} />
                    )}

                </div>

                {showUserButtons && <NewMainMenuAuth
                    auth={auth}
                    handleRoute={route => e => {
                        hideMMhandler()
                        handleRoute(route)()
                    }}
                    compactMode={compactMode}
                    logOut={handleLogOut}
                />}

            </div>}
        {/* ======================= */}

        {/* SIDE MENU */}
        {(!isTabs || currentBP !== 'mobile') && <div className={`${styles.newMainmenu} ${leftSide && currentBP == 'mobile' && styles.leftSide} D_MainMenu ${isHorizontal && styles.hideDesktop} ${showMM && styles.show} ${props.theme} ${compactMode ? `${styles.compactMode} compact_Mode` : ''}`}
            style={menuMargin !== 0 ? {
                margin: menuMargin,
                borderWidth: menuBorderWidth,
                width: compactMode ? menuCompactWidth : menuWidth,
                padding: currentBP == 'mobile' ? sideMenuPadding : compactMode ? `${menuPadding}px ${menuPadding / 2}px ${menuPadding}px ${menuPadding / 2}px` : menuPadding
            } :
                {
                    margin: menuMargin,
                    borderWidth: menuBorderWidth,
                    borderRadius: 0,
                    width: compactMode ? menuCompactWidth : menuWidth,
                    padding: currentBP == 'mobile' ? sideMenuPadding : compactMode ? `${menuPadding}px ${menuPadding / 2}px ${menuPadding}px ${menuPadding / 2}px` : menuPadding
                }}>
            <div className={`${styles.hide_mobile_menu} D_MainMenu_hide_mobile`}
                onClick={hideMMhandler}></div>
            {resizable &&
                <React.Fragment>
                    <div className={`${styles.newMenuMinimize} ${compactMode ? styles.compactMode : ''} D_MainMenu_Minimize`} onClick={() => compactModeHandler(!compactMode)}>
                        <div className={`${styles.newMenuMinimizeButton} icon icon-back D_MainMenu_Minimize_Button`}
                            style={{
                                top: -menuPadding + 2,
                                right: compactMode ? -(menuPadding / 2) + 2 : -menuPadding + 2,
                            }}
                        />
                    </div>
                </React.Fragment>}

            {currentBP == 'mobile' && menuSideHideLogo ? <div /> :
                compactMode && (smallLogoURL || _.get(menuConfig, "rootMenu.generatedSmallLogo")) ?
                    <div className={`${styles.newLogoWrapper} D_MainMenu_Logo_Wrapper`}
                        style={{
                            margin: logoPosition == 'left' ? `0 0 ${menuLogoMargin}px 0` : `0 auto ${menuLogoMargin}px auto`
                        }}
                    >
                        {logoOption == 'ai' ?
                            <div className={styles.cursorPointer} onClick={e => {
                                hideMMhandler()
                                handleRoute("/")()
                            }}>
                                <div style={{
                                    width: logoSize.height,
                                    height: logoSize.height,
                                    display: "flex",
                                    alignItems: "flex-end"
                                }}
                                    dangerouslySetInnerHTML={{ __html: _.get(menuConfig, "rootMenu.generatedSmallLogo") }} />
                            </div>
                            :
                            <div onClick={e => {
                                hideMMhandler()
                                handleRoute("/")()
                            }}
                                className={`${styles.newLogo} D_MainMenu_Logo ${styles.cursorPointer}`}
                                style={{
                                    backgroundImage: `url(${smallLogoURL})`,
                                    backgroundPosition: logoPosition == 'left' ? 'left center' : 'center center',
                                    margin: '0 auto 0 auto',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    width: logoSize.height,
                                    height: logoSize.height
                                }} />
                        }
                    </div>
                    :
                    <div className={`${styles.newLogoWrapper} D_MainMenu_Logo_Wrapper`}
                        style={{
                            margin: logoPosition == 'left' ? `0 0 ${menuLogoMargin}px 0` : `0 auto ${menuLogoMargin}px auto`
                        }}
                    >
                        {logoOption == 'ai' ?
                            <div className={styles.cursorPointer} onClick={e => {
                                hideMMhandler()
                                handleRoute("/")()
                            }}>
                                <div style={{
                                    width: logoSize.width,
                                    height: logoSize.height,
                                    display: "flex",
                                    alignItems: "flex-end"
                                }}
                                    dangerouslySetInnerHTML={{ __html: _.get(menuConfig, "rootMenu.generatedLogo") }} />
                            </div>
                            : <React.Fragment>
                                {largeLogoURL ?
                                    <div onClick={e => {
                                        hideMMhandler()
                                        handleRoute("/")()
                                    }}
                                        className={`${styles.newLogo} D_MainMenu_Logo ${styles.cursorPointer}`}
                                        style={{
                                            backgroundImage: `url(${largeLogoURL})`,
                                            backgroundPosition: logoPosition == 'left' ? 'left center' : 'center center',
                                            width: logoSize.width,
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            height: logoSize.height
                                        }} /> :
                                    <div onClick={e => {
                                        hideMMhandler()
                                        handleRoute("/")()
                                    }}
                                        style={{
                                            width: compactMode ? logoSize.height : logoSize.width,
                                            margin: logoPosition == 'center' ? '0 auto 0 auto' : 0,
                                            height: logoSize.height
                                        }}
                                        className={`${styles.newTitle} ${styles.cursorPointer}`}>
                                        {props.title}</div>
                                }
                            </React.Fragment>}
                    </div>}

            <div className={`${styles.newList} 
                ${showTopBorder && styles.topBordered} 
                ${showBottomBorder && styles.bottomBordered} 
                D_MainMenu_List`}
                ref={scrollDivRef}
                onScroll={handleScroll}
            >
                {(mainMenu.children || []).map(item =>
                    <NewMainMenuItem
                        item={item}
                        auth={auth}
                        menuCompactWidth={menuCompactWidth}
                        menuPadding={menuPadding}
                        handleRoute={route => e => {
                            hideMMhandler(e)
                            handleRoute(route)(e)
                        }
                        }
                        custom_labels={custom_labels}
                        compactMode={compactMode}
                        currentRoute={props.currentRoute}
                        menuConfig={menuConfig}
                        hideGroups={hideGroups} />
                )}

            </div>
            {showUserButtons && <NewMainMenuAuth
                auth={auth}
                horizontal
                handleRoute={route => e => {
                    hideMMhandler()
                    handleRoute(route)()
                }}
                compactMode={compactMode}
                logOut={handleLogOut}
                menuWidth={menuWidth}
                menuCompactWidth={menuCompactWidth}
            />}
        </div>}

    </React.Fragment >
}

function NewMainMenuAuth({ auth, compactMode, horizontal, logOut, handleRoute, mobileHeader, rightSide }) {

    const userName = () => {
        let name = ""
        if (auth.firstName) { name = name + auth.firstName + " " }
        if (auth.lastName) { name = name + auth.lastName }
        return name
    }

    return <React.Fragment>
        {!mobileHeader && <React.Fragment>
            {horizontal ?
                <div className={`${styles.newListSeparator} D_MainMenu_Separator Vertical_One`} /> :
                <div className={`${styles.newListSeparator} D_MainMenu_Separator Horizontal_One`} />}
        </React.Fragment>}

        {auth.isAuth && !compactMode ?
            <div className={`${styles.newListFooter} ${!horizontal ? styles.horizontal : styles.vertical} D_MainMenu_Footer`}>
                <a className={`${styles.newListFooterImage} D_MainMenu_Footer_Image`}
                    onClick={e => {
                        e.preventDefault()
                        handleRoute("/profile")(e)
                    }}
                >
                    {auth.userpic ? <img src={auth.userpic} /> : <div className='icon large icon-user' />}
                </a>
                <div className={`${styles.newListFooterText} D_MainMenu_Footer_Text`}>
                    {userName() && <div className={`${styles.newListFooterName} D_MainMenu_Footer_Name`}>{userName()}</div>}
                    <div className={`${styles.newListFooterID} D_MainMenu_Footer_ID`}>{auth.user}</div>
                </div>
                <div onClick={logOut} className={`${styles.newListFooterLogout} D_MainMenu_Footer_Logout icon icon-logout`} />
            </div> :
            auth.isAuth && compactMode ?
                <DropDown
                    top={!mobileHeader}
                    rightSide={rightSide}
                    dropButton={<a className={`${styles.newListFooterImage} D_MainMenu_Footer_Image`} >
                        {auth.userpic ? <img src={auth.userpic} /> : <div className='icon large icon-user' />}
                    </a>}>
                    <div className={`${styles.profileDD} D_FPS_profileDD`}>
                        <div onClick={handleRoute("/profile")} className={`${styles.profileDDlink} D_FPS_profileDD_Button icon icon-user`}>
                            Profile
                        </div>
                        <div onClick={logOut} className={`${styles.profileDDlink} D_FPS_profileDD_Button icon icon-logout`}>
                            Sign out
                        </div>
                    </div>

                </DropDown>

                :
                <div className={`DMainMenu_LogInButton ${horizontal ? 'horizontalLB' : ''} ${compactMode ? 'compactLB' : ''}`}>
                    <Button accent={!mobileHeader} transparent={mobileHeader} onClick={handleRoute("/signin")} icon='logoutAlt'>{compactMode ? "" : "Sign in"}</Button>
                </div>
        }
    </React.Fragment>
}

function NewMainMenuItem({ item, auth, menuPadding, menuCompactWidth,
    isHorizontal, handleRoute, currentRoute, hideGroups,
    menuConfig, compactMode, custom_labels, sideMenuAlign }) {

    const menuItem = _.get(menuConfig, [item.id]) || {}

    const name = menuItem.name || item.name

    const checkIfOpened = () => {
        let result = false;
        (item.children || []).forEach(element => {
            if (menuConfig[element.id].linkToPage == currentRoute) {
                result = true;
            }
        });
        return result
    }

    const [isOpened, setIsOpened] = useState(!menuItem.hideByDefault || checkIfOpened() || !hideGroups)

    const hideGroup = () => {
        hideGroups && setIsOpened(!isOpened)
    }

    const getLabel = () => {
        if (_.get(menuItem, "addLabel") !== "add_label") { return null }
        const label = _.get(custom_labels, menuItem.menuLabel)
        if (label && label !== "0") {
            return <div className={`${styles.itemLabel} D_MainMenu_Item_Label`}>{label}</div>
        }
        else {
            return null
        }
    }

    //checkig RBAC
    if (menuItem.permissions == "all_unauthorised" && auth.isAuth) { return null }
    if (menuItem.permissions == "all_registered" && !auth.isAuth) { return null }
    if (menuItem.permissions == "roles" &&
        (!auth.isAuth || !auth.role || !menuItem.specifyRoles ||
            _.intersection(auth.role.split(","), menuItem.specifyRoles.split(",")).length == 0)
    ) { return null }
    //===========

    if (item.isFolder && !isHorizontal) {
        return <div className={`${styles.newListGroup} D_MainMenu_List_Group`}>
            {item.name && <div className={`
                ${styles.newListGroupTitle} 
                ${isOpened ? '' : 'group_title_hidden'}
                ${hideGroups ? 'group_title_hideble' : ''}
                D_MainMenu_List_Group_Title`}
                onClick={hideGroup}
                style={compactMode ? {
                    maxWidth: menuCompactWidth// - menuPadding
                } : {}}
            >
                {hideGroups && !compactMode && <div className={`icon icon-up small D_MainMenu_List_expand ${isOpened ? '' : 'group_hidden'}`} />}
                {name}</div>}
            {(isOpened) && item.children.length && item.children.map(child =>
                <NewMainMenuItem
                    custom_labels={custom_labels}
                    compactMode={compactMode}
                    auth={auth}
                    handleRoute={handleRoute}
                    menuPadding={menuPadding}
                    menuCompactWidth={menuCompactWidth}
                    item={child}
                    currentRoute={currentRoute}
                    menuConfig={menuConfig} />
            )}
        </div>
    }

    const horMenuMargin = _.get(menuConfig, "rootMenu.horMenuMargin") || 12
    const horMenuGroupArrow = _.get(menuConfig, "rootMenu.horMenuGroupArrow") || 'left'
    const horMenuGroupArrowSize = _.get(menuConfig, "rootMenu.horMenuGroupArrowSize") || 'medium'

    if (item.isFolder && isHorizontal) {
        return <div className={`D_MainMenu_Item D_MainMenu_GroupTitle ${styles.menuIcon}`}
            style={sideMenuAlign == 'right' ? { marginLeft: horMenuMargin } :
                sideMenuAlign == 'left' ? { marginRight: horMenuMargin } : {}
            }
        >
            <DropDown
                dropButton={<div className={`${styles.newMenuLink} icon`}>
                    {horMenuGroupArrow == 'right' && name}
                    <span className={`icon icon-down 
                        ${horMenuGroupArrowSize == 'small' && 'verySmall'} 
                        ${horMenuGroupArrowSize == 'medium' && 'small'} 
                        `} />
                    {horMenuGroupArrow == 'left' && name}
                </div>}>

                <div className={`${styles.newDDMenu} D_MainMenu_DropDown`}>
                    {item.children.length && item.children.map(child =>
                        <NewMainMenuItem
                            custom_labels={custom_labels}
                            item={child}
                            auth={auth}
                            handleRoute={handleRoute}
                            currentRoute={currentRoute}
                            menuConfig={menuConfig} />
                    )}
                </div>
            </DropDown>


        </div>
    }

    return <a onClick={e => menuItem.linkToType !== 'external' ?
        handleRoute(menuItem.linkToPage)(e) : undefined}
        href={menuItem.linkToType !== 'external' ? undefined : menuItem.linkToURL}
        target={menuItem.linkToURLNewWindow && menuItem.linkToType == 'external' ? '_blank' : ''}
        style={sideMenuAlign == 'right' ? { marginLeft: horMenuMargin } :
            sideMenuAlign == 'left' ? { marginRight: horMenuMargin } : {}
        }
        className={`D_MainMenu_Item 
            ${styles.menuIcon}
            ${styles.cursorPointer}
            ${currentRoute == menuItem.linkToPage ? "selected" : ""}
            ${menuItem.iconType == 'directual_icon' ? `icon icon-${menuItem.menuDirectualIconSet}` : ''}
            ${!menuItem.menuDirectualIconSet && !menuItem.menuRemixIcon && !menuItem.menuIconCustom ? 'icon icon-application' : ''}
        `}>
        {/* Custom icon: */}
        {menuItem.iconType == "custom_icon" && menuItem.menuIconCustom &&
            <div className={`${styles.customIcon} D_MainMenu_Item_customIcon`}>
                <img
                    style={{
                        width: menuItem.menuCustomIconSize || 24,
                        height: menuItem.menuCustomIconSize || 24
                    }}
                    src={currentRoute == menuItem.linkToPage && menuItem.menuIconCustomSelected ?
                        menuItem.menuIconCustomSelected
                        : menuItem.menuIconCustom} /></div>}

        {/* Remix icon: */}
        {menuItem.iconType == "remix_icon" && menuItem.menuRemixIcon &&
            <div className={`${styles.customIcon} D_MainMenu_Item_customIcon`}>
                <svg
                    width={menuItem.menuRemixIconSize || 24}
                    height={menuItem.menuRemixIconSize || 24}
                    viewBox={`0 0 24 24`}
                >
                    <path
                        fill={currentRoute == menuItem.linkToPage ?
                            (menuItem.menuRemixIconColorSelected || '#000000') :
                            (menuItem.menuRemixIconColor || '#000000')}
                        d={menuItem.menuRemixIcon.Content}
                    ></path>
                </svg>
            </div>}

        {compactMode && <div className={`${styles.compactTooltip} D_MainMenu_Item_Toolip`}>{name}</div>}
        {item.link && !compactMode ? item.link :
            !compactMode ? <div
                className={`${styles.newMenuLink} DD_MainMenu_A`}>
                {name}
                {menuItem.linkToURLNewWindow && menuItem.linkToType == 'external' && <div className={`icon verySmall inline icon-arrowRightTop ${styles.newWindow}`} />}
            </div> : undefined}
        {getLabel()}
    </a>
}