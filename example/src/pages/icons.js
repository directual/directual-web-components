import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import styles from './iconsPage.module.css'

export default function IconsPage() {
    const [icon,setIcon] = useState('babai')

    const [defVal,setDefVal] = useState('')

    const options=
        [
            { key: 0, value: 'babai', icon: 'babai' },
            { key: 1, value: 'actions', icon: 'actions' },
            { key: 2, value: 'application', icon: 'application' },
            { key: 3, value: 'arrowDown', icon: 'arrowDown' },
            { key: 4, value: 'arrowLeft', icon: 'arrowLeft' },
            { key: 5, value: 'arrowRight', icon: 'arrowRight' },
            { key: 6, value: 'arrowUp', icon: 'arrowUp' },
            { key: 8, value: 'back', icon: 'back' },
            { key: 9, value: 'ban', icon: 'ban' },
            { key: 10, value: 'bellActive', icon: 'bellActive' },
            { key: 11, value: 'bell', icon: 'bell' },
            { key: 12, value: 'bookmarkFill', icon: 'bookmarkFill' },
            { key: 13, value: 'bookmark', icon: 'bookmark' },
            { key: 14, value: 'boolean', icon: 'boolean' },
            { key: 15, value: 'bracketsArray', icon: 'bracketsArray' },
            { key: 16, value: 'brackets', icon: 'brackets' },
            { key: 17, value: 'bubble', icon: 'bubble' },
            { key: 18, value: 'bug', icon: 'bug' },
            { key: 19, value: 'calendar', icon: 'calendar' },
            { key: 20, value: 'chart', icon: 'chart' },
            { key: 21, value: 'clip', icon: 'clip' },
            { key: 22, value: 'clocks', icon: 'clocks' },
            { key: 23, value: 'close', icon: 'close' },
            { key: 24, value: 'codeArray', icon: 'codeArray' },
            { key: 25, value: 'codeXML', icon: 'codeXML' },
            { key: 26, value: 'collapse', icon: 'collapse' },
            { key: 27, value: 'comment', icon: 'comment' },
            { key: 28, value: 'configure', icon: 'configure' },
            { key: 29, value: 'copy', icon: 'copy' },
            { key: 30, value: 'creditcard', icon: 'creditcard' },
            { key: 31, value: 'database', icon: 'database' },
            { key: 32, value: 'delete', icon: 'delete' },
            { key: 33, value: 'detailsAlt', icon: 'detailsAlt' },
            { key: 34, value: 'details', icon: 'details' },
            { key: 35, value: 'done', icon: 'done' },
            { key: 36, value: 'down', icon: 'down' },
            { key: 37, value: 'download', icon: 'download' },
            { key: 38, value: 'edit', icon: 'edit' },
            { key: 39, value: 'expand', icon: 'expand' },
            { key: 40, value: 'export', icon: 'export' },
            { key: 41, value: 'filterFill', icon: 'filterFill' },
            { key: 42, value: 'filter', icon: 'filter' },
            { key: 43, value: 'folder', icon: 'folder' },
            { key: 44, value: 'forward', icon: 'forward' },
            { key: 45, value: 'gates', icon: 'gates' },
            { key: 46, value: 'cards', icon: 'cards' },
            { key: 47, value: 'help', icon: 'help' },
            { key: 48, value: 'hide', icon: 'hide' },
            { key: 49, value: 'history', icon: 'history' },
            { key: 50, value: 'hook', icon: 'hook' },
            { key: 51, value: 'id', icon: 'id' },
            { key: 52, value: 'import', icon: 'import' },
            { key: 53, value: 'info', icon: 'info' },
            { key: 54, value: 'keynote', icon: 'keynote' },
            { key: 55, value: 'license', icon: 'license' },
            { key: 56, value: 'list', icon: 'list' },
            { key: 57, value: 'lock', icon: 'lock' },
            { key: 58, value: 'logoutAlt', icon: 'logoutAlt' },
            { key: 59, value: 'logout', icon: 'logout' },
            { key: 60, value: 'love', icon: 'love' },
            { key: 61, value: 'mail', icon: 'mail' },
            { key: 62, value: 'menu', icon: 'menu' },
            { key: 63, value: 'minus', icon: 'minus' },
            { key: 65, value: 'mobile', icon: 'mobile' },
            { key: 66, value: 'move', icon: 'move' },
            { key: 67, value: 'nocode', icon: 'nocode' },
            { key: 68, value: 'num', icon: 'num' },
            { key: 69, value: 'number', icon: 'number' },
            { key: 70, value: 'ovalFill', icon: 'ovalFill' },
            { key: 71, value: 'oval', icon: 'oval' },
            { key: 72, value: 'paragraph', icon: 'paragraph' },
            { key: 73, value: 'permission', icon: 'permission' },
            { key: 74, value: 'pinned', icon: 'pinned' },
            { key: 75, value: 'playFill', icon: 'playFill' },
            { key: 76, value: 'play', icon: 'play' },
            { key: 77, value: 'plug', icon: 'plug' },
            { key: 78, value: 'plus', icon: 'plus' },
            { key: 79, value: 'refresh', icon: 'refresh' },
            { key: 80, value: 'restore', icon: 'restore' },
            { key: 81, value: 'rhombusFill', icon: 'rhombusFill' },
            { key: 82, value: 'rhombus', icon: 'rhombus' },
            { key: 83, value: 'rocket', icon: 'rocket' },
            { key: 84, value: 'search', icon: 'search' },
            { key: 85, value: 'settings', icon: 'settings' },
            { key: 86, value: 'shield', icon: 'shield' },
            { key: 87, value: 'sms', icon: 'sms' },
            { key: 88, value: 'sort', icon: 'sort' },
            { key: 89, value: 'stopFill', icon: 'stopFill' },
            { key: 90, value: 'stop', icon: 'stop' },
            { key: 91, value: 'string', icon: 'string' },
            { key: 92, value: 'styles', icon: 'styles' },
            { key: 93, value: 'tag', icon: 'tag' },
            { key: 94, value: 'telegram', icon: 'telegram' },
            { key: 95, value: 'tune', icon: 'tune' },
            { key: 96, value: 'unlock', icon: 'unlock' },
            { key: 97, value: 'unpinned', icon: 'unpinned' },
            { key: 98, value: 'unplug', icon: 'unplug' },
            { key: 99, value: 'up', icon: 'up' },
            { key: 100, value: 'upload', icon: 'upload' },
            { key: 101, value: 'user', icon: 'user' },
            { key: 102, value: 'version', icon: 'version' },
            { key: 103, value: 'view', icon: 'view' },
            { key: 104, value: 'warning', icon: 'warning' },
            { key: 105, value: 'webhook', icon: 'webhook' },
            { key: 106, value: 'zoom-to-fit', icon: 'zoom-to-fit' },
            { key: 107, value: 'dashboard', icon: 'dashboard' }
        ]

    return (
        <React.Fragment>
            <h1>Directual icons</h1>
            {/* <button onClick={()=>setDefVal('4')}>
                4
            </button>
            <button onClick={()=>setDefVal('5')}>
                5
            </button> */}
            {icon &&
            <div style={{marginTop:32}}>
                <div 
                className={`${styles.icon} icon icon-${icon}`}
                >
                </div>
            </div>}
            <Input 
                type="select" 
                placeholder="Choose icon"  
                width={300}
                defaultValue={defVal || 12}
                //defaultValue='9'
                onChange={value => {value && setIcon(options.filter(i=>i.key == value)[0].value)}}
                iconOptions
                options={options}
            />
        </React.Fragment>
    )
}