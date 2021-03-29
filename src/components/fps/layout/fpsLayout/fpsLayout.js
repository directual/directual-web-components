import React, { useState, useEffect, useRef } from 'react'
// import Button from '../../button/button'
import styles from './fpsLayout.module.css'
// import FpsCards from '../../viewobjects/cards/FpsCards'
import TabsPane from '../tabpane/tabpane'

const brakePoints = {
    mobile: { from: 0, to: 478, display: 400 },
    desktop: { from: 479, to: '∞', display: 1200 },
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
        } else { setCurrentBP('desktop') }
    }, [layoutWidth])

    window.onresize = () => {
        if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
            setLayoutWidth(layoutRef.current.offsetWidth)
        }
    }
    // =========================

    console.log("LAYOUT")
    console.log(layout)


    if (!layout) { return <div className={styles.error}>no layout</div> }

    const composeTabsContent = (tabId) => {
        if (!layout.sections[tabId] || layout.sections[tabId].length == 0) return <div />
        return <div>
            {layout.sections[tabId].map(section => <Section key={section.id} section={section} currentBP={currentBP} />)}
        </div>
    }
    const tabs = layout.tabs.map(tab => { return { ...tab, key: tab.id, content: composeTabsContent(tab.id) } })

    return (
        <div className={styles.fpsLayout} ref={layoutRef}>
            {layout.showHeader && layout.header && <h1 className={styles.layoutHeader}>{layout.header}</h1>}
            {tabs && <TabsPane tabs={tabs} currentTabKey={tabs[0].key} fixedScroll />}
        </div>)
}

const Section = ({ section, currentBP }) => {

    if (!section.columns || section.columns.length == 0) return <div>no columns</div>

    return <div className={styles.section} style={{flexDirection: section.flexDirection[currentBP]}}>
        {section.columns.map(column => <Column key={column.id} row={section.flexDirection[currentBP] == 'row'} column={column} />)}
    </div>
}

const Column = ({column, row}) => {

    return <div className={styles.column} style={{width: row ? column.size + '%' : 'auto'}}>
        <ComponentWrapper>
            {JSON.stringify('column - ' + column.size  + '%')}
        </ComponentWrapper>
    </div>
} 

function ComponentWrapper(props) {
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
        } else { setCurrentBP('desktop') }
    }, [layoutWidth])

    window.onresize = () => {
        if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
            setLayoutWidth(layoutRef.current.offsetWidth)
        }
    }
    // =========================

    return (
        <div className={styles.componentWrapper} ref={layoutRef}>
            <div className={styles.componentWidth}>{layoutWidth} – {currentBP}</div>
            {typeof props.children == 'object' ?
                <props.children.type {...props.children.props} {...{currentBP: currentBP}}>{props.children}</props.children.type>
                // React.cloneElement(props.children, { currentBP: currentBP }) 
                :
                props.children}
        </div>)
}