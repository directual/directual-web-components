import React from 'react'
import {
    Button, ButtonDropDown, ComponentDetails, ActionPanel, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function ButtonsPage() {
    return (
        <React.Fragment>
            <h1>Action panel, Buttons</h1>
            <ButtonDropDown accent icon='down' title='Hey hey hey'>
                <Button accent icon='done' alighLeft>Create foder</Button>
                <Button danger icon='babai' alighLeft onClick={()=>alert('yay')}>Create this freacking folder</Button>
                <hr />
                <Button alighLeft>Plain button</Button>
                <Button icon='bell' alighLeft>Ring the bell</Button>
            </ButtonDropDown>
            <CodeSnippet code=
                {`<ActionPanel 
    margin={{top:6, bottom:12}}>
        <Button>Regular button</Button>
        <Button accent>Accent button</Button>
        <Button icon="play">Icon button</Button>
</ActionPanel>`} />
                <Button verySmall accent icon='babai' height={26}>Regular button</Button>
                <Button small accent icon='babai' height={null}>Regular button</Button>
            <ActionPanel margin={{ top: 6, bottom: 12 }}>
                <Button>Regular button</Button>
                <Button accent>Accent button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>

            <CodeSnippet code=
                {`<ActionPanel margin={{ top: 6, bottom: 12 }}>
    <Button loading>Regular button</Button>
    <Button accent loading>Accent button</Button>
    <Button accent icon="play">Icon button</Button>
</ActionPanel>`} />
            <ActionPanel margin={{ top: 6, bottom: 12 }}>
                <Button loading>Regular button</Button>
                <Button accent loading>Accent button</Button>
                <Button accent icon="play" loading>Icon button</Button>
            </ActionPanel>

            <CodeSnippet code=
                {`<ActionPanel 
    title='Action panel with title and border, column' 
    column 
    width={300} 
    border 
    margin={{ top: 6, bottom: 12 }}>
        <Button accent icon='babai'>Regular button</Button>
        <Button socialGoogle>Google button</Button>
        <Button icon="play">Icon button</Button>
</ActionPanel>`} />
            <ActionPanel 
                title='Action panel with title and border, column' 
                column 
                width={300} 
                border 
                margin={{ top: 6, bottom: 24 }}>
                <Button accent icon='bellActive'>Accent icon button</Button>
                <Button socialGoogle>Google button</Button>
                <Button socialFacebook>Google button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>

            <CodeSnippet code=
                {`<ActionPanel 
    title='Align center side panel' 
    width={600} 
    alignCenter
    border 
    margin={{ top: 6, bottom: 24 }}>
    <Button accent>Accent button</Button>
    <Button socialGoogle>Google button</Button>
    <Button icon="play">Icon button</Button>
</ActionPanel>`} />
            <ActionPanel 
                title='Align center side panel' 
                width={600} 
                alignCenter
                border 
                margin={{ top: 6, bottom: 24 }}>
                <Button accent>Accent button</Button>
                <Button socialGoogle newWindow height={44} link='http://google.com'>Google button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>

            <CodeSnippet code=
                {`<ActionPanel 
    title='Align right side panel' 
    width={600} 
    alignRight
    border 
    margin={{ top: 6, bottom: 24 }}>
    <Button accent>Accent button</Button>
    <Button socialGoogle>Google button</Button>
    <Button icon="play">Icon button</Button>
</ActionPanel>`} />
            <ActionPanel 
                title='Align right side panel' 
                width={600} 
                alignRight
                border 
                margin={{ top: 6, bottom: 24 }}>
                <Button accent>Accent button</Button>
                <Button socialGoogle newWindow height={44} link='http://google.com'>Google button</Button>
                <Button icon="play">Icon button</Button>
            </ActionPanel>


            <CodeSnippet code=
                {`<ActionPanel title='Action panel with title' margin={{ top: 6, bottom: 24 }}>
    <Button link='http://ya.ru' newWindow danger icon='done'>Danger button</Button>
    <Button disabled>Disabled button</Button>
</ActionPanel>`} />
            <ActionPanel title='Action panel with title' margin={{ top: 6, bottom: 24 }}>
                <Button link='http://ya.ru' newWindow danger icon='done'>Danger button</Button>
                <Button disabled>Disabled button</Button>
            </ActionPanel>

            <CodeSnippet code=
                {`<ActionPanel title='Icon only buttons' margin={{ top: 6, bottom: 24 }}>
    <Button danger icon='delete' />
    <Button icon='babai' transparent />
    <Button link='http://ya.ru' newWindow icon='bellActive' transparent inverseColor />
</ActionPanel>`} />

            <ActionPanel title='Icon only buttons' margin={{ top: 6, bottom: 24 }}>
                <Button danger icon='delete' />
                <Button icon='babai' transparent />
                <Button link='http://ya.ru' newWindow icon='bellActive' transparent inverseColor />
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
                        { prop: 'width', type: 'number', desc: 'Max-width in pixels', eg: 'width = {300}' },
                        { prop: 'column', type: 'boolean', desc: 'Buttons in column (in raw by default)', eg: 'column = {true}' },
                        { prop: 'alignRight', type: 'boolean', desc: 'Buttons aligned to the right side', eg: 'alignRight = {true}' },
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
                        { prop: 'danger', type: 'boolean', desc: 'Danger action (e.g. delete)', eg: 'danger = {true}' },
                        { prop: 'socialGoogle', type: 'boolean', desc: 'Google icon', eg: 'socialGoogle = {true}' },
                    ]
                }
            } />
        </React.Fragment>
    )
}