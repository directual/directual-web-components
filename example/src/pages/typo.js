import React from 'react'
import {
    Hint, Loader, CodeSnippet, Button, Tags
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function TypoPage() {

    const exampleTags =
    {
        maxWidth: 300,
        addButton: false,
        addText: 'Add scenario',
        selectedColor: '#f700ff',
        selectedTextColor: '#fff',
        textColor: '#333',
        color: '#8ae3da',
        selectable: true,
        data: [
            { id: 1, text: 'Hello world', clickable: true },
            { id: 2, text: 'Goodbye world Goodbye world Goodbye world Goodbye world', clickable: true },
            { id: 3, text: 'Huyak world', clickable: true, }
        ]
    }
    const exampleTags2 =
    {
        maxWidth: 300,
        addButton: true,
        addText: 'Add tag',
        data: []
    }

    return (
        <React.Fragment>
            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Tags</h2>

            <Tags 
                //disabled
                tags={exampleTags}
                selectedTags={{
                    '1': true,
                    '2': false,
                    '3': true
                }}
                style={{ marginBottom: 24, marginTop: 12 }}
                onSort={newSorting => {console.log('sort tags'); console.log(newSorting)}}
                onDelete={tagId => {console.log('delete tag: ' + tagId)}}
                onClick={tagId => {console.log('click tag: ' + tagId)}}
                onResetSelect={tagId => {console.log('reset select tag: ' + tagId)}}
                onAdd={() => {console.log('Add tag!')}}
            />
            <Tags 
                tags={exampleTags2}
                style={{ marginBottom: 24, marginTop: 12 }}
                onSort={newSorting => {console.log('sort tags'); console.log(newSorting)}}
                onDelete={tagId => {console.log('delete tag: ' + tagId)}}
                onClick={tagId => {console.log('click tag: ' + tagId)}}
                onAdd={() => {console.log('Add tag!')}}
            />

            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Loader</h2>
            <CodeSnippet code=
                {`<Loader>Loading...</Loader>`} />
            <Loader>Loading...</Loader>
            <h2 style={{ marginBottom: 24, marginTop: 24 }}>Hints</h2>
            <CodeSnippet code=
                {`<Hint title="Alert">
    Lorem ipsum dolor sit amet, consectetur <code>{'{'}piece of code{'}'}</code> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Hint>
<Hint title="Success" ok>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Hint>
<Hint title="Fail" error>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <Button icon='refresh'>Try again</Button>
</Hint>`} />
            <Hint title="Alert">
                Lorem ipsum dolor sit amet, consectetur <code>{'{'}piece of code{'}'}</code> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Hint>
            <Hint title="Success" ok>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Hint>
            <Hint title="Fail" error>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Button icon='refresh'>Try again</Button>
            </Hint>


        </React.Fragment>
    )
}