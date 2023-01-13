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
        "sl": "adminGetTransactions",
        "pageSize": "50",
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
                        "fieldSysName": "affiliate_transaction_id",
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
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "affiliate_transaction_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "appwallet"
                    },
                    {
                        "fieldSysName": "affiliate_user_id",
                        "fetch": [],
                        "sysName": "affiliate_user_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    },
                    {
                        "fieldSysName": "app_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "sysName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "team_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "app_id",
                        "name": "app_id",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Apps"
                    },
                    {
                        "fieldSysName": "balance",
                        "fetch": [],
                        "sysName": "balance",
                        "name": "balance",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "comment",
                        "fetch": [],
                        "sysName": "comment",
                        "name": "comment",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "date",
                        "fetch": [],
                        "sysName": "date",
                        "name": "date",
                        "dataType": "date",
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
                        "fieldSysName": "parent_affiliate_trans_id",
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
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "parent_affiliate_trans_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "appwallet"
                    },
                    {
                        "fieldSysName": "receipt",
                        "fetch": [],
                        "sysName": "receipt",
                        "name": "",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [],
                        "sysName": "type",
                        "name": "Transaction type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "transaction_types"
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [
                            {
                                "fieldSysName": "apps",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "sys_name",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
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
                            },
                            {
                                "fieldSysName": "survey_is_aborted",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "survey_step_1_raw",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "survey_step_2_raw",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "survey_step_3_raw",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "team_ids",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "current_seats",
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
                                        "fieldSysName": "tariff_id",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "wallet_balance",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "user_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "app_id",
                        "fetch": [],
                        "sysName": "app_id",
                        "name": "app_id",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Apps"
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
                    "affiliate_transaction_id": {
                        "id": "affiliate_transaction_id",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "appwallet",
                        "actions": []
                    },
                    "affiliate_user_id": {
                        "id": "affiliate_user_id",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users",
                        "actions": []
                    },
                    "app_id": {
                        "id": "app_id",
                        "content": "app_id",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Apps",
                        "actions": []
                    },
                    "balance": {
                        "id": "balance",
                        "content": "balance",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "comment": {
                        "id": "comment",
                        "content": "comment",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "date": {
                        "id": "date",
                        "content": "date",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
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
                    },
                    "parent_affiliate_trans_id": {
                        "id": "parent_affiliate_trans_id",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "appwallet",
                        "actions": []
                    },
                    "receipt": {
                        "id": "receipt",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "type": {
                        "id": "type",
                        "content": "Transaction type",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "transaction_types",
                        "actions": []
                    },
                    "user_id": {
                        "id": "user_id",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users",
                        "actions": []
                    },
                    "action__36731667248698355": {
                        "content": "Affiliate it!",
                        "id": "action__36731667248698355",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "affiliate_transaction_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "balance": {
                                    "id": "balance",
                                    "content": "balance",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "comment": {
                                    "id": "comment",
                                    "content": "comment",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "date": {
                                    "id": "date",
                                    "content": "date",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "date",
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
                                    "formatOptions": {}
                                },
                                "type": {
                                    "id": "type",
                                    "content": "Transaction type",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "user_id": {
                                    "id": "user_id",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "balance": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "comment": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "date": {
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
                                "type": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "user_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "user_id",
                                "balance",
                                "type",
                                "comment",
                                "date"
                            ]
                        }
                    },
                    "affiliate_user_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "balance": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "comment": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": true,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "parent_affiliate_trans_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "balance": {
                                    "id": "balance",
                                    "content": "balance",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "comment": {
                                    "id": "comment",
                                    "content": "comment",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "date": {
                                    "id": "date",
                                    "content": "date",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "date",
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
                                    "formatOptions": {}
                                },
                                "type": {
                                    "id": "type",
                                    "content": "Transaction type",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "user_id": {
                                    "id": "user_id",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "balance": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "comment": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "date": {
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
                                "type": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "user_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "user_id",
                                "balance",
                                "type",
                                "comment",
                                "date"
                            ]
                        }
                    },
                    "receipt": {
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
                    },
                    "user_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "apps": {
                                    "id": "apps",
                                    "content": "Apps",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "country": {
                                    "id": "country",
                                    "content": "Country",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "first_name": {
                                    "id": "first_name",
                                    "content": "First name",
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
                                "last_name": {
                                    "id": "last_name",
                                    "content": "Last name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "survey_is_aborted": {
                                    "id": "survey_is_aborted",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "survey_step_1_raw": {
                                    "id": "survey_step_1_raw",
                                    "content": "Which describes you best",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "survey_step_2_raw": {
                                    "id": "survey_step_2_raw",
                                    "content": "Whom do you want to build apps for",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "survey_step_3_raw": {
                                    "id": "survey_step_3_raw",
                                    "content": "How did you know about Directual",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "team_ids": {
                                    "id": "team_ids",
                                    "content": "Teams",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
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
                                }
                            },
                            "fieldParams": {
                                "apps": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "country": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "first_name": {
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
                                "last_name": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "survey_is_aborted": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "survey_step_1_raw": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "survey_step_2_raw": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "survey_step_3_raw": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "team_ids": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "wallet_balance": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "apps",
                                "country",
                                "first_name",
                                "last_name",
                                "survey_is_aborted",
                                "survey_step_1_raw",
                                "survey_step_2_raw",
                                "survey_step_3_raw",
                                "team_ids",
                                "wallet_balance"
                            ]
                        }
                    },
                    "app_id": {
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
                                    "content": "App id",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "id",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "sysName": {
                                    "id": "sysName",
                                    "content": "System name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "team_id": {
                                    "id": "team_id",
                                    "content": "Team",
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
                                "sysName": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "team_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "sysName",
                                "team_id"
                            ]
                        }
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "id",
                            "balance",
                            "user_id",
                            "type",
                            "comment",
                            "date",
                            "receipt",
                            "app_id",
                            "action__36731667248698355",
                            "affiliate_user_id",
                            "affiliate_transaction_id",
                            "parent_affiliate_trans_id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "adminChangeApp",
                        "id": "36731667248698355",
                        "name": "Affiliate it!",
                        "displayAs": "button",
                        "buttonIcon": "money",
                        "buttonType": "accent",
                        "showMessage": true,
                        "closePopup": false,
                        "resultMessage": "Affiliate has been calculated",
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
                                },
                                {
                                    "fieldSysName": "wallet_trans",
                                    "fetch": [],
                                    "sysName": "wallet_trans",
                                    "name": "",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "appwallet"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "92101667248742460",
                                "target": "app_id",
                                "type": "objectField",
                                "value": "app_id"
                            },
                            {
                                "id": "11931667248753653",
                                "target": "action",
                                "type": "const",
                                "value": "calc_affiliate"
                            },
                            {
                                "id": "46611667248947950",
                                "target": "wallet_trans",
                                "type": "objectField",
                                "value": "id"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "affiliate_transaction_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "balance": {
                                "id": "balance",
                                "content": "balance",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            },
                            "comment": {
                                "id": "comment",
                                "content": "comment",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "date": {
                                "id": "date",
                                "content": "date",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
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
                                "formatOptions": {}
                            },
                            "type": {
                                "id": "type",
                                "content": "Transaction type",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "user_id": {
                                "id": "user_id",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "balance": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "comment": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "date": {
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
                            "type": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "user_id",
                            "balance",
                            "type",
                            "comment",
                            "date"
                        ]
                    }
                },
                "affiliate_user_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "balance": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "comment": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": true,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "parent_affiliate_trans_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "balance": {
                                "id": "balance",
                                "content": "balance",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            },
                            "comment": {
                                "id": "comment",
                                "content": "comment",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "date": {
                                "id": "date",
                                "content": "date",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
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
                                "formatOptions": {}
                            },
                            "type": {
                                "id": "type",
                                "content": "Transaction type",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "user_id": {
                                "id": "user_id",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "balance": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "comment": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "date": {
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
                            "type": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "user_id",
                            "balance",
                            "type",
                            "comment",
                            "date"
                        ]
                    }
                },
                "receipt": {
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
                },
                "user_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "apps": {
                                "id": "apps",
                                "content": "Apps",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": null
                            },
                            "country": {
                                "id": "country",
                                "content": "Country",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "first_name": {
                                "id": "first_name",
                                "content": "First name",
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
                            "last_name": {
                                "id": "last_name",
                                "content": "Last name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "survey_is_aborted": {
                                "id": "survey_is_aborted",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
                                "format": null,
                                "formatOptions": null
                            },
                            "survey_step_1_raw": {
                                "id": "survey_step_1_raw",
                                "content": "Which describes you best",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "survey_step_2_raw": {
                                "id": "survey_step_2_raw",
                                "content": "Whom do you want to build apps for",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "survey_step_3_raw": {
                                "id": "survey_step_3_raw",
                                "content": "How did you know about Directual",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "team_ids": {
                                "id": "team_ids",
                                "content": "Teams",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
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
                            }
                        },
                        "fieldParams": {
                            "apps": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "country": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "first_name": {
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
                            "last_name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "survey_is_aborted": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "survey_step_1_raw": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "survey_step_2_raw": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "survey_step_3_raw": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "team_ids": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "wallet_balance": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "apps",
                            "country",
                            "first_name",
                            "last_name",
                            "survey_is_aborted",
                            "survey_step_1_raw",
                            "survey_step_2_raw",
                            "survey_step_3_raw",
                            "team_ids",
                            "wallet_balance"
                        ]
                    }
                },
                "app_id": {
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
                                "content": "App id",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": {}
                            },
                            "sysName": {
                                "id": "sysName",
                                "content": "System name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "team_id": {
                                "id": "team_id",
                                "content": "Team",
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
                            "sysName": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "team_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "sysName",
                            "team_id"
                        ]
                    }
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "affiliate_transaction_id",
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
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "affiliate_transaction_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "appwallet"
                    },
                    {
                        "fieldSysName": "affiliate_user_id",
                        "fetch": [],
                        "sysName": "affiliate_user_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    },
                    {
                        "fieldSysName": "app_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "sysName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "team_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "app_id",
                        "name": "app_id",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Apps"
                    },
                    {
                        "fieldSysName": "balance",
                        "fetch": [],
                        "sysName": "balance",
                        "name": "balance",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "comment",
                        "fetch": [],
                        "sysName": "comment",
                        "name": "comment",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "date",
                        "fetch": [],
                        "sysName": "date",
                        "name": "date",
                        "dataType": "date",
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
                        "fieldSysName": "parent_affiliate_trans_id",
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
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "parent_affiliate_trans_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "appwallet"
                    },
                    {
                        "fieldSysName": "receipt",
                        "fetch": [],
                        "sysName": "receipt",
                        "name": "",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [],
                        "sysName": "type",
                        "name": "Transaction type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "transaction_types"
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [
                            {
                                "fieldSysName": "apps",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "sys_name",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
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
                            },
                            {
                                "fieldSysName": "survey_is_aborted",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "survey_step_1_raw",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "survey_step_2_raw",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "survey_step_3_raw",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "team_ids",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "current_seats",
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
                                        "fieldSysName": "tariff_id",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "wallet_balance",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "user_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "app_id",
                        "fetch": [],
                        "sysName": "app_id",
                        "name": "app_id",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Apps"
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
                    "affiliate_transaction_id": {
                        "id": "affiliate_transaction_id",
                        "content": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "appwallet"
                    },
                    "affiliate_user_id": {
                        "id": "affiliate_user_id",
                        "content": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users"
                    },
                    "app_id": {
                        "id": "app_id",
                        "content": "app_id",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Apps"
                    },
                    "balance": {
                        "id": "balance",
                        "content": "balance",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "comment": {
                        "id": "comment",
                        "content": "comment",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "date": {
                        "id": "date",
                        "content": "date",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "id": {
                        "id": "id",
                        "content": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "parent_affiliate_trans_id": {
                        "id": "parent_affiliate_trans_id",
                        "content": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "appwallet"
                    },
                    "receipt": {
                        "id": "receipt",
                        "content": "",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "type": {
                        "id": "type",
                        "content": "Transaction type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "transaction_types"
                    },
                    "user_id": {
                        "id": "user_id",
                        "content": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users"
                    }
                },
                "fieldParams": {
                    "affiliate_transaction_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "affiliate_user_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "balance": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "comment": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "parent_affiliate_trans_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "receipt": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "user_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "app_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "user_id",
                    "type",
                    "balance",
                    "comment",
                    "date",
                    "affiliate_transaction_id",
                    "affiliate_user_id",
                    "id",
                    "parent_affiliate_trans_id",
                    "receipt",
                    "app_id"
                ]
            },
            "actions": [
                {
                    "sysName": "adminChangeApp",
                    "id": "36731667248698355",
                    "name": "Affiliate it!",
                    "displayAs": "button",
                    "buttonIcon": "money",
                    "buttonType": "accent",
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Affiliate has been calculated",
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
                            },
                            {
                                "fieldSysName": "wallet_trans",
                                "fetch": [],
                                "sysName": "wallet_trans",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "appwallet"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "92101667248742460",
                            "target": "app_id",
                            "type": "objectField",
                            "value": "app_id"
                        },
                        {
                            "id": "11931667248753653",
                            "target": "action",
                            "type": "const",
                            "value": "calc_affiliate"
                        },
                        {
                            "id": "46611667248947950",
                            "target": "wallet_trans",
                            "type": "objectField",
                            "value": "id"
                        }
                    ]
                }
            ],
            "filterParams": {
                "isFiltering": true,
                "filteringType": "openai"
            }
        },
        "tableTitle": "All transactions",
        "actions": null,
        "headers": [
            {
                "sysName": "affiliate_transaction_id",
                "name": "",
                "dataType": "link",
                "id": "93701664633122070",
                "link": "appwallet",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "affiliate_user_id",
                "name": "",
                "dataType": "link",
                "id": "57701664731840784",
                "link": "Cloud_users",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "app_id",
                "name": "app_id",
                "dataType": "link",
                "id": "51971633354577141",
                "link": "Apps",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "balance",
                "name": "balance",
                "dataType": "decimal",
                "id": "17881633354558295",
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "comment",
                "name": "comment",
                "dataType": "string",
                "id": "40211633354569149",
                "link": null,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "date",
                "name": "date",
                "dataType": "date",
                "id": "96991644174902603",
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
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "parent_affiliate_trans_id",
                "name": "",
                "dataType": "link",
                "id": "47871664733203199",
                "link": "appwallet",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 12,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "receipt",
                "name": "",
                "dataType": "string",
                "id": "22031644176668353",
                "link": "",
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
                "format": "webLink",
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "type",
                "name": "Transaction type",
                "dataType": "link",
                "id": "34331644178252191",
                "link": "transaction_types",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "user_id",
                "name": "",
                "dataType": "link",
                "id": "24421633360151131",
                "link": "Cloud_users",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "data": [
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Noitatech",
                            "tariff_id": "team_monthly",
                            "id": "c9bab065-0518-4233-9650-9f2b4307be04",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "pro_nocoder",
                    "wallet_balance": 11.9925,
                    "country": "RU",
                    "id": "pavel@ingros.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Goncharov",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "gamingbacklogru",
                            "id": "13629"
                        }
                    ]
                },
                "id": "53373194-2b24-4f67-b6c1-b030b59dfe1e",
                "date": 1673427672000,
                "comment": "App gamingbacklogru (13629), license payment, plan Startup",
                "app_id": {
                    "sysName": "gamingbacklogru",
                    "id": "13629"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": true,
                    "first_name": "Artem ",
                    "wallet_balance": -106,
                    "country": "UA",
                    "id": "kirsnvartem@gmail.com",
                    "last_name": "Kirsanov",
                    "apps": [
                        {
                            "sys_name": "sandboxxxx",
                            "id": "14019"
                        },
                        {
                            "sys_name": "feel",
                            "id": "13876"
                        }
                    ]
                },
                "id": "8695c880-eb65-4f08-bab4-4953a2fb1faa",
                "date": 1673427672000,
                "comment": "App feel (13876), license payment, plan Startup",
                "app_id": {
                    "sysName": "feel",
                    "id": "13876"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "davin",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": -56,
                    "country": "US",
                    "id": "fntokens@gmail.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "corbett",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "mv",
                            "id": "14360"
                        }
                    ]
                },
                "id": "6af52d3a-fcc4-4699-8b6e-813d26fc9778",
                "date": 1673427672000,
                "comment": "App mv (14360), license payment, plan Startup",
                "app_id": {
                    "sysName": "mv",
                    "id": "14360"
                },
                "type": "app_payment"
            },
            {
                "balance": -2,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "59b12d65-6aef-4cf4-bda7-b4fd1bd02a32",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "FTM Agency",
                            "tariff_id": "team_monthly",
                            "id": "4b5c3318-9e08-4477-8bfe-f1e8cee9cce1",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "af048204-2d93-402a-9d7d-c7bfb95bda4c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "46727f47-2c56-4833-89dd-aa76464e8eab",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d1d2847d-6a60-4c7d-90d0-6a8a076e20b6",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "[test] AppSumo Tier",
                            "tariff_id": "AppSumo_tier3",
                            "id": "5003b645-65f9-4def-90a2-40b6cfa5ee18",
                            "is_hidden": true,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24b74108-e19d-475d-8772-37f0b31df133",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24fe18d6-a0bd-44bd-9179-f7437938bf36",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3d3cbc47-6414-44e4-9333-b64ae6d7c10c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1682daa5-0861-433e-8d34-e27d4caf3780",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "6c54ec46-9d07-4fb0-a0c3-8e8c38a868fc",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream-team",
                            "tariff_id": "team_monthly",
                            "id": "bc73f23b-9daf-435f-bca5-6ddcaa74e185",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "5555bcb0-e4bd-4682-aaa6-2cd31ac7298b",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Vlad Kovalsky Team",
                            "tariff_id": "team_monthly",
                            "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "My new team",
                            "tariff_id": "team_monthly",
                            "id": "6f58ecfd-9e3e-4475-b63c-b7e82359f06c",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "AppSumo Tier 1",
                            "tariff_id": "AppSumo_tier1",
                            "id": "a1019838-c902-4e70-b6dc-d89ba014e6c8",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d76eff40-d0f3-4dce-a645-7fab00cef671",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "dopamine.team",
                            "tariff_id": "team_monthly",
                            "id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1f722fd8-cc1c-4b2e-b76a-0a3755c56043",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "dbfc6e11-b26c-40a6-8caa-da3f142675ed",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3859abca-9c8c-4411-8978-f353cf0d6921",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "2c588515-3a41-4957-9fc8-6dea28f275fb",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "f6280a15-85d9-4424-9a0d-411dbf9cbc93",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Alex Orlov team",
                            "tariff_id": "team_yearly",
                            "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "34f3e17a-e71e-4385-a6d6-011e50e2df52",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Nikita Dolgov team",
                            "tariff_id": "team_monthly",
                            "id": "370620d6-e18a-4bc6-8b3d-c432f7c391d5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "fb07f7bf-7202-4e85-8221-0ae090d6975c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Oleg team",
                            "tariff_id": "team_monthly",
                            "id": "0513db3f-2227-445c-b760-c789ddac6f79",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Anna's team",
                            "tariff_id": "team_monthly",
                            "id": "60063caf-9c5d-439f-b2b7-ca62a1804b3d",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "9906f648-bca3-489c-b5c9-fc8c629fd037",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "e82f9a6f-bf3a-4869-bd74-eba52a0756b5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Zerocoder: Directual от 0 до PRO",
                            "tariff_id": "Zerocoder-education",
                            "id": "5eceb369-79f2-4d45-baf1-0a9b20225f1e",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "developer_new_to_nocode",
                    "wallet_balance": 125.41,
                    "country": "Undefined",
                    "id": "pavel@directual.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "Ershov",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "test-app-0011",
                            "id": "15231"
                        },
                        {
                            "sys_name": "code-redemption",
                            "id": "15029"
                        },
                        {
                            "sys_name": "hey-hoy",
                            "id": "15027"
                        },
                        {
                            "sys_name": "nft",
                            "id": "14644"
                        },
                        {
                            "sys_name": "mentor",
                            "id": "14637"
                        },
                        {
                            "sys_name": "test-limit",
                            "id": "14027"
                        },
                        {
                            "sys_name": "showcase-store",
                            "id": "13182"
                        },
                        {
                            "sys_name": "fpsform-test",
                            "id": "13181"
                        },
                        {
                            "sys_name": "bot-snapshot",
                            "id": "13174"
                        },
                        {
                            "sys_name": "talkbank-test",
                            "id": "13120"
                        },
                        {
                            "sys_name": "my-team-app",
                            "id": "12983"
                        },
                        {
                            "sys_name": "mig",
                            "id": "11537"
                        },
                        {
                            "sys_name": "tg-demo",
                            "id": "11488"
                        },
                        {
                            "sys_name": "showcase-attractions",
                            "id": "11307"
                        },
                        {
                            "sys_name": "showcase-imdb",
                            "id": "11306"
                        },
                        {
                            "sys_name": "basic-template",
                            "id": "11264"
                        },
                        {
                            "sys_name": "password-reset",
                            "id": "10996"
                        },
                        {
                            "sys_name": "web-plugins",
                            "id": "10926"
                        },
                        {
                            "sys_name": "japanapp",
                            "id": "10884"
                        },
                        {
                            "sys_name": "masters",
                            "id": "10818"
                        },
                        {
                            "sys_name": "jj",
                            "id": "10594"
                        },
                        {
                            "sys_name": "bootcamp-marketplace",
                            "id": "10547"
                        },
                        {
                            "sys_name": "marketplace",
                            "id": "10009"
                        },
                        {
                            "sys_name": "draftbit",
                            "id": "9988"
                        },
                        {
                            "sys_name": "dashboard",
                            "id": "9674"
                        },
                        {
                            "sys_name": "bootcamps",
                            "id": "9660"
                        },
                        {
                            "sys_name": "tuishou-alfa",
                            "id": "9544"
                        },
                        {
                            "sys_name": "testfiles",
                            "id": "9337"
                        },
                        {
                            "sys_name": "tuishou",
                            "id": "9312"
                        },
                        {
                            "sys_name": "students",
                            "id": "8750"
                        },
                        {
                            "sys_name": "webhook-parsing",
                            "id": "8084"
                        },
                        {
                            "sys_name": "weather-app",
                            "id": "7813"
                        },
                        {
                            "sys_name": "my-sandbox",
                            "id": "7767"
                        },
                        {
                            "sys_name": "my-app-as",
                            "id": "7510"
                        },
                        {
                            "sys_name": "sessionid",
                            "id": "7498"
                        },
                        {
                            "sys_name": "dev-pipeline",
                            "id": "6948"
                        },
                        {
                            "sys_name": "import-v6",
                            "id": "6912"
                        },
                        {
                            "sys_name": "dev",
                            "id": "6829"
                        },
                        {
                            "sys_name": "directual-groupbot",
                            "id": "6470"
                        },
                        {
                            "sys_name": "airtable",
                            "id": "6419"
                        },
                        {
                            "sys_name": "final-fps-test",
                            "id": "6238"
                        },
                        {
                            "sys_name": "new-fps-layout",
                            "id": "6166"
                        },
                        {
                            "sys_name": "tanera",
                            "id": "6082"
                        },
                        {
                            "sys_name": "crm-demo",
                            "id": "6033"
                        },
                        {
                            "sys_name": "productstar",
                            "id": "5925"
                        },
                        {
                            "sys_name": "new-library",
                            "id": "5420"
                        },
                        {
                            "sys_name": "how-to-auth",
                            "id": "5022"
                        },
                        {
                            "sys_name": "approval-system",
                            "id": "4575"
                        },
                        {
                            "sys_name": "test-bot",
                            "id": "4456"
                        },
                        {
                            "sys_name": "hello-there",
                            "id": "4337"
                        },
                        {
                            "sys_name": "test-webuser",
                            "id": "4284"
                        },
                        {
                            "sys_name": "temaplate-crm",
                            "id": "4083"
                        },
                        {
                            "sys_name": "ZerocodeCRM",
                            "id": "3973"
                        },
                        {
                            "sys_name": "nocode",
                            "id": "3799"
                        },
                        {
                            "sys_name": "gdfvfbvsgdvb",
                            "id": "3074"
                        },
                        {
                            "sys_name": "React-boilerplate",
                            "id": "2950"
                        },
                        {
                            "sys_name": "telegram_ibot",
                            "id": "2882"
                        },
                        {
                            "sys_name": "0qode-workshop",
                            "id": "2868"
                        },
                        {
                            "sys_name": "Generate_data_Directual_academy",
                            "id": "2595"
                        },
                        {
                            "sys_name": "directual-site",
                            "id": "1822"
                        }
                    ]
                },
                "id": "9ab6a75a-7944-447a-960c-919ac5a26f6c",
                "date": 1673427650000,
                "comment": "App directual-site (1822), license payment, plan Pro-sandbox",
                "app_id": {
                    "sysName": "directual-site",
                    "team_id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                    "id": "1822"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Ольга",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 81,
                    "country": "RU",
                    "id": "olga9091nsuem@gmail.com",
                    "survey_step_3_raw": "customOption: productstar",
                    "last_name": "Гладкова",
                    "survey_step_2_raw": "customOption: education",
                    "apps": [
                        {
                            "sys_name": "productstar-olga",
                            "id": "15302"
                        }
                    ]
                },
                "id": "81a68d80-44b8-4727-9eb9-1039e4910b54",
                "date": 1673364212000,
                "comment": "Create app productstar-olga, plan Startup-monthly",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": 120,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "azimjan",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 120,
                    "country": "KG",
                    "id": "azimjon630202@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "kabyljanov",
                    "survey_step_2_raw": "personal_use"
                },
                "id": "13bc5fb8-793b-40f1-bca9-6178513ece5b",
                "date": 1673342511000,
                "comment": "Promo-code ZEROCODER",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Petr",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 3,
                    "country": "RU",
                    "id": "petr.slichnyi@gmail.com",
                    "survey_step_3_raw": "nocodedevs",
                    "last_name": "Slichnyi",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "directualhomework",
                            "id": "14659"
                        }
                    ]
                },
                "id": "a64d021e-573e-4aa0-8eef-6bc479f9afc5",
                "date": 1673341256000,
                "comment": "App directualhomework (14659), license payment, plan Startup",
                "app_id": {
                    "sysName": "directualhomework",
                    "id": "14659"
                },
                "type": "app_payment"
            },
            {
                "balance": -69.5,
                "user_id": {
                    "survey_is_aborted": true,
                    "first_name": "Институт",
                    "wallet_balance": -193.39,
                    "country": "RU",
                    "id": "edueduedoo@gmail.com",
                    "last_name": "ЕВИПДО",
                    "apps": [
                        {
                            "sys_name": "evidpo",
                            "id": "13775"
                        }
                    ]
                },
                "id": "65c5b839-dfb1-4bd1-9174-8a096a4ff588",
                "date": 1673341256000,
                "comment": "App evidpo (13775), license payment, plan Pro",
                "app_id": {
                    "sysName": "evidpo",
                    "id": "13775"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Investra",
                    "survey_step_1_raw": "developer_familiar_with_nocode",
                    "wallet_balance": -0.94,
                    "country": "BY",
                    "id": "investraplatform@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "Platform",
                    "survey_step_2_raw": "clients_agency",
                    "apps": [
                        {
                            "sys_name": "investra",
                            "id": "14658"
                        }
                    ]
                },
                "id": "f083c2c8-5517-4d2a-933d-d548c9005448",
                "date": 1673341256000,
                "comment": "App investra (14658), license payment, plan Startup",
                "app_id": {
                    "sysName": "investra",
                    "id": "14658"
                },
                "type": "app_payment"
            },
            {
                "balance": -2,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "59b12d65-6aef-4cf4-bda7-b4fd1bd02a32",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "FTM Agency",
                            "tariff_id": "team_monthly",
                            "id": "4b5c3318-9e08-4477-8bfe-f1e8cee9cce1",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "af048204-2d93-402a-9d7d-c7bfb95bda4c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "46727f47-2c56-4833-89dd-aa76464e8eab",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d1d2847d-6a60-4c7d-90d0-6a8a076e20b6",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "[test] AppSumo Tier",
                            "tariff_id": "AppSumo_tier3",
                            "id": "5003b645-65f9-4def-90a2-40b6cfa5ee18",
                            "is_hidden": true,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24b74108-e19d-475d-8772-37f0b31df133",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24fe18d6-a0bd-44bd-9179-f7437938bf36",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3d3cbc47-6414-44e4-9333-b64ae6d7c10c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1682daa5-0861-433e-8d34-e27d4caf3780",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "6c54ec46-9d07-4fb0-a0c3-8e8c38a868fc",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream-team",
                            "tariff_id": "team_monthly",
                            "id": "bc73f23b-9daf-435f-bca5-6ddcaa74e185",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "5555bcb0-e4bd-4682-aaa6-2cd31ac7298b",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Vlad Kovalsky Team",
                            "tariff_id": "team_monthly",
                            "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "My new team",
                            "tariff_id": "team_monthly",
                            "id": "6f58ecfd-9e3e-4475-b63c-b7e82359f06c",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "AppSumo Tier 1",
                            "tariff_id": "AppSumo_tier1",
                            "id": "a1019838-c902-4e70-b6dc-d89ba014e6c8",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d76eff40-d0f3-4dce-a645-7fab00cef671",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "dopamine.team",
                            "tariff_id": "team_monthly",
                            "id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1f722fd8-cc1c-4b2e-b76a-0a3755c56043",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "dbfc6e11-b26c-40a6-8caa-da3f142675ed",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3859abca-9c8c-4411-8978-f353cf0d6921",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "2c588515-3a41-4957-9fc8-6dea28f275fb",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "f6280a15-85d9-4424-9a0d-411dbf9cbc93",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Alex Orlov team",
                            "tariff_id": "team_yearly",
                            "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "34f3e17a-e71e-4385-a6d6-011e50e2df52",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Nikita Dolgov team",
                            "tariff_id": "team_monthly",
                            "id": "370620d6-e18a-4bc6-8b3d-c432f7c391d5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "fb07f7bf-7202-4e85-8221-0ae090d6975c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Oleg team",
                            "tariff_id": "team_monthly",
                            "id": "0513db3f-2227-445c-b760-c789ddac6f79",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Anna's team",
                            "tariff_id": "team_monthly",
                            "id": "60063caf-9c5d-439f-b2b7-ca62a1804b3d",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "9906f648-bca3-489c-b5c9-fc8c629fd037",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "e82f9a6f-bf3a-4869-bd74-eba52a0756b5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Zerocoder: Directual от 0 до PRO",
                            "tariff_id": "Zerocoder-education",
                            "id": "5eceb369-79f2-4d45-baf1-0a9b20225f1e",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "developer_new_to_nocode",
                    "wallet_balance": 125.41,
                    "country": "Undefined",
                    "id": "pavel@directual.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "Ershov",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "test-app-0011",
                            "id": "15231"
                        },
                        {
                            "sys_name": "code-redemption",
                            "id": "15029"
                        },
                        {
                            "sys_name": "hey-hoy",
                            "id": "15027"
                        },
                        {
                            "sys_name": "nft",
                            "id": "14644"
                        },
                        {
                            "sys_name": "mentor",
                            "id": "14637"
                        },
                        {
                            "sys_name": "test-limit",
                            "id": "14027"
                        },
                        {
                            "sys_name": "showcase-store",
                            "id": "13182"
                        },
                        {
                            "sys_name": "fpsform-test",
                            "id": "13181"
                        },
                        {
                            "sys_name": "bot-snapshot",
                            "id": "13174"
                        },
                        {
                            "sys_name": "talkbank-test",
                            "id": "13120"
                        },
                        {
                            "sys_name": "my-team-app",
                            "id": "12983"
                        },
                        {
                            "sys_name": "mig",
                            "id": "11537"
                        },
                        {
                            "sys_name": "tg-demo",
                            "id": "11488"
                        },
                        {
                            "sys_name": "showcase-attractions",
                            "id": "11307"
                        },
                        {
                            "sys_name": "showcase-imdb",
                            "id": "11306"
                        },
                        {
                            "sys_name": "basic-template",
                            "id": "11264"
                        },
                        {
                            "sys_name": "password-reset",
                            "id": "10996"
                        },
                        {
                            "sys_name": "web-plugins",
                            "id": "10926"
                        },
                        {
                            "sys_name": "japanapp",
                            "id": "10884"
                        },
                        {
                            "sys_name": "masters",
                            "id": "10818"
                        },
                        {
                            "sys_name": "jj",
                            "id": "10594"
                        },
                        {
                            "sys_name": "bootcamp-marketplace",
                            "id": "10547"
                        },
                        {
                            "sys_name": "marketplace",
                            "id": "10009"
                        },
                        {
                            "sys_name": "draftbit",
                            "id": "9988"
                        },
                        {
                            "sys_name": "dashboard",
                            "id": "9674"
                        },
                        {
                            "sys_name": "bootcamps",
                            "id": "9660"
                        },
                        {
                            "sys_name": "tuishou-alfa",
                            "id": "9544"
                        },
                        {
                            "sys_name": "testfiles",
                            "id": "9337"
                        },
                        {
                            "sys_name": "tuishou",
                            "id": "9312"
                        },
                        {
                            "sys_name": "students",
                            "id": "8750"
                        },
                        {
                            "sys_name": "webhook-parsing",
                            "id": "8084"
                        },
                        {
                            "sys_name": "weather-app",
                            "id": "7813"
                        },
                        {
                            "sys_name": "my-sandbox",
                            "id": "7767"
                        },
                        {
                            "sys_name": "my-app-as",
                            "id": "7510"
                        },
                        {
                            "sys_name": "sessionid",
                            "id": "7498"
                        },
                        {
                            "sys_name": "dev-pipeline",
                            "id": "6948"
                        },
                        {
                            "sys_name": "import-v6",
                            "id": "6912"
                        },
                        {
                            "sys_name": "dev",
                            "id": "6829"
                        },
                        {
                            "sys_name": "directual-groupbot",
                            "id": "6470"
                        },
                        {
                            "sys_name": "airtable",
                            "id": "6419"
                        },
                        {
                            "sys_name": "final-fps-test",
                            "id": "6238"
                        },
                        {
                            "sys_name": "new-fps-layout",
                            "id": "6166"
                        },
                        {
                            "sys_name": "tanera",
                            "id": "6082"
                        },
                        {
                            "sys_name": "crm-demo",
                            "id": "6033"
                        },
                        {
                            "sys_name": "productstar",
                            "id": "5925"
                        },
                        {
                            "sys_name": "new-library",
                            "id": "5420"
                        },
                        {
                            "sys_name": "how-to-auth",
                            "id": "5022"
                        },
                        {
                            "sys_name": "approval-system",
                            "id": "4575"
                        },
                        {
                            "sys_name": "test-bot",
                            "id": "4456"
                        },
                        {
                            "sys_name": "hello-there",
                            "id": "4337"
                        },
                        {
                            "sys_name": "test-webuser",
                            "id": "4284"
                        },
                        {
                            "sys_name": "temaplate-crm",
                            "id": "4083"
                        },
                        {
                            "sys_name": "ZerocodeCRM",
                            "id": "3973"
                        },
                        {
                            "sys_name": "nocode",
                            "id": "3799"
                        },
                        {
                            "sys_name": "gdfvfbvsgdvb",
                            "id": "3074"
                        },
                        {
                            "sys_name": "React-boilerplate",
                            "id": "2950"
                        },
                        {
                            "sys_name": "telegram_ibot",
                            "id": "2882"
                        },
                        {
                            "sys_name": "0qode-workshop",
                            "id": "2868"
                        },
                        {
                            "sys_name": "Generate_data_Directual_academy",
                            "id": "2595"
                        },
                        {
                            "sys_name": "directual-site",
                            "id": "1822"
                        }
                    ]
                },
                "id": "1b0445f9-aa47-48cb-bac7-f061c7339411",
                "date": 1673341235000,
                "comment": "App directual-site (1822), license payment, plan Pro-sandbox",
                "app_id": {
                    "sysName": "directual-site",
                    "team_id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                    "id": "1822"
                },
                "type": "app_payment"
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Noitatech",
                            "tariff_id": "team_monthly",
                            "id": "c9bab065-0518-4233-9650-9f2b4307be04",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "pro_nocoder",
                    "wallet_balance": 11.9925,
                    "country": "RU",
                    "id": "pavel@ingros.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Goncharov",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "gamingbacklogru",
                            "id": "13629"
                        }
                    ]
                },
                "id": "de9b1419-dedc-4633-9036-c16357e8cb0f",
                "date": 1673334090000,
                "comment": "Promo-code HAPPYNEWYEAR",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Dmitry",
                    "survey_step_1_raw": "pro_nocoder",
                    "wallet_balance": 0,
                    "country": "RU",
                    "id": "saibleonetwo@gmail.com",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Saible",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "botprofi",
                            "id": "15281"
                        }
                    ]
                },
                "id": "ae4bf7e8-9db0-459d-b6a3-ba833635e94b",
                "date": 1673279507000,
                "comment": "Update app botprofi, plan Startup-monthly (previous plan: Free)",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": 39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Dmitry",
                    "survey_step_1_raw": "pro_nocoder",
                    "wallet_balance": 0,
                    "country": "RU",
                    "id": "saibleonetwo@gmail.com",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Saible",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "botprofi",
                            "id": "15281"
                        }
                    ]
                },
                "id": "9c34103d-1476-4478-b752-d9c1660fbc79",
                "date": 1673279467000,
                "comment": "Adding funds via Tinkoff 2652.0 ₽ → 39.0 D-coins",
                "type": "tinkoff",
                "app_id": ""
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Alex",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 50,
                    "country": "KZ",
                    "id": "alexkachurinit@gmail.com",
                    "survey_step_3_raw": "social_networks",
                    "last_name": "Kachurin",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "createuser",
                            "id": "15287"
                        },
                        {
                            "sys_name": "dm1",
                            "id": "15064"
                        },
                        {
                            "sys_name": "dm",
                            "id": "15063"
                        }
                    ]
                },
                "id": "ac9ff0bf-e5d8-4c45-9745-b4281ece363d",
                "date": 1673260298000,
                "comment": "Promo-code welcome",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Alex",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 50,
                    "country": "RU",
                    "id": "oparin_alexandr@mail.ru",
                    "survey_step_3_raw": "youtube",
                    "last_name": "Oparin",
                    "survey_step_2_raw": "startup"
                },
                "id": "75c9781e-1dba-414a-8389-dcbd6f98ea4a",
                "date": 1673256240000,
                "comment": "Promo-code welcome",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Anton",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 167,
                    "country": "RU",
                    "id": "ant.angst@yandex.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Lozhkin",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "upgradeplatform",
                            "id": "13360"
                        }
                    ]
                },
                "id": "f1783640-cfc0-479b-b038-80b07b71ab8d",
                "date": 1673255359000,
                "comment": "Promo-code WELCOME",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Anton",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 167,
                    "country": "RU",
                    "id": "ant.angst@yandex.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Lozhkin",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "upgradeplatform",
                            "id": "13360"
                        }
                    ]
                },
                "id": "a38b45b8-2da1-4af3-ae6e-f3c2ec81700c",
                "date": 1673255190000,
                "comment": "Promo-code HAPPYNEWYEAR",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": 429,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Jonathan",
                    "team_ids": [
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "migo Team",
                            "tariff_id": "team_monthly",
                            "id": "bb1d4ab8-f481-4995-98f0-da6e1baf192e",
                            "is_hidden": false,
                            "current_seats": 2
                        }
                    ],
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 0,
                    "country": "PR",
                    "id": "jonkotthoff@migoiq.app",
                    "survey_step_3_raw": "customOption: google",
                    "last_name": "Kotthoff",
                    "survey_step_2_raw": "enterprise",
                    "apps": [
                        {
                            "sys_name": "devmigoplatform",
                            "id": "15232"
                        },
                        {
                            "sys_name": "testcrmmigo",
                            "id": "8743"
                        },
                        {
                            "sys_name": "migoplatform",
                            "id": "8742"
                        }
                    ]
                },
                "id": "28e070cc-ce6d-4d07-b043-c5a1fd7ac1c7",
                "date": 1673254856000,
                "receipt": "https://my.paddle.com/receipt/44618456-66118443/189950244-chre0f9721a4af1-b2839de01d",
                "comment": "Payment from Credit card or Paypal",
                "type": "paddle_payment",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Andrey",
                    "survey_step_1_raw": "developer_familiar_with_nocode",
                    "wallet_balance": 75,
                    "country": "RU",
                    "id": "behomes.b2b@gmail.com",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Sviridenko",
                    "survey_step_2_raw": "enterprise",
                    "apps": [
                        {
                            "sys_name": "behomes",
                            "id": "13590"
                        }
                    ]
                },
                "id": "dd2600e1-3f47-444e-8fcc-76392e16f7ec",
                "date": 1673254851000,
                "comment": "App behomes (13590), license payment, plan Startup",
                "app_id": {
                    "sysName": "behomes",
                    "id": "13590"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Igor",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 15.77,
                    "country": "RU",
                    "id": "okda@mail.ru",
                    "survey_step_3_raw": "customOption: Creatium",
                    "last_name": "Travkin",
                    "survey_step_2_raw": "NPO",
                    "apps": [
                        {
                            "sys_name": "orel",
                            "id": "12955"
                        }
                    ]
                },
                "id": "7f5f5ab0-b50c-4a1a-b377-b2eb53103a65",
                "date": 1673254849000,
                "comment": "App orel (12955), license payment, plan Startup",
                "app_id": {
                    "sysName": "orel",
                    "id": "12955"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Maksim",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": -28,
                    "country": "RU",
                    "id": "mxmup@mail.ru",
                    "survey_step_3_raw": "customOption: Web search",
                    "last_name": "Protsenko",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "budgetmonitoring",
                            "id": "14232"
                        },
                        {
                            "sys_name": "prohelper",
                            "id": "13580"
                        }
                    ]
                },
                "id": "4cc719da-373d-4c50-b22a-3bcecd05dfe3",
                "date": 1673254849000,
                "comment": "App budgetmonitoring (14232), license payment, plan Startup",
                "app_id": {
                    "sysName": "budgetmonitoring",
                    "id": "14232"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "59b12d65-6aef-4cf4-bda7-b4fd1bd02a32",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "FTM Agency",
                            "tariff_id": "team_monthly",
                            "id": "4b5c3318-9e08-4477-8bfe-f1e8cee9cce1",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "af048204-2d93-402a-9d7d-c7bfb95bda4c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "46727f47-2c56-4833-89dd-aa76464e8eab",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d1d2847d-6a60-4c7d-90d0-6a8a076e20b6",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "[test] AppSumo Tier",
                            "tariff_id": "AppSumo_tier3",
                            "id": "5003b645-65f9-4def-90a2-40b6cfa5ee18",
                            "is_hidden": true,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24b74108-e19d-475d-8772-37f0b31df133",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24fe18d6-a0bd-44bd-9179-f7437938bf36",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3d3cbc47-6414-44e4-9333-b64ae6d7c10c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1682daa5-0861-433e-8d34-e27d4caf3780",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "6c54ec46-9d07-4fb0-a0c3-8e8c38a868fc",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream-team",
                            "tariff_id": "team_monthly",
                            "id": "bc73f23b-9daf-435f-bca5-6ddcaa74e185",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "5555bcb0-e4bd-4682-aaa6-2cd31ac7298b",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Vlad Kovalsky Team",
                            "tariff_id": "team_monthly",
                            "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "My new team",
                            "tariff_id": "team_monthly",
                            "id": "6f58ecfd-9e3e-4475-b63c-b7e82359f06c",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "AppSumo Tier 1",
                            "tariff_id": "AppSumo_tier1",
                            "id": "a1019838-c902-4e70-b6dc-d89ba014e6c8",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d76eff40-d0f3-4dce-a645-7fab00cef671",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "dopamine.team",
                            "tariff_id": "team_monthly",
                            "id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1f722fd8-cc1c-4b2e-b76a-0a3755c56043",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "dbfc6e11-b26c-40a6-8caa-da3f142675ed",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3859abca-9c8c-4411-8978-f353cf0d6921",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "2c588515-3a41-4957-9fc8-6dea28f275fb",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "f6280a15-85d9-4424-9a0d-411dbf9cbc93",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Alex Orlov team",
                            "tariff_id": "team_yearly",
                            "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "34f3e17a-e71e-4385-a6d6-011e50e2df52",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Nikita Dolgov team",
                            "tariff_id": "team_monthly",
                            "id": "370620d6-e18a-4bc6-8b3d-c432f7c391d5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "fb07f7bf-7202-4e85-8221-0ae090d6975c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Oleg team",
                            "tariff_id": "team_monthly",
                            "id": "0513db3f-2227-445c-b760-c789ddac6f79",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Anna's team",
                            "tariff_id": "team_monthly",
                            "id": "60063caf-9c5d-439f-b2b7-ca62a1804b3d",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "9906f648-bca3-489c-b5c9-fc8c629fd037",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "e82f9a6f-bf3a-4869-bd74-eba52a0756b5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Zerocoder: Directual от 0 до PRO",
                            "tariff_id": "Zerocoder-education",
                            "id": "5eceb369-79f2-4d45-baf1-0a9b20225f1e",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "developer_new_to_nocode",
                    "wallet_balance": 125.41,
                    "country": "Undefined",
                    "id": "pavel@directual.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "Ershov",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "test-app-0011",
                            "id": "15231"
                        },
                        {
                            "sys_name": "code-redemption",
                            "id": "15029"
                        },
                        {
                            "sys_name": "hey-hoy",
                            "id": "15027"
                        },
                        {
                            "sys_name": "nft",
                            "id": "14644"
                        },
                        {
                            "sys_name": "mentor",
                            "id": "14637"
                        },
                        {
                            "sys_name": "test-limit",
                            "id": "14027"
                        },
                        {
                            "sys_name": "showcase-store",
                            "id": "13182"
                        },
                        {
                            "sys_name": "fpsform-test",
                            "id": "13181"
                        },
                        {
                            "sys_name": "bot-snapshot",
                            "id": "13174"
                        },
                        {
                            "sys_name": "talkbank-test",
                            "id": "13120"
                        },
                        {
                            "sys_name": "my-team-app",
                            "id": "12983"
                        },
                        {
                            "sys_name": "mig",
                            "id": "11537"
                        },
                        {
                            "sys_name": "tg-demo",
                            "id": "11488"
                        },
                        {
                            "sys_name": "showcase-attractions",
                            "id": "11307"
                        },
                        {
                            "sys_name": "showcase-imdb",
                            "id": "11306"
                        },
                        {
                            "sys_name": "basic-template",
                            "id": "11264"
                        },
                        {
                            "sys_name": "password-reset",
                            "id": "10996"
                        },
                        {
                            "sys_name": "web-plugins",
                            "id": "10926"
                        },
                        {
                            "sys_name": "japanapp",
                            "id": "10884"
                        },
                        {
                            "sys_name": "masters",
                            "id": "10818"
                        },
                        {
                            "sys_name": "jj",
                            "id": "10594"
                        },
                        {
                            "sys_name": "bootcamp-marketplace",
                            "id": "10547"
                        },
                        {
                            "sys_name": "marketplace",
                            "id": "10009"
                        },
                        {
                            "sys_name": "draftbit",
                            "id": "9988"
                        },
                        {
                            "sys_name": "dashboard",
                            "id": "9674"
                        },
                        {
                            "sys_name": "bootcamps",
                            "id": "9660"
                        },
                        {
                            "sys_name": "tuishou-alfa",
                            "id": "9544"
                        },
                        {
                            "sys_name": "testfiles",
                            "id": "9337"
                        },
                        {
                            "sys_name": "tuishou",
                            "id": "9312"
                        },
                        {
                            "sys_name": "students",
                            "id": "8750"
                        },
                        {
                            "sys_name": "webhook-parsing",
                            "id": "8084"
                        },
                        {
                            "sys_name": "weather-app",
                            "id": "7813"
                        },
                        {
                            "sys_name": "my-sandbox",
                            "id": "7767"
                        },
                        {
                            "sys_name": "my-app-as",
                            "id": "7510"
                        },
                        {
                            "sys_name": "sessionid",
                            "id": "7498"
                        },
                        {
                            "sys_name": "dev-pipeline",
                            "id": "6948"
                        },
                        {
                            "sys_name": "import-v6",
                            "id": "6912"
                        },
                        {
                            "sys_name": "dev",
                            "id": "6829"
                        },
                        {
                            "sys_name": "directual-groupbot",
                            "id": "6470"
                        },
                        {
                            "sys_name": "airtable",
                            "id": "6419"
                        },
                        {
                            "sys_name": "final-fps-test",
                            "id": "6238"
                        },
                        {
                            "sys_name": "new-fps-layout",
                            "id": "6166"
                        },
                        {
                            "sys_name": "tanera",
                            "id": "6082"
                        },
                        {
                            "sys_name": "crm-demo",
                            "id": "6033"
                        },
                        {
                            "sys_name": "productstar",
                            "id": "5925"
                        },
                        {
                            "sys_name": "new-library",
                            "id": "5420"
                        },
                        {
                            "sys_name": "how-to-auth",
                            "id": "5022"
                        },
                        {
                            "sys_name": "approval-system",
                            "id": "4575"
                        },
                        {
                            "sys_name": "test-bot",
                            "id": "4456"
                        },
                        {
                            "sys_name": "hello-there",
                            "id": "4337"
                        },
                        {
                            "sys_name": "test-webuser",
                            "id": "4284"
                        },
                        {
                            "sys_name": "temaplate-crm",
                            "id": "4083"
                        },
                        {
                            "sys_name": "ZerocodeCRM",
                            "id": "3973"
                        },
                        {
                            "sys_name": "nocode",
                            "id": "3799"
                        },
                        {
                            "sys_name": "gdfvfbvsgdvb",
                            "id": "3074"
                        },
                        {
                            "sys_name": "React-boilerplate",
                            "id": "2950"
                        },
                        {
                            "sys_name": "telegram_ibot",
                            "id": "2882"
                        },
                        {
                            "sys_name": "0qode-workshop",
                            "id": "2868"
                        },
                        {
                            "sys_name": "Generate_data_Directual_academy",
                            "id": "2595"
                        },
                        {
                            "sys_name": "directual-site",
                            "id": "1822"
                        }
                    ]
                },
                "id": "c010e6da-c0aa-4240-9a31-9647084f6bad",
                "date": 1673254849000,
                "comment": "App nft (14644), license payment, plan Startup",
                "app_id": {
                    "sysName": "nft",
                    "id": "14644"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Stephan",
                    "survey_step_1_raw": "developer_familiar_with_nocode",
                    "wallet_balance": 42,
                    "country": "TR",
                    "id": "89154252413@mail.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Kor",
                    "survey_step_2_raw": "government",
                    "apps": [
                        {
                            "sys_name": "dafa",
                            "id": "15005"
                        },
                        {
                            "sys_name": "check",
                            "id": "15004"
                        },
                        {
                            "sys_name": "sneakersmarketplace",
                            "id": "14988"
                        }
                    ]
                },
                "id": "0207cc0f-316a-44c8-b391-560b26ba3828",
                "date": 1673254849000,
                "comment": "App sneakersmarketplace (14988), license payment, plan Startup",
                "app_id": {
                    "sysName": "sneakersmarketplace",
                    "id": "14988"
                },
                "type": "app_payment"
            },
            {
                "balance": -429,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Jonathan",
                    "team_ids": [
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "migo Team",
                            "tariff_id": "team_monthly",
                            "id": "bb1d4ab8-f481-4995-98f0-da6e1baf192e",
                            "is_hidden": false,
                            "current_seats": 2
                        }
                    ],
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 0,
                    "country": "PR",
                    "id": "jonkotthoff@migoiq.app",
                    "survey_step_3_raw": "customOption: google",
                    "last_name": "Kotthoff",
                    "survey_step_2_raw": "enterprise",
                    "apps": [
                        {
                            "sys_name": "devmigoplatform",
                            "id": "15232"
                        },
                        {
                            "sys_name": "testcrmmigo",
                            "id": "8743"
                        },
                        {
                            "sys_name": "migoplatform",
                            "id": "8742"
                        }
                    ]
                },
                "id": "a758b712-971e-442f-89b3-b86a618d6e56",
                "date": 1673254848000,
                "comment": "App migoplatform (8742), license payment, plan Business",
                "app_id": {
                    "sysName": "migoplatform",
                    "team_id": "bb1d4ab8-f481-4995-98f0-da6e1baf192e",
                    "id": "8742"
                },
                "type": "app_payment"
            },
            {
                "balance": -2,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "59b12d65-6aef-4cf4-bda7-b4fd1bd02a32",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "FTM Agency",
                            "tariff_id": "team_monthly",
                            "id": "4b5c3318-9e08-4477-8bfe-f1e8cee9cce1",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "af048204-2d93-402a-9d7d-c7bfb95bda4c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "46727f47-2c56-4833-89dd-aa76464e8eab",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d1d2847d-6a60-4c7d-90d0-6a8a076e20b6",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "[test] AppSumo Tier",
                            "tariff_id": "AppSumo_tier3",
                            "id": "5003b645-65f9-4def-90a2-40b6cfa5ee18",
                            "is_hidden": true,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24b74108-e19d-475d-8772-37f0b31df133",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24fe18d6-a0bd-44bd-9179-f7437938bf36",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3d3cbc47-6414-44e4-9333-b64ae6d7c10c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1682daa5-0861-433e-8d34-e27d4caf3780",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "6c54ec46-9d07-4fb0-a0c3-8e8c38a868fc",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream-team",
                            "tariff_id": "team_monthly",
                            "id": "bc73f23b-9daf-435f-bca5-6ddcaa74e185",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "5555bcb0-e4bd-4682-aaa6-2cd31ac7298b",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Vlad Kovalsky Team",
                            "tariff_id": "team_monthly",
                            "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "My new team",
                            "tariff_id": "team_monthly",
                            "id": "6f58ecfd-9e3e-4475-b63c-b7e82359f06c",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "AppSumo Tier 1",
                            "tariff_id": "AppSumo_tier1",
                            "id": "a1019838-c902-4e70-b6dc-d89ba014e6c8",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d76eff40-d0f3-4dce-a645-7fab00cef671",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "dopamine.team",
                            "tariff_id": "team_monthly",
                            "id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1f722fd8-cc1c-4b2e-b76a-0a3755c56043",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "dbfc6e11-b26c-40a6-8caa-da3f142675ed",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3859abca-9c8c-4411-8978-f353cf0d6921",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "2c588515-3a41-4957-9fc8-6dea28f275fb",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "f6280a15-85d9-4424-9a0d-411dbf9cbc93",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Alex Orlov team",
                            "tariff_id": "team_yearly",
                            "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "34f3e17a-e71e-4385-a6d6-011e50e2df52",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Nikita Dolgov team",
                            "tariff_id": "team_monthly",
                            "id": "370620d6-e18a-4bc6-8b3d-c432f7c391d5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "fb07f7bf-7202-4e85-8221-0ae090d6975c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Oleg team",
                            "tariff_id": "team_monthly",
                            "id": "0513db3f-2227-445c-b760-c789ddac6f79",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Anna's team",
                            "tariff_id": "team_monthly",
                            "id": "60063caf-9c5d-439f-b2b7-ca62a1804b3d",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "9906f648-bca3-489c-b5c9-fc8c629fd037",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "e82f9a6f-bf3a-4869-bd74-eba52a0756b5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Zerocoder: Directual от 0 до PRO",
                            "tariff_id": "Zerocoder-education",
                            "id": "5eceb369-79f2-4d45-baf1-0a9b20225f1e",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "developer_new_to_nocode",
                    "wallet_balance": 125.41,
                    "country": "Undefined",
                    "id": "pavel@directual.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "Ershov",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "test-app-0011",
                            "id": "15231"
                        },
                        {
                            "sys_name": "code-redemption",
                            "id": "15029"
                        },
                        {
                            "sys_name": "hey-hoy",
                            "id": "15027"
                        },
                        {
                            "sys_name": "nft",
                            "id": "14644"
                        },
                        {
                            "sys_name": "mentor",
                            "id": "14637"
                        },
                        {
                            "sys_name": "test-limit",
                            "id": "14027"
                        },
                        {
                            "sys_name": "showcase-store",
                            "id": "13182"
                        },
                        {
                            "sys_name": "fpsform-test",
                            "id": "13181"
                        },
                        {
                            "sys_name": "bot-snapshot",
                            "id": "13174"
                        },
                        {
                            "sys_name": "talkbank-test",
                            "id": "13120"
                        },
                        {
                            "sys_name": "my-team-app",
                            "id": "12983"
                        },
                        {
                            "sys_name": "mig",
                            "id": "11537"
                        },
                        {
                            "sys_name": "tg-demo",
                            "id": "11488"
                        },
                        {
                            "sys_name": "showcase-attractions",
                            "id": "11307"
                        },
                        {
                            "sys_name": "showcase-imdb",
                            "id": "11306"
                        },
                        {
                            "sys_name": "basic-template",
                            "id": "11264"
                        },
                        {
                            "sys_name": "password-reset",
                            "id": "10996"
                        },
                        {
                            "sys_name": "web-plugins",
                            "id": "10926"
                        },
                        {
                            "sys_name": "japanapp",
                            "id": "10884"
                        },
                        {
                            "sys_name": "masters",
                            "id": "10818"
                        },
                        {
                            "sys_name": "jj",
                            "id": "10594"
                        },
                        {
                            "sys_name": "bootcamp-marketplace",
                            "id": "10547"
                        },
                        {
                            "sys_name": "marketplace",
                            "id": "10009"
                        },
                        {
                            "sys_name": "draftbit",
                            "id": "9988"
                        },
                        {
                            "sys_name": "dashboard",
                            "id": "9674"
                        },
                        {
                            "sys_name": "bootcamps",
                            "id": "9660"
                        },
                        {
                            "sys_name": "tuishou-alfa",
                            "id": "9544"
                        },
                        {
                            "sys_name": "testfiles",
                            "id": "9337"
                        },
                        {
                            "sys_name": "tuishou",
                            "id": "9312"
                        },
                        {
                            "sys_name": "students",
                            "id": "8750"
                        },
                        {
                            "sys_name": "webhook-parsing",
                            "id": "8084"
                        },
                        {
                            "sys_name": "weather-app",
                            "id": "7813"
                        },
                        {
                            "sys_name": "my-sandbox",
                            "id": "7767"
                        },
                        {
                            "sys_name": "my-app-as",
                            "id": "7510"
                        },
                        {
                            "sys_name": "sessionid",
                            "id": "7498"
                        },
                        {
                            "sys_name": "dev-pipeline",
                            "id": "6948"
                        },
                        {
                            "sys_name": "import-v6",
                            "id": "6912"
                        },
                        {
                            "sys_name": "dev",
                            "id": "6829"
                        },
                        {
                            "sys_name": "directual-groupbot",
                            "id": "6470"
                        },
                        {
                            "sys_name": "airtable",
                            "id": "6419"
                        },
                        {
                            "sys_name": "final-fps-test",
                            "id": "6238"
                        },
                        {
                            "sys_name": "new-fps-layout",
                            "id": "6166"
                        },
                        {
                            "sys_name": "tanera",
                            "id": "6082"
                        },
                        {
                            "sys_name": "crm-demo",
                            "id": "6033"
                        },
                        {
                            "sys_name": "productstar",
                            "id": "5925"
                        },
                        {
                            "sys_name": "new-library",
                            "id": "5420"
                        },
                        {
                            "sys_name": "how-to-auth",
                            "id": "5022"
                        },
                        {
                            "sys_name": "approval-system",
                            "id": "4575"
                        },
                        {
                            "sys_name": "test-bot",
                            "id": "4456"
                        },
                        {
                            "sys_name": "hello-there",
                            "id": "4337"
                        },
                        {
                            "sys_name": "test-webuser",
                            "id": "4284"
                        },
                        {
                            "sys_name": "temaplate-crm",
                            "id": "4083"
                        },
                        {
                            "sys_name": "ZerocodeCRM",
                            "id": "3973"
                        },
                        {
                            "sys_name": "nocode",
                            "id": "3799"
                        },
                        {
                            "sys_name": "gdfvfbvsgdvb",
                            "id": "3074"
                        },
                        {
                            "sys_name": "React-boilerplate",
                            "id": "2950"
                        },
                        {
                            "sys_name": "telegram_ibot",
                            "id": "2882"
                        },
                        {
                            "sys_name": "0qode-workshop",
                            "id": "2868"
                        },
                        {
                            "sys_name": "Generate_data_Directual_academy",
                            "id": "2595"
                        },
                        {
                            "sys_name": "directual-site",
                            "id": "1822"
                        }
                    ]
                },
                "id": "194302af-a0ab-4c07-9d55-fa68761d4daa",
                "date": 1673254834000,
                "comment": "App directual-site (1822), license payment, plan Pro-sandbox",
                "app_id": {
                    "sysName": "directual-site",
                    "team_id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                    "id": "1822"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Артур",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 3,
                    "country": "RU",
                    "id": "arturjarov89@gmail.com",
                    "survey_step_3_raw": "customOption: Productstar",
                    "last_name": "Ярославов",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "tildademo",
                            "id": "15295"
                        },
                        {
                            "sys_name": "recrutssearch",
                            "id": "15285"
                        },
                        {
                            "sys_name": "crmnocode",
                            "id": "15279"
                        },
                        {
                            "sys_name": "fruitcrm2023",
                            "id": "15270"
                        },
                        {
                            "sys_name": "treker2023taxi",
                            "id": "15253"
                        }
                    ]
                },
                "id": "f59b5111-5fcc-4883-9c03-e25e07b0c4ff",
                "date": 1673253957000,
                "comment": "Create app recrutssearch, plan Startup-monthly",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Арсен",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 61,
                    "country": "RU",
                    "id": "safarana0405@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "Сафарян",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "5645",
                            "id": "15283"
                        },
                        {
                            "sys_name": "enclavezxc",
                            "id": "14143"
                        }
                    ]
                },
                "id": "d57675f9-5b7d-4b0e-95d1-cd419a7bb132",
                "date": 1673251279000,
                "comment": "Create app 5645, plan Startup-monthly",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": 100,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Арсен",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 61,
                    "country": "RU",
                    "id": "safarana0405@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "Сафарян",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "5645",
                            "id": "15283"
                        },
                        {
                            "sys_name": "enclavezxc",
                            "id": "14143"
                        }
                    ]
                },
                "id": "a6cb5fd9-1c30-41f0-9897-4b4a244c0c7f",
                "date": 1673251223000,
                "comment": "Promo-code PRODUCTHUNT",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": 140,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Adel",
                    "survey_step_1_raw": "pro_nocoder",
                    "wallet_balance": 0.02,
                    "country": "KG",
                    "id": "kadyrovadel.i@yandex.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Kadyrov",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "kale-care",
                            "id": "11750"
                        }
                    ]
                },
                "id": "26ade22c-5a19-47ba-b161-2d69e7c4bc06",
                "date": 1673222695000,
                "comment": "Adding funds via Tinkoff 9520.0 ₽ → 140.0 D-coins",
                "type": "tinkoff",
                "app_id": ""
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Данил",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 50,
                    "country": "DE",
                    "id": "danil@mways.ru",
                    "survey_step_3_raw": "friends",
                    "last_name": "Попов",
                    "survey_step_2_raw": "SMB",
                    "apps": [
                        {
                            "sys_name": "zvuk",
                            "id": "15044"
                        }
                    ]
                },
                "id": "780a9431-8346-4f6c-a4fc-45ab48db4bd9",
                "date": 1673184252000,
                "comment": "Promo-code HAPPYNEWYEAR",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Артур",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 3,
                    "country": "RU",
                    "id": "arturjarov89@gmail.com",
                    "survey_step_3_raw": "customOption: Productstar",
                    "last_name": "Ярославов",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "tildademo",
                            "id": "15295"
                        },
                        {
                            "sys_name": "recrutssearch",
                            "id": "15285"
                        },
                        {
                            "sys_name": "crmnocode",
                            "id": "15279"
                        },
                        {
                            "sys_name": "fruitcrm2023",
                            "id": "15270"
                        },
                        {
                            "sys_name": "treker2023taxi",
                            "id": "15253"
                        }
                    ]
                },
                "id": "18875566-91f4-4887-b06e-c55222227036",
                "date": 1673180758000,
                "comment": "Create app fruitcrm2023, plan Startup-monthly",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": 39.18,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Sergey",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 0,
                    "country": "UZ",
                    "id": "sergey.vv.andreev@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "Andreev",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "eight",
                            "id": "14599"
                        }
                    ]
                },
                "id": "3d20c710-12aa-4937-b208-8b275480b3be",
                "date": 1673168438000,
                "receipt": "https://my.paddle.com/receipt/43455809-66028238/184403924-chre8306cb8c108-5f2f71a74c",
                "comment": "Payment from Credit card or Paypal",
                "type": "paddle_payment",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Денис",
                    "survey_step_1_raw": "customOption: .",
                    "wallet_balance": -36,
                    "country": "RU",
                    "id": "stratienko.dv@gmail.com",
                    "survey_step_3_raw": "customOption: productstar",
                    "last_name": "Стратиенко",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "product-star-csr",
                            "id": "14956"
                        },
                        {
                            "sys_name": "productstar-csr",
                            "id": "14954"
                        }
                    ]
                },
                "id": "fb46259d-d395-4169-8ef7-9d9a73edbd0e",
                "date": 1673168433000,
                "comment": "App product-star-csr (14956), license payment, plan Startup",
                "app_id": {
                    "sysName": "product-star-csr",
                    "id": "14956"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": true,
                    "first_name": "Nikita",
                    "team_ids": [
                        {
                            "name": "Chicago bulls",
                            "tariff_id": "team_monthly",
                            "id": "b54c3a4c-0c72-4329-8894-e454faa36a9f",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "006886d0-f153-4fdf-962b-e38e85e64d69",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        }
                    ],
                    "wallet_balance": -25.0509,
                    "country": "DE",
                    "id": "nikita@directual.com",
                    "last_name": "Navalikhin",
                    "apps": [
                        {
                            "sys_name": "testspeed1",
                            "id": "14709"
                        },
                        {
                            "sys_name": "nftairdrop",
                            "id": "14635"
                        },
                        {
                            "sys_name": "metashop",
                            "id": "13231"
                        },
                        {
                            "sys_name": "testbuglinksaving",
                            "id": "13195"
                        },
                        {
                            "sys_name": "web3test",
                            "id": "13179"
                        },
                        {
                            "sys_name": "rolostestapp",
                            "id": "12579"
                        },
                        {
                            "sys_name": "testapp1122",
                            "id": "12577"
                        },
                        {
                            "sys_name": "sdds",
                            "id": "12499"
                        },
                        {
                            "sys_name": "hash",
                            "id": "12188"
                        },
                        {
                            "sys_name": "eth",
                            "id": "12187"
                        },
                        {
                            "sys_name": "coinalerts",
                            "id": "10724"
                        },
                        {
                            "sys_name": "testteamplan",
                            "id": "7856"
                        },
                        {
                            "sys_name": "testuserpic",
                            "id": "7793"
                        },
                        {
                            "sys_name": "testsdsdsdds",
                            "id": "7704"
                        },
                        {
                            "sys_name": "testappsumo",
                            "id": "7530"
                        },
                        {
                            "sys_name": "testtariff",
                            "id": "7516"
                        },
                        {
                            "sys_name": "crmtest2",
                            "id": "7413"
                        },
                        {
                            "sys_name": "whoismyuser",
                            "id": "7365"
                        },
                        {
                            "sys_name": "smarthouse777",
                            "id": "7067"
                        },
                        {
                            "sys_name": "dev2",
                            "id": "6886"
                        },
                        {
                            "sys_name": "nikita",
                            "id": "6550"
                        }
                    ]
                },
                "id": "bc8f0e7b-85a4-47ef-b957-d723b93d8d17",
                "date": 1673168433000,
                "comment": "App nftairdrop (14635), license payment, plan Startup",
                "app_id": {
                    "sysName": "nftairdrop",
                    "id": "14635"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Anastasia",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 22,
                    "country": "BY",
                    "id": "ansumar19@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "Blium",
                    "survey_step_2_raw": "clients_agency",
                    "apps": [
                        {
                            "sys_name": "bookiedookie",
                            "id": "14975"
                        }
                    ]
                },
                "id": "d1fc2a0f-2165-4427-a7af-c65897be57e9",
                "date": 1673168433000,
                "comment": "App bookiedookie (14975), license payment, plan Startup",
                "app_id": {
                    "sysName": "bookiedookie",
                    "id": "14975"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "59b12d65-6aef-4cf4-bda7-b4fd1bd02a32",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "FTM Agency",
                            "tariff_id": "team_monthly",
                            "id": "4b5c3318-9e08-4477-8bfe-f1e8cee9cce1",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "af048204-2d93-402a-9d7d-c7bfb95bda4c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "46727f47-2c56-4833-89dd-aa76464e8eab",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d1d2847d-6a60-4c7d-90d0-6a8a076e20b6",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "[test] AppSumo Tier",
                            "tariff_id": "AppSumo_tier3",
                            "id": "5003b645-65f9-4def-90a2-40b6cfa5ee18",
                            "is_hidden": true,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24b74108-e19d-475d-8772-37f0b31df133",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24fe18d6-a0bd-44bd-9179-f7437938bf36",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3d3cbc47-6414-44e4-9333-b64ae6d7c10c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1682daa5-0861-433e-8d34-e27d4caf3780",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "6c54ec46-9d07-4fb0-a0c3-8e8c38a868fc",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream-team",
                            "tariff_id": "team_monthly",
                            "id": "bc73f23b-9daf-435f-bca5-6ddcaa74e185",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "5555bcb0-e4bd-4682-aaa6-2cd31ac7298b",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Vlad Kovalsky Team",
                            "tariff_id": "team_monthly",
                            "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "My new team",
                            "tariff_id": "team_monthly",
                            "id": "6f58ecfd-9e3e-4475-b63c-b7e82359f06c",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "AppSumo Tier 1",
                            "tariff_id": "AppSumo_tier1",
                            "id": "a1019838-c902-4e70-b6dc-d89ba014e6c8",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d76eff40-d0f3-4dce-a645-7fab00cef671",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "dopamine.team",
                            "tariff_id": "team_monthly",
                            "id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1f722fd8-cc1c-4b2e-b76a-0a3755c56043",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "dbfc6e11-b26c-40a6-8caa-da3f142675ed",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3859abca-9c8c-4411-8978-f353cf0d6921",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "2c588515-3a41-4957-9fc8-6dea28f275fb",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "f6280a15-85d9-4424-9a0d-411dbf9cbc93",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Alex Orlov team",
                            "tariff_id": "team_yearly",
                            "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "34f3e17a-e71e-4385-a6d6-011e50e2df52",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Nikita Dolgov team",
                            "tariff_id": "team_monthly",
                            "id": "370620d6-e18a-4bc6-8b3d-c432f7c391d5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "fb07f7bf-7202-4e85-8221-0ae090d6975c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Oleg team",
                            "tariff_id": "team_monthly",
                            "id": "0513db3f-2227-445c-b760-c789ddac6f79",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Anna's team",
                            "tariff_id": "team_monthly",
                            "id": "60063caf-9c5d-439f-b2b7-ca62a1804b3d",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "9906f648-bca3-489c-b5c9-fc8c629fd037",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "e82f9a6f-bf3a-4869-bd74-eba52a0756b5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Zerocoder: Directual от 0 до PRO",
                            "tariff_id": "Zerocoder-education",
                            "id": "5eceb369-79f2-4d45-baf1-0a9b20225f1e",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "developer_new_to_nocode",
                    "wallet_balance": 125.41,
                    "country": "Undefined",
                    "id": "pavel@directual.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "Ershov",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "test-app-0011",
                            "id": "15231"
                        },
                        {
                            "sys_name": "code-redemption",
                            "id": "15029"
                        },
                        {
                            "sys_name": "hey-hoy",
                            "id": "15027"
                        },
                        {
                            "sys_name": "nft",
                            "id": "14644"
                        },
                        {
                            "sys_name": "mentor",
                            "id": "14637"
                        },
                        {
                            "sys_name": "test-limit",
                            "id": "14027"
                        },
                        {
                            "sys_name": "showcase-store",
                            "id": "13182"
                        },
                        {
                            "sys_name": "fpsform-test",
                            "id": "13181"
                        },
                        {
                            "sys_name": "bot-snapshot",
                            "id": "13174"
                        },
                        {
                            "sys_name": "talkbank-test",
                            "id": "13120"
                        },
                        {
                            "sys_name": "my-team-app",
                            "id": "12983"
                        },
                        {
                            "sys_name": "mig",
                            "id": "11537"
                        },
                        {
                            "sys_name": "tg-demo",
                            "id": "11488"
                        },
                        {
                            "sys_name": "showcase-attractions",
                            "id": "11307"
                        },
                        {
                            "sys_name": "showcase-imdb",
                            "id": "11306"
                        },
                        {
                            "sys_name": "basic-template",
                            "id": "11264"
                        },
                        {
                            "sys_name": "password-reset",
                            "id": "10996"
                        },
                        {
                            "sys_name": "web-plugins",
                            "id": "10926"
                        },
                        {
                            "sys_name": "japanapp",
                            "id": "10884"
                        },
                        {
                            "sys_name": "masters",
                            "id": "10818"
                        },
                        {
                            "sys_name": "jj",
                            "id": "10594"
                        },
                        {
                            "sys_name": "bootcamp-marketplace",
                            "id": "10547"
                        },
                        {
                            "sys_name": "marketplace",
                            "id": "10009"
                        },
                        {
                            "sys_name": "draftbit",
                            "id": "9988"
                        },
                        {
                            "sys_name": "dashboard",
                            "id": "9674"
                        },
                        {
                            "sys_name": "bootcamps",
                            "id": "9660"
                        },
                        {
                            "sys_name": "tuishou-alfa",
                            "id": "9544"
                        },
                        {
                            "sys_name": "testfiles",
                            "id": "9337"
                        },
                        {
                            "sys_name": "tuishou",
                            "id": "9312"
                        },
                        {
                            "sys_name": "students",
                            "id": "8750"
                        },
                        {
                            "sys_name": "webhook-parsing",
                            "id": "8084"
                        },
                        {
                            "sys_name": "weather-app",
                            "id": "7813"
                        },
                        {
                            "sys_name": "my-sandbox",
                            "id": "7767"
                        },
                        {
                            "sys_name": "my-app-as",
                            "id": "7510"
                        },
                        {
                            "sys_name": "sessionid",
                            "id": "7498"
                        },
                        {
                            "sys_name": "dev-pipeline",
                            "id": "6948"
                        },
                        {
                            "sys_name": "import-v6",
                            "id": "6912"
                        },
                        {
                            "sys_name": "dev",
                            "id": "6829"
                        },
                        {
                            "sys_name": "directual-groupbot",
                            "id": "6470"
                        },
                        {
                            "sys_name": "airtable",
                            "id": "6419"
                        },
                        {
                            "sys_name": "final-fps-test",
                            "id": "6238"
                        },
                        {
                            "sys_name": "new-fps-layout",
                            "id": "6166"
                        },
                        {
                            "sys_name": "tanera",
                            "id": "6082"
                        },
                        {
                            "sys_name": "crm-demo",
                            "id": "6033"
                        },
                        {
                            "sys_name": "productstar",
                            "id": "5925"
                        },
                        {
                            "sys_name": "new-library",
                            "id": "5420"
                        },
                        {
                            "sys_name": "how-to-auth",
                            "id": "5022"
                        },
                        {
                            "sys_name": "approval-system",
                            "id": "4575"
                        },
                        {
                            "sys_name": "test-bot",
                            "id": "4456"
                        },
                        {
                            "sys_name": "hello-there",
                            "id": "4337"
                        },
                        {
                            "sys_name": "test-webuser",
                            "id": "4284"
                        },
                        {
                            "sys_name": "temaplate-crm",
                            "id": "4083"
                        },
                        {
                            "sys_name": "ZerocodeCRM",
                            "id": "3973"
                        },
                        {
                            "sys_name": "nocode",
                            "id": "3799"
                        },
                        {
                            "sys_name": "gdfvfbvsgdvb",
                            "id": "3074"
                        },
                        {
                            "sys_name": "React-boilerplate",
                            "id": "2950"
                        },
                        {
                            "sys_name": "telegram_ibot",
                            "id": "2882"
                        },
                        {
                            "sys_name": "0qode-workshop",
                            "id": "2868"
                        },
                        {
                            "sys_name": "Generate_data_Directual_academy",
                            "id": "2595"
                        },
                        {
                            "sys_name": "directual-site",
                            "id": "1822"
                        }
                    ]
                },
                "id": "6962f0e0-da3b-4513-bad9-611e8bbad1ab",
                "date": 1673168433000,
                "comment": "App mentor (14637), license payment, plan Startup",
                "app_id": {
                    "sysName": "mentor",
                    "id": "14637"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Sergey",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": -153,
                    "country": "RU",
                    "id": "ksying.ggl@gmail.com",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "K",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "crm-test-v2",
                            "id": "14626"
                        },
                        {
                            "sys_name": "crmstudytest",
                            "id": "14606"
                        },
                        {
                            "sys_name": "ksytestubot",
                            "id": "14580"
                        },
                        {
                            "sys_name": "my-movies-1",
                            "id": "14471"
                        }
                    ]
                },
                "id": "9bf41d2e-c98c-47a0-979a-b9e6315c0899",
                "date": 1673168433000,
                "comment": "App crmstudytest (14606), license payment, plan Startup",
                "app_id": {
                    "sysName": "crmstudytest",
                    "id": "14606"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Sergey",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 0,
                    "country": "UZ",
                    "id": "sergey.vv.andreev@gmail.com",
                    "survey_step_3_raw": "friends",
                    "last_name": "Andreev",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "eight",
                            "id": "14599"
                        }
                    ]
                },
                "id": "cd4f662b-7014-45ae-bea1-1b07f622d602",
                "date": 1673168433000,
                "comment": "App eight (14599), license payment, plan Startup",
                "app_id": {
                    "sysName": "eight",
                    "id": "14599"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Денис",
                    "survey_step_1_raw": "customOption: .",
                    "wallet_balance": -36,
                    "country": "RU",
                    "id": "stratienko.dv@gmail.com",
                    "survey_step_3_raw": "customOption: productstar",
                    "last_name": "Стратиенко",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "product-star-csr",
                            "id": "14956"
                        },
                        {
                            "sys_name": "productstar-csr",
                            "id": "14954"
                        }
                    ]
                },
                "id": "ab184942-c4ae-4320-9112-058578584844",
                "date": 1673168433000,
                "comment": "App productstar-csr (14954), license payment, plan Startup",
                "app_id": {
                    "sysName": "productstar-csr",
                    "id": "14954"
                },
                "type": "app_payment"
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Anton",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 108,
                    "country": "PL",
                    "id": "eddress@yandex.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Romaniuk",
                    "survey_step_2_raw": "personal_use",
                    "apps": [
                        {
                            "sys_name": "attraction2",
                            "id": "14295"
                        },
                        {
                            "sys_name": "designgineer",
                            "id": "14261"
                        },
                        {
                            "sys_name": "deeprequests",
                            "id": "14250"
                        },
                        {
                            "sys_name": "dipayments",
                            "id": "14167"
                        },
                        {
                            "sys_name": "0911market",
                            "id": "14164"
                        },
                        {
                            "sys_name": "20220911road",
                            "id": "14163"
                        },
                        {
                            "sys_name": "folio",
                            "id": "14162"
                        },
                        {
                            "sys_name": "crm0720",
                            "id": "13652"
                        },
                        {
                            "sys_name": "crm0719",
                            "id": "13639"
                        },
                        {
                            "sys_name": "crmbasic20220710",
                            "id": "13511"
                        },
                        {
                            "sys_name": "lesson13",
                            "id": "13493"
                        },
                        {
                            "sys_name": "movies-anton",
                            "id": "13405"
                        }
                    ]
                },
                "id": "5d660c4b-51f1-431d-84f0-92e0a69c9ae0",
                "date": 1673168432000,
                "comment": "App designgineer (14261), license payment, plan Startup",
                "app_id": {
                    "sysName": "designgineer",
                    "id": "14261"
                },
                "type": "app_payment"
            },
            {
                "balance": -2,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Pavel",
                    "team_ids": [
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "59b12d65-6aef-4cf4-bda7-b4fd1bd02a32",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "FTM Agency",
                            "tariff_id": "team_monthly",
                            "id": "4b5c3318-9e08-4477-8bfe-f1e8cee9cce1",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "af048204-2d93-402a-9d7d-c7bfb95bda4c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "46727f47-2c56-4833-89dd-aa76464e8eab",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d1d2847d-6a60-4c7d-90d0-6a8a076e20b6",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "[test] AppSumo Tier",
                            "tariff_id": "AppSumo_tier3",
                            "id": "5003b645-65f9-4def-90a2-40b6cfa5ee18",
                            "is_hidden": true,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24b74108-e19d-475d-8772-37f0b31df133",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "24fe18d6-a0bd-44bd-9179-f7437938bf36",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3d3cbc47-6414-44e4-9333-b64ae6d7c10c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1682daa5-0861-433e-8d34-e27d4caf3780",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "6c54ec46-9d07-4fb0-a0c3-8e8c38a868fc",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream-team",
                            "tariff_id": "team_monthly",
                            "id": "bc73f23b-9daf-435f-bca5-6ddcaa74e185",
                            "is_hidden": true,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "5555bcb0-e4bd-4682-aaa6-2cd31ac7298b",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Vlad Kovalsky Team",
                            "tariff_id": "team_monthly",
                            "id": "f7d4dbda-c62c-427a-b562-deaae9edf1ad",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "My new team",
                            "tariff_id": "team_monthly",
                            "id": "6f58ecfd-9e3e-4475-b63c-b7e82359f06c",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "AppSumo Tier 1",
                            "tariff_id": "AppSumo_tier1",
                            "id": "a1019838-c902-4e70-b6dc-d89ba014e6c8",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team 2",
                            "tariff_id": "AppSumo_tier3",
                            "id": "2c3bbf42-797a-49ba-a67f-831072248805",
                            "is_hidden": false,
                            "current_seats": 2
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "d76eff40-d0f3-4dce-a645-7fab00cef671",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "dopamine.team",
                            "tariff_id": "team_monthly",
                            "id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "1f722fd8-cc1c-4b2e-b76a-0a3755c56043",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "dbfc6e11-b26c-40a6-8caa-da3f142675ed",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "3859abca-9c8c-4411-8978-f353cf0d6921",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Code world team",
                            "tariff_id": "team_monthly",
                            "id": "be38019c-2047-43aa-a9f8-8906a4ba0587",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "2c588515-3a41-4957-9fc8-6dea28f275fb",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "f6280a15-85d9-4424-9a0d-411dbf9cbc93",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Max Lykov team",
                            "tariff_id": "team_monthly",
                            "id": "c8105c7f-f1f4-4991-8d23-7584ba401c2c",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Alex Orlov team",
                            "tariff_id": "team_yearly",
                            "id": "c1ab7192-ae41-4f17-a571-38acf10602f7",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Lifetime deal",
                            "tariff_id": "AppSumo_tier3",
                            "id": "0f969867-941d-46ea-a0be-3d3db0a5e3dd",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "34f3e17a-e71e-4385-a6d6-011e50e2df52",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Nikita Dolgov team",
                            "tariff_id": "team_monthly",
                            "id": "370620d6-e18a-4bc6-8b3d-c432f7c391d5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "fb07f7bf-7202-4e85-8221-0ae090d6975c",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Oleg team",
                            "tariff_id": "team_monthly",
                            "id": "0513db3f-2227-445c-b760-c789ddac6f79",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Anna's team",
                            "tariff_id": "team_monthly",
                            "id": "60063caf-9c5d-439f-b2b7-ca62a1804b3d",
                            "is_hidden": false,
                            "current_seats": 0
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "9906f648-bca3-489c-b5c9-fc8c629fd037",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Dream team",
                            "tariff_id": "team_monthly",
                            "id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                            "is_hidden": false,
                            "current_seats": 3
                        },
                        {
                            "name": "Bootcamp",
                            "tariff_id": "Bootcamp",
                            "id": "e82f9a6f-bf3a-4869-bd74-eba52a0756b5",
                            "is_hidden": false,
                            "current_seats": 1
                        },
                        {
                            "name": "Zerocoder: Directual от 0 до PRO",
                            "tariff_id": "Zerocoder-education",
                            "id": "5eceb369-79f2-4d45-baf1-0a9b20225f1e",
                            "is_hidden": true,
                            "current_seats": 1
                        }
                    ],
                    "survey_step_1_raw": "developer_new_to_nocode",
                    "wallet_balance": 125.41,
                    "country": "Undefined",
                    "id": "pavel@directual.com",
                    "survey_step_3_raw": "producthunt",
                    "last_name": "Ershov",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "test-app-0011",
                            "id": "15231"
                        },
                        {
                            "sys_name": "code-redemption",
                            "id": "15029"
                        },
                        {
                            "sys_name": "hey-hoy",
                            "id": "15027"
                        },
                        {
                            "sys_name": "nft",
                            "id": "14644"
                        },
                        {
                            "sys_name": "mentor",
                            "id": "14637"
                        },
                        {
                            "sys_name": "test-limit",
                            "id": "14027"
                        },
                        {
                            "sys_name": "showcase-store",
                            "id": "13182"
                        },
                        {
                            "sys_name": "fpsform-test",
                            "id": "13181"
                        },
                        {
                            "sys_name": "bot-snapshot",
                            "id": "13174"
                        },
                        {
                            "sys_name": "talkbank-test",
                            "id": "13120"
                        },
                        {
                            "sys_name": "my-team-app",
                            "id": "12983"
                        },
                        {
                            "sys_name": "mig",
                            "id": "11537"
                        },
                        {
                            "sys_name": "tg-demo",
                            "id": "11488"
                        },
                        {
                            "sys_name": "showcase-attractions",
                            "id": "11307"
                        },
                        {
                            "sys_name": "showcase-imdb",
                            "id": "11306"
                        },
                        {
                            "sys_name": "basic-template",
                            "id": "11264"
                        },
                        {
                            "sys_name": "password-reset",
                            "id": "10996"
                        },
                        {
                            "sys_name": "web-plugins",
                            "id": "10926"
                        },
                        {
                            "sys_name": "japanapp",
                            "id": "10884"
                        },
                        {
                            "sys_name": "masters",
                            "id": "10818"
                        },
                        {
                            "sys_name": "jj",
                            "id": "10594"
                        },
                        {
                            "sys_name": "bootcamp-marketplace",
                            "id": "10547"
                        },
                        {
                            "sys_name": "marketplace",
                            "id": "10009"
                        },
                        {
                            "sys_name": "draftbit",
                            "id": "9988"
                        },
                        {
                            "sys_name": "dashboard",
                            "id": "9674"
                        },
                        {
                            "sys_name": "bootcamps",
                            "id": "9660"
                        },
                        {
                            "sys_name": "tuishou-alfa",
                            "id": "9544"
                        },
                        {
                            "sys_name": "testfiles",
                            "id": "9337"
                        },
                        {
                            "sys_name": "tuishou",
                            "id": "9312"
                        },
                        {
                            "sys_name": "students",
                            "id": "8750"
                        },
                        {
                            "sys_name": "webhook-parsing",
                            "id": "8084"
                        },
                        {
                            "sys_name": "weather-app",
                            "id": "7813"
                        },
                        {
                            "sys_name": "my-sandbox",
                            "id": "7767"
                        },
                        {
                            "sys_name": "my-app-as",
                            "id": "7510"
                        },
                        {
                            "sys_name": "sessionid",
                            "id": "7498"
                        },
                        {
                            "sys_name": "dev-pipeline",
                            "id": "6948"
                        },
                        {
                            "sys_name": "import-v6",
                            "id": "6912"
                        },
                        {
                            "sys_name": "dev",
                            "id": "6829"
                        },
                        {
                            "sys_name": "directual-groupbot",
                            "id": "6470"
                        },
                        {
                            "sys_name": "airtable",
                            "id": "6419"
                        },
                        {
                            "sys_name": "final-fps-test",
                            "id": "6238"
                        },
                        {
                            "sys_name": "new-fps-layout",
                            "id": "6166"
                        },
                        {
                            "sys_name": "tanera",
                            "id": "6082"
                        },
                        {
                            "sys_name": "crm-demo",
                            "id": "6033"
                        },
                        {
                            "sys_name": "productstar",
                            "id": "5925"
                        },
                        {
                            "sys_name": "new-library",
                            "id": "5420"
                        },
                        {
                            "sys_name": "how-to-auth",
                            "id": "5022"
                        },
                        {
                            "sys_name": "approval-system",
                            "id": "4575"
                        },
                        {
                            "sys_name": "test-bot",
                            "id": "4456"
                        },
                        {
                            "sys_name": "hello-there",
                            "id": "4337"
                        },
                        {
                            "sys_name": "test-webuser",
                            "id": "4284"
                        },
                        {
                            "sys_name": "temaplate-crm",
                            "id": "4083"
                        },
                        {
                            "sys_name": "ZerocodeCRM",
                            "id": "3973"
                        },
                        {
                            "sys_name": "nocode",
                            "id": "3799"
                        },
                        {
                            "sys_name": "gdfvfbvsgdvb",
                            "id": "3074"
                        },
                        {
                            "sys_name": "React-boilerplate",
                            "id": "2950"
                        },
                        {
                            "sys_name": "telegram_ibot",
                            "id": "2882"
                        },
                        {
                            "sys_name": "0qode-workshop",
                            "id": "2868"
                        },
                        {
                            "sys_name": "Generate_data_Directual_academy",
                            "id": "2595"
                        },
                        {
                            "sys_name": "directual-site",
                            "id": "1822"
                        }
                    ]
                },
                "id": "8b2b4dee-a490-4f97-830c-413cd99843d6",
                "date": 1673168419000,
                "comment": "App directual-site (1822), license payment, plan Pro-sandbox",
                "app_id": {
                    "sysName": "directual-site",
                    "team_id": "1aef6239-b432-4086-8bd6-05664eafd2b0",
                    "id": "1822"
                },
                "type": "app_payment"
            },
            {
                "balance": 30,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Igor",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 15.77,
                    "country": "RU",
                    "id": "okda@mail.ru",
                    "survey_step_3_raw": "customOption: Creatium",
                    "last_name": "Travkin",
                    "survey_step_2_raw": "NPO",
                    "apps": [
                        {
                            "sys_name": "orel",
                            "id": "12955"
                        }
                    ]
                },
                "id": "df608c72-32b7-4776-b164-8b24158ce341",
                "date": 1673120224000,
                "comment": "Adding funds via Tinkoff 1020.0 ₽ → 30.0 D-coins",
                "type": "tinkoff",
                "app_id": ""
            },
            {
                "balance": 50,
                "user_id": {
                    "survey_is_aborted": true,
                    "first_name": "Thomas",
                    "wallet_balance": 150,
                    "country": "RU",
                    "id": "kolgtim@yandex.ru",
                    "last_name": "K"
                },
                "id": "286509f7-10b6-4713-9300-c78310dc11a5",
                "date": 1673099677000,
                "comment": "Promo-code HAPPYNEWYEAR",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": 100,
                "user_id": {
                    "survey_is_aborted": true,
                    "first_name": "Thomas",
                    "wallet_balance": 150,
                    "country": "RU",
                    "id": "kolgtim@yandex.ru",
                    "last_name": "K"
                },
                "id": "74d18964-ef6a-4dd8-9d40-8614426a83bf",
                "date": 1673099662000,
                "comment": "Promo-code PRODUCTHUNT",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Артур",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 3,
                    "country": "RU",
                    "id": "arturjarov89@gmail.com",
                    "survey_step_3_raw": "customOption: Productstar",
                    "last_name": "Ярославов",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "tildademo",
                            "id": "15295"
                        },
                        {
                            "sys_name": "recrutssearch",
                            "id": "15285"
                        },
                        {
                            "sys_name": "crmnocode",
                            "id": "15279"
                        },
                        {
                            "sys_name": "fruitcrm2023",
                            "id": "15270"
                        },
                        {
                            "sys_name": "treker2023taxi",
                            "id": "15253"
                        }
                    ]
                },
                "id": "9bb2be04-c9c4-452a-b3d7-e5ea0dfbba66",
                "date": 1673095041000,
                "comment": "Update app treker2023taxi, plan Startup-monthly (previous plan: Free)",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": 120,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Артур",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": 3,
                    "country": "RU",
                    "id": "arturjarov89@gmail.com",
                    "survey_step_3_raw": "customOption: Productstar",
                    "last_name": "Ярославов",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "tildademo",
                            "id": "15295"
                        },
                        {
                            "sys_name": "recrutssearch",
                            "id": "15285"
                        },
                        {
                            "sys_name": "crmnocode",
                            "id": "15279"
                        },
                        {
                            "sys_name": "fruitcrm2023",
                            "id": "15270"
                        },
                        {
                            "sys_name": "treker2023taxi",
                            "id": "15253"
                        }
                    ]
                },
                "id": "62f3fe94-1758-498f-bd8e-63045f28dd61",
                "date": 1673094995000,
                "comment": "Promo-code PRODUCTSTAR",
                "type": "promo",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Артур",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": 3,
                    "country": "RU",
                    "id": "azajfert5@gmail.com",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Зайферт",
                    "survey_step_2_raw": "university",
                    "apps": [
                        {
                            "sys_name": "psmarket",
                            "id": "15284"
                        },
                        {
                            "sys_name": "hrservice2023",
                            "id": "15252"
                        },
                        {
                            "sys_name": "productstarmarket",
                            "id": "14789"
                        }
                    ]
                },
                "id": "e995c2ec-9063-4345-bc2a-389b4c3b0096",
                "date": 1673085201000,
                "comment": "Create app hrservice2023, plan Startup-monthly",
                "type": "app_payment",
                "app_id": ""
            },
            {
                "balance": -39,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Artha",
                    "survey_step_1_raw": "beginner",
                    "wallet_balance": -75,
                    "country": "RU",
                    "id": "arthabusiness@mail.ru",
                    "survey_step_3_raw": "zerocoder",
                    "last_name": "Business",
                    "survey_step_2_raw": "SMB",
                    "apps": [
                        {
                            "sys_name": "arthabusiness",
                            "id": "14119"
                        }
                    ]
                },
                "id": "c9d2f064-ccfe-4e3b-8643-54a119ba78f5",
                "date": 1673082048000,
                "comment": "App arthabusiness (14119), license payment, plan Startup",
                "app_id": {
                    "sysName": "arthabusiness",
                    "id": "14119"
                },
                "type": "app_payment"
            },
            {
                "balance": -139,
                "user_id": {
                    "survey_is_aborted": false,
                    "first_name": "Dmitrii",
                    "survey_step_1_raw": "rookie",
                    "wallet_balance": -278,
                    "country": "RU",
                    "id": "advvokat@bk.ru",
                    "survey_step_3_raw": "friends",
                    "last_name": "Kuznetsov",
                    "survey_step_2_raw": "startup",
                    "apps": [
                        {
                            "sys_name": "hl",
                            "id": "12640"
                        }
                    ]
                },
                "id": "3d135081-4108-4207-857d-bc19b47f3c04",
                "date": 1673082048000,
                "comment": "App hl (12640), license payment, plan Pro",
                "app_id": {
                    "sysName": "hl",
                    "team_id": "2a6c0ec3-3796-45cb-8d01-3ab274da2a9e",
                    "id": "12640"
                },
                "type": "app_payment"
            },
            {
                "balance": -19.5,
                "user_id": {
                    "survey_is_aborted": true,
                    "first_name": "Anastasia",
                    "team_ids": [],
                    "wallet_balance": -594.09,
                    "country": "RU",
                    "id": "a.yukhtmakher@upandout.ru",
                    "last_name": "Yukhtmakher",
                    "apps": [
                        {
                            "sys_name": "peers",
                            "id": "14335"
                        },
                        {
                            "sys_name": "upandoutedu",
                            "id": "13604"
                        },
                        {
                            "sys_name": "upandout",
                            "id": "13112"
                        },
                        {
                            "sys_name": "brands247",
                            "id": "7332"
                        },
                        {
                            "sys_name": "vitrina2252",
                            "id": "4265"
                        },
                        {
                            "sys_name": "uao",
                            "id": "3571"
                        }
                    ]
                },
                "id": "a8119743-adfb-4d36-a3e6-5d71f276ef2f",
                "date": 1673082048000,
                "comment": "App peers (14335), license payment, plan Startup",
                "app_id": {
                    "sysName": "peers",
                    "team_id": "2c3bbf42-797a-49ba-a67f-831072248805",
                    "id": "14335"
                },
                "type": "app_payment"
            }
        ],
        "totalPages": 43,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "affiliate_transaction_id.balance",
                99034345
            ],
            [
                "affiliate_transaction_id.comment",
                99034345
            ],
            [
                "affiliate_transaction_id.date",
                99034345
            ],
            [
                "affiliate_transaction_id.id",
                99034345
            ],
            [
                "affiliate_transaction_id.type",
                99034345
            ],
            [
                "affiliate_transaction_id.user_id",
                99034345
            ],
            [
                "affiliate_user_id",
                99034345
            ],
            [
                "app_id.id",
                1395053
            ],
            [
                "app_id.sysName",
                1395053
            ],
            [
                "app_id.team_id",
                1395053
            ],
            [
                "balance",
                99034345
            ],
            [
                "comment",
                99034345
            ],
            [
                "date",
                99034345
            ],
            [
                "id",
                99034345
            ],
            [
                "parent_affiliate_trans_id.balance",
                99034345
            ],
            [
                "parent_affiliate_trans_id.comment",
                99034345
            ],
            [
                "parent_affiliate_trans_id.date",
                99034345
            ],
            [
                "parent_affiliate_trans_id.id",
                99034345
            ],
            [
                "parent_affiliate_trans_id.type",
                99034345
            ],
            [
                "parent_affiliate_trans_id.user_id",
                99034345
            ],
            [
                "receipt",
                99034345
            ],
            [
                "type",
                99034345
            ],
            [
                "user_id.apps.id",
                1294703
            ],
            [
                "user_id.apps.sys_name",
                1294703
            ],
            [
                "user_id.country",
                1282551
            ],
            [
                "user_id.first_name",
                1282551
            ],
            [
                "user_id.id",
                1282551
            ],
            [
                "user_id.last_name",
                1282551
            ],
            [
                "user_id.survey_is_aborted",
                1282551
            ],
            [
                "user_id.survey_step_1_raw",
                1282551
            ],
            [
                "user_id.survey_step_2_raw",
                1282551
            ],
            [
                "user_id.survey_step_3_raw",
                1282551
            ],
            [
                "user_id.team_ids.current_seats",
                1395054
            ],
            [
                "user_id.team_ids.is_hidden",
                1395054
            ],
            [
                "user_id.team_ids.name",
                1395054
            ],
            [
                "user_id.team_ids.tariff_id",
                1395054
            ],
            [
                "user_id.wallet_balance",
                1282551
            ]
        ],
        "writeFields": [
            "app_id",
            "id"
        ],
        "structures": {
            "1282551": {
                "id": 1282551,
                "dateCreated": "2019-10-05T15:17:37Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "👨🏻 Cloud users",
                "sysName": "Cloud_users",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"note\",\"name\":\"Note\",\"dataType\":\"string\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"first_name\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_name\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"locale\",\"name\":\"locale\",\"dataType\":\"string\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"source\",\"name\":\"Source\",\"dataType\":\"string\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_id\",\"name\":\"Request ID\",\"dataType\":\"link\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ip\",\"name\":\"ip\",\"dataType\":\"string\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"link\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"social_register\",\"name\":\"social_register\",\"dataType\":\"boolean\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"register_date\",\"name\":\"Register date\",\"dataType\":\"date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country_id\",\"name\":\"Country link (ISO)\",\"dataType\":\"link\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"raw_id\",\"name\":\"Raw ID\",\"dataType\":\"link\",\"id\":\"39691642000254942\",\"link\":\"cloud_users_ids\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"last_activity_date\",\"name\":\"Last activity date\",\"dataType\":\"date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"apps\",\"name\":\"Apps\",\"dataType\":\"arrayLink\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"number_of_sl\",\"name\":\"Number of SLs\",\"dataType\":\"number\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number_of_structures\",\"name\":\"Number of structures\",\"dataType\":\"number\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number_of_scenarios\",\"name\":\"Number of scenarios\",\"dataType\":\"number\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"logged_in\",\"name\":\"Have logged in\",\"dataType\":\"boolean\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"number_of_apps\",\"name\":\"Number of apps\",\"dataType\":\"number\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"today_stat_id\",\"name\":\"Today stat link\",\"dataType\":\"link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"team_ids\",\"name\":\"Teams\",\"dataType\":\"arrayLink\",\"id\":\"26441632905559721\",\"link\":\"Teams\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"current_team_plans\",\"name\":\"Current team plans\",\"dataType\":\"arrayLink\",\"id\":\"45021632906172898\",\"link\":\"TeamTariffs\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"isLTD_user\",\"name\":\"LTD user\",\"dataType\":\"boolean\",\"id\":\"13531632918815271\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Paid_app_plan_user\",\"name\":\"Paid app plan user\",\"dataType\":\"boolean\",\"id\":\"22421632918830874\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_app_plans\",\"name\":\"Current app plans\",\"dataType\":\"arrayLink\",\"id\":\"54321632918865581\",\"link\":\"Tariff\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"creditCardIsLinked\",\"name\":\"CreditCardIsLinked?\",\"dataType\":\"boolean\",\"id\":\"42541642072780075\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"mailchimp_tags\",\"name\":\"Mailchimp labels\",\"dataType\":\"string\",\"id\":\"97421570379132976\",\"link\":null,\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"mailchimp_segments\",\"name\":\"Mailchimp Segments\",\"dataType\":\"array\",\"id\":\"84981587457354001\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"is_country_synced\",\"name\":\"is_country_synced\",\"dataType\":\"boolean\",\"id\":\"31991605527320825\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"app_description\",\"name\":\"App description\",\"dataType\":\"string\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"customer_type\",\"name\":\"Customer type\",\"dataType\":\"string\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"utm_source\",\"name\":\"utm_source\",\"dataType\":\"string\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"utm_medium\",\"name\":\"utm_medium\",\"dataType\":\"string\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"utm_campaign\",\"name\":\"utm_campaign\",\"dataType\":\"string\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_ids\",\"name\":\"Surveys\",\"dataType\":\"arrayLink\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"ref\",\"name\":\"ref\",\"dataType\":\"string\",\"id\":\"68451626349155030\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"storage\",\"name\":\"Survey storage\",\"dataType\":\"json\",\"id\":\"86371627198748459\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_step_1_raw\",\"name\":\"Which describes you best\",\"dataType\":\"string\",\"id\":\"24041632732046851\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_step_2_raw\",\"name\":\"Whom do you want to build apps for\",\"dataType\":\"string\",\"id\":\"57151632732047604\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_step_3_raw\",\"name\":\"How did you know about Directual\",\"dataType\":\"string\",\"id\":\"98341632732048278\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"survey_is_aborted\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"75331632901439193\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications_account\",\"name\":\"Notify about Account\",\"dataType\":\"boolean\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications_academy\",\"name\":\"Notify about Academy\",\"dataType\":\"boolean\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notifications_blog\",\"name\":\"Notify about Blog\",\"dataType\":\"boolean\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"unsubscribed\",\"name\":\"unsubscribed\",\"dataType\":\"boolean\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"unsibscribed_reason\",\"name\":\"unsibscribed_reason\",\"dataType\":\"string\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"admin_notification_text\",\"name\":\"admin_notification_text\",\"dataType\":\"string\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"whom_to_alert\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"MailerLite_id\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"73551663229204538\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"MailerLite_MAIN\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"28941663229219515\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"MailerLite_Onboarding\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"16811663229232291\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email_hash\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gravatar\",\"name\":\"Gravatar\",\"dataType\":\"string\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gravatar_pic\",\"name\":\" \",\"dataType\":\"file\",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_suspended\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"97901644220993828\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_id\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"69331644221263888\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_status\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"99591644221269393\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_failed\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"10721644221276956\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"update_url\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"44161644221281677\",\"link\":null,\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"basic_promo_code\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"62581644246255699\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"wallet_transactions\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"53431648999094908\",\"link\":\"appwallet\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"wallet_balance\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"60951648999103921\",\"link\":\"\",\"group\":\"1644221182856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paid_apps_ids\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"96621663160984409\",\"link\":\"Apps\",\"group\":\"1644221182856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false}]",
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
                    "name": "id",
                    "dataType": "id",
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
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "1294703": {
                "id": 1294703,
                "dateCreated": "2020-02-27T12:54:30Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "raw_Applications",
                "sysName": "AppInfo",
                "jsonObject": "[{\"sysName\":\"number_of_users\",\"dataType\":\"string\",\"name\":\"number_of_users\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_active_scenarios\",\"dataType\":\"string\",\"name\":\"number_of_active_scenarios\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"alert_hit\",\"dataType\":\"date\",\"name\":\"Когда пинали о превышении тарифа\",\"id\":\"22121614804113546\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"fullName\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"27851646141877505\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_scenarios\",\"dataType\":\"string\",\"name\":\"number_of_scenarios\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"execution\",\"dataType\":\"number\",\"name\":\"Load_execution\",\"id\":\"32211587202484528\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"AppSettings_id\",\"dataType\":\"link\",\"name\":\"AppSettings\",\"id\":\"34831592935814438\",\"link\":\"AppSetting\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"app_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"35571623745217854\",\"link\":\"Apps\",\"group\":\"1623745203139\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"getRequest\",\"dataType\":\"number\",\"name\":\"Load_getRequest\",\"id\":\"37261587202485664\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_structures\",\"dataType\":\"string\",\"name\":\"number_of_structures\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"is_blocked\",\"dataType\":\"boolean\",\"name\":\"is_blocked\",\"id\":\"45741633095617725\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"pluginRequest\",\"dataType\":\"number\",\"name\":\"pluginRequest\",\"id\":\"48361624022240081\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_sl\",\"dataType\":\"string\",\"name\":\"number_of_sl\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"period\",\"dataType\":\"link\",\"name\":\"Billing_period\",\"id\":\"50391587206053532\",\"link\":\"UsageHistory\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"is_hidden\",\"dataType\":\"boolean\",\"name\":\"is_hidden\",\"id\":\"59141646142321554\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"is_sandbox\",\"dataType\":\"string\",\"name\":\"is_sandbox\",\"id\":\"59151644829765708\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"user_id\",\"id\":\"6\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"team_id\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"65031644829771596\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"maxUsers\",\"dataType\":\"number\",\"name\":\"Load_maxUsers\",\"id\":\"66391587202485120\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"creator_email\",\"dataType\":\"string\",\"name\":\"creator_email\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"postRequest\",\"dataType\":\"number\",\"name\":\"Load_postRequest\",\"id\":\"71631587202506976\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"executionSync\",\"dataType\":\"number\",\"name\":\"executionSync\",\"id\":\"75661619421361645\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"sys_name\",\"dataType\":\"string\",\"name\":\"sys_name\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"9\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ignored_counter\",\"dataType\":\"number\",\"name\":\"Сколько раз проигнорировал письмо-алерт\",\"id\":\"96291614932806065\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":1587202449588,\"name\":\"Global stats\",\"order\":0},{\"id\":1587202477104,\"name\":\"Usage for last period\",\"order\":1},{\"id\":1623745203139,\"name\":\"Чистовые данные\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"sys_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-03-01T13:57:44Z",
                "createBy": 0,
                "changedBy": 2853,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "9",
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
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33631051
            },
            "1395053": {
                "id": 1395053,
                "dateCreated": "2021-06-14T21:39:39Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "📱 Apps",
                "sysName": "Apps",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"App id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sysName\",\"name\":\"System name\",\"dataType\":\"string\",\"id\":\"27541623706978377\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"App name\",\"dataType\":\"string\",\"id\":\"13661623706989350\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"38791623706999272\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"owner_id\",\"name\":\"Owner\",\"dataType\":\"link\",\"id\":\"41841623707118206\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"developer_ids\",\"name\":\"Developers\",\"dataType\":\"arrayLink\",\"id\":\"54301623707131642\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"isTeam\",\"name\":\"Team app\",\"dataType\":\"boolean\",\"id\":\"68981623707196589\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"team_id\",\"name\":\"Team\",\"dataType\":\"link\",\"id\":\"94291623707210181\",\"link\":\"Teams\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isLegacy\",\"name\":\"Legacy app\",\"dataType\":\"boolean\",\"id\":\"30351623746607632\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_sandbox\",\"name\":\"is_sandbox\",\"dataType\":\"boolean\",\"id\":\"47331625209998636\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_blocked\",\"name\":\"is_blocked\",\"dataType\":\"boolean\",\"id\":\"82901633095583058\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_hidden\",\"name\":\"is_hidden\",\"dataType\":\"boolean\",\"id\":\"10251637661442776\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"new_billing\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"75171645533130519\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"new_billing_plan\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"91761645533150600\",\"link\":\"Tariff\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"previous_owner_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"50981666709963736\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"plan_id\",\"name\":\"Billing plan\",\"dataType\":\"link\",\"id\":\"74161623707026653\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"previous_plan_id\",\"name\":\"Previous plan\",\"dataType\":\"link\",\"id\":\"75791641032667863\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"change_plan_request_ids\",\"name\":\"Plan change requests\",\"dataType\":\"arrayLink\",\"id\":\"76611623707045935\",\"link\":\"ChangeTariffRequests\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"merchant_event_ids\",\"name\":\"Paddle events\",\"dataType\":\"arrayLink\",\"id\":\"46441623707088217\",\"link\":\"MerchantEvent\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"stat_get\",\"name\":\"Stat | GET\",\"dataType\":\"number\",\"id\":\"94951623707229504\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stat_users\",\"name\":\"Stat | Users\",\"dataType\":\"number\",\"id\":\"76861623707270662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stat_post\",\"name\":\"Stat | POST\",\"dataType\":\"number\",\"id\":\"37551623707296997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stat_proc\",\"name\":\"Stat | Proc exec\",\"dataType\":\"number\",\"id\":\"16611623707312286\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stat_sync\",\"name\":\"Stat | SYNC Proc exec\",\"dataType\":\"number\",\"id\":\"87341623707329117\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stat_http\",\"name\":\"Stat | HTTP requests\",\"dataType\":\"number\",\"id\":\"32051667244802942\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_excess\",\"name\":\"Excess plan\",\"dataType\":\"boolean\",\"id\":\"40361623748858552\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"🔥 hit limits\",\" OK\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"79011623748876085\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color_get\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"26091623775679245\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color_post\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"89081623775692061\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color_proc\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"92601623775698497\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color_sync\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"45481623775706832\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color_users\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"86811623775714205\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color_http\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"30261667244970378\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_subscription_id\",\"name\":\"Paddle ID\",\"dataType\":\"string\",\"id\":\"13631633089941494\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_subscription_status\",\"name\":\"Paddle Status\",\"dataType\":\"string\",\"id\":\"99931633090832671\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paddle_update_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"26191633364756662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"reports\",\"name\":\"Billing reports\",\"dataType\":\"arrayLink\",\"id\":\"71551633353882284\",\"link\":\"UsageHistory\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"balance\",\"name\":\"Credits\",\"dataType\":\"decimal\",\"id\":\"20731633354617743\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"is_cancelled\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"95451637666256272\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"forecast_bill\",\"name\":\"Forecast bill, $\",\"dataType\":\"decimal\",\"id\":\"63341640954051997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"next_ondemand_billing_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"54391647334223782\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"next_ondemand_payment\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"50071647334246527\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"next_billing_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"39091647335092236\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"next_payment\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"23671647335096237\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"legacy_billing\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"67651647899758711\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isDowngraded\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"26051647940518677\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"raw_app_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"12131623746301658\",\"link\":\"AppInfo\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"raw_usage_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"96391623747858362\",\"link\":\"UsageHistory\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"admin_requests_ids\",\"name\":\"Admin actions\",\"dataType\":\"arrayLink\",\"id\":\"85821633095205778\",\"link\":\"admin_app_change_requests\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"comments\",\"name\":\"Comments\",\"dataType\":\"arrayLink\",\"id\":\"44101633194013799\",\"link\":\"admin_comments\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"events\",\"name\":\"App events\",\"dataType\":\"arrayLink\",\"id\":\"67551637607379984\",\"link\":\"appEvents\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"free_alert_counter\",\"name\":\"Free alert counter\",\"dataType\":\"number\",\"id\":\"30071661159016438\",\"link\":\"\",\"group\":\"1633095201028\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"array\":false}]",
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
                    "name": "App id",
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
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "1395054": {
                "id": 1395054,
                "dateCreated": "2021-06-14T21:40:01Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "👯‍♀️ Teams",
                "sysName": "Teams",
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
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "99034345": {
                "id": 99034345,
                "dateCreated": "2021-10-04T13:35:54Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "🪙 Wallet Transactions",
                "sysName": "appwallet",
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
                    "linkType": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33575450
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "app_id",
                "name": "app_id",
                "dataType": "link",
                "id": "51971633354577141",
                "link": "Apps",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "arrayLink": false,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
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