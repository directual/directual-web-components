import React, { useEffect, useState } from 'react'
import {
    FpsCards, FpsForm, MainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet,
    Dnd, Profile, TabsPane, Stopwatch, Button, SignUp, RestorePass, FpsKanban
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from 'react-router-dom'

//pages:
import ButtonsPage from './pages/buttons'
import InputsPage from './pages/inputs'
import IconsPage from './pages/icons'
import TypoPage from './pages/typo'
import WhatIsIt from './pages/wtf'
import LayoutPage from './pages/layout'
import PlatformPage from './pages/platform'


function MainMenuWrapper(props) {
    let location = useLocation()

    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')

    useEffect(() => {

        if (props.themeName.colorScheme === 'darkMint' || props.themeName.colorScheme === 'warmNight' || props.themeName.colorScheme === 'hacker') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/b652c768-32eb-4309-bc7f-974863107528.svg')
        }
        if (props.themeName.colorScheme === 'classic' || props.themeName.colorScheme === 'tiffany' || props.themeName.colorScheme === 'white') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')
        }
    }, [props.themeName])


    return (
        <MainMenu
            title='directual-design'
            showUserButtons={true}
            loggedIn={true}
            horizontal={props.horizontal}
            logoutText='Выйти'
            //loggedIn={false}
            logInButton={{ name: "Sign in", route: "/profile", icon: "logoutAlt", link: <Link to="/profile">Sign in</Link> }}
            profileButton={{ name: "Profile", route: "/profile", icon: "user", link: <Link to="/profile">Profile</Link> }}
            logoUrl={logoUrl}
            userName={'Pavel Ershov'}
            logOutButton
            currentRoute={location.pathname || '/'}
            menu={[
                { name: "What?", group: null, route: "/", icon: "info", link: <Link to="/">What is it?</Link> },
                { name: "Components", subheader: true },
                { name: "Sign In / Sign Up / Profile", group: 'Components', route: "/profile", icon: "user", link: <Link to="/profile">Sign in, Sign up, Profile</Link> },
                { name: "Form", route: "/form",  group: 'Components', icon: "edit", link: <Link to="/form">Form</Link> },
                { name: "Theme management",  group: 'Components', route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
                { name: "Cards",  group: 'Components', route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
                { name: "Table",  group: 'Components', route: "/table", icon: "database" },
                { name: "Kanban",  group: 'Components', route: "/kanban", icon: "kanban" },
                { name: "Chat (soon)",  group: 'Components', route: "/chat", icon: "bubble", disabled: true },
                { name: "Comments (soon)",  group: 'Components', route: "/comments", icon: "version", disabled: true },
                { name: "Design system", subheader: true },
                { name: "Typography", group: 'Design system', route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
                { name: "Directual Icons", group: 'Design system', route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
                { name: "Buttons", group: 'Design system', route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
                { name: "Data entry", group: 'Design system', route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
                { name: "Media", group: 'Design system', route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
                { name: "Layout", group: 'Design system', route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
                { name: "Platform", group: 'Design system', route: "/platform", icon: "babai", link: <Link to="/platform">Platform</Link> },
            ]}

        />)
}

const App = (props) => {
    let exampleDataHtml = {
        html: '<b>test</b>'
    }

    let cardActions = {
        "sl": "geo",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "field1",
                        "fetch": [],
                        "sysName": "field1",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "geo",
                        "fetch": [],
                        "sysName": "geo",
                        "name": "Map",
                        "dataType": "json",
                        "format": "geo",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false",
                            "mapColour": "mapbox://styles/mapbox/outdoors-v11"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "field1",
                        "fetch": [],
                        "sysName": "field1",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "geo",
                        "fetch": [],
                        "sysName": "geo",
                        "name": "Map",
                        "dataType": "json",
                        "format": "geo",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false",
                            "mapColour": "mapbox://styles/mapbox/outdoors-v11"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "field1": {
                        "id": "field1",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "geo": {
                        "id": "geo",
                        "content": "Map",
                        "type": "field",
                        "dataType": "json",
                        "format": "geo",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false",
                            "mapColour": "mapbox://styles/mapbox/outdoors-v11"
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "field1": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "geo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "field1",
                            "geo",
                            "id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "field1": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "geo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "field1",
                "dataType": "string",
                "name": "",
                "id": "12791636541036950",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "geo",
                "dataType": "json",
                "name": "Map",
                "id": "57981638296428929",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": "geo",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false",
                    "mapColour": "mapbox://styles/mapbox/outdoors-v11"
                },
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": true,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "field1": "1",
                "id": "ea11586d-8257-4fe5-997d-d94a3671d327",
                "geo": ""
            },
            {
                "field1": "1",
                "id": "095cc2ce-3956-4c17-9ea1-13d177b3b74b",
                "geo": ""
            },
            {
                "geo": "{\"data\":[{\"id\":1638470933844,\"title\":\"New Marker!\",\"longitude\":-122.41820927180835,\"latitude\":37.78876858263251}]}",
                "id": "b13f7987-ccd9-4fa7-826a-4f6e1d67b75e",
                "field1": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "field1",
                99045374
            ],
            [
                "geo",
                99045374
            ],
            [
                "id",
                99045374
            ]
        ],
        "writeFields": [
            "field1",
            "geo",
            "id"
        ],
        "structures": {
            "99045374": {
                "networkID": 9877,
                "sysName": "test",
                "name": "test",
                "id": 99045374,
                "dateCreated": "2021-11-10T10:43:35Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"field1\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"12791636541036950\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"kewyValue\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"34151638296515637\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"keyValue\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"range\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"51431638296512874\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"geo\",\"name\":\"Map\",\"dataType\":\"json\",\"id\":\"57981638296428929\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"mapToken\":\"pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"mapColour\":\"mapbox://styles/mapbox/outdoors-v11\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"slider\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"76181638296510140\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"max\":10,\"min\":0,\"step\":1},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"json\",\"name\":\"\",\"dataType\":\"json\",\"id\":\"77471638296496532\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"1\",\"label\":\"2\"},{\"value\":\"3\",\"label\":\"5\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"array\":false},{\"sysName\":\"field2\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"85731636541037473\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-30T18:22:56Z",
                "createBy": 1,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "field1",
                "dataType": "string",
                "name": "",
                "id": "12791636541036950",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "geo",
                "dataType": "json",
                "name": "Map",
                "id": "57981638296428929",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": "geo",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNrdmJncTl0eTBkcWIyc3BuYjlpYXp2cnkifQ.mVDgIP-E8tA2FlBttPdi4A",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false",
                    "mapColour": "mapbox://styles/mapbox/outdoors-v11"
                },
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": true,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "quickSearch": "true"
    }

    let newCardActions = {
        "sl": "cart",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "Cart_price",
                        "fetch": [],
                        "sysName": "Cart_price",
                        "name": "",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "goods",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "finalPrice",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "float",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "good",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "image",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "name",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "price",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "good_in_cart_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "image",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "quantity",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "status_name",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "goods",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goods_in_cart"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "goods",
                        "fetch": [],
                        "sysName": "goods",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goods_in_cart"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "Cart_price": {
                        "id": "Cart_price",
                        "content": "",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "goods": {
                        "id": "goods",
                        "content": "",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "goods_in_cart",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "title": {
                        "id": "title",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "action__86391636363685240": {
                        "content": "upload files",
                        "id": "action__86391636363685240",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "Cart_price": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "goods": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "veiwOption": "table",
                        "cartView": {
                            "image": true,
                            "imageField": "image",
                            "deleteOn": true,
                            "quantity": true,
                            "price": true,
                            "title": true,
                            "priceUnits": "$",
                            "titleField": "good",
                            "priceField": "finalPrice",
                            "quantityField": "quantity",
                            "status": true,
                            "statusField": "status"
                        },
                        "configureLinkedCard": {
                            "fields": {
                                "finalPrice": {
                                    "id": "finalPrice",
                                    "content": "Price",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "good": {
                                    "id": "good",
                                    "content": "Good",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "good_in_cart_name": {
                                    "id": "good_in_cart_name",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "image": {
                                    "id": "image",
                                    "content": "Image",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "image",
                                    "formatOptions": {}
                                },
                                "quantity": {
                                    "id": "quantity",
                                    "content": "Count",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "status": {
                                    "id": "status",
                                    "content": "Status",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "date": {
                                    "id": "date",
                                    "content": "дата",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "date",
                                    "format": null,
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "dateLocale": "en-gb",
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "validWeekDays": {
                                            "mon": true,
                                            "thu": true,
                                            "tue": true,
                                            "sun": true,
                                            "fri": true,
                                            "sat": true,
                                            "wed": true
                                        },
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea",
                                        "dateFormat": "MMMM, D",
                                        "timeFormat": "",
                                        "isUTC": "false"
                                    }
                                },
                                "float": {
                                    "id": "float",
                                    "content": "флот",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "finalPrice": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "good": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "good_in_cart_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "image": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "quantity": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "status": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "float": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                null,
                                "finalPrice",
                                "good",
                                "good_in_cart_name",
                                "image",
                                "quantity",
                                "status",
                                null,
                                "date",
                                "float"
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "date",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1637692612736",
                                    "field": "image"
                                },
                                {
                                    "id": "1637692606467",
                                    "field": "good",
                                    "itogo": true
                                },
                                {
                                    "id": "1637692625970",
                                    "field": "status"
                                },
                                {
                                    "id": "1637692623073",
                                    "field": "quantity",
                                    "itogo": true
                                }
                            ],
                            "itogo": true,
                            "deleteOn": true
                        },
                        "sortDirection": "asc"
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "Cart_price",
                            "goods",
                            "id",
                            "status",
                            "title",
                            "action__86391636363685240"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "actions",
                        "id": "86391636363685240",
                        "name": "upload files",
                        "displayAs": "form",
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "id",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "files",
                                    "fetch": [],
                                    "sysName": "files",
                                    "name": "",
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "76621636363698934",
                                "field": {
                                    "fieldSysName": "files",
                                    "fetch": [],
                                    "sysName": "files",
                                    "name": "",
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "Cart_price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "goods": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "veiwOption": "table",
                    "cartView": {
                        "image": true,
                        "imageField": "image",
                        "deleteOn": true,
                        "quantity": true,
                        "price": true,
                        "title": true,
                        "priceUnits": "$",
                        "titleField": "good",
                        "priceField": "finalPrice",
                        "quantityField": "quantity",
                        "status": true,
                        "statusField": "status"
                    },
                    "configureLinkedCard": {
                        "fields": {
                            "finalPrice": {
                                "id": "finalPrice",
                                "content": "Price",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": null
                            },
                            "good": {
                                "id": "good",
                                "content": "Good",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "good_in_cart_name": {
                                "id": "good_in_cart_name",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "image": {
                                "id": "image",
                                "content": "Image",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": {}
                            },
                            "quantity": {
                                "id": "quantity",
                                "content": "Count",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": null
                            },
                            "status": {
                                "id": "status",
                                "content": "Status",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "date": {
                                "id": "date",
                                "content": "дата",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
                                "format": null,
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "dateLocale": "en-gb",
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "validWeekDays": {
                                        "mon": true,
                                        "thu": true,
                                        "tue": true,
                                        "sun": true,
                                        "fri": true,
                                        "sat": true,
                                        "wed": true
                                    },
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea",
                                    "dateFormat": "MMMM, D",
                                    "timeFormat": "",
                                    "isUTC": "false"
                                }
                            },
                            "float": {
                                "id": "float",
                                "content": "флот",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "finalPrice": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "good": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "good_in_cart_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "image": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "quantity": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "status": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "float": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            null,
                            "finalPrice",
                            "good",
                            "good_in_cart_name",
                            "image",
                            "quantity",
                            "status",
                            null,
                            "date",
                            "float"
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "date",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1637692612736",
                                "field": "image"
                            },
                            {
                                "id": "1637692606467",
                                "field": "good",
                                "itogo": true
                            },
                            {
                                "id": "1637692625970",
                                "field": "status"
                            },
                            {
                                "id": "1637692623073",
                                "field": "quantity",
                                "itogo": true
                            }
                        ],
                        "itogo": true,
                        "deleteOn": true
                    },
                    "sortDirection": "asc"
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "actions",
                    "id": "86391636363685240",
                    "name": "upload files",
                    "displayAs": "form",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "id",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "files",
                                "fetch": [],
                                "sysName": "files",
                                "name": "",
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "76621636363698934",
                            "field": {
                                "fieldSysName": "files",
                                "fetch": [],
                                "sysName": "files",
                                "name": "",
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ]
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "Cart_price",
                "name": "",
                "dataType": "number",
                "id": "99631632654931535",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "goods",
                "name": "",
                "dataType": "arrayLink",
                "id": "53151632654863628",
                "link": "goods_in_cart",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "status",
                "name": "",
                "dataType": "string",
                "id": "84351632654929010",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "title",
                "name": "",
                "dataType": "string",
                "id": "25911632662259172",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "title": "Cart",
                "status": "new",
                "goods": [
                    {
                        "quantity": 2,
                        "image": "https://api.directual.com/fileUploaded/dev/ccb4f331-25a3-4f0d-969f-04b946c8f1d3.jpg",
                        "good": {
                            "price": 10,
                            "name": "apples",
                            "id": "1"
                        },
                        "good_in_cart_name": "good 3",
                        "id": "1",
                        "date": 1636837200000,
                        "status": {
                            "status_name": "NEW",
                            "id": "1"
                        },
                        "finalPrice": 99
                    },
                    {
                        "quantity": 4,
                        "float": -10.34,
                        "image": "https://api.directual.com/fileUploaded/cart/7e71ae85-66e9-4e44-9ddc-add69a90c998.jpg",
                        "good": {
                            "price": 15,
                            "name": "oranges",
                            "id": "3"
                        },
                        "good_in_cart_name": "good 1",
                        "id": "3",
                        "date": 1637787600000,
                        "status": {
                            "status_name": "OLD",
                            "id": "2"
                        },
                        "finalPrice": 400
                    },
                    {
                        "float": 1.5,
                        "image": "https://api.directual.com/fileUploaded/dev/20d4260f-5ea6-4f8b-93ba-73c7d179a86d.jpg",
                        "good": {
                            "price": 20,
                            "name": "bananas",
                            "id": "2"
                        },
                        "good_in_cart_name": "good 2",
                        "id": "2",
                        "date": 1637182800000,
                        "finalPrice": 120
                    }
                ],
                "id": "1"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "Cart_price",
                99031305
            ],
            [
                "goods.date",
                99031304
            ],
            [
                "goods.finalPrice",
                99031304
            ],
            [
                "goods.float",
                99031304
            ],
            [
                "goods.good.id",
                99031302
            ],
            [
                "goods.good.image",
                99031302
            ],
            [
                "goods.good.name",
                99031302
            ],
            [
                "goods.good.price",
                99031302
            ],
            [
                "goods.good_in_cart_name",
                99031304
            ],
            [
                "goods.image",
                99031304
            ],
            [
                "goods.quantity",
                99031304
            ],
            [
                "goods.status.id",
                99035858
            ],
            [
                "goods.status.status_name",
                99035858
            ],
            [
                "id",
                99031305
            ],
            [
                "status",
                99031305
            ],
            [
                "title",
                99031305
            ]
        ],
        "writeFields": [
            "goods",
            "id"
        ],
        "structures": {
            "99031302": {
                "networkID": 9877,
                "sysName": "goods",
                "name": "goods",
                "id": 99031302,
                "dateCreated": "2021-09-26T11:09:07Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"name\":\"ЫМя\",\"dataType\":\"string\",\"id\":\"39841632654618610\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price\",\"name\":\"ЦЕНА\",\"dataType\":\"number\",\"id\":\"16831632654619092\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"name\":\"Картинк\",\"dataType\":\"file\",\"id\":\"61001632654724498\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"date\",\"name\":\"ДАта\",\"dataType\":\"date\",\"id\":\"97981637703750787\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM, D\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-23T21:42:54Z",
                "createBy": 21,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            },
            "99031304": {
                "networkID": 9877,
                "sysName": "goods_in_cart",
                "name": "goods in cart",
                "id": 99031304,
                "dateCreated": "2021-09-26T11:14:05Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cart_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"27951632654884383\",\"link\":\"cart\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good\",\"name\":\"Good\",\"dataType\":\"link\",\"id\":\"56301632654884854\",\"link\":\"goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"quantity\",\"name\":\"Count\",\"dataType\":\"number\",\"id\":\"10581632654902116\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"finalPrice\",\"name\":\"Price\",\"dataType\":\"number\",\"id\":\"41241632654906714\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good_in_cart_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"40521632944512531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"name\":\"Image\",\"dataType\":\"file\",\"id\":\"86301632946954729\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status\",\"name\":\"Status\",\"dataType\":\"link\",\"id\":\"43591633889912266\",\"link\":\"status\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"date\",\"name\":\"дата\",\"dataType\":\"date\",\"id\":\"53411637703823836\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM, D\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"float\",\"name\":\"флот\",\"dataType\":\"decimal\",\"id\":\"83931637706413383\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"good\"},{\"sysName\":\"quantity\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-23T22:58:50Z",
                "createBy": 21,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            },
            "99031305": {
                "networkID": 9877,
                "sysName": "cart",
                "name": "cart",
                "id": 99031305,
                "dateCreated": "2021-09-26T11:14:14Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"25911632662259172\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"goods\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"53151632654863628\",\"link\":\"goods_in_cart\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"84351632654929010\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"Cart_price\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"99631632654931535\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"goods\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-29T20:04:55Z",
                "createBy": 21,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            },
            "99035858": {
                "networkID": 9877,
                "sysName": "status",
                "name": "status",
                "id": 99035858,
                "dateCreated": "2021-10-10T18:18:54Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"53361633889940475\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-10T18:19:07Z",
                "createBy": 21,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "goods",
                "name": "",
                "dataType": "arrayLink",
                "id": "53151632654863628",
                "link": "goods_in_cart",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "0",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "quickSearch": "false"
    }

    let exampleTable = {
        "sl": "userProfileShowNotifications",
        "pageSize": "20",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "date",
                        "fetch": [],
                        "sysName": "date",
                        "name": "Дата",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD MMM YY;",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "html_text",
                        "fetch": [],
                        "sysName": "html_text",
                        "name": "",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "text",
                        "fetch": [],
                        "sysName": "text",
                        "name": "Сообщение",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Заголовок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "date": {
                        "id": "date",
                        "content": "Дата",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD MMM YY;",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "html_text": {
                        "id": "html_text",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "text": {
                        "id": "text",
                        "content": "Сообщение",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "title": {
                        "id": "title",
                        "content": "Заголовок",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "text": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "html_text": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "date",
                            "title",
                            "text",
                            "html_text"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "text": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "html_text": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "date",
                        "fetch": [],
                        "sysName": "date",
                        "name": "Дата",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD MMM YY;",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "html_text",
                        "fetch": [],
                        "sysName": "html_text",
                        "name": "Сообщение",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "text",
                        "fetch": [],
                        "sysName": "text",
                        "name": "Сообщение",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Заголовок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "date": {
                        "id": "date",
                        "content": "Дата",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD MMM YY;",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": ""
                    },
                    "html_text": {
                        "id": "html_text",
                        "content": "Сообщение",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "text": {
                        "id": "text",
                        "content": "Сообщение",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "title": {
                        "id": "title",
                        "content": "Заголовок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "text": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "title": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "html_text": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "title",
                    "text",
                    "date",
                    "html_text"
                ]
            },
            "hideExpandTD": true
        },
        "tableTitle": "Оповещения",
        "actions": null,
        "headers": [
            {
                "sysName": "date",
                "dataType": "date",
                "name": "Дата",
                "id": "57711634983390931",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 5,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "ru",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD MMM YY;",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "html_text",
                "dataType": "string",
                "name": "Сообщение",
                "id": "61741634986124227",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 6,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "html",
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "text",
                "dataType": "string",
                "name": "Сообщение",
                "id": "22741634983348724",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "title",
                "dataType": "string",
                "name": "Заголовок",
                "id": "93271634983348183",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            }
        ],
        "data": [
            {
                "html_text": "<h2>Для покупателей</h2>\n<p>Покупайте<p/>\n<h2>Для продавцов</h2>\n<p>Продавайте</p>\n<p style=\"margin-top:24px; color:#aaa\">Да прибудет с вами Сила 🖤</p>",
                "date": 1637784478000,
                "text": " Для покупателей \n Покупайте \n Для продавцов \n Продавайте \n Да прибудет с вами Сила 🖤 ",
                "title": "Добро пожаловать на VitrinaBrands!"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "date",
                99039316
            ],
            [
                "html_text",
                99039316
            ],
            [
                "text",
                99039316
            ],
            [
                "title",
                99039316
            ]
        ],
        "writeFields": [],
        "structures": {
            "99039316": {
                "id": 99039316,
                "dateCreated": "2021-10-23T10:02:20Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 7332,
                "name": "Notifications",
                "sysName": "notifications",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Сообщение\",\"id\":\"22741634983348724\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"isRead\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"28891634983351806\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Дата\",\"id\":\"57711634983390931\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM YY;\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"html_text\",\"dataType\":\"string\",\"name\":\"Сообщение\",\"id\":\"61741634986124227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"90911634983368702\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"Заголовок\",\"id\":\"93271634983348183\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"},{\"sysName\":\"date\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-23T10:59:27Z",
                "createBy": 1,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "0",
                    "link": "",
                    "group": "0",
                    "tags": "",
                    "indexing": false,
                    "ordering": false,
                    "description": null,
                    "weight": null,
                    "order": 0,
                    "linkIndexFieldSysName": [],
                    "defaultValue": "",
                    "constraints": null,
                    "synthetic": false,
                    "format": null,
                    "formatOptions": {},
                    "groupName": null,
                    "typeVariable": {},
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "json": false,
                    "indexExists": false,
                    "linkType": false,
                    "array": false
                },
                "folderId": 33649100
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false"
    }

    let authExample = {
        // isAuth: false,
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "pavel@directual.com"
    }

    let exampleForm = {
        "sl": "editEmployeeProfile",
        "formName": "Профиль кандидата",
        "formDesc": "",
        "formButton": "Сохранить",
        "placeholder": "",
        "maxWidth": "500",
        "formButtonResubmit": null,
        "params": {
            "result": {
                "resultTitleField": null,
                "resultMessageField": null,
                "isSuccessField": null
            },
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "22_functions",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "22_functions",
                        "name": "Функции для категории 22",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions22"
                    },
                    {
                        "fieldSysName": "52_functions",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "52_functions",
                        "name": "Функции для категории 52",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions52"
                    },
                    {
                        "fieldSysName": "Facebook_lonk",
                        "fetch": [],
                        "sysName": "Facebook_lonk",
                        "name": "Facebook",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Instagram_link",
                        "fetch": [],
                        "sysName": "Instagram_link",
                        "name": "Instagram",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "about_last_job",
                        "fetch": [],
                        "sysName": "about_last_job",
                        "name": "Последнее место работы",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "about_last_job_bool",
                        "fetch": [],
                        "sysName": "about_last_job_bool",
                        "name": "Опыт работы",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "есть опыт",
                                "нет опыта"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "birthday",
                        "fetch": [],
                        "sysName": "birthday",
                        "name": "Дата рождения",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "Город",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "cities"
                    },
                    {
                        "fieldSysName": "firstName",
                        "fetch": [],
                        "sysName": "firstName",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "Username (login)",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang",
                        "name": "Знание иностранных языков",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang_cat"
                    },
                    {
                        "fieldSysName": "lang_ch",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_ch",
                        "name": "Уровень владения китайским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_de",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_de",
                        "name": "Уровень владения немецким языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_en",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_en",
                        "name": "Уровень владения английским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_fr",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_fr",
                        "name": "Уровень владения французским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_from_user",
                        "fetch": [],
                        "sysName": "lang_from_user",
                        "name": "Свой вариант",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_id",
                        "name": "Знание иностранных языков",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_it",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_it",
                        "name": "Уровень владения итальянским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_rus",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_rus",
                        "name": "Уровень владения русским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_sp",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_sp",
                        "name": "Уровень владения испанским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lastName",
                        "fetch": [],
                        "sysName": "lastName",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "salary_raw",
                        "fetch": [],
                        "sysName": "salary_raw",
                        "name": "Ожидания по доходу ",
                        "dataType": "json",
                        "format": "rangeSlider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "k ₽",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {
                                "max": 300,
                                "min": 20,
                                "step": 10
                            },
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "schedule",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "schedule",
                        "name": "Занятость",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "schedule"
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [],
                        "sysName": "type",
                        "name": "Категория вакансий",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "2 через 2",
                                "5 через 2"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": "Type2252"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "22_functions",
                        "fetch": [],
                        "sysName": "22_functions",
                        "name": "Функции для категории 22",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions22"
                    },
                    {
                        "fieldSysName": "52_functions",
                        "fetch": [],
                        "sysName": "52_functions",
                        "name": "Функции для категории 52",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions52"
                    },
                    {
                        "fieldSysName": "Facebook_lonk",
                        "fetch": [],
                        "sysName": "Facebook_lonk",
                        "name": "Facebook",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Instagram_link",
                        "fetch": [],
                        "sysName": "Instagram_link",
                        "name": "Instagram",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "about_last_job",
                        "fetch": [],
                        "sysName": "about_last_job",
                        "name": "Последнее место работы",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "about_last_job_bool",
                        "fetch": [],
                        "sysName": "about_last_job_bool",
                        "name": "Опыт работы",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "есть опыт",
                                "нет опыта"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "birthday",
                        "fetch": [],
                        "sysName": "birthday",
                        "name": "Дата рождения",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "Город",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "cities"
                    },
                    {
                        "fieldSysName": "firstName",
                        "fetch": [],
                        "sysName": "firstName",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "Username (login)",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang",
                        "fetch": [],
                        "sysName": "lang",
                        "name": "Знание иностранных языков",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang_cat"
                    },
                    {
                        "fieldSysName": "lang_ch",
                        "fetch": [],
                        "sysName": "lang_ch",
                        "name": "Уровень владения китайским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_de",
                        "fetch": [],
                        "sysName": "lang_de",
                        "name": "Уровень владения немецким языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_en",
                        "fetch": [],
                        "sysName": "lang_en",
                        "name": "Уровень владения английским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_fr",
                        "fetch": [],
                        "sysName": "lang_fr",
                        "name": "Уровень владения французским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_from_user",
                        "fetch": [],
                        "sysName": "lang_from_user",
                        "name": "Свой вариант",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_id",
                        "fetch": [],
                        "sysName": "lang_id",
                        "name": "Знание иностранных языков",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_it",
                        "fetch": [],
                        "sysName": "lang_it",
                        "name": "Уровень владения итальянским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_rus",
                        "fetch": [],
                        "sysName": "lang_rus",
                        "name": "Уровень владения русским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_sp",
                        "fetch": [],
                        "sysName": "lang_sp",
                        "name": "Уровень владения испанским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lastName",
                        "fetch": [],
                        "sysName": "lastName",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "salary_raw",
                        "fetch": [],
                        "sysName": "salary_raw",
                        "name": "Ожидания по доходу ",
                        "dataType": "json",
                        "format": "rangeSlider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "k ₽",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {
                                "max": 300,
                                "min": 20,
                                "step": 10
                            },
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "schedule",
                        "fetch": [],
                        "sysName": "schedule",
                        "name": "Занятость",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "schedule"
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [],
                        "sysName": "type",
                        "name": "Категория вакансий",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "2 через 2",
                                "5 через 2"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": "Type2252"
                    }
                ],
                "fields": {
                    "22_functions": {
                        "id": "22_functions",
                        "content": "Функции для категории 22",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "functions22"
                    },
                    "52_functions": {
                        "id": "52_functions",
                        "content": "Функции для категории 52",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "functions52"
                    },
                    "Facebook_lonk": {
                        "id": "Facebook_lonk",
                        "content": "Facebook",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "Instagram_link": {
                        "id": "Instagram_link",
                        "content": "Instagram",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "about_last_job": {
                        "id": "about_last_job",
                        "content": "Последнее место работы",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "about_last_job_bool": {
                        "id": "about_last_job_bool",
                        "content": "Опыт работы",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "есть опыт",
                                "нет опыта"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "birthday": {
                        "id": "birthday",
                        "content": "Дата рождения",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "ru",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "city": {
                        "id": "city",
                        "content": "Город",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "cities"
                    },
                    "firstName": {
                        "id": "firstName",
                        "content": "Имя",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "id": {
                        "id": "id",
                        "content": "Username (login)",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "lang": {
                        "id": "lang",
                        "content": "Знание иностранных языков",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang_cat"
                    },
                    "lang_ch": {
                        "id": "lang_ch",
                        "content": "Уровень владения китайским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_de": {
                        "id": "lang_de",
                        "content": "Уровень владения немецким языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_en": {
                        "id": "lang_en",
                        "content": "Уровень владения английским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_fr": {
                        "id": "lang_fr",
                        "content": "Уровень владения французским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_from_user": {
                        "id": "lang_from_user",
                        "content": "Свой вариант",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "lang_id": {
                        "id": "lang_id",
                        "content": "Знание иностранных языков",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "lang_it": {
                        "id": "lang_it",
                        "content": "Уровень владения итальянским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_rus": {
                        "id": "lang_rus",
                        "content": "Уровень владения русским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_sp": {
                        "id": "lang_sp",
                        "content": "Уровень владения испанским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lastName": {
                        "id": "lastName",
                        "content": "Фамилия",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "salary_raw": {
                        "id": "salary_raw",
                        "content": "Ожидания по доходу ",
                        "type": "field",
                        "dataType": "json",
                        "format": "rangeSlider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "k ₽",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {
                                "max": 300,
                                "min": 20,
                                "step": 10
                            },
                            "customOptionType": "textarea"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "schedule": {
                        "id": "schedule",
                        "content": "Занятость",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "schedule"
                    },
                    "type": {
                        "id": "type",
                        "content": "Категория вакансий",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "2 через 2",
                                "5 через 2"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "write": true,
                        "read": true,
                        "link": "Type2252"
                    }
                },
                "fieldParams": {
                    "22_functions": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "defaultValueOn": false,
                        "description": "Вакансии в шоурумах, магазинах, салонах, фитнес-клубах и ресторанном бизнесе",
                        "quickSearchSL": "function22Displayed"
                    },
                    "52_functions": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "Вакансии в креативе, бизнесе и стажировки"
                    },
                    "city": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "defaultValue": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                        "required": true
                    },
                    "firstName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "lastName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "salary_raw": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": {
                            "secondValue": 100,
                            "firstValue": 50
                        },
                        "descriptionFlag": true,
                        "description": "Доход в месяц, тыс.  ₽"
                    },
                    "type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false,
                        "defaultValueOn": false,
                        "defaultValue": "22"
                    },
                    "Facebook_lonk": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "опционально"
                    },
                    "Instagram_link": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "опционально"
                    },
                    "lang_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langEng"
                    },
                    "about_last_job": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "Опишите последнее место работы: должность, название компании, продолжительность"
                    },
                    "schedule": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "about_last_job_bool": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "birthday": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "hidden": false
                    },
                    "lang": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "lang_ch": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langCh"
                    },
                    "lang_de": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langDe"
                    },
                    "lang_en": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langEng"
                    },
                    "lang_fr": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langFr"
                    },
                    "lang_it": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langIt"
                    },
                    "lang_sp": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langSp"
                    },
                    "lang_from_user": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "lang_rus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langRu"
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "Основная информация",
                        "fieldIds": [
                            "firstName",
                            "lastName",
                            "birthday",
                            "city",
                            "id",
                            "Instagram_link",
                            "Facebook_lonk",
                            "about_last_job_bool"
                        ]
                    },
                    "39401609181601788": {
                        "id": "39401609181601788",
                        "title": "Ожидаемый доход",
                        "fieldIds": [
                            "salary_raw"
                        ]
                    },
                    "24571609181681819": {
                        "id": "24571609181681819",
                        "title": "Функции для графика 2/2",
                        "fieldIds": [
                            "22_functions"
                        ],
                        "cond": [
                            {
                                "id": "10781637228072872",
                                "field": "type",
                                "value": "22"
                            }
                        ]
                    },
                    "21061609181696456": {
                        "id": "21061609181696456",
                        "title": "Функции для графика 5/2",
                        "fieldIds": [
                            "52_functions"
                        ],
                        "cond": [
                            {
                                "id": "58551609181799429",
                                "field": "type",
                                "value": "52"
                            }
                        ]
                    },
                    "82661637227887760": {
                        "id": "82661637227887760",
                        "title": "Последнее место работы",
                        "fieldIds": [
                            "about_last_job"
                        ],
                        "display": false,
                        "cond": [
                            {
                                "id": "88691637227953719",
                                "field": "about_last_job_bool",
                                "value": "true"
                            }
                        ]
                    },
                    "27871637227987594": {
                        "id": "27871637227987594",
                        "title": "New section",
                        "fieldIds": [
                            "schedule",
                            "type"
                        ]
                    },
                    "74791637228100031": {
                        "id": "74791637228100031",
                        "title": "New section",
                        "fieldIds": [
                            "lang"
                        ]
                    },
                    "88181637228548417": {
                        "id": "88181637228548417",
                        "title": "английский",
                        "fieldIds": [
                            "lang_en",
                            "lang_id"
                        ],
                        "cond": [
                            {
                                "id": "82981637228575224",
                                "field": "lang",
                                "value": "английский"
                            }
                        ]
                    },
                    "67101637228634133": {
                        "id": "67101637228634133",
                        "title": "испанский",
                        "fieldIds": [
                            "lang_sp"
                        ],
                        "cond": [
                            {
                                "id": "68871637231125355",
                                "field": "lang",
                                "value": "испанский"
                            }
                        ]
                    },
                    "19341637231047628": {
                        "id": "19341637231047628",
                        "title": "немецкий",
                        "fieldIds": [
                            "lang_de"
                        ],
                        "cond": [
                            {
                                "id": "75251637231068811",
                                "field": "lang",
                                "value": "немецкий"
                            }
                        ]
                    },
                    "99191637231132351": {
                        "id": "99191637231132351",
                        "title": "итальянский",
                        "fieldIds": [
                            "lang_it"
                        ],
                        "cond": [
                            {
                                "id": "50761637231198132",
                                "field": "lang",
                                "value": "итальянский"
                            }
                        ]
                    },
                    "17421637231143781": {
                        "id": "17421637231143781",
                        "title": "французский",
                        "fieldIds": [
                            "lang_fr"
                        ],
                        "cond": [
                            {
                                "id": "88991637231153851",
                                "field": "lang",
                                "value": "французский"
                            }
                        ]
                    },
                    "79481637231168015": {
                        "id": "79481637231168015",
                        "title": "китайский",
                        "fieldIds": [
                            "lang_ch"
                        ],
                        "cond": [
                            {
                                "id": "23081637231182473",
                                "field": "lang",
                                "value": "китайский"
                            }
                        ]
                    },
                    "49231637235858050": {
                        "id": "49231637235858050",
                        "title": "другой язык",
                        "fieldIds": [
                            "lang_from_user"
                        ],
                        "cond": [
                            {
                                "id": "97911637235860697",
                                "field": "lang",
                                "value": "другой язык"
                            }
                        ]
                    },
                    "55461637827209784": {
                        "id": "55461637827209784",
                        "title": "New section",
                        "fieldIds": [
                            "lang_rus"
                        ],
                        "cond": [
                            {
                                "id": "79351637827445084",
                                "field": "lang",
                                "value": "русский"
                            }
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "82661637227887760",
                    "27871637227987594",
                    "24571609181681819",
                    "21061609181696456",
                    "39401609181601788",
                    "74791637228100031",
                    "88181637228548417",
                    "67101637228634133",
                    "19341637231047628",
                    "99191637231132351",
                    "17421637231143781",
                    "79481637231168015",
                    "49231637235858050",
                    "55461637827209784"
                ]
            },
            "fields": {
                "22_functions": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "defaultValueOn": false,
                    "description": "Вакансии в шоурумах, магазинах, салонах, фитнес-клубах и ресторанном бизнесе",
                    "quickSearchSL": "function22Displayed",
                    "searchData": [
                        {
                            "key": "b5d6682c-09da-4d8b-86ef-abe3295da502",
                            "value": "Шеф"
                        },
                        {
                            "key": "772fafad-36a7-4ccc-b338-ebb3b670e554",
                            "value": "Официант"
                        },
                        {
                            "key": "ee6cd622-e697-4d59-bca0-d34d4d6fa058",
                            "value": "Хостес"
                        },
                        {
                            "key": "8736e749-48f8-4dfb-ba6d-483d0ce9f350",
                            "value": "Бариста"
                        },
                        {
                            "key": "cf10904f-55e2-4678-8b88-3f01f70b8308",
                            "value": "Повар"
                        },
                        {
                            "key": "d6d250fd-4f29-4b09-a140-9757ac0266aa",
                            "value": "Управляющий"
                        },
                        {
                            "key": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92",
                            "value": "Администратор"
                        },
                        {
                            "key": "58b198e4-6ec9-4cde-87cf-8edf8d88af95",
                            "value": "Продавец-консультант"
                        },
                        {
                            "key": "3a6782d8-5938-4d7c-acc3-00c072db4b71",
                            "value": "Визажист"
                        },
                        {
                            "key": "c127df30-c9ce-4063-9a66-a005d4c9695a",
                            "value": "Мастер маникюра"
                        },
                        {
                            "key": "622fe247-51cb-4295-a8b4-eaf189dd807d",
                            "value": "Косметолог"
                        },
                        {
                            "key": "d91564fe-70ce-406a-8119-cbbe2deef5a4",
                            "value": "Фитнес-тренер"
                        },
                        {
                            "key": "9b643b1a-5e5d-45c2-9bfa-847fca9201c0",
                            "value": "Стилист"
                        },
                        {
                            "key": "9153c4b7-e930-48ed-92e8-da4abbf63d3f",
                            "value": "Бровист"
                        },
                        {
                            "key": "bd30b2d4-5c78-4619-8a3d-d8d7846b9ff3",
                            "value": "Массаж"
                        },
                        {
                            "key": "b6b7ec50-543f-43a9-9b6e-47c7859de0a9",
                            "value": "Кондитер"
                        },
                        {
                            "key": "1b4c64cd-a6b6-4039-ad51-dd96bddc4c19",
                            "value": "Бармен"
                        },
                        {
                            "key": "819710b2-4402-4dba-9d84-3508670a5aa4",
                            "value": "Лашмейкер"
                        },
                        {
                            "key": "cca21f9d-7265-4faf-848c-5cce731d806f",
                            "value": "Мерчендайзер"
                        },
                        {
                            "key": "3d557adf-d332-4741-afaf-8538bdca86a4",
                            "value": "Остеопат"
                        },
                        {
                            "key": "fbbb2666-e00e-47f3-8235-0a5f59eadc8c",
                            "value": "Менеджер интернет-магазина"
                        },
                        {
                            "key": "9e071824-e8b4-4fb8-82a4-7567ecd6876a",
                            "value": "Флорист"
                        },
                        {
                            "key": "6db6c43a-0b91-4dd6-a872-19afe943f23f",
                            "value": "Кондитер"
                        },
                        {
                            "key": "86ec0c01-83b7-47d9-b346-99c90a33037d",
                            "value": "Пекарь"
                        },
                        {
                            "key": "d4dbbd3d-2351-4019-aba1-b82890fd8b26",
                            "value": "Менеджер шоурума"
                        },
                        {
                            "key": "45d41e97-bb33-4776-9c6c-901bbc341bf0",
                            "value": "Оператор заказов"
                        },
                        {
                            "key": "70d1cea8-f027-43d3-b225-a4b33b36fccd",
                            "value": "Заготовщик"
                        },
                        {
                            "key": "166d6234-0a64-4f17-b88e-43e28495a951",
                            "value": "Курьер"
                        },
                        {
                            "key": "009d679a-11c2-44fe-9665-cf5b2125deb1",
                            "value": "Онлайн-консультант"
                        },
                        {
                            "key": "f6943029-4c27-4f80-a07c-6f7e6d3ced4e",
                            "value": "Ассистент"
                        },
                        {
                            "key": "c5474ed3-c7f6-440f-a48b-05f1782807da",
                            "value": "Су-шеф"
                        },
                        {
                            "key": "443ae3b7-b2e0-4fa4-a1fb-52f265f2918f",
                            "value": "Сомелье"
                        }
                    ]
                },
                "52_functions": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "Вакансии в креативе, бизнесе и стажировки",
                    "searchData": [
                        {
                            "key": "14746650-98aa-44d7-8989-472c8162dba8",
                            "value": "Контент"
                        },
                        {
                            "key": "5c696884-c6e8-4608-a928-06ca86d28f52",
                            "value": "SMM"
                        },
                        {
                            "key": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1",
                            "value": "PR"
                        },
                        {
                            "key": "605143a0-bb72-49ec-a7c2-16d6a84baa6b",
                            "value": "Копирайтинг"
                        },
                        {
                            "key": "565e74f1-6a97-491b-a97b-7578d26f9b0e",
                            "value": "Редактор"
                        },
                        {
                            "key": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c",
                            "value": "Фотограф"
                        },
                        {
                            "key": "b0458bef-2b44-42a7-a27f-69f4043eb19a",
                            "value": " Таргетинг"
                        },
                        {
                            "key": "02b3892a-9ca7-40e3-bb79-2a4682fe445c",
                            "value": "Графический дизайн"
                        },
                        {
                            "key": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64",
                            "value": "HR"
                        },
                        {
                            "key": "aaa68f68-4196-4561-b4ca-6957ee1f5271",
                            "value": "Видеограф"
                        },
                        {
                            "key": "f357eb22-9b97-4889-ae7b-1359a837626e",
                            "value": "Fashion-дизайнер"
                        },
                        {
                            "key": "d8a43cf3-5903-4073-95e3-d7f400ff28cc",
                            "value": "Баер"
                        },
                        {
                            "key": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a",
                            "value": "Бренд менеджер"
                        },
                        {
                            "key": "57816d4e-5d1a-4240-8eda-0041ccdc3d55",
                            "value": "IT"
                        },
                        {
                            "key": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095",
                            "value": "Стилист"
                        },
                        {
                            "key": "fdd5dd01-1867-4f2d-a579-4032bc691551",
                            "value": "UI/UX дизайн"
                        },
                        {
                            "key": "69cf9997-fd45-442e-8590-74815535e949",
                            "value": "Продюсер"
                        },
                        {
                            "key": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7",
                            "value": "Маркетинг"
                        },
                        {
                            "key": "42793449-612e-4a86-b519-e59c8c4d0f7b",
                            "value": "Art-директор"
                        },
                        {
                            "key": "9d328ba3-59c4-43f8-809d-068d86dada3c",
                            "value": "Стажер "
                        },
                        {
                            "key": "e3673d9f-84cc-4e92-bdae-5bd81ad3fefc",
                            "value": "Менеджер проектов"
                        },
                        {
                            "key": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2",
                            "value": "Личный помощник"
                        },
                        {
                            "key": "805e95ec-380a-4822-ad5f-bddbd2b0f695",
                            "value": "Motion-дизайнер"
                        },
                        {
                            "key": "dca9b4e9-c48c-4626-80bd-c8efc04d3c5b",
                            "value": "Продакт менеджер "
                        },
                        {
                            "key": "5379db04-9d22-4ee2-963d-4244435c4c08",
                            "value": "Пошив"
                        },
                        {
                            "key": "f51b17ea-ace5-487a-a043-3259040495e3",
                            "value": "Производство"
                        },
                        {
                            "key": "635b333a-33e8-4b59-91bd-ed54f0508235",
                            "value": "Бухгалтер"
                        },
                        {
                            "key": "2b5a280e-052e-430a-a5bd-0f340d6f9298",
                            "value": "Ретушер"
                        },
                        {
                            "key": "c68109f6-1b68-4f09-ac34-67a8390ea2dd",
                            "value": "Account "
                        },
                        {
                            "key": "00ad0a1c-5600-458e-8b2b-7e12b9e6588d",
                            "value": "Sale менеджер"
                        },
                        {
                            "key": "56890dd6-b40c-4293-83b9-bc0ad4e4cf6f",
                            "value": "Дизайн"
                        },
                        {
                            "key": "8bc295b5-4239-4bd2-a21d-3f305f6e210b",
                            "value": "Ювелир"
                        },
                        {
                            "key": "de84414a-0886-41c4-bc51-1321abf1f722",
                            "value": "Администратор"
                        },
                        {
                            "key": "286b253f-f862-49a5-bdca-2301edc2a679",
                            "value": "Event"
                        },
                        {
                            "key": "d7d77bb4-7414-456a-9bef-843bd3e3d800",
                            "value": "Интернет-магазин"
                        },
                        {
                            "key": "a879abc4-6a98-436c-8042-40010a0c62d7",
                            "value": "Заместитель директора "
                        },
                        {
                            "key": "73b56a2a-78fe-447e-a9d4-8a574b9e9359",
                            "value": "Ассистент"
                        },
                        {
                            "key": "eccbdeb2-465b-423b-a1a4-753f80061e5d",
                            "value": "Рекрутер"
                        },
                        {
                            "key": "71474bd7-a847-45e2-a4e9-fa24dd3c4214",
                            "value": "Менеджер по персоналу "
                        },
                        {
                            "key": "df34e35c-e896-4a08-830d-57a2371f053c",
                            "value": "CRM"
                        },
                        {
                            "key": "35c05b79-a66b-4fad-b330-b0ab7f56a224",
                            "value": "Шеф"
                        },
                        {
                            "key": "8dda2828-3c80-4004-8793-64fd8009000e",
                            "value": "Повар"
                        },
                        {
                            "key": "af45d23d-e18a-402a-8fbc-82e3b5389057",
                            "value": "Заготовщик"
                        },
                        {
                            "key": "a6780878-7f4d-4e16-8a96-32a49da4b262",
                            "value": "Тренинги"
                        },
                        {
                            "key": "8889e6da-417a-48bd-9acb-46391c47d886",
                            "value": "Документооборот"
                        },
                        {
                            "key": "fa8284b2-40fd-4c45-bad9-94bd71eb53d5",
                            "value": "Управляющий"
                        },
                        {
                            "key": "64543439-15f7-41f1-abaa-ef71d2094c4e",
                            "value": "Менеджер по работе с клиентами"
                        },
                        {
                            "key": "a59110ed-077c-426f-99e1-09d3b0d11ef3",
                            "value": "Креатор"
                        },
                        {
                            "key": "f483faf7-ac03-4579-970c-54be779c83c0",
                            "value": "Креативный дизайнер"
                        },
                        {
                            "key": "a9425703-94df-4f66-926f-093f37827bf5",
                            "value": "Менеджер по продажам"
                        },
                        {
                            "key": "f2c6e85c-3b80-4d93-9968-907dd86031fb",
                            "value": "Креативный директор"
                        },
                        {
                            "key": "766febe7-0ad0-4750-892f-f39e7f1b28db",
                            "value": "Директор магазина"
                        }
                    ]
                },
                "city": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "defaultValue": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                    "required": true,
                    "searchData": [
                        {
                            "key": "5f07b0e5-cdeb-4b6d-bd7d-1b5aa25d597b",
                            "value": "Астрахань"
                        },
                        {
                            "key": "efd0190e-1a19-40a7-9d00-b695b60e7b18",
                            "value": "Новосибирск"
                        },
                        {
                            "key": "71a52f70-4701-476f-a9eb-065ed0ce34c0",
                            "value": "Тюмень"
                        },
                        {
                            "key": "cf89852c-0979-4dc2-a688-9f5f40e5f7b1",
                            "value": "Иркутск"
                        },
                        {
                            "key": "9f937f4d-fff3-4e95-9833-05edba95e9fb",
                            "value": "Киров"
                        },
                        {
                            "key": "2985fa84-8a83-4cfe-8ac8-086b46480e1b",
                            "value": "Уфа"
                        },
                        {
                            "key": "c272e7cd-d3c1-41a6-8ef3-731c1b6d3b0b",
                            "value": "Тольятти"
                        },
                        {
                            "key": "fa3a51d6-2784-48aa-acb6-58a4934260cb",
                            "value": "Нижний Новгород"
                        },
                        {
                            "key": "e32a86b6-07a0-4ee6-b380-6b51a72f4937",
                            "value": "Пенза"
                        },
                        {
                            "key": "fa8828c2-03ab-4a44-9301-407331a645bc",
                            "value": "Томск"
                        },
                        {
                            "key": "155a6363-9fb5-4d1c-b033-774825f25f1d",
                            "value": "Калининград"
                        },
                        {
                            "key": "a537ad97-3d9a-4247-ab7c-c5fd09e323d4",
                            "value": "Пятигорск"
                        },
                        {
                            "key": "419030a9-a9dc-4a41-a633-a23dbbb65116",
                            "value": "Норильск"
                        },
                        {
                            "key": "141bf2ba-a924-4d61-8f4a-abe19dd79b5f",
                            "value": "Арзамас"
                        },
                        {
                            "key": "beed9e2a-51f1-447b-973a-c369bf297e19",
                            "value": "Сыктывкар"
                        },
                        {
                            "key": "8ab91dfb-83c1-44fb-af26-7487894a1569",
                            "value": "Нижнекамск"
                        },
                        {
                            "key": "a0ec46a3-44de-4a4a-a0dc-126b0c4afbf5",
                            "value": "Балашиха"
                        },
                        {
                            "key": "4f04826b-a0f7-4abd-8261-e81b5f869b69",
                            "value": "Санкт-Петербург"
                        },
                        {
                            "key": "fff854f9-473f-46d8-afd2-318abd771a04",
                            "value": "Воронеж"
                        },
                        {
                            "key": "b7ca406f-71d8-4125-b22b-1c4b3b5b3873",
                            "value": "Междуреченск"
                        },
                        {
                            "key": "f6c16e58-b736-4fb3-b1f4-bf988f2b7fc2",
                            "value": "Северодвинск"
                        },
                        {
                            "key": "8d8ee02c-05ca-4f16-b118-405f0a4a2028",
                            "value": "Магнитогорск"
                        },
                        {
                            "key": "15d359fc-e894-4f19-8279-0195fa45b8f3",
                            "value": "Улан-Удэ"
                        },
                        {
                            "key": "35926902-ce08-4620-b791-a957b8e030bf",
                            "value": "Ульяновск"
                        },
                        {
                            "key": "3625e59b-92be-4931-be3b-1657b1f1eab4",
                            "value": "Великий Новгород"
                        },
                        {
                            "key": "f5df55f5-7f2a-4d85-b9c3-c88b89fdf8b6",
                            "value": "Химки"
                        },
                        {
                            "key": "64dfbbca-a11f-4ca5-a9fa-4fbb6b2d868c",
                            "value": "Батайск"
                        },
                        {
                            "key": "42af9a7c-b7ea-4079-91a5-65b408ddc2de",
                            "value": "Тула"
                        },
                        {
                            "key": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                            "value": "Москва"
                        },
                        {
                            "key": "c8c7d6d0-4fc6-41dd-a799-a8ad91e86fe7",
                            "value": "Казань"
                        },
                        {
                            "key": "387c5608-bfe7-48a9-808e-1f394fd46228",
                            "value": "Уссурийск"
                        },
                        {
                            "key": "5347ab07-6807-496e-932b-4db13ec17ac3",
                            "value": "Вологда"
                        },
                        {
                            "key": "aa11ad14-a9f4-42ee-acad-06047ebdf17a",
                            "value": "Саранск"
                        },
                        {
                            "key": "e55baa9d-693a-4b17-8dd5-492d67a9bc69",
                            "value": "Рыбинск"
                        },
                        {
                            "key": "c7e0c655-930b-455a-b21e-09b823ec6ba8",
                            "value": "Ноябрьск"
                        },
                        {
                            "key": "6a9fc335-cbc3-4f44-addf-8c8ca81ac238",
                            "value": "Находка"
                        },
                        {
                            "key": "e37beb72-222e-4cdf-acd2-f36100784e15",
                            "value": "Волжский"
                        },
                        {
                            "key": "e980a012-b87e-46fa-98b9-bc62c29f432f",
                            "value": "Ижевск"
                        },
                        {
                            "key": "d317eccc-2c59-4443-adda-5dcb267453a0",
                            "value": "Красноярск"
                        },
                        {
                            "key": "2fda8d82-7c06-46f8-bc25-6df163a7b554",
                            "value": "Волгоград"
                        },
                        {
                            "key": "dbe428b0-33d4-451d-ba51-82d8bcd0d6d4",
                            "value": "Нефтеюганск"
                        },
                        {
                            "key": "ecb2b6a4-dd90-4d7a-9873-97f2417042cc",
                            "value": "Пушкино"
                        },
                        {
                            "key": "20a74ee5-5cd4-45b1-a243-aa7db323a0c2",
                            "value": "Тамбов"
                        },
                        {
                            "key": "14aca2a9-a7c1-4b94-baa3-011851f8c2f1",
                            "value": "Новочеркасск"
                        },
                        {
                            "key": "dfc75bdc-ac4d-41b6-bdad-220ea284a00e",
                            "value": "Ярославль"
                        },
                        {
                            "key": "d7b0a7a9-71ca-484f-9a43-5629d9226850",
                            "value": "Северск"
                        },
                        {
                            "key": "b2a7a390-a8cd-46e3-b2b0-219bd356343f",
                            "value": "Новомосковск"
                        },
                        {
                            "key": "a4d031ad-645c-4c5c-86f9-2a85819dc283",
                            "value": "Мытищи"
                        },
                        {
                            "key": "8b9c8a1d-8429-43a6-acc3-b4d2fd2ddf80",
                            "value": "Люберцы"
                        },
                        {
                            "key": "1d0dc234-a8d0-4d14-93a4-42f8beb6e474",
                            "value": "Саратов"
                        },
                        {
                            "key": "a92b6c0a-cabe-4a03-b1b8-808dc039869f",
                            "value": "Липецк "
                        },
                        {
                            "key": "db96b2ff-efb5-48e3-a079-1449024642ea",
                            "value": "Ставрополь"
                        },
                        {
                            "key": "87413717-a238-4c2b-b8b8-b9ebbbd13d88",
                            "value": "Златоуст"
                        },
                        {
                            "key": "ab697bbb-564b-47f3-aa26-2b963422aa45",
                            "value": "Березники"
                        },
                        {
                            "key": "51f7889b-2afd-49e9-b9fe-fdc3d43bb4cb",
                            "value": "Комсомольск-на-Амуре"
                        },
                        {
                            "key": "34b49b0b-f99d-4e79-a433-1a6612d712c5",
                            "value": "Октябрьский"
                        },
                        {
                            "key": "ee7c7efc-2577-4efa-9675-f2bf3b4e3ba1",
                            "value": "Оренбург"
                        },
                        {
                            "key": "a0734bbe-965e-4be4-bf3e-0058587fb0d1",
                            "value": "Чебоксары"
                        },
                        {
                            "key": "6cb5b487-5cb7-4bf4-a197-c1fb7fd141ad",
                            "value": "Курск"
                        },
                        {
                            "key": "e0e43003-5d03-4ed2-812f-13f29d79c5e6",
                            "value": "Рязань"
                        },
                        {
                            "key": "1b8475ce-5637-486c-8902-8e763c05053c",
                            "value": "Набережные Челны"
                        },
                        {
                            "key": "293bb3e2-22b7-4dbd-9d18-1fa7e5321b48",
                            "value": "Иваново"
                        },
                        {
                            "key": "6451bc49-0213-416c-a656-119d4b52b63b",
                            "value": "Армавир"
                        },
                        {
                            "key": "18686d6b-3c73-4e03-9329-2f4c46e0c430",
                            "value": "Рубцовск"
                        },
                        {
                            "key": "81dce290-2cff-406c-bc0d-3914be9534c1",
                            "value": "Артем"
                        },
                        {
                            "key": "a952104f-36d4-4ed0-9ebb-a52b3135c8a8",
                            "value": "Шахты"
                        },
                        {
                            "key": "a20d2a73-9aa6-4353-8aad-e0556648dbea",
                            "value": "Каспийск"
                        },
                        {
                            "key": "0430d3db-b2b6-4745-a6b7-7aa3d1e2cd00",
                            "value": "Новороссийск"
                        },
                        {
                            "key": "923858f8-28a2-4ff8-8c3c-fc96aa7081c7",
                            "value": "Коломна"
                        },
                        {
                            "key": "2c7b72c2-c88d-4478-8a87-9f1c442b6dd4",
                            "value": "Камышин"
                        },
                        {
                            "key": "312c47b1-855c-462f-bcbc-92616220e080",
                            "value": "Стерлитамак"
                        },
                        {
                            "key": "59dc4c08-4a5b-4a21-bede-5772eae25d69",
                            "value": "Ессентуки "
                        },
                        {
                            "key": "c0f6e5fe-15e7-469a-9dcc-6740e29585ac",
                            "value": "Якутск"
                        },
                        {
                            "key": "6483da5c-3d7d-4e62-a5b7-c259f5b11f0f",
                            "value": "Орел"
                        },
                        {
                            "key": "6aa99a15-e1d3-4318-9f63-2a07b63690e1",
                            "value": "Подольск"
                        },
                        {
                            "key": "9e5fb78a-03c1-4016-a7f3-8341c0cbfcf6",
                            "value": "Краснодар"
                        },
                        {
                            "key": "68bcde48-bffe-4d82-aab2-c04dd3393e89",
                            "value": "Омск"
                        },
                        {
                            "key": "ff68b6d3-8478-4520-8a59-897b992f5f87",
                            "value": "Нижний Тагил"
                        },
                        {
                            "key": "0385a585-a0bf-4c62-835d-5c2343341ac4",
                            "value": "Белгород"
                        },
                        {
                            "key": "5c236ec0-8f7a-4fa5-8e48-24d21f1ea39e",
                            "value": "Чита"
                        },
                        {
                            "key": "8cb8d65f-0e5b-4af3-a41f-db90ca5a9647",
                            "value": "Грозный"
                        },
                        {
                            "key": "1dca24bc-dcbe-49a2-9392-1cbf0cd6a729",
                            "value": "Ангарск"
                        },
                        {
                            "key": "5f4e2ed6-c77c-4ce3-bc36-5e639a4a975b",
                            "value": "Новокузнецк"
                        },
                        {
                            "key": "a5e850fa-0ce2-4f5f-a276-de5c731626ff",
                            "value": "Барнаул"
                        },
                        {
                            "key": "405608e6-a8d2-44c3-b371-87ac6762741a",
                            "value": "Владивосток"
                        },
                        {
                            "key": "7a211c47-1b4a-42b2-97ee-4c690ae147fd",
                            "value": "Самара"
                        },
                        {
                            "key": "49e45256-e242-41a6-b7ba-ea5c597dc67d",
                            "value": "Кисловодск"
                        },
                        {
                            "key": "11edc61d-a00f-4ec8-b88e-d35b4eca2a19",
                            "value": "Обнинск"
                        },
                        {
                            "key": "183be710-49ea-42b1-bfcb-8391188d1864",
                            "value": "Волгодонск"
                        },
                        {
                            "key": "411c9c4a-6590-4f12-9340-b268d1bade7b",
                            "value": "Екатеринбург"
                        },
                        {
                            "key": "ee69e04b-bb3b-4835-a8c9-2a2fa47c9c1a",
                            "value": "Кемерово"
                        },
                        {
                            "key": "4df6ed07-84ce-4324-a75c-b80b4138b8fa",
                            "value": "Сургут"
                        },
                        {
                            "key": "573d8f7f-2227-4a4e-801b-f77e04a532db",
                            "value": "Дзержинск"
                        },
                        {
                            "key": "b37f7d2f-78fa-48ff-8915-0ce7fcd6e220",
                            "value": "Серпухов"
                        },
                        {
                            "key": "e2591b96-b2ba-4ce8-8c63-9477481effb5",
                            "value": "Тверь"
                        },
                        {
                            "key": "a6b631d7-1456-421a-a8b7-a8880a9d3383",
                            "value": "Челябинск"
                        },
                        {
                            "key": "d1bfc6ed-4a83-4f0a-a553-45a3152a03ff",
                            "value": "Ростов-на-Дону"
                        },
                        {
                            "key": "296ceb44-e414-4026-8037-303680b519af",
                            "value": "Кызыл"
                        },
                        {
                            "key": "796783ae-c833-4dbf-91b2-3e31682ac3ba",
                            "value": "Ковров"
                        },
                        {
                            "key": "88c9dcaa-3f67-4ac7-b852-d4843abd2e0f",
                            "value": "Нефтекамск"
                        },
                        {
                            "key": "2a58d436-70b0-4707-b52e-21c4a91f1ddd",
                            "value": "Хабаровск"
                        },
                        {
                            "key": "fa5befd0-2901-433a-8605-ab4a9e6727cc",
                            "value": "Благовещенск"
                        },
                        {
                            "key": "766bf994-acfb-449b-a637-8ed86a83d4b9",
                            "value": "Абакан"
                        },
                        {
                            "key": "886de159-f52c-4e0f-8fbf-c290e42b8880",
                            "value": "Махачкала"
                        },
                        {
                            "key": "aeeffdac-8680-4de7-a6b9-fbeee9732752",
                            "value": "Брянск"
                        },
                        {
                            "key": "a8b3fdc6-32ca-4210-adee-f779417c6bb6",
                            "value": "Пермь"
                        },
                        {
                            "key": "962b61df-8781-4eec-9943-901c7d411592",
                            "value": "Хасавюрт"
                        },
                        {
                            "key": "d32dbef5-8cff-4874-828b-af6db8aa9846",
                            "value": "Новочебоксарск"
                        },
                        {
                            "key": "f35e0627-33b3-495d-b12b-86a2c9cf5afe",
                            "value": "Димитровград"
                        },
                        {
                            "key": "52b6844a-669d-470a-b3bd-617a8cf18e89",
                            "value": "Первоуральск"
                        },
                        {
                            "key": "59746661-04a6-431f-913c-7100ae693e45",
                            "value": "Салават"
                        },
                        {
                            "key": "07aadf04-2e21-4311-9466-512a18a4afd9",
                            "value": "Щелково"
                        },
                        {
                            "key": "6237f1fb-f593-42ef-bd41-180e83381e30",
                            "value": "Новокуйбышевск"
                        },
                        {
                            "key": "8e3e81bd-5999-4e15-a87b-df3c869c7454",
                            "value": "Петропавловск-Камчатский"
                        },
                        {
                            "key": "fbe1bea9-9ba3-42c3-a708-4e29e2601dbb",
                            "value": "Братск"
                        },
                        {
                            "key": "1653dbff-d223-4dee-8045-dada8685e366",
                            "value": "Альметьевск"
                        },
                        {
                            "key": "25c415a2-29a6-49cb-a9f0-0daaf112175e",
                            "value": "Йошкар-Ола"
                        },
                        {
                            "key": "0b8a1695-8a68-4491-88f1-562ecbbbeab6",
                            "value": "Новый Уренгой"
                        },
                        {
                            "key": "2d0da3cb-1d1c-490e-b67b-70b9f78f8d2f",
                            "value": "Воткинск"
                        },
                        {
                            "key": "e70f3e35-6f6e-4b45-8861-17716a2a3927",
                            "value": "Курган"
                        },
                        {
                            "key": "7a70eb26-b75a-4ce1-bd40-776742689221",
                            "value": "Дербент"
                        },
                        {
                            "key": "ccf4061b-b791-4bd6-925c-245c6257485f",
                            "value": "Невинномысск"
                        },
                        {
                            "key": "cf53a24a-3a9d-4192-acd4-c5829dec337b",
                            "value": "Орск"
                        },
                        {
                            "key": "42790cbf-02d7-4585-b274-117e6ccb0c60",
                            "value": "Сарапул"
                        },
                        {
                            "key": "6d4d13b3-f0b9-40f0-8b88-0c2c76cd8a9e",
                            "value": "Новошахтинск"
                        },
                        {
                            "key": "6b171a2c-af75-46bc-9429-79ec29b54a1d",
                            "value": "Балаково"
                        },
                        {
                            "key": "21bf7b64-5b43-4c95-ba7b-0c678e73b9f6",
                            "value": "Смоленск"
                        },
                        {
                            "key": "0bae7c17-0e1f-40f6-b27c-47458c2c81d8",
                            "value": "Сергиев Посад"
                        },
                        {
                            "key": "b9ac35fb-ef27-4d4b-9fcd-3a806c871ed4",
                            "value": "Бийск"
                        },
                        {
                            "key": "b4a5efd6-0013-4f47-9f5b-709070821c61",
                            "value": "Ачинск"
                        },
                        {
                            "key": "3a132be6-eb78-468e-bfc4-d0d369ff2ff6",
                            "value": "Старый Оскол"
                        },
                        {
                            "key": "1e7dd1af-6fce-4e04-8dcd-bdceaef37f8e",
                            "value": "Владикавказ"
                        },
                        {
                            "key": "9b5e8b83-d806-4855-ae3d-3b5d7f425536",
                            "value": "Кострома"
                        },
                        {
                            "key": "e31eed11-c387-4dbe-882d-dbd624eeaba3",
                            "value": "Жуковский"
                        },
                        {
                            "key": "8176f813-1930-4a5d-a67d-e7a60beb14cc",
                            "value": "Миасс"
                        },
                        {
                            "key": "e7041943-68b2-4a50-b760-5e15ca6a3603",
                            "value": "Ленинск-Кузнецкий"
                        },
                        {
                            "key": "a81cace3-0ae3-4c48-9346-ebd67f740e2b",
                            "value": "Елец"
                        },
                        {
                            "key": "704f3ef5-a27b-4988-baca-f6e002e9a164",
                            "value": "Красногорск"
                        },
                        {
                            "key": "aa1b9dfe-9b26-4a88-84db-212f35dcc7e1",
                            "value": "Владимир"
                        },
                        {
                            "key": "991e734f-a888-4340-ae4c-d5bd32273188",
                            "value": "Архангельск"
                        },
                        {
                            "key": "944b7750-cdfb-43b9-a2cc-9dd94ca49f15",
                            "value": "Сочи"
                        },
                        {
                            "key": "60911776-c88f-48bb-b619-06a61c8ffd05",
                            "value": "Мурманск"
                        },
                        {
                            "key": "e1e8063c-23d1-432e-8e57-5d618410b3b7",
                            "value": "Прокопьевск"
                        },
                        {
                            "key": "1fa0dda4-186d-4192-8a3f-923c7944d95d",
                            "value": "Южно-Сахалинск"
                        },
                        {
                            "key": "900710e0-c8ed-4e3c-961c-32261fb1c6ed",
                            "value": "Черкесск"
                        },
                        {
                            "key": "673f8960-e484-4b9e-83e3-989ff7759e7b",
                            "value": "Петрозаводск"
                        },
                        {
                            "key": "other",
                            "value": "Другой город / за пределами РФ"
                        },
                        {
                            "key": "1dfaa028-6c8b-4bd7-9ce9-b9462848e7b2",
                            "value": "Каменск-Уральский"
                        },
                        {
                            "key": "75bf8bc5-b1ec-454e-973d-368253b4ca46",
                            "value": "Элиста"
                        },
                        {
                            "key": "beda39e1-253f-44d5-a4b8-c717433a7511",
                            "value": "Железнодорожный"
                        },
                        {
                            "key": "52a85978-37eb-4b02-b0d9-eb857686469c",
                            "value": "Орехово-Зуево"
                        },
                        {
                            "key": "01046d0e-326a-4289-85d8-208625de89e4",
                            "value": "Копейск"
                        },
                        {
                            "key": "2b70ca02-bdad-4d84-864d-909c0a3e8b2c",
                            "value": "Нижневартовск"
                        },
                        {
                            "key": "fe4548ac-431f-4b11-84f7-b84d884f2bd3",
                            "value": "Электросталь"
                        },
                        {
                            "key": "adcb3d0d-ca62-4f35-a892-4e7c71be563f",
                            "value": "Одинцово"
                        },
                        {
                            "key": "44cf953a-3673-41a2-a763-382e1e6c95ed",
                            "value": "Псков"
                        },
                        {
                            "key": "05ae4d4b-2ff2-4cfc-92ff-1153ea27fd7f",
                            "value": "Калуга"
                        },
                        {
                            "key": "da4f760e-f3db-44dd-93d8-5a42873062b9",
                            "value": "Энгельс "
                        },
                        {
                            "key": "1ad5cced-44c5-456e-9f83-2099fc678dfd",
                            "value": "Королев"
                        },
                        {
                            "key": "729165b3-1352-450c-a7c8-aca6f89eafeb",
                            "value": "Сызрань"
                        },
                        {
                            "key": "51f0a82c-49af-4ea7-b1ea-c1e99099923c",
                            "value": "Майкоп"
                        },
                        {
                            "key": "ccf34bd4-1720-49f8-8d98-a11d4ab6c629",
                            "value": "Таганрог"
                        },
                        {
                            "key": "33599e07-6e48-490a-b918-360d51d307fb",
                            "value": "Нальчик"
                        },
                        {
                            "key": "191bc69a-cd30-4456-8e11-59dd98476e2b",
                            "value": "Череповец"
                        },
                        {
                            "key": "f0ffa934-f809-4d28-a9d0-c6276c148189",
                            "value": "Муром"
                        },
                        {
                            "key": "c084b3f3-572e-4fe5-b263-a17f7ce86fa6",
                            "value": "Киев (Украина)"
                        },
                        {
                            "key": "52d76ee4-de85-46ed-b69b-e4f4cde5086e",
                            "value": "Одесса (Украина)"
                        },
                        {
                            "key": "102ddf64-14fa-43c1-9c85-1d2b821ac61d",
                            "value": "Минск (Белоруссия)"
                        }
                    ]
                },
                "firstName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "lastName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "salary_raw": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": {
                        "secondValue": 100,
                        "firstValue": 50
                    },
                    "descriptionFlag": true,
                    "description": "Доход в месяц, тыс.  ₽"
                },
                "type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "defaultValueOn": false,
                    "defaultValue": "22",
                    "searchData": [
                        {
                            "key": "22",
                            "value": "22 — сфера услуг, сменный график"
                        },
                        {
                            "key": "52",
                            "value": "52 — офисная работа и креатив"
                        }
                    ]
                },
                "Facebook_lonk": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "опционально"
                },
                "Instagram_link": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "опционально"
                },
                "lang_id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langEng",
                    "searchData": [
                        {
                            "key": "9fda1508-67fd-4180-909e-b71c0cd6d98e",
                            "value": "английский элементарный"
                        },
                        {
                            "key": "11f60df4-8ba5-42b8-bccb-8b010117fa0f",
                            "value": "английский средний"
                        },
                        {
                            "key": "8c848610-2249-4f5f-807f-ee9747bb4b60",
                            "value": "английский свободный"
                        }
                    ]
                },
                "about_last_job": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "Опишите последнее место работы: должность, название компании, продолжительность"
                },
                "schedule": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "36e396ce-bbfe-47aa-9d62-61190ac6658e",
                            "value": "полная"
                        },
                        {
                            "key": "437e0e02-fcfa-405d-a491-798e5436682f",
                            "value": "частичная"
                        },
                        {
                            "key": "feae4430-7c4d-4423-a90e-dad92e287799",
                            "value": "неважно"
                        }
                    ]
                },
                "about_last_job_bool": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "birthday": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "hidden": false
                },
                "lang": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "английский",
                            "value": "английский"
                        },
                        {
                            "key": "немецкий",
                            "value": "немецкий"
                        },
                        {
                            "key": "французский",
                            "value": "французский"
                        },
                        {
                            "key": "итальянский",
                            "value": "итальянский"
                        },
                        {
                            "key": "испанский",
                            "value": "испанский"
                        },
                        {
                            "key": "китайский",
                            "value": "китайский"
                        },
                        {
                            "key": "другой язык",
                            "value": "другой язык"
                        },
                        {
                            "key": "русский",
                            "value": "русский"
                        }
                    ]
                },
                "lang_ch": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langCh",
                    "searchData": [
                        {
                            "key": "262fffaa-0baf-4382-a217-d283bb63358b",
                            "value": "китайский элементарный"
                        },
                        {
                            "key": "85022754-2101-4cb0-933a-86e20ae680f9",
                            "value": "китайский средний"
                        },
                        {
                            "key": "453fa484-da51-45cf-9811-3f79690ec2a5",
                            "value": "китайский свободный"
                        }
                    ]
                },
                "lang_de": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langDe",
                    "searchData": [
                        {
                            "key": "699c74d1-3760-4ff6-aada-bf65e0d7976a",
                            "value": "немецкий элементарный"
                        },
                        {
                            "key": "5500ae7e-903f-42c1-bcec-1cadd270d37a",
                            "value": "немецкий средний"
                        },
                        {
                            "key": "c76d6a02-f13b-4340-ba9d-aa758ea4387d",
                            "value": "немецкий свободный"
                        }
                    ]
                },
                "lang_en": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langEng",
                    "searchData": [
                        {
                            "key": "9fda1508-67fd-4180-909e-b71c0cd6d98e",
                            "value": "английский элементарный"
                        },
                        {
                            "key": "11f60df4-8ba5-42b8-bccb-8b010117fa0f",
                            "value": "английский средний"
                        },
                        {
                            "key": "8c848610-2249-4f5f-807f-ee9747bb4b60",
                            "value": "английский свободный"
                        }
                    ]
                },
                "lang_fr": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langFr",
                    "searchData": [
                        {
                            "key": "afd7708a-4e3d-4179-9424-24604f87a122",
                            "value": "французский элементарный"
                        },
                        {
                            "key": "8e327644-4445-43dd-b778-7f7f4a764e09",
                            "value": "французский средний"
                        },
                        {
                            "key": "b0e8bb65-12e9-4da4-848f-73c41dd1e341",
                            "value": "французский свободный"
                        }
                    ]
                },
                "lang_it": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langIt",
                    "searchData": [
                        {
                            "key": "d85b2875-9b12-4da0-bc1e-9f889fce06a9",
                            "value": "итальянский элементарный"
                        },
                        {
                            "key": "29246deb-d25f-497a-a784-40594158c7e7",
                            "value": "итальянский средний"
                        },
                        {
                            "key": "a0d4f989-fb32-43fa-86ba-50b8f615448f",
                            "value": "итальянский свободный"
                        }
                    ]
                },
                "lang_sp": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langSp",
                    "searchData": [
                        {
                            "key": "44a1f588-6353-4bdf-bfac-98d977e05115",
                            "value": "испанский элементарный"
                        },
                        {
                            "key": "9441a282-8173-4149-9c3e-d992c950d13d",
                            "value": "испанский средний"
                        },
                        {
                            "key": "a2f3c7d7-93b6-4132-8f5e-5282c08ac296",
                            "value": "испанский свободный"
                        }
                    ]
                },
                "lang_from_user": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "lang_rus": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langRu",
                    "searchData": [
                        {
                            "key": "bcfb4cb9-925f-41cd-8959-6a6bb42cc203",
                            "value": "русский элементарный"
                        },
                        {
                            "key": "23e0d273-9429-47ce-bcd1-8cd131885a8c",
                            "value": "русский средний"
                        },
                        {
                            "key": "4f7a7564-4b07-4f25-ba30-a030319a32c9",
                            "value": "русский свободный"
                        }
                    ]
                }
            },
            "useEditing": true,
            "edit": true
        },
        "fileds": [
            {
                "sysName": "22_functions",
                "dataType": "arrayLink",
                "name": "Функции для категории 22",
                "id": "34391607077096514",
                "link": "functions22",
                "group": "1607016878115",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 6,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "52_functions",
                "dataType": "arrayLink",
                "name": "Функции для категории 52",
                "id": "22101607077116998",
                "link": "functions52",
                "group": "1607016878115",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 5,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "Facebook_lonk",
                "dataType": "string",
                "name": "Facebook",
                "id": "64931609825374119",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 9,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "Instagram_link",
                "dataType": "string",
                "name": "Instagram",
                "id": "91391609825359387",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "about_last_job",
                "dataType": "string",
                "name": "Последнее место работы",
                "id": "48551634130491392",
                "link": null,
                "group": "1607016878115",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 15,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "about_last_job_bool",
                "dataType": "boolean",
                "name": "Опыт работы",
                "id": "59381637227629563",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 20,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "есть опыт",
                        "нет опыта"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "birthday",
                "dataType": "date",
                "name": "Дата рождения",
                "id": "78441637227542072",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 19,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "ru",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
                        "wed": true
                    },
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD.MM.Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "city",
                "dataType": "link",
                "name": "Город",
                "id": "80181607081867668",
                "link": "cities",
                "group": "1606985920923",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "firstName",
                "dataType": "string",
                "name": "Имя",
                "id": "5",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
                "id": "13",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "lang",
                "dataType": "link",
                "name": "Знание иностранных языков",
                "id": "57241635953910336",
                "link": "lang_cat",
                "group": "1637230118801",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_ch",
                "dataType": "link",
                "name": "Уровень владения китайским языком",
                "id": "82121637230433990",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 7,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_de",
                "dataType": "link",
                "name": "Уровень владения немецким языком",
                "id": "30111637230295842",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_en",
                "dataType": "link",
                "name": "Уровень владения английским языком",
                "id": "78151637230252127",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_fr",
                "dataType": "link",
                "name": "Уровень владения французским языком",
                "id": "55011637230342892",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_from_user",
                "dataType": "string",
                "name": "Свой вариант",
                "id": "98651637235752912",
                "link": "",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "lang_id",
                "dataType": "string",
                "name": "Знание иностранных языков",
                "id": "64741635954610219",
                "link": "",
                "group": "1637230118801",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "lang_it",
                "dataType": "link",
                "name": "Уровень владения итальянским языком",
                "id": "61961637230368791",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 5,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_rus",
                "dataType": "link",
                "name": "Уровень владения русским языком",
                "id": "24411637827277006",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 9,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lang_sp",
                "dataType": "link",
                "name": "Уровень владения испанским языком",
                "id": "77751637230396792",
                "link": "lang",
                "group": "1637230118801",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 6,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "lastName",
                "dataType": "string",
                "name": "Фамилия",
                "id": "4",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 5,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "salary_raw",
                "dataType": "json",
                "name": "Ожидания по доходу ",
                "id": "63391607082324656",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "rangeSlider",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "unitName": "k ₽",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {
                        "max": 300,
                        "min": 20,
                        "step": 10
                    },
                    "customOptionType": "textarea"
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": true,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "schedule",
                "dataType": "arrayLink",
                "name": "Занятость",
                "id": "90801635956020309",
                "link": "schedule",
                "group": "1607016878115",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 18,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "type",
                "dataType": "link",
                "name": "Категория вакансий",
                "id": "68641607070972375",
                "link": "Type2252",
                "group": "1607016878115",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "booleanOptions": [
                        "2 через 2",
                        "5 через 2"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea"
                },
                "groupName": null,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkType": true,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "birthday": 1638306000000,
                "Facebook_lonk": "11",
                "city": "efd0190e-1a19-40a7-9d00-b695b60e7b18",
                "52_functions": [
                    {
                        "name": "Графический дизайн",
                        "id": "02b3892a-9ca7-40e3-bb79-2a4682fe445c"
                    },
                    {
                        "name": "Контент",
                        "id": "14746650-98aa-44d7-8989-472c8162dba8"
                    }
                ],
                "salary_raw": "{\"secondValue\":100,\"firstValue\":50}",
                "about_last_job_bool": false,
                "22_functions": [],
                "lastName": "Ершов",
                "firstName": "Павел",
                "id": "79151845361",
                "schedule": [
                    {
                        "name": "полная",
                        "id": "36e396ce-bbfe-47aa-9d62-61190ac6658e"
                    }
                ],
                "lang": {
                    "name": "английский",
                    "id": "английский"
                },
                "type": "52"
            }
        ]
    }

    const parseJson = json => {
        if (!json) return {}
        let parsedJson = {}
        if (typeof json == 'object') return json
        try {
            parsedJson = JSON.parse(json)
        }
        catch (e) {
            console.log(json);
            console.log(e);
        }
        return parsedJson
    }



    const exampleUser = {
        profilePicture: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        firstName: 'Jack',
        lastName: 'Russel',
        email: 'jack@directual.com',
        role: 'admin',
        socialGoogle: 'jack@directual.com'
    }

    // console.log('localStorage')
    // console.log(localStorage)

    let basicTheme = {
        colorScheme: localStorage.getItem('dd-theme-color') || 'classic',
        radius: localStorage.getItem('dd-theme-radius') || 25,
        headersFont: localStorage.getItem('dd-theme-headersFont') || 'Montserrat',
        fontText: localStorage.getItem('dd-theme-fontText') || 'Lato',
        headersFontWeight: localStorage.getItem('dd-theme-headersFontWeight') || '700',
        bodyFontWeight: localStorage.getItem('dd-theme-bodyFontWeight') || '400',
        customThemeColors: parseJson(localStorage.getItem('dd-theme-customThemeColors')),
        desktopMenu: localStorage.getItem('dd-desktop-menu') || 'left',
        mobileMenu: localStorage.getItem('dd-mobile-menu') || 'right',
    }

    const [currentTheme, setCurrentTheme] = useState(basicTheme)

    useEffect(() => {
        localStorage.setItem('dd-theme-color', currentTheme.colorScheme)
        localStorage.setItem('dd-desktop-menu', currentTheme.desktopMenu)
        localStorage.setItem('dd-mobile-menu', currentTheme.mobileMenu)
        localStorage.setItem('dd-theme-radius', currentTheme.radius)
        localStorage.setItem('dd-theme-headersFont', currentTheme.headersFont)
        localStorage.setItem('dd-theme-fontText', currentTheme.fontText)
        localStorage.setItem('dd-theme-headersFontWeight', currentTheme.headersFontWeight)
        localStorage.setItem('dd-theme-bodyFontWeight', currentTheme.bodyFontWeight)
        localStorage.setItem('dd-theme-customThemeColors', JSON.stringify(currentTheme.customThemeColors))
    }, [currentTheme])

    // console.log('localStorage')
    // console.log(localStorage)

    const exampleTabs = [
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} /> },
        { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
    ]

    return (
        <FpsWrapper 
            horizontal={currentTheme.desktopMenu=='top'}
        >
            <Router>
                <MainMenuWrapper themeName={currentTheme} horizontal={currentTheme.desktopMenu=='top'}/>
                <ContentWrapper whiteLabel={false} locale='FRA' themeName={currentTheme}>
                    <Switch>
                        <Route exact path="/table">
                            <TabsPane tabs={exampleTabs} hideSingleTab currentTabKey={1} fixedScroll={false} />
                        </Route>
                        <Route exact path="/">
                            <WhatIsIt />
                        </Route>
                        <Route exact path="/form">
                            <FpsForm locale='ESP' data={exampleForm} auth={authExample} />
                        </Route>
                        <Route exact path="/kanban">
                            <FpsKanban locale='ESP' data={exampleForm} auth={authExample} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile
                                width={600}
                                user={exampleUser}
                            />
                            <SignIn
                                header='Sign in!'
                                width={400}
                                //googleAuth={<Button socialGoogle onClick={()=>alert('Google!')}>Sign In with Google</Button>}
                                facebookAuth={<Button socialFacebook onClick={()=>alert('Facebook!')}>Sign In with Facebook</Button>}
                                onSignIn={value=>console.log(value)}
                                userNameFormat='phone'
                            />
                            <SignUp
                                header='Sign Up!'
                                width={400}
                                googleAuth={<Button socialGoogle onClick={()=>alert('Google!')}>Sign Up with Google</Button>}
                                facebookAuth={<Button socialFacebook onClick={()=>alert('Facebook!')}>Sign Up with Facebook</Button>}
                                userNameFormat='phone'
                                onSignUp={value=>console.log(value)}
                            />
                            <RestorePass 
                                header='Reset password'
                                width={400}
                                userNameFormat='phone'
                                onRestore={value=>console.log(value)}
                            />

                        </Route>
                        <Route exact path="/cards">
                            <FpsCards locale="ESP" data={cardActions} auth={authExample} currentBP='desktop' />
                            <FpsCards data={newCardActions} currentBP='desktop' />
                            {/* <FpsCards data={exampleTable} /> */}
                            {/* <br /><br />
              <FpsCards data={exampleTable2} /> */}
                        </Route>
                        <Route exact path="/theme">
                            <h1>Theme management</h1>
                            <FpsTheme
                                onChange={value => { setCurrentTheme(value) }}
                                defaultValue={currentTheme}
                                themes={['classic', 'white', 'tiffany', 'darkMint', 'warmNight', 'hacker', 'raspberry', 'baltic', 'custom']} />
                        </Route>

                        <Route exact path="/system-typography">
                            <h1>Typography</h1>
                            <TypoPage />
                        </Route>
                        <Route exact path="/system-button">
                            <ButtonsPage />
                        </Route>
                        <Route exact path="/system-icons">
                            <IconsPage />
                        </Route>
                        <Route exact path="/system-data-entry">
                            <InputsPage />
                        </Route>
                        <Route exact path="/system-dnd">
                            <Dnd />
                        </Route>
                        <Route exact path="/system-layout">
                            <LayoutPage />
                        </Route>
                        <Route exact path="/platform">
                            <PlatformPage />
                        </Route>
                        <Route exact path="/system-media">
                            <h1>Media</h1>
                            {/* <h2>Youtube</h2>
                            <CodeSnippet code="<Media type='video' source='https://www.youtube.com/watch?v=JAwEWLP-G_M' width='550' height='300'/>" />
                            <Media type='video' source="https://www.youtube.com/watch?v=JAwEWLP-G_M" width='550' height='300' /> */}
                            <Stopwatch timer min={60} direction='reverse' sec={0} />
                        </Route>

                    </Switch>

                </ContentWrapper>
            </Router>
        </FpsWrapper>
    )
}

export default App