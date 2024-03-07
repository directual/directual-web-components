import React, { useState, useEffect, useRef } from 'react'
// import Button from '../../button/button'
import styles from './fpsLayout.module.css'
// import FpsCards from '../../viewobjects/cards/FpsCards'
import TabsPane from '../tabpane/tabpane'
import _ from 'lodash'
import Loader from '../../loader/loader'
import { dict } from '../../locale'
import PropTypes from 'prop-types';

const brakePoints = {
    mobile: { from: 0, to: 478, display: 400 },
    tablet: { from: 479, to: 768, display: 700 },
    desktop: { from: 769, to: 1201, display: 1200 },
    wideDesktop: { from: 1202, to: '∞', display: 1400 },
}

export function FpsLayout({ layout, onChangeTab, localLoading, locale }) {

    const layoutRef = useRef(null);
    const [currentBP, setCurrentBP] = useState('desktop')
    const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)
    const lang = locale ? locale.length == 3 ? locale : 'ENG' : 'ENG'

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
        if (layoutWidth >= brakePoints.tablet.from && layoutWidth <= brakePoints.tablet.to) {
            setCurrentBP('tablet')
        }
        if (layoutWidth >= brakePoints.desktop.from && layoutWidth <= brakePoints.desktop.to) {
            setCurrentBP('desktop')
        }
        if (layoutWidth >= brakePoints.wideDesktop.from) {
            setCurrentBP('wideDesktop')
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

    // console.log("LAYOUT")
    // console.log(layout)


    if (!layout) { return <div className={styles.error}>no layout</div> }

    const composeTabsContent = (tabId) => {
        if (localLoading) return <div style={{ margin: 24 }}><Loader>{dict[lang].loading}</Loader></div>
        if (!layout.sections[tabId] || layout.sections[tabId].length == 0) return <div />
        return <div>
            {layout.sections[tabId].map(section => <Section key={section.id} section={section} currentBP={currentBP} />)}
        </div>
    }
    const tabs = layout.tabs.map(tab => { return { ...tab, key: tab.id, content: composeTabsContent(tab.id) } })

    return (
        (tabs && tabs[0]) ? <div className={`${styles.fpsLayout} D_FPS_LAYOUT`} ref={layoutRef}>
            {layout.showHeader && layout.header && <h1 className={`${styles.layoutHeader} D_FPS_LAYOUT_HEADER`}>{layout.header}</h1>}
            {tabs && <TabsPane fpsTabs hideSingleTab tabs={tabs} saveTabToURL onChangeTab={onChangeTab} //currentTabKey={tabs[0].key}
            //fixedScroll
            />}
        </div> : <div />)
}

const Section = ({ section, currentBP }) => {

    // console.log('section')
    // console.log(section)

    if (!section.columns || section.columns.length == 0) return <div>no columns</div>
    const correctedBP = currentBP == 'wideDesktop' ? 'desktop' : currentBP;

    const marginTop = _.get(section, 'spacing.marginBottom') || _.get(section, 'spacing.marginBottom') === 0 ? _.get(section, 'spacing.marginBottom') :
        (_.get(section, 'marginTop') || _.get(section, 'marginTop') === 0 ? _.get(section, 'marginTop') : 24)
    const marginBottom = _.get(section, 'spacing.marginBottom') || _.get(section, 'spacing.marginBottom') === 0 ? _.get(section, 'spacing.marginBottom') :
        (_.get(section, 'marginBottom') || _.get(section, 'marginBottom') === 0 ? _.get(section, 'marginBottom') : 24)
    const marginLeft = _.get(section, 'spacing.marginLeft') || _.get(section, 'spacing.marginLeft') === 0 ? _.get(section, 'spacing.marginLeft') :
        (_.get(section, 'marginLeft') || _.get(section, 'marginLeft') === 0 ? _.get(section, 'marginLeft') : 24)
    const marginRight = _.get(section, 'spacing.marginRight') || _.get(section, 'spacing.marginRight') === 0 ? _.get(section, 'spacing.marginRight') :
        (_.get(section, 'marginRight') || _.get(section, 'marginRight') === 0 ? _.get(section, 'marginRight') : 24)

    const paddingTop = _.get(section, 'spacing.paddingBottom') || _.get(section, 'spacing.paddingBottom') === 0 ? _.get(section, 'spacing.paddingBottom') :
        (_.get(section, 'paddingTop') || _.get(section, 'paddingTop') === 0 ? _.get(section, 'paddingTop') : 0)
    const paddingBottom = _.get(section, 'spacing.paddingBottom') || _.get(section, 'spacing.paddingBottom') === 0 ? _.get(section, 'spacing.paddingBottom') :
        (_.get(section, 'paddingBottom') || _.get(section, 'paddingBottom') === 0 ? _.get(section, 'paddingBottom') : 0)
    const paddingLeft = _.get(section, 'spacing.paddingLeft') || _.get(section, 'spacing.paddingLeft') === 0 ? _.get(section, 'spacing.paddingLeft') :
        (_.get(section, 'paddingLeft') || _.get(section, 'paddingLeft') === 0 ? _.get(section, 'paddingLeft') : 0)
    const paddingRight = _.get(section, 'spacing.paddingRight') || _.get(section, 'spacing.paddingRight') === 0 ? _.get(section, 'spacing.paddingRight') :
        (_.get(section, 'paddingRight') || _.get(section, 'paddingRight') === 0 ? _.get(section, 'paddingRight') : 0)

    const maxWidth = _.get(section, 'maxWidth') || _.get(section, 'maxWidth') === 0 ? _.get(section, 'maxWidth') : 'none'
    const align = _.get(section, 'align')

    return <div className={`${styles.section} ${_.get(section,"cssClass")} ${align == 'center' ? styles.alignCenter : ''}`}
        style={{
            flexDirection: section.flexDirection[correctedBP],
            marginTop: parseInt(marginTop),
            marginBottom: parseInt(marginBottom),
            marginLeft: parseInt(marginLeft),
            marginRight: parseInt(marginRight),
            paddingTop: parseInt(paddingTop),
            paddingBottom: parseInt(paddingBottom),
            paddingLeft: parseInt(paddingLeft),
            paddingRight: parseInt(paddingRight),
            maxWidth: parseInt(maxWidth),
        }}>
        {section.columns.map((column, i) => <Column
            section={section}
            last={section.columns.length == i + 1}
            key={column.id}
            row={section.flexDirection[correctedBP] == 'row'}
            column={column} />)}
    </div>
}

const Column = ({ column, row, last, section }) => {

    return <div className={`${styles.column} D_FPS_LAYOUT_COLUMN`} style={{ width: row ? column.size + '%' : 'auto' }}>
        <ComponentWrapper last={last} section={section} row={row}>
            {column.render}
        </ComponentWrapper>
    </div>
}

function ComponentWrapper(props) {
    const { section } = props

    const paddingRight = _.get(section, 'horSpacing') || _.get(section, 'horSpacing') === 0 ? _.get(section, 'horSpacing') : 24 // space between columns
    const paddingBottom = _.get(section, 'vertSpacing') || _.get(section, 'vertSpacing') === 0 ? _.get(section, 'vertSpacing') : 24 // space between rows


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
        if (layoutWidth >= brakePoints.tablet.from && layoutWidth <= brakePoints.tablet.to) {
            setCurrentBP('tablet')
        }
        if (layoutWidth >= brakePoints.desktop.from && layoutWidth <= brakePoints.desktop.to) {
            setCurrentBP('desktop')
        }
        if (layoutWidth >= brakePoints.wideDesktop.from) {
            setCurrentBP('wideDesktop')
        }
    }, [layoutWidth])

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(layoutRef.current.offsetWidth);
            }
        });
    }, []);
    // =========================


    return (
        <div className={`${styles.componentWrapper} D_FPS_COMPONENT_WRAPPER`} ref={layoutRef}
            style={{
                paddingRight: !props.last && props.row ? parseInt(paddingRight) : 0,
                paddingBottom: !props.last && !props.row ? parseInt(paddingBottom) : 0
            }}>

            {/* For Production / For Storybook testing:  */}
            {props.children ? props.children(currentBP) : 
                <div style={{ height: 100, backgroundColor: 'lightcoral', display:'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                    <code>development mode</code></div>}

        </div>)
}


FpsLayout.propTypes = {
    layout: PropTypes.object,
    locale: PropTypes.string
};

FpsLayout.defaultProps = {
    layout: {},
    locale: "ENG"
};