import React, { useEffect, useState } from 'react'
import {
    FpsCards, FpsForm, MainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet, Chart,
    Dnd, Profile, TabsPane, Stopwatch, Button, SignUp, RestorePass, FpsKanban, FpsChart
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
                { name: "Chart", group: 'Components', route: "/chart", icon: "chart" },
                { name: "Comments (soon)", group: 'Components', route: "/comments", icon: "version", hidden: true },
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
        "sl": "openPipelinePlanned",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "tags",
            "deleteField": "",
            "cardBodyText": "progress",
            "cardImage": false,
            "cardImageField": null,
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
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
                        "fieldSysName": "date_updated",
                        "fetch": [],
                        "sysName": "date_updated",
                        "name": "Date updated",
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
                "writeFields": [],
                "fields": {
                    "color": {
                        "id": "color",
                        "content": "Card color",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
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
                            "dateFormat": "D MMMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "date_updated": {
                        "id": "date_updated",
                        "content": "Date updated",
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "tags": {
                        "id": "tags",
                        "content": "Tags",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
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
                    }
                },
                "fieldParams": {
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
                    "title": {
                        "include": false,
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
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "color": {
                        "include": false,
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
                        "clickable": false,
                        "configureLinkedCard": {
                            "fields": {
                                "firstName": {
                                    "id": "firstName",
                                    "content": "First name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "lastName": {
                                    "id": "lastName",
                                    "content": "Last name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "firstName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "lastName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "firstName",
                                "lastName"
                            ]
                        }
                    },
                    "feature_type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
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
                    "dev_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tags": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
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
                    "votes_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date_updated": {
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
                            "title",
                            "feature_id",
                            "feature_type",
                            "description",
                            "id",
                            "color",
                            "date_updated",
                            "date_added",
                            "user_id",
                            "votes",
                            "dev_status",
                            "tags",
                            "progress",
                            "votes_ids"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
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
                "title": {
                    "include": false,
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
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "color": {
                    "include": false,
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
                    "clickable": false,
                    "configureLinkedCard": {
                        "fields": {
                            "firstName": {
                                "id": "firstName",
                                "content": "First name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "lastName": {
                                "id": "lastName",
                                "content": "Last name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "firstName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "firstName",
                            "lastName"
                        ]
                    }
                },
                "feature_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
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
                "dev_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tags": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
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
                "votes_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_updated": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "showCounter": true,
            "counterField": "votes",
            "counterText": " upvotes",
            "actions": [],
            "cardColor": "color",
            "cardColorOption": "left",
            "lazyLoading": true
        },
        "tableTitle": "Planned",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "date_updated",
                "dataType": "date",
                "name": "Date updated",
                "id": "74581670507990970",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": true,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            }
        ],
        "data": [
            {
                "votes": 28,
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
                "date_updated": 1670519010000,
                "feature_type": "feature",
                "id": "2c7192b1-cae4-4234-a245-8e5d0160ee2f",
                "dev_status": {
                    "status": "Planned"
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
                        "id": "mf.alexander@gmail.com"
                    },
                    {
                        "firstName": "Nuno",
                        "lastName": "Poço",
                        "id": "nuno.poco@gmail.com"
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
                        "id": "hamelmesfin@gmail.com"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "firstName": "Joses",
                        "lastName": "Saumaitoga",
                        "id": "josesjjs@tpg.com.au"
                    },
                    {
                        "lastName": "Nichols",
                        "firstName": "Joanne",
                        "id": "jonichols@me.com"
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
                        "id": "lykovmaxim@gmail.com"
                    },
                    {
                        "id": "drammichd@gmail.com"
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
                        "id": "xavvis308@gmail.com"
                    },
                    {
                        "id": "sergey.azarov@gmail.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    },
                    {
                        "firstName": "Hao",
                        "lastName": "Ngo",
                        "id": "hao.ngolv@gmail.com"
                    },
                    {
                        "id": "kovgan96@gmail.com"
                    },
                    {
                        "id": "trustpropsonline@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    }
                ],
                "title": "Calendar component"
            },
            {
                "votes": 27,
                "description": "1. Make API-builder interface easier\n2. Introduce API-endpoint request logs\n3. Improve work with HTTP-parameters\n4. Include automatic userID filling\n5. Open API-endpoint settings in a modal window\n6. Show places where API-endpoint is used\n7. Filter endpoints (public, private, external systems, etc.)\n8. Show if there are sync scenarios connected to the endpoint\n9. Pause endpoint\n10. Requests log (`api/v3/apiEndpoints/history`)\n11. Add http-params description\n12. Endpoint versioning\n13. Fast data structure preview",
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
                "date_updated": 1676557489000,
                "feature_type": "feature",
                "id": "ea8ef168-ca6c-4f6c-b82b-6d6c4f0610f0",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1621373826000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "lastName": "One",
                        "firstName": "Dear",
                        "id": "directualone@gmail.com"
                    },
                    {
                        "firstName": "Mathew",
                        "lastName": "Tusa",
                        "id": "mobileactionim@gmail.com"
                    },
                    {
                        "lastName": "H",
                        "firstName": "Alejandro",
                        "id": "digitalgebo@gmail.com"
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
                        "firstName": "Joses",
                        "lastName": "Saumaitoga",
                        "id": "josesjjs@tpg.com.au"
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
                        "lastName": "Pearson",
                        "firstName": "Lloyd",
                        "id": "lloydpearson@packagecues.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "firstName": "Maksim",
                        "lastName": "Tsaryk",
                        "id": "max@maksimtsaryk.com"
                    },
                    {
                        "lastName": "Novoseltsev",
                        "firstName": "Vladimir",
                        "id": "xtrms@yandex.ru"
                    },
                    {
                        "lastName": "S",
                        "firstName": "Sania",
                        "id": "sania1813@yahoo.com"
                    },
                    {
                        "firstName": "VISHAL",
                        "lastName": "SETHI",
                        "id": "vs301991@gmail.com"
                    },
                    {
                        "firstName": "Hao",
                        "lastName": "Ngo",
                        "id": "hao.ngolv@gmail.com"
                    },
                    {
                        "lastName": "Grimalsky",
                        "firstName": "Slava",
                        "id": "itareo@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
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
                "votes": 15,
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
                "date_updated": 1670519010000,
                "feature_type": "feature",
                "id": "3874bd01-38af-4d0c-a04f-5eb999733d4f",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "status": "Planned"
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
                        "lastName": "H",
                        "firstName": "Alejandro",
                        "id": "digitalgebo@gmail.com"
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
                        "lastName": "Pearson",
                        "firstName": "Lloyd",
                        "id": "lloydpearson@packagecues.com"
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
                    },
                    {
                        "firstName": "Thomas",
                        "lastName": "Omaley",
                        "id": "thomasomaley1964@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    }
                ],
                "title": "Restrict access to files "
            },
            {
                "votes": 14,
                "description": "from the table row",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-107",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "date_updated": 1674056358000,
                "feature_type": "feature",
                "id": "bcfb59c9-235d-4d4a-96d9-07c73ec20124",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1621374197000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "lastName": "Nazarov",
                        "firstName": "Oleg",
                        "id": "olegnazarov@hotmail.com"
                    },
                    {
                        "id": "mf.alexander@gmail.com"
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
                        "firstName": "Roman",
                        "lastName": "Tkachev",
                        "id": "tkachev.rb@gmail.com"
                    },
                    {
                        "id": "hamelmesfin@gmail.com"
                    },
                    {
                        "id": "av.volgin@gmail.com"
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
                        "id": "lykovmaxim@gmail.com"
                    },
                    {
                        "id": "trustpropsonline@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    }
                ],
                "title": "Actions in Table"
            },
            {
                "votes": 12,
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
                "date_updated": 1671918952000,
                "feature_type": "feature",
                "id": "63da4103-bb50-4b03-889c-1e5af18677c5",
                "progress": "{\"firstValue\":30}",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1621374725000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Nuno",
                        "lastName": "Poço",
                        "id": "nuno.poco@gmail.com"
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
                        "lastName": "Pearson",
                        "firstName": "Lloyd",
                        "id": "lloydpearson@packagecues.com"
                    },
                    {
                        "firstName": "Elise",
                        "lastName": "Boonstra-Legerstee",
                        "id": "elise.legerstee@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
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
                "votes": 11,
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
                "date_updated": 1670519010000,
                "feature_type": "feature",
                "id": "db3ce173-737a-4b9b-9872-f9c5d090f015",
                "progress": "{\"firstValue\":40}",
                "dev_status": {
                    "status": "Planned"
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
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    }
                ],
                "title": "Sophisticated view for arrayLinks on object cards"
            },
            {
                "votes": 11,
                "description": "Allow users to copy and paste cubes in scenarios",
                "tags": [
                    "scenarios"
                ],
                "feature_id": "PLT-117",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Dolgov",
                    "firstName": "Nikita",
                    "id": "n.dolgov@directual.com"
                },
                "date_updated": 1679394051000,
                "feature_type": "feature",
                "id": "48d88933-add5-49a8-aa6d-a3748cdca468",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1621375728000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Kashtanov",
                        "lastName": "Dmitry",
                        "id": "y3sw0r1d@gmail.com"
                    },
                    {
                        "firstName": "Vladislav",
                        "lastName": "Boyko",
                        "id": "for.work.vboyko@yandex.ru"
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
                        "lastName": "Mozer",
                        "firstName": "Anna",
                        "id": "annmozer116@gmail.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "id": "lykovmaxim@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    },
                    {
                        "lastName": "Dolgov",
                        "firstName": "Nikita",
                        "id": "n.dolgov@directual.com"
                    }
                ],
                "title": "Copy cubes"
            },
            {
                "votes": 10,
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
                "date_updated": 1692696268000,
                "feature_type": "feature",
                "id": "7d8635da-2738-44cf-b4b7-1d509611f8ed",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1621377697000,
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
                        "id": "drammichd@gmail.com"
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
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
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
                "votes": 10,
                "description": "Copy pages in Web-pages",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-215",
                "color": "57bf97",
                "user_id": {
                    "firstName": "Vladimir",
                    "lastName": "Stepanenko",
                    "id": "vgstepanenko@gmail.com"
                },
                "date_updated": 1670519011000,
                "feature_type": "feature",
                "id": "67b93ec9-cff1-4870-8d92-42a4a53e60d9",
                "progress": "{\"firstValue\":0}",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1628176984000,
                "votes_ids": [
                    {
                        "firstName": "Egor",
                        "lastName": "Baev",
                        "id": "artosiris@gmail.com"
                    },
                    {
                        "firstName": "Joses",
                        "lastName": "Saumaitoga",
                        "id": "josesjjs@tpg.com.au"
                    },
                    {
                        "lastName": "Nichols",
                        "firstName": "Joanne",
                        "id": "jonichols@me.com"
                    },
                    {
                        "firstName": "Max",
                        "lastName": "Lykov",
                        "id": "mxf@mail.ru"
                    },
                    {
                        "lastName": "Goncharov",
                        "firstName": "Pavel",
                        "id": "office@ingros.ru"
                    },
                    {
                        "id": "victorblan@gmail.com"
                    },
                    {
                        "id": "lykovmaxim@gmail.com"
                    },
                    {
                        "lastName": "Ershov",
                        "firstName": "Pavel",
                        "id": "pavel@directual.com"
                    },
                    {
                        "id": "trustpropsonline@gmail.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    }
                ],
                "title": "Copy page on portal"
            },
            {
                "votes": 10,
                "description": "Add params to dropdown fields for dynamic options filtering on the API side",
                "tags": [
                    "web-pages"
                ],
                "feature_id": "PLT-286",
                "color": "57bf97",
                "user_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "date_updated": 1670519010000,
                "feature_type": "feature",
                "id": "dd8a05ba-83d6-4d04-a903-f29f763217d5",
                "dev_status": {
                    "status": "Planned"
                },
                "date_added": 1638561542000,
                "votes_ids": [
                    {
                        "lastName": "Online",
                        "firstName": "Bisapco",
                        "id": "atr.service.msk@gmail.com"
                    },
                    {
                        "id": "mf.alexander@gmail.com"
                    },
                    {
                        "firstName": "Dimitry",
                        "lastName": "Novozhilov",
                        "id": "novozhilov@code-word.ru"
                    },
                    {
                        "id": "subrtt@gmail.com"
                    },
                    {
                        "firstName": "Joses",
                        "lastName": "Saumaitoga",
                        "id": "josesjjs@tpg.com.au"
                    },
                    {
                        "lastName": "Nichols",
                        "firstName": "Joanne",
                        "id": "jonichols@me.com"
                    },
                    {
                        "lastName": "Khokhlov",
                        "firstName": "Alexey",
                        "id": "alexhohlov89@gmail.com"
                    },
                    {
                        "lastName": "Pearson",
                        "firstName": "Lloyd",
                        "id": "lloydpearson@packagecues.com"
                    },
                    {
                        "firstName": "Mark",
                        "lastName": "Vokes",
                        "id": "mark@concept2commerce.com"
                    },
                    {
                        "firstName": "JOHNLY",
                        "lastName": "NARAG",
                        "id": "johnly_s_narag@yahoo.com"
                    }
                ],
                "title": "Form. Dynamic drop-downs"
            }
        ],
        "totalPages": 6,
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
                "date_updated",
                1385610
            ],
            [
                "description",
                1385610
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
            ]
        ],
        "writeFields": [],
        "structures": {
            "1385542": {
                "networkID": 6829,
                "sysName": "WebUser",
                "name": "App users",
                "id": 1385542,
                "dateCreated": "2021-05-14T21:02:45Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Phone\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"userpic\",\"dataType\":\"file\",\"name\":\"User pic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Username (login)\",\"id\":\"13\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Roles\",\"id\":\"6\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Gender\",\"id\":\"3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_registered\",\"dataType\":\"date\",\"name\":\"Date registered on Dev\",\"id\":\"14451621029358812\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"code\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51351621027822811\",\"link\":null,\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isEmailConfirmed\",\"dataType\":\"boolean\",\"name\":\"Email confirmed\",\"id\":\"60111621027825496\",\"link\":\"\",\"group\":\"1621027815164\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
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
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
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
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
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
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"23221620832490508\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33625685
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
        "sl": "getEmailsInCampaignByID",
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
                        "fieldSysName": "delay_days",
                        "fetch": [],
                        "sysName": "delay_days",
                        "name": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
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
                        "fieldSysName": "template_id",
                        "fetch": [
                            {
                                "fieldSysName": "subject",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "template",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "template_id",
                        "name": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "email_templates"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "delay_days",
                        "fetch": [],
                        "sysName": "delay_days",
                        "name": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
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
                        "fieldSysName": "template_id",
                        "fetch": [],
                        "sysName": "template_id",
                        "name": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "email_templates"
                    }
                ],
                "fields": {
                    "delay_days": {
                        "id": "delay_days",
                        "content": "Delay in days",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
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
                    "template_id": {
                        "id": "template_id",
                        "content": "Template",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "email_templates",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "delay_days": {
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
                    "template_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "subject": {
                                    "id": "subject",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "template": {
                                    "id": "template",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "html",
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "subject": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "template": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "subject",
                                "template"
                            ]
                        }
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "delay_days",
                            "id",
                            "template_id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "delay_days": {
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
                "template_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "subject": {
                                "id": "subject",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "template": {
                                "id": "template",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "html",
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "subject": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "template": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "subject",
                            "template"
                        ]
                    },
                    "searchData": [
                        {
                            "key": "5d01dc8e-cb94-48e9-b035-bdcac18a9594",
                            "value": "Webinar 31.08"
                        }
                    ]
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "delay_days",
                        "fetch": [],
                        "sysName": "delay_days",
                        "name": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
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
                        "fieldSysName": "template_id",
                        "fetch": [
                            {
                                "fieldSysName": "subject",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "template",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "template_id",
                        "name": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "email_templates"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "delay_days": {
                        "id": "delay_days",
                        "content": "Delay in days",
                        "dataType": "number",
                        "format": "positiveNum",
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
                        "read": true,
                        "link": ""
                    },
                    "template_id": {
                        "id": "template_id",
                        "content": "Template",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "email_templates"
                    }
                },
                "fieldParams": {
                    "delay_days": {
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
                    "template_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "template_id",
                    "delay_days",
                    "id"
                ]
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "delay_days",
                "dataType": "number",
                "name": "Delay in days",
                "id": "42521693314278292",
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
                "format": "positiveNum",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "template_id",
                "dataType": "link",
                "name": "Template",
                "id": "16781693314269942",
                "link": "email_templates",
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
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            }
        ],
        "data": [
            {
                "template_id": {
                    "template": "<!DOCTYPE html>\n<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title></title><!--[if !mso]><!--><style type=\"text/css\">\n        @import url('https://fonts.googleapis.com/css?family=Inter:400,600');\n    </style><!--<![endif]--><style type=\"text/css\" rel=\"stylesheet\" media=\"all\">\n        @media only screen and (max-width: 640px) {\n\n            .ms-header {\n                display: none !important;\n            }\n            .ms-content {\n                width: 100% !important;\n                border-radius: 0;\n            }\n            .ms-content-body {\n                padding: 30px !important;\n            }\n            .ms-footer {\n                width: 100% !important;\n            }\n            .mobile-wide {\n                width: 100% !important;\n            }\n            .info-lg {\n                padding: 30px;\n            }\n        }\n    </style><!--[if mso]>\n    <style type=\"text/css\">\n    body { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td * { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td p { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td a { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td span { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td div { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td ul li { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td ol li { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    td blockquote { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    th * { font-family: Arial, Helvetica, sans-serif!important  !important; }\n    </style>\n    <![endif]--></head><body style=\"font-family:'Inter', Helvetica, Arial, sans-serif; width: 100% !important; height: 100%; margin: 0; padding: 0; -webkit-text-size-adjust: none; background-color: #f4f7fa; color: #4a5566;\">\n\n<div class=\"preheader\" style=\"display:none !important;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;\"></div>\n\n<table class=\"ms-body\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;background-color:#f4f7fa;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;\"><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n            <table class=\"ms-container\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;\"><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n                        <table class=\"ms-header\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\"><tr><td height=\"40\" style=\"font-size:0px;line-height:0px;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;\">\n                                </td>\n                            </tr></table></td>\n                </tr><tr><td align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;\">\n                <img width=\"60\" src=\"https://api.directual.com/fileUploaded/directual-site/80725ee3-98b3-4183-9687-e52498ca1e71.png\"></td></tr><tr height=\"30\"><td></td></tr><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n                        <table class=\"ms-content\" width=\"640\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;width:640px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#FFFFFF;border-radius:6px;box-shadow:0 3px 6px 0 rgba(0,0,0,.05);\"><tr><td class=\"ms-content-body\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;padding-top:40px;padding-bottom:40px;padding-right:50px;padding-left:50px;\">\n\n\n                                    <h1 style=\"margin-top:0;color:#111111;font-size:24px;line-height:36px;font-weight:600;margin-bottom:24px;\">Hi, {$name}!</h1>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        <a href=\"https://www.directual.com/nocode-workshops\">\n                                            <img style=\"max-width:100%\" src=\"https://api.directual.com/fileUploaded/directual-site/web/39e0fe21-b2a1-481e-ad23-bbd64275ce94.webp\" />\n                                        </a>\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        At Directual, we are constantly looking for new ways to make the lives of our app builders easier and more fun! Now, you can create no-code apps in Directual with a single prompt. It’s pure <i>space magic</i>.\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        Join our webinar \"Building no-code apps with the power of AI\" on <b>August 10th, 19:00 CET</b>.\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        It's not just a webinar, though. Think of it more like a master class in building no-code apps, an insider's guide to the latest features on our platform, and a showcase of our brand-new AI integration..\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        You'll get to:\n                                    </p>\n                                    <ul>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Discover how to build AI-powered apps with simple text prompts\n                                        </li>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Explore new dimensions in no-code app development\n                                        </li>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Learn about our newest plugins and how they can supercharge your app-building process\n                                        </li>\n                                        <li style=\"color:#4a5566;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                            Get your questions answered in a live Q&A\n                                        </li>\n                                    </ul>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        So, are you ready to step into the future of app development? Tie your laces tight, because this ride is going to be spectacular!\n                                    </p>\n                                    <p style=\"color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;\">\n                                        <a href=\"https://www.directual.com/nocode-workshops\" style=\"color:#058efc\">Register for the webinar here</a>\n                                    </p>\n                                    </td>\n                                        </tr></table><!--table width=\"100%\" style=\"border-collapse:collapse;\" >\n                                        <tr>\n                                            <td height=\"20\" style=\"font-size:0px;line-height:0px;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;\" >\n                                                &nbsp;\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td height=\"20\" style=\"font-size:0px;line-height:0px;border-top-width:1px;border-top-style:solid;border-top-color:#e2e8f0;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;\" >\n                                                &nbsp;\n                                            </td>\n                                        </tr>\n                                    </table--></td>\n                            </tr></table></td>\n                </tr><tr><td align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;\">\n\n                        <table class=\"ms-footer\" width=\"640\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"border-collapse:collapse;width:640px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;\"><tr><td class=\"ms-content-body\" align=\"center\" style=\"word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;padding-top:40px;padding-bottom:40px;padding-right:50px;padding-left:50px;\">\n                                    <p class=\"small\" style=\"margin-top:0px;margin-bottom:5px;margin-right:0;margin-left:0;color:#96a2b3;font-size:14px;line-height:21px;\">Let people create!</p>\n                                    <img width=\"200\" src=\"https://api.directual.com/fileUploaded/directual-site/c5182e8d-b19d-41fc-9861-3f54aab38849.png\"><table width=\"200\" style=\"margin-top:10px\"><tr><td align=\"center\">\n                                                <a href=\"https://www.facebook.com/directualcom\" target=\"_blank\"><img width=\"30\" src=\"https://api.directual.com/fileUploaded/directual-site/96452a58-fcd5-4413-91b8-18c7f3c6f54e.png\"></a>\n                                            </td>\n                                            <td align=\"center\">\n                                                <a href=\"https://discord.gg/wVMSrH7kXK\" target=\"_blank\"><img width=\"30\" src=\"https://api.directual.com/fileUploaded/directual-site/b621ab5a-448e-40d0-b60b-d896dfb5ffc7.png\"></a>\n                                            </td>\n                                            <td align=\"center\">\n                                                <a href=\"https://twitter.com/directual\" target=\"_blank\"><img width=\"30\" src=\"https://api.directual.com/fileUploaded/directual-site/e55ae759-1d01-48d4-98be-b924a9b92793.png\"></a>\n                                            </td>\n                                        </tr></table><p class=\"small\" style=\"margin-top:20px;margin-right:0;margin-left:0;color:#96a2b3;font-size:14px;line-height:21px;\">© 2023 Directual. All rights reserved.</p>\n                                        <p style=\"margin-bottom:20px\"><a style=\"opacity:0.8;text-decoration:none;font-size:12px;color:#058efc\" href=\"https://directual-site.directual.app/embed/650c5611-8321-4ad0-bccd-0a21527fce3f/{{user_id.subscription_settings}}\" target=\"_blank\">Subscription settings</a></p>\n                                </td>\n                            </tr>\n                            </table></td>\n                </tr></table></td>\n    </tr></table></body></html>",
                    "subject": "Webinar 31.08",
                    "id": "5d01dc8e-cb94-48e9-b035-bdcac18a9594"
                },
                "delay_days": "",
                "id": "3c732c7b-46d6-4126-9d59-e5ef3e4e110d"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "delay_days",
                99245396
            ],
            [
                "id",
                99245396
            ],
            [
                "template_id.id",
                99245395
            ],
            [
                "template_id.subject",
                99245395
            ],
            [
                "template_id.template",
                99245395
            ]
        ],
        "writeFields": [
            "delay_days",
            "id",
            "template_id"
        ],
        "structures": {
            "99245395": {
                "id": 99245395,
                "dateCreated": "2023-08-29T12:38:30Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Email templates",
                "sysName": "email_templates",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"subject\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"46261693312833516\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"template\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"82131693312723943\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"subject\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T12:41:03Z",
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
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false
                },
                "objectIDSysName": "id",
                "folderId": 33770779
            },
            "99245396": {
                "id": 99245396,
                "dateCreated": "2023-08-29T13:04:22Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 1822,
                "name": "Emails in the campaign",
                "sysName": "emails_in_the_campaign",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"template_id\",\"name\":\"Template\",\"dataType\":\"link\",\"id\":\"16781693314269942\",\"link\":\"email_templates\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"delay_days\",\"name\":\"Delay in days\",\"dataType\":\"number\",\"id\":\"42521693314278292\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"campaign_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"73431693314924064\",\"link\":\"email_campaigns\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"template_id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T13:37:54Z",
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
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false
                },
                "objectIDSysName": "id",
                "folderId": 33770779
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "delay_days",
                "dataType": "number",
                "name": "Delay in days",
                "id": "42521693314278292",
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
                "format": "positiveNum",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "template_id",
                "dataType": "link",
                "name": "Template",
                "id": "16781693314269942",
                "link": "email_templates",
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
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false
            }
        ],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let authExample = {
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "puzyrcult"
    }

    let exampleForm = {
        "sl": "adminSurveyFilters",
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
                        "fieldSysName": "from",
                        "fetch": [],
                        "sysName": "from",
                        "name": "From",
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
                            "isUTC": "true"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "survey_1",
                        "fetch": [],
                        "sysName": "survey_1",
                        "name": "Question 1 filter (Which describes you best)",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "survey_step1"
                    },
                    {
                        "fieldSysName": "survey_2",
                        "fetch": [],
                        "sysName": "survey_2",
                        "name": "Question 2 filter (Which describes you best)",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "survey_step2"
                    },
                    {
                        "fieldSysName": "survey_3",
                        "fetch": [],
                        "sysName": "survey_3",
                        "name": "Question 3 filter (How did you know about Directual)",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "survey_step2"
                    },
                    {
                        "fieldSysName": "to",
                        "fetch": [],
                        "sysName": "to",
                        "name": "To",
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
                            "isUTC": "true"
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
                        "read": true,
                        "link": ""
                    },
                    "from": {
                        "id": "from",
                        "content": "From",
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
                            "isUTC": "true"
                        },
                        "write": true,
                        "link": ""
                    },
                    "survey_1": {
                        "id": "survey_1",
                        "content": "Question 1 filter (Which describes you best)",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "survey_step1"
                    },
                    "survey_2": {
                        "id": "survey_2",
                        "content": "Question 2 filter (Which describes you best)",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "survey_step2"
                    },
                    "survey_3": {
                        "id": "survey_3",
                        "content": "Question 3 filter (How did you know about Directual)",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "survey_step2"
                    },
                    "to": {
                        "id": "to",
                        "content": "To",
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
                            "isUTC": "true"
                        },
                        "write": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "from": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "survey_1": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": "reset_everything"
                    },
                    "survey_2": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "survey_3": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "to": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "users_count": {
                        "include": false,
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
                            "from",
                            "survey_1",
                            "survey_2",
                            "survey_3",
                            "to",
                            "id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ]
            },
            "fields": {
                "from": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "survey_1": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": "reset_everything"
                },
                "survey_2": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "survey_3": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "to": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "users_count": {
                    "include": false,
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
            "resultScreen": {
                "disableResubmit": true,
                "successMessage": "Resetting stats..."
            }
        },
        "fileds": [
            {
                "sysName": "from",
                "name": "From",
                "dataType": "date",
                "id": "15231689344219273",
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
                    "isUTC": "true"
                },
                "groupName": null,
                "indexExists": false,
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "survey_1",
                "name": "Question 1 filter (Which describes you best)",
                "dataType": "arrayLink",
                "id": "95921689345130773",
                "link": "survey_step1",
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
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "survey_2",
                "name": "Question 2 filter (Which describes you best)",
                "dataType": "arrayLink",
                "id": "48191689345146760",
                "link": "survey_step2",
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
                "indexExists": false,
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "survey_3",
                "name": "Question 3 filter (How did you know about Directual)",
                "dataType": "arrayLink",
                "id": "72871689345166484",
                "link": "survey_step2",
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
                "indexExists": false,
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "to",
                "name": "To",
                "dataType": "date",
                "id": "71261689344219765",
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
                    "dateFormat": "DD MMM, Y",
                    "timeFormat": "",
                    "isUTC": "true"
                },
                "groupName": null,
                "indexExists": false,
                "json": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
        email: 'puzyrcult',
        role: 'admin',
        socialGoogle: 'jack@directual.com'
    }

    const chartData1 = {
        "sl": "charts",
        "pageSize": "15",
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
            "chart_type": "bar",
            "show_grid": true,
            "chart_strokeDasharray": "3 3",
            "x_axis": "day",
            "x_axis_format": "MMM DD",
            "chart_lines": [
                {
                    "id": "46351688806958485",
                    "color": "#7ed321",
                    "line_data": "tea_cups",
                    "line_label": "🫖 Tea cups",
                    "line_stackedID": "a",
                    "line_dot": true,
                    "line_width": 3
                },
                {
                    "id": "20401688806976761",
                    "color": "#4581eb",
                    "line_data": "coffee_cups",
                    "line_label": "☕️ Coffee cups",
                    "line_stackedID": "a",
                    "line_dot": true,
                    "line_width": 3
                },
                {
                    "id": "98841688806995895",
                    "color": "#d13f50",
                    "line_data": "whiskey_glasses",
                    "line_label": "🥃 Whiskey glasses",
                    "line_dot": true,
                    "line_width": 3
                }
            ],
            "paging_is_on": true,
            "show_legend": true,
            "show_tooltip": true,
            "filter_lines": true
        },
        "tableTitle": "Bar chart",
        "actions": null,
        "headers": [
            {
                "sysName": "coffee_cups",
                "name": "",
                "dataType": "number",
                "id": "27881688757041175",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "day",
                "name": "",
                "dataType": "string",
                "id": "36551688757035272",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "tea_cups",
                "name": "",
                "dataType": "number",
                "id": "64901688757048476",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "whiskey_glasses",
                "name": "",
                "dataType": "number",
                "id": "17731688757054436",
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
                "coffee_cups": 676,
                "tea_cups": 25,
                "whiskey_glasses": 292,
                "day": "2023-06-06",
                "day_formatted": "Jun 06",
                "🫖 Tea cups": 25,
                "☕️ Coffee cups": 676,
                "🥃 Whiskey glasses": 292
            },
            {
                "coffee_cups": 795,
                "tea_cups": 919,
                "whiskey_glasses": 415,
                "day": "2023-06-05",
                "day_formatted": "Jun 05",
                "🫖 Tea cups": 919,
                "☕️ Coffee cups": 795,
                "🥃 Whiskey glasses": 415
            },
            {
                "coffee_cups": 648,
                "tea_cups": 184,
                "whiskey_glasses": 306,
                "day": "2023-06-04",
                "day_formatted": "Jun 04",
                "🫖 Tea cups": 184,
                "☕️ Coffee cups": 648,
                "🥃 Whiskey glasses": 306
            },
            {
                "coffee_cups": 131,
                "tea_cups": 266,
                "whiskey_glasses": 214,
                "day": "2023-06-03",
                "day_formatted": "Jun 03",
                "🫖 Tea cups": 266,
                "☕️ Coffee cups": 131,
                "🥃 Whiskey glasses": 214
            },
            {
                "coffee_cups": 297,
                "tea_cups": 887,
                "whiskey_glasses": 399,
                "day": "2023-06-02",
                "day_formatted": "Jun 02",
                "🫖 Tea cups": 887,
                "☕️ Coffee cups": 297,
                "🥃 Whiskey glasses": 399
            },
            {
                "coffee_cups": 607,
                "tea_cups": 243,
                "whiskey_glasses": 224,
                "day": "2023-06-01",
                "day_formatted": "Jun 01",
                "🫖 Tea cups": 243,
                "☕️ Coffee cups": 607,
                "🥃 Whiskey glasses": 224
            },
            {
                "coffee_cups": 341,
                "tea_cups": 60,
                "whiskey_glasses": 487,
                "day": "2023-05-31",
                "day_formatted": "May 31",
                "🫖 Tea cups": 60,
                "☕️ Coffee cups": 341,
                "🥃 Whiskey glasses": 487
            },
            {
                "coffee_cups": 657,
                "tea_cups": 112,
                "whiskey_glasses": 221,
                "day": "2023-05-30",
                "day_formatted": "May 30",
                "🫖 Tea cups": 112,
                "☕️ Coffee cups": 657,
                "🥃 Whiskey glasses": 221
            },
            {
                "coffee_cups": 572,
                "tea_cups": 600,
                "whiskey_glasses": 266,
                "day": "2023-05-29",
                "day_formatted": "May 29",
                "🫖 Tea cups": 600,
                "☕️ Coffee cups": 572,
                "🥃 Whiskey glasses": 266
            },
            {
                "coffee_cups": 501,
                "tea_cups": 886,
                "whiskey_glasses": 99,
                "day": "2023-05-28",
                "day_formatted": "May 28",
                "🫖 Tea cups": 886,
                "☕️ Coffee cups": 501,
                "🥃 Whiskey glasses": 99
            },
            {
                "coffee_cups": 36,
                "tea_cups": 951,
                "whiskey_glasses": 138,
                "day": "2023-05-27",
                "day_formatted": "May 27",
                "🫖 Tea cups": 951,
                "☕️ Coffee cups": 36,
                "🥃 Whiskey glasses": 138
            },
            {
                "coffee_cups": 608,
                "tea_cups": 638,
                "whiskey_glasses": 26,
                "day": "2023-05-26",
                "day_formatted": "May 26",
                "🫖 Tea cups": 638,
                "☕️ Coffee cups": 608,
                "🥃 Whiskey glasses": 26
            },
            {
                "coffee_cups": 100,
                "tea_cups": 774,
                "whiskey_glasses": 16,
                "day": "2023-05-25",
                "day_formatted": "May 25",
                "🫖 Tea cups": 774,
                "☕️ Coffee cups": 100,
                "🥃 Whiskey glasses": 16
            },
            {
                "coffee_cups": 627,
                "tea_cups": 480,
                "whiskey_glasses": 232,
                "day": "2023-05-24",
                "day_formatted": "May 24",
                "🫖 Tea cups": 480,
                "☕️ Coffee cups": 627,
                "🥃 Whiskey glasses": 232
            },
            {
                "coffee_cups": 651,
                "tea_cups": 76,
                "whiskey_glasses": 440,
                "day": "2023-05-23",
                "day_formatted": "May 23",
                "🫖 Tea cups": 76,
                "☕️ Coffee cups": 651,
                "🥃 Whiskey glasses": 440
            }
        ],
        "totalPages": 5,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "coffee_cups",
                99232716
            ],
            [
                "day",
                99232716
            ],
            [
                "tea_cups",
                99232716
            ],
            [
                "whiskey_glasses",
                99232716
            ]
        ],
        "writeFields": [],
        "structures": {
            "99232716": {
                "networkID": 17743,
                "sysName": "daily_beverage_consumption",
                "name": "Daily beverage consumption",
                "id": 99232716,
                "dateCreated": "2023-07-07T19:04:56Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"whiskey_glasses\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"17731688757054436\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"coffee_cups\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"27881688757041175\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"day\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36551688757035272\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tea_cups\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"64901688757048476\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"day\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-07-07T19:11:30Z",
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
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    const chartData = {
        "sl": "dashboardMonthlyFin",
        "pageSize": "12",
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
            "chart_type": "bar",
            "chart_lines": [
                {
                    "id": "92861690919195721",
                    "color": "#3FCA52",
                    "line_data": "balance___sum",
                    "line_stackedID": "A"
                }
            ],
            "x_axis": "period",
            "show_grid": true,
            "chart_strokeDasharray": "3 3",
            "show_legend": true,
            "show_tooltip": true,
            "x_axis_format": "MMM",
            "lines_from_data": "from_data",
            "line_labels": "type",
            "filter_lines": true
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "balance___sum": 507.37,
                "id___count": 5,
                "id": "64c95cd519b12a4adbe42d95",
                "type": "paddle_payment",
                "period": "2023-08",
                "paddle_payment": 507.37,
                "period_formatted": "Aug"
            },
            {
                "balance___sum": 885.16,
                "id___count": 14,
                "id": "64c95cd519b12a4adbe42d97",
                "type": "tinkoff",
                "period": "2023-08",
                "tinkoff": 885.16,
                "period_formatted": "Aug"
            },
            {
                "balance___sum": 2264.8,
                "id___count": 66,
                "id": "64c95cd519b12a4adbe42d9a",
                "type": "tinkoff",
                "period": "2023-07",
                "tinkoff": 2264.8,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 2162.28,
                "id___count": 34,
                "id": "64c95cd519b12a4adbe42db5",
                "type": "paddle_payment",
                "period": "2023-07",
                "paddle_payment": 2162.28,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 1103.22,
                "id___count": 4,
                "id": "64c95cd519b12a4adbe42df2",
                "type": "bank_payment",
                "period": "2023-07",
                "bank_payment": 1103.22,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 1589.43,
                "id___count": 31,
                "id": "64c95cd519b12a4adbe42d9f",
                "type": "paddle_payment",
                "period": "2023-06",
                "paddle_payment": 1589.43,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 2462.77,
                "id___count": 68,
                "id": "64c95cd519b12a4adbe42da0",
                "type": "tinkoff",
                "period": "2023-06",
                "tinkoff": 2462.77,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 4615.135,
                "id___count": 9,
                "id": "64c95cd519b12a4adbe42e3b",
                "type": "bank_payment",
                "period": "2023-06",
                "bank_payment": 4615.135,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 2269.15,
                "id___count": 69,
                "id": "64c95cd519b12a4adbe42da2",
                "type": "tinkoff",
                "period": "2023-05",
                "tinkoff": 2269.15,
                "period_formatted": "May"
            },
            {
                "balance___sum": 3485.11,
                "id___count": 53,
                "id": "64c95cd519b12a4adbe42daa",
                "type": "paddle_payment",
                "period": "2023-05",
                "paddle_payment": 3485.11,
                "period_formatted": "May"
            },
            {
                "balance___sum": 2587.37,
                "id___count": 4,
                "id": "64c95cd519b12a4adbe42dcf",
                "type": "bank_payment",
                "period": "2023-05",
                "bank_payment": 2587.37,
                "period_formatted": "May"
            },
            {
                "balance___sum": 2438,
                "id___count": 3,
                "id": "64c95cd519b12a4adbe42da9",
                "type": "bank_payment",
                "period": "2023-04",
                "bank_payment": 2438,
                "period_formatted": "Apr"
            }
        ],
        "totalPages": 5,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "balance___sum",
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
                "type",
                99155789
            ]
        ],
        "writeFields": [],
        "structures": {
            "99155789": {
                "networkID": 1822,
                "sysName": "report_554374085_for_struct_appwallet",
                "name": "Report [Full report]",
                "id": 99155789,
                "dateCreated": "2022-12-07T09:39:25Z",
                "hidden": false,
                "dateHidden": null,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": 33576258
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
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} auth={authExample} locale='FRA'/> },
        // { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
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
                        <Route exact path="/chart">
                            <FpsChart data={chartData}/>
                            <FpsChart data={chartData1}/>
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