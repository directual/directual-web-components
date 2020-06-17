import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, Select, Datepicker,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, CodeSnippet, Slider
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function InputsPage() {
    const [value, setValue] = useState()
    return (
        <React.Fragment>
            <h1>Data entry</h1>
            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Range sliders</h2>
            <Input
                type="slider"
                width={500}
                label="Range slider"
                defaultValue = {200}
                secondDefaultValue = {450}
                min = {0}
                max= {600}
                step = {10}
                unitName='₽'
            />

            <Input
                type="slider"
                width={500}
                label="Slider"
                defaultValue = {300}
                min = {200}
                max= {1000}
                step = {1}
                unitName='$'
            />

            <h2 style={{ marginBottom: 0, marginTop: 12 }}>Date and time</h2>
            <p style={{ marginBottom: 24, marginTop: 12 }}>
                Adapted <a href="https://github.com/YouCanBookMe/react-datetime" target="_blank">
                    React-datetime</a> component</p>
            <CodeSnippet code=
                {`<Input
    type="date"
    width={400}
    label='Date picker'
    placeholder='Select date'
    dateFormat='D, MMM, YYYY' // default 'D, MMM, YYYY'
    timeFormat='' // hide time
/>`} />
            <Input
                type="date"
                width={400}
                label='Date picker'
                placeholder='Select date'
                dateFormat='D, MMM, YYYY' // default 'D, MMM, YYYY'
                timeFormat='' // hide time
            />
            <CodeSnippet code=
                {`<Input
    type="date"
    width={400}
    label='Date and time picker'
    placeholder='Select date'
    dateFormat='D, MMM, YYYY' // default 'D, MMM, YYYY'
    timeFormat=' hh:mm A' //default ' h:mm a'
    defaultValue='2020-06-10T21:00:00.000Z'
/>`} />
            <Input
                type="date"
                width={400}
                label='Date and time picker'
                placeholder='Select date'
                dateFormat='D, MMM, YYYY' // default 'D, MMM, YYYY'
                timeFormat=' hh:mm A' //default ' h:mm a'
                defaultValue='2020-06-10T21:00:00.000Z'
            />

            <ComponentDetails data={
                {
                    headerField: 'Date and time picker props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'type', type: 'date', desc: 'select type', eg: 'type = \'date\'' },
                        { prop: 'onChange', type: 'function', desc: 'handles field\'s value', eg: 'onChange = {value => handleChange(value)}' },
                        { prop: 'label', type: 'string', desc: 'Field label', eg: 'label = \'Email\'' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable input', eg: 'disabled = {false}' },
                        { prop: 'width', type: 'number', desc: 'Input max-width', eg: 'width={150}' },
                        { prop: 'placeholder', type: 'string', desc: 'Placeholder', eg: 'placeholder = \'type here\'' },
                        { prop: 'defaultValue', type: 'string', desc: 'Default input value', eg: 'defaultValue = {{id: 1, title:\'one\'}}' },
                        { prop: 'dateFormat', type: 'Moment.js date format', desc: 'https://momentjs.com/docs/#/displaying/format/', eg: 'dateFormat=\'D, MMM, YYYY\'' },
                        { prop: 'timeFormat', type: 'Moment.js time format', desc: 'Important! Set timeFormat=\'\' if you want to hide time', eg: 'timeFormat=\'hh:mm A\'' },
                    ]
                }
            } />

            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Selects</h2>
            <CodeSnippet code=
                {`<Input
    label='Simple select'
    width={400}
    type='select'
    placeholder='Placeholder'
    icon='database'
    options={
        [
            { id: 1, title: 'Good fortune? The fact is' },
            { id: 2, title: 'The more that you practise' },
            { id: 3, title: 'The harder you sweat' },
            { id: 4, title: 'The luckier you get' },
            { id: 5, title: 'Ideas? We’ve had ’em' },
            { id: 6, title: 'Since Eve mated Adam' },
            { id: 7, title: 'But take it from me' },
            { id: 8, title: 'Execution’s the key' },
            { id: 9, title: 'The money? Just pester' },
            { id: 10, title: 'A likely investor' },
            { id: 11, title: 'To get what you need' },
            { id: 12, title: 'You toady to greed' },
            { id: 13, title: 'The talent? Go sign it' },
            { id: 14, title: 'But first, wine and dine it' },
            { id: 15, title: 'It’s tedious work' },
            { id: 16, title: 'With a talented jerk' },
            { id: 17, title: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
        ]
    }
/>`} />
            <Input
                label='Simple select'
                width={400}
                type='select'
                placeholder='Choose the line'
                icon='database'
                defaultValue={{ id: 3, title: 'The harder you sweat' }}
                options={
                    [
                        { id: 1, title: 'Good fortune? The fact is' },
                        { id: 2, title: 'The more that you practise' },
                        { id: 3, title: 'The harder you sweat' },
                        { id: 4, title: 'The luckier you get' },
                        { id: 5, title: 'Ideas? We’ve had ’em' },
                        { id: 6, title: 'Since Eve mated Adam' },
                        { id: 7, title: 'But take it from me' },
                        { id: 8, title: 'Execution’s the key' },
                        { id: 9, title: 'The money? Just pester' },
                        { id: 10, title: 'A likely investor' },
                        { id: 11, title: 'To get what you need' },
                        { id: 12, title: 'You toady to greed' },
                        { id: 13, title: 'The talent? Go sign it' },
                        { id: 14, title: 'But first, wine and dine it' },
                        { id: 15, title: 'It’s tedious work' },
                        { id: 16, title: 'With a talented jerk' },
                        { id: 17, title: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
                    ]
                }
            />
            <CodeSnippet code=
                {`<Input
    label='Multiple select'
    width={700}
    type='multiselect'
    placeholder='Choose the values'
    defaultValue={
        [
            { id: 3, title: 'The harder you sweat' },
            { id: 13, title: 'The talent? Go sign it' }
        ]
    }
    icon='database'
    options={
        [
            { id: 1, title: 'Good fortune? The fact is' },
            { id: 2, title: 'The more that you practise' },
            { id: 3, title: 'The harder you sweat' },
            { id: 4, title: 'The luckier you get' },
            { id: 5, title: 'Ideas? We’ve had ’em' },
            { id: 6, title: 'Since Eve mated Adam' },
            { id: 7, title: 'But take it from me' },
            { id: 8, title: 'Execution’s the key' },
            { id: 9, title: 'The money? Just pester' },
            { id: 10, title: 'A likely investor' },
            { id: 11, title: 'To get what you need' },
            { id: 12, title: 'You toady to greed' },
            { id: 13, title: 'The talent? Go sign it' },
            { id: 14, title: 'But first, wine and dine it' },
            { id: 15, title: 'It’s tedious work' },
            { id: 16, title: 'With a talented jerk' },
            { id: 17, title: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
        ]
    }
/>`} />

            <Input
                label='Multiple select'
                width={700}
                type='multiselect'
                placeholder='Choose the values'
                //required
                defaultValue={
                    [
                        { id: 1, title: 'Good fortune? The fact is' },
                        { id: 3, title: 'The harder you sweat' }
                    ]
                }
                //icon='database'
                options={
                    [
                        { id: 1, title: 'Good fortune? The fact is' },
                        { id: 2, title: 'The more that you practise' },
                        { id: 3, title: 'The harder you sweat' },
                        { id: 4, title: 'The luckier you get' },
                        { id: 5, title: 'Ideas? We’ve had ’em' },
                        { id: 6, title: 'Since Eve mated Adam' },
                        { id: 7, title: 'But take it from me' },
                        { id: 8, title: 'Execution’s the key' },
                        { id: 9, title: 'The money? Just pester' },
                        { id: 10, title: 'A likely investor' },
                        { id: 11, title: 'To get what you need' },
                        { id: 12, title: 'You toady to greed' },
                        { id: 13, title: 'The talent? Go sign it' },
                        { id: 14, title: 'But first, wine and dine it' },
                        { id: 15, title: 'It’s tedious work' },
                        { id: 16, title: 'With a talented jerk' },
                        { id: 17, title: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
                    ]
                }
            />

            <ComponentDetails data={
                {
                    headerField: 'Select props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'type', type: 'select, multiselect', desc: 'select type', eg: 'type = \'select\'' },
                        { prop: 'onChange', type: 'function', desc: 'handles field\'s value', eg: 'onChange = {value => handleChange(value)}' },
                        { prop: 'label', type: 'string', desc: 'Field label', eg: 'label = \'Email\'' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable input', eg: 'disabled = {false}' },
                        { prop: 'icon', type: 'directual icon', desc: 'Icon from Directual icons', eg: 'icon = \'warning\'' },
                        { prop: 'width', type: 'number', desc: 'Input max-width', eg: 'width={150}' },
                        { prop: 'placeholder', type: 'string', desc: 'Placeholder', eg: 'placeholder = \'type here\'' },
                        { prop: 'options', type: 'array of Objects {id, title}', desc: 'Options', eg: 'options = {[{id: 1, title:\'one\'}, {id: 2, title:\'two\'}]}' },
                        { prop: 'defaultValue', type: 'string', desc: 'Default input value', eg: 'defaultValue = {{id: 1, title:\'one\'}}' },
                        { prop: 'iconOptions', type: 'boolean', desc: 'use icons for each option {{id: 1, title:\'one\', icon:\'play\'}}', eg: 'iconOptions = {true}' },
                    ]
                }
            } />

            <Input
                label='Check the select dropdown position/size'
                width={400}
                type='select'
                placeholder='Choose the line'
                //icon='database'
                defaultValue={{ id: 3, title: 'The harder you sweat' }}
                options={
                    [
                        { id: 1, title: 'Good fortune? The fact is' },
                        { id: 2, title: 'The more that you practise' },
                        { id: 3, title: 'The harder you sweat' },
                        { id: 4, title: 'The luckier you get' },
                        { id: 5, title: 'Ideas? We’ve had ’em' },
                        { id: 6, title: 'Since Eve mated Adam' },
                        { id: 7, title: 'But take it from me' },
                        { id: 8, title: 'Execution’s the key' },
                        { id: 9, title: 'The money? Just pester' },
                        { id: 10, title: 'A likely investor' },
                        { id: 11, title: 'To get what you need' },
                        { id: 12, title: 'You toady to greed' },
                        { id: 13, title: 'The talent? Go sign it' },
                        { id: 14, title: 'But first, wine and dine it' },
                        { id: 15, title: 'It’s tedious work' },
                        { id: 16, title: 'With a talented jerk' },
                        { id: 17, title: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
                    ]
                }
            />

            <h2 style={{ marginBottom: 24, marginTop: 36 }}>Inputs</h2>
            <CodeSnippet code=
                {`<Input
    label='Input (required)'
    placeholder='Placeholder'
    type='string'
    required
    width={400}
    />`} />
            <Input
                label='Input (required)'
                placeholder='Placeholder'
                type='string'
                required
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Input (not required + default value)'
    placeholder='Placeholder'
    defaultValue='default value'
    type='string'
    width={400}
    />`} />
            <Input
                label='Input (not required + default value)'
                placeholder='Placeholder'
                defaultValue='default value'
                type='string'
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Input disabled'
    placeholder='Placeholder'
    defaultValue='default value'
    type='string'
    disabled
    width={400}
    />`} />
            <Input
                label='Input disabled'
                placeholder='Placeholder'
                defaultValue='default value'
                type='string'
                disabled
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Email (with validation)'
    placeholder='Enter your email address'
    type='email'
    required
    width={400}
    />`} />
            <Input
                label='Email (with validation)'
                placeholder='Enter your email address'
                type='email'
                required
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Textarea (required)'
    placeholder='Placeholder for textarea'
    type='textarea'
    rows={4}
    required
    width={400}
    />`} />
            <Input
                label='Textarea (required)'
                placeholder='Placeholder for textarea'
                type='textarea'
                rows={4}
                required
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Numbers'
    placeholder='How old are you'
    type='number'
    width={400}
    />`} />
            <Input
                label='Numbers'
                placeholder='How old are you'
                type='number'
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Numbers, positive only'
    placeholder='How old are you'
    type='number'
    defaultValue={0}
    positive
    width={400}
    />`} />
            <Input
                label='Numbers, positive only'
                placeholder='How old are you'
                type='number'
                defaultValue={0}
                positive
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Password (required)'
    placeholder='Type your password'
    type='password'
    required
    width={400}
    />`} />
            <Input
                label='Password (required)'
                placeholder='Type your password'
                type='password'
                required
                width={400}
            />
            <ComponentDetails data={
                {
                    headerField: 'Input props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'onChange', type: 'function', desc: 'handles field\'s value', eg: 'onChange = {value => handleChange(value)}' },
                        { prop: 'label', type: 'string', desc: 'Field label', eg: 'label = \'Email\'' },
                        { prop: 'type', type: 'string, number, password, textarea, email', desc: 'Data type', eg: 'type = \'text\'' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable input', eg: 'disabled = {false}' },
                        { prop: 'icon', type: 'directual icon', desc: 'Icon from Directual icons', eg: 'icon = \'warning\'' },
                        { prop: 'defaultValue', type: 'string', desc: 'Default input value', eg: 'defaultValue = \'hello world\'' },
                        { prop: 'width', type: 'number', desc: 'Input max-width', eg: 'width={150}' },
                        { prop: 'placeholder', type: 'string', desc: 'Placeholder', eg: 'placeholder = \'type here\'' },
                        { prop: 'required', type: 'boolean', desc: 'Required field, throws a warning if empty', eg: 'required = {true}' },
                        { prop: 'rows', type: 'number', desc: 'For type = \'textarea\' only! Number of rows', eg: 'rows = {8}' },
                        { prop: 'positive', type: 'boolean', desc: 'For type = \'number\' only!', eg: 'positive = {true}' },
                    ]
                }
            } />
            <h2 style={{ marginBottom: 24, marginTop: 36 }}>Radio</h2>

            <CodeSnippet code=
                {`<Input
    label='Radio station (with default value)'
    type='radio'
    defaultValue='option2'
    options={
        [
            {
                value: 'option1',
                label: 'Option 1'
            },
            {
                value: 'option2',
                label: 'Option 2'
            },
            {
                value: 'option3',
                label: 'Option 3'
            }
        ]
    }
/>`} />
            <Input
                label='Radio station (with default value)'
                type='radio'
                defaultValue='option2'
                options={
                    [
                        {
                            value: 'option1',
                            label: 'Option 1'
                        },
                        {
                            value: 'option2',
                            label: 'Option 2'
                        },
                        {
                            value: 'option3',
                            label: 'Option 3'
                        }
                    ]
                }
            />

        </React.Fragment>
    )
}