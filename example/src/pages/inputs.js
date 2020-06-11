import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input,
    FpsTheme, ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'

export default function InputsPage() {
    return (
        <React.Fragment>
            <h1>Inputs, Selects, Checkboxes etc.</h1>
            <Input
                label='Input (required)'
                placeholder='Placeholder'
                type='text'
                required
            />
            <Input
                label='Input (not required + default value)'
                placeholder='Placeholder'
                defaultValue='default value'
                type='text'
            />
            <Input
                label='Textarea (required)'
                placeholder='Placeholder for textarea'
                type='textarea'
                rows={4}
                required
            />
            <Input
                label='Numbers'
                placeholder='How old are you'
                type='number'
                defaultValue={0}
            />
            <Input
                label='Numbers, positive only'
                placeholder='How old are you'
                type='number'
                defaultValue={0}
                positive
            />
            <Input
                label='Password (required)'
                placeholder='Type your password'
                defaultValue=''
                type='password'
                required
            />
            <Input
                label='Radio station (default value)'
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