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
        "sl": "manageFeatures",
        "pageSize": "16",
        "headerField": null,
        "params": {
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "color",
                        "fetch": [],
                        "sysName": "color",
                        "name": "Card color",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "date_added",
                        "fetch": [],
                        "sysName": "date_added",
                        "name": "Date added",
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
                            "dateFormat": "D MMMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Feature description",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "dev_status",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "dev_status",
                        "name": "Development status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "development_status"
                    },
                    {
                        "fieldSysName": "feature_id",
                        "fetch": [],
                        "sysName": "feature_id",
                        "name": "Inner ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "feature_type",
                        "fetch": [],
                        "sysName": "feature_type",
                        "name": "Feature type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "feature_type"
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
                        "fieldSysName": "progress",
                        "fetch": [],
                        "sysName": "progress",
                        "name": "Progress",
                        "dataType": "json",
                        "format": "slider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "%",
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
                            "range": {
                                "min": 0,
                                "max": 100,
                                "step": 5
                            },
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "screenshots",
                        "fetch": [],
                        "sysName": "screenshots",
                        "name": "Screenshots or Screencast",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "status",
                        "name": "Request status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_status"
                    },
                    {
                        "fieldSysName": "subscriber_ids",
                        "fetch": [
                            {
                                "fieldSysName": "firstName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lastName",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subscriber_ids",
                        "name": "Subscribers",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "tags",
                        "fetch": [],
                        "sysName": "tags",
                        "name": "Tags",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "tags"
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Feature title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [
                            {
                                "fieldSysName": "firstName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lastName",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "user_id",
                        "name": "Who suggested",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "votes",
                        "fetch": [],
                        "sysName": "votes",
                        "name": "Number of upvotes",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "votes_ids",
                        "fetch": [
                            {
                                "fieldSysName": "firstName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lastName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "votes_ids",
                        "name": "Who upvoted",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "color",
                        "fetch": [],
                        "sysName": "color",
                        "name": "Card color",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Feature description",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "dev_status",
                        "fetch": [],
                        "sysName": "dev_status",
                        "name": "Development status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "development_status"
                    },
                    {
                        "fieldSysName": "feature_type",
                        "fetch": [],
                        "sysName": "feature_type",
                        "name": "Feature type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "feature_type"
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
                        "fieldSysName": "progress",
                        "fetch": [],
                        "sysName": "progress",
                        "name": "Progress",
                        "dataType": "json",
                        "format": "slider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "%",
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
                            "range": {
                                "min": 0,
                                "max": 100,
                                "step": 5
                            },
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "Request status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_status"
                    },
                    {
                        "fieldSysName": "tags",
                        "fetch": [],
                        "sysName": "tags",
                        "name": "Tags",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "tags"
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Feature title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "fields": {
                    "color": {
                        "id": "color",
                        "content": "Card color",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "date_added": {
                        "id": "date_added",
                        "content": "Date added",
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
                            "dateFormat": "D MMMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "description": {
                        "id": "description",
                        "content": "Feature description",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "dev_status": {
                        "id": "dev_status",
                        "content": "Development status",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "development_status",
                        "actions": []
                    },
                    "feature_id": {
                        "id": "feature_id",
                        "content": "Inner ID",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "feature_type": {
                        "id": "feature_type",
                        "content": "Feature type",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "feature_type",
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
                    "progress": {
                        "id": "progress",
                        "content": "Progress",
                        "type": "field",
                        "dataType": "json",
                        "format": "slider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "%",
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
                            "range": {
                                "min": 0,
                                "max": 100,
                                "step": 5
                            },
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "screenshots": {
                        "id": "screenshots",
                        "content": "Screenshots or Screencast",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "Request status",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "request_status",
                        "actions": []
                    },
                    "subscriber_ids": {
                        "id": "subscriber_ids",
                        "content": "Subscribers",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "tags": {
                        "id": "tags",
                        "content": "Tags",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "tags",
                        "actions": []
                    },
                    "title": {
                        "id": "title",
                        "content": "Feature title",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "user_id": {
                        "id": "user_id",
                        "content": "Who suggested",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "votes": {
                        "id": "votes",
                        "content": "Number of upvotes",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "votes_ids": {
                        "id": "votes_ids",
                        "content": "Who upvoted",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "action__10531621343955723": {
                        "content": "Pick for development",
                        "id": "action__10531621343955723",
                        "type": "action",
                        "actions": []
                    },
                    "action__37201621343964714": {
                        "content": "Put back to backlog",
                        "id": "action__37201621343964714",
                        "type": "action",
                        "actions": []
                    },
                    "action__14851621345231893": {
                        "content": "Release!",
                        "id": "action__14851621345231893",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "color": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date_added": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "dev_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
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
                        "quickSearch": true,
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
                    "user_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "votes": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "votes_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
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
                                "user_name": {
                                    "id": "user_name",
                                    "content": "User name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "id": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "user_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "user_name"
                            ]
                        }
                    },
                    "feature_type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "feature_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subscriber_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tags": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "progress": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "screenshots": {
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
                        "title": "Feature",
                        "fieldIds": [
                            "feature_id",
                            "progress",
                            "user_id",
                            "date_added",
                            "feature_type",
                            "title",
                            "description",
                            "status",
                            "dev_status",
                            "color",
                            "id",
                            "tags",
                            "screenshots"
                        ]
                    },
                    "82431621030139706": {
                        "id": "82431621030139706",
                        "title": "Votes",
                        "fieldIds": [
                            "subscriber_ids",
                            "votes_ids",
                            "votes"
                        ]
                    },
                    "29571621344123729": {
                        "id": "29571621344123729",
                        "title": "Manage",
                        "fieldIds": [
                            "action__10531621343955723",
                            "action__14851621345231893",
                            "action__37201621343964714"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "82431621030139706",
                    "29571621344123729"
                ],
                "actions": [
                    {
                        "sysName": "",
                        "id": "10531621343955723",
                        "name": "Pick for development",
                        "displayAs": "button",
                        "buttonIcon": "arrowRight",
                        "buttonType": "accent",
                        "formMapping": [
                            {
                                "id": "13041621344021008",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "30131621344029217",
                                "target": "dev_status",
                                "type": "const",
                                "value": "under_development"
                            }
                        ],
                        "conditionals": [
                            {
                                "id": "40471621344079447",
                                "target": "field",
                                "value": "planned",
                                "field": "dev_status"
                            }
                        ],
                        "dropdown": true,
                        "closePopup": true
                    },
                    {
                        "sysName": "",
                        "id": "37201621343964714",
                        "name": "Put back to backlog",
                        "displayAs": "button",
                        "buttonIcon": "arrowLeft",
                        "buttonType": "accent",
                        "dropdown": true,
                        "closePopup": true,
                        "formMapping": [
                            {
                                "id": "37871621344159914",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "69381621344160975",
                                "target": "dev_status",
                                "type": "const",
                                "value": "planned"
                            }
                        ],
                        "conditionals": [
                            {
                                "id": "75151621344162098",
                                "target": "field",
                                "value": "under_development",
                                "field": "dev_status"
                            }
                        ]
                    },
                    {
                        "sysName": "",
                        "id": "14851621345231893",
                        "name": "Release!",
                        "displayAs": "button",
                        "buttonIcon": "rocket",
                        "buttonType": "accent",
                        "dropdown": true,
                        "closePopup": true,
                        "formMapping": [
                            {
                                "id": "24921621345250090",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "38651621345261152",
                                "target": "dev_status",
                                "type": "const",
                                "value": "released"
                            }
                        ],
                        "conditionals": [
                            {
                                "id": "78811621345270074",
                                "target": "field",
                                "value": "under_development",
                                "field": "dev_status"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "color": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_added": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "dev_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "planned",
                            "value": "Planned"
                        },
                        {
                            "key": "released",
                            "value": "Released"
                        },
                        {
                            "key": "under_development",
                            "value": "Under development"
                        }
                    ]
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
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "approved",
                            "value": "Approved"
                        },
                        {
                            "key": "double",
                            "value": "Double"
                        },
                        {
                            "key": "declined",
                            "value": "Declined"
                        },
                        {
                            "key": "new",
                            "value": "New"
                        }
                    ]
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "votes": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "votes_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
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
                            "user_name": {
                                "id": "user_name",
                                "content": "User name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "user_name"
                        ]
                    }
                },
                "feature_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "feature",
                            "value": "feature"
                        },
                        {
                            "key": "bug",
                            "value": "bug"
                        }
                    ]
                },
                "feature_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subscriber_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tags": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "scenarios",
                            "value": "scenarios"
                        },
                        {
                            "key": "api-builder",
                            "value": "api-builder"
                        },
                        {
                            "key": "web-pages",
                            "value": "web-pages"
                        },
                        {
                            "key": "integrations",
                            "value": "integrations"
                        },
                        {
                            "key": "database",
                            "value": "database"
                        },
                        {
                            "key": "billing",
                            "value": "billing"
                        },
                        {
                            "key": "app life cycle management",
                            "value": "app life cycle management"
                        },
                        {
                            "key": "reports",
                            "value": "reports"
                        },
                        {
                            "key": "general issues",
                            "value": "general issues"
                        },
                        {
                            "key": "plugin",
                            "value": "plugin"
                        },
                        {
                            "key": "team plans",
                            "value": "team plans"
                        },
                        {
                            "key": "web3",
                            "value": "web3"
                        }
                    ]
                },
                "progress": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "screenshots": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "cardColor": "color",
            "cardColorOption": "border",
            "cardHeaderComment": "dev_status",
            "cardBodyText": "progress",
            "showCounter": true,
            "counterField": "votes",
            "counterText": " upvotes",
            "actions": [
                {
                    "sysName": "",
                    "id": "10531621343955723",
                    "name": "Pick for development",
                    "displayAs": "button",
                    "buttonIcon": "arrowRight",
                    "buttonType": "accent",
                    "formMapping": [
                        {
                            "id": "13041621344021008",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "30131621344029217",
                            "target": "dev_status",
                            "type": "const",
                            "value": "under_development"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "40471621344079447",
                            "target": "field",
                            "value": "planned",
                            "field": "dev_status",
                            "fieldValue": "planned"
                        }
                    ],
                    "dropdown": true,
                    "closePopup": true
                },
                {
                    "sysName": "",
                    "id": "37201621343964714",
                    "name": "Put back to backlog",
                    "displayAs": "button",
                    "buttonIcon": "arrowLeft",
                    "buttonType": "accent",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "37871621344159914",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "69381621344160975",
                            "target": "dev_status",
                            "type": "const",
                            "value": "planned"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "75151621344162098",
                            "target": "field",
                            "value": "under_development",
                            "field": "dev_status",
                            "fieldValue": "planned"
                        }
                    ]
                },
                {
                    "sysName": "",
                    "id": "14851621345231893",
                    "name": "Release!",
                    "displayAs": "button",
                    "buttonIcon": "rocket",
                    "buttonType": "accent",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "24921621345250090",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "38651621345261152",
                            "target": "dev_status",
                            "type": "const",
                            "value": "released"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "78811621345270074",
                            "target": "field",
                            "value": "under_development",
                            "field": "dev_status",
                            "fieldValue": "planned"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "color",
                "dataType": "string",
                "name": "Card color",
                "id": "61881621017200362",
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
                "format": "color",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "date_added",
                "dataType": "date",
                "name": "Date added",
                "id": "68351620832123660",
                "link": "",
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
                    "dateFormat": "D MMMM, Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "description",
                "dataType": "string",
                "name": "Feature description",
                "id": "77031620832091108",
                "link": "",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "dev_status",
                "dataType": "link",
                "name": "Development status",
                "id": "85621620832330584",
                "link": "development_status",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "feature_id",
                "dataType": "string",
                "name": "Inner ID",
                "id": "23601621342083348",
                "link": null,
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
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "feature_type",
                "dataType": "link",
                "name": "Feature type",
                "id": "55371621030232780",
                "link": "feature_type",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
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
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "progress",
                "dataType": "json",
                "name": "Progress",
                "id": "68751622642385874",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 16,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "slider",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "unitName": "%",
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
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 5
                    },
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": true,
                "indexExists": false
            },
            {
                "sysName": "screenshots",
                "dataType": "file",
                "name": "Screenshots or Screencast",
                "id": "61091637158867177",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 17,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": "multipleFiles",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "status",
                "dataType": "link",
                "name": "Request status",
                "id": "40251620832303364",
                "link": "request_status",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "subscriber_ids",
                "dataType": "arrayLink",
                "name": "Subscribers",
                "id": "26751621348189191",
                "link": "WebUser",
                "group": "1621348185318",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "tags",
                "dataType": "arrayLink",
                "name": "Tags",
                "id": "67851621409605492",
                "link": "tags",
                "group": "0",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "title",
                "dataType": "string",
                "name": "Feature title",
                "id": "79031620832091734",
                "link": null,
                "group": "0",
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
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "user_id",
                "dataType": "link",
                "name": "Who suggested",
                "id": "59421620832153105",
                "link": "WebUser",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "votes",
                "dataType": "number",
                "name": "Number of upvotes",
                "id": "68061620832170304",
                "link": "",
                "group": "0",
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
                "format": "positiveNum",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "votes_ids",
                "dataType": "arrayLink",
                "name": "Who upvoted",
                "id": "14001620832180875",
                "link": "WebUser",
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
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            }
        ],
        "data": [
            {
                "votes": 3,
                "subscriber_ids": [
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    }
                ],
                "description": "Similar mechanism to scenario publishing/versioning",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-119",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "365db6fe-4cbe-43c7-a5c7-8380fb46f98b",
                "progress": "{\"firstValue\":20}",
                "dev_status": {
                    "id": "under_development",
                    "status": "Under development"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621377261000,
                "votes_ids": [
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    }
                ],
                "title": "Web-pages versions"
            },
            {
                "votes": 2,
                "subscriber_ids": [
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "id": "8vosem8@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    }
                ],
                "description": "Show the list of:\n- Endpoints that call the scenario in a sync mode\n- Scenarios that call the scenario with a [link scenario](https://readme.directual.com/scenarios/editing-scenarios/system-steps/link-scenario-step) step",
                "tags": [
                    "scenarios"
                ],
                "feature_id": "PLT-342",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "1b9641b2-debd-4f5f-b07d-70c733905b62",
                "progress": "{\"firstValue\":70}",
                "dev_status": {
                    "id": "under_development",
                    "status": "Under development"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1665669104000,
                "votes_ids": [
                    {
                        "id": "8vosem8@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    }
                ],
                "title": "Show endpoints and scenarios that link to the scenario"
            },
            {
                "subscriber_ids": [
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    }
                ],
                "description": "Add a basic video-course for learning the platform.\nhttps://www.youtube.com/playlist?list=PLPlCF6Al6qJGs-PsAYfOo45_l2SJsgSqK ",
                "tags": [
                    "general issues"
                ],
                "feature_id": "PLT-326",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "3d99f051-e294-495c-8469-27132ca26e7a",
                "progress": "{\"firstValue\":60}",
                "dev_status": {
                    "id": "under_development",
                    "status": "Under development"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1657903031000,
                "title": "101 crash course in the \"Learn & Support\" section"
            },
            {
                "subscriber_ids": [
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    }
                ],
                "description": "Filters are reset if actions are called or pages are changed.",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-360",
                "color": "ec6161",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "bug",
                "id": "8907bb00-117b-4be1-98e4-fda90f3371e1",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "id": "under_development",
                    "status": "Under development"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1673091674000,
                "title": "Filters reset"
            },
            {
                "votes": 19,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Mathew",
                        "lastName": "Tusa",
                        "id": "mobileactionim@gmail.com"
                    },
                    {
                        "firstName": "Александр",
                        "lastName": "Головков",
                        "id": "a.golovkoff@gmail.com"
                    },
                    {
                        "firstName": "Steve",
                        "lastName": "Ryker",
                        "id": "steveryker20@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "A",
                        "lastName": "A",
                        "id": "admin@agdigitals.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "lastName": "Slipenko",
                        "firstName": "Maxim",
                        "id": "max.slipenko@gmail.com"
                    },
                    {
                        "lastName": "Jabbour",
                        "firstName": "Tony",
                        "id": "tonyjabbour007@gmail.com"
                    },
                    {
                        "firstName": "Adibta",
                        "lastName": "Triantama",
                        "id": "adibtatriantama@gmail.com"
                    },
                    {
                        "firstName": "Anton",
                        "lastName": "Sidorov",
                        "id": "a@preencipium.com"
                    },
                    {
                        "firstName": "Do",
                        "lastName": "Do",
                        "id": "dodo@inboxbear.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "lastName": "Novoseltsev",
                        "firstName": "Vladimir",
                        "id": "xtrms@yandex.ru"
                    },
                    {
                        "firstName": "VISHAL",
                        "lastName": "SETHI",
                        "id": "vs301991@gmail.com"
                    },
                    {
                        "lastName": "Grimalsky",
                        "firstName": "Slava",
                        "id": "itareo@gmail.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "description": "1. Make API-builder interface easier\n2. Introduce API-endpoint request logs\n3. Improve work with HTTP-parameters\n4. Include automatic userID filling\n5. Open API-endpoint settings in a modal window\n6. Show places where API-endpoint is used\n7. Filter endpoints (public, private, external systems, etc.)\n8. Show if there are sync scenarios connected to the endpoint\n9. Pause endpoint\n10. Requests log (`api/v3/apiEndpoints/history`)\n11. Add http-params description\n12. Endpoint versioning",
                "tags": [
                    "api-builder"
                ],
                "feature_id": "PLT-103",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "ea8ef168-ca6c-4f6c-b82b-6d6c4f0610f0",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621373826000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Mathew",
                        "lastName": "Tusa",
                        "id": "mobileactionim@gmail.com"
                    },
                    {
                        "firstName": "Александр",
                        "lastName": "Головков",
                        "id": "a.golovkoff@gmail.com"
                    },
                    {
                        "firstName": "Steve",
                        "lastName": "Ryker",
                        "id": "steveryker20@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "A",
                        "lastName": "A",
                        "id": "admin@agdigitals.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "lastName": "Slipenko",
                        "firstName": "Maxim",
                        "id": "max.slipenko@gmail.com"
                    },
                    {
                        "lastName": "Jabbour",
                        "firstName": "Tony",
                        "id": "tonyjabbour007@gmail.com"
                    },
                    {
                        "firstName": "Adibta",
                        "lastName": "Triantama",
                        "id": "adibtatriantama@gmail.com"
                    },
                    {
                        "firstName": "Anton",
                        "lastName": "Sidorov",
                        "id": "a@preencipium.com"
                    },
                    {
                        "firstName": "Do",
                        "lastName": "Do",
                        "id": "dodo@inboxbear.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "lastName": "Novoseltsev",
                        "firstName": "Vladimir",
                        "id": "xtrms@yandex.ru"
                    },
                    {
                        "firstName": "VISHAL",
                        "lastName": "SETHI",
                        "id": "vs301991@gmail.com"
                    },
                    {
                        "lastName": "Grimalsky",
                        "firstName": "Slava",
                        "id": "itareo@gmail.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "title": "API-builder UI updating"
            },
            {
                "votes": 16,
                "subscriber_ids": [
                    {
                        "firstName": "Victor",
                        "lastName": "Zaborskiy",
                        "id": "victor@zaborskiy.com"
                    },
                    {
                        "firstName": "Александр",
                        "lastName": "Головков",
                        "id": "a.golovkoff@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "lastName": "Reyes",
                        "firstName": "Cathy",
                        "id": "iamcathyreyes@yahoo.com"
                    },
                    {
                        "firstName": "Vladimir",
                        "lastName": "Stepanenko",
                        "id": "vgstepanenko@gmail.com"
                    },
                    {
                        "lastName": "Quinn",
                        "firstName": "Niki",
                        "id": "niki_q@icloud.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "lastName": "Khokhlov",
                        "firstName": "Alexey",
                        "id": "alexhohlov89@gmail.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    }
                ],
                "description": "Calendar view for the structure",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-113",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "2c7192b1-cae4-4234-a245-8e5d0160ee2f",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621374804000,
                "votes_ids": [
                    {
                        "firstName": "Victor",
                        "lastName": "Zaborskiy",
                        "id": "victor@zaborskiy.com"
                    },
                    {
                        "firstName": "Александр",
                        "lastName": "Головков",
                        "id": "a.golovkoff@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "lastName": "Reyes",
                        "firstName": "Cathy",
                        "id": "iamcathyreyes@yahoo.com"
                    },
                    {
                        "firstName": "Vladimir",
                        "lastName": "Stepanenko",
                        "id": "vgstepanenko@gmail.com"
                    },
                    {
                        "lastName": "Quinn",
                        "firstName": "Niki",
                        "id": "niki_q@icloud.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "lastName": "Khokhlov",
                        "firstName": "Alexey",
                        "id": "alexhohlov89@gmail.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    }
                ],
                "title": "Calendar component",
                "progress": ""
            },
            {
                "votes": 11,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "id": "dave@tomorrowready.com"
                    },
                    {
                        "firstName": "Mathew",
                        "lastName": "Tusa",
                        "id": "mobileactionim@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "Vladimir",
                        "lastName": "Stepanenko",
                        "id": "vgstepanenko@gmail.com"
                    },
                    {
                        "firstName": "A",
                        "lastName": "A",
                        "id": "admin@agdigitals.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "titouan",
                        "lastName": "albouy",
                        "id": "titouan@akatek.io"
                    },
                    {
                        "firstName": "VISHAL",
                        "lastName": "SETHI",
                        "id": "vs301991@gmail.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    }
                ],
                "description": "Option to restrict any access to files on Directual for non-authorised users",
                "tags": [
                    "database"
                ],
                "feature_id": "PLT-177",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "3874bd01-38af-4d0c-a04f-5eb999733d4f",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1625253351000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "id": "dave@tomorrowready.com"
                    },
                    {
                        "firstName": "Mathew",
                        "lastName": "Tusa",
                        "id": "mobileactionim@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "Vladimir",
                        "lastName": "Stepanenko",
                        "id": "vgstepanenko@gmail.com"
                    },
                    {
                        "firstName": "A",
                        "lastName": "A",
                        "id": "admin@agdigitals.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    },
                    {
                        "firstName": "titouan",
                        "lastName": "albouy",
                        "id": "titouan@akatek.io"
                    },
                    {
                        "firstName": "VISHAL",
                        "lastName": "SETHI",
                        "id": "vs301991@gmail.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    }
                ],
                "title": "Restrict access to files "
            },
            {
                "votes": 10,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "lastName": "Reyes",
                        "firstName": "Cathy",
                        "id": "iamcathyreyes@yahoo.com"
                    },
                    {
                        "firstName": "Vladimir",
                        "lastName": "Stepanenko",
                        "id": "vgstepanenko@gmail.com"
                    },
                    {
                        "firstName": "Do",
                        "lastName": "Do",
                        "id": "dodo@inboxbear.com"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    }
                ],
                "description": "As of today, arrayLink is displayed as a simple list. It would be great to have:\n\n- Comments\n- ✅ Sorted list (in prod)\n- Cards\n- ✅ Table (in prod)\n- ✅ Shopping cart (in prod)\n- Calendar",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-114",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "db3ce173-737a-4b9b-9872-f9c5d090f015",
                "progress": "{\"firstValue\":40}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621374947000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "lastName": "Reyes",
                        "firstName": "Cathy",
                        "id": "iamcathyreyes@yahoo.com"
                    },
                    {
                        "firstName": "Vladimir",
                        "lastName": "Stepanenko",
                        "id": "vgstepanenko@gmail.com"
                    },
                    {
                        "firstName": "Do",
                        "lastName": "Do",
                        "id": "dodo@inboxbear.com"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    }
                ],
                "title": "Sophisticated view for arrayLinks on object cards"
            },
            {
                "votes": 9,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "effgenij@gmail.com"
                    },
                    {
                        "id": "vitaly.krenel@gmail.com"
                    },
                    {
                        "firstName": "Do",
                        "lastName": "Do",
                        "id": "dodo@inboxbear.com"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "description": "Current ES5 is not the best JS-engine :)",
                "tags": [
                    "scenarios"
                ],
                "feature_id": "PLT-112",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "63da4103-bb50-4b03-889c-1e5af18677c5",
                "progress": "{\"firstValue\":30}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621374725000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "effgenij@gmail.com"
                    },
                    {
                        "id": "vitaly.krenel@gmail.com"
                    },
                    {
                        "firstName": "Do",
                        "lastName": "Do",
                        "id": "dodo@inboxbear.com"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "title": "ES-2017  as a JS-engine"
            },
            {
                "votes": 7,
                "subscriber_ids": [
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "lastName": "Ermolaev",
                        "firstName": "Timur",
                        "id": "ermolaev@code-word.ru"
                    },
                    {
                        "firstName": "Anton",
                        "lastName": "Sidorov",
                        "id": "a@preencipium.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "description": "Add \"not in array\" filter in condition cube and in api filter section. Ideally add 2 new options: \n1. object is NOT in array\n2. array does NOT contain all\n2. array does NOT contain any",
                "tags": [
                    "scenarios",
                    "api-builder"
                ],
                "feature_id": "PLT-120",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Dolgov",
                    "firstName": "Nikita",
                    "id": "n.dolgov@directual.com"
                },
                "feature_type": "feature",
                "id": "7d8635da-2738-44cf-b4b7-1d509611f8ed",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621377697000,
                "votes_ids": [
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "lastName": "Ermolaev",
                        "firstName": "Timur",
                        "id": "ermolaev@code-word.ru"
                    },
                    {
                        "firstName": "Anton",
                        "lastName": "Sidorov",
                        "id": "a@preencipium.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "title": "Add NOT-filters for arrays"
            },
            {
                "votes": 6,
                "subscriber_ids": [
                    {
                        "lastName": "Reyes",
                        "firstName": "Cathy",
                        "id": "iamcathyreyes@yahoo.com"
                    },
                    {
                        "firstName": "A",
                        "lastName": "A",
                        "id": "admin@agdigitals.com"
                    },
                    {
                        "lastName": "Khokhlov",
                        "firstName": "Alexey",
                        "id": "alexhohlov89@gmail.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    }
                ],
                "description": "Setting up a favicons for portal",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-213",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Reyes",
                    "firstName": "Cathy",
                    "id": "iamcathyreyes@yahoo.com"
                },
                "feature_type": "feature",
                "id": "1eea1819-226c-46a9-850c-49815c51d7bd",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1628084103000,
                "votes_ids": [
                    {
                        "firstName": "A",
                        "lastName": "A",
                        "id": "admin@agdigitals.com"
                    },
                    {
                        "lastName": "Khokhlov",
                        "firstName": "Alexey",
                        "id": "alexhohlov89@gmail.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "lastName": "N",
                        "firstName": "Kamil",
                        "id": "kamil@leverall.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    }
                ],
                "title": "Favicon for portal"
            },
            {
                "votes": 6,
                "subscriber_ids": [
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "8256055@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "Antwan",
                        "lastName": "Carr",
                        "id": "unlabeledlifestyle@gmail.com"
                    }
                ],
                "description": "Subtask for **PLT-114**",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-257",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "d75f9f17-fb96-43a8-a26a-aad0896716a3",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1633204879000,
                "votes_ids": [
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "pavel@goncharov.me"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "8256055@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "Antwan",
                        "lastName": "Carr",
                        "id": "unlabeledlifestyle@gmail.com"
                    }
                ],
                "title": "arrayLink view — Comments",
                "progress": ""
            },
            {
                "votes": 5,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    },
                    {
                        "lastName": "Grimalsky",
                        "firstName": "Slava",
                        "id": "itareo@gmail.com"
                    }
                ],
                "description": "Two-step import of CSV/XLS\n\n### Step 1\nFields aliases, with quick structure editing.\n\n### Step 2\nImport itself.\n\nP.S. Webflow has similar mechanism of CSV import.\n\nPlus:\n- import from Airtable\n- import from Google Sheets\n- import from popular CRMs\n- Listeners on SQL databases",
                "tags": [
                    "database"
                ],
                "feature_id": "PLT-102",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "b5ca7520-f1d3-48da-af26-0cdacab94757",
                "progress": "{\"firstValue\":40}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1621373725000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    },
                    {
                        "lastName": "Grimalsky",
                        "firstName": "Slava",
                        "id": "itareo@gmail.com"
                    }
                ],
                "title": "Import updating"
            },
            {
                "votes": 5,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Artem",
                        "lastName": "Laptev",
                        "id": "artemlaptev7@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "Anton",
                        "lastName": "Sidorov",
                        "id": "a@preencipium.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    }
                ],
                "description": "When a structure becomes big with hundreds of parameters it usually makes it difficult to manage and to find in scenario parameter we need. Usually a lot of parameters with time become unused. The easiest way to fix this problem but not to broke old scenarios and other structures, connected with our unused parameters is to allow user to hide it both in structures and scenarios, something like adding them to archive from which we can drop them back any time we want.   ",
                "tags": [
                    "database"
                ],
                "feature_id": "PLT-281",
                "color": "57bf97",
                "user_id": {
                    "firstName": "Artem",
                    "lastName": "Laptev",
                    "id": "artemlaptev7@gmail.com"
                },
                "feature_type": "feature",
                "id": "4dee093a-d6b6-461c-997c-7bce76b93027",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1637408122000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "firstName": "Anton",
                        "lastName": "Sidorov",
                        "id": "a@preencipium.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    }
                ],
                "title": "hide unused fields",
                "progress": ""
            },
            {
                "votes": 5,
                "subscriber_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "id": "zhgenty@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "Antwan",
                        "lastName": "Carr",
                        "id": "unlabeledlifestyle@gmail.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    }
                ],
                "description": "If user us authorised, the session is saved in the browser, embed page does not realise that.",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-292",
                "color": "ec6161",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "bug",
                "id": "7ea2f65a-f7b7-4efc-8bd3-643484e27852",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1639931577000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "id": "zhgenty@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "firstName": "Antwan",
                        "lastName": "Carr",
                        "id": "unlabeledlifestyle@gmail.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    }
                ],
                "title": "Authorisation in embed",
                "progress": ""
            },
            {
                "votes": 4,
                "subscriber_ids": [
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    }
                ],
                "description": "Create Integromat app",
                "tags": [
                    "integrations"
                ],
                "feature_id": "PLT-183",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "feature_type": "feature",
                "id": "595e9e01-1538-4169-a9a2-4632ee7e1625",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1626367713000,
                "votes_ids": [
                    {
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "firstName": "Efim",
                        "lastName": "Maisak",
                        "id": "coldnaked@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "id": "kolgtim@gmail.com"
                    }
                ],
                "title": "Make (ex-Integromat) app"
            }
        ],
        "totalPages": 3,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "color",
                1385610
            ],
            [
                "date_added",
                1385610
            ],
            [
                "description",
                1385610
            ],
            [
                "dev_status.id",
                1385613
            ],
            [
                "dev_status.status",
                1385613
            ],
            [
                "feature_id",
                1385610
            ],
            [
                "feature_type",
                1385610
            ],
            [
                "id",
                1385610
            ],
            [
                "progress",
                1385610
            ],
            [
                "screenshots",
                1385610
            ],
            [
                "status.id",
                1385612
            ],
            [
                "status.status",
                1385612
            ],
            [
                "subscriber_ids.firstName",
                1385542
            ],
            [
                "subscriber_ids.id",
                1385542
            ],
            [
                "subscriber_ids.lastName",
                1385542
            ],
            [
                "tags",
                1385610
            ],
            [
                "title",
                1385610
            ],
            [
                "user_id.firstName",
                1385542
            ],
            [
                "user_id.id",
                1385542
            ],
            [
                "user_id.lastName",
                1385542
            ],
            [
                "votes",
                1385610
            ],
            [
                "votes_ids.firstName",
                1385542
            ],
            [
                "votes_ids.id",
                1385542
            ],
            [
                "votes_ids.lastName",
                1385542
            ],
            [
                "votes_ids.user_name",
                1385542
            ]
        ],
        "writeFields": [
            "color",
            "description",
            "dev_status",
            "feature_type",
            "id",
            "progress",
            "status",
            "tags",
            "title"
        ],
        "structures": {
            "1385542": {
                "networkID": 6829,
                "sysName": "WebUser",
                "name": "App users",
                "id": 1385542,
                "dateCreated": "2021-05-14T21:02:45Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Roles\",\"id\":\"6\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"date_registered\",\"dataType\":\"date\",\"name\":\"Date registered on Dev\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51351621027822811\",\"link\":null,\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"isEmailConfirmed\",\"dataType\":\"boolean\",\"name\":\"Email confirmed\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1621027815164,\"name\":\"Email confirmation\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-20T16:05:00Z",
                "createBy": 0,
                "changedBy": 0,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "Username (login)",
                    "id": "13",
                    "link": "",
                    "group": "",
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
                    "array": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": null
            },
            "1385610": {
                "networkID": 6829,
                "sysName": "Features",
                "name": "Feature requests and Bug reports",
                "id": 1385610,
                "dateCreated": "2021-05-12T15:06:56Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes_ids\",\"dataType\":\"arrayLink\",\"name\":\"Who upvoted\",\"id\":\"14001620832180875\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_id\",\"dataType\":\"string\",\"name\":\"Inner ID\",\"id\":\"23601621342083348\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"subscriber_ids\",\"dataType\":\"arrayLink\",\"name\":\"Subscribers\",\"id\":\"26751621348189191\",\"link\":\"WebUser\",\"group\":\"1621348185318\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Request status\",\"id\":\"40251620832303364\",\"link\":\"request_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_id\",\"dataType\":\"link\",\"name\":\"Release\",\"id\":\"40791621408746909\",\"link\":\"Releases\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"feature_type\",\"dataType\":\"link\",\"name\":\"Feature type\",\"id\":\"55371621030232780\",\"link\":\"feature_type\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Who suggested\",\"id\":\"59421620832153105\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"screenshots\",\"dataType\":\"file\",\"name\":\"Screenshots or Screencast\",\"id\":\"61091637158867177\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"dataType\":\"string\",\"name\":\"Card color\",\"id\":\"61881621017200362\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tags\",\"dataType\":\"arrayLink\",\"name\":\"Tags\",\"id\":\"67851621409605492\",\"link\":\"tags\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"votes\",\"dataType\":\"number\",\"name\":\"Number of upvotes\",\"id\":\"68061620832170304\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_added\",\"dataType\":\"date\",\"name\":\"Date added\",\"id\":\"68351620832123660\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"progress\",\"dataType\":\"json\",\"name\":\"Progress\",\"id\":\"68751622642385874\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"%\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":0,\"max\":100,\"step\":5},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"release_date\",\"dataType\":\"date\",\"name\":\"Release date\",\"id\":\"71651621345011532\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"decline_reason\",\"dataType\":\"string\",\"name\":\"Reason of decline\",\"id\":\"73671621342083940\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_updated\",\"dataType\":\"date\",\"name\":\"Date updated\",\"id\":\"74581670507990970\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Feature description\",\"id\":\"77031620832091108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"Feature title\",\"id\":\"79031620832091734\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dev_status\",\"dataType\":\"link\",\"name\":\"Development status\",\"id\":\"85621620832330584\",\"link\":\"development_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Subscriptions\",\"id\":1621348185318,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"feature_id\"},{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-08T14:02:39Z",
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
                    "array": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 33625685
            },
            "1385612": {
                "networkID": 6829,
                "sysName": "request_status",
                "name": "request_status",
                "id": 1385612,
                "dateCreated": "2021-05-12T15:13:21Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"76241620832406222\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-12T15:13:35Z",
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
                    "array": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 33625685
            },
            "1385613": {
                "networkID": 6829,
                "sysName": "development_status",
                "name": "development_status",
                "id": 1385613,
                "dateCreated": "2021-05-12T15:14:45Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-12T15:14:59Z",
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
                    "array": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 33625685
            }
        },
        "isSuccessWrite": false,
        "writeError": "dql is not allowed for write",
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "color",
                "dataType": "string",
                "name": "Card color",
                "id": "61881621017200362",
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
                "format": "color",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "description",
                "dataType": "string",
                "name": "Feature description",
                "id": "77031620832091108",
                "link": "",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "dev_status",
                "dataType": "link",
                "name": "Development status",
                "id": "85621620832330584",
                "link": "development_status",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "feature_type",
                "dataType": "link",
                "name": "Feature type",
                "id": "55371621030232780",
                "link": "feature_type",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
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
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "progress",
                "dataType": "json",
                "name": "Progress",
                "id": "68751622642385874",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 16,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "slider",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "unitName": "%",
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
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 5
                    },
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": true,
                "indexExists": false
            },
            {
                "sysName": "status",
                "dataType": "link",
                "name": "Request status",
                "id": "40251620832303364",
                "link": "request_status",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "tags",
                "dataType": "arrayLink",
                "name": "Tags",
                "id": "67851621409605492",
                "link": "tags",
                "group": "0",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "title",
                "dataType": "string",
                "name": "Feature title",
                "id": "79031620832091734",
                "link": null,
                "group": "0",
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
                "array": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            }
        ],
        "quickSearch": "true",
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
        "sl": "adminApps",
        "pageSize": "25",
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
                        "fieldSysName": "color_get",
                        "fetch": [],
                        "sysName": "color_get",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_http",
                        "fetch": [],
                        "sysName": "color_http",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_post",
                        "fetch": [],
                        "sysName": "color_post",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_proc",
                        "fetch": [],
                        "sysName": "color_proc",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_sync",
                        "fetch": [],
                        "sysName": "color_sync",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_users",
                        "fetch": [],
                        "sysName": "color_users",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "forecast_bill",
                        "fetch": [],
                        "sysName": "forecast_bill",
                        "name": "Forecast bill, $",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "free_alert_counter",
                        "fetch": [],
                        "sysName": "free_alert_counter",
                        "name": "Free alert counter",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                        "fieldSysName": "is_excess",
                        "fetch": [],
                        "sysName": "is_excess",
                        "name": "Excess plan",
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
                                "🔥 hit limits",
                                " OK"
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
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "country",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "first_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "last_name",
                                "condition": null,
                                "fetch": []
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
                        "fieldSysName": "stat_get",
                        "fetch": [],
                        "sysName": "stat_get",
                        "name": "Stat | GET",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_http",
                        "fetch": [],
                        "sysName": "stat_http",
                        "name": "Stat | HTTP requests",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_post",
                        "fetch": [],
                        "sysName": "stat_post",
                        "name": "Stat | POST",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_proc",
                        "fetch": [],
                        "sysName": "stat_proc",
                        "name": "Stat | Proc exec",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_sync",
                        "fetch": [],
                        "sysName": "stat_sync",
                        "name": "Stat | SYNC Proc exec",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_users",
                        "fetch": [],
                        "sysName": "stat_users",
                        "name": "Stat | Users",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                    }
                ],
                "writeFields": [],
                "fields": {
                    "color_get": {
                        "id": "color_get",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "color_http": {
                        "id": "color_http",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "color_post": {
                        "id": "color_post",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "color_proc": {
                        "id": "color_proc",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "color_sync": {
                        "id": "color_sync",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "color_users": {
                        "id": "color_users",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "forecast_bill": {
                        "id": "forecast_bill",
                        "content": "Forecast bill, $",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "free_alert_counter": {
                        "id": "free_alert_counter",
                        "content": "Free alert counter",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "id": {
                        "id": "id",
                        "content": "App id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
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
                    "is_excess": {
                        "id": "is_excess",
                        "content": "Excess plan",
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
                                "🔥 hit limits",
                                " OK"
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
                    "stat_get": {
                        "id": "stat_get",
                        "content": "Stat | GET",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "stat_http": {
                        "id": "stat_http",
                        "content": "Stat | HTTP requests",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "stat_post": {
                        "id": "stat_post",
                        "content": "Stat | POST",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "stat_proc": {
                        "id": "stat_proc",
                        "content": "Stat | Proc exec",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "stat_sync": {
                        "id": "stat_sync",
                        "content": "Stat | SYNC Proc exec",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "stat_users": {
                        "id": "stat_users",
                        "content": "Stat | Users",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
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
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "owner_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "plan_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
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
                    "color": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_excess": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color_get": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color_post": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color_proc": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color_sync": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color_users": {
                        "include": false,
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
                        "include": true,
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
                    "forecast_bill": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "free_alert_counter": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color_http": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_http": {
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
                        "title": "Info",
                        "fieldIds": [
                            "id",
                            "sysName",
                            "owner_id",
                            "is_excess",
                            "color_get",
                            "color_post",
                            "color_proc",
                            "color_sync",
                            "color_users",
                            "is_sandbox",
                            "paddle_subscription_id",
                            "is_blocked",
                            "forecast_bill",
                            "free_alert_counter",
                            "color_http",
                            "stat_http"
                        ]
                    },
                    "96501623748530500": {
                        "id": "96501623748530500",
                        "title": "Billing",
                        "fieldIds": [
                            "plan_id",
                            "stat_users",
                            "stat_get",
                            "stat_post",
                            "stat_proc",
                            "stat_sync"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "96501623748530500"
                ],
                "actions": []
            },
            "fields": {
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "owner_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "plan_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
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
                "color": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_excess": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color_get": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color_post": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color_proc": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color_sync": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color_users": {
                    "include": false,
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
                    "include": true,
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
                "forecast_bill": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "free_alert_counter": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color_http": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_http": {
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
                        "fieldSysName": "color_get",
                        "fetch": [],
                        "sysName": "color_get",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_http",
                        "fetch": [],
                        "sysName": "color_http",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_post",
                        "fetch": [],
                        "sysName": "color_post",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_proc",
                        "fetch": [],
                        "sysName": "color_proc",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_sync",
                        "fetch": [],
                        "sysName": "color_sync",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "color_users",
                        "fetch": [],
                        "sysName": "color_users",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "forecast_bill",
                        "fetch": [],
                        "sysName": "forecast_bill",
                        "name": "Forecast bill, $",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "free_alert_counter",
                        "fetch": [],
                        "sysName": "free_alert_counter",
                        "name": "Free alert counter",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                        "fieldSysName": "is_excess",
                        "fetch": [],
                        "sysName": "is_excess",
                        "name": "Excess plan",
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
                                "🔥 hit limits",
                                " OK"
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
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "country",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "first_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "last_name",
                                "condition": null,
                                "fetch": []
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
                        "fieldSysName": "stat_get",
                        "fetch": [],
                        "sysName": "stat_get",
                        "name": "Stat | GET",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_http",
                        "fetch": [],
                        "sysName": "stat_http",
                        "name": "Stat | HTTP requests",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_post",
                        "fetch": [],
                        "sysName": "stat_post",
                        "name": "Stat | POST",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_proc",
                        "fetch": [],
                        "sysName": "stat_proc",
                        "name": "Stat | Proc exec",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_sync",
                        "fetch": [],
                        "sysName": "stat_sync",
                        "name": "Stat | SYNC Proc exec",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stat_users",
                        "fetch": [],
                        "sysName": "stat_users",
                        "name": "Stat | Users",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                    }
                ],
                "writeFields": [],
                "fields": {
                    "color_get": {
                        "id": "color_get",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "color_http": {
                        "id": "color_http",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "color_post": {
                        "id": "color_post",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "color_proc": {
                        "id": "color_proc",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "color_sync": {
                        "id": "color_sync",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "color_users": {
                        "id": "color_users",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "forecast_bill": {
                        "id": "forecast_bill",
                        "content": "Forecast bill, $",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "free_alert_counter": {
                        "id": "free_alert_counter",
                        "content": "Free alert counter",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "id": {
                        "id": "id",
                        "content": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
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
                    "is_excess": {
                        "id": "is_excess",
                        "content": "Excess plan",
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
                                "🔥 hit limits",
                                " OK"
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
                    "stat_get": {
                        "id": "stat_get",
                        "content": "Stat | GET",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "stat_http": {
                        "id": "stat_http",
                        "content": "Stat | HTTP requests",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "stat_post": {
                        "id": "stat_post",
                        "content": "Stat | POST",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "stat_proc": {
                        "id": "stat_proc",
                        "content": "Stat | Proc exec",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "stat_sync": {
                        "id": "stat_sync",
                        "content": "Stat | SYNC Proc exec",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "stat_users": {
                        "id": "stat_users",
                        "content": "Stat | Users",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "sysName": {
                        "id": "sysName",
                        "content": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
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
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellType": "background",
                        "colorCellSource": "field",
                        "colorCellField": "color_get"
                    },
                    "stat_post": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellType": "background",
                        "colorCellConst": "#f542e0",
                        "colorCellSource": "field",
                        "colorCellField": "color_post"
                    },
                    "stat_proc": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "color_proc"
                    },
                    "stat_sync": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "color_sync"
                    },
                    "stat_users": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "color_users"
                    },
                    "sysName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorRow": true
                    },
                    "is_excess": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": false
                    },
                    "color_get": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color_post": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color_proc": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color_sync": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color_users": {
                        "include": false,
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
                    "is_blocked": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "forecast_bill": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "free_alert_counter": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color_http": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorRow": false
                    },
                    "stat_http": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "color_http"
                    }
                },
                "fieldOrder": [
                    "id",
                    "sysName",
                    "owner_id",
                    "plan_id",
                    "free_alert_counter",
                    "is_blocked",
                    "is_excess",
                    "forecast_bill",
                    "stat_get",
                    "stat_post",
                    "stat_proc",
                    "stat_sync",
                    "stat_users",
                    "stat_http",
                    "color_http",
                    "color_get",
                    "color_post",
                    "color_proc",
                    "color_sync",
                    "color_users",
                    "is_sandbox",
                    "paddle_subscription_id"
                ]
            },
            "filterParams": {
                "isSorting": true,
                "isFiltering": true,
                "filterFields": {
                    "forecast_bill": {
                        "active": true,
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "name": "Forecast bill, $"
                    },
                    "is_blocked": {
                        "active": true,
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "name": "is_blocked"
                    },
                    "is_excess": {
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
                                "🔥 hit limits",
                                " OK"
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
                        "name": "Excess plan"
                    },
                    "owner_id": {
                        "active": true,
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "name": "Owner",
                        "textsearch": "fulltext"
                    },
                    "plan_id": {
                        "active": true,
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "name": "Billing plan",
                        "textsearch": "fulltext"
                    },
                    "sysName": {
                        "active": true,
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "name": "System name"
                    },
                    "id": {
                        "active": true,
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "name": "App id"
                    }
                }
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "color_get",
                "dataType": "string",
                "name": "",
                "id": "26091623775679245",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 12,
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
                "sysName": "color_http",
                "dataType": "string",
                "name": "",
                "id": "30261667244970378",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 17,
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
                "sysName": "color_post",
                "dataType": "string",
                "name": "",
                "id": "89081623775692061",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 13,
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
                "sysName": "color_proc",
                "dataType": "string",
                "name": "",
                "id": "92601623775698497",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 14,
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
                "sysName": "color_sync",
                "dataType": "string",
                "name": "",
                "id": "45481623775706832",
                "link": "",
                "group": "1623707015468",
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
                "sysName": "color_users",
                "dataType": "string",
                "name": "",
                "id": "86811623775714205",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 16,
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
                "sysName": "forecast_bill",
                "dataType": "decimal",
                "name": "Forecast bill, $",
                "id": "63341640954051997",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 24,
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
                "sysName": "free_alert_counter",
                "dataType": "number",
                "name": "Free alert counter",
                "id": "30071661159016438",
                "link": "",
                "group": "1633095201028",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
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
                "sysName": "is_excess",
                "dataType": "boolean",
                "name": "Excess plan",
                "id": "40361623748858552",
                "link": "",
                "group": "1623707015468",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "🔥 hit limits",
                        " OK"
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
                "sysName": "stat_get",
                "dataType": "number",
                "name": "Stat | GET",
                "id": "94951623707229504",
                "link": "",
                "group": "1623707015468",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "stat_http",
                "dataType": "number",
                "name": "Stat | HTTP requests",
                "id": "32051667244802942",
                "link": "",
                "group": "1623707015468",
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
                "sysName": "stat_post",
                "dataType": "number",
                "name": "Stat | POST",
                "id": "37551623707296997",
                "link": "",
                "group": "1623707015468",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "stat_proc",
                "dataType": "number",
                "name": "Stat | Proc exec",
                "id": "16611623707312286",
                "link": "",
                "group": "1623707015468",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "stat_sync",
                "dataType": "number",
                "name": "Stat | SYNC Proc exec",
                "id": "87341623707329117",
                "link": "",
                "group": "1623707015468",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
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
                "sysName": "stat_users",
                "dataType": "number",
                "name": "Stat | Users",
                "id": "76861623707270662",
                "link": "",
                "group": "1623707015468",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
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
            }
        ],
        "data": [
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Ershov",
                    "id": "pavel@directual.com",
                    "first_name": "Pavel"
                },
                "forecast_bill": 1314.86,
                "stat_sync": 2897,
                "color_proc": "#fcc5c2",
                "sysName": "directual-site",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox",
                    "description": "Sandbox for Team plan",
                    "id": "Pro-sandbox"
                },
                "paddle_subscription_id": "7783322",
                "id": "1822",
                "stat_users": 0,
                "stat_post": 1066,
                "is_sandbox": true,
                "is_excess": true,
                "stat_get": 9289,
                "stat_http": 2324,
                "stat_proc": 15041696
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "UA",
                    "last_name": "Павел",
                    "id": "donchenko.pavel@gmail.com",
                    "first_name": "Донченко"
                },
                "forecast_bill": 115.55,
                "stat_sync": 12411,
                "color_proc": "#fcc5c2",
                "sysName": "lass",
                "plan_id": {
                    "price": 429,
                    "name": "Business",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "paddle_subscription_id": "11019757",
                "id": "8909",
                "stat_users": 0,
                "stat_post": 75067,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 55227,
                "stat_http": 21871,
                "stat_proc": 4892244
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "IE",
                    "last_name": "Lykov",
                    "id": "lykovmaxim@gmail.com",
                    "first_name": "Maxim"
                },
                "forecast_bill": 62.51,
                "stat_sync": 2972,
                "sysName": "pomnimlubim",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "paddle_subscription_id": "5085019",
                "id": "3842",
                "color_post": "#fcc5c2",
                "stat_users": 0,
                "stat_post": 105350,
                "is_sandbox": true,
                "is_excess": true,
                "stat_get": 559,
                "stat_http": 1453,
                "stat_proc": 208718
            },
            {
                "free_alert_counter": 0,
                "owner_id": {
                    "id": "leonid.byakov@gmail.com",
                    "first_name": "Leonid  Byakov"
                },
                "forecast_bill": 50.62,
                "stat_sync": 10134,
                "color_proc": "#fcc5c2",
                "sysName": "hh_send_message",
                "plan_id": {
                    "price": 139,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "8277015",
                "id": "2894",
                "color_post": "#fcc5c2",
                "stat_users": 0,
                "stat_post": 93269,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 1698,
                "stat_http": 17085,
                "stat_proc": 642919
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "RU",
                    "last_name": "Garifullin",
                    "id": "m.garifullin.f@gmail.com",
                    "first_name": "Marat"
                },
                "forecast_bill": 48.78,
                "stat_sync": 58366,
                "color_proc": "#fcc5c2",
                "sysName": "connectiveconfiguratortcp",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox",
                    "description": "Sandbox for Team plan",
                    "id": "Pro-sandbox"
                },
                "id": "12947",
                "stat_users": 0,
                "stat_post": 271,
                "color_sync": "#fcc5c2",
                "is_sandbox": true,
                "is_excess": true,
                "stat_get": 5253,
                "stat_http": 0,
                "stat_proc": 58336
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "color_get": "#fcc5c2",
                "owner_id": {
                    "country": "RU",
                    "last_name": "ЕВИПДО",
                    "id": "edueduedoo@gmail.com",
                    "first_name": "Институт"
                },
                "forecast_bill": 47.62,
                "stat_sync": 94897,
                "color_proc": "#fcc5c2",
                "sysName": "evidpo",
                "plan_id": {
                    "price": 139,
                    "name": "Pro",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "id": "13775",
                "stat_users": 0,
                "stat_post": 7018,
                "color_sync": "#fcc5c2",
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 514872,
                "stat_http": 1027,
                "stat_proc": 632775
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "color_get": "#fcc5c2",
                "owner_id": {
                    "country": "IL",
                    "last_name": "Bagdasarian",
                    "id": "bagdaer@gmail.com",
                    "first_name": "Erik"
                },
                "forecast_bill": 43.02,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "dentalbase",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12200",
                "stat_users": 0,
                "stat_post": 2595,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 252445,
                "stat_http": 1387,
                "stat_proc": 112465
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "RU",
                    "last_name": "UDALOV",
                    "id": "u@modapogoda.ru",
                    "first_name": "YURI"
                },
                "forecast_bill": 31.38,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "mp",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6791951",
                "id": "5283",
                "stat_users": 0,
                "stat_post": 184,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 1683,
                "stat_http": 18520,
                "stat_proc": 379967
            },
            {
                "free_alert_counter": 0,
                "color_get": "#fcc5c2",
                "owner_id": {
                    "country": "IL",
                    "last_name": "Bagdasarian",
                    "id": "bagdaer@gmail.com",
                    "first_name": "Erik"
                },
                "forecast_bill": 22.24,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "dntl",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "12422",
                "stat_users": 0,
                "stat_post": 102,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 45877,
                "stat_http": 21,
                "stat_proc": 165773
            },
            {
                "free_alert_counter": 4,
                "color_get": "#fcc5c2",
                "owner_id": {
                    "country": "RU",
                    "last_name": "Ёмкость",
                    "id": "yomkost.app@gmail.com",
                    "first_name": "Команда сети"
                },
                "forecast_bill": 17.07,
                "stat_sync": 29,
                "color_proc": "#fcc5c2",
                "sysName": "yomkost-adm",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "13519",
                "color_post": "#fcc5c2",
                "stat_users": 0,
                "stat_post": 14942,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 55020,
                "stat_http": 526,
                "stat_proc": 3158
            },
            {
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "NZ",
                    "last_name": "Mile",
                    "id": "techops_team@finalmile.io",
                    "first_name": "Final"
                },
                "forecast_bill": 5.05,
                "stat_sync": 0,
                "sysName": "final-mile",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8864170",
                "id": "6773",
                "color_post": "#fcc5c2",
                "stat_users": 0,
                "stat_post": 6402,
                "is_excess": true,
                "stat_get": 342,
                "stat_http": 0,
                "stat_proc": 0
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "BR",
                    "last_name": "Nin",
                    "id": "othon.nin@1purecbd.com",
                    "first_name": "Othon"
                },
                "forecast_bill": 4.12,
                "stat_sync": 23614,
                "sysName": "medicos",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 0,
                    "name": "Pro-sandbox-AppSumo",
                    "description": "Special AppSumo plan",
                    "id": "Pro-sandbox-AppSumo"
                },
                "id": "12043",
                "stat_users": 0,
                "stat_post": 4975,
                "is_sandbox": true,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 9581,
                "stat_proc": 47474
            },
            {
                "is_blocked": false,
                "free_alert_counter": 4,
                "owner_id": {
                    "country": "RU",
                    "last_name": "word",
                    "id": "novozhilov@code-word.ru",
                    "first_name": "Code"
                },
                "forecast_bill": 4.1,
                "stat_sync": 208,
                "color_proc": "#fcc5c2",
                "sysName": "dev-jj",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "12824",
                "stat_users": 0,
                "stat_post": 104,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 1609,
                "stat_proc": 37037
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "NL",
                    "last_name": "development",
                    "id": "alche.my.devmail@gmail.com",
                    "first_name": "alchemy"
                },
                "forecast_bill": 3.37,
                "stat_sync": 1664,
                "color_proc": "#fcc5c2",
                "sysName": "rvpnprod",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "13230",
                "stat_users": 0,
                "stat_post": 1742,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 3121,
                "stat_proc": 53403
            },
            {
                "is_blocked": false,
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Baev",
                    "id": "artosiris@gmail.com",
                    "first_name": "Egor"
                },
                "forecast_bill": 2,
                "stat_sync": 0,
                "sysName": "artbot",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "6844185",
                "id": "6155",
                "color_post": "#fcc5c2",
                "stat_users": 0,
                "stat_post": 4550,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 5011,
                "stat_http": 1553,
                "stat_proc": 15793
            },
            {
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "BY",
                    "last_name": "Platform",
                    "id": "investraplatform@gmail.com",
                    "first_name": "Investra"
                },
                "forecast_bill": 1.92,
                "stat_sync": 0,
                "sysName": "investra",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14658",
                "stat_post": 271,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 5979,
                "stat_http": 4472,
                "stat_proc": 12446
            },
            {
                "free_alert_counter": 4,
                "owner_id": {
                    "country": "RU",
                    "last_name": "Орлов",
                    "id": "alexvorlo@gmail.com",
                    "first_name": "Александр"
                },
                "forecast_bill": 1.58,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "uplinestudio",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "paddle_subscription_id": "10711771",
                "id": "11210",
                "stat_users": 0,
                "stat_post": 0,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 74,
                "stat_proc": 21518
            },
            {
                "free_alert_counter": 4,
                "owner_id": {
                    "last_name": "Mozer",
                    "id": "a.mozer@directual.com",
                    "first_name": "Anna"
                },
                "forecast_bill": 1.4,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "vitrina-clone-dev",
                "color_http": "#fcc5c2",
                "id": "6867",
                "stat_users": 0,
                "stat_post": 0,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 1487,
                "stat_proc": 9497
            },
            {
                "is_blocked": false,
                "free_alert_counter": 4,
                "owner_id": {
                    "country": "RU",
                    "last_name": "word",
                    "id": "novozhilov@code-word.ru",
                    "first_name": "Code"
                },
                "forecast_bill": 1.23,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "dev-moda",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "11433",
                "stat_users": 0,
                "stat_post": 2,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 560,
                "stat_proc": 14730
            },
            {
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "RU",
                    "last_name": "Parfenov",
                    "id": "valery.v.parfenov@yandex.ru",
                    "first_name": "Valery"
                },
                "forecast_bill": 0.98,
                "stat_sync": 270,
                "color_proc": "#fcc5c2",
                "sysName": "tendercrm",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8756334",
                "id": "9301",
                "stat_users": 0,
                "stat_post": 153,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 4441,
                "stat_http": 1034,
                "stat_proc": 36529
            },
            {
                "free_alert_counter": 4,
                "color_get": "#fcc5c2",
                "owner_id": {
                    "country": "RU",
                    "last_name": "Smorodin",
                    "id": "sa@iclect.ru",
                    "first_name": "Andrey"
                },
                "forecast_bill": 0.92,
                "stat_sync": 0,
                "sysName": "hslon",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "13150",
                "stat_users": 0,
                "stat_post": 0,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 13404,
                "stat_http": 0,
                "stat_proc": 0
            },
            {
                "is_blocked": false,
                "free_alert_counter": 4,
                "owner_id": {
                    "country": "RU",
                    "last_name": "Dims",
                    "id": "dimscashback@gmail.com",
                    "first_name": "Dims"
                },
                "forecast_bill": 0.68,
                "stat_sync": 0,
                "color_proc": "#fcc5c2",
                "sysName": "cashback",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "id": "8868",
                "stat_users": 0,
                "stat_post": 0,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 0,
                "stat_proc": 11055
            },
            {
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "KG",
                    "last_name": "kadyrov",
                    "id": "cmo@traffic-retail.ru",
                    "first_name": "adel"
                },
                "forecast_bill": 0.62,
                "stat_sync": 0,
                "sysName": "traffic-retail",
                "color_http": "#fcc5c2",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "13904",
                "stat_users": 0,
                "stat_post": 0,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 0,
                "stat_http": 3532,
                "stat_proc": 10739
            },
            {
                "is_blocked": false,
                "free_alert_counter": 4,
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Baev",
                    "id": "artosiris@gmail.com",
                    "first_name": "Egor"
                },
                "forecast_bill": 0.52,
                "stat_sync": 536,
                "sysName": "art",
                "plan_id": {
                    "price": 0,
                    "name": "Free",
                    "description": "Perfect for learning the basics of Directual",
                    "id": "FREE"
                },
                "paddle_subscription_id": "9915537",
                "id": "4509",
                "color_post": "#fcc5c2",
                "stat_users": 0,
                "stat_post": 662,
                "color_sync": "#fcc5c2",
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 195,
                "stat_http": 134,
                "stat_proc": 2584
            },
            {
                "free_alert_counter": 0,
                "owner_id": {
                    "country": "BG",
                    "last_name": "Brusentsev",
                    "id": "directual@brusentsev.ru",
                    "first_name": "Aleksandr"
                },
                "forecast_bill": 0.39,
                "stat_sync": 9,
                "color_proc": "#fcc5c2",
                "sysName": "archivarius",
                "plan_id": {
                    "price": 39,
                    "name": "Startup",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "id": "14830",
                "stat_post": 349,
                "is_sandbox": false,
                "is_excess": true,
                "stat_get": 7386,
                "stat_http": 0,
                "stat_proc": 34360
            }
        ],
        "totalPages": 518,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "color_get",
                1395053
            ],
            [
                "color_http",
                1395053
            ],
            [
                "color_post",
                1395053
            ],
            [
                "color_proc",
                1395053
            ],
            [
                "color_sync",
                1395053
            ],
            [
                "color_users",
                1395053
            ],
            [
                "forecast_bill",
                1395053
            ],
            [
                "free_alert_counter",
                1395053
            ],
            [
                "id",
                1395053
            ],
            [
                "is_blocked",
                1395053
            ],
            [
                "is_excess",
                1395053
            ],
            [
                "is_sandbox",
                1395053
            ],
            [
                "owner_id.country",
                1282551
            ],
            [
                "owner_id.first_name",
                1282551
            ],
            [
                "owner_id.id",
                1282551
            ],
            [
                "owner_id.last_name",
                1282551
            ],
            [
                "paddle_subscription_id",
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
                "stat_get",
                1395053
            ],
            [
                "stat_http",
                1395053
            ],
            [
                "stat_post",
                1395053
            ],
            [
                "stat_proc",
                1395053
            ],
            [
                "stat_sync",
                1395053
            ],
            [
                "stat_users",
                1395053
            ],
            [
                "sysName",
                1395053
            ]
        ],
        "writeFields": [],
        "structures": {
            "1282551": {
                "networkID": 1822,
                "sysName": "Cloud_users",
                "name": "👨🏻 Cloud users",
                "id": 1282551,
                "dateCreated": "2019-10-05T15:17:37Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"note\",\"dataType\":\"string\",\"name\":\"Note\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"first_name\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_name\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"locale\",\"dataType\":\"string\",\"name\":\"locale\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"Source\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_id\",\"dataType\":\"link\",\"name\":\"Request ID\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"array\":false},{\"sysName\":\"ip\",\"dataType\":\"string\",\"name\":\"ip\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"Country\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"social_register\",\"dataType\":\"boolean\",\"name\":\"social_register\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"register_date\",\"dataType\":\"date\",\"name\":\"Register date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"country_id\",\"dataType\":\"link\",\"name\":\"Country link (ISO)\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"raw_id\",\"dataType\":\"link\",\"name\":\"Raw ID\",\"id\":\"39691642000254942\",\"link\":\"cloud_users_ids\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"last_activity_date\",\"dataType\":\"date\",\"name\":\"Last activity date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"apps\",\"dataType\":\"arrayLink\",\"name\":\"Apps\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_sl\",\"dataType\":\"number\",\"name\":\"Number of SLs\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_structures\",\"dataType\":\"number\",\"name\":\"Number of structures\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_scenarios\",\"dataType\":\"number\",\"name\":\"Number of scenarios\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logged_in\",\"dataType\":\"boolean\",\"name\":\"Have logged in\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"number_of_apps\",\"dataType\":\"number\",\"name\":\"Number of apps\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"today_stat_id\",\"dataType\":\"link\",\"name\":\"Today stat link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"team_ids\",\"dataType\":\"arrayLink\",\"name\":\"Teams\",\"id\":\"26441632905559721\",\"link\":\"Teams\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_team_plans\",\"dataType\":\"arrayLink\",\"name\":\"Current team plans\",\"id\":\"45021632906172898\",\"link\":\"TeamTariffs\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isLTD_user\",\"dataType\":\"boolean\",\"name\":\"LTD user\",\"id\":\"13531632918815271\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Paid_app_plan_user\",\"dataType\":\"boolean\",\"name\":\"Paid app plan user\",\"id\":\"22421632918830874\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_app_plans\",\"dataType\":\"arrayLink\",\"name\":\"Current app plans\",\"id\":\"54321632918865581\",\"link\":\"Tariff\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"creditCardIsLinked\",\"dataType\":\"boolean\",\"name\":\"CreditCardIsLinked?\",\"id\":\"42541642072780075\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"mailchimp_tags\",\"dataType\":\"string\",\"name\":\"Mailchimp labels\",\"id\":\"97421570379132976\",\"link\":null,\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"mailchimp_segments\",\"dataType\":\"array\",\"name\":\"Mailchimp Segments\",\"id\":\"84981587457354001\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"is_country_synced\",\"dataType\":\"boolean\",\"name\":\"is_country_synced\",\"id\":\"31991605527320825\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"app_description\",\"dataType\":\"string\",\"name\":\"App description\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"customer_type\",\"dataType\":\"string\",\"name\":\"Customer type\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"utm_source\",\"dataType\":\"string\",\"name\":\"utm_source\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"utm_medium\",\"dataType\":\"string\",\"name\":\"utm_medium\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"utm_campaign\",\"dataType\":\"string\",\"name\":\"utm_campaign\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_ids\",\"dataType\":\"arrayLink\",\"name\":\"Surveys\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ref\",\"dataType\":\"string\",\"name\":\"ref\",\"id\":\"68451626349155030\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"storage\",\"dataType\":\"json\",\"name\":\"Survey storage\",\"id\":\"86371627198748459\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_step_1_raw\",\"dataType\":\"string\",\"name\":\"Which describes you best\",\"id\":\"24041632732046851\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_step_2_raw\",\"dataType\":\"string\",\"name\":\"Whom do you want to build apps for\",\"id\":\"57151632732047604\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_step_3_raw\",\"dataType\":\"string\",\"name\":\"How did you know about Directual\",\"id\":\"98341632732048278\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"survey_is_aborted\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"75331632901439193\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_account\",\"dataType\":\"boolean\",\"name\":\"Notify about Account\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_academy\",\"dataType\":\"boolean\",\"name\":\"Notify about Academy\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"notifications_blog\",\"dataType\":\"boolean\",\"name\":\"Notify about Blog\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"unsubscribed\",\"dataType\":\"boolean\",\"name\":\"unsubscribed\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"unsibscribed_reason\",\"dataType\":\"string\",\"name\":\"unsibscribed_reason\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"admin_notification_text\",\"dataType\":\"string\",\"name\":\"admin_notification_text\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"whom_to_alert\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"MailerLite_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"73551663229204538\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"MailerLite_MAIN\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"28941663229219515\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"MailerLite_Onboarding\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"16811663229232291\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email_hash\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gravatar\",\"dataType\":\"string\",\"name\":\"Gravatar\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"gravatar_pic\",\"dataType\":\"file\",\"name\":\" \",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_suspended\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"97901644220993828\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"69331644221263888\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"99591644221269393\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_failed\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"10721644221276956\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"update_url\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"44161644221281677\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"basic_promo_code\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"62581644246255699\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"wallet_transactions\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"53431648999094908\",\"link\":\"appwallet\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"wallet_balance\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"60951648999103921\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paid_apps_ids\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"96621663160984409\",\"link\":\"Apps\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
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
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"price\",\"dataType\":\"decimal\",\"name\":\"price\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"visible\",\"dataType\":\"boolean\",\"name\":\"visible\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"settings\",\"dataType\":\"json\",\"name\":\"settings\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"description\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"name\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"is_default\",\"dataType\":\"boolean\",\"name\":\"is_default\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paddle_id\",\"dataType\":\"string\",\"name\":\"paddle_id\",\"id\":\"77771590089291447\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"available_for_admin\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"97171633096560133\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
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
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"App id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"is_hidden\",\"name\":\"is_hidden\",\"dataType\":\"boolean\",\"id\":\"10251637661442776\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"raw_app_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"12131623746301658\",\"link\":\"AppInfo\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"paddle_subscription_id\",\"name\":\"Paddle ID\",\"dataType\":\"string\",\"id\":\"13631633089941494\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"name\",\"name\":\"App name\",\"dataType\":\"string\",\"id\":\"13661623706989350\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"stat_proc\",\"name\":\"Stat | Proc exec\",\"dataType\":\"number\",\"id\":\"16611623707312286\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"balance\",\"name\":\"Credits\",\"dataType\":\"decimal\",\"id\":\"20731633354617743\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"next_payment\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"23671647335096237\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isDowngraded\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"26051647940518677\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_get\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"26091623775679245\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"paddle_update_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"26191633364756662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"sysName\",\"name\":\"System name\",\"dataType\":\"string\",\"id\":\"27541623706978377\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"free_alert_counter\",\"name\":\"Free alert counter\",\"dataType\":\"number\",\"id\":\"30071661159016438\",\"link\":\"\",\"group\":\"1633095201028\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_http\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"30261667244970378\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isLegacy\",\"name\":\"Legacy app\",\"dataType\":\"boolean\",\"id\":\"30351623746607632\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"stat_http\",\"name\":\"Stat | HTTP requests\",\"dataType\":\"number\",\"id\":\"32051667244802942\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"stat_post\",\"name\":\"Stat | POST\",\"dataType\":\"number\",\"id\":\"37551623707296997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"38791623706999272\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"next_billing_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"39091647335092236\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"is_excess\",\"name\":\"Excess plan\",\"dataType\":\"boolean\",\"id\":\"40361623748858552\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"🔥 hit limits\",\" OK\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"owner_id\",\"name\":\"Owner\",\"dataType\":\"link\",\"id\":\"41841623707118206\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"comments\",\"name\":\"Comments\",\"dataType\":\"arrayLink\",\"id\":\"44101633194013799\",\"link\":\"admin_comments\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"color_sync\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"45481623775706832\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"merchant_event_ids\",\"name\":\"Paddle events\",\"dataType\":\"arrayLink\",\"id\":\"46441623707088217\",\"link\":\"MerchantEvent\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"is_sandbox\",\"name\":\"is_sandbox\",\"dataType\":\"boolean\",\"id\":\"47331625209998636\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"next_ondemand_payment\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"50071647334246527\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"previous_owner_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"50981666709963736\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"developer_ids\",\"name\":\"Developers\",\"dataType\":\"arrayLink\",\"id\":\"54301623707131642\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"next_ondemand_billing_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"54391647334223782\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"forecast_bill\",\"name\":\"Forecast bill, $\",\"dataType\":\"decimal\",\"id\":\"63341640954051997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"events\",\"name\":\"App events\",\"dataType\":\"arrayLink\",\"id\":\"67551637607379984\",\"link\":\"appEvents\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"legacy_billing\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"67651647899758711\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isTeam\",\"name\":\"Team app\",\"dataType\":\"boolean\",\"id\":\"68981623707196589\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"reports\",\"name\":\"Billing reports\",\"dataType\":\"arrayLink\",\"id\":\"71551633353882284\",\"link\":\"UsageHistory\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"plan_id\",\"name\":\"Billing plan\",\"dataType\":\"link\",\"id\":\"74161623707026653\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"new_billing\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"75171645533130519\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"previous_plan_id\",\"name\":\"Previous plan\",\"dataType\":\"link\",\"id\":\"75791641032667863\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"change_plan_request_ids\",\"name\":\"Plan change requests\",\"dataType\":\"arrayLink\",\"id\":\"76611623707045935\",\"link\":\"ChangeTariffRequests\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"stat_users\",\"name\":\"Stat | Users\",\"dataType\":\"number\",\"id\":\"76861623707270662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"79011623748876085\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"is_blocked\",\"name\":\"is_blocked\",\"dataType\":\"boolean\",\"id\":\"82901633095583058\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"admin_requests_ids\",\"name\":\"Admin actions\",\"dataType\":\"arrayLink\",\"id\":\"85821633095205778\",\"link\":\"admin_app_change_requests\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"color_users\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"86811623775714205\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"stat_sync\",\"name\":\"Stat | SYNC Proc exec\",\"dataType\":\"number\",\"id\":\"87341623707329117\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"color_post\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"89081623775692061\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"new_billing_plan\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"91761645533150600\",\"link\":\"Tariff\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"color_proc\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"92601623775698497\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"team_id\",\"name\":\"Team\",\"dataType\":\"link\",\"id\":\"94291623707210181\",\"link\":\"Teams\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"stat_get\",\"name\":\"Stat | GET\",\"dataType\":\"number\",\"id\":\"94951623707229504\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"is_cancelled\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"95451637666256272\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"raw_usage_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"96391623747858362\",\"link\":\"UsageHistory\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"paddle_subscription_status\",\"name\":\"Paddle Status\",\"dataType\":\"string\",\"id\":\"99931633090832671\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
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
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
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
        "sl": "vkform",
        "formName": "",
        "formDesc": "",
        "formButton": "",
        "placeholder": "",
        "maxWidth": "601",
        "formButtonResubmit": null,
        "params": {
            "result": {
                "resultTitleField": null,
                "resultMessageField": null,
                "isSuccessField": null
            },
            "auth": {
                "isPerson": true,
                "userIdField": "user"
            },
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "@dateChanged",
                        "fetch": [],
                        "sysName": "@dateChanged",
                        "name": "date changed",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "@dateCreated",
                        "fetch": [],
                        "sysName": "@dateCreated",
                        "name": "date created",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "@who",
                        "fetch": [],
                        "sysName": "@who",
                        "name": "who changed",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "autor",
                        "fetch": [],
                        "sysName": "autor",
                        "name": "Художник",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "date_start",
                        "fetch": [],
                        "sysName": "date_start",
                        "name": "Старт торгов",
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
                            "dateFormat": "DD MMMM",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Дополнительная информация о картине (необязательно)",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "duration",
                        "fetch": [],
                        "sysName": "duration",
                        "name": "Продолжительность торгов",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "duration"
                    },
                    {
                        "fieldSysName": "height",
                        "fetch": [],
                        "sysName": "height",
                        "name": "Высота, см",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
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
                        "fieldSysName": "location",
                        "fetch": [],
                        "sysName": "location",
                        "name": "Город в котором находится лот",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "material",
                        "fetch": [],
                        "sysName": "material",
                        "name": "Материал",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "materials"
                    },
                    {
                        "fieldSysName": "medium",
                        "fetch": [],
                        "sysName": "medium",
                        "name": "Техника",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "mediums"
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo2",
                        "fetch": [],
                        "sysName": "photo2",
                        "name": "Дополнительное фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo3",
                        "fetch": [],
                        "sysName": "photo3",
                        "name": "Дополнительное фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "shipping_cost",
                        "fetch": [],
                        "sysName": "shipping_cost",
                        "name": "Стоимость доставки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "shipping"
                    },
                    {
                        "fieldSysName": "start",
                        "fetch": [],
                        "sysName": "start",
                        "name": "Стартовая цена",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "startPrice",
                        "fetch": [],
                        "sysName": "startPrice",
                        "name": "Стартовая цена",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "startprice"
                    },
                    {
                        "fieldSysName": "step",
                        "fetch": [],
                        "sysName": "step",
                        "name": "Шаг торгов",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "steps"
                    },
                    {
                        "fieldSysName": "subject",
                        "fetch": [],
                        "sysName": "subject",
                        "name": "Жанр",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subjects"
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Название картины",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "user",
                        "fetch": [],
                        "sysName": "user",
                        "name": "Пользователь",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "width",
                        "fetch": [],
                        "sysName": "width",
                        "name": "Ширина, см",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "autor",
                        "fetch": [],
                        "sysName": "autor",
                        "name": "Художник",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "date_start",
                        "fetch": [],
                        "sysName": "date_start",
                        "name": "Старт торгов",
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
                            "dateFormat": "DD MMMM",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Дополнительная информация о картине (необязательно)",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "duration",
                        "fetch": [],
                        "sysName": "duration",
                        "name": "Продолжительность торгов",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "duration"
                    },
                    {
                        "fieldSysName": "height",
                        "fetch": [],
                        "sysName": "height",
                        "name": "Высота, см",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
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
                        "fieldSysName": "location",
                        "fetch": [],
                        "sysName": "location",
                        "name": "Город в котором находится лот",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "material",
                        "fetch": [],
                        "sysName": "material",
                        "name": "Материал",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "materials"
                    },
                    {
                        "fieldSysName": "medium",
                        "fetch": [],
                        "sysName": "medium",
                        "name": "Техника",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "mediums"
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo2",
                        "fetch": [],
                        "sysName": "photo2",
                        "name": "Дополнительное фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo3",
                        "fetch": [],
                        "sysName": "photo3",
                        "name": "Дополнительное фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "shipping_cost",
                        "fetch": [],
                        "sysName": "shipping_cost",
                        "name": "Стоимость доставки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "shipping"
                    },
                    {
                        "fieldSysName": "start",
                        "fetch": [],
                        "sysName": "start",
                        "name": "Стартовая цена",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "startPrice",
                        "fetch": [],
                        "sysName": "startPrice",
                        "name": "Стартовая цена",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "startprice"
                    },
                    {
                        "fieldSysName": "step",
                        "fetch": [],
                        "sysName": "step",
                        "name": "Шаг торгов",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "steps"
                    },
                    {
                        "fieldSysName": "subject",
                        "fetch": [],
                        "sysName": "subject",
                        "name": "Жанр",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subjects"
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Название картины",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "user",
                        "fetch": [],
                        "sysName": "user",
                        "name": "Пользователь",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "width",
                        "fetch": [],
                        "sysName": "width",
                        "name": "Ширина, см",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "@dateChanged": {
                        "id": "@dateChanged",
                        "content": "date changed",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "@dateCreated": {
                        "id": "@dateCreated",
                        "content": "date created",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "@who": {
                        "id": "@who",
                        "content": "who changed",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "autor": {
                        "id": "autor",
                        "content": "Художник",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "date_start": {
                        "id": "date_start",
                        "content": "Старт торгов",
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
                            "dateFormat": "DD MMMM",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "description": {
                        "id": "description",
                        "content": "Дополнительная информация о картине (необязательно)",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "duration": {
                        "id": "duration",
                        "content": "Продолжительность торгов",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "duration"
                    },
                    "height": {
                        "id": "height",
                        "content": "Высота, см",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
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
                        "link": ""
                    },
                    "location": {
                        "id": "location",
                        "content": "Город в котором находится лот",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "material": {
                        "id": "material",
                        "content": "Материал",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "materials"
                    },
                    "medium": {
                        "id": "medium",
                        "content": "Техника",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "mediums"
                    },
                    "photo": {
                        "id": "photo",
                        "content": "Фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "photo2": {
                        "id": "photo2",
                        "content": "Дополнительное фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "photo3": {
                        "id": "photo3",
                        "content": "Дополнительное фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "shipping_cost": {
                        "id": "shipping_cost",
                        "content": "Стоимость доставки",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "shipping"
                    },
                    "start": {
                        "id": "start",
                        "content": "Стартовая цена",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "startPrice": {
                        "id": "startPrice",
                        "content": "Стартовая цена",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "startprice"
                    },
                    "step": {
                        "id": "step",
                        "content": "Шаг торгов",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "steps"
                    },
                    "subject": {
                        "id": "subject",
                        "content": "Жанр",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subjects"
                    },
                    "title": {
                        "id": "title",
                        "content": "Название картины",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "user": {
                        "id": "user",
                        "content": "Пользователь",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser"
                    },
                    "width": {
                        "id": "width",
                        "content": "Ширина, см",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "autor": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "date_start": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "required": false,
                        "defaultValue": ""
                    },
                    "description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "duration": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": "1",
                        "required": false,
                        "disableEditing": true
                    },
                    "height": {
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
                    "location": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "material": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "defaultValueOn": true,
                        "defaultValue": "Paper"
                    },
                    "medium": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "defaultValueOn": true,
                        "defaultValue": "Oil"
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "photo_add": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "seller": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "shipping_cost": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "defaultValueOn": true,
                        "defaultValue": "250"
                    },
                    "start": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "defaultValue": "1000",
                        "required": false
                    },
                    "step": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "defaultValueOn": true,
                        "defaultValue": "300"
                    },
                    "subject": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": "Landscape",
                        "required": true
                    },
                    "title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "user": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "width": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "@dateChanged": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@dateCreated": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@who": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "startPrice": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": "900",
                        "required": true
                    },
                    "photo2": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "(дополнительные фото добавлять необязательно)"
                    },
                    "photo3": {
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
                            "title",
                            "autor",
                            "photo",
                            "height",
                            "width",
                            "material",
                            "medium",
                            "subject",
                            "location",
                            "shipping_cost",
                            "startPrice",
                            "step",
                            "duration",
                            "start",
                            "date_start",
                            "description",
                            "photo2",
                            "photo3",
                            "id",
                            "user",
                            "@dateChanged",
                            "@dateCreated",
                            "@who"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ]
            },
            "fields": {
                "autor": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "date_start": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "required": false,
                    "defaultValue": ""
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "duration": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": "1",
                    "required": false,
                    "disableEditing": true,
                    "searchData": [
                        {
                            "key": "1",
                            "value": "1 день"
                        },
                        {
                            "key": "3",
                            "value": "3 дня"
                        }
                    ]
                },
                "height": {
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
                "location": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "material": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "defaultValueOn": true,
                    "defaultValue": "Paper",
                    "searchData": [
                        {
                            "key": "Canvas",
                            "value": "Холст"
                        },
                        {
                            "key": "Cardboard",
                            "value": "Картон"
                        },
                        {
                            "key": "Paper",
                            "value": "Бумага"
                        },
                        {
                            "key": "Canvas on cardboard",
                            "value": "Холст на картоне"
                        },
                        {
                            "key": "Canvas on hardboard",
                            "value": "Холст на оргалите"
                        },
                        {
                            "key": "Hardboard",
                            "value": "Оргалит"
                        },
                        {
                            "key": "Wood",
                            "value": "Дерево"
                        },
                        {
                            "key": "Canvas without stretcher",
                            "value": "Холст без подрамника"
                        }
                    ]
                },
                "medium": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "defaultValueOn": true,
                    "defaultValue": "Oil",
                    "searchData": [
                        {
                            "key": "Oil",
                            "value": "Масло"
                        },
                        {
                            "key": "Acrylic",
                            "value": "Акрил"
                        },
                        {
                            "key": " Watercolor",
                            "value": "Акварель"
                        },
                        {
                            "key": "Lithography",
                            "value": "Литография"
                        },
                        {
                            "key": "Etching",
                            "value": "Офорт"
                        },
                        {
                            "key": "Pastel",
                            "value": "Пастель"
                        },
                        {
                            "key": "Graphite",
                            "value": "Карандаш"
                        },
                        {
                            "key": "Ink",
                            "value": "Чернила"
                        },
                        {
                            "key": "Indian ink",
                            "value": "Тушь"
                        },
                        {
                            "key": "Tempera",
                            "value": "Темпера"
                        },
                        {
                            "key": "Watercolor",
                            "value": "Акварель"
                        },
                        {
                            "key": "Gouache",
                            "value": "Гуашь"
                        }
                    ]
                },
                "photo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "photo_add": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "seller": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "shipping_cost": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "defaultValueOn": true,
                    "defaultValue": "250",
                    "searchData": [
                        {
                            "key": "150",
                            "value": "120-150 руб. (Заказная бандероль)"
                        },
                        {
                            "key": "250",
                            "value": "200-250 руб. (Заказная бандероль или ПВЗ СДЕК до склада)"
                        },
                        {
                            "key": "350",
                            "value": "300-350 руб. (Посылка 1-класса по РФ или СДЕК)"
                        },
                        {
                            "key": "450",
                            "value": "400-450 руб. (Ценная посылка по РФ или СДЕК)"
                        },
                        {
                            "key": "0",
                            "value": "Бесплатная доставка за счет продавца"
                        }
                    ]
                },
                "start": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "defaultValue": "1000",
                    "required": false
                },
                "step": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "defaultValueOn": true,
                    "defaultValue": "300",
                    "searchData": [
                        {
                            "key": "100",
                            "value": "100"
                        },
                        {
                            "key": "300",
                            "value": "300"
                        },
                        {
                            "key": "500",
                            "value": "500"
                        }
                    ]
                },
                "subject": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": "Landscape",
                    "required": true,
                    "searchData": [
                        {
                            "key": "Portrait",
                            "value": "Портрет"
                        },
                        {
                            "key": "Landscape",
                            "value": "Пейзаж"
                        },
                        {
                            "key": "Seascape",
                            "value": "Морской пейзаж"
                        },
                        {
                            "key": "Genre",
                            "value": "Жанровая композиция"
                        },
                        {
                            "key": "Cityscape",
                            "value": "Городской пейзаж"
                        },
                        {
                            "key": "Still Life",
                            "value": "Натюрморт"
                        },
                        {
                            "key": "Animals",
                            "value": "Животные"
                        },
                        {
                            "key": "Nu",
                            "value": "Ню"
                        }
                    ]
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "user": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "width": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "@dateChanged": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@dateCreated": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@who": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "startPrice": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": "900",
                    "required": true,
                    "searchData": [
                        {
                            "key": "500",
                            "value": "500"
                        },
                        {
                            "key": "750",
                            "value": "750"
                        },
                        {
                            "key": "900",
                            "value": "900"
                        },
                        {
                            "key": "1000",
                            "value": "1000"
                        },
                        {
                            "key": "1100",
                            "value": "1100"
                        },
                        {
                            "key": "1200",
                            "value": "1200"
                        },
                        {
                            "key": "1300",
                            "value": "1300"
                        },
                        {
                            "key": "1400",
                            "value": "1400"
                        },
                        {
                            "key": "1500",
                            "value": "1500"
                        },
                        {
                            "key": "1600",
                            "value": "1600"
                        },
                        {
                            "key": "1700",
                            "value": "1700"
                        },
                        {
                            "key": "1800",
                            "value": "1800"
                        },
                        {
                            "key": "1900",
                            "value": "1900"
                        },
                        {
                            "key": "2000",
                            "value": "2000"
                        },
                        {
                            "key": "2100",
                            "value": "2100"
                        },
                        {
                            "key": "2200",
                            "value": "2200"
                        },
                        {
                            "key": "2300",
                            "value": "2300"
                        },
                        {
                            "key": "2400",
                            "value": "2400"
                        },
                        {
                            "key": "2500",
                            "value": "2500"
                        },
                        {
                            "key": "2600",
                            "value": "2600"
                        },
                        {
                            "key": "2700",
                            "value": "2700"
                        },
                        {
                            "key": "2800",
                            "value": "2800"
                        },
                        {
                            "key": "2900",
                            "value": "2900"
                        }
                    ]
                },
                "photo2": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "(дополнительные фото добавлять необязательно)"
                },
                "photo3": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "resultScreen": {
                "successMessageTitle": "Ваш лот сохранен в черновики!",
                "successMessage": "<a href=\"/listings?\">Пожалуйста перейдите в раздел \"Мои лоты\", проверьте правильность заполнения и отправьте лот на публикацию.</a> ",
                "disableResubmit": true
            }
        },
        "fileds": [
            {
                "sysName": "autor",
                "dataType": "string",
                "name": "Художник",
                "id": "52591668795241798",
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
                "sysName": "date_start",
                "dataType": "date",
                "name": "Старт торгов",
                "id": "84381668796707345",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 13,
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
                    "dateFormat": "DD MMMM",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
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
                "sysName": "description",
                "dataType": "string",
                "name": "Дополнительная информация о картине (необязательно)",
                "id": "86421668796557336",
                "link": null,
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
                "sysName": "duration",
                "dataType": "link",
                "name": "Продолжительность торгов",
                "id": "21691668796678338",
                "link": "duration",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 12,
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
                "sysName": "height",
                "dataType": "decimal",
                "name": "Высота, см",
                "id": "98081668795242578",
                "link": "",
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
            {
                "sysName": "location",
                "dataType": "string",
                "name": "Город в котором находится лот",
                "id": "99121668796118659",
                "link": "",
                "group": "0",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "material",
                "dataType": "link",
                "name": "Материал",
                "id": "58521668795956666",
                "link": "materials",
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
                "sysName": "medium",
                "dataType": "link",
                "name": "Техника",
                "id": "51311668795971231",
                "link": "mediums",
                "group": "0",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "photo",
                "dataType": "file",
                "name": "Фото",
                "id": "66381668796783813",
                "link": "",
                "group": "1669241429795",
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
                "format": "image",
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
                "sysName": "photo2",
                "dataType": "file",
                "name": "Дополнительное фото",
                "id": "57081669241467909",
                "link": "",
                "group": "1669241429795",
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
                "format": "image",
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
                "sysName": "photo3",
                "dataType": "file",
                "name": "Дополнительное фото",
                "id": "25181669241486806",
                "link": "",
                "group": "1669241429795",
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
                "format": "image",
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
                "sysName": "shipping_cost",
                "dataType": "link",
                "name": "Стоимость доставки",
                "id": "58661668796147344",
                "link": "shipping",
                "group": "0",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "start",
                "dataType": "decimal",
                "name": "Стартовая цена",
                "id": "30761668796610717",
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
                "sysName": "startPrice",
                "dataType": "link",
                "name": "Стартовая цена",
                "id": "39701669215129098",
                "link": "startprice",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 21,
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
                "sysName": "step",
                "dataType": "link",
                "name": "Шаг торгов",
                "id": "58641668796658942",
                "link": "steps",
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
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "subject",
                "dataType": "link",
                "name": "Жанр",
                "id": "92331668796104981",
                "link": "subjects",
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
                "format": null,
                "formatOptions": {},
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
                "sysName": "title",
                "dataType": "string",
                "name": "Название картины",
                "id": "21991668795241053",
                "link": null,
                "group": "0",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "user",
                "dataType": "link",
                "name": "Пользователь",
                "id": "40431668797048438",
                "link": "WebUser",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 14,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
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
                "sysName": "width",
                "dataType": "decimal",
                "name": "Ширина, см",
                "id": "93851668795891955",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [],
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