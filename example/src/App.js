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
            logoSize={{
                height:52,
                width: 187
            }}
            handleRoute={href => e => console.log(href)}
            horizontal={props.horizontal}
            logoutText='Выйти'
            mobileLeftSide={props.mobileLeftSide}
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
                { name: "Form", route: "/form", group: 'Components', icon: "edit", link: <Link to="/form">Form</Link> },
                { name: "Theme management", group: 'Components', route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
                { name: "Cards", group: 'Components', route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
                { name: "Table", group: 'Components', route: "/table", icon: "database" },
                { name: "Kanban", group: 'Components', route: "/kanban", icon: "kanban" },
                { name: "Chat (soon)", group: 'Components', route: "/chat", icon: "bubble", disabled: true },
                { name: "Comments (soon)", group: 'Components', route: "/comments", icon: "version", disabled: true },
                { name: "Design system", subheader: true },
                { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
                { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
                { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
                { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
                { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
                { name: "Layout", route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
                { name: "Platform", group: 'Design system', route: "/platform", icon: "babai", link: <Link to="/platform">Platform</Link> },
            ]}

        />)
}

const App = (props) => {
    let exampleDataHtml = {
        html: '<b>test</b>'
    }

    let cardActions = {
        "sl": "getFinancialReport",
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
                        "fieldSysName": "_report_ts",
                        "fetch": [],
                        "sysName": "_report_ts",
                        "name": "report create time",
                        "dataType": "date",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "balance___sum",
                        "fetch": [],
                        "sysName": "balance___sum",
                        "name": "sum(balance)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bool",
                        "fetch": [],
                        "sysName": "bool",
                        "name": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
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
                        "fieldSysName": "id___count",
                        "fetch": [],
                        "sysName": "id___count",
                        "name": "count(id)",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "period",
                        "fetch": [],
                        "sysName": "period",
                        "name": "period",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "title",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "type",
                        "name": "type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "transaction_types"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "_report_ts": {
                        "id": "_report_ts",
                        "content": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "balance___sum": {
                        "id": "balance___sum",
                        "content": "sum(balance)",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bool": {
                        "id": "bool",
                        "content": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "id___count": {
                        "id": "id___count",
                        "content": "count(id)",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "period": {
                        "id": "period",
                        "content": "period",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "type": {
                        "id": "type",
                        "content": "type",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "transaction_types",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "_report_ts": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "balance___sum": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bool": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id___count": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "period": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "type": {
                        "include": true,
                        "disableEditing": false,
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
                            "_report_ts",
                            "balance___sum",
                            "bool",
                            "id",
                            "id___count",
                            "period",
                            "type"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "_report_ts": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "balance___sum": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bool": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id___count": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "period": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "type": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "filterParams": {
                "isFiltering": true,
                "isSorting": true,
                "filterFields": {
                    "id___count": {
                        "active": true,
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "name": "count(id)"
                    },
                    "bool": {
                        "active": true,
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
                                "Скоро",
                                "Очень скоро"
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
                        "name": "Ще не вмерла?"
                    },
                    "_report_ts": {
                        "active": true,
                        "dataType": "date",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "name": "report create time"
                    }
                }
            }
        },
        "tableTitle": "cards",
        "actions": null,
        "headers": [
            {
                "sysName": "_report_ts",
                "name": "report create time",
                "dataType": "date",
                "id": "6",
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
                    "dateFormat": "DD MMM, Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "balance___sum",
                "name": "sum(balance)",
                "dataType": "decimal",
                "id": "1",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "bool",
                "name": "Ще не вмерла?",
                "dataType": "boolean",
                "id": "81091670421684945",
                "link": "",
                "group": "0",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Скоро",
                        "Очень скоро"
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "5",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id___count",
                "name": "count(id)",
                "dataType": "number",
                "id": "2",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "period",
                "name": "period",
                "dataType": "string",
                "id": "3",
                "link": "",
                "group": "0",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "type",
                "name": "type",
                "dataType": "link",
                "id": "4",
                "link": "transaction_types",
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
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "_report_ts": 1670406206068,
                "balance___sum": 83.72,
                "id___count": 5,
                "id": "6390603eaaea0bbf565bf2da",
                "type": {
                    "id": "paddle_payment",
                    "title": "💹 Paddle"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 97,
                "id___count": 3,
                "id": "6390603eaaea0bbf565bf2db",
                "type": {
                    "id": "tinkoff",
                    "title": "💹 Tinkoff"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 0.84,
                "id___count": 1,
                "id": "6390603eaaea0bbf565bf2dc",
                "type": {
                    "id": "crypto",
                    "title": "💹 Crypto"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 1104.18,
                "id___count": 16,
                "id": "6390603eaaea0bbf565bf2dd",
                "type": {
                    "id": "paddle_payment",
                    "title": "💹 Paddle"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -433.56,
                "id___count": 13,
                "id": "6390603eaaea0bbf565bf2de",
                "type": {
                    "id": "ondemand",
                    "title": "🔥 On-demand Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -1146.19,
                "id___count": 13,
                "id": "6390603eaaea0bbf565bf2df",
                "type": {
                    "id": "team_payment",
                    "title": "🔥 Team Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -7736.5,
                "id___count": 132,
                "id": "6390603eaaea0bbf565bf2e0",
                "type": {
                    "id": "app_payment",
                    "title": "🔥 App Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 1351.78125,
                "id___count": 20,
                "id": "6390603eaaea0bbf565bf2e1",
                "type": {
                    "id": "tinkoff",
                    "title": "💹 Tinkoff"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -1405.5,
                "id___count": 26,
                "id": "6390603eaaea0bbf565bf2e2",
                "type": {
                    "id": "app_payment",
                    "title": "🔥 App Payment"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 3975,
                "id___count": 44,
                "id": "6390603eaaea0bbf565bf2e3",
                "type": {
                    "id": "promo",
                    "title": "🆓 Promo"
                },
                "period": "11-2022"
            }
        ],
        "totalPages": 9,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "_report_ts",
                99155789
            ],
            [
                "balance___sum",
                99155789
            ],
            [
                "bool",
                99155789
            ],
            [
                "id",
                99155789
            ],
            [
                "id___count",
                99155789
            ],
            [
                "period",
                99155789
            ],
            [
                "type.id",
                99155990
            ],
            [
                "type.title",
                99155990
            ]
        ],
        "writeFields": [],
        "structures": {
            "99155789": {
                "id": 99155789,
                "dateCreated": "2022-12-07T09:39:25Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Report [Full report]",
                "sysName": "report_554374085_for_struct_appwallet",
                "jsonObject": "[{\"sysName\":\"balance___sum\",\"name\":\"sum(balance)\",\"dataType\":\"decimal\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id___count\",\"name\":\"count(id)\",\"dataType\":\"number\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period\",\"name\":\"period\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"type\",\"dataType\":\"link\",\"id\":\"4\",\"link\":\"transaction_types\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"_report_ts\",\"name\":\"report create time\",\"dataType\":\"date\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bool\",\"name\":\"Ще не вмерла?\",\"dataType\":\"boolean\",\"id\":\"81091670421684945\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Скоро\",\"Очень скоро\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T14:06:41Z",
                "createBy": null,
                "changedBy": 3527,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "5",
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
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33576258
            },
            "99155990": {
                "id": 99155990,
                "dateCreated": "2022-12-07T13:05:44Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Transaction types",
                "sysName": "transaction_types",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"11991670418438514\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T13:12:52Z",
                "createBy": 3527,
                "changedBy": 3527,
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
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33575450
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
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

    let kanbanData = {
        "sl": "getFinancialReport",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "_report_ts",
                        "fetch": [],
                        "sysName": "_report_ts",
                        "name": "report create time",
                        "dataType": "date",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "balance___sum",
                        "fetch": [],
                        "sysName": "balance___sum",
                        "name": "sum(balance)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bool",
                        "fetch": [],
                        "sysName": "bool",
                        "name": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
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
                        "fieldSysName": "id___count",
                        "fetch": [],
                        "sysName": "id___count",
                        "name": "count(id)",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "period",
                        "fetch": [],
                        "sysName": "period",
                        "name": "period",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "title",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "type",
                        "name": "type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "transaction_types"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "_report_ts": {
                        "id": "_report_ts",
                        "content": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "balance___sum": {
                        "id": "balance___sum",
                        "content": "sum(balance)",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bool": {
                        "id": "bool",
                        "content": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "id___count": {
                        "id": "id___count",
                        "content": "count(id)",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "period": {
                        "id": "period",
                        "content": "period",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "type": {
                        "id": "type",
                        "content": "type",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "transaction_types",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "_report_ts": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "balance___sum": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bool": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id___count": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "period": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "type": {
                        "include": true,
                        "disableEditing": false,
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
                            "id",
                            "_report_ts",
                            "balance___sum",
                            "bool",
                            "id___count",
                            "period",
                            "type"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "_report_ts": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "balance___sum": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bool": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id___count": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "period": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "type": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "filterParams": {
                "isFiltering": true,
                "filterFields": {
                    "type": {
                        "active": true,
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "name": "type",
                        "linkDirectory": [
                            {
                                "id": "paddle_payment",
                                "text": "💹 Paddle"
                            },
                            {
                                "id": "tinkoff",
                                "text": "💹 Tinkoff"
                            },
                            {
                                "id": "app_payment",
                                "text": "🔥 App Payment"
                            },
                            {
                                "id": "promo",
                                "text": "🆓 Promo"
                            },
                            {
                                "id": "ondemand",
                                "text": "🔥 On-demand Payment"
                            },
                            {
                                "id": "team_payment",
                                "text": "🔥 Team Payment"
                            },
                            {
                                "id": "crypto",
                                "text": "💹 Crypto"
                            },
                            {
                                "id": "test",
                                "text": "test"
                            },
                            {
                                "id": "bank_payment",
                                "text": "💹 Wire payment"
                            },
                            {
                                "id": "app_payment_upgrade_refund",
                                "text": "⬆️ App upgrade refund"
                            }
                        ]
                    },
                    "_report_ts": {
                        "active": true,
                        "dataType": "date",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "name": "report create time"
                    }
                },
                "isSorting": true
            },
            "kanbanParams": {
                "columnField": "type",
                "columnsStruct": "transaction_types",
                "sortField": "balance___sum",
                "columns": [
                    {
                        "id": "paddle_payment",
                        "name": "💹 Paddle"
                    },
                    {
                        "id": "tinkoff",
                        "name": "💹 Tinkoff"
                    },
                    {
                        "id": "app_payment",
                        "name": "🔥 App Payment"
                    },
                    {
                        "id": "promo",
                        "name": "🆓 Promo"
                    },
                    {
                        "id": "ondemand",
                        "name": "🔥 On-demand Payment"
                    },
                    {
                        "id": "team_payment",
                        "name": "🔥 Team Payment"
                    },
                    {
                        "id": "crypto",
                        "name": "💹 Crypto"
                    },
                    {
                        "id": "test",
                        "name": ""
                    },
                    {
                        "id": "bank_payment",
                        "name": "💹 Wire payment"
                    },
                    {
                        "id": "app_payment_upgrade_refund",
                        "name": "⬆️ App upgrade refund"
                    }
                ],
                "columnsVisibility": {}
            }
        },
        "tableTitle": "kanban",
        "actions": null,
        "headers": [
            {
                "sysName": "_report_ts",
                "name": "report create time",
                "dataType": "date",
                "id": "6",
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
                    "dateFormat": "DD MMM, Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "balance___sum",
                "name": "sum(balance)",
                "dataType": "decimal",
                "id": "1",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "bool",
                "name": "Ще не вмерла?",
                "dataType": "boolean",
                "id": "81091670421684945",
                "link": "",
                "group": "0",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Скоро",
                        "Очень скоро"
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "5",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id___count",
                "name": "count(id)",
                "dataType": "number",
                "id": "2",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "period",
                "name": "period",
                "dataType": "string",
                "id": "3",
                "link": "",
                "group": "0",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "type",
                "name": "type",
                "dataType": "link",
                "id": "4",
                "link": "transaction_types",
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
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "_report_ts": 1670406206068,
                "balance___sum": 83.72,
                "id___count": 5,
                "id": "6390603eaaea0bbf565bf2da",
                "type": {
                    "id": "paddle_payment",
                    "title": "💹 Paddle"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 97,
                "id___count": 3,
                "id": "6390603eaaea0bbf565bf2db",
                "type": {
                    "id": "tinkoff",
                    "title": "💹 Tinkoff"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 0.84,
                "id___count": 1,
                "id": "6390603eaaea0bbf565bf2dc",
                "type": {
                    "id": "crypto",
                    "title": "💹 Crypto"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 1104.18,
                "id___count": 16,
                "id": "6390603eaaea0bbf565bf2dd",
                "type": {
                    "id": "paddle_payment",
                    "title": "💹 Paddle"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -433.56,
                "id___count": 13,
                "id": "6390603eaaea0bbf565bf2de",
                "type": {
                    "id": "ondemand",
                    "title": "🔥 On-demand Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -1146.19,
                "id___count": 13,
                "id": "6390603eaaea0bbf565bf2df",
                "type": {
                    "id": "team_payment",
                    "title": "🔥 Team Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -7736.5,
                "id___count": 132,
                "id": "6390603eaaea0bbf565bf2e0",
                "type": {
                    "id": "app_payment",
                    "title": "🔥 App Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 1351.78125,
                "id___count": 20,
                "id": "6390603eaaea0bbf565bf2e1",
                "type": {
                    "id": "tinkoff",
                    "title": "💹 Tinkoff"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -1405.5,
                "id___count": 26,
                "id": "6390603eaaea0bbf565bf2e2",
                "type": {
                    "id": "app_payment",
                    "title": "🔥 App Payment"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 3975,
                "id___count": 44,
                "id": "6390603eaaea0bbf565bf2e3",
                "type": {
                    "id": "promo",
                    "title": "🆓 Promo"
                },
                "period": "11-2022"
            }
        ],
        "totalPages": 9,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "_report_ts",
                99155789
            ],
            [
                "balance___sum",
                99155789
            ],
            [
                "bool",
                99155789
            ],
            [
                "id",
                99155789
            ],
            [
                "id___count",
                99155789
            ],
            [
                "period",
                99155789
            ],
            [
                "type.id",
                99155990
            ],
            [
                "type.title",
                99155990
            ]
        ],
        "writeFields": [],
        "structures": {
            "99155789": {
                "id": 99155789,
                "dateCreated": "2022-12-07T09:39:25Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Report [Full report]",
                "sysName": "report_554374085_for_struct_appwallet",
                "jsonObject": "[{\"sysName\":\"balance___sum\",\"name\":\"sum(balance)\",\"dataType\":\"decimal\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id___count\",\"name\":\"count(id)\",\"dataType\":\"number\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period\",\"name\":\"period\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"type\",\"dataType\":\"link\",\"id\":\"4\",\"link\":\"transaction_types\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"_report_ts\",\"name\":\"report create time\",\"dataType\":\"date\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bool\",\"name\":\"Ще не вмерла?\",\"dataType\":\"boolean\",\"id\":\"81091670421684945\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Скоро\",\"Очень скоро\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T14:06:41Z",
                "createBy": null,
                "changedBy": 3527,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "5",
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
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33576258
            },
            "99155990": {
                "id": 99155990,
                "dateCreated": "2022-12-07T13:05:44Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Transaction types",
                "sysName": "transaction_types",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"11991670418438514\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T13:12:52Z",
                "createBy": 3527,
                "changedBy": 3527,
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
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33575450
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": null,
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let exampleTable = {
        "sl": "adminPaidApps",
        "pageSize": "70",
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
                        "fieldSysName": "balance",
                        "fetch": [],
                        "sysName": "balance",
                        "name": "Credits",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "comments",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "files",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "text",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "firstName",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "lastName",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "userpic",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "comments",
                        "name": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "admin_comments"
                    },
                    {
                        "fieldSysName": "events",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "messagee",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "events",
                        "name": "App events",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "appEvents"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isDowngraded",
                        "fetch": [],
                        "sysName": "isDowngraded",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_blocked",
                        "fetch": [],
                        "sysName": "is_blocked",
                        "name": "is_blocked",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_cancelled",
                        "fetch": [],
                        "sysName": "is_cancelled",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_hidden",
                        "fetch": [],
                        "sysName": "is_hidden",
                        "name": "is_hidden",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_sandbox",
                        "fetch": [],
                        "sysName": "is_sandbox",
                        "name": "is_sandbox",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "legacy_billing",
                        "fetch": [],
                        "sysName": "legacy_billing",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "App name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "next_billing_date",
                        "fetch": [],
                        "sysName": "next_billing_date",
                        "name": "",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "next_payment",
                        "fetch": [],
                        "sysName": "next_payment",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "wallet_balance",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "wallet_transactions",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "balance",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "comment",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "date",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "type",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "owner_id",
                        "name": "Owner",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    },
                    {
                        "fieldSysName": "paddle_subscription_id",
                        "fetch": [],
                        "sysName": "paddle_subscription_id",
                        "name": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "paddle_subscription_status",
                        "fetch": [],
                        "sysName": "paddle_subscription_status",
                        "name": "Paddle Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "plan_id",
                        "fetch": [
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
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
                        ],
                        "sysName": "plan_id",
                        "name": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Tariff"
                    },
                    {
                        "fieldSysName": "sysName",
                        "fetch": [],
                        "sysName": "sysName",
                        "name": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "team_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "is_hidden",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "owner_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "tariff_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "team_id",
                        "name": "Team",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Teams"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "comments",
                        "fetch": [],
                        "sysName": "comments",
                        "name": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "admin_comments"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isDowngraded",
                        "fetch": [],
                        "sysName": "isDowngraded",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "legacy_billing",
                        "fetch": [],
                        "sysName": "legacy_billing",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "next_billing_date",
                        "fetch": [],
                        "sysName": "next_billing_date",
                        "name": "",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "next_payment",
                        "fetch": [],
                        "sysName": "next_payment",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "paddle_subscription_id",
                        "fetch": [],
                        "sysName": "paddle_subscription_id",
                        "name": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "fields": {
                    "balance": {
                        "id": "balance",
                        "content": "Credits",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "comments": {
                        "id": "comments",
                        "content": "Comments",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "admin_comments",
                        "actions": []
                    },
                    "events": {
                        "id": "events",
                        "content": "App events",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "appEvents",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "App id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "isDowngraded": {
                        "id": "isDowngraded",
                        "content": "",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "is_blocked": {
                        "id": "is_blocked",
                        "content": "is_blocked",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "is_cancelled": {
                        "id": "is_cancelled",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "is_hidden": {
                        "id": "is_hidden",
                        "content": "is_hidden",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "is_sandbox": {
                        "id": "is_sandbox",
                        "content": "is_sandbox",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "legacy_billing": {
                        "id": "legacy_billing",
                        "content": "",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "name": {
                        "id": "name",
                        "content": "App name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "next_billing_date": {
                        "id": "next_billing_date",
                        "content": "",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "next_payment": {
                        "id": "next_payment",
                        "content": "",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "owner_id": {
                        "id": "owner_id",
                        "content": "Owner",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users",
                        "actions": []
                    },
                    "paddle_subscription_id": {
                        "id": "paddle_subscription_id",
                        "content": "Paddle ID",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "paddle_subscription_status": {
                        "id": "paddle_subscription_status",
                        "content": "Paddle Status",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "plan_id": {
                        "id": "plan_id",
                        "content": "Billing plan",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Tariff",
                        "actions": []
                    },
                    "sysName": {
                        "id": "sysName",
                        "content": "System name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "team_id": {
                        "id": "team_id",
                        "content": "Team",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Teams",
                        "actions": []
                    },
                    "action__18121640850623776": {
                        "content": "Add comment",
                        "id": "action__18121640850623776",
                        "type": "action",
                        "actions": []
                    },
                    "action__91601640880768005": {
                        "content": "Downgrade to FREE",
                        "id": "action__91601640880768005",
                        "type": "action",
                        "actions": []
                    },
                    "action__38151666722551950": {
                        "content": "Change plan",
                        "id": "action__38151666722551950",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsHint": false
                    },
                    "owner_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "id": {
                                    "id": "id",
                                    "content": "id",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "id",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "wallet_balance": {
                                    "id": "wallet_balance",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "wallet_transactions": {
                                    "id": "wallet_transactions",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "country": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "first_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "last_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "wallet_balance": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "wallet_transactions": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "first_name",
                                null,
                                null,
                                "wallet_balance",
                                "wallet_transactions"
                            ]
                        }
                    },
                    "plan_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "quickSearchSL": "adminChangeTariff",
                        "disableEditing": true,
                        "configureLinkedCard": {
                            "fields": {
                                "description": {
                                    "id": "description",
                                    "content": "description",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "id": {
                                    "id": "id",
                                    "content": "id",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "id",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "name": {
                                    "id": "name",
                                    "content": "name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "price": {
                                    "id": "price",
                                    "content": "price",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "description": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": true,
                                    "disableEditing": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "price": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "description",
                                "name",
                                "price"
                            ]
                        }
                    },
                    "stat_get": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_post": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_proc": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_sync": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_users": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sysName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_sandbox": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paddle_subscription_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paddle_subscription_status": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "comments": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "date": {
                                    "id": "date",
                                    "content": "Date",
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
                                        "dateFormat": "DD MMM, Y,",
                                        "timeFormat": "HH:mm",
                                        "isUTC": "false"
                                    }
                                },
                                "files": {
                                    "id": "files",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": null
                                },
                                "text": {
                                    "id": "text",
                                    "content": "Comment",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "markdown",
                                    "formatOptions": null
                                },
                                "user_id": {
                                    "id": "user_id",
                                    "content": "User",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "files": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "text": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "user_id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "date",
                                "text",
                                "user_id",
                                "files"
                            ]
                        },
                        "sortArrayLink": true,
                        "veiwOption": "table",
                        "cartView": {
                            "image": false
                        },
                        "tableView": {
                            "deleteOn": true,
                            "columns": [
                                {
                                    "id": "1640850599314",
                                    "field": "text"
                                },
                                {
                                    "id": "1640850605607",
                                    "field": "date"
                                },
                                {
                                    "id": "1640850608476",
                                    "field": "user_id"
                                }
                            ]
                        },
                        "sortByField": "date",
                        "sortDirection": "desc",
                        "subHeader": "Comment: "
                    },
                    "UsageHistory_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "balance": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_blocked": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_cancelled": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "events": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1640857708576",
                                    "field": "type"
                                },
                                {
                                    "id": "1640857715527",
                                    "field": "messagee"
                                },
                                {
                                    "id": "1640857719405",
                                    "field": "date"
                                }
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "date",
                        "sortDirection": "desc"
                    },
                    "isDowngraded": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "next_billing_date": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "next_payment": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "legacy_billing": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "team_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "id": {
                                    "id": "id",
                                    "content": "id",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "id",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "is_hidden": {
                                    "id": "is_hidden",
                                    "content": "is_hidden",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "name": {
                                    "id": "name",
                                    "content": "Team name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "owner_id": {
                                    "id": "owner_id",
                                    "content": "Owner",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "tariff_id": {
                                    "id": "tariff_id",
                                    "content": "Tariff",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "id": {
                                    "include": true,
                                    "disableEditing": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "is_hidden": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "owner_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "tariff_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "name",
                                "owner_id",
                                "tariff_id",
                                "id",
                                "is_hidden"
                            ]
                        }
                    },
                    "is_hidden": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "App info",
                        "fieldIds": [
                            "id",
                            "name",
                            "owner_id",
                            "sysName",
                            "is_sandbox",
                            "is_blocked",
                            "is_cancelled",
                            "isDowngraded",
                            "next_billing_date",
                            "next_payment",
                            "legacy_billing",
                            "team_id",
                            "is_hidden"
                        ]
                    },
                    "78721633090718330": {
                        "id": "78721633090718330",
                        "title": "Billing",
                        "fieldIds": [
                            "plan_id",
                            "action__38151666722551950",
                            "action__91601640880768005",
                            "balance",
                            "paddle_subscription_id",
                            "paddle_subscription_status",
                            "action__39991633095320582",
                            "action__82541633095309885"
                        ]
                    },
                    "85421633090729272": {
                        "id": "85421633090729272",
                        "title": "Actions",
                        "fieldIds": []
                    },
                    "36061633090983107": {
                        "id": "36061633090983107",
                        "title": "Timeline and Comments",
                        "fieldIds": [
                            "events",
                            "comments",
                            "action__18121640850623776"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "36061633090983107",
                    "78721633090718330",
                    "85421633090729272"
                ],
                "actions": [
                    {
                        "sysName": "adminAddComments",
                        "id": "18121640850623776",
                        "name": "Add comment",
                        "displayAs": "form",
                        "buttonIcon": "bubble",
                        "buttonType": "accent",
                        "showMessage": true,
                        "closePopup": false,
                        "resultMessage": "Added!",
                        "resultButton": "Add another comment",
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
                                    "fieldSysName": "app_id",
                                    "fetch": [],
                                    "sysName": "app_id",
                                    "name": "",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "Apps"
                                },
                                {
                                    "fieldSysName": "files",
                                    "fetch": [],
                                    "sysName": "files",
                                    "name": "",
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "text",
                                    "fetch": [],
                                    "sysName": "text",
                                    "name": "Comment",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "User",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "54491640850662767",
                                "field": {
                                    "fieldSysName": "text",
                                    "fetch": [],
                                    "sysName": "text",
                                    "name": "Comment",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                }
                            },
                            {
                                "id": "11531640850663589",
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
                        ],
                        "formMapping": [
                            {
                                "id": "27851640850669233",
                                "target": "user_id",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "11371640850675500",
                                "target": "app_id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ],
                        "conditionals": [
                            {
                                "id": "71261640850684734",
                                "target": "role",
                                "value": "god,padavan"
                            }
                        ]
                    },
                    {
                        "sysName": "adminChangeApp",
                        "id": "91601640880768005",
                        "name": "Downgrade to FREE",
                        "displayAs": "button",
                        "buttonIcon": "arrowDown",
                        "buttonType": "danger",
                        "closePopup": true,
                        "showMessage": false,
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
                                    "fieldSysName": "action",
                                    "fetch": [],
                                    "sysName": "action",
                                    "name": "",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "app_id",
                                    "fetch": [],
                                    "sysName": "app_id",
                                    "name": "App ID",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "Apps"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "83751640880908553",
                                "target": "action",
                                "type": "const",
                                "value": "downgrade_free"
                            },
                            {
                                "id": "41981641039763998",
                                "target": "app_id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ]
                    },
                    {
                        "sysName": "adminChangeApp",
                        "id": "38151666722551950",
                        "name": "Change plan",
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
                                    "fieldSysName": "Billing_date",
                                    "fetch": [],
                                    "sysName": "Billing_date",
                                    "name": "Billing date",
                                    "dataType": "date",
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
                                        "timeFormat": " ",
                                        "isUTC": "true"
                                    },
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "Plan",
                                    "fetch": [],
                                    "sysName": "Plan",
                                    "name": "Plan",
                                    "dataType": "json",
                                    "format": "radioOptions",
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
                                        "dateFormat": "DD/MM/Y",
                                        "timeFormat": " HH:mm",
                                        "isUTC": "false",
                                        "multipleChoice": [
                                            {
                                                "value": "Startup-monthly",
                                                "label": "Startup-monthly"
                                            },
                                            {
                                                "value": "Startup-yearly",
                                                "label": "Startup-yearly"
                                            },
                                            {
                                                "value": "Pro-monthly",
                                                "label": "Pro-monthly"
                                            },
                                            {
                                                "value": "Pro-yearly",
                                                "label": "Pro-yearly"
                                            },
                                            {
                                                "value": "Business-monthly",
                                                "label": "Business-monthly"
                                            },
                                            {
                                                "value": "Business-yearly",
                                                "label": "Business-yearly"
                                            },
                                            {
                                                "value": "Business-DEV",
                                                "label": "Business-DEV"
                                            }
                                        ]
                                    },
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "action",
                                    "fetch": [],
                                    "sysName": "action",
                                    "name": "",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "app_id",
                                    "fetch": [],
                                    "sysName": "app_id",
                                    "name": "App ID",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "Apps"
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "69691666722566468",
                                "field": {
                                    "fieldSysName": "Plan",
                                    "fetch": [],
                                    "sysName": "Plan",
                                    "name": "Plan",
                                    "dataType": "json",
                                    "format": "radioOptions",
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
                                        "dateFormat": "DD/MM/Y",
                                        "timeFormat": " HH:mm",
                                        "isUTC": "false",
                                        "multipleChoice": [
                                            {
                                                "value": "Startup-monthly",
                                                "label": "Startup-monthly"
                                            },
                                            {
                                                "value": "Startup-yearly",
                                                "label": "Startup-yearly"
                                            },
                                            {
                                                "value": "Pro-monthly",
                                                "label": "Pro-monthly"
                                            },
                                            {
                                                "value": "Pro-yearly",
                                                "label": "Pro-yearly"
                                            },
                                            {
                                                "value": "Business-monthly",
                                                "label": "Business-monthly"
                                            },
                                            {
                                                "value": "Business-yearly",
                                                "label": "Business-yearly"
                                            },
                                            {
                                                "value": "Business-DEV",
                                                "label": "Business-DEV"
                                            }
                                        ]
                                    },
                                    "link": ""
                                }
                            },
                            {
                                "id": "68691666722685132",
                                "field": {
                                    "fieldSysName": "Billing_date",
                                    "fetch": [],
                                    "sysName": "Billing_date",
                                    "name": "Billing date",
                                    "dataType": "date",
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
                                        "timeFormat": " ",
                                        "isUTC": "true"
                                    },
                                    "link": ""
                                }
                            }
                        ],
                        "buttonIcon": "money",
                        "buttonType": "accent",
                        "formMapping": [
                            {
                                "id": "42131666722688653",
                                "target": "action",
                                "type": "const",
                                "value": "change_plan"
                            },
                            {
                                "id": "99011666722716592",
                                "target": "app_id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ],
                        "showMessage": true,
                        "closePopup": false,
                        "resultMessage": "Changed!"
                    }
                ]
            },
            "fields": {
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": false
                },
                "owner_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": null
                            },
                            "wallet_balance": {
                                "id": "wallet_balance",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            },
                            "wallet_transactions": {
                                "id": "wallet_transactions",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "country": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "first_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "last_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "wallet_balance": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "wallet_transactions": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "first_name",
                            null,
                            null,
                            "wallet_balance",
                            "wallet_transactions"
                        ]
                    }
                },
                "plan_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "quickSearchSL": "adminChangeTariff",
                    "disableEditing": true,
                    "configureLinkedCard": {
                        "fields": {
                            "description": {
                                "id": "description",
                                "content": "description",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": null
                            },
                            "name": {
                                "id": "name",
                                "content": "name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "price": {
                                "id": "price",
                                "content": "price",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "description": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": true,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "price": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "description",
                            "name",
                            "price"
                        ]
                    }
                },
                "stat_get": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_post": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_proc": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_sync": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_users": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sysName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_sandbox": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paddle_subscription_id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paddle_subscription_status": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "comments": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "date": {
                                "id": "date",
                                "content": "Date",
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
                                    "dateFormat": "DD MMM, Y,",
                                    "timeFormat": "HH:mm",
                                    "isUTC": "false"
                                }
                            },
                            "files": {
                                "id": "files",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": null
                            },
                            "text": {
                                "id": "text",
                                "content": "Comment",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": null
                            },
                            "user_id": {
                                "id": "user_id",
                                "content": "User",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "files": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "text": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date",
                            "text",
                            "user_id",
                            "files"
                        ]
                    },
                    "sortArrayLink": true,
                    "veiwOption": "table",
                    "cartView": {
                        "image": false
                    },
                    "tableView": {
                        "deleteOn": true,
                        "columns": [
                            {
                                "id": "1640850599314",
                                "field": "text"
                            },
                            {
                                "id": "1640850605607",
                                "field": "date"
                            },
                            {
                                "id": "1640850608476",
                                "field": "user_id"
                            }
                        ]
                    },
                    "sortByField": "date",
                    "sortDirection": "desc",
                    "subHeader": "Comment: "
                },
                "UsageHistory_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "balance": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_blocked": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_cancelled": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "events": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1640857708576",
                                "field": "type"
                            },
                            {
                                "id": "1640857715527",
                                "field": "messagee"
                            },
                            {
                                "id": "1640857719405",
                                "field": "date"
                            }
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "date",
                    "sortDirection": "desc"
                },
                "isDowngraded": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "next_billing_date": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "next_payment": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "legacy_billing": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "team_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "id": {
                                "id": "id",
                                "content": "id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": {}
                            },
                            "is_hidden": {
                                "id": "is_hidden",
                                "content": "is_hidden",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
                                "format": null,
                                "formatOptions": null
                            },
                            "name": {
                                "id": "name",
                                "content": "Team name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "owner_id": {
                                "id": "owner_id",
                                "content": "Owner",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "tariff_id": {
                                "id": "tariff_id",
                                "content": "Tariff",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "id": {
                                "include": true,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "is_hidden": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "owner_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "tariff_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "name",
                            "owner_id",
                            "tariff_id",
                            "id",
                            "is_hidden"
                        ]
                    }
                },
                "is_hidden": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "balance",
                        "fetch": [],
                        "sysName": "balance",
                        "name": "Credits",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "comments",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "files",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "text",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "firstName",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "lastName",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "userpic",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "comments",
                        "name": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "admin_comments"
                    },
                    {
                        "fieldSysName": "events",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "messagee",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "events",
                        "name": "App events",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "appEvents"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isDowngraded",
                        "fetch": [],
                        "sysName": "isDowngraded",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_blocked",
                        "fetch": [],
                        "sysName": "is_blocked",
                        "name": "is_blocked",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_cancelled",
                        "fetch": [],
                        "sysName": "is_cancelled",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_hidden",
                        "fetch": [],
                        "sysName": "is_hidden",
                        "name": "is_hidden",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_sandbox",
                        "fetch": [],
                        "sysName": "is_sandbox",
                        "name": "is_sandbox",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "legacy_billing",
                        "fetch": [],
                        "sysName": "legacy_billing",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "App name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "next_billing_date",
                        "fetch": [],
                        "sysName": "next_billing_date",
                        "name": "",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "next_payment",
                        "fetch": [],
                        "sysName": "next_payment",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "wallet_balance",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "wallet_transactions",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "balance",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "comment",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "date",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "type",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "owner_id",
                        "name": "Owner",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    },
                    {
                        "fieldSysName": "paddle_subscription_id",
                        "fetch": [],
                        "sysName": "paddle_subscription_id",
                        "name": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "paddle_subscription_status",
                        "fetch": [],
                        "sysName": "paddle_subscription_status",
                        "name": "Paddle Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "plan_id",
                        "fetch": [
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
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
                        ],
                        "sysName": "plan_id",
                        "name": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Tariff"
                    },
                    {
                        "fieldSysName": "sysName",
                        "fetch": [],
                        "sysName": "sysName",
                        "name": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "team_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "is_hidden",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "owner_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "tariff_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "team_id",
                        "name": "Team",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Teams"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "comments",
                        "fetch": [],
                        "sysName": "comments",
                        "name": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "admin_comments"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isDowngraded",
                        "fetch": [],
                        "sysName": "isDowngraded",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "legacy_billing",
                        "fetch": [],
                        "sysName": "legacy_billing",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "next_billing_date",
                        "fetch": [],
                        "sysName": "next_billing_date",
                        "name": "",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "next_payment",
                        "fetch": [],
                        "sysName": "next_payment",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "paddle_subscription_id",
                        "fetch": [],
                        "sysName": "paddle_subscription_id",
                        "name": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "fields": {
                    "balance": {
                        "id": "balance",
                        "content": "Credits",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "comments": {
                        "id": "comments",
                        "content": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "admin_comments"
                    },
                    "events": {
                        "id": "events",
                        "content": "App events",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "appEvents"
                    },
                    "id": {
                        "id": "id",
                        "content": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "isDowngraded": {
                        "id": "isDowngraded",
                        "content": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "is_blocked": {
                        "id": "is_blocked",
                        "content": "is_blocked",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "is_cancelled": {
                        "id": "is_cancelled",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "is_hidden": {
                        "id": "is_hidden",
                        "content": "is_hidden",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "is_sandbox": {
                        "id": "is_sandbox",
                        "content": "is_sandbox",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "legacy_billing": {
                        "id": "legacy_billing",
                        "content": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "name": {
                        "id": "name",
                        "content": "App name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "next_billing_date": {
                        "id": "next_billing_date",
                        "content": "",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "next_payment": {
                        "id": "next_payment",
                        "content": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "owner_id": {
                        "id": "owner_id",
                        "content": "Owner",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users"
                    },
                    "paddle_subscription_id": {
                        "id": "paddle_subscription_id",
                        "content": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "paddle_subscription_status": {
                        "id": "paddle_subscription_status",
                        "content": "Paddle Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "plan_id": {
                        "id": "plan_id",
                        "content": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Tariff"
                    },
                    "sysName": {
                        "id": "sysName",
                        "content": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "team_id": {
                        "id": "team_id",
                        "content": "Team",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Teams"
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "name": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "owner_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "plan_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_get": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_post": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_proc": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_sync": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_users": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "sysName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "is_sandbox": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "paddle_subscription_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "paddle_subscription_status": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "comments": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "UsageHistory_ids": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "balance": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "is_blocked": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "is_cancelled": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorRow": true
                    },
                    "events": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "isDowngraded": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "next_billing_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "next_payment": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "legacy_billing": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "team_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "is_hidden": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "name",
                    "sysName",
                    "is_hidden",
                    "plan_id",
                    "paddle_subscription_id",
                    "paddle_subscription_status",
                    "is_sandbox",
                    "legacy_billing",
                    "owner_id",
                    "id",
                    "next_billing_date",
                    "next_payment",
                    "comments",
                    "balance",
                    "is_blocked",
                    "isDowngraded",
                    "is_cancelled",
                    "events",
                    "team_id"
                ]
            },
            "actions": [
                {
                    "sysName": "adminAddComments",
                    "id": "18121640850623776",
                    "name": "Add comment",
                    "displayAs": "form",
                    "buttonIcon": "bubble",
                    "buttonType": "accent",
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Added!",
                    "resultButton": "Add another comment",
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
                                "fieldSysName": "app_id",
                                "fetch": [],
                                "sysName": "app_id",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Apps"
                            },
                            {
                                "fieldSysName": "files",
                                "fetch": [],
                                "sysName": "files",
                                "name": "",
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "text",
                                "fetch": [],
                                "sysName": "text",
                                "name": "Comment",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "User",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "54491640850662767",
                            "field": {
                                "fieldSysName": "text",
                                "fetch": [],
                                "sysName": "text",
                                "name": "Comment",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            }
                        },
                        {
                            "id": "11531640850663589",
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
                    ],
                    "formMapping": [
                        {
                            "id": "27851640850669233",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "11371640850675500",
                            "target": "app_id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "71261640850684734",
                            "target": "role",
                            "value": "god,padavan"
                        }
                    ]
                },
                {
                    "sysName": "adminChangeApp",
                    "id": "91601640880768005",
                    "name": "Downgrade to FREE",
                    "displayAs": "button",
                    "buttonIcon": "arrowDown",
                    "buttonType": "danger",
                    "closePopup": true,
                    "showMessage": false,
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
                                "fieldSysName": "action",
                                "fetch": [],
                                "sysName": "action",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "app_id",
                                "fetch": [],
                                "sysName": "app_id",
                                "name": "App ID",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Apps"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "83751640880908553",
                            "target": "action",
                            "type": "const",
                            "value": "downgrade_free"
                        },
                        {
                            "id": "41981641039763998",
                            "target": "app_id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ]
                },
                {
                    "sysName": "adminChangeApp",
                    "id": "38151666722551950",
                    "name": "Change plan",
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
                                "fieldSysName": "Billing_date",
                                "fetch": [],
                                "sysName": "Billing_date",
                                "name": "Billing date",
                                "dataType": "date",
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
                                    "timeFormat": " ",
                                    "isUTC": "true"
                                },
                                "link": ""
                            },
                            {
                                "fieldSysName": "Plan",
                                "fetch": [],
                                "sysName": "Plan",
                                "name": "Plan",
                                "dataType": "json",
                                "format": "radioOptions",
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
                                    "dateFormat": "DD/MM/Y",
                                    "timeFormat": " HH:mm",
                                    "isUTC": "false",
                                    "multipleChoice": [
                                        {
                                            "value": "Startup-monthly",
                                            "label": "Startup-monthly"
                                        },
                                        {
                                            "value": "Startup-yearly",
                                            "label": "Startup-yearly"
                                        },
                                        {
                                            "value": "Pro-monthly",
                                            "label": "Pro-monthly"
                                        },
                                        {
                                            "value": "Pro-yearly",
                                            "label": "Pro-yearly"
                                        },
                                        {
                                            "value": "Business-monthly",
                                            "label": "Business-monthly"
                                        },
                                        {
                                            "value": "Business-yearly",
                                            "label": "Business-yearly"
                                        },
                                        {
                                            "value": "Business-DEV",
                                            "label": "Business-DEV"
                                        }
                                    ]
                                },
                                "link": ""
                            },
                            {
                                "fieldSysName": "action",
                                "fetch": [],
                                "sysName": "action",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "app_id",
                                "fetch": [],
                                "sysName": "app_id",
                                "name": "App ID",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Apps"
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "69691666722566468",
                            "field": {
                                "fieldSysName": "Plan",
                                "fetch": [],
                                "sysName": "Plan",
                                "name": "Plan",
                                "dataType": "json",
                                "format": "radioOptions",
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
                                    "dateFormat": "DD/MM/Y",
                                    "timeFormat": " HH:mm",
                                    "isUTC": "false",
                                    "multipleChoice": [
                                        {
                                            "value": "Startup-monthly",
                                            "label": "Startup-monthly"
                                        },
                                        {
                                            "value": "Startup-yearly",
                                            "label": "Startup-yearly"
                                        },
                                        {
                                            "value": "Pro-monthly",
                                            "label": "Pro-monthly"
                                        },
                                        {
                                            "value": "Pro-yearly",
                                            "label": "Pro-yearly"
                                        },
                                        {
                                            "value": "Business-monthly",
                                            "label": "Business-monthly"
                                        },
                                        {
                                            "value": "Business-yearly",
                                            "label": "Business-yearly"
                                        },
                                        {
                                            "value": "Business-DEV",
                                            "label": "Business-DEV"
                                        }
                                    ]
                                },
                                "link": ""
                            }
                        },
                        {
                            "id": "68691666722685132",
                            "field": {
                                "fieldSysName": "Billing_date",
                                "fetch": [],
                                "sysName": "Billing_date",
                                "name": "Billing date",
                                "dataType": "date",
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
                                    "timeFormat": " ",
                                    "isUTC": "true"
                                },
                                "link": ""
                            }
                        }
                    ],
                    "buttonIcon": "money",
                    "buttonType": "accent",
                    "formMapping": [
                        {
                            "id": "42131666722688653",
                            "target": "action",
                            "type": "const",
                            "value": "change_plan"
                        },
                        {
                            "id": "99011666722716592",
                            "target": "app_id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Changed!"
                }
            ],
            "filterParams": {
                "isFiltering": true,
                "filterFields": {
                    "id": {
                        "active": true,
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "name": "App id"
                    },
                    "owner_id": {
                        "active": true,
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "name": "Owner",
                        "textsearch": "fulltext"
                    },
                    "sysName": {
                        "active": true,
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "name": "System name"
                    }
                }
            }
        },
        "tableTitle": "Paid apps",
        "actions": null,
        "headers": [
            {
                "sysName": "balance",
                "dataType": "decimal",
                "name": "Credits",
                "id": "20731633354617743",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 22,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "comments",
                "dataType": "arrayLink",
                "name": "Comments",
                "id": "44101633194013799",
                "link": "admin_comments",
                "group": "1633095201028",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "events",
                "dataType": "arrayLink",
                "name": "App events",
                "id": "67551637607379984",
                "link": "appEvents",
                "group": "1633095201028",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "App id",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "isDowngraded",
                "dataType": "boolean",
                "name": "",
                "id": "26051647940518677",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 30,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "is_blocked",
                "dataType": "boolean",
                "name": "is_blocked",
                "id": "82901633095583058",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 10,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "is_cancelled",
                "dataType": "string",
                "name": "",
                "id": "95451637666256272",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 23,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": "color",
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "is_hidden",
                "dataType": "boolean",
                "name": "is_hidden",
                "id": "10251637661442776",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 11,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "is_sandbox",
                "dataType": "boolean",
                "name": "is_sandbox",
                "id": "47331625209998636",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 9,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "legacy_billing",
                "dataType": "boolean",
                "name": "",
                "id": "67651647899758711",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 29,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "name",
                "dataType": "string",
                "name": "App name",
                "id": "13661623706989350",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "next_billing_date",
                "dataType": "date",
                "name": "",
                "id": "39091647335092236",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 27,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "next_payment",
                "dataType": "decimal",
                "name": "",
                "id": "23671647335096237",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 28,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "owner_id",
                "dataType": "link",
                "name": "Owner",
                "id": "41841623707118206",
                "link": "Cloud_users",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "paddle_subscription_id",
                "dataType": "string",
                "name": "Paddle ID",
                "id": "13631633089941494",
                "link": null,
                "group": "1623707015468",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "paddle_subscription_status",
                "dataType": "string",
                "name": "Paddle Status",
                "id": "99931633090832671",
                "link": null,
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 19,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "plan_id",
                "dataType": "link",
                "name": "Billing plan",
                "id": "74161623707026653",
                "link": "Tariff",
                "group": "1623707015468",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "sysName",
                "dataType": "string",
                "name": "System name",
                "id": "27541623706978377",
                "link": null,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "team_id",
                "dataType": "link",
                "name": "Team",
                "id": "94291623707210181",
                "link": "Teams",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 7,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "name": "evidpo-lms",
                "is_blocked": false,
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "edueduedoo@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 69.5,
                            "id": "46798947-992c-44a3-bf50-66ce89514617",
                            "date": 1670662839000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 90,
                            "id": "5e921769-47c5-4720-8cd6-37b395e45a95",
                            "date": 1670591874000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9ce2a1d9-5ff6-4946-8fa8-e420b28406b0",
                            "date": 1662714043000,
                            "comment": "App evidpo (13775), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "e28f07ab-8e16-4bf6-9bbc-57a7f6b6468a",
                            "date": 1660027940000,
                            "comment": "Update app evidpo, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 38,
                            "id": "352f3da8-e8d5-4e75-9401-f701967360f5",
                            "date": 1665049185000,
                            "comment": "Adding funds via Tinkoff 2432.0 ₽ → 38.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "b8fe8394-648b-4bd3-b737-3eae00221831",
                            "date": 1665306060000,
                            "comment": "App evidpo (13775), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -35.14,
                            "id": "34909304-bb7a-490e-bcce-b41e75263cda",
                            "date": 1667309828000,
                            "comment": "On-demand resource consumption. App evidpo (13775), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": 50,
                            "id": "a649fb37-7d9e-43c7-90e1-0e06bb12bb77",
                            "date": 1666111213000,
                            "comment": "Promo-code WELCOME",
                            "type": "promo"
                        },
                        {
                            "balance": -69.5,
                            "id": "9f904645-5c59-4ac8-9717-10dce408fe26",
                            "date": 1670662834000,
                            "comment": "App evidpo (13775), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -90,
                            "id": "03bdb95b-213f-49ed-8313-e05c1f3ba48e",
                            "date": 1669910764000,
                            "comment": "On-demand resource consumption. App evidpo (13775), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": 63.14,
                            "id": "75f3033f-55c2-4d7d-9b3a-9592c466333a",
                            "date": 1668790541000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 40,
                            "id": "16c08278-0ad8-43e8-9ca5-b532de6f8ac0",
                            "date": 1660027829000,
                            "comment": "Adding funds via Tinkoff 2560.0 ₽ → 40.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "30dfb8e3-d2dd-425f-8fb0-b78d025a68e2",
                            "date": 1667984495000,
                            "comment": "App evidpo (13775), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1673347609257,
                "sysName": "evidpo",
                "plan_id": {
                    "price": 139,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "id": "13775",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 69.5,
                "events": [
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1661341161000,
                        "id": "fc62eda6-f1f5-443f-8625-882e7ef224b4"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 35.14",
                        "date": 1667309828000,
                        "id": "e6251cb3-6839-4cdd-a0cc-f5778d1c198a"
                    },
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1659258273000,
                        "id": "b7d3aeeb-2149-4860-9e2e-0aa5a17973eb"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1662714342000,
                        "id": "1a4bcb7a-41da-4560-91c0-a604aae3556b"
                    },
                    {
                        "type": "plan_update",
                        "date": 1670582809000,
                        "messagee": "App plan updated FREE → Pro-monthly",
                        "id": "dc5ab528-96ce-4a15-a8f7-74e2d93e95e7"
                    },
                    {
                        "date": 1670576443000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "6955217b-7d10-45f4-93b5-1542d44dfbc1"
                    },
                    {
                        "date": 1665306060000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "79fc72b9-a730-40f7-beb0-307802de3e5f"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1670582711000,
                        "id": "bbe72999-770a-4b62-9a35-9a10f94f20ec"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1667984495000,
                        "type": "billing_regular",
                        "id": "7c361794-ddc2-4360-8c4b-4eb617df7670"
                    },
                    {
                        "type": "plan_update",
                        "date": 1670578004000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "2593d40b-8844-4ff0-aea6-f5a3add8dcc0"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1669910764000,
                        "messagee": "On-demand charged $ 192.76",
                        "id": "de3aa625-9ddd-4a7b-b561-6bcc6304ffd6"
                    },
                    {
                        "messagee": "App is BLOCKED",
                        "type": "block_on",
                        "date": 1670578115000,
                        "id": "e9d4db27-888d-4921-9b4f-e26b6bb46419"
                    },
                    {
                        "type": "plan_update",
                        "date": 1660027941000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "439586b4-225d-417c-9c98-e5a1e7712805"
                    },
                    {
                        "date": 1670662834000,
                        "messagee": "License payment -69.5 D-coins, plan Pro",
                        "type": "billing_regular",
                        "id": "ad8d5bae-9f1f-402b-8e24-ab83d49653da"
                    }
                ],
                "comments": [],
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Конфигуратор ТКП Connective PLM",
                "is_blocked": false,
                "team_id": {
                    "name": "Connective Team",
                    "owner_id": "m.garifullin.f@gmail.com",
                    "tariff_id": "team_monthly",
                    "id": "8ea29006-5b45-44de-b20d-2a24a6922459",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "m.garifullin.f@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -103.13,
                            "id": "96197574-d89b-4fa9-b6c0-abb37c79ea5c",
                            "date": 1669910794000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -19.9,
                            "id": "4144341a-05e4-45e4-94e3-5ebcf17a9017",
                            "date": 1667309842000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": 100,
                            "id": "3cb12f18-7f19-405a-8749-5f14ce0ad00f",
                            "date": 1667300478000,
                            "comment": "Promo-code YQD2AH1CQ5MI",
                            "type": "promo"
                        },
                        {
                            "balance": -19.16,
                            "id": "121e8228-ea49-4ef8-a6ab-18957d1f58aa",
                            "date": 1664619194000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-09",
                            "type": "ondemand"
                        },
                        {
                            "balance": 150,
                            "id": "dcf16790-971c-4487-8747-42a2c26603d4",
                            "date": 1662017378000,
                            "comment": "Promo-code 0FDZ3CZHNCDI",
                            "type": "promo"
                        },
                        {
                            "balance": 330.49,
                            "id": "76305202-d2fe-4cf8-a611-ee3fd1145665",
                            "date": 1671200593000,
                            "comment": "Wire transfer from ООО «КОННЕКТИВ ПЛМ», 21151.360000 ₽ → 330.49 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -108,
                            "id": "f702e985-824f-43e4-a1d9-417dab4c4d73",
                            "date": 1661432403000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "c36219c3-5168-4411-9f66-a2e47eea7e7d",
                            "date": 1658754004000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "87d2033f-c057-4e1d-ba75-f9e52c71c564",
                            "date": 1666702803000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "86746e7c-1423-49cd-8c7e-b261a8da15fc",
                            "date": 1651065340000,
                            "comment": "Create app connectiveconfiguratortcp, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "69fb2c12-7831-4432-ab79-98b6dd91b551",
                            "date": 1648567835000,
                            "comment": "Update app sump, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "178d9e4e-1c6e-481c-8658-0a7293b54abb",
                            "date": 1657608399000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": 120,
                            "id": "e275cbcf-d293-4cb3-9f8f-5b626ad9d94a",
                            "date": 1648567750000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": -7.3,
                            "id": "050d3c58-bce0-4604-a266-5387fee35b65",
                            "date": 1662047123000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "3885b6a0-8997-4bc9-a9d2-c11644868613",
                            "date": 1651395633000,
                            "comment": "App moviesappis (12680), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "314af1d9-3bb2-4f1e-b04f-b3922c012108",
                            "date": 1669381226000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "787173c5-77b8-4a22-8457-aed3b4b475f0",
                            "date": 1648739458000,
                            "comment": "Create app moviesappis, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "85f6dc4b-bf9c-4eac-a69f-1f837a9ef7e4",
                            "date": 1653499358000,
                            "comment": "Promo-code ZQA0375H4CXR",
                            "type": "promo"
                        },
                        {
                            "balance": -108,
                            "id": "0ee6f93b-916e-412b-9cdf-4e911c678750",
                            "date": 1653499444000,
                            "comment": "Team  Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "a1c41424-d2a6-4f69-982c-4d555903ca07",
                            "date": 1664110829000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "c334076c-c3cd-44d4-8d6b-f003769eef02",
                            "date": 1651309215000,
                            "comment": "App sump (12477), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "a89463eb-4f81-4e55-b99e-41777d02ccb1",
                            "date": 1656162004000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "next_billing_date": 1653645983345,
                "sysName": "connectiveconfiguratortcp",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox",
                    "description": "Sandbox for Team plan",
                    "id": "Pro-sandbox"
                },
                "id": "12947",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1654074095000,
                        "messagee": "App plan updated Pro-sandbox → FREE",
                        "id": "afa33d41-ccf3-486c-91ba-940aa0ca1636"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1654079416000,
                        "id": "885e1054-5b98-403a-9d9c-7052d9ec399e"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 103.13",
                        "date": 1669910794000,
                        "id": "3134f3de-f5c5-4291-b475-f71de42d656c"
                    },
                    {
                        "type": "plan_update",
                        "date": 1653642084000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "7df6260c-3fec-421c-91e0-22faf4469ef7"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1667309842000,
                        "messagee": "On-demand charged $ 19.9",
                        "id": "0f8d5351-b95f-4804-a2fb-da3d68f62f46"
                    },
                    {
                        "type": "plan_update",
                        "date": 1654071081000,
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "id": "40564cea-786d-4a88-8f77-590cb7dbecdf"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "type": "billing_regular",
                        "date": 1653642084000,
                        "id": "0c7434bc-aa58-4980-9c27-7c42528e6e3d"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 19.16",
                        "date": 1664619194000,
                        "id": "62e51099-52a3-4049-b553-b4852c6a0c6e"
                    },
                    {
                        "date": 1662047122000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 7.3",
                        "id": "44a9fd0a-33c6-4db5-b4be-aea3f433ee8f"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "date": 1654074100000,
                        "type": "billing_regular",
                        "id": "62b85fc1-3f73-4566-abbb-a3f6d119ec0f"
                    },
                    {
                        "type": "plan_update",
                        "date": 1654079478000,
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "id": "c8e75856-7971-4202-899f-c385ee1e3abf"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "medicos",
                "is_blocked": false,
                "team_id": {
                    "name": "AppSumo Tier 3",
                    "owner_id": "othon.nin@1purecbd.com",
                    "tariff_id": "AppSumo_tier3",
                    "id": "695c81ee-6146-45ac-ab51-0b20dfd3f21b",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "othon.nin@1purecbd.com",
                    "wallet_transactions": []
                },
                "next_billing_date": 1672018841559,
                "sysName": "medicos",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "12043",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "date": 1669426719000,
                        "id": "a8af4dbd-62d6-4bbd-b45a-b49ee28150e6"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1650793918000,
                        "id": "6f9fccfc-615e-45d8-b86d-f68ecfbbb0f5"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "date": 1669395861000,
                        "id": "366701ec-0312-4e4a-98d9-442fb0973781"
                    },
                    {
                        "date": 1669395909000,
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "id": "bc1c7253-f3ce-4c28-beef-bab41b446a25"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1669426841000,
                        "id": "91e66f63-776f-4b04-9e2b-fe2f1f3d922d"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "lass",
                "is_blocked": false,
                "team_id": {
                    "name": "Polytell",
                    "owner_id": "donchenko.pavel@gmail.com",
                    "tariff_id": "team_monthly",
                    "id": "f7c404cc-92c5-4e37-bb1b-bd52abc5b1a8",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": -780.685,
                    "id": "donchenko.pavel@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -429,
                            "id": "d3293e32-f42a-4745-befb-a889a28d7d52",
                            "date": 1671699645000,
                            "comment": "App lass (8909), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 594,
                            "id": "0faebb95-4041-449f-a142-9aab6644ec18",
                            "date": 1667249051000,
                            "comment": "Affiliate reward for nikos@defender.ru transaction (app defender, -1188 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -429,
                            "id": "2851c242-f392-4b49-bb09-406d24a014fe",
                            "date": 1666429224000,
                            "comment": "App lass (8909), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "40ef1e3b-3de4-44b0-b77b-27349218611a",
                            "date": 1668430815000,
                            "comment": "Team Polytell, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -10.065,
                            "id": "4eb1aa9d-808c-4128-9932-6946ed0e852e",
                            "date": 1664733735000,
                            "comment": "Affiliate reward for nikos@defender.ru transaction (app defender, 20.13 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": 214.5,
                            "id": "c222cc89-7235-4ba2-9565-e8386f420467",
                            "date": 1664733712000,
                            "comment": "Affiliate reward for donchenko.pavel@gmail.com transaction (app lass, -429 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -429,
                            "id": "597293ea-2168-4edc-b0fb-e7db2b5fbf9c",
                            "date": 1669107627000,
                            "comment": "App lass (8909), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39.55,
                            "id": "7bb6eae8-1386-4e28-83bf-fea0e1f41e0d",
                            "date": 1656666888000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-06",
                            "type": "ondemand"
                        },
                        {
                            "balance": -19.92,
                            "id": "ddb7b1ce-ae25-4767-b7a4-415873e113fa",
                            "date": 1654081815000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-05",
                            "type": "ondemand"
                        },
                        {
                            "balance": -139,
                            "id": "55643645-2d54-4037-ba3a-92e515c0028c",
                            "date": 1655888434000,
                            "comment": "App lass (8909), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -61.85,
                            "id": "cc2294eb-a68b-4a60-bc18-26d188d24335",
                            "date": 1667309732000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -429,
                            "id": "7972be0d-6692-4849-bd2d-0c4e15070b5d",
                            "date": 1651962769000,
                            "comment": "Update app lass, plan Business-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -7.14,
                            "id": "9e2a3f25-0109-4953-bda8-e0e9caf291dd",
                            "date": 1659359379000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-07",
                            "type": "ondemand"
                        },
                        {
                            "balance": -139,
                            "id": "6e0a5aca-a7f4-48ce-be6b-65e3e1688f8b",
                            "date": 1653296497000,
                            "comment": "App lass (8909), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "a00ca563-3ce5-45da-aa9b-66070f2a258b",
                            "date": 1665752408000,
                            "comment": "Team Polytell, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "66ec6301-605c-4e60-aa6b-a51012b3a7b0",
                            "date": 1650704435000,
                            "comment": "App lass (8909), license payment, plan Free",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1000,
                            "id": "be636005-7da8-4a8d-933f-ff0ca6bb92f9",
                            "date": 1651838230000,
                            "comment": "Promo-code AIUYW2GTX1OR",
                            "type": "promo"
                        },
                        {
                            "balance": -56.06,
                            "id": "13e33c86-f7aa-436c-80be-cd49d3bb9c77",
                            "date": 1662047061000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": -397.32,
                            "id": "8ce7bce3-03e6-4b46-8ae1-6e6aa558f8dc",
                            "date": 1648980601000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": 28.86,
                            "id": "f542aee3-d606-401f-bdc3-594e315fd8c9",
                            "date": 1663156732000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "e04eaccd-486f-49ca-ac3c-a9387f756744",
                            "date": 1649548800000,
                            "comment": "App def (10240) license payment",
                            "type": "app_payment"
                        },
                        {
                            "balance": -73.54,
                            "id": "442ee78b-e237-4f96-870f-20d162ab748b",
                            "date": 1664619154000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-09",
                            "type": "ondemand"
                        },
                        {
                            "balance": -54,
                            "id": "87aca4a7-1c1a-4a0f-bc04-e98b94beca3c",
                            "date": 1671022811000,
                            "comment": "Team Polytell, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 19.5,
                            "id": "5aaca74d-5ff2-4900-8c6d-3e92cde70e8d",
                            "date": 1664732869000,
                            "comment": "Affiliate reward for nikos@defender.ru transaction (app defender, -39 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -68.27,
                            "id": "746a8968-c155-4635-90df-fc12ad10906c",
                            "date": 1669910821000,
                            "comment": "On-demand resource consumption. App lass (8909), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": 766,
                            "id": "021295ca-d491-4e94-8f32-f0eda914d6a4",
                            "date": 1651837507000,
                            "comment": "Wire transfer",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -139,
                            "id": "32265104-3941-4da9-a95f-319542654f8a",
                            "date": 1661158832000,
                            "comment": "App lass (8909), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "1f009798-e06f-4488-914c-ffb442fc406b",
                            "date": 1662580545000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -54,
                            "id": "033dafbe-7077-421e-bea1-1333db2c8c6f",
                            "date": 1663156732000,
                            "comment": "Team  Polytell, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "4539becc-b94b-4fe4-a380-5bfada94d80a",
                            "date": 1663837244000,
                            "comment": "App lass (8909), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "99c4b48d-832b-450a-ad41-c5907f7f3747",
                            "date": 1658480466000,
                            "comment": "App lass (8909), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 69.5,
                            "id": "cf3561ae-43ec-4c84-8add-8a3c2901c9b2",
                            "date": 1664733516000,
                            "comment": "Affiliate reward for nikos@defender.ru transaction (app defender, -139 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": 255.67,
                            "id": "a7abc026-4e58-4b65-8c3a-24d3dbe73a0a",
                            "date": 1664733521000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1674382249584,
                "sysName": "lass",
                "plan_id": {
                    "price": 429,
                    "name": "Business",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "paddle_subscription_id": "11019757",
                "id": "8909",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 429,
                "events": [
                    {
                        "messagee": "On-demand charged $ 68.27",
                        "type": "billing_ondemand",
                        "date": 1669910821000,
                        "id": "9cd4ba81-44dd-4b31-b4a8-ca432b712847"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1669107627000,
                        "type": "billing_regular",
                        "id": "7664ee44-587a-4118-bf24-04717a5b3a7e"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 73.54",
                        "date": 1664619154000,
                        "id": "9c565ae8-b17e-4f74-953d-a2a544ba514e"
                    },
                    {
                        "date": 1667309732000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 61.85",
                        "id": "ef419fd5-0e8e-4f3c-b7ef-036ccc8b490a"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1643347975000,
                        "messagee": "Tariff has been changed Free (FREE) → Pro (Pro-monthly)",
                        "id": "8f807c98-23cb-4574-8368-49db69968628"
                    },
                    {
                        "date": 1661158835000,
                        "messagee": "License payment -139 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "fe312ccf-b547-4658-9bca-aafd2a3a69e0"
                    },
                    {
                        "date": 1655888434000,
                        "messagee": "License payment -139 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "ec3aa31f-3787-45ff-b395-d26334c332a4"
                    },
                    {
                        "date": 1642668289000,
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro (Pro-monthly) → Free (FREE)",
                        "id": "d96df401-775e-42c0-8f71-f72595fbbad2"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1643701537000,
                        "messagee": "On-demand charged $ 147.87",
                        "id": "182b01db-7d0b-473e-bef5-e4bbd1f4b1b0"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1659359379000,
                        "messagee": "On-demand charged $ 7.14",
                        "id": "add2742a-b16f-4bff-bee6-7fea9560a863"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Free",
                        "type": "billing_regular",
                        "date": 1650704448000,
                        "id": "f54a6879-2839-4042-b052-5bfa959bcad3"
                    },
                    {
                        "date": 1642224312000,
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro (Pro-monthly) → Free (FREE)",
                        "id": "22ea0a8b-d803-4e1b-a7e2-f4e31455c35a"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 397.32",
                        "date": 1648980601000,
                        "id": "c773f990-0011-4990-a6cf-2e777296c6f9"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "type": "billing_regular",
                        "date": 1663837244000,
                        "id": "21251fb4-2367-49ec-a37d-4c94f1319bae"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro (Pro-monthly) → Free (FREE)",
                        "date": 1642946899000,
                        "id": "6b8f00f9-586a-4973-9da7-dd1e371bd023"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1666429224000,
                        "type": "billing_regular",
                        "id": "efc1d845-1aff-4add-afdc-58a5d2af0229"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1662047061000,
                        "messagee": "On-demand charged $ 56.06",
                        "id": "24fb3ad5-6f9a-43e2-8841-b7a8544153e2"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1642667869000,
                        "messagee": "Tariff has been changed Free (FREE) → Pro (Pro-monthly)",
                        "id": "75a8327d-c997-489c-a0a2-dafe169a3051"
                    },
                    {
                        "date": 1642428972000,
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Pro (Pro-monthly)",
                        "id": "3d8e24bf-e72f-482a-b4a4-b79ed02a5371"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 19.92",
                        "date": 1654081815000,
                        "id": "cda44ebf-e59b-4e4b-a546-38ba7dd79160"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Business",
                        "type": "billing_regular",
                        "date": 1653296519000,
                        "id": "6adb3234-403c-4d6b-958b-7411e684e292"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Pro (Pro-monthly)",
                        "date": 1642915289000,
                        "id": "7c5fab07-40fa-4adf-a2e4-139933646ef1"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1656666888000,
                        "messagee": "On-demand charged $ 39.55",
                        "id": "d58e2a8c-6561-4404-8ff6-2786625ce530"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1642429009000,
                        "messagee": "Tariff has been changed Pro (Pro-monthly) → Free (FREE)",
                        "id": "62db6196-f550-410f-bdb5-b74ad3b2c2b3"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1671699647000,
                        "type": "billing_regular",
                        "id": "5200d065-0456-425f-9966-129cb38eb3bf"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Business",
                        "type": "billing_regular",
                        "date": 1658480466000,
                        "id": "54425786-2b3d-4fc2-92cb-55a1b33cb483"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "Zerocoder",
                "team_id": {
                    "name": "Zerocoder",
                    "owner_id": "leonid.byakov@gmail.com",
                    "tariff_id": "team_monthly",
                    "id": "d533e2e8-3aef-4e3e-a232-f86c49f04f46",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": -193.01125,
                    "id": "leonid.byakov@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -54,
                            "id": "ebc5d231-c370-45eb-871d-7b10c0a16001",
                            "date": 1670850006000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "75e0dc22-a360-4092-b2c2-b7c947af4f59",
                            "date": 1670230865000,
                            "comment": "App hh_send_message (2894), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "bddf504b-65d8-42af-8b13-4493596eaf5c",
                            "date": 1667638820000,
                            "comment": "App hh_send_message (2894), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 250.1,
                            "id": "fef84322-866c-42d0-b129-3071fba9d6bd",
                            "date": 1666941899000,
                            "comment": "Adding funds via Tinkoff 16005.0 ₽ → 250.10 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "d910160c-5ada-49bd-a062-68765a0ad12e",
                            "date": 1668258009000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "d2b1383a-e433-4f64-83b2-fc31553c24e4",
                            "date": 1662368417000,
                            "comment": "App hh_send_message (2894), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "df4f19b7-4492-4cb1-8811-d24d0431426a",
                            "date": 1652366799000,
                            "comment": "Team  Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1000,
                            "id": "dace3cb9-1538-4894-b540-3a0c19a043a8",
                            "date": 1652361469000,
                            "comment": "Promo-code EJHEHNRBPGB9",
                            "type": "promo"
                        },
                        {
                            "balance": 192.96875,
                            "id": "eec55985-5547-4615-b358-957e9505f263",
                            "date": 1669797061000,
                            "comment": "Adding funds via Tinkoff 12350.0 ₽ → 192.96875 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -528.05,
                            "id": "04bb750f-0360-454f-aa9f-3e4b1be4e711",
                            "date": 1651503538000,
                            "comment": "On-demand resource consumption. App hh_send_message (2894), period 2022-04",
                            "type": "ondemand"
                        },
                        {
                            "balance": 483,
                            "id": "ce57b775-1c25-4c1d-9b7d-3500f80fd94e",
                            "date": 1661421452000,
                            "comment": "Adding funds via Tinkoff 30912.0 ₽ → 483.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 429,
                            "id": "5a685016-339e-42d6-a4af-d99b1b72765e",
                            "date": 1650884228000,
                            "comment": "Adding funds via Tinkoff 34320.0 ₽ → 429.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 1,
                            "id": "efc86bd6-2e54-4094-9510-a18bdcc02406",
                            "date": 1650205023000,
                            "comment": "Adding funds via Tinkoff 80.0 ₽ → 1.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -429,
                            "id": "c3ae0570-e39c-40b9-9517-595b1e2da9a0",
                            "date": 1650635339000,
                            "comment": "App hh_send_message (2894), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -480.49,
                            "id": "a179cc81-db2a-4392-b68d-b4175225f4e9",
                            "date": 1646092800000,
                            "comment": "On-demand resource consumption. App  hh_send_message (2894), period 2022-02",
                            "type": "ondemand"
                        },
                        {
                            "balance": 852.65,
                            "id": "6186dbd7-945d-45e5-ad48-811b0cbe8111",
                            "date": 1649832241000,
                            "comment": "Adding funds via Tinkoff 68212.0 ₽ → 852.65 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -429,
                            "id": "cdedef86-369c-40c6-a90d-35760b9e102e",
                            "date": 1654419616000,
                            "comment": "App hh_send_message (2894), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -372.17,
                            "id": "94fcba7c-a2bb-4cda-baed-6a416671cd46",
                            "date": 1648979995000,
                            "comment": "On-demand resource consumption. App hh_send_message (2894), period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -54,
                            "id": "5728a71a-ad1a-4e58-bf52-8ecb3b177615",
                            "date": 1655214165000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 664.19,
                            "id": "ec79d9f5-9692-49a4-a927-7a0fee86e9a8",
                            "date": 1655811984000,
                            "comment": "Adding funds via Tinkoff 45829.0 ₽ → 664.19 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "4fbde6e0-b22a-40fb-a85f-43837551b6c2",
                            "date": 1657630804000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "61223c27-8d32-4807-b592-ebcc4b2cd187",
                            "date": 1665579611000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "a2b3c6c0-b483-4ae3-9635-16d9de3f7d7a",
                            "date": 1662987607000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 100,
                            "id": "53a0e5a2-d64e-4a9b-8d74-aa069342a5eb",
                            "date": 1657607500000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": 383,
                            "id": "3212b4fe-636a-48ed-9922-15e68f442c55",
                            "date": 1658391351000,
                            "comment": "Adding funds via Tinkoff 24512.0 ₽ → 383.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -429,
                            "id": "1f9e8594-8192-4cc2-9f3f-7f2c16f7fdc5",
                            "date": 1652518855000,
                            "comment": "App hh_send_message (2894), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "dd35cd57-068a-4168-bebc-a78fd7ca4504",
                            "date": 1657011618000,
                            "comment": "App hh_send_message (2894), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "7c228bc2-4a5c-4a9e-961f-309137310d56",
                            "date": 1660309205000,
                            "comment": "Team Zerocoder, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -171.14,
                            "id": "7b1fdd03-897f-4c2c-92c1-c1eb33ce76d0",
                            "date": 1654081233000,
                            "comment": "On-demand resource consumption. App hh_send_message (2894), period 2022-05",
                            "type": "ondemand"
                        },
                        {
                            "balance": -429,
                            "id": "2775a9de-d8d6-4986-89b9-c0e62722a66b",
                            "date": 1659690033000,
                            "comment": "App hh_send_message (2894), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -3.07,
                            "id": "2083d69a-c680-4bb7-8845-01fbaf262602",
                            "date": 1662047162000,
                            "comment": "On-demand resource consumption. App hh_send_message (2894), period 2022-08",
                            "type": "ondemand"
                        }
                    ]
                },
                "next_billing_date": 1672909609626,
                "sysName": "hh_send_message",
                "plan_id": {
                    "price": 139,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "8277015",
                "id": "2894",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 139,
                "events": [
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1670230869000,
                        "type": "billing_regular",
                        "id": "e2d14c73-1c9b-4fe5-a5dd-631035cf78e5"
                    },
                    {
                        "date": 1652518871000,
                        "messagee": "License payment -429 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "72c73ac4-09bf-40a8-9838-20496b387e58"
                    },
                    {
                        "date": 1662047162000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 3.07",
                        "id": "1ac8a330-12f1-45ca-99d9-63399ae755eb"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1646124689000,
                        "messagee": "On-demand billing FAILED, sum $ 480.49",
                        "id": "4e117e92-8471-4a86-90dc-a818b95ebc1a"
                    },
                    {
                        "date": 1664960809000,
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-monthly",
                        "id": "62546901-2d3a-48a0-97a5-ea5275b52c31"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1646210240000,
                        "messagee": "On-demand billing FAILED, sum $ 480.49",
                        "id": "f96348ed-98c5-4da8-a853-6967b6074e81"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 171.14",
                        "date": 1654081223000,
                        "id": "c5290d8f-7ffd-404f-9787-1cbf0f755b9c"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1659690034000,
                        "type": "billing_regular",
                        "id": "c93b5b7a-e141-4031-86fb-f75af8d08b5f"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1662368421000,
                        "type": "billing_regular",
                        "id": "4d439092-f759-489a-95de-bc14c684c96d"
                    },
                    {
                        "date": 1648979995000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 372.17",
                        "id": "1415445d-4adc-4862-b549-050fcef31b2e"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1650635340000,
                        "type": "billing_regular",
                        "id": "1f84f57d-85c7-4480-8796-033bfe2b9ead"
                    },
                    {
                        "type": "plan_update",
                        "date": 1661423051000,
                        "messagee": "App plan updated Business-monthly → Pro-monthly",
                        "id": "22282e11-0c23-48a2-9272-c774aa74aeea"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1651503538000,
                        "messagee": "On-demand charged $ 528.05",
                        "id": "a7def59a-e5b6-4cd5-ba8b-ac98364c6fa8"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1643699706000,
                        "messagee": "On-demand charged $ 221.11",
                        "id": "e7cb51f5-c4fd-4dbc-a256-bf613272d2ed"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 352.89",
                        "date": 1641044842000,
                        "id": "adc28840-f7b6-4edb-9e92-82f6e441ca18"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "type": "billing_regular",
                        "date": 1657011624000,
                        "id": "1a1f5f07-5163-4375-9897-faa01d21844e"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → FREE",
                        "date": 1664960426000,
                        "id": "fa424532-8ed2-4556-b3c7-d0fe7e6e1eac"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1667638826000,
                        "type": "billing_regular",
                        "id": "8a6a2776-6c56-48a1-a591-74260e2c9553"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1654419638000,
                        "type": "billing_regular",
                        "id": "48fa40fa-d69d-43dc-921c-dd896112fc02"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "pomnimlubim",
                "is_blocked": false,
                "team_id": {
                    "name": "AppSumo Tier 3",
                    "owner_id": "lykovmaxim@gmail.com",
                    "tariff_id": "AppSumo_tier3",
                    "id": "09a8635b-cfa3-4690-917a-55807f290808",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 220,
                    "id": "lykovmaxim@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 120,
                            "id": "c8c70987-1de1-48be-bcee-3054122296c1",
                            "date": 1657561838000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": 100,
                            "id": "ed17875d-9593-41c9-93d6-3aead615749f",
                            "date": 1657561823000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1653213871694,
                "sysName": "pomnimlubim",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "paddle_subscription_id": "5085019",
                "id": "3842",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1650557436000,
                        "id": "1bdf6ec1-1fed-42c4-8675-01d1efe17519"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1653562181000,
                        "id": "4d8da2d9-7992-4d2e-8eef-0aa76c618d13"
                    }
                ],
                "comments": "",
                "legacy_billing": ""
            },
            {
                "name": "directual-site",
                "is_blocked": false,
                "team_id": {
                    "name": "Dream team",
                    "owner_id": "pavel@directual.com",
                    "tariff_id": "team_monthly",
                    "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                    "is_hidden": false
                },
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 481.41,
                    "id": "pavel@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d8ed055d-08a3-4921-adb1-daa946859040",
                            "date": 1665997255000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 214.5,
                            "id": "dd6d5abb-acb8-434d-8b20-acb566b49549",
                            "date": 1664732285000,
                            "comment": "Affiliate reward for pavel@directual.com transaction (app tg-demo, -429 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -162,
                            "id": "c40dbd39-b1b4-4772-beb8-4fda6fba12fc",
                            "date": 1664629205000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b38a4701-b098-4d57-bdaa-7889d2225d28",
                            "date": 1664629205000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6275e200-2363-46f7-852f-af4dffd2c13a",
                            "date": 1661245232000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "50bc7c6a-ec52-416b-ba4c-c534238b65ab",
                            "date": 1660035640000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4500,
                            "type": "test",
                            "date": 1666861717000,
                            "id": "2fedf56a-3403-4bfc-ab34-9d46bff6ae10"
                        },
                        {
                            "balance": -39,
                            "id": "46fc1f44-5bc3-4205-aa37-1a4e6002ccb1",
                            "date": 1658566887000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2a1cebcd-8099-4ea5-9d30-efed1c700c1d",
                            "date": 1657616454000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "e14a96ca-be6f-4284-9bad-6162ab4d9f0e",
                            "date": 1656680403000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "bebb9537-2214-431a-a14e-fdd48fd1c804",
                            "date": 1662714348000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "03d290c3-b853-49d5-8e79-ec106b2f37d1",
                            "date": 1662037204000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "1b9f8a32-4a2a-4d98-8e10-462d9aaa348f",
                            "date": 1644400264000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "aa5c1d63-edeb-477a-9642-a05caafc23c1",
                            "date": 1659358817000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "4a69b3b9-58bc-4719-862e-6ed90d5b5780",
                            "date": 1657616442000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "f93f6991-8a45-4b3d-ac53-78da7d2134ea",
                            "date": 1657357292000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1,
                            "id": "acdf07b4-259d-40d9-b48e-2a79c5e2d7ae",
                            "date": 1644357471000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -162,
                            "id": "d3eed4a3-6323-45f9-af5c-916f3cfb7824",
                            "date": 1659358817000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0c08d7be-ee02-470b-9590-b7fad1c9de12",
                            "date": 1651421012000,
                            "comment": "Team  Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "ad7f2671-951b-468f-8342-7dfac07d9895",
                            "date": 1660294836000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "5559e6e7-e261-4626-9d31-57829feb7b27",
                            "date": 1650634892000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "9433d35c-b0c3-4016-90a3-ce48e065b296",
                            "date": 1660294832000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -262.09,
                            "id": "93ef9601-b0be-4955-b4d3-2bde8e548334",
                            "date": 1648979934000,
                            "comment": "On-demand resource consumption. App directual-site, period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "08c60309-8278-4e34-83f8-c9059a187f95",
                            "date": 1655974840000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "d15d11df-ce69-4636-8ebc-910627654ebb",
                            "date": 1644400149000,
                            "comment": "Refund",
                            "type": "paddle_refund"
                        },
                        {
                            "balance": -162,
                            "id": "e6eef191-8ce7-4112-b5fa-ca261e1d8924",
                            "date": 1656680403000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "b8cb5693-8aff-46bd-afb2-510d8e1a227c",
                            "date": 1644273870000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "date": 1652376382000,
                            "type": "test",
                            "balance": 998,
                            "id": "dd94ba83-e6d6-4664-a17a-a9c83c37b739"
                        },
                        {
                            "balance": -39,
                            "id": "90cab7c7-c644-4dde-866c-0a3eef2917ab",
                            "date": 1653317346000,
                            "comment": "Create app showcase-store, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "359583b7-efeb-4908-9d37-3ee35de1ea33",
                            "date": 1644274149000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "8db87812-3d3b-4000-bdd5-13f83a250b4b",
                            "date": 1644356576000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "07d1d9f6-c4a3-4566-bfdc-9c8eda5d6c56",
                            "date": 1671267631000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "726bda7e-791a-4886-8094-8efa502c4606",
                            "date": 1662037204000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b97da617-c60a-4879-914c-b92303724ac8",
                            "date": 1651423035000,
                            "comment": "Team  My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2771d150-07f5-41ce-be29-aff64c73bd1f",
                            "date": 1655024501000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "5b6aa040-7046-49ff-86fd-aaed48d41ba5",
                            "date": 1652376443000,
                            "comment": "Update app tg-demo, plan Business-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 500,
                            "date": 1651420946000,
                            "type": "test",
                            "id": "73295450-38e7-454f-8144-2043c3b2e137"
                        },
                        {
                            "balance": -39,
                            "id": "f87ef7af-8ab7-4f4a-bf77-d781bbf6ae77",
                            "date": 1654775846000,
                            "comment": "Update app mktplace, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "a79bad51-97a5-40dd-a636-7b224fa8c843",
                            "date": 1655024420000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1000,
                            "id": "70e24705-a5fc-4dee-9238-e8662a16ee91",
                            "date": 1655895947000,
                            "comment": "Promo-code NOWAR",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "80c8923f-e310-4470-82e9-b45f6ba84cfa",
                            "date": 1644356410000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "0eda0c60-a4c1-4c8f-ad61-4a694aab1949",
                            "date": 1655214068000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "25d1b775-93d5-49e6-8f11-b5678c1c8de2",
                            "date": 1662973230000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0dc29b14-8f3f-4543-9cfd-3d9a712863ee",
                            "date": 1655214165000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "next_billing_date": 1662977716241,
                "balance": 300,
                "sysName": "directual-site",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox",
                    "description": "Sandbox for Team plan",
                    "id": "Pro-sandbox"
                },
                "paddle_subscription_id": "7783322",
                "id": "1822",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1661420026000,
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "id": "ebcc7c63-26f0-4151-bc03-a49faa040aed"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1655024479000,
                        "type": "billing_regular",
                        "id": "4be03bcd-9340-49fd-bd46-c46538e68211"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1641047642000,
                        "messagee": "On-demand charged $ 0",
                        "id": "7dc93e2a-a3dc-4484-b0af-597bb8058147"
                    },
                    {
                        "date": 1650635132000,
                        "messagee": "License payment -1 D-coins, plan Pro",
                        "id": "b2ac70fe-3f51-43c9-9023-eea5494d408c"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro (Pro-monthly) → Pro (Pro-monthly)",
                        "date": 1641034087000,
                        "id": "ad8a54a9-01f1-42af-93b3-c9be33c3cf00"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "type": "billing_regular",
                        "date": 1660294836000,
                        "id": "42fbc087-27fc-48c2-89ad-5175528564f9"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1641047439000,
                        "messagee": "On-demand charged $ 0",
                        "id": "924725fd-7f7e-41ac-bc09-f139d3e2ed94"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1657616454000,
                        "type": "billing_regular",
                        "id": "09566315-15e5-4614-9eb5-14bfeab6c506"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro (Pro-monthly) → Pro (Pro-monthly)",
                        "date": 1641047669000,
                        "id": "d249ff7a-d610-4a54-926b-0272ffa47fa9"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 262.09",
                        "date": 1648979934000,
                        "id": "ec5f3c90-39a6-4a7f-9e5d-b12b535f1b80"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → FREE",
                        "date": 1661419979000,
                        "id": "8b974b69-efba-4296-8931-bd36ecd1776e"
                    }
                ],
                "comments": [],
                "isDowngraded": "",
                "legacy_billing": ""
            },
            {
                "name": "RVPN PROD",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 62,
                    "id": "alche.my.devmail@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 100,
                            "id": "88050437-063e-4b6b-95c7-9ad8779e2d51",
                            "date": 1671559278000,
                            "comment": "Adding funds via Tinkoff 6900.0 ₽ → 100.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 40,
                            "id": "bfc8ffcd-83da-4497-89f0-1ad76fcfd2af",
                            "date": 1668978241000,
                            "comment": "Adding funds via Tinkoff 2560.0 ₽ → 40.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "12e23a33-1d5b-454d-95d1-32262e42a90d",
                            "date": 1653838369000,
                            "comment": "Create app rvpnprod, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9e4e0ab9-fb6b-4c8d-93c2-8addc200b11b",
                            "date": 1671559306000,
                            "comment": "Update app rvpnprod, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "59544d5c-b13f-4d81-bafe-666a583bd679",
                            "date": 1658912438000,
                            "comment": "App rvpn (13213), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "80ec893f-dd61-496b-ab8e-8efaa229b897",
                            "date": 1653657709000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "b66d6c19-435c-45fd-b47e-679504270ddf",
                            "date": 1668978266000,
                            "comment": "Update app rvpnprod, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "472264ff-2535-4366-9fb3-bbd06e2bd9d7",
                            "date": 1656579629000,
                            "comment": "App rvpnprod (13230), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1,
                            "id": "45527870-a661-4de4-9341-58162a5ff8d1",
                            "date": 1668977120000,
                            "comment": "Adding funds via Tinkoff 64.0 ₽ → 1.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "e181002d-8085-4d8c-b7e7-46677eaea6b0",
                            "date": 1656320441000,
                            "comment": "App rvpn (13213), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "48ebf86b-adac-4eff-9a46-c4189008cb10",
                            "date": 1653657842000,
                            "comment": "Update app rvpn, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "76a65ce4-d28e-4d01-b5b9-bc6015282635",
                            "date": 1659085234000,
                            "comment": "App rvpnprod (13230), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "8f816adb-10bc-4d38-b3e9-1d84c7b66ff1",
                            "date": 1661761546000,
                            "comment": "App rvpnprod (13230), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 152,
                            "id": "ac094de4-d119-4ddb-bd25-65580c64c73d",
                            "date": 1668977496000,
                            "comment": "Adding funds via Tinkoff 9728.0 ₽ → 152.0 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "next_billing_date": 1674237707813,
                "sysName": "rvpnprod",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "13230",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1671526844000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "9ae541f6-7409-4319-9ceb-c554bf3343b5"
                    },
                    {
                        "type": "plan_update",
                        "date": 1671559307000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "3b70289b-ff44-4b34-bfc5-035ed760058f"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "date": 1671526843000,
                        "type": "billing_regular",
                        "id": "af09b2fa-9678-4837-8854-533d614ea189"
                    },
                    {
                        "date": 1653838372000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "04f64bc7-ccc5-4680-a613-dd26f65e1208"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1656579628000,
                        "type": "billing_regular",
                        "id": "9bf54167-50ec-473a-89d2-f2f4a97c5ae3"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1669014243000,
                        "id": "41fb5646-fd9f-4e11-9060-e68d111fc76b"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664442061000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "934de8df-4bf8-4577-9b01-37eedb8aecea"
                    },
                    {
                        "date": 1661761546000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "3d1432d6-113e-41ee-a30e-15ce6974882f"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1659085235000,
                        "type": "billing_regular",
                        "id": "f9fbfa53-28c5-4ad7-bc71-c329a64b3325"
                    },
                    {
                        "date": 1668848085000,
                        "messagee": "App is BLOCKED",
                        "type": "block_on",
                        "id": "01a4980c-e7a3-4c3f-9333-f21b06a45a59"
                    },
                    {
                        "type": "plan_update",
                        "date": 1668978266000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "88e3f02d-e0c5-4518-836b-f797687dd629"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Картины для друзей",
                "is_blocked": false,
                "team_id": {
                    "tariff_id": "AppSumo_tier1",
                    "is_hidden": true,
                    "name": "AppSumo Tier 1",
                    "id": "ecb423fa-0568-4495-b9a7-c1a54b5637a5"
                },
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 73.57,
                    "id": "artosiris@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d1142771-0af1-42cc-bbbc-5fd7bd8af7a9",
                            "date": 1671354026000,
                            "comment": "App artbot (6155), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -594,
                            "id": "819a83c5-ab81-4f5f-97bb-1b12bba536f1",
                            "date": 1669539632000,
                            "comment": "App artline (4203), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "0a493744-8b94-43d8-909b-5d4d318f66d6",
                            "date": 1657555333000,
                            "comment": "Promo-code M671QU3UL3DI",
                            "type": "promo"
                        },
                        {
                            "balance": 247,
                            "id": "3a00c25e-bcaa-42d9-9bd9-c95d86d01229",
                            "date": 1656892800000,
                            "comment": "Refund for app \"art\" downgrade",
                            "type": "refund"
                        },
                        {
                            "balance": 100,
                            "id": "6b59da9d-b160-4ee3-aa0f-518c8cd08c4e",
                            "date": 1657557541000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": -1.43,
                            "id": "bfa18f64-d9e3-4a76-a243-fab8b1d6ac07",
                            "date": 1669910935000,
                            "comment": "On-demand resource consumption. App artbot (6155), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "8bbe9b76-ef74-43e6-8a2f-f197e8105946",
                            "date": 1668810544000,
                            "comment": "Update app artbot, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "fd341be6-1f64-45fb-a2d6-437607af6260",
                            "date": 1663793792000,
                            "comment": "Promo-code A8H43ZSBRZFR",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1669371123716,
                "sysName": "art",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "paddle_subscription_id": "9915537",
                "id": "4509",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "type": "billing_ondemand",
                        "date": 1641055599000,
                        "messagee": "On-demand charged $ 0",
                        "id": "6e439a80-d164-4ff3-855d-3825d9193f60"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-yearly → FREE",
                        "date": 1656931898000,
                        "id": "8ba7ade7-62e1-4cd0-b268-5648831cfb31"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "Тендер CRM",
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 55.5,
                    "id": "valery.v.parfenov@yandex.ru",
                    "wallet_transactions": [
                        {
                            "balance": 200,
                            "id": "94e07a8f-0d17-4198-bc6d-c2e7b00e5282",
                            "date": 1670601865000,
                            "comment": "Wire transfer from ООО \"МОЙ ОФИС\" , 12800 ₽ → 200 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -143.5,
                            "id": "89919922-31d9-4c39-838a-bb15106b04a8",
                            "date": 1669910783000,
                            "comment": "On-demand resource consumption. App tendercrm (9301), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "4307610a-c035-4e95-803a-c3cf6378355a",
                            "date": 1669885235000,
                            "comment": "App tendercrm (9301), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "d50a8da8-17c6-4279-b94e-b4ae599766e2",
                            "date": 1653296497000,
                            "comment": "App kvartal (11622), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "03c7eb67-cfb4-42f3-bd66-540e0fd287ee",
                            "date": 1653382865000,
                            "comment": "App fitmaster (12431), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "7d1c3519-60c3-4632-9fc6-a878a208f0b7",
                            "date": 1667293226000,
                            "comment": "App tendercrm (9301), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 200,
                            "id": "16b5b7c3-4d87-4f46-b1ea-d1a87aace039",
                            "date": 1662992446000,
                            "comment": "Wire transfer from ООО Мой офис, 12800 ₽ → 200 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -39,
                            "id": "0315864f-0da0-43dc-9d53-e4abc9d3111d",
                            "date": 1650704433000,
                            "comment": "App fitmaster (12431), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "99d3c4ad-a5c4-40f2-a10a-a94223ab6b5a",
                            "date": 1663428227000,
                            "comment": "Update app qr-service, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "fbdee08e-191a-48af-9f9e-0eacbb641a5c",
                            "date": 1664616609000,
                            "comment": "Promo-code 3TGGBP0NEWMI",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "672321e1-2bf7-472f-ab33-6972b41ca073",
                            "date": 1650704432000,
                            "comment": "App kvartal (11622), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 50,
                            "id": "e0674b10-5ddd-4053-94b5-6dd27d6a8c0b",
                            "date": 1663765526000,
                            "comment": "Promo-code welcome",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "09ac4553-0792-407d-89a3-4c09475543d7",
                            "date": 1664616681000,
                            "comment": "Update app tendercrm, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "69f73db9-1172-41bc-a621-78b9740cedde",
                            "date": 1665997255000,
                            "comment": "App qr-service (12273), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1672565482592,
                "sysName": "tendercrm",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8756334",
                "id": "9301",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1664616682000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "94474b67-7fbc-4819-b0ca-4c57147b9b65"
                    },
                    {
                        "date": 1669885235000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "ed70a52d-360b-4fd2-8ebc-17f1563bf8b9"
                    },
                    {
                        "date": 1669910783000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 143.5",
                        "id": "628ed7da-8d64-4c8a-b0ee-a3fb4199fa18"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1667293227000,
                        "type": "billing_regular",
                        "id": "f7538dbc-8aac-45ff-8352-5a05b6fcde53"
                    },
                    {
                        "messagee": "License payment -0 D-coins, plan Free",
                        "type": "billing_regular",
                        "date": 1650704446000,
                        "id": "178dacff-f34b-4ccc-a389-d024de18e5b4"
                    }
                ],
                "comments": "",
                "legacy_billing": ""
            },
            {
                "name": "dev-jj",
                "is_blocked": false,
                "team_id": {
                    "name": "Code world team 2",
                    "owner_id": "novozhilov@code-word.ru",
                    "tariff_id": "AppSumo_tier3",
                    "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 19.5,
                    "id": "novozhilov@code-word.ru",
                    "wallet_transactions": [
                        {
                            "balance": 19.5,
                            "id": "9b975bea-a1fe-49c6-8e0f-b45c93416f33",
                            "date": 1666909392000,
                            "comment": "Affiliate reward for 2222olga86@gmail.com transaction (app sagan, -39 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -236,
                            "id": "b663331b-f5f2-42ff-8d24-6953f648793d",
                            "date": 1649751898000,
                            "comment": "Team plan upgrade (+10 lifetime sandboxes), team Code world team 2",
                            "type": "team_payment"
                        },
                        {
                            "balance": 0,
                            "id": "15b16345-dcb5-47c7-80c9-2db2e2bd68da",
                            "date": 1651395632000,
                            "comment": "App instar (12634), license payment, plan Pro-sandbox-AppSumo",
                            "type": "app_payment"
                        },
                        {
                            "balance": 236,
                            "id": "88dbdf93-9015-4ae5-80f5-3c351707961a",
                            "date": 1649679538000,
                            "comment": "Adding funds via Tinkoff 18880.0 ₽ → 236.0 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "next_billing_date": 1652519283792,
                "sysName": "dev-jj",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "12824",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1650095251000,
                        "id": "7adfb5e7-9420-46da-9680-0b2846494162"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "date": 1666531028000,
                        "id": "ad63c716-b71c-493e-81a1-ed72c3c1eb46"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Vitrina Brands",
                "is_blocked": false,
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": -424.59,
                    "id": "a.yukhtmakher@upandout.ru",
                    "wallet_transactions": [
                        {
                            "balance": -24.52,
                            "id": "0f722147-4cf3-41a2-a029-eed726b69a0f",
                            "date": 1669910877000,
                            "comment": "On-demand resource consumption. App peers (14335), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -19.5,
                            "id": "07872501-c237-42dd-956e-b59b07538ced",
                            "date": 1667811632000,
                            "comment": "App peers (14335), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "25771459-35ee-4c47-b3c7-467f9ac7b26d",
                            "date": 1667293226000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 489,
                            "id": "ced9aee1-d997-4104-bfcb-e18a224e76c5",
                            "date": 1666966293000,
                            "comment": "Adding funds via Tinkoff 31296.0 ₽ → 489.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -150,
                            "id": "f4826251-b5ad-4891-bb45-fd204f2a7908",
                            "date": 1664614840000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "ecf1197b-334a-4f08-9df2-be7d89226bd6",
                            "date": 1669885229000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "a0ef7b4c-6de4-42da-951c-2dd31aef1aff",
                            "date": 1662022827000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "b2bb78b9-e39a-4577-b291-bae7ae4d88db",
                            "date": 1663664443000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 600,
                            "id": "94933824-008a-4015-99d5-36d835f05b37",
                            "date": 1656000938000,
                            "comment": "Adding funds via Tinkoff 36000.0 ₽ → 600.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -150,
                            "id": "83cc72dc-e6c7-4645-a70e-48958e45ac08",
                            "date": 1656666027000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "37ddcd10-6694-4b87-a665-8443b3d265c7",
                            "date": 1654074021000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 450,
                            "id": "cac382af-03aa-40bd-a350-e534379cc6b5",
                            "date": 1661453847000,
                            "comment": "Adding funds via Tinkoff 28800.0 ₽ → 450.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -61.07,
                            "id": "e164c733-dfa5-4c7d-bc65-a30a60b35b08",
                            "date": 1667309914000,
                            "comment": "On-demand resource consumption. App peers (14335), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -150,
                            "id": "20baf846-70cb-420f-892c-851b1ce4e970",
                            "date": 1658307627000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "8ba3bd62-fca3-4583-adb9-36a797652aed",
                            "date": 1653123609000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "9be22a0f-8be6-4eb9-9fd7-7e84c8d0dcfe",
                            "date": 1659344441000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "1ea01746-628a-41d7-b8ee-e63b0d987df9",
                            "date": 1664442060000,
                            "comment": "App upandout (13112), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "53f0aa7f-92b9-4a8f-9663-035a6d57a09f",
                            "date": 1660986037000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "0d50b00d-5615-488e-b3aa-183fae67da6d",
                            "date": 1670403630000,
                            "comment": "App peers (14335), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "c0c0f36d-f418-466a-bbeb-9ebaf50b0f81",
                            "date": 1655715620000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "e8120607-c505-4b30-a62c-616d950c1ce8",
                            "date": 1661761546000,
                            "comment": "App upandout (13112), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1666260291823,
                "sysName": "brands247",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "paddle_subscription_id": "11265861",
                "id": "7332",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1660986037000,
                        "messagee": "License payment -150 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "ed6036fa-3e69-42b7-beac-28999958e764"
                    },
                    {
                        "date": 1643707443000,
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Business (Business-monthly)",
                        "id": "3d78d972-f622-4df2-adfb-b2402fde39a2"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "date": 1666256452000,
                        "type": "billing_regular",
                        "id": "745ed5c7-d050-4a7a-90b5-e114a2c8e35c"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Business (Business-monthly)",
                        "date": 1643706964000,
                        "id": "86be6cf0-78bb-495b-bf22-e7e2d1a97759"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro-sandbox (Pro-sandbox) → Free (FREE)",
                        "date": 1643706317000,
                        "id": "f565d317-9cc0-49a8-b43e-1e9bcd84f768"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Business (Business-monthly)",
                        "date": 1644332960000,
                        "id": "85a271bf-b273-41b7-9cae-9359d47ce28f"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Business (Business-monthly) → Free (FREE)",
                        "date": 1644332741000,
                        "id": "6cd4f4f1-945b-49d2-b4f1-6d4a6e8bfd1e"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business",
                        "type": "billing_regular",
                        "date": 1663664443000,
                        "id": "474f9529-aa97-46ab-966d-783cdd60c3e9"
                    },
                    {
                        "date": 1658307629000,
                        "messagee": "License payment -150 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "4aa6f171-3793-466f-9ee7-6ff7fcdfa864"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Business-monthly → FREE",
                        "date": 1666256456000,
                        "id": "5a367a28-59d6-48bf-879b-0ac20fd00755"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1643707007000,
                        "messagee": "Tariff has been changed Business (Business-monthly) → Free (FREE)",
                        "id": "f57f4dce-cfa9-4ef7-a1a0-9854c04ca391"
                    },
                    {
                        "date": 1655715622000,
                        "messagee": "License payment -150 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "be44c0f0-48dc-4f2f-b552-ddd76aaa4c63"
                    },
                    {
                        "messagee": "Tariff has been changed Pro-sandbox (Pro-sandbox) → Pro-sandbox (Pro-sandbox)",
                        "type": "tariff_changed",
                        "date": 1641033742000,
                        "id": "2c70dd8d-0d41-4d1d-aefd-1ddaf837143f"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business",
                        "date": 1653123611000,
                        "type": "billing_regular",
                        "id": "06c6d3a9-dd01-4daf-bf22-5cdab65781c6"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "Фильмы",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 81,
                    "id": "shurupov151289@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "b3950037-4e64-4ffb-ac3b-b0e9fcb9a2e4",
                            "date": 1668946216000,
                            "comment": "Update app crm-basik, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "888e054f-e210-48f0-9e3f-fdbf7882d550",
                            "date": 1664813514000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        }
                    ]
                },
                "sysName": "movies-zerocode",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "14304",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1664814719000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "b933bfbc-e64d-4fbd-b37f-4fed644ec0af"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "CRM BASIK",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 81,
                    "id": "shurupov151289@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "b3950037-4e64-4ffb-ac3b-b0e9fcb9a2e4",
                            "date": 1668946216000,
                            "comment": "Update app crm-basik, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "888e054f-e210-48f0-9e3f-fdbf7882d550",
                            "date": 1664813514000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1671538218047,
                "sysName": "crm-basik",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "14700",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1668354724000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "cb3f8fa4-7fcd-4e02-9fd3-c39b31d1b995"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "date": 1668946217000,
                        "id": "01024971-fcb8-4793-be90-8be7b6dd0db6"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "date": 1671526843000,
                        "type": "billing_regular",
                        "id": "f5292ba3-4adb-4775-b41a-693b68685266"
                    },
                    {
                        "type": "plan_update",
                        "date": 1671526845000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "b74bb681-a54f-41d9-8d2a-5f2f9410f73a"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "👨‍💻 Dev",
                "team_id": "ed67e613-3e97-4cd7-98a9-6a9b7968f47a",
                "owner_id": {
                    "wallet_balance": 481.41,
                    "id": "pavel@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d8ed055d-08a3-4921-adb1-daa946859040",
                            "date": 1665997255000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 214.5,
                            "id": "dd6d5abb-acb8-434d-8b20-acb566b49549",
                            "date": 1664732285000,
                            "comment": "Affiliate reward for pavel@directual.com transaction (app tg-demo, -429 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -162,
                            "id": "c40dbd39-b1b4-4772-beb8-4fda6fba12fc",
                            "date": 1664629205000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b38a4701-b098-4d57-bdaa-7889d2225d28",
                            "date": 1664629205000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6275e200-2363-46f7-852f-af4dffd2c13a",
                            "date": 1661245232000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "50bc7c6a-ec52-416b-ba4c-c534238b65ab",
                            "date": 1660035640000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4500,
                            "type": "test",
                            "date": 1666861717000,
                            "id": "2fedf56a-3403-4bfc-ab34-9d46bff6ae10"
                        },
                        {
                            "balance": -39,
                            "id": "46fc1f44-5bc3-4205-aa37-1a4e6002ccb1",
                            "date": 1658566887000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2a1cebcd-8099-4ea5-9d30-efed1c700c1d",
                            "date": 1657616454000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "e14a96ca-be6f-4284-9bad-6162ab4d9f0e",
                            "date": 1656680403000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "bebb9537-2214-431a-a14e-fdd48fd1c804",
                            "date": 1662714348000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "03d290c3-b853-49d5-8e79-ec106b2f37d1",
                            "date": 1662037204000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "1b9f8a32-4a2a-4d98-8e10-462d9aaa348f",
                            "date": 1644400264000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "aa5c1d63-edeb-477a-9642-a05caafc23c1",
                            "date": 1659358817000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "4a69b3b9-58bc-4719-862e-6ed90d5b5780",
                            "date": 1657616442000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "f93f6991-8a45-4b3d-ac53-78da7d2134ea",
                            "date": 1657357292000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1,
                            "id": "acdf07b4-259d-40d9-b48e-2a79c5e2d7ae",
                            "date": 1644357471000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -162,
                            "id": "d3eed4a3-6323-45f9-af5c-916f3cfb7824",
                            "date": 1659358817000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0c08d7be-ee02-470b-9590-b7fad1c9de12",
                            "date": 1651421012000,
                            "comment": "Team  Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "ad7f2671-951b-468f-8342-7dfac07d9895",
                            "date": 1660294836000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "5559e6e7-e261-4626-9d31-57829feb7b27",
                            "date": 1650634892000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "9433d35c-b0c3-4016-90a3-ce48e065b296",
                            "date": 1660294832000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -262.09,
                            "id": "93ef9601-b0be-4955-b4d3-2bde8e548334",
                            "date": 1648979934000,
                            "comment": "On-demand resource consumption. App directual-site, period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "08c60309-8278-4e34-83f8-c9059a187f95",
                            "date": 1655974840000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "d15d11df-ce69-4636-8ebc-910627654ebb",
                            "date": 1644400149000,
                            "comment": "Refund",
                            "type": "paddle_refund"
                        },
                        {
                            "balance": -162,
                            "id": "e6eef191-8ce7-4112-b5fa-ca261e1d8924",
                            "date": 1656680403000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "b8cb5693-8aff-46bd-afb2-510d8e1a227c",
                            "date": 1644273870000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "date": 1652376382000,
                            "type": "test",
                            "balance": 998,
                            "id": "dd94ba83-e6d6-4664-a17a-a9c83c37b739"
                        },
                        {
                            "balance": -39,
                            "id": "90cab7c7-c644-4dde-866c-0a3eef2917ab",
                            "date": 1653317346000,
                            "comment": "Create app showcase-store, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "359583b7-efeb-4908-9d37-3ee35de1ea33",
                            "date": 1644274149000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "8db87812-3d3b-4000-bdd5-13f83a250b4b",
                            "date": 1644356576000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "07d1d9f6-c4a3-4566-bfdc-9c8eda5d6c56",
                            "date": 1671267631000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "726bda7e-791a-4886-8094-8efa502c4606",
                            "date": 1662037204000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b97da617-c60a-4879-914c-b92303724ac8",
                            "date": 1651423035000,
                            "comment": "Team  My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2771d150-07f5-41ce-be29-aff64c73bd1f",
                            "date": 1655024501000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "5b6aa040-7046-49ff-86fd-aaed48d41ba5",
                            "date": 1652376443000,
                            "comment": "Update app tg-demo, plan Business-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 500,
                            "date": 1651420946000,
                            "type": "test",
                            "id": "73295450-38e7-454f-8144-2043c3b2e137"
                        },
                        {
                            "balance": -39,
                            "id": "f87ef7af-8ab7-4f4a-bf77-d781bbf6ae77",
                            "date": 1654775846000,
                            "comment": "Update app mktplace, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "a79bad51-97a5-40dd-a636-7b224fa8c843",
                            "date": 1655024420000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1000,
                            "id": "70e24705-a5fc-4dee-9238-e8662a16ee91",
                            "date": 1655895947000,
                            "comment": "Promo-code NOWAR",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "80c8923f-e310-4470-82e9-b45f6ba84cfa",
                            "date": 1644356410000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "0eda0c60-a4c1-4c8f-ad61-4a694aab1949",
                            "date": 1655214068000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "25d1b775-93d5-49e6-8f11-b5678c1c8de2",
                            "date": 1662973230000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0dc29b14-8f3f-4543-9cfd-3d9a712863ee",
                            "date": 1655214165000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "next_billing_date": 1653213858061,
                "sysName": "dev",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "6829",
                "is_hidden": false,
                "next_payment": "",
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "messagee": "License payment -0 D-coins, plan Free",
                        "type": "billing_regular",
                        "date": 1650704447000,
                        "id": "16c63e78-3e1c-43db-a4cc-f09489ef2373"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Yomkost Admin Panel",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "yomkost.app@gmail.com",
                    "wallet_transactions": []
                },
                "sysName": "yomkost-adm",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "13519",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1657535104000,
                        "id": "4a811e47-517d-4339-83c6-4d9e817cd83f"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Archivarius",
                "owner_id": {
                    "wallet_balance": 111,
                    "id": "directual@brusentsev.ru",
                    "wallet_transactions": [
                        {
                            "balance": 100,
                            "id": "d470230b-0401-4239-bff5-b2f0b69a8033",
                            "date": 1670599433000,
                            "comment": "Promo-code 40RFWIG22O6R",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "3bb71321-f8f2-48fc-8086-28af7f261b48",
                            "date": 1670242433000,
                            "comment": "Update app archivarius, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 50,
                            "id": "4d1a2094-2fa4-4a4d-b369-e6779097f353",
                            "date": 1669257106000,
                            "comment": "Promo-code welcome",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1672920834515,
                "sysName": "archivarius",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14830",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1669250092000,
                        "id": "bebf744e-409f-451e-bffd-93350be23e3f"
                    },
                    {
                        "type": "plan_update",
                        "date": 1670242434000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "d88cd045-826b-4a74-aac5-a6dcbafab4a8"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "The Beauty",
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": -0.24,
                    "id": "techops_team@finalmile.io",
                    "wallet_transactions": [
                        {
                            "balance": 3.2,
                            "id": "5676c7e2-fa4d-43c1-ac07-2c61f8913a04",
                            "date": 1669910930000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.09,
                            "id": "61510f6f-0fd6-4286-a198-ff5e9a20ca81",
                            "date": 1667309871000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -6.16,
                            "id": "8f1895fe-00d9-4a0f-a572-745dfc300266",
                            "date": 1656666914000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-06",
                            "type": "ondemand"
                        },
                        {
                            "balance": 5.82,
                            "id": "4d4428c6-7840-45d5-a54a-3a64b84ffa85",
                            "date": 1662047146000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -7.53,
                            "id": "6038fb5d-e424-4147-a814-b2e5cac560a5",
                            "date": 1654082545000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-05",
                            "type": "ondemand"
                        },
                        {
                            "balance": -6.67,
                            "id": "44649efa-a1ae-474b-bc47-9cd03b8b5373",
                            "date": 1648980893000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -2.09,
                            "id": "99d74451-0fdb-4068-8322-2b07beef3d20",
                            "date": 1667309866000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -6.03,
                            "id": "ef0ade0b-401d-4e82-9c55-6affe705d7a0",
                            "date": 1651503712000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-04",
                            "type": "ondemand"
                        },
                        {
                            "balance": 34.06,
                            "id": "3afd6df7-ec94-4409-bada-7add6c3b6809",
                            "date": 1659413843000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -7.67,
                            "id": "d20e059c-e71b-4111-bbf1-dddf123cad13",
                            "date": 1659359373000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-07",
                            "type": "ondemand"
                        },
                        {
                            "balance": -3.44,
                            "id": "e8cea35e-0640-415f-944e-2c22f0cd8940",
                            "date": 1669910926000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": 2.42,
                            "id": "a28eb024-968f-4089-a282-12b4fc4e88a3",
                            "date": 1664619228000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -5.82,
                            "id": "07c53946-f208-4d50-9ac7-7f5119b3073b",
                            "date": 1662047141000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": -2.42,
                            "id": "ceff343c-ff2f-4815-96cd-b26369f15985",
                            "date": 1664619220000,
                            "comment": "On-demand resource consumption. App final-mile (6773), period 2022-09",
                            "type": "ondemand"
                        }
                    ]
                },
                "sysName": "final-mile",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8864170",
                "id": "6773",
                "is_hidden": false,
                "legacy_billing": true,
                "events": [
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 7.53",
                        "date": 1654082545000,
                        "id": "27347eb4-8d44-4743-a202-9057372497fe"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 5.97",
                        "date": 1643702594000,
                        "id": "54419939-9614-4369-97b6-a1375a7c8eff"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1641055695000,
                        "messagee": "On-demand charged $ 8.34",
                        "id": "532edf38-9643-4e05-aa33-f956ec06bc79"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 6.03",
                        "date": 1651503712000,
                        "id": "4e342e6f-4a94-488f-986a-ca2bfb3bbc93"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 5.82",
                        "date": 1662047141000,
                        "id": "5b7a19e9-3180-49ef-b500-65c99886a7a7"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 2.09",
                        "date": 1667309866000,
                        "id": "1b61d4a2-3af8-44e0-8ff5-9e8869301d1b"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 5.69",
                        "date": 1646124908000,
                        "id": "57966bc7-7985-4a18-9bd2-1c002818eea8"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 7.67",
                        "date": 1659359373000,
                        "id": "d14498cb-24da-4614-bca4-003c1388fbf4"
                    },
                    {
                        "messagee": "On-demand charged $ 3.44",
                        "type": "billing_ondemand",
                        "date": 1669910926000,
                        "id": "a8a1a028-c888-46f9-85cd-6288c149e386"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 6.67",
                        "date": 1648980893000,
                        "id": "cf379843-cb47-4690-ac91-e7583c86133a"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1656666914000,
                        "messagee": "On-demand charged $ 6.16",
                        "id": "2679e950-e0b5-47a5-840b-5c6acc1347d7"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1664619220000,
                        "messagee": "On-demand charged $ 2.42",
                        "id": "e2570165-b7ae-4aaf-b06b-9082f5682fe4"
                    }
                ],
                "comments": [],
                "next_billing_date": "",
                "next_payment": ""
            },
            {
                "name": "Аукцион картин",
                "is_blocked": false,
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 73.57,
                    "id": "artosiris@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d1142771-0af1-42cc-bbbc-5fd7bd8af7a9",
                            "date": 1671354026000,
                            "comment": "App artbot (6155), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -594,
                            "id": "819a83c5-ab81-4f5f-97bb-1b12bba536f1",
                            "date": 1669539632000,
                            "comment": "App artline (4203), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "0a493744-8b94-43d8-909b-5d4d318f66d6",
                            "date": 1657555333000,
                            "comment": "Promo-code M671QU3UL3DI",
                            "type": "promo"
                        },
                        {
                            "balance": 247,
                            "id": "3a00c25e-bcaa-42d9-9bd9-c95d86d01229",
                            "date": 1656892800000,
                            "comment": "Refund for app \"art\" downgrade",
                            "type": "refund"
                        },
                        {
                            "balance": 100,
                            "id": "6b59da9d-b160-4ee3-aa0f-518c8cd08c4e",
                            "date": 1657557541000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": -1.43,
                            "id": "bfa18f64-d9e3-4a76-a243-fab8b1d6ac07",
                            "date": 1669910935000,
                            "comment": "On-demand resource consumption. App artbot (6155), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "8bbe9b76-ef74-43e6-8a2f-f197e8105946",
                            "date": 1668810544000,
                            "comment": "Update app artbot, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "fd341be6-1f64-45fb-a2d6-437607af6260",
                            "date": 1663793792000,
                            "comment": "Promo-code A8H43ZSBRZFR",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1674080944844,
                "sysName": "artbot",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "6844185",
                "id": "6155",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "date": 1653296502000,
                        "id": "5870c865-4f60-4d70-8ce8-53f612271417"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1669910935000,
                        "messagee": "On-demand charged $ 1.43",
                        "id": "000254f7-eedb-4216-abd8-ef8e25729714"
                    },
                    {
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "date": 1650704447000,
                        "id": "4e429de9-9b7c-40e6-8814-eadb42478423"
                    },
                    {
                        "date": 1671354029000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "432a5071-2f66-498c-ba5a-d39bd1e70f24"
                    },
                    {
                        "type": "plan_update",
                        "date": 1668810544000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "7f53f056-1399-446f-acf4-e69b8fde8f6b"
                    },
                    {
                        "type": "plan_update",
                        "date": 1654082701000,
                        "messagee": "App plan updated Startup → FREE",
                        "id": "f503765f-13d7-46dc-b752-f6675767c88d"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "Leadsplitter",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -39,
                    "id": "bagdaer@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "266e86bf-f5e9-42dc-b79c-a2185f0ca85e",
                            "date": 1671958841000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 0.83,
                            "id": "e78778cd-7342-4c8a-924d-37c52dd0e096",
                            "date": 1669910916000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -12.65,
                            "id": "2bdc4dbb-d970-49c9-9fc4-9cca97900fb4",
                            "date": 1669910905000,
                            "comment": "On-demand resource consumption. App dntl (12422), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "2125bcff-591c-4489-933f-e1aa7a7cf737",
                            "date": 1671440428000,
                            "comment": "App dentalbase (12200), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4.33,
                            "id": "2374bbe6-f978-4ddc-8c8c-dc5965563c00",
                            "date": 1669910848000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39.06,
                            "id": "7a67fbfb-15b8-4bfa-b49d-b1e18dc2cfed",
                            "date": 1671440434000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 63.28,
                            "id": "14a830dc-9c75-47eb-986c-ee4a7b4fbb35",
                            "date": 1669910843000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -67.79,
                            "id": "100e5966-00d4-4a64-80e0-43a3b44c28ae",
                            "date": 1669910838000,
                            "comment": "On-demand resource consumption. App dentalbase (12200), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": 2.17,
                            "id": "ac2378ce-0185-4f30-8dcf-a9f778f7162c",
                            "date": 1669366842000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "d49b21af-c970-4efe-9949-59d558b5e6e2",
                            "date": 1664096454000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 12.08,
                            "id": "186ac5d4-603b-46a2-bf78-e67e6ccc8001",
                            "date": 1669910910000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39,
                            "id": "338978cc-43aa-406e-ba12-54781ac7114d",
                            "date": 1661441382000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39,
                            "id": "4ef71fc4-cde7-43aa-aec8-bab77c2adf54",
                            "date": 1661441377000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6249a84c-9979-4330-b175-2cc737284513",
                            "date": 1666688426000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "8025acd3-1121-4f26-a3ca-00afc67310af",
                            "date": 1668853738000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 36.69,
                            "id": "ae068696-f704-402a-a859-c2845eb479e1",
                            "date": 1669366836000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "fc5ff838-9a2d-47b8-a8e1-eac6409c3408",
                            "date": 1661441377000,
                            "comment": "Update app dntl, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "a2557310-87b4-4de6-b350-b3a244d496ca",
                            "date": 1666688432000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -1.7,
                            "id": "f755fedf-10b1-46e6-a9ce-37fd88afd8fe",
                            "date": 1667309875000,
                            "comment": "On-demand resource consumption. App dntl (12422), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "73cb42d3-7bf4-48f2-8387-b01ac4a863ea",
                            "date": 1668853738000,
                            "comment": "Update app dentalbase, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9521508c-e9c9-4d63-b417-eca0f81ef55a",
                            "date": 1669366828000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1.7,
                            "id": "234cee77-7a28-4f05-bdc0-67ef00168ff1",
                            "date": 1667309882000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1674124140261,
                "sysName": "dentalbase",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12200",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "messagee": "App is BLOCKED",
                        "type": "block_on",
                        "date": 1668848033000,
                        "id": "2220d340-7625-4644-9b97-b73d654bd677"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1671440428000,
                        "type": "billing_regular",
                        "id": "4c267015-e38c-4e98-bbbd-bd37067690ef"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1668853836000,
                        "id": "c2b957ed-7afc-41b2-804d-e4354936729e"
                    },
                    {
                        "messagee": "On-demand charged $ 67.79",
                        "type": "billing_ondemand",
                        "date": 1669910838000,
                        "id": "4a89a5b6-739c-4c7c-a56b-7be118e3122a"
                    },
                    {
                        "date": 1668853740000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "230e4349-3ea3-450b-8f7a-982e1de4a775"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "medtechallerts",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 740.33,
                    "id": "n.dolgov@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": 41.81,
                            "id": "d7ba01f3-7463-4038-9a05-4427bf477623",
                            "date": 1669015267000,
                            "comment": "Removing developer seats for team Nikita Dolgov team (2 → 1 seats)",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "5cc74207-83ee-423f-8304-80376fe01cc4",
                            "date": 1668517212000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 100,
                            "id": "1506e696-4990-4776-92d5-9ee3522b4b40",
                            "date": 1666260626000,
                            "comment": "Promo-code BBBEDWO8NCDI",
                            "type": "promo"
                        },
                        {
                            "balance": -108,
                            "id": "20eadccc-13c0-458f-b6ba-4f4252fdaa1c",
                            "date": 1665838802000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 69.5,
                            "id": "b9c06b36-0bb4-4f7f-951a-d08db5d43caf",
                            "date": 1664798900000,
                            "comment": "Affiliate reward for sbatsov@harvester.so transaction (app harvester, -139 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": 69.5,
                            "id": "3413f49a-6f63-4acb-aeeb-26e9c775ed54",
                            "date": 1664798844000,
                            "comment": "Affiliate reward for sbatsov@harvester.so transaction (app harvester, -139 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": 69.5,
                            "id": "8b706217-564a-4ebe-931b-3eaaf4114ed2",
                            "date": 1664798918000,
                            "comment": "Affiliate reward for sbatsov@harvester.so transaction (app harvester, -139 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": 594,
                            "id": "8e197801-a93a-4d1c-9046-22fe902876de",
                            "date": 1664738133000,
                            "comment": "Affiliate reward for geshtaltonline@gmail.com transaction (app geshtaltonline, -1188 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -3.48,
                            "id": "96a8f496-b8e9-4719-b710-58bb86314363",
                            "date": 1665599745000,
                            "comment": "Adding developer seats for team Nikita Dolgov team (1 → 2 seats)",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "5dbd02d3-88ce-40dc-b03c-74c9fa8ecbc1",
                            "date": 1655214164000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 69.5,
                            "id": "dacfe6c1-4fde-4585-a07c-c0b0cf3ed5e0",
                            "date": 1664798814000,
                            "comment": "Affiliate reward for sbatsov@harvester.so transaction (app harvester, -139 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": 62,
                            "id": "70dae9fc-a1fe-4db2-9808-e49038bd2591",
                            "date": 1663571137000,
                            "comment": "Adding funds via Tinkoff 3968.0 ₽ → 62.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "33036bc7-9206-4b36-8b4e-00cd6bc525fa",
                            "date": 1650017893000,
                            "comment": "Adding developer seats for team Nikita Dolgov team (0 → 1 seats)",
                            "type": "team_payment"
                        },
                        {
                            "balance": 100,
                            "id": "f2ffcd30-9750-4c0e-ace4-4ac3be028089",
                            "date": 1657560000000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": 4,
                            "id": "33bedbcd-3453-473b-bd23-b0894b789e07",
                            "date": 1650017861000,
                            "comment": "Adding funds via Tinkoff 320.0 ₽ → 4.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "c5f6466b-79d4-4eed-a834-bb440a6502e0",
                            "date": 1671109275000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 50,
                            "id": "632d4844-dc46-480b-95c7-0e7a2ac8e134",
                            "date": 1649849335000,
                            "comment": "Promo-code welcome",
                            "type": "promo"
                        },
                        {
                            "balance": 54,
                            "id": "b1372f69-e8ec-46dc-9070-2aa90b64c931",
                            "date": 1655578290000,
                            "comment": "Adding funds via Tinkoff 3726.0 ₽ → 54.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "dd575863-1cc9-418b-a72a-64c9b48a1db7",
                            "date": 1657890003000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "8a909a5f-0a0c-40cb-afe3-2150bab8ba76",
                            "date": 1660568404000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "fb58a795-738f-4c1c-8e14-fe923331be7e",
                            "date": 1663246802000,
                            "comment": "Team Nikita Dolgov team, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "sysName": "medtechallerts",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "13628",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "messagee": "App's owner has been changed novozhilov@code-word.ru → n.dolgov@directual.com",
                        "date": 1670926419000,
                        "type": "change_owner",
                        "id": "58e5634d-282d-475e-8f3c-37170f5a18b8"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "date": 1670926311000,
                        "id": "b64269da-d36e-46ec-88c9-d52ac733b392"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1661240813000,
                        "id": "2e2e3dfa-0874-4d6c-9d69-50e11510f0f7"
                    },
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1658140308000,
                        "id": "5dc08df3-19ea-403d-84ab-c616e57e015d"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1670926339000,
                        "id": "69abba88-8dfc-4442-8e23-3cd6b576f5b2"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Brands Inventory Management",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "damiengreen04@gmail.com",
                    "wallet_transactions": []
                },
                "next_billing_date": 1654078086396,
                "sysName": "brandsinventory",
                "id": "5591",
                "is_hidden": false,
                "comments": "",
                "legacy_billing": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Investra",
                "owner_id": {
                    "wallet_balance": 42,
                    "id": "investraplatform@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "f7c46253-3c1e-4632-8ce3-47782851cccc",
                            "date": 1670662834000,
                            "comment": "App investra (14658), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "c7821fb8-ec40-471c-9220-182fd9c67cb2",
                            "date": 1668078232000,
                            "comment": "Create app investra, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "9067fcb0-2932-46ff-9e6f-37fec0b60615",
                            "date": 1668076710000,
                            "comment": "Promo-code ASTANAHUB",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1673348641317,
                "sysName": "investra",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14658",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1668078241000,
                        "id": "801b45c7-80a9-4bd2-a860-a3063e59e058"
                    },
                    {
                        "date": 1670662834000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "f9c0e2bc-2de3-4435-81a4-4e579fee59e2"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "566por",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "da664d4e@10mail.tk",
                    "wallet_transactions": []
                },
                "sysName": "566por",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "13831",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1659703662000,
                        "id": "639fceb9-dea4-4676-9df8-e300ebb40626"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "ModaPogoda",
                "is_blocked": false,
                "team_id": "Code world team 2",
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 36.52,
                    "id": "u@modapogoda.ru",
                    "wallet_transactions": [
                        {
                            "balance": -48.43,
                            "id": "11f8a335-54aa-4e41-9068-641f3507fc77",
                            "date": 1669910856000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -58.04,
                            "id": "4d52f300-2383-440b-8334-f9d05f1b3d79",
                            "date": 1667309801000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -30,
                            "id": "ca55505d-f462-4ee2-9d56-4ac0f3d53167",
                            "date": 1669798845000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 250,
                            "id": "1850579b-084a-42ce-99d8-b02cfc9f2fb9",
                            "date": 1665043349000,
                            "comment": "Wire transfer from ООО \"Модапогода, 16000 ₽ → 250 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -44.01,
                            "id": "223e0e93-4a06-4935-ba67-2d20c9f0ecc2",
                            "date": 1664619173000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-09",
                            "type": "ondemand"
                        },
                        {
                            "balance": -30,
                            "id": "4a62b269-e3d7-4700-adf1-3d7cf5f5414a",
                            "date": 1664528443000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -46.35,
                            "id": "fae5c74a-ef49-45da-a066-b354f4c633f2",
                            "date": 1662047079000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": -30,
                            "id": "a5919d72-a064-4d13-bc7b-9f040c74ed71",
                            "date": 1661850047000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -30,
                            "id": "8e9c6282-58dc-488e-bfbe-42a114a67353",
                            "date": 1659171635000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -30,
                            "id": "bace8ea0-9655-475c-907c-46f71aec8803",
                            "date": 1650635339000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -37.1,
                            "id": "a34c2e50-ebbc-4737-a63f-eb5eb99df5eb",
                            "date": 1648980128000,
                            "comment": "On-demand resource consumption. App mp, period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -52.2,
                            "id": "4a0a0ff9-cc62-4bc0-97b0-ada30f035685",
                            "date": 1654081660000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-05",
                            "type": "ondemand"
                        },
                        {
                            "balance": -38.34,
                            "id": "950eb46b-f506-4989-a340-c2ed8ef6dec6",
                            "date": 1656666895000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-06",
                            "type": "ondemand"
                        },
                        {
                            "balance": -34.94,
                            "id": "877d54bd-e1cc-4b86-a907-464208303d60",
                            "date": 1659359347000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-07",
                            "type": "ondemand"
                        },
                        {
                            "balance": 100,
                            "id": "f4cf325f-e71f-41af-8975-60f18a519f67",
                            "date": 1658134855000,
                            "comment": "Promo-code 2T1JWBB21EMI",
                            "type": "promo"
                        },
                        {
                            "balance": 250,
                            "id": "d6011282-6406-4044-98c6-ce958ceb5271",
                            "date": 1648547036000,
                            "comment": "Пополнение по счету No 118533432 от 29 марта 2022 г.",
                            "type": "bank_transfer"
                        },
                        {
                            "balance": -34.07,
                            "id": "381dbe85-06c1-45a0-a17f-21f1db45de47",
                            "date": 1651503611000,
                            "comment": "On-demand resource consumption. App mp (5283), period 2022-04",
                            "type": "ondemand"
                        },
                        {
                            "balance": 100,
                            "id": "2645ad25-b238-4829-83e4-fc9f8cb59638",
                            "date": 1648557280000,
                            "comment": "Promo-code N4ZDSLXWP14I",
                            "type": "promo"
                        },
                        {
                            "balance": -30,
                            "id": "5cf99bc8-44eb-4043-831e-679bcee96dec",
                            "date": 1653901210000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -30,
                            "id": "499343b6-fd81-4499-8e6c-8e92d77b0d9a",
                            "date": 1667120422000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -30,
                            "id": "b396ef90-c52b-462c-bb7b-efbe2e888649",
                            "date": 1652518829000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -30,
                            "id": "d32f2158-9c67-4c31-bb86-5f87f8fcdafd",
                            "date": 1656579624000,
                            "comment": "App mp (5283), license payment, plan Startup (legacy)",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1672395388161,
                "sysName": "mp",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6791951",
                "id": "5283",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 30,
                "events": [
                    {
                        "date": 1661850047000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "8af5df82-d270-40d0-950b-ef7acd2f9fdd"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1650359546000,
                        "id": "7c6b6ade-d6c7-4682-99b8-dc5a9c0f5b2b"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 58.04",
                        "date": 1667309801000,
                        "id": "a3ac6d80-26eb-4943-bf78-71bcf5a7b900"
                    },
                    {
                        "type": "billing_regular",
                        "date": 1652518859000,
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "7dcd4f71-9d66-4a6b-a9d4-346741232cf8"
                    },
                    {
                        "date": 1646124893000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand billing FAILED, sum $ 37.21",
                        "id": "6cc1d91e-6b57-45cc-a157-ef4ff9e3dfe1"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1651503611000,
                        "messagee": "On-demand charged $ 34.07",
                        "id": "e5a42fe5-4b8f-4a21-b285-e2ba23707ed9"
                    },
                    {
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "date": 1659171635000,
                        "id": "51c247fc-37b9-421d-9942-78882402f5c6"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 36.06",
                        "date": 1643701561000,
                        "id": "f117f104-e455-4d00-b5ce-bd17ea3c6ef0"
                    },
                    {
                        "date": 1656579628000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "0137903d-a28c-4eea-891e-9fc2e2ff234c"
                    },
                    {
                        "date": 1650635339000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "d53d6ac2-a354-4ddf-ab0c-a89922ba0783"
                    },
                    {
                        "date": 1653901260000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "8248e4b9-7623-44e6-b0d1-658d30eca08e"
                    },
                    {
                        "date": 1667120424000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "fa5646b4-8551-4b2b-880c-97175372d22f"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1664619173000,
                        "messagee": "On-demand charged $ 44.01",
                        "id": "7b9a5c2e-5b7b-4157-b5d5-5b1347d693ce"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 46.35",
                        "date": 1662047078000,
                        "id": "87925ff7-abe7-4169-9b57-b355782ed644"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1656666895000,
                        "messagee": "On-demand charged $ 38.34",
                        "id": "b7d68096-252c-438f-b004-fad05e66da6c"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 52.2",
                        "date": 1654081660000,
                        "id": "e383f00a-5dc1-45df-b59b-04887479cc8d"
                    },
                    {
                        "date": 1664528447000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "7eb041b0-439b-42ef-8d76-bd8893c6c667"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 37.1",
                        "date": 1648980127000,
                        "id": "1f6c1976-3f2b-4d75-9e6c-26712af11883"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 42.53",
                        "date": 1641055589000,
                        "id": "9a6530f5-aff1-4c44-806c-7f6054614c50"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 48.43",
                        "date": 1669910856000,
                        "id": "3934a16d-9fd7-45fb-bc7f-c99f6bbb3989"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 34.94",
                        "date": 1659359347000,
                        "id": "4958af86-7b86-4a48-b03c-00a077277901"
                    },
                    {
                        "date": 1669798845000,
                        "type": "billing_regular",
                        "messagee": "License payment -30 D-coins, plan Startup (legacy)",
                        "id": "b8fb7a27-f280-468a-aefd-42ecb4eef059"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "Dentlap",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -39,
                    "id": "bagdaer@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "266e86bf-f5e9-42dc-b79c-a2185f0ca85e",
                            "date": 1671958841000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 0.83,
                            "id": "e78778cd-7342-4c8a-924d-37c52dd0e096",
                            "date": 1669910916000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -12.65,
                            "id": "2bdc4dbb-d970-49c9-9fc4-9cca97900fb4",
                            "date": 1669910905000,
                            "comment": "On-demand resource consumption. App dntl (12422), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "2125bcff-591c-4489-933f-e1aa7a7cf737",
                            "date": 1671440428000,
                            "comment": "App dentalbase (12200), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4.33,
                            "id": "2374bbe6-f978-4ddc-8c8c-dc5965563c00",
                            "date": 1669910848000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39.06,
                            "id": "7a67fbfb-15b8-4bfa-b49d-b1e18dc2cfed",
                            "date": 1671440434000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 63.28,
                            "id": "14a830dc-9c75-47eb-986c-ee4a7b4fbb35",
                            "date": 1669910843000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -67.79,
                            "id": "100e5966-00d4-4a64-80e0-43a3b44c28ae",
                            "date": 1669910838000,
                            "comment": "On-demand resource consumption. App dentalbase (12200), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": 2.17,
                            "id": "ac2378ce-0185-4f30-8dcf-a9f778f7162c",
                            "date": 1669366842000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "d49b21af-c970-4efe-9949-59d558b5e6e2",
                            "date": 1664096454000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 12.08,
                            "id": "186ac5d4-603b-46a2-bf78-e67e6ccc8001",
                            "date": 1669910910000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39,
                            "id": "338978cc-43aa-406e-ba12-54781ac7114d",
                            "date": 1661441382000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39,
                            "id": "4ef71fc4-cde7-43aa-aec8-bab77c2adf54",
                            "date": 1661441377000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6249a84c-9979-4330-b175-2cc737284513",
                            "date": 1666688426000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "8025acd3-1121-4f26-a3ca-00afc67310af",
                            "date": 1668853738000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 36.69,
                            "id": "ae068696-f704-402a-a859-c2845eb479e1",
                            "date": 1669366836000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "fc5ff838-9a2d-47b8-a8e1-eac6409c3408",
                            "date": 1661441377000,
                            "comment": "Update app dntl, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "a2557310-87b4-4de6-b350-b3a244d496ca",
                            "date": 1666688432000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -1.7,
                            "id": "f755fedf-10b1-46e6-a9ce-37fd88afd8fe",
                            "date": 1667309875000,
                            "comment": "On-demand resource consumption. App dntl (12422), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "73cb42d3-7bf4-48f2-8387-b01ac4a863ea",
                            "date": 1668853738000,
                            "comment": "Update app dentalbase, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9521508c-e9c9-4d63-b417-eca0f81ef55a",
                            "date": 1669366828000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1.7,
                            "id": "234cee77-7a28-4f05-bdc0-67ef00168ff1",
                            "date": 1667309882000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1674641316660,
                "sysName": "dntl",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12422",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1664096456000,
                        "type": "billing_regular",
                        "id": "21cad9f7-626d-4d71-8db2-a8e5f2e12a20"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1667309875000,
                        "messagee": "On-demand charged $ 1.7",
                        "id": "8e7fdb89-aeca-4c27-810e-3a8e4ccc2c5d"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1671958841000,
                        "id": "569d7f2d-6f0d-4d6c-aabe-f0bd7939bef4"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1666688426000,
                        "type": "billing_regular",
                        "id": "b8e99cf4-3c94-4f2e-aeb4-6c16afec067d"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 12.65",
                        "date": 1669910905000,
                        "id": "8db80aed-5707-4a73-b4f3-a41048624901"
                    },
                    {
                        "type": "app_created",
                        "date": 1661441379000,
                        "messagee": "App is created",
                        "id": "50fc8507-1fba-46b2-945c-cbcf6a69becc"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1669366829000,
                        "type": "billing_regular",
                        "id": "d7832f17-5acd-4ea0-ae2a-92a4bfb6d516"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "dev-moda",
                "is_blocked": false,
                "team_id": {
                    "name": "Code world team 2",
                    "owner_id": "novozhilov@code-word.ru",
                    "tariff_id": "AppSumo_tier3",
                    "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 19.5,
                    "id": "novozhilov@code-word.ru",
                    "wallet_transactions": [
                        {
                            "balance": 19.5,
                            "id": "9b975bea-a1fe-49c6-8e0f-b45c93416f33",
                            "date": 1666909392000,
                            "comment": "Affiliate reward for 2222olga86@gmail.com transaction (app sagan, -39 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -236,
                            "id": "b663331b-f5f2-42ff-8d24-6953f648793d",
                            "date": 1649751898000,
                            "comment": "Team plan upgrade (+10 lifetime sandboxes), team Code world team 2",
                            "type": "team_payment"
                        },
                        {
                            "balance": 0,
                            "id": "15b16345-dcb5-47c7-80c9-2db2e2bd68da",
                            "date": 1651395632000,
                            "comment": "App instar (12634), license payment, plan Pro-sandbox-AppSumo",
                            "type": "app_payment"
                        },
                        {
                            "balance": 236,
                            "id": "88dbdf93-9015-4ae5-80f5-3c351707961a",
                            "date": 1649679538000,
                            "comment": "Adding funds via Tinkoff 18880.0 ₽ → 236.0 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "sysName": "dev-moda",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "11433",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1642429225000,
                        "id": "b2bd960c-e6a4-494a-b821-232687a72d51"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Pro-sandbox-AppSumo (Pro-sandbox-AppSumo)",
                        "date": 1642429225000,
                        "id": "998efe1f-7036-48c9-a9e7-9bab16edc117"
                    },
                    {
                        "date": 1666530960000,
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "id": "c62d344c-147c-461f-be4b-466d19002ef4"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Счастливый Слон",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 28.65,
                    "id": "sa@iclect.ru",
                    "wallet_transactions": [
                        {
                            "balance": -1.02,
                            "id": "25a6fc63-35d2-43c9-8266-1c68980f5d48",
                            "date": 1667309899000,
                            "comment": "On-demand resource consumption. App hslon (13150), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "4e42233b-9b4b-41f9-a3e1-c8818de7b191",
                            "date": 1666256453000,
                            "comment": "App hslon (13150), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "351cd23b-249d-42a8-a92c-e32974bb0be6",
                            "date": 1658221237000,
                            "comment": "App hslon (13150), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "63fa2b3c-d421-4f8f-9dda-b9f547ba8937",
                            "date": 1652969991000,
                            "comment": "Create app hslon, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "cf8c221e-8a67-44d6-a2cb-8d4cdffcfa5b",
                            "date": 1655629328000,
                            "comment": "App hslon (13150), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "5285e7f8-ab3b-4512-a9a0-2650b9007f40",
                            "date": 1652969919000,
                            "comment": "Adding funds via Tinkoff 2574.0 ₽ → 39.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -2.11,
                            "id": "830fa3d1-1c37-4f4d-8779-8168e86f0a52",
                            "date": 1662047180000,
                            "comment": "On-demand resource consumption. App hslon (13150), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": 200,
                            "id": "22ad2d99-cb05-4d55-a378-5f0ae8a8f790",
                            "date": 1663660920000,
                            "comment": "Wire transfer from ООО \"АЙСЕЛЕКТ\", 12800 ₽ → 200 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -39,
                            "id": "62f5845f-6218-45bc-a388-90cabf4274f0",
                            "date": 1663661469000,
                            "comment": "Update app hslon, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "fe3693d9-921a-4000-a551-d20151410309",
                            "date": 1660899705000,
                            "comment": "App hslon (13150), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -23.22,
                            "id": "ead26b73-7eed-4db9-bc42-50bcb45f3854",
                            "date": 1664619185000,
                            "comment": "On-demand resource consumption. App hslon (13150), period 2022-09",
                            "type": "ondemand"
                        },
                        {
                            "balance": 50,
                            "id": "7caf4e1d-6f97-4fd1-8c75-01e4d2d92a39",
                            "date": 1663658188000,
                            "comment": "Promo-code welcome",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1668931869966,
                "sysName": "hslon",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "13150",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1663578042000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "ddc611e7-9d94-440e-8c39-cbafd142a9fb"
                    },
                    {
                        "type": "plan_update",
                        "date": 1668934840000,
                        "messagee": "App plan updated Startup-monthly → FREE",
                        "id": "318bb0e5-81f5-40a9-a9be-a55c6ecda82b"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 23.22",
                        "date": 1664619185000,
                        "id": "25c05499-4069-4dfb-910c-b6f286c45986"
                    },
                    {
                        "type": "plan_update",
                        "date": 1652969993000,
                        "messagee": "App plan updated  → Startup-monthly",
                        "id": "b18ecb09-33f2-4adc-8150-8b55c87074ff"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663661469000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "806e86e7-e6dd-435e-885b-08bbfd4e86b5"
                    },
                    {
                        "date": 1655629333000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "6e747da6-614f-44a5-bbb2-14136b8070ec"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "date": 1668934839000,
                        "type": "billing_regular",
                        "id": "2d4868c7-14e2-401a-af04-ac446cb50b02"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 2.11",
                        "date": 1662047180000,
                        "id": "d1c171db-ce96-409b-bfca-2841c691cb1e"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1666256456000,
                        "type": "billing_regular",
                        "id": "00e64c51-a78f-4909-81bf-bce326f7c9e7"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1660899706000,
                        "type": "billing_regular",
                        "id": "9c0a7579-3090-4f81-aa74-6f987e0b82d2"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 1.02",
                        "date": 1667309898000,
                        "id": "2a5cd949-0a85-4c4d-8c61-02f4fe1c5441"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1658221237000,
                        "type": "billing_regular",
                        "id": "bca8ac41-1417-42dd-83b8-2ff87d62be6c"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "calendar test",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -39,
                    "id": "bagdaer@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "266e86bf-f5e9-42dc-b79c-a2185f0ca85e",
                            "date": 1671958841000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 0.83,
                            "id": "e78778cd-7342-4c8a-924d-37c52dd0e096",
                            "date": 1669910916000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -12.65,
                            "id": "2bdc4dbb-d970-49c9-9fc4-9cca97900fb4",
                            "date": 1669910905000,
                            "comment": "On-demand resource consumption. App dntl (12422), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "2125bcff-591c-4489-933f-e1aa7a7cf737",
                            "date": 1671440428000,
                            "comment": "App dentalbase (12200), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4.33,
                            "id": "2374bbe6-f978-4ddc-8c8c-dc5965563c00",
                            "date": 1669910848000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39.06,
                            "id": "7a67fbfb-15b8-4bfa-b49d-b1e18dc2cfed",
                            "date": 1671440434000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 63.28,
                            "id": "14a830dc-9c75-47eb-986c-ee4a7b4fbb35",
                            "date": 1669910843000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -67.79,
                            "id": "100e5966-00d4-4a64-80e0-43a3b44c28ae",
                            "date": 1669910838000,
                            "comment": "On-demand resource consumption. App dentalbase (12200), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": 2.17,
                            "id": "ac2378ce-0185-4f30-8dcf-a9f778f7162c",
                            "date": 1669366842000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "d49b21af-c970-4efe-9949-59d558b5e6e2",
                            "date": 1664096454000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 12.08,
                            "id": "186ac5d4-603b-46a2-bf78-e67e6ccc8001",
                            "date": 1669910910000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39,
                            "id": "338978cc-43aa-406e-ba12-54781ac7114d",
                            "date": 1661441382000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 39,
                            "id": "4ef71fc4-cde7-43aa-aec8-bab77c2adf54",
                            "date": 1661441377000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6249a84c-9979-4330-b175-2cc737284513",
                            "date": 1666688426000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "8025acd3-1121-4f26-a3ca-00afc67310af",
                            "date": 1668853738000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 36.69,
                            "id": "ae068696-f704-402a-a859-c2845eb479e1",
                            "date": 1669366836000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "fc5ff838-9a2d-47b8-a8e1-eac6409c3408",
                            "date": 1661441377000,
                            "comment": "Update app dntl, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39,
                            "id": "a2557310-87b4-4de6-b350-b3a244d496ca",
                            "date": 1666688432000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -1.7,
                            "id": "f755fedf-10b1-46e6-a9ce-37fd88afd8fe",
                            "date": 1667309875000,
                            "comment": "On-demand resource consumption. App dntl (12422), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "73cb42d3-7bf4-48f2-8387-b01ac4a863ea",
                            "date": 1668853738000,
                            "comment": "Update app dentalbase, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9521508c-e9c9-4d63-b417-eca0f81ef55a",
                            "date": 1669366828000,
                            "comment": "App dntl (12422), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1.7,
                            "id": "234cee77-7a28-4f05-bdc0-67ef00168ff1",
                            "date": 1667309882000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1655028604264,
                "sysName": "mycreatiumtest",
                "id": "11524",
                "is_hidden": false,
                "is_sandbox": false,
                "events": [
                    {
                        "messagee": "Tariff has been changed Free (FREE) → Free (FREE)",
                        "type": "tariff_changed",
                        "date": 1644947471000,
                        "id": "9f8105ef-2d27-4254-98b9-8156e45ec36b"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "uplinestudio",
                "team_id": {
                    "name": "Alex Orlov team",
                    "owner_id": "alexvorlo@gmail.com",
                    "tariff_id": "team_yearly",
                    "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "alexvorlo@gmail.com",
                    "wallet_transactions": []
                },
                "next_billing_date": 1653213863347,
                "sysName": "uplinestudio",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "paddle_subscription_id": "10711771",
                "id": "11210",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1650704451000,
                        "messagee": "License payment -0 D-coins, plan Free",
                        "type": "billing_regular",
                        "id": "4794cc6f-a3bd-4547-b65b-d2994dfde7e8"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Startup (Startup-monthly)",
                        "date": 1641319562000,
                        "id": "98fb6a82-165a-499f-b229-3634c78c2726"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Startup (Startup-monthly)",
                        "date": 1641319562000,
                        "id": "a1f56d1e-28a9-408b-8227-a30046ce1965"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1643049703000,
                        "messagee": "Tariff has been changed Startup (Startup-monthly) → Free (FREE)",
                        "id": "656424f3-4b42-43ce-bc1d-4405be26e566"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1643049757000,
                        "messagee": "Tariff has been changed Free (FREE) → Pro-sandbox (Pro-sandbox)",
                        "id": "cf5b3f7c-a213-474d-9973-20e92f1422e1"
                    },
                    {
                        "date": 1644353004000,
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro-sandbox (Pro-sandbox) → Free (FREE)",
                        "id": "9b8ff1cc-d3f4-4884-94ff-917ffb10b841"
                    }
                ],
                "comments": "",
                "legacy_billing": ""
            },
            {
                "name": "cashback",
                "is_blocked": false,
                "team_id": {
                    "tariff_id": "team_monthly",
                    "name": "Code world team",
                    "is_hidden": false,
                    "id": "be38019c-2047-43aa-a9f8-8906a4ba0587"
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "dimscashback@gmail.com",
                    "wallet_transactions": []
                },
                "next_billing_date": 1653213813255,
                "sysName": "cashback",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "8868",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1640951414000,
                        "messagee": "App is BLOCKED",
                        "type": "block_on",
                        "id": "555a4227-cc3e-4fa8-9f4c-47ed77ac037c"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1642777702000,
                        "id": "15a8b6dd-1f03-4570-b547-bcf6dc98d76d"
                    },
                    {
                        "messagee": "License payment -0 D-coins, plan Free",
                        "type": "billing_regular",
                        "date": 1650704448000,
                        "id": "6c517091-e35c-4e11-93e4-8e2fb658a50a"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "traffic-retail",
                "isDowngraded": true,
                "owner_id": {
                    "wallet_balance": -100.62,
                    "id": "cmo@traffic-retail.ru",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "525c9a7c-a053-4498-b852-9807a2247aba",
                            "date": 1671094838000,
                            "comment": "App traffic-retail (13904), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "30d4c319-7217-42f3-a582-5a89d71c6c86",
                            "date": 1668502833000,
                            "comment": "App traffic-retail (13904), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9c45218e-06c9-4813-9b4a-0f4700dec869",
                            "date": 1665824439000,
                            "comment": "App traffic-retail (13904), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "71791d7d-1e07-4dbc-a109-6df6b77b27d8",
                            "date": 1660569210000,
                            "comment": "Update app traffic-retail, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1.18,
                            "id": "1b8ec490-ab9c-4025-9c2a-6447348dbac2",
                            "date": 1667309890000,
                            "comment": "On-demand resource consumption. App traffic-retail (13904), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "7f836986-b269-4067-9b50-62aa19a123c0",
                            "date": 1663232454000,
                            "comment": "App traffic-retail (13904), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "f1a91fbb-7b19-442a-91dd-65d6d3cb59c9",
                            "date": 1660300620000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": -4.44,
                            "id": "e8aaa997-7800-4f69-af19-979fb1195c1b",
                            "date": 1662047153000,
                            "comment": "On-demand resource consumption. App traffic-retail (13904), period 2022-08",
                            "type": "ondemand"
                        }
                    ]
                },
                "next_billing_date": 1673788411730,
                "sysName": "traffic-retail",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "13904",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1660569211000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "f3abf2a5-3c71-4b3b-8880-c77ed93966b8"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1671094839000,
                        "type": "billing_regular",
                        "id": "095eca4b-0abc-4817-b024-f7853cdbd500"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 4.44",
                        "date": 1662047153000,
                        "id": "1ae3766f-06b8-4700-954b-4b73f3cfc350"
                    },
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1660300705000,
                        "id": "5099e4ca-9539-49a4-b41d-fde2635e2eaa"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1663232454000,
                        "type": "billing_regular",
                        "id": "dbbe39fd-67b2-49f8-80f3-be0a9f92712b"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1667309890000,
                        "messagee": "On-demand charged $ 1.18",
                        "id": "525bd8e1-0fdc-4edf-8480-dbb6194cd884"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1668502834000,
                        "id": "d39017c5-6607-469f-afc3-622014c14e3a"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1665824439000,
                        "id": "afff4dd5-8517-4034-871d-5e18fce03c67"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Vitrina Clone Dev",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 227,
                    "id": "a.mozer@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "f5bc4f93-b527-4b4c-9395-69730992f223",
                            "date": 1669712434000,
                            "comment": "App tourist-demo (14033), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "52ecaa90-da07-4db3-8bec-3d1ca46c7565",
                            "date": 1664442060000,
                            "comment": "App tourist-demo (14033), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "d095d7c5-1aed-4c10-96fd-c6205803529d",
                            "date": 1661774067000,
                            "comment": "Create app tourist-demo, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "674a95a2-3af9-49bf-b4d7-a5a798e10e1b",
                            "date": 1667034029000,
                            "comment": "App tourist-demo (14033), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 200,
                            "id": "f6454b03-4a33-459d-a1e3-879000a8f542",
                            "date": 1650358868000,
                            "comment": "Promo-code ANNA",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "2011fb70-2a16-4b83-9971-0ab71ef38bcb",
                            "date": 1650359192000,
                            "comment": "Create app x5study, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "ce7e6bea-d8fc-4ff0-9cdc-b1b8e1ac9d10",
                            "date": 1653037266000,
                            "comment": "App x5study (12880), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "0e1d5db9-e0cc-462d-9960-12d6a8182379",
                            "date": 1661255329000,
                            "comment": "Promo-code MGN5EZTTVS4I",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "fd5b4e3e-2eef-4919-87ff-fd592ea1b1fa",
                            "date": 1655629329000,
                            "comment": "App x5study (12880), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1655028894324,
                "sysName": "vitrina-clone-dev",
                "id": "6867",
                "is_hidden": false,
                "comments": "",
                "legacy_billing": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "coinalerts",
                "is_blocked": false,
                "owner_id": {
                    "wallet_balance": 13.9491,
                    "id": "nikita@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "024309e0-8a72-4ef1-8aa5-b93fbaf090d0",
                            "date": 1670490118000,
                            "comment": "App nftairdrop (14635), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "73c0a87b-d45d-427b-bbc7-6904fe8b209b",
                            "date": 1669035607000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "66fa6683-a976-492a-a877-fe402de3ae74",
                            "date": 1667903662000,
                            "comment": "Update app nftairdrop, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1000,
                            "id": "18eec460-0842-40e2-9a60-3018615bc314",
                            "date": 1666770293000,
                            "comment": "Promo-code nikitatest1000",
                            "type": "promo"
                        },
                        {
                            "balance": -54,
                            "id": "a9a604c4-88c5-4d29-bb72-67657092dfcd",
                            "date": 1666357206000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "7afc244d-f5a2-4271-9451-0671f24fb976",
                            "date": 1663765207000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -8.61,
                            "id": "bfc2f587-a550-4d7c-92d3-15b2b67d99f0",
                            "date": 1662047133000,
                            "comment": "On-demand resource consumption. App rolostestapp (12579), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "1372a639-90e3-4d89-93b9-6332b96abcd9",
                            "date": 1662022826000,
                            "comment": "App testapp1122 (12577), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "def3338b-3edf-426f-b1e2-bfdfb64edb8e",
                            "date": 1661086841000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -8.64,
                            "id": "d4d32a67-82a9-4234-93f2-6c3ce5134cdd",
                            "date": 1659359366000,
                            "comment": "On-demand resource consumption. App rolostestapp (12579), period 2022-07",
                            "type": "ondemand"
                        },
                        {
                            "balance": -54,
                            "id": "67184575-1e6b-4182-aea1-0984788afc9c",
                            "date": 1658408402000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "953a4071-3ac1-48cf-9751-a25b84d04a4e",
                            "date": 1658408402000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "656b295b-bf2f-4446-839e-6b36041305a1",
                            "date": 1657616454000,
                            "comment": "App rolostestapp (12579), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -7.96,
                            "id": "9c70fb40-7f8e-43c1-bdbc-b4e6dd923d4c",
                            "date": 1656666909000,
                            "comment": "On-demand resource consumption. App rolostestapp (12579), period 2022-06",
                            "type": "ondemand"
                        },
                        {
                            "balance": -54,
                            "id": "707a0348-c3dc-4fbf-ae5b-d467e33179b3",
                            "date": 1666357206000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "817cde80-597a-4445-b314-222c26ef3bfd",
                            "date": 1661086841000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "c4862685-ded5-4d91-8b75-9e937e5f9bd5",
                            "date": 1656666029000,
                            "comment": "App testapp1122 (12577), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "5c663566-84ab-4832-8186-98487cdd7df2",
                            "date": 1655816403000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "19a0b6ca-9a41-4d67-b251-85d3321d78ed",
                            "date": 1655384404000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "57a5a6aa-8275-454a-9cf1-a1edef10ada6",
                            "date": 1655384403000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "bc7df577-c7d2-483b-aa50-2e53d625d5b7",
                            "date": 1655298006000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "827c232d-ab0b-49f6-bf9f-0f54511328f4",
                            "date": 1655214166000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "e13bdbef-c149-404f-8c9b-42be27481e7c",
                            "date": 1655298003000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "3af47d82-f67e-4187-9d89-ca5b720f2d18",
                            "date": 1655214165000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "a4a95c53-ffc5-4657-aa11-f2cb1417bc1b",
                            "date": 1655024506000,
                            "comment": "App rolostestapp (12579), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 500,
                            "id": "0143bf54-95a4-45b5-a3d3-0ffa793f2d41",
                            "date": 1654965478000,
                            "comment": "Adding funds via Tinkoff 69.0 ₽ → 1.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "991cfa3d-e6b6-40a3-98cb-d5ad5799b155",
                            "date": 1660294836000,
                            "comment": "App rolostestapp (12579), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "64a532f9-31cd-4121-9e6a-06e7ef6fbaa0"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "79341127-5953-4fed-a87e-6efa16f7dd17"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "8affd84b-f079-499d-9516-1154fd677dd4"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "8842a5b4-1eeb-4a3c-b8a6-4e278595b269"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "eeb566e3-a29e-49f3-a150-ea35bf05ff6f"
                        },
                        {
                            "balance": 400,
                            "comment": "polygon tx",
                            "id": "6dd275d0-3980-4ad2-9f19-5ffa19d28851"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "aa54c0a9-90f8-46b6-b129-0c454e22a28a"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "900529e8-850e-43db-9dc5-819468be5c60"
                        },
                        {
                            "balance": -39,
                            "id": "ab863926-a641-4563-91dd-b6b263574013",
                            "date": 1648109778000,
                            "comment": "Create app rolostestapp, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "5bdd8498-20a0-4187-b2e1-15e12fa6ad82"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "03469729-22a9-4708-9c36-52979c448477"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "c790ef90-e4d1-4c03-9a8b-f59373146a3b"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "f62e0cf8-aa54-480f-a08b-eea2436209cd"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "3dc4518e-47c6-4190-93c9-fc11f709db5d"
                        },
                        {
                            "balance": -39,
                            "id": "ecbc84dc-864f-4770-9461-eab0c5259932",
                            "date": 1654074093000,
                            "comment": "App hash (12188), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "66789779-dd97-4b45-a1bf-016f8d765c09"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "11d8733d-ff0f-4e22-bf0b-3d13ce8603d6"
                        },
                        {
                            "balance": -39,
                            "id": "17c0ca1e-67e2-4183-8a1f-49d7f26b8940",
                            "date": 1662973230000,
                            "comment": "App rolostestapp (12579), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "610f4fd3-ffe9-4207-9ec6-a441c7930f89"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "5b68759a-668d-423c-9191-10538e207267"
                        },
                        {
                            "balance": -54,
                            "id": "3474b553-985a-438e-a6b3-063b1202a142",
                            "date": 1645426568000,
                            "comment": "Team  nikita_test, plan undefined, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "e97cdc77-3c85-4701-8179-5fc6a59da2ea"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "04354867-4a18-4a63-a26d-784bf4de068d"
                        },
                        {
                            "balance": -54,
                            "id": "a9a9e665-6049-4de7-9d7f-697f1247e4cd",
                            "date": 1671627612000,
                            "comment": "Team nikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "4461ece6-1d90-4405-927f-cf05f18d4927"
                        },
                        {
                            "balance": 1.6902,
                            "comment": "polygon tx",
                            "id": "9da2d78c-fba0-4331-9fc2-4d354edf85e1"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "2f846a05-71ab-4afc-b3a5-83c26a69a7a7"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "411ffa44-5867-4303-9706-ddcbad6a0124"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "cc8455fc-9f6a-4363-a9bc-9ff3e1088460"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "09f7c5b8-d090-462c-a89c-ff83230cdcab"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "35dc8016-be18-448c-872c-c0150334a5f3"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "430df079-30f4-4eb1-beb0-b97441f742e7"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "78583583-d037-474a-91a2-7be5ef0885f2"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "4668945b-818e-4ac0-bffa-d2f8c7c37036"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "cf2b67f9-9e7b-44b1-912b-c4ca9391f9ab"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "2e3dde65-1587-4e44-9178-f2248bad5d3d"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "7c5ad944-5c75-40ae-9d7f-3325024709b9"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "c4df2bfa-e6dc-4956-85d0-79f5a5984078"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "a9fa749a-029b-4170-84d5-50add561c029"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "14989e61-a88f-43ad-bc4c-cb615105b609"
                        },
                        {
                            "balance": 1.6455,
                            "id": "1858c659-b1a5-40b7-b59b-541d5dee1b63",
                            "date": 1650958806000,
                            "comment": "Adding funds via NEAR blockchain, 0.110000000000000000000000 NEAR",
                            "type": "crypto"
                        },
                        {
                            "comment": "polygon tx",
                            "balance": 0.0009,
                            "id": "f754d3e2-00f2-43ec-9025-f8f1a6d2f20e"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "947670fc-8583-449e-9d93-38d41b774bd0"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "5bac8a40-29fd-4713-b98d-dfb2932b5e4f"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "4efab80c-77a8-417f-9b33-38e2095cfb49"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "257b454b-e72f-496c-b22e-dba94d02fdd2"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "c58eea08-be8c-4cf3-b964-b28ef37a4f05"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "e62fbc2e-93ea-44b6-9661-a7c74c36b1c5"
                        },
                        {
                            "balance": -39,
                            "id": "a7539173-f2d0-4170-8af9-e1f159c9ef62",
                            "date": 1659344442000,
                            "comment": "App testapp1122 (12577), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "20f0b298-5afe-46d4-90f9-22800fef677b"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "e59153a9-32f1-4973-8495-410d92d1d89c"
                        },
                        {
                            "balance": -39,
                            "id": "18cb882e-b0be-47a7-b1f5-4b915097c943",
                            "date": 1662022826000,
                            "comment": "App hash (12188), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "f64aae3a-4c9d-4781-ad3e-643d86b51912"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "725cf672-bdce-4a54-8760-4021bd0b6626"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "b5efb78c-bb0b-4ae7-82e7-f5de6d2b13bd"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "cf77bbad-c0d3-4bbf-885c-546ab9107ed3"
                        },
                        {
                            "balance": -39,
                            "id": "c38ac961-9a78-4644-8977-caf78791dfe0",
                            "date": 1656666030000,
                            "comment": "App hash (12188), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "2e8ee229-e4f7-4f0c-877c-bd590cb8b6b6"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "b6c762bd-692e-4c37-8c69-3c30fac19448"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "59acc26a-fbbf-4ae5-be49-32c872c2346a"
                        },
                        {
                            "balance": -39,
                            "id": "b926aa93-3c9f-48fb-a3d0-5d5e5aa73ec3",
                            "date": 1647942460000,
                            "comment": "Update app evp, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "c3780662-b5cb-4632-b9af-39890cedf04e"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "0a496365-ca42-4471-baf5-026e384233f0"
                        },
                        {
                            "balance": -54,
                            "id": "b41662ba-379c-44a5-942f-95fbd62fae01",
                            "date": 1663765207000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "1bb5fce4-33ec-4c83-a8c3-4cb177b30897"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "df3d81e8-9c4a-4e46-8130-4ae95aa9908e"
                        },
                        {
                            "balance": 0.1375,
                            "id": "b006becc-b967-4d20-9692-e042a821c447",
                            "date": 1647429513000,
                            "comment": "Adding funds via Tinkoff 11.0 ₽ → 0.1375 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "6000a616-a453-49a9-98f8-151129a714d3"
                        },
                        {
                            "balance": 1,
                            "id": "6998ba96-05be-4573-9382-c1a94eb3152b",
                            "date": 1647586829000,
                            "comment": "Adding funds via Tinkoff 80.0 ₽ → 1.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "d25ba190-be37-4f8d-8c17-0a466b1c89f9",
                            "date": 1659344442000,
                            "comment": "App hash (12188), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "33266284-37f1-46b1-abee-b2fffe804afa",
                            "date": 1655816403000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "5a81684e-deee-462f-a45d-7004d65663f3"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "00f45be1-6089-49f8-a77b-fa474474b8e3"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "cca4368c-c7c1-4418-a917-351c05dd9b4c"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "4f8eb7b7-aef9-426c-a208-2808df002de1"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "84ba77ea-aa36-4f67-9c54-26034dec9677"
                        },
                        {
                            "balance": -54,
                            "id": "bac6b526-7f5e-4a2a-b3f0-d2328889be1a",
                            "date": 1671627612000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "7011730f-8751-4e81-bf05-514db9ee5d08",
                            "date": 1645426620000,
                            "comment": "Team  nikita_testnikita_test, plan undefined, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "915faefc-e85b-47bf-8301-f341f78a7c30"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "8ba90d4b-2a5a-49d4-a64e-33dd6d084d9c"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "e13f3f28-a417-487a-818b-30687d503d76"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "dfe6875c-dc15-49a3-9285-6dec2e19d381"
                        },
                        {
                            "balance": -39,
                            "id": "e843d0f5-eee3-42d0-88e9-4adf06ce6820",
                            "date": 1654074093000,
                            "comment": "App testapp1122 (12577), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "ce185d1d-703c-4687-9cad-8317dffca07f",
                            "date": 1650877233000,
                            "comment": "App testapp1122 (12577), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "3637d3b7-bf08-48b0-b9cb-c59a1cbd7fc3"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "431ca3e5-e400-4d1e-b215-4d56e4a2ae8b"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "ae4487d7-e4ec-429b-acf0-39c919d99bc5"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "195096ac-3129-4ecc-9ba9-2f4f63245023"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "b14c5dab-9dc3-45b8-ae66-5617956a5fa9"
                        },
                        {
                            "balance": -54,
                            "id": "f2d1b2b1-5401-426b-aa08-4245be8de80f",
                            "date": 1669035607000,
                            "comment": "Team nikita_testnikita_test, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 11,
                            "comment": "from tinkoff 1100",
                            "id": "bc6ce550-20a3-41bd-8164-89dbe68c93f0"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "c1115e7f-0fa4-4fc1-b4f7-60bef0558eca"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "05f0a3f5-ca23-47f6-b498-99f7136b05af"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "171a5b48-31a1-4586-a379-abad1c4be3bc"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "3ced936c-de21-4d79-ac78-ca659fae029b"
                        },
                        {
                            "balance": 50,
                            "id": "9a85cc75-0737-47ca-9398-d980841771e4",
                            "date": 1654775258000,
                            "comment": "Promo-code welcome",
                            "type": "promo"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "44079b9f-a4c3-480a-8ca6-abb21d0d57b3"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "d135cc70-4fb2-4e14-b45e-417151eb5be6"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "8fbc51c6-de44-4b3f-a84f-d8a0d53cdab0"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "1f96dbfd-fa2e-4539-95b7-e38f985e6c11"
                        },
                        {
                            "balance": -39,
                            "id": "b3131d21-41c0-4357-81a9-c6d498bb0eec",
                            "date": 1648104276000,
                            "comment": "Create app testapp1122, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "75e87cd3-e844-469d-828f-4f52120dabb2"
                        },
                        {
                            "balance": -39,
                            "id": "c2335190-a5ee-40cc-9744-b5fd81b798db",
                            "date": 1650877238000,
                            "comment": "App rolostestapp (12579), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 0.1375,
                            "id": "78a8d939-9658-47f9-8000-f4da70ff2fcf",
                            "date": 1647429528000,
                            "comment": "Adding funds via Tinkoff 11.0 ₽ → 0.1375 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 0.59,
                            "id": "04df2bd7-6948-4d34-ae6b-934db6e7a448",
                            "date": 1653671914000,
                            "comment": "Adding funds via Polygon blockchain, 1.000000 MATIC → 0.59 D-coins",
                            "type": "crypto"
                        },
                        {
                            "comment": "from tinkoff RUB 11.0 convert to 0.1375 coin",
                            "balance": 0.1375,
                            "id": "399af374-93b5-489a-a8e9-a7ee685d892d"
                        },
                        {
                            "balance": -8.63,
                            "id": "39aa9e82-dca3-4ff0-9531-1746c2e6845a",
                            "date": 1654082556000,
                            "comment": "On-demand resource consumption. App rolostestapp (12579), period 2022-05",
                            "type": "ondemand"
                        }
                    ]
                },
                "next_billing_date": 1653213842090,
                "sysName": "coinalerts",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "10724",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "messagee": "License payment -0 D-coins, plan Free",
                        "date": 1650704442000,
                        "type": "billing_regular",
                        "id": "ae3903ca-ec37-48db-876e-ad01e2e5a37d"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Mokka Decision Engine for Production",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -0.53,
                    "id": "it.group@revoup.ru",
                    "wallet_transactions": [
                        {
                            "balance": 65.26,
                            "id": "e9a1f678-c155-489c-bbde-be06b4142590",
                            "date": 1671786055000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 0.92,
                            "id": "1b5b07d2-1a91-4e31-9e2d-6c0ff23966f1",
                            "date": 1669194072000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 3.98,
                            "id": "9139962b-b965-4df5-856c-6d2723be066c",
                            "date": 1669194067000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 17.39,
                            "id": "2f219f76-b604-4a17-871c-aefb66691041",
                            "date": 1669194062000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 331.09,
                            "id": "b009d12c-0af9-4a46-b086-e1b46ed91224",
                            "date": 1669194045000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.28,
                            "id": "60f3e04c-d19a-4fe7-a5d3-e7337c9cfcb7",
                            "date": 1666515649000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "c2951619-08e0-498b-a2e7-a30d718638e3",
                            "date": 1661245232000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "e728ea13-a382-4daf-bd85-7f3689faeb1b",
                            "date": 1658566887000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 349,
                            "id": "56c626ea-1f02-455e-bfd0-a04caeff0578",
                            "date": 1671786051000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 12.21,
                            "id": "929f34bd-f435-4da1-8721-77774a41a108",
                            "date": 1666515645000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 429,
                            "id": "eb9d4be8-127f-49b6-9371-36ff60bdb90c",
                            "date": 1653299171000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "f86e7585-381a-4872-bafe-df3e4dab688b",
                            "date": 1653298945000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 429,
                            "id": "9553c7dd-3b78-4af3-9dc4-8703707da5de",
                            "date": 1658566893000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 295.84,
                            "id": "86a52e7e-007c-4048-965a-8df17a9b917f",
                            "date": 1663923664000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "152a374d-2e13-458a-b6a1-7395000e0fb2",
                            "date": 1655974907000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 12.2,
                            "id": "6da8037e-1cfb-42f8-8abf-e9a46caa99ef",
                            "date": 1671786059000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "39135d32-17b1-46cd-bea1-7b0f7462f460",
                            "date": 1671786046000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "e0f08efd-51b9-497b-8d01-bb6d5fec3f73",
                            "date": 1666515630000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 348.78,
                            "id": "97672501-c331-4f76-87e7-a2464ad92020",
                            "date": 1661420222000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 429,
                            "id": "4cf6984e-f909-4ce0-ba5e-2f5c4dfaafbe",
                            "date": 1655974912000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -139,
                            "id": "f8722673-2702-40f2-9672-9d7f25aa653d",
                            "date": 1650704432000,
                            "comment": "App de-bulgaria (12167), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 139,
                            "id": "e8d9b1c9-777b-4624-85f3-697e40534e68",
                            "date": 1652364083000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.28,
                            "id": "b3cb6faf-4bcf-4f02-a39b-19804ed9692f",
                            "date": 1661420238000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 65.22,
                            "id": "cd5e26b6-533a-422a-bfce-5b86b9607d1a",
                            "date": 1661420228000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "73b3bf5e-4e77-498b-adc3-cd46a628ad87",
                            "date": 1669194037000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 10.34,
                            "id": "e53313c1-f61f-4673-81e8-39b3a1766d03",
                            "date": 1663923673000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.28,
                            "id": "19c16836-abed-4727-a419-07a99a73b562",
                            "date": 1671786063000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 65.64,
                            "id": "28ab6983-38e0-45ea-8b76-f170a443b94a",
                            "date": 1661422692000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "5a7baed9-9621-45b6-9286-18cee20d0896",
                            "date": 1663923658000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 75.88,
                            "id": "023d36e8-5c6e-44fe-be8e-0ff32e0524bd",
                            "date": 1669194056000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 55.32,
                            "id": "cc464677-e119-4494-8070-add4171b8cea",
                            "date": 1663923668000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 1.93,
                            "id": "b113169a-5b40-419d-be09-50d4a877af47",
                            "date": 1663923679000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 349.15,
                            "id": "6db900f8-ef2c-46d9-83a5-37fc271b645a",
                            "date": 1666515636000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 12.2,
                            "id": "7fd0f49e-a34c-4636-ba6b-0868bdb0d28a",
                            "date": 1661420232000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 65.28,
                            "id": "e0699592-7ec3-4654-87af-4c2576223e62",
                            "date": 1666515640000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1674483439793,
                "sysName": "decision-engine-prod",
                "plan_id": {
                    "price": 429,
                    "name": "Business",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "id": "12660",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 429,
                "events": [
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1655974907000,
                        "type": "billing_regular",
                        "id": "20e65ac6-493e-4879-bf18-72356a8a9a76"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Business-monthly → FREE",
                        "date": 1653298795000,
                        "id": "cba885cf-7e12-4c70-b1e5-d554b7cd9429"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1658566887000,
                        "type": "billing_regular",
                        "id": "12c3521e-9a07-4d1b-a1fc-2f511d9dcdeb"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "type": "billing_regular",
                        "date": 1651395626000,
                        "id": "efaa04ab-b6b0-4f4e-846e-594f081cd812"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Business-monthly",
                        "date": 1653246594000,
                        "id": "1aed290c-ce7f-4106-98b2-1c3ef360f7c2"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "type": "billing_regular",
                        "date": 1661245232000,
                        "id": "6ebf0eb8-2859-4329-9da7-2032eca305ca"
                    },
                    {
                        "type": "plan_update",
                        "date": 1653298913000,
                        "messagee": "App plan updated FREE → Business-monthly",
                        "id": "0ec29eb7-acfa-4690-900a-f7f959252634"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1671786046000,
                        "type": "billing_regular",
                        "id": "fc8992af-58c7-40b5-b767-2776ec9951eb"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1663923657000,
                        "type": "billing_regular",
                        "id": "cb045f95-391a-4a90-96a1-e2e74cb0bfec"
                    },
                    {
                        "date": 1653298945000,
                        "messagee": "License payment -429 D-coins, plan Business",
                        "type": "billing_regular",
                        "id": "ac38e960-1b67-449f-9a47-d91ee4879a5c"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1669194037000,
                        "type": "billing_regular",
                        "id": "480831a2-6ac3-4dfd-a2a4-a3ad573ce293"
                    },
                    {
                        "messagee": "License payment -429 D-coins, plan Business",
                        "date": 1666515630000,
                        "type": "billing_regular",
                        "id": "b61a4e4a-f8b0-403a-bbf7-e13d5541fba2"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1649746242000,
                        "id": "784261bb-f0a0-474d-8e8f-f8c70b75bc8f"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "type": "billing_regular",
                        "date": 1653298795000,
                        "id": "463ec999-96cb-4e62-baa8-4b9b0cfda39b"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Pure Performance",
                "is_blocked": false,
                "team_id": {
                    "tariff_id": "AppSumo_tier1",
                    "is_hidden": false,
                    "name": "AppSumo Tier 1",
                    "id": "3a304ca7-013a-438a-b7f1-1acc69adf4b1"
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "morgane.roy@inbox911.agency",
                    "wallet_transactions": []
                },
                "sysName": "pureperformance",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "10364",
                "is_hidden": false,
                "is_sandbox": true,
                "is_cancelled": "#ffd1d1",
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "team",
                "team_id": {
                    "name": "Code world team 2",
                    "owner_id": "novozhilov@code-word.ru",
                    "tariff_id": "AppSumo_tier3",
                    "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "is_hidden": false
                },
                "owner_id": {
                    "wallet_balance": 19.5,
                    "id": "novozhilov@code-word.ru",
                    "wallet_transactions": [
                        {
                            "balance": 19.5,
                            "id": "9b975bea-a1fe-49c6-8e0f-b45c93416f33",
                            "date": 1666909392000,
                            "comment": "Affiliate reward for 2222olga86@gmail.com transaction (app sagan, -39 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -236,
                            "id": "b663331b-f5f2-42ff-8d24-6953f648793d",
                            "date": 1649751898000,
                            "comment": "Team plan upgrade (+10 lifetime sandboxes), team Code world team 2",
                            "type": "team_payment"
                        },
                        {
                            "balance": 0,
                            "id": "15b16345-dcb5-47c7-80c9-2db2e2bd68da",
                            "date": 1651395632000,
                            "comment": "App instar (12634), license payment, plan Pro-sandbox-AppSumo",
                            "type": "app_payment"
                        },
                        {
                            "balance": 236,
                            "id": "88dbdf93-9015-4ae5-80f5-3c351707961a",
                            "date": 1649679538000,
                            "comment": "Adding funds via Tinkoff 18880.0 ₽ → 236.0 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "next_billing_date": 1673089671083,
                "sysName": "team",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "14955",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "date": 1670411270000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "ba2f6954-e78e-4022-9296-632c89d87051"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1670411271000,
                        "id": "3cdf4a8b-bf30-4353-bc3b-0fbaf13b4130"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "defender",
                "is_blocked": false,
                "team_id": {
                    "name": "Polytell",
                    "owner_id": "donchenko.pavel@gmail.com",
                    "tariff_id": "team_monthly",
                    "id": "f7c404cc-92c5-4e37-bb1b-bd52abc5b1a8",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "nikos@defender.ru",
                    "wallet_transactions": [
                        {
                            "balance": 1145.87,
                            "id": "1e621cee-52fe-4af3-bb9b-bf755e2b189d",
                            "date": 1667197282000,
                            "comment": "Wire transfer from ООО «ТД Компания Дефендер», 73335.680000 ₽ → 1145.87 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -1188,
                            "id": "a976aa5f-629b-46c5-837c-876e807d9f19",
                            "date": 1666869124000,
                            "comment": "App defender (13993), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "bfec8d4e-74a2-43f2-b311-ee7e9e825db7",
                            "date": 1661268724000,
                            "comment": "Create app defender, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "f1c3cf1d-b6f7-401d-bc01-70aedef0ed4b",
                            "date": 1662581310000,
                            "comment": "App defender (13993), license payment, plan Pro-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 20.13,
                            "id": "e564bff4-3545-4ab2-a30c-9f94380d9621",
                            "date": 1662581485000,
                            "comment": "App defender plan upgrade (Startup-monthly → Pro-monthly) partial refund",
                            "type": "app_payment_upgrade_refund"
                        },
                        {
                            "balance": 200,
                            "id": "81235344-e3a8-4f83-8132-81cf3b883eda",
                            "date": 1663924364000,
                            "comment": "Wire transfer from ООО «ТД Компания Дефендер», 12800 ₽ → 200 D-coins",
                            "type": "bank_payment"
                        }
                    ]
                },
                "next_billing_date": 1696692731580,
                "sysName": "defender",
                "plan_id": {
                    "price": 1188,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-yearly"
                },
                "id": "13993",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 1188,
                "events": [
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → Pro-yearly",
                        "date": 1666868981000,
                        "id": "f451d12f-5702-4dcb-bad6-65bea62ef31d"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1662581310000,
                        "type": "billing_regular",
                        "id": "d21cf478-65c8-4320-87b8-e7ba41aa4f54"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1662581611000,
                        "id": "f63d2e84-9df9-42bd-bc55-691273b1f6f7"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663848709000,
                        "messagee": "App plan updated Pro-yearly → Pro-monthly",
                        "id": "a5afec22-6eda-4d1b-ac37-9f07252043db"
                    },
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1661268731000,
                        "id": "5c50a470-15ea-490d-8028-3eebb9d9c03e"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1665133249000,
                        "type": "billing_regular",
                        "id": "248f3aee-a1cd-495f-b56e-b6bb00755aab"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Startup-monthly → Pro-monthly",
                        "date": 1662581185000,
                        "id": "70e17958-364f-454c-b672-8dddd5da8eff"
                    },
                    {
                        "date": 1666869124000,
                        "messagee": "License payment -1188 D-coins, plan Pro",
                        "type": "billing_regular",
                        "id": "f39ee83c-7121-4e61-b117-c0ac2da0bb30"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → Pro-yearly",
                        "date": 1663750245000,
                        "id": "7d7c8a5e-2ee0-4cf6-a8d5-126cee62c3aa"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "medtechgrants",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -251,
                    "id": "medtechapplications@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -139,
                            "id": "2dd2c67b-ca5e-41d3-a2bc-0bb9e9ddb6a7",
                            "date": 1669194037000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "9800b4fd-e8a6-4727-a744-c3cddd47c877",
                            "date": 1666515628000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1000,
                            "id": "46bf6311-c3be-4c8c-8a95-69128a216cf8",
                            "date": 1664185658000,
                            "comment": "Wire transfer from АНО «Московский центр инновационных технологий в  здравоохранении», 64000 ₽ → 1000 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -139,
                            "id": "0ac44dcc-a293-4efd-b8d2-4470aaa9cea3",
                            "date": 1661245231000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "ebd9fde5-2951-4250-bd47-4af4d116a335",
                            "date": 1650704439000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "17406114-412b-4941-9ab1-35ebd0dd91cf",
                            "date": 1671786043000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "44e0fdea-aa00-4b27-b69b-a53df86f86d7",
                            "date": 1653298795000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "188dab18-0fd9-420f-80b0-3f9b49500b3e",
                            "date": 1655974835000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "c1468bad-6a24-4a5b-b7aa-f35645a0047c",
                            "date": 1665047252000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "1ae375bf-356f-4258-8629-4fb78bea95a1",
                            "date": 1658566887000,
                            "comment": "App medtechgrants (7707), license payment, plan Pro",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1674464611551,
                "sysName": "medtechgrants",
                "plan_id": {
                    "price": 139,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "manual",
                "id": "7707",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 139,
                "events": [
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1669194037000,
                        "type": "billing_regular",
                        "id": "d7c90e20-5e84-470b-9b56-6dbfc4c36ea1"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1666515630000,
                        "type": "billing_regular",
                        "id": "1c1a5f13-17ee-4b7b-903e-5358bf479113"
                    },
                    {
                        "type": "plan_update",
                        "date": 1652773035000,
                        "messagee": "App plan updated Pro → Pro",
                        "id": "1dfadf8f-681c-4b90-9d26-9e64ef5ba9a8"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → FREE",
                        "date": 1663923657000,
                        "id": "596c6fb4-f92f-4e3a-9cb5-d28e2a3208c4"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Business-monthly → Pro-monthly",
                        "date": 1652776563000,
                        "id": "ef971577-10cb-40eb-a850-1e2103081c86"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1658566887000,
                        "type": "billing_regular",
                        "id": "5298e3f6-cdfb-4fca-89d4-38fa6727718c"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1655974842000,
                        "type": "billing_regular",
                        "id": "80cc82ec-d190-481a-b36e-1a91d4b61982"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664960433000,
                        "messagee": "App plan updated Pro-monthly → FREE",
                        "id": "c3972ff3-b5f9-411f-a8e7-16d0bb9f99ac"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664960611000,
                        "messagee": "App plan updated FREE → Pro-monthly",
                        "id": "2f363c81-0e5f-44a7-94e9-f616149a775d"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "type": "billing_regular",
                        "date": 1653298795000,
                        "id": "6a750980-cc93-4e30-9ba9-eadcf7cbdebe"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664960320000,
                        "messagee": "App plan updated FREE → Pro-monthly",
                        "id": "71a4d73b-6627-4d0e-b60c-019a18651f80"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1671786046000,
                        "type": "billing_regular",
                        "id": "2d23bbad-e75f-446e-bd95-f83c8a56c62a"
                    },
                    {
                        "date": 1650704453000,
                        "type": "billing_regular",
                        "messagee": "License payment -429 D-coins, plan Free",
                        "id": "59b40481-2247-4562-bab8-e1985407f5e0"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "type": "billing_regular",
                        "date": 1661245232000,
                        "id": "30f00610-b99f-432a-9cff-2b7dd8f12a74"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1665047342000,
                        "type": "billing_regular",
                        "id": "68fd9491-d622-46c1-8a38-05744a4db744"
                    },
                    {
                        "date": 1652775329000,
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-yearly → Business-monthly",
                        "id": "5892e123-2cb4-4d1b-8424-af74c639016c"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1645123750000,
                        "id": "18f9c110-6669-4a05-b6e9-53f303cc6c94"
                    }
                ],
                "comments": [
                    {
                        "user_id": {
                            "lastName": "Ershov",
                            "firstName": "Pavel"
                        },
                        "date": 1640851387000,
                        "text": "Покупают по счету. Последний платеж 28.12\nОт \"Московский центр инновационных технологий в здравоохранении\", 21 861 ₽",
                        "id": "4a530e4f-f304-4e24-9a4f-149501086fd6"
                    }
                ],
                "legacy_billing": ""
            },
            {
                "name": "team",
                "team_id": {
                    "name": "Code world team 2",
                    "owner_id": "novozhilov@code-word.ru",
                    "tariff_id": "AppSumo_tier3",
                    "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 19.5,
                    "id": "novozhilov@code-word.ru",
                    "wallet_transactions": [
                        {
                            "balance": 19.5,
                            "id": "9b975bea-a1fe-49c6-8e0f-b45c93416f33",
                            "date": 1666909392000,
                            "comment": "Affiliate reward for 2222olga86@gmail.com transaction (app sagan, -39 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -236,
                            "id": "b663331b-f5f2-42ff-8d24-6953f648793d",
                            "date": 1649751898000,
                            "comment": "Team plan upgrade (+10 lifetime sandboxes), team Code world team 2",
                            "type": "team_payment"
                        },
                        {
                            "balance": 0,
                            "id": "15b16345-dcb5-47c7-80c9-2db2e2bd68da",
                            "date": 1651395632000,
                            "comment": "App instar (12634), license payment, plan Pro-sandbox-AppSumo",
                            "type": "app_payment"
                        },
                        {
                            "balance": 236,
                            "id": "88dbdf93-9015-4ae5-80f5-3c351707961a",
                            "date": 1649679538000,
                            "comment": "Adding funds via Tinkoff 18880.0 ₽ → 236.0 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "sysName": "team",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "13827",
                "is_hidden": true,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "date": 1659685814000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "3439e81e-c997-4009-b5f9-c325918dd2d5"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1659685814000,
                        "id": "96dcf0f0-f27a-4b30-bc5f-8f4439481bcd"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "MeToo - клининговая компания",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 55,
                    "id": "grushik.roman@ya.ru",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d08921ca-f286-4e77-9340-c8a951044d40",
                            "date": 1667725230000,
                            "comment": "App metoo (12419), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "83dcc957-432a-4230-b497-6213ff54501a",
                            "date": 1665047348000,
                            "comment": "App metoo (12419), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "fb37b5c9-41f0-494f-962e-28220775ee87",
                            "date": 1657858406000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "10acf76c-6f2d-4922-ab6a-8d693890ddd7",
                            "date": 1670317235000,
                            "comment": "App metoo (12419), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "705f2671-14b6-4db2-9ba7-68aa45108f9e",
                            "date": 1667288199000,
                            "comment": "Promo-code RLEJHISMUNMI",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "b63551b0-932e-4b01-a1cb-e3bd6a9f1c83",
                            "date": 1659787305000,
                            "comment": "Update app metoo, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 50,
                            "id": "b7408e58-5ba9-4e09-8b43-5bac230841a9",
                            "date": 1659874814000,
                            "comment": "Promo-code WELCOME",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "b89426b3-67c1-40f3-a88a-fbfb21de0c94",
                            "date": 1662454833000,
                            "comment": "App metoo (12419), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1672999598367,
                "sysName": "metoo",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12419",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1659787307000,
                        "id": "81f227d2-22fb-46ce-b76b-dc0039b896d6"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1665047362000,
                        "type": "billing_regular",
                        "id": "e275f293-de75-4d91-8a0d-f83a257bdec0"
                    },
                    {
                        "date": 1662454833000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "948c8cae-80f9-4ad6-b82d-0993fdeb5c42"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1667725230000,
                        "id": "1faa8ec5-8765-4c28-a038-f45d8ab8cf23"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1670317235000,
                        "id": "1443acfc-b607-4e15-90b4-4b16d7750caf"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Zapusk App",
                "is_blocked": false,
                "team_id": {
                    "name": "Vlad Kovalsky Team",
                    "owner_id": "ncdmstrs@gmail.com",
                    "tariff_id": "team_monthly",
                    "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "x20081988@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "a509623b-b1ee-433f-a519-6806f4ec7d93",
                            "date": 1671267631000,
                            "comment": "App zapusk (11477), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "678c6afd-caae-4d06-83b9-982536b6f739",
                            "date": 1668675691000,
                            "comment": "App zapusk (11477), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "64481bce-9c67-4541-935d-1cda07897097",
                            "date": 1667313617000,
                            "comment": "Promo-code ASTANAHUB",
                            "type": "promo"
                        },
                        {
                            "balance": -7.36,
                            "id": "f3ce72bc-19b3-4991-8622-5ebc92bc8fd4",
                            "date": 1667309852000,
                            "comment": "On-demand resource consumption. App zapusk (11477), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "04171f58-3f3a-4d93-a14e-2ec9dccf9c8d",
                            "date": 1665997255000,
                            "comment": "App zapusk (11477), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4.36,
                            "id": "8010cc67-6b4b-4c04-83c6-4889da38d253",
                            "date": 1671267638000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 40,
                            "id": "e53f9cb2-506d-4ddd-b794-2e2ec4825312",
                            "date": 1663334165000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -5.56,
                            "id": "1736f72a-e99d-41fe-b618-97a53021163b",
                            "date": 1664619209000,
                            "comment": "On-demand resource consumption. App zapusk (11477), period 2022-09",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "c3384f78-4a3c-4dcc-b941-35cdf2ceda04",
                            "date": 1663409225000,
                            "comment": "Update app zapusk, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4.56,
                            "id": "bfdc72d3-3b2e-40c7-93f8-9c2159fae733",
                            "date": 1664619218000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1673950544473,
                "sysName": "zapusk",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "11477",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "date": 1644517438000,
                        "messagee": "Tariff has been changed Free (FREE) → Free (FREE)",
                        "type": "tariff_changed",
                        "id": "ba950732-a4a1-4b68-8cce-77b9def892af"
                    },
                    {
                        "type": "plan_update",
                        "date": 1661449918000,
                        "messagee": "App plan updated Pro-sandbox → FREE",
                        "id": "c47967ba-ab50-44ca-a690-c3663f8922d7"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 7.36",
                        "date": 1667309852000,
                        "id": "4ed64ca6-79e2-4b96-b287-fb53d522f887"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663317738000,
                        "messagee": "App plan updated Pro-sandbox → FREE",
                        "id": "32962c3f-5cb8-443b-b009-4be2111e213c"
                    },
                    {
                        "type": "plan_update",
                        "date": 1661072885000,
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "id": "45af871d-2dd9-464d-b2fb-1ff3aae268ae"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1644517461000,
                        "messagee": "Tariff has been changed Free (FREE) → Pro-sandbox (Pro-sandbox)",
                        "id": "9dd4a8d1-0046-4c31-bc95-81f4d2a4327c"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663409744000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "f99a81a3-74a9-4af1-af21-a6a568f9b5c3"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663409651000,
                        "messagee": "App plan updated Pro-sandbox → FREE",
                        "id": "46cc0850-bb6e-4300-888f-76f69690507b"
                    },
                    {
                        "type": "plan_update",
                        "date": 1661072694000,
                        "messagee": "App plan updated Pro-sandbox → FREE",
                        "id": "e761b124-b8fe-4a19-ae03-e0513bb492f8"
                    },
                    {
                        "date": 1671267631000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "73eb5ca8-7f22-4ff2-bca4-cd858102251a"
                    },
                    {
                        "type": "plan_update",
                        "date": 1661254937000,
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "id": "6124d01f-d201-4e01-b5bd-e698a305b507"
                    },
                    {
                        "date": 1644584843000,
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Free (FREE) → Pro-sandbox (Pro-sandbox)",
                        "id": "47909237-428b-4cd7-aefc-0a47af03698a"
                    },
                    {
                        "date": 1668675691000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "ad4076b2-6178-4235-ab56-16fa99e205c3"
                    },
                    {
                        "type": "tariff_changed",
                        "messagee": "Tariff has been changed Pro-sandbox (Pro-sandbox) → Free (FREE)",
                        "date": 1644584762000,
                        "id": "c6f35cf6-37c4-4c7c-9035-3ff37a817167"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663409333000,
                        "messagee": "App plan updated Startup-monthly → Pro-sandbox",
                        "id": "0e480c17-c6ca-4e7c-aa32-4ccd02a66aa4"
                    },
                    {
                        "type": "plan_update",
                        "date": 1661254736000,
                        "messagee": "App plan updated Pro-sandbox → FREE",
                        "id": "cc286232-9057-47b5-a833-1542c3b85183"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "date": 1661497606000,
                        "id": "b58ff4bb-9a27-4942-8dea-e9c29e1cab0e"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1649058546000,
                        "id": "c97afe73-4b37-4718-940b-f05e50bc4924"
                    },
                    {
                        "messagee": "On-demand charged $ 5.56",
                        "type": "billing_ondemand",
                        "date": 1664619208000,
                        "id": "c4b59792-447a-4d55-b484-4a8f162027ff"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1665997255000,
                        "id": "2c38d0f6-c307-49d4-8898-ff57b2b90456"
                    },
                    {
                        "type": "plan_update",
                        "date": 1663409227000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "2d719eaf-88b8-4ded-95b3-3ca622bab72f"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "peers",
                "is_blocked": false,
                "team_id": {
                    "name": "Code world team 2",
                    "owner_id": "novozhilov@code-word.ru",
                    "tariff_id": "AppSumo_tier3",
                    "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -424.59,
                    "id": "a.yukhtmakher@upandout.ru",
                    "wallet_transactions": [
                        {
                            "balance": -24.52,
                            "id": "0f722147-4cf3-41a2-a029-eed726b69a0f",
                            "date": 1669910877000,
                            "comment": "On-demand resource consumption. App peers (14335), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -19.5,
                            "id": "07872501-c237-42dd-956e-b59b07538ced",
                            "date": 1667811632000,
                            "comment": "App peers (14335), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "25771459-35ee-4c47-b3c7-467f9ac7b26d",
                            "date": 1667293226000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 489,
                            "id": "ced9aee1-d997-4104-bfcb-e18a224e76c5",
                            "date": 1666966293000,
                            "comment": "Adding funds via Tinkoff 31296.0 ₽ → 489.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -150,
                            "id": "f4826251-b5ad-4891-bb45-fd204f2a7908",
                            "date": 1664614840000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "ecf1197b-334a-4f08-9df2-be7d89226bd6",
                            "date": 1669885229000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "a0ef7b4c-6de4-42da-951c-2dd31aef1aff",
                            "date": 1662022827000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "b2bb78b9-e39a-4577-b291-bae7ae4d88db",
                            "date": 1663664443000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 600,
                            "id": "94933824-008a-4015-99d5-36d835f05b37",
                            "date": 1656000938000,
                            "comment": "Adding funds via Tinkoff 36000.0 ₽ → 600.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -150,
                            "id": "83cc72dc-e6c7-4645-a70e-48958e45ac08",
                            "date": 1656666027000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "37ddcd10-6694-4b87-a665-8443b3d265c7",
                            "date": 1654074021000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 450,
                            "id": "cac382af-03aa-40bd-a350-e534379cc6b5",
                            "date": 1661453847000,
                            "comment": "Adding funds via Tinkoff 28800.0 ₽ → 450.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -61.07,
                            "id": "e164c733-dfa5-4c7d-bc65-a30a60b35b08",
                            "date": 1667309914000,
                            "comment": "On-demand resource consumption. App peers (14335), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -150,
                            "id": "20baf846-70cb-420f-892c-851b1ce4e970",
                            "date": 1658307627000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "8ba3bd62-fca3-4583-adb9-36a797652aed",
                            "date": 1653123609000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "9be22a0f-8be6-4eb9-9fd7-7e84c8d0dcfe",
                            "date": 1659344441000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "1ea01746-628a-41d7-b8ee-e63b0d987df9",
                            "date": 1664442060000,
                            "comment": "App upandout (13112), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "53f0aa7f-92b9-4a8f-9663-035a6d57a09f",
                            "date": 1660986037000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "0d50b00d-5615-488e-b3aa-183fae67da6d",
                            "date": 1670403630000,
                            "comment": "App peers (14335), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "c0c0f36d-f418-466a-bbeb-9ebaf50b0f81",
                            "date": 1655715620000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "e8120607-c505-4b30-a62c-616d950c1ce8",
                            "date": 1661761546000,
                            "comment": "App upandout (13112), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1673096338044,
                "sysName": "peers",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14335",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 19.5,
                "events": [
                    {
                        "type": "plan_update",
                        "date": 1665147537000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "9708680b-5c5d-4286-b760-85e0a131035e"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1669910877000,
                        "messagee": "On-demand charged $ 24.52",
                        "id": "226752eb-8c8c-40c2-957d-3e4b7f85a41a"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1665147266000,
                        "id": "c1956c4f-7a30-4d88-a359-6cb874e0247e"
                    },
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1665147193000,
                        "id": "9fab5da9-3281-4691-b4c2-e0cc72d9ba29"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 61.07",
                        "date": 1667309912000,
                        "id": "3ef71ebe-2163-4de6-80e2-0436c69baa44"
                    },
                    {
                        "type": "billing_regular",
                        "date": 1667811632000,
                        "messagee": "License payment -19.5 D-coins, plan Startup",
                        "id": "5b928333-255c-4757-a15e-7f60a832cdb3"
                    },
                    {
                        "date": 1670403630000,
                        "type": "billing_regular",
                        "messagee": "License payment -19.5 D-coins, plan Startup",
                        "id": "8f25ac95-0a9e-4e58-9a71-9ceb75d41071"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Bookie",
                "owner_id": {
                    "wallet_balance": 61,
                    "id": "ansumar19@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "58bc8509-9384-420d-bbfd-31b08ab847ad",
                            "date": 1670505315000,
                            "comment": "Create app bookiedookie, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "c80cca3e-a26f-41ef-bceb-ef3e6c5a3325",
                            "date": 1670504027000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1673183729146,
                "sysName": "bookiedookie",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14975",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "date": 1670505329000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "1fcb18bf-7c89-4d54-ab71-26c24fae87f7"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Relocare Webapp Backend",
                "owner_id": {
                    "wallet_balance": 72,
                    "id": "vitaly.krenel@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "daf23678-c552-46a4-81c2-9012e574e93d",
                            "date": 1670230876000,
                            "comment": "App relocare (14600), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 50,
                            "id": "bd5a5022-6398-48e3-8e0f-61ed9d52c5d0",
                            "date": 1667807289000,
                            "comment": "Promo-code welcome",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "c8fae1ac-b3f0-48f5-85fb-950bb0a4ff50",
                            "date": 1667677162000,
                            "comment": "Update app relocare, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "c334c834-e47a-4cb5-8f9b-d28024ac228e",
                            "date": 1657651204000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1672947562646,
                "sysName": "relocare",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14600",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "date": 1667658669000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "3ff27458-6406-4c20-beea-c0260f206182"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "date": 1667677162000,
                        "id": "0d9c45c6-2429-467e-89da-73ca484c2411"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1670230876000,
                        "id": "43adce23-e7a9-44b2-b788-4a8a928961ba"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "André Casaca",
                "is_blocked": false,
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "andrecasaca@laplace-intelligence.com",
                    "wallet_transactions": [
                        {
                            "balance": 348,
                            "id": "c874eb9c-8edb-4f70-add3-9480bddb0b85",
                            "date": 1668330033000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -348,
                            "id": "93fad313-5979-4357-a7ad-4cb2be7de2ee",
                            "date": 1668330026000,
                            "comment": "App refactory (11803), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1699888781127,
                "sysName": "refactory",
                "plan_id": {
                    "price": 348,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-yearly"
                },
                "id": "11803",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 348,
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "messagee": "License payment -348 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1668330026000,
                        "id": "4b1fd00c-57eb-4cac-bfad-6d2e3f5d88a8"
                    },
                    {
                        "type": "change_owner",
                        "messagee": "App's owner has been changed nuno.poco@gmail.com → andrecasaca@laplace-intelligence.com",
                        "date": 1668266347000,
                        "id": "dac894d9-c048-4816-a901-174793ec58c6"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1648303757000,
                        "id": "c654f7b9-615e-470d-814f-2f2e2d4ab096"
                    },
                    {
                        "type": "plan_update",
                        "date": 1668266381000,
                        "messagee": "App plan updated FREE → Startup-yearly",
                        "id": "f9176110-4e1d-4623-8324-510555339357"
                    },
                    {
                        "type": "tariff_changed",
                        "date": 1644947508000,
                        "messagee": "Tariff has been changed Free (FREE) → Pro-sandbox-AppSumo (Pro-sandbox-AppSumo)",
                        "id": "9f9ca618-9283-4d08-8f6e-64505b7273c0"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "date": 1668266315000,
                        "id": "9917dd0c-c710-4178-a905-fcdc097f66a7"
                    }
                ],
                "comments": [],
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "vitrina 22|52",
                "is_blocked": false,
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": -424.59,
                    "id": "a.yukhtmakher@upandout.ru",
                    "wallet_transactions": [
                        {
                            "balance": -24.52,
                            "id": "0f722147-4cf3-41a2-a029-eed726b69a0f",
                            "date": 1669910877000,
                            "comment": "On-demand resource consumption. App peers (14335), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -19.5,
                            "id": "07872501-c237-42dd-956e-b59b07538ced",
                            "date": 1667811632000,
                            "comment": "App peers (14335), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "25771459-35ee-4c47-b3c7-467f9ac7b26d",
                            "date": 1667293226000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 489,
                            "id": "ced9aee1-d997-4104-bfcb-e18a224e76c5",
                            "date": 1666966293000,
                            "comment": "Adding funds via Tinkoff 31296.0 ₽ → 489.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -150,
                            "id": "f4826251-b5ad-4891-bb45-fd204f2a7908",
                            "date": 1664614840000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "ecf1197b-334a-4f08-9df2-be7d89226bd6",
                            "date": 1669885229000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "a0ef7b4c-6de4-42da-951c-2dd31aef1aff",
                            "date": 1662022827000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "b2bb78b9-e39a-4577-b291-bae7ae4d88db",
                            "date": 1663664443000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 600,
                            "id": "94933824-008a-4015-99d5-36d835f05b37",
                            "date": 1656000938000,
                            "comment": "Adding funds via Tinkoff 36000.0 ₽ → 600.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -150,
                            "id": "83cc72dc-e6c7-4645-a70e-48958e45ac08",
                            "date": 1656666027000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "37ddcd10-6694-4b87-a665-8443b3d265c7",
                            "date": 1654074021000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 450,
                            "id": "cac382af-03aa-40bd-a350-e534379cc6b5",
                            "date": 1661453847000,
                            "comment": "Adding funds via Tinkoff 28800.0 ₽ → 450.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -61.07,
                            "id": "e164c733-dfa5-4c7d-bc65-a30a60b35b08",
                            "date": 1667309914000,
                            "comment": "On-demand resource consumption. App peers (14335), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": -150,
                            "id": "20baf846-70cb-420f-892c-851b1ce4e970",
                            "date": 1658307627000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "8ba3bd62-fca3-4583-adb9-36a797652aed",
                            "date": 1653123609000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "9be22a0f-8be6-4eb9-9fd7-7e84c8d0dcfe",
                            "date": 1659344441000,
                            "comment": "App vitrina2252 (4265), license payment, plan Business (legacy)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "1ea01746-628a-41d7-b8ee-e63b0d987df9",
                            "date": 1664442060000,
                            "comment": "App upandout (13112), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "53f0aa7f-92b9-4a8f-9663-035a6d57a09f",
                            "date": 1660986037000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "0d50b00d-5615-488e-b3aa-183fae67da6d",
                            "date": 1670403630000,
                            "comment": "App peers (14335), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -150,
                            "id": "c0c0f36d-f418-466a-bbeb-9ebaf50b0f81",
                            "date": 1655715620000,
                            "comment": "App brands247 (7332), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -19.5,
                            "id": "e8120607-c505-4b30-a62c-616d950c1ce8",
                            "date": 1661761546000,
                            "comment": "App upandout (13112), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1672567586768,
                "sysName": "vitrina2252",
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "paddle_subscription_id": "6240856",
                "id": "4265",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 150,
                "events": [
                    {
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "date": 1659344442000,
                        "type": "billing_regular",
                        "id": "bb117656-bb38-4b8e-95c9-815844374474"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "date": 1662022828000,
                        "type": "billing_regular",
                        "id": "387dc274-a039-4878-9b60-2244a817da0d"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "date": 1667293227000,
                        "type": "billing_regular",
                        "id": "7ed3a904-e994-42c9-a062-af4708db3aa7"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "date": 1656666029000,
                        "type": "billing_regular",
                        "id": "5a0989ed-5e8a-4baf-a9f1-62961ec42017"
                    },
                    {
                        "date": 1669885233000,
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "type": "billing_regular",
                        "id": "0dbe0fb5-c454-4de4-9d6f-ba5f991f21bf"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "date": 1664614844000,
                        "type": "billing_regular",
                        "id": "78aa4f74-9113-436d-9b2d-0a069d8edd01"
                    },
                    {
                        "messagee": "License payment -150 D-coins, plan Business (legacy)",
                        "type": "billing_regular",
                        "date": 1654074092000,
                        "id": "d2f634af-82b1-4435-8718-819d67048123"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "UFG PROD 2022",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "amamon@altusca.com",
                    "wallet_transactions": [
                        {
                            "balance": 3600,
                            "id": "b8e06ad8-60d4-4f56-84fa-06d1fa2896d6",
                            "date": 1654694128000,
                            "comment": "Wire transfer from ООО «Альтус Кэпитал», 248400 ₽ → 3600 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -3600,
                            "id": "278d645a-2a7d-4f5c-8325-715be55bc0fd",
                            "date": 1652773985000,
                            "comment": "App ufg-prod-2022 (11728), license payment, plan Business",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1682935347538,
                "sysName": "ufg-prod-2022",
                "plan_id": {
                    "price": 3600,
                    "name": "Business",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-yearly"
                },
                "id": "11728",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 3600,
                "events": [
                    {
                        "date": 1650704451000,
                        "messagee": "License payment -0 D-coins, plan Free",
                        "type": "billing_regular",
                        "id": "33416d70-caed-48e4-a5a6-b76b80dccc6e"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1643899406000,
                        "id": "dc33f25b-bc13-4a78-aff8-3f8dc84b5137"
                    },
                    {
                        "type": "plan_update",
                        "date": 1652773875000,
                        "messagee": "App plan updated FREE → Business-yearly",
                        "id": "a6685024-605f-4c0e-9713-c4c3d2022580"
                    },
                    {
                        "date": 1652773985000,
                        "type": "billing_regular",
                        "messagee": "License payment -3600 D-coins, plan Business",
                        "id": "dc755371-30b2-41d8-8247-69d68b6ba7ac"
                    },
                    {
                        "type": "billing_regular",
                        "date": 1652775688000,
                        "messagee": "License payment -3600 D-coins, plan Business",
                        "id": "e3e9a285-a5c5-4647-a020-c5d7594b0e5b"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "CNP Mentor",
                "is_blocked": false,
                "team_id": {
                    "name": "Team Mopheth",
                    "owner_id": "bankoledapo@hotmail.com",
                    "tariff_id": "AppSumo_tier4",
                    "id": "41adf97f-aee8-4f11-9873-b814a6b19773",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "bankoledapo@hotmail.com",
                    "wallet_transactions": []
                },
                "next_billing_date": 1666761860827,
                "sysName": "cmentor",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "14260",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1664169860000,
                        "id": "6a4b2e54-1019-48fa-bb81-a0e85c04263d"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1664169317000,
                        "id": "bbdad6dd-20cb-427c-8ddc-5a185a109d82"
                    },
                    {
                        "date": 1664166193000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "5b3c2116-5e87-4e01-a788-39518e9f224b"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664169547000,
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "id": "5201a6ec-2df0-4a7c-8387-050cfdfe5a94"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664169331000,
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "id": "0c1e6a54-c898-4788-8750-ab4350df5267"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664166193000,
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "id": "2cb2e34a-52b6-4707-b65f-9e64d50ce80d"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1664169651000,
                        "id": "4eeb6768-e387-4ecf-81dc-42193907a7aa"
                    },
                    {
                        "type": "plan_update",
                        "date": 1664166235000,
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "id": "a40834c6-676c-4b45-bf46-4461c3fd6c12"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox-AppSumo → FREE",
                        "date": 1664169703000,
                        "id": "bcd299e5-77ad-42c9-83f7-437eca3e2c40"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "instar",
                "is_blocked": false,
                "team_id": {
                    "name": "Code world team 2",
                    "owner_id": "novozhilov@code-word.ru",
                    "tariff_id": "AppSumo_tier3",
                    "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "is_hidden": false
                },
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 100,
                    "id": "alexanderscherbina77@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 39,
                            "id": "5275786a-c680-445b-997b-ac649b9396c2",
                            "date": 1671025239000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "b41228d3-c7cb-4235-96b9-5fa0109ea23f",
                            "date": 1671025235000,
                            "comment": "Update app instar, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "62447747-601f-46d4-b107-c4886960e24e",
                            "date": 1664614845000,
                            "comment": "App instar (12634), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 99.38,
                            "id": "e11bdaf2-73d5-44d8-8ac8-b3b956e38e6b",
                            "date": 1662022835000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 100,
                            "id": "2243c393-a29b-4c4e-95ad-99dea30afbd1",
                            "date": 1659386616000,
                            "comment": "Promo-code FG9RPU45Z5MI",
                            "type": "promo"
                        },
                        {
                            "balance": 100,
                            "id": "2151bd31-ce5e-4dd4-8e33-03e695420ed3",
                            "date": 1659386474000,
                            "comment": "Promo-code ORAIMKNE9UDI",
                            "type": "promo"
                        },
                        {
                            "balance": -139,
                            "id": "b0b8a8cb-9585-4ccf-ae0e-37f4f086e22c",
                            "date": 1651564191000,
                            "comment": "Update app instar, plan Pro-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "36790083-afa6-4400-970f-2509592b9558",
                            "date": 1671025269000,
                            "comment": "Promo-code 258FZURCC8FR",
                            "type": "promo"
                        },
                        {
                            "balance": 139,
                            "id": "af5dae72-b59c-4d9b-a76e-dcef52af9094",
                            "date": 1670578980000,
                            "comment": "loyalyty",
                            "type": "manual"
                        },
                        {
                            "balance": -139,
                            "id": "32e7202f-ee4b-40a8-99f1-2db935c47ff7",
                            "date": 1654074098000,
                            "comment": "App instar (12634), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 200,
                            "id": "cc2a1aa3-da33-4395-9517-042fdaf87b37",
                            "date": 1651564159000,
                            "comment": "Adding funds via Tinkoff 14400.0 ₽ → 200.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 82.1,
                            "id": "57cac470-4524-4b66-9fd1-04a1a8caa50e",
                            "date": 1654083198000,
                            "comment": "Adding funds via Tinkoff 5665.0 ₽ → 82.10 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -139,
                            "id": "f909475b-a3c5-498c-909f-14e7155ac0c1",
                            "date": 1656666029000,
                            "comment": "App instar (12634), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "a1080ae7-4fc7-405d-815e-d71defeb5376",
                            "date": 1662022828000,
                            "comment": "App instar (12634), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -21.38,
                            "id": "5bdf0095-94ac-4d4a-b3cc-cdb8bf9fe549",
                            "date": 1659359353000,
                            "comment": "On-demand resource consumption. App instar (12634), period 2022-07",
                            "type": "ondemand"
                        },
                        {
                            "balance": -4.11,
                            "id": "eb320bb2-73bd-4259-84ba-bfdc2657e98a",
                            "date": 1654082565000,
                            "comment": "On-demand resource consumption. App instar (12634), period 2022-05",
                            "type": "ondemand"
                        },
                        {
                            "balance": 270.3,
                            "id": "2fa155c7-3043-4e27-8575-fa0c81cbf2ef",
                            "date": 1656674441000,
                            "comment": "Adding funds via Tinkoff 16218.0 ₽ → 270.3 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -131.29,
                            "id": "4cf2d706-edaf-4044-ae6b-971ff9afbb9e",
                            "date": 1656666830000,
                            "comment": "On-demand resource consumption. App instar (12634), period 2022-06",
                            "type": "ondemand"
                        },
                        {
                            "balance": -139,
                            "id": "424ad113-8051-4e05-881e-bf380aba8793",
                            "date": 1659344445000,
                            "comment": "App instar (12634), license payment, plan Pro",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1673703639863,
                "sysName": "instar",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12634",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1656666029000,
                        "type": "billing_regular",
                        "id": "0ec57d9e-560d-4a26-b0ce-0d091e900a99"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1659359353000,
                        "messagee": "On-demand charged $ 21.38",
                        "id": "13f839c8-ace5-4e9e-bda4-5481d63f4e08"
                    },
                    {
                        "messagee": "License payment -0 D-coins, plan Pro-sandbox-AppSumo",
                        "type": "billing_regular",
                        "date": 1651395650000,
                        "id": "d322ed87-0b68-465e-908d-6215bff9139f"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1659344442000,
                        "type": "billing_regular",
                        "id": "98001b69-8b63-49d4-ab5f-1bf9b09e7858"
                    },
                    {
                        "type": "plan_update",
                        "date": 1671025235000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "caba2233-4dbe-458e-bc23-e763d203e7ec"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1649531517000,
                        "id": "0489f6d6-0e01-422c-ac7e-658012a53a65"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1654074112000,
                        "type": "billing_regular",
                        "id": "bfccfc54-7e84-4f6e-b03e-4a744a2a2b05"
                    },
                    {
                        "messagee": "App is downgraded to FREE",
                        "date": 1667293227000,
                        "type": "billing_regular",
                        "id": "11ed063c-9930-43f2-aa25-024869ed4a1c"
                    },
                    {
                        "messagee": "App is BLOCKED",
                        "type": "block_on",
                        "date": 1668848235000,
                        "id": "f2e23569-005d-48b8-847d-b627cf449fa2"
                    },
                    {
                        "date": 1656666830000,
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 131.29",
                        "id": "10f8db20-65b3-48df-b71f-37bbb757cb6e"
                    },
                    {
                        "type": "billing_ondemand",
                        "messagee": "On-demand charged $ 4.11",
                        "date": 1654082565000,
                        "id": "9a84b402-bed6-4ca5-9250-510b30b2ede7"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1662022828000,
                        "type": "billing_regular",
                        "id": "94486a29-9991-40b4-a591-6d0d6736b696"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → FREE",
                        "date": 1667293228000,
                        "id": "a11ceaa0-5089-4b68-8b79-6bdc13b0b735"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1670572700000,
                        "id": "08cbfc75-fa29-4c91-9c7e-a6f0e3871abd"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1664614844000,
                        "type": "billing_regular",
                        "id": "8eeb4a50-9f88-4458-906d-59e7f6640914"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "movies beginner",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "svetlnas@mail.ru",
                    "wallet_transactions": []
                },
                "sysName": "begginer",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "14770",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1668796619000,
                        "id": "537e7bcd-524c-48df-9a6d-6d3c54dd1fb8"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Mokka Decision Engine for Test",
                "is_blocked": false,
                "owner_id": {
                    "wallet_balance": -0.53,
                    "id": "it.group@revoup.ru",
                    "wallet_transactions": [
                        {
                            "balance": 65.26,
                            "id": "e9a1f678-c155-489c-bbde-be06b4142590",
                            "date": 1671786055000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 0.92,
                            "id": "1b5b07d2-1a91-4e31-9e2d-6c0ff23966f1",
                            "date": 1669194072000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 3.98,
                            "id": "9139962b-b965-4df5-856c-6d2723be066c",
                            "date": 1669194067000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 17.39,
                            "id": "2f219f76-b604-4a17-871c-aefb66691041",
                            "date": 1669194062000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 331.09,
                            "id": "b009d12c-0af9-4a46-b086-e1b46ed91224",
                            "date": 1669194045000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.28,
                            "id": "60f3e04c-d19a-4fe7-a5d3-e7337c9cfcb7",
                            "date": 1666515649000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "c2951619-08e0-498b-a2e7-a30d718638e3",
                            "date": 1661245232000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "e728ea13-a382-4daf-bd85-7f3689faeb1b",
                            "date": 1658566887000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 349,
                            "id": "56c626ea-1f02-455e-bfd0-a04caeff0578",
                            "date": 1671786051000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 12.21,
                            "id": "929f34bd-f435-4da1-8721-77774a41a108",
                            "date": 1666515645000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 429,
                            "id": "eb9d4be8-127f-49b6-9371-36ff60bdb90c",
                            "date": 1653299171000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "f86e7585-381a-4872-bafe-df3e4dab688b",
                            "date": 1653298945000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 429,
                            "id": "9553c7dd-3b78-4af3-9dc4-8703707da5de",
                            "date": 1658566893000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 295.84,
                            "id": "86a52e7e-007c-4048-965a-8df17a9b917f",
                            "date": 1663923664000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "152a374d-2e13-458a-b6a1-7395000e0fb2",
                            "date": 1655974907000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 12.2,
                            "id": "6da8037e-1cfb-42f8-8abf-e9a46caa99ef",
                            "date": 1671786059000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "39135d32-17b1-46cd-bea1-7b0f7462f460",
                            "date": 1671786046000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "e0f08efd-51b9-497b-8d01-bb6d5fec3f73",
                            "date": 1666515630000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 348.78,
                            "id": "97672501-c331-4f76-87e7-a2464ad92020",
                            "date": 1661420222000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 429,
                            "id": "4cf6984e-f909-4ce0-ba5e-2f5c4dfaafbe",
                            "date": 1655974912000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -139,
                            "id": "f8722673-2702-40f2-9672-9d7f25aa653d",
                            "date": 1650704432000,
                            "comment": "App de-bulgaria (12167), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 139,
                            "id": "e8d9b1c9-777b-4624-85f3-697e40534e68",
                            "date": 1652364083000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.28,
                            "id": "b3cb6faf-4bcf-4f02-a39b-19804ed9692f",
                            "date": 1661420238000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 65.22,
                            "id": "cd5e26b6-533a-422a-bfce-5b86b9607d1a",
                            "date": 1661420228000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "73b3bf5e-4e77-498b-adc3-cd46a628ad87",
                            "date": 1669194037000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 10.34,
                            "id": "e53313c1-f61f-4673-81e8-39b3a1766d03",
                            "date": 1663923673000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 2.28,
                            "id": "19c16836-abed-4727-a419-07a99a73b562",
                            "date": 1671786063000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 65.64,
                            "id": "28ab6983-38e0-45ea-8b76-f170a443b94a",
                            "date": 1661422692000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "5a7baed9-9621-45b6-9286-18cee20d0896",
                            "date": 1663923658000,
                            "comment": "App decision-engine-prod (12660), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": 75.88,
                            "id": "023d36e8-5c6e-44fe-be8e-0ff32e0524bd",
                            "date": 1669194056000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 55.32,
                            "id": "cc464677-e119-4494-8070-add4171b8cea",
                            "date": 1663923668000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 1.93,
                            "id": "b113169a-5b40-419d-be09-50d4a877af47",
                            "date": 1663923679000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 349.15,
                            "id": "6db900f8-ef2c-46d9-83a5-37fc271b645a",
                            "date": 1666515636000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 12.2,
                            "id": "7fd0f49e-a34c-4636-ba6b-0868bdb0d28a",
                            "date": 1661420232000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": 65.28,
                            "id": "e0699592-7ec3-4654-87af-4c2576223e62",
                            "date": 1666515640000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        }
                    ]
                },
                "next_billing_date": 1653300230564,
                "sysName": "de-bulgaria",
                "plan_id": {
                    "price": 0,
                    "name": "Business DEV-env",
                    "description": "Development environment for an app on Business plan",
                    "id": "Business-DEV"
                },
                "id": "12167",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1645532204000,
                        "id": "88d75a13-19c1-4cf4-9c88-2a37c3d74c41"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "type": "billing_regular",
                        "date": 1650704446000,
                        "id": "42070960-a467-45f3-8256-7b48a4e50993"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → Business-DEV",
                        "date": 1653246649000,
                        "id": "f61173bd-d923-41a4-80c6-736aa7a21724"
                    }
                ],
                "comments": [],
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Vital Tech Results, LLC",
                "team_id": {
                    "tariff_id": "AppSumo_tier1",
                    "is_hidden": false,
                    "name": "AppSumo Tier 1",
                    "id": "0e0eb210-1869-488d-b4b1-fade5f296615"
                },
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "vitaltechresults@gmail.com",
                    "wallet_transactions": []
                },
                "next_billing_date": 1673605395524,
                "sysName": "vitaltechresults",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "15016",
                "is_hidden": false,
                "is_sandbox": true,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1670926995000,
                        "id": "3fc02ec4-ecef-40bd-8167-4e7291b28277"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Movies (beginner)",
                "owner_id": {
                    "wallet_balance": 81,
                    "id": "fyokl-a@yandex.ru",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "b3c6296f-0d1f-4e69-bdd4-2a5c6c8b43d9",
                            "date": 1670218952000,
                            "comment": "Update app movies-lesson1, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "f4f4e104-10d9-4208-8736-beb84d25d843",
                            "date": 1668661688000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1672897352865,
                "sysName": "movies-lesson1",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14742",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1668658657000,
                        "id": "c05184a5-3132-433c-af2d-376d85f3e9cb"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "date": 1670218952000,
                        "id": "8bb6f1eb-8af0-4b0a-b8ff-6d94b88bdb54"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "gamingbacklogru",
                "is_blocked": false,
                "owner_id": {
                    "wallet_balance": 0.9925,
                    "id": "pavel@ingros.ru",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "4e064770-bfbf-49b5-8080-cc060bcfc51d",
                            "date": 1670749277000,
                            "comment": "App gamingbacklogru (13629), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 103.8125,
                            "id": "a6591eda-47b7-464a-9f0f-9bd324fa112f",
                            "date": 1668363463000,
                            "comment": "Adding funds via Tinkoff 6644.0 ₽ → 103.8125 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -139,
                            "id": "c824e6ee-1a81-43de-9952-d94c87e60268",
                            "date": 1668157230000,
                            "comment": "App gamingbacklogru (13629), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 25,
                            "id": "1d9834e7-25e2-4454-a55b-652cf2439fd4",
                            "date": 1666706233000,
                            "comment": "Promo-code STQ1GWQ4ZPVI",
                            "type": "promo"
                        },
                        {
                            "balance": -139,
                            "id": "31472f31-798b-4321-8c1a-afbdd0de8e0a",
                            "date": 1654333313000,
                            "comment": "App backlogjiny (12309), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 144.09,
                            "id": "7ed1ea57-260a-48fc-b514-7a35d5eae016",
                            "date": 1653492013000,
                            "comment": "BONUS Adding funds via NEAR blockchain, 25.000000 NEAR → 144.09 D-coins",
                            "type": "crypto"
                        },
                        {
                            "balance": 144.09,
                            "id": "e9c5f1ee-15dd-4a94-b546-14ac8d691dd2",
                            "date": 1653492013000,
                            "comment": "Adding funds via NEAR blockchain, 25.000000 NEAR → 144.09 D-coins",
                            "type": "crypto"
                        },
                        {
                            "balance": -139,
                            "id": "d4a8324a-ba31-4902-b707-8d3b1a56723c",
                            "date": 1652773985000,
                            "comment": "App backlogjiny (12309), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 40,
                            "id": "8f71ed71-ffd9-4e95-901a-a548d723bbe2",
                            "date": 1648027772000,
                            "comment": "Adding funds via Tinkoff 3200.0 ₽ → 40.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 200,
                            "id": "a9ce8202-c2fd-4589-8e0f-4c6b4d704142",
                            "date": 1657080732000,
                            "comment": "Adding funds via Tinkoff 12000.0 ₽ → 200.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": 100,
                            "id": "a7c579c3-be73-4ddc-ad6b-f5f2b33f46f6",
                            "date": 1649056124000,
                            "comment": "Adding funds via Tinkoff 8000.0 ₽ → 100.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -139,
                            "id": "35190f59-fdf8-4473-bf05-301406e94699",
                            "date": 1662886846000,
                            "comment": "App gamingbacklogru (13629), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "d6af5c5c-2b83-4ea9-9587-f93c06b4d110",
                            "date": 1656925224000,
                            "comment": "App backlogjiny (12309), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "af36405e-b563-43d2-bf65-62a81f2df555",
                            "date": 1655544546000,
                            "comment": "Promo-code QO3VM7A54S4I",
                            "type": "promo"
                        },
                        {
                            "balance": 40,
                            "id": "ec598f27-9d4a-43f3-ae44-d2b6d0cee22c",
                            "date": 1670568554000,
                            "comment": "Adding funds via Tinkoff 2560.0 ₽ → 40.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -119,
                            "id": "2939f7e4-7099-40c0-999c-b537fb85a6a8",
                            "date": 1649058764000,
                            "comment": "App backlogjiny plan upgrade Startup-monthly → Pro-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "3cf63b1f-f080-498a-93fd-033d0483a92f",
                            "date": 1657556907000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": 50,
                            "id": "4adbd6d6-02dc-4194-93ef-d6f37a21659e",
                            "date": 1651638905000,
                            "comment": "Promo-code WELCOME",
                            "type": "promo"
                        },
                        {
                            "balance": -139,
                            "id": "491af1ca-7c76-4efe-8ffd-9b2a0a7c3871",
                            "date": 1659603636000,
                            "comment": "App backlogjiny (12309), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 140,
                            "id": "9311b401-6e9d-4489-80c3-a87487e3bdad",
                            "date": 1665406250000,
                            "comment": "Adding funds via Tinkoff 8960.0 ₽ → 140.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "12a30a18-c975-4c8e-8823-40179d29a89b",
                            "date": 1663506002000,
                            "comment": "Team Noitatech, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "0e890fd5-e97a-4736-bc3e-4c4cef2d1894",
                            "date": 1660220960000,
                            "comment": "Update app gamingbacklogru, plan Pro-monthly (previous plan: Pro-sandbox)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -54,
                            "id": "194e5c0f-c70e-45f1-85eb-3f2bc603d4e3",
                            "date": 1660827604000,
                            "comment": "Team Noitatech, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -54,
                            "id": "2fba2a42-821e-431b-83c9-1e420abeafcd",
                            "date": 1655544421000,
                            "comment": "Team  Noitatech, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 100,
                            "id": "ab803e40-574d-437e-9974-d996d0bbeaf5",
                            "date": 1662961544000,
                            "comment": "Adding funds via Tinkoff 6400.0 ₽ → 100.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -54,
                            "id": "b7b1bca2-b718-4b5a-8edc-3d753d76fd3b",
                            "date": 1658149203000,
                            "comment": "Team Noitatech, plan team_monthly, 1 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "b79648b8-6060-4174-ba72-1ced8f3ab1c6",
                            "date": 1665478867000,
                            "comment": "App gamingbacklogru (13629), license payment, plan Pro",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1673440160730,
                "sysName": "gamingbacklogru",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "13629",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-sandbox → Pro-monthly",
                        "date": 1660220960000,
                        "id": "fb00d49a-7d85-4785-ab30-aad952a7eb49"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1670749276000,
                        "type": "billing_regular",
                        "id": "81b3948e-d8ee-499b-9d0b-74dba11a28ee"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1663325963000,
                        "id": "e2643048-4007-4718-a863-16bbb114518a"
                    },
                    {
                        "date": 1670570079000,
                        "type": "plan_update",
                        "messagee": "App plan updated Pro-monthly → Startup-monthly",
                        "id": "ee0e9607-fd3e-485a-851e-70d823335e4a"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1665478977000,
                        "type": "billing_regular",
                        "id": "3204a002-7db6-434b-bf18-b3b55349ac7a"
                    },
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1658146786000,
                        "id": "3fd578f5-7f38-4f68-a893-d8aceaf46b77"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "date": 1658146787000,
                        "id": "800d9b94-7f13-4fa5-ac2f-35905be6f294"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "date": 1662886846000,
                        "type": "billing_regular",
                        "id": "c942d909-5e09-4a66-b053-0ef7a149b830"
                    },
                    {
                        "messagee": "License payment -139 D-coins, plan Pro",
                        "type": "billing_regular",
                        "date": 1668157230000,
                        "id": "0a1ed058-e724-4e46-9b48-e53fef1e1c77"
                    }
                ],
                "comments": [],
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "[template] Find a Mentor",
                "owner_id": {
                    "wallet_balance": 481.41,
                    "id": "pavel@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d8ed055d-08a3-4921-adb1-daa946859040",
                            "date": 1665997255000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 214.5,
                            "id": "dd6d5abb-acb8-434d-8b20-acb566b49549",
                            "date": 1664732285000,
                            "comment": "Affiliate reward for pavel@directual.com transaction (app tg-demo, -429 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -162,
                            "id": "c40dbd39-b1b4-4772-beb8-4fda6fba12fc",
                            "date": 1664629205000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b38a4701-b098-4d57-bdaa-7889d2225d28",
                            "date": 1664629205000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6275e200-2363-46f7-852f-af4dffd2c13a",
                            "date": 1661245232000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "50bc7c6a-ec52-416b-ba4c-c534238b65ab",
                            "date": 1660035640000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4500,
                            "type": "test",
                            "date": 1666861717000,
                            "id": "2fedf56a-3403-4bfc-ab34-9d46bff6ae10"
                        },
                        {
                            "balance": -39,
                            "id": "46fc1f44-5bc3-4205-aa37-1a4e6002ccb1",
                            "date": 1658566887000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2a1cebcd-8099-4ea5-9d30-efed1c700c1d",
                            "date": 1657616454000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "e14a96ca-be6f-4284-9bad-6162ab4d9f0e",
                            "date": 1656680403000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "bebb9537-2214-431a-a14e-fdd48fd1c804",
                            "date": 1662714348000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "03d290c3-b853-49d5-8e79-ec106b2f37d1",
                            "date": 1662037204000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "1b9f8a32-4a2a-4d98-8e10-462d9aaa348f",
                            "date": 1644400264000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "aa5c1d63-edeb-477a-9642-a05caafc23c1",
                            "date": 1659358817000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "4a69b3b9-58bc-4719-862e-6ed90d5b5780",
                            "date": 1657616442000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "f93f6991-8a45-4b3d-ac53-78da7d2134ea",
                            "date": 1657357292000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1,
                            "id": "acdf07b4-259d-40d9-b48e-2a79c5e2d7ae",
                            "date": 1644357471000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -162,
                            "id": "d3eed4a3-6323-45f9-af5c-916f3cfb7824",
                            "date": 1659358817000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0c08d7be-ee02-470b-9590-b7fad1c9de12",
                            "date": 1651421012000,
                            "comment": "Team  Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "ad7f2671-951b-468f-8342-7dfac07d9895",
                            "date": 1660294836000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "5559e6e7-e261-4626-9d31-57829feb7b27",
                            "date": 1650634892000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "9433d35c-b0c3-4016-90a3-ce48e065b296",
                            "date": 1660294832000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -262.09,
                            "id": "93ef9601-b0be-4955-b4d3-2bde8e548334",
                            "date": 1648979934000,
                            "comment": "On-demand resource consumption. App directual-site, period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "08c60309-8278-4e34-83f8-c9059a187f95",
                            "date": 1655974840000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "d15d11df-ce69-4636-8ebc-910627654ebb",
                            "date": 1644400149000,
                            "comment": "Refund",
                            "type": "paddle_refund"
                        },
                        {
                            "balance": -162,
                            "id": "e6eef191-8ce7-4112-b5fa-ca261e1d8924",
                            "date": 1656680403000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "b8cb5693-8aff-46bd-afb2-510d8e1a227c",
                            "date": 1644273870000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "date": 1652376382000,
                            "type": "test",
                            "balance": 998,
                            "id": "dd94ba83-e6d6-4664-a17a-a9c83c37b739"
                        },
                        {
                            "balance": -39,
                            "id": "90cab7c7-c644-4dde-866c-0a3eef2917ab",
                            "date": 1653317346000,
                            "comment": "Create app showcase-store, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "359583b7-efeb-4908-9d37-3ee35de1ea33",
                            "date": 1644274149000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "8db87812-3d3b-4000-bdd5-13f83a250b4b",
                            "date": 1644356576000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "07d1d9f6-c4a3-4566-bfdc-9c8eda5d6c56",
                            "date": 1671267631000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "726bda7e-791a-4886-8094-8efa502c4606",
                            "date": 1662037204000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b97da617-c60a-4879-914c-b92303724ac8",
                            "date": 1651423035000,
                            "comment": "Team  My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2771d150-07f5-41ce-be29-aff64c73bd1f",
                            "date": 1655024501000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "5b6aa040-7046-49ff-86fd-aaed48d41ba5",
                            "date": 1652376443000,
                            "comment": "Update app tg-demo, plan Business-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 500,
                            "date": 1651420946000,
                            "type": "test",
                            "id": "73295450-38e7-454f-8144-2043c3b2e137"
                        },
                        {
                            "balance": -39,
                            "id": "f87ef7af-8ab7-4f4a-bf77-d781bbf6ae77",
                            "date": 1654775846000,
                            "comment": "Update app mktplace, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "a79bad51-97a5-40dd-a636-7b224fa8c843",
                            "date": 1655024420000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1000,
                            "id": "70e24705-a5fc-4dee-9238-e8662a16ee91",
                            "date": 1655895947000,
                            "comment": "Promo-code NOWAR",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "80c8923f-e310-4470-82e9-b45f6ba84cfa",
                            "date": 1644356410000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "0eda0c60-a4c1-4c8f-ad61-4a694aab1949",
                            "date": 1655214068000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "25d1b775-93d5-49e6-8f11-b5678c1c8de2",
                            "date": 1662973230000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0dc29b14-8f3f-4543-9cfd-3d9a712863ee",
                            "date": 1655214165000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "next_billing_date": 1673198427582,
                "sysName": "mentor",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14637",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "date": 1667928027000,
                        "messagee": "App is created",
                        "id": "48ab68d2-3b1f-4f86-943f-c1e86ccb8131"
                    },
                    {
                        "date": 1670490138000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "23987aca-e8ff-470d-bf40-9a373bc86604"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "jpcalc",
                "team_id": {
                    "tariff_id": "Zerocoder-education",
                    "is_hidden": true,
                    "name": "Zerocoder: Directual от 0 до PRO, Никита 213403802",
                    "id": "238eda0b-b983-47a6-afa4-f06634c69f5b"
                },
                "owner_id": {
                    "wallet_balance": -195,
                    "id": "wifizone74@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "3bc7ee4e-89f2-4dce-9b25-99222a8b2190",
                            "date": 1660641110000,
                            "comment": "App cubaton (10766), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "97121610-7e60-47fd-9dd4-a9c7081c3583",
                            "date": 1650635341000,
                            "comment": "App cubaton (10766), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "81c3660d-2b9b-4ed5-b9c5-cb6ca96c9fc6",
                            "date": 1657962033000,
                            "comment": "App cubaton (10766), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "88da61b6-320f-4b71-b099-b90955632b80",
                            "date": 1652773989000,
                            "comment": "App cubaton (10766), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "d009198a-9b4d-4eeb-9a2f-9bd56b5e80b1",
                            "date": 1655370104000,
                            "comment": "App cubaton (10766), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1653213869747,
                "sysName": "jpcalc",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "11035",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "is_cancelled": "#ffd1d1",
                "events": [
                    {
                        "date": 1650704456000,
                        "messagee": "License payment -0 D-coins, plan Free",
                        "type": "billing_regular",
                        "id": "023939b3-23b0-4b24-b5ef-c2e660fdfc30"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "UI SNIPPETS",
                "team_id": {
                    "name": "Leverall",
                    "owner_id": "kamil@leverall.com",
                    "tariff_id": "AppSumo_tier2",
                    "id": "0c77518c-c0b8-4b33-8edc-d634d059a1d8",
                    "is_hidden": false
                },
                "owner_id": {
                    "wallet_balance": 100,
                    "id": "kamil@leverall.com",
                    "wallet_transactions": [
                        {
                            "balance": 100,
                            "id": "97483319-ee94-489d-95a8-a1c02c3ca580",
                            "date": 1665486712000,
                            "comment": "Promo-code ZBFCKVPZM2T9",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1671700674445,
                "sysName": "ui-snippets",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "14803",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1669108673000,
                        "id": "c02f2b4c-e55f-4552-bc15-ac205143caae"
                    },
                    {
                        "type": "plan_update",
                        "messagee": "App plan updated FREE → Pro-sandbox-AppSumo",
                        "date": 1669108674000,
                        "id": "23c3a34d-e7f8-410f-95ca-aac525413f2e"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "CRM test",
                "owner_id": {
                    "wallet_balance": 120,
                    "id": "fyokla89@outlook.com",
                    "wallet_transactions": [
                        {
                            "balance": 120,
                            "id": "b7efeea6-036b-4957-b158-f0e25dd3a5af",
                            "date": 1670952177000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        }
                    ]
                },
                "sysName": "first-crm",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "14999",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1670754053000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "fa1879fb-5f26-4731-9470-47cc94bf8c72"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "admeal",
                "isDowngraded": true,
                "owner_id": {
                    "wallet_balance": -95,
                    "id": "bakhrom.kholmatov@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "335e94f8-d1da-4d24-b80e-4d235176d282",
                            "date": 1669798845000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "00512929-4de6-4d1a-a5d1-ae7800ff262c",
                            "date": 1664528448000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "0eebc810-a7ed-45ce-abc0-5f8785c35668",
                            "date": 1667120424000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "e1e3f214-bac9-4efa-8ad6-6e0d36ac773e",
                            "date": 1659171635000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 38,
                            "id": "52e8fce1-5687-41da-baaa-03dfdc2784fc",
                            "date": 1652865639000,
                            "comment": "Adding funds via Tinkoff 2508.0 ₽ → 38.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -1.1,
                            "id": "304821e8-50fe-4e4c-a8d1-58ed8a345898",
                            "date": 1656666922000,
                            "comment": "On-demand resource consumption. App admeal (12679), period 2022-06",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "0bc05156-6cdb-45f6-9524-4f5ef162a4e7",
                            "date": 1652773985000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "7260d03e-4891-459b-ba57-7a752a706c05",
                            "date": 1661850047000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "9c0d8e52-9f47-4d2e-a285-1b964a0876dc",
                            "date": 1648736208000,
                            "comment": "Create app admeal, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -4.71,
                            "id": "7ce391a6-86f2-4cd7-bf66-64ef6a0899db",
                            "date": 1654082535000,
                            "comment": "On-demand resource consumption. App admeal (12679), period 2022-05",
                            "type": "ondemand"
                        },
                        {
                            "balance": 43.96,
                            "id": "67272077-7cdc-4ca4-a230-e8a54a2c42a8",
                            "date": 1655094017000,
                            "comment": "Adding funds via Ethereum blockchain, 44.000000 USDT → 43.96 D-coins",
                            "type": "crypto"
                        },
                        {
                            "balance": 100,
                            "id": "6a059796-257a-410b-8497-8e65fb2a9c59",
                            "date": 1657556089000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": 40,
                            "id": "1dec3ddd-b09f-47eb-a65b-39028c379e35",
                            "date": 1648736146000,
                            "comment": "Adding funds via Tinkoff 3200.0 ₽ → 40.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "9366e73d-bda3-4f59-84e7-d0e642a3f5e1",
                            "date": 1656579630000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "43985abc-692b-4a43-9790-536e32d7d005",
                            "date": 1653901266000,
                            "comment": "App admeal (12679), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 39.85,
                            "id": "043e580f-7051-40a8-a35d-5dd079112eea",
                            "date": 1657223830000,
                            "comment": "Adding funds via Tinkoff 2550.0 ₽ → 39.85 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "next_billing_date": 1672395380618,
                "sysName": "admeal",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12679",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1653901290000,
                        "id": "c1bba44c-b0c8-44f3-be26-4e98387a6afa"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1661850047000,
                        "type": "billing_regular",
                        "id": "f0e2b92e-376b-491f-9d28-21cc9f71ff43"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1659171635000,
                        "id": "47dcbdd2-02bc-48d1-a29e-16d7f6fb84b3"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1654082535000,
                        "messagee": "On-demand charged $ 4.71",
                        "id": "9f28316a-0d12-4b7d-a5cc-2018e5e057e2"
                    },
                    {
                        "type": "billing_ondemand",
                        "date": 1656666922000,
                        "messagee": "On-demand charged $ 1.1",
                        "id": "c296babe-6e10-40cb-8884-6ff11a532128"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1664528447000,
                        "type": "billing_regular",
                        "id": "e842e5fe-7f49-4448-87dc-66677a1cdc81"
                    },
                    {
                        "date": 1669798845000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "03981591-21f1-4c2e-8a74-804e305ea27b"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1667120424000,
                        "type": "billing_regular",
                        "id": "eeb6264f-4a10-4fef-95d6-890697c5dcc4"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1652773985000,
                        "type": "billing_regular",
                        "id": "76f23e27-8755-4450-8e8f-83303dc77060"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1656579628000,
                        "type": "billing_regular",
                        "id": "7f50aec3-882d-4a40-a051-ebaf2c2b4127"
                    }
                ],
                "comments": [],
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Behomes backend",
                "is_blocked": false,
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 64,
                    "id": "behomes.b2b@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 70,
                            "id": "5b8e4910-83d2-4afd-8fb8-ceeae4505ae7",
                            "date": 1671559960000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "abd6a2c6-ba7e-4463-a537-45fc677c0152",
                            "date": 1667984495000,
                            "comment": "App behomes (13590), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "dec61578-b71d-4eb4-ad32-42fec9233f3b",
                            "date": 1657721978000,
                            "comment": "Adding funds via Tinkoff 6400.0 ₽ → 100.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "5c2a8c4b-0e15-43f6-8d71-29c586030d1e",
                            "date": 1670576439000,
                            "comment": "App behomes (13590), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 50,
                            "id": "69ac3e6d-4665-4176-849b-3f8ad361b908",
                            "date": 1657778710000,
                            "comment": "Promo-code WELCOME",
                            "type": "promo"
                        },
                        {
                            "balance": -39,
                            "id": "a9a14217-e3ca-45db-9b42-8a8fc4ca3fbc",
                            "date": 1662756592000,
                            "comment": "Update app behomes, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "e5f77449-4e42-4c54-a7e9-275d068f7fbe",
                            "date": 1665306059000,
                            "comment": "App behomes (13590), license payment, plan Startup",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1673297392532,
                "sysName": "behomes",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "13590",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "date": 1667984495000,
                        "type": "billing_regular",
                        "id": "5d858868-0467-4778-b151-85657defe72b"
                    },
                    {
                        "date": 1665306060000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "9083ff10-3d77-4890-ab5f-2c54290976f2"
                    },
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1666945008000,
                        "id": "5b2a4dde-145d-49d4-8d1b-cc4285c05219"
                    },
                    {
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "date": 1670576439000,
                        "id": "be8d515c-24fe-46b2-9bf7-a36645426839"
                    },
                    {
                        "date": 1657778889000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "5a359105-3cae-40db-aa7b-9088a5d05e7f"
                    },
                    {
                        "type": "plan_update",
                        "date": 1662756592000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "622e2102-d736-454a-9513-c48e6d8a9c23"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "ArtLine",
                "is_blocked": false,
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 73.57,
                    "id": "artosiris@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d1142771-0af1-42cc-bbbc-5fd7bd8af7a9",
                            "date": 1671354026000,
                            "comment": "App artbot (6155), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -594,
                            "id": "819a83c5-ab81-4f5f-97bb-1b12bba536f1",
                            "date": 1669539632000,
                            "comment": "App artline (4203), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "0a493744-8b94-43d8-909b-5d4d318f66d6",
                            "date": 1657555333000,
                            "comment": "Promo-code M671QU3UL3DI",
                            "type": "promo"
                        },
                        {
                            "balance": 247,
                            "id": "3a00c25e-bcaa-42d9-9bd9-c95d86d01229",
                            "date": 1656892800000,
                            "comment": "Refund for app \"art\" downgrade",
                            "type": "refund"
                        },
                        {
                            "balance": 100,
                            "id": "6b59da9d-b160-4ee3-aa0f-518c8cd08c4e",
                            "date": 1657557541000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": -1.43,
                            "id": "bfa18f64-d9e3-4a76-a243-fab8b1d6ac07",
                            "date": 1669910935000,
                            "comment": "On-demand resource consumption. App artbot (6155), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "8bbe9b76-ef74-43e6-8a2f-f197e8105946",
                            "date": 1668810544000,
                            "comment": "Update app artbot, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "fd341be6-1f64-45fb-a2d6-437607af6260",
                            "date": 1663793792000,
                            "comment": "Promo-code A8H43ZSBRZFR",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1701079926665,
                "sysName": "artline",
                "plan_id": {
                    "price": 1188,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-yearly"
                },
                "paddle_subscription_id": "9942022",
                "id": "4203",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 594,
                "events": [
                    {
                        "type": "billing_ondemand",
                        "date": 1641055609000,
                        "messagee": "On-demand charged $ 0",
                        "id": "659b32cb-b285-4bac-9b54-23cd1ab6cb54"
                    },
                    {
                        "messagee": "License payment -594 D-coins, plan Pro",
                        "date": 1669539636000,
                        "type": "billing_regular",
                        "id": "3a456e6a-c8ce-433f-a2ca-a49496b78e03"
                    }
                ],
                "comments": [],
                "legacy_billing": ""
            },
            {
                "name": "masters",
                "is_blocked": false,
                "team_id": "0b07f91f-9156-4841-959f-95b8dabd6331",
                "owner_id": {
                    "wallet_balance": 481.41,
                    "id": "pavel@directual.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "d8ed055d-08a3-4921-adb1-daa946859040",
                            "date": 1665997255000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 214.5,
                            "id": "dd6d5abb-acb8-434d-8b20-acb566b49549",
                            "date": 1664732285000,
                            "comment": "Affiliate reward for pavel@directual.com transaction (app tg-demo, -429 D-coins)",
                            "type": "affiliate"
                        },
                        {
                            "balance": -162,
                            "id": "c40dbd39-b1b4-4772-beb8-4fda6fba12fc",
                            "date": 1664629205000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b38a4701-b098-4d57-bdaa-7889d2225d28",
                            "date": 1664629205000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "6275e200-2363-46f7-852f-af4dffd2c13a",
                            "date": 1661245232000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "50bc7c6a-ec52-416b-ba4c-c534238b65ab",
                            "date": 1660035640000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4500,
                            "type": "test",
                            "date": 1666861717000,
                            "id": "2fedf56a-3403-4bfc-ab34-9d46bff6ae10"
                        },
                        {
                            "balance": -39,
                            "id": "46fc1f44-5bc3-4205-aa37-1a4e6002ccb1",
                            "date": 1658566887000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2a1cebcd-8099-4ea5-9d30-efed1c700c1d",
                            "date": 1657616454000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "e14a96ca-be6f-4284-9bad-6162ab4d9f0e",
                            "date": 1656680403000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "bebb9537-2214-431a-a14e-fdd48fd1c804",
                            "date": 1662714348000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "03d290c3-b853-49d5-8e79-ec106b2f37d1",
                            "date": 1662037204000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "1b9f8a32-4a2a-4d98-8e10-462d9aaa348f",
                            "date": 1644400264000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "aa5c1d63-edeb-477a-9642-a05caafc23c1",
                            "date": 1659358817000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -139,
                            "id": "4a69b3b9-58bc-4719-862e-6ed90d5b5780",
                            "date": 1657616442000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "f93f6991-8a45-4b3d-ac53-78da7d2134ea",
                            "date": 1657357292000,
                            "comment": "App mktplace (13236), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 1,
                            "id": "acdf07b4-259d-40d9-b48e-2a79c5e2d7ae",
                            "date": 1644357471000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -162,
                            "id": "d3eed4a3-6323-45f9-af5c-916f3cfb7824",
                            "date": 1659358817000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0c08d7be-ee02-470b-9590-b7fad1c9de12",
                            "date": 1651421012000,
                            "comment": "Team  Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "ad7f2671-951b-468f-8342-7dfac07d9895",
                            "date": 1660294836000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "5559e6e7-e261-4626-9d31-57829feb7b27",
                            "date": 1650634892000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "9433d35c-b0c3-4016-90a3-ce48e065b296",
                            "date": 1660294832000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -262.09,
                            "id": "93ef9601-b0be-4955-b4d3-2bde8e548334",
                            "date": 1648979934000,
                            "comment": "On-demand resource consumption. App directual-site, period 2022-03",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "08c60309-8278-4e34-83f8-c9059a187f95",
                            "date": 1655974840000,
                            "comment": "App showcase-store (13182), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1,
                            "id": "d15d11df-ce69-4636-8ebc-910627654ebb",
                            "date": 1644400149000,
                            "comment": "Refund",
                            "type": "paddle_refund"
                        },
                        {
                            "balance": -162,
                            "id": "e6eef191-8ce7-4112-b5fa-ca261e1d8924",
                            "date": 1656680403000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": 1,
                            "id": "b8cb5693-8aff-46bd-afb2-510d8e1a227c",
                            "date": 1644273870000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "date": 1652376382000,
                            "type": "test",
                            "balance": 998,
                            "id": "dd94ba83-e6d6-4664-a17a-a9c83c37b739"
                        },
                        {
                            "balance": -39,
                            "id": "90cab7c7-c644-4dde-866c-0a3eef2917ab",
                            "date": 1653317346000,
                            "comment": "Create app showcase-store, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "359583b7-efeb-4908-9d37-3ee35de1ea33",
                            "date": 1644274149000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "8db87812-3d3b-4000-bdd5-13f83a250b4b",
                            "date": 1644356576000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -39,
                            "id": "07d1d9f6-c4a3-4566-bfdc-9c8eda5d6c56",
                            "date": 1671267631000,
                            "comment": "App tuishou (9312), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "726bda7e-791a-4886-8094-8efa502c4606",
                            "date": 1662037204000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "b97da617-c60a-4879-914c-b92303724ac8",
                            "date": 1651423035000,
                            "comment": "Team  My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "2771d150-07f5-41ce-be29-aff64c73bd1f",
                            "date": 1655024501000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -429,
                            "id": "5b6aa040-7046-49ff-86fd-aaed48d41ba5",
                            "date": 1652376443000,
                            "comment": "Update app tg-demo, plan Business-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 500,
                            "date": 1651420946000,
                            "type": "test",
                            "id": "73295450-38e7-454f-8144-2043c3b2e137"
                        },
                        {
                            "balance": -39,
                            "id": "f87ef7af-8ab7-4f4a-bf77-d781bbf6ae77",
                            "date": 1654775846000,
                            "comment": "Update app mktplace, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": -139,
                            "id": "a79bad51-97a5-40dd-a636-7b224fa8c843",
                            "date": 1655024420000,
                            "comment": "App directual-site (1822), license payment, plan Pro",
                            "type": "app_payment"
                        },
                        {
                            "balance": -1000,
                            "id": "70e24705-a5fc-4dee-9238-e8662a16ee91",
                            "date": 1655895947000,
                            "comment": "Promo-code NOWAR",
                            "type": "promo"
                        },
                        {
                            "balance": 1,
                            "id": "80c8923f-e310-4470-82e9-b45f6ba84cfa",
                            "date": 1644356410000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -108,
                            "id": "0eda0c60-a4c1-4c8f-ad61-4a694aab1949",
                            "date": 1655214068000,
                            "comment": "Team My new team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -429,
                            "id": "25d1b775-93d5-49e6-8f11-b5678c1c8de2",
                            "date": 1662973230000,
                            "comment": "App tg-demo (11488), license payment, plan Business",
                            "type": "app_payment"
                        },
                        {
                            "balance": -162,
                            "id": "0dc29b14-8f3f-4543-9cfd-3d9a712863ee",
                            "date": 1655214165000,
                            "comment": "Team Dream team, plan team_monthly, 3 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "sysName": "masters",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox",
                    "description": "Sandbox for Team plan",
                    "id": "Pro-sandbox"
                },
                "id": "10818",
                "is_hidden": false,
                "is_sandbox": true,
                "is_cancelled": "#ffd1d1",
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "skinrevivetransaction",
                "team_id": {
                    "tariff_id": "AppSumo_tier4",
                    "name": "AppSumo Tier 4",
                    "is_hidden": false,
                    "id": "63d6df0c-8a9d-4f11-814c-9cb5e7289f8f"
                },
                "owner_id": {
                    "wallet_balance": 100,
                    "id": "zacharie.cauchy@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 100,
                            "id": "1a8ebb9f-b8d0-4a37-bd7a-86f1f1dedbeb",
                            "date": 1668965199000,
                            "comment": "Promo-code Y10U5G2MLSOR",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1671444850898,
                "sysName": "skinrevivetransaction",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "14772",
                "is_hidden": false,
                "is_sandbox": true,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1668852850000,
                        "id": "0460102c-216d-48fb-87fb-097ced57705b"
                    },
                    {
                        "messagee": "App plan updated Pro-sandbox-AppSumo → Pro-sandbox-AppSumo",
                        "type": "plan_update",
                        "date": 1668852850000,
                        "id": "68e96ced-a78e-4171-9248-afb7a5d5ee52"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_payment": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "migoplatorm",
                "is_blocked": false,
                "isDowngraded": "",
                "paddle_subscription_status": "active",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "jonkotthoff@migoiq.app",
                    "wallet_transactions": [
                        {
                            "balance": 429,
                            "id": "59855b89-a481-4c54-9ad9-9122f509c00c",
                            "date": 1670547080000,
                            "comment": "Payment from Credit card or Paypal",
                            "type": "paddle_payment"
                        },
                        {
                            "balance": -429,
                            "id": "ca6d828b-0881-4f09-9086-a94f0013e3a2",
                            "date": 1670547080000,
                            "comment": "Update app migoplatform, plan Business-monthly (previous plan: Free)",
                            "type": "app_payment"
                        }
                    ]
                },
                "next_billing_date": 1673225481033,
                "sysName": "migoplatform",
                "plan_id": {
                    "price": 429,
                    "name": "Business",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "paddle_subscription_id": "8705268",
                "id": "8742",
                "is_hidden": false,
                "legacy_billing": true,
                "is_sandbox": false,
                "events": [
                    {
                        "type": "block_off",
                        "messagee": "App is UNBLOCKED",
                        "date": 1643181685000,
                        "id": "6553c948-9a45-4701-bcbb-be6055a13fe8"
                    },
                    {
                        "type": "plan_update",
                        "date": 1665186692000,
                        "messagee": "App plan updated Business-monthly → FREE",
                        "id": "8076c63b-1e97-4c2b-8d41-e5cefdbf94b7"
                    },
                    {
                        "type": "plan_update",
                        "date": 1670547080000,
                        "messagee": "App plan updated FREE → Business-monthly",
                        "id": "4e81dd8f-16f7-4210-bb27-e8ba5715ea36"
                    }
                ],
                "comments": [],
                "next_payment": ""
            },
            {
                "name": "q",
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "danile.9059@mail.ru",
                    "wallet_transactions": []
                },
                "sysName": "examplenew",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "14986",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1670577824000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "5f7b074c-be43-4c3d-9064-d74bc20b233b"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Портал регистрации сделок Connective PLM",
                "team_id": {
                    "name": "Connective Team",
                    "owner_id": "m.garifullin.f@gmail.com",
                    "tariff_id": "team_monthly",
                    "id": "8ea29006-5b45-44de-b20d-2a24a6922459",
                    "is_hidden": false
                },
                "owner_id": {
                    "wallet_balance": 0,
                    "id": "m.garifullin.f@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -103.13,
                            "id": "96197574-d89b-4fa9-b6c0-abb37c79ea5c",
                            "date": 1669910794000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-11",
                            "type": "ondemand"
                        },
                        {
                            "balance": -19.9,
                            "id": "4144341a-05e4-45e4-94e3-5ebcf17a9017",
                            "date": 1667309842000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-10",
                            "type": "ondemand"
                        },
                        {
                            "balance": 100,
                            "id": "3cb12f18-7f19-405a-8749-5f14ce0ad00f",
                            "date": 1667300478000,
                            "comment": "Promo-code YQD2AH1CQ5MI",
                            "type": "promo"
                        },
                        {
                            "balance": -19.16,
                            "id": "121e8228-ea49-4ef8-a6ab-18957d1f58aa",
                            "date": 1664619194000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-09",
                            "type": "ondemand"
                        },
                        {
                            "balance": 150,
                            "id": "dcf16790-971c-4487-8747-42a2c26603d4",
                            "date": 1662017378000,
                            "comment": "Promo-code 0FDZ3CZHNCDI",
                            "type": "promo"
                        },
                        {
                            "balance": 330.49,
                            "id": "76305202-d2fe-4cf8-a611-ee3fd1145665",
                            "date": 1671200593000,
                            "comment": "Wire transfer from ООО «КОННЕКТИВ ПЛМ», 21151.360000 ₽ → 330.49 D-coins",
                            "type": "bank_payment"
                        },
                        {
                            "balance": -108,
                            "id": "f702e985-824f-43e4-a1d9-417dab4c4d73",
                            "date": 1661432403000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "c36219c3-5168-4411-9f66-a2e47eea7e7d",
                            "date": 1658754004000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "87d2033f-c057-4e1d-ba75-f9e52c71c564",
                            "date": 1666702803000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "86746e7c-1423-49cd-8c7e-b261a8da15fc",
                            "date": 1651065340000,
                            "comment": "Create app connectiveconfiguratortcp, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": -39,
                            "id": "69fb2c12-7831-4432-ab79-98b6dd91b551",
                            "date": 1648567835000,
                            "comment": "Update app sump, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 100,
                            "id": "178d9e4e-1c6e-481c-8658-0a7293b54abb",
                            "date": 1657608399000,
                            "comment": "Promo-code PRODUCTHUNT",
                            "type": "promo"
                        },
                        {
                            "balance": 120,
                            "id": "e275cbcf-d293-4cb3-9f8f-5b626ad9d94a",
                            "date": 1648567750000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        },
                        {
                            "balance": -7.3,
                            "id": "050d3c58-bce0-4604-a266-5387fee35b65",
                            "date": 1662047123000,
                            "comment": "On-demand resource consumption. App connectiveconfiguratortcp (12947), period 2022-08",
                            "type": "ondemand"
                        },
                        {
                            "balance": -39,
                            "id": "3885b6a0-8997-4bc9-a9d2-c11644868613",
                            "date": 1651395633000,
                            "comment": "App moviesappis (12680), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "314af1d9-3bb2-4f1e-b04f-b3922c012108",
                            "date": 1669381226000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "787173c5-77b8-4a22-8457-aed3b4b475f0",
                            "date": 1648739458000,
                            "comment": "Create app moviesappis, plan Startup-monthly",
                            "type": "app_payment"
                        },
                        {
                            "balance": 300,
                            "id": "85f6dc4b-bf9c-4eac-a69f-1f837a9ef7e4",
                            "date": 1653499358000,
                            "comment": "Promo-code ZQA0375H4CXR",
                            "type": "promo"
                        },
                        {
                            "balance": -108,
                            "id": "0ee6f93b-916e-412b-9cdf-4e911c678750",
                            "date": 1653499444000,
                            "comment": "Team  Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -108,
                            "id": "a1c41424-d2a6-4f69-982c-4d555903ca07",
                            "date": 1664110829000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        },
                        {
                            "balance": -39,
                            "id": "c334076c-c3cd-44d4-8d6b-f003769eef02",
                            "date": 1651309215000,
                            "comment": "App sump (12477), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": -108,
                            "id": "a89463eb-4f81-4e55-b99e-41777d02ccb1",
                            "date": 1656162004000,
                            "comment": "Team Connective Team, plan team_monthly, 2 developer seats",
                            "type": "team_payment"
                        }
                    ]
                },
                "sysName": "registrationtransactions",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox",
                    "description": "Sandbox for Team plan",
                    "id": "Pro-sandbox"
                },
                "id": "13314",
                "is_hidden": false,
                "is_sandbox": true,
                "next_payment": "",
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1654753640000,
                        "id": "94289fc2-1357-44da-9b30-9fcd4e918822"
                    },
                    {
                        "type": "plan_update",
                        "date": 1654753641000,
                        "messagee": "App plan updated FREE → Pro-sandbox",
                        "id": "01c43902-f901-4b78-bcde-3a4cd2de3c0c"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "CRM-Basic",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": 81,
                    "id": "streamm.ip@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "b5ae5519-1002-426a-a7b8-dea300baaee0",
                            "date": 1671615645000,
                            "comment": "Update app demo_4141, plan Startup-monthly (previous plan: )",
                            "type": "app_payment"
                        },
                        {
                            "balance": 120,
                            "id": "44c88e54-af5d-4e78-ba4a-9b3a8cb0bc95",
                            "date": 1671615395000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        }
                    ]
                },
                "next_billing_date": 1674295551076,
                "sysName": "demo_4141",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "3534",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1671617139000,
                        "id": "a33613c1-fa7e-4d5e-b2ab-75805ff14948"
                    },
                    {
                        "type": "plan_update",
                        "date": 1671617151000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "0d09f9bb-2116-408b-8c96-3d9a9f140de0"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "Movies (Beginner) ",
                "owner_id": {
                    "wallet_balance": 120,
                    "id": "antonpeikun@gmail.com",
                    "wallet_transactions": [
                        {
                            "balance": 120,
                            "id": "dcaffa02-a2d2-496b-9619-569d1415a1ec",
                            "date": 1670952353000,
                            "comment": "Promo-code ZEROCODER",
                            "type": "promo"
                        }
                    ]
                },
                "sysName": "peikun-movies",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "15022",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": "",
                "events": [
                    {
                        "date": 1671002913000,
                        "type": "app_created",
                        "messagee": "App is created",
                        "id": "bc0bb409-9645-4b7e-8d70-e48352112c03"
                    }
                ],
                "comments": "",
                "isDowngraded": "",
                "legacy_billing": "",
                "next_billing_date": "",
                "paddle_subscription_id": ""
            },
            {
                "name": "BUBU",
                "isDowngraded": "",
                "owner_id": {
                    "wallet_balance": -37,
                    "id": "gengen212@proton.me",
                    "wallet_transactions": [
                        {
                            "balance": -39,
                            "id": "f4beca9b-da48-49d0-9cd1-e422478e6535",
                            "date": 1668940669000,
                            "comment": "Update app bubu, plan Startup-monthly (previous plan: Free)",
                            "type": "app_payment"
                        },
                        {
                            "balance": 37,
                            "id": "0a028696-8b11-4ac7-8bc5-0eb905145ed1",
                            "date": 1668940616000,
                            "comment": "Adding funds via Tinkoff 2368.0 ₽ → 37.0 D-coins",
                            "type": "tinkoff"
                        },
                        {
                            "balance": -39,
                            "id": "fb71c8d0-8b56-4e65-942c-8cddb5ad0089",
                            "date": 1671526843000,
                            "comment": "App bubu (14030), license payment, plan Startup",
                            "type": "app_payment"
                        },
                        {
                            "balance": 4,
                            "id": "65d76484-8a67-4c09-999f-c4254fa7fb4a",
                            "date": 1668940571000,
                            "comment": "Adding funds via Tinkoff 256.0 ₽ → 4.0 D-coins",
                            "type": "tinkoff"
                        }
                    ]
                },
                "next_billing_date": 1674211069508,
                "sysName": "bubu",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14030",
                "is_hidden": false,
                "is_sandbox": false,
                "next_payment": 39,
                "events": [
                    {
                        "type": "app_created",
                        "messagee": "App is created",
                        "date": 1661754668000,
                        "id": "a903787e-97a9-4dc8-ad62-dca4d5d7fcfb"
                    },
                    {
                        "type": "plan_update",
                        "date": 1668940669000,
                        "messagee": "App plan updated FREE → Startup-monthly",
                        "id": "28955818-5964-4963-b046-5331e2c94310"
                    },
                    {
                        "date": 1671526844000,
                        "messagee": "License payment -39 D-coins, plan Startup",
                        "type": "billing_regular",
                        "id": "01a97d93-b4c9-4995-9e66-347207fbae5a"
                    }
                ],
                "comments": "",
                "legacy_billing": "",
                "paddle_subscription_id": ""
            }
        ],
        "totalPages": 185,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "balance",
                1395053
            ],
            [
                "comments.date",
                99033830
            ],
            [
                "comments.files",
                99033830
            ],
            [
                "comments.text",
                99033830
            ],
            [
                "comments.user_id.firstName",
                17682
            ],
            [
                "comments.user_id.lastName",
                17682
            ],
            [
                "comments.user_id.userpic",
                17682
            ],
            [
                "events.date",
                99050194
            ],
            [
                "events.messagee",
                99050194
            ],
            [
                "events.type",
                99050194
            ],
            [
                "id",
                1395053
            ],
            [
                "isDowngraded",
                1395053
            ],
            [
                "is_blocked",
                1395053
            ],
            [
                "is_cancelled",
                1395053
            ],
            [
                "is_hidden",
                1395053
            ],
            [
                "is_sandbox",
                1395053
            ],
            [
                "legacy_billing",
                1395053
            ],
            [
                "name",
                1395053
            ],
            [
                "next_billing_date",
                1395053
            ],
            [
                "next_payment",
                1395053
            ],
            [
                "owner_id.id",
                1282551
            ],
            [
                "owner_id.wallet_balance",
                1282551
            ],
            [
                "owner_id.wallet_transactions.balance",
                99034345
            ],
            [
                "owner_id.wallet_transactions.comment",
                99034345
            ],
            [
                "owner_id.wallet_transactions.date",
                99034345
            ],
            [
                "owner_id.wallet_transactions.type",
                99034345
            ],
            [
                "paddle_subscription_id",
                1395053
            ],
            [
                "paddle_subscription_status",
                1395053
            ],
            [
                "plan_id.description",
                1294700
            ],
            [
                "plan_id.id",
                1294700
            ],
            [
                "plan_id.name",
                1294700
            ],
            [
                "plan_id.price",
                1294700
            ],
            [
                "sysName",
                1395053
            ],
            [
                "team_id.id",
                1395054
            ],
            [
                "team_id.is_hidden",
                1395054
            ],
            [
                "team_id.name",
                1395054
            ],
            [
                "team_id.owner_id",
                1395054
            ],
            [
                "team_id.tariff_id",
                1395054
            ]
        ],
        "writeFields": [
            "comments",
            "id",
            "isDowngraded",
            "legacy_billing",
            "next_billing_date",
            "next_payment",
            "paddle_subscription_id"
        ],
        "structures": {
            "17682": {
                "networkID": 1822,
                "sysName": "WebUser",
                "name": "App users",
                "id": 17682,
                "dateCreated": "2018-08-24T09:51:34Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"role\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"password\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"email\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"phone\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"11091633193856259\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"27051633193856853\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"49631633193892687\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"3\",\"link\":\"\",\"group\":\"1633193869317\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"6\",\"link\":\"\",\"group\":\"1633193869317\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"2\",\"link\":\"\",\"group\":\"1633193869317\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"legacy fields\",\"id\":1633193869317,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-02T16:58:26Z",
                "createBy": null,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "8",
                    "link": "",
                    "group": "0",
                    "tags": "",
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 0
            },
            "1282551": {
                "networkID": 1822,
                "sysName": "Cloud_users",
                "name": "👨🏻 Cloud users",
                "id": 1282551,
                "dateCreated": "2019-10-05T15:17:37Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"note\",\"dataType\":\"string\",\"name\":\"Note\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"first_name\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_name\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"locale\",\"dataType\":\"string\",\"name\":\"locale\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"Source\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_id\",\"dataType\":\"link\",\"name\":\"Request ID\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"array\":false},{\"sysName\":\"ip\",\"dataType\":\"string\",\"name\":\"ip\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"Country\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"social_register\",\"dataType\":\"boolean\",\"name\":\"social_register\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"register_date\",\"dataType\":\"date\",\"name\":\"Register date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"country_id\",\"dataType\":\"link\",\"name\":\"Country link (ISO)\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"raw_id\",\"dataType\":\"link\",\"name\":\"Raw ID\",\"id\":\"39691642000254942\",\"link\":\"cloud_users_ids\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_activity_date\",\"dataType\":\"date\",\"name\":\"Last activity date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"apps\",\"dataType\":\"arrayLink\",\"name\":\"Apps\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_sl\",\"dataType\":\"number\",\"name\":\"Number of SLs\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_structures\",\"dataType\":\"number\",\"name\":\"Number of structures\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_scenarios\",\"dataType\":\"number\",\"name\":\"Number of scenarios\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logged_in\",\"dataType\":\"boolean\",\"name\":\"Have logged in\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_apps\",\"dataType\":\"number\",\"name\":\"Number of apps\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"today_stat_id\",\"dataType\":\"link\",\"name\":\"Today stat link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"team_ids\",\"dataType\":\"arrayLink\",\"name\":\"Teams\",\"id\":\"26441632905559721\",\"link\":\"Teams\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_team_plans\",\"dataType\":\"arrayLink\",\"name\":\"Current team plans\",\"id\":\"45021632906172898\",\"link\":\"TeamTariffs\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isLTD_user\",\"dataType\":\"boolean\",\"name\":\"LTD user\",\"id\":\"13531632918815271\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Paid_app_plan_user\",\"dataType\":\"boolean\",\"name\":\"Paid app plan user\",\"id\":\"22421632918830874\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_app_plans\",\"dataType\":\"arrayLink\",\"name\":\"Current app plans\",\"id\":\"54321632918865581\",\"link\":\"Tariff\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"creditCardIsLinked\",\"dataType\":\"boolean\",\"name\":\"CreditCardIsLinked?\",\"id\":\"42541642072780075\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"mailchimp_tags\",\"dataType\":\"string\",\"name\":\"Mailchimp labels\",\"id\":\"97421570379132976\",\"link\":null,\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"mailchimp_segments\",\"dataType\":\"array\",\"name\":\"Mailchimp Segments\",\"id\":\"84981587457354001\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"is_country_synced\",\"dataType\":\"boolean\",\"name\":\"is_country_synced\",\"id\":\"31991605527320825\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"app_description\",\"dataType\":\"string\",\"name\":\"App description\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"customer_type\",\"dataType\":\"string\",\"name\":\"Customer type\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"utm_source\",\"dataType\":\"string\",\"name\":\"utm_source\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"utm_medium\",\"dataType\":\"string\",\"name\":\"utm_medium\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"utm_campaign\",\"dataType\":\"string\",\"name\":\"utm_campaign\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_ids\",\"dataType\":\"arrayLink\",\"name\":\"Surveys\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ref\",\"dataType\":\"string\",\"name\":\"ref\",\"id\":\"68451626349155030\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"storage\",\"dataType\":\"json\",\"name\":\"Survey storage\",\"id\":\"86371627198748459\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_step_1_raw\",\"dataType\":\"string\",\"name\":\"Which describes you best\",\"id\":\"24041632732046851\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_step_2_raw\",\"dataType\":\"string\",\"name\":\"Whom do you want to build apps for\",\"id\":\"57151632732047604\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_step_3_raw\",\"dataType\":\"string\",\"name\":\"How did you know about Directual\",\"id\":\"98341632732048278\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_is_aborted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"75331632901439193\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_account\",\"dataType\":\"boolean\",\"name\":\"Notify about Account\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_academy\",\"dataType\":\"boolean\",\"name\":\"Notify about Academy\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_blog\",\"dataType\":\"boolean\",\"name\":\"Notify about Blog\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"unsubscribed\",\"dataType\":\"boolean\",\"name\":\"unsubscribed\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"unsibscribed_reason\",\"dataType\":\"string\",\"name\":\"unsibscribed_reason\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"admin_notification_text\",\"dataType\":\"string\",\"name\":\"admin_notification_text\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"whom_to_alert\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"MailerLite_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"73551663229204538\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"MailerLite_MAIN\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"28941663229219515\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"MailerLite_Onboarding\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"16811663229232291\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email_hash\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gravatar\",\"dataType\":\"string\",\"name\":\"Gravatar\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gravatar_pic\",\"dataType\":\"file\",\"name\":\" \",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_suspended\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"97901644220993828\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"69331644221263888\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"99591644221269393\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_failed\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"10721644221276956\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"update_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"44161644221281677\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"basic_promo_code\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"62581644246255699\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"wallet_transactions\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"53431648999094908\",\"link\":\"appwallet\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"wallet_balance\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"60951648999103921\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paid_apps_ids\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"96621663160984409\",\"link\":\"Apps\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1570381436668,\"name\":\"CRM\",\"order\":2},{\"id\":1588875605532,\"name\":\"Gravatar\",\"order\":4},{\"id\":1570288674389,\"name\":\"Cloud usage\",\"order\":0},{\"id\":1572378880897,\"name\":\"Notifications settings\",\"order\":3},{\"id\":1570379125072,\"name\":\"Mailchimp\",\"order\":1},{\"id\":1644221182856,\"name\":\"Billing\",\"order\":5}]",
                "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"},{\"sysName\":\"country\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-09-15T08:07:58Z",
                "createBy": 21,
                "changedBy": 1,
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
                    "ordering": true,
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "1294700": {
                "networkID": 1822,
                "sysName": "Tariff",
                "name": "💰 Tariffs",
                "id": 1294700,
                "dateCreated": "2020-02-27T12:54:30Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"price\",\"dataType\":\"decimal\",\"name\":\"price\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"visible\",\"dataType\":\"boolean\",\"name\":\"visible\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"settings\",\"dataType\":\"json\",\"name\":\"settings\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"description\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_default\",\"dataType\":\"boolean\",\"name\":\"is_default\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_id\",\"dataType\":\"string\",\"name\":\"paddle_id\",\"id\":\"77771590089291447\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"available_for_admin\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"97171633096560133\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-04T15:06:16Z",
                "createBy": 0,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "id",
                    "id": "7",
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
                    "formatOptions": null,
                    "groupName": null,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33664904
            },
            "1395053": {
                "networkID": 1822,
                "sysName": "Apps",
                "name": "📱 Apps",
                "id": 1395053,
                "dateCreated": "2021-06-14T21:39:39Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"App id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sysName\",\"dataType\":\"string\",\"name\":\"System name\",\"id\":\"27541623706978377\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"App name\",\"id\":\"13661623706989350\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Description\",\"id\":\"38791623706999272\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"owner_id\",\"dataType\":\"link\",\"name\":\"Owner\",\"id\":\"41841623707118206\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"developer_ids\",\"dataType\":\"arrayLink\",\"name\":\"Developers\",\"id\":\"54301623707131642\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isTeam\",\"dataType\":\"boolean\",\"name\":\"Team app\",\"id\":\"68981623707196589\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"team_id\",\"dataType\":\"link\",\"name\":\"Team\",\"id\":\"94291623707210181\",\"link\":\"Teams\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"isLegacy\",\"dataType\":\"boolean\",\"name\":\"Legacy app\",\"id\":\"30351623746607632\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_sandbox\",\"dataType\":\"boolean\",\"name\":\"is_sandbox\",\"id\":\"47331625209998636\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_blocked\",\"dataType\":\"boolean\",\"name\":\"is_blocked\",\"id\":\"82901633095583058\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_hidden\",\"dataType\":\"boolean\",\"name\":\"is_hidden\",\"id\":\"10251637661442776\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_billing\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"75171645533130519\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_billing_plan\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"91761645533150600\",\"link\":\"Tariff\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"previous_owner_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"50981666709963736\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"plan_id\",\"dataType\":\"link\",\"name\":\"Billing plan\",\"id\":\"74161623707026653\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"previous_plan_id\",\"dataType\":\"link\",\"name\":\"Previous plan\",\"id\":\"75791641032667863\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"change_plan_request_ids\",\"dataType\":\"arrayLink\",\"name\":\"Plan change requests\",\"id\":\"76611623707045935\",\"link\":\"ChangeTariffRequests\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"merchant_event_ids\",\"dataType\":\"arrayLink\",\"name\":\"Paddle events\",\"id\":\"46441623707088217\",\"link\":\"MerchantEvent\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stat_get\",\"dataType\":\"number\",\"name\":\"Stat | GET\",\"id\":\"94951623707229504\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stat_users\",\"dataType\":\"number\",\"name\":\"Stat | Users\",\"id\":\"76861623707270662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stat_post\",\"dataType\":\"number\",\"name\":\"Stat | POST\",\"id\":\"37551623707296997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stat_proc\",\"dataType\":\"number\",\"name\":\"Stat | Proc exec\",\"id\":\"16611623707312286\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stat_sync\",\"dataType\":\"number\",\"name\":\"Stat | SYNC Proc exec\",\"id\":\"87341623707329117\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stat_http\",\"dataType\":\"number\",\"name\":\"Stat | HTTP requests\",\"id\":\"32051667244802942\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_excess\",\"dataType\":\"boolean\",\"name\":\"Excess plan\",\"id\":\"40361623748858552\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"🔥 hit limits\",\" OK\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"79011623748876085\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_get\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"26091623775679245\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_post\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"89081623775692061\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_proc\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"92601623775698497\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_sync\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"45481623775706832\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_users\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"86811623775714205\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color_http\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"30261667244970378\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_subscription_id\",\"dataType\":\"string\",\"name\":\"Paddle ID\",\"id\":\"13631633089941494\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_subscription_status\",\"dataType\":\"string\",\"name\":\"Paddle Status\",\"id\":\"99931633090832671\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_update_date\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"26191633364756662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"reports\",\"dataType\":\"arrayLink\",\"name\":\"Billing reports\",\"id\":\"71551633353882284\",\"link\":\"UsageHistory\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"balance\",\"dataType\":\"decimal\",\"name\":\"Credits\",\"id\":\"20731633354617743\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_cancelled\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"95451637666256272\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"forecast_bill\",\"dataType\":\"decimal\",\"name\":\"Forecast bill, $\",\"id\":\"63341640954051997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"next_ondemand_billing_date\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"54391647334223782\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"next_ondemand_payment\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"50071647334246527\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"next_billing_date\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"39091647335092236\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"next_payment\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"23671647335096237\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"legacy_billing\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"67651647899758711\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isDowngraded\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"26051647940518677\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"raw_app_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"12131623746301658\",\"link\":\"AppInfo\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"raw_usage_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"96391623747858362\",\"link\":\"UsageHistory\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"admin_requests_ids\",\"dataType\":\"arrayLink\",\"name\":\"Admin actions\",\"id\":\"85821633095205778\",\"link\":\"admin_app_change_requests\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comments\",\"dataType\":\"arrayLink\",\"name\":\"Comments\",\"id\":\"44101633194013799\",\"link\":\"admin_comments\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"events\",\"dataType\":\"arrayLink\",\"name\":\"App events\",\"id\":\"67551637607379984\",\"link\":\"appEvents\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"free_alert_counter\",\"dataType\":\"number\",\"name\":\"Free alert counter\",\"id\":\"30071661159016438\",\"link\":\"\",\"group\":\"1633095201028\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Billing\",\"id\":1623707015468,\"order\":0},{\"name\":\"RAW_data\",\"id\":1623746295898,\"order\":2},{\"name\":\"ADMIN\",\"id\":1633095201028,\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"sysName\"},{\"sysName\":\"id\"},{\"sysName\":\"owner_id\"},{\"sysName\":\"plan_id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-10-31T19:36:26Z",
                "createBy": 1,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "App id",
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "1395054": {
                "networkID": 1822,
                "sysName": "Teams",
                "name": "👯‍♀️ Teams",
                "id": 1395054,
                "dateCreated": "2021-06-14T21:40:01Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Team name\",\"id\":\"49891623744256310\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Team description\",\"id\":\"21131623744262431\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sandbox_apps\",\"dataType\":\"arrayLink\",\"name\":\"Sandboxes\",\"id\":\"16631623744100433\",\"link\":\"Apps\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"delivered_apps\",\"dataType\":\"arrayLink\",\"name\":\"Delivered apps\",\"id\":\"74141623744117071\",\"link\":\"Apps\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"team_members\",\"dataType\":\"arrayLink\",\"name\":\"Team members\",\"id\":\"95891623744134608\",\"link\":\"teamMembers\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"user_id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"current_seats\",\"dataType\":\"number\",\"name\":\"Seats\",\"id\":\"47131623744230708\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tariff_id\",\"dataType\":\"link\",\"name\":\"Tariff\",\"id\":\"68551624452382828\",\"link\":\"TeamTariffs\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_hidden\",\"dataType\":\"boolean\",\"name\":\"is_hidden\",\"id\":\"65821624887275053\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"owner_id\",\"dataType\":\"link\",\"name\":\"Owner\",\"id\":\"26901644253517429\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"next_billing_date\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"84501644759078788\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"next_payment\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"13691644759089872\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-02-23T20:24:02Z",
                "createBy": 1,
                "changedBy": 3527,
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "99033830": {
                "networkID": 1822,
                "sysName": "admin_comments",
                "name": "Admin comments",
                "id": 99033830,
                "dateCreated": "2021-10-02T16:37:50Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"app_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"34331633193766936\",\"link\":\"Apps\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Date\",\"id\":\"38001633193719054\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y,\",\"timeFormat\":\"HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Comment\",\"id\":\"60041633193741409\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"User\",\"id\":\"67911633193701811\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"files\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"73621633193726412\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-30T08:35:35Z",
                "createBy": 21,
                "changedBy": 1,
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "99034345": {
                "networkID": 1822,
                "sysName": "appwallet",
                "name": "🪙 Wallet Transactions",
                "id": 99034345,
                "dateCreated": "2021-10-04T13:35:54Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"Transaction type\",\"dataType\":\"link\",\"id\":\"34331644178252191\",\"link\":\"transaction_types\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"balance\",\"name\":\"balance\",\"dataType\":\"decimal\",\"id\":\"17881633354558295\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"comment\",\"name\":\"comment\",\"dataType\":\"string\",\"id\":\"40211633354569149\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"app_id\",\"name\":\"app_id\",\"dataType\":\"link\",\"id\":\"51971633354577141\",\"link\":\"Apps\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"24421633360151131\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"96991644174902603\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"receipt\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"22031644176668353\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"promo\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"59651644249885512\",\"link\":\"promo_codes\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"merchant_event_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"91791644274810120\",\"link\":\"MerchantEvent\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affiliate_transaction_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"93701664633122070\",\"link\":\"appwallet\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affiliate_user_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"57701664731840784\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"parent_affiliate_trans_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"47871664733203199\",\"link\":\"appwallet\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"21831670405117574\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"type\"},{\"sysName\":\"balance\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T13:06:15Z",
                "createBy": 2853,
                "changedBy": 3527,
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33575450
            },
            "99050194": {
                "networkID": 1822,
                "sysName": "appEvents",
                "name": "🛎 App events",
                "id": 99050194,
                "dateCreated": "2021-11-22T18:54:46Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"dataType\":\"string\",\"name\":\"Event type\",\"id\":\"86601637607299210\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"messagee\",\"dataType\":\"string\",\"name\":\"Message\",\"id\":\"94561637607302351\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"app_id\",\"dataType\":\"link\",\"name\":\"App\",\"id\":\"71461637607315982\",\"link\":\"Apps\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"\",\"id\":\"91151637607332419\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"messagee\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-30T09:52:10Z",
                "createBy": 1,
                "changedBy": 1,
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "comments",
                "dataType": "arrayLink",
                "name": "Comments",
                "id": "44101633194013799",
                "link": "admin_comments",
                "group": "1633095201028",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "App id",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "isDowngraded",
                "dataType": "boolean",
                "name": "",
                "id": "26051647940518677",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 30,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "legacy_billing",
                "dataType": "boolean",
                "name": "",
                "id": "67651647899758711",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 29,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "next_billing_date",
                "dataType": "date",
                "name": "",
                "id": "39091647335092236",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 27,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "next_payment",
                "dataType": "decimal",
                "name": "",
                "id": "23671647335096237",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 28,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "paddle_subscription_id",
                "dataType": "string",
                "name": "Paddle ID",
                "id": "13631633089941494",
                "link": null,
                "group": "1623707015468",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            }
        ],
        "quickSearch": "true",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let authExample = {
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "manager"
    }

    let exampleForm = {
        "sl": "putTagToUser",
        "formName": "Добавление Тэга",
        "formDesc": "",
        "formButton": "",
        "placeholder": "",
        "maxWidth": "",
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
                        "fieldSysName": "Id",
                        "fetch": [],
                        "sysName": "Id",
                        "name": "Id",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "Id",
                        "fetch": [],
                        "sysName": "Id",
                        "name": "Id",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "tag",
                        "fetch": [],
                        "sysName": "tag",
                        "name": "Тэги",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "Id": {
                        "id": "Id",
                        "content": "Id",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "tag": {
                        "id": "tag",
                        "content": "Тэги",
                        "type": "field",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "Id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tag": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "defaultValue": "test",
                        "disableEditing": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "Id",
                            "tag"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ]
            },
            "fields": {
                "Id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tag": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "defaultValue": "test",
                    "disableEditing": false
                }
            },
            "useEditing": true,
            "editObject": "url"
        },
        "fileds": [
            {
                "sysName": "Id",
                "dataType": "string",
                "name": "Id",
                "id": "8",
                "link": "",
                "group": "94544219",
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
                "groupName": "Legacy fields (retained for backward compatibility)",
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "tag",
                "dataType": "array",
                "name": "Тэги",
                "id": "26921663168756688",
                "link": "",
                "group": "94544219",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 23,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": true
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "Id": "1491084555"
            }
        ],
        "httpParams": {}
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


    const exampleTabs = [
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} locale='FRA'/> },
        { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
    ]

    return (
        <FpsWrapper
            horizontal={currentTheme.desktopMenu == 'top'}
            mobileLeftSide={currentTheme.mobileMenu == 'left'}
        >
            <Router>
                <MainMenuWrapper themeName={currentTheme} horizontal={currentTheme.desktopMenu == 'top'} mobileLeftSide={currentTheme.mobileMenu == 'left'} />
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
                            <FpsKanban locale='ESP' data={kanbanData} auth={authExample} />
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
                                facebookAuth={<Button socialFacebook onClick={() => alert('Facebook!')}>Sign In with Facebook</Button>}
                                onSignIn={value => console.log(value)}
                                userNameFormat='phone'
                            />
                            <SignUp
                                header='Sign Up!'
                                width={400}
                                googleAuth={<Button socialGoogle onClick={() => alert('Google!')}>Sign Up with Google</Button>}
                                facebookAuth={<Button socialFacebook onClick={() => alert('Facebook!')}>Sign Up with Facebook</Button>}
                                userNameFormat='phone'
                                onSignUp={value => console.log(value)}
                            />
                            <RestorePass
                                header='Reset password'
                                width={400}
                                userNameFormat='phone'
                                onRestore={value => console.log(value)}
                            />

                        </Route>
                        <Route exact path="/cards">
                            <FpsCards locale="ESP" data={cardActions} auth={authExample} currentBP='desktop' />
                            <hr />
                            {/* <FpsCards data={newCardActions} currentBP='desktop' /> */}
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
                            <h2>Youtube</h2>
                            {/* <CodeSnippet code="<Media type='video' source='https://www.youtube.com/watch?v=JAwEWLP-G_M' width='550' height='300'/>" /> */}
                            <Media type='video' source="https://www.youtube.com/watch?v=JAwEWLP-G_M" width='550' height='300' />
                            {/* <Stopwatch timer min={60} direction='reverse' sec={0} /> */}
                        </Route>

                    </Switch>

                </ContentWrapper>
            </Router>
        </FpsWrapper>
    )
}

export default App