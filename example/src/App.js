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
        "sl": "allPlaces",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "City",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "country",
                        "fetch": [
                            {
                                "fieldSysName": "area",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "country",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "population",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "region",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "country",
                        "name": "Country",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "countries"
                    },
                    {
                        "fieldSysName": "cover_photo",
                        "fetch": [],
                        "sysName": "cover_photo",
                        "name": "",
                        "dataType": "file",
                        "format": "image",
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
                        "name": "Location",
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
                            "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNreTV3c3JuZTBsOHYydnMxc3V2dTE4OGcifQ.nuD1tu1jrhNUSqjPxkgL7g",
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
                            "mapColour": "mapbox://styles/mapbox/satellite-streets-v11"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "photos",
                        "fetch": [],
                        "sysName": "photos",
                        "name": "Photos",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status_text",
                        "fetch": [],
                        "sysName": "status_text",
                        "name": "Status",
                        "dataType": "string",
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
                        "fieldSysName": "users_been_ids",
                        "fetch": [],
                        "sysName": "users_been_ids",
                        "name": "Who've been to",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "city": {
                        "id": "city",
                        "content": "City",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "country": {
                        "id": "country",
                        "content": "Country",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "countries",
                        "actions": []
                    },
                    "cover_photo": {
                        "id": "cover_photo",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "location": {
                        "id": "location",
                        "content": "Location",
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
                            "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNreTV3c3JuZTBsOHYydnMxc3V2dTE4OGcifQ.nuD1tu1jrhNUSqjPxkgL7g",
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
                            "mapColour": "mapbox://styles/mapbox/satellite-streets-v11"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "photos": {
                        "id": "photos",
                        "content": "Photos",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status_text": {
                        "id": "status_text",
                        "content": "Status",
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
                        "content": "Title",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "users_been_ids": {
                        "id": "users_been_ids",
                        "content": "Who've been to",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "country": {
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
                        "clickable": false
                    },
                    "title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "city": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date_added": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "photos": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status_text": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "cover_photo": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "users_been_ids": {
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
                            "country",
                            "description",
                            "id",
                            "location",
                            "title",
                            "city",
                            "date_added",
                            "photos",
                            "status_text"
                        ]
                    },
                    "30661642443343214": {
                        "id": "30661642443343214",
                        "title": "New section",
                        "fieldIds": [
                            "cover_photo",
                            "users_been_ids"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "30661642443343214"
                ],
                "actions": [],
                "cardsOrPage": "page",
                "additionalPath": "",
                "anotherPage": "news/hot"
            },
            "fields": {
                "country": {
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
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "city": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_added": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "photos": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status_text": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "cover_photo": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "users_been_ids": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "cardHeaderComment": "country",
            "cardImage": true,
            "cardImageField": "photos",
            "cardImageType": "left",
            "cardImageSize": 150,
            "cardImageSizeHeight": 150,
            "cardBodyText": "description",
            "cardCoverHeight": 180,
            "cardColor": null,
            "showCounter": false,
            "counterField": null,
            "counterText": null,
            "cardBodyTextLength": 80,
            "cardListLayout": "looseGrid"
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "city",
                "name": "City",
                "dataType": "string",
                "id": "90041641825822801",
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
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "country",
                "name": "Country",
                "dataType": "link",
                "id": "80991641653434894",
                "link": "countries",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "cover_photo",
                "name": "",
                "dataType": "file",
                "id": "60961642179138344",
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
                "format": "image",
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "date_added",
                "name": "Date added",
                "dataType": "date",
                "id": "37941642152276364",
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
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "description",
                "name": "Description",
                "dataType": "string",
                "id": "26441641653412664",
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
                "linkType": false,
                "arrayLink": false,
                "json": false,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "location",
                "name": "Location",
                "dataType": "json",
                "id": "52631641650922797",
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
                "format": "geo",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "mapToken": "pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNreTV3c3JuZTBsOHYydnMxc3V2dTE4OGcifQ.nuD1tu1jrhNUSqjPxkgL7g",
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
                    "mapColour": "mapbox://styles/mapbox/satellite-streets-v11"
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": true,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "photos",
                "name": "Photos",
                "dataType": "file",
                "id": "79351641825831881",
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
                "format": "multipleImages",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "status_text",
                "name": "Status",
                "dataType": "string",
                "id": "41721641826754571",
                "link": "",
                "group": "1641826735668",
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
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "title",
                "name": "Title",
                "dataType": "string",
                "id": "23661641650882991",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "users_been_ids",
                "name": "Who've been to",
                "dataType": "arrayLink",
                "id": "95261641826785310",
                "link": "WebUser",
                "group": "0",
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
                "linkType": false,
                "arrayLink": true,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "city": "Moscow",
                "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/web/68caa348-ec15-463a-9afe-ae2b106eba8a.jpeg",
                "location": "{\"data\":[{\"id\":1642151991953,\"latitude\":55.75166273629019,\"longitude\":37.61742228272211,\"title\":\"New Marker\"}]}",
                "description": "The Moscow Kremlin, or simply the Kremlin, is a fortified complex in the center of Moscow founded by Russian ruling dynasty of Rurikids. It is the best known of the kremlins (Russian citadels), and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers. In addition, within this complex is the Grand Kremlin Palace that was formerly the Tsar's Moscow residence. The complex now serves as the official residence of the President of the Russian Federation and as a museum with almost 3 million visitors in 2017. The Kremlin overlooks the Moskva River to the south, Saint Basil's Cathedral and Red Square to the east, and the Alexander Garden to the west.",
                "users_been_ids": [
                    ""
                ],
                "country": {
                    "area": 17075200,
                    "population": 142893540,
                    "country": "Russia ",
                    "id": "e65e9589-cc84-4f17-8f8e-c004a0d38d0a",
                    "region": "C.W. OF IND. STATES "
                },
                "id": "2014b9d2-37ce-4cf4-a9cf-da7a5fb55be7",
                "status_text": "The place is under moderation",
                "date_added": 1642152490000,
                "title": "Kremlin",
                "photos": "https://api.directual.com/fileUploaded/showcase-attractions/web/68caa348-ec15-463a-9afe-ae2b106eba8a.jpeg,https://api.directual.com/fileUploaded/showcase-attractions/web/d9b47dd4-03ba-49d7-a8e6-1581b5fb9406.jpeg,https://api.directual.com/fileUploaded/showcase-attractions/web/04b4fba0-21f8-4d32-988f-ba2536d1a6a2.jpeg"
            },
            {
                "city": "San Francisco",
                "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/web/e44089e4-b1c7-4fbe-bb3f-cf5db80cfc48.jpeg",
                "location": "{\"data\":[{\"id\":1642493506487,\"latitude\":37.812910745215206,\"longitude\":-122.47533814453163,\"title\":\"Golden Gate Bridge\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/e44089e4-b1c7-4fbe-bb3f-cf5db80cfc48.jpeg\"}]}",
                "description": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.",
                "country": {
                    "area": 9631420,
                    "population": 298444215,
                    "country": "United States ",
                    "id": "d9696e53-4195-4476-b786-55a1a97400e3",
                    "region": "NORTHERN AMERICA                   "
                },
                "id": "a10d94e4-cd9f-4ff3-8f0d-ff534a132070",
                "status_text": "The place is under moderation",
                "date_added": 1642493625000,
                "title": "Golden Gate Bridge",
                "photos": "https://api.directual.com/fileUploaded/showcase-attractions/web/e44089e4-b1c7-4fbe-bb3f-cf5db80cfc48.jpeg,https://api.directual.com/fileUploaded/showcase-attractions/web/3e3a1ea9-a045-4d6f-bf08-6a2c8ac7564b.jpeg"
            },
            {
                "city": "Agra",
                "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/web/6cc2fdab-dad5-4ae9-a9e7-f987dcd36e50.jpeg",
                "location": "{\"data\":[{\"id\":1642493890105,\"latitude\":27.17479612600225,\"longitude\":78.04218476292756,\"title\":\"Taj Mahal\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/4c8ba692-b37c-4aaf-b754-555b852f11d8.jpeg\"}]}",
                "description": "The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
                "country": {
                    "area": 3287590,
                    "population": 1095351995,
                    "country": "India ",
                    "id": "c4254be1-2c67-4114-9801-340ef8e5afeb",
                    "region": "ASIA (EX. NEAR EAST)         "
                },
                "id": "febebefe-bbaf-4246-a291-e287a647481d",
                "status_text": "The place is under moderation",
                "date_added": 1642494017000,
                "title": "Taj Mahal",
                "photos": "https://api.directual.com/fileUploaded/showcase-attractions/web/6cc2fdab-dad5-4ae9-a9e7-f987dcd36e50.jpeg"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "city",
                99062310
            ],
            [
                "country.area",
                99062311
            ],
            [
                "country.country",
                99062311
            ],
            [
                "country.id",
                99062311
            ],
            [
                "country.population",
                99062311
            ],
            [
                "country.region",
                99062311
            ],
            [
                "cover_photo",
                99062310
            ],
            [
                "date_added",
                99062310
            ],
            [
                "description",
                99062310
            ],
            [
                "id",
                99062310
            ],
            [
                "location",
                99062310
            ],
            [
                "photos",
                99062310
            ],
            [
                "status_text",
                99062310
            ],
            [
                "title",
                99062310
            ],
            [
                "users_been_ids",
                99062310
            ]
        ],
        "writeFields": [],
        "structures": {
            "99062310": {
                "networkID": 11307,
                "sysName": "places",
                "name": "places",
                "id": 99062310,
                "dateCreated": "2022-01-08T14:03:51Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"user_added_id\",\"dataType\":\"link\",\"name\":\"Who added\",\"id\":\"18871641825848857\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"filter\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"title\",\"dataType\":\"string\",\"name\":\"Title\",\"id\":\"23661641650882991\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Description\",\"id\":\"26441641653412664\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_added\",\"dataType\":\"date\",\"name\":\"Date added\",\"id\":\"37941642152276364\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status_text\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"41721641826754571\",\"link\":\"\",\"group\":\"1641826735668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"comments\",\"dataType\":\"arrayLink\",\"name\":\"Comments\",\"id\":\"48571641825870889\",\"link\":\"comments\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"location\",\"dataType\":\"json\",\"name\":\"Location\",\"id\":\"52631641650922797\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"mapToken\":\"pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNreTV3c3JuZTBsOHYydnMxc3V2dTE4OGcifQ.nuD1tu1jrhNUSqjPxkgL7g\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"mapColour\":\"mapbox://styles/mapbox/satellite-streets-v11\"},\"groupName\":null,\"json\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cover_photo\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"60961642179138344\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"photos\",\"dataType\":\"file\",\"name\":\"Photos\",\"id\":\"79351641825831881\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"Country\",\"id\":\"80991641653434894\",\"link\":\"countries\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"City\",\"id\":\"90041641825822801\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"users_been_ids\",\"dataType\":\"arrayLink\",\"name\":\"Who've been to\",\"id\":\"95261641826785310\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"status_tech\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"98021641826741872\",\"link\":\"\",\"group\":\"1641826735668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Moderation\",\"id\":1641826735668,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-01-20T07:23:32Z",
                "createBy": 21,
                "changedBy": 21,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33678698
            },
            "99062311": {
                "networkID": 11307,
                "sysName": "countries",
                "name": "countries",
                "id": 99062311,
                "dateCreated": "2022-01-08T14:04:01Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"25971641653132473\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"region\",\"name\":\"Region\",\"dataType\":\"string\",\"id\":\"65461641653132949\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"population\",\"name\":\"Population\",\"dataType\":\"number\",\"id\":\"22771641653133504\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"area\",\"name\":\"Area, sq. mi.\",\"dataType\":\"number\",\"id\":\"71951641653134009\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"country\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-01-08T14:46:25Z",
                "createBy": 21,
                "changedBy": 21,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33678698
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {
            "status": "new"
        }
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
        "sl": "manageGoodsProd",
        "pageSize": "30",
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
                        "fieldSysName": "brand",
                        "fetch": [
                            {
                                "fieldSysName": "brandName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "logo",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "owner_id",
                                "condition": null,
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
                                ]
                            }
                        ],
                        "sysName": "brand",
                        "name": "Бренд",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Brands"
                    },
                    {
                        "fieldSysName": "category",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "category",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "category"
                    },
                    {
                        "fieldSysName": "color",
                        "fetch": [
                            {
                                "fieldSysName": "color",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "colorEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "color",
                        "name": "Цвет",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "colors"
                    },
                    {
                        "fieldSysName": "decline_reason",
                        "fetch": [],
                        "sysName": "decline_reason",
                        "name": "Причина отказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Описание",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "goodSpecification",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "quantity",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "reserve",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "size",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "spec_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "goodSpecification",
                        "name": "Товарные позиции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goodSpecification"
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
                        "fieldSysName": "isDeleted",
                        "fetch": [],
                        "sysName": "isDeleted",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isNew",
                        "fetch": [],
                        "sysName": "isNew",
                        "name": "Новый товар",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "isSale",
                        "fetch": [],
                        "sysName": "isSale",
                        "name": "Распродажа",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "moderation_status",
                        "fetch": [],
                        "sysName": "moderation_status",
                        "name": "new,approved,declined",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "Название",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "oldPrice",
                        "fetch": [],
                        "sysName": "oldPrice",
                        "name": "Старая цена",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "price",
                        "fetch": [],
                        "sysName": "price",
                        "name": "Цена, ₽",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "subcategoryBeauty",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryBeauty",
                        "name": "Бьюти, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryBeauty"
                    },
                    {
                        "fieldSysName": "subcategoryInterior",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryInterior",
                        "name": "Интерьер, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryInterior"
                    },
                    {
                        "fieldSysName": "subcategoryKids",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryKids",
                        "name": "Детское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryKids"
                    },
                    {
                        "fieldSysName": "subcategoryMen",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryMen",
                        "name": "Мужское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryMen"
                    },
                    {
                        "fieldSysName": "subcategoryWomen",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryWomen",
                        "name": "Женское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryWomen"
                    },
                    {
                        "fieldSysName": "tags",
                        "fetch": [],
                        "sysName": "tags",
                        "name": "Тэги",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "vendorCode",
                        "fetch": [],
                        "sysName": "vendorCode",
                        "name": "Артикул",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "brand",
                        "fetch": [],
                        "sysName": "brand",
                        "name": "Бренд",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Brands"
                    },
                    {
                        "fieldSysName": "category",
                        "fetch": [],
                        "sysName": "category",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "category"
                    },
                    {
                        "fieldSysName": "color",
                        "fetch": [],
                        "sysName": "color",
                        "name": "Цвет",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "colors"
                    },
                    {
                        "fieldSysName": "decline_reason",
                        "fetch": [],
                        "sysName": "decline_reason",
                        "name": "Причина отказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Описание",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "goodSpecification",
                        "fetch": [],
                        "sysName": "goodSpecification",
                        "name": "Товарные позиции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goodSpecification"
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
                        "fieldSysName": "isDeleted",
                        "fetch": [],
                        "sysName": "isDeleted",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isNew",
                        "fetch": [],
                        "sysName": "isNew",
                        "name": "Новый товар",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "isSale",
                        "fetch": [],
                        "sysName": "isSale",
                        "name": "Распродажа",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "moderation_status",
                        "fetch": [],
                        "sysName": "moderation_status",
                        "name": "new,approved,declined",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "Название",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "oldPrice",
                        "fetch": [],
                        "sysName": "oldPrice",
                        "name": "Старая цена",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "price",
                        "fetch": [],
                        "sysName": "price",
                        "name": "Цена, ₽",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "subcategoryBeauty",
                        "fetch": [],
                        "sysName": "subcategoryBeauty",
                        "name": "Бьюти, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryBeauty"
                    },
                    {
                        "fieldSysName": "subcategoryInterior",
                        "fetch": [],
                        "sysName": "subcategoryInterior",
                        "name": "Интерьер, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryInterior"
                    },
                    {
                        "fieldSysName": "subcategoryKids",
                        "fetch": [],
                        "sysName": "subcategoryKids",
                        "name": "Детское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryKids"
                    },
                    {
                        "fieldSysName": "subcategoryMen",
                        "fetch": [],
                        "sysName": "subcategoryMen",
                        "name": "Мужское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryMen"
                    },
                    {
                        "fieldSysName": "subcategoryWomen",
                        "fetch": [],
                        "sysName": "subcategoryWomen",
                        "name": "Женское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryWomen"
                    },
                    {
                        "fieldSysName": "tags",
                        "fetch": [],
                        "sysName": "tags",
                        "name": "Тэги",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "vendorCode",
                        "fetch": [],
                        "sysName": "vendorCode",
                        "name": "Артикул",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "brand": {
                        "id": "brand",
                        "content": "Бренд",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Brands",
                        "actions": []
                    },
                    "category": {
                        "id": "category",
                        "content": "Категория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "category",
                        "actions": []
                    },
                    "color": {
                        "id": "color",
                        "content": "Цвет",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "colors",
                        "actions": []
                    },
                    "decline_reason": {
                        "id": "decline_reason",
                        "content": "Причина отказа",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "description": {
                        "id": "description",
                        "content": "Описание",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "goodSpecification": {
                        "id": "goodSpecification",
                        "content": "Товарные позиции",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "goodSpecification",
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
                    "isDeleted": {
                        "id": "isDeleted",
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
                    "isNew": {
                        "id": "isNew",
                        "content": "Новый товар",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                    "isSale": {
                        "id": "isSale",
                        "content": "Распродажа",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                    "moderation_status": {
                        "id": "moderation_status",
                        "content": "new,approved,declined",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "name": {
                        "id": "name",
                        "content": "Название",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "oldPrice": {
                        "id": "oldPrice",
                        "content": "Старая цена",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "photo": {
                        "id": "photo",
                        "content": "Фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "price": {
                        "id": "price",
                        "content": "Цена, ₽",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "subcategoryBeauty": {
                        "id": "subcategoryBeauty",
                        "content": "Бьюти, подкатегория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryBeauty",
                        "actions": []
                    },
                    "subcategoryInterior": {
                        "id": "subcategoryInterior",
                        "content": "Интерьер, подкатегория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryInterior",
                        "actions": []
                    },
                    "subcategoryKids": {
                        "id": "subcategoryKids",
                        "content": "Детское, подкатегория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryKids",
                        "actions": []
                    },
                    "subcategoryMen": {
                        "id": "subcategoryMen",
                        "content": "Мужское, подкатегория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryMen",
                        "actions": []
                    },
                    "subcategoryWomen": {
                        "id": "subcategoryWomen",
                        "content": "Женское, подкатегория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryWomen",
                        "actions": []
                    },
                    "tags": {
                        "id": "tags",
                        "content": "Тэги",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "vendorCode": {
                        "id": "vendorCode",
                        "content": "Артикул",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__64141630047679031": {
                        "content": "Удалить модель",
                        "id": "action__64141630047679031",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "brand": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "category": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "decline_reason": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsHint": true,
                        "hintType": "danger"
                    },
                    "description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "goodSpecification": {
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
                                "quantity": {
                                    "id": "quantity",
                                    "content": "Количество",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": "positiveNum",
                                    "formatOptions": {}
                                },
                                "reserve": {
                                    "id": "reserve",
                                    "content": "Резерв",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": "positiveNum",
                                    "formatOptions": {}
                                },
                                "size": {
                                    "id": "size",
                                    "content": "Размер",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "spec_name": {
                                    "id": "spec_name",
                                    "content": "Человеческое название позиции",
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
                                "quantity": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "reserve": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "size": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "spec_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "quantity",
                                "reserve",
                                "size",
                                "spec_name"
                            ]
                        },
                        "subHeader": ""
                    },
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "НЕ ИЗМЕНЯТЬ"
                    },
                    "isDeleted": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "isNew": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "isSale": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "moderation_status": {
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
                        "clickable": false
                    },
                    "oldPrice": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileImage": true
                    },
                    "price": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sizes": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryBeauty": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryInterior": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryKids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryMen": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryWomen": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tags": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "vendorCode": {
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
                        "title": "Информация о товаре",
                        "fieldIds": [
                            "photo",
                            "name",
                            "description",
                            "brand",
                            "vendorCode",
                            "price",
                            "color",
                            "isNew",
                            "isSale",
                            "oldPrice",
                            "isDeleted",
                            "decline_reason",
                            "moderation_status",
                            "tags"
                        ]
                    },
                    "82141630047479311": {
                        "id": "82141630047479311",
                        "title": "Товарные позиции на складе",
                        "fieldIds": [
                            "goodSpecification"
                        ]
                    },
                    "67591630047536004": {
                        "id": "67591630047536004",
                        "title": "Категории каталога",
                        "fieldIds": [
                            "category",
                            "subcategoryKids",
                            "subcategoryInterior",
                            "subcategoryWomen",
                            "subcategoryBeauty",
                            "subcategoryMen"
                        ]
                    },
                    "35671630047657439": {
                        "id": "35671630047657439",
                        "title": "Удалить модель",
                        "fieldIds": [
                            "id",
                            "action__64141630047679031"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "82141630047479311",
                    "67591630047536004",
                    "35671630047657439"
                ],
                "actions": [
                    {
                        "sysName": "",
                        "id": "64141630047679031",
                        "name": "Удалить модель",
                        "displayAs": "button",
                        "buttonIcon": "delete",
                        "buttonType": "danger",
                        "dropdown": true,
                        "closePopup": true,
                        "formMapping": [
                            {
                                "id": "77841630047694817",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "67611630047700906",
                                "target": "isDeleted",
                                "type": "const",
                                "value": "true"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "brand": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "category": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "black",
                            "value": "Черный"
                        },
                        {
                            "key": "white",
                            "value": "Белый"
                        },
                        {
                            "key": "dark-blue",
                            "value": "Синий"
                        },
                        {
                            "key": "blue",
                            "value": "Голубой"
                        },
                        {
                            "key": "yellow",
                            "value": "Жёлтый"
                        },
                        {
                            "key": "red",
                            "value": "Красный"
                        },
                        {
                            "key": "green",
                            "value": "Зеленый"
                        },
                        {
                            "key": "beige",
                            "value": "Бежевый"
                        },
                        {
                            "key": "pink",
                            "value": "Розовый"
                        },
                        {
                            "key": "violet",
                            "value": "Фиолетовый"
                        },
                        {
                            "key": "lilac",
                            "value": "Сиреневый"
                        },
                        {
                            "key": "hacky",
                            "value": "Хаки"
                        },
                        {
                            "key": "gray",
                            "value": "Серый"
                        },
                        {
                            "key": "brown",
                            "value": "Коричневый"
                        },
                        {
                            "key": "burgundy",
                            "value": "Бордовый"
                        },
                        {
                            "key": "golden",
                            "value": "Золотой"
                        },
                        {
                            "key": "silver",
                            "value": "Серебрянный"
                        },
                        {
                            "key": "orange",
                            "value": "Оранжевый"
                        }
                    ]
                },
                "decline_reason": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": true,
                    "hintType": "danger"
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "goodSpecification": {
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
                            "quantity": {
                                "id": "quantity",
                                "content": "Количество",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": {}
                            },
                            "reserve": {
                                "id": "reserve",
                                "content": "Резерв",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": {}
                            },
                            "size": {
                                "id": "size",
                                "content": "Размер",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "spec_name": {
                                "id": "spec_name",
                                "content": "Человеческое название позиции",
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
                            "quantity": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "reserve": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "size": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "spec_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "quantity",
                            "reserve",
                            "size",
                            "spec_name"
                        ]
                    },
                    "subHeader": ""
                },
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "НЕ ИЗМЕНЯТЬ"
                },
                "isDeleted": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isNew": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isSale": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "moderation_status": {
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
                    "clickable": false
                },
                "oldPrice": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "photo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileImage": true
                },
                "price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sizes": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryBeauty": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryInterior": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryKids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryMen": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryWomen": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tags": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "vendorCode": {
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
                        "fieldSysName": "brand",
                        "fetch": [
                            {
                                "fieldSysName": "brandName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "logo",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "owner_id",
                                "condition": null,
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
                                ]
                            }
                        ],
                        "sysName": "brand",
                        "name": "Бренд",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Brands"
                    },
                    {
                        "fieldSysName": "category",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "category",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "category"
                    },
                    {
                        "fieldSysName": "color",
                        "fetch": [
                            {
                                "fieldSysName": "color",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "colorEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "color",
                        "name": "Цвет",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "colors"
                    },
                    {
                        "fieldSysName": "decline_reason",
                        "fetch": [],
                        "sysName": "decline_reason",
                        "name": "Причина отказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Описание",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "goodSpecification",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "quantity",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "reserve",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "size",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "spec_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "goodSpecification",
                        "name": "Товарные позиции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goodSpecification"
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
                        "fieldSysName": "isDeleted",
                        "fetch": [],
                        "sysName": "isDeleted",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isNew",
                        "fetch": [],
                        "sysName": "isNew",
                        "name": "Новый товар",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "isSale",
                        "fetch": [],
                        "sysName": "isSale",
                        "name": "Распродажа",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "moderation_status",
                        "fetch": [],
                        "sysName": "moderation_status",
                        "name": "new,approved,declined",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "Название",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "oldPrice",
                        "fetch": [],
                        "sysName": "oldPrice",
                        "name": "Старая цена",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "price",
                        "fetch": [],
                        "sysName": "price",
                        "name": "Цена, ₽",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "subcategoryBeauty",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryBeauty",
                        "name": "Бьюти, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryBeauty"
                    },
                    {
                        "fieldSysName": "subcategoryInterior",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryInterior",
                        "name": "Интерьер, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryInterior"
                    },
                    {
                        "fieldSysName": "subcategoryKids",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryKids",
                        "name": "Детское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryKids"
                    },
                    {
                        "fieldSysName": "subcategoryMen",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryMen",
                        "name": "Мужское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryMen"
                    },
                    {
                        "fieldSysName": "subcategoryWomen",
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
                            },
                            {
                                "fieldSysName": "nameEng",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "subcategoryWomen",
                        "name": "Женское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryWomen"
                    },
                    {
                        "fieldSysName": "tags",
                        "fetch": [],
                        "sysName": "tags",
                        "name": "Тэги",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "vendorCode",
                        "fetch": [],
                        "sysName": "vendorCode",
                        "name": "Артикул",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "brand",
                        "fetch": [],
                        "sysName": "brand",
                        "name": "Бренд",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Brands"
                    },
                    {
                        "fieldSysName": "category",
                        "fetch": [],
                        "sysName": "category",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "category"
                    },
                    {
                        "fieldSysName": "color",
                        "fetch": [],
                        "sysName": "color",
                        "name": "Цвет",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "colors"
                    },
                    {
                        "fieldSysName": "decline_reason",
                        "fetch": [],
                        "sysName": "decline_reason",
                        "name": "Причина отказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Описание",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "goodSpecification",
                        "fetch": [],
                        "sysName": "goodSpecification",
                        "name": "Товарные позиции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goodSpecification"
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
                        "fieldSysName": "isDeleted",
                        "fetch": [],
                        "sysName": "isDeleted",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "isNew",
                        "fetch": [],
                        "sysName": "isNew",
                        "name": "Новый товар",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "isSale",
                        "fetch": [],
                        "sysName": "isSale",
                        "name": "Распродажа",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                        "fieldSysName": "moderation_status",
                        "fetch": [],
                        "sysName": "moderation_status",
                        "name": "new,approved,declined",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "Название",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "oldPrice",
                        "fetch": [],
                        "sysName": "oldPrice",
                        "name": "Старая цена",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "price",
                        "fetch": [],
                        "sysName": "price",
                        "name": "Цена, ₽",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "subcategoryBeauty",
                        "fetch": [],
                        "sysName": "subcategoryBeauty",
                        "name": "Бьюти, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryBeauty"
                    },
                    {
                        "fieldSysName": "subcategoryInterior",
                        "fetch": [],
                        "sysName": "subcategoryInterior",
                        "name": "Интерьер, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryInterior"
                    },
                    {
                        "fieldSysName": "subcategoryKids",
                        "fetch": [],
                        "sysName": "subcategoryKids",
                        "name": "Детское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryKids"
                    },
                    {
                        "fieldSysName": "subcategoryMen",
                        "fetch": [],
                        "sysName": "subcategoryMen",
                        "name": "Мужское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryMen"
                    },
                    {
                        "fieldSysName": "subcategoryWomen",
                        "fetch": [],
                        "sysName": "subcategoryWomen",
                        "name": "Женское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryWomen"
                    },
                    {
                        "fieldSysName": "tags",
                        "fetch": [],
                        "sysName": "tags",
                        "name": "Тэги",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "vendorCode",
                        "fetch": [],
                        "sysName": "vendorCode",
                        "name": "Артикул",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "brand": {
                        "id": "brand",
                        "content": "Бренд",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Brands"
                    },
                    "category": {
                        "id": "category",
                        "content": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "category"
                    },
                    "color": {
                        "id": "color",
                        "content": "Цвет",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "colors"
                    },
                    "decline_reason": {
                        "id": "decline_reason",
                        "content": "Причина отказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "description": {
                        "id": "description",
                        "content": "Описание",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "goodSpecification": {
                        "id": "goodSpecification",
                        "content": "Товарные позиции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "goodSpecification"
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
                    "isDeleted": {
                        "id": "isDeleted",
                        "content": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "isNew": {
                        "id": "isNew",
                        "content": "Новый товар",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                    "isSale": {
                        "id": "isSale",
                        "content": "Распродажа",
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
                                "Да",
                                "Нет"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
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
                    "moderation_status": {
                        "id": "moderation_status",
                        "content": "new,approved,declined",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "name": {
                        "id": "name",
                        "content": "Название",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "oldPrice": {
                        "id": "oldPrice",
                        "content": "Старая цена",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "photo": {
                        "id": "photo",
                        "content": "Фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "price": {
                        "id": "price",
                        "content": "Цена, ₽",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "subcategoryBeauty": {
                        "id": "subcategoryBeauty",
                        "content": "Бьюти, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryBeauty"
                    },
                    "subcategoryInterior": {
                        "id": "subcategoryInterior",
                        "content": "Интерьер, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryInterior"
                    },
                    "subcategoryKids": {
                        "id": "subcategoryKids",
                        "content": "Детское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryKids"
                    },
                    "subcategoryMen": {
                        "id": "subcategoryMen",
                        "content": "Мужское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryMen"
                    },
                    "subcategoryWomen": {
                        "id": "subcategoryWomen",
                        "content": "Женское, подкатегория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "subcategoryWomen"
                    },
                    "tags": {
                        "id": "tags",
                        "content": "Тэги",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "vendorCode": {
                        "id": "vendorCode",
                        "content": "Артикул",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "brand": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "category": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "color": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": false,
                        "colorCellType": "text",
                        "colorCellSource": "field"
                    },
                    "decline_reason": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "description": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "goodSpecification": {
                        "include": false,
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
                    "isDeleted": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "isNew": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "isSale": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "moderation_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "oldPrice": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "circle",
                        "fileImageSize": 40,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "fileImage": true
                    },
                    "price": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "sizes": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "subcategoryBeauty": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "subcategoryInterior": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "subcategoryKids": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "subcategoryMen": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "subcategoryWomen": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "tags": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "vendorCode": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "photo",
                    "vendorCode",
                    "name",
                    "brand",
                    "category",
                    "color",
                    "price",
                    "moderation_status",
                    "decline_reason",
                    "description",
                    "goodSpecification",
                    "id",
                    "isDeleted",
                    "isNew",
                    "isSale",
                    "oldPrice",
                    "subcategoryBeauty",
                    "subcategoryInterior",
                    "subcategoryKids",
                    "subcategoryMen",
                    "subcategoryWomen",
                    "tags"
                ]
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "64141630047679031",
                    "name": "Удалить модель",
                    "displayAs": "button",
                    "buttonIcon": "delete",
                    "buttonType": "danger",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "77841630047694817",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "67611630047700906",
                            "target": "isDeleted",
                            "type": "const",
                            "value": "true"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "Товары на витрине",
        "actions": null,
        "headers": [
            {
                "sysName": "brand",
                "dataType": "link",
                "name": "Бренд",
                "id": "67261624310684962",
                "link": "Brands",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 7,
                "linkIndexFieldSysName": [
                    "moderation_status",
                    "brandName",
                    "owner_id",
                    "id"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": true,
                "indexExists": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "category",
                "dataType": "link",
                "name": "Категория",
                "id": "99311624310596554",
                "link": "category",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "color",
                "dataType": "link",
                "name": "Цвет",
                "id": "85091624310580305",
                "link": "colors",
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
                "json": false,
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "decline_reason",
                "dataType": "string",
                "name": "Причина отказа",
                "id": "82001630010018372",
                "link": null,
                "group": "1630009990145",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "description",
                "dataType": "string",
                "name": "Описание",
                "id": "93171624310572841",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "goodSpecification",
                "dataType": "arrayLink",
                "name": "Товарные позиции",
                "id": "16081627942155485",
                "link": "goodSpecification",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 11,
                "linkIndexFieldSysName": [
                    "id"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": true,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "isDeleted",
                "dataType": "boolean",
                "name": "",
                "id": "79241630009759326",
                "link": "",
                "group": "1630009990145",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "isNew",
                "dataType": "boolean",
                "name": "Новый товар",
                "id": "80961624316987394",
                "link": "",
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
                        "Да",
                        "Нет"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "isSale",
                "dataType": "boolean",
                "name": "Распродажа",
                "id": "70721624317005679",
                "link": "",
                "group": "0",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Да",
                        "Нет"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "moderation_status",
                "dataType": "string",
                "name": "new,approved,declined",
                "id": "77881630010002681",
                "link": null,
                "group": "1630009990145",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "name",
                "dataType": "string",
                "name": "Название",
                "id": "90461624310568714",
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "oldPrice",
                "dataType": "number",
                "name": "Старая цена",
                "id": "64811628534783413",
                "link": "",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "photo",
                "dataType": "file",
                "name": "Фото",
                "id": "31701624310616441",
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
                "format": "multipleImages",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "price",
                "dataType": "number",
                "name": "Цена, ₽",
                "id": "74391627677598162",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 10,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryBeauty",
                "dataType": "link",
                "name": "Бьюти, подкатегория",
                "id": "88001624486752931",
                "link": "subcategoryBeauty",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryInterior",
                "dataType": "link",
                "name": "Интерьер, подкатегория",
                "id": "12011624486790587",
                "link": "subcategoryInterior",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryKids",
                "dataType": "link",
                "name": "Детское, подкатегория",
                "id": "35001624486729783",
                "link": "subcategoryKids",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryMen",
                "dataType": "link",
                "name": "Мужское, подкатегория",
                "id": "63351624486661483",
                "link": "subcategoryMen",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryWomen",
                "dataType": "link",
                "name": "Женское, подкатегория",
                "id": "54621624486680601",
                "link": "subcategoryWomen",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "tags",
                "dataType": "string",
                "name": "Тэги",
                "id": "22641624310590765",
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "vendorCode",
                "dataType": "string",
                "name": "Артикул",
                "id": "51831627942104491",
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "data": [
            {
                "goodSpecification": [
                    {
                        "quantity": 5,
                        "reserve": 0,
                        "size": "-",
                        "spec_name": "Размер - – 5 шт.",
                        "id": "471dc573-0bbd-42ae-9e2c-f8b3cad3d63d"
                    }
                ],
                "name": "Парфюмированное масло 50˚14˚ ",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/b960b72c-cc4a-4965-b3fa-9f2f4a1043fa.jpg,https://api.directual.com/fileUploaded/brands247/web/af4d5eb1-a573-4591-a244-91b3f94d3fb6.jpg,https://api.directual.com/fileUploaded/brands247/web/ced6a49e-de3a-457f-86c1-5ff30f803bae.jpg",
                "description": "**Парфюмированное масло 50˚14˚**\n\nСкалы Бастай на границе Германии и Чехии. Место где среди величественных скал и древних лесов гуляют холодные ветра, разнося насыщенные ароматы хвои, листы, земли и кофе из кафе на самом верху.\n\nПока поднимаешься проходишь через небольшой лес, потом он постепенно редеет уступая место голым камням, лестницам и туристам, но на самом верху снова берет свое. Так и  аромат встречает яркими хвойными нотами пихты и кедра, сменяясь на умиротворенную полноту петитгрейна в окружении травянистых нот пачули и завершаясь величественным дубовым мхом и ветивером\n\n**Ноты:** Ветивер, Канадская Пихта, Кедр Атласский, Пачули, Дубовый Мох, Петитгрейн\n\n**Состав:** В основе эфир кокосового масла: мягкое масло, которое быстро впитывается в кожу и ярко раскрывает аромат. При составлении аромата духов мы используем преймущественно натуральные эфирные масла, абсолюты и экстракты, добавляя акценты ароматических молекул преймущественно натурального происхождения.\n\n**Обьем:** 5мл\n\n**Рекомендации:** Наносить рекомендуем на пульсирующие точки: запастья, шея, за ухом, виски, сгиб локтя. В этих местах кожа имеет самую высокую температуру, потому аромат будет активнее испаряться.\n\nПреимущество масляных духов в их компактном размере и высокой концентрации ароматических компонентов. Ими можно воспользоваться в любой обстановке, в отличии от духов с распылителем. Не боятся перепадов температуры.",
                "price": 1100,
                "brand": {
                    "brandName": "Forfolks",
                    "owner_id": {
                        "lastName": "Амбросевич",
                        "firstName": "Татьяна",
                        "id": "hello@forfolks.co"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/7f195c75-4fea-4898-86f0-1eb20532fed2.jpg",
                    "id": "Forfolks_18"
                },
                "id": "Parfyumirovannoe_maslo_50˚14˚__8",
                "subcategoryBeauty": {
                    "nameEng": "Beauty products",
                    "name": "Косметика",
                    "id": "beautyProducts"
                },
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Beauty",
                    "name": "Бьюти",
                    "id": "beauty"
                },
                "vendorCode": "1221003(1)",
                "color": "",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryInterior": "",
                "subcategoryKids": "",
                "subcategoryMen": "",
                "subcategoryWomen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "quantity": 7,
                        "reserve": 0,
                        "size": "S",
                        "spec_name": "Размер S – 7 шт.",
                        "id": "f83ba9f8-0cb1-47d8-baf4-520bb48ba8cf"
                    },
                    {
                        "quantity": 3,
                        "reserve": 0,
                        "size": "M",
                        "spec_name": "Размер M – 3 шт.",
                        "id": "ef832113-85e5-4ad1-8054-0fb55139de25"
                    }
                ],
                "name": "Боди «TERRA»",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/47630074-b61e-48b0-9c3b-3e5ad6b4d4ed.jpg,https://api.directual.com/fileUploaded/brands247/web/e509a4aa-a284-4ae7-b91d-8a68dcd239c5.jpg,https://api.directual.com/fileUploaded/brands247/web/bdf9ea7d-38f7-4b5a-8584-179e5048dabe.jpg,https://api.directual.com/fileUploaded/brands247/web/13a656a6-cd98-4e4b-a809-50e93c919147.jpg,https://api.directual.com/fileUploaded/brands247/web/1938be15-3122-4523-9d8d-cc6418b1884f.jpg,https://api.directual.com/fileUploaded/brands247/web/675753ea-c245-4535-a3a6-cb78c6a475a2.jpg",
                "description": "Открыть для себя нестандартную классику легко вместе с нами! Ведь многие уже устали от обычных моделей боди-водолазки. Поэтому специально для тебя мы постарались разработать нетривиальный фасон с возможностью внедрения в повседневный образ. Фигурное декольте и лиф корсетного типа подчеркнут естественную красоту груди и ключиц, а дышащая приятная телу ткань обеспечит тебя комфортом на весь день. Отлично сочетается с жакетом, который можно снять при игривом настроении, чтобы показать эффектный вырез со спины, делающий акцент на ее изящности.",
                "price": 5800,
                "brand": {
                    "brandName": "Vioto",
                    "owner_id": {
                        "lastName": "Толоконцева",
                        "firstName": "Виолетта",
                        "id": "info@vioto.ru"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/0def359e-8c0c-44cf-a6df-872f3a032468.png",
                    "id": "Vioto_20"
                },
                "subcategoryWomen": {
                    "nameEng": "Other",
                    "name": "Другое",
                    "id": "other",
                    "type": "accessories"
                },
                "id": "Bodi_«TERRA»_25",
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Women",
                    "name": "Женское",
                    "id": "women"
                },
                "vendorCode": "06CC1221",
                "color": "",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryBeauty": "",
                "subcategoryInterior": "",
                "subcategoryKids": "",
                "subcategoryMen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "quantity": 9,
                        "reserve": 0,
                        "size": "Small",
                        "spec_name": "Размер Small – 9 шт.",
                        "id": "04b517d3-06ee-4aef-8e86-b9bd9c30f2ed"
                    },
                    {
                        "quantity": 1,
                        "reserve": 0,
                        "size": "Large",
                        "spec_name": "Размер Large – 1 шт.",
                        "id": "ccb398bd-ff2e-4aff-bf1c-dc74d952126e"
                    }
                ],
                "name": " TEST 2 Сумка Беж",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/ed7b3133-af28-4a14-9f03-2402e23e8ee7.jpeg",
                "description": "Очень милая сумочка",
                "price": 14500,
                "color": {
                    "color": "Бежевый",
                    "id": "beige"
                },
                "brand": {
                    "brandName": "TEST 1 Next Chapter",
                    "owner_id": {
                        "firstName": "Валерия ",
                        "lastName": "Шабалина",
                        "id": "lvoox@mail.ru"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/1a8a56cc-cb07-4ad1-8a69-13dd30d41ac9.jpeg",
                    "id": "LERA_22"
                },
                "subcategoryWomen": {
                    "nameEng": "Bags and clutches",
                    "name": "Сумки и клатчи ",
                    "id": "bags",
                    "type": "bags"
                },
                "id": "_TEST_2_Sumka_Bezh_29",
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Women",
                    "name": "Женское",
                    "id": "women"
                },
                "vendorCode": "0001б",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryBeauty": "",
                "subcategoryInterior": "",
                "subcategoryKids": "",
                "subcategoryMen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "quantity": 11,
                        "reserve": 0,
                        "size": "Large",
                        "spec_name": "Размер Large – 11 шт.",
                        "id": "70dab064-d321-44a5-9772-07dda3fa98c6"
                    },
                    {
                        "quantity": 7,
                        "reserve": 0,
                        "size": "Small ",
                        "spec_name": "Размер Small  – 7 шт.",
                        "id": "79200dbe-e936-49da-96a9-fd08f95cd201"
                    }
                ],
                "name": "TEST 3 Сумка Грин",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/e35301c9-af8f-4c5f-8786-36c82d9bdd60.jpeg",
                "description": "Маленькая сумка",
                "price": 13990,
                "color": {
                    "color": "Зеленый",
                    "id": "green"
                },
                "brand": {
                    "brandName": "TEST 1 Next Chapter",
                    "owner_id": {
                        "firstName": "Валерия ",
                        "lastName": "Шабалина",
                        "id": "lvoox@mail.ru"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/1a8a56cc-cb07-4ad1-8a69-13dd30d41ac9.jpeg",
                    "id": "LERA_22"
                },
                "subcategoryWomen": {
                    "nameEng": "Bags and clutches",
                    "name": "Сумки и клатчи ",
                    "id": "bags",
                    "type": "bags"
                },
                "id": "TEST_3_Sumka_Grin_31",
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Women",
                    "name": "Женское",
                    "id": "women"
                },
                "vendorCode": "0001в",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryBeauty": "",
                "subcategoryInterior": "",
                "subcategoryKids": "",
                "subcategoryMen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "quantity": 5,
                        "reserve": 0,
                        "size": "S",
                        "spec_name": "Размер S – 5 шт.",
                        "id": "473153ae-daf0-4f20-887d-c7383f55a8cf"
                    },
                    {
                        "quantity": 13,
                        "reserve": 0,
                        "size": "M",
                        "spec_name": "Размер M – 13 шт.",
                        "id": "6ae3d722-a79b-43e6-9202-b744927da1cd"
                    }
                ],
                "name": "TEST 4 Пальто Роза",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/a82db12f-9530-4261-9d10-ed98ed6b0cf2.jpeg",
                "description": "Детское розовое пальто",
                "price": 1500,
                "subcategoryKids": {
                    "nameEng": "Kids coats",
                    "name": "Пальто ",
                    "id": "kidsCoats"
                },
                "color": {
                    "color": "Розовый",
                    "id": "pink"
                },
                "brand": {
                    "brandName": "TEST 3 BIKE",
                    "owner_id": {
                        "lastName": "Шулакова",
                        "firstName": "Таня",
                        "id": "tmshulakova@gmail.com"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/32bcd84e-5c99-4b3d-a2c0-788d8164e11b.png",
                    "id": "TEST_3__24"
                },
                "id": "TEST_4_Pal'to_Roza_32",
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Kids",
                    "name": "Дети",
                    "id": "kids"
                },
                "vendorCode": "EE100",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryBeauty": "",
                "subcategoryInterior": "",
                "subcategoryMen": "",
                "subcategoryWomen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "quantity": 19,
                        "reserve": 0,
                        "size": "One Size",
                        "spec_name": "Размер One Size – 19 шт.",
                        "id": "d5b65ceb-b330-4406-b9c9-dc0f7005f240"
                    }
                ],
                "name": "TEST 5 Комбинезон Мишка",
                "oldPrice": 2300,
                "photo": "https://api.directual.com/fileUploaded/brands247/web/37b0acb6-4cd5-4258-9ee9-d83aec95e3aa.jpeg",
                "description": "Детская удобная вещь",
                "price": 2100,
                "subcategoryKids": {
                    "nameEng": "Baby clothing",
                    "name": "Все для новорожденных",
                    "id": "babyClothing"
                },
                "color": {
                    "color": "Коричневый",
                    "id": "brown"
                },
                "brand": {
                    "brandName": "TEST 3 BIKE",
                    "owner_id": {
                        "lastName": "Шулакова",
                        "firstName": "Таня",
                        "id": "tmshulakova@gmail.com"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/32bcd84e-5c99-4b3d-a2c0-788d8164e11b.png",
                    "id": "TEST_3__24"
                },
                "id": "TEST_5_Kombinezon_Mishka_33",
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Kids",
                    "name": "Дети",
                    "id": "kids"
                },
                "vendorCode": "УУ900",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "subcategoryBeauty": "",
                "subcategoryInterior": "",
                "subcategoryMen": "",
                "subcategoryWomen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "reserve": 0,
                        "quantity": 70,
                        "spec_name": "Размер  – 70 шт.",
                        "id": "871d31a5-aa99-47b8-93d5-37c3ce2c29b3"
                    }
                ],
                "name": "TEST 6 Cream WOW Face",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/d472af1f-8805-4dcb-b28f-8c9857192a27.jpeg",
                "description": "Новый крем в линейке",
                "price": 5999,
                "brand": {
                    "brandName": "TEST 2_MEARA BEAUTY",
                    "owner_id": {
                        "firstName": "Валерия ",
                        "lastName": "Шабалина",
                        "id": "lvoox@mail.ru"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/7b109ec2-ea8c-43ff-b4ca-6d32df8b9d4a.png",
                    "id": "TEST_2_MEARA_BEAUTY_23"
                },
                "id": "TEST_6_Cream_WOW_Face_34",
                "subcategoryBeauty": {
                    "nameEng": "Care",
                    "name": "Уход",
                    "id": "care"
                },
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Beauty",
                    "name": "Бьюти",
                    "id": "beauty"
                },
                "vendorCode": "5555",
                "color": "",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryInterior": "",
                "subcategoryKids": "",
                "subcategoryMen": "",
                "subcategoryWomen": "",
                "tags": ""
            },
            {
                "goodSpecification": [
                    {
                        "spec_name": "Размер  – 6 шт.",
                        "quantity": 6,
                        "reserve": 0,
                        "id": "82330e20-7e21-43b3-b6f6-40aac4327b0f"
                    }
                ],
                "name": "TEST 6 Соль Флекс",
                "photo": "https://api.directual.com/fileUploaded/brands247/web/d334e6b1-611b-4d75-8db6-0bc03456b7a5.jpeg",
                "description": "Для ванны",
                "price": 1990,
                "brand": {
                    "brandName": "TEST 2_MEARA BEAUTY",
                    "owner_id": {
                        "firstName": "Валерия ",
                        "lastName": "Шабалина",
                        "id": "lvoox@mail.ru"
                    },
                    "logo": "https://api.directual.com/fileUploaded/brands247/web/7b109ec2-ea8c-43ff-b4ca-6d32df8b9d4a.png",
                    "id": "TEST_2_MEARA_BEAUTY_23"
                },
                "id": "TEST_6_Sol'_Fleks_35",
                "subcategoryBeauty": {
                    "nameEng": "Hygiene",
                    "name": "Гигиена",
                    "id": "hygiene"
                },
                "moderation_status": "approved",
                "category": {
                    "nameEng": "Beauty",
                    "name": "Бьюти",
                    "id": "beauty"
                },
                "vendorCode": "66666",
                "color": "",
                "decline_reason": "",
                "isDeleted": "",
                "isNew": "",
                "isSale": "",
                "oldPrice": "",
                "subcategoryInterior": "",
                "subcategoryKids": "",
                "subcategoryMen": "",
                "subcategoryWomen": "",
                "tags": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "brand.brandName",
                1426040
            ],
            [
                "brand.id",
                1426040
            ],
            [
                "brand.logo",
                1426040
            ],
            [
                "brand.owner_id.firstName",
                1396851
            ],
            [
                "brand.owner_id.id",
                1396851
            ],
            [
                "brand.owner_id.lastName",
                1396851
            ],
            [
                "category.id",
                1397568
            ],
            [
                "category.name",
                1397568
            ],
            [
                "category.nameEng",
                1397568
            ],
            [
                "color.color",
                1418517
            ],
            [
                "color.colorEng",
                1418517
            ],
            [
                "color.id",
                1418517
            ],
            [
                "decline_reason",
                1397569
            ],
            [
                "description",
                1397569
            ],
            [
                "goodSpecification.id",
                1418516
            ],
            [
                "goodSpecification.quantity",
                1418516
            ],
            [
                "goodSpecification.reserve",
                1418516
            ],
            [
                "goodSpecification.size",
                1418516
            ],
            [
                "goodSpecification.spec_name",
                1418516
            ],
            [
                "id",
                1397569
            ],
            [
                "isDeleted",
                1397569
            ],
            [
                "isNew",
                1397569
            ],
            [
                "isSale",
                1397569
            ],
            [
                "moderation_status",
                1397569
            ],
            [
                "name",
                1397569
            ],
            [
                "oldPrice",
                1397569
            ],
            [
                "photo",
                1397569
            ],
            [
                "price",
                1397569
            ],
            [
                "subcategoryBeauty.id",
                1398625
            ],
            [
                "subcategoryBeauty.name",
                1398625
            ],
            [
                "subcategoryBeauty.nameEng",
                1398625
            ],
            [
                "subcategoryBeauty.type",
                1398625
            ],
            [
                "subcategoryInterior.id",
                1398626
            ],
            [
                "subcategoryInterior.name",
                1398626
            ],
            [
                "subcategoryInterior.nameEng",
                1398626
            ],
            [
                "subcategoryInterior.type",
                1398626
            ],
            [
                "subcategoryKids.id",
                1398624
            ],
            [
                "subcategoryKids.name",
                1398624
            ],
            [
                "subcategoryKids.nameEng",
                1398624
            ],
            [
                "subcategoryKids.type",
                1398624
            ],
            [
                "subcategoryMen.id",
                1398622
            ],
            [
                "subcategoryMen.name",
                1398622
            ],
            [
                "subcategoryMen.nameEng",
                1398622
            ],
            [
                "subcategoryMen.type",
                1398622
            ],
            [
                "subcategoryWomen.id",
                1398623
            ],
            [
                "subcategoryWomen.name",
                1398623
            ],
            [
                "subcategoryWomen.nameEng",
                1398623
            ],
            [
                "subcategoryWomen.type",
                1398623
            ],
            [
                "tags",
                1397569
            ],
            [
                "vendorCode",
                1397569
            ]
        ],
        "writeFields": [
            "brand",
            "category",
            "color",
            "decline_reason",
            "description",
            "goodSpecification",
            "id",
            "isDeleted",
            "isNew",
            "isSale",
            "moderation_status",
            "name",
            "oldPrice",
            "photo",
            "price",
            "subcategoryBeauty",
            "subcategoryInterior",
            "subcategoryKids",
            "subcategoryMen",
            "subcategoryWomen",
            "tags",
            "vendorCode"
        ],
        "structures": {
            "1396851": {
                "networkID": 7332,
                "sysName": "WebUser",
                "name": "App users",
                "id": 1396851,
                "dateCreated": "2021-06-18T12:42:59Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"telegram\",\"dataType\":\"link\",\"name\":\"Telegram\",\"id\":\"34101638346264849\",\"link\":\"TChat\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"TG_connected\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"76901639083519806\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Roles\",\"id\":\"6\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"thirdName\",\"dataType\":\"string\",\"name\":\"Отчество\",\"id\":\"79761628701234488\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"whoAdd\",\"dataType\":\"link\",\"name\":\"Who add\",\"id\":\"35501625913518138\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Notifications\",\"dataType\":\"boolean\",\"name\":\"Высылать оповещения по email\",\"id\":\"90201634984689703\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Высылать\",\"Не высылать\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Notifications_TG\",\"dataType\":\"boolean\",\"name\":\"Высылать оповещения в Телеграм\",\"id\":\"12361637829859232\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Высылать\",\"Не высылать\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"Favorites\",\"dataType\":\"link\",\"name\":\"Избранные\",\"id\":\"28321627692145465\",\"link\":\"favorites\",\"group\":\"1625430271500\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cart\",\"dataType\":\"arrayLink\",\"name\":\"Корзина (товары в корзине)\",\"id\":\"44311627692203902\",\"link\":\"itemsInCart\",\"group\":\"1625430271500\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"orders\",\"dataType\":\"arrayLink\",\"name\":\"Заказы\",\"id\":\"70671633934172528\",\"link\":\"orders\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"string\",\"name\":\"Страна\",\"id\":\"33321628701430394\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"39491628701450498\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"index\",\"dataType\":\"string\",\"name\":\"Индекс\",\"id\":\"55461628701457851\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"street\",\"dataType\":\"string\",\"name\":\"Улица\",\"id\":\"99241628701478061\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"house\",\"dataType\":\"string\",\"name\":\"Дом\",\"id\":\"60171628701483573\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"apart\",\"dataType\":\"string\",\"name\":\"Квартира\",\"id\":\"64671628701490630\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"commentAdress\",\"dataType\":\"string\",\"name\":\"Комментарий\",\"id\":\"52021628701504080\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cartId\",\"dataType\":\"link\",\"name\":\"корзина (ID)\",\"id\":\"60651640850420503\",\"link\":\"cart\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"entity\",\"dataType\":\"string\",\"name\":\"Юр.лицо\",\"id\":\"50681625927701368\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ogrn\",\"dataType\":\"string\",\"name\":\"ОГРН\",\"id\":\"32001625927766678\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"adress\",\"dataType\":\"string\",\"name\":\"Адрес\",\"id\":\"58321625927789978\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"paymentAccount\",\"dataType\":\"string\",\"name\":\"Р/с\",\"id\":\"38741625927806465\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"correspondentAccount\",\"dataType\":\"string\",\"name\":\"К/с\",\"id\":\"88821625927871201\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bank\",\"dataType\":\"string\",\"name\":\"Банк\",\"id\":\"62951625927910972\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bik\",\"dataType\":\"string\",\"name\":\"БИК\",\"id\":\"23521625927939680\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"kindOfActivity\",\"dataType\":\"string\",\"name\":\"Основной вид деятельности\",\"id\":\"37161625927949139\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"brand_ids\",\"dataType\":\"arrayLink\",\"name\":\" Бренды\",\"id\":\"85401628591982213\",\"link\":\"Brands\",\"group\":\"1628591974821\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"goods\",\"dataType\":\"arrayLink\",\"name\":\"Товары\",\"id\":\"59641628237696484\",\"link\":\"goods\",\"group\":\"1628591974821\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"delivery_id\",\"dataType\":\"link\",\"name\":\"Тип доставки\",\"id\":\"34011634891894609\",\"link\":\"delivery\",\"group\":\"1634891875475\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sdecAdress\",\"dataType\":\"string\",\"name\":\"СДЭК адрес пункта выдачи\",\"id\":\"59361634891942420\",\"link\":\"\",\"group\":\"1634891875475\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"worldAdress\",\"dataType\":\"string\",\"name\":\"Адрес доставки по миру\",\"id\":\"28311634892118302\",\"link\":\"\",\"group\":\"1634891875475\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"commentSdecAdress\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"55911637166997264\",\"link\":null,\"group\":\"1634891875475\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"commentWorldAdress\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"21851637167104805\",\"link\":null,\"group\":\"1634891875475\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Delivery fields\",\"id\":1634891875475,\"order\":5},{\"name\":\"System fields\",\"id\":-1776115286,\"order\":1},{\"name\":\"Entity fields\",\"id\":1625430301390,\"order\":4},{\"name\":\"Brand\",\"id\":1628591974821,\"order\":3},{\"name\":\"Customer fiedls\",\"id\":1625430271500,\"order\":2},{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"},{\"sysName\":\"email\"},{\"sysName\":\"phone\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-01-14T14:31:30Z",
                "createBy": 0,
                "changedBy": 0,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": null
            },
            "1397568": {
                "networkID": 7332,
                "sysName": "category",
                "name": "Top Category",
                "id": 1397568,
                "dateCreated": "2021-06-21T20:12:42Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sub_interior\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"11481635071329470\",\"link\":\"subcategoryInterior\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":true,\"linkType\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"showImage\",\"dataType\":\"boolean\",\"name\":\"Показывать картинку категории в меню?\",\"id\":\"14901636636209294\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sub_beauty\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"22421635071342763\",\"link\":\"subcategoryBeauty\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":true,\"linkType\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"sub_kids\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"28271635071360045\",\"link\":\"subcategoryKids\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":true,\"linkType\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"nameEng\",\"dataType\":\"string\",\"name\":\"Name\",\"id\":\"28761628325800606\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sub_men\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"51791635071394825\",\"link\":\"subcategoryMen\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":true,\"linkType\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"isHidden\",\"dataType\":\"boolean\",\"name\":\"Скрыто\",\"id\":\"61181628583416297\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"Картинка для категории\",\"id\":\"78071636636220389\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"84661624306450098\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sub_women\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"86301635071373532\",\"link\":\"subcategoryWomen\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":true,\"linkType\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"filterByCategoryType\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"89391635072389350\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"arrayLink\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-11T13:18:41Z",
                "createBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1397569": {
                "networkID": 7332,
                "sysName": "goods",
                "name": "Модель товара (номенклатура)",
                "id": 1397569,
                "dateCreated": "2021-06-21T21:22:23Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"vendorCode\",\"name\":\"Артикул\",\"dataType\":\"string\",\"id\":\"51831627942104491\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"90461624310568714\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"93171624310572841\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"name\":\"Цвет\",\"dataType\":\"link\",\"id\":\"85091624310580305\",\"link\":\"colors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"tags\",\"name\":\"Тэги\",\"dataType\":\"string\",\"id\":\"22641624310590765\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"31701624310616441\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"brand\",\"name\":\"Бренд\",\"dataType\":\"link\",\"id\":\"67261624310684962\",\"link\":\"Brands\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"moderation_status\",\"brandName\",\"owner_id\",\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":true,\"array\":false},{\"sysName\":\"isNew\",\"name\":\"Новый товар\",\"dataType\":\"boolean\",\"id\":\"80961624316987394\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isSale\",\"name\":\"Распродажа\",\"dataType\":\"boolean\",\"id\":\"70721624317005679\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"price\",\"name\":\"Цена, ₽\",\"dataType\":\"number\",\"id\":\"74391627677598162\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"goodSpecification\",\"name\":\"Товарные позиции\",\"dataType\":\"arrayLink\",\"id\":\"16081627942155485\",\"link\":\"goodSpecification\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"oldPrice\",\"name\":\"Старая цена\",\"dataType\":\"number\",\"id\":\"64811628534783413\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"category\",\"name\":\"Категория\",\"dataType\":\"link\",\"id\":\"99311624310596554\",\"link\":\"category\",\"group\":\"1624486873153\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryMen\",\"name\":\"Мужское, подкатегория\",\"dataType\":\"link\",\"id\":\"63351624486661483\",\"link\":\"subcategoryMen\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryWomen\",\"name\":\"Женское, подкатегория\",\"dataType\":\"link\",\"id\":\"54621624486680601\",\"link\":\"subcategoryWomen\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryKids\",\"name\":\"Детское, подкатегория\",\"dataType\":\"link\",\"id\":\"35001624486729783\",\"link\":\"subcategoryKids\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryBeauty\",\"name\":\"Бьюти, подкатегория\",\"dataType\":\"link\",\"id\":\"88001624486752931\",\"link\":\"subcategoryBeauty\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryInterior\",\"name\":\"Интерьер, подкатегория\",\"dataType\":\"link\",\"id\":\"12011624486790587\",\"link\":\"subcategoryInterior\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"categoryType\",\"name\":\"Тип товара\",\"dataType\":\"link\",\"id\":\"32291628759887053\",\"link\":\"categoryType\",\"group\":\"1624486873153\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"name\":\"Пол\",\"dataType\":\"link\",\"id\":\"66261634401502556\",\"link\":\"gender\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"isDeleted\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"79241630009759326\",\"link\":\"\",\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"moderation_status\",\"name\":\"new,approved,declined\",\"dataType\":\"string\",\"id\":\"77881630010002681\",\"link\":null,\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"decline_reason\",\"name\":\"Причина отказа\",\"dataType\":\"string\",\"id\":\"82001630010018372\",\"link\":null,\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"moderation_status_text\",\"name\":\"Статус модерации\",\"dataType\":\"string\",\"id\":\"66871630010028924\",\"link\":null,\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"weight\",\"name\":\"Значимость для Главной страницы\",\"dataType\":\"number\",\"id\":\"54001633954678861\",\"link\":\"\",\"group\":\"1633954671381\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"seoTitle\",\"name\":\"seoTitle\",\"dataType\":\"string\",\"id\":\"30971639572889023\",\"link\":\"\",\"group\":\"1639572879608\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"seoDescription\",\"name\":\"seoDescription\",\"dataType\":\"string\",\"id\":\"59081639572904825\",\"link\":\"\",\"group\":\"1639572879608\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"seoKeywords\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"58371639572933399\",\"link\":\"\",\"group\":\"1639572879608\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Category\",\"id\":1624486873153,\"order\":0},{\"name\":\"Workflow\",\"id\":1630009990145,\"order\":1},{\"name\":\"Новости\",\"id\":1633954671381,\"order\":2},{\"name\":\"SEO\",\"id\":1639572879608,\"order\":3}]",
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-15T12:55:57Z",
                "createBy": 4400,
                "changedBy": 6452,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33635177
            },
            "1398622": {
                "networkID": 7332,
                "sysName": "subcategoryMen",
                "name": "Subcategory Men",
                "id": 1398622,
                "dateCreated": "2021-06-23T21:03:25Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"nameEng\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"11191624482230189\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"isHidden\",\"name\":\"Скрыто \",\"dataType\":\"boolean\",\"id\":\"11231628594842834\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"type\",\"name\":\"Type\",\"dataType\":\"link\",\"id\":\"53831628157424048\",\"link\":\"categoryType\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"98481624482221306\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T13:55:38Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1398623": {
                "networkID": 7332,
                "sysName": "subcategoryWomen",
                "name": "Subcategory Women",
                "id": 1398623,
                "dateCreated": "2021-06-23T21:53:00Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"61181628326441151\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"nameEng\",\"dataType\":\"string\",\"name\":\"Name\",\"id\":\"70391628326447294\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"type\",\"dataType\":\"link\",\"name\":\"Type\",\"id\":\"83741628326453457\",\"link\":\"categoryType\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"isHidden\",\"dataType\":\"boolean\",\"name\":\"Скрыто\",\"id\":\"59901628585355496\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T13:55:06Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1398624": {
                "networkID": 7332,
                "sysName": "subcategoryKids",
                "name": "Subcategory Kids",
                "id": 1398624,
                "dateCreated": "2021-06-23T21:53:31Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"isHidden\",\"name\":\"Скрыто\",\"dataType\":\"boolean\",\"id\":\"28731628594900052\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"type\",\"name\":\"Type\",\"dataType\":\"link\",\"id\":\"35611628326535928\",\"link\":\"categoryType\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true},{\"sysName\":\"nameEng\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"45691628326523695\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"98871628326510429\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T13:57:12Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1398625": {
                "networkID": 7332,
                "sysName": "subcategoryBeauty",
                "name": "Subcategory Beauty",
                "id": 1398625,
                "dateCreated": "2021-06-23T21:54:33Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"nameEng\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"63331628326588190\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"79511628326574829\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"isHidden\",\"name\":\"Скрыто\",\"dataType\":\"boolean\",\"id\":\"85841628594953602\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"type\",\"name\":\"Type\",\"dataType\":\"link\",\"id\":\"96551628326601208\",\"link\":\"categoryType\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T13:59:38Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1398626": {
                "networkID": 7332,
                "sysName": "subcategoryInterior",
                "name": "Subcategory Interior",
                "id": 1398626,
                "dateCreated": "2021-06-23T21:55:14Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"10681628326640240\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"type\",\"name\":\"Type\",\"dataType\":\"link\",\"id\":\"19871628326652213\",\"link\":\"categoryType\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true},{\"sysName\":\"isHidden\",\"name\":\"Скрыто\",\"dataType\":\"boolean\",\"id\":\"36831628595010989\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false},{\"sysName\":\"nameEng\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"81531628326644227\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T14:03:37Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1418516": {
                "networkID": 7332,
                "sysName": "goodSpecification",
                "name": "Товарная позиция (на складе)",
                "id": 1418516,
                "dateCreated": "2021-08-02T22:14:13Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"reserve\",\"name\":\"Резерв\",\"dataType\":\"number\",\"id\":\"29631627948136821\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"remains\",\"name\":\"Остаток\",\"dataType\":\"number\",\"id\":\"43641633940810054\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"spec_name\",\"name\":\"Описание позиции\",\"dataType\":\"string\",\"id\":\"45521629031108883\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"good\",\"name\":\"Товар\",\"dataType\":\"link\",\"id\":\"46811627942463440\",\"link\":\"goods\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"quantity\",\"name\":\"Количество\",\"dataType\":\"number\",\"id\":\"57751627948131838\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"size\",\"name\":\"Размер\",\"dataType\":\"link\",\"id\":\"98291627942532075\",\"link\":\"size\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"spec_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-24T22:38:19Z",
                "createBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33635177
            },
            "1418517": {
                "networkID": 7332,
                "sysName": "colors",
                "name": "Colors",
                "id": 1418517,
                "dateCreated": "2021-08-02T23:58:43Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"color\",\"name\":\"Цвет\",\"dataType\":\"string\",\"id\":\"34591627948731249\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"color\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-24T22:24:27Z",
                "createBy": 4400,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33632409
            },
            "1426040": {
                "networkID": 7332,
                "sysName": "Brands",
                "name": "Brands",
                "id": 1426040,
                "dateCreated": "2021-08-10T10:38:26Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"descriptionHeader\",\"dataType\":\"string\",\"name\":\"Заголовок описания\",\"id\":\"10691634394430253\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"moderation_status_message\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"16321628685693721\",\"link\":null,\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"year\",\"dataType\":\"number\",\"name\":\"Год создания\",\"id\":\"17061628592689240\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"shopRules\",\"dataType\":\"string\",\"name\":\"Правила возврата продукции\",\"id\":\"17571628592771666\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"holidays\",\"dataType\":\"boolean\",\"name\":\"каникулы\",\"id\":\"20341639751041570\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"salesCity\",\"dataType\":\"string\",\"name\":\"Тариф (25% - СДЭК пункт / 27% - Курьер) \",\"id\":\"21471628592699059\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"companyName\",\"dataType\":\"string\",\"name\":\"Юридическое наименование  \",\"id\":\"22421640093084982\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"pending_goods_ids\",\"dataType\":\"arrayLink\",\"name\":\"Товары, ожидающие модерации\",\"id\":\"22601628703842456\",\"link\":\"goods\",\"group\":\"1628684864978\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"accept_TOS\",\"dataType\":\"json\",\"name\":\"Правила площадки\",\"id\":\"23631634982276889\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"accept\",\"label\":\"Принимаю правила использования площадки VitrinaBrands\"}]},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"good_ids\",\"dataType\":\"arrayLink\",\"name\":\"Товары (модели)\",\"id\":\"26571628684869720\",\"link\":\"goods\",\"group\":\"1628684864978\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"brandName\",\"dataType\":\"string\",\"name\":\"Название бренда\",\"id\":\"34541628592680613\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"seoKeywords\",\"dataType\":\"string\",\"name\":\"seoKeywords\",\"id\":\"35051639573194166\",\"link\":\"\",\"group\":\"1639573183227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"owner_id\",\"dataType\":\"link\",\"name\":\"Владелец\",\"id\":\"36491628592826659\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"delivery\",\"dataType\":\"string\",\"name\":\"Адрес (пункта СДЭК / вашего офиса)\",\"id\":\"37351628592700811\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"INN\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"45701640093071832\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"47341628592699578\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"manager_alert\",\"dataType\":\"string\",\"name\":\"Внимание\",\"id\":\"47341637789593389\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"tax\",\"dataType\":\"link\",\"name\":\"НДС\",\"id\":\"47381640101252292\",\"link\":\"tax\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"array\":false},{\"sysName\":\"seoTitle\",\"dataType\":\"string\",\"name\":\"seoTitle\",\"id\":\"55861639573191684\",\"link\":\"\",\"group\":\"1639573183227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"moderation_colour\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"63801628703966398\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"logo\",\"dataType\":\"file\",\"name\":\"Логотип\",\"id\":\"72191628592688721\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"seoDescription\",\"dataType\":\"string\",\"name\":\"seoDescription\",\"id\":\"74241639573193321\",\"link\":\"\",\"group\":\"1639573183227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"moderation_status\",\"dataType\":\"string\",\"name\":\"Статус модерации\",\"id\":\"74811628610372656\",\"link\":null,\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isOnHolidays\",\"dataType\":\"boolean\",\"name\":\"каникулы\",\"id\":\"78701640093054576\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"80531628592689780\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"internalMessages\",\"dataType\":\"arrayLink\",\"name\":\"Сообщения от администратора\",\"id\":\"82601641889792598\",\"link\":\"internalMessages\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"86461640093085688\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"isHidden\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"88081628672775037\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"image_hor\",\"dataType\":\"file\",\"name\":\"Иллюстрация (900x320)\",\"id\":\"91731634981558700\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false},{\"sysName\":\"image_vert\",\"dataType\":\"file\",\"name\":\"Иллюстрация (300x460)\",\"id\":\"95951634981559396\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Tech fields\",\"id\":1628610366405,\"order\":0},{\"name\":\"Goods\",\"id\":1628684864978,\"order\":1},{\"name\":\"seo\",\"id\":1639573183227,\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"brandName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-01-12T16:47:23Z",
                "createBy": 21,
                "changedBy": 6452,
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
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33648500
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "brand",
                "dataType": "link",
                "name": "Бренд",
                "id": "67261624310684962",
                "link": "Brands",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 7,
                "linkIndexFieldSysName": [
                    "moderation_status",
                    "brandName",
                    "owner_id",
                    "id"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": true,
                "indexExists": true,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "category",
                "dataType": "link",
                "name": "Категория",
                "id": "99311624310596554",
                "link": "category",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "color",
                "dataType": "link",
                "name": "Цвет",
                "id": "85091624310580305",
                "link": "colors",
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
                "json": false,
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "decline_reason",
                "dataType": "string",
                "name": "Причина отказа",
                "id": "82001630010018372",
                "link": null,
                "group": "1630009990145",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "description",
                "dataType": "string",
                "name": "Описание",
                "id": "93171624310572841",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "goodSpecification",
                "dataType": "arrayLink",
                "name": "Товарные позиции",
                "id": "16081627942155485",
                "link": "goodSpecification",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 11,
                "linkIndexFieldSysName": [
                    "id"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": true,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "isDeleted",
                "dataType": "boolean",
                "name": "",
                "id": "79241630009759326",
                "link": "",
                "group": "1630009990145",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "isNew",
                "dataType": "boolean",
                "name": "Новый товар",
                "id": "80961624316987394",
                "link": "",
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
                        "Да",
                        "Нет"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "isSale",
                "dataType": "boolean",
                "name": "Распродажа",
                "id": "70721624317005679",
                "link": "",
                "group": "0",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Да",
                        "Нет"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "moderation_status",
                "dataType": "string",
                "name": "new,approved,declined",
                "id": "77881630010002681",
                "link": null,
                "group": "1630009990145",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "name",
                "dataType": "string",
                "name": "Название",
                "id": "90461624310568714",
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "oldPrice",
                "dataType": "number",
                "name": "Старая цена",
                "id": "64811628534783413",
                "link": "",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "photo",
                "dataType": "file",
                "name": "Фото",
                "id": "31701624310616441",
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
                "format": "multipleImages",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "price",
                "dataType": "number",
                "name": "Цена, ₽",
                "id": "74391627677598162",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 10,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryBeauty",
                "dataType": "link",
                "name": "Бьюти, подкатегория",
                "id": "88001624486752931",
                "link": "subcategoryBeauty",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryInterior",
                "dataType": "link",
                "name": "Интерьер, подкатегория",
                "id": "12011624486790587",
                "link": "subcategoryInterior",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryKids",
                "dataType": "link",
                "name": "Детское, подкатегория",
                "id": "35001624486729783",
                "link": "subcategoryKids",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryMen",
                "dataType": "link",
                "name": "Мужское, подкатегория",
                "id": "63351624486661483",
                "link": "subcategoryMen",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "subcategoryWomen",
                "dataType": "link",
                "name": "Женское, подкатегория",
                "id": "54621624486680601",
                "link": "subcategoryWomen",
                "group": "1624486873153",
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
                "typeVariable": {},
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "tags",
                "dataType": "string",
                "name": "Тэги",
                "id": "22641624310590765",
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "vendorCode",
                "dataType": "string",
                "name": "Артикул",
                "id": "51831627942104491",
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
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "quickSearch": "true",
        "httpParams": null
    }

    let authExample = {
        // isAuth: false,
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "manager"
    }

    let exampleForm = {
        "sl": "emailRouter",
        "formName": "Route email",
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
                    },
                    {
                        "fieldSysName": "is_routed_manually",
                        "fetch": [],
                        "sysName": "is_routed_manually",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "rounting_new_project_title",
                        "fetch": [],
                        "sysName": "rounting_new_project_title",
                        "name": "Project title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_project",
                        "fetch": [],
                        "sysName": "routing_project",
                        "name": "Project",
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
                                    "value": "new",
                                    "label": "Create new project"
                                },
                                {
                                    "value": "existing",
                                    "label": "Add to existing project"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_status",
                        "fetch": [],
                        "sysName": "routing_status",
                        "name": "Pipeline stage",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "pipeline_statuses"
                    },
                    {
                        "fieldSysName": "routing_suggested_projects",
                        "fetch": [],
                        "sysName": "routing_suggested_projects",
                        "name": "Suggested projects",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_type",
                        "fetch": [],
                        "sysName": "routing_type",
                        "name": "What is it?",
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
                                    "value": "startup",
                                    "label": "Email from startup founder"
                                },
                                {
                                    "value": "partner",
                                    "label": "Intro email from partner"
                                }
                            ]
                        },
                        "link": ""
                    }
                ],
                "writeFields": [
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
                        "fieldSysName": "is_routed_manually",
                        "fetch": [],
                        "sysName": "is_routed_manually",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "project_id",
                        "fetch": [],
                        "sysName": "project_id",
                        "name": "Project",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "projects"
                    },
                    {
                        "fieldSysName": "rounting_new_project_title",
                        "fetch": [],
                        "sysName": "rounting_new_project_title",
                        "name": "Project title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_project",
                        "fetch": [],
                        "sysName": "routing_project",
                        "name": "Project",
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
                                    "value": "new",
                                    "label": "Create new project"
                                },
                                {
                                    "value": "existing",
                                    "label": "Add to existing project"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_status",
                        "fetch": [],
                        "sysName": "routing_status",
                        "name": "Pipeline stage",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "pipeline_statuses"
                    },
                    {
                        "fieldSysName": "routing_suggested_projects",
                        "fetch": [],
                        "sysName": "routing_suggested_projects",
                        "name": "Suggested projects",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_type",
                        "fetch": [],
                        "sysName": "routing_type",
                        "name": "What is it?",
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
                                    "value": "startup",
                                    "label": "Email from startup founder"
                                },
                                {
                                    "value": "partner",
                                    "label": "Intro email from partner"
                                }
                            ]
                        },
                        "link": ""
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
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "is_routed_manually": {
                        "id": "is_routed_manually",
                        "content": "",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "rounting_new_project_title": {
                        "id": "rounting_new_project_title",
                        "content": "Project title",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routing_project": {
                        "id": "routing_project",
                        "content": "Project",
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
                                    "value": "new",
                                    "label": "Create new project"
                                },
                                {
                                    "value": "existing",
                                    "label": "Add to existing project"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routing_status": {
                        "id": "routing_status",
                        "content": "Pipeline stage",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "pipeline_statuses"
                    },
                    "routing_suggested_projects": {
                        "id": "routing_suggested_projects",
                        "content": "Suggested projects",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routing_type": {
                        "id": "routing_type",
                        "content": "What is it?",
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
                                    "value": "startup",
                                    "label": "Email from startup founder"
                                },
                                {
                                    "value": "partner",
                                    "label": "Intro email from partner"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "project_id": {
                        "id": "project_id",
                        "content": "Project",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "projects"
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": true
                    },
                    "project_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "dropdownProjects"
                    },
                    "is_routed_manually": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": "true"
                    },
                    "rounting_new_project_title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "routing_project": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "required": true
                    },
                    "routing_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": false,
                        "defaultValueOn": true,
                        "defaultValue": "review"
                    },
                    "routing_suggested_projects": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": true
                    },
                    "routing_type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "required": true
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "I step",
                        "fieldIds": [
                            "is_routed_manually",
                            "id",
                            "routing_type",
                            "routing_suggested_projects"
                        ]
                    },
                    "52011642454013850": {
                        "id": "52011642454013850",
                        "title": "Existing",
                        "fieldIds": [
                            "project_id"
                        ],
                        "cond": [
                            {
                                "id": "98611642454078915",
                                "field": "routing_project",
                                "value": "{\"value\":\"existing\"}"
                            }
                        ]
                    },
                    "76631642454161054": {
                        "id": "76631642454161054",
                        "title": "New project",
                        "fieldIds": [
                            "rounting_new_project_title"
                        ],
                        "cond": [
                            {
                                "id": "57471642454174450",
                                "field": "routing_project",
                                "value": "{\"value\":\"new\"}"
                            }
                        ]
                    },
                    "71821642454199155": {
                        "id": "71821642454199155",
                        "title": "Stage",
                        "fieldIds": [
                            "routing_status"
                        ],
                        "cond": [
                            {
                                "id": "38701642454444926",
                                "field": "routing_type",
                                "value": "isNotNull"
                            }
                        ]
                    },
                    "94971642454286022": {
                        "id": "94971642454286022",
                        "title": "II step",
                        "fieldIds": [
                            "routing_project"
                        ],
                        "cond": [
                            {
                                "id": "10241642454300908",
                                "field": "routing_type",
                                "value": "isNotNull"
                            }
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "94971642454286022",
                    "52011642454013850",
                    "76631642454161054",
                    "71821642454199155"
                ]
            },
            "fields": {
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": true
                },
                "project_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "dropdownProjects",
                    "searchData": [
                        {
                            "key": "49ed6857-56f6-4dcb-8f24-963e7fa0b281",
                            "value": "Funspace"
                        },
                        {
                            "key": "72c2db2c-784a-4de8-9264-0d0ac52ac7e1",
                            "value": "Amazon"
                        },
                        {
                            "key": "041154c7-93d1-4911-a630-bfc044438e3b",
                            "value": "Tesla"
                        },
                        {
                            "key": "6050e2ce-264a-432f-955b-df04bf55bc1c",
                            "value": "Google"
                        }
                    ]
                },
                "is_routed_manually": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": "true"
                },
                "rounting_new_project_title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "routing_project": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "required": true
                },
                "routing_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false,
                    "defaultValueOn": true,
                    "defaultValue": "review",
                    "searchData": [
                        {
                            "key": "review",
                            "value": "Review"
                        },
                        {
                            "key": "screening",
                            "value": "Screening"
                        },
                        {
                            "key": "pre-scoring",
                            "value": "Pre-scoring"
                        },
                        {
                            "key": "invest-committee",
                            "value": "Invest Committee"
                        },
                        {
                            "key": "due-dil",
                            "value": "Due diligence"
                        },
                        {
                            "key": "closed",
                            "value": "Closed"
                        },
                        {
                            "key": "trash",
                            "value": "Trash"
                        }
                    ]
                },
                "routing_suggested_projects": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": true
                },
                "routing_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "required": true
                }
            }
        },
        "fileds": [
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "is_routed_manually",
                "dataType": "boolean",
                "name": "",
                "id": "42601642453255552",
                "link": "",
                "group": "1642452982722",
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "project_id",
                "dataType": "link",
                "name": "Project",
                "id": "62851637161178710",
                "link": "projects",
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
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "rounting_new_project_title",
                "dataType": "string",
                "name": "Project title",
                "id": "53171642453217689",
                "link": "",
                "group": "1642452982722",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "routing_project",
                "dataType": "json",
                "name": "Project",
                "id": "41641642453080246",
                "link": "",
                "group": "1642452982722",
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
                            "value": "new",
                            "label": "Create new project"
                        },
                        {
                            "value": "existing",
                            "label": "Add to existing project"
                        }
                    ]
                },
                "groupName": null,
                "typeVariable": {},
                "json": true,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "routing_status",
                "dataType": "link",
                "name": "Pipeline stage",
                "id": "48251642453286164",
                "link": "pipeline_statuses",
                "group": "1642452982722",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "routing_suggested_projects",
                "dataType": "string",
                "name": "Suggested projects",
                "id": "81721642453141376",
                "link": "",
                "group": "1642452982722",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "routing_type",
                "dataType": "json",
                "name": "What is it?",
                "id": "33201642452990143",
                "link": "",
                "group": "1642452982722",
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
                            "value": "startup",
                            "label": "Email from startup founder"
                        },
                        {
                            "value": "partner",
                            "label": "Intro email from partner"
                        }
                    ]
                },
                "groupName": null,
                "typeVariable": {},
                "json": true,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": null,
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