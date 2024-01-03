import React, { useState } from 'react'
import {
    Button, Input, InputGroup, ComponentDetails, CodeSnippet, FileUpload,
    Checkbox, Markdown, DropFiles, Map, Colorpicker
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'



export default function InputsPage() {
    const [value, setValue] = useState()

    const input = `
# Hey
<Img src="https://tpc.googlesyndication.com/simgad/5999243929061584949" width="300" />

Some *emphasis* and <strong>strong</strong>!`;

    const [testDefValue, setTestDefValue] = useState(1630443600000)

    const testFields = [
        {
            "structName": "alfaWebHookData",
            "fields": [
                {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "link": ""
                },
                {
                    "sysName": "body",
                    "name": "body",
                    "dataType": "json",
                    "link": ""
                },
                {
                    "sysName": "headers",
                    "name": "headers",
                    "dataType": "json",
                    "link": ""
                },
                {
                    "sysName": "urlData",
                    "name": "urlData",
                    "dataType": "json",
                    "link": ""
                },
                {
                    "sysName": "@who",
                    "name": "who changed",
                    "dataType": "string",
                    "link": ""
                },
                {
                    "sysName": "@dateCreated",
                    "name": "date created",
                    "dataType": "date",
                    "link": ""
                },
                {
                    "sysName": "@dateChanged",
                    "name": "date changed",
                    "dataType": "date",
                    "link": ""
                },
                {
                    "sysName": "GlobalVar",
                    "name": "Global Constants (2)",
                    "dataType": "link",
                    "link": "GlobalVars",
                    "vars": "global"
                },
                {
                    "sysName": "ContextVar",
                    "name": "Context Variables (3)",
                    "dataType": "link",
                    "link": "ContextVars",
                    "vars": "context"
                }
            ]
        },
        {
            "structName": "ContextVars",
            "fields": [
                {
                    "sysName": "orderId",
                    "name": "",
                    "dataType": "string",
                    "link": ""
                },
                {
                    "sysName": "job_id",
                    "name": "",
                    "dataType": "link",
                    "link": "Jobs"
                },
                {
                    "sysName": "status",
                    "name": "",
                    "dataType": "string",
                    "link": ""
                }
            ]
        },
        {
            "structName": "GlobalVars",
            "fields": [
                {
                    "sysName": "jobPrice",
                    "name": "",
                    "dataType": "string"
                },
                {
                    "sysName": "luxaryJobPrice",
                    "name": "",
                    "dataType": "string"
                }
            ]
        },
        {
            "structName": "ContextVars",
            "fields": [
                {
                    "sysName": "orderId",
                    "name": "",
                    "dataType": "string",
                    "link": ""
                },
                {
                    "sysName": "job_id",
                    "name": "",
                    "dataType": "link",
                    "link": "Jobs"
                },
                {
                    "sysName": "status",
                    "name": "",
                    "dataType": "string",
                    "link": ""
                }
            ]
        }
    ]

    const [dateFormat, setDateFormat] = useState('D MMM, YYYY')
    const [timeFormat, setTimeFormat] = useState('HH:mm')
    const [dateLocale, setDateLocale] = useState(null)

    const [error, setError] = useState('error')

    const testData = {
        data: [
            {
                latitude: 35.786868,
                longitude: -121.252865,
                id: 'pointer1',
                title: 'Pointer 1',
                image: 'https://api.directual.com/fileUploaded/dev/f13801f2-c52e-463b-9904-8eb36c1f82a7.jpg',
                text: 'pointer description pointer description pointer description pointer description pointer description pointer description description pointer description pointer description pointer description pointer description',
                link: 'https://www.mapbox.com/'
            }
        ]
    }

    return (
        <React.Fragment>
            <h1>Data entry</h1>

            <Colorpicker defaultValue="#AAABBB" onChange={val => console.log(val)} />

            <Input type='color' defaultValue={null} label='choose the color' />

            {/* <Input debug type='textarea' autoWidth minWidth={140} maxWidth={500} rows='auto' /> */}

            <Map
                label='This is my map'
                height='600px'
                width='600px'
                edit
                oneMarker
                defaultValue={testData}
                jsonView
                maptoken="pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A"
                mapStyle="mapbox://styles/mapbox/dark-v10"
            />
            <br />

            {/* <Input type='number' defaultValue={0} /> */}
            {/* <Input required type='select' />

            <Input error={error} />
            <Button onClick={()=>setError('')}>reset error</Button>
            <Button onClick={()=>setError(Math.random().toString())}>set error</Button>


            <Input defaultValue="мороз и солнце день чудесный" width={120} /> */}

            <h2>File upload</h2>
            <br />
            <DropFiles
                label='drop files here'
                multiple={false}
                locale='ESP'
                onDrop={value => console.log(value)}
            />
            <br />
            <FileUpload
                label='Files'
                //images
                locale='ESP'
                edit
                allowUpload
                defaultValue='https://api.alfa.directual.com/fileUploaded/testfiles/ee79ed98-5e00-4d51-948e-3ba2d5448ffc.jpeg,https://api.alfa.directual.com/fileUploaded/testfiles/ee79ed98-5e00-4d51-948e-3ba2d5448ffc.jpeg'
                host={'host'}
                multiple={true}
                onChange={value => console.log(value)}
            />

            <br />

            {/* <FileUpload
                multiple={true}
            /> */}

            <br />

            <Input type='select'
                locale="FRA"
                //defaultValue={['id', 'хуе-мое']}
                options={[
                    {
                        "key": "id",
                        "value": "id"
                    },
                    {
                        "key": "api_version",
                        "value": ""
                    },
                    {
                        "key": "release_date",
                        "value": "Release date"
                    },
                    {
                        "key": "updates",
                        "value": "Updates"
                    },
                    {
                        "key": "ui_version",
                        "value": ""
                    },
                    null
                ]} />


            <Input type='markdown' edit example />

            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Special platform selects</h2>
            {/*
            <CodeSnippet code=
                {`<Input
label='Structure field'
width={700}
fields={testFields}
structSysName='WebUsers'
//defaultValue='foo.bar'
onChange={e => console.log(e)}
placeholder='Choose the object field'
icon='database'
//filterFields={['string', 'link']}
//filterLinkFields='TMessageIn'
description='That is a new FormField component for the platform'
//disabled
type='structurefield' />`} />
            <Input
                label='Structure field'
                width={500}
                //fixHeight={100}
                //debug
                //highlightEmpty
                //noPropagation
                fields={testFields}
                //highlightEmpty
                //hideSysFields
                //hideId
                //onChooseType={e => console.log(e)} устар.
                //onChooseLinkStructSysName={e => console.log(e)} устар.
                //tip='подсказко'
                structSysName='alfaWebHookData'
                //defaultValue={testDefValue}
                //onChange={value => console.log(value)}
                onChangeExtended={(value, struct, type) =>
                    console.log(`${value} ${type}${(type == 'link' || type == 'arrayLink') ? `→${struct}` : ''}`)
                }
                placeholder='Choose the object field'
                icon='database'
                //filterFields={'string'}
                //filterLinkFields='TMessageIn'
                description='That is a new FormField component for the platform'
                //disabled
                type='structurefield' />

                <InputGroup width={400}>
                <Input
                    label='Date format'
                    code
                    defaultValue={dateFormat}
                    onChange={setDateFormat}
                />
                <Input
                    label='Time format'
                    code
                    defaultValue={timeFormat}
                    onChange={setTimeFormat}
                />
                </InputGroup>
                <Input
                    width={400}
                    label='Date locale'
                    type='select'
                    defaultValue={dateLocale}
                    onChange={setDateLocale}
                    options={[
                        {key: 'en-gb', value: 'English (en-gb)'},
                        {key: 'es', value: 'Spanish (es)'},
                        {key: 'fr', value: 'French (fr)'},
                        {key: 'de', value: 'Deutsche (de)'},
                        {key: 'ru', value: 'Russian (ru)'},
                    ]}
                /> */}
            <Input
                type='date'
                width={400}
                //debug
                label='test date'
                locale={dateLocale}
                dateFormat={dateFormat}
                timeFormat={timeFormat}
                defaultValue={testDefValue}
                onChange={setTestDefValue}
            />
            <Button onClick={() => setTestDefValue(`2020-12-29T22:17:50.000Z`)}>push me</Button>

            {/* <Input type='optionsHandler'
                label='Options'
                addButtonText='Add an option'
                defaultValue={testDefValue.multipleChoice || [{ value: null, label: null }]}
                objectStructure={['value', 'label']}
                onChange={value => setTestDefValue({ ...testDefValue, multipleChoice: value })}
            /> */}

            {/* <Input
                label='cb'
                options={testDefValue.multipleChoice}
                //options={[{ value: 'a', label: 'b' }]}
                // customOption={this.state.formatOptions.customOption}
                // onChange={value => this.setState({ value: value })}
                // defaultValue={this.state.value}
                nomargin
                type='checkboxGroup' /> */}

            <Input type='phone' label='phone' locale="FRA" />
            <Input type='email' label='email' />
            <Input type='password' label='password' />

            <Input
                //autoFocus
                addonBefore=".directual.app"
                icon='path'
                restrictChars={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                    'q', 'r', 's', 't', 'v', 'u', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-']}
            />

            <Input
                label='Radio station with a custom option'
                type='radioJson'
                onChange={a => setTestDefValue(a)}
                customOption
                defaultValue={{ value: 'option2' }}
                //debug
                width={400}
                customOptionType='textarea'
                customOptionLabel='Something else...'
                customOptionPlaceholder='Please, describe your option'
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
            <Input
                defaultValue={testDefValue}
                debug
                type='json'
                label='JSON input'
                //disabled
                rows='auto'
                onChange={v => { }}
            //isValid={v => { console.log(v) }}
            />
            <Input type='textarea'
                //debug
                description={<span>hello <code>my friend</code>, nice to meet you</span>}
                tip={<span>hello <code>my friend</code>, nice to meet you</span>}
                defaultValue={`<Input
type='optionsHandler'
code
disabled`}
                label='auto-height textarea' rows='auto' />

            <h2>Options handler</h2>

            <CodeSnippet code=
                {`<Input
    type='optionsHandler'
    code
    disabled
    description='you can use {{template system}} here'
    defaultValue={[
        { key: '1', value: 'val 1' },
        { key: '2', value: 'val 2' },
        { key: '3', value: 'val 3' },
    ]}
    objectStructure={['key', 'value']}
    addButtonText='Add param'
    onChange={value => console.log(value)}
    label='Request query params'
/>`} />

            <Input
                type='optionsHandler'
                code
                //disabled
                description='you can use {{template system}} here'
                defaultValue={[
                    { key: '1', value: 'val 1' },
                    { key: '2', value: 'val 2' },
                    { key: '3', value: 'val 3' },
                ]}
                objectStructure={['key', 'value']}
                addButtonText='Add param'
                onChange={value => console.log(value)}
                label='Request query params'
            />



            <CodeSnippet code=
                {`<Input
label='Select with subselect'
width={400}
subSelect={
{
all: false, // show for all the options
keys: [2, 4], // show only for these options
defaultValue: 'sub1',
options: [
    { key: 'sub1', value: 'to objects' },
    { key: 'sub2', value: 'pick one' },
]
}
}
onChangeSubselect={e => {}}
type='select'
placeholder='Choose the line'
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
                label='Select with subselect'
                width={400}
                highlightEmpty
                description='That component is needed for some complex cases'
                subSelect={
                    {
                        all: false,
                        keys: [2, 4],
                        placeholder: 'parse array',
                        defaultValue: 'sub1',
                        options: [
                            { key: 'sub1', value: 'to objects' },
                            { key: 'sub2', value: 'pick one' },
                        ]
                    }
                }
                onChangeSubselect={e => { console.log(e) }}
                type='select'
                placeholder='Choose the line'
                icon='database'
                displayKeyShort
                disabled
                defaultValue='2'
                //displayKey
                options={
                    [
                        { key: 1, value: 'Good fortune? The fact is' },
                        { key: 2, value: 'The more that you practise' },
                        { key: 3, value: 'The harder you sweat' },
                        { key: 4, value: 'The luckier you get' }
                    ]
                }
            />

            <Input
                //autoFocus
                addonAfter=".directual.app"
                restrictChars={['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
                    'q', 'r', 's', 't', 'v', 'u', 'w', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-']}
            />
            <h2 style={{ marginBottom: 24, marginTop: 12 }}>Markdown</h2>
            <CodeSnippet code=
                {`<Markdown example preview edit onChange={val=>console.log(val)} height={300} margin={{top:0,bottom:18}}/>
<Markdown example margin={{top:0,bottom:18}}/>`} />

            <Markdown
                example
                preview
                edit
                onChange={val => console.log(val)}
                height={350}
                margin={{ top: 0, bottom: 18 }} />
            <Markdown example margin={{ top: 0, bottom: 18 }} />

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
                //disabled
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
                //disabled
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
                //debug
                utc
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
    iconOptions
    placeholder='Placeholder'
    icon='database'
    options={
        [
            { key: 1, value: 'Good fortune? The fact is' },
            { key: 2, value: 'The more that you practise', icon: 'code'  },
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
                bottomSelect
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
                disabled
                type='multiselect'
                placeholder='Choose the values'
                defaultValue={[2, 5]}
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
                // data={{
                //     errors: [1,2,3]
                // }}
                icon='license'
                //height={48}
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
                defaultValue='default value default value default value default value default value'
                type='string'
                icon='id'
                disabled
                width={400}
            />
            <CodeSnippet code=
                {`<Input
    label='Input code'
    placeholder='Placeholder'
    defaultValue='I am code style input'
    type='string'
    code
    width={400}
/>`} />
            <Input
                label='Input code'
                placeholder='Placeholder'
                defaultValue='I am code style input'
                type='string'
                code
                width={400}
            />
            <CodeSnippet code=
                {`<Input
    label='Input code'
    placeholder='Placeholder'
    defaultValue='I am code style input'
    type='string'
    code
    copy
    width={400}
/>`} />
            <Input
                label='Input code'
                placeholder='Placeholder'
                defaultValue='I am code style input'
                type='string'
                code
                copy
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
                copy
                width={400}
            />

            <CodeSnippet code=
                {`<Input
    label='Textarea (code)'
    placeholder='Placeholder for textarea'
    type='textarea'
    rows={4}
    code
    width={400}
    />`} />
            <Input
                label='Textarea (code)'
                placeholder='Placeholder for textarea'
                type='textarea'
                code
                defaultValue="import React, {useEffect, useState} from 'React'"
                rows={4}
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
    horizontal
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
                horizontal
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
                        }
                    ]
                }
            />
            <CodeSnippet code=
                {`<Input
    label='Radio station with a custom option'
    type='radio'
    customOption
    placeholder='Other'
    width={400}
    customOptionType='textarea'
    customOptionLabel='Something else...'
    customOptionPlaceholder='Please, describe your option'
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
                label='Radio station with a custom option'
                type='radio'
                customOption
                //debug
                width={400}
                customOptionType='textarea'
                customOptionLabel='Something else...'
                customOptionPlaceholder='Please, describe your option'
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

            <h2 style={{ marginBottom: 24, marginTop: 36 }}>Checkboxes</h2>
            <CodeSnippet code=
                {`<Checkbox
    label='Click me'
/>`} />
            <Checkbox
                label='Click me'
            /><br />
            <CodeSnippet code=
                {`<Checkbox
    label='Checkbox with custom option'
    customOption
    customOptionType='date' // string, date, datetime, number, decimal, textarea, email
    customOptionPlaceholder='Tell us...'
/>`} />
            <Checkbox
                label='Checkbox with custom option'
                defaultValue='Hello world!'
                customOption
                customOptionType='textarea'
                customOptionPlaceholder='Tell us...'
            /><br />

            <CodeSnippet code=
                {`<Input
    label='Checkbox group with a custom option'
    type='checkboxGroup'
    customOption
    width={500}
    customOptionType='textarea'
    customOptionLabel='Something else...'
    customOptionPlaceholder='Please, describe your option'
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
                //debug
                label='Checkbox group with a custom option'
                type='checkboxGroup'
                customOption
                defaultValue={{ "option3": true, "customOption": "dd" }}
                width={500}
                disabled
                customOptionType='textarea'
                customOptionLabel='Something else...'
                customOptionPlaceholder='Please, describe your option'
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
