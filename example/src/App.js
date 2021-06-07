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
        "sl": "getAll",
        "pageSize": "12",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "m_director_id",
            "deleteField": "",
            "cardBodyText": "m_description",
            "cardImage": true,
            "cardImageField": "m_gif",
            "cardImageType": "top",
            "cardImageSize": 250,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "m_id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "m_actor_ids",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "person_birthDate",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "person_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "m_actor_ids",
                        "name": "Актеры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "m_person"
                    },
                    {
                        "fieldSysName": "m_description",
                        "fetch": [],
                        "sysName": "m_description",
                        "name": "Описание фильма",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "m_director_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "person_birthDate",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "person_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "m_director_id",
                        "name": "Режиссер",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "m_person"
                    },
                    {
                        "fieldSysName": "m_genre_ids",
                        "fetch": [
                            {
                                "fieldSysName": "g_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "m_genre_ids",
                        "name": "Жанры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "genre"
                    },
                    {
                        "fieldSysName": "m_gif",
                        "fetch": [],
                        "sysName": "m_gif",
                        "name": "гиф фильма",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "m_likes",
                        "fetch": [],
                        "sysName": "m_likes",
                        "name": "Понравилось",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "m_name",
                        "fetch": [],
                        "sysName": "m_name",
                        "name": "Название фильма",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "m_year",
                        "fetch": [],
                        "sysName": "m_year",
                        "name": "Год фильма",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "id": {
                        "id": "id",
                        "content": "m_id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "m_actor_ids": {
                        "id": "m_actor_ids",
                        "content": "Актеры",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "m_person",
                        "actions": []
                    },
                    "m_description": {
                        "id": "m_description",
                        "content": "Описание фильма",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "m_director_id": {
                        "id": "m_director_id",
                        "content": "Режиссер",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "m_person",
                        "actions": []
                    },
                    "m_genre_ids": {
                        "id": "m_genre_ids",
                        "content": "Жанры",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "genre",
                        "actions": []
                    },
                    "m_gif": {
                        "id": "m_gif",
                        "content": "гиф фильма",
                        "type": "field",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "m_likes": {
                        "id": "m_likes",
                        "content": "Понравилось",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "m_name": {
                        "id": "m_name",
                        "content": "Название фильма",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "m_year": {
                        "id": "m_year",
                        "content": "Год фильма",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__35241622914295883": {
                        "content": "Delete",
                        "id": "action__35241622914295883",
                        "type": "action",
                        "actions": []
                    },
                    "action__42591622976436647": {
                        "id": "action__42591622976436647",
                        "content": "Понравилось",
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
                    "m_actor_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "m_description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "m_director_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "m_genre_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "m_gif": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 400,
                        "clickable": false,
                        "fileImage": true
                    },
                    "m_name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "m_year": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "m_likes": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": false,
                        "description": "Понраыилось:"
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "m_likes",
                            "id",
                            "m_gif",
                            "m_name",
                            "m_genre_ids",
                            "m_actor_ids",
                            "m_description",
                            "m_director_id",
                            "m_year",
                            "action__35241622914295883",
                            "action__42591622976436647"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "saveINPUT",
                        "id": "35241622914295883",
                        "name": "Delete",
                        "displayAs": "button",
                        "buttonIcon": "delete",
                        "buttonType": "danger",
                        "buttonTitle": "Удалить",
                        "dropdown": true,
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "errorDescription",
                                    "fetch": [],
                                    "sysName": "errorDescription",
                                    "name": "INPUT_Описание ошибки",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "m_input_id",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "status",
                                    "fetch": [],
                                    "sysName": "status",
                                    "name": "INPUT_Статус обработки",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "m_action",
                                    "fetch": [],
                                    "sysName": "m_action",
                                    "name": "m_action",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "m_actor_ids",
                                    "fetch": [],
                                    "sysName": "m_actor_ids",
                                    "name": "INPUT_Актеры",
                                    "dataType": "arrayLink",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "m_person"
                                },
                                {
                                    "fieldSysName": "m_description",
                                    "fetch": [],
                                    "sysName": "m_description",
                                    "name": "INPUT_Описание фильма",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "m_director_id",
                                    "fetch": [],
                                    "sysName": "m_director_id",
                                    "name": "INPUT_Режиссер",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "m_person"
                                },
                                {
                                    "fieldSysName": "m_genre_ids",
                                    "fetch": [],
                                    "sysName": "m_genre_ids",
                                    "name": "INPUT_Жанры",
                                    "dataType": "arrayLink",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "genre"
                                },
                                {
                                    "fieldSysName": "m_gif",
                                    "fetch": [],
                                    "sysName": "m_gif",
                                    "name": "Input_gif",
                                    "dataType": "file",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "m_name",
                                    "fetch": [],
                                    "sysName": "m_name",
                                    "name": "INPUT_Название фильма",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "m_year",
                                    "fetch": [],
                                    "sysName": "m_year",
                                    "name": "INPUT_Год фильма",
                                    "dataType": "number",
                                    "format": "positiveNum",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "rfm_m_id",
                                    "fetch": [],
                                    "sysName": "rfm_m_id",
                                    "name": "id_фильма2mod",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "Movie"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "39221622914528277",
                                "target": "m_action",
                                "type": "const",
                                "value": "Delete"
                            },
                            {
                                "id": "70991622914833290",
                                "target": "rfm_m_id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ]
                    },
                    {
                        "sysName": "liked",
                        "id": "89271622916127304",
                        "name": "Like",
                        "displayAs": "button",
                        "buttonIcon": "love",
                        "buttonType": "accent",
                        "buttonTitle": "Понравилось",
                        "dropdown": true,
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "m_Input_like",
                                    "fetch": [],
                                    "sysName": "m_Input_like",
                                    "format": "",
                                    "formatOptions": {}
                                },
                                {
                                    "fieldSysName": "m_name",
                                    "fetch": [],
                                    "sysName": "m_name",
                                    "name": "INPUT_Название фильма",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "m_action",
                                    "fetch": [],
                                    "sysName": "m_action",
                                    "name": "m_action",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "rfm_m_id",
                                    "fetch": [],
                                    "sysName": "rfm_m_id",
                                    "name": "id_фильма2mod",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "Movie"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "35581622916189968",
                                "target": "rfm_m_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "19921622916284490",
                                "type": "const",
                                "value": "Like itit",
                                "target": "m_action"
                            }
                        ]
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
                "m_actor_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "m_description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "m_director_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "m_genre_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "m_gif": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 400,
                    "clickable": false,
                    "fileImage": true
                },
                "m_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "m_year": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "m_likes": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": false,
                    "description": "Понраыилось:"
                }
            },
            "showCounter": true,
            "actions": [
                {
                    "sysName": "delete",
                    "id": "35241622914295883",
                    "name": "Delete",
                    "displayAs": "button",
                    "buttonIcon": "delete",
                    "buttonType": "danger",
                    "buttonTitle": "Удалить",
                    "dropdown": true,
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "m_id",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "m_deleted",
                                "fetch": [],
                                "sysName": "m_deleted",
                                "name": "Удалено",
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
                                "link": ""
                            },
                            {
                                "fieldSysName": "m_name",
                                "fetch": [],
                                "sysName": "m_name",
                                "name": "Название фильма",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "m_id",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "m_deleted",
                                "fetch": [],
                                "sysName": "m_deleted",
                                "name": "Удалено",
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
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "39221622914528277",
                            "target": "m_deleted",
                            "type": "const",
                            "value": "true"
                        },
                        {
                            "id": "70991622914833290",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "26581623091651925",
                            "target": "role",
                            "value": "admin",
                            "checkValue": "admin"
                        }
                    ],
                    "closePopup": true
                },
                {
                    "sysName": "liked",
                    "id": "42591622976436647",
                    "name": "Понравилось",
                    "displayAs": "button",
                    "buttonIcon": "love",
                    "buttonType": "accent",
                    "buttonTitle": "Понравилось",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "m_Input_like",
                                "fetch": [],
                                "sysName": "m_Input_like",
                                "format": "",
                                "formatOptions": {}
                            },
                            {
                                "fieldSysName": "m_input_like",
                                "fetch": [],
                                "sysName": "m_input_like",
                                "name": "Input_like",
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "m_name",
                                "fetch": [],
                                "sysName": "m_name",
                                "name": "INPUT_Название фильма",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "m_action",
                                "fetch": [],
                                "sysName": "m_action",
                                "name": "m_action",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "m_input_like",
                                "fetch": [],
                                "sysName": "m_input_like",
                                "name": "Input_like",
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "rfm_m_id",
                                "fetch": [],
                                "sysName": "rfm_m_id",
                                "name": "id_фильма2mod",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Movie"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "85531622976487376",
                            "target": "m_action",
                            "type": "const",
                            "value": "Like"
                        },
                        {
                            "id": "78611622976513261",
                            "target": "rfm_m_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "69131622976526001",
                            "target": "m_input_like",
                            "type": "const",
                            "value": "1"
                        }
                    ],
                    "dropdown": true,
                    "closePopup": true
                }
            ],
            "counterField": "m_likes",
            "counterText": "Likes it"
        },
        "tableTitle": "Список фильмов",
        "actions": null,
        "headers": [
            {
                "sysName": "id",
                "name": "m_id",
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
                "indexExists": false
            },
            {
                "sysName": "m_actor_ids",
                "name": "Актеры",
                "dataType": "arrayLink",
                "id": "77641622457318701",
                "link": "m_person",
                "group": "1622457259129",
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
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": false
            },
            {
                "sysName": "m_description",
                "name": "Описание фильма",
                "dataType": "string",
                "id": "12881622456285950",
                "link": "",
                "group": "1622456207469",
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
                "indexExists": false
            },
            {
                "sysName": "m_director_id",
                "name": "Режиссер",
                "dataType": "link",
                "id": "40411622461093168",
                "link": "m_person",
                "group": "1622457259129",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "m_genre_ids",
                "name": "Жанры",
                "dataType": "arrayLink",
                "id": "60341622457274710",
                "link": "genre",
                "group": "1622457259129",
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
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": false
            },
            {
                "sysName": "m_gif",
                "name": "гиф фильма",
                "dataType": "file",
                "id": "44491622644938411",
                "link": "",
                "group": "1622456207469",
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
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "m_likes",
                "name": "Понравилось",
                "dataType": "number",
                "id": "84261622911054339",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "m_name",
                "name": "Название фильма",
                "dataType": "string",
                "id": "19431622456222429",
                "link": "",
                "group": "1622456207469",
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
                "indexExists": false
            },
            {
                "sysName": "m_year",
                "name": "Год фильма",
                "dataType": "number",
                "id": "94051622456327433",
                "link": "",
                "group": "1622456207469",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "data": [
            {
                "m_actor_ids": [
                    {
                        "person_name": "Борис Плотников",
                        "id": "41"
                    },
                    {
                        "person_name": "Владимир Гостюхин ",
                        "id": "42"
                    },
                    {
                        "person_name": "Владимир Рудый ",
                        "id": "55"
                    },
                    {
                        "person_name": "Людмила Полякова ",
                        "id": "43"
                    },
                    {
                        "person_name": "Сергей Яковлев ",
                        "id": "44"
                    },
                    {
                        "person_name": "Николай Сектименко ",
                        "id": "45"
                    },
                    {
                        "person_name": "Мария Виноградова ",
                        "id": "46"
                    },
                    {
                        "person_name": "Виктория Гольдентул ",
                        "id": "47"
                    },
                    {
                        "person_name": "Анатолий Солоницын ",
                        "id": "48"
                    },
                    {
                        "person_name": "Игорь Безяев ",
                        "id": "49"
                    },
                    {
                        "person_name": "Станислав Бородокин ",
                        "id": "50"
                    },
                    {
                        "person_name": "Вадим Гусев ",
                        "id": "51"
                    },
                    {
                        "person_name": "Станислав Житарев ",
                        "id": "52"
                    },
                    {
                        "person_name": "Василий Кравцов ",
                        "id": "53"
                    },
                    {
                        "person_name": "Александр Пятков ",
                        "id": "54"
                    },
                    {
                        "person_name": "Александра Харитонова ",
                        "id": "56"
                    }
                ],
                "m_gif": "https://cinema.mosfilm.ru/upload/iblock/a99/a995b33cc2cbbdd651728851a5b5bb2c.jpg",
                "m_name": "Восхождение",
                "id": "7b399206-698d-4161-aff7-a91e8c975e58",
                "m_genre_ids": [
                    {
                        "g_name": "Драма",
                        "id": "3"
                    }
                ],
                "m_year": 1976,
                "m_director_id": {
                    "person_name": "Лариса Шепитько",
                    "id": "05ad4e18-5097-4e3e-b5e9-9b0eb3e97000"
                },
                "m_description": "советский художественный фильм 1976 года режиссёра Ларисы Шепитько, военная драма по повести Василя Быкова «Сотников». Премьера состоялась 2 апреля 1977 года.\n\n110 минутный  фильм, повествующий о двух белорусских партизанах, попавших в руки полицаев, получил несколько призов на Международном кинофестивале в Западном Берлине в 1977 году, став единственным советским фильмом, удостоенным высшей награды фестиваля — «Золотой медведь».\n\n«Восхождение» стал последним завершённым фильмом в режиссёрской карьере Ларисы Шепитько. Через три года после выхода ленты на экраны Шепитько погибла в автокатастрофе во время съёмок картины «Прощание с Матёрой». В той же автокатастрофе погиб и оператор «Восхождения» — Владимир Чухнов."
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Джейсон Стэйтем",
                        "id": "35"
                    },
                    {
                        "person_name": "Холт Маккэллани",
                        "id": "36"
                    },
                    {
                        "person_name": "Джеффри Донован",
                        "id": "37"
                    },
                    {
                        "person_name": "Джош Хартнетт",
                        "id": "38"
                    },
                    {
                        "person_name": "Лас Алонсо",
                        "id": "39"
                    }
                ],
                "m_likes": 6,
                "m_gif": "https://media.giphy.com/media/zYDFHZryZvhLzG1o2J/giphy.gif",
                "m_name": "Гнев Человеческий",
                "id": "b36b13ca-11d5-40e4-9467-b5621d5e0dcd",
                "m_genre_ids": [
                    {
                        "g_name": "Триллер",
                        "id": "2"
                    },
                    {
                        "g_name": "Боевик",
                        "id": "9"
                    }
                ],
                "m_year": 2021,
                "m_director_id": {
                    "person_name": "Гай Ричи",
                    "id": "4ca5814b-9d75-46ac-9f1d-f714e19be441"
                },
                "m_description": "Мегаполис всколыхнула череда дерзких и жестоких преступлений. Жертвами бандитов стали инкассаторы. Похищены миллионы долларов. Полиция ищет любые улики и версии, чтобы выйти на грабителей, но результатов пока маловато. Единственной зацепкой становится сходство почерка преступников. Вполне вероятно, что подлый и корыстный осведомитель затаился в числе сотрудников инкассаторской службы. Туда и устраивается работать Эйч — мрачный и молчаливый мужчина, движимый не праздным интересом. Гнев человеческий, вот какое чувство переполняет новобранца.\n\nЛюди, совершая любые поступки, добрые или злые, героические или совсем незначительные, редко задумываются о последствиях. Так же и грабители, они теоретически понимают, что нарушают закон и сеют зло, но надеются, хорошо просчитав ходы, остаться вне подозрений. Иногда такой маневр удается. Но чаще возмездие настигает хитрых дельцов в самый неподходящий момент. За предательство нужно платить. С такой установкой начинает работу новый член команды инкассаторов. Об его истинных мотивах мало кому известно. Виноват может быть любой из них, а ответственную миссию нужно реализовать как можно скорее. © ГидОнлайн"
            },
            {
                "m_actor_ids": [],
                "m_likes": 38,
                "m_name": "Райа и последний дракон",
                "id": "5689d4ff-a693-4359-b214-111ca2c0e5b4",
                "m_genre_ids": [
                    {
                        "g_name": "Комедия",
                        "id": "1"
                    },
                    {
                        "g_name": "Приключения",
                        "id": "5"
                    },
                    {
                        "g_name": "Фэнтези",
                        "id": "6"
                    },
                    {
                        "g_name": "Мультфильм",
                        "id": "12"
                    }
                ],
                "m_year": 2021,
                "m_director_id": {
                    "person_name": "Дон Холл",
                    "id": "19"
                },
                "m_description": "Давным-давно в волшебной стране Кумандре бок о бок с людьми жили драконы — создатели и хранители воды. Мирной жизни пришел конец, когда появились друуны. Порождения тьмы обращали людей и драконов в каменные изваяния, и только магия драконихи Сису смогла прогнать злых созданий и расколдовать людей, но на драконов не подействовала. Кумандра раскололась на государства Сердца, Клыка, Когтя, Хребта и Хвоста, а волшебный драконий камень хранился в стране Сердца, которой правил отец Райи. Он мечтал объединить земли, но из-за человеческой жадности и зависти артефакт раскололся. Правитель каждой страны заполучил по осколку, а друуны снова стали властвовать безраздельно..."
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Мэттью МакКонахи",
                        "id": "24"
                    },
                    {
                        "person_name": "Мэтт Дэймон",
                        "id": "33"
                    },
                    {
                        "person_name": "Энн Хэтэуэй",
                        "id": "25"
                    },
                    {
                        "person_name": "Джессика Честейн",
                        "id": "26"
                    },
                    {
                        "person_name": "Маккензи Фой",
                        "id": "27"
                    },
                    {
                        "person_name": "Майкл Кейн",
                        "id": "28"
                    },
                    {
                        "person_name": "Дэвид Гяси",
                        "id": "29"
                    },
                    {
                        "person_name": "Уэс Бентли",
                        "id": "30"
                    },
                    {
                        "person_name": "Кейси Аффлек",
                        "id": "31"
                    },
                    {
                        "person_name": "Джон Литгоу",
                        "id": "32"
                    }
                ],
                "m_likes": 16,
                "m_gif": "https://i.pinimg.com/originals/ed/93/93/ed9393735a10d4651147bde3c8b2c2a4.gif",
                "m_name": "Интерстеллар",
                "id": "e07ed019-b894-48c0-8da1-6b2422f3f377",
                "m_genre_ids": [
                    {
                        "g_name": "Фантастика",
                        "id": "13"
                    },
                    {
                        "g_name": "Драма",
                        "id": "3"
                    },
                    {
                        "g_name": "Приключения",
                        "id": "5"
                    }
                ],
                "m_year": 2014,
                "m_director_id": {
                    "person_name": "Кристофер Нолан",
                    "id": "23"
                },
                "m_description": "Собственно фильм о ....."
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Кристиан Бейл",
                        "id": "12"
                    },
                    {
                        "person_name": "Мэт Дэймон",
                        "id": "13"
                    },
                    {
                        "person_name": "Катрина Балф",
                        "id": "14"
                    }
                ],
                "m_likes": 5,
                "m_gif": "https://www.spacetrek66.com.br/arquivo/index/433363/ford_vs_ferrari_2_99.gif",
                "m_name": "FORD против Ferarri",
                "id": "d8eac32f-a30b-401e-90d7-5d448349195b",
                "m_genre_ids": [
                    {
                        "g_name": "Биография",
                        "id": "15"
                    },
                    {
                        "g_name": "Драма",
                        "id": "3"
                    },
                    {
                        "g_name": "Боевик",
                        "id": "9"
                    }
                ],
                "m_year": 2019,
                "m_director_id": {
                    "person_name": "Джеймс Мэнголд",
                    "id": "11"
                },
                "m_description": "В начале 1960-х Генри Форд II принимает решение улучшить имидж компании и сменить курс на производство более модных автомобилей. После неудавшейся попытки купить практически банкрота Ferrari американцы решают бросить вызов итальянским конкурентам на трассе и выиграть престижную гонку 24 часа Ле-Мана. Чтобы создать подходящую машину, компания нанимает автоконструктора Кэррола Шэлби, а тот отказывается работать без выдающегося, но, как считается, трудного в общении гонщика Кена Майлза. Вместе они принимаются за разработку впоследствии знаменитого спорткара Ford GT40."
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Элайджа Вуд",
                        "id": "15"
                    },
                    {
                        "person_name": "Иэн Маккеллен",
                        "id": "16"
                    }
                ],
                "m_name": "Властелин колец: Братство кольца",
                "id": "a0d38f17-5cad-4967-ab08-f58d4f737544",
                "m_genre_ids": [
                    {
                        "g_name": "Фэнтези",
                        "id": "6"
                    },
                    {
                        "g_name": "Мелодрама",
                        "id": "7"
                    },
                    {
                        "g_name": "Драма",
                        "id": "3"
                    }
                ],
                "m_year": 2001,
                "m_director_id": {
                    "person_name": "Питер Джексон",
                    "id": "1"
                },
                "m_description": "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает найденное кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил."
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Виола Дэвис",
                        "id": "4"
                    },
                    {
                        "person_name": "Эмма Стоун",
                        "id": "18"
                    }
                ],
                "m_name": "Прислуга",
                "id": "9e187d13-6722-41b8-b3cd-9e08f77461bb",
                "m_genre_ids": [
                    {
                        "g_name": "Драма",
                        "id": "3"
                    }
                ],
                "m_year": 2011,
                "m_director_id": {
                    "person_name": "Тейт Тэйлор",
                    "id": "17"
                },
                "m_description": "Американский Юг, на дворе 1960-е годы. Скитер только-только закончила университет и возвращается домой, в сонный городок Джексон, где никогда ничего не происходит. Она мечтает стать писательницей, вырваться в большой мир. Но для приличной девушки с Юга не пристало тешиться столь глупыми иллюзиями, приличной девушке следует выйти замуж и хлопотать по дому. Мудрая Эйбилин на тридцать лет старше Скитер, она прислуживает в домах белых всю свою жизнь, вынянчила семнадцать детей и давно уже ничего не ждет от жизни, ибо сердце ее разбито после смерти единственного сына. Минни - самая лучшая стряпуха во всем Джексоне, а еще она самая дерзкая служанка в городе. И острый язык не раз уже сослужил ей плохую службу..."
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Виола Дэвис",
                        "id": "4"
                    },
                    {
                        "person_name": "Билли Браун",
                        "id": "5"
                    },
                    {
                        "person_name": "Джек Фалахи",
                        "id": "6"
                    },
                    {
                        "person_name": "Аджа Наоми Кинг",
                        "id": "7"
                    },
                    {
                        "person_name": "Мэт Макгрегори",
                        "id": "8"
                    }
                ],
                "m_name": "Как избежать наказания за убийство",
                "id": "7f09542a-77b5-4139-815f-be39c0583e4e",
                "m_genre_ids": [
                    {
                        "g_name": "Триллер",
                        "id": "2"
                    },
                    {
                        "g_name": "Драма",
                        "id": "3"
                    },
                    {
                        "g_name": "Детектив",
                        "id": "10"
                    },
                    {
                        "g_name": "Сериал",
                        "id": "14"
                    }
                ],
                "m_year": 2014,
                "m_director_id": {
                    "person_name": "Лора Иннес",
                    "id": "3"
                },
                "m_description": "Профессор Эннализ Китинг – блестящий адвокат. Она преподает у студентов дисциплину под названием: «Как избежать наказания за убийство». Но те даже не подозревают, что в скором времени им придется применить свои знания в этой области в реальной жизни…"
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Франсуа Клюзе",
                        "id": "20"
                    },
                    {
                        "person_name": "Омар Си",
                        "id": "21"
                    }
                ],
                "m_name": "1+1",
                "id": "d708dea7-6563-429b-b124-570e26a27c0e",
                "m_genre_ids": [
                    {
                        "g_name": "Комедия",
                        "id": "1"
                    },
                    {
                        "g_name": "Драма",
                        "id": "3"
                    },
                    {
                        "g_name": "Биография",
                        "id": "15"
                    }
                ],
                "m_year": 2011,
                "m_description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений."
            },
            {
                "m_actor_ids": [],
                "m_name": "Душа",
                "id": "023a247d-c2e6-48ec-8e2e-f3b0a986c34f",
                "m_genre_ids": [
                    {
                        "g_name": "Комедия",
                        "id": "1"
                    },
                    {
                        "g_name": "Приключения",
                        "id": "5"
                    },
                    {
                        "g_name": "Фэнтези",
                        "id": "6"
                    },
                    {
                        "g_name": "Мелодрама",
                        "id": "7"
                    },
                    {
                        "g_name": "Мультфильм",
                        "id": "12"
                    }
                ],
                "m_year": 2020,
                "m_director_id": {
                    "person_name": "Кристофер Нолан",
                    "id": "23"
                },
                "m_description": "Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у известной клубной певицы и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22, которая уже много веков не может найти свою искру и отправиться на Землю."
            },
            {
                "m_actor_ids": [],
                "m_name": "Создаем супер тестовый фильм из постман",
                "id": "25c988e7-330c-466a-bac9-2140e681d111",
                "m_genre_ids": [
                    {
                        "g_name": "Комедия",
                        "id": "1"
                    },
                    {
                        "g_name": "Триллер",
                        "id": "2"
                    },
                    {
                        "g_name": "Драма",
                        "id": "3"
                    },
                    {
                        "g_name": "Спорт",
                        "id": "4"
                    }
                ],
                "m_director_id": {
                    "person_name": "Питер Джексон",
                    "id": "1"
                }
            },
            {
                "m_actor_ids": [
                    {
                        "person_name": "Питер Джексон",
                        "id": "1"
                    },
                    {
                        "person_name": "Джо Райт",
                        "id": "2"
                    },
                    {
                        "person_name": "Лора Иннес",
                        "id": "3"
                    },
                    {
                        "person_name": "Виола Дэвис",
                        "id": "4"
                    }
                ],
                "m_name": "Форма-тестовый фильм ",
                "id": "0e53f51c-11bf-4977-ae8d-97b6097d0d14",
                "m_genre_ids": [
                    {
                        "g_name": "Спорт",
                        "id": "4"
                    },
                    {
                        "g_name": "Фэнтези",
                        "id": "6"
                    },
                    {
                        "g_name": "Исторический фильм",
                        "id": "8"
                    }
                ],
                "m_year": 2021,
                "m_director_id": {
                    "person_name": "Лора Иннес",
                    "id": "3"
                },
                "m_description": "Собственно фильм о ....."
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "id",
                1390532
            ],
            [
                "m_actor_ids.id",
                1390534
            ],
            [
                "m_actor_ids.person_birthDate",
                1390534
            ],
            [
                "m_actor_ids.person_name",
                1390534
            ],
            [
                "m_description",
                1390532
            ],
            [
                "m_director_id.id",
                1390534
            ],
            [
                "m_director_id.person_birthDate",
                1390534
            ],
            [
                "m_director_id.person_name",
                1390534
            ],
            [
                "m_genre_ids.g_name",
                1390533
            ],
            [
                "m_genre_ids.id",
                1390533
            ],
            [
                "m_gif",
                1390532
            ],
            [
                "m_likes",
                1390532
            ],
            [
                "m_name",
                1390532
            ],
            [
                "m_year",
                1390532
            ]
        ],
        "writeFields": [],
        "structures": {
            "1390532": {
                "networkID": 7050,
                "id": 1390532,
                "dateCreated": "2021-05-31T10:16:03Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Фильм",
                "sysName": "Movie",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"m_id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_description\",\"dataType\":\"string\",\"name\":\"Описание фильма\",\"id\":\"12881622456285950\",\"link\":\"\",\"group\":\"1622456207469\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_name\",\"dataType\":\"string\",\"name\":\"Название фильма\",\"id\":\"19431622456222429\",\"link\":\"\",\"group\":\"1622456207469\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_deleted\",\"dataType\":\"boolean\",\"name\":\"Удалено\",\"id\":\"28271622899913531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_director_id\",\"dataType\":\"link\",\"name\":\"Режиссер\",\"id\":\"40411622461093168\",\"link\":\"m_person\",\"group\":\"1622457259129\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_gif\",\"dataType\":\"file\",\"name\":\"гиф фильма\",\"id\":\"44491622644938411\",\"link\":\"\",\"group\":\"1622456207469\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_genre_ids\",\"dataType\":\"arrayLink\",\"name\":\"Жанры\",\"id\":\"60341622457274710\",\"link\":\"genre\",\"group\":\"1622457259129\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_actor_ids\",\"dataType\":\"arrayLink\",\"name\":\"Актеры\",\"id\":\"77641622457318701\",\"link\":\"m_person\",\"group\":\"1622457259129\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_likes\",\"dataType\":\"number\",\"name\":\"Понравилось\",\"id\":\"84261622911054339\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"m_year\",\"dataType\":\"number\",\"name\":\"Год фильма\",\"id\":\"94051622456327433\",\"link\":\"\",\"group\":\"1622456207469\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false}]",
                "jsonGroupSettings": "[{\"id\":1622456207469,\"name\":\"Основная группа\",\"order\":0},{\"id\":1622457259129,\"name\":\"Ссылки на др структуры\",\"order\":1},{\"id\":1622902896522,\"name\":\"Подсчет лайков\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"m_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-06-06T21:40:13Z",
                "createBy": 7167,
                "changedBy": 7167,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "m_id",
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
                    "indexExists": false
                },
                "folderId": 33628566
            },
            "1390533": {
                "networkID": 7050,
                "id": 1390533,
                "dateCreated": "2021-05-31T10:29:49Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Жанр",
                "sysName": "genre",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"genre_id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"g_name\",\"dataType\":\"string\",\"name\":\"Название жанра\",\"id\":\"98311622457022549\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"g_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-31T11:42:20Z",
                "createBy": 7167,
                "changedBy": 7167,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "genre_id",
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
                    "indexExists": false
                },
                "folderId": 33628566
            },
            "1390534": {
                "networkID": 7050,
                "id": 1390534,
                "dateCreated": "2021-05-31T10:31:44Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Личность",
                "sysName": "m_person",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"person_id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"person_birthDate\",\"dataType\":\"date\",\"name\":\"Дата рождения\",\"id\":\"46931622457154170\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"person_name\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"52911622457129187\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"person_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-06-01T22:36:09Z",
                "createBy": 7167,
                "changedBy": 7167,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "person_id",
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
                    "indexExists": false
                },
                "folderId": 33628566
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
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
        "sl": "buyers",
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
                        "fieldSysName": "buyer_address",
                        "fetch": [],
                        "sysName": "buyer_address",
                        "name": "Адрес",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_country",
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
                        "sysName": "buyer_country",
                        "name": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Countries"
                    },
                    {
                        "fieldSysName": "buyer_description",
                        "fetch": [],
                        "sysName": "buyer_description",
                        "name": "Комментарий",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_ebaynick",
                        "fetch": [],
                        "sysName": "buyer_ebaynick",
                        "name": "Ник  eBay/Мешок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_email",
                        "fetch": [],
                        "sysName": "buyer_email",
                        "name": "email",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_fb",
                        "fetch": [],
                        "sysName": "buyer_fb",
                        "name": "Профиль на ФБ",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_language",
                        "fetch": [],
                        "sysName": "buyer_language",
                        "name": "Переписка ведется на:",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "Русском",
                                "Английском"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_lastname",
                        "fetch": [],
                        "sysName": "buyer_lastname",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_name",
                        "fetch": [],
                        "sysName": "buyer_name",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_phone",
                        "fetch": [],
                        "sysName": "buyer_phone",
                        "name": "Телефон",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_source",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name_of_place",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "buyer_source",
                        "name": "Откуда пришел",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "places"
                    },
                    {
                        "fieldSysName": "buyer_state",
                        "fetch": [],
                        "sysName": "buyer_state",
                        "name": "Штат",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_zipcode",
                        "fetch": [],
                        "sysName": "buyer_zipcode",
                        "name": "Индекс",
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
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "buyer_address",
                        "fetch": [],
                        "sysName": "buyer_address",
                        "name": "Адрес",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_country",
                        "fetch": [],
                        "sysName": "buyer_country",
                        "name": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Countries"
                    },
                    {
                        "fieldSysName": "buyer_description",
                        "fetch": [],
                        "sysName": "buyer_description",
                        "name": "Комментарий",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_ebaynick",
                        "fetch": [],
                        "sysName": "buyer_ebaynick",
                        "name": "Ник  eBay/Мешок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_email",
                        "fetch": [],
                        "sysName": "buyer_email",
                        "name": "email",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_fb",
                        "fetch": [],
                        "sysName": "buyer_fb",
                        "name": "Профиль на ФБ",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_language",
                        "fetch": [],
                        "sysName": "buyer_language",
                        "name": "Переписка ведется на:",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "Русском",
                                "Английском"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_lastname",
                        "fetch": [],
                        "sysName": "buyer_lastname",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_name",
                        "fetch": [],
                        "sysName": "buyer_name",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_phone",
                        "fetch": [],
                        "sysName": "buyer_phone",
                        "name": "Телефон",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_source",
                        "fetch": [],
                        "sysName": "buyer_source",
                        "name": "Откуда пришел",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "places"
                    },
                    {
                        "fieldSysName": "buyer_state",
                        "fetch": [],
                        "sysName": "buyer_state",
                        "name": "Штат",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_zipcode",
                        "fetch": [],
                        "sysName": "buyer_zipcode",
                        "name": "Индекс",
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
                    }
                ],
                "fields": {
                    "buyer_address": {
                        "id": "buyer_address",
                        "content": "Адрес",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "buyer_country": {
                        "id": "buyer_country",
                        "content": "Страна",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Countries",
                        "actions": []
                    },
                    "buyer_description": {
                        "id": "buyer_description",
                        "content": "Комментарий",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "buyer_ebaynick": {
                        "id": "buyer_ebaynick",
                        "content": "Ник  eBay/Мешок",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "buyer_email": {
                        "id": "buyer_email",
                        "content": "email",
                        "type": "field",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "buyer_fb": {
                        "id": "buyer_fb",
                        "content": "Профиль на ФБ",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "buyer_language": {
                        "id": "buyer_language",
                        "content": "Переписка ведется на:",
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
                            "booleanOptions": [
                                "Русском",
                                "Английском"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "buyer_lastname": {
                        "id": "buyer_lastname",
                        "content": "Фамилия",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "buyer_name": {
                        "id": "buyer_name",
                        "content": "Имя",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "buyer_phone": {
                        "id": "buyer_phone",
                        "content": "Телефон",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "buyer_source": {
                        "id": "buyer_source",
                        "content": "Откуда пришел",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "places",
                        "actions": []
                    },
                    "buyer_state": {
                        "id": "buyer_state",
                        "content": "Штат",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "buyer_zipcode": {
                        "id": "buyer_zipcode",
                        "content": "Индекс",
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
                    }
                },
                "fieldParams": {
                    "buyer_address": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_country": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_ebaynick": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_email": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_fb": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsButton": true
                    },
                    "buyer_language": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_lastname": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_phone": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_state": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "buyer_zipcode": {
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
                    "buyer_source": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "name_of_place": {
                                    "id": "name_of_place",
                                    "content": "Название площадки",
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
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "name_of_place": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "name_of_place",
                                "id"
                            ]
                        }
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "buyer_name",
                            "buyer_lastname",
                            "buyer_address",
                            "buyer_country",
                            "buyer_email",
                            "buyer_description",
                            "buyer_ebaynick",
                            "buyer_fb",
                            "buyer_language",
                            "buyer_phone",
                            "buyer_state",
                            "buyer_zipcode",
                            "id",
                            "buyer_source"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "buyer_address": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_country": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_ebaynick": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_email": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_fb": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true
                },
                "buyer_language": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_lastname": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_phone": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_state": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "buyer_zipcode": {
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
                "buyer_source": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "name_of_place": {
                                "id": "name_of_place",
                                "content": "Название площадки",
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
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "name_of_place": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "name_of_place",
                            "id"
                        ]
                    }
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "buyer_address",
                        "fetch": [],
                        "sysName": "buyer_address",
                        "name": "Адрес",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_country",
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
                        "sysName": "buyer_country",
                        "name": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Countries"
                    },
                    {
                        "fieldSysName": "buyer_description",
                        "fetch": [],
                        "sysName": "buyer_description",
                        "name": "Комментарий",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_ebaynick",
                        "fetch": [],
                        "sysName": "buyer_ebaynick",
                        "name": "Ник  eBay/Мешок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_email",
                        "fetch": [],
                        "sysName": "buyer_email",
                        "name": "email",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_fb",
                        "fetch": [],
                        "sysName": "buyer_fb",
                        "name": "Профиль на ФБ",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_language",
                        "fetch": [],
                        "sysName": "buyer_language",
                        "name": "Переписка ведется на:",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "Русском",
                                "Английском"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_lastname",
                        "fetch": [],
                        "sysName": "buyer_lastname",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_name",
                        "fetch": [],
                        "sysName": "buyer_name",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_phone",
                        "fetch": [],
                        "sysName": "buyer_phone",
                        "name": "Телефон",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_source",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name_of_place",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "buyer_source",
                        "name": "Откуда пришел",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "places"
                    },
                    {
                        "fieldSysName": "buyer_state",
                        "fetch": [],
                        "sysName": "buyer_state",
                        "name": "Штат",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_zipcode",
                        "fetch": [],
                        "sysName": "buyer_zipcode",
                        "name": "Индекс",
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
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "buyer_address",
                        "fetch": [],
                        "sysName": "buyer_address",
                        "name": "Адрес",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_country",
                        "fetch": [],
                        "sysName": "buyer_country",
                        "name": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Countries"
                    },
                    {
                        "fieldSysName": "buyer_description",
                        "fetch": [],
                        "sysName": "buyer_description",
                        "name": "Комментарий",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_ebaynick",
                        "fetch": [],
                        "sysName": "buyer_ebaynick",
                        "name": "Ник  eBay/Мешок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_email",
                        "fetch": [],
                        "sysName": "buyer_email",
                        "name": "email",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_fb",
                        "fetch": [],
                        "sysName": "buyer_fb",
                        "name": "Профиль на ФБ",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_language",
                        "fetch": [],
                        "sysName": "buyer_language",
                        "name": "Переписка ведется на:",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "Русском",
                                "Английском"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "buyer_lastname",
                        "fetch": [],
                        "sysName": "buyer_lastname",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_name",
                        "fetch": [],
                        "sysName": "buyer_name",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_phone",
                        "fetch": [],
                        "sysName": "buyer_phone",
                        "name": "Телефон",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_source",
                        "fetch": [],
                        "sysName": "buyer_source",
                        "name": "Откуда пришел",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "places"
                    },
                    {
                        "fieldSysName": "buyer_state",
                        "fetch": [],
                        "sysName": "buyer_state",
                        "name": "Штат",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "buyer_zipcode",
                        "fetch": [],
                        "sysName": "buyer_zipcode",
                        "name": "Индекс",
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
                    }
                ],
                "fields": {
                    "buyer_address": {
                        "id": "buyer_address",
                        "content": "Адрес",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "buyer_country": {
                        "id": "buyer_country",
                        "content": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Countries"
                    },
                    "buyer_description": {
                        "id": "buyer_description",
                        "content": "Комментарий",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "buyer_ebaynick": {
                        "id": "buyer_ebaynick",
                        "content": "Ник  eBay/Мешок",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "buyer_email": {
                        "id": "buyer_email",
                        "content": "email",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "buyer_fb": {
                        "id": "buyer_fb",
                        "content": "Профиль на ФБ",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "buyer_language": {
                        "id": "buyer_language",
                        "content": "Переписка ведется на:",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "Русском",
                                "Английском"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "buyer_lastname": {
                        "id": "buyer_lastname",
                        "content": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "buyer_name": {
                        "id": "buyer_name",
                        "content": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "buyer_phone": {
                        "id": "buyer_phone",
                        "content": "Телефон",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "buyer_source": {
                        "id": "buyer_source",
                        "content": "Откуда пришел",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "places"
                    },
                    "buyer_state": {
                        "id": "buyer_state",
                        "content": "Штат",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "buyer_zipcode": {
                        "id": "buyer_zipcode",
                        "content": "Индекс",
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
                    }
                },
                "fieldParams": {
                    "buyer_address": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_country": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_description": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_ebaynick": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_email": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_fb": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_language": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_lastname": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_phone": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_state": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_zipcode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    },
                    "buyer_source": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80
                    }
                },
                "fieldOrder": [
                    "buyer_lastname",
                    "buyer_name",
                    "buyer_ebaynick",
                    "buyer_address",
                    "buyer_country",
                    "buyer_description",
                    "buyer_email",
                    "buyer_fb",
                    "buyer_language",
                    "buyer_phone",
                    "buyer_state",
                    "buyer_zipcode",
                    "id",
                    "buyer_source"
                ]
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "buyer_address",
                "dataType": "string",
                "name": "Адрес",
                "id": "77051617714655950",
                "link": null,
                "group": "1617715409024",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_country",
                "dataType": "link",
                "name": "Страна",
                "id": "84531617714254980",
                "link": "Countries",
                "group": "1617715409024",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": true,
                "linkOrArrayLinkType": true,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_description",
                "dataType": "string",
                "name": "Комментарий",
                "id": "53941617714751891",
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
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_ebaynick",
                "dataType": "string",
                "name": "Ник  eBay/Мешок",
                "id": "51891617727142209",
                "link": "",
                "group": "1617715451399",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_email",
                "dataType": "string",
                "name": "email",
                "id": "66451617714089733",
                "link": "",
                "group": "1617715451399",
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
                "format": "email",
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_fb",
                "dataType": "string",
                "name": "Профиль на ФБ",
                "id": "30681617715079162",
                "link": "",
                "group": "1617715451399",
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
                "format": "webLink",
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_language",
                "dataType": "boolean",
                "name": "Переписка ведется на:",
                "id": "14121617714150793",
                "link": "",
                "group": "1617715451399",
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
                    "booleanOptions": [
                        "Русском",
                        "Английском"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea"
                },
                "groupName": null,
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_lastname",
                "dataType": "string",
                "name": "Фамилия",
                "id": "44161617714020785",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_name",
                "dataType": "string",
                "name": "Имя",
                "id": "27271617713917084",
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
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_phone",
                "dataType": "string",
                "name": "Телефон",
                "id": "94701617714137496",
                "link": null,
                "group": "1617715451399",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_source",
                "dataType": "link",
                "name": "Откуда пришел",
                "id": "83481622141951226",
                "link": "places",
                "group": "1617715451399",
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
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkType": true,
                "linkOrArrayLinkType": true,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_state",
                "dataType": "string",
                "name": "Штат",
                "id": "75591617714605689",
                "link": null,
                "group": "1617715409024",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "buyer_zipcode",
                "dataType": "string",
                "name": "Индекс",
                "id": "82071617714421613",
                "link": null,
                "group": "1617715409024",
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
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
                "arrayLink": false,
                "indexExists": false,
                "linkType": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {}
            }
        ],
        "data": [
            {
                "buyer_name": "Ждем покупателя",
                "id": "0",
                "buyer_address": "",
                "buyer_country": "",
                "buyer_description": "",
                "buyer_ebaynick": "",
                "buyer_email": "",
                "buyer_fb": "",
                "buyer_language": "",
                "buyer_lastname": "",
                "buyer_phone": "",
                "buyer_source": "",
                "buyer_state": "",
                "buyer_zipcode": ""
            },
            {
                "buyer_source": {
                    "name_of_place": "Artegogallery.RU",
                    "id": "1"
                },
                "buyer_lastname": "Петров",
                "buyer_language": true,
                "id": "8a01b3fe-d579-45ea-bbc4-02a8e9953f59",
                "buyer_phone": "2128506",
                "buyer_zipcode": "3423",
                "buyer_country": {
                    "id": "RU"
                },
                "buyer_name": "Иван",
                "buyer_ebaynick": "petroff",
                "buyer_description": "﻿﻿ArtNow\n\nУлица Скульптора Мухиной 3, 260\nТемирканова Бэла Владимировна\n89031216942",
                "buyer_address": "",
                "buyer_email": "",
                "buyer_fb": "",
                "buyer_state": ""
            },
            {
                "buyer_name": "Маша",
                "buyer_country": {
                    "id": "RU"
                },
                "id": "f66c8db7-3496-46ff-8f88-5044ea410a74",
                "buyer_address": "",
                "buyer_description": "",
                "buyer_ebaynick": "",
                "buyer_email": "",
                "buyer_fb": "",
                "buyer_language": "",
                "buyer_lastname": "",
                "buyer_phone": "",
                "buyer_source": "",
                "buyer_state": "",
                "buyer_zipcode": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "buyer_address",
                1373033
            ],
            [
                "buyer_country.country",
                1373054
            ],
            [
                "buyer_country.id",
                1373054
            ],
            [
                "buyer_description",
                1373033
            ],
            [
                "buyer_ebaynick",
                1373033
            ],
            [
                "buyer_email",
                1373033
            ],
            [
                "buyer_fb",
                1373033
            ],
            [
                "buyer_language",
                1373033
            ],
            [
                "buyer_lastname",
                1373033
            ],
            [
                "buyer_name",
                1373033
            ],
            [
                "buyer_phone",
                1373033
            ],
            [
                "buyer_source.id",
                1371827
            ],
            [
                "buyer_source.name_of_place",
                1371827
            ],
            [
                "buyer_state",
                1373033
            ],
            [
                "buyer_zipcode",
                1373033
            ],
            [
                "id",
                1373033
            ]
        ],
        "writeFields": [
            "buyer_address",
            "buyer_country",
            "buyer_description",
            "buyer_ebaynick",
            "buyer_email",
            "buyer_fb",
            "buyer_language",
            "buyer_lastname",
            "buyer_name",
            "buyer_phone",
            "buyer_source",
            "buyer_state",
            "buyer_zipcode",
            "id"
        ],
        "structures": {
            "1371827": {
                "networkID": 4203,
                "id": 1371827,
                "dateCreated": "2021-04-01T19:57:46Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Площадки",
                "sysName": "places",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"logo\",\"dataType\":\"file\",\"name\":\" Логотип\",\"id\":\"17911617310508325\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"counter_artworks\",\"dataType\":\"number\",\"name\":\"Количество картин на площадке\",\"id\":\"71031619303150534\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"list\",\"dataType\":\"arrayLink\",\"name\":\"Что размещено\",\"id\":\"71141617307742781\",\"link\":\"listings\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"json\":false},{\"sysName\":\"url\",\"dataType\":\"string\",\"name\":\"Ссылка\",\"id\":\"82471617307535265\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"name_of_place\",\"dataType\":\"string\",\"name\":\"Название площадки\",\"id\":\"86541617307706390\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false}]",
                "jsonGroupSettings": "[]",
                "jsonViewIdSettings": "[{\"sysName\":\"name_of_place\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-04-24T22:26:45Z",
                "createBy": 4244,
                "changedBy": 4244,
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
                    "json": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33618304
            },
            "1373033": {
                "networkID": 4203,
                "id": 1373033,
                "dateCreated": "2021-04-06T12:58:26Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Покупатели",
                "sysName": "Buyers",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_language\",\"dataType\":\"boolean\",\"name\":\"Переписка ведется на:\",\"id\":\"14121617714150793\",\"link\":\"\",\"group\":\"1617715451399\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Русском\",\"Английском\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_name\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"27271617713917084\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_fb\",\"dataType\":\"string\",\"name\":\"Профиль на ФБ\",\"id\":\"30681617715079162\",\"link\":\"\",\"group\":\"1617715451399\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_orders\",\"dataType\":\"arrayLink\",\"name\":\"Заказы\",\"id\":\"35151617715039730\",\"link\":\"orders\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":true,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{}},{\"sysName\":\"buyer_lastname\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"44161617714020785\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_ebaynick\",\"dataType\":\"string\",\"name\":\"Ник  eBay/Мешок\",\"id\":\"51891617727142209\",\"link\":\"\",\"group\":\"1617715451399\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_description\",\"dataType\":\"string\",\"name\":\"Комментарий\",\"id\":\"53941617714751891\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_email\",\"dataType\":\"string\",\"name\":\"email\",\"id\":\"66451617714089733\",\"link\":\"\",\"group\":\"1617715451399\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_greeting\",\"dataType\":\"json\",\"name\":\"Обращение в переписке\",\"id\":\"71441617727553643\",\"link\":\"\",\"group\":\"1617715451399\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":true,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_state\",\"dataType\":\"string\",\"name\":\"Штат\",\"id\":\"75591617714605689\",\"link\":null,\"group\":\"1617715409024\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_address\",\"dataType\":\"string\",\"name\":\"Адрес\",\"id\":\"77051617714655950\",\"link\":null,\"group\":\"1617715409024\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"78821617729852271\",\"link\":null,\"group\":\"1617715409024\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_zipcode\",\"dataType\":\"string\",\"name\":\"Индекс\",\"id\":\"82071617714421613\",\"link\":null,\"group\":\"1617715409024\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}},{\"sysName\":\"buyer_source\",\"dataType\":\"link\",\"name\":\"Откуда пришел\",\"id\":\"83481622141951226\",\"link\":\"places\",\"group\":\"1617715451399\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":true,\"linkOrArrayLinkType\":true,\"typeVariable\":{}},{\"sysName\":\"buyer_country\",\"dataType\":\"link\",\"name\":\"Страна\",\"id\":\"84531617714254980\",\"link\":\"Countries\",\"group\":\"1617715409024\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":true,\"linkOrArrayLinkType\":true,\"typeVariable\":{}},{\"sysName\":\"buyer_phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"94701617714137496\",\"link\":null,\"group\":\"1617715451399\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"arrayLink\":false,\"indexExists\":false,\"linkType\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{}}]",
                "jsonGroupSettings": "[{\"name\":\"Коммуникации\",\"id\":1617715451399,\"order\":0},{\"name\":\"Адрес\",\"id\":1617715409024,\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"buyer_name\"},{\"sysName\":\"buyer_lastname\"},{\"sysName\":\"buyer_aebaynick\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-27T18:59:44Z",
                "createBy": 4244,
                "changedBy": 4244,
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
                    "json": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33618999
            },
            "1373054": {
                "networkID": 4203,
                "id": 1373054,
                "dateCreated": "2021-04-06T16:48:05Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Страны",
                "sysName": "Countries",
                "jsonObject": "[{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false},{\"sysName\":\"value\",\"dataType\":\"string\",\"name\":\"Страна\",\"id\":\"50451617730736683\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false}]",
                "jsonGroupSettings": "[]",
                "jsonViewIdSettings": "[{\"sysName\":\"id\"},{\"sysName\":\"value\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-04-06T18:20:27Z",
                "createBy": 4244,
                "changedBy": 4244,
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
                    "json": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33618463
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": null,
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