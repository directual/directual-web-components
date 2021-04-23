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
        "sl": "borrowrecords",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "list",
            "cardHeaderComment": "bookPublisher",
            "deleteField": "",
            "cardBodyText": "expReturnDate",
            "cardImage": true,
            "cardImageField": "bookPage",
            "cardImageType": "left",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "actReturnDate",
                        "fetch": [],
                        "sysName": "actReturnDate",
                        "name": "归还日期",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bookAuthor",
                        "fetch": [],
                        "sysName": "bookAuthor",
                        "name": "作者",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "multipleChoice": [
                                {
                                    "value": "CheckedOut",
                                    "label": "借阅中"
                                },
                                {
                                    "value": "CheckedIn",
                                    "label": "已归还"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "bookName",
                        "fetch": [],
                        "sysName": "bookName",
                        "name": "书名",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "bookPage",
                        "fetch": [],
                        "sysName": "bookPage",
                        "name": "书的封面图",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bookPublisher",
                        "fetch": [],
                        "sysName": "bookPublisher",
                        "name": "出版社",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "book_name",
                        "fetch": [],
                        "sysName": "book_name",
                        "name": "馆藏编号",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "libraryBook"
                    },
                    {
                        "fieldSysName": "borrowDate",
                        "fetch": [],
                        "sysName": "borrowDate",
                        "name": "借阅日期",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "borrower",
                        "fetch": [],
                        "sysName": "borrower",
                        "name": "借阅人",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "expReturnDate",
                        "fetch": [],
                        "sysName": "expReturnDate",
                        "name": "预计归还日期",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "借书编号",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "reborrow",
                        "fetch": [],
                        "sysName": "reborrow",
                        "name": "是否可以续借",
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
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "借阅状态",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOption": false,
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "multipleChoice": [
                                {
                                    "value": "CheckedIn",
                                    "label": "已归还"
                                },
                                {
                                    "value": "CheckedOut",
                                    "label": "借阅中"
                                }
                            ]
                        },
                        "link": "statusOfCheckout"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "借书编号",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "actReturnDate": {
                        "id": "actReturnDate",
                        "content": "归还日期",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bookAuthor": {
                        "id": "bookAuthor",
                        "content": "作者",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "multipleChoice": [
                                {
                                    "value": "CheckedOut",
                                    "label": "借阅中"
                                },
                                {
                                    "value": "CheckedIn",
                                    "label": "已归还"
                                }
                            ]
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bookName": {
                        "id": "bookName",
                        "content": "书名",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "bookPage": {
                        "id": "bookPage",
                        "content": "书的封面图",
                        "type": "field",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bookPublisher": {
                        "id": "bookPublisher",
                        "content": "出版社",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "book_name": {
                        "id": "book_name",
                        "content": "馆藏编号",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "libraryBook",
                        "actions": []
                    },
                    "borrowDate": {
                        "id": "borrowDate",
                        "content": "借阅日期",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "borrower": {
                        "id": "borrower",
                        "content": "借阅人",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "expReturnDate": {
                        "id": "expReturnDate",
                        "content": "预计归还日期",
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
                        "content": "借书编号",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "reborrow": {
                        "id": "reborrow",
                        "content": "是否可以续借",
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
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "借阅状态",
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
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOption": false,
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "multipleChoice": [
                                {
                                    "value": "CheckedIn",
                                    "label": "已归还"
                                },
                                {
                                    "value": "CheckedOut",
                                    "label": "借阅中"
                                }
                            ]
                        },
                        "read": true,
                        "link": "statusOfCheckout",
                        "actions": []
                    },
                    "action__30321616654263030": {
                        "content": "还书",
                        "id": "action__30321616654263030",
                        "type": "action",
                        "actions": []
                    },
                    "action__82881616654428739": {
                        "content": "续借 7 天",
                        "id": "action__82881616654428739",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "@dateChanged": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@dateCreated": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@who": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "actReturnDate": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bookAuthor": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bookName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bookPage": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileImage": true
                    },
                    "bookPublisher": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "book_name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "borrowDate": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "borrower": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "expReturnDate": {
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
                    "status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "book_author": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "book_cover": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "book_publication": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "book_rating": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "libraryBook": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "reborrow": {
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
                        "title": "借阅信息",
                        "fieldIds": [
                            "action__30321616654263030",
                            "action__82881616654428739",
                            "id",
                            "actReturnDate",
                            "borrower",
                            "bookPage",
                            "status",
                            "borrowDate",
                            "expReturnDate",
                            "reborrow"
                        ]
                    },
                    "56541616654359511": {
                        "id": "56541616654359511",
                        "title": "书籍信息",
                        "fieldIds": [
                            "book_name",
                            "bookAuthor",
                            "bookName",
                            "bookPublisher"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "56541616654359511"
                ],
                "actions": [
                    {
                        "sysName": "returnbook",
                        "id": "30321616654263030",
                        "name": "还书",
                        "displayAs": "button",
                        "buttonIcon": "export",
                        "dropdown": true,
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "借书编号",
                                    "dataType": "id",
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
                                    "name": "借书编号",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "55951616654284732",
                                "type": "objectField",
                                "value": "id",
                                "target": "id"
                            }
                        ]
                    },
                    {
                        "sysName": "changeCheckinDate",
                        "id": "82881616654428739",
                        "name": "续借 7 天",
                        "displayAs": "button",
                        "buttonIcon": "calendar",
                        "dropdown": true,
                        "SLtype": "other",
                        "fields": {
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
                                    "fieldSysName": "actReturnDate",
                                    "fetch": [],
                                    "sysName": "actReturnDate",
                                    "name": "实际还书时间",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "bookAuthor",
                                    "fetch": [],
                                    "sysName": "bookAuthor",
                                    "name": "作者",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea",
                                        "multipleChoice": [
                                            {
                                                "value": "CheckedOut",
                                                "label": "借阅中"
                                            },
                                            {
                                                "value": "CheckedIn",
                                                "label": "已归还"
                                            }
                                        ]
                                    },
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "bookName",
                                    "fetch": [],
                                    "sysName": "bookName",
                                    "name": "书名",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "bookPage",
                                    "fetch": [],
                                    "sysName": "bookPage",
                                    "name": "书的封面图",
                                    "dataType": "file",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "bookPublisher",
                                    "fetch": [],
                                    "sysName": "bookPublisher",
                                    "name": "出版社",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "book_name",
                                    "fetch": [],
                                    "sysName": "book_name",
                                    "name": "馆藏编号",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "libraryBook"
                                },
                                {
                                    "fieldSysName": "borrowDate",
                                    "fetch": [],
                                    "sysName": "borrowDate",
                                    "name": "借阅日期",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "borrower",
                                    "fetch": [],
                                    "sysName": "borrower",
                                    "name": "借阅人",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                },
                                {
                                    "fieldSysName": "expReturnDate",
                                    "fetch": [],
                                    "sysName": "expReturnDate",
                                    "name": "预计还书时间",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "借书编号",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "status",
                                    "fetch": [],
                                    "sysName": "status",
                                    "name": "借阅状态",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOption": false,
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea",
                                        "multipleChoice": [
                                            {
                                                "value": "CheckedIn",
                                                "label": "已归还"
                                            },
                                            {
                                                "value": "CheckedOut",
                                                "label": "借阅中"
                                            }
                                        ]
                                    },
                                    "link": "statusOfCheckout"
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
                                    "fieldSysName": "actReturnDate",
                                    "fetch": [],
                                    "sysName": "actReturnDate",
                                    "name": "实际还书时间",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "bookAuthor",
                                    "fetch": [],
                                    "sysName": "bookAuthor",
                                    "name": "作者",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea",
                                        "multipleChoice": [
                                            {
                                                "value": "CheckedOut",
                                                "label": "借阅中"
                                            },
                                            {
                                                "value": "CheckedIn",
                                                "label": "已归还"
                                            }
                                        ]
                                    },
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "bookName",
                                    "fetch": [],
                                    "sysName": "bookName",
                                    "name": "书名",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "bookPage",
                                    "fetch": [],
                                    "sysName": "bookPage",
                                    "name": "书的封面图",
                                    "dataType": "file",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "bookPublisher",
                                    "fetch": [],
                                    "sysName": "bookPublisher",
                                    "name": "出版社",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "book_name",
                                    "fetch": [],
                                    "sysName": "book_name",
                                    "name": "馆藏编号",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "libraryBook"
                                },
                                {
                                    "fieldSysName": "borrowDate",
                                    "fetch": [],
                                    "sysName": "borrowDate",
                                    "name": "借阅日期",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "borrower",
                                    "fetch": [],
                                    "sysName": "borrower",
                                    "name": "借阅人",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                },
                                {
                                    "fieldSysName": "expReturnDate",
                                    "fetch": [],
                                    "sysName": "expReturnDate",
                                    "name": "预计还书时间",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "借书编号",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "status",
                                    "fetch": [],
                                    "sysName": "status",
                                    "name": "借阅状态",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOption": false,
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea",
                                        "multipleChoice": [
                                            {
                                                "value": "CheckedIn",
                                                "label": "已归还"
                                            },
                                            {
                                                "value": "CheckedOut",
                                                "label": "借阅中"
                                            }
                                        ]
                                    },
                                    "link": "statusOfCheckout"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "44551616654451229",
                                "type": "objectField",
                                "value": "id",
                                "target": "id"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "@dateChanged": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@dateCreated": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@who": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "actReturnDate": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bookAuthor": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bookName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bookPage": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileImage": true
                },
                "bookPublisher": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "book_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "borrowDate": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "borrower": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "expReturnDate": {
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
                "status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "book_author": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "book_cover": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "book_publication": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "book_rating": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "libraryBook": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "reborrow": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "returnbook",
                    "id": "30321616654263030",
                    "name": "还书",
                    "displayAs": "button",
                    "buttonIcon": "export",
                    "dropdown": true,
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "借书编号",
                                "dataType": "id",
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
                                "name": "借书编号",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "55951616654284732",
                            "type": "objectField",
                            "value": "id",
                            "target": "id"
                        }
                    ]
                },
                {
                    "sysName": "changeCheckinDate",
                    "id": "82881616654428739",
                    "name": "续借 7 天",
                    "displayAs": "button",
                    "buttonIcon": "calendar",
                    "dropdown": true,
                    "SLtype": "other",
                    "fields": {
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
                                "fieldSysName": "actReturnDate",
                                "fetch": [],
                                "sysName": "actReturnDate",
                                "name": "实际还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "bookAuthor",
                                "fetch": [],
                                "sysName": "bookAuthor",
                                "name": "作者",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea",
                                    "multipleChoice": [
                                        {
                                            "value": "CheckedOut",
                                            "label": "借阅中"
                                        },
                                        {
                                            "value": "CheckedIn",
                                            "label": "已归还"
                                        }
                                    ]
                                },
                                "link": ""
                            },
                            {
                                "fieldSysName": "bookName",
                                "fetch": [],
                                "sysName": "bookName",
                                "name": "书名",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "bookPage",
                                "fetch": [],
                                "sysName": "bookPage",
                                "name": "书的封面图",
                                "dataType": "file",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "bookPublisher",
                                "fetch": [],
                                "sysName": "bookPublisher",
                                "name": "出版社",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "book_name",
                                "fetch": [],
                                "sysName": "book_name",
                                "name": "馆藏编号",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "libraryBook"
                            },
                            {
                                "fieldSysName": "borrowDate",
                                "fetch": [],
                                "sysName": "borrowDate",
                                "name": "借阅日期",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "borrower",
                                "fetch": [],
                                "sysName": "borrower",
                                "name": "借阅人",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            },
                            {
                                "fieldSysName": "expReturnDate",
                                "fetch": [],
                                "sysName": "expReturnDate",
                                "name": "预计还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "借书编号",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "借阅状态",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOption": false,
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea",
                                    "multipleChoice": [
                                        {
                                            "value": "CheckedIn",
                                            "label": "已归还"
                                        },
                                        {
                                            "value": "CheckedOut",
                                            "label": "借阅中"
                                        }
                                    ]
                                },
                                "link": "statusOfCheckout"
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
                                "fieldSysName": "actReturnDate",
                                "fetch": [],
                                "sysName": "actReturnDate",
                                "name": "实际还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "bookAuthor",
                                "fetch": [],
                                "sysName": "bookAuthor",
                                "name": "作者",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea",
                                    "multipleChoice": [
                                        {
                                            "value": "CheckedOut",
                                            "label": "借阅中"
                                        },
                                        {
                                            "value": "CheckedIn",
                                            "label": "已归还"
                                        }
                                    ]
                                },
                                "link": ""
                            },
                            {
                                "fieldSysName": "bookName",
                                "fetch": [],
                                "sysName": "bookName",
                                "name": "书名",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "bookPage",
                                "fetch": [],
                                "sysName": "bookPage",
                                "name": "书的封面图",
                                "dataType": "file",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "bookPublisher",
                                "fetch": [],
                                "sysName": "bookPublisher",
                                "name": "出版社",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "book_name",
                                "fetch": [],
                                "sysName": "book_name",
                                "name": "馆藏编号",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "libraryBook"
                            },
                            {
                                "fieldSysName": "borrowDate",
                                "fetch": [],
                                "sysName": "borrowDate",
                                "name": "借阅日期",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "borrower",
                                "fetch": [],
                                "sysName": "borrower",
                                "name": "借阅人",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            },
                            {
                                "fieldSysName": "expReturnDate",
                                "fetch": [],
                                "sysName": "expReturnDate",
                                "name": "预计还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "借书编号",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "借阅状态",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOption": false,
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea",
                                    "multipleChoice": [
                                        {
                                            "value": "CheckedIn",
                                            "label": "已归还"
                                        },
                                        {
                                            "value": "CheckedOut",
                                            "label": "借阅中"
                                        }
                                    ]
                                },
                                "link": "statusOfCheckout"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "44551616654451229",
                            "type": "objectField",
                            "value": "id",
                            "target": "id"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "54621616657552925",
                            "target": "field",
                            "value": "true",
                            "field": "reborrow",
                            "fieldValue": true
                        }
                    ]
                }
            ]
        },
        "tableTitle": "借阅中",
        "actions": null,
        "headers": [
            {
                "sysName": "actReturnDate",
                "name": "归还日期",
                "dataType": "date",
                "id": "61331616553740150",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "bookAuthor",
                "name": "作者",
                "dataType": "string",
                "id": "84961616642272274",
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
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "multipleChoice": [
                        {
                            "value": "CheckedOut",
                            "label": "借阅中"
                        },
                        {
                            "value": "CheckedIn",
                            "label": "已归还"
                        }
                    ]
                },
                "groupName": null,
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "bookName",
                "name": "书名",
                "dataType": "string",
                "id": "88061616642238583",
                "link": null,
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
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "bookPage",
                "name": "书的封面图",
                "dataType": "file",
                "id": "64841616639317254",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "bookPublisher",
                "name": "出版社",
                "dataType": "string",
                "id": "27111616642260263",
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
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "book_name",
                "name": "馆藏编号",
                "dataType": "link",
                "id": "52721616470851204",
                "link": "libraryBook",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    ""
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkType": true,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "borrowDate",
                "name": "借阅日期",
                "dataType": "date",
                "id": "30141616471611298",
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
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "borrower",
                "name": "借阅人",
                "dataType": "link",
                "id": "27531616471329210",
                "link": "WebUser",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [
                    ""
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkType": true,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "expReturnDate",
                "name": "预计归还日期",
                "dataType": "date",
                "id": "75021616471691894",
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
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "id",
                "name": "借书编号",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "reborrow",
                "name": "是否可以续借",
                "dataType": "boolean",
                "id": "96791616655365031",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea"
                },
                "groupName": null,
                "linkType": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            },
            {
                "sysName": "status",
                "name": "借阅状态",
                "dataType": "link",
                "id": "69161616586111969",
                "link": "statusOfCheckout",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 6,
                "linkIndexFieldSysName": [
                    "id"
                ],
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
                        "True",
                        "False"
                    ],
                    "customOption": false,
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "multipleChoice": [
                        {
                            "value": "CheckedIn",
                            "label": "已归还"
                        },
                        {
                            "value": "CheckedOut",
                            "label": "借阅中"
                        }
                    ]
                },
                "groupName": null,
                "linkType": true,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "json": false,
                "indexExists": true
            }
        ],
        "data": [
            {
                "bookAuthor": "柴可夫斯基",
                "bookName": "钢铁是这样炼成的",
                "id": "100003",
                "status": "借阅中",
                "reborrow": false,
                "book_name": "9adbc5ca-2afc-4e5a-9ad3-0f2a368099a9",
                "borrower": "wangdizhi",
                "expReturnDate": 1617062400000,
                "bookPublisher": "湖南文艺",
                "borrowDate": 1614643200000
            },
            {
                "bookAuthor": "奥斯特洛夫斯基",
                "bookName": "钢铁是怎样炼成的",
                "bookPage": "http://img3.tbcdn.cn/tfscom/i3/2344035500/TB2viMghVXXXXadXXXXXXXXXXXX_%21%212344035500.jpg",
                "id": "100001",
                "status": "借阅中",
                "reborrow": true,
                "book_name": "9adbc5ca-2afc-4e5a-9ad3-0f2a368099a9",
                "borrower": "wangdizhi",
                "expReturnDate": 1618531200000,
                "bookPublisher": "湖南文艺出版社",
                "borrowDate": 1616544000000
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "actReturnDate",
                1368226
            ],
            [
                "bookAuthor",
                1368226
            ],
            [
                "bookName",
                1368226
            ],
            [
                "bookPage",
                1368226
            ],
            [
                "bookPublisher",
                1368226
            ],
            [
                "book_name",
                1368226
            ],
            [
                "borrowDate",
                1368226
            ],
            [
                "borrower",
                1368226
            ],
            [
                "expReturnDate",
                1368226
            ],
            [
                "id",
                1368226
            ],
            [
                "reborrow",
                1368226
            ],
            [
                "status",
                1368226
            ]
        ],
        "writeFields": [
            "id"
        ],
        "structures": {
            "1368226": {
                "networkID": 5878,
                "sysName": "library_availableBook",
                "name": "借阅记录",
                "id": 1368226,
                "dateCreated": "2021-03-23T03:28:26Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"借书编号\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"bookPublisher\",\"name\":\"出版社\",\"dataType\":\"string\",\"id\":\"27111616642260263\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"borrower\",\"name\":\"借阅人\",\"dataType\":\"link\",\"id\":\"27531616471329210\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"linkOrArrayLinkType\":true},{\"sysName\":\"borrowDate\",\"name\":\"借阅日期\",\"dataType\":\"date\",\"id\":\"30141616471611298\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"book_name\",\"name\":\"馆藏编号\",\"dataType\":\"link\",\"id\":\"52721616470851204\",\"link\":\"libraryBook\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"linkOrArrayLinkType\":true},{\"sysName\":\"actReturnDate\",\"name\":\"归还日期\",\"dataType\":\"date\",\"id\":\"61331616553740150\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"bookPage\",\"name\":\"书的封面图\",\"dataType\":\"file\",\"id\":\"64841616639317254\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"status\",\"name\":\"借阅状态\",\"dataType\":\"link\",\"id\":\"69161616586111969\",\"link\":\"statusOfCheckout\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"True\",\"False\"],\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"multipleChoice\":[{\"value\":\"CheckedIn\",\"label\":\"已归还\"},{\"value\":\"CheckedOut\",\"label\":\"借阅中\"}]},\"groupName\":null,\"indexExists\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":true,\"linkOrArrayLinkType\":true},{\"sysName\":\"expReturnDate\",\"name\":\"预计归还日期\",\"dataType\":\"date\",\"id\":\"75021616471691894\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"bookAuthor\",\"name\":\"作者\",\"dataType\":\"string\",\"id\":\"84961616642272274\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"multipleChoice\":[{\"value\":\"CheckedOut\",\"label\":\"借阅中\"},{\"value\":\"CheckedIn\",\"label\":\"已归还\"}]},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"bookName\",\"name\":\"书名\",\"dataType\":\"string\",\"id\":\"88061616642238583\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false},{\"sysName\":\"reborrow\",\"name\":\"是否可以续借\",\"dataType\":\"boolean\",\"id\":\"96791616655365031\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"indexExists\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkType\":false,\"linkOrArrayLinkType\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"bookName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-03-25T07:06:47Z",
                "createBy": 6356,
                "changedBy": 6356,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "借书编号",
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
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "json": false,
                    "indexExists": false
                },
                "folderId": 33615569
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "id",
                "name": "借书编号",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "json": false,
                "indexExists": false
            }
        ]
    }
    let newCardActions = {
        "sl": "callsList",
        "pageSize": "50",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "sourceFromTags",
            "deleteField": "",
            "cardBodyText": "phone",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "showCounter": false,
            "counterField": null,
            "counterText": null,
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "agentID",
                        "fetch": [],
                        "sysName": "agentID",
                        "name": "Агент",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Agents"
                    },
                    {
                        "fieldSysName": "callType",
                        "fetch": [],
                        "sysName": "callType",
                        "name": "Тип звонка",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "calling_number",
                        "fetch": [],
                        "sysName": "calling_number",
                        "name": "Звонок на телефон",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "client",
                        "fetch": [],
                        "sysName": "client",
                        "name": "Клиент",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Clients"
                    },
                    {
                        "fieldSysName": "dateEnd",
                        "fetch": [],
                        "sysName": "dateEnd",
                        "name": "Конец",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "dateStart",
                        "fetch": [],
                        "sysName": "dateStart",
                        "name": "Начало",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "duration",
                        "fetch": [],
                        "sysName": "duration",
                        "name": "Длительность",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "durationToCheck",
                        "fetch": [],
                        "sysName": "durationToCheck",
                        "name": "durationToCheck",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "firstUrl",
                        "fetch": [],
                        "sysName": "firstUrl",
                        "name": "URL входа",
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
                        "fieldSysName": "phone",
                        "fetch": [],
                        "sysName": "phone",
                        "name": "Телефон",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "source",
                        "fetch": [],
                        "sysName": "source",
                        "name": "Источник",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "source"
                    },
                    {
                        "fieldSysName": "sourceFromTags",
                        "fetch": [],
                        "sysName": "sourceFromTags",
                        "name": "Источник",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "type_of_source",
                        "fetch": [],
                        "sysName": "type_of_source",
                        "name": "Тип источника",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "url",
                        "fetch": [],
                        "sysName": "url",
                        "name": "URL звонка",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "utmCampaign",
                        "fetch": [],
                        "sysName": "utmCampaign",
                        "name": "UTM Campaign",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "utmContent",
                        "fetch": [],
                        "sysName": "utmContent",
                        "name": "UTM Content",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "utmMedium",
                        "fetch": [],
                        "sysName": "utmMedium",
                        "name": "UTM Medium",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "utmSource",
                        "fetch": [],
                        "sysName": "utmSource",
                        "name": "UTM Источник",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "utmTerm",
                        "fetch": [],
                        "sysName": "utmTerm",
                        "name": "UTM Term",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "waitDuration",
                        "fetch": [],
                        "sysName": "waitDuration",
                        "name": "Ожидание",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "agentID": {
                        "id": "agentID",
                        "content": "Агент",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Agents",
                        "actions": []
                    },
                    "callType": {
                        "id": "callType",
                        "content": "Тип звонка",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "calling_number": {
                        "id": "calling_number",
                        "content": "Звонок на телефон",
                        "type": "field",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "client": {
                        "id": "client",
                        "content": "Клиент",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Clients",
                        "actions": [
                            {
                                "sysName": "formToContract",
                                "id": "87171618274035063",
                                "name": "New action",
                                "displayAs": "form",
                                "SLtype": "other",
                                "fields": {
                                    "readFields": [
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
                                            "fieldSysName": "contractFile",
                                            "fetch": [],
                                            "sysName": "contractFile",
                                            "name": "Договор",
                                            "dataType": "file",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "contractSum",
                                            "fetch": [],
                                            "sysName": "contractSum",
                                            "name": "Сумма по договору",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "contracter",
                                            "fetch": [],
                                            "sysName": "contracter",
                                            "name": "Принял договор",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "WebUser"
                                        },
                                        {
                                            "fieldSysName": "date",
                                            "fetch": [],
                                            "sysName": "date",
                                            "name": "Дата",
                                            "dataType": "date",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "deceased",
                                            "fetch": [],
                                            "sysName": "deceased",
                                            "name": "Покойный",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "discount",
                                            "fetch": [],
                                            "sysName": "discount",
                                            "name": "Скидка",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {
                                                "customOptionLabel": "Другое",
                                                "keyValue": {
                                                    "key": "key",
                                                    "value": "value",
                                                    "button": "One more"
                                                },
                                                "unitName": "%",
                                                "booleanOptions": [
                                                    "True",
                                                    "False"
                                                ],
                                                "customOption": true,
                                                "customOptionPlaceholder": "Размер скидки",
                                                "range": {
                                                    "min": 0,
                                                    "max": 25,
                                                    "step": 5
                                                },
                                                "customOptionType": "number",
                                                "multipleChoice": [
                                                    {
                                                        "value": "0",
                                                        "label": "0%"
                                                    },
                                                    {
                                                        "value": "5",
                                                        "label": "5%"
                                                    },
                                                    {
                                                        "value": "10",
                                                        "label": "10%"
                                                    },
                                                    {
                                                        "value": "15",
                                                        "label": "15%"
                                                    },
                                                    {
                                                        "value": "20",
                                                        "label": "20%"
                                                    }
                                                ]
                                            },
                                            "link": "discounts"
                                        },
                                        {
                                            "fieldSysName": "email",
                                            "fetch": [],
                                            "sysName": "email",
                                            "name": "E-mail",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "fullName",
                                            "fetch": [],
                                            "sysName": "fullName",
                                            "name": "ФИО",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": null
                                        },
                                        {
                                            "fieldSysName": "hallAdress",
                                            "fetch": [],
                                            "sysName": "hallAdress",
                                            "name": "Трапезная",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "restoran"
                                        },
                                        {
                                            "fieldSysName": "homeAdress",
                                            "fetch": [],
                                            "sysName": "homeAdress",
                                            "name": "Адрес прописки",
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
                                            "fieldSysName": "menu",
                                            "fetch": [],
                                            "sysName": "menu",
                                            "name": "Меню",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "menu"
                                        },
                                        {
                                            "fieldSysName": "passportGivenBy",
                                            "fetch": [],
                                            "sysName": "passportGivenBy",
                                            "name": "Выдан кем",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "passportGivenWhen",
                                            "fetch": [],
                                            "sysName": "passportGivenWhen",
                                            "name": "Выдан когда",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "passportNumber",
                                            "fetch": [],
                                            "sysName": "passportNumber",
                                            "name": "№ паспорта",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "persons",
                                            "fetch": [],
                                            "sysName": "persons",
                                            "name": "Гостей",
                                            "dataType": "number",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "phone",
                                            "fetch": [],
                                            "sysName": "phone",
                                            "name": "Телефон",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "prePayment",
                                            "fetch": [],
                                            "sysName": "prePayment",
                                            "name": "Предоплата",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "serviceFee",
                                            "fetch": [],
                                            "sysName": "serviceFee",
                                            "name": "Сбор",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {
                                                "customOptionLabel": "Другое",
                                                "keyValue": {
                                                    "key": "key",
                                                    "value": "value",
                                                    "button": "One more"
                                                },
                                                "booleanOptions": [
                                                    "True",
                                                    "False"
                                                ],
                                                "customOption": true,
                                                "customOptionPlaceholder": "Введите % за обслуживание",
                                                "range": {},
                                                "customOptionType": "number",
                                                "multipleChoice": [
                                                    {
                                                        "value": "10",
                                                        "label": "Сбор 10%"
                                                    },
                                                    {
                                                        "value": "0",
                                                        "label": "Без сбора"
                                                    }
                                                ]
                                            },
                                            "link": "serviceFee"
                                        },
                                        {
                                            "fieldSysName": "source",
                                            "fetch": [],
                                            "sysName": "source",
                                            "name": "Источник",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "status",
                                            "fetch": [],
                                            "sysName": "status",
                                            "name": "Статус",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "eventStatus"
                                        },
                                        {
                                            "fieldSysName": "time",
                                            "fetch": [],
                                            "sysName": "time",
                                            "name": "Время",
                                            "dataType": "date",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        }
                                    ],
                                    "writeFields": [
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
                                            "fieldSysName": "contractFile",
                                            "fetch": [],
                                            "sysName": "contractFile",
                                            "name": "Договор",
                                            "dataType": "file",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "contractSum",
                                            "fetch": [],
                                            "sysName": "contractSum",
                                            "name": "Сумма по договору",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "contracter",
                                            "fetch": [],
                                            "sysName": "contracter",
                                            "name": "Принял договор",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "WebUser"
                                        },
                                        {
                                            "fieldSysName": "date",
                                            "fetch": [],
                                            "sysName": "date",
                                            "name": "Дата",
                                            "dataType": "date",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "deceased",
                                            "fetch": [],
                                            "sysName": "deceased",
                                            "name": "Покойный",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "discount",
                                            "fetch": [],
                                            "sysName": "discount",
                                            "name": "Скидка",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {
                                                "customOptionLabel": "Другое",
                                                "keyValue": {
                                                    "key": "key",
                                                    "value": "value",
                                                    "button": "One more"
                                                },
                                                "unitName": "%",
                                                "booleanOptions": [
                                                    "True",
                                                    "False"
                                                ],
                                                "customOption": true,
                                                "customOptionPlaceholder": "Размер скидки",
                                                "range": {
                                                    "min": 0,
                                                    "max": 25,
                                                    "step": 5
                                                },
                                                "customOptionType": "number",
                                                "multipleChoice": [
                                                    {
                                                        "value": "0",
                                                        "label": "0%"
                                                    },
                                                    {
                                                        "value": "5",
                                                        "label": "5%"
                                                    },
                                                    {
                                                        "value": "10",
                                                        "label": "10%"
                                                    },
                                                    {
                                                        "value": "15",
                                                        "label": "15%"
                                                    },
                                                    {
                                                        "value": "20",
                                                        "label": "20%"
                                                    }
                                                ]
                                            },
                                            "link": "discounts"
                                        },
                                        {
                                            "fieldSysName": "email",
                                            "fetch": [],
                                            "sysName": "email",
                                            "name": "E-mail",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "fullName",
                                            "fetch": [],
                                            "sysName": "fullName",
                                            "name": "ФИО",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": null
                                        },
                                        {
                                            "fieldSysName": "hallAdress",
                                            "fetch": [],
                                            "sysName": "hallAdress",
                                            "name": "Трапезная",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "restoran"
                                        },
                                        {
                                            "fieldSysName": "homeAdress",
                                            "fetch": [],
                                            "sysName": "homeAdress",
                                            "name": "Адрес прописки",
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
                                            "fieldSysName": "menu",
                                            "fetch": [],
                                            "sysName": "menu",
                                            "name": "Меню",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "menu"
                                        },
                                        {
                                            "fieldSysName": "passportGivenBy",
                                            "fetch": [],
                                            "sysName": "passportGivenBy",
                                            "name": "Выдан кем",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "passportGivenWhen",
                                            "fetch": [],
                                            "sysName": "passportGivenWhen",
                                            "name": "Выдан когда",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "passportNumber",
                                            "fetch": [],
                                            "sysName": "passportNumber",
                                            "name": "№ паспорта",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "persons",
                                            "fetch": [],
                                            "sysName": "persons",
                                            "name": "Гостей",
                                            "dataType": "number",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "phone",
                                            "fetch": [],
                                            "sysName": "phone",
                                            "name": "Телефон",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "prePayment",
                                            "fetch": [],
                                            "sysName": "prePayment",
                                            "name": "Предоплата",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "serviceFee",
                                            "fetch": [],
                                            "sysName": "serviceFee",
                                            "name": "Сбор",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {
                                                "customOptionLabel": "Другое",
                                                "keyValue": {
                                                    "key": "key",
                                                    "value": "value",
                                                    "button": "One more"
                                                },
                                                "booleanOptions": [
                                                    "True",
                                                    "False"
                                                ],
                                                "customOption": true,
                                                "customOptionPlaceholder": "Введите % за обслуживание",
                                                "range": {},
                                                "customOptionType": "number",
                                                "multipleChoice": [
                                                    {
                                                        "value": "10",
                                                        "label": "Сбор 10%"
                                                    },
                                                    {
                                                        "value": "0",
                                                        "label": "Без сбора"
                                                    }
                                                ]
                                            },
                                            "link": "serviceFee"
                                        },
                                        {
                                            "fieldSysName": "source",
                                            "fetch": [],
                                            "sysName": "source",
                                            "name": "Источник",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        },
                                        {
                                            "fieldSysName": "status",
                                            "fetch": [],
                                            "sysName": "status",
                                            "name": "Статус",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "eventStatus"
                                        },
                                        {
                                            "fieldSysName": "time",
                                            "fetch": [],
                                            "sysName": "time",
                                            "name": "Время",
                                            "dataType": "date",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": ""
                                        }
                                    ]
                                },
                                "callFrom": "linked",
                                "callFromField": "client",
                                "closePopup": false,
                                "dropdown": true,
                                "buttonTitle": "Добавить",
                                "buttonIcon": "academy",
                                "formFields": [
                                    {
                                        "id": "22581618320181957"
                                    },
                                    {
                                        "id": "28571618320203818"
                                    }
                                ],
                                "formMapping": [
                                    {
                                        "id": "34271618320206989",
                                        "target": "hallAdress",
                                        "type": "objectField",
                                        "value": null
                                    }
                                ]
                            }
                        ]
                    },
                    "dateEnd": {
                        "id": "dateEnd",
                        "content": "Конец",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "dateStart": {
                        "id": "dateStart",
                        "content": "Начало",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "duration": {
                        "id": "duration",
                        "content": "Длительность",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "durationToCheck": {
                        "id": "durationToCheck",
                        "content": "durationToCheck",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "firstUrl": {
                        "id": "firstUrl",
                        "content": "URL входа",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "phone": {
                        "id": "phone",
                        "content": "Телефон",
                        "type": "field",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "source": {
                        "id": "source",
                        "content": "Источник",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "source",
                        "actions": []
                    },
                    "sourceFromTags": {
                        "id": "sourceFromTags",
                        "content": "Источник",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "type_of_source": {
                        "id": "type_of_source",
                        "content": "Тип источника",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "url": {
                        "id": "url",
                        "content": "URL звонка",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "utmCampaign": {
                        "id": "utmCampaign",
                        "content": "UTM Campaign",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "utmContent": {
                        "id": "utmContent",
                        "content": "UTM Content",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "utmMedium": {
                        "id": "utmMedium",
                        "content": "UTM Medium",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "utmSource": {
                        "id": "utmSource",
                        "content": "UTM Источник",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "utmTerm": {
                        "id": "utmTerm",
                        "content": "UTM Term",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "waitDuration": {
                        "id": "waitDuration",
                        "content": "Ожидание",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "@dateChanged": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@dateCreated": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@who": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "callType": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "calling_number": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "client": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "action__87171618274035063": {
                                    "id": "action__87171618274035063",
                                    "content": "New action",
                                    "type": "action"
                                }
                            },
                            "fieldParams": {},
                            "fieldOrder": [
                                "action__87171618274035063"
                            ]
                        }
                    },
                    "dateEnd": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "dateStart": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "duration": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "durationToCheck": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "firstUrl": {
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
                    "phone": {
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
                    "type_of_source": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "utmCampaign": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "utmContent": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "utmMedium": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "utmSource": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "utmTerm": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "waitDuration": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "agentID": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sourceFromTags": {
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
                            "client",
                            "callType",
                            "calling_number",
                            "dateEnd",
                            "dateStart",
                            "durationToCheck",
                            "firstUrl",
                            "id",
                            "phone",
                            "source",
                            "type_of_source",
                            "url",
                            "utmCampaign",
                            "utmContent",
                            "utmMedium",
                            "utmSource",
                            "utmTerm",
                            "waitDuration",
                            "duration",
                            "agentID",
                            "sourceFromTags"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "formToContract",
                        "id": "87171618274035063",
                        "name": "New action",
                        "displayAs": "form",
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
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
                                    "fieldSysName": "contractFile",
                                    "fetch": [],
                                    "sysName": "contractFile",
                                    "name": "Договор",
                                    "dataType": "file",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "contractSum",
                                    "fetch": [],
                                    "sysName": "contractSum",
                                    "name": "Сумма по договору",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "contracter",
                                    "fetch": [],
                                    "sysName": "contracter",
                                    "name": "Принял договор",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                },
                                {
                                    "fieldSysName": "date",
                                    "fetch": [],
                                    "sysName": "date",
                                    "name": "Дата",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "deceased",
                                    "fetch": [],
                                    "sysName": "deceased",
                                    "name": "Покойный",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "discount",
                                    "fetch": [],
                                    "sysName": "discount",
                                    "name": "Скидка",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "Другое",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "unitName": "%",
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOption": true,
                                        "customOptionPlaceholder": "Размер скидки",
                                        "range": {
                                            "min": 0,
                                            "max": 25,
                                            "step": 5
                                        },
                                        "customOptionType": "number",
                                        "multipleChoice": [
                                            {
                                                "value": "0",
                                                "label": "0%"
                                            },
                                            {
                                                "value": "5",
                                                "label": "5%"
                                            },
                                            {
                                                "value": "10",
                                                "label": "10%"
                                            },
                                            {
                                                "value": "15",
                                                "label": "15%"
                                            },
                                            {
                                                "value": "20",
                                                "label": "20%"
                                            }
                                        ]
                                    },
                                    "link": "discounts"
                                },
                                {
                                    "fieldSysName": "email",
                                    "fetch": [],
                                    "sysName": "email",
                                    "name": "E-mail",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "fullName",
                                    "fetch": [],
                                    "sysName": "fullName",
                                    "name": "ФИО",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "hallAdress",
                                    "fetch": [],
                                    "sysName": "hallAdress",
                                    "name": "Трапезная",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "restoran"
                                },
                                {
                                    "fieldSysName": "homeAdress",
                                    "fetch": [],
                                    "sysName": "homeAdress",
                                    "name": "Адрес прописки",
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
                                    "fieldSysName": "menu",
                                    "fetch": [],
                                    "sysName": "menu",
                                    "name": "Меню",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "menu"
                                },
                                {
                                    "fieldSysName": "passportGivenBy",
                                    "fetch": [],
                                    "sysName": "passportGivenBy",
                                    "name": "Выдан кем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "passportGivenWhen",
                                    "fetch": [],
                                    "sysName": "passportGivenWhen",
                                    "name": "Выдан когда",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "passportNumber",
                                    "fetch": [],
                                    "sysName": "passportNumber",
                                    "name": "№ паспорта",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "persons",
                                    "fetch": [],
                                    "sysName": "persons",
                                    "name": "Гостей",
                                    "dataType": "number",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "phone",
                                    "fetch": [],
                                    "sysName": "phone",
                                    "name": "Телефон",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "prePayment",
                                    "fetch": [],
                                    "sysName": "prePayment",
                                    "name": "Предоплата",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "serviceFee",
                                    "fetch": [],
                                    "sysName": "serviceFee",
                                    "name": "Сбор",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "Другое",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOption": true,
                                        "customOptionPlaceholder": "Введите % за обслуживание",
                                        "range": {},
                                        "customOptionType": "number",
                                        "multipleChoice": [
                                            {
                                                "value": "10",
                                                "label": "Сбор 10%"
                                            },
                                            {
                                                "value": "0",
                                                "label": "Без сбора"
                                            }
                                        ]
                                    },
                                    "link": "serviceFee"
                                },
                                {
                                    "fieldSysName": "source",
                                    "fetch": [],
                                    "sysName": "source",
                                    "name": "Источник",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "status",
                                    "fetch": [],
                                    "sysName": "status",
                                    "name": "Статус",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "eventStatus"
                                },
                                {
                                    "fieldSysName": "time",
                                    "fetch": [],
                                    "sysName": "time",
                                    "name": "Время",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ],
                            "writeFields": [
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
                                    "fieldSysName": "contractFile",
                                    "fetch": [],
                                    "sysName": "contractFile",
                                    "name": "Договор",
                                    "dataType": "file",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "contractSum",
                                    "fetch": [],
                                    "sysName": "contractSum",
                                    "name": "Сумма по договору",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "contracter",
                                    "fetch": [],
                                    "sysName": "contracter",
                                    "name": "Принял договор",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                },
                                {
                                    "fieldSysName": "date",
                                    "fetch": [],
                                    "sysName": "date",
                                    "name": "Дата",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "deceased",
                                    "fetch": [],
                                    "sysName": "deceased",
                                    "name": "Покойный",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "discount",
                                    "fetch": [],
                                    "sysName": "discount",
                                    "name": "Скидка",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "Другое",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "unitName": "%",
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOption": true,
                                        "customOptionPlaceholder": "Размер скидки",
                                        "range": {
                                            "min": 0,
                                            "max": 25,
                                            "step": 5
                                        },
                                        "customOptionType": "number",
                                        "multipleChoice": [
                                            {
                                                "value": "0",
                                                "label": "0%"
                                            },
                                            {
                                                "value": "5",
                                                "label": "5%"
                                            },
                                            {
                                                "value": "10",
                                                "label": "10%"
                                            },
                                            {
                                                "value": "15",
                                                "label": "15%"
                                            },
                                            {
                                                "value": "20",
                                                "label": "20%"
                                            }
                                        ]
                                    },
                                    "link": "discounts"
                                },
                                {
                                    "fieldSysName": "email",
                                    "fetch": [],
                                    "sysName": "email",
                                    "name": "E-mail",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "fullName",
                                    "fetch": [],
                                    "sysName": "fullName",
                                    "name": "ФИО",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "hallAdress",
                                    "fetch": [],
                                    "sysName": "hallAdress",
                                    "name": "Трапезная",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "restoran"
                                },
                                {
                                    "fieldSysName": "homeAdress",
                                    "fetch": [],
                                    "sysName": "homeAdress",
                                    "name": "Адрес прописки",
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
                                    "fieldSysName": "menu",
                                    "fetch": [],
                                    "sysName": "menu",
                                    "name": "Меню",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "menu"
                                },
                                {
                                    "fieldSysName": "passportGivenBy",
                                    "fetch": [],
                                    "sysName": "passportGivenBy",
                                    "name": "Выдан кем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "passportGivenWhen",
                                    "fetch": [],
                                    "sysName": "passportGivenWhen",
                                    "name": "Выдан когда",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "passportNumber",
                                    "fetch": [],
                                    "sysName": "passportNumber",
                                    "name": "№ паспорта",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "persons",
                                    "fetch": [],
                                    "sysName": "persons",
                                    "name": "Гостей",
                                    "dataType": "number",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "phone",
                                    "fetch": [],
                                    "sysName": "phone",
                                    "name": "Телефон",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "prePayment",
                                    "fetch": [],
                                    "sysName": "prePayment",
                                    "name": "Предоплата",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "serviceFee",
                                    "fetch": [],
                                    "sysName": "serviceFee",
                                    "name": "Сбор",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {
                                        "customOptionLabel": "Другое",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "True",
                                            "False"
                                        ],
                                        "customOption": true,
                                        "customOptionPlaceholder": "Введите % за обслуживание",
                                        "range": {},
                                        "customOptionType": "number",
                                        "multipleChoice": [
                                            {
                                                "value": "10",
                                                "label": "Сбор 10%"
                                            },
                                            {
                                                "value": "0",
                                                "label": "Без сбора"
                                            }
                                        ]
                                    },
                                    "link": "serviceFee"
                                },
                                {
                                    "fieldSysName": "source",
                                    "fetch": [],
                                    "sysName": "source",
                                    "name": "Источник",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "status",
                                    "fetch": [],
                                    "sysName": "status",
                                    "name": "Статус",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "eventStatus"
                                },
                                {
                                    "fieldSysName": "time",
                                    "fetch": [],
                                    "sysName": "time",
                                    "name": "Время",
                                    "dataType": "date",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ]
                        },
                        "callFrom": "linked",
                        "callFromField": "client",
                        "closePopup": false,
                        "dropdown": true,
                        "buttonTitle": "Добавить",
                        "buttonIcon": "academy",
                        "formFields": [
                            {
                                "id": "22581618320181957"
                            },
                            {
                                "id": "28571618320203818"
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "34271618320206989",
                                "target": "hallAdress",
                                "type": "objectField",
                                "value": null
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "@dateChanged": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@dateCreated": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@who": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "callType": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "calling_number": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "client": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "action__87171618274035063": {
                                "id": "action__87171618274035063",
                                "content": "New action",
                                "type": "action"
                            }
                        },
                        "fieldParams": {},
                        "fieldOrder": [
                            "action__87171618274035063"
                        ]
                    }
                },
                "dateEnd": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "dateStart": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "duration": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "durationToCheck": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "firstUrl": {
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
                "phone": {
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
                "type_of_source": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "url": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "utmCampaign": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "utmContent": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "utmMedium": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "utmSource": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "utmTerm": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "waitDuration": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "agentID": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sourceFromTags": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "formToContract",
                    "id": "87171618274035063",
                    "name": "New action",
                    "displayAs": "form",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
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
                                "fieldSysName": "contractFile",
                                "fetch": [],
                                "sysName": "contractFile",
                                "name": "Договор",
                                "dataType": "file",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "contractSum",
                                "fetch": [],
                                "sysName": "contractSum",
                                "name": "Сумма по договору",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "contracter",
                                "fetch": [],
                                "sysName": "contracter",
                                "name": "Принял договор",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            },
                            {
                                "fieldSysName": "date",
                                "fetch": [],
                                "sysName": "date",
                                "name": "Дата",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "deceased",
                                "fetch": [],
                                "sysName": "deceased",
                                "name": "Покойный",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "discount",
                                "fetch": [],
                                "sysName": "discount",
                                "name": "Скидка",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "Другое",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "unitName": "%",
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOption": true,
                                    "customOptionPlaceholder": "Размер скидки",
                                    "range": {
                                        "min": 0,
                                        "max": 25,
                                        "step": 5
                                    },
                                    "customOptionType": "number",
                                    "multipleChoice": [
                                        {
                                            "value": "0",
                                            "label": "0%"
                                        },
                                        {
                                            "value": "5",
                                            "label": "5%"
                                        },
                                        {
                                            "value": "10",
                                            "label": "10%"
                                        },
                                        {
                                            "value": "15",
                                            "label": "15%"
                                        },
                                        {
                                            "value": "20",
                                            "label": "20%"
                                        }
                                    ]
                                },
                                "link": "discounts"
                            },
                            {
                                "fieldSysName": "email",
                                "fetch": [],
                                "sysName": "email",
                                "name": "E-mail",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "fullName",
                                "fetch": [],
                                "sysName": "fullName",
                                "name": "ФИО",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "hallAdress",
                                "fetch": [],
                                "sysName": "hallAdress",
                                "name": "Трапезная",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "restoran"
                            },
                            {
                                "fieldSysName": "homeAdress",
                                "fetch": [],
                                "sysName": "homeAdress",
                                "name": "Адрес прописки",
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
                                "fieldSysName": "menu",
                                "fetch": [],
                                "sysName": "menu",
                                "name": "Меню",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "menu"
                            },
                            {
                                "fieldSysName": "passportGivenBy",
                                "fetch": [],
                                "sysName": "passportGivenBy",
                                "name": "Выдан кем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "passportGivenWhen",
                                "fetch": [],
                                "sysName": "passportGivenWhen",
                                "name": "Выдан когда",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "passportNumber",
                                "fetch": [],
                                "sysName": "passportNumber",
                                "name": "№ паспорта",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "persons",
                                "fetch": [],
                                "sysName": "persons",
                                "name": "Гостей",
                                "dataType": "number",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "phone",
                                "fetch": [],
                                "sysName": "phone",
                                "name": "Телефон",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "prePayment",
                                "fetch": [],
                                "sysName": "prePayment",
                                "name": "Предоплата",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "serviceFee",
                                "fetch": [],
                                "sysName": "serviceFee",
                                "name": "Сбор",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "Другое",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOption": true,
                                    "customOptionPlaceholder": "Введите % за обслуживание",
                                    "range": {},
                                    "customOptionType": "number",
                                    "multipleChoice": [
                                        {
                                            "value": "10",
                                            "label": "Сбор 10%"
                                        },
                                        {
                                            "value": "0",
                                            "label": "Без сбора"
                                        }
                                    ]
                                },
                                "link": "serviceFee"
                            },
                            {
                                "fieldSysName": "source",
                                "fetch": [],
                                "sysName": "source",
                                "name": "Источник",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "Статус",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "eventStatus"
                            },
                            {
                                "fieldSysName": "time",
                                "fetch": [],
                                "sysName": "time",
                                "name": "Время",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
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
                                "fieldSysName": "contractFile",
                                "fetch": [],
                                "sysName": "contractFile",
                                "name": "Договор",
                                "dataType": "file",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "contractSum",
                                "fetch": [],
                                "sysName": "contractSum",
                                "name": "Сумма по договору",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "contracter",
                                "fetch": [],
                                "sysName": "contracter",
                                "name": "Принял договор",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            },
                            {
                                "fieldSysName": "date",
                                "fetch": [],
                                "sysName": "date",
                                "name": "Дата",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "deceased",
                                "fetch": [],
                                "sysName": "deceased",
                                "name": "Покойный",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "discount",
                                "fetch": [],
                                "sysName": "discount",
                                "name": "Скидка",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "Другое",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "unitName": "%",
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOption": true,
                                    "customOptionPlaceholder": "Размер скидки",
                                    "range": {
                                        "min": 0,
                                        "max": 25,
                                        "step": 5
                                    },
                                    "customOptionType": "number",
                                    "multipleChoice": [
                                        {
                                            "value": "0",
                                            "label": "0%"
                                        },
                                        {
                                            "value": "5",
                                            "label": "5%"
                                        },
                                        {
                                            "value": "10",
                                            "label": "10%"
                                        },
                                        {
                                            "value": "15",
                                            "label": "15%"
                                        },
                                        {
                                            "value": "20",
                                            "label": "20%"
                                        }
                                    ]
                                },
                                "link": "discounts"
                            },
                            {
                                "fieldSysName": "email",
                                "fetch": [],
                                "sysName": "email",
                                "name": "E-mail",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "fullName",
                                "fetch": [],
                                "sysName": "fullName",
                                "name": "ФИО",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "hallAdress",
                                "fetch": [],
                                "sysName": "hallAdress",
                                "name": "Трапезная",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "restoran"
                            },
                            {
                                "fieldSysName": "homeAdress",
                                "fetch": [],
                                "sysName": "homeAdress",
                                "name": "Адрес прописки",
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
                                "fieldSysName": "menu",
                                "fetch": [],
                                "sysName": "menu",
                                "name": "Меню",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "menu"
                            },
                            {
                                "fieldSysName": "passportGivenBy",
                                "fetch": [],
                                "sysName": "passportGivenBy",
                                "name": "Выдан кем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "passportGivenWhen",
                                "fetch": [],
                                "sysName": "passportGivenWhen",
                                "name": "Выдан когда",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "passportNumber",
                                "fetch": [],
                                "sysName": "passportNumber",
                                "name": "№ паспорта",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "persons",
                                "fetch": [],
                                "sysName": "persons",
                                "name": "Гостей",
                                "dataType": "number",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "phone",
                                "fetch": [],
                                "sysName": "phone",
                                "name": "Телефон",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "prePayment",
                                "fetch": [],
                                "sysName": "prePayment",
                                "name": "Предоплата",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "serviceFee",
                                "fetch": [],
                                "sysName": "serviceFee",
                                "name": "Сбор",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {
                                    "customOptionLabel": "Другое",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOption": true,
                                    "customOptionPlaceholder": "Введите % за обслуживание",
                                    "range": {},
                                    "customOptionType": "number",
                                    "multipleChoice": [
                                        {
                                            "value": "10",
                                            "label": "Сбор 10%"
                                        },
                                        {
                                            "value": "0",
                                            "label": "Без сбора"
                                        }
                                    ]
                                },
                                "link": "serviceFee"
                            },
                            {
                                "fieldSysName": "source",
                                "fetch": [],
                                "sysName": "source",
                                "name": "Источник",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "Статус",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "eventStatus"
                            },
                            {
                                "fieldSysName": "time",
                                "fetch": [],
                                "sysName": "time",
                                "name": "Время",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "callFrom": "linked",
                    "callFromField": "client",
                    "closePopup": false,
                    "dropdown": true,
                    "buttonTitle": "Добавить",
                    "buttonIcon": "academy",
                    "formFields": [
                        {
                            "id": "22581618320181957"
                        },
                        {
                            "id": "28571618320203818"
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "34271618320206989",
                            "target": "hallAdress",
                            "type": "objectField",
                            "value": null
                        }
                    ]
                }
            ]
        },
        "tableTitle": "Звонки",
        "actions": null,
        "headers": [
            {
                "sysName": "agentID",
                "dataType": "link",
                "name": "Агент",
                "id": "12971612393927266",
                "link": "Agents",
                "group": "1610287187145",
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
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "json": false
            },
            {
                "sysName": "callType",
                "dataType": "string",
                "name": "Тип звонка",
                "id": "97531608334034546",
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
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "calling_number",
                "dataType": "string",
                "name": "Звонок на телефон",
                "id": "88691605401461485",
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
                "format": "phone",
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "client",
                "dataType": "link",
                "name": "Клиент",
                "id": "37501605401391515",
                "link": "Clients",
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
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "json": false
            },
            {
                "sysName": "dateEnd",
                "dataType": "date",
                "name": "Конец",
                "id": "61431608339503598",
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "dateStart",
                "dataType": "date",
                "name": "Начало",
                "id": "34511608339497129",
                "link": "",
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
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "duration",
                "dataType": "string",
                "name": "Длительность",
                "id": "49831608339519180",
                "link": "",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "durationToCheck",
                "dataType": "number",
                "name": "durationToCheck",
                "id": "20401609762146014",
                "link": "",
                "group": "1610287203232",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "firstUrl",
                "dataType": "string",
                "name": "URL входа",
                "id": "63681608334047679",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
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
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "phone",
                "dataType": "string",
                "name": "Телефон",
                "id": "59641606520600951",
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
                "format": "phone",
                "formatOptions": null,
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "source",
                "dataType": "link",
                "name": "Источник",
                "id": "27621605401800993",
                "link": "source",
                "group": "1610287187145",
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
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "json": false
            },
            {
                "sysName": "sourceFromTags",
                "dataType": "string",
                "name": "Источник",
                "id": "11321610288006354",
                "link": "",
                "group": "1610287187145",
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
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "type_of_source",
                "dataType": "string",
                "name": "Тип источника",
                "id": "50451605401766987",
                "link": "",
                "group": "1610287187145",
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
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "url",
                "dataType": "string",
                "name": "URL звонка",
                "id": "41211608334043680",
                "link": null,
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "utmCampaign",
                "dataType": "string",
                "name": "UTM Campaign",
                "id": "71701608334213055",
                "link": null,
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "utmContent",
                "dataType": "string",
                "name": "UTM Content",
                "id": "20181608334213626",
                "link": null,
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
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "utmMedium",
                "dataType": "string",
                "name": "UTM Medium",
                "id": "48121608333941150",
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
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "utmSource",
                "dataType": "string",
                "name": "UTM Источник",
                "id": "69781605401814270",
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
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "utmTerm",
                "dataType": "string",
                "name": "UTM Term",
                "id": "21281608334214088",
                "link": null,
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            {
                "sysName": "waitDuration",
                "dataType": "string",
                "name": "Ожидание",
                "id": "91721608339509589",
                "link": "",
                "group": "0",
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
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            }
        ],
        "data": [
            {
                "sourceFromTags": "Google organic",
                "waitDuration": "14",
                "duration": "189",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618323068000,
                "url": "https://spb.pominky.ru/kontakty.html",
                "dateEnd": 1618323271000,
                "utmSource": "google",
                "utmMedium": "organic",
                "id": "79818153020-13.04.21-17:11",
                "client": "79818153020",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/kontakty.html",
                "calling_number": "78126149045",
                "durationToCheck": 189,
                "phone": "79818153020"
            },
            {
                "sourceFromTags": "Яндекс Карты",
                "waitDuration": "13",
                "duration": "76",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618322431000,
                "url": "(undefined)",
                "dateEnd": 1618322520000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79112128506-13.04.21-17:00",
                "client": "79112128506",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78126141312",
                "durationToCheck": 76,
                "phone": "79112128506"
            },
            {
                "id": "5d47f184-112f-4bcf-aa38-81d05f5c54fe"
            },
            {
                "sourceFromTags": "Яндекс директ",
                "waitDuration": "14",
                "duration": "132",
                "utmCampaign": "cid|45133922|search",
                "utmContent": "gid|3916795767|aid|10591653547|21953862755_",
                "dateStart": 1618320439000,
                "url": "https://spb.pominky.ru/fotogalereya/gzhatskaya-9.html",
                "dateEnd": 1618320585000,
                "utmSource": "yandex",
                "utmMedium": "cpc",
                "id": "79213892437-13.04.21-16:27",
                "client": "79213892437",
                "callType": "1",
                "utmTerm": "Организовать поминки",
                "firstUrl": "https://spb.pominky.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=cid%7C45133922%7Csearch&utm_content=gid%7C3916795767%7Caid%7C10591653547%7C21953862755_&utm_term=%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%BA%D0%B8&pm_source=none&pm_position=2&mango=%7Cc%3A45133922%7Cg%3A3916795767%7Cb%3A10591653547%7Ck%3A21953862755%7Cst%3Asearch%7Ca%3Ano%7Cs%3Anone%7Ct%3Apremium%7Cp%3A2%7Cr%3A%7Creg%3A2%7Cnet%3A%7Byad%7D&yclid=1892554816135657222",
                "calling_number": "78126112687",
                "durationToCheck": 132,
                "phone": "79213892437"
            },
            {
                "waitDuration": "10",
                "duration": "226",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618317777000,
                "url": "(undefined)",
                "dateEnd": 1618318013000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79146214455-13.04.21-15:42",
                "client": "79146214455",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 226,
                "phone": "79146214455"
            },
            {
                "waitDuration": "14",
                "duration": "62",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618317304000,
                "url": "(undefined)",
                "dateEnd": 1618317380000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79215665302-13.04.21-15:35",
                "client": "79215665302",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 62,
                "phone": "79215665302"
            },
            {
                "waitDuration": "13",
                "duration": "147",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618316954000,
                "url": "(undefined)",
                "dateEnd": 1618317114000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79312880873-13.04.21-15:29",
                "client": "79312880873",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 147,
                "phone": "79312880873"
            },
            {
                "waitDuration": "17",
                "duration": "84",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618315112000,
                "url": "(undefined)",
                "dateEnd": 1618315213000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79817050167-13.04.21-14:58",
                "client": "79817050167",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 84,
                "phone": "79817050167"
            },
            {
                "waitDuration": "11",
                "duration": "35",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618312066000,
                "url": "(undefined)",
                "dateEnd": 1618312112000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79819516781-13.04.21-14:07",
                "client": "79819516781",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 35,
                "phone": "79819516781"
            },
            {
                "sourceFromTags": "Яндекс Карты",
                "waitDuration": "11",
                "duration": "66",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618310555000,
                "url": "(undefined)",
                "dateEnd": 1618310632000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79312880873-13.04.21-13:42",
                "client": "79312880873",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78126141312",
                "durationToCheck": 66,
                "phone": "79312880873"
            },
            {
                "waitDuration": "20",
                "duration": "90",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618308941000,
                "url": "(undefined)",
                "dateEnd": 1618309051000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79119851361-13.04.21-13:15",
                "client": "79119851361",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 90,
                "phone": "79119851361"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "10",
                "duration": "17",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79213681828",
                "dateStart": 1618308701000,
                "url": "(undefined)",
                "dateEnd": 1618308728000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79213681828-13.04.21-13:11",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 17,
                "phone": "79213681828"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "27",
                "duration": "4",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79213681828",
                "dateStart": 1618308634000,
                "url": "(undefined)",
                "dateEnd": 1618308665000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79213681828-13.04.21-13:10",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 4,
                "phone": "79213681828"
            },
            {
                "sourceFromTags": "Яндекс Карты",
                "waitDuration": "21",
                "duration": "57",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618308626000,
                "url": "(undefined)",
                "dateEnd": 1618308704000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79117774147-13.04.21-13:10",
                "client": "79117774147",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78126141312",
                "durationToCheck": 57,
                "phone": "79117774147"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "18",
                "duration": "124",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79119214768",
                "dateStart": 1618308176000,
                "url": "(undefined)",
                "dateEnd": 1618308318000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79119214768-13.04.21-13:02",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 124,
                "phone": "79119214768"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "53",
                "duration": "0",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79119214768",
                "dateStart": 1618307984000,
                "url": "(undefined)",
                "dateEnd": 1618308037000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79119214768-13.04.21-12:59",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 0,
                "phone": "79119214768"
            },
            {
                "sourceFromTags": "Яндекс organic",
                "waitDuration": "40",
                "duration": "0",
                "utmCampaign": "(none)",
                "utmContent": "/",
                "dateStart": 1618307909000,
                "url": "https://spb.pominky.ru/menyu-catering.html",
                "dateEnd": 1618307949000,
                "utmSource": "yandex",
                "utmMedium": "organic",
                "id": "79062571313-13.04.21-12:58",
                "client": "79062571313",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/pominalnyy-keytering.html/",
                "calling_number": "78126136634",
                "durationToCheck": 0,
                "phone": "79062571313"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "11",
                "duration": "78",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79213681828",
                "dateStart": 1618307624000,
                "url": "(undefined)",
                "dateEnd": 1618307713000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79213681828-13.04.21-12:53",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 78,
                "phone": "79213681828"
            },
            {
                "waitDuration": "9",
                "duration": "0",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618307441000,
                "url": "(undefined)",
                "dateEnd": 1618307450000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79119965320-13.04.21-12:50",
                "client": "79119965320",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 0,
                "phone": "79119965320"
            },
            {
                "waitDuration": "11",
                "duration": "54",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618304067000,
                "url": "(undefined)",
                "dateEnd": 1618304132000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79217661056-13.04.21-11:54",
                "client": "79217661056",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 54,
                "phone": "79217661056"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "11",
                "duration": "85",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79117800369",
                "dateStart": 1618303913000,
                "url": "(undefined)",
                "dateEnd": 1618304009000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79117800369-13.04.21-11:51",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 85,
                "phone": "79117800369"
            },
            {
                "waitDuration": "10",
                "duration": "22",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618303461000,
                "url": "(undefined)",
                "dateEnd": 1618303493000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79220120298-13.04.21-11:44",
                "client": "79220120298",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 22,
                "phone": "79220120298"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "14",
                "duration": "83",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79213206623",
                "dateStart": 1618303336000,
                "url": "(undefined)",
                "dateEnd": 1618303433000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79213206623-13.04.21-11:42",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 83,
                "phone": "79213206623"
            },
            {
                "sourceFromTags": "Google organic",
                "waitDuration": "1",
                "duration": "0",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618303236000,
                "url": "https://spb.pominky.ru/kontakty.html",
                "dateEnd": 1618303237000,
                "utmSource": "google",
                "utmMedium": "organic",
                "id": "79818153020-13.04.21-11:40",
                "client": "79818153020",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/kontakty.html",
                "calling_number": "78126149045",
                "durationToCheck": 0,
                "phone": "79818153020"
            },
            {
                "sourceFromTags": "Google organic",
                "waitDuration": "13",
                "duration": "75",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618303137000,
                "url": "https://spb.pominky.ru/kontakty.html",
                "dateEnd": 1618303225000,
                "utmSource": "google",
                "utmMedium": "organic",
                "id": "79818153020-13.04.21-11:38",
                "client": "79818153020",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/kontakty.html",
                "calling_number": "78126149045",
                "durationToCheck": 75,
                "phone": "79818153020"
            },
            {
                "waitDuration": "12",
                "duration": "33",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618302614000,
                "url": "(undefined)",
                "dateEnd": 1618302659000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79119965320-13.04.21-11:30",
                "client": "79119965320",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 33,
                "phone": "79119965320"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "25",
                "duration": "55",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79117800369",
                "dateStart": 1618301631000,
                "url": "(undefined)",
                "dateEnd": 1618301711000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79117800369-13.04.21-11:13",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 55,
                "phone": "79117800369"
            },
            {
                "waitDuration": "13",
                "duration": "109",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618301533000,
                "url": "(undefined)",
                "dateEnd": 1618301655000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "78126814781-13.04.21-11:12",
                "client": "78126814781",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 109,
                "phone": "78126814781"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "38",
                "duration": "25",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79817205055",
                "dateStart": 1618300683000,
                "url": "(undefined)",
                "dateEnd": 1618300746000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79817205055-13.04.21-10:58",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 25,
                "phone": "79817205055"
            },
            {
                "waitDuration": "47",
                "duration": "11",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618300663000,
                "url": "(undefined)",
                "dateEnd": 1618300721000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79213125559-13.04.21-10:57",
                "client": "79213125559",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 11,
                "phone": "79213125559"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "11",
                "duration": "76",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79117526843",
                "dateStart": 1618300534000,
                "url": "(undefined)",
                "dateEnd": 1618300621000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79117526843-13.04.21-10:55",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 76,
                "phone": "79117526843"
            },
            {
                "waitDuration": "12",
                "duration": "14",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618300068000,
                "url": "(undefined)",
                "dateEnd": 1618300094000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79119262511-13.04.21-10:47",
                "client": "79119262511",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 14,
                "phone": "79119262511"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "13",
                "duration": "11",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79111228898",
                "dateStart": 1618298715000,
                "url": "(undefined)",
                "dateEnd": 1618298739000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79111228898-13.04.21-10:25",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 11,
                "phone": "79111228898"
            },
            {
                "sourceFromTags": "Google organic",
                "waitDuration": "9",
                "duration": "90",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618297299000,
                "url": "https://spb.pominky.ru/dostavka-blyud-iz-seti-kafe-pominalnaya-trapeza.html/",
                "dateEnd": 1618297398000,
                "utmSource": "google",
                "utmMedium": "organic",
                "id": "79219612778-13.04.21-10:01",
                "client": "79219612778",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/dostavka-blyud-iz-seti-kafe-pominalnaya-trapeza.html/",
                "calling_number": "78125646736",
                "durationToCheck": 90,
                "phone": "79219612778"
            },
            {
                "sourceFromTags": "Google organic",
                "waitDuration": "70",
                "duration": "3",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618297219000,
                "url": "https://spb.pominky.ru/dostavka-blyud-iz-seti-kafe-pominalnaya-trapeza.html/",
                "dateEnd": 1618297292000,
                "utmSource": "google",
                "utmMedium": "organic",
                "id": "79219612778-13.04.21-10:00",
                "client": "79219612778",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/dostavka-blyud-iz-seti-kafe-pominalnaya-trapeza.html/",
                "calling_number": "78125646736",
                "durationToCheck": 3,
                "phone": "79219612778"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "11",
                "duration": "146",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79117674969",
                "dateStart": 1618297108000,
                "url": "(undefined)",
                "dateEnd": 1618297265000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79117674969-13.04.21-09:58",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 146,
                "phone": "79117674969"
            },
            {
                "sourceFromTags": "Google adwords",
                "waitDuration": "14",
                "duration": "48",
                "utmCampaign": "9977459477",
                "utmContent": "459281209354",
                "dateStart": 1618296892000,
                "url": "https://spb.pominky.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=cid%7C45133922%7Csearch&utm_content=gid%7C3916795765%7Caid%7C9668338880%7C17930321998_&utm_term=%D0%9A%D0%B0%D1%84%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D0%BA%20%D0%B2%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82%20%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D0%B5&pm_source=none&pm_position=3&mango=%7Cc%3A45133922%7Cg%3A3916795765%7Cb%3A9668338880%7Ck%3A17930321998%7Cst%3Asearch%7Ca%3Ano%7Cs%3Anone%7Ct%3Apremium%7Cp%3A3%7Cr%3A%7Creg%3A2%7Cnet%3A%7Byad%7D&yclid=1820346579959982578",
                "dateEnd": 1618296954000,
                "utmSource": "google",
                "utmMedium": "cpc",
                "id": "79992493914-13.04.21-09:54",
                "client": "79992493914",
                "callType": "1",
                "utmTerm": "+поминки +в +кафе +спб",
                "firstUrl": "https://spb.pominky.ru/?utm_source=yandex&utm_medium=cpc&utm_campaign=cid%7C45133922%7Csearch&utm_content=gid%7C3916795765%7Caid%7C9668338880%7C17930321998_&utm_term=%D0%9A%D0%B0%D1%84%D0%B5%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D0%BA%20%D0%B2%20%D0%A1%D0%B0%D0%BD%D0%BA%D1%82%20%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3%D0%B5&pm_source=none&pm_position=3&mango=%7Cc%3A45133922%7Cg%3A3916795765%7Cb%3A9668338880%7Ck%3A17930321998%7Cst%3Asearch%7Ca%3Ano%7Cs%3Anone%7Ct%3Apremium%7Cp%3A3%7Cr%3A%7Creg%3A2%7Cnet%3A%7Byad%7D&yclid=1820346579959982578",
                "calling_number": "78123173447",
                "durationToCheck": 48,
                "phone": "79992493914"
            },
            {
                "waitDuration": "23",
                "duration": "5",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618250886000,
                "url": "(undefined)",
                "dateEnd": 1618250914000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79219543381-12.04.21-21:08",
                "client": "79219543381",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 5,
                "phone": "79219543381"
            },
            {
                "sourceFromTags": "Яндекс Карты на сайт",
                "waitDuration": "17",
                "duration": "61",
                "utmCampaign": "(none)",
                "utmContent": "gzatskaya",
                "dateStart": 1618244641000,
                "url": "https://spb.pominky.ru/fotogalereya/gzhatskaya-9.html",
                "dateEnd": 1618244719000,
                "utmSource": "yandex_maps",
                "utmMedium": "(none)",
                "id": "79217475464-12.04.21-19:24",
                "client": "79217475464",
                "callType": "1",
                "utmTerm": "поминальное кафе санкт-петербург",
                "firstUrl": "https://spb.pominky.ru/?utm_content=gzatskaya&utm_source=yandex_maps",
                "calling_number": "78126135583",
                "durationToCheck": 61,
                "phone": "79217475464"
            },
            {
                "sourceFromTags": "Яндекс Карты",
                "waitDuration": "11",
                "duration": "76",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618242712000,
                "url": "(undefined)",
                "dateEnd": 1618242799000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "78125572930-12.04.21-18:51",
                "client": "78125572930",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78126141312",
                "durationToCheck": 76,
                "phone": "78125572930"
            },
            {
                "waitDuration": "10",
                "duration": "14",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618240587000,
                "url": "(undefined)",
                "dateEnd": 1618240611000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "74952780222-12.04.21-18:16",
                "client": "74952780222",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 14,
                "phone": "74952780222"
            },
            {
                "waitDuration": "13",
                "duration": "20",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618239687000,
                "url": "https://spb.pominky.ru/fotogalereya/veteranov-16.html",
                "dateEnd": 1618239720000,
                "utmSource": "spb.zoon.ru",
                "utmMedium": "referral",
                "id": "79111967530-12.04.21-18:01",
                "client": "79111967530",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/fotogalereya/veteranov-16.html",
                "calling_number": "78125666338",
                "durationToCheck": 20,
                "phone": "79111967530"
            },
            {
                "sourceFromTags": "Яндекс Карты на сайт",
                "waitDuration": "3",
                "duration": "0",
                "utmCampaign": "(none)",
                "utmContent": "toreza",
                "dateStart": 1618239017000,
                "url": "https://spb.pominky.ru/?utm_content=politeh&utm_source=yandex_maps",
                "dateEnd": 1618239020000,
                "utmSource": "yandex_maps",
                "utmMedium": "(none)",
                "id": "79013583349-12.04.21-17:50",
                "client": "79013583349",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/menyu.html",
                "calling_number": "78126137213",
                "durationToCheck": 0,
                "phone": "79013583349"
            },
            {
                "sourceFromTags": "Google adwords",
                "waitDuration": "15",
                "duration": "183",
                "utmCampaign": "9977459477",
                "utmContent": "482791162312",
                "dateStart": 1618237423000,
                "url": "https://spb.pominky.ru/?utm_source=google&utm_medium=cpc&utm_campaign=9977459477&utm_content=482791162312&utm_term=%2B%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%BA%D0%B8%20%2B%D0%B2%20%2B%D0%BA%D0%B0%D1%84%D0%B5%20%2B%D1%81%D0%BF%D0%B1&gclid=EAIaIQobChMIt6qV3sv47wIVjgWiAx1D4wqSEAAYAyAAEgLEqPD_BwE",
                "dateEnd": 1618237621000,
                "utmSource": "google",
                "utmMedium": "cpc",
                "id": "78126873743-12.04.21-17:23",
                "client": "78126873743",
                "callType": "1",
                "utmTerm": "+поминки +в +кафе +спб",
                "firstUrl": "https://spb.pominky.ru/?utm_source=google&utm_medium=cpc&utm_campaign=9977459477&utm_content=482791162312&utm_term=%2B%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%BA%D0%B8%20%2B%D0%B2%20%2B%D0%BA%D0%B0%D1%84%D0%B5%20%2B%D1%81%D0%BF%D0%B1&gclid=EAIaIQobChMIt6qV3sv47wIVjgWiAx1D4wqSEAAYAyAAEgLEqPD_BwE",
                "calling_number": "78126135381",
                "durationToCheck": 183,
                "phone": "78126873743"
            },
            {
                "waitDuration": "1",
                "duration": "0",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618236742000,
                "url": "(undefined)",
                "dateEnd": 1618236743000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79819111676-12.04.21-17:12",
                "client": "79819111676",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 0,
                "phone": "79819111676"
            },
            {
                "sourceFromTags": "Google adwords",
                "waitDuration": "12",
                "duration": "171",
                "utmCampaign": "11761194450",
                "utmContent": "483754730528",
                "dateStart": 1618235702000,
                "url": "https://spb.pominky.ru/",
                "dateEnd": 1618235885000,
                "utmSource": "google",
                "utmMedium": "cpc",
                "id": "78127437654-12.04.21-16:55",
                "client": "78127437654",
                "callType": "1",
                "utmTerm": "поминальная трапеза спб",
                "firstUrl": "https://spb.pominky.ru/?utm_source=google&utm_medium=cpc&utm_campaign=11761194450&utm_content=483754730528&utm_term=%D0%BF%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%82%D1%80%D0%B0%D0%BF%D0%B5%D0%B7%D0%B0%20%D1%81%D0%BF%D0%B1&gclid=Cj0KCQjw38-DBhDpARIsADJ3kjnJGy1eW326guk-uGnp_DRBFcJcvDLrJePpHcWlcGrtkOEtRDGG45waAs0mEALw_wcB",
                "calling_number": "78126113697",
                "durationToCheck": 171,
                "phone": "78127437654"
            },
            {
                "waitDuration": "14",
                "duration": "29",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618234246000,
                "url": "(undefined)",
                "dateEnd": 1618234289000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79949990309-12.04.21-16:30",
                "client": "79949990309",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 29,
                "phone": "79949990309"
            },
            {
                "sourceFromTags": "Агент",
                "waitDuration": "19",
                "duration": "93",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "agentID": "79110340307",
                "dateStart": 1618233574000,
                "url": "(undefined)",
                "dateEnd": 1618233686000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79110340307-12.04.21-16:19",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 93,
                "phone": "79110340307"
            },
            {
                "sourceFromTags": "Google organic",
                "waitDuration": "10",
                "duration": "54",
                "utmCampaign": "(none)",
                "utmContent": "(none)",
                "dateStart": 1618232297000,
                "url": "https://spb.pominky.ru/",
                "dateEnd": 1618232361000,
                "utmSource": "google",
                "utmMedium": "organic",
                "id": "79643725094-12.04.21-15:58",
                "client": "79643725094",
                "callType": "1",
                "utmTerm": "(none)",
                "firstUrl": "https://spb.pominky.ru/",
                "calling_number": "78126135583",
                "durationToCheck": 54,
                "phone": "79643725094"
            },
            {
                "waitDuration": "13",
                "duration": "167",
                "utmCampaign": "(undefined)",
                "utmContent": "(undefined)",
                "dateStart": 1618230726000,
                "url": "(undefined)",
                "dateEnd": 1618230906000,
                "utmSource": "(undefined)",
                "utmMedium": "(undefined)",
                "id": "79110140766-12.04.21-15:32",
                "client": "79110140766",
                "callType": "2",
                "utmTerm": "(undefined)",
                "firstUrl": "(undefined)",
                "calling_number": "78124253938",
                "durationToCheck": 167,
                "phone": "79110140766"
            }
        ],
        "totalPages": 88,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "agentID",
                1323224
            ],
            [
                "callType",
                1323224
            ],
            [
                "calling_number",
                1323224
            ],
            [
                "client",
                1323224
            ],
            [
                "dateEnd",
                1323224
            ],
            [
                "dateStart",
                1323224
            ],
            [
                "duration",
                1323224
            ],
            [
                "durationToCheck",
                1323224
            ],
            [
                "firstUrl",
                1323224
            ],
            [
                "id",
                1323224
            ],
            [
                "phone",
                1323224
            ],
            [
                "source",
                1323224
            ],
            [
                "sourceFromTags",
                1323224
            ],
            [
                "type_of_source",
                1323224
            ],
            [
                "url",
                1323224
            ],
            [
                "utmCampaign",
                1323224
            ],
            [
                "utmContent",
                1323224
            ],
            [
                "utmMedium",
                1323224
            ],
            [
                "utmSource",
                1323224
            ],
            [
                "utmTerm",
                1323224
            ],
            [
                "waitDuration",
                1323224
            ]
        ],
        "writeFields": [],
        "structures": {
            "1323224": {
                "networkID": 3842,
                "sysName": "calls",
                "name": "Звонки",
                "id": 1323224,
                "dateCreated": "2020-11-15T00:49:32Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"sourceFromTags\",\"name\":\"Источник\",\"dataType\":\"string\",\"id\":\"11321610288006354\",\"link\":\"\",\"group\":\"1610287187145\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"agentID\",\"name\":\"Агент\",\"dataType\":\"link\",\"id\":\"12971612393927266\",\"link\":\"Agents\",\"group\":\"1610287187145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utmContent\",\"name\":\"UTM Content\",\"dataType\":\"string\",\"id\":\"20181608334213626\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"durationToCheck\",\"name\":\"durationToCheck\",\"dataType\":\"number\",\"id\":\"20401609762146014\",\"link\":\"\",\"group\":\"1610287203232\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utmTerm\",\"name\":\"UTM Term\",\"dataType\":\"string\",\"id\":\"21281608334214088\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"source\",\"name\":\"Источник\",\"dataType\":\"link\",\"id\":\"27621605401800993\",\"link\":\"source\",\"group\":\"1610287187145\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateStart\",\"name\":\"Начало\",\"dataType\":\"date\",\"id\":\"34511608339497129\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"client\",\"name\":\"Клиент\",\"dataType\":\"link\",\"id\":\"37501605401391515\",\"link\":\"Clients\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"url\",\"name\":\"URL звонка\",\"dataType\":\"string\",\"id\":\"41211608334043680\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utmMedium\",\"name\":\"UTM Medium\",\"dataType\":\"string\",\"id\":\"48121608333941150\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"duration\",\"name\":\"Длительность\",\"dataType\":\"string\",\"id\":\"49831608339519180\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"type_of_source\",\"name\":\"Тип источника\",\"dataType\":\"string\",\"id\":\"50451605401766987\",\"link\":\"\",\"group\":\"1610287187145\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"name\":\"Телефон\",\"dataType\":\"string\",\"id\":\"59641606520600951\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateEnd\",\"name\":\"Конец\",\"dataType\":\"date\",\"id\":\"61431608339503598\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"firstUrl\",\"name\":\"URL входа\",\"dataType\":\"string\",\"id\":\"63681608334047679\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utmSource\",\"name\":\"UTM Источник\",\"dataType\":\"string\",\"id\":\"69781605401814270\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"utmCampaign\",\"name\":\"UTM Campaign\",\"dataType\":\"string\",\"id\":\"71701608334213055\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"calling_number\",\"name\":\"Звонок на телефон\",\"dataType\":\"string\",\"id\":\"88691605401461485\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"waitDuration\",\"name\":\"Ожидание\",\"dataType\":\"string\",\"id\":\"91721608339509589\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"callType\",\"name\":\"Тип звонка\",\"dataType\":\"string\",\"id\":\"97531608334034546\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":1610287187145,\"name\":\"Обработка источника\",\"order\":0},{\"id\":1610287203232,\"name\":\"Технические\",\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-02-03T23:14:05Z",
                "createBy": 4373,
                "changedBy": 4373,
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
                    "indexExists": false,
                    "typeVariable": {},
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "json": false
                },
                "folderId": 33591407
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": []
    }

    let exampleTable = {
        "sl": "getCloudUsers",
        "pageSize": "8",
        "headerField": null,
        "params": {
            "tableView": {
                "columnsOrder": [
                    "id",
                    "apps",
                    "country",
                    "first_name",
                    "last_name",
                    "number_of_apps",
                    "register_date",
                    "source",
                    "gravatar_pic"
                ],
                "columnsParams": {
                    "id": {},
                    "apps": {},
                    "country": {},
                    "first_name": {},
                    "last_name": {},
                    "number_of_apps": {},
                    "register_date": {},
                    "source": {},
                    "gravatar_pic": {}
                }
            },
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
                            "gravatar_pic"
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
            }
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
                "sysName": "country",
                "dataType": "link",
                "name": "country CODE",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": true,
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
                "first_name": "Machine",
                "source": "direct",
                "country": "US",
                "register_date": 1619116870939,
                "id": "machineelph@gmail.com",
                "last_name": "Elph"
            },
            {
                "first_name": "jochen",
                "source": "direct",
                "country": "DE",
                "register_date": 1619114767365,
                "id": "j.hoelscher@hoelscher-kleve.com",
                "last_name": "hoelscher"
            },
            {
                "first_name": "Francesco",
                "source": "direct",
                "country": "IT",
                "register_date": 1619107949434,
                "id": "frangy@writeme.com",
                "last_name": "Persi"
            },
            {
                "first_name": "Panny",
                "source": "www.google.com ",
                "country": "FR",
                "register_date": 1619103210782,
                "id": "trendy.art50@gmail.com",
                "last_name": "Fan"
            },
            {
                "first_name": "Artem",
                "source": "habr.com ru company 3cx blog 265417 ",
                "country": "RU",
                "register_date": 1619100472964,
                "id": "mamonov@autoscop.ru",
                "last_name": "Mamonov"
            },
            {
                "first_name": "Mykhailo",
                "source": "android-app%3A%2F%2Forg.telegram.messenger%2F",
                "country": "UA",
                "register_date": 1619099292063,
                "id": "vkflashtoy@gmail.com",
                "last_name": "Kuts"
            },
            {
                "first_name": "Sven",
                "source": "www.producthunt.com ",
                "country": "BE",
                "gravatar_pic": "https://api.alfa.directual.com/fileUploaded/directual-site/cde5346b-4e1b-46df-bc30-c4976814ed8f.jpg",
                "register_date": 1619098033743,
                "id": "mail@svenpeeters.be",
                "last_name": "Peeters"
            },
            {
                "first_name": "directual",
                "source": "direct",
                "country": "GB",
                "register_date": 1619096222394,
                "id": "directual@ershov.org",
                "last_name": "—"
            }
        ],
        "totalPages": 471,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "apps",
                1282551
            ],
            [
                "country",
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


    let authExample = {
        // isAuth: false,
        isAuth: true,
        role: "admin",
        token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        user: "pavel@directual.com"
    }


    let exampleForm = {
        "sl": "fpsform",
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
            }
        },
        "fileds": [
            {
                "sysName": "date",
                "name": "date",
                "dataType": "date",
                "id": "99881618843953062",
                "link": "",
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
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
                            <FpsCards data={newCardActions} currentBP='tablet' />
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