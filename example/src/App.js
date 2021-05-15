import React, { useEffect, useState } from 'react'
import {
    FpsHtml, FpsCards, FpsForm, MainMenu, FpsTable, Button, SomethingWentWrong, Input, FpsTheme,
    ComponentDetails, FpsWrapper, ContentWrapper, ActionPanel, Radio, SignIn, SignUp, Media, CodeSnippet,
    Dnd, Profile, TabsPane, Loader, optionsHandler, Fps400, ImageButtons
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
import { reduceHooks } from 'react-table'


function MainMenuWrapper(props) {
    let location = useLocation()

    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')

    useEffect(() => {

        if (props.themeName.colorScheme == 'darkMint' || props.themeName.colorScheme == 'warmNight' || props.themeName.colorScheme == 'hacker') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/b652c768-32eb-4309-bc7f-974863107528.svg')
        }
        if (props.themeName.colorScheme == 'classic' || props.themeName.colorScheme == 'tiffany' || props.themeName.colorScheme == 'white') {
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
        "sl": "getCloudUsers",
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
                        "fieldSysName": "apps",
                        "fetch": [
                            {
                                "fieldSysName": "sys_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "apps",
                        "name": "Apps",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "AppInfo"
                    },
                    {
                        "fieldSysName": "country",
                        "fetch": [
                            {
                                "fieldSysName": "Name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "country",
                        "name": "Country",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "CountriesISO"
                    },
                    {
                        "fieldSysName": "first_name",
                        "fetch": [],
                        "sysName": "first_name",
                        "name": "First name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "gravatar_pic",
                        "fetch": [],
                        "sysName": "gravatar_pic",
                        "name": " ",
                        "dataType": "file",
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
                        "fieldSysName": "last_name",
                        "fetch": [],
                        "sysName": "last_name",
                        "name": "Last name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "number_of_apps",
                        "fetch": [],
                        "sysName": "number_of_apps",
                        "name": "Number of apps",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "register_date",
                        "fetch": [],
                        "sysName": "register_date",
                        "name": "Register date",
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
                            "dateFormat": "DD.MM.YYYY",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "source",
                        "fetch": [],
                        "sysName": "source",
                        "name": "Source",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [],
                "fields": {
                    "apps": {
                        "id": "apps",
                        "content": "Apps",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "AppInfo",
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
                        "link": "CountriesISO",
                        "actions": []
                    },
                    "first_name": {
                        "id": "first_name",
                        "content": "First name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "gravatar_pic": {
                        "id": "gravatar_pic",
                        "content": " ",
                        "type": "field",
                        "dataType": "file",
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
                    "last_name": {
                        "id": "last_name",
                        "content": "Last name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "number_of_apps": {
                        "id": "number_of_apps",
                        "content": "Number of apps",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "register_date": {
                        "id": "register_date",
                        "content": "Register date",
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
                            "dateFormat": "DD.MM.YYYY",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "source": {
                        "id": "source",
                        "content": "Source",
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
                    "app_description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "apps": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "sys_name": {
                                    "id": "sys_name",
                                    "content": "sys_name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "sys_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "sys_name"
                            ]
                        },
                        "subHeader": "App: "
                    },
                    "country": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "first_name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "gravatar_pic": {
                        "include": true,
                        "fileImageFormat": "circle",
                        "quickSearch": false,
                        "fileImageSize": 120,
                        "clickable": false,
                        "fileImage": true
                    },
                    "last_name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "email_hash": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "gravatar": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "register_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "number_of_apps": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "source": {
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
                        "title": "Basic info",
                        "fieldIds": [
                            "gravatar_pic",
                            "id",
                            "first_name",
                            "last_name",
                            "register_date"
                        ]
                    },
                    "12911620037086726": {
                        "id": "12911620037086726",
                        "title": "Apps",
                        "fieldIds": [
                            "number_of_apps",
                            "apps"
                        ]
                    },
                    "25891620037107353": {
                        "id": "25891620037107353",
                        "title": "Acquisition",
                        "fieldIds": [
                            "source",
                            "country"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "25891620037107353",
                    "12911620037086726"
                ],
                "actions": []
            },
            "fields": {
                "app_description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "apps": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "sys_name": {
                                "id": "sys_name",
                                "content": "sys_name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "sys_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "sys_name"
                        ]
                    },
                    "subHeader": "App: "
                },
                "country": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "first_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "gravatar_pic": {
                    "include": true,
                    "fileImageFormat": "circle",
                    "quickSearch": false,
                    "fileImageSize": 120,
                    "clickable": false,
                    "fileImage": true
                },
                "last_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "email_hash": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "gravatar": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "register_date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "number_of_apps": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "source": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            }
        },
        "tableTitle": "Cloud users",
        "actions": null,
        "headers": [
            {
                "sysName": "apps",
                "name": "Apps",
                "dataType": "arrayLink",
                "id": "80561587152006234",
                "link": "AppInfo",
                "group": "1570288674389",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "indexExists": false
            },
            {
                "sysName": "country",
                "name": "Country",
                "dataType": "link",
                "id": "37101588673355053",
                "link": "CountriesISO",
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "first_name",
                "name": "First name",
                "dataType": "string",
                "id": "23971570288647049",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "gravatar_pic",
                "name": " ",
                "dataType": "file",
                "id": "77261619116355317",
                "link": "",
                "group": "1588875605532",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "last_name",
                "name": "Last name",
                "dataType": "string",
                "id": "81941570288646826",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "number_of_apps",
                "name": "Number of apps",
                "dataType": "number",
                "id": "41911570383626553",
                "link": "",
                "group": "1570288674389",
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "register_date",
                "name": "Register date",
                "dataType": "date",
                "id": "36551588868841568",
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
                    "dateFormat": "DD.MM.YYYY",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "source",
                "name": "Source",
                "dataType": "string",
                "id": "92371570288676773",
                "link": null,
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "data": [
            {
                "first_name": "lemon",
                "source": "direct",
                "country": {
                    "Name": "Turkey"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/760b7989e87ab5153437a0ed1acb9b87?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620489341733,
                "id": "lemonsoftltd@gmail.com",
                "last_name": "soft"
            },
            {
                "first_name": "Сергей",
                "source": "yandex.by ",
                "country": {
                    "Name": "Belarus"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/65e68a73e3e8efa0528d845cab22716d?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620485745190,
                "id": "metr.by@gmail.com",
                "last_name": "Давыденко"
            },
            {
                "first_name": "Dmitriy",
                "source": "www.google.com ",
                "country": {
                    "Name": "Russian Federation"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/8187d13fc96def67b6eb9a40ab6d0e87?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620483831624,
                "id": "kalinin.d777@gmail.com",
                "last_name": "Kalinin"
            },
            {
                "first_name": "Кун",
                "source": "zerocoder.ru ",
                "country": {
                    "Name": "Egypt"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/0d431c0da529b3a6b7f83de31d6f2efa?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620482845231,
                "id": "kun.moneta@gmail.com",
                "last_name": "А"
            },
            {
                "first_name": "Boto",
                "source": "direct",
                "country": {
                    "Name": "Russian Federation"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/9c86b4140b611dafd461270f76aaf15b?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620480012747,
                "id": "botosonic@gmail.com",
                "last_name": "Sonic"
            },
            {
                "first_name": "Potato",
                "source": "direct",
                "country": {
                    "Name": "Russian Federation"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/67f0b823de2740756dfe6816f4c87f58?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620478749113,
                "id": "rlv51568@zwoho.com",
                "last_name": "NotImportant"
            },
            {
                "first_name": "Yusuf",
                "source": "www.google.com ",
                "country": {
                    "Name": "Nigeria"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/3a3e917dc1d633a7d14dc7a55081ff12?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620467269866,
                "id": "abdulrahmanyusuf125@gmail.com",
                "last_name": "Abdulrahman",
                "number_of_apps": 1,
                "apps": [
                    {
                        "sys_name": "hyphen",
                        "id": "6743"
                    }
                ]
            },
            {
                "first_name": "Roman",
                "source": "www.google.com ",
                "country": {
                    "Name": "Russian Federation"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/3a0b649a316b635ce8eafda4c102569e?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620464634020,
                "id": "roman.tmrln@gmail.com",
                "last_name": "Sidoryuk",
                "number_of_apps": 1,
                "apps": [
                    {
                        "sys_name": "kips",
                        "id": "6742"
                    }
                ]
            },
            {
                "first_name": "Александр",
                "source": "www.google.com ",
                "country": {
                    "Name": "Russian Federation"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/da4b1935e9290e2d00a559ee8eb6f16e?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620455873140,
                "id": "stps.raa@gmail.com",
                "last_name": "Радакин"
            },
            {
                "first_name": "FMX",
                "source": "www.google.com ",
                "country": {
                    "Name": "Mexico"
                },
                "gravatar_pic": "https://www.gravatar.com/avatar/b82cc9df88ba4c1f0ecefb1eff4f4f1c?d=https://api.alfa.directual.com/fileUploaded/directual-site/dbd15954-809c-4024-a66c-aa7ccb19292e.jpg",
                "register_date": 1620453449743,
                "id": "feelradiomx@gmail.com",
                "last_name": "RADIO",
                "number_of_apps": 1,
                "apps": [
                    {
                        "sys_name": "fmxmultimedios",
                        "id": "6740"
                    }
                ]
            }
        ],
        "totalPages": 399,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "apps.sys_name",
                1294703
            ],
            [
                "country.Name",
                1302886
            ],
            [
                "first_name",
                1282551
            ],
            [
                "gravatar_pic",
                1282551
            ],
            [
                "id",
                1282551
            ],
            [
                "last_name",
                1282551
            ],
            [
                "number_of_apps",
                1282551
            ],
            [
                "register_date",
                1282551
            ],
            [
                "source",
                1282551
            ]
        ],
        "writeFields": [],
        "structures": {
            "1282551": {
                "networkID": 1822,
                "sysName": "Cloud_users",
                "name": "Cloud users",
                "id": 1282551,
                "dateCreated": "2019-10-05T15:17:37Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notifications_blog\",\"name\":\"Notify about Blog\",\"dataType\":\"boolean\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"unsubscribed\",\"name\":\"unsubscribed\",\"dataType\":\"boolean\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"admin_notification_text\",\"name\":\"admin_notification_text\",\"dataType\":\"string\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"request_id\",\"name\":\"Request ID\",\"dataType\":\"link\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"first_name\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"survey_ids\",\"name\":\"Surveys\",\"dataType\":\"arrayLink\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"utm_medium\",\"name\":\"utm_medium\",\"dataType\":\"string\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"country_id\",\"name\":\"Country link (ISO)\",\"dataType\":\"link\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"is_country_synced\",\"name\":\"is_country_synced\",\"dataType\":\"boolean\",\"id\":\"31991605527320825\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"note\",\"name\":\"Note\",\"dataType\":\"string\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"register_date\",\"name\":\"Register date\",\"dataType\":\"date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"link\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email_hash\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_sl\",\"name\":\"Number of SLs\",\"dataType\":\"number\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_apps\",\"name\":\"Number of apps\",\"dataType\":\"number\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"logged_in\",\"name\":\"Have logged in\",\"dataType\":\"boolean\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"today_stat_id\",\"name\":\"Today stat link\",\"dataType\":\"link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"locale\",\"name\":\"locale\",\"dataType\":\"string\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notifications_account\",\"name\":\"Notify about Account\",\"dataType\":\"boolean\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"whom_to_alert\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"number_of_structures\",\"name\":\"Number of structures\",\"dataType\":\"number\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ip\",\"name\":\"ip\",\"dataType\":\"string\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"number_of_scenarios\",\"name\":\"Number of scenarios\",\"dataType\":\"number\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"social_register\",\"name\":\"social_register\",\"dataType\":\"boolean\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"app_description\",\"name\":\"App description\",\"dataType\":\"string\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"gravatar_pic\",\"name\":\" \",\"dataType\":\"file\",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"apps\",\"name\":\"Apps\",\"dataType\":\"arrayLink\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"last_name\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"mailchimp_segments\",\"name\":\"Mailchimp Segments\",\"dataType\":\"array\",\"id\":\"84981587457354001\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utm_campaign\",\"name\":\"utm_campaign\",\"dataType\":\"string\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"unsibscribed_reason\",\"name\":\"unsibscribed_reason\",\"dataType\":\"string\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"gravatar\",\"name\":\"Gravatar\",\"dataType\":\"string\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utm_source\",\"name\":\"utm_source\",\"dataType\":\"string\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"source\",\"name\":\"Source\",\"dataType\":\"string\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"customer_type\",\"name\":\"Customer type\",\"dataType\":\"string\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"last_activity_date\",\"name\":\"Last activity date\",\"dataType\":\"date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"mailchimp_tags\",\"name\":\"Mailchimp labels\",\"dataType\":\"string\",\"id\":\"97421570379132976\",\"link\":null,\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"notifications_academy\",\"name\":\"Notify about Academy\",\"dataType\":\"boolean\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":1570381436668,\"name\":\"CRM\",\"order\":2},{\"id\":1588875605532,\"name\":\"Gravatar\",\"order\":4},{\"id\":1570288674389,\"name\":\"Cloud usage\",\"order\":0},{\"id\":1572378880897,\"name\":\"Notifications settings\",\"order\":3},{\"id\":1570379125072,\"name\":\"Mailchimp\",\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"},{\"sysName\":\"country\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-08T16:43:31Z",
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
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "1294703": {
                "networkID": 1822,
                "sysName": "AppInfo",
                "name": "Applications",
                "id": 1294703,
                "dateCreated": "2020-02-27T12:54:30Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"number_of_users\",\"name\":\"number_of_users\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"number_of_active_scenarios\",\"name\":\"number_of_active_scenarios\",\"dataType\":\"string\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"alert_hit\",\"name\":\"Когда пинали о превышении тарифа\",\"dataType\":\"date\",\"id\":\"22121614804113546\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"number_of_scenarios\",\"name\":\"number_of_scenarios\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"execution\",\"name\":\"Load_execution\",\"dataType\":\"number\",\"id\":\"32211587202484528\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"AppSettings_id\",\"name\":\"AppSettings\",\"dataType\":\"link\",\"id\":\"34831592935814438\",\"link\":\"AppSetting\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"getRequest\",\"name\":\"Load_getRequest\",\"dataType\":\"number\",\"id\":\"37261587202485664\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"number_of_structures\",\"name\":\"number_of_structures\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"number_of_sl\",\"name\":\"number_of_sl\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"period\",\"name\":\"Billing_period\",\"dataType\":\"link\",\"id\":\"50391587206053532\",\"link\":\"UsageHistory\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"name\":\"user_id\",\"dataType\":\"link\",\"id\":\"6\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"maxUsers\",\"name\":\"Load_maxUsers\",\"dataType\":\"number\",\"id\":\"66391587202485120\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"creator_email\",\"name\":\"creator_email\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"postRequest\",\"name\":\"Load_postRequest\",\"dataType\":\"number\",\"id\":\"71631587202506976\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"executionSync\",\"name\":\"executionSync\",\"dataType\":\"number\",\"id\":\"75661619421361645\",\"link\":\"\",\"group\":\"1587202477104\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"sys_name\",\"name\":\"sys_name\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"9\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"ignored_counter\",\"name\":\"Сколько раз проигнорировал письмо-алерт\",\"dataType\":\"number\",\"id\":\"96291614932806065\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":1587202449588,\"name\":\"Global stats\",\"order\":0},{\"id\":1587202477104,\"name\":\"Usage for last period\",\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"sys_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-04-26T07:16:20Z",
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
                    "typeVariable": {},
                    "linkType": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 667556
            },
            "1302886": {
                "networkID": 1822,
                "sysName": "CountriesISO",
                "name": "Countries-ISO",
                "id": 1302886,
                "dateCreated": "2020-05-07T17:38:58Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false},{\"sysName\":\"Name\",\"name\":\"Country name\",\"dataType\":\"string\",\"id\":\"91001588873211198\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"Name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2020-06-25T11:21:28Z",
                "createBy": 1,
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
                    "linkType": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 33580950
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": null
    }


    let authExample = {
        // isAuth: false,
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "pavel@directual.com"
    }


    let exampleForm = {
        "sl": "namageUIversions",
        "formName": "Add UI version",
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
                        "fieldSysName": "ui_version",
                        "fetch": [],
                        "sysName": "ui_version",
                        "name": "Version",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "delete",
                        "fetch": [],
                        "sysName": "delete",
                        "name": "",
                        "dataType": "boolean",
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
                        "fieldSysName": "ui_version",
                        "fetch": [],
                        "sysName": "ui_version",
                        "name": "Version",
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
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "ui_version": {
                        "id": "ui_version",
                        "content": "Version",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "delete": {
                        "id": "delete",
                        "content": "",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
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
                    "ui_version": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "delete": {
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
                            "id",
                            "ui_version",
                            "delete"
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
                "ui_version": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "delete": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            }
        },
        "fileds": [
            {
                "sysName": "delete",
                "name": "",
                "dataType": "boolean",
                "id": "84651618145763056",
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
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "ui_version",
                "name": "Version",
                "dataType": "string",
                "id": "50881618145263107",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": null
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
        bodyFontWeight: localStorage.getItem('dd-theme-bodyFontWeight') || '400'
    }

    const [currentTheme, setCurrentTheme] = useState(basicTheme)

    useEffect(() => {
        localStorage.setItem('dd-theme-color', currentTheme.colorScheme)
        localStorage.setItem('dd-theme-radius', currentTheme.radius)
        localStorage.setItem('dd-theme-headersFont', currentTheme.headersFont)
        localStorage.setItem('dd-theme-fontText', currentTheme.fontText)
        localStorage.setItem('dd-theme-headersFontWeight', currentTheme.headersFontWeight)
        localStorage.setItem('dd-theme-bodyFontWeight', currentTheme.bodyFontWeight)
    }, [currentTheme])



    return (
        <FpsWrapper>
            <Router>
                <MainMenuWrapper themeName={currentTheme} />
                <ContentWrapper themeName={currentTheme}>
                    <Switch>
                        <Route exact path="/table">
                            <FpsTable data={exampleTable} />
                        </Route>
                        <Route exact path="/">
                            <WhatIsIt />
                        </Route>
                        <Route exact path="/form">
                            <FpsForm data={exampleForm} auth={authExample} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile
                                width={600}
                                user={exampleUser}
                            />
                            <SignIn
                                header='Sign in'
                                width={400}
                                google
                                userNameFormat='email'
                                allowSignUp
                                signUpheader='Sign Up'
                            />

                        </Route>
                        <Route exact path="/cards">
                            <FpsCards data={cardActions} auth={authExample} currentBP='desktop' />
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
                                themes={['classic', 'white', 'tiffany', 'darkMint', 'warmNight', 'hacker', 'raspberry', 'baltic']} />
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
                            <CodeSnippet code="<Media type='video' source='https://www.youtube.com/watch?v=JAwEWLP-G_M' width='550' height='300'/>" />
                            <Media type='video' source="https://www.youtube.com/watch?v=JAwEWLP-G_M" width='550' height='300' />
                        </Route>

                    </Switch>

                </ContentWrapper>
            </Router>
        </FpsWrapper>
    )
}

export default App