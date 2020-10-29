import React, { useState, useEffect, useRef } from 'react'
import styles from './tabpane.module.css'


export default function TabsPane({ tabs, currentTabKey, fixedScroll }) {
    const [currentTab, setCurrentTab] = useState(currentTabKey || '')

    return (
        <div className={`${styles.tabsPane} ${fixedScroll && styles.fixedScroll}`}>
            <TabsMenu
                tabs={tabs}
                currentTabKey={currentTab}
                onClick={tabClicked => tabClicked && setCurrentTab(tabClicked)} />
            {tabs.map(tab =>
                <Tab key={tab.key} tabContent={tab} currentTabKey={currentTab} />)}
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

export function Tab({ tabContent, currentTabKey }) {
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
                ${styles.tabWrapper} 
                ${currentTabKey == tabContent.key && styles.current}
                ${showBorder && styles.bordered}
            `}>
            {tabContent.content}
        </div>
    )
}