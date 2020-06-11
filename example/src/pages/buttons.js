import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function ButtonsPage() {
    return (
        <React.Fragment>
            <h1>Action panel, Buttons</h1>
            <CodeSnippet code=
                {`<ActionPanel 
    margin={{top:6, bottom:12}}>
        <Button>Regular button</Button>
        <Button accent>Accent button</Button>
        <Button icon="play">Icon button</Button>
</ActionPanel>`} />
            <ActionPanel margin={{ top: 6, bottom: 12 }}>
                <Button>Regular button</Button>
                <Button accent>Accent button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>

            <CodeSnippet code=
                {`<ActionPanel 
    title='Action panel with title and border' 
    border 
    margin={{ top: 6, bottom: 12 }}>
        <Button>Regular button</Button>
        <Button accent>Accent button</Button>
        <Button icon="play">Icon button</Button>
</ActionPanel>`} />
            <ActionPanel title='Action panel with title and border' border margin={{ top: 6, bottom: 12 }}>
                <Button>Regular button</Button>
                <Button accent>Accent button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>


            <CodeSnippet code=
                {`<ActionPanel 
    title='Action panel with title' 
    margin={{top:6, bottom:12}}>
        <Button icon="play" accent>Icon accent button</Button>
        <Button disabled>Disabled button</Button>
</ActionPanel>`} />
            <ActionPanel title='Action panel with title' margin={{ top: 6, bottom: 12 }}>
                <Button icon="play" accent>Icon accent button</Button>
                <Button disabled>Disabled button</Button>
            </ActionPanel>


            <ComponentDetails data={
                {
                    headerField: 'ActionPanel props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'title', type: 'string', desc: 'Panel title', eg: 'title = \'Hello world!\'' },
                        { prop: 'margin', type: 'object {top, left, bottom, right}', desc: 'Margins, in pixels', eg: 'margin: {{top:12, bottom:24}}' },
                        { prop: 'border', type: 'boolean', desc: 'Panel border', eg: 'border = {true}' },
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
                        { prop: 'onClick', type: 'function', desc: 'onClick callback', eg: 'onClick = {alert(\'hello!\')}' },
                        { prop: 'accent', type: 'boolean', desc: 'Accent color', eg: 'accent = {true}' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable button', eg: 'disabled = {false}' },
                        { prop: 'icon', type: 'directual icon', desc: 'Icon from Directual icons', eg: 'icon = \'warning\'' },
                    ]
                }
            } />
        </React.Fragment>
    )
}