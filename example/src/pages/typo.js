import React from 'react'
import {
    Hint, Loader, CodeSnippet, Button, RichText, Tags
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function TypoPage() {

    const exampleTags =
    {
        maxWidth: 300,
        sorting: true,
        data: [
            { id: 1, text: 'Hello world', deletable: false, clickable: true },
            { id: 2, text: 'Goodbye world Goodbye world Goodbye world Goodbye world', deletable: true },
            { id: 3, text: 'Huyak world', deletable: true, clickable: true },
        ]
    }

    return (
        <React.Fragment>
            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Tags</h2>

            <Tags 
                tags={exampleTags}
                style={{ marginBottom: 24, marginTop: 12 }}
                onSort={newSorting => {console.log('sort tags'); console.log(newSorting)}}
                onDelete={tagId => {console.log('delete tag: ' + tagId)}}
                onClick={tagId => {console.log('click tag: ' + tagId)}}
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