import React, { useState, useEffect, useRef } from 'react'
import styles from './wrapper.module.css'
import { SetTheme } from '../theme/theme'
import { dict } from '../locale'
import PropTypes from 'prop-types';
import Loader from '../loader/loader'

export function FpsWrapper(props) {

    const [currentTheme, setCurrentTheme] = useState(props.themeName)
    useEffect(() => { setCurrentTheme(props.themeName) }, [props.themeName])

    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'
    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/8b09feb3-0e52-45cc-b776-b0a7f9fc4a0e.svg')

    const brakePoints = {
        mobile: { from: 0, to: 768 },
        desktop: { from: 769, to: 10000 },
    }

    const layoutRef = useRef(null);
    const [currentBP, setCurrentBP] = useState('desktop')
    const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)

    const [onLoadComplete, setOnLoadComplete] = useState(false)

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
        // подпорка от бесконечного лоадера
        setTimeout(()=> setOnLoadComplete(true), 2000)

        const resizeListener = () => {
            if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(layoutRef.current.offsetWidth);
            }
        }
        window.addEventListener("resize", resizeListener);
        return () => { window.removeEventListener('resize', resizeListener); };
    }, []);
    // =========================

    return <div className={`${styles.newWrapper} FPS_Wrapper`}>
        <div style={{ width: '100%', position: 'absolute', height: 0 }} ref={layoutRef}></div>
        <SetTheme themeName={currentTheme} onLoadComplete={setOnLoadComplete} />
        {onLoadComplete ? <React.Fragment>
            <div className={`${styles.mainWrapper} FPS_Main_Wrapper ${props.horizontal || currentBP == 'mobile' ? styles.horizontal : ''}`}>
                <div className={`${styles.content_menu} FPS_Content_Menu`}>
                    {props.mainMenu}
                </div>

                {currentBP == 'mobile' && props.showMobileTabs ?
                    <div className={`${styles.mobileTabsWrapper}`}
                        style={{
                            flexDirection: props.mobileTabsPlace == 'bottom' ? 'column' : 'column-reverse'
                        }}
                    >
                        <div className={`${styles.content_components} FPS_Content_Components`}>
                            {props.components}
                        </div>
                        {currentBP == 'mobile' && <div>
                            {props.mobileTabs}
                        </div>}
                    </div> :
                    <div className={`${styles.content_components} FPS_Content_Components`}>
                        {props.components}
                    </div>}
            </div>
            {!props.whiteLabel && <div className={`${styles.newBrandedFooter} FPS_Branded_footer`}>
                <div className={styles.version}>
                    <a target="_blank" className={styles.logo} href="https://directual.com?ref=fps_footer">
                        <img src={logoUrl} />
                    </a>
                </div>
                <span><span className={styles.madeon}>{dict[lang].madeOn} </span><a target="_blank" href="https://directual.com?ref=fps_footer">Directual</a>
                </span>
            </div>}
        </React.Fragment> : <Loader />}
    </div>
}

FpsWrapper.propTypes = {
    horizontal: PropTypes.bool,
    showMobileTabs: PropTypes.bool,
    themeName: PropTypes.object,
    mobileTabsPlace: PropTypes.string, // 'bottom' 'top'
    mobileLeftSide: PropTypes.bool, // burger on top
    whiteLabel: PropTypes.bool,
    locale: PropTypes.string,
    mainMenu: PropTypes.element,
    mobileTabs: PropTypes.element,
    components: PropTypes.element
};

FpsWrapper.defaultProps = {
    horizontal: false,
    showMobileTabs: false,
    mobileTabsPlace: 'bottom',
    mobileLeftSide: false,
    themeName: {},
    whiteLabel: false,
    locale: "ENG",
    mainMenu: <div></div>,
    mobileTabs: <div></div>,
    components: <div></div>
};

export function ComponentWrapper(props) {
    return (
        <div className={`${styles.componentWrapper} D_FPS_Component_Wrapper`}>
            {props.children}
        </div>
    )
}

export function ContentWrapper(props) {
    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'
    return (
        <React.Fragment>
            <div className={`${styles.outer_content_wrapper} D_FPS_outer_content_wrapper`}>
                <div className={`${styles.content_wrapper} D_FPS_content_wrapper`} id={props.id || undefined} >
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}
