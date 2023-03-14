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
    "sl": "myPlaces",
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
                            "fieldSysName": "country",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
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
                    "name": "Photo",
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
                    "fieldSysName": "status_colour",
                    "fetch": [],
                    "sysName": "status_colour",
                    "name": "",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "status_tech",
                    "fetch": [],
                    "sysName": "status_tech",
                    "name": "",
                    "dataType": "string",
                    "format": "",
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
                }
            ],
            "writeFields": [
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
                    "fieldSysName": "comments",
                    "fetch": [],
                    "sysName": "comments",
                    "name": "Comments",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "comments"
                },
                {
                    "fieldSysName": "country",
                    "fetch": [],
                    "sysName": "country",
                    "name": "Country",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "countries"
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
                    "fieldSysName": "title",
                    "fetch": [],
                    "sysName": "title",
                    "name": "Title",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                }
            ],
            "fields": {
                "city": {
                    "id": "city",
                    "content": "City",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
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
                    "write": true,
                    "read": true,
                    "link": "countries",
                    "actions": []
                },
                "cover_photo": {
                    "id": "cover_photo",
                    "content": "Photo",
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
                    "write": true,
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
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "status_colour": {
                    "id": "status_colour",
                    "content": "",
                    "type": "field",
                    "dataType": "string",
                    "format": "color",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "status_tech": {
                    "id": "status_tech",
                    "content": "",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
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
                    "write": true,
                    "read": true,
                    "link": null,
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
                    "link": "comments",
                    "actions": []
                },
                "action__93921642954571295": {
                    "content": "Resend palce for moderation",
                    "id": "action__93921642954571295",
                    "type": "action",
                    "actions": []
                }
            },
            "fieldParams": {
                "country": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "dropdownsCountry"
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
                    "clickable": false,
                    "displayAsHint": true
                },
                "cover_photo": {
                    "include": false,
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
                },
                "comments": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status_colour": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status_tech": {
                    "include": false,
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
                        "action__93921642954571295",
                        "date_added",
                        "status_text",
                        "title",
                        "country",
                        "id",
                        "city",
                        "location",
                        "description",
                        "photos",
                        "comments",
                        "status_colour",
                        "cover_photo",
                        "status_tech"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": [
                {
                    "sysName": "myPlacesModerationRequest",
                    "id": "93921642954571295",
                    "name": "Resend palce for moderation",
                    "displayAs": "button",
                    "buttonIcon": "refresh",
                    "buttonType": "accent",
                    "dropdown": true,
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
                                "fieldSysName": "place_id",
                                "fetch": [],
                                "sysName": "place_id",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "places"
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "86521642954593628",
                            "target": "place_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "31151642954599490",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "23201642954606655",
                            "target": "field",
                            "value": null,
                            "field": null
                        }
                    ]
                }
            ],
            "cardsOrPage": "card",
            "additionalPath": "",
            "anotherPage": "news/hot"
        },
        "fields": {
            "country": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "quickSearchSL": "dropdownsCountry",
                "searchData": [
                    {
                        "key": "7eba59f2-c0f2-4934-b192-6c3a453aa732",
                        "value": "Anguilla "
                    },
                    {
                        "key": "0dd1e013-fba7-44b8-8388-c6dcae0d64db",
                        "value": "Barbados "
                    },
                    {
                        "key": "7a791d5e-2079-481f-8a7b-9cfd7638744e",
                        "value": "Armenia "
                    },
                    {
                        "key": "0559561c-08b5-43e8-9632-0a96e5e4fee6",
                        "value": "Belarus "
                    },
                    {
                        "key": "897d3d97-e607-4c95-b50c-3ca6de61fb2c",
                        "value": "Antigua & Barbuda "
                    },
                    {
                        "key": "90990d4f-1069-4284-9640-14e8fdb0b5f6",
                        "value": "Bahamas, The "
                    },
                    {
                        "key": "f0f7cb91-5f8f-44b6-bbe6-e26a7c55fcf8",
                        "value": "British Virgin Is. "
                    },
                    {
                        "key": "3c06cb16-511c-4d6d-94a0-71d7097fd1c3",
                        "value": "Burma "
                    },
                    {
                        "key": "cba5bbd2-81b8-4df7-a684-b4431f6069f4",
                        "value": "American Samoa "
                    },
                    {
                        "key": "f548e431-97dd-43d8-bbb1-c7ed923d3490",
                        "value": "Cameroon "
                    },
                    {
                        "key": "39e9dbd3-1858-49e4-adb9-35fe4aa0b341",
                        "value": "Botswana "
                    },
                    {
                        "key": "36e679b5-b3cc-4d67-ba19-e55dfdd4ce0a",
                        "value": "Burkina Faso "
                    },
                    {
                        "key": "92990eb7-b412-49f1-a975-f14154dbe904",
                        "value": "Bangladesh "
                    },
                    {
                        "key": "1c7aba55-b85d-4c5e-9ef2-2f6b2b41cdd0",
                        "value": "Burundi "
                    },
                    {
                        "key": "3ab0e15a-c0ec-41c9-96b8-b77e3333a854",
                        "value": "Cambodia "
                    },
                    {
                        "key": "fec61cf1-3dca-4ddd-bd67-927e762d69d7",
                        "value": "Belgium "
                    },
                    {
                        "key": "49468ac2-198f-4072-859c-caaa553bb75b",
                        "value": "Algeria "
                    },
                    {
                        "key": "01986524-4d2c-4b9b-8cae-6ec3509fc818",
                        "value": "Aruba "
                    },
                    {
                        "key": "295215f3-d6e8-424d-823a-7a2b2d2e133b",
                        "value": "Albania "
                    },
                    {
                        "key": "90cfd7e4-27cd-47e8-bc75-09d0a4bf65fc",
                        "value": "Australia "
                    },
                    {
                        "key": "d40e1af4-9ea0-4f19-8bc9-aeaa5a10356b",
                        "value": "Bulgaria "
                    },
                    {
                        "key": "512bd8a6-09a1-4958-9bdc-f7b350b42308",
                        "value": "Bahrain "
                    },
                    {
                        "key": "b72928a6-d2ce-4591-934b-b5b3743cddac",
                        "value": "Afghanistan "
                    },
                    {
                        "key": "5d46fe8a-b78b-4063-91a8-d7e1b05c629d",
                        "value": "Brazil "
                    },
                    {
                        "key": "bdeb1ec9-78b1-4730-a5c6-7d4e1e7e927d",
                        "value": "Andorra "
                    },
                    {
                        "key": "1b3e4aac-deae-4655-bb19-2c35db2ce6b4",
                        "value": "Bhutan "
                    },
                    {
                        "key": "f05c6983-2658-4bf2-b87b-7edee89184ea",
                        "value": "Azerbaijan "
                    },
                    {
                        "key": "082527d9-6355-4f0c-8dba-ac90232d3201",
                        "value": "Brunei "
                    },
                    {
                        "key": "968faa0b-b028-4d6e-9161-9513053553b4",
                        "value": "Bosnia & Herzegovina "
                    },
                    {
                        "key": "ece18065-098c-4d33-a728-1056d034a955",
                        "value": "Argentina "
                    },
                    {
                        "key": "4ab5b399-26b0-4164-8170-59c463c95965",
                        "value": "Angola "
                    },
                    {
                        "key": "8b01ebc1-93eb-48a3-ab50-31017b7bf178",
                        "value": "Austria "
                    },
                    {
                        "key": "e62279ae-1aba-4102-8a95-7fac4ab4df28",
                        "value": "Bolivia "
                    },
                    {
                        "key": "9560c249-14e0-439c-881e-a8b739fc0aa2",
                        "value": "Belize "
                    },
                    {
                        "key": "5587b396-9037-41c4-b5a5-ca70774a012e",
                        "value": "Bermuda "
                    },
                    {
                        "key": "a77bc516-dd07-4cb7-aa14-4336320e6672",
                        "value": "Benin "
                    },
                    {
                        "key": "a20d7723-1e89-4170-b46e-a77c047317f1",
                        "value": "Canada "
                    },
                    {
                        "key": "9ed1cdae-09c8-4dc9-8987-207d6d592037",
                        "value": "Congo, Dem. Rep. "
                    },
                    {
                        "key": "6e77100e-bdbf-4825-9e89-456fdf766b71",
                        "value": "El Salvador "
                    },
                    {
                        "key": "45030232-1e91-4f69-aa11-661aedd2d681",
                        "value": "Dominican Republic "
                    },
                    {
                        "key": "d0245b8f-61cd-494e-b695-a7ff289f17ea",
                        "value": "Czech Republic "
                    },
                    {
                        "key": "b151bdc1-a20b-4195-be08-5933fcf596e2",
                        "value": "Ghana "
                    },
                    {
                        "key": "28243fa8-cd50-41bc-9806-6fb753181ac5",
                        "value": "Chad "
                    },
                    {
                        "key": "6ea536e3-151e-44f9-8472-b83040730b82",
                        "value": "Central African Rep. "
                    },
                    {
                        "key": "c136e04c-cac5-454e-a949-323dd65cb1c4",
                        "value": "Germany "
                    },
                    {
                        "key": "6ef3aae6-43f3-4ac3-835c-8203eeb449c0",
                        "value": "Equatorial Guinea "
                    },
                    {
                        "key": "86df26d5-dd15-47b8-9a18-43a910913429",
                        "value": "Ecuador "
                    },
                    {
                        "key": "5faa3e90-bc8f-42a7-8bfa-650dd893ff3c",
                        "value": "Cote d'Ivoire "
                    },
                    {
                        "key": "858c7852-811c-42bf-a71f-19e1a9bd227b",
                        "value": "Cook Islands "
                    },
                    {
                        "key": "e39d8caa-cca6-4118-b95e-a8d22c93991d",
                        "value": "Georgia "
                    },
                    {
                        "key": "7ba4b0cc-7c58-41d5-b7b3-2daa271f6b5a",
                        "value": "Estonia "
                    },
                    {
                        "key": "6707f925-e20a-4482-abd1-5c9dce3d56bc",
                        "value": "Costa Rica "
                    },
                    {
                        "key": "712be94a-a868-4d45-9df7-62b74a251cf3",
                        "value": "Finland "
                    },
                    {
                        "key": "b0d601e9-26a7-41a2-81c8-08fc27e7468b",
                        "value": "French Guiana "
                    },
                    {
                        "key": "ebb2e3e4-9268-44d1-9712-d3be7725b8b0",
                        "value": "France "
                    },
                    {
                        "key": "8f0f2a75-ddd1-4d6d-91c2-090943370f5c",
                        "value": "Cayman Islands "
                    },
                    {
                        "key": "b2d08180-a851-4336-a1c1-3458a2c1edbe",
                        "value": "Dominica "
                    },
                    {
                        "key": "d5c7a75b-349c-4ab3-ac37-bd5e8c68be03",
                        "value": "Ethiopia "
                    },
                    {
                        "key": "a28dc121-742a-425f-8709-8d2dfc5a43bf",
                        "value": "Denmark "
                    },
                    {
                        "key": "6edd83dd-1993-4166-8591-43ac115fb063",
                        "value": "Comoros "
                    },
                    {
                        "key": "277a30f9-b68d-46b1-ad7b-b128aee13cfd",
                        "value": "Gambia, The "
                    },
                    {
                        "key": "f0cf2a43-38ff-4088-aece-35abc1ad91df",
                        "value": "Croatia "
                    },
                    {
                        "key": "3672794c-40fd-4b94-8fdc-0c7e6dd9ca0f",
                        "value": "China "
                    },
                    {
                        "key": "b5e68c88-5c55-4dab-83c8-1ca897c98cb8",
                        "value": "Chile "
                    },
                    {
                        "key": "9a2f5dad-5c51-4d97-b9ac-fc8f566ceaba",
                        "value": "Cuba "
                    },
                    {
                        "key": "28bb2b9b-4ab7-4872-b121-7d54577633e6",
                        "value": "Congo, Repub. of the "
                    },
                    {
                        "key": "871f98d2-efc5-480e-99b2-ad5df099be78",
                        "value": "Colombia "
                    },
                    {
                        "key": "73a4b22c-293d-4dd0-b720-e01cc5017a2e",
                        "value": "Cape Verde "
                    },
                    {
                        "key": "ab25ca1d-0faf-4b94-9652-d3c4bd815f0e",
                        "value": "Greenland "
                    },
                    {
                        "key": "b26b542d-3391-4784-888e-b7319942e518",
                        "value": "Eritrea "
                    },
                    {
                        "key": "c8c9dd9f-a3fe-4c9f-816e-1a0cab89456e",
                        "value": "Guernsey "
                    },
                    {
                        "key": "de84a271-4485-46da-8630-90a4552c1660",
                        "value": "Djibouti "
                    },
                    {
                        "key": "77215cf5-b3a2-46e2-92cf-97184390b368",
                        "value": "Gaza Strip "
                    },
                    {
                        "key": "54325f64-38fd-4557-a523-93cad68abdcd",
                        "value": "Egypt "
                    },
                    {
                        "key": "8d46df6d-11bd-4a4a-9aea-9d588a868aa2",
                        "value": "French Polynesia "
                    },
                    {
                        "key": "9ce3b4ed-e136-4f38-8987-5826c355ab2a",
                        "value": "Faroe Islands "
                    },
                    {
                        "key": "1ada0c6c-ae42-4ea6-a699-402708abe6c0",
                        "value": "Gabon "
                    },
                    {
                        "key": "c1b387cd-56da-48b5-9b37-85d67e9623d5",
                        "value": "Cyprus "
                    },
                    {
                        "key": "954204ef-d1cd-4d6f-8826-14533671a1a7",
                        "value": "Fiji "
                    },
                    {
                        "key": "3c33c693-c892-43c2-add6-fd206fcde7aa",
                        "value": "East Timor "
                    },
                    {
                        "key": "424ed46f-d09b-4b1c-8265-7e813ed8db2f",
                        "value": "Madagascar "
                    },
                    {
                        "key": "c854035a-b654-4125-af15-50b10d5760bf",
                        "value": "Sao Tome & Principe "
                    },
                    {
                        "key": "aa42943f-d211-42b0-824b-c3a7f4669d1d",
                        "value": "Guinea-Bissau "
                    },
                    {
                        "key": "d39615ff-a51e-43ec-8c09-8d5f1e899b12",
                        "value": "Korea, South "
                    },
                    {
                        "key": "6010c69e-353c-49a6-a8d6-7ffced3e07e9",
                        "value": "Tonga "
                    },
                    {
                        "key": "e65e9589-cc84-4f17-8f8e-c004a0d38d0a",
                        "value": "Russia "
                    },
                    {
                        "key": "40f32ac6-68d4-4317-acc6-351d9969b02e",
                        "value": "Panama "
                    },
                    {
                        "key": "9a0ad895-4d56-4eb3-ba1b-23d39807ae97",
                        "value": "Mauritius "
                    },
                    {
                        "key": "51e4c08a-5f8d-45c7-8869-b97a21f77f01",
                        "value": "Oman "
                    },
                    {
                        "key": "d4a98af3-2525-4e47-9246-bbcf04f359ac",
                        "value": "Ireland "
                    },
                    {
                        "key": "9c3e1e1e-4fc5-4b9e-bbbf-fe13cffa3b4f",
                        "value": "Guyana "
                    },
                    {
                        "key": "83238253-5b5f-4f4c-b961-adbf8cd774c5",
                        "value": "St Pierre & Miquelon "
                    },
                    {
                        "key": "6568f243-56ad-465a-8f41-28277d6f0393",
                        "value": "Norway "
                    },
                    {
                        "key": "b0798918-da18-4ddd-8404-7dbe5aad1c7b",
                        "value": "Greece "
                    },
                    {
                        "key": "70b9742f-e313-4292-8752-8757df05fcac",
                        "value": "Morocco "
                    },
                    {
                        "key": "309839ad-ed9e-4f24-b3e0-de569736a1e9",
                        "value": "Korea, North "
                    },
                    {
                        "key": "76ca1466-a1f4-4f01-a825-ecbe12bf213e",
                        "value": "Switzerland "
                    },
                    {
                        "key": "78aae202-3c69-4719-bb43-20fbc83057b7",
                        "value": "Monaco "
                    },
                    {
                        "key": "d57a64c8-e390-4f4c-9281-d436670f91f3",
                        "value": "Grenada "
                    },
                    {
                        "key": "478a68e6-f7ef-49bc-a2fe-8b2eea3d7c4a",
                        "value": "Yemen "
                    },
                    {
                        "key": "ff69e3bb-5e2e-4fcf-8117-93925710cec8",
                        "value": "Singapore "
                    },
                    {
                        "key": "8f1081a9-0ab2-4b50-9ac2-388fa9ecd2fd",
                        "value": "Reunion "
                    },
                    {
                        "key": "4f817da0-4822-4c32-be48-ff294da0371b",
                        "value": "United Kingdom "
                    },
                    {
                        "key": "93c6a814-d76f-440a-bb08-a380d0232c59",
                        "value": "Seychelles "
                    },
                    {
                        "key": "593fc567-98d7-4e0f-9704-38b9159288a6",
                        "value": "Netherlands Antilles "
                    },
                    {
                        "key": "4429dfb5-41fa-4281-bb3c-a68a37295e73",
                        "value": "Thailand "
                    },
                    {
                        "key": "e882b807-c0c8-4c67-a433-0fc1ba1749c3",
                        "value": "Tuvalu "
                    },
                    {
                        "key": "dd439631-ceef-4e1f-9d26-f090e3c726d6",
                        "value": "Romania "
                    },
                    {
                        "key": "68d4777b-4d45-4137-aa31-2a22bbfba0bb",
                        "value": "United Arab Emirates "
                    },
                    {
                        "key": "603ef1ab-45ab-44ac-8594-df16183e99b2",
                        "value": "Turks & Caicos Is "
                    },
                    {
                        "key": "2b3b738c-6953-48b6-b1bb-93d109ce0446",
                        "value": "Zimbabwe "
                    },
                    {
                        "key": "842f0f0b-fbe2-46d8-974c-dbad7a4b9fad",
                        "value": "Italy "
                    },
                    {
                        "key": "adf59ab0-54bf-45e3-9e73-9bd1ebb24a5a",
                        "value": "Western Sahara "
                    },
                    {
                        "key": "2a2fc8c8-2459-4a82-a9d8-b6f622487b85",
                        "value": "Kuwait "
                    },
                    {
                        "key": "35fd2568-b016-4637-982f-655a50fef30e",
                        "value": "Iran "
                    },
                    {
                        "key": "d9696e53-4195-4476-b786-55a1a97400e3",
                        "value": "United States "
                    },
                    {
                        "key": "8f797d83-f2a3-4ecc-bd90-dda89f9d0916",
                        "value": "Gibraltar "
                    },
                    {
                        "key": "7da89d85-82d7-4699-ac4b-e1050f4274bd",
                        "value": "Marshall Islands "
                    },
                    {
                        "key": "734e3600-5659-4010-924e-1f25370c58f8",
                        "value": "Syria "
                    },
                    {
                        "key": "1990e503-9f4b-412b-8398-a06159139a50",
                        "value": "Netherlands "
                    },
                    {
                        "key": "81adf74a-eaaa-4406-b4d0-646f66a470b7",
                        "value": "Turkmenistan "
                    },
                    {
                        "key": "e8f18cf6-6631-4132-8aa8-532cddcc05e8",
                        "value": "Israel "
                    },
                    {
                        "key": "c4c254f7-0e7a-48af-9751-4a83e2598080",
                        "value": "Montserrat "
                    },
                    {
                        "key": "c952ec2b-a9ab-4549-a7f4-283ebe13c5a8",
                        "value": "Qatar "
                    },
                    {
                        "key": "a43c21e3-921a-4cd2-9983-3153be58fabe",
                        "value": "Slovakia "
                    },
                    {
                        "key": "afbf0a8b-2c89-4072-97eb-098164b50d6f",
                        "value": "Kenya "
                    },
                    {
                        "key": "f52adddb-3bc9-45d7-98b2-2a3b65cf6fd2",
                        "value": "Hong Kong "
                    },
                    {
                        "key": "1a7a8391-846f-4f74-a633-4eb3e69b90bf",
                        "value": "Honduras "
                    },
                    {
                        "key": "029944d9-0450-4ce8-88fc-1f7e678978c4",
                        "value": "N. Mariana Islands "
                    },
                    {
                        "key": "4c3a82f2-569a-44cb-83d7-27d85d62fdc3",
                        "value": "West Bank "
                    },
                    {
                        "key": "e89a5e35-6940-4065-9ee7-aa9f79328de9",
                        "value": "Namibia "
                    },
                    {
                        "key": "0c1f0fc7-6a49-4a2a-aa74-fb9cf1db6ce2",
                        "value": "Guatemala "
                    },
                    {
                        "key": "c4f15fda-4d13-4ea5-bb89-ed31fbe7db2a",
                        "value": "Indonesia "
                    },
                    {
                        "key": "cdb68247-e6d9-4139-863a-db840540645d",
                        "value": "Trinidad & Tobago "
                    },
                    {
                        "key": "659cef6b-2141-41f2-bd77-4e66df9700af",
                        "value": "Rwanda "
                    },
                    {
                        "key": "2fc8dba7-9a2d-4c66-955b-75c66cfa085f",
                        "value": "Nauru "
                    },
                    {
                        "key": "3b747e87-4700-44e7-b484-f5054703e119",
                        "value": "Moldova "
                    },
                    {
                        "key": "89688dd0-c128-4fff-ab10-a8ac3145217a",
                        "value": "Latvia "
                    },
                    {
                        "key": "2cc2c3f9-4440-487a-bafe-5a4597304dc4",
                        "value": "Kazakhstan "
                    },
                    {
                        "key": "89d36e24-6e7e-4fd3-a275-f1cc073b13bc",
                        "value": "Somalia "
                    },
                    {
                        "key": "7266fe46-9c94-4427-93d7-5db822051308",
                        "value": "Virgin Islands "
                    },
                    {
                        "key": "c3735d0b-c183-420f-aa81-4cb28693612d",
                        "value": "Jordan "
                    },
                    {
                        "key": "3bc327f5-8d36-49d1-a4ed-faf3230328fe",
                        "value": "Paraguay "
                    },
                    {
                        "key": "d37c95f5-b0c5-4f44-b77b-22893597afb7",
                        "value": "Venezuela "
                    },
                    {
                        "key": "c4254be1-2c67-4114-9801-340ef8e5afeb",
                        "value": "India "
                    },
                    {
                        "key": "9150af17-8ae4-46d6-a426-498dcb3b57a0",
                        "value": "Wallis and Futuna "
                    },
                    {
                        "key": "b50c904d-30e9-48d4-8bb4-218ef98ad03d",
                        "value": "Kiribati "
                    },
                    {
                        "key": "cebc4050-1bb5-48c1-b695-ad0ea99127b0",
                        "value": "Liberia "
                    },
                    {
                        "key": "11d71d3e-3f46-4c96-9d1c-8a70ae68d9f9",
                        "value": "Guadeloupe "
                    },
                    {
                        "key": "c48fe321-3fc4-44cb-a290-cf7ba449b40e",
                        "value": "Jersey "
                    },
                    {
                        "key": "cb2412fb-d437-43f2-8198-b6db39eb7eb0",
                        "value": "Tanzania "
                    },
                    {
                        "key": "f3b3b0be-444e-41ed-b0df-bc0b4f289a51",
                        "value": "Taiwan "
                    },
                    {
                        "key": "08615e32-be56-4e5b-985a-edd7260b1fda",
                        "value": "South Africa "
                    },
                    {
                        "key": "457847f8-2bd6-4da5-a45e-1651ab7aef74",
                        "value": "Haiti "
                    },
                    {
                        "key": "c19213ae-f88c-420b-84bc-255d693d2a12",
                        "value": "Vietnam "
                    },
                    {
                        "key": "4c074fe2-ee7f-4fc3-9eeb-7f8150475dc8",
                        "value": "New Zealand "
                    },
                    {
                        "key": "e70978bf-a573-45de-895c-a921271b0430",
                        "value": "Solomon Islands "
                    },
                    {
                        "key": "c550defa-15ad-4152-bbd4-d4e0cc803b74",
                        "value": "Mayotte "
                    },
                    {
                        "key": "5506d5b8-b760-49c3-9d87-a65c31b478cf",
                        "value": "Sweden "
                    },
                    {
                        "key": "660ae920-c0fe-44e7-bebf-602d2b76266f",
                        "value": "Sudan "
                    },
                    {
                        "key": "405f1087-064d-47d0-8e95-2e7f3182d50d",
                        "value": "Luxembourg "
                    },
                    {
                        "key": "f5de410e-7848-41a4-b327-8958922e1768",
                        "value": "Kyrgyzstan "
                    },
                    {
                        "key": "44f68eb8-39d7-4700-a87c-9ecac58c5ccf",
                        "value": "Laos "
                    },
                    {
                        "key": "f752e571-98d3-47f4-b098-7a5ed5283fe3",
                        "value": "Jamaica "
                    },
                    {
                        "key": "39d990ee-273e-408f-afd0-42a43b5484f8",
                        "value": "Malaysia "
                    },
                    {
                        "key": "f656f4f7-c72a-43a0-8168-6df274b23582",
                        "value": "Swaziland "
                    },
                    {
                        "key": "51369524-6b95-44a2-8746-30352f41301e",
                        "value": "Liechtenstein "
                    },
                    {
                        "key": "22237abb-c49c-4e0e-9a75-808f87d6c2d4",
                        "value": "Malawi "
                    },
                    {
                        "key": "403c564a-af31-464a-ae51-1680c75bb634",
                        "value": "Saudi Arabia "
                    },
                    {
                        "key": "808a1ab7-d7fb-4dae-a367-c208eb5ee423",
                        "value": "Tajikistan "
                    },
                    {
                        "key": "e0d1e459-ff24-4748-8dfa-25f19bd66333",
                        "value": "New Caledonia "
                    },
                    {
                        "key": "1a5c7c9d-93e0-4541-bcf5-b07161125278",
                        "value": "Guam "
                    },
                    {
                        "key": "ae2fde97-62f6-4472-9a5f-b24113ce5617",
                        "value": "Slovenia "
                    },
                    {
                        "key": "f4033e92-b29e-4702-bb74-fb687f9b52b2",
                        "value": "Nicaragua "
                    },
                    {
                        "key": "c56bf147-1a0c-4300-9eec-be2f5771850e",
                        "value": "Libya "
                    },
                    {
                        "key": "830ed214-0315-48ec-8ba7-6d5eaa909a42",
                        "value": "Zambia "
                    },
                    {
                        "key": "04202e75-a193-43d4-bc64-0a807dfd8ec0",
                        "value": "Puerto Rico "
                    },
                    {
                        "key": "77c8a084-3cc3-4385-b414-c5ab54b0471e",
                        "value": "Saint Lucia "
                    },
                    {
                        "key": "54aae260-c6fe-49aa-8d54-6eafa1144377",
                        "value": "Hungary "
                    },
                    {
                        "key": "7cdc6251-ff57-4f79-8f01-8abd8f31e123",
                        "value": "Malta "
                    },
                    {
                        "key": "c8e1de5c-43e3-49df-a3b4-e8d134703c96",
                        "value": "Turkey "
                    },
                    {
                        "key": "753f313e-42b6-4c1c-aafe-799bdaf3c130",
                        "value": "Iceland "
                    },
                    {
                        "key": "2f29e307-102d-4bad-951a-835cccd2f5aa",
                        "value": "Togo "
                    },
                    {
                        "key": "ed5fd5d1-f97e-431b-a0c2-4773985e8916",
                        "value": "Lesotho "
                    },
                    {
                        "key": "39382fbc-d9b3-438b-bb8d-f181d5e4f778",
                        "value": "Isle of Man "
                    },
                    {
                        "key": "adcae903-4e48-4b98-a8dd-f6dd40e479bd",
                        "value": "Sierra Leone "
                    },
                    {
                        "key": "000542eb-6b86-4413-b278-8788876555a9",
                        "value": "Samoa "
                    },
                    {
                        "key": "ec7aaa85-13f4-4cbf-ac3c-c3b7294c6bd8",
                        "value": "Tunisia "
                    },
                    {
                        "key": "2fdbc7f4-2405-48b1-b8d5-ac6704b91875",
                        "value": "Lithuania "
                    },
                    {
                        "key": "bee81406-6f3b-431f-bf0a-01e47d1ca4d7",
                        "value": "Serbia "
                    },
                    {
                        "key": "176fe39c-6ef6-4d5a-957d-49e3ab9973c4",
                        "value": "Philippines "
                    },
                    {
                        "key": "a3ccc1df-988f-47c6-ae46-ba5be024bfb7",
                        "value": "Saint Helena "
                    },
                    {
                        "key": "f31a7dd7-d54f-4e02-805a-25fe44bb6bb7",
                        "value": "Macau "
                    },
                    {
                        "key": "e475dcc2-3581-41f5-97fd-877cdb11382c",
                        "value": "Martinique "
                    },
                    {
                        "key": "db388080-e802-4c0b-8009-19bd062b633c",
                        "value": "Micronesia, Fed. St. "
                    },
                    {
                        "key": "36fe5904-38fd-4fc8-bb64-6a34cffd91b4",
                        "value": "Spain "
                    },
                    {
                        "key": "e16f17f6-4f94-451d-bde7-f84235ab00c4",
                        "value": "Papua New Guinea "
                    },
                    {
                        "key": "c67a9a8b-6ba3-4aba-ac00-eac8ece9ca7d",
                        "value": "Sri Lanka "
                    },
                    {
                        "key": "b59aaf3c-8a52-43aa-9d51-2419d1736aaf",
                        "value": "Uzbekistan "
                    },
                    {
                        "key": "a52f5476-07f2-4b9a-83f3-258988a4ded6",
                        "value": "Nepal "
                    },
                    {
                        "key": "6add7a77-29c6-4939-9e14-d1a43f5a352d",
                        "value": "Niger "
                    },
                    {
                        "key": "c3e6496b-9c3a-4681-be98-735bb735f4fd",
                        "value": "Saint Kitts & Nevis "
                    },
                    {
                        "key": "e96e96db-df20-46bf-91c9-acfb93697477",
                        "value": "Pakistan "
                    },
                    {
                        "key": "8397ccc6-0dee-4f03-8f38-868ea5779fe1",
                        "value": "Mozambique "
                    },
                    {
                        "key": "426b81b9-e2b0-472d-9bd8-f030bd16b0ed",
                        "value": "San Marino "
                    },
                    {
                        "key": "afed4640-3b88-4216-8483-5e11f4147376",
                        "value": "Macedonia "
                    },
                    {
                        "key": "f8c39dd6-29b1-499d-b40a-9e0bd2aa3270",
                        "value": "Nigeria "
                    },
                    {
                        "key": "7d96048f-4ae0-4a79-8a17-9a846fb01f80",
                        "value": "Guinea "
                    },
                    {
                        "key": "4f656a90-d7bf-4079-972e-781c5d253117",
                        "value": "Poland "
                    },
                    {
                        "key": "3c25c4ca-eef7-488d-acd3-3ff9267a6f4a",
                        "value": "Senegal "
                    },
                    {
                        "key": "33c5cbb7-aa9b-417f-8216-e01a125f2e47",
                        "value": "Iraq "
                    },
                    {
                        "key": "89f8c9c8-611b-4ff2-a511-625b10983798",
                        "value": "Japan "
                    },
                    {
                        "key": "74d85799-6cf7-4d23-963d-059efb38dda5",
                        "value": "Vanuatu "
                    },
                    {
                        "key": "5c72d80f-eb44-486d-88f1-5c7680929888",
                        "value": "Mauritania "
                    },
                    {
                        "key": "4623de8c-9404-4fb4-a4af-2339089c9249",
                        "value": "Portugal "
                    },
                    {
                        "key": "d2f07845-2beb-400e-b9cc-a255020c65dd",
                        "value": "Uruguay "
                    },
                    {
                        "key": "9f01d014-b95c-47bc-8530-12a1a33ed58a",
                        "value": "Maldives "
                    },
                    {
                        "key": "a3ca32fb-7c81-443f-ad31-4f60a2b02360",
                        "value": "Suriname "
                    },
                    {
                        "key": "b8d4f323-b2f1-4eca-96bf-eb8901cd081a",
                        "value": "Mali "
                    },
                    {
                        "key": "ef873938-c19e-4a8f-b81a-7a945d40c7d5",
                        "value": "Palau "
                    },
                    {
                        "key": "50bb27ea-c06e-44dd-8e22-83ce9da7a0f2",
                        "value": "Peru "
                    },
                    {
                        "key": "82cd7c02-426d-4552-a452-adba0a6d8240",
                        "value": "Mexico "
                    },
                    {
                        "key": "c08c5496-c658-42f8-b917-fefa415c4fc6",
                        "value": "Uganda "
                    },
                    {
                        "key": "6429032d-bfa4-4225-81a1-d3f4dee34eb0",
                        "value": "Mongolia "
                    },
                    {
                        "key": "81fe0405-d8cf-4e8c-8115-356a2de1773d",
                        "value": "Saint Vincent and the Grenadines "
                    },
                    {
                        "key": "2a193ee8-0a0f-420c-86a9-08c1bd5289d6",
                        "value": "Lebanon "
                    },
                    {
                        "key": "657d01a7-040b-4d06-867e-fa03d2b5797e",
                        "value": "Ukraine "
                    }
                ]
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
                "clickable": false,
                "displayAsHint": true
            },
            "cover_photo": {
                "include": false,
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
            },
            "comments": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "status_colour": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "status_tech": {
                "include": false,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "cardHeaderComment": "country",
        "cardImage": true,
        "cardImageField": "cover_photo",
        "cardImageType": "leftCircle",
        "cardImageSize": 150,
        "cardImageSizeHeight": 150,
        "cardBodyText": "status_text",
        "cardCoverHeight": 180,
        "cardColor": "status_colour",
        "showCounter": false,
        "counterField": null,
        "counterText": null,
        "cardBodyTextLength": 80,
        "cardListLayout": "looseGrid",
        "cardColorOption": "fill",
        "actions": [
            {
                "sysName": "myPlacesModerationRequest",
                "id": "93921642954571295",
                "name": "Resend palce for moderation",
                "displayAs": "button",
                "buttonIcon": "refresh",
                "buttonType": "accent",
                "dropdown": true,
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
                            "fieldSysName": "place_id",
                            "fetch": [],
                            "sysName": "place_id",
                            "name": "",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "places"
                        },
                        {
                            "fieldSysName": "user_id",
                            "fetch": [],
                            "sysName": "user_id",
                            "name": "",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "WebUser"
                        }
                    ]
                },
                "formMapping": [
                    {
                        "id": "86521642954593628",
                        "target": "place_id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "31151642954599490",
                        "target": "user_id",
                        "type": "user",
                        "value": null
                    }
                ],
                "conditionals": [
                    {
                        "id": "23201642954606655",
                        "target": "field",
                        "value": "decline",
                        "field": "status_tech",
                        "fieldValue": "approved"
                    }
                ]
            }
        ]
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "cover_photo",
            "name": "Photo",
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status_colour",
            "name": "",
            "dataType": "string",
            "id": "68821642952059623",
            "link": "",
            "group": "1641826735668",
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
            "format": "color",
            "formatOptions": null,
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "status_tech",
            "name": "",
            "dataType": "string",
            "id": "98021641826741872",
            "link": "",
            "group": "1641826735668",
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
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
    "data": [
        {
            "city": "Moscow",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/76dae0f7-7bdd-4aeb-920c-dc8417827c54.jpeg",
            "location": "{\n   \"data\": [\n      {\n         \"id\": 1642151991953,\n         \"latitude\": 55.75166273629019,\n         \"longitude\": 37.61742228272211,\n         \"title\": \"The Kremlin\",\n         \"image\": \"https://api.demo.directual.com/fileUploaded/showcase-attractions/76dae0f7-7bdd-4aeb-920c-dc8417827c54.jpeg\"\n      }\n   ]\n}",
            "description": "The Moscow Kremlin, or simply the Kremlin, is a fortified complex in the center of Moscow founded by Russian ruling dynasty of Rurikids. It is the best known of the kremlins (Russian citadels), and includes five palaces, four cathedrals, and the enclosing Kremlin Wall with Kremlin towers. In addition, within this complex is the Grand Kremlin Palace that was formerly the Tsar's Moscow residence. The complex now serves as the official residence of the President of the Russian Federation and as a museum with almost 3 million visitors in 2017. The Kremlin overlooks the Moskva River to the south, Saint Basil's Cathedral and Red Square to the east, and the Alexander Garden to the west.",
            "country": {
                "country": "Russia ",
                "id": "e65e9589-cc84-4f17-8f8e-c004a0d38d0a"
            },
            "id": "2014b9d2-37ce-4cf4-a9cf-da7a5fb55be7",
            "status_tech": "approved",
            "date_added": 1642152490000,
            "title": "Kremlin",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/76dae0f7-7bdd-4aeb-920c-dc8417827c54.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/7763d380-e5ee-469e-b4de-4796081b7305.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/17ab2d4c-b6a7-4913-9b4e-5ecf52ecdd36.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "San Francisco",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/db912f07-ad20-4cd3-834d-d42297ea4a4e.jpeg",
            "location": "{\"data\":[{\"id\":1642493506487,\"latitude\":37.812910745215206,\"longitude\":-122.47533814453163,\"title\":\"Golden Gate Bridge\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/e44089e4-b1c7-4fbe-bb3f-cf5db80cfc48.jpeg\"}]}",
            "description": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.",
            "country": {
                "country": "United States ",
                "id": "d9696e53-4195-4476-b786-55a1a97400e3"
            },
            "id": "a10d94e4-cd9f-4ff3-8f0d-ff534a132070",
            "status_tech": "approved",
            "date_added": 1642493625000,
            "title": "Golden Gate Bridge",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/db912f07-ad20-4cd3-834d-d42297ea4a4e.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/9ad7668f-7ddc-4743-a64e-5f6ef427b322.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "Agra",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/ac20a9aa-5c20-470a-a83c-10b4cd009664.jpeg",
            "location": "{\"data\":[{\"id\":1642493890105,\"latitude\":27.17479612600225,\"longitude\":78.04218476292756,\"title\":\"Taj Mahal\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/4c8ba692-b37c-4aaf-b754-555b852f11d8.jpeg\"}]}",
            "description": "The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
            "country": {
                "country": "India ",
                "id": "c4254be1-2c67-4114-9801-340ef8e5afeb"
            },
            "id": "febebefe-bbaf-4246-a291-e287a647481d",
            "status_tech": "approved",
            "date_added": 1642494017000,
            "title": "Taj Mahal",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/ac20a9aa-5c20-470a-a83c-10b4cd009664.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "Zlatoust",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/efd3557d-7984-40ed-9a52-11d33a4d0fd7.jpeg",
            "location": "{\"data\":[{\"id\":1642938446978,\"latitude\":55.223328720561156,\"longitude\":59.75089048464596,\"title\":\"New Marker\"}]}",
            "description": "Taganay is a group of mountain ridges in the Southern Urals, on the territory of Chelyabinsk Oblast, with the highest point rising 1178 m. above sea level. Taganay National Park was established in 1991, with its south-western border reaching down to the outskirts of Zlatoust.",
            "country": {
                "country": "Russia ",
                "id": "e65e9589-cc84-4f17-8f8e-c004a0d38d0a"
            },
            "id": "48cb77e5-9ae5-4e88-bb56-81310c7a38cd",
            "status_tech": "approved",
            "date_added": 1642938612000,
            "title": "Taganai",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/efd3557d-7984-40ed-9a52-11d33a4d0fd7.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/dad40ddd-25bb-415b-b95f-d87d030c2aaf.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/8336e513-1322-49d1-9c66-20dbb61fae42.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "Murmansk region",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/fb8d6f79-1327-4535-8665-856f4d334b99.jpeg",
            "location": "{\"data\":[{\"id\":1642949052007,\"latitude\":69.15690754826674,\"longitude\":35.13776632663309,\"title\":\"Teriberka\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/15db93fa-e4f1-4706-b2c9-135ff9e32f55.jpeg\"}]}",
            "description": "Teriberka is a rural locality in Kolsky District of Murmansk Oblast, Russia, located on the Barents Sea coast, at the mouth of the river Teriberka.",
            "country": {
                "country": "Russia ",
                "id": "e65e9589-cc84-4f17-8f8e-c004a0d38d0a"
            },
            "id": "47c12817-939b-4f49-b59a-f052997168bd",
            "status_tech": "approved",
            "date_added": 1642949223000,
            "title": "Teriberka",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/fb8d6f79-1327-4535-8665-856f4d334b99.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/8821b363-862c-4833-8adf-1e49b307d03c.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/51540242-bc5a-401e-aeb3-861e830818ab.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/909b4535-cc30-4e83-98a4-e3882dacf519.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "Rome",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/26954173-98d6-4421-b81f-7a7f279c9c69.jpeg",
            "location": "{\"data\":[{\"id\":1642950520927,\"latitude\":41.89001058541262,\"longitude\":12.492440868878703,\"title\":\"The Colosseum\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/dbd99301-4e65-4d53-a988-b96f1ce3653e.jpeg\"}]}",
            "description": "The Colosseum is an amphitheatre built in Rome under the Flavian emperors of the Roman Empire. It is also called the Flavian Amphitheatre. It is an elliptical structure made of stone, concrete, and tuff, and it stands four stories tall at its highest point. ... The Colosseum was famously used for gladiatorial combat.",
            "country": {
                "country": "Italy ",
                "id": "842f0f0b-fbe2-46d8-974c-dbad7a4b9fad"
            },
            "id": "3d8c9bb8-d435-4ecf-935f-3efbc1403766",
            "status_tech": "approved",
            "date_added": 1642950591000,
            "title": "The Colosseum",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/26954173-98d6-4421-b81f-7a7f279c9c69.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/14c4b0e3-2ac9-4cc0-8691-ceae22a07af2.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/f89e5503-d6b2-4596-860b-cda4e32a9486.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "New York",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/web/f0cb734f-d89a-4500-95ab-a72f1cc462b2.jpeg",
            "location": "{\"data\":[{\"id\":1642954986433,\"latitude\":40.68860418592705,\"longitude\":-74.0436259276049,\"title\":\"Statue of Liberty\",\"image\":\"https://api.directual.com/fileUploaded/showcase-attractions/web/f0cb734f-d89a-4500-95ab-a72f1cc462b2.jpeg\"}]}",
            "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.",
            "country": {
                "country": "United States ",
                "id": "d9696e53-4195-4476-b786-55a1a97400e3"
            },
            "id": "5d96262f-22f1-4963-823e-79d36dd3d2c1",
            "status_tech": "approved",
            "date_added": 1642955067000,
            "title": "Statue of Liberty",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/web/f0cb734f-d89a-4500-95ab-a72f1cc462b2.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/web/d5a97711-02b5-4a06-b091-07f3b9ae5b86.webp",
                "https://api.directual.com/fileUploaded/showcase-attractions/web/2f8f6c0d-5379-4c28-96f7-7c838fb0eb4a.jpeg"
            ],
            "comments": ""
        },
        {
            "city": "Giza",
            "cover_photo": "https://api.directual.com/fileUploaded/showcase-attractions/7f61f462-1196-431c-8980-aebd9f0bbd7d.jpeg",
            "location": "{\"data\":[{\"id\":1642959204197,\"latitude\":29.97349296083553,\"longitude\":31.130483612165225,\"title\":\"New Marker\"}]}",
            "description": "The pyramids of Giza were royal tombs built for three different pharaohs. The northernmost and oldest pyramid of the group was built for Khufu (Greek: Cheops), the second king of the 4th dynasty. Called the Great Pyramid, it is the largest of the three.",
            "country": {
                "country": "Egypt ",
                "id": "54325f64-38fd-4557-a523-93cad68abdcd"
            },
            "id": "915659c4-0335-499f-8658-3ee11cc387dc",
            "status_tech": "approved",
            "date_added": 1642959301000,
            "title": "Pyramids of Giza",
            "photos": [
                "https://api.directual.com/fileUploaded/showcase-attractions/7f61f462-1196-431c-8980-aebd9f0bbd7d.jpeg",
                "https://api.directual.com/fileUploaded/showcase-attractions/d34773c4-0794-4d92-aecc-d897f5771e4e.jpeg"
            ],
            "comments": ""
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "city",
            99189648
        ],
        [
            "country.country",
            99189649
        ],
        [
            "country.id",
            99189649
        ],
        [
            "cover_photo",
            99189648
        ],
        [
            "date_added",
            99189648
        ],
        [
            "description",
            99189648
        ],
        [
            "id",
            99189648
        ],
        [
            "location",
            99189648
        ],
        [
            "photos",
            99189648
        ],
        [
            "status_colour",
            99189648
        ],
        [
            "status_tech",
            99189648
        ],
        [
            "status_text",
            99189648
        ],
        [
            "title",
            99189648
        ]
    ],
    "writeFields": [
        "city",
        "comments",
        "country",
        "description",
        "id",
        "location",
        "photos",
        "title"
    ],
    "structures": {
        "99189648": {
            "networkID": 16223,
            "id": 99189648,
            "dateCreated": "2022-01-08T14:03:51Z",
            "hidden": false,
            "dateHidden": null,
            "name": "places",
            "sysName": "places",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"23661641650882991\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"26441641653412664\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"location\",\"name\":\"Location\",\"dataType\":\"json\",\"id\":\"52631641650922797\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"mapToken\":\"pk.eyJ1IjoiZGlyZWN0dWFsIiwiYSI6ImNreTV3c3JuZTBsOHYydnMxc3V2dTE4OGcifQ.nuD1tu1jrhNUSqjPxkgL7g\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"mapColour\":\"mapbox://styles/mapbox/satellite-streets-v11\"},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"link\",\"id\":\"80991641653434894\",\"link\":\"countries\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"city\",\"name\":\"City\",\"dataType\":\"string\",\"id\":\"90041641825822801\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"photos\",\"name\":\"Photos\",\"dataType\":\"file\",\"id\":\"79351641825831881\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cover_photo\",\"name\":\"Photo\",\"dataType\":\"file\",\"id\":\"60961642179138344\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"user_added_id\",\"name\":\"Who added\",\"dataType\":\"link\",\"id\":\"18871641825848857\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"filter\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"comments\",\"name\":\"Comments\",\"dataType\":\"arrayLink\",\"id\":\"48571641825870889\",\"link\":\"comments\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"users_been_ids\",\"name\":\"Who've been to\",\"dataType\":\"arrayLink\",\"id\":\"95261641826785310\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"array\":false},{\"sysName\":\"date_added\",\"name\":\"Date added\",\"dataType\":\"date\",\"id\":\"37941642152276364\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status_tech\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"98021641826741872\",\"link\":\"\",\"group\":\"1641826735668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status_text\",\"name\":\"Status\",\"dataType\":\"string\",\"id\":\"41721641826754571\",\"link\":\"\",\"group\":\"1641826735668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status_colour\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"68821642952059623\",\"link\":\"\",\"group\":\"1641826735668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Moderation\",\"id\":1641826735668,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-01-23T15:34:29Z",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33742133
        },
        "99189649": {
            "networkID": 16223,
            "id": 99189649,
            "dateCreated": "2022-01-08T14:04:01Z",
            "hidden": false,
            "dateHidden": null,
            "name": "countries",
            "sysName": "countries",
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"25971641653132473\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"region\",\"name\":\"Region\",\"dataType\":\"string\",\"id\":\"65461641653132949\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"population\",\"name\":\"Population\",\"dataType\":\"number\",\"id\":\"22771641653133504\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"area\",\"name\":\"Area, sq. mi.\",\"dataType\":\"number\",\"id\":\"71951641653134009\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            "objectIDSysName": "id",
            "folderId": 33742133
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": [
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        },
        {
            "sysName": "comments",
            "name": "Comments",
            "dataType": "arrayLink",
            "id": "48571641825870889",
            "link": "comments",
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
            "linkType": false,
            "arrayLink": true,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": true,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
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
            "typeVariable": {},
            "json": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "indexExists": false,
            "array": false
        }
    ],
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
        "sl": "mentor_editProfArea",
        "formName": "",
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
                        "fieldSysName": "_action",
                        "fetch": [],
                        "sysName": "_action",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "_mentor__profAreaIds",
                        "fetch": [],
                        "sysName": "_mentor__profAreaIds",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "professional_areas"
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
                        "fieldSysName": "mentor__profAreaIds",
                        "fetch": [],
                        "sysName": "mentor__profAreaIds",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "professional_areas"
                    },
                    {
                        "fieldSysName": "userId",
                        "fetch": [],
                        "sysName": "userId",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "_action",
                        "fetch": [],
                        "sysName": "_action",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "_mentor__profAreaIds",
                        "fetch": [],
                        "sysName": "_mentor__profAreaIds",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "professional_areas"
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
                        "fieldSysName": "mentor__profAreaIds",
                        "fetch": [],
                        "sysName": "mentor__profAreaIds",
                        "name": "",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "professional_areas"
                    },
                    {
                        "fieldSysName": "userId",
                        "fetch": [],
                        "sysName": "userId",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "fields": {
                    "_action": {
                        "id": "_action",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "_mentor__profAreaIds": {
                        "id": "_mentor__profAreaIds",
                        "content": "",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "professional_areas"
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
                    "mentor__profAreaIds": {
                        "id": "mentor__profAreaIds",
                        "content": "",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "professional_areas"
                    },
                    "userId": {
                        "id": "userId",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser"
                    }
                },
                "fieldParams": {
                    "_mentor__profAreaIds": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "profAreasByWorkSpace"
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "userId": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "_action": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "mentor__profAreaIds": {
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
                        "title": "New section",
                        "fieldIds": [
                            "id",
                            "userId",
                            "_mentor__profAreaIds",
                            "_action",
                            "mentor__profAreaIds"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ]
            },
            "fields": {
                "_mentor__profAreaIds": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "profAreasByWorkSpace",
                    "searchData": [
                        {
                            "key": "02d43611-f925-49ea-a972-c4de8720f02d",
                            "value": "1"
                        },
                        {
                            "key": "48af3bd7-6c85-4c6e-84ed-ff11f7b6b21a",
                            "value": "800"
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
                "userId": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "_action": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "mentor__profAreaIds": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "02d43611-f925-49ea-a972-c4de8720f02d",
                            "value": "1"
                        },
                        {
                            "key": "48af3bd7-6c85-4c6e-84ed-ff11f7b6b21a",
                            "value": "800"
                        },
                        {
                            "key": "79353f41-7973-42e0-beb4-1245d43dff35",
                            "value": "23"
                        }
                    ]
                }
            },
            "useEditing": true,
            "editObject": "url"
        },
        "fileds": [
            {
                "sysName": "_action",
                "name": "",
                "dataType": "string",
                "id": "20971678714001731",
                "link": "",
                "group": "1678713327230",
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
                "array": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "_mentor__profAreaIds",
                "name": "",
                "dataType": "arrayLink",
                "id": "38001678713328795",
                "link": "professional_areas",
                "group": "1678713327230",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 0,
                "linkIndexFieldSysName": [
                    ""
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {},
                "json": false,
                "indexExists": true
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "mentor__profAreaIds",
                "name": "",
                "dataType": "arrayLink",
                "id": "72311678713266493",
                "link": "professional_areas",
                "group": "1678713263610",
                "tags": "",
                "indexing": true,
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
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {},
                "json": false,
                "indexExists": true
            },
            {
                "sysName": "userId",
                "name": "",
                "dataType": "link",
                "id": "28991678713221926",
                "link": "WebUser",
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
                "array": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "_mentor__profAreaIds": [
                    "02d43611-f925-49ea-a972-c4de8720f02d",
                    "48af3bd7-6c85-4c6e-84ed-ff11f7b6b21a"
                ],
                "id": "4eb487268df5b161b900db70f7ce13f6",
                "mentor__profAreaIds": [
                    "null"
                ],
                "userId": "test@test.test",
                "_action": "чвм"
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
                            <FpsCards locale="ESP" data={cardActions} auth={authExample} currentBP='mobile' />
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