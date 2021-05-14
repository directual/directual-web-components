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
        "sl": "adminQuestions",
        "pageSize": "30",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "user_id",
            "deleteField": "",
            "cardBodyText": "admin_id",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "admin_id",
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
                        "sysName": "admin_id",
                        "name": "Кто ответил",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "answer",
                        "fetch": [],
                        "sysName": "answer",
                        "name": "Ответ",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "date",
                        "fetch": [],
                        "sysName": "date",
                        "name": "Дата вопроса",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "date_answer",
                        "fetch": [],
                        "sysName": "date_answer",
                        "name": "Дата ответа",
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
                        "fieldSysName": "question",
                        "fetch": [],
                        "sysName": "question",
                        "name": "Вопрос",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [
                            {
                                "fieldSysName": "22_functions",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "name",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "52_functions",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "name",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "TG_username",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "firstName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "image",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "isBlocked",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "jobs_selected",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lastName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "salary_text",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "type",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "user_id",
                        "name": "Кто спросил",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "admin_id": {
                        "id": "admin_id",
                        "content": "Кто ответил",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "answer": {
                        "id": "answer",
                        "content": "Ответ",
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
                        "content": "Дата вопроса",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "date_answer": {
                        "id": "date_answer",
                        "content": "Дата ответа",
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "question": {
                        "id": "question",
                        "content": "Вопрос",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "user_id": {
                        "id": "user_id",
                        "content": "Кто спросил",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "action__36061609255776251": {
                        "content": "Ответить",
                        "id": "action__36061609255776251",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "admin_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "answer": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date_answer": {
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
                    "question": {
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
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "22_functions": {
                                    "id": "22_functions",
                                    "content": "Функции для категории 22",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "52_functions": {
                                    "id": "52_functions",
                                    "content": "Функции для категории 52",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "TG_username": {
                                    "id": "TG_username",
                                    "content": "Telegram",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "firstName": {
                                    "id": "firstName",
                                    "content": "Имя",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "image": {
                                    "id": "image",
                                    "content": "image",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "isBlocked": {
                                    "id": "isBlocked",
                                    "content": "Block user",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "lastName": {
                                    "id": "lastName",
                                    "content": "Фамилия",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "salary_text": {
                                    "id": "salary_text",
                                    "content": "Ожидания по доходу",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "type": {
                                    "id": "type",
                                    "content": "Категория вакансий",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
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
                                    }
                                },
                                "jobs_selected": {
                                    "id": "jobs_selected",
                                    "content": "Количество подходящих вакансий",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": "positiveNum",
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "22_functions": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "52_functions": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "TG_username": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "firstName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "image": {
                                    "include": true,
                                    "fileImageFormat": "circle",
                                    "fileImageSize": 200,
                                    "fileImage": true
                                },
                                "isBlocked": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "lastName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "salary_text": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "type": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "jobs_selected": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "image",
                                "firstName",
                                "lastName",
                                "type",
                                "jobs_selected",
                                "22_functions",
                                "52_functions",
                                "TG_username",
                                "isBlocked",
                                "salary_text"
                            ]
                        },
                        "subHeader": "Пользователь: "
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "user_id",
                            "question",
                            "date",
                            "admin_id",
                            "answer",
                            "date_answer",
                            "id",
                            "action__36061609255776251"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "adminQuestionsAnswer",
                        "id": "36061609255776251",
                        "name": "Ответить",
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
                                    "fieldSysName": "admin_id",
                                    "fetch": [],
                                    "sysName": "admin_id",
                                    "name": "Кто ответил",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                },
                                {
                                    "fieldSysName": "answer",
                                    "fetch": [],
                                    "sysName": "answer",
                                    "name": "Ответ",
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
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "92531609255796165",
                                "field": {
                                    "fieldSysName": "answer",
                                    "fetch": [],
                                    "sysName": "answer",
                                    "name": "Ответ",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "24221609255801992",
                                "target": "admin_id",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "92331609255810510",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ],
                        "closePopup": true
                    }
                ]
            },
            "fields": {
                "admin_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "answer": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_answer": {
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
                "question": {
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
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "22_functions": {
                                "id": "22_functions",
                                "content": "Функции для категории 22",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": null
                            },
                            "52_functions": {
                                "id": "52_functions",
                                "content": "Функции для категории 52",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": null
                            },
                            "TG_username": {
                                "id": "TG_username",
                                "content": "Telegram",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "firstName": {
                                "id": "firstName",
                                "content": "Имя",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "image": {
                                "id": "image",
                                "content": "image",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": null,
                                "formatOptions": null
                            },
                            "isBlocked": {
                                "id": "isBlocked",
                                "content": "Block user",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
                                "format": null,
                                "formatOptions": {}
                            },
                            "lastName": {
                                "id": "lastName",
                                "content": "Фамилия",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "salary_text": {
                                "id": "salary_text",
                                "content": "Ожидания по доходу",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "type": {
                                "id": "type",
                                "content": "Категория вакансий",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
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
                                }
                            },
                            "jobs_selected": {
                                "id": "jobs_selected",
                                "content": "Количество подходящих вакансий",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "22_functions": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "52_functions": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "TG_username": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "firstName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "image": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "isBlocked": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "salary_text": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "type": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "jobs_selected": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "image",
                            "firstName",
                            "lastName",
                            "type",
                            "jobs_selected",
                            "22_functions",
                            "52_functions",
                            "TG_username",
                            "isBlocked",
                            "salary_text"
                        ]
                    },
                    "subHeader": "Пользователь: "
                }
            },
            "actions": [
                {
                    "sysName": "adminQuestionsAnswer",
                    "id": "36061609255776251",
                    "name": "Ответить",
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
                                "fieldSysName": "admin_id",
                                "fetch": [],
                                "sysName": "admin_id",
                                "name": "Кто ответил",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            },
                            {
                                "fieldSysName": "answer",
                                "fetch": [],
                                "sysName": "answer",
                                "name": "Ответ",
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
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "92531609255796165",
                            "field": {
                                "fieldSysName": "answer",
                                "fetch": [],
                                "sysName": "answer",
                                "name": "Ответ",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "24221609255801992",
                            "target": "admin_id",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "92331609255810510",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "closePopup": true
                }
            ]
        },
        "tableTitle": "Вопросы пользователей",
        "actions": null,
        "headers": [
            {
                "sysName": "admin_id",
                "name": "Кто ответил",
                "dataType": "link",
                "id": "76431600436848180",
                "link": "WebUser",
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "json": false,
                "linkType": true,
                "typeVariable": {},
                "arrayLink": false
            },
            {
                "sysName": "answer",
                "name": "Ответ",
                "dataType": "string",
                "id": "97611600436853189",
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "arrayLink": false
            },
            {
                "sysName": "date",
                "name": "Дата вопроса",
                "dataType": "date",
                "id": "83411601287631450",
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
                    "dateFormat": "MMMM D, Y",
                    "timeFormat": ", HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "arrayLink": false
            },
            {
                "sysName": "date_answer",
                "name": "Дата ответа",
                "dataType": "date",
                "id": "86211605857182746",
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
                    "dateFormat": "MMMM D, Y",
                    "timeFormat": ", HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "arrayLink": false
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "arrayLink": false
            },
            {
                "sysName": "question",
                "name": "Вопрос",
                "dataType": "string",
                "id": "91971600436849319",
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "arrayLink": false
            },
            {
                "sysName": "user_id",
                "name": "Кто спросил",
                "dataType": "link",
                "id": "92661600436847692",
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "json": false,
                "linkType": true,
                "typeVariable": {},
                "arrayLink": false
            }
        ],
        "data": [
            {
                "user_id": {
                    "jobs_selected": 0,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/4e0dbd4b-6fd8-4785-9f68-e383bf31aa24.jpg",
                    "52_functions": [
                        {
                            "name": "PR",
                            "id": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1"
                        },
                        {
                            "name": "Маркетинг",
                            "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
                        },
                        {
                            "name": "Event",
                            "id": "286b253f-f862-49a5-bdca-2301edc2a679"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        }
                    ],
                    "lastName": "Забело",
                    "firstName": "Яна",
                    "TG_username": "yanazabelo",
                    "type": "52"
                },
                "question": "после того как работодатель заинтересовался моей кандидатурой  мне необходимо связываться с ним по почте?",
                "date": 1621017753000,
                "id": "2e9407a2-61c2-4bfe-b87a-764115d902e2"
            },
            {
                "question": "Не могу посмотреть отклик ",
                "user_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7cf7c8aa-00c5-421d-8ae6-baf8772b09e7.jpg",
                    "lastName": "Polykovskaya",
                    "firstName": "Irina",
                    "TG_username": "irina_polykovskaya"
                },
                "date": 1620929184000,
                "id": "d1a38c08-4757-407c-a5c1-d049b0d4b1ca"
            },
            {
                "date": 1620929153000,
                "user_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7cf7c8aa-00c5-421d-8ae6-baf8772b09e7.jpg",
                    "lastName": "Polykovskaya",
                    "firstName": "Irina",
                    "TG_username": "irina_polykovskaya"
                },
                "id": "71578cc6-53b4-4e72-8dab-dbfc20cfd0ad"
            },
            {
                "user_id": {
                    "jobs_selected": 35,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/c7ce88ed-c8a6-4f5b-85cf-0f06519feb80.jpg",
                    "52_functions": [
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "Администратор",
                            "id": "de84414a-0886-41c4-bc51-1321abf1f722"
                        }
                    ],
                    "lastName": "Венедиктова",
                    "firstName": "Александра",
                    "TG_username": "sasha_venechka",
                    "type": "52"
                },
                "date": 1620928954000,
                "question": "А если я хочу откликнуться на вакансию, но у меня не выбраны функции для «мэтча»?",
                "id": "493df9a0-92cb-472b-9d37-33a12f82422a"
            },
            {
                "question": "Добрый день! Я хочу откликнуться на вакансию из Вашего аккаунта в Инстаграм. Что мне нужно для этого сделать?",
                "date": 1620924497000,
                "user_id": {
                    "jobs_selected": 0,
                    "lastName": "Заевская",
                    "firstName": "Ася",
                    "TG_username": "zaevskaia",
                    "type": "52"
                },
                "id": "5da6b8aa-d798-45dc-993b-e570c94272ea"
            },
            {
                "user_id": {
                    "jobs_selected": 33,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/03337d33-2215-43cc-b356-b6305d49080b.jpg",
                    "52_functions": [
                        {
                            "name": "PR",
                            "id": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1"
                        },
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Баер",
                            "id": "d8a43cf3-5903-4073-95e3-d7f400ff28cc"
                        },
                        {
                            "name": "Art-директор",
                            "id": "42793449-612e-4a86-b519-e59c8c4d0f7b"
                        },
                        {
                            "name": "Маркетинг",
                            "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
                        },
                        {
                            "name": " Таргетинг",
                            "id": "b0458bef-2b44-42a7-a27f-69f4043eb19a"
                        }
                    ],
                    "lastName": "Назаренко",
                    "firstName": "Карина",
                    "type": "52"
                },
                "question": "Как я могу откликнуться на вакансию?",
                "date": 1620921426000,
                "id": "ac4bc1a3-4083-46ab-96af-857290a3e108"
            },
            {
                "question": "Как откликаться на вакансии, представленные в Инстаграм?",
                "date_answer": 1620861770000,
                "user_id": {
                    "jobs_selected": 0,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/713bf98a-18d3-4cc1-a23e-a8248408ce17.jpg",
                    "22_functions": [
                        {
                            "name": "Управляющий",
                            "id": "d6d250fd-4f29-4b09-a140-9757ac0266aa"
                        },
                        {
                            "name": "Повар",
                            "id": "cf10904f-55e2-4678-8b88-3f01f70b8308"
                        },
                        {
                            "name": "Администратор",
                            "id": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92"
                        },
                        {
                            "name": "Кондитер",
                            "id": "6db6c43a-0b91-4dd6-a872-19afe943f23f"
                        },
                        {
                            "name": "Бариста",
                            "id": "8736e749-48f8-4dfb-ba6d-483d0ce9f350"
                        },
                        {
                            "name": "Официант",
                            "id": "772fafad-36a7-4ccc-b338-ebb3b670e554"
                        },
                        {
                            "name": "Менеджер шоурума",
                            "id": "d4dbbd3d-2351-4019-aba1-b82890fd8b26"
                        }
                    ],
                    "lastName": "Zamyatina",
                    "firstName": "Anita",
                    "TG_username": "zamanva",
                    "type": "22"
                },
                "id": "690e2bc9-0727-4bad-b1c9-1a2f62155575",
                "date": 1620851452000,
                "answer": "Добрый день! Простите за задержку, не увидела ваш вопрос) Нажмите /start , бот предложит вам зарегистрироваться. Заполните профиль кандидата (не забудьте о резюме) и выберите в нем функции, которые указаны в описании вакансии, чтобы случился «мэтч»- например, у вакансии фуд-фотографа от How to Green функция «фотограф». Также посмотрите в нашем инстаграме пост-инструкцию к боту по хэштегу #2252chatbot.  Она также закреплена в нашем телеграм-канале.",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Как прикрепить резюме в профиль кандидата?",
                "date_answer": 1620845859000,
                "user_id": {
                    "jobs_selected": 34,
                    "52_functions": [],
                    "lastName": "Petrochenko",
                    "firstName": "Alyona",
                    "type": "22"
                },
                "id": "c52ab960-a34f-483a-91df-3c3c9f50b34a",
                "date": 1620845826000,
                "answer": "Напишите боту /updatecv",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Не могу откликаться на вакансии, хотя все указанно правильно чтобы можно было откликаться, в чем может быть проблема",
                "date_answer": 1620833710000,
                "user_id": {
                    "jobs_selected": 128,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/b43d73f5-321b-4039-91e4-c57a586b34c4.jpg",
                    "52_functions": [
                        {
                            "name": "Графический дизайн",
                            "id": "02b3892a-9ca7-40e3-bb79-2a4682fe445c"
                        },
                        {
                            "name": "SMM",
                            "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
                        },
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "Фотограф",
                            "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
                        },
                        {
                            "name": "Видеограф",
                            "id": "aaa68f68-4196-4561-b4ca-6957ee1f5271"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "PR",
                            "id": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1"
                        },
                        {
                            "name": "Редактор",
                            "id": "565e74f1-6a97-491b-a97b-7578d26f9b0e"
                        },
                        {
                            "name": "Копирайтинг",
                            "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
                        },
                        {
                            "name": "UI/UX дизайн",
                            "id": "fdd5dd01-1867-4f2d-a579-4032bc691551"
                        },
                        {
                            "name": "Fashion-дизайнер",
                            "id": "f357eb22-9b97-4889-ae7b-1359a837626e"
                        },
                        {
                            "name": "Art-директор",
                            "id": "42793449-612e-4a86-b519-e59c8c4d0f7b"
                        },
                        {
                            "name": "Motion-дизайнер",
                            "id": "805e95ec-380a-4822-ad5f-bddbd2b0f695"
                        },
                        {
                            "name": "Маркетинг",
                            "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
                        },
                        {
                            "name": "Ретушер",
                            "id": "2b5a280e-052e-430a-a5bd-0f340d6f9298"
                        },
                        {
                            "name": "Дизайн",
                            "id": "56890dd6-b40c-4293-83b9-bc0ad4e4cf6f"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        },
                        {
                            "name": "Рекрутер",
                            "id": "eccbdeb2-465b-423b-a1a4-753f80061e5d"
                        },
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Интернет-магазин",
                            "id": "d7d77bb4-7414-456a-9bef-843bd3e3d800"
                        },
                        {
                            "name": "Account ",
                            "id": "c68109f6-1b68-4f09-ac34-67a8390ea2dd"
                        },
                        {
                            "name": "Администратор",
                            "id": "de84414a-0886-41c4-bc51-1321abf1f722"
                        }
                    ],
                    "lastName": "Daria",
                    "firstName": "Daria Nechaeva",
                    "TG_username": "DariaNechaeva",
                    "type": "52"
                },
                "id": "de9810d3-5a75-4fe9-b0c3-40858adb27ff",
                "date": 1620833370000,
                "answer": "Дарья, добрый день! Напишите, пожалуйста, мне в телеграм (@sotyaax2)",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Очень жду ответ на предыдущий вопрос! :)",
                "date_answer": 1620831162000,
                "user_id": {
                    "jobs_selected": 35,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/c7ce88ed-c8a6-4f5b-85cf-0f06519feb80.jpg",
                    "52_functions": [
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "Администратор",
                            "id": "de84414a-0886-41c4-bc51-1321abf1f722"
                        }
                    ],
                    "lastName": "Венедиктова",
                    "firstName": "Александра",
                    "TG_username": "sasha_venechka",
                    "type": "52"
                },
                "id": "18f3f3a8-0293-4bf1-9591-4ff454f44cc8",
                "date": 1620830757000,
                "answer": "Добрый день! Простите за задержку, не увидела ваш вопрос) Нажмите /start , бот предложит вам зарегистрироваться. Заполните профиль кандидата (не забудьте о резюме) и выберите в нем функции, которые указаны в описании вакансии, чтобы случился «мэтч»- например, у вакансии фуд-фотографа от How to Green функция «фотограф». Также посмотрите в нашем инстаграме пост-инструкцию к боту по хэштегу #2252chatbot.  Она также закреплена в нашем телеграм-канале.",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Восстановить пароль",
                "date_answer": 1620819407000,
                "user_id": {
                    "jobs_selected": 48,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/59434c5f-06c1-4002-a5c3-235577fb365a.jpg",
                    "52_functions": [
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Стилист",
                            "id": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095"
                        },
                        {
                            "name": "Маркетинг",
                            "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
                        },
                        {
                            "name": "Менеджер проектов",
                            "id": "e3673d9f-84cc-4e92-bdae-5bd81ad3fefc"
                        },
                        {
                            "name": "Продакт менеджер ",
                            "id": "dca9b4e9-c48c-4626-80bd-c8efc04d3c5b"
                        },
                        {
                            "name": "Event",
                            "id": "286b253f-f862-49a5-bdca-2301edc2a679"
                        },
                        {
                            "name": "PR",
                            "id": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1"
                        },
                        {
                            "name": "Fashion-дизайнер",
                            "id": "f357eb22-9b97-4889-ae7b-1359a837626e"
                        },
                        {
                            "name": "Sale менеджер",
                            "id": "00ad0a1c-5600-458e-8b2b-7e12b9e6588d"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        }
                    ],
                    "lastName": "Savina",
                    "firstName": "Olga",
                    "TG_username": "savinastylist",
                    "type": "52"
                },
                "id": "61338bd8-acf0-4e4c-a01f-77dd67f96ea9",
                "date": 1620819379000,
                "answer": "Напишите боту /changepassword",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Как откликнуться на вакансию?",
                "date": 1620779490000,
                "user_id": {
                    "jobs_selected": 38,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/119831e7-8303-46e5-92e1-695bd50fd3c3.jpg",
                    "52_functions": [
                        {
                            "name": "Баер",
                            "id": "d8a43cf3-5903-4073-95e3-d7f400ff28cc"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Дизайн",
                            "id": "56890dd6-b40c-4293-83b9-bc0ad4e4cf6f"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        },
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        }
                    ],
                    "22_functions": [
                        {
                            "name": "Менеджер интернет-магазина",
                            "id": "fbbb2666-e00e-47f3-8235-0a5f59eadc8c"
                        }
                    ],
                    "lastName": "Афонаскина ",
                    "firstName": "ПОЛИНА",
                    "TG_username": "polinstvo",
                    "type": "52"
                },
                "id": "f34707b9-1409-427b-940a-b98e88114e91"
            },
            {
                "question": "Как добавить свое резюме?",
                "date_answer": 1620756047000,
                "user_id": {
                    "jobs_selected": 51,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/dded081b-46ce-4f62-9826-6acd8ff8f28b.jpg",
                    "52_functions": [
                        {
                            "name": "SMM",
                            "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
                        },
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "Продюссер",
                            "id": "69cf9997-fd45-442e-8590-74815535e949"
                        },
                        {
                            "name": "Стилист",
                            "id": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        }
                    ],
                    "lastName": "Мысина",
                    "firstName": "Мария",
                    "type": "52"
                },
                "id": "2692c14c-97a7-46ed-8764-00c3b8c78c79",
                "date": 1620754693000,
                "answer": "Напишите боту /updatecv",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Добрый день!\nЗаполнила профиль компании, создала вакансию и нажала разместить.  Пришло письмо, что статус вашей вакансии Креативный smm-менеджер в ЭКОНИКА изменен на Ожидает оплаты и пришло 2 варианта оплаты за 3000 и 4000 руб. \nПодскажите, чем отличается размещение и оплата этих тарифов. Плюс хотелось бы понимать, оплата может быть произведена только картой или Вы можете выставить договор-счет?\n",
                "date_answer": 1620745070000,
                "user_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/80dc5d68-9972-4e38-ad62-0f504f23b3a6.jpg",
                    "firstName": "Никонова Екатерина"
                },
                "id": "5320f1a8-3ecd-42a7-b2d3-077e518f7939",
                "date": 1620744883000,
                "answer": "Добрый день, Екатерина! Спасибо за доверие. Смотрите, тариф за 3000 рублей предусматривает размещение вакансии только в чат-боте, в то время как тариф за 4000 включает ращмещение вакансии в боте + инстаграме и телеграм-канале (суммарная аудитория 40 тысяч человек вместе с чат-ботом). Да, мы также можем выставить счет. Для этого напишите, пожалуйста, Дарье (@dariaust).\nС уважением,\nСоня",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Как через бот откликнуться на вакансию?",
                "date_answer": 1620741836000,
                "user_id": {
                    "jobs_selected": 0,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/e835a6b4-cc8d-4f6d-a357-2010a27de07e.jpg",
                    "52_functions": [
                        {
                            "name": "SMM",
                            "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
                        },
                        {
                            "name": "Fashion-дизайнер",
                            "id": "f357eb22-9b97-4889-ae7b-1359a837626e"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "Event",
                            "id": "286b253f-f862-49a5-bdca-2301edc2a679"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        },
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "Фотограф",
                            "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
                        },
                        {
                            "name": "Art-директор",
                            "id": "42793449-612e-4a86-b519-e59c8c4d0f7b"
                        },
                        {
                            "name": "Интернет-магазин",
                            "id": "d7d77bb4-7414-456a-9bef-843bd3e3d800"
                        }
                    ],
                    "lastName": "Рашидова",
                    "firstName": "Disney",
                    "type": "52"
                },
                "id": "9e06f1b0-b764-4b41-8157-1e2f34c43aa2",
                "date": 1620741726000,
                "answer": "Добрый день! Нажмите /start , бот предложит вам зарегистрироваться. Заполните профиль кандидата (не забудьте о резюме) и выберите в нем функции, которые указаны в описании вакансии, чтобы случился «мэтч»- например, у вакансии фуд-фотографа от How to Green функция «фотограф». Также посмотрите в нашем инстаграме пост-инструкцию к боту по хэштегу #2252chatbot.  Она также закреплена в нашем телеграм-канале.",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Почему я не вижу вакансии в боте, которые появляются в Инстаграм",
                "date_answer": 1620741021000,
                "user_id": {
                    "jobs_selected": 124,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/0bb87057-711f-47cd-b04f-30908cfaee2e.jpg",
                    "52_functions": [
                        {
                            "name": "Видеограф",
                            "id": "aaa68f68-4196-4561-b4ca-6957ee1f5271"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        },
                        {
                            "name": "Заместитель директора ",
                            "id": "a879abc4-6a98-436c-8042-40010a0c62d7"
                        },
                        {
                            "name": "Интернет-магазин",
                            "id": "d7d77bb4-7414-456a-9bef-843bd3e3d800"
                        },
                        {
                            "name": "Account ",
                            "id": "c68109f6-1b68-4f09-ac34-67a8390ea2dd"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Маркетинг",
                            "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
                        },
                        {
                            "name": "Стилист",
                            "id": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095"
                        },
                        {
                            "name": "Продюссер",
                            "id": "69cf9997-fd45-442e-8590-74815535e949"
                        },
                        {
                            "name": "Копирайтинг",
                            "id": "605143a0-bb72-49ec-a7c2-16d6a84baa6b"
                        },
                        {
                            "name": " Таргетинг",
                            "id": "b0458bef-2b44-42a7-a27f-69f4043eb19a"
                        },
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "SMM",
                            "id": "5c696884-c6e8-4608-a928-06ca86d28f52"
                        },
                        {
                            "name": "Редактор",
                            "id": "565e74f1-6a97-491b-a97b-7578d26f9b0e"
                        },
                        {
                            "name": "Фотограф",
                            "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
                        },
                        {
                            "name": "PR",
                            "id": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1"
                        },
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "IT",
                            "id": "57816d4e-5d1a-4240-8eda-0041ccdc3d55"
                        },
                        {
                            "name": "HR",
                            "id": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64"
                        },
                        {
                            "name": "Art-директор",
                            "id": "42793449-612e-4a86-b519-e59c8c4d0f7b"
                        },
                        {
                            "name": "Менеджер проектов",
                            "id": "e3673d9f-84cc-4e92-bdae-5bd81ad3fefc"
                        },
                        {
                            "name": "Рекрутер",
                            "id": "eccbdeb2-465b-423b-a1a4-753f80061e5d"
                        },
                        {
                            "name": "Event",
                            "id": "286b253f-f862-49a5-bdca-2301edc2a679"
                        }
                    ],
                    "22_functions": [
                        {
                            "name": "Администратор",
                            "id": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92"
                        },
                        {
                            "name": "Стилист",
                            "id": "9b643b1a-5e5d-45c2-9bfa-847fca9201c0"
                        },
                        {
                            "name": "Менеджер интернет-магазина",
                            "id": "fbbb2666-e00e-47f3-8235-0a5f59eadc8c"
                        },
                        {
                            "name": "Менеджер шоурума",
                            "id": "d4dbbd3d-2351-4019-aba1-b82890fd8b26"
                        },
                        {
                            "name": "Управляющий",
                            "id": "d6d250fd-4f29-4b09-a140-9757ac0266aa"
                        },
                        {
                            "name": "Флорист",
                            "id": "9e071824-e8b4-4fb8-82a4-7567ecd6876a"
                        }
                    ],
                    "lastName": "Фасахова",
                    "firstName": "Алиса",
                    "type": "52"
                },
                "id": "a7eeac1f-7529-4293-9778-c2f46e52d08d",
                "date": 1620740986000,
                "answer": "Добрый день! Поставьте в своем профиле функции, которые указаны в описании вакансии, которая вам нужна) и она появится в «подходящих».",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Как найти вакансию в боте из телеграм-канала, если ее нет в рекомендованных?",
                "date_answer": 1620740736000,
                "user_id": {
                    "jobs_selected": 52,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7047d20a-d35e-4b6d-a5f5-6371b1d29a68.jpg",
                    "52_functions": [
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Баер",
                            "id": "d8a43cf3-5903-4073-95e3-d7f400ff28cc"
                        },
                        {
                            "name": "Стилист",
                            "id": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095"
                        },
                        {
                            "name": "IT",
                            "id": "57816d4e-5d1a-4240-8eda-0041ccdc3d55"
                        },
                        {
                            "name": "Маркетинг",
                            "id": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Менеджер проектов",
                            "id": "e3673d9f-84cc-4e92-bdae-5bd81ad3fefc"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "Продакт менеджер ",
                            "id": "dca9b4e9-c48c-4626-80bd-c8efc04d3c5b"
                        },
                        {
                            "name": "Account ",
                            "id": "c68109f6-1b68-4f09-ac34-67a8390ea2dd"
                        },
                        {
                            "name": "Администратор",
                            "id": "de84414a-0886-41c4-bc51-1321abf1f722"
                        },
                        {
                            "name": "Интернет-магазин",
                            "id": "d7d77bb4-7414-456a-9bef-843bd3e3d800"
                        },
                        {
                            "name": "Ассистент",
                            "id": "73b56a2a-78fe-447e-a9d4-8a574b9e9359"
                        },
                        {
                            "name": "CRM",
                            "id": "df34e35c-e896-4a08-830d-57a2371f053c"
                        }
                    ],
                    "lastName": "Богданова",
                    "firstName": "Екатерина",
                    "TG_username": "katya_bogdanova",
                    "type": "52"
                },
                "id": "4883d402-dcf7-4794-941c-db730f9b05dc",
                "date": 1620739402000,
                "answer": "Добрый день! Поставьте в своем профиле функции, которые указаны в описании вакансии, которая вам нужна) и она появится в «подходящих».",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "user_id": {
                    "jobs_selected": 35,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/c7ce88ed-c8a6-4f5b-85cf-0f06519feb80.jpg",
                    "52_functions": [
                        {
                            "name": "Контент",
                            "id": "14746650-98aa-44d7-8989-472c8162dba8"
                        },
                        {
                            "name": "Бренд менеджер",
                            "id": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a"
                        },
                        {
                            "name": "Стажер ",
                            "id": "9d328ba3-59c4-43f8-809d-068d86dada3c"
                        },
                        {
                            "name": "Личный помощник",
                            "id": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2"
                        },
                        {
                            "name": "Администратор",
                            "id": "de84414a-0886-41c4-bc51-1321abf1f722"
                        }
                    ],
                    "lastName": "Венедиктова",
                    "firstName": "Александра",
                    "TG_username": "sasha_venechka",
                    "type": "52"
                },
                "question": "Как откликнуться на вакансию?",
                "date": 1620735114000,
                "id": "75d292b9-2ecd-4533-874a-fe8ac2a39c84"
            },
            {
                "question": "Перехожу по вакансии в бот, но ничего не происходит 🙁",
                "date_answer": 1620734706000,
                "user_id": {
                    "jobs_selected": 10,
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7e7fd9d1-3e1d-4079-af53-f82631fece46.jpg",
                    "52_functions": [
                        {
                            "name": "Фотограф",
                            "id": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c"
                        },
                        {
                            "name": "Видеограф",
                            "id": "aaa68f68-4196-4561-b4ca-6957ee1f5271"
                        }
                    ],
                    "lastName": "Криволапова",
                    "firstName": "Валерия",
                    "TG_username": "serolapka",
                    "type": "52"
                },
                "id": "3f1228c8-3737-4e6f-86af-0d5b1e0b2ff9",
                "date": 1620734665000,
                "answer": "Добрый день! Нажмите /start , бот предложит вам зарегистрироваться. Заполните профиль кандидата (не забудьте о резюме) и выберите в нем функции, которые указаны в описании вакансии, чтобы случился «мэтч»- например, у вакансии фуд-фотографа от How to Green функция «фотограф». Также посмотрите в нашем инстаграме пост-инструкцию к боту по хэштегу #2252chatbot.  Она также закреплена в нашем телеграм-канале.",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Какая разница между тарифами?",
                "date_answer": 1620665683000,
                "user_id": {
                    "firstName": "Полина",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/490b9e4a-c433-4f8a-a3e8-fcdebae09c00.jpg",
                    "TG_username": "paulinexnh"
                },
                "id": "eddc11a5-8a86-4ab2-9328-9b8f1058cb3c",
                "date": 1620665390000,
                "answer": "Добрый день! Напишите боту /tariffs :)",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Как доплатить, что бы вакансия появилась везде?",
                "date_answer": 1620663654000,
                "user_id": {
                    "firstName": "A L E X K O N T I E R",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/a1960143-fce3-479a-abdb-642c8b99d3a5.jpg",
                    "TG_username": "kontier"
                },
                "id": "49f3310c-efde-4ca5-869c-93e9debeed46",
                "date": 1620663126000,
                "answer": "Напишите, пожалуйста, в телеграм @sotyaax2 , я вышлю вам ссылку на оплату 🙏🏻",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Где можно прочитать условия размещения вакансий на тарифе small, или других тарифах? Когда я заполняла данные о вакансии, мне автоматически предложено было заплатить 3 тыс., что я и сделала, надеясь, что вакансия появится в картинках на странице в Инстаграм, но её там нет, почему? ",
                "date_answer": 1620651908000,
                "user_id": {
                    "lastName": "Кравченко",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/2406d3bc-1d03-4048-b44e-4e70ab5866ab.jpg",
                    "firstName": "Оксана"
                },
                "id": "df6f0e1b-eb9e-4593-9cd9-e53b6dc20171",
                "date": 1620651852000,
                "answer": "Оксана, добрый день! Срочно направляю ваш запрос нашему разработчику 🙏🏻🙏🏻🙏🏻",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "user_id": {
                    "lastName": "Кравченко",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/2406d3bc-1d03-4048-b44e-4e70ab5866ab.jpg",
                    "firstName": "Оксана"
                },
                "date": 1620651722000,
                "question": "Добрый день! Я к ужасу своему обнаружила что в описании работодателя стоит город «Москва»! Не понимаю, как так получилось, мы находимся в Санкт-Петербурге и ищем сотрудника в Санкт-Петербурге! Как это исправить? Мне пришли 7 откликов, и все они из Москвы или даже других городов (не у всех соискательниц указан город), но никто из них не из Санкт-Петербурга, и значит- эти люди нам не подходят.",
                "id": "4af1d64b-41c7-4784-9cdb-41b219019ba1"
            },
            {
                "question": "А чем отличается тариф на вакансии за 3000₽ и за 4000₽ ?\n\nЯ оплатил по первой ссылке, но не понял а чем разница?",
                "date_answer": 1620650225000,
                "user_id": {
                    "firstName": "A L E X K O N T I E R",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/a1960143-fce3-479a-abdb-642c8b99d3a5.jpg",
                    "TG_username": "kontier"
                },
                "id": "e4c0c4fe-7c8b-4060-919d-0e362a997a74",
                "date": 1620647473000,
                "answer": "Добрый день! Вакансия за 3000 рублей размещается только в боте, за 4000 рублей - в телеграм-канале и в инстаграме, ну и в боте.",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "date": 1620571554000,
                "user_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7cf7c8aa-00c5-421d-8ae6-baf8772b09e7.jpg",
                    "lastName": "Polykovskaya",
                    "firstName": "Irina",
                    "TG_username": "irina_polykovskaya"
                },
                "id": "1ffd30ed-1535-42c6-8158-c93af5bd8be4"
            },
            {
                "date": 1620550909000,
                "user_id": {
                    "firstName": "Дмитрий",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7798e718-631d-4cfd-965c-b5dfd654bf0c.jpg"
                },
                "question": "Добрый день! Вы опубликовали данную вакансию?",
                "id": "a09ab8bc-ec2f-4303-b994-262244402dbf"
            },
            {
                "date": 1620515156000,
                "user_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7cf7c8aa-00c5-421d-8ae6-baf8772b09e7.jpg",
                    "lastName": "Polykovskaya",
                    "firstName": "Irina",
                    "TG_username": "irina_polykovskaya"
                },
                "question": "Не могу посмотреть отклик кандидата",
                "id": "5d7a34e3-a208-4da4-912b-e9d86beef054"
            },
            {
                "question": "То есть, по тарифу Medium - каждая вакансия будет стоить 4000р, верно?",
                "date_answer": 1620488681000,
                "user_id": {
                    "firstName": "Дмитрий",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7798e718-631d-4cfd-965c-b5dfd654bf0c.jpg"
                },
                "id": "4a950811-0053-4fb9-b27c-232991cef856",
                "date": 1620488636000,
                "answer": "Дмитрий, да, все верно  🙌🏻",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Добрый день! Подскажите а каждая вакансия стоит 4000р? или тарифный план какой-то есть? ",
                "date_answer": 1620488536000,
                "user_id": {
                    "firstName": "Дмитрий",
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/7798e718-631d-4cfd-965c-b5dfd654bf0c.jpg"
                },
                "id": "af2a9fa4-14e8-4cd3-bd0e-b9b59f4faa29",
                "date": 1620488441000,
                "answer": "Добрый! Дмитрий, напишите боту тэг «/tariffs» , бот выдаст вам информацию о тарифах. С уважением, Соня",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            },
            {
                "question": "Можно ли запросить оплату по счету для ООО?",
                "date_answer": 1620421259000,
                "user_id": {
                    "image": "https://api.alfa.directual.com/fileUploaded/vitrina2252/3ca04207-e2b9-4142-8d90-6b28309cee1a.jpg",
                    "lastName": "Pogosyan",
                    "firstName": "Alina",
                    "TG_username": "Alina_Pogosyan"
                },
                "id": "4cbc873c-7e80-4138-9dc6-228e6918b696",
                "date": 1620409707000,
                "answer": "Да, конечно. Напишите в директ @dariaust 🙌🏻",
                "admin_id": {
                    "firstName": "Sofya",
                    "lastName": "Bekker"
                }
            }
        ],
        "totalPages": 19,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "admin_id.firstName",
                1330951
            ],
            [
                "admin_id.lastName",
                1330951
            ],
            [
                "answer",
                1330969
            ],
            [
                "date",
                1330969
            ],
            [
                "date_answer",
                1330969
            ],
            [
                "id",
                1330969
            ],
            [
                "question",
                1330969
            ],
            [
                "user_id.22_functions.name",
                1330974
            ],
            [
                "user_id.52_functions.name",
                1330975
            ],
            [
                "user_id.TG_username",
                1330951
            ],
            [
                "user_id.firstName",
                1330951
            ],
            [
                "user_id.image",
                1330951
            ],
            [
                "user_id.isBlocked",
                1330951
            ],
            [
                "user_id.jobs_selected",
                1330951
            ],
            [
                "user_id.lastName",
                1330951
            ],
            [
                "user_id.salary_text",
                1330951
            ],
            [
                "user_id.type",
                1330951
            ]
        ],
        "writeFields": [],
        "structures": {
            "1330951": {
                "networkID": 4265,
                "id": 1330951,
                "dateCreated": "2020-12-25T09:02:32Z",
                "hidden": false,
                "dateHidden": null,
                "name": "App users",
                "sysName": "WebUser",
                "jsonObject": "[{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"jobs_active\",\"name\":\"Количество активных вакансий\",\"dataType\":\"number\",\"id\":\"10941610887494618\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"12\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"jobs_new\",\"name\":\"Количество вакансий, ожидающих оплату\",\"dataType\":\"number\",\"id\":\"17741610887511981\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"52_functions\",\"name\":\"Функции для категории 52\",\"dataType\":\"arrayLink\",\"id\":\"22101607077116998\",\"link\":\"functions52\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"TG_username\",\"name\":\"Telegram\",\"dataType\":\"string\",\"id\":\"33601607938915585\",\"link\":\"\",\"group\":\"1606985920923\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"22_functions\",\"name\":\"Функции для категории 22\",\"dataType\":\"arrayLink\",\"id\":\"34391607077096514\",\"link\":\"functions22\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_description\",\"name\":\"Описание компании\",\"dataType\":\"string\",\"id\":\"34671609671007166\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"churn\",\"name\":\"Вышел из бота\",\"dataType\":\"boolean\",\"id\":\"37051614937701032\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"jobs_selected\",\"name\":\"Количество подходящих вакансий\",\"dataType\":\"number\",\"id\":\"49081610887960593\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"salary_text\",\"name\":\"Ожидания по доходу\",\"dataType\":\"string\",\"id\":\"49741607082338411\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"TG_user_id\",\"name\":\"TG_user\",\"dataType\":\"link\",\"id\":\"55611607016886218\",\"link\":\"TUser\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"6\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"salary_raw\",\"name\":\"Ожидания по доходу \",\"dataType\":\"json\",\"id\":\"63391607082324656\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"k ₽\",\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"max\":300,\"min\":20,\"step\":10},\"customOptionType\":\"textarea\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true},{\"sysName\":\"image\",\"name\":\"image\",\"dataType\":\"file\",\"id\":\"63411607068082205\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"Facebook_lonk\",\"name\":\"Facebook\",\"dataType\":\"string\",\"id\":\"64931609825374119\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"_salary_from\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"67141609921387509\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_name\",\"name\":\"Название компании\",\"dataType\":\"string\",\"id\":\"68021607939162171\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_city_id\",\"name\":\"Город(а) компании\",\"dataType\":\"arrayLink\",\"id\":\"68231607939175436\",\"link\":\"cities\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"type\",\"name\":\"Категория вакансий\",\"dataType\":\"link\",\"id\":\"68641607070972375\",\"link\":\"Type2252\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"2 через 2\",\"5 через 2\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"jobs_selected_ids\",\"name\":\"Подходящие вакансии\",\"dataType\":\"arrayLink\",\"id\":\"69211616063671236\",\"link\":\"Jobs\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"_salary_to\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"77421609921394419\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"city\",\"name\":\"Город\",\"dataType\":\"link\",\"id\":\"80181607081867668\",\"link\":\"cities\",\"group\":\"1606985920923\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"CV_file\",\"name\":\"Резюме\",\"dataType\":\"file\",\"id\":\"84081609825345581\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"feedback_ids\",\"name\":\"Фидбеки юзера\",\"dataType\":\"arrayLink\",\"id\":\"86081613409739256\",\"link\":\"Feedback\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false},{\"sysName\":\"employer_website\",\"name\":\"Сайт компании\",\"dataType\":\"string\",\"id\":\"89401607939216442\",\"link\":\"\",\"group\":\"1607938855954\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"Instagram_link\",\"name\":\"Instagram\",\"dataType\":\"string\",\"id\":\"91391609825359387\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"CV_update_date\",\"name\":\"Дата обновления резюме\",\"dataType\":\"string\",\"id\":\"92571610010803323\",\"link\":\"\",\"group\":\"1607016878115\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Contacts\",\"id\":1606985920923,\"order\":0},{\"name\":\"Кандидат\",\"id\":1607016878115,\"order\":1},{\"name\":\"Работодатель\",\"id\":1607938855954,\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-04-04T20:37:02Z",
                "createBy": 0,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
                    "sysName": "id",
                    "name": "Username (login)",
                    "dataType": "id",
                    "id": "12",
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
                    "linkOrArrayLinkType": false,
                    "json": false,
                    "linkType": false,
                    "typeVariable": {},
                    "arrayLink": false
                },
                "objectIDSysName": "id",
                "folderId": null
            },
            "1330969": {
                "networkID": 4265,
                "id": 1330969,
                "dateCreated": "2020-09-18T13:33:20Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Вопросы",
                "sysName": "questions",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"is_deleted\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"30681603134054838\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"admin_id\",\"name\":\"Кто ответил\",\"dataType\":\"link\",\"id\":\"76431600436848180\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"date\",\"name\":\"Дата вопроса\",\"dataType\":\"date\",\"id\":\"83411601287631450\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D, Y\",\"timeFormat\":\", HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"date_answer\",\"name\":\"Дата ответа\",\"dataType\":\"date\",\"id\":\"86211605857182746\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D, Y\",\"timeFormat\":\", HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"question\",\"name\":\"Вопрос\",\"dataType\":\"string\",\"id\":\"91971600436849319\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"user_id\",\"name\":\"Кто спросил\",\"dataType\":\"link\",\"id\":\"92661600436847692\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false},{\"sysName\":\"answer\",\"name\":\"Ответ\",\"dataType\":\"string\",\"id\":\"97611600436853189\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false}]",
                "jsonGroupSettings": "[]",
                "jsonViewIdSettings": "[{\"sysName\":\"question\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-05-14T16:27:36Z",
                "createBy": 1,
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
                    "formatOptions": null,
                    "groupName": null,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "json": false,
                    "linkType": false,
                    "typeVariable": {},
                    "arrayLink": false
                },
                "objectIDSysName": "id",
                "folderId": 33596510
            },
            "1330974": {
                "networkID": 4265,
                "id": 1330974,
                "dateCreated": "2020-12-04T10:19:23Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Функции 22",
                "sysName": "functions22",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"96931607077672366\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2020-12-04T10:30:14Z",
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
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "json": false,
                    "linkType": false,
                    "typeVariable": {},
                    "arrayLink": false
                },
                "objectIDSysName": "id",
                "folderId": 33596509
            },
            "1330975": {
                "networkID": 4265,
                "id": 1330975,
                "dateCreated": "2020-12-04T10:19:52Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Функции 52",
                "sysName": "functions52",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"21621607077688079\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"Функция\",\"dataType\":\"string\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2020-12-04T10:28:14Z",
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
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "json": false,
                    "linkType": false,
                    "typeVariable": {},
                    "arrayLink": false
                },
                "objectIDSysName": "id",
                "folderId": 33596509
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": null
    }

    let newCardActions = {
        "sl": "getCloudUsers",
        "pageSize": "8",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "register_date",
            "deleteField": "",
            "cardBodyText": "",
            "cardImage": true,
            "cardImageField": "gravatar_pic",
            "cardImageType": "leftCircle",
            "cardImageSize": 75,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "apps",
                        "fetch": [],
                        "sysName": "apps",
                        "name": "Apps",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "AppInfo"
                    },
                    {
                        "fieldSysName": "country",
                        "fetch": [],
                        "sysName": "country",
                        "name": "country CODE",
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
                        "name": "Gravatar picture",
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
                        "formatOptions": {},
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
                        "content": "country CODE",
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
                        "content": "Gravatar picture",
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
                        "formatOptions": {},
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
                    },
                    "action__23961619123326429": {
                        "id": "action__23961619123326429",
                        "content": "New action",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "api_version": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "release_date": {
                        "include": false,
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
                    "ui_version": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "updates": {
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
                        "clickable": false
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
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "last_name": {
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
                    "register_date": {
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
                    },
                    "gravatar": {
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
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "id",
                            "apps",
                            "country",
                            "first_name",
                            "last_name",
                            "number_of_apps",
                            "register_date",
                            "source",
                            "gravatar_pic",
                            "action__23961619123326429"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "api_version": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "release_date": {
                    "include": false,
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
                "ui_version": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "updates": {
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
                    "clickable": false
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
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "last_name": {
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
                "register_date": {
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
                },
                "gravatar": {
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
                }
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "23961619123326429",
                    "name": "New action",
                    "displayAs": "button",
                    "formMapping": [],
                    "conditionals": [
                        {
                            "id": "21801619198386178",
                            "target": "field",
                            "value": "RU",
                            "field": "country"
                        }
                    ],
                    "dropdown": true
                }
            ]
        },
        "tableTitle": "Cards — users",
        "actions": null,
        "headers": [
            {
                "sysName": "apps",
                "dataType": "arrayLink",
                "name": "Apps",
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
                "indexExists": false,
                "arrayLink": true,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": true
            },
            {
                "sysName": "first_name",
                "dataType": "string",
                "name": "First name",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
            },
            {
                "sysName": "gravatar_pic",
                "dataType": "file",
                "name": "Gravatar picture",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
            },
            {
                "sysName": "last_name",
                "dataType": "string",
                "name": "Last name",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
            },
            {
                "sysName": "number_of_apps",
                "dataType": "number",
                "name": "Number of apps",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
            },
            {
                "sysName": "register_date",
                "dataType": "date",
                "name": "Register date",
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
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
            },
            {
                "sysName": "source",
                "dataType": "string",
                "name": "Source",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false
            }
        ],
        "data": [
            {
                "first_name": "Yaroslav",
                "source": "direct",
                "register_date": 1619190565233,
                "id": "yaroslav.bozhenkov@gmail.com",
                "last_name": "Bozhenkov"
            },
            {
                "first_name": "Marina",
                "source": "direct",
                "register_date": 1619188017231,
                "id": "marinaexcurs@gmail.com",
                "last_name": "Marina"
            },
            {
                "first_name": "СЕРГЕЙ",
                "source": "direct",
                "register_date": 1619187509091,
                "id": "siriys.60@gmail.com",
                "last_name": "КУЛИКОВ"
            },
            {
                "first_name": "Петр",
                "source": "direct",
                "register_date": 1619187380767,
                "id": "petrfirstov@gmail.com",
                "last_name": "Фирстов"
            },
            {
                "first_name": "Стас",
                "source": "direct",
                "gravatar_pic": "https://api.alfa.directual.com/fileUploaded/directual-site/74e9b178-f706-4e9c-9b43-47c4d490868d.jpg",
                "register_date": 1619186891809,
                "id": "tichebud@rambler.ru",
                "last_name": "Антонов"
            },
            {
                "first_name": "Артем",
                "source": "direct",
                "register_date": 1619186764533,
                "id": "merkart2000@gmail.com",
                "last_name": "Меркулов"
            },
            {
                "first_name": "Sergey",
                "source": "direct",
                "register_date": 1619186408310,
                "id": "siriys.60@mail.ru",
                "last_name": "Kulikov"
            },
            {
                "first_name": "Artem",
                "source": "direct",
                "register_date": 1619186329671,
                "id": "armonikartem@gmail.com",
                "last_name": "Armonik"
            }
        ],
        "totalPages": 476,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "apps",
                1282551
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
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"notifications_blog\",\"dataType\":\"boolean\",\"name\":\"Notify about Blog\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"unsubscribed\",\"dataType\":\"boolean\",\"name\":\"unsubscribed\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"admin_notification_text\",\"dataType\":\"string\",\"name\":\"admin_notification_text\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"request_id\",\"dataType\":\"link\",\"name\":\"Request ID\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"first_name\",\"dataType\":\"string\",\"name\":\"First name\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"survey_ids\",\"dataType\":\"arrayLink\",\"name\":\"Surveys\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":true,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"utm_medium\",\"dataType\":\"string\",\"name\":\"utm_medium\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"country_id\",\"dataType\":\"link\",\"name\":\"Country link (ISO)\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"is_country_synced\",\"dataType\":\"boolean\",\"name\":\"is_country_synced\",\"id\":\"31991605527320825\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"note\",\"dataType\":\"string\",\"name\":\"Note\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"register_date\",\"dataType\":\"date\",\"name\":\"Register date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"country CODE\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"email_hash\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"number_of_sl\",\"dataType\":\"number\",\"name\":\"Number of SLs\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"number_of_apps\",\"dataType\":\"number\",\"name\":\"Number of apps\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"logged_in\",\"dataType\":\"boolean\",\"name\":\"Have logged in\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"today_stat_id\",\"dataType\":\"link\",\"name\":\"Today stat link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"locale\",\"dataType\":\"string\",\"name\":\"locale\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"notifications_account\",\"dataType\":\"boolean\",\"name\":\"Notify about Account\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"whom_to_alert\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":true,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"number_of_structures\",\"dataType\":\"number\",\"name\":\"Number of structures\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"ip\",\"dataType\":\"string\",\"name\":\"ip\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"number_of_scenarios\",\"dataType\":\"number\",\"name\":\"Number of scenarios\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"social_register\",\"dataType\":\"boolean\",\"name\":\"social_register\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"app_description\",\"dataType\":\"string\",\"name\":\"App description\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"gravatar_pic\",\"dataType\":\"file\",\"name\":\"Gravatar picture\",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"apps\",\"dataType\":\"arrayLink\",\"name\":\"Apps\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":true,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":true},{\"sysName\":\"last_name\",\"dataType\":\"string\",\"name\":\"Last name\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"mailchimp_segments\",\"dataType\":\"array\",\"name\":\"Mailchimp Segments\",\"id\":\"84981587457354001\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"utm_campaign\",\"dataType\":\"string\",\"name\":\"utm_campaign\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"unsibscribed_reason\",\"dataType\":\"string\",\"name\":\"unsibscribed_reason\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"gravatar\",\"dataType\":\"string\",\"name\":\"Gravatar\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"utm_source\",\"dataType\":\"string\",\"name\":\"utm_source\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"Source\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"customer_type\",\"dataType\":\"string\",\"name\":\"Customer type\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"last_activity_date\",\"dataType\":\"date\",\"name\":\"Last activity date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"mailchimp_tags\",\"dataType\":\"string\",\"name\":\"Mailchimp labels\",\"id\":\"97421570379132976\",\"link\":null,\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"notifications_academy\",\"dataType\":\"boolean\",\"name\":\"Notify about Academy\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false,\"linkOrArrayLinkType\":false}]",
                "jsonGroupSettings": "[{\"id\":1570381436668,\"name\":\"CRM\",\"order\":2},{\"id\":1588875605532,\"name\":\"Gravatar\",\"order\":4},{\"id\":1570288674389,\"name\":\"Cloud usage\",\"order\":0},{\"id\":1572378880897,\"name\":\"Notifications settings\",\"order\":3},{\"id\":1570379125072,\"name\":\"Mailchimp\",\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-04-22T18:33:02Z",
                "createBy": 21,
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
                    "formatOptions": null,
                    "groupName": null,
                    "typeVariable": {},
                    "indexExists": false,
                    "arrayLink": false,
                    "linkType": false,
                    "json": false,
                    "linkOrArrayLinkType": false
                },
                "folderId": 667556
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": []
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
            },
            "tableParams": {
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
                        "formatOptions": {},
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
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "AppInfo"
                    },
                    "country": {
                        "id": "country",
                        "content": "Country",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "CountriesISO"
                    },
                    "first_name": {
                        "id": "first_name",
                        "content": "First name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "gravatar_pic": {
                        "id": "gravatar_pic",
                        "content": " ",
                        "dataType": "file",
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
                        "read": true,
                        "link": ""
                    },
                    "last_name": {
                        "id": "last_name",
                        "content": "Last name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "number_of_apps": {
                        "id": "number_of_apps",
                        "content": "Number of apps",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "register_date": {
                        "id": "register_date",
                        "content": "Register date",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "source": {
                        "id": "source",
                        "content": "Source",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    }
                },
                "fieldParams": {
                    "app_description": {
                        "include": false
                    },
                    "apps": {
                        "include": true
                    },
                    "country": {
                        "include": true
                    },
                    "email_hash": {
                        "include": true
                    },
                    "first_name": {
                        "include": true
                    },
                    "gravatar": {
                        "include": true
                    },
                    "gravatar_pic": {
                        "include": true,
                        "fileImage": true,
                        "fileImageFormat": "circle",
                        "fileImageSize": 50
                    },
                    "last_name": {
                        "include": true
                    },
                    "register_date": {
                        "include": true
                    },
                    "id": {
                        "include": true
                    },
                    "number_of_apps": {
                        "include": true
                    },
                    "source": {
                        "include": true
                    }
                },
                "fieldOrder": [
                    "gravatar_pic",
                    "id",
                    "country",
                    "register_date",
                    "first_name",
                    "last_name",
                    "apps",
                    "number_of_apps",
                    "source"
                ]
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