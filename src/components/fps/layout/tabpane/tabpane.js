import React, { useState, useEffect, useRef } from 'react'
import styles from './tabpane.module.css'
import Button from '../../button/button'
import { addUrlParam, removeUrlParam, clearURL } from '../../queryParams'

export default function TabsPane({ tabs, currentTabKey, fixedScroll, hideSingleTab, preloadTabs, saveTabToURL, style }) {

    const [currentTab, setCurrentTab] = useState(currentTabKey || tabs[0].id || '')

    let counter = 0
    tabs.forEach(tab => { counter = !tab.hidden ? counter + 1 : counter })

    const isSingleTab = counter == 1 || tabs.length == 1

    const chooseTab = tabClicked => {
        setCurrentTab(tabClicked)
        saveTabToURL && addUrlParam({ key: 'tab', value: tabClicked })
    }

    useEffect(function onFirstMount() {
        const queryString = typeof window !== 'undefined' ? window.location.search : '';
        const urlParams = new URLSearchParams(queryString);
        const urlTab = urlParams && urlParams.get('tab')
        if (!currentTabKey && urlTab && saveTabToURL) {setCurrentTab(urlTab)}
    }, []);

    return (<div>
        {/* urlTab = {urlTab}<br />
        currentTab = {currentTab} */}
        {/* <Button
            onClick={() => addUrlParam({ key: 'param1', value: '123' })}
        >
            Add param 1
        </Button>
        <Button
            onClick={() => addUrlParam({ key: 'param2', value: 'aaa' })}
        >
            Add param 2
        </Button> */}
        {/* <Button
            onClick={() => clearURL()}
        >
            Clear url
        </Button> */}
        <div className={`${styles.tabsPane} ${fixedScroll && styles.fixedScroll}`} style={style}>
            {(!isSingleTab || (isSingleTab && !hideSingleTab)) &&
                <TabsMenu
                    tabs={tabs}
                    currentTabKey={currentTab}
                    onClick={tabClicked => tabClicked && chooseTab(tabClicked)} />}
            {preloadTabs && tabs.map(tab => <Tab
                key={tab.key} tabContent={tab} currentTabKey={currentTab} isSingleTab={isSingleTab} />)}

            {!preloadTabs && tabs.map(tab => currentTab == tab.key &&
                <Tab key={tab.key} tabContent={tab} currentTabKey={currentTab} isSingleTab={isSingleTab} />)}
        </div>
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
                ${currentTabKey == tabContent.key && styles.current}
                ${showBorder && styles.bordered}
            `}>
            {tabContent.content}
        </div>
    )
}