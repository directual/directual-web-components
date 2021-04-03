import React, { useState, useEffect, useRef } from 'react'
import styles from './tabpane.module.css'


export default function TabsPane({ tabs, currentTabKey, fixedScroll, hideSingleTab }) {
    const [currentTab, setCurrentTab] = useState(currentTabKey || '')

    let counter = 0
    tabs.forEach(tab=> { counter = !tab.hidden ? counter + 1 : counter })

    const isSingleTab = counter == 1 || tabs.length == 1

    return (
        <div className={`${styles.tabsPane} ${fixedScroll && styles.fixedScroll}`}>
            {(!isSingleTab || (isSingleTab && !hideSingleTab)) &&
            <TabsMenu
                tabs={tabs}
                currentTabKey={currentTab}
                onClick={tabClicked => tabClicked && setCurrentTab(tabClicked)} />}
            {tabs.map(tab => currentTab == tab.key &&
                <Tab key={tab.key} tabContent={tab} currentTabKey={currentTab} isSingleTab={isSingleTab}/>)}
        </div>
    )
}

function TabsMenu({ tabs, currentTabKey, onClick }) {
    return (
        <ul className={styles.tabsMenu}>
            {tabs && tabs.map(tab =>
            <React.Fragment key={tab.key}>
                {!tab.hidden &&
                <div
                    onClick={() => (tab.key && !tab.disabled) && onClick(tab.key)}
                    key={tab.key}
                    className={`
                        ${styles.tabMenuItem} 
                        ${(tab.key && tab.disabled) && styles.disabled}
                        ${currentTabKey == tab.key && styles.current}
                    `}>
                    {tab.title}</div>}
            </React.Fragment>
            )}
        </ul>
    )
}

export function Tab({ tabContent, currentTabKey, isSingleTab }) {
    const scrollDivRef = useRef(null)
    const [showBorder, setShowBorder] = useState(false)

    const handleScroll = () => {
        scrollDivRef.current.scrollTop >= 10 ?
            setShowBorder(true) :
            setShowBorder(false)
    }

    return (
        <div
            ref={scrollDivRef}
            onScroll={handleScroll}
            className=
            {`
                ${isSingleTab && styles.singleTab}
                ${styles.tabWrapper} 
                ${currentTabKey == tabContent.key && styles.current_}
                ${showBorder && styles.bordered}
            `}>
            {tabContent.content}
        </div>
    )
}