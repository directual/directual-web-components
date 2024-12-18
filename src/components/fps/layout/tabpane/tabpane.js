import React, { useState, useEffect, useRef } from 'react'
import styles from './tabpane.module.css'
import Button from '../../button/button'
import Loader from '../../loader/loader'
import { addUrlParam, removeUrlParam, clearURL } from '../../queryParams'
import PropTypes from 'prop-types';

export default function TabsPane({ tabs, type, onDivRef, loading, currentTabKey, fpsTabs, fixedScroll, hideSingleTab, preloadTabs, saveTabToURL, style, onChangeTab }) {

    const [currentTab, setCurrentTab] = useState(currentTabKey || tabs[0].key || tabs[0].id || '')

    let counter = 0
    tabs.forEach(tab => { counter = !tab.hidden ? counter + 1 : counter })

    const isSingleTab = counter == 1 || tabs.length == 1

    const chooseTab = tabClicked => {
        setCurrentTab(tabClicked)
        onChangeTab && onChangeTab(tabClicked)
        saveTabToURL && addUrlParam({ key: 'tab', value: tabClicked })
    }

    useEffect(() => { currentTabKey && currentTabKey != currentTab && setCurrentTab(currentTabKey) }, [currentTabKey])

    useEffect(() => {
        // если выбран таб, которого нет:
        if (
            currentTab &&
            tabs.filter(tab => tab.id == currentTab).length == 0 &&
            tabs.filter(tab => tab.key == currentTab).length == 0
        ) {
            setCurrentTab(currentTabKey || tabs[0].key || tabs[0].id)
        }
    }, [tabs])

    useEffect(function onFirstMount() {
        // console.log('mounting tabs')
        // console.log('currentTabKey = ' + currentTabKey)
        const queryString = typeof window !== 'undefined' ? window.location.search : '';
        const urlParams = new URLSearchParams(queryString);
        const urlTab = urlParams && urlParams.get('tab')
        if (!currentTabKey && urlTab && saveTabToURL && tabs.filter(i => i.key == urlTab).length) {
            console.log('set url tab' + urlTab)
            setCurrentTab(urlTab);
        }
        // if none is selected, pick the first:
        if (!currentTab) {
            // console.log('none tab is selected')
            // console.log(tabs)
        } else {
            // console.log(currentTab + ' - is selected')
        }
    }, []);

    return (<div style={{ height: "100%" }}
    >
        {/* current = {currentTab} <br /> */}
        <div className={`${styles.tabsPane} ${fixedScroll && styles.fixedScroll} D_FPS_TABPANE ${type ? styles[type] : ""}`} style={style}>
            {(!isSingleTab || (isSingleTab && !hideSingleTab)) &&
                <TabsMenu
                    tabs={tabs}
                    fpsTabs={fpsTabs}
                    currentTabKey={currentTab}
                    onClick={tabClicked => tabClicked && chooseTab(tabClicked)} />}
            {preloadTabs && tabs.map(tab => <Tab
                onDivRef={onDivRef}
                key={tab.key} tabContent={tab} currentTabKey={currentTab} isSingleTab={isSingleTab} />)}

            {!preloadTabs && tabs.map(tab => currentTab == tab.key &&
                <Tab loading={loading} key={tab.key} tabContent={tab} onDivRef={onDivRef} currentTabKey={currentTab} isSingleTab={isSingleTab} />)}
        </div>
    </div>
    )
}

function TabsMenu({ tabs, currentTabKey, onClick, fpsTabs }) {
    return (
        <ul className={`${styles.tabsMenu} ${fpsTabs && styles.fpsTabs} D_FPS_TABSMENU`}>
            {tabs && tabs.map(tab =>
                <React.Fragment key={tab.key}>
                    {!tab.hidden &&
                        <div
                            onClick={() => (tab.key && !tab.disabled) && onClick(tab.key)}
                            key={tab.key}
                            className={`
                        ${styles.tabMenuItem} D_FPS_TABMENU_ITEM
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
                ${styles.tabWrapper} D_FPS_TAB_WRAPPER
                ${currentTabKey == tabContent.key && styles.current}
                ${showBorder && styles.bordered}
            `}>
            {loading ? <Loader /> : tabContent.content}
        </div>
    )
}

TabsPane.propTypes = {
    fpsTabs: PropTypes.bool,
    saveTabToURL: PropTypes.bool,
    hideSingleTab: PropTypes.bool,
    fixedScroll: PropTypes.bool,
    tabs: PropTypes.object,
    locale: PropTypes.string,
    type: PropTypes.string,
};

TabsPane.defaultProps = {
    fpsTabs: false,
    saveTabToURL: false,
    tabs: {},
    hideSingleTab: false,
    fixedScroll: false,
    locale: 'ENG',
    type: 'regular'
};
