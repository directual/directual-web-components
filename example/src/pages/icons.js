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
                        { id: 7, title: 'babai', icon: 'babai' },
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
                        { id: 18, title: 'and more ...' },
                    ]}
            />
        </React.Fragment>
    )
}