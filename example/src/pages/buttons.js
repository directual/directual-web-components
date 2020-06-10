import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function ButtonsPage() {
    return (
        <React.Fragment>
            <h1>Action panel, Buttons</h1>
            <ActionPanel margin={36}>
                <Button>Regular button</Button>
                <Button accent>Accent button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>
            <ActionPanel title='Action panel with title and border' border margin={36}>
                <Button>Regular button</Button>
                <Button accent>Accent button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>
            <ActionPanel title='Action panel with title' margin={36}>
                <Button icon="play" accent>Icon accent button</Button>
                <Button disabled>Disabled button</Button>
            </ActionPanel>
            <ComponentDetails data={
                {
                    headerField: 'Action panel props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'title', type: 'string', desc: 'Panel title', eg:'title = \'Hello world!\'' },
                        { prop: 'margin', type: 'number', desc: 'Top and Bottom margins, in pixels', eg:'margin: {24}' },
                        { prop: 'border', type: 'boolean', desc: 'Panel border', eg:'border = {true}' },
                    ]
                }
            } />
            <ComponentDetails data={
                {
                    headerField: 'Button props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'accent', type: 'boolean', desc: 'Accent color', eg:'accent = {true}' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable button', eg:'disabled = {false}' },
                        { prop: 'icon', type: 'directual icon', desc: 'Icon from Directual icons', eg:'icon = \'warning\'' },
                    ]
                }
            } />
        </React.Fragment>
    )
}