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
    "sl": "getAll",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "cardListLayout": "grid",
        "cardHeaderComment": "year",
        "deleteField": "",
        "cardBodyText": "description",
        "cardImage": false,
        "cardImageField": "",
        "cardImageType": "none",
        "cardImageSize": 100,
        "objectView": {},
        "data": {
            "readFields": [
                {
                    "fieldSysName": "actor_ids",
                    "fetch": [],
                    "sysName": "actor_ids",
                    "name": "Актеры",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "person"
                },
                {
                    "fieldSysName": "description",
                    "fetch": [],
                    "sysName": "description",
                    "name": "Описание",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "director_id",
                    "fetch": [],
                    "sysName": "director_id",
                    "name": "Режиссер",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "person"
                },
                {
                    "fieldSysName": "genre_ids",
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
                        }
                    ],
                    "sysName": "genre_ids",
                    "name": "Жанры",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "genre"
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
                    "fieldSysName": "name",
                    "fetch": [],
                    "sysName": "name",
                    "name": "Название",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "year",
                    "fetch": [],
                    "sysName": "year",
                    "name": "Год",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "writeFields": [],
            "fields": {
                "actor_ids": {
                    "id": "actor_ids",
                    "content": "Актеры",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "person",
                    "actions": []
                },
                "description": {
                    "id": "description",
                    "content": "Описание",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "director_id": {
                    "id": "director_id",
                    "content": "Режиссер",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "person",
                    "actions": []
                },
                "genre_ids": {
                    "id": "genre_ids",
                    "content": "Жанры",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "genre",
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
                "name": {
                    "id": "name",
                    "content": "Название",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "year": {
                    "id": "year",
                    "content": "Год",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                }
            },
            "fieldParams": {
                "actor_ids": {
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
                "director_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "genre_ids": {
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
                "name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "year": {
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
                        "actor_ids",
                        "description",
                        "director_id",
                        "genre_ids",
                        "id",
                        "name",
                        "year"
                    ]
                }
            },
            "columnOrder": [
                "tab-1"
            ],
            "actions": {}
        },
        "fields": {
            "actor_ids": {
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
            "director_id": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "genre_ids": {
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
            "name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "year": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "showCounter": true,
        "counterField": "year",
        "counterText": "год"
    },
    "tableTitle": "Список фильмов",
    "actions": null,
    "headers": [
        {
            "sysName": "actor_ids",
            "dataType": "arrayLink",
            "name": "Актеры",
            "id": "85541617099995713",
            "link": "person",
            "group": "1617099937454",
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
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "arrayLink": true,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "description",
            "dataType": "string",
            "name": "Описание",
            "id": "62111617099056277",
            "link": null,
            "group": "1617098987109",
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
            "typeVariable": {},
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "director_id",
            "dataType": "link",
            "name": "Режиссер",
            "id": "68721617100033417",
            "link": "person",
            "group": "1617099937454",
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
            "indexExists": false,
            "typeVariable": {},
            "linkOrArrayLinkType": true,
            "arrayLink": false,
            "linkType": true,
            "json": false
        },
        {
            "sysName": "genre_ids",
            "dataType": "arrayLink",
            "name": "Жанры",
            "id": "29091617099948585",
            "link": "genre",
            "group": "1617099937454",
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
            "linkOrArrayLinkType": true,
            "arrayLink": true,
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
            "sysName": "name",
            "dataType": "string",
            "name": "Название",
            "id": "73801617099001685",
            "link": null,
            "group": "1617098987109",
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
            "linkOrArrayLinkType": false,
            "arrayLink": false,
            "linkType": false,
            "json": false
        },
        {
            "sysName": "year",
            "dataType": "number",
            "name": "Год",
            "id": "81181617099065580",
            "link": "",
            "group": "1617098987109",
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
            "name": "Властелин колец: Две башни",
            "director_id": "1",
            "actor_ids": [
                ""
            ],
            "genre_ids": [],
            "id": "9bb43d78-ce56-438e-b47b-0f7bc93945cd"
        },
        {
            "name": "FORD против Ferarri 1",
            "director_id": "11",
            "actor_ids": [
                "12",
                "13",
                "14"
            ],
            "description": "FORD против Ferarri - 2019 года",
            "year": 2000,
            "genre_ids": [
                {
                    "name": "Биография",
                    "id": "15"
                },
                {
                    "name": "Драма",
                    "id": "3"
                },
                {
                    "name": "Боевик",
                    "id": "9"
                }
            ],
            "id": "6a3bf7d3-31c1-4b1b-9bc8-891b77cb06cc"
        },
        {
            "name": "Властелин колец: Братство кольца",
            "director_id": "1",
            "actor_ids": [
                "15",
                "16"
            ],
            "description": "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу. Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает найденное кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
            "year": 2001,
            "genre_ids": [
                {
                    "name": "Фэнтези",
                    "id": "6"
                },
                {
                    "name": "Мелодрама",
                    "id": "7"
                },
                {
                    "name": "Драма",
                    "id": "3"
                }
            ],
            "id": "ea1baf4e-2bd6-44a7-b69e-81b41945d15e"
        },
        {
            "name": "Прислуга",
            "director_id": "17",
            "actor_ids": [
                "4",
                "18"
            ],
            "description": "Американский Юг, на дворе 1960-е годы. Скитер только-только закончила университет и возвращается домой, в сонный городок Джексон, где никогда ничего не происходит. Она мечтает стать писательницей, вырваться в большой мир. Но для приличной девушки с Юга не пристало тешиться столь глупыми иллюзиями, приличной девушке следует выйти замуж и хлопотать по дому. Мудрая Эйбилин на тридцать лет старше Скитер, она прислуживает в домах белых всю свою жизнь, вынянчила семнадцать детей и давно уже ничего не ждет от жизни, ибо сердце ее разбито после смерти единственного сына. Минни - самая лучшая стряпуха во всем Джексоне, а еще она самая дерзкая служанка в городе. И острый язык не раз уже сослужил ей плохую службу...",
            "year": 2011,
            "genre_ids": [
                {
                    "name": "Драма",
                    "id": "3"
                }
            ],
            "id": "8d251268-f00f-4db9-b5a0-fd6d5374c715"
        },
        {
            "name": "Как избежать наказания за убийство",
            "director_id": "3",
            "actor_ids": [
                "4",
                "5",
                "6",
                "7",
                "8"
            ],
            "description": "Профессор Эннализ Китинг – блестящий адвокат. Она преподает у студентов дисциплину под названием: «Как избежать наказания за убийство». Но те даже не подозревают, что в скором времени им придется применить свои знания в этой области в реальной жизни…",
            "year": 2014,
            "genre_ids": [
                {
                    "name": "Триллер",
                    "id": "2"
                },
                {
                    "name": "Драма",
                    "id": "3"
                },
                {
                    "name": "Детектив",
                    "id": "10"
                },
                {
                    "name": "Сериал",
                    "id": "14"
                }
            ],
            "id": "4b50b580-04c3-42e1-bcb3-c4b47cec4793"
        },
        {
            "name": "Райа и последний дракон",
            "director_id": "19",
            "actor_ids": [
                ""
            ],
            "description": "Давным-давно в волшебной стране Кумандре бок о бок с людьми жили драконы — создатели и хранители воды. Мирной жизни пришел конец, когда появились друуны. Порождения тьмы обращали людей и драконов в каменные изваяния, и только магия драконихи Сису смогла прогнать злых созданий и расколдовать людей, но на драконов не подействовала. Кумандра раскололась на государства Сердца, Клыка, Когтя, Хребта и Хвоста, а волшебный драконий камень хранился в стране Сердца, которой правил отец Райи. Он мечтал объединить земли, но из-за человеческой жадности и зависти артефакт раскололся. Правитель каждой страны заполучил по осколку, а друуны снова стали властвовать безраздельно...",
            "year": 2021,
            "genre_ids": [
                {
                    "name": "Комедия",
                    "id": "1"
                },
                {
                    "name": "Приключения",
                    "id": "5"
                },
                {
                    "name": "Фэнтези",
                    "id": "6"
                },
                {
                    "name": "Мультфильм",
                    "id": "12"
                }
            ],
            "id": "af8ca8ea-ea8c-498f-aff4-fd8e69de0d2e"
        },
        {
            "name": "1+1",
            "actor_ids": [
                "20",
                "21"
            ],
            "description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
            "year": 2011,
            "genre_ids": [
                {
                    "name": "Комедия",
                    "id": "1"
                },
                {
                    "name": "Драма",
                    "id": "3"
                },
                {
                    "name": "Биография",
                    "id": "15"
                }
            ],
            "id": "67735a66-e9e2-451f-a9c7-d285c8a20ccc"
        },
        {
            "name": "Душа",
            "director_id": "23",
            "actor_ids": [
                ""
            ],
            "description": "Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у известной клубной певицы и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22, которая уже много веков не может найти свою искру и отправиться на Землю.",
            "year": 2020,
            "genre_ids": [
                {
                    "name": "Комедия",
                    "id": "1"
                },
                {
                    "name": "Приключения",
                    "id": "5"
                },
                {
                    "name": "Фэнтези",
                    "id": "6"
                },
                {
                    "name": "Мелодрама",
                    "id": "7"
                },
                {
                    "name": "Мультфильм",
                    "id": "12"
                }
            ],
            "id": "07e89d91-0f38-4005-a019-17b7331fb27b"
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "actor_ids",
            1371110
        ],
        [
            "description",
            1371110
        ],
        [
            "director_id",
            1371110
        ],
        [
            "genre_ids.id",
            1371111
        ],
        [
            "genre_ids.name",
            1371111
        ],
        [
            "id",
            1371110
        ],
        [
            "name",
            1371110
        ],
        [
            "year",
            1371110
        ]
    ],
    "writeFields": [],
    "structures": {
        "1371110": {
            "networkID": 6154,
            "sysName": "movie",
            "name": "Фильм",
            "id": 1371110,
            "dateCreated": "2021-03-30T10:09:02Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"genre_ids\",\"dataType\":\"arrayLink\",\"name\":\"Жанры\",\"id\":\"29091617099948585\",\"link\":\"genre\",\"group\":\"1617099937454\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"json\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"62111617099056277\",\"link\":null,\"group\":\"1617098987109\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"director_id\",\"dataType\":\"link\",\"name\":\"Режиссер\",\"id\":\"68721617100033417\",\"link\":\"person\",\"group\":\"1617099937454\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"json\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"73801617099001685\",\"link\":null,\"group\":\"1617098987109\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"year\",\"dataType\":\"number\",\"name\":\"Год\",\"id\":\"81181617099065580\",\"link\":\"\",\"group\":\"1617098987109\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"json\":false},{\"sysName\":\"actor_ids\",\"dataType\":\"arrayLink\",\"name\":\"Актеры\",\"id\":\"85541617099995713\",\"link\":\"person\",\"group\":\"1617099937454\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"json\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Основная группа\",\"id\":1617098987109,\"order\":0},{\"name\":\"Ссылки\",\"id\":1617099937454,\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-04-08T15:37:10Z",
            "createBy": 2842,
            "changedBy": 2842,
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            "folderId": 33617887
        },
        "1371111": {
            "networkID": 6154,
            "sysName": "genre",
            "name": "Жанр",
            "id": 1371111,
            "dateCreated": "2021-03-30T10:21:56Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"32091617099719985\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2021-03-30T10:31:27Z",
            "createBy": 2842,
            "changedBy": 2842,
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "json": false
            },
            "folderId": 33617887
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
    "fileds": []
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
              <FpsCards data={cardActions} auth={authExample} currentBP='desktop'/>
              <FpsCards data={newCardActions} currentBP='tablet'/>
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