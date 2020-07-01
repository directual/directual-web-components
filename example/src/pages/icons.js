import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import styles from './iconsPage.module.css'

export default function IconsPage() {
    const [icon, setIcon] = useState('babai')

    return (
        <React.Fragment>
            <h1>Directual icons</h1>
            {icon &&
                <div style={{ marginTop: 32 }}>
                    <div
                        className={`${styles.icon} icon icon-${icon}`}
                    >
                    </div>
                </div>}
            <Input
                type='icon'
                onChange={e=>e && setIcon(e)}
                required
                width={300}
            />

           
        </React.Fragment>
    )
}