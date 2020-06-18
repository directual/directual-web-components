import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import styles from './iconsPage.module.css'

export default function IconsPage() {
    const [icon,setIcon] = useState('babai')
    return (
        <React.Fragment>
            <h1>Directual icons</h1>
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
                defaultValue={{ id: 7, title: 'babai' }}
                onChange={value => {value && setIcon(value.title)}}
                iconOptions
                options={
                    [
                        { id: 0, title: 'babai', icon: 'babai' },
                        { id: 1, title: 'actions', icon: 'actions' },
                        { id: 2, title: 'application', icon: 'application' },
                        { id: 3, title: 'arrowDown', icon: 'arrowDown' },
                        { id: 4, title: 'arrowLeft', icon: 'arrowLeft' },
                        { id: 5, title: 'arrowRight', icon: 'arrowRight' },
                        { id: 6, title: 'arrowUp', icon: 'arrowUp' },
                        { id: 8, title: 'back', icon: 'back' },
                        { id: 9, title: 'ban', icon: 'ban' },
                        { id: 10, title: 'bellActive', icon: 'bellActive' },
                        { id: 11, title: 'bell', icon: 'bell' },
                        { id: 12, title: 'bookmarkFill', icon: 'bookmarkFill' },
                        { id: 13, title: 'bookmark', icon: 'bookmark' },
                        { id: 14, title: 'boolean', icon: 'boolean' },
                        { id: 15, title: 'bracketsArray', icon: 'bracketsArray' },
                        { id: 16, title: 'brackets', icon: 'brackets' },
                        { id: 17, title: 'bubble', icon: 'bubble' },
                        { id: 18, title: 'bug', icon: 'bug' },
                        { id: 19, title: 'calendar', icon: 'calendar' },
                        { id: 20, title: 'chart', icon: 'chart' },
                        { id: 21, title: 'clip', icon: 'clip' },
                        { id: 22, title: 'clocks', icon: 'clocks' },
                        { id: 23, title: 'close', icon: 'close' },
                        { id: 24, title: 'codeArray', icon: 'codeArray' },
                        { id: 25, title: 'codeXML', icon: 'codeXML' },
                        { id: 26, title: 'collapse', icon: 'collapse' },
                        { id: 27, title: 'comment', icon: 'comment' },
                        { id: 28, title: 'configure', icon: 'configure' },
                        { id: 29, title: 'copy', icon: 'copy' },
                        { id: 30, title: 'creditcard', icon: 'creditcard' },
                        { id: 31, title: 'database', icon: 'database' },
                        { id: 32, title: 'delete', icon: 'delete' },
                        { id: 33, title: 'detailsAlt', icon: 'detailsAlt' },
                        { id: 34, title: 'details', icon: 'details' },
                        { id: 35, title: 'done', icon: 'done' },
                        { id: 36, title: 'down', icon: 'down' },
                        { id: 37, title: 'download', icon: 'download' },
                        { id: 38, title: 'edit', icon: 'edit' },
                        { id: 39, title: 'expand', icon: 'expand' },
                        { id: 40, title: 'export', icon: 'export' },
                        { id: 41, title: 'filterFill', icon: 'filterFill' },
                        { id: 42, title: 'filter', icon: 'filter' },
                        { id: 43, title: 'folder', icon: 'folder' },
                        { id: 44, title: 'forward', icon: 'forward' },
                        { id: 45, title: 'gates', icon: 'gates' },
                        { id: 46, title: 'cards', icon: 'cards' },
                        { id: 47, title: 'help', icon: 'help' },
                        { id: 48, title: 'hide', icon: 'hide' },
                        { id: 49, title: 'history', icon: 'history' },
                        { id: 50, title: 'hook', icon: 'hook' },
                        { id: 51, title: 'id', icon: 'id' },
                        { id: 52, title: 'import', icon: 'import' },
                        { id: 53, title: 'info', icon: 'info' },
                        { id: 54, title: 'keynote', icon: 'keynote' },
                        { id: 55, title: 'license', icon: 'license' },
                        { id: 56, title: 'list', icon: 'list' },
                        { id: 57, title: 'lock', icon: 'lock' },
                        { id: 58, title: 'logoutAlt', icon: 'logoutAlt' },
                        { id: 59, title: 'logout', icon: 'logout' },
                        { id: 60, title: 'love', icon: 'love' },
                        { id: 61, title: 'mail', icon: 'mail' },
                        { id: 62, title: 'menu', icon: 'menu' },
                        { id: 63, title: 'minus', icon: 'minus' },
                        { id: 65, title: 'mobile', icon: 'mobile' },
                        { id: 66, title: 'move', icon: 'move' },
                        { id: 67, title: 'nocode', icon: 'nocode' },
                        { id: 68, title: 'num', icon: 'num' },
                        { id: 69, title: 'number', icon: 'number' },
                        { id: 70, title: 'ovalFill', icon: 'ovalFill' },
                        { id: 71, title: 'oval', icon: 'oval' },
                        { id: 72, title: 'paragraph', icon: 'paragraph' },
                        { id: 73, title: 'permission', icon: 'permission' },
                        { id: 74, title: 'pinned', icon: 'pinned' },
                        { id: 75, title: 'playFill', icon: 'playFill' },
                        { id: 76, title: 'play', icon: 'play' },
                        { id: 77, title: 'plug', icon: 'plug' },
                        { id: 78, title: 'plus', icon: 'plus' },
                        { id: 79, title: 'refresh', icon: 'refresh' },
                        { id: 80, title: 'restore', icon: 'restore' },
                        { id: 81, title: 'rhombusFill', icon: 'rhombusFill' },
                        { id: 82, title: 'rhombus', icon: 'rhombus' },
                        { id: 83, title: 'rocket', icon: 'rocket' },
                        { id: 84, title: 'search', icon: 'search' },
                        { id: 85, title: 'settings', icon: 'settings' },
                        { id: 86, title: 'shield', icon: 'shield' },
                        { id: 87, title: 'sms', icon: 'sms' },
                        { id: 88, title: 'sort', icon: 'sort' },
                        { id: 89, title: 'stopFill', icon: 'stopFill' },
                        { id: 90, title: 'stop', icon: 'stop' },
                        { id: 91, title: 'string', icon: 'string' },
                        { id: 92, title: 'styles', icon: 'styles' },
                        { id: 93, title: 'tag', icon: 'tag' },
                        { id: 94, title: 'telegram', icon: 'telegram' },
                        { id: 95, title: 'tune', icon: 'tune' },
                        { id: 96, title: 'unlock', icon: 'unlock' },
                        { id: 97, title: 'unpinned', icon: 'unpinned' },
                        { id: 98, title: 'unplug', icon: 'unplug' },
                        { id: 99, title: 'up', icon: 'up' },
                        { id: 100, title: 'upload', icon: 'upload' },
                        { id: 101, title: 'user', icon: 'user' },
                        { id: 102, title: 'version', icon: 'version' },
                        { id: 103, title: 'view', icon: 'view' },
                        { id: 104, title: 'warning', icon: 'warning' },
                        { id: 105, title: 'webhook', icon: 'webhook' },
                        { id: 106, title: 'zoom-to-fit', icon: 'zoom-to-fit' },
                        { id: 107, title: 'dashboard', icon: 'dashboard' },
                    ]}
            />
        </React.Fragment>
    )
}