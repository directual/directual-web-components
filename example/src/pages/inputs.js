import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, CodeSnippet
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function InputsPage() {
    return (
        <React.Fragment>
            <h1>Inputs, Selects, Checkboxes etc.</h1>

            <CodeSnippet code=
                {`<Input
    label='Input (required)'
    placeholder='Placeholder'
    type='string'
    required
/>`} />
            <Input
                label='Input (required)'
                placeholder='Placeholder'
                type='string'
                required
            />

            <CodeSnippet code=
                {`<Input
    label='Input (not required + default value)'
    placeholder='Placeholder'
    defaultValue='default value'
    type='string'
/>`} />
            <Input
                label='Input (not required + default value)'
                placeholder='Placeholder'
                defaultValue='default value'
                type='string'
            />

<CodeSnippet code=
                {`<Input
    label='Input disabled'
    placeholder='Placeholder'
    defaultValue='default value'
    type='string'
    disabled
/>`} />
            <Input
                label='Input disabled'
                placeholder='Placeholder'
                defaultValue='default value'
                type='string'
                disabled
            />

<CodeSnippet code=
                {`<Input
    label='Email (with validation)'
    placeholder='Enter your email address'
    type='email'
    required
/>`} />
            <Input
                label='Email (with validation)'
                placeholder='Enter your email address'
                type='email'
                required
            />

            <CodeSnippet code=
                {`<Input
    label='Textarea (required)'
    placeholder='Placeholder for textarea'
    type='textarea'
    rows={4}
    required
/>`} />
            <Input
                label='Textarea (required)'
                placeholder='Placeholder for textarea'
                type='textarea'
                rows={4}
                required
            />

            <CodeSnippet code=
                {`<Input
    label='Numbers'
    placeholder='How old are you'
    type='number'
/>`} />
            <Input
                label='Numbers'
                placeholder='How old are you'
                type='number'
            />

            <CodeSnippet code=
                {`<Input
    label='Numbers, positive only'
    placeholder='How old are you'
    type='number'
    defaultValue={0}
    positive
/>`} />
            <Input
                label='Numbers, positive only'
                placeholder='How old are you'
                type='number'
                defaultValue={0}
                positive
            />

            <CodeSnippet code=
                {`<Input
    label='Password (required)'
    placeholder='Type your password'
    defaultValue=''
    type='password'
    required
/>`} />
            <Input
                label='Password (required)'
                placeholder='Type your password'
                defaultValue=''
                type='password'
                required
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
                        { prop: 'placeholder', type: 'string', desc: 'Placeholder', eg: 'placeholder = \'type here\'' },
                        { prop: 'required', type: 'boolean', desc: 'Required field, throws a warning if empty', eg: 'required = {true}' },
                        { prop: 'rows', type: 'number', desc: 'For type = \'textarea\' only! Number of rows', eg: 'rows = {8}' },
                        { prop: 'positive', type: 'boolean', desc: 'For type = \'number\' only!', eg: 'positive = {true}' },
                    ]
                }
            } />

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