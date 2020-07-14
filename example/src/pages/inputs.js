import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, Select, Datepicker, InputGroup,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, CodeSnippet, Slider, FileUpload
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function InputsPage() {
    const [value, setValue] = useState()
    return (
        <React.Fragment>
            <h1>Data entry</h1>
            {/* <FileUpload /> */}
            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Range sliders</h2>
            <CodeSnippet code=
                {`<Input
    type="range"
    width={500}
    label="Range slider"
    defaultValue={{firstValue: 200, secondValue:400}}
    min={0}
    max={600}
    step={10}
    unitName='€'
/>`} />
            <Input
                type="range"
                width={500}
                label="Range slider"
                defaultValue={{ firstValue: 200, secondValue: 400 }}
                min={0}
                max={600}
                step={10}
                unitName='€'
            />

            <CodeSnippet code=
                {`<Input
    type="slider"
    width={500}
    label="Slider"
    defaultValue={{firstValue: 300}}
    min={200}
    max={1000}
    step={1}
    unitName='$'
/>`} />
            <Input
                type="slider"
                width={500}
                label="Slider"
                defaultValue={{ firstValue: 300 }}
                min={200}
                max={1000}
                step={1}
                unitName='$'
            />

            <ComponentDetails data={
                {
                    headerField: 'Slider props',
                    headers: [
                        { sysName: 'prop', name: 'Property' },
                        { sysName: 'type', name: 'Type' },
                        { sysName: 'desc', name: 'Description' },
                        { sysName: 'eg', name: 'Example' }
                    ],
                    data: [
                        { prop: 'onChange', type: 'function', desc: 'handles field\'s value', eg: 'onChange = {value => handleChange(value)}' },
                        { prop: 'label', type: 'string', desc: 'Field label', eg: 'label = \'Email\'' },
                        { prop: 'type', type: 'slider', desc: 'Data type', eg: 'type = \'slider\'' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable input', eg: 'disabled = {false}' },
                        { prop: 'defaultValue', type: 'number', desc: 'Default value', eg: 'defaultValue = {250}' },
                        { prop: 'secondDefaultValue', type: 'number', desc: 'Default second range value', eg: 'secondDefaultValue = {800}' },
                        { prop: 'width', type: 'number', desc: 'Slider max-width', eg: 'width={400}' },
                        { prop: 'min', type: 'number', desc: 'Min value', eg: 'min={100}' },
                        { prop: 'max', type: 'number', desc: 'Max value', eg: 'max={1000}' },
                        { prop: 'step', type: 'number', desc: 'step', eg: 'step={10}' },
                        { prop: 'unitName', type: 'string', desc: 'units', eg: 'unitName=\'$\'' },
                    ]
                }
            } />

            <h2 style={{ marginBottom: 0, marginTop: 12 }}>Date and time</h2>
            {/* <p style={{ marginBottom: 24, marginTop: 12 }}>
                Adapted <a href="https://github.com/YouCanBookMe/react-datetime" target="_blank">
                    React-datetime</a> component</p> */}
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
                required
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
                        { prop: 'defaultValue', type: 'string', desc: 'Default input value', eg: 'defaultValue = {{key: 1, title:\'one\'}}' },
                        { prop: 'dateFormat', type: 'Moment.js date format', desc: 'https://momentjs.com/docs/#/displaying/format/', eg: 'dateFormat=\'D, MMM, YYYY\'' },
                        { prop: 'timeFormat', type: 'Moment.js time format', desc: 'Important! Set timeFormat=\'\' if you want to hide time', eg: 'timeFormat=\'hh:mm A\'' },
                    ]
                }
            } />

            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Selects</h2>
            <CodeSnippet code=
                {`<Input
    label='Select with icon'
    width={400}
    type='select'
    placeholder='Placeholder'
    icon='database'
    options={
        [
            { key: 1, value: 'Good fortune? The fact is' },
            { key: 2, value: 'The more that you practise' },
            { key: 3, value: 'The harder you sweat' },
            { key: 4, value: 'The luckier you get' }
        ]
    }
/>`} />
            <Input
                label='Select with icon, required'
                width={400}
                required
                iconOptions
                type='select'
                placeholder='Choose the line'
                icon='database'
                options={
                    [
                        { key: 1, value: 'Good fortune? The fact is' },
                        { key: 2, value: 'The more that you practise', icon: 'code' },
                        { key: 3, value: 'The harder you sweat' },
                        { key: 4, value: 'The luckier you get' }
                    ]
                }
            />

            <Input
                label='Select with no options'
                width={400}
                type='select'
                placeholder='Choose the line'
                defaultValue=''
                options=''
            />
            <CodeSnippet code=
                {`<Input
    label='Multiple select'
    width={700}
    type='multiselect'
    placeholder='Choose the values'
    defaultValue={[2,5]}
    required
    icon='database'
    options={
        [
            { key: 1, value: 'Good fortune? The fact is' },
            { key: 2, value: 'The more that you practise' },
            { key: 3, value: 'The harder you sweat' },
            { key: 4, value: 'The luckier you get' },
            { key: 5, value: 'Ideas? We’ve had ’em' },
            { key: 6, value: 'Since Eve mated Adam' },
            { key: 7, value: 'But take it from me' },
            { key: 8, value: 'Execution’s the key' },
            { key: 9, value: 'The money? Just pester' },
            { key: 10, value: 'A likely investor' },
            { key: 11, value: 'To get what you need' },
            { key: 12, value: 'You toady to greed' },
            { key: 13, value: 'The talent? Go sign it' },
            { key: 14, value: 'But first, wine and dine it' },
            { key: 15, value: 'It’s tedious work' },
            { key: 16, value: 'With a talented jerk' },
            { key: 17, value: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
        ]
    }
/>`} />

            <Input
                label='Multiple select'
                width={700}
                type='multiselect'
                placeholder='Choose the values'
                defaultValue={[2,5]}
                required
                icon='database'
                options={
                    [
                        { key: 1, value: 'Good fortune? The fact is' },
                        { key: 2, value: 'The more that you practise' },
                        { key: 3, value: 'The harder you sweat' },
                        { key: 4, value: 'The luckier you get' },
                        { key: 5, value: 'Ideas? We’ve had ’em' },
                        { key: 6, value: 'Since Eve mated Adam' },
                        { key: 7, value: 'But take it from me' },
                        { key: 8, value: 'Execution’s the key' },
                        { key: 9, value: 'The money? Just pester' },
                        { key: 10, value: 'A likely investor' },
                        { key: 11, value: 'To get what you need' },
                        { key: 12, value: 'You toady to greed' },
                        { key: 13, value: 'The talent? Go sign it' },
                        { key: 14, value: 'But first, wine and dine it' },
                        { key: 15, value: 'It’s tedious work' },
                        { key: 16, value: 'With a talented jerk' },
                        { key: 17, value: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
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
                        { prop: 'options', type: 'array of Objects {id, title}', desc: 'Options', eg: 'options = {[{key: 1, title:\'one\'}, {key: 2, title:\'two\'}]}' },
                        { prop: 'defaultValue', type: 'string', desc: 'Default input value', eg: 'defaultValue = {{key: 1, title:\'one\'}}' },
                        { prop: 'iconOptions', type: 'boolean', desc: 'use icons for each option {{key: 1, title:\'one\', icon:\'play\'}}', eg: 'iconOptions = {true}' },
                    ]
                }
            } />

            <Input
                label='Check the select dropdown position/size'
                width={400}
                type='select'
                placeholder='Choose the line'
                //icon='database'
                defaultValue={3}
                options={
                    [
                        { key: 1, value: 'Good fortune? The fact is' },
                        { key: 2, value: 'The more that you practise' },
                        { key: 3, value: 'The harder you sweat' },
                        { key: 4, value: 'The luckier you get' },
                        { key: 5, value: 'Ideas? We’ve had ’em' },
                        { key: 6, value: 'Since Eve mated Adam' },
                        { key: 7, value: 'But take it from me' },
                        { key: 8, value: 'Execution’s the key' },
                        { key: 9, value: 'The money? Just pester' },
                        { key: 10, value: 'A likely investor' },
                        { key: 11, value: 'To get what you need' },
                        { key: 12, value: 'You toady to greed' },
                        { key: 13, value: 'The talent? Go sign it' },
                        { key: 14, value: 'But first, wine and dine it' },
                        { key: 15, value: 'It’s tedious work' },
                        { key: 16, value: 'With a talented jerk' },
                        { key: 17, value: 'Good timing? To win it You gotta be in it. Just never be late To quit or cut bait.' }
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
                label='Input (required, with icon)'
                placeholder='Placeholder'
                icon='license'
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
                {`<InputGroup width={400}>
    <Input
        label='First name'
        type='string'
        icon='user'
    />
    <Input
        label='Last name'
        type='select'
    />
</InputGroup>`} />

            <InputGroup width={400}>
                <Input
                    label='First name'
                    type='string'
                    icon='user'
                />
                <Input
                    label='Last name'
                    type='select'
                />
            </InputGroup>

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
    label='Decimal number'
    placeholder='Enter value'
    type='decimal'
    width={400}
/>`} />

            <Input
                label='Decimal number'
                placeholder='Enter value'
                type='decimal'
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
                        { prop: 'type', type: 'string, number, decimal, password, textarea, email', desc: 'Data type', eg: 'type = \'text\'' },
                        { prop: 'disabled', type: 'boolean', desc: 'Disable input', eg: 'disabled = {false}' },
                        { prop: 'icon', type: 'directual icon', desc: 'Icon from Directual icons', eg: 'icon = \'warning\'' },
                        { prop: 'defaultValue', type: 'string', desc: 'Default input value', eg: 'defaultValue = \'hello world\'' },
                        { prop: 'width', type: 'number', desc: 'Input max-width', eg: 'width={150}' },
                        { prop: 'placeholder', type: 'string', desc: 'Placeholder', eg: 'placeholder = \'type here\'' },
                        { prop: 'required', type: 'boolean', desc: 'Required field, throws a warning if empty', eg: 'required = {true}' },
                        { prop: 'rows', type: 'number', desc: 'For type = \'textarea\' only! Number of rows', eg: 'rows = {8}' },
                        { prop: 'positive', type: 'boolean', desc: 'For type = \'number\' only!', eg: 'positive = {true}' },
                        { prop: 'unitName', type: 'string', desc: 'for example, px, or $', eg: 'unitName = \'$\'' },
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

            <CodeSnippet code=
                {`<Input
    label='Radio station (disabled)'
    type='radio'
    disabled
    options={
        [
            {
                value: 'option1',
                label: 'Option 1'
            },
            {
                value: 'option2',
                label: 'Option 2'
            }
        ]
    }
/>`} />

            <Input
                label='Radio station (disabled)'
                type='radio'
                disabled
                //defaultValue='option2'
                options={
                    [
                        {
                            value: 'option1',
                            label: 'Option 1'
                        },
                        {
                            value: 'option2',
                            label: 'Option 2'
                        }
                    ]
                }
            />

        </React.Fragment>
    )
}