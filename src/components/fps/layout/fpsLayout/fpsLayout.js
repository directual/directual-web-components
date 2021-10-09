import React, { useState, useEffect, useRef } from 'react'
// import Button from '../../button/button'
import styles from './fpsLayout.module.css'
// import FpsCards from '../../viewobjects/cards/FpsCards'
import TabsPane from '../tabpane/tabpane'

const brakePoints = {
    mobile: { from: 0, to: 478, display: 400 },
    tablet: { from: 479, to: 768, display: 700 },
    desktop: { from: 769, to: 1201, display: 1200 },
    wideDesktop: { from: 1202, to: '∞', display: 1400 },
}

export function FpsLayout({ layout }) {

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

    // console.log("LAYOUT")
    // console.log(layout)


    if (!layout) { return <div className={styles.error}>no layout</div> }

    const composeTabsContent = (tabId) => {
        if (!layout.sections[tabId] || layout.sections[tabId].length == 0) return <div />
        return <div>
            {layout.sections[tabId].map(section => <Section key={section.id} section={section} currentBP={currentBP} />)}
        </div>
    }
    const tabs = layout.tabs.map(tab => { return { ...tab, key: tab.id, content: composeTabsContent(tab.id) } })

    return (
        (tabs && tabs[0]) ? <div className={styles.fpsLayout} ref={layoutRef}>
            {layout.showHeader && layout.header && <h1 className={styles.layoutHeader}>{layout.header}</h1>}
            {tabs && <TabsPane hideSingleTab tabs={tabs} //currentTabKey={tabs[0].key} 
                //fixedScroll 
            />}
        </div> : <div />)
}

const Section = ({ section, currentBP }) => {

    if (!section.columns || section.columns.length == 0) return <div>no columns</div>
    const correctedBP = currentBP == 'wideDesktop' ? 'desktop' : currentBP;

    return <div className={styles.section} style={{ flexDirection: section.flexDirection[correctedBP] }}>
        {section.columns.map( (column, i) => <Column last={section.columns.length == i + 1} key={column.id} row={section.flexDirection[correctedBP] == 'row'} column={column} />)}
    </div>
}

const Column = ({ column, row, last }) => {

    return <div className={styles.column} style={{ width: row ? column.size + '%' : 'auto' }}>
        <ComponentWrapper last={last} row={row}>
            {column.render}
        </ComponentWrapper>
    </div>
}

function ComponentWrapper(props) {

    const paddingRight = 24 // space between columns

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
        <div className={styles.componentWrapper} ref={layoutRef} style={{paddingRight: !props.last && props.row ? paddingRight : 0}}>
            {/* <div className={styles.componentWidth}>{layoutWidth} – {currentBP}</div> */}
            {props.children(currentBP)}
        </div>)
}