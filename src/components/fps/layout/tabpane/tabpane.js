import React, { useState, useEffect, useRef } from 'react'
import styles from './tabpane.module.css'
import Button from '../../button/button'
import Loader from '../../loader/loader'
import { addUrlParam, removeUrlParam, clearURL } from '../../queryParams'

export default function TabsPane({ tabs, loading, currentTabKey, fpsTabs, fixedScroll, hideSingleTab, preloadTabs, saveTabToURL, style, onChangeTab }) {

    const [currentTab, setCurrentTab] = useState(currentTabKey || tabs[0].key || tabs[0].id || '')

    let counter = 0
    tabs.forEach(tab => { counter = !tab.hidden ? counter + 1 : counter })

    const isSingleTab = counter == 1 || tabs.length == 1

    const chooseTab = tabClicked => {
        setCurrentTab(tabClicked)
        onChangeTab && onChangeTab(tabClicked)
        saveTabToURL && addUrlParam({ key: 'tab', value: tabClicked })
    }

    useEffect(()=> {setCurrentTab(currentTabKey)}, [currentTabKey])

    useEffect(function onFirstMount() {
        const queryString = typeof window !== 'undefined' ? window.location.search : '';
        const urlParams = new URLSearchParams(queryString);
        const urlTab = urlParams && urlParams.get('tab')
        if (!currentTabKey && urlTab && saveTabToURL && tabs.filter(i => i.key == urlTab).length) { setCurrentTab(urlTab) }
    }, []);

    return (<div style={{height: "100%"}}
    >
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
                    fpsTabs={fpsTabs}
                    currentTabKey={currentTab}
                    onClick={tabClicked => tabClicked && chooseTab(tabClicked)} />}
            {preloadTabs && tabs.map(tab => <Tab
                key={tab.key} tabContent={tab} currentTabKey={currentTab} isSingleTab={isSingleTab} />)}

            {!preloadTabs && tabs.map(tab => currentTab == tab.key &&
                <Tab loading={loading} key={tab.key} tabContent={tab} currentTabKey={currentTab} isSingleTab={isSingleTab} />)}
        </div>
    </div>
    )
}

function TabsMenu({ tabs, currentTabKey, onClick, fpsTabs }) {
    return (
        <ul className={`${styles.tabsMenu} ${fpsTabs && styles.fpsTabs}`}>
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

export function Tab({ tabContent, currentTabKey, isSingleTab, loading }) {
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
            {loading ? <Loader /> : tabContent.content}
        </div>
    )
}
