import React, { useEffect, useState } from 'react'
import {
    FpsCards, FpsForm, MainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet,
    Dnd, Profile, TabsPane, Stopwatch, Button, SignUp, RestorePass
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
            //loggedIn={false}
            logInButton={{ name: "Sign in", route: "/profile", icon: "logoutAlt", link: <Link to="/profile">Sign in</Link> }}
            profileButton={{ name: "Profile", route: "/profile", icon: "user", link: <Link to="/profile">Profile</Link> }}
            logoUrl={logoUrl}
            logOutButton
            currentRoute={location.pathname || '/'}
            menu={[
                { name: "What?", route: "/", icon: "info", link: <Link to="/">What is it?</Link> },
                { name: "Components", subheader: true },
                { name: "Sign In / Sign Up / Profile", route: "/profile", icon: "user", link: <Link to="/profile">Sign in, Sign up, Profile</Link> },
                { name: "Form", route: "/form", icon: "edit", link: <Link to="/form">Form</Link> },
                { name: "Theme management", route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
                { name: "Cards", route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
                { name: "Table", route: "/table", icon: "database" },
                { name: "Chat (soon)", route: "/chat", icon: "bubble", disabled: true },
                { name: "Comments (soon)", route: "/comments", icon: "version", disabled: true },
                { name: "Design system", subheader: true },
                { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
                { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
                { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
                { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
                { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
                { name: "Layout", route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
                { name: "Platform", route: "/platform", icon: "babai", link: <Link to="/platform">Platform</Link> },
            ]}

        />)
}

const App = (props) => {
    let exampleDataHtml = {
        html: '<b>test</b>'
    }

    let cardActions = {
        "sl": "myBootcamps",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": null,
            "deleteField": "",
            "cardBodyText": "type",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "Description_1",
                        "fetch": [],
                        "sysName": "Description_1",
                        "name": "Description",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Description_2",
                        "fetch": [],
                        "sysName": "Description_2",
                        "name": "Description",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Description_3",
                        "fetch": [],
                        "sysName": "Description_3",
                        "name": "Description",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Description_4",
                        "fetch": [],
                        "sysName": "Description_4",
                        "name": "Description",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "HW_app_link",
                        "fetch": [],
                        "sysName": "HW_app_link",
                        "name": "Link to the app or App system name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "HW_comment",
                        "fetch": [],
                        "sysName": "HW_comment",
                        "name": "Comment",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "HW_files",
                        "fetch": [],
                        "sysName": "HW_files",
                        "name": "Files (optional)",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "HW_status",
                        "fetch": [],
                        "sysName": "HW_status",
                        "name": "Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "Hometask",
                        "fetch": [],
                        "sysName": "Hometask",
                        "name": "Home task",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Video_1",
                        "fetch": [],
                        "sysName": "Video_1",
                        "name": "Video",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Video_2",
                        "fetch": [],
                        "sysName": "Video_2",
                        "name": "Video",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Video_3",
                        "fetch": [],
                        "sysName": "Video_3",
                        "name": "Video",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Video_4",
                        "fetch": [],
                        "sysName": "Video_4",
                        "name": "Video",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "current_status",
                        "fetch": [],
                        "sysName": "current_status",
                        "name": "Current status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "date",
                        "fetch": [],
                        "sysName": "date",
                        "name": "Date purchased",
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
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Description",
                        "dataType": "string",
                        "format": "markdown",
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
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "type",
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
                                "fieldSysName": "instructor",
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
                        "name": "Bootcamp type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "bootcamp_descriptions"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "HW_app_link",
                        "fetch": [],
                        "sysName": "HW_app_link",
                        "name": "Link to the app or App system name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "HW_files",
                        "fetch": [],
                        "sysName": "HW_files",
                        "name": "Files (optional)",
                        "dataType": "file",
                        "format": "multipleFiles",
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
                    }
                ],
                "fields": {
                    "Description_1": {
                        "id": "Description_1",
                        "content": "Description",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Description_2": {
                        "id": "Description_2",
                        "content": "Description",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Description_3": {
                        "id": "Description_3",
                        "content": "Description",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Description_4": {
                        "id": "Description_4",
                        "content": "Description",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "HW_app_link": {
                        "id": "HW_app_link",
                        "content": "Link to the app or App system name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "HW_comment": {
                        "id": "HW_comment",
                        "content": "Comment",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "HW_files": {
                        "id": "HW_files",
                        "content": "Files (optional)",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "HW_status": {
                        "id": "HW_status",
                        "content": "Status",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "Hometask": {
                        "id": "Hometask",
                        "content": "Home task",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Video_1": {
                        "id": "Video_1",
                        "content": "Video",
                        "type": "field",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Video_2": {
                        "id": "Video_2",
                        "content": "Video",
                        "type": "field",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Video_3": {
                        "id": "Video_3",
                        "content": "Video",
                        "type": "field",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Video_4": {
                        "id": "Video_4",
                        "content": "Video",
                        "type": "field",
                        "dataType": "string",
                        "format": "youTube",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "current_status": {
                        "id": "current_status",
                        "content": "Current status",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "date": {
                        "id": "date",
                        "content": "Date purchased",
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
                    "description": {
                        "id": "description",
                        "content": "Description",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
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
                    "title": {
                        "id": "title",
                        "content": "Title",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "type": {
                        "id": "type",
                        "content": "Bootcamp type",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "bootcamp_descriptions",
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
                    "title": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "description": {
                                    "id": "description",
                                    "content": "Description",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "markdown",
                                    "formatOptions": {}
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
                                "instructor": {
                                    "id": "instructor",
                                    "content": "Instructor",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "title": {
                                    "id": "title",
                                    "content": "Title",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "description": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "instructor": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "title": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "title",
                                "instructor",
                                "description",
                                "id"
                            ]
                        }
                    },
                    "date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "current_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsHint": true
                    },
                    "description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Description_1": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Description_2": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Description_3": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Description_4": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "HW_app_link": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsHint": false
                    },
                    "HW_comment": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "HW_files": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true
                    },
                    "HW_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsHint": true
                    },
                    "Video_1": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Video_2": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Video_3": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Video_4": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Hometask": {
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
                        "title": "General info",
                        "fieldIds": [
                            "id",
                            "type",
                            "current_status",
                            "date",
                            "description",
                            "title"
                        ]
                    },
                    "62001635772544729": {
                        "id": "62001635772544729",
                        "title": "Homework",
                        "fieldIds": [
                            "Hometask",
                            "HW_app_link",
                            "HW_files",
                            "HW_status",
                            "HW_comment"
                        ]
                    },
                    "17901635772579395": {
                        "id": "17901635772579395",
                        "title": "Education materials",
                        "fieldIds": [
                            "Video_1",
                            "Description_1",
                            "Video_2",
                            "Description_2",
                            "Video_3",
                            "Description_3",
                            "Video_4",
                            "Description_4"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "17901635772579395",
                    "62001635772544729"
                ],
                "actions": []
            },
            "fields": {
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "description": {
                                "id": "description",
                                "content": "Description",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": {}
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
                            "instructor": {
                                "id": "instructor",
                                "content": "Instructor",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "title": {
                                "id": "title",
                                "content": "Title",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "description": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "instructor": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "title": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "title",
                            "instructor",
                            "description",
                            "id"
                        ]
                    }
                },
                "date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "current_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": true
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Description_1": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Description_2": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Description_3": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Description_4": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "HW_app_link": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": false
                },
                "HW_comment": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "HW_files": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true
                },
                "HW_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": true
                },
                "Video_1": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Video_2": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Video_3": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Video_4": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Hometask": {
                    "include": true,
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
                "sysName": "Description_1",
                "name": "Description",
                "dataType": "string",
                "id": "66041635771841066",
                "link": "",
                "group": "1635703713415",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Description_2",
                "name": "Description",
                "dataType": "string",
                "id": "20291635771869628",
                "link": "",
                "group": "1635703713415",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Description_3",
                "name": "Description",
                "dataType": "string",
                "id": "87121635771904978",
                "link": "",
                "group": "1635703713415",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Description_4",
                "name": "Description",
                "dataType": "string",
                "id": "58181635771928504",
                "link": null,
                "group": "1635703713415",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "HW_app_link",
                "name": "Link to the app or App system name",
                "dataType": "string",
                "id": "83081635771956771",
                "link": null,
                "group": "1635771935402",
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "HW_comment",
                "name": "Comment",
                "dataType": "string",
                "id": "43561635771999936",
                "link": null,
                "group": "1635771935402",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "HW_files",
                "name": "Files (optional)",
                "dataType": "file",
                "id": "66351635771943458",
                "link": "",
                "group": "1635771935402",
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
                "format": "multipleFiles",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "HW_status",
                "name": "Status",
                "dataType": "string",
                "id": "81631635771988464",
                "link": null,
                "group": "1635771935402",
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Hometask",
                "name": "Home task",
                "dataType": "string",
                "id": "18051635772870635",
                "link": "",
                "group": "1635771935402",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Video_1",
                "name": "Video",
                "dataType": "string",
                "id": "50281635771832190",
                "link": "",
                "group": "1635703713415",
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
                "format": "youTube",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Video_2",
                "name": "Video",
                "dataType": "string",
                "id": "72151635771856933",
                "link": "",
                "group": "1635703713415",
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
                "format": "youTube",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Video_3",
                "name": "Video",
                "dataType": "string",
                "id": "67451635771894280",
                "link": "",
                "group": "1635703713415",
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
                "format": "youTube",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "Video_4",
                "name": "Video",
                "dataType": "string",
                "id": "57361635771914757",
                "link": "",
                "group": "1635703713415",
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
                "format": "youTube",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "current_status",
                "name": "Current status",
                "dataType": "string",
                "id": "14921633610242535",
                "link": "",
                "group": "1633609815539",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "date",
                "name": "Date purchased",
                "dataType": "date",
                "id": "85121632654035210",
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "description",
                "name": "Description",
                "dataType": "string",
                "id": "45811634547211804",
                "link": "",
                "group": "1633609815539",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "title",
                "name": "Title",
                "dataType": "string",
                "id": "46531632599948268",
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "type",
                "name": "Bootcamp type",
                "dataType": "link",
                "id": "16561633281256990",
                "link": "bootcamp_descriptions",
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
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "data": [
            {
                "description": "Welcome to Directual basic bootcamp, batch 01.\n\nDuring 4 weeks we will help you to get through everything you need to acquire fundamental Directual skills, enough to start building your app.\n\nImportant things to know:\n\n1. Join the private Slack group (if you haven't received the invite, reach us out on Chat in the right bottom corner)\n2. You'll have a Team with two slots for your apps with Pro-sandbox plans, for 3 months (1 Nov 2021 – 1 Feb 2022)\n3. Each of four weeks contains 1-2 hour long video tutorial, the homework and a live QnA session on Saturday, 10 a.m. PST\n\nHope you will enjoy Directual!",
                "id": "29328350",
                "date": 1633699085000,
                "title": "Introduction",
                "type": {
                    "instructor": "pavel@directual.com",
                    "description": "![bootcamp](https://api.alfa.directual.com/fileUploaded/bootcamps/94e0acd4-ad91-427b-b768-0f47db5a6a65.png)\n\n**Week 1. Understanding  conceptual structures of an app. Database and API sections**\n\n- Getting to know the Key parts of an app;\n- Creating a new app, activating a Sandbox slot;\n- **Database**. Data types, links, arrayLinks, Visible names, Version history;\n- Using DQL (quick search);\n- System data structures;\n- File storage;\n- JSON data type;\n- API-builder. Endpoints (GET, POST), Webhooks;\n- Playing with API using Postman;\n- App users\n- Authentication via API\n- User-based security on Endpoints\n- Filtering on Endpoints\n\n**Week 2. Web-pages builder part 1. Processing data in Scenarios.**\n- **Scenarios**\n- Basic scenario steps\n- Real-time scenarios, event-model\n- Scheduled scenarios\n- Synchronic scenarios\n- **Web-pages** builder\n- Building a web-app, setting up a layout\n- Role based access to pages, tabs, sections\n- Form component\n- Cards and Table components\n- Appearance and a custom domain\n\n**Week 3. Integrations with third-party systems. Http-requests, webhooks, plugins.**\n\n- Introduction to REST\n- Parsing data from webhooks\n- Calling for third-party API from scenarios\n- Using plugins \n\n**Week 4. Web-pages part 2.  Launching a marketplace app.**\n\n- Building a two-sided marketplace app.",
                    "id": "beginner_01",
                    "title": "Basic bootcamp"
                },
                "current_status": "Bootcamp start is scheduled for November, 1st",
                "HW_app_link": "",
                "HW_files": ""
            },
            {
                "Video_2": "https://www.youtube.com/watch?v=_SvwdK_HibQ",
                "Description_1": "Awesome",
                "id": "9a44ef20-8be5-40a2-b3b4-bf115b724568",
                "Description_2": "Marvellous",
                "date": 1633699085000,
                "title": "Week 1. Database and API",
                "type": {
                    "instructor": "pavel@directual.com",
                    "description": "![bootcamp](https://api.alfa.directual.com/fileUploaded/bootcamps/94e0acd4-ad91-427b-b768-0f47db5a6a65.png)\n\n**Week 1. Understanding  conceptual structures of an app. Database and API sections**\n\n- Getting to know the Key parts of an app;\n- Creating a new app, activating a Sandbox slot;\n- **Database**. Data types, links, arrayLinks, Visible names, Version history;\n- Using DQL (quick search);\n- System data structures;\n- File storage;\n- JSON data type;\n- API-builder. Endpoints (GET, POST), Webhooks;\n- Playing with API using Postman;\n- App users\n- Authentication via API\n- User-based security on Endpoints\n- Filtering on Endpoints\n\n**Week 2. Web-pages builder part 1. Processing data in Scenarios.**\n- **Scenarios**\n- Basic scenario steps\n- Real-time scenarios, event-model\n- Scheduled scenarios\n- Synchronic scenarios\n- **Web-pages** builder\n- Building a web-app, setting up a layout\n- Role based access to pages, tabs, sections\n- Form component\n- Cards and Table components\n- Appearance and a custom domain\n\n**Week 3. Integrations with third-party systems. Http-requests, webhooks, plugins.**\n\n- Introduction to REST\n- Parsing data from webhooks\n- Calling for third-party API from scenarios\n- Using plugins \n\n**Week 4. Web-pages part 2.  Launching a marketplace app.**\n\n- Building a two-sided marketplace app.",
                    "id": "beginner_01",
                    "title": "Basic bootcamp"
                },
                "Hometask": "Пасти коз",
                "HW_status": "Homework is not submitted",
                "Video_1": "https://www.youtube.com/watch?v=vx406nNIee8",
                "HW_app_link": "",
                "HW_files": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "Description_1",
                99027139
            ],
            [
                "Description_2",
                99027139
            ],
            [
                "Description_3",
                99027139
            ],
            [
                "Description_4",
                99027139
            ],
            [
                "HW_app_link",
                99027139
            ],
            [
                "HW_comment",
                99027139
            ],
            [
                "HW_files",
                99027139
            ],
            [
                "HW_status",
                99027139
            ],
            [
                "Hometask",
                99027139
            ],
            [
                "Video_1",
                99027139
            ],
            [
                "Video_2",
                99027139
            ],
            [
                "Video_3",
                99027139
            ],
            [
                "Video_4",
                99027139
            ],
            [
                "current_status",
                99027139
            ],
            [
                "date",
                99027139
            ],
            [
                "description",
                99027139
            ],
            [
                "id",
                99027139
            ],
            [
                "title",
                99027139
            ],
            [
                "type.description",
                99035158
            ],
            [
                "type.id",
                99035158
            ],
            [
                "type.instructor",
                99035158
            ],
            [
                "type.title",
                99035158
            ]
        ],
        "writeFields": [
            "HW_app_link",
            "HW_files",
            "id"
        ],
        "structures": {
            "99027139": {
                "networkID": 9660,
                "sysName": "bootcamps",
                "name": "User Bootcamps",
                "id": 99027139,
                "dateCreated": "2021-09-21T19:34:14Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"current_status\",\"name\":\"Current status\",\"dataType\":\"string\",\"id\":\"14921633610242535\",\"link\":\"\",\"group\":\"1633609815539\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"type\",\"name\":\"Bootcamp type\",\"dataType\":\"link\",\"id\":\"16561633281256990\",\"link\":\"bootcamp_descriptions\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Hometask\",\"name\":\"Home task\",\"dataType\":\"string\",\"id\":\"18051635772870635\",\"link\":\"\",\"group\":\"1635771935402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Description_2\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"20291635771869628\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"HW_comment\",\"name\":\"Comment\",\"dataType\":\"string\",\"id\":\"43561635771999936\",\"link\":null,\"group\":\"1635771935402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"price\",\"name\":\"Price, $\",\"dataType\":\"string\",\"id\":\"45061633608717845\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"45811634547211804\",\"link\":\"\",\"group\":\"1633609815539\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"name\":\"User\",\"dataType\":\"link\",\"id\":\"46241632599953689\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"46531632599948268\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Video_1\",\"name\":\"Video\",\"dataType\":\"string\",\"id\":\"50281635771832190\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"youTube\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Video_4\",\"name\":\"Video\",\"dataType\":\"string\",\"id\":\"57361635771914757\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"youTube\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Description_4\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"58181635771928504\",\"link\":null,\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Description_1\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"66041635771841066\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"HW_files\",\"name\":\"Files (optional)\",\"dataType\":\"file\",\"id\":\"66351635771943458\",\"link\":\"\",\"group\":\"1635771935402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Video_3\",\"name\":\"Video\",\"dataType\":\"string\",\"id\":\"67451635771894280\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"youTube\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Video_2\",\"name\":\"Video\",\"dataType\":\"string\",\"id\":\"72151635771856933\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"youTube\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"App_tariff_requested\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"75071635614185676\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"HW_status\",\"name\":\"Status\",\"dataType\":\"string\",\"id\":\"81631635771988464\",\"link\":null,\"group\":\"1635771935402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"HW_app_link\",\"name\":\"Link to the app or App system name\",\"dataType\":\"string\",\"id\":\"83081635771956771\",\"link\":null,\"group\":\"1635771935402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"date\",\"name\":\"Date purchased\",\"dataType\":\"date\",\"id\":\"85121632654035210\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Description_3\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"87121635771904978\",\"link\":\"\",\"group\":\"1635703713415\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Education\",\"id\":1633609815539,\"order\":0},{\"name\":\"Tutorials\",\"id\":1635703713415,\"order\":1},{\"name\":\"Homework\",\"id\":1635771935402,\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-01T13:21:26Z",
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
                    "array": false,
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "indexExists": false
                },
                "folderId": 33661138
            },
            "99035158": {
                "networkID": 9660,
                "sysName": "bootcamp_descriptions",
                "name": "Bootcamp Descriptions",
                "id": 99035158,
                "dateCreated": "2021-10-07T12:44:46Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"46231633610798268\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"instructor\",\"name\":\"Instructor\",\"dataType\":\"link\",\"id\":\"43811633610721148\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"47481633610737359\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-07T12:54:18Z",
                "createBy": 1,
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
                    "array": false,
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "indexExists": false
                },
                "folderId": 33661138
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "HW_app_link",
                "name": "Link to the app or App system name",
                "dataType": "string",
                "id": "83081635771956771",
                "link": null,
                "group": "1635771935402",
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "HW_files",
                "name": "Files (optional)",
                "dataType": "file",
                "id": "66351635771943458",
                "link": "",
                "group": "1635771935402",
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
                "format": "multipleFiles",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
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
                "array": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "quickSearch": "false"
    }

    let newCardActions = {
        "sl": "manageFeatures",
        "pageSize": "10",
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
                                "fieldSysName": "id",
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
                        "link": "votes"
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
                        "link": "votes",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "color": {
                        "include": true,
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
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "Feature",
                        "fieldIds": [
                            "user_id",
                            "date_added",
                            "feature_type",
                            "title",
                            "description",
                            "status",
                            "dev_status",
                            "color",
                            "id"
                        ]
                    },
                    "82431621030139706": {
                        "id": "82431621030139706",
                        "title": "Votes",
                        "fieldIds": [
                            "votes_ids",
                            "votes"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "82431621030139706"
                ],
                "actions": []
            },
            "fields": {
                "color": {
                    "include": true,
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
                            "key": "under_development",
                            "value": "Under development"
                        },
                        {
                            "key": "released",
                            "value": "Released"
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
                            "key": "new",
                            "value": "New"
                        },
                        {
                            "key": "approved",
                            "value": "Approved"
                        },
                        {
                            "key": "declined",
                            "value": "Declined"
                        },
                        {
                            "key": "double",
                            "value": "Double"
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
                            "key": "bug",
                            "value": "bug"
                        },
                        {
                            "key": "feature",
                            "value": "feature"
                        }
                    ]
                }
            },
            "cardColor": "color",
            "cardColorOption": "border",
            "cardHeaderComment": "feature_type",
            "cardBodyText": "date_added"
        },
        "tableTitle": "Approved features",
        "actions": null,
        "headers": [
            {
                "sysName": "color",
                "name": "Card color",
                "dataType": "string",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "date_added",
                "name": "Date added",
                "dataType": "date",
                "id": "68351620832123660",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "description",
                "name": "Feature description",
                "dataType": "string",
                "id": "77031620832091108",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "dev_status",
                "name": "Development status",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "feature_type",
                "name": "Feature type",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "status",
                "name": "Request status",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "title",
                "name": "Feature title",
                "dataType": "string",
                "id": "79031620832091734",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "user_id",
                "name": "Who suggested",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "votes",
                "name": "Number of upvotes",
                "dataType": "number",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "votes_ids",
                "name": "Who upvoted",
                "dataType": "arrayLink",
                "id": "14001620832180875",
                "link": "votes",
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
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            }
        ],
        "data": [
            {
                "votes": 1,
                "description": "Implement quick filters as Tags for **Cards** and **Table** components.\n\nFilters should base on `link` or `arrayLink` fields, similar to quick search option in the **Form** component.\n\nWe can combine several tag-collections.\n\n",
                "color": "ec6161",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel"
                },
                "feature_type": "bug",
                "id": "3fe3f7b6-b1cd-45a7-a41c-51fcea40309c",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1620766800000,
                "votes_ids": [],
                "title": "Quick filters (tags) in Cards, Table"
            },
            {
                "votes": 0,
                "description": "bla bla bla",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel"
                },
                "feature_type": "bug",
                "id": "c5799df6-5d2c-439c-8997-8400a2c366aa",
                "dev_status": {
                    "id": "planned",
                    "status": "Planned"
                },
                "status": {
                    "id": "approved",
                    "status": "Approved"
                },
                "date_added": 1620939600000,
                "votes_ids": [],
                "title": "Push notifications from scenarios based on Socket.io"
            }
        ],
        "totalPages": 1,
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
                "feature_type",
                1385610
            ],
            [
                "id",
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
                "title",
                1385610
            ],
            [
                "user_id.firstName",
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
                "votes_ids.id",
                1385611
            ],
            [
                "votes_ids.user_name",
                1385611
            ]
        ],
        "writeFields": [
            "color",
            "description",
            "dev_status",
            "feature_type",
            "id",
            "status",
            "title"
        ],
        "structures": {
            "1385542": {
                "networkID": 6829,
                "id": 1385542,
                "dateCreated": "2021-05-14T21:02:45Z",
                "hidden": false,
                "dateHidden": null,
                "name": "App users",
                "sysName": "WebUser",
                "jsonObject": "[{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"date_registered\",\"name\":\"Date registered on Dev\",\"dataType\":\"date\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"code\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"51351621027822811\",\"link\":null,\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"6\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"isEmailConfirmed\",\"name\":\"Email confirmed\",\"dataType\":\"boolean\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false}]",
                "jsonGroupSettings": "[{\"id\":-502807437,\"name\":\"Contacts\",\"order\":0},{\"id\":-1776115286,\"name\":\"System fields\",\"order\":1},{\"id\":1621027815164,\"name\":\"Email confirmation\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-14T21:56:42Z",
                "createBy": 0,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "Username (login)",
                    "dataType": "id",
                    "id": "12",
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
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": null
            },
            "1385610": {
                "networkID": 6829,
                "id": 1385610,
                "dateCreated": "2021-05-12T15:06:56Z",
                "hidden": false,
                "dateHidden": null,
                "name": "features",
                "sysName": "Features",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"votes_ids\",\"name\":\"Who upvoted\",\"dataType\":\"arrayLink\",\"id\":\"14001620832180875\",\"link\":\"votes\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true},{\"sysName\":\"status\",\"name\":\"Request status\",\"dataType\":\"link\",\"id\":\"40251620832303364\",\"link\":\"request_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"feature_type\",\"name\":\"Feature type\",\"dataType\":\"link\",\"id\":\"55371621030232780\",\"link\":\"feature_type\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"user_id\",\"name\":\"Who suggested\",\"dataType\":\"link\",\"id\":\"59421620832153105\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"color\",\"name\":\"Card color\",\"dataType\":\"string\",\"id\":\"61881621017200362\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"votes\",\"name\":\"Number of upvotes\",\"dataType\":\"number\",\"id\":\"68061620832170304\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"date_added\",\"name\":\"Date added\",\"dataType\":\"date\",\"id\":\"68351620832123660\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"D MMMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"description\",\"name\":\"Feature description\",\"dataType\":\"string\",\"id\":\"77031620832091108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"title\",\"name\":\"Feature title\",\"dataType\":\"string\",\"id\":\"79031620832091734\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"dev_status\",\"name\":\"Development status\",\"dataType\":\"link\",\"id\":\"85621620832330584\",\"link\":\"development_status\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-14T22:10:49Z",
                "createBy": 1,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 33625685
            },
            "1385611": {
                "networkID": 6829,
                "id": 1385611,
                "dateCreated": "2021-05-12T15:07:08Z",
                "hidden": false,
                "dateHidden": null,
                "name": "votes",
                "sysName": "votes",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"user_name\",\"dataType\":\"string\",\"name\":\"User name\",\"id\":\"13621620832245662\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"26981620832233748\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true},{\"sysName\":\"feature\",\"dataType\":\"link\",\"name\":\"Feature\",\"id\":\"46291620832268116\",\"link\":\"Features\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Date voted\",\"id\":\"47661620832254794\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"user_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-12T15:11:25Z",
                "createBy": 1,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 33625685
            },
            "1385612": {
                "networkID": 6829,
                "id": 1385612,
                "dateCreated": "2021-05-12T15:13:21Z",
                "hidden": false,
                "dateHidden": null,
                "name": "request_status",
                "sysName": "request_status",
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
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 33625685
            },
            "1385613": {
                "networkID": 6829,
                "id": 1385613,
                "dateCreated": "2021-05-12T15:14:45Z",
                "hidden": false,
                "dateHidden": null,
                "name": "development_status",
                "sysName": "development_status",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
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
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 33625685
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "color",
                "name": "Card color",
                "dataType": "string",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "description",
                "name": "Feature description",
                "dataType": "string",
                "id": "77031620832091108",
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
                "format": "markdown",
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "dev_status",
                "name": "Development status",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "feature_type",
                "name": "Feature type",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "status",
                "name": "Request status",
                "dataType": "link",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "title",
                "name": "Feature title",
                "dataType": "string",
                "id": "79031620832091734",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false
            }
        ],
        "quickSearch": "true"
    }

    let exampleTable = {
        "sl": "inspectionregister",
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
                        "fieldSysName": "DateCreated",
                        "fetch": [],
                        "sysName": "DateCreated",
                        "name": "Date Created",
                        "dataType": "link",
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
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": "inspection_register"
                    },
                    {
                        "fieldSysName": "DateofInspection",
                        "fetch": [],
                        "sysName": "DateofInspection",
                        "name": "Date of Inspcetion",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectiomType",
                        "fetch": [],
                        "sysName": "InspectiomType",
                        "name": "Inspection Type",
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
                                    "value": "Daily Inspection",
                                    "label": "Daily Inspection"
                                },
                                {
                                    "value": "Weekly Inspection",
                                    "label": "Weekly Inspection"
                                },
                                {
                                    "value": "Fortnightly Inspection",
                                    "label": "Fortnightly Inspection"
                                },
                                {
                                    "value": "Monthly Inspection",
                                    "label": "Monthly Inspection"
                                },
                                {
                                    "value": "Bi-Monthly Inspection",
                                    "label": "Bi-Monthly Inspection"
                                },
                                {
                                    "value": "6 Monthly Inspection",
                                    "label": "6 Monthly Inspection"
                                },
                                {
                                    "value": "Annual Inspection",
                                    "label": "Annual Inspection"
                                },
                                {
                                    "value": "Weather Impact Inspection",
                                    "label": "Weather Impact Inspection"
                                },
                                {
                                    "value": "Post Damage Inspection",
                                    "label": "Post Damage Inspection"
                                },
                                {
                                    "value": "Post Incident Inspection",
                                    "label": "Post Incident Inspection"
                                },
                                {
                                    "value": "New Build Inspection",
                                    "label": "New  Build Inspection"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionNumber",
                        "fetch": [],
                        "sysName": "InspectionNumber",
                        "name": "Inspection Number",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionPhoto",
                        "fetch": [],
                        "sysName": "InspectionPhoto",
                        "name": "Inspection Photo",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionStatus",
                        "fetch": [],
                        "sysName": "InspectionStatus",
                        "name": "Inspection Status",
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
                                    "value": "Planned",
                                    "label": "Planned"
                                },
                                {
                                    "value": "Complete",
                                    "label": "Complete"
                                },
                                {
                                    "value": "OverDue",
                                    "label": "OverDue"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "Mobilescaffoldused",
                        "fetch": [],
                        "sysName": "Mobilescaffoldused",
                        "name": "Mobile Scaffold Used",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ScaffTagNumber",
                        "fetch": [],
                        "sysName": "ScaffTagNumber",
                        "name": "Scaff Tag Number",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "scaffold_register"
                    },
                    {
                        "fieldSysName": "ScaffoldInspector",
                        "fetch": [],
                        "sysName": "ScaffoldInspector",
                        "name": "Scaffold Inspector",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "commentssection1",
                        "fetch": [],
                        "sysName": "commentssection1",
                        "name": "Scaffold Vicinity Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection10",
                        "fetch": [],
                        "sysName": "commentssection10",
                        "name": "Mobile Scaffold Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection2",
                        "fetch": [],
                        "sysName": "commentssection2",
                        "name": "Supporting Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection3",
                        "fetch": [],
                        "sysName": "commentssection3",
                        "name": "Sole boards and Base Plates Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection5",
                        "fetch": [],
                        "sysName": "commentssection5",
                        "name": "Scaffold Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection6",
                        "fetch": [],
                        "sysName": "commentssection6",
                        "name": "Platform Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection7",
                        "fetch": [],
                        "sysName": "commentssection7",
                        "name": "Access and egress Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection8",
                        "fetch": [],
                        "sysName": "commentssection8",
                        "name": "Cladding Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection9",
                        "fetch": [],
                        "sysName": "commentssection9",
                        "name": "General Fitness for Purpose Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
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
                        "fieldSysName": "q1",
                        "fetch": [],
                        "sysName": "q1",
                        "name": "Has public protection been provided?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q10",
                        "fetch": [],
                        "sysName": "q10",
                        "name": "Are all measures to strengthen the supporting structure adequate? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q11",
                        "fetch": [],
                        "sysName": "q11",
                        "name": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q12",
                        "fetch": [],
                        "sysName": "q12",
                        "name": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q13",
                        "fetch": [],
                        "sysName": "q13",
                        "name": "Are there sufficient sole boards?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q14",
                        "fetch": [],
                        "sysName": "q14",
                        "name": "Are the sole boards of suitable material and in a serviceable condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q15",
                        "fetch": [],
                        "sysName": "q15",
                        "name": "Are the sole boards secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q16",
                        "fetch": [],
                        "sysName": "q16",
                        "name": "Are there sufficient baseplates?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q17",
                        "fetch": [],
                        "sysName": "q17",
                        "name": "Are the baseplates of the appropriate type? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q18",
                        "fetch": [],
                        "sysName": "q18",
                        "name": "Are the baseplates serviceable and of suitable dimensions?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q19",
                        "fetch": [],
                        "sysName": "q19",
                        "name": "Are the baseplates secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q2",
                        "fetch": [],
                        "sysName": "q2",
                        "name": "Have sufficient safeguards against electric powerlines been provided? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q20",
                        "fetch": [],
                        "sysName": "q20",
                        "name": "Are the standards bearing firmly?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q21",
                        "fetch": [],
                        "sysName": "q21",
                        "name": "Are the standards plumb (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q22",
                        "fetch": [],
                        "sysName": "q22",
                        "name": "Are the longitudinal standard spacings correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q23",
                        "fetch": [],
                        "sysName": "q23",
                        "name": "Are the transverse standard spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q24",
                        "fetch": [],
                        "sysName": "q24",
                        "name": "Are the joints in standards correctly positioned? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q25",
                        "fetch": [],
                        "sysName": "q25",
                        "name": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q26",
                        "fetch": [],
                        "sysName": "q26",
                        "name": "Are the ledgers level (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q27",
                        "fetch": [],
                        "sysName": "q27",
                        "name": "Are the ledgers continuous (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q28",
                        "fetch": [],
                        "sysName": "q28",
                        "name": "Are the lift heights correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q29",
                        "fetch": [],
                        "sysName": "q29",
                        "name": " Are the horizontal ledger spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q3",
                        "fetch": [],
                        "sysName": "q3",
                        "name": "Is there sufficient control over vehicle movement? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q30",
                        "fetch": [],
                        "sysName": "q30",
                        "name": "Are the ledgers correctly secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q31",
                        "fetch": [],
                        "sysName": "q31",
                        "name": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q32",
                        "fetch": [],
                        "sysName": "q32",
                        "name": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q34",
                        "fetch": [],
                        "sysName": "q34",
                        "name": "Are there sufficient transoms/putlogs? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q35",
                        "fetch": [],
                        "sysName": "q35",
                        "name": "Are the transoms/putlogs correctly positioned and secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q36",
                        "fetch": [],
                        "sysName": "q36",
                        "name": "Is the bracing adequate? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q37",
                        "fetch": [],
                        "sysName": "q37",
                        "name": "Is the scaffold sufficiently stable?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q38",
                        "fetch": [],
                        "sysName": "q38",
                        "name": "Are the ties correctly positioned and correctly fixed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q39",
                        "fetch": [],
                        "sysName": "q39",
                        "name": "Does the scaffold have the required number of working platforms? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q4",
                        "fetch": [],
                        "sysName": "q4",
                        "name": "Is there sufficient control over crane operation?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q40",
                        "fetch": [],
                        "sysName": "q40",
                        "name": "Are the working platforms at the required locations? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q41",
                        "fetch": [],
                        "sysName": "q41",
                        "name": "Are catch platforms correctly positioned?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q42",
                        "fetch": [],
                        "sysName": "q42",
                        "name": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q43",
                        "fetch": [],
                        "sysName": "q43",
                        "name": "Are the platform dimensions suitable for the intended work?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q44",
                        "fetch": [],
                        "sysName": "q44",
                        "name": "Is there adequate edge protection?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q45",
                        "fetch": [],
                        "sysName": "q45",
                        "name": "Are the platforms correctly constructed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q46",
                        "fetch": [],
                        "sysName": "q46",
                        "name": "Are planks secured against wind? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q47",
                        "fetch": [],
                        "sysName": "q47",
                        "name": "Is there safe access and egress to every scaffold platform?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q48",
                        "fetch": [],
                        "sysName": "q48",
                        "name": "Are temporary stairways correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q49",
                        "fetch": [],
                        "sysName": "q49",
                        "name": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q5",
                        "fetch": [],
                        "sysName": "q5",
                        "name": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q50",
                        "fetch": [],
                        "sysName": "q50",
                        "name": "Are access ways and access platforms correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q51",
                        "fetch": [],
                        "sysName": "q51",
                        "name": "Has the scaffold been designed for wind loading on any cladding? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q52",
                        "fetch": [],
                        "sysName": "q52",
                        "name": "Are the fixing ties secure?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q53",
                        "fetch": [],
                        "sysName": "q53",
                        "name": "Are there any rips or tears?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q54",
                        "fetch": [],
                        "sysName": "q54",
                        "name": "Are the overlap joints satisfactory?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q55",
                        "fetch": [],
                        "sysName": "q55",
                        "name": "Is there adequate provision for material handling?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q56",
                        "fetch": [],
                        "sysName": "q56",
                        "name": "Are the clearances between the scaffold and adjacent structures correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q57",
                        "fetch": [],
                        "sysName": "q57",
                        "name": "Is there adequate protection from falling debris? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q58",
                        "fetch": [],
                        "sysName": "q58",
                        "name": "Has the scaffold been adequately designed to support all attachments? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q59",
                        "fetch": [],
                        "sysName": "q59",
                        "name": "Are all approaches and platforms effectively lit? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q6",
                        "fetch": [],
                        "sysName": "q6",
                        "name": "Are scaffolds erected a safe distance away from trenches or excavations?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q60",
                        "fetch": [],
                        "sysName": "q60",
                        "name": "Is the supporting surface hard and flat?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q61",
                        "fetch": [],
                        "sysName": "q61",
                        "name": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q62",
                        "fetch": [],
                        "sysName": "q62",
                        "name": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q7",
                        "fetch": [],
                        "sysName": "q7",
                        "name": "Is the supporting structure in good condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q8",
                        "fetch": [],
                        "sysName": "q8",
                        "name": "Does the supporting structure have adequate strength? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q9",
                        "fetch": [],
                        "sysName": "q9",
                        "name": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
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
                                "Yes",
                                "No"
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
                    }
                ],
                "writeFields": [
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
                        "fieldSysName": "DateCreated",
                        "fetch": [],
                        "sysName": "DateCreated",
                        "name": "Date Created",
                        "dataType": "link",
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
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": "inspection_register"
                    },
                    {
                        "fieldSysName": "DateofInspection",
                        "fetch": [],
                        "sysName": "DateofInspection",
                        "name": "Date of Inspcetion",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectiomType",
                        "fetch": [],
                        "sysName": "InspectiomType",
                        "name": "Inspection Type",
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
                                    "value": "Daily Inspection",
                                    "label": "Daily Inspection"
                                },
                                {
                                    "value": "Weekly Inspection",
                                    "label": "Weekly Inspection"
                                },
                                {
                                    "value": "Fortnightly Inspection",
                                    "label": "Fortnightly Inspection"
                                },
                                {
                                    "value": "Monthly Inspection",
                                    "label": "Monthly Inspection"
                                },
                                {
                                    "value": "Bi-Monthly Inspection",
                                    "label": "Bi-Monthly Inspection"
                                },
                                {
                                    "value": "6 Monthly Inspection",
                                    "label": "6 Monthly Inspection"
                                },
                                {
                                    "value": "Annual Inspection",
                                    "label": "Annual Inspection"
                                },
                                {
                                    "value": "Weather Impact Inspection",
                                    "label": "Weather Impact Inspection"
                                },
                                {
                                    "value": "Post Damage Inspection",
                                    "label": "Post Damage Inspection"
                                },
                                {
                                    "value": "Post Incident Inspection",
                                    "label": "Post Incident Inspection"
                                },
                                {
                                    "value": "New Build Inspection",
                                    "label": "New  Build Inspection"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionNumber",
                        "fetch": [],
                        "sysName": "InspectionNumber",
                        "name": "Inspection Number",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionPhoto",
                        "fetch": [],
                        "sysName": "InspectionPhoto",
                        "name": "Inspection Photo",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionStatus",
                        "fetch": [],
                        "sysName": "InspectionStatus",
                        "name": "Inspection Status",
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
                                    "value": "Planned",
                                    "label": "Planned"
                                },
                                {
                                    "value": "Complete",
                                    "label": "Complete"
                                },
                                {
                                    "value": "OverDue",
                                    "label": "OverDue"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "Mobilescaffoldused",
                        "fetch": [],
                        "sysName": "Mobilescaffoldused",
                        "name": "Mobile Scaffold Used",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ScaffTagNumber",
                        "fetch": [],
                        "sysName": "ScaffTagNumber",
                        "name": "Scaff Tag Number",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "scaffold_register"
                    },
                    {
                        "fieldSysName": "ScaffoldInspector",
                        "fetch": [],
                        "sysName": "ScaffoldInspector",
                        "name": "Scaffold Inspector",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "commentssection1",
                        "fetch": [],
                        "sysName": "commentssection1",
                        "name": "Scaffold Vicinity Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection10",
                        "fetch": [],
                        "sysName": "commentssection10",
                        "name": "Mobile Scaffold Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection2",
                        "fetch": [],
                        "sysName": "commentssection2",
                        "name": "Supporting Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection3",
                        "fetch": [],
                        "sysName": "commentssection3",
                        "name": "Sole boards and Base Plates Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection5",
                        "fetch": [],
                        "sysName": "commentssection5",
                        "name": "Scaffold Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection6",
                        "fetch": [],
                        "sysName": "commentssection6",
                        "name": "Platform Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection7",
                        "fetch": [],
                        "sysName": "commentssection7",
                        "name": "Access and egress Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection8",
                        "fetch": [],
                        "sysName": "commentssection8",
                        "name": "Cladding Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection9",
                        "fetch": [],
                        "sysName": "commentssection9",
                        "name": "General Fitness for Purpose Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
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
                        "fieldSysName": "q1",
                        "fetch": [],
                        "sysName": "q1",
                        "name": "Has public protection been provided?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q10",
                        "fetch": [],
                        "sysName": "q10",
                        "name": "Are all measures to strengthen the supporting structure adequate? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q11",
                        "fetch": [],
                        "sysName": "q11",
                        "name": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q12",
                        "fetch": [],
                        "sysName": "q12",
                        "name": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q13",
                        "fetch": [],
                        "sysName": "q13",
                        "name": "Are there sufficient sole boards?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q14",
                        "fetch": [],
                        "sysName": "q14",
                        "name": "Are the sole boards of suitable material and in a serviceable condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q15",
                        "fetch": [],
                        "sysName": "q15",
                        "name": "Are the sole boards secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q16",
                        "fetch": [],
                        "sysName": "q16",
                        "name": "Are there sufficient baseplates?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q17",
                        "fetch": [],
                        "sysName": "q17",
                        "name": "Are the baseplates of the appropriate type? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q18",
                        "fetch": [],
                        "sysName": "q18",
                        "name": "Are the baseplates serviceable and of suitable dimensions?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q19",
                        "fetch": [],
                        "sysName": "q19",
                        "name": "Are the baseplates secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q2",
                        "fetch": [],
                        "sysName": "q2",
                        "name": "Have sufficient safeguards against electric powerlines been provided? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q20",
                        "fetch": [],
                        "sysName": "q20",
                        "name": "Are the standards bearing firmly?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q21",
                        "fetch": [],
                        "sysName": "q21",
                        "name": "Are the standards plumb (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q22",
                        "fetch": [],
                        "sysName": "q22",
                        "name": "Are the longitudinal standard spacings correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q23",
                        "fetch": [],
                        "sysName": "q23",
                        "name": "Are the transverse standard spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q24",
                        "fetch": [],
                        "sysName": "q24",
                        "name": "Are the joints in standards correctly positioned? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q25",
                        "fetch": [],
                        "sysName": "q25",
                        "name": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q26",
                        "fetch": [],
                        "sysName": "q26",
                        "name": "Are the ledgers level (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q27",
                        "fetch": [],
                        "sysName": "q27",
                        "name": "Are the ledgers continuous (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q28",
                        "fetch": [],
                        "sysName": "q28",
                        "name": "Are the lift heights correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q29",
                        "fetch": [],
                        "sysName": "q29",
                        "name": " Are the horizontal ledger spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q3",
                        "fetch": [],
                        "sysName": "q3",
                        "name": "Is there sufficient control over vehicle movement? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q30",
                        "fetch": [],
                        "sysName": "q30",
                        "name": "Are the ledgers correctly secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q31",
                        "fetch": [],
                        "sysName": "q31",
                        "name": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q32",
                        "fetch": [],
                        "sysName": "q32",
                        "name": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q34",
                        "fetch": [],
                        "sysName": "q34",
                        "name": "Are there sufficient transoms/putlogs? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q35",
                        "fetch": [],
                        "sysName": "q35",
                        "name": "Are the transoms/putlogs correctly positioned and secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q36",
                        "fetch": [],
                        "sysName": "q36",
                        "name": "Is the bracing adequate? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q37",
                        "fetch": [],
                        "sysName": "q37",
                        "name": "Is the scaffold sufficiently stable?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q38",
                        "fetch": [],
                        "sysName": "q38",
                        "name": "Are the ties correctly positioned and correctly fixed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q39",
                        "fetch": [],
                        "sysName": "q39",
                        "name": "Does the scaffold have the required number of working platforms? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q4",
                        "fetch": [],
                        "sysName": "q4",
                        "name": "Is there sufficient control over crane operation?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q40",
                        "fetch": [],
                        "sysName": "q40",
                        "name": "Are the working platforms at the required locations? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q41",
                        "fetch": [],
                        "sysName": "q41",
                        "name": "Are catch platforms correctly positioned?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q42",
                        "fetch": [],
                        "sysName": "q42",
                        "name": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q43",
                        "fetch": [],
                        "sysName": "q43",
                        "name": "Are the platform dimensions suitable for the intended work?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q44",
                        "fetch": [],
                        "sysName": "q44",
                        "name": "Is there adequate edge protection?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q45",
                        "fetch": [],
                        "sysName": "q45",
                        "name": "Are the platforms correctly constructed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q46",
                        "fetch": [],
                        "sysName": "q46",
                        "name": "Are planks secured against wind? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q47",
                        "fetch": [],
                        "sysName": "q47",
                        "name": "Is there safe access and egress to every scaffold platform?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q48",
                        "fetch": [],
                        "sysName": "q48",
                        "name": "Are temporary stairways correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q49",
                        "fetch": [],
                        "sysName": "q49",
                        "name": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q5",
                        "fetch": [],
                        "sysName": "q5",
                        "name": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q50",
                        "fetch": [],
                        "sysName": "q50",
                        "name": "Are access ways and access platforms correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q51",
                        "fetch": [],
                        "sysName": "q51",
                        "name": "Has the scaffold been designed for wind loading on any cladding? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q52",
                        "fetch": [],
                        "sysName": "q52",
                        "name": "Are the fixing ties secure?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q53",
                        "fetch": [],
                        "sysName": "q53",
                        "name": "Are there any rips or tears?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q54",
                        "fetch": [],
                        "sysName": "q54",
                        "name": "Are the overlap joints satisfactory?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q55",
                        "fetch": [],
                        "sysName": "q55",
                        "name": "Is there adequate provision for material handling?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q56",
                        "fetch": [],
                        "sysName": "q56",
                        "name": "Are the clearances between the scaffold and adjacent structures correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q57",
                        "fetch": [],
                        "sysName": "q57",
                        "name": "Is there adequate protection from falling debris? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q58",
                        "fetch": [],
                        "sysName": "q58",
                        "name": "Has the scaffold been adequately designed to support all attachments? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q59",
                        "fetch": [],
                        "sysName": "q59",
                        "name": "Are all approaches and platforms effectively lit? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q6",
                        "fetch": [],
                        "sysName": "q6",
                        "name": "Are scaffolds erected a safe distance away from trenches or excavations?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q60",
                        "fetch": [],
                        "sysName": "q60",
                        "name": "Is the supporting surface hard and flat?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q61",
                        "fetch": [],
                        "sysName": "q61",
                        "name": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q62",
                        "fetch": [],
                        "sysName": "q62",
                        "name": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q7",
                        "fetch": [],
                        "sysName": "q7",
                        "name": "Is the supporting structure in good condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q8",
                        "fetch": [],
                        "sysName": "q8",
                        "name": "Does the supporting structure have adequate strength? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q9",
                        "fetch": [],
                        "sysName": "q9",
                        "name": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
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
                                "Yes",
                                "No"
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
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "@dateCreated": {
                        "id": "@dateCreated",
                        "content": "date created",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "@who": {
                        "id": "@who",
                        "content": "who changed",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "DateCreated": {
                        "id": "DateCreated",
                        "content": "Date Created",
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
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": "inspection_register",
                        "actions": []
                    },
                    "DateofInspection": {
                        "id": "DateofInspection",
                        "content": "Date of Inspcetion",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "InspectiomType": {
                        "id": "InspectiomType",
                        "content": "Inspection Type",
                        "type": "field",
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
                                    "value": "Daily Inspection",
                                    "label": "Daily Inspection"
                                },
                                {
                                    "value": "Weekly Inspection",
                                    "label": "Weekly Inspection"
                                },
                                {
                                    "value": "Fortnightly Inspection",
                                    "label": "Fortnightly Inspection"
                                },
                                {
                                    "value": "Monthly Inspection",
                                    "label": "Monthly Inspection"
                                },
                                {
                                    "value": "Bi-Monthly Inspection",
                                    "label": "Bi-Monthly Inspection"
                                },
                                {
                                    "value": "6 Monthly Inspection",
                                    "label": "6 Monthly Inspection"
                                },
                                {
                                    "value": "Annual Inspection",
                                    "label": "Annual Inspection"
                                },
                                {
                                    "value": "Weather Impact Inspection",
                                    "label": "Weather Impact Inspection"
                                },
                                {
                                    "value": "Post Damage Inspection",
                                    "label": "Post Damage Inspection"
                                },
                                {
                                    "value": "Post Incident Inspection",
                                    "label": "Post Incident Inspection"
                                },
                                {
                                    "value": "New Build Inspection",
                                    "label": "New  Build Inspection"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "InspectionNumber": {
                        "id": "InspectionNumber",
                        "content": "Inspection Number",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "InspectionPhoto": {
                        "id": "InspectionPhoto",
                        "content": "Inspection Photo",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "InspectionStatus": {
                        "id": "InspectionStatus",
                        "content": "Inspection Status",
                        "type": "field",
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
                                    "value": "Planned",
                                    "label": "Planned"
                                },
                                {
                                    "value": "Complete",
                                    "label": "Complete"
                                },
                                {
                                    "value": "OverDue",
                                    "label": "OverDue"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "Mobilescaffoldused": {
                        "id": "Mobilescaffoldused",
                        "content": "Mobile Scaffold Used",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ScaffTagNumber": {
                        "id": "ScaffTagNumber",
                        "content": "Scaff Tag Number",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "scaffold_register",
                        "actions": []
                    },
                    "ScaffoldInspector": {
                        "id": "ScaffoldInspector",
                        "content": "Scaffold Inspector",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "commentssection1": {
                        "id": "commentssection1",
                        "content": "Scaffold Vicinity Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "commentssection10": {
                        "id": "commentssection10",
                        "content": "Mobile Scaffold Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "commentssection2": {
                        "id": "commentssection2",
                        "content": "Supporting Structure Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "commentssection3": {
                        "id": "commentssection3",
                        "content": "Sole boards and Base Plates Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "commentssection5": {
                        "id": "commentssection5",
                        "content": "Scaffold Structure Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "commentssection6": {
                        "id": "commentssection6",
                        "content": "Platform Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "commentssection7": {
                        "id": "commentssection7",
                        "content": "Access and egress Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "commentssection8": {
                        "id": "commentssection8",
                        "content": "Cladding Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "commentssection9": {
                        "id": "commentssection9",
                        "content": "General Fitness for Purpose Section Comments",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
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
                    "q1": {
                        "id": "q1",
                        "content": "Has public protection been provided?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q10": {
                        "id": "q10",
                        "content": "Are all measures to strengthen the supporting structure adequate? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q11": {
                        "id": "q11",
                        "content": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q12": {
                        "id": "q12",
                        "content": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q13": {
                        "id": "q13",
                        "content": "Are there sufficient sole boards?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q14": {
                        "id": "q14",
                        "content": "Are the sole boards of suitable material and in a serviceable condition? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q15": {
                        "id": "q15",
                        "content": "Are the sole boards secure? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q16": {
                        "id": "q16",
                        "content": "Are there sufficient baseplates?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q17": {
                        "id": "q17",
                        "content": "Are the baseplates of the appropriate type? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q18": {
                        "id": "q18",
                        "content": "Are the baseplates serviceable and of suitable dimensions?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q19": {
                        "id": "q19",
                        "content": "Are the baseplates secure? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q2": {
                        "id": "q2",
                        "content": "Have sufficient safeguards against electric powerlines been provided? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q20": {
                        "id": "q20",
                        "content": "Are the standards bearing firmly?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q21": {
                        "id": "q21",
                        "content": "Are the standards plumb (or as designed)? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q22": {
                        "id": "q22",
                        "content": "Are the longitudinal standard spacings correct? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q23": {
                        "id": "q23",
                        "content": "Are the transverse standard spacings correct?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q24": {
                        "id": "q24",
                        "content": "Are the joints in standards correctly positioned? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q25": {
                        "id": "q25",
                        "content": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q26": {
                        "id": "q26",
                        "content": "Are the ledgers level (or as designed)? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q27": {
                        "id": "q27",
                        "content": "Are the ledgers continuous (or as designed)? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q28": {
                        "id": "q28",
                        "content": "Are the lift heights correct? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q29": {
                        "id": "q29",
                        "content": " Are the horizontal ledger spacings correct?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q3": {
                        "id": "q3",
                        "content": "Is there sufficient control over vehicle movement? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q30": {
                        "id": "q30",
                        "content": "Are the ledgers correctly secured? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q31": {
                        "id": "q31",
                        "content": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q32": {
                        "id": "q32",
                        "content": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q34": {
                        "id": "q34",
                        "content": "Are there sufficient transoms/putlogs? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q35": {
                        "id": "q35",
                        "content": "Are the transoms/putlogs correctly positioned and secured? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q36": {
                        "id": "q36",
                        "content": "Is the bracing adequate? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q37": {
                        "id": "q37",
                        "content": "Is the scaffold sufficiently stable?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q38": {
                        "id": "q38",
                        "content": "Are the ties correctly positioned and correctly fixed?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q39": {
                        "id": "q39",
                        "content": "Does the scaffold have the required number of working platforms? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q4": {
                        "id": "q4",
                        "content": "Is there sufficient control over crane operation?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q40": {
                        "id": "q40",
                        "content": "Are the working platforms at the required locations? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q41": {
                        "id": "q41",
                        "content": "Are catch platforms correctly positioned?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q42": {
                        "id": "q42",
                        "content": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q43": {
                        "id": "q43",
                        "content": "Are the platform dimensions suitable for the intended work?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q44": {
                        "id": "q44",
                        "content": "Is there adequate edge protection?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q45": {
                        "id": "q45",
                        "content": "Are the platforms correctly constructed?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q46": {
                        "id": "q46",
                        "content": "Are planks secured against wind? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q47": {
                        "id": "q47",
                        "content": "Is there safe access and egress to every scaffold platform?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q48": {
                        "id": "q48",
                        "content": "Are temporary stairways correctly installed? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q49": {
                        "id": "q49",
                        "content": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q5": {
                        "id": "q5",
                        "content": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q50": {
                        "id": "q50",
                        "content": "Are access ways and access platforms correctly installed? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q51": {
                        "id": "q51",
                        "content": "Has the scaffold been designed for wind loading on any cladding? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q52": {
                        "id": "q52",
                        "content": "Are the fixing ties secure?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q53": {
                        "id": "q53",
                        "content": "Are there any rips or tears?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q54": {
                        "id": "q54",
                        "content": "Are the overlap joints satisfactory?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q55": {
                        "id": "q55",
                        "content": "Is there adequate provision for material handling?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q56": {
                        "id": "q56",
                        "content": "Are the clearances between the scaffold and adjacent structures correct? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q57": {
                        "id": "q57",
                        "content": "Is there adequate protection from falling debris? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q58": {
                        "id": "q58",
                        "content": "Has the scaffold been adequately designed to support all attachments? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q59": {
                        "id": "q59",
                        "content": "Are all approaches and platforms effectively lit? ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q6": {
                        "id": "q6",
                        "content": "Are scaffolds erected a safe distance away from trenches or excavations?",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q60": {
                        "id": "q60",
                        "content": "Is the supporting surface hard and flat?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q61": {
                        "id": "q61",
                        "content": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q62": {
                        "id": "q62",
                        "content": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "q7": {
                        "id": "q7",
                        "content": "Is the supporting structure in good condition? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q8": {
                        "id": "q8",
                        "content": "Does the supporting structure have adequate strength? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    },
                    "q9": {
                        "id": "q9",
                        "content": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
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
                                "Yes",
                                "No"
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
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
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
                    "DateCreated": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "DateofInspection": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "InspectiomType": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "InspectionNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "InspectionPhoto": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "InspectionStatus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Mobilescaffoldused": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ScaffTagNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ScaffoldInspector": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection1": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection10": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection2": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection3": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection5": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection6": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection7": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection8": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "commentssection9": {
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
                    },
                    "q1": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q10": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q11": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q12": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q13": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q14": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q15": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q16": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q17": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q18": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q19": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q2": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q20": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q21": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q22": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q23": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q24": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q25": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q26": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q27": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q28": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q29": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q3": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q30": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q31": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q32": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q34": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q35": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q36": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q37": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q38": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q39": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q4": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q40": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q41": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q42": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q43": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q44": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q45": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q46": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q47": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q48": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q49": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q5": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q50": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q51": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q52": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q53": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q54": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q55": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q56": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q57": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q58": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q59": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q6": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q60": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q61": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q62": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q7": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q8": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "q9": {
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
                            "@dateChanged",
                            "@dateCreated",
                            "@who",
                            "DateCreated",
                            "DateofInspection",
                            "InspectiomType",
                            "InspectionNumber",
                            "InspectionPhoto",
                            "InspectionStatus",
                            "Mobilescaffoldused",
                            "ScaffTagNumber",
                            "ScaffoldInspector",
                            "commentssection1",
                            "commentssection10",
                            "commentssection2",
                            "commentssection3",
                            "commentssection5",
                            "commentssection6",
                            "commentssection7",
                            "commentssection8",
                            "commentssection9",
                            "id",
                            "q1",
                            "q10",
                            "q11",
                            "q12",
                            "q13",
                            "q14",
                            "q15",
                            "q16",
                            "q17",
                            "q18",
                            "q19",
                            "q2",
                            "q20",
                            "q21",
                            "q22",
                            "q23",
                            "q24",
                            "q25",
                            "q26",
                            "q27",
                            "q28",
                            "q29",
                            "q3",
                            "q30",
                            "q31",
                            "q32",
                            "q34",
                            "q35",
                            "q36",
                            "q37",
                            "q38",
                            "q39",
                            "q4",
                            "q40",
                            "q41",
                            "q42",
                            "q43",
                            "q44",
                            "q45",
                            "q46",
                            "q47",
                            "q48",
                            "q49",
                            "q5",
                            "q50",
                            "q51",
                            "q52",
                            "q53",
                            "q54",
                            "q55",
                            "q56",
                            "q57",
                            "q58",
                            "q59",
                            "q6",
                            "q60",
                            "q61",
                            "q62",
                            "q7",
                            "q8",
                            "q9"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
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
                "DateCreated": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "DateofInspection": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "InspectiomType": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "InspectionNumber": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "InspectionPhoto": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "InspectionStatus": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Mobilescaffoldused": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ScaffTagNumber": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ScaffoldInspector": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection1": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection10": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection2": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection3": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection5": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection6": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection7": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection8": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "commentssection9": {
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
                },
                "q1": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q10": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q11": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q12": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q13": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q14": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q15": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q16": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q17": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q18": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q19": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q2": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q20": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q21": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q22": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q23": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q24": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q25": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q26": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q27": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q28": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q29": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q3": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q30": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q31": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q32": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q34": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q35": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q36": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q37": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q38": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q39": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q4": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q40": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q41": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q42": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q43": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q44": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q45": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q46": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q47": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q48": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q49": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q5": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q50": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q51": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q52": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q53": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q54": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q55": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q56": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q57": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q58": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q59": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q6": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q60": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q61": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q62": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q7": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q8": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "q9": {
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
                        "fieldSysName": "DateCreated",
                        "fetch": [],
                        "sysName": "DateCreated",
                        "name": "Date Created",
                        "dataType": "link",
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
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": "inspection_register"
                    },
                    {
                        "fieldSysName": "DateofInspection",
                        "fetch": [],
                        "sysName": "DateofInspection",
                        "name": "Date of Inspcetion",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectiomType",
                        "fetch": [],
                        "sysName": "InspectiomType",
                        "name": "Inspection Type",
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
                                    "value": "Daily Inspection",
                                    "label": "Daily Inspection"
                                },
                                {
                                    "value": "Weekly Inspection",
                                    "label": "Weekly Inspection"
                                },
                                {
                                    "value": "Fortnightly Inspection",
                                    "label": "Fortnightly Inspection"
                                },
                                {
                                    "value": "Monthly Inspection",
                                    "label": "Monthly Inspection"
                                },
                                {
                                    "value": "Bi-Monthly Inspection",
                                    "label": "Bi-Monthly Inspection"
                                },
                                {
                                    "value": "6 Monthly Inspection",
                                    "label": "6 Monthly Inspection"
                                },
                                {
                                    "value": "Annual Inspection",
                                    "label": "Annual Inspection"
                                },
                                {
                                    "value": "Weather Impact Inspection",
                                    "label": "Weather Impact Inspection"
                                },
                                {
                                    "value": "Post Damage Inspection",
                                    "label": "Post Damage Inspection"
                                },
                                {
                                    "value": "Post Incident Inspection",
                                    "label": "Post Incident Inspection"
                                },
                                {
                                    "value": "New Build Inspection",
                                    "label": "New  Build Inspection"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionNumber",
                        "fetch": [],
                        "sysName": "InspectionNumber",
                        "name": "Inspection Number",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionPhoto",
                        "fetch": [],
                        "sysName": "InspectionPhoto",
                        "name": "Inspection Photo",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionStatus",
                        "fetch": [],
                        "sysName": "InspectionStatus",
                        "name": "Inspection Status",
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
                                    "value": "Planned",
                                    "label": "Planned"
                                },
                                {
                                    "value": "Complete",
                                    "label": "Complete"
                                },
                                {
                                    "value": "OverDue",
                                    "label": "OverDue"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "Mobilescaffoldused",
                        "fetch": [],
                        "sysName": "Mobilescaffoldused",
                        "name": "Mobile Scaffold Used",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ScaffTagNumber",
                        "fetch": [],
                        "sysName": "ScaffTagNumber",
                        "name": "Scaff Tag Number",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "scaffold_register"
                    },
                    {
                        "fieldSysName": "ScaffoldInspector",
                        "fetch": [],
                        "sysName": "ScaffoldInspector",
                        "name": "Scaffold Inspector",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "commentssection1",
                        "fetch": [],
                        "sysName": "commentssection1",
                        "name": "Scaffold Vicinity Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection10",
                        "fetch": [],
                        "sysName": "commentssection10",
                        "name": "Mobile Scaffold Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection2",
                        "fetch": [],
                        "sysName": "commentssection2",
                        "name": "Supporting Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection3",
                        "fetch": [],
                        "sysName": "commentssection3",
                        "name": "Sole boards and Base Plates Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection5",
                        "fetch": [],
                        "sysName": "commentssection5",
                        "name": "Scaffold Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection6",
                        "fetch": [],
                        "sysName": "commentssection6",
                        "name": "Platform Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection7",
                        "fetch": [],
                        "sysName": "commentssection7",
                        "name": "Access and egress Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection8",
                        "fetch": [],
                        "sysName": "commentssection8",
                        "name": "Cladding Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection9",
                        "fetch": [],
                        "sysName": "commentssection9",
                        "name": "General Fitness for Purpose Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
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
                        "fieldSysName": "q1",
                        "fetch": [],
                        "sysName": "q1",
                        "name": "Has public protection been provided?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q10",
                        "fetch": [],
                        "sysName": "q10",
                        "name": "Are all measures to strengthen the supporting structure adequate? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q11",
                        "fetch": [],
                        "sysName": "q11",
                        "name": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q12",
                        "fetch": [],
                        "sysName": "q12",
                        "name": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q13",
                        "fetch": [],
                        "sysName": "q13",
                        "name": "Are there sufficient sole boards?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q14",
                        "fetch": [],
                        "sysName": "q14",
                        "name": "Are the sole boards of suitable material and in a serviceable condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q15",
                        "fetch": [],
                        "sysName": "q15",
                        "name": "Are the sole boards secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q16",
                        "fetch": [],
                        "sysName": "q16",
                        "name": "Are there sufficient baseplates?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q17",
                        "fetch": [],
                        "sysName": "q17",
                        "name": "Are the baseplates of the appropriate type? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q18",
                        "fetch": [],
                        "sysName": "q18",
                        "name": "Are the baseplates serviceable and of suitable dimensions?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q19",
                        "fetch": [],
                        "sysName": "q19",
                        "name": "Are the baseplates secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q2",
                        "fetch": [],
                        "sysName": "q2",
                        "name": "Have sufficient safeguards against electric powerlines been provided? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q20",
                        "fetch": [],
                        "sysName": "q20",
                        "name": "Are the standards bearing firmly?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q21",
                        "fetch": [],
                        "sysName": "q21",
                        "name": "Are the standards plumb (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q22",
                        "fetch": [],
                        "sysName": "q22",
                        "name": "Are the longitudinal standard spacings correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q23",
                        "fetch": [],
                        "sysName": "q23",
                        "name": "Are the transverse standard spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q24",
                        "fetch": [],
                        "sysName": "q24",
                        "name": "Are the joints in standards correctly positioned? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q25",
                        "fetch": [],
                        "sysName": "q25",
                        "name": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q26",
                        "fetch": [],
                        "sysName": "q26",
                        "name": "Are the ledgers level (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q27",
                        "fetch": [],
                        "sysName": "q27",
                        "name": "Are the ledgers continuous (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q28",
                        "fetch": [],
                        "sysName": "q28",
                        "name": "Are the lift heights correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q29",
                        "fetch": [],
                        "sysName": "q29",
                        "name": " Are the horizontal ledger spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q3",
                        "fetch": [],
                        "sysName": "q3",
                        "name": "Is there sufficient control over vehicle movement? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q30",
                        "fetch": [],
                        "sysName": "q30",
                        "name": "Are the ledgers correctly secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q31",
                        "fetch": [],
                        "sysName": "q31",
                        "name": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q32",
                        "fetch": [],
                        "sysName": "q32",
                        "name": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q34",
                        "fetch": [],
                        "sysName": "q34",
                        "name": "Are there sufficient transoms/putlogs? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q35",
                        "fetch": [],
                        "sysName": "q35",
                        "name": "Are the transoms/putlogs correctly positioned and secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q36",
                        "fetch": [],
                        "sysName": "q36",
                        "name": "Is the bracing adequate? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q37",
                        "fetch": [],
                        "sysName": "q37",
                        "name": "Is the scaffold sufficiently stable?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q38",
                        "fetch": [],
                        "sysName": "q38",
                        "name": "Are the ties correctly positioned and correctly fixed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q39",
                        "fetch": [],
                        "sysName": "q39",
                        "name": "Does the scaffold have the required number of working platforms? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q4",
                        "fetch": [],
                        "sysName": "q4",
                        "name": "Is there sufficient control over crane operation?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q40",
                        "fetch": [],
                        "sysName": "q40",
                        "name": "Are the working platforms at the required locations? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q41",
                        "fetch": [],
                        "sysName": "q41",
                        "name": "Are catch platforms correctly positioned?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q42",
                        "fetch": [],
                        "sysName": "q42",
                        "name": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q43",
                        "fetch": [],
                        "sysName": "q43",
                        "name": "Are the platform dimensions suitable for the intended work?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q44",
                        "fetch": [],
                        "sysName": "q44",
                        "name": "Is there adequate edge protection?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q45",
                        "fetch": [],
                        "sysName": "q45",
                        "name": "Are the platforms correctly constructed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q46",
                        "fetch": [],
                        "sysName": "q46",
                        "name": "Are planks secured against wind? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q47",
                        "fetch": [],
                        "sysName": "q47",
                        "name": "Is there safe access and egress to every scaffold platform?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q48",
                        "fetch": [],
                        "sysName": "q48",
                        "name": "Are temporary stairways correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q49",
                        "fetch": [],
                        "sysName": "q49",
                        "name": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q5",
                        "fetch": [],
                        "sysName": "q5",
                        "name": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q50",
                        "fetch": [],
                        "sysName": "q50",
                        "name": "Are access ways and access platforms correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q51",
                        "fetch": [],
                        "sysName": "q51",
                        "name": "Has the scaffold been designed for wind loading on any cladding? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q52",
                        "fetch": [],
                        "sysName": "q52",
                        "name": "Are the fixing ties secure?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q53",
                        "fetch": [],
                        "sysName": "q53",
                        "name": "Are there any rips or tears?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q54",
                        "fetch": [],
                        "sysName": "q54",
                        "name": "Are the overlap joints satisfactory?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q55",
                        "fetch": [],
                        "sysName": "q55",
                        "name": "Is there adequate provision for material handling?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q56",
                        "fetch": [],
                        "sysName": "q56",
                        "name": "Are the clearances between the scaffold and adjacent structures correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q57",
                        "fetch": [],
                        "sysName": "q57",
                        "name": "Is there adequate protection from falling debris? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q58",
                        "fetch": [],
                        "sysName": "q58",
                        "name": "Has the scaffold been adequately designed to support all attachments? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q59",
                        "fetch": [],
                        "sysName": "q59",
                        "name": "Are all approaches and platforms effectively lit? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q6",
                        "fetch": [],
                        "sysName": "q6",
                        "name": "Are scaffolds erected a safe distance away from trenches or excavations?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q60",
                        "fetch": [],
                        "sysName": "q60",
                        "name": "Is the supporting surface hard and flat?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q61",
                        "fetch": [],
                        "sysName": "q61",
                        "name": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q62",
                        "fetch": [],
                        "sysName": "q62",
                        "name": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q7",
                        "fetch": [],
                        "sysName": "q7",
                        "name": "Is the supporting structure in good condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q8",
                        "fetch": [],
                        "sysName": "q8",
                        "name": "Does the supporting structure have adequate strength? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q9",
                        "fetch": [],
                        "sysName": "q9",
                        "name": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
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
                                "Yes",
                                "No"
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
                    }
                ],
                "writeFields": [
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
                        "fieldSysName": "DateCreated",
                        "fetch": [],
                        "sysName": "DateCreated",
                        "name": "Date Created",
                        "dataType": "link",
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
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": "inspection_register"
                    },
                    {
                        "fieldSysName": "DateofInspection",
                        "fetch": [],
                        "sysName": "DateofInspection",
                        "name": "Date of Inspcetion",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectiomType",
                        "fetch": [],
                        "sysName": "InspectiomType",
                        "name": "Inspection Type",
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
                                    "value": "Daily Inspection",
                                    "label": "Daily Inspection"
                                },
                                {
                                    "value": "Weekly Inspection",
                                    "label": "Weekly Inspection"
                                },
                                {
                                    "value": "Fortnightly Inspection",
                                    "label": "Fortnightly Inspection"
                                },
                                {
                                    "value": "Monthly Inspection",
                                    "label": "Monthly Inspection"
                                },
                                {
                                    "value": "Bi-Monthly Inspection",
                                    "label": "Bi-Monthly Inspection"
                                },
                                {
                                    "value": "6 Monthly Inspection",
                                    "label": "6 Monthly Inspection"
                                },
                                {
                                    "value": "Annual Inspection",
                                    "label": "Annual Inspection"
                                },
                                {
                                    "value": "Weather Impact Inspection",
                                    "label": "Weather Impact Inspection"
                                },
                                {
                                    "value": "Post Damage Inspection",
                                    "label": "Post Damage Inspection"
                                },
                                {
                                    "value": "Post Incident Inspection",
                                    "label": "Post Incident Inspection"
                                },
                                {
                                    "value": "New Build Inspection",
                                    "label": "New  Build Inspection"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionNumber",
                        "fetch": [],
                        "sysName": "InspectionNumber",
                        "name": "Inspection Number",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionPhoto",
                        "fetch": [],
                        "sysName": "InspectionPhoto",
                        "name": "Inspection Photo",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InspectionStatus",
                        "fetch": [],
                        "sysName": "InspectionStatus",
                        "name": "Inspection Status",
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
                                    "value": "Planned",
                                    "label": "Planned"
                                },
                                {
                                    "value": "Complete",
                                    "label": "Complete"
                                },
                                {
                                    "value": "OverDue",
                                    "label": "OverDue"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "Mobilescaffoldused",
                        "fetch": [],
                        "sysName": "Mobilescaffoldused",
                        "name": "Mobile Scaffold Used",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ScaffTagNumber",
                        "fetch": [],
                        "sysName": "ScaffTagNumber",
                        "name": "Scaff Tag Number",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "scaffold_register"
                    },
                    {
                        "fieldSysName": "ScaffoldInspector",
                        "fetch": [],
                        "sysName": "ScaffoldInspector",
                        "name": "Scaffold Inspector",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "commentssection1",
                        "fetch": [],
                        "sysName": "commentssection1",
                        "name": "Scaffold Vicinity Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection10",
                        "fetch": [],
                        "sysName": "commentssection10",
                        "name": "Mobile Scaffold Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection2",
                        "fetch": [],
                        "sysName": "commentssection2",
                        "name": "Supporting Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection3",
                        "fetch": [],
                        "sysName": "commentssection3",
                        "name": "Sole boards and Base Plates Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection5",
                        "fetch": [],
                        "sysName": "commentssection5",
                        "name": "Scaffold Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection6",
                        "fetch": [],
                        "sysName": "commentssection6",
                        "name": "Platform Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection7",
                        "fetch": [],
                        "sysName": "commentssection7",
                        "name": "Access and egress Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "commentssection8",
                        "fetch": [],
                        "sysName": "commentssection8",
                        "name": "Cladding Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "commentssection9",
                        "fetch": [],
                        "sysName": "commentssection9",
                        "name": "General Fitness for Purpose Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
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
                        "fieldSysName": "q1",
                        "fetch": [],
                        "sysName": "q1",
                        "name": "Has public protection been provided?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q10",
                        "fetch": [],
                        "sysName": "q10",
                        "name": "Are all measures to strengthen the supporting structure adequate? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q11",
                        "fetch": [],
                        "sysName": "q11",
                        "name": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q12",
                        "fetch": [],
                        "sysName": "q12",
                        "name": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q13",
                        "fetch": [],
                        "sysName": "q13",
                        "name": "Are there sufficient sole boards?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q14",
                        "fetch": [],
                        "sysName": "q14",
                        "name": "Are the sole boards of suitable material and in a serviceable condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q15",
                        "fetch": [],
                        "sysName": "q15",
                        "name": "Are the sole boards secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q16",
                        "fetch": [],
                        "sysName": "q16",
                        "name": "Are there sufficient baseplates?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q17",
                        "fetch": [],
                        "sysName": "q17",
                        "name": "Are the baseplates of the appropriate type? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q18",
                        "fetch": [],
                        "sysName": "q18",
                        "name": "Are the baseplates serviceable and of suitable dimensions?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q19",
                        "fetch": [],
                        "sysName": "q19",
                        "name": "Are the baseplates secure? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q2",
                        "fetch": [],
                        "sysName": "q2",
                        "name": "Have sufficient safeguards against electric powerlines been provided? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q20",
                        "fetch": [],
                        "sysName": "q20",
                        "name": "Are the standards bearing firmly?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q21",
                        "fetch": [],
                        "sysName": "q21",
                        "name": "Are the standards plumb (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q22",
                        "fetch": [],
                        "sysName": "q22",
                        "name": "Are the longitudinal standard spacings correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q23",
                        "fetch": [],
                        "sysName": "q23",
                        "name": "Are the transverse standard spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q24",
                        "fetch": [],
                        "sysName": "q24",
                        "name": "Are the joints in standards correctly positioned? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q25",
                        "fetch": [],
                        "sysName": "q25",
                        "name": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q26",
                        "fetch": [],
                        "sysName": "q26",
                        "name": "Are the ledgers level (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q27",
                        "fetch": [],
                        "sysName": "q27",
                        "name": "Are the ledgers continuous (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q28",
                        "fetch": [],
                        "sysName": "q28",
                        "name": "Are the lift heights correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q29",
                        "fetch": [],
                        "sysName": "q29",
                        "name": " Are the horizontal ledger spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q3",
                        "fetch": [],
                        "sysName": "q3",
                        "name": "Is there sufficient control over vehicle movement? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q30",
                        "fetch": [],
                        "sysName": "q30",
                        "name": "Are the ledgers correctly secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q31",
                        "fetch": [],
                        "sysName": "q31",
                        "name": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q32",
                        "fetch": [],
                        "sysName": "q32",
                        "name": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q34",
                        "fetch": [],
                        "sysName": "q34",
                        "name": "Are there sufficient transoms/putlogs? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q35",
                        "fetch": [],
                        "sysName": "q35",
                        "name": "Are the transoms/putlogs correctly positioned and secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q36",
                        "fetch": [],
                        "sysName": "q36",
                        "name": "Is the bracing adequate? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q37",
                        "fetch": [],
                        "sysName": "q37",
                        "name": "Is the scaffold sufficiently stable?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q38",
                        "fetch": [],
                        "sysName": "q38",
                        "name": "Are the ties correctly positioned and correctly fixed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q39",
                        "fetch": [],
                        "sysName": "q39",
                        "name": "Does the scaffold have the required number of working platforms? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q4",
                        "fetch": [],
                        "sysName": "q4",
                        "name": "Is there sufficient control over crane operation?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q40",
                        "fetch": [],
                        "sysName": "q40",
                        "name": "Are the working platforms at the required locations? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q41",
                        "fetch": [],
                        "sysName": "q41",
                        "name": "Are catch platforms correctly positioned?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q42",
                        "fetch": [],
                        "sysName": "q42",
                        "name": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q43",
                        "fetch": [],
                        "sysName": "q43",
                        "name": "Are the platform dimensions suitable for the intended work?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q44",
                        "fetch": [],
                        "sysName": "q44",
                        "name": "Is there adequate edge protection?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q45",
                        "fetch": [],
                        "sysName": "q45",
                        "name": "Are the platforms correctly constructed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q46",
                        "fetch": [],
                        "sysName": "q46",
                        "name": "Are planks secured against wind? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q47",
                        "fetch": [],
                        "sysName": "q47",
                        "name": "Is there safe access and egress to every scaffold platform?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q48",
                        "fetch": [],
                        "sysName": "q48",
                        "name": "Are temporary stairways correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q49",
                        "fetch": [],
                        "sysName": "q49",
                        "name": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q5",
                        "fetch": [],
                        "sysName": "q5",
                        "name": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q50",
                        "fetch": [],
                        "sysName": "q50",
                        "name": "Are access ways and access platforms correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q51",
                        "fetch": [],
                        "sysName": "q51",
                        "name": "Has the scaffold been designed for wind loading on any cladding? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q52",
                        "fetch": [],
                        "sysName": "q52",
                        "name": "Are the fixing ties secure?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q53",
                        "fetch": [],
                        "sysName": "q53",
                        "name": "Are there any rips or tears?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q54",
                        "fetch": [],
                        "sysName": "q54",
                        "name": "Are the overlap joints satisfactory?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q55",
                        "fetch": [],
                        "sysName": "q55",
                        "name": "Is there adequate provision for material handling?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q56",
                        "fetch": [],
                        "sysName": "q56",
                        "name": "Are the clearances between the scaffold and adjacent structures correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q57",
                        "fetch": [],
                        "sysName": "q57",
                        "name": "Is there adequate protection from falling debris? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q58",
                        "fetch": [],
                        "sysName": "q58",
                        "name": "Has the scaffold been adequately designed to support all attachments? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q59",
                        "fetch": [],
                        "sysName": "q59",
                        "name": "Are all approaches and platforms effectively lit? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q6",
                        "fetch": [],
                        "sysName": "q6",
                        "name": "Are scaffolds erected a safe distance away from trenches or excavations?",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q60",
                        "fetch": [],
                        "sysName": "q60",
                        "name": "Is the supporting surface hard and flat?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q61",
                        "fetch": [],
                        "sysName": "q61",
                        "name": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q62",
                        "fetch": [],
                        "sysName": "q62",
                        "name": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "q7",
                        "fetch": [],
                        "sysName": "q7",
                        "name": "Is the supporting structure in good condition? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q8",
                        "fetch": [],
                        "sysName": "q8",
                        "name": "Does the supporting structure have adequate strength? ",
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
                                "Yes",
                                "No"
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
                        "fieldSysName": "q9",
                        "fetch": [],
                        "sysName": "q9",
                        "name": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
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
                                "Yes",
                                "No"
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
                    }
                ],
                "fields": {
                    "@dateChanged": {
                        "id": "@dateChanged",
                        "content": "date changed",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "@dateCreated": {
                        "id": "@dateCreated",
                        "content": "date created",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "@who": {
                        "id": "@who",
                        "content": "who changed",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "DateCreated": {
                        "id": "DateCreated",
                        "content": "Date Created",
                        "dataType": "link",
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
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": "inspection_register"
                    },
                    "DateofInspection": {
                        "id": "DateofInspection",
                        "content": "Date of Inspcetion",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "InspectiomType": {
                        "id": "InspectiomType",
                        "content": "Inspection Type",
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
                                    "value": "Daily Inspection",
                                    "label": "Daily Inspection"
                                },
                                {
                                    "value": "Weekly Inspection",
                                    "label": "Weekly Inspection"
                                },
                                {
                                    "value": "Fortnightly Inspection",
                                    "label": "Fortnightly Inspection"
                                },
                                {
                                    "value": "Monthly Inspection",
                                    "label": "Monthly Inspection"
                                },
                                {
                                    "value": "Bi-Monthly Inspection",
                                    "label": "Bi-Monthly Inspection"
                                },
                                {
                                    "value": "6 Monthly Inspection",
                                    "label": "6 Monthly Inspection"
                                },
                                {
                                    "value": "Annual Inspection",
                                    "label": "Annual Inspection"
                                },
                                {
                                    "value": "Weather Impact Inspection",
                                    "label": "Weather Impact Inspection"
                                },
                                {
                                    "value": "Post Damage Inspection",
                                    "label": "Post Damage Inspection"
                                },
                                {
                                    "value": "Post Incident Inspection",
                                    "label": "Post Incident Inspection"
                                },
                                {
                                    "value": "New Build Inspection",
                                    "label": "New  Build Inspection"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "InspectionNumber": {
                        "id": "InspectionNumber",
                        "content": "Inspection Number",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "InspectionPhoto": {
                        "id": "InspectionPhoto",
                        "content": "Inspection Photo",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "InspectionStatus": {
                        "id": "InspectionStatus",
                        "content": "Inspection Status",
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
                                    "value": "Planned",
                                    "label": "Planned"
                                },
                                {
                                    "value": "Complete",
                                    "label": "Complete"
                                },
                                {
                                    "value": "OverDue",
                                    "label": "OverDue"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "Mobilescaffoldused": {
                        "id": "Mobilescaffoldused",
                        "content": "Mobile Scaffold Used",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "ScaffTagNumber": {
                        "id": "ScaffTagNumber",
                        "content": "Scaff Tag Number",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "scaffold_register"
                    },
                    "ScaffoldInspector": {
                        "id": "ScaffoldInspector",
                        "content": "Scaffold Inspector",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser"
                    },
                    "commentssection1": {
                        "id": "commentssection1",
                        "content": "Scaffold Vicinity Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "commentssection10": {
                        "id": "commentssection10",
                        "content": "Mobile Scaffold Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "commentssection2": {
                        "id": "commentssection2",
                        "content": "Supporting Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "commentssection3": {
                        "id": "commentssection3",
                        "content": "Sole boards and Base Plates Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "commentssection5": {
                        "id": "commentssection5",
                        "content": "Scaffold Structure Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "commentssection6": {
                        "id": "commentssection6",
                        "content": "Platform Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "commentssection7": {
                        "id": "commentssection7",
                        "content": "Access and egress Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "commentssection8": {
                        "id": "commentssection8",
                        "content": "Cladding Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "commentssection9": {
                        "id": "commentssection9",
                        "content": "General Fitness for Purpose Section Comments",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
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
                    "q1": {
                        "id": "q1",
                        "content": "Has public protection been provided?",
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
                                "Yes",
                                "No"
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
                    "q10": {
                        "id": "q10",
                        "content": "Are all measures to strengthen the supporting structure adequate? ",
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
                                "Yes",
                                "No"
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
                    "q11": {
                        "id": "q11",
                        "content": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q12": {
                        "id": "q12",
                        "content": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
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
                                "Yes",
                                "No"
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
                    "q13": {
                        "id": "q13",
                        "content": "Are there sufficient sole boards?",
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
                                "Yes",
                                "No"
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
                    "q14": {
                        "id": "q14",
                        "content": "Are the sole boards of suitable material and in a serviceable condition? ",
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
                                "Yes",
                                "No"
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
                    "q15": {
                        "id": "q15",
                        "content": "Are the sole boards secure? ",
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
                                "Yes",
                                "No"
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
                    "q16": {
                        "id": "q16",
                        "content": "Are there sufficient baseplates?",
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
                                "Yes",
                                "No"
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
                    "q17": {
                        "id": "q17",
                        "content": "Are the baseplates of the appropriate type? ",
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
                                "Yes",
                                "No"
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
                    "q18": {
                        "id": "q18",
                        "content": "Are the baseplates serviceable and of suitable dimensions?",
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
                                "Yes",
                                "No"
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
                    "q19": {
                        "id": "q19",
                        "content": "Are the baseplates secure? ",
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
                                "Yes",
                                "No"
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
                    "q2": {
                        "id": "q2",
                        "content": "Have sufficient safeguards against electric powerlines been provided? ",
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
                                "Yes",
                                "No"
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
                    "q20": {
                        "id": "q20",
                        "content": "Are the standards bearing firmly?",
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
                                "Yes",
                                "No"
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
                    "q21": {
                        "id": "q21",
                        "content": "Are the standards plumb (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q22": {
                        "id": "q22",
                        "content": "Are the longitudinal standard spacings correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q23": {
                        "id": "q23",
                        "content": "Are the transverse standard spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q24": {
                        "id": "q24",
                        "content": "Are the joints in standards correctly positioned? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q25": {
                        "id": "q25",
                        "content": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q26": {
                        "id": "q26",
                        "content": "Are the ledgers level (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q27": {
                        "id": "q27",
                        "content": "Are the ledgers continuous (or as designed)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q28": {
                        "id": "q28",
                        "content": "Are the lift heights correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q29": {
                        "id": "q29",
                        "content": " Are the horizontal ledger spacings correct?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q3": {
                        "id": "q3",
                        "content": "Is there sufficient control over vehicle movement? ",
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
                                "Yes",
                                "No"
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
                    "q30": {
                        "id": "q30",
                        "content": "Are the ledgers correctly secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q31": {
                        "id": "q31",
                        "content": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q32": {
                        "id": "q32",
                        "content": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q34": {
                        "id": "q34",
                        "content": "Are there sufficient transoms/putlogs? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q35": {
                        "id": "q35",
                        "content": "Are the transoms/putlogs correctly positioned and secured? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q36": {
                        "id": "q36",
                        "content": "Is the bracing adequate? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q37": {
                        "id": "q37",
                        "content": "Is the scaffold sufficiently stable?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q38": {
                        "id": "q38",
                        "content": "Are the ties correctly positioned and correctly fixed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q39": {
                        "id": "q39",
                        "content": "Does the scaffold have the required number of working platforms? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q4": {
                        "id": "q4",
                        "content": "Is there sufficient control over crane operation?",
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
                                "Yes",
                                "No"
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
                    "q40": {
                        "id": "q40",
                        "content": "Are the working platforms at the required locations? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q41": {
                        "id": "q41",
                        "content": "Are catch platforms correctly positioned?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q42": {
                        "id": "q42",
                        "content": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q43": {
                        "id": "q43",
                        "content": "Are the platform dimensions suitable for the intended work?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q44": {
                        "id": "q44",
                        "content": "Is there adequate edge protection?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q45": {
                        "id": "q45",
                        "content": "Are the platforms correctly constructed?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q46": {
                        "id": "q46",
                        "content": "Are planks secured against wind? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q47": {
                        "id": "q47",
                        "content": "Is there safe access and egress to every scaffold platform?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q48": {
                        "id": "q48",
                        "content": "Are temporary stairways correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q49": {
                        "id": "q49",
                        "content": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q5": {
                        "id": "q5",
                        "content": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
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
                                "Yes",
                                "No"
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
                    "q50": {
                        "id": "q50",
                        "content": "Are access ways and access platforms correctly installed? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q51": {
                        "id": "q51",
                        "content": "Has the scaffold been designed for wind loading on any cladding? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q52": {
                        "id": "q52",
                        "content": "Are the fixing ties secure?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q53": {
                        "id": "q53",
                        "content": "Are there any rips or tears?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q54": {
                        "id": "q54",
                        "content": "Are the overlap joints satisfactory?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q55": {
                        "id": "q55",
                        "content": "Is there adequate provision for material handling?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q56": {
                        "id": "q56",
                        "content": "Are the clearances between the scaffold and adjacent structures correct? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q57": {
                        "id": "q57",
                        "content": "Is there adequate protection from falling debris? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q58": {
                        "id": "q58",
                        "content": "Has the scaffold been adequately designed to support all attachments? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q59": {
                        "id": "q59",
                        "content": "Are all approaches and platforms effectively lit? ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q6": {
                        "id": "q6",
                        "content": "Are scaffolds erected a safe distance away from trenches or excavations?",
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
                                "Yes",
                                "No"
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
                    "q60": {
                        "id": "q60",
                        "content": "Is the supporting surface hard and flat?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q61": {
                        "id": "q61",
                        "content": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q62": {
                        "id": "q62",
                        "content": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "q7": {
                        "id": "q7",
                        "content": "Is the supporting structure in good condition? ",
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
                                "Yes",
                                "No"
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
                    "q8": {
                        "id": "q8",
                        "content": "Does the supporting structure have adequate strength? ",
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
                                "Yes",
                                "No"
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
                    "q9": {
                        "id": "q9",
                        "content": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
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
                                "Yes",
                                "No"
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
                    }
                },
                "fieldParams": {
                    "@dateChanged": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "@dateCreated": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "@who": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "DateCreated": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "DateofInspection": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "InspectiomType": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "InspectionNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "InspectionPhoto": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "InspectionStatus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "Mobilescaffoldused": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ScaffTagNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ScaffoldInspector": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection1": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection10": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection2": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection3": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection5": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection6": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection7": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection8": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "commentssection9": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q1": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q10": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q11": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q12": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q13": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q14": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q15": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q16": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q17": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q18": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q19": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q2": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q20": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q21": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q22": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q23": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q24": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q25": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q26": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q27": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q28": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q29": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q3": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q30": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q31": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q32": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q34": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q35": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q36": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q37": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q38": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q39": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q4": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q40": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q41": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q42": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q43": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q44": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q45": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q46": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q47": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q48": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q49": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q5": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q50": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q51": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q52": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q53": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q54": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q55": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q56": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q57": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q58": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q59": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q6": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q60": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q61": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q62": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q7": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q8": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "q9": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "@dateChanged",
                    "@dateCreated",
                    "@who",
                    "DateCreated",
                    "DateofInspection",
                    "InspectiomType",
                    "InspectionNumber",
                    "InspectionPhoto",
                    "InspectionStatus",
                    "Mobilescaffoldused",
                    "ScaffTagNumber",
                    "ScaffoldInspector",
                    "commentssection1",
                    "commentssection10",
                    "commentssection2",
                    "commentssection3",
                    "commentssection5",
                    "commentssection6",
                    "commentssection7",
                    "commentssection8",
                    "commentssection9",
                    "id",
                    "q1",
                    "q10",
                    "q11",
                    "q12",
                    "q13",
                    "q14",
                    "q15",
                    "q16",
                    "q17",
                    "q18",
                    "q19",
                    "q2",
                    "q20",
                    "q21",
                    "q22",
                    "q23",
                    "q24",
                    "q25",
                    "q26",
                    "q27",
                    "q28",
                    "q29",
                    "q3",
                    "q30",
                    "q31",
                    "q32",
                    "q34",
                    "q35",
                    "q36",
                    "q37",
                    "q38",
                    "q39",
                    "q4",
                    "q40",
                    "q41",
                    "q42",
                    "q43",
                    "q44",
                    "q45",
                    "q46",
                    "q47",
                    "q48",
                    "q49",
                    "q5",
                    "q50",
                    "q51",
                    "q52",
                    "q53",
                    "q54",
                    "q55",
                    "q56",
                    "q57",
                    "q58",
                    "q59",
                    "q6",
                    "q60",
                    "q61",
                    "q62",
                    "q7",
                    "q8",
                    "q9"
                ]
            }
        },
        "tableTitle": "Inspection Run Sheet",
        "actions": null,
        "headers": [
            {
                "sysName": "@dateChanged",
                "name": "@dateChanged",
                "dataType": "string",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "@dateCreated",
                "name": "@dateCreated",
                "dataType": "string",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "@who",
                "name": "@who",
                "dataType": "string",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "DateCreated",
                "name": "Date Created",
                "dataType": "link",
                "id": "49441634533009669",
                "link": "inspection_register",
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
                    "isUTC": "false"
                },
                "groupName": null,
                "json": false,
                "linkType": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "DateofInspection",
                "name": "Date of Inspcetion",
                "dataType": "date",
                "id": "94871634275311145",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectiomType",
                "name": "Inspection Type",
                "dataType": "json",
                "id": "42181634275396493",
                "link": "",
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
                            "value": "Daily Inspection",
                            "label": "Daily Inspection"
                        },
                        {
                            "value": "Weekly Inspection",
                            "label": "Weekly Inspection"
                        },
                        {
                            "value": "Fortnightly Inspection",
                            "label": "Fortnightly Inspection"
                        },
                        {
                            "value": "Monthly Inspection",
                            "label": "Monthly Inspection"
                        },
                        {
                            "value": "Bi-Monthly Inspection",
                            "label": "Bi-Monthly Inspection"
                        },
                        {
                            "value": "6 Monthly Inspection",
                            "label": "6 Monthly Inspection"
                        },
                        {
                            "value": "Annual Inspection",
                            "label": "Annual Inspection"
                        },
                        {
                            "value": "Weather Impact Inspection",
                            "label": "Weather Impact Inspection"
                        },
                        {
                            "value": "Post Damage Inspection",
                            "label": "Post Damage Inspection"
                        },
                        {
                            "value": "Post Incident Inspection",
                            "label": "Post Incident Inspection"
                        },
                        {
                            "value": "New Build Inspection",
                            "label": "New  Build Inspection"
                        }
                    ]
                },
                "groupName": null,
                "json": true,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectionNumber",
                "name": "Inspection Number",
                "dataType": "string",
                "id": "85021634445939978",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectionPhoto",
                "name": "Inspection Photo",
                "dataType": "file",
                "id": "80451634275646119",
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
                "format": "multipleImages",
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectionStatus",
                "name": "Inspection Status",
                "dataType": "json",
                "id": "29711634460157398",
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
                            "value": "Planned",
                            "label": "Planned"
                        },
                        {
                            "value": "Complete",
                            "label": "Complete"
                        },
                        {
                            "value": "OverDue",
                            "label": "OverDue"
                        }
                    ]
                },
                "groupName": null,
                "json": true,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "Mobilescaffoldused",
                "name": "Mobile Scaffold Used",
                "dataType": "boolean",
                "id": "50051634279582720",
                "link": "",
                "group": "1634279464742",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ScaffTagNumber",
                "name": "Scaff Tag Number",
                "dataType": "link",
                "id": "22291634430043207",
                "link": "scaffold_register",
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
                "linkType": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ScaffoldInspector",
                "name": "Scaffold Inspector",
                "dataType": "link",
                "id": "76771634275342375",
                "link": "WebUser",
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
                "linkType": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection1",
                "name": "Scaffold Vicinity Section Comments",
                "dataType": "string",
                "id": "33181634277192461",
                "link": null,
                "group": "1634275683892",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection10",
                "name": "Mobile Scaffold Section Comments",
                "dataType": "string",
                "id": "63001634279546392",
                "link": null,
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection2",
                "name": "Supporting Structure Section Comments",
                "dataType": "string",
                "id": "13061634277242154",
                "link": null,
                "group": "1634276030465",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection3",
                "name": "Sole boards and Base Plates Section Comments",
                "dataType": "string",
                "id": "75761634277270227",
                "link": null,
                "group": "1634276617164",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection5",
                "name": "Scaffold Structure Section Comments",
                "dataType": "string",
                "id": "49951634278901753",
                "link": null,
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection6",
                "name": "Platform Section Comments",
                "dataType": "string",
                "id": "38641634278931481",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection7",
                "name": "Access and egress Section Comments",
                "dataType": "string",
                "id": "76401634278887141",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection8",
                "name": "Cladding Section Comments",
                "dataType": "string",
                "id": "69621634279163772",
                "link": null,
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection9",
                "name": "General Fitness for Purpose Section Comments",
                "dataType": "string",
                "id": "20361634279364572",
                "link": null,
                "group": "1634279227145",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q1",
                "name": "Has public protection been provided?",
                "dataType": "boolean",
                "id": "80931634275778273",
                "link": "",
                "group": "1634275683892",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q10",
                "name": "Are all measures to strengthen the supporting structure adequate? ",
                "dataType": "boolean",
                "id": "14711634276367082",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q11",
                "name": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                "dataType": "boolean",
                "id": "64561634276408038",
                "link": "",
                "group": "1634276030465",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q12",
                "name": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
                "dataType": "boolean",
                "id": "60541634276429323",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q13",
                "name": "Are there sufficient sole boards?",
                "dataType": "boolean",
                "id": "41961634276649163",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q14",
                "name": "Are the sole boards of suitable material and in a serviceable condition? ",
                "dataType": "boolean",
                "id": "45051634276690602",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q15",
                "name": "Are the sole boards secure? ",
                "dataType": "boolean",
                "id": "64231634276703108",
                "link": "",
                "group": "1634276617164",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q16",
                "name": "Are there sufficient baseplates?",
                "dataType": "boolean",
                "id": "93181634276976826",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q17",
                "name": "Are the baseplates of the appropriate type? ",
                "dataType": "boolean",
                "id": "30201634276980866",
                "link": "",
                "group": "1634276617164",
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
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q18",
                "name": "Are the baseplates serviceable and of suitable dimensions?",
                "dataType": "boolean",
                "id": "57361634277011827",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q19",
                "name": "Are the baseplates secure? ",
                "dataType": "boolean",
                "id": "23661634277024138",
                "link": "",
                "group": "1634276617164",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q2",
                "name": "Have sufficient safeguards against electric powerlines been provided? ",
                "dataType": "boolean",
                "id": "41601634275838627",
                "link": "",
                "group": "1634275683892",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q20",
                "name": "Are the standards bearing firmly?",
                "dataType": "boolean",
                "id": "47771634277065896",
                "link": "",
                "group": "1634277046054",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q21",
                "name": "Are the standards plumb (or as designed)? ",
                "dataType": "boolean",
                "id": "46731634277082155",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q22",
                "name": "Are the longitudinal standard spacings correct? ",
                "dataType": "boolean",
                "id": "59641634277102693",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q23",
                "name": "Are the transverse standard spacings correct?",
                "dataType": "boolean",
                "id": "20491634277106614",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q24",
                "name": "Are the joints in standards correctly positioned? ",
                "dataType": "boolean",
                "id": "58901634277319016",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q25",
                "name": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                "dataType": "boolean",
                "id": "31991634277322396",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q26",
                "name": "Are the ledgers level (or as designed)? ",
                "dataType": "boolean",
                "id": "34111634277326588",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q27",
                "name": "Are the ledgers continuous (or as designed)? ",
                "dataType": "boolean",
                "id": "71151634277367368",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q28",
                "name": "Are the lift heights correct? ",
                "dataType": "boolean",
                "id": "37961634277373298",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q29",
                "name": " Are the horizontal ledger spacings correct?",
                "dataType": "boolean",
                "id": "10781634277441395",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q3",
                "name": "Is there sufficient control over vehicle movement? ",
                "dataType": "boolean",
                "id": "99521634275888481",
                "link": "",
                "group": "1634275683892",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q30",
                "name": "Are the ledgers correctly secured? ",
                "dataType": "boolean",
                "id": "32561634277455210",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q31",
                "name": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                "dataType": "boolean",
                "id": "15101634277470422",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q32",
                "name": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                "dataType": "boolean",
                "id": "48581634277483008",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q34",
                "name": "Are there sufficient transoms/putlogs? ",
                "dataType": "boolean",
                "id": "22151634277487225",
                "link": "",
                "group": "1634277046054",
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
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q35",
                "name": "Are the transoms/putlogs correctly positioned and secured? ",
                "dataType": "boolean",
                "id": "71641634277513168",
                "link": "",
                "group": "1634277046054",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q36",
                "name": "Is the bracing adequate? ",
                "dataType": "boolean",
                "id": "82321634277516832",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q37",
                "name": "Is the scaffold sufficiently stable?",
                "dataType": "boolean",
                "id": "20761634277541648",
                "link": "",
                "group": "1634277046054",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q38",
                "name": "Are the ties correctly positioned and correctly fixed?",
                "dataType": "boolean",
                "id": "50411634277571764",
                "link": "",
                "group": "1634277046054",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q39",
                "name": "Does the scaffold have the required number of working platforms? ",
                "dataType": "boolean",
                "id": "94411634277629212",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q4",
                "name": "Is there sufficient control over crane operation?",
                "dataType": "boolean",
                "id": "51521634275925479",
                "link": "",
                "group": "1634275683892",
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
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q40",
                "name": "Are the working platforms at the required locations? ",
                "dataType": "boolean",
                "id": "98531634277645896",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q41",
                "name": "Are catch platforms correctly positioned?",
                "dataType": "boolean",
                "id": "96631634277660561",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q42",
                "name": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                "dataType": "boolean",
                "id": "31011634277663744",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q43",
                "name": "Are the platform dimensions suitable for the intended work?",
                "dataType": "boolean",
                "id": "48211634277689649",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q44",
                "name": "Is there adequate edge protection?",
                "dataType": "boolean",
                "id": "77931634277701155",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q45",
                "name": "Are the platforms correctly constructed?",
                "dataType": "boolean",
                "id": "38141634277704191",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q46",
                "name": "Are planks secured against wind? ",
                "dataType": "boolean",
                "id": "74171634277738115",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q47",
                "name": "Is there safe access and egress to every scaffold platform?",
                "dataType": "boolean",
                "id": "37281634278810201",
                "link": "",
                "group": "1634277787868",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q48",
                "name": "Are temporary stairways correctly installed? ",
                "dataType": "boolean",
                "id": "21851634278827692",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q49",
                "name": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                "dataType": "boolean",
                "id": "20231634278834697",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q5",
                "name": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
                "dataType": "boolean",
                "id": "10841634275928739",
                "link": "",
                "group": "1634275683892",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q50",
                "name": "Are access ways and access platforms correctly installed? ",
                "dataType": "boolean",
                "id": "58211634278863826",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q51",
                "name": "Has the scaffold been designed for wind loading on any cladding? ",
                "dataType": "boolean",
                "id": "92121634279037281",
                "link": "",
                "group": "1634278882896",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q52",
                "name": "Are the fixing ties secure?",
                "dataType": "boolean",
                "id": "50871634279043105",
                "link": "",
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q53",
                "name": "Are there any rips or tears?",
                "dataType": "boolean",
                "id": "51291634279069719",
                "link": "",
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q54",
                "name": "Are the overlap joints satisfactory?",
                "dataType": "boolean",
                "id": "24631634279073480",
                "link": "",
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q55",
                "name": "Is there adequate provision for material handling?",
                "dataType": "boolean",
                "id": "56861634279274934",
                "link": "",
                "group": "1634279227145",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q56",
                "name": "Are the clearances between the scaffold and adjacent structures correct? ",
                "dataType": "boolean",
                "id": "35971634279278893",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q57",
                "name": "Is there adequate protection from falling debris? ",
                "dataType": "boolean",
                "id": "25051634279312229",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q58",
                "name": "Has the scaffold been adequately designed to support all attachments? ",
                "dataType": "boolean",
                "id": "63101634279315478",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q59",
                "name": "Are all approaches and platforms effectively lit? ",
                "dataType": "boolean",
                "id": "45891634279346150",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q6",
                "name": "Are scaffolds erected a safe distance away from trenches or excavations?",
                "dataType": "boolean",
                "id": "61481634275999727",
                "link": "",
                "group": "1634275683892",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q60",
                "name": "Is the supporting surface hard and flat?",
                "dataType": "boolean",
                "id": "42371634279479148",
                "link": "",
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q61",
                "name": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                "dataType": "boolean",
                "id": "32731634279485149",
                "link": "",
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q62",
                "name": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                "dataType": "boolean",
                "id": "57571634279521506",
                "link": "",
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q7",
                "name": "Is the supporting structure in good condition? ",
                "dataType": "boolean",
                "id": "50251634276059242",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q8",
                "name": "Does the supporting structure have adequate strength? ",
                "dataType": "boolean",
                "id": "95611634276308763",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q9",
                "name": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
                "dataType": "boolean",
                "id": "98101634276343741",
                "link": "",
                "group": "1634276030465",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "InspectiomType": "{\"value\":\"Fortnightly Inspection\"}",
                "DateofInspection": 1634140800000,
                "id": "f0dcad11-ecf3-47e9-85e4-323653343342",
                "ScaffTagNumber": "8b0572af-6588-4436-8395-14dae90847f1",
                "InspectionNumber": "I-13",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "InspectionNumber": "I-2",
                "id": "a23e4361-a3eb-4dea-ac87-9adf5717358d",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "DateofInspection": "",
                "InspectiomType": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffTagNumber": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "InspectionNumber": "I-3",
                "id": "ed56667f-257b-4356-a49b-c40576fe1821",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "DateofInspection": "",
                "InspectiomType": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffTagNumber": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "InspectiomType": "{\"value\":\"Weekly Inspection\"}",
                "DateofInspection": 1635264000000,
                "id": "a0df5e20-72b9-461f-9372-ed9344da2924",
                "InspectionStatus": "{\"value\":\"Planned\"}",
                "ScaffTagNumber": "c87b42a7-a723-4cba-ac31-09d2a996e21b",
                "q3": true,
                "InspectionNumber": "I-4",
                "q2": true,
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "InspectionPhoto": "",
                "Mobilescaffoldused": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "ScaffTagNumber": "Scaff Tag - ",
                "id": "f136f60a-a2c9-4f70-880f-b9a0f1054e61",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "DateofInspection": "",
                "InspectiomType": "",
                "InspectionNumber": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "ScaffTagNumber": "Scaff Tag - ",
                "InspectiomType": "{\"value\":\"28\"}",
                "DateofInspection": 1635004800000,
                "id": "2e90c2ce-78e2-4ad8-98dd-4aa2f9a0cc34",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "InspectionNumber": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "ScaffTagNumber": "Scaff Tag - ",
                "InspectiomType": "{\"value\":\"28\"}",
                "id": "453cc6e1-2e99-41a9-aae4-9b710c367149",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "DateofInspection": "",
                "InspectionNumber": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            },
            {
                "ScaffTagNumber": "Scaff Tag - ",
                "InspectiomType": "{\"value\":\"28\"}",
                "id": "5e5084c5-4da0-4b7f-bc14-5fd07b34398a",
                "@dateChanged": "",
                "@dateCreated": "",
                "@who": "",
                "DateCreated": "",
                "DateofInspection": "",
                "InspectionNumber": "",
                "InspectionPhoto": "",
                "InspectionStatus": "",
                "Mobilescaffoldused": "",
                "ScaffoldInspector": "",
                "commentssection1": "",
                "commentssection10": "",
                "commentssection2": "",
                "commentssection3": "",
                "commentssection5": "",
                "commentssection6": "",
                "commentssection7": "",
                "commentssection8": "",
                "commentssection9": "",
                "q1": "",
                "q10": "",
                "q11": "",
                "q12": "",
                "q13": "",
                "q14": "",
                "q15": "",
                "q16": "",
                "q17": "",
                "q18": "",
                "q19": "",
                "q2": "",
                "q20": "",
                "q21": "",
                "q22": "",
                "q23": "",
                "q24": "",
                "q25": "",
                "q26": "",
                "q27": "",
                "q28": "",
                "q29": "",
                "q3": "",
                "q30": "",
                "q31": "",
                "q32": "",
                "q34": "",
                "q35": "",
                "q36": "",
                "q37": "",
                "q38": "",
                "q39": "",
                "q4": "",
                "q40": "",
                "q41": "",
                "q42": "",
                "q43": "",
                "q44": "",
                "q45": "",
                "q46": "",
                "q47": "",
                "q48": "",
                "q49": "",
                "q5": "",
                "q50": "",
                "q51": "",
                "q52": "",
                "q53": "",
                "q54": "",
                "q55": "",
                "q56": "",
                "q57": "",
                "q58": "",
                "q59": "",
                "q6": "",
                "q60": "",
                "q61": "",
                "q62": "",
                "q7": "",
                "q8": "",
                "q9": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "@dateChanged",
                99036990
            ],
            [
                "@dateCreated",
                99036990
            ],
            [
                "@who",
                99036990
            ],
            [
                "DateCreated",
                99036990
            ],
            [
                "DateofInspection",
                99036990
            ],
            [
                "InspectiomType",
                99036990
            ],
            [
                "InspectionNumber",
                99036990
            ],
            [
                "InspectionPhoto",
                99036990
            ],
            [
                "InspectionStatus",
                99036990
            ],
            [
                "Mobilescaffoldused",
                99036990
            ],
            [
                "ScaffTagNumber",
                99036990
            ],
            [
                "ScaffoldInspector",
                99036990
            ],
            [
                "commentssection1",
                99036990
            ],
            [
                "commentssection10",
                99036990
            ],
            [
                "commentssection2",
                99036990
            ],
            [
                "commentssection3",
                99036990
            ],
            [
                "commentssection5",
                99036990
            ],
            [
                "commentssection6",
                99036990
            ],
            [
                "commentssection7",
                99036990
            ],
            [
                "commentssection8",
                99036990
            ],
            [
                "commentssection9",
                99036990
            ],
            [
                "id",
                99036990
            ],
            [
                "q1",
                99036990
            ],
            [
                "q10",
                99036990
            ],
            [
                "q11",
                99036990
            ],
            [
                "q12",
                99036990
            ],
            [
                "q13",
                99036990
            ],
            [
                "q14",
                99036990
            ],
            [
                "q15",
                99036990
            ],
            [
                "q16",
                99036990
            ],
            [
                "q17",
                99036990
            ],
            [
                "q18",
                99036990
            ],
            [
                "q19",
                99036990
            ],
            [
                "q2",
                99036990
            ],
            [
                "q20",
                99036990
            ],
            [
                "q21",
                99036990
            ],
            [
                "q22",
                99036990
            ],
            [
                "q23",
                99036990
            ],
            [
                "q24",
                99036990
            ],
            [
                "q25",
                99036990
            ],
            [
                "q26",
                99036990
            ],
            [
                "q27",
                99036990
            ],
            [
                "q28",
                99036990
            ],
            [
                "q29",
                99036990
            ],
            [
                "q3",
                99036990
            ],
            [
                "q30",
                99036990
            ],
            [
                "q31",
                99036990
            ],
            [
                "q32",
                99036990
            ],
            [
                "q34",
                99036990
            ],
            [
                "q35",
                99036990
            ],
            [
                "q36",
                99036990
            ],
            [
                "q37",
                99036990
            ],
            [
                "q38",
                99036990
            ],
            [
                "q39",
                99036990
            ],
            [
                "q4",
                99036990
            ],
            [
                "q40",
                99036990
            ],
            [
                "q41",
                99036990
            ],
            [
                "q42",
                99036990
            ],
            [
                "q43",
                99036990
            ],
            [
                "q44",
                99036990
            ],
            [
                "q45",
                99036990
            ],
            [
                "q46",
                99036990
            ],
            [
                "q47",
                99036990
            ],
            [
                "q48",
                99036990
            ],
            [
                "q49",
                99036990
            ],
            [
                "q5",
                99036990
            ],
            [
                "q50",
                99036990
            ],
            [
                "q51",
                99036990
            ],
            [
                "q52",
                99036990
            ],
            [
                "q53",
                99036990
            ],
            [
                "q54",
                99036990
            ],
            [
                "q55",
                99036990
            ],
            [
                "q56",
                99036990
            ],
            [
                "q57",
                99036990
            ],
            [
                "q58",
                99036990
            ],
            [
                "q59",
                99036990
            ],
            [
                "q6",
                99036990
            ],
            [
                "q60",
                99036990
            ],
            [
                "q61",
                99036990
            ],
            [
                "q62",
                99036990
            ],
            [
                "q7",
                99036990
            ],
            [
                "q8",
                99036990
            ],
            [
                "q9",
                99036990
            ]
        ],
        "writeFields": [
            "@dateChanged",
            "@dateCreated",
            "@who",
            "DateCreated",
            "DateofInspection",
            "InspectiomType",
            "InspectionNumber",
            "InspectionPhoto",
            "InspectionStatus",
            "Mobilescaffoldused",
            "ScaffTagNumber",
            "ScaffoldInspector",
            "commentssection1",
            "commentssection10",
            "commentssection2",
            "commentssection3",
            "commentssection5",
            "commentssection6",
            "commentssection7",
            "commentssection8",
            "commentssection9",
            "id",
            "q1",
            "q10",
            "q11",
            "q12",
            "q13",
            "q14",
            "q15",
            "q16",
            "q17",
            "q18",
            "q19",
            "q2",
            "q20",
            "q21",
            "q22",
            "q23",
            "q24",
            "q25",
            "q26",
            "q27",
            "q28",
            "q29",
            "q3",
            "q30",
            "q31",
            "q32",
            "q34",
            "q35",
            "q36",
            "q37",
            "q38",
            "q39",
            "q4",
            "q40",
            "q41",
            "q42",
            "q43",
            "q44",
            "q45",
            "q46",
            "q47",
            "q48",
            "q49",
            "q5",
            "q50",
            "q51",
            "q52",
            "q53",
            "q54",
            "q55",
            "q56",
            "q57",
            "q58",
            "q59",
            "q6",
            "q60",
            "q61",
            "q62",
            "q7",
            "q8",
            "q9"
        ],
        "structures": {
            "99036990": {
                "networkID": 10144,
                "sysName": "inspection_register",
                "name": "Inspection Register",
                "id": 99036990,
                "dateCreated": "2021-10-15T04:14:55Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q29\",\"name\":\" Are the horizontal ledger spacings correct?\",\"dataType\":\"boolean\",\"id\":\"10781634277441395\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q5\",\"name\":\"Are there sufficient controls for the storage, handling and use of hazardous chemicals?\",\"dataType\":\"boolean\",\"id\":\"10841634275928739\",\"link\":\"\",\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection2\",\"name\":\"Supporting Structure Section Comments\",\"dataType\":\"string\",\"id\":\"13061634277242154\",\"link\":null,\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q10\",\"name\":\"Are all measures to strengthen the supporting structure adequate? \",\"dataType\":\"boolean\",\"id\":\"14711634276367082\",\"link\":\"\",\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q31\",\"name\":\"Are ledger joints correctly positioned (tube and coupler scaffold)? \",\"dataType\":\"boolean\",\"id\":\"15101634277470422\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q49\",\"name\":\" Are portable ladders of an industrial grade, serviceable and correctly installed? \",\"dataType\":\"boolean\",\"id\":\"20231634278834697\",\"link\":\"\",\"group\":\"1634277787868\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection9\",\"name\":\"General Fitness for Purpose Section Comments\",\"dataType\":\"string\",\"id\":\"20361634279364572\",\"link\":null,\"group\":\"1634279227145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q23\",\"name\":\"Are the transverse standard spacings correct?\",\"dataType\":\"boolean\",\"id\":\"20491634277106614\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q37\",\"name\":\"Is the scaffold sufficiently stable?\",\"dataType\":\"boolean\",\"id\":\"20761634277541648\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q48\",\"name\":\"Are temporary stairways correctly installed? \",\"dataType\":\"boolean\",\"id\":\"21851634278827692\",\"link\":\"\",\"group\":\"1634277787868\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q34\",\"name\":\"Are there sufficient transoms/putlogs? \",\"dataType\":\"boolean\",\"id\":\"22151634277487225\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ScaffTagNumber\",\"name\":\"Scaff Tag Number\",\"dataType\":\"link\",\"id\":\"22291634430043207\",\"link\":\"scaffold_register\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"q19\",\"name\":\"Are the baseplates secure? \",\"dataType\":\"boolean\",\"id\":\"23661634277024138\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q54\",\"name\":\"Are the overlap joints satisfactory?\",\"dataType\":\"boolean\",\"id\":\"24631634279073480\",\"link\":\"\",\"group\":\"1634278882896\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q57\",\"name\":\"Is there adequate protection from falling debris? \",\"dataType\":\"boolean\",\"id\":\"25051634279312229\",\"link\":\"\",\"group\":\"1634279227145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"InspectionStatus\",\"name\":\"Inspection Status\",\"dataType\":\"json\",\"id\":\"29711634460157398\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Planned\",\"label\":\"Planned\"},{\"value\":\"Complete\",\"label\":\"Complete\"},{\"value\":\"OverDue\",\"label\":\"OverDue\"}]},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q17\",\"name\":\"Are the baseplates of the appropriate type? \",\"dataType\":\"boolean\",\"id\":\"30201634276980866\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q42\",\"name\":\"Are the platforms and supporting scaffold constructed for the appropriate duty live loads? \",\"dataType\":\"boolean\",\"id\":\"31011634277663744\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q25\",\"name\":\"Are the joints in standards correctly secured (special duty or hung scaffold)?\",\"dataType\":\"boolean\",\"id\":\"31991634277322396\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q30\",\"name\":\"Are the ledgers correctly secured? \",\"dataType\":\"boolean\",\"id\":\"32561634277455210\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q61\",\"name\":\"Is the area of operation free of floor penetrations, powerlines and other hazards?\",\"dataType\":\"boolean\",\"id\":\"32731634279485149\",\"link\":\"\",\"group\":\"1634279464742\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection1\",\"name\":\"Scaffold Vicinity Section Comments\",\"dataType\":\"string\",\"id\":\"33181634277192461\",\"link\":null,\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q26\",\"name\":\"Are the ledgers level (or as designed)? \",\"dataType\":\"boolean\",\"id\":\"34111634277326588\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q56\",\"name\":\"Are the clearances between the scaffold and adjacent structures correct? \",\"dataType\":\"boolean\",\"id\":\"35971634279278893\",\"link\":\"\",\"group\":\"1634279227145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q47\",\"name\":\"Is there safe access and egress to every scaffold platform?\",\"dataType\":\"boolean\",\"id\":\"37281634278810201\",\"link\":\"\",\"group\":\"1634277787868\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q28\",\"name\":\"Are the lift heights correct? \",\"dataType\":\"boolean\",\"id\":\"37961634277373298\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q45\",\"name\":\"Are the platforms correctly constructed?\",\"dataType\":\"boolean\",\"id\":\"38141634277704191\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection6\",\"name\":\"Platform Section Comments\",\"dataType\":\"string\",\"id\":\"38641634278931481\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q2\",\"name\":\"Have sufficient safeguards against electric powerlines been provided? \",\"dataType\":\"boolean\",\"id\":\"41601634275838627\",\"link\":\"\",\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q13\",\"name\":\"Are there sufficient sole boards?\",\"dataType\":\"boolean\",\"id\":\"41961634276649163\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"InspectiomType\",\"name\":\"Inspection Type\",\"dataType\":\"json\",\"id\":\"42181634275396493\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"Daily Inspection\",\"label\":\"Daily Inspection\"},{\"value\":\"Weekly Inspection\",\"label\":\"Weekly Inspection\"},{\"value\":\"Fortnightly Inspection\",\"label\":\"Fortnightly Inspection\"},{\"value\":\"Monthly Inspection\",\"label\":\"Monthly Inspection\"},{\"value\":\"Bi-Monthly Inspection\",\"label\":\"Bi-Monthly Inspection\"},{\"value\":\"6 Monthly Inspection\",\"label\":\"6 Monthly Inspection\"},{\"value\":\"Annual Inspection\",\"label\":\"Annual Inspection\"},{\"value\":\"Weather Impact Inspection\",\"label\":\"Weather Impact Inspection\"},{\"value\":\"Post Damage Inspection\",\"label\":\"Post Damage Inspection\"},{\"value\":\"Post Incident Inspection\",\"label\":\"Post Incident Inspection\"},{\"value\":\"New Build Inspection\",\"label\":\"New  Build Inspection\"}]},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":true,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q60\",\"name\":\"Is the supporting surface hard and flat?\",\"dataType\":\"boolean\",\"id\":\"42371634279479148\",\"link\":\"\",\"group\":\"1634279464742\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q14\",\"name\":\"Are the sole boards of suitable material and in a serviceable condition? \",\"dataType\":\"boolean\",\"id\":\"45051634276690602\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q59\",\"name\":\"Are all approaches and platforms effectively lit? \",\"dataType\":\"boolean\",\"id\":\"45891634279346150\",\"link\":\"\",\"group\":\"1634279227145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q21\",\"name\":\"Are the standards plumb (or as designed)? \",\"dataType\":\"boolean\",\"id\":\"46731634277082155\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q20\",\"name\":\"Are the standards bearing firmly?\",\"dataType\":\"boolean\",\"id\":\"47771634277065896\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q43\",\"name\":\"Are the platform dimensions suitable for the intended work?\",\"dataType\":\"boolean\",\"id\":\"48211634277689649\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q32\",\"name\":\"Are the joints in ledgers correctly secured (tube and coupler scaffold)? \",\"dataType\":\"boolean\",\"id\":\"48581634277483008\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"DateCreated\",\"name\":\"Date Created\",\"dataType\":\"link\",\"id\":\"49441634533009669\",\"link\":\"inspection_register\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection5\",\"name\":\"Scaffold Structure Section Comments\",\"dataType\":\"string\",\"id\":\"49951634278901753\",\"link\":null,\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Mobilescaffoldused\",\"name\":\"Mobile Scaffold Used\",\"dataType\":\"boolean\",\"id\":\"50051634279582720\",\"link\":\"\",\"group\":\"1634279464742\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q7\",\"name\":\"Is the supporting structure in good condition? \",\"dataType\":\"boolean\",\"id\":\"50251634276059242\",\"link\":\"\",\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q38\",\"name\":\"Are the ties correctly positioned and correctly fixed?\",\"dataType\":\"boolean\",\"id\":\"50411634277571764\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q52\",\"name\":\"Are the fixing ties secure?\",\"dataType\":\"boolean\",\"id\":\"50871634279043105\",\"link\":\"\",\"group\":\"1634278882896\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q53\",\"name\":\"Are there any rips or tears?\",\"dataType\":\"boolean\",\"id\":\"51291634279069719\",\"link\":\"\",\"group\":\"1634278882896\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q4\",\"name\":\"Is there sufficient control over crane operation?\",\"dataType\":\"boolean\",\"id\":\"51521634275925479\",\"link\":\"\",\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q55\",\"name\":\"Is there adequate provision for material handling?\",\"dataType\":\"boolean\",\"id\":\"56861634279274934\",\"link\":\"\",\"group\":\"1634279227145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q18\",\"name\":\"Are the baseplates serviceable and of suitable dimensions?\",\"dataType\":\"boolean\",\"id\":\"57361634277011827\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q62\",\"name\":\"Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. \",\"dataType\":\"boolean\",\"id\":\"57571634279521506\",\"link\":\"\",\"group\":\"1634279464742\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q50\",\"name\":\"Are access ways and access platforms correctly installed? \",\"dataType\":\"boolean\",\"id\":\"58211634278863826\",\"link\":\"\",\"group\":\"1634277787868\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q24\",\"name\":\"Are the joints in standards correctly positioned? \",\"dataType\":\"boolean\",\"id\":\"58901634277319016\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q22\",\"name\":\"Are the longitudinal standard spacings correct? \",\"dataType\":\"boolean\",\"id\":\"59641634277102693\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q12\",\"name\":\"Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?\",\"dataType\":\"boolean\",\"id\":\"60541634276429323\",\"link\":\"\",\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q6\",\"name\":\"Are scaffolds erected a safe distance away from trenches or excavations?\",\"dataType\":\"boolean\",\"id\":\"61481634275999727\",\"link\":\"\",\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection10\",\"name\":\"Mobile Scaffold Section Comments\",\"dataType\":\"string\",\"id\":\"63001634279546392\",\"link\":null,\"group\":\"1634279464742\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q58\",\"name\":\"Has the scaffold been adequately designed to support all attachments? \",\"dataType\":\"boolean\",\"id\":\"63101634279315478\",\"link\":\"\",\"group\":\"1634279227145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q15\",\"name\":\"Are the sole boards secure? \",\"dataType\":\"boolean\",\"id\":\"64231634276703108\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q11\",\"name\":\"Is the risk of the supporting structure being overloaded from other sources adequately controlled? \",\"dataType\":\"boolean\",\"id\":\"64561634276408038\",\"link\":\"\",\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection8\",\"name\":\"Cladding Section Comments\",\"dataType\":\"string\",\"id\":\"69621634279163772\",\"link\":null,\"group\":\"1634278882896\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q27\",\"name\":\"Are the ledgers continuous (or as designed)? \",\"dataType\":\"boolean\",\"id\":\"71151634277367368\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q35\",\"name\":\"Are the transoms/putlogs correctly positioned and secured? \",\"dataType\":\"boolean\",\"id\":\"71641634277513168\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q46\",\"name\":\"Are planks secured against wind? \",\"dataType\":\"boolean\",\"id\":\"74171634277738115\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection3\",\"name\":\"Sole boards and Base Plates Section Comments\",\"dataType\":\"string\",\"id\":\"75761634277270227\",\"link\":null,\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"commentssection7\",\"name\":\"Access and egress Section Comments\",\"dataType\":\"string\",\"id\":\"76401634278887141\",\"link\":\"\",\"group\":\"1634277787868\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ScaffoldInspector\",\"name\":\"Scaffold Inspector\",\"dataType\":\"link\",\"id\":\"76771634275342375\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"q44\",\"name\":\"Is there adequate edge protection?\",\"dataType\":\"boolean\",\"id\":\"77931634277701155\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"InspectionPhoto\",\"name\":\"Inspection Photo\",\"dataType\":\"file\",\"id\":\"80451634275646119\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q1\",\"name\":\"Has public protection been provided?\",\"dataType\":\"boolean\",\"id\":\"80931634275778273\",\"link\":\"\",\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q36\",\"name\":\"Is the bracing adequate? \",\"dataType\":\"boolean\",\"id\":\"82321634277516832\",\"link\":\"\",\"group\":\"1634277046054\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"InspectionNumber\",\"name\":\"Inspection Number\",\"dataType\":\"string\",\"id\":\"85021634445939978\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q51\",\"name\":\"Has the scaffold been designed for wind loading on any cladding? \",\"dataType\":\"boolean\",\"id\":\"92121634279037281\",\"link\":\"\",\"group\":\"1634278882896\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q16\",\"name\":\"Are there sufficient baseplates?\",\"dataType\":\"boolean\",\"id\":\"93181634276976826\",\"link\":\"\",\"group\":\"1634276617164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q39\",\"name\":\"Does the scaffold have the required number of working platforms? \",\"dataType\":\"boolean\",\"id\":\"94411634277629212\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"DateofInspection\",\"name\":\"Date of Inspcetion\",\"dataType\":\"date\",\"id\":\"94871634275311145\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q8\",\"name\":\"Does the supporting structure have adequate strength? \",\"dataType\":\"boolean\",\"id\":\"95611634276308763\",\"link\":\"\",\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q41\",\"name\":\"Are catch platforms correctly positioned?\",\"dataType\":\"boolean\",\"id\":\"96631634277660561\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q9\",\"name\":\"Are there sufficient controls to prevent deterioration of the supporting structure? \",\"dataType\":\"boolean\",\"id\":\"98101634276343741\",\"link\":\"\",\"group\":\"1634276030465\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q40\",\"name\":\"Are the working platforms at the required locations? \",\"dataType\":\"boolean\",\"id\":\"98531634277645896\",\"link\":\"\",\"group\":\"1634277557361\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"q3\",\"name\":\"Is there sufficient control over vehicle movement? \",\"dataType\":\"boolean\",\"id\":\"99521634275888481\",\"link\":\"\",\"group\":\"1634275683892\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1634278882896,\"name\":\"Cladding\",\"order\":6},{\"id\":1634279227145,\"name\":\"General Fitness for Purpose\",\"order\":7},{\"id\":1634279464742,\"name\":\"Mobile Scaffolds\",\"order\":8},{\"id\":1634277787868,\"name\":\"Access and Egress\",\"order\":5},{\"id\":1634277046054,\"name\":\"Scaffold Structure\",\"order\":3},{\"id\":1634276030465,\"name\":\"Supporting Structure\",\"order\":1},{\"id\":1634276617164,\"name\":\"Sole boards and Base Plates\",\"order\":2},{\"id\":1634277557361,\"name\":\"Platforms\",\"order\":4},{\"id\":1634275683892,\"name\":\"Scaffold Vicinity\",\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"InspectionNumber\"},{\"sysName\":\"ScaffTagNumber\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-27T22:15:37Z",
                "createBy": 8951,
                "changedBy": 8951,
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
                    "json": false,
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33666256
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "@dateChanged",
                "name": "@dateChanged",
                "dataType": "string",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "@dateCreated",
                "name": "@dateCreated",
                "dataType": "string",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "@who",
                "name": "@who",
                "dataType": "string",
                "id": "",
                "link": "",
                "group": "",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": null,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "DateCreated",
                "name": "Date Created",
                "dataType": "link",
                "id": "49441634533009669",
                "link": "inspection_register",
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
                    "isUTC": "false"
                },
                "groupName": null,
                "json": false,
                "linkType": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "DateofInspection",
                "name": "Date of Inspcetion",
                "dataType": "date",
                "id": "94871634275311145",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectiomType",
                "name": "Inspection Type",
                "dataType": "json",
                "id": "42181634275396493",
                "link": "",
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
                            "value": "Daily Inspection",
                            "label": "Daily Inspection"
                        },
                        {
                            "value": "Weekly Inspection",
                            "label": "Weekly Inspection"
                        },
                        {
                            "value": "Fortnightly Inspection",
                            "label": "Fortnightly Inspection"
                        },
                        {
                            "value": "Monthly Inspection",
                            "label": "Monthly Inspection"
                        },
                        {
                            "value": "Bi-Monthly Inspection",
                            "label": "Bi-Monthly Inspection"
                        },
                        {
                            "value": "6 Monthly Inspection",
                            "label": "6 Monthly Inspection"
                        },
                        {
                            "value": "Annual Inspection",
                            "label": "Annual Inspection"
                        },
                        {
                            "value": "Weather Impact Inspection",
                            "label": "Weather Impact Inspection"
                        },
                        {
                            "value": "Post Damage Inspection",
                            "label": "Post Damage Inspection"
                        },
                        {
                            "value": "Post Incident Inspection",
                            "label": "Post Incident Inspection"
                        },
                        {
                            "value": "New Build Inspection",
                            "label": "New  Build Inspection"
                        }
                    ]
                },
                "groupName": null,
                "json": true,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectionNumber",
                "name": "Inspection Number",
                "dataType": "string",
                "id": "85021634445939978",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectionPhoto",
                "name": "Inspection Photo",
                "dataType": "file",
                "id": "80451634275646119",
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
                "format": "multipleImages",
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "InspectionStatus",
                "name": "Inspection Status",
                "dataType": "json",
                "id": "29711634460157398",
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
                            "value": "Planned",
                            "label": "Planned"
                        },
                        {
                            "value": "Complete",
                            "label": "Complete"
                        },
                        {
                            "value": "OverDue",
                            "label": "OverDue"
                        }
                    ]
                },
                "groupName": null,
                "json": true,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "Mobilescaffoldused",
                "name": "Mobile Scaffold Used",
                "dataType": "boolean",
                "id": "50051634279582720",
                "link": "",
                "group": "1634279464742",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ScaffTagNumber",
                "name": "Scaff Tag Number",
                "dataType": "link",
                "id": "22291634430043207",
                "link": "scaffold_register",
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
                "linkType": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ScaffoldInspector",
                "name": "Scaffold Inspector",
                "dataType": "link",
                "id": "76771634275342375",
                "link": "WebUser",
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
                "linkType": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection1",
                "name": "Scaffold Vicinity Section Comments",
                "dataType": "string",
                "id": "33181634277192461",
                "link": null,
                "group": "1634275683892",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection10",
                "name": "Mobile Scaffold Section Comments",
                "dataType": "string",
                "id": "63001634279546392",
                "link": null,
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection2",
                "name": "Supporting Structure Section Comments",
                "dataType": "string",
                "id": "13061634277242154",
                "link": null,
                "group": "1634276030465",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection3",
                "name": "Sole boards and Base Plates Section Comments",
                "dataType": "string",
                "id": "75761634277270227",
                "link": null,
                "group": "1634276617164",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection5",
                "name": "Scaffold Structure Section Comments",
                "dataType": "string",
                "id": "49951634278901753",
                "link": null,
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection6",
                "name": "Platform Section Comments",
                "dataType": "string",
                "id": "38641634278931481",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection7",
                "name": "Access and egress Section Comments",
                "dataType": "string",
                "id": "76401634278887141",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection8",
                "name": "Cladding Section Comments",
                "dataType": "string",
                "id": "69621634279163772",
                "link": null,
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "commentssection9",
                "name": "General Fitness for Purpose Section Comments",
                "dataType": "string",
                "id": "20361634279364572",
                "link": null,
                "group": "1634279227145",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q1",
                "name": "Has public protection been provided?",
                "dataType": "boolean",
                "id": "80931634275778273",
                "link": "",
                "group": "1634275683892",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q10",
                "name": "Are all measures to strengthen the supporting structure adequate? ",
                "dataType": "boolean",
                "id": "14711634276367082",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q11",
                "name": "Is the risk of the supporting structure being overloaded from other sources adequately controlled? ",
                "dataType": "boolean",
                "id": "64561634276408038",
                "link": "",
                "group": "1634276030465",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q12",
                "name": "Is the scaffold built on solid ground? If built on soft ground, are soleboards used to properly distribute the load?",
                "dataType": "boolean",
                "id": "60541634276429323",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q13",
                "name": "Are there sufficient sole boards?",
                "dataType": "boolean",
                "id": "41961634276649163",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q14",
                "name": "Are the sole boards of suitable material and in a serviceable condition? ",
                "dataType": "boolean",
                "id": "45051634276690602",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q15",
                "name": "Are the sole boards secure? ",
                "dataType": "boolean",
                "id": "64231634276703108",
                "link": "",
                "group": "1634276617164",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q16",
                "name": "Are there sufficient baseplates?",
                "dataType": "boolean",
                "id": "93181634276976826",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q17",
                "name": "Are the baseplates of the appropriate type? ",
                "dataType": "boolean",
                "id": "30201634276980866",
                "link": "",
                "group": "1634276617164",
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
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q18",
                "name": "Are the baseplates serviceable and of suitable dimensions?",
                "dataType": "boolean",
                "id": "57361634277011827",
                "link": "",
                "group": "1634276617164",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q19",
                "name": "Are the baseplates secure? ",
                "dataType": "boolean",
                "id": "23661634277024138",
                "link": "",
                "group": "1634276617164",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q2",
                "name": "Have sufficient safeguards against electric powerlines been provided? ",
                "dataType": "boolean",
                "id": "41601634275838627",
                "link": "",
                "group": "1634275683892",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q20",
                "name": "Are the standards bearing firmly?",
                "dataType": "boolean",
                "id": "47771634277065896",
                "link": "",
                "group": "1634277046054",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q21",
                "name": "Are the standards plumb (or as designed)? ",
                "dataType": "boolean",
                "id": "46731634277082155",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q22",
                "name": "Are the longitudinal standard spacings correct? ",
                "dataType": "boolean",
                "id": "59641634277102693",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q23",
                "name": "Are the transverse standard spacings correct?",
                "dataType": "boolean",
                "id": "20491634277106614",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q24",
                "name": "Are the joints in standards correctly positioned? ",
                "dataType": "boolean",
                "id": "58901634277319016",
                "link": "",
                "group": "1634277046054",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q25",
                "name": "Are the joints in standards correctly secured (special duty or hung scaffold)?",
                "dataType": "boolean",
                "id": "31991634277322396",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q26",
                "name": "Are the ledgers level (or as designed)? ",
                "dataType": "boolean",
                "id": "34111634277326588",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q27",
                "name": "Are the ledgers continuous (or as designed)? ",
                "dataType": "boolean",
                "id": "71151634277367368",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q28",
                "name": "Are the lift heights correct? ",
                "dataType": "boolean",
                "id": "37961634277373298",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q29",
                "name": " Are the horizontal ledger spacings correct?",
                "dataType": "boolean",
                "id": "10781634277441395",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q3",
                "name": "Is there sufficient control over vehicle movement? ",
                "dataType": "boolean",
                "id": "99521634275888481",
                "link": "",
                "group": "1634275683892",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q30",
                "name": "Are the ledgers correctly secured? ",
                "dataType": "boolean",
                "id": "32561634277455210",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q31",
                "name": "Are ledger joints correctly positioned (tube and coupler scaffold)? ",
                "dataType": "boolean",
                "id": "15101634277470422",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q32",
                "name": "Are the joints in ledgers correctly secured (tube and coupler scaffold)? ",
                "dataType": "boolean",
                "id": "48581634277483008",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q34",
                "name": "Are there sufficient transoms/putlogs? ",
                "dataType": "boolean",
                "id": "22151634277487225",
                "link": "",
                "group": "1634277046054",
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
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q35",
                "name": "Are the transoms/putlogs correctly positioned and secured? ",
                "dataType": "boolean",
                "id": "71641634277513168",
                "link": "",
                "group": "1634277046054",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q36",
                "name": "Is the bracing adequate? ",
                "dataType": "boolean",
                "id": "82321634277516832",
                "link": "",
                "group": "1634277046054",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q37",
                "name": "Is the scaffold sufficiently stable?",
                "dataType": "boolean",
                "id": "20761634277541648",
                "link": "",
                "group": "1634277046054",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q38",
                "name": "Are the ties correctly positioned and correctly fixed?",
                "dataType": "boolean",
                "id": "50411634277571764",
                "link": "",
                "group": "1634277046054",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q39",
                "name": "Does the scaffold have the required number of working platforms? ",
                "dataType": "boolean",
                "id": "94411634277629212",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q4",
                "name": "Is there sufficient control over crane operation?",
                "dataType": "boolean",
                "id": "51521634275925479",
                "link": "",
                "group": "1634275683892",
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
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q40",
                "name": "Are the working platforms at the required locations? ",
                "dataType": "boolean",
                "id": "98531634277645896",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q41",
                "name": "Are catch platforms correctly positioned?",
                "dataType": "boolean",
                "id": "96631634277660561",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q42",
                "name": "Are the platforms and supporting scaffold constructed for the appropriate duty live loads? ",
                "dataType": "boolean",
                "id": "31011634277663744",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q43",
                "name": "Are the platform dimensions suitable for the intended work?",
                "dataType": "boolean",
                "id": "48211634277689649",
                "link": "",
                "group": "1634277557361",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q44",
                "name": "Is there adequate edge protection?",
                "dataType": "boolean",
                "id": "77931634277701155",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q45",
                "name": "Are the platforms correctly constructed?",
                "dataType": "boolean",
                "id": "38141634277704191",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q46",
                "name": "Are planks secured against wind? ",
                "dataType": "boolean",
                "id": "74171634277738115",
                "link": "",
                "group": "1634277557361",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q47",
                "name": "Is there safe access and egress to every scaffold platform?",
                "dataType": "boolean",
                "id": "37281634278810201",
                "link": "",
                "group": "1634277787868",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q48",
                "name": "Are temporary stairways correctly installed? ",
                "dataType": "boolean",
                "id": "21851634278827692",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q49",
                "name": " Are portable ladders of an industrial grade, serviceable and correctly installed? ",
                "dataType": "boolean",
                "id": "20231634278834697",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q5",
                "name": "Are there sufficient controls for the storage, handling and use of hazardous chemicals?",
                "dataType": "boolean",
                "id": "10841634275928739",
                "link": "",
                "group": "1634275683892",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q50",
                "name": "Are access ways and access platforms correctly installed? ",
                "dataType": "boolean",
                "id": "58211634278863826",
                "link": "",
                "group": "1634277787868",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q51",
                "name": "Has the scaffold been designed for wind loading on any cladding? ",
                "dataType": "boolean",
                "id": "92121634279037281",
                "link": "",
                "group": "1634278882896",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q52",
                "name": "Are the fixing ties secure?",
                "dataType": "boolean",
                "id": "50871634279043105",
                "link": "",
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q53",
                "name": "Are there any rips or tears?",
                "dataType": "boolean",
                "id": "51291634279069719",
                "link": "",
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q54",
                "name": "Are the overlap joints satisfactory?",
                "dataType": "boolean",
                "id": "24631634279073480",
                "link": "",
                "group": "1634278882896",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q55",
                "name": "Is there adequate provision for material handling?",
                "dataType": "boolean",
                "id": "56861634279274934",
                "link": "",
                "group": "1634279227145",
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q56",
                "name": "Are the clearances between the scaffold and adjacent structures correct? ",
                "dataType": "boolean",
                "id": "35971634279278893",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q57",
                "name": "Is there adequate protection from falling debris? ",
                "dataType": "boolean",
                "id": "25051634279312229",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q58",
                "name": "Has the scaffold been adequately designed to support all attachments? ",
                "dataType": "boolean",
                "id": "63101634279315478",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q59",
                "name": "Are all approaches and platforms effectively lit? ",
                "dataType": "boolean",
                "id": "45891634279346150",
                "link": "",
                "group": "1634279227145",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q6",
                "name": "Are scaffolds erected a safe distance away from trenches or excavations?",
                "dataType": "boolean",
                "id": "61481634275999727",
                "link": "",
                "group": "1634275683892",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q60",
                "name": "Is the supporting surface hard and flat?",
                "dataType": "boolean",
                "id": "42371634279479148",
                "link": "",
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q61",
                "name": "Is the area of operation free of floor penetrations, powerlines and other hazards?",
                "dataType": "boolean",
                "id": "32731634279485149",
                "link": "",
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q62",
                "name": "Are the castor wheel locks in working order? They should be locked at all times, except during movement of the scaffold. ",
                "dataType": "boolean",
                "id": "57571634279521506",
                "link": "",
                "group": "1634279464742",
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
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q7",
                "name": "Is the supporting structure in good condition? ",
                "dataType": "boolean",
                "id": "50251634276059242",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q8",
                "name": "Does the supporting structure have adequate strength? ",
                "dataType": "boolean",
                "id": "95611634276308763",
                "link": "",
                "group": "1634276030465",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "q9",
                "name": "Are there sufficient controls to prevent deterioration of the supporting structure? ",
                "dataType": "boolean",
                "id": "98101634276343741",
                "link": "",
                "group": "1634276030465",
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
                        "Yes",
                        "No"
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
                "json": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            }
        ],
        "quickSearch": "true"
    }


    let authExample = {
        // isAuth: false,
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "pavel@directual.com"
    }


    let exampleForm = {
        "sl": "resetPassInput",
        "formName": "Set new password",
        "formDesc": "",
        "formButton": "",
        "placeholder": "",
        "maxWidth": "400",
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
                        "fieldSysName": "newPass",
                        "fetch": [],
                        "sysName": "newPass",
                        "name": "New password",
                        "dataType": "string",
                        "format": "password",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "repeatPass",
                        "fetch": [],
                        "sysName": "repeatPass",
                        "name": "Repeat password",
                        "dataType": "string",
                        "format": "password",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "secret",
                        "fetch": [],
                        "sysName": "secret",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [],
                        "sysName": "user_id",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "fields": {
                    "id": {
                        "id": "id",
                        "content": "id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "newPass": {
                        "id": "newPass",
                        "content": "New password",
                        "type": "field",
                        "dataType": "string",
                        "format": "password",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "repeatPass": {
                        "id": "repeatPass",
                        "content": "Repeat password",
                        "type": "field",
                        "dataType": "string",
                        "format": "password",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "secret": {
                        "id": "secret",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": null
                    },
                    "user_id": {
                        "id": "user_id",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": null
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
                    "newPass": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "repeatPass": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "secret": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "hidden": true,
                        "required": true
                    },
                    "user_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "hidden": true,
                        "required": true
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "id",
                            "newPass",
                            "repeatPass",
                            "secret",
                            "user_id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
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
                "newPass": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "repeatPass": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "secret": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "hidden": true,
                    "required": true
                },
                "user_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "hidden": true,
                    "required": true
                }
            }
        },
        "fileds": [
            {
                "sysName": "newPass",
                "dataType": "string",
                "name": "New password",
                "id": "40081635832999321",
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
                "format": "password",
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "repeatPass",
                "dataType": "string",
                "name": "Repeat password",
                "id": "44501635833015623",
                "link": "",
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
                "format": "password",
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "secret",
                "dataType": "string",
                "name": "",
                "id": "38011635832996831",
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
                "indexExists": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "user_id",
                "dataType": "string",
                "name": "",
                "id": "75721635833006125",
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
                "indexExists": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "error": "",
        "isSuccessWrite": true,
        "response": [
            {
                "id": "10620ce8-7dbe-4fa3-8f71-7240886a2d4c"
            }
        ],
        "data": null
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
        customThemeColors: parseJson(localStorage.getItem('dd-theme-customThemeColors'))
    }

    const [currentTheme, setCurrentTheme] = useState(basicTheme)

    useEffect(() => {
        // console.log('currentTheme')
        // console.log(currentTheme)
        localStorage.setItem('dd-theme-color', currentTheme.colorScheme)
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
        <FpsWrapper>
            <Router>
                <MainMenuWrapper themeName={currentTheme} />
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
                            {/* <FpsCards data={newCardActions} currentBP='tablet' /> */}
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