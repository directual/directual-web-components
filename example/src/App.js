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
        { name: "Table (soon)", route: "/table", icon: "database" ,disabled: true },
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
    "sl": "getBookRecords",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "cardHeaderComment": "name",
        "cardListLayout": "grid",
        "cardImage": true,
        "cardImageField": null,
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
                    "fieldSysName": "book",
                    "fetch": [
                        {
                            "fieldSysName": "@dateChanged",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "@dateCreated",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "@who",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "author",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "cover",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "desc",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "isbn",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "numExist",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "price",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "publishDate",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "publishingHouse",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "book",
                    "name": "图书",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Bookinfo"
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
                    "name": "状态",
                    "dataType": "json",
                    "format": "radioOptions",
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
                                "value": "onshelf",
                                "label": "可借阅"
                            },
                            {
                                "value": "borrowed",
                                "label": "借阅中"
                            },
                            {
                                "value": "deleted",
                                "label": "已删除"
                            }
                        ]
                    },
                    "link": ""
                }
            ],
            "writeFields": [],
            "fields": {
                "@dateChanged": {
                    "id": "@dateChanged",
                    "content": "date changed",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
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
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "book": {
                    "id": "book",
                    "content": "图书",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Bookinfo",
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
                "status": {
                    "id": "status",
                    "content": "状态",
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
                                "value": "onshelf",
                                "label": "可借阅"
                            },
                            {
                                "value": "borrowed",
                                "label": "借阅中"
                            },
                            {
                                "value": "deleted",
                                "label": "已删除"
                            }
                        ]
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "action__31141616851170614": {
                    "content": "New action",
                    "id": "action__31141616851170614",
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
                "book": {
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
                "numExist": {
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
                        "book",
                        "id",
                        "status",
                        "action__31141616851170614"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": [
                {
                    "sysName": "createBorrowInfo",
                    "id": "31141616851170614",
                    "name": "New action",
                    "displayAs": "form",
                    "buttonIcon": "export",
                    "buttonTitle": "借阅",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "42501616851356013",
                            "target": "bookRecord",
                            "type": "objectField",
                            "value": "book"
                        },
                        {
                            "id": "89651616851511270",
                            "target": "user",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "48141616851710248",
                            "target": "renewCount",
                            "type": "const",
                            "value": "0"
                        }
                    ],
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
                                "fieldSysName": "bookRecord",
                                "fetch": [
                                    {
                                        "fieldSysName": "book",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ],
                                "sysName": "bookRecord",
                                "name": "图书",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "BookRecord"
                            },
                            {
                                "fieldSysName": "borrowDate",
                                "fetch": [],
                                "sysName": "borrowDate",
                                "name": "借书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "comment",
                                "fetch": [],
                                "sysName": "comment",
                                "name": "评价",
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "expectedReturnDate",
                                "fetch": [],
                                "sysName": "expectedReturnDate",
                                "name": "预计还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "grade",
                                "fetch": [],
                                "sysName": "grade",
                                "name": "评分",
                                "dataType": "json",
                                "format": "slider",
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "unitName": "5",
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {
                                        "max": 5,
                                        "min": 1,
                                        "step": 1
                                    },
                                    "customOptionType": "textarea"
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
                                "fieldSysName": "renewCount",
                                "fetch": [],
                                "sysName": "renewCount",
                                "name": "续借次数",
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "returnDate",
                                "fetch": [],
                                "sysName": "returnDate",
                                "name": "实际还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user",
                                "fetch": [],
                                "sysName": "user",
                                "name": "借阅人",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
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
                                "fieldSysName": "bookRecord",
                                "fetch": [],
                                "sysName": "bookRecord",
                                "name": "图书",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "BookRecord"
                            },
                            {
                                "fieldSysName": "borrowDate",
                                "fetch": [],
                                "sysName": "borrowDate",
                                "name": "借书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "comment",
                                "fetch": [],
                                "sysName": "comment",
                                "name": "评价",
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "expectedReturnDate",
                                "fetch": [],
                                "sysName": "expectedReturnDate",
                                "name": "预计还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "grade",
                                "fetch": [],
                                "sysName": "grade",
                                "name": "评分",
                                "dataType": "json",
                                "format": "slider",
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "unitName": "5",
                                    "booleanOptions": [
                                        "True",
                                        "False"
                                    ],
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {
                                        "max": 5,
                                        "min": 1,
                                        "step": 1
                                    },
                                    "customOptionType": "textarea"
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
                                "fieldSysName": "renewCount",
                                "fetch": [],
                                "sysName": "renewCount",
                                "name": "续借次数",
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "returnDate",
                                "fetch": [],
                                "sysName": "returnDate",
                                "name": "实际还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user",
                                "fetch": [],
                                "sysName": "user",
                                "name": "借阅人",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "conditionals": [],
                    "formFields": [
                        {
                            "id": "98911616851688310",
                            "field": {
                                "fieldSysName": "borrowDate",
                                "fetch": [],
                                "sysName": "borrowDate",
                                "name": "借书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        },
                        {
                            "id": "18871616851690837",
                            "field": {
                                "fieldSysName": "expectedReturnDate",
                                "fetch": [],
                                "sysName": "expectedReturnDate",
                                "name": "预计还书时间",
                                "dataType": "date",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "callFrom": "main",
                    "callFromField": "book"
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
            "book": {
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
            "numExist": {
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
            }
        },
        "actions": [
            {
                "sysName": "createBorrowInfo",
                "id": "31141616851170614",
                "name": "New action",
                "displayAs": "form",
                "buttonIcon": "export",
                "buttonTitle": "借阅",
                "dropdown": true,
                "closePopup": true,
                "formMapping": [
                    {
                        "id": "42501616851356013",
                        "target": "bookRecord",
                        "type": "objectField",
                        "value": "book"
                    },
                    {
                        "id": "89651616851511270",
                        "target": "user",
                        "type": "user",
                        "value": null
                    },
                    {
                        "id": "48141616851710248",
                        "target": "renewCount",
                        "type": "const",
                        "value": "0"
                    }
                ],
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
                            "fieldSysName": "bookRecord",
                            "fetch": [
                                {
                                    "fieldSysName": "book",
                                    "condition": null,
                                    "fetch": []
                                },
                                {
                                    "fieldSysName": "id",
                                    "condition": null,
                                    "fetch": []
                                }
                            ],
                            "sysName": "bookRecord",
                            "name": "图书",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "BookRecord"
                        },
                        {
                            "fieldSysName": "borrowDate",
                            "fetch": [],
                            "sysName": "borrowDate",
                            "name": "借书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "comment",
                            "fetch": [],
                            "sysName": "comment",
                            "name": "评价",
                            "dataType": "string",
                            "format": "markdown",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "expectedReturnDate",
                            "fetch": [],
                            "sysName": "expectedReturnDate",
                            "name": "预计还书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "grade",
                            "fetch": [],
                            "sysName": "grade",
                            "name": "评分",
                            "dataType": "json",
                            "format": "slider",
                            "formatOptions": {
                                "customOptionLabel": "My option",
                                "keyValue": {
                                    "key": "key",
                                    "value": "value",
                                    "button": "One more"
                                },
                                "unitName": "5",
                                "booleanOptions": [
                                    "True",
                                    "False"
                                ],
                                "customOptionPlaceholder": "Describe your option",
                                "range": {
                                    "max": 5,
                                    "min": 1,
                                    "step": 1
                                },
                                "customOptionType": "textarea"
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
                            "fieldSysName": "renewCount",
                            "fetch": [],
                            "sysName": "renewCount",
                            "name": "续借次数",
                            "dataType": "number",
                            "format": "positiveNum",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "returnDate",
                            "fetch": [],
                            "sysName": "returnDate",
                            "name": "实际还书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "user",
                            "fetch": [],
                            "sysName": "user",
                            "name": "借阅人",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "WebUser"
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
                            "fieldSysName": "bookRecord",
                            "fetch": [],
                            "sysName": "bookRecord",
                            "name": "图书",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "BookRecord"
                        },
                        {
                            "fieldSysName": "borrowDate",
                            "fetch": [],
                            "sysName": "borrowDate",
                            "name": "借书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "comment",
                            "fetch": [],
                            "sysName": "comment",
                            "name": "评价",
                            "dataType": "string",
                            "format": "markdown",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "expectedReturnDate",
                            "fetch": [],
                            "sysName": "expectedReturnDate",
                            "name": "预计还书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "grade",
                            "fetch": [],
                            "sysName": "grade",
                            "name": "评分",
                            "dataType": "json",
                            "format": "slider",
                            "formatOptions": {
                                "customOptionLabel": "My option",
                                "keyValue": {
                                    "key": "key",
                                    "value": "value",
                                    "button": "One more"
                                },
                                "unitName": "5",
                                "booleanOptions": [
                                    "True",
                                    "False"
                                ],
                                "customOptionPlaceholder": "Describe your option",
                                "range": {
                                    "max": 5,
                                    "min": 1,
                                    "step": 1
                                },
                                "customOptionType": "textarea"
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
                            "fieldSysName": "renewCount",
                            "fetch": [],
                            "sysName": "renewCount",
                            "name": "续借次数",
                            "dataType": "number",
                            "format": "positiveNum",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "returnDate",
                            "fetch": [],
                            "sysName": "returnDate",
                            "name": "实际还书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        },
                        {
                            "fieldSysName": "user",
                            "fetch": [],
                            "sysName": "user",
                            "name": "借阅人",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "WebUser"
                        }
                    ]
                },
                "conditionals": [],
                "formFields": [
                    {
                        "id": "98911616851688310",
                        "field": {
                            "fieldSysName": "borrowDate",
                            "fetch": [],
                            "sysName": "borrowDate",
                            "name": "借书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        }
                    },
                    {
                        "id": "18871616851690837",
                        "field": {
                            "fieldSysName": "expectedReturnDate",
                            "fetch": [],
                            "sysName": "expectedReturnDate",
                            "name": "预计还书时间",
                            "dataType": "date",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        }
                    }
                ],
                "callFrom": "main",
                "callFromField": "book"
            }
        ],
        "cardBodyText": "author",
        "showCounter": false,
        "counterField": null,
        "counterText": null
    },
    "tableTitle": "馆藏列表",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "author",
            "name": "作者",
            "dataType": "string",
            "id": "17941616859285621",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "book",
            "name": "图书",
            "dataType": "link",
            "id": "11151616592942142",
            "link": "Bookinfo",
            "group": "0",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 6,
            "linkIndexFieldSysName": [
                "name"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkType": true,
            "typeVariable": {},
            "indexExists": true,
            "linkOrArrayLinkType": true
        },
        {
            "sysName": "cover",
            "name": "封面",
            "dataType": "file",
            "id": "57301616859296763",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "description",
            "name": "描述",
            "dataType": "string",
            "id": "65901616859377628",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "isbn",
            "name": "ISBN",
            "dataType": "string",
            "id": "21711616859334587",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "name",
            "name": "书名",
            "dataType": "string",
            "id": "79001616857753515",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "status",
            "name": "状态",
            "dataType": "json",
            "id": "88101616593122115",
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
            "format": "radioOptions",
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
                        "value": "onshelf",
                        "label": "可借阅"
                    },
                    {
                        "value": "borrowed",
                        "label": "借阅中"
                    },
                    {
                        "value": "deleted",
                        "label": "已删除"
                    }
                ]
            },
            "groupName": null,
            "arrayLink": false,
            "json": true,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        }
    ],
    "data": [
        {
            "name": "Harry Potter",
            "book": {
                "author": "理查德·J. 埃文斯",
                "desc": "德国在一战前曾是欧洲最富裕、最强大的经济体，反犹主义在政治中明显处于边缘地位。然而，起初只是一群极端分子和恶棍的纳粹党人，在数年之中就把德国变成了一党独裁的国家，把一个极有教养的民族引向了道德、物质和文化的废墟与绝境。\n\n本书透过德国的历史、社会与文化，探究纳粹党徒的心理 ，还原纳粹攫取权力的过程，揭示反对者为何未能阻止他们，生动再现了导致第三帝国到来的混乱失序、经济灾难、暴力行径，以及社会的两极分化。\n\n细致解析纳粹掌权的过程，获得今日的镜鉴——纳粹统治德国的时间虽只有十二年，却深刻影响了20世纪的历史进程，在现代世界的思想中留下了深刻的烙印。探究纳粹党徒的心理，理解纳粹的反对者为何未能阻止他们，明白纳粹独裁政权的本质和运作方式，并从中汲取教训，避免历史重演，时至今日依然必要。\n\n从德国特殊的历史中寻找法西斯和民粹主义的根源——纳粹的崛起并不能简单视为德意志民族的独特产物，其复杂的经济社会因素，能使任何国家堕入暴力的深渊。本书详细阐述了历经一战、《凡尔赛条约》、恶性通货膨胀和大萧条的德国，如何一步步走向专制统治；魏玛共和国时期的政治、经济和社会发展，又如何为激进思想的酝酿提供了温床。\n\n史学名家为普通读者撰写的全景式纳粹德国史——基于详实的史料与丰富的细节，埃文斯出色地实现了语言生动、分析严谨与解释有力的完美结合，以中立的视角客观、准确地呈现了纳粹登台前德国社会的方方面面。\n\n《出版人周刊》《科克斯评论》《纽约时报》《华盛顿邮报》《卫报》等媒体齐声推荐。",
                "name": "第三帝国的到来",
                "publishingHouse": "九州出版社",
                "price": 50,
                "numExist": 0,
                "cover": "https://img3.doubanio.com/view/subject/l/public/s33578801.jpg",
                "id": "1",
                "isbn": "9787510886768",
                "publishDate": 1580515200000
            },
            "status": "{\n   \"value\": \"onshelf\"\n}",
            "id": "1",
            "@dateChanged": "",
            "@dateCreated": "",
            "@who": "",
            "author": "",
            "cover": "",
            "description": "",
            "isbn": ""
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "@dateChanged",
            1369232
        ],
        [
            "@dateCreated",
            1369232
        ],
        [
            "@who",
            1369232
        ],
        [
            "author",
            1369232
        ],
        [
            "book.@dateChanged",
            1369231
        ],
        [
            "book.@dateCreated",
            1369231
        ],
        [
            "book.@who",
            1369231
        ],
        [
            "book.author",
            1369231
        ],
        [
            "book.cover",
            1369231
        ],
        [
            "book.desc",
            1369231
        ],
        [
            "book.id",
            1369231
        ],
        [
            "book.isbn",
            1369231
        ],
        [
            "book.name",
            1369231
        ],
        [
            "book.numExist",
            1369231
        ],
        [
            "book.price",
            1369231
        ],
        [
            "book.publishDate",
            1369231
        ],
        [
            "book.publishingHouse",
            1369231
        ],
        [
            "cover",
            1369232
        ],
        [
            "description",
            1369232
        ],
        [
            "id",
            1369232
        ],
        [
            "isbn",
            1369232
        ],
        [
            "name",
            1369232
        ],
        [
            "status",
            1369232
        ]
    ],
    "writeFields": [
        "@dateChanged",
        "@dateCreated",
        "@who",
        "author",
        "book",
        "cover",
        "description",
        "id",
        "isbn",
        "name",
        "status"
    ],
    "structures": {
        "1369231": {
            "networkID": 6068,
            "sysName": "Bookinfo",
            "name": "图书信息",
            "id": 1369231,
            "dateCreated": "2021-03-24T13:35:06Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isbn\",\"dataType\":\"string\",\"name\":\"ISBN\",\"id\":\"16891616592952948\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"creator\",\"dataType\":\"link\",\"name\":\"创建人\",\"id\":\"27261616854119749\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"author\",\"dataType\":\"link\",\"name\":\"作者\",\"id\":\"38891616593040978\",\"link\":\"writer\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"cover\",\"dataType\":\"file\",\"name\":\"封面\",\"id\":\"43951616593055642\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"publishingHouse\",\"dataType\":\"string\",\"name\":\"出版社\",\"id\":\"66891616593082694\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"书名\",\"id\":\"87241616592936446\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"numExist\",\"dataType\":\"number\",\"name\":\"库存数量\",\"id\":\"95341616848803733\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"publishDate\",\"dataType\":\"date\",\"name\":\"出版日期\",\"id\":\"97571616593097014\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"price\",\"dataType\":\"decimal\",\"name\":\"价格\",\"id\":\"97601616593116561\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"desc\",\"dataType\":\"string\",\"name\":\"描述\",\"id\":\"99151616593076431\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-03-27T14:28:12Z",
            "createBy": 6508,
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
                "arrayLink": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false
            },
            "folderId": 33616903
        },
        "1369232": {
            "networkID": 6068,
            "sysName": "BookRecord",
            "name": "书本信息",
            "id": 1369232,
            "dateCreated": "2021-03-24T13:35:34Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"book\",\"dataType\":\"link\",\"name\":\"图书\",\"id\":\"11151616592942142\",\"link\":\"Bookinfo\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"name\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"author\",\"dataType\":\"string\",\"name\":\"作者\",\"id\":\"17941616859285621\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"isbn\",\"dataType\":\"string\",\"name\":\"ISBN\",\"id\":\"21711616859334587\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"cover\",\"dataType\":\"file\",\"name\":\"封面\",\"id\":\"57301616859296763\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"描述\",\"id\":\"65901616859377628\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"书名\",\"id\":\"79001616857753515\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"status\",\"dataType\":\"json\",\"name\":\"状态\",\"id\":\"88101616593122115\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"True\",\"False\"],\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"multipleChoice\":[{\"value\":\"onshelf\",\"label\":\"可借阅\"},{\"value\":\"borrowed\",\"label\":\"借阅中\"},{\"value\":\"deleted\",\"label\":\"已删除\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true}]",
            "jsonGroupSettings": null,
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": null,
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-03-27T15:37:15Z",
            "createBy": 6266,
            "changedBy": 6266,
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
                "arrayLink": false,
                "json": false,
                "linkType": false,
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false
            },
            "folderId": 33616903
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "author",
            "name": "作者",
            "dataType": "string",
            "id": "17941616859285621",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "book",
            "name": "图书",
            "dataType": "link",
            "id": "11151616592942142",
            "link": "Bookinfo",
            "group": "0",
            "tags": null,
            "indexing": true,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 6,
            "linkIndexFieldSysName": [
                "name"
            ],
            "defaultValue": null,
            "constraints": null,
            "synthetic": false,
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkType": true,
            "typeVariable": {},
            "indexExists": true,
            "linkOrArrayLinkType": true
        },
        {
            "sysName": "cover",
            "name": "封面",
            "dataType": "file",
            "id": "57301616859296763",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "description",
            "name": "描述",
            "dataType": "string",
            "id": "65901616859377628",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "isbn",
            "name": "ISBN",
            "dataType": "string",
            "id": "21711616859334587",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "name",
            "name": "书名",
            "dataType": "string",
            "id": "79001616857753515",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "status",
            "name": "状态",
            "dataType": "json",
            "id": "88101616593122115",
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
            "format": "radioOptions",
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
                        "value": "onshelf",
                        "label": "可借阅"
                    },
                    {
                        "value": "borrowed",
                        "label": "借阅中"
                    },
                    {
                        "value": "deleted",
                        "label": "已删除"
                    }
                ]
            },
            "groupName": null,
            "arrayLink": false,
            "json": true,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        }
    ]
}

  let exampleTable =
  {
    "sl": "getBooks_FPS",
    "tableTitle": "List with background images",
    "pageSize": "10",
    "tableFilters": true,
    "tableQuickSearch": true,
    "params": {
      "cardListLayout": "grid", // grid, list
      "isDisplayID": false,
      "deleteField": "year",
      "cardHeaderComment": "title", // check link fields on the card
      "cardBodyText": "author_id", 
      //"cardBodyText": "genre",
      "cardImageField": "image",
      "cardImageType": "cover", // none, top, left, cover, leftCircle
      "cardImageSize": 100, // width for left, height for top, width+height for leftCircle
      "objectView": {} // object view settings
      },
    "headers": [
      {
        "sysName": "author_id",
        "name": "Author",
        "dataType": "link",
        "id": "81201585132056810",
        "link": "Authors",
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
        "linkType": true,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": true,
        "arrayLink": false
      },
      {
        "sysName": "genre",
        "name": "Genre",
        "dataType": "string",
        "id": "89311585132044726",
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
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "title",
        "name": "Title",
        "dataType": "string",
        "id": "24751585132012036",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      },
      {
        "sysName": "year",
        "name": "Year",
        "dataType": "number",
        "id": "81761585132035625",
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
        "formatOptions": null,
        "linkType": false,
        "typeVariable": {},
        "indexExists": false,
        "json": false,
        "linkOrArrayLinkType": false,
        "arrayLink": false
      }
    ],
    "data": 
    [
      {
        "year": 2020,
        "id":'aaa',
        "genre": "Biog\nraphy",
        "title": "Life\nof\nSamuel\nJohnson",
        "image": "https://images.unsplash.com/photo-1598145164978-64796c5e8c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "id": "2",
          "first_name": "James",
          "country": "Scotland",
          "books_ids": [
            {
              "genre": "Biography",
              "id": "1",
              "author_id": {
                "first_name": "James"
              },
              "title": "Life of Samuel Johnson"
            }
          ],
          "last_name": "Boswell",
          "birth_year": 1740
        }
      },
      {
        "year": 1869,
        "genre": "Novel",
        "title": "War and Peace",
        "image": "https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1877,
        "genre": "Novel",
        "title": "Anna Karenina",
        "image": "https://images.unsplash.com/photo-1519789110007-0e751882be76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1863,
        "genre": "Novella",
        "title": "The Cossacks",
        "image": "https://images.unsplash.com/photo-1526810209977-4708ffb9c873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Leo",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1869,
              "id": "2",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "War and Peace"
            },
            {
              "genre": "Novel",
              "year": 1877,
              "id": "3",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "Anna Karenina"
            },
            {
              "genre": "Novella",
              "year": 1863,
              "id": "4",
              "author_id": {
                "first_name": "Leo"
              },
              "title": "The Cossacks"
            }
          ],
          "last_name": "Tolstoy",
          "birth_year": 1828
        }
      },
      {
        "year": 1866,
        "genre": "Novel",
        "title": "Crime and Punishment",
        "image": "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1866,
              "id": "5",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "Crime and Punishment"
            },
            {
              "genre": "Novel",
              "year": 1880,
              "id": "6",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "The Brothers Karamazov"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        }
      },
      {
        "year": 1880,
        "genre": "Novel",
        "title": "The Brothers Karamazov",
        "image": "https://images.unsplash.com/photo-1513737567531-bc431c8e5e85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Fyodor",
          "country": "Russia",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1866,
              "id": "5",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "Crime and Punishment"
            },
            {
              "genre": "Novel",
              "year": 1880,
              "id": "6",
              "author_id": {
                "first_name": "Fyodor"
              },
              "title": "The Brothers Karamazov"
            }
          ],
          "last_name": "Dostoevsky",
          "birth_year": 1821
        }
      },
      {
        "year": 1927,
        "genre": "Novel",
        "title": "The Sun Also Rises",
        "image": "https://images.unsplash.com/photo-1472108482137-8df36ccf0d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1927,
              "id": "7",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Sun Also Rises"
            },
            {
              "genre": "Novel",
              "year": 1951,
              "id": "8",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Old Man and the Sea"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        }
      },
      {
        "year": 1951,
        "genre": "Novel",
        "title": "The Old Man and the Sea",
        "image": "https://images.unsplash.com/photo-1531579766052-06ad0bb58728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "author_id": {
          "first_name": "Ernest",
          "country": "U.S.",
          "books_ids": [
            {
              "genre": "Novel",
              "year": 1927,
              "id": "7",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Sun Also Rises"
            },
            {
              "genre": "Novel",
              "year": 1951,
              "id": "8",
              "author_id": {
                "first_name": "Ernest"
              },
              "title": "The Old Man and the Sea"
            }
          ],
          "last_name": "Hemingway",
          "birth_year": 1899
        }
      },
      {
        "genre": "Science",
        "title": "Mathematical Principles of Natural Philosophy",
        "image": "https://images.unsplash.com/photo-1503293962593-47247718a17a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "year": 1687
      },
      {
        "title": "Gulliver’s Travels",
        "year": 1726,
        "image": "https://images.unsplash.com/photo-1529029411565-e04366ee3cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "genre": "Novel"
      }
    ],
    "totalPages": 3,
    "pageNumber": 1,
    "error": null,
    "writeFields": [
      "author_id","year","id","genre"
    ],
    "fieldScheme": [
      [
        "author_id.birth_year",
        1295819
      ],
      [
        "author_id.books_ids.genre",
        1295858
      ],
      [
        "author_id.books_ids.title",
        1295858
      ],
      [
        "author_id.books_ids.year",
        1295858
      ],
      [
        "author_id.country",
        1295819
      ],
      [
        "author_id.first_name",
        1295819
      ],
      [
        "author_id.last_name",
        1295819
      ],
      [
        "genre",
        1295858
      ],
      [
        "title",
        1295858
      ],
      [
        "year",
        1295858
      ]
    ],
    "structures": {
      "1295819": {
        "networkID": 2621,
        "id": 1295819,
        "dateCreated": "2020-03-25T10:28:14Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Authors",
        "sysName": "Authors",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"birth_year\",\"name\":\"Year of birth\",\"dataType\":\"number\",\"id\":\"23361585132128552\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"last_name\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"54861585132109303\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"first_name\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"56761585132098323\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"books_ids\",\"name\":\"Books\",\"dataType\":\"arrayLink\",\"id\":\"92841585132143841\",\"link\":\"Books\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"96371585132109899\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
        "jsonGroupSettings": null,
        "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": false,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-03-25T10:32:54Z",
        "createBy": 3476,
        "changedBy": 3476,
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
          "formatOptions": null,
          "linkType": false,
          "typeVariable": {},
          "indexExists": false,
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false
        },
        "folderId": null
      },
      "1295858": {
        "networkID": 2621,
        "id": 1295858,
        "dateCreated": "2020-03-25T10:22:06Z",
        "hidden": false,
        "dateHidden": null,
        "name": "Books",
        "sysName": "Books",
        "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"date\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"17781586365675109\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"24751585132012036\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"image\",\"name\":\"image\",\"dataType\":\"file\",\"id\":\"59701594730297293\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"author_id\",\"name\":\"Author\",\"dataType\":\"link\",\"id\":\"81201585132056810\",\"link\":\"Authors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"year\",\"name\":\"Year\",\"dataType\":\"number\",\"id\":\"81761585132035625\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"datedql\",\"name\":\"date\",\"dataType\":\"date\",\"id\":\"83881587302273838\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"boolean\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"85921587303259528\",\"link\":\"\",\"group\":\"1585332461783\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"genre\",\"name\":\"Genre\",\"dataType\":\"string\",\"id\":\"89311585132044726\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}},{\"sysName\":\"approved\",\"name\":\"approved\",\"dataType\":\"boolean\",\"id\":\"98821586526700880\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{}}]",
        "jsonGroupSettings": "[{\"id\":1585332461783,\"name\":\"Details\",\"order\":0}]",
        "jsonViewIdSettings": "[{\"sysName\":\"year\"}]",
        "jsonSettings": null,
        "jsonNativeIndexSettings": null,
        "indexEnabled": true,
        "lastIndexUpdate": 0,
        "indexName": "",
        "dateChanged": "2020-07-14T12:38:30Z",
        "createBy": 3476,
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
          "formatOptions": null,
          "linkType": false,
          "typeVariable": {},
          "indexExists": false,
          "json": false,
          "linkOrArrayLinkType": false,
          "arrayLink": false
        },
        "folderId": null
      }
    }
  }


  let authExample ={
    // isAuth: false,
    isAuth: true,
    role: "admin",
    token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
    user: "pavel@directual.com"
  }


  let exampleForm = {
    "sl": "books",
    "formName": "新增图书信息",
    "formDesc": "",
    "formButton": "确定添加",
    "placeholder": "false",
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
                    "fieldSysName": "author",
                    "fetch": [
                        {
                            "fieldSysName": "@dateChanged",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "@dateCreated",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "@who",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "author",
                    "name": "作者",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "writer"
                },
                {
                    "fieldSysName": "cover",
                    "fetch": [],
                    "sysName": "cover",
                    "name": "封面",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "creator",
                    "fetch": [],
                    "sysName": "creator",
                    "name": "创建人",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "WebUser"
                },
                {
                    "fieldSysName": "desc",
                    "fetch": [],
                    "sysName": "desc",
                    "name": "描述",
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
                    "fieldSysName": "isbn",
                    "fetch": [],
                    "sysName": "isbn",
                    "name": "ISBN",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "name",
                    "fetch": [],
                    "sysName": "name",
                    "name": "书名",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "numExist",
                    "fetch": [],
                    "sysName": "numExist",
                    "name": "库存数量",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "price",
                    "fetch": [],
                    "sysName": "price",
                    "name": "价格",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "publishDate",
                    "fetch": [],
                    "sysName": "publishDate",
                    "name": "出版日期",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "publishingHouse",
                    "fetch": [],
                    "sysName": "publishingHouse",
                    "name": "出版社",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
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
                    "fieldSysName": "author",
                    "fetch": [],
                    "sysName": "author",
                    "name": "作者",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "writer"
                },
                {
                    "fieldSysName": "cover",
                    "fetch": [],
                    "sysName": "cover",
                    "name": "封面",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "creator",
                    "fetch": [],
                    "sysName": "creator",
                    "name": "创建人",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "WebUser"
                },
                {
                    "fieldSysName": "desc",
                    "fetch": [],
                    "sysName": "desc",
                    "name": "描述",
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
                    "fieldSysName": "isbn",
                    "fetch": [],
                    "sysName": "isbn",
                    "name": "ISBN",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "name",
                    "fetch": [],
                    "sysName": "name",
                    "name": "书名",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "numExist",
                    "fetch": [],
                    "sysName": "numExist",
                    "name": "库存数量",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "price",
                    "fetch": [],
                    "sysName": "price",
                    "name": "价格",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "publishDate",
                    "fetch": [],
                    "sysName": "publishDate",
                    "name": "出版日期",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "publishingHouse",
                    "fetch": [],
                    "sysName": "publishingHouse",
                    "name": "出版社",
                    "dataType": "string",
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
                    "write": true,
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
                    "write": true,
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
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "author": {
                    "id": "author",
                    "content": "作者",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "writer"
                },
                "cover": {
                    "id": "cover",
                    "content": "封面",
                    "type": "field",
                    "dataType": "file",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "creator": {
                    "id": "creator",
                    "content": "创建人",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "WebUser"
                },
                "desc": {
                    "id": "desc",
                    "content": "描述",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
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
                "isbn": {
                    "id": "isbn",
                    "content": "ISBN",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": null
                },
                "name": {
                    "id": "name",
                    "content": "书名",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "numExist": {
                    "id": "numExist",
                    "content": "库存数量",
                    "type": "field",
                    "dataType": "number",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "price": {
                    "id": "price",
                    "content": "价格",
                    "type": "field",
                    "dataType": "decimal",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "publishDate": {
                    "id": "publishDate",
                    "content": "出版日期",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                },
                "publishingHouse": {
                    "id": "publishingHouse",
                    "content": "出版社",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": ""
                }
            },
            "fieldParams": {
                "book": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "defaultValueOn": false
                },
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false
                },
                "status": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": {
                        "value": "onshelf"
                    }
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
                "author": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "cover": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "desc": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isbn": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false
                },
                "publishDate": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false
                },
                "publishingHouse": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "creator": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "hidden": false,
                    "required": false
                },
                "numExist": {
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
                        "name",
                        "isbn",
                        "author",
                        "publishingHouse",
                        "cover",
                        "desc",
                        "price",
                        "publishDate",
                        "@dateChanged",
                        "@dateCreated",
                        "@who",
                        "creator",
                        "id",
                        "numExist"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ]
        },
        "fields": {
            "book": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "defaultValueOn": false
            },
            "id": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": false
            },
            "status": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "defaultValueOn": true,
                "defaultValue": {
                    "value": "onshelf"
                }
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
            "author": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "required": true,
                "searchData": [
                    {
                        "key": "1",
                        "value": "1"
                    }
                ]
            },
            "cover": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true
            },
            "desc": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "isbn": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true
            },
            "name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true
            },
            "price": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": false
            },
            "publishDate": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": false
            },
            "publishingHouse": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "required": true
            },
            "creator": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": true,
                "fileImageSize": 200,
                "clickable": false,
                "hidden": false,
                "required": false,
                "searchData": [
                    {
                        "key": "first person",
                        "value": "ddd ffff"
                    },
                    {
                        "key": "jinming.d@foxmail.com",
                        "value": "d jm"
                    },
                    {
                        "key": "lichaoyi@bytedance.com",
                        "value": "Chaoyi Li"
                    },
                    {
                        "key": "test@bytedance.com",
                        "value": "test@bytedance.com"
                    },
                    {
                        "key": "sherryeyrew@163.com",
                        "value": "sherryeyrew@163.com"
                    },
                    {
                        "key": "1@1.com",
                        "value": "1@1.com"
                    },
                    {
                        "key": "2@2.com",
                        "value": "2@2.com"
                    },
                    {
                        "key": "pavel@directual.com",
                        "value": "pavel@directual.com"
                    }
                ]
            },
            "numExist": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "auth": {
            "isPerson": false,
            "userIdField": "creator"
        },
        "useEditing": false
    },
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "author",
            "name": "作者",
            "dataType": "link",
            "id": "38891616593040978",
            "link": "writer",
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
            "arrayLink": false,
            "json": false,
            "linkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": true
        },
        {
            "sysName": "cover",
            "name": "封面",
            "dataType": "file",
            "id": "43951616593055642",
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
            "format": null,
            "formatOptions": null,
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "creator",
            "name": "创建人",
            "dataType": "link",
            "id": "27261616854119749",
            "link": "WebUser",
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
            "arrayLink": false,
            "json": false,
            "linkType": true,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": true
        },
        {
            "sysName": "desc",
            "name": "描述",
            "dataType": "string",
            "id": "99151616593076431",
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
            "format": "markdown",
            "formatOptions": null,
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "isbn",
            "name": "ISBN",
            "dataType": "string",
            "id": "16891616592952948",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "name",
            "name": "书名",
            "dataType": "string",
            "id": "87241616592936446",
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
            "formatOptions": null,
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "numExist",
            "name": "库存数量",
            "dataType": "number",
            "id": "95341616848803733",
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
            "formatOptions": {},
            "groupName": null,
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "price",
            "name": "价格",
            "dataType": "decimal",
            "id": "97601616593116561",
            "link": "",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "publishDate",
            "name": "出版日期",
            "dataType": "date",
            "id": "97571616593097014",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
        },
        {
            "sysName": "publishingHouse",
            "name": "出版社",
            "dataType": "string",
            "id": "66891616593082694",
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
            "arrayLink": false,
            "json": false,
            "linkType": false,
            "typeVariable": {},
            "indexExists": false,
            "linkOrArrayLinkType": false
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
              <FpsForm data={exampleForm} auth={authExample}/>
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
              <FpsCards data={cardActions} auth={authExample}/>
              <FpsCards data={newCardActions} />
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