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
            horizontal={props.horizontal}
            logoutText='Выйти'
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
                { name: "Form", route: "/form",  group: 'Components', icon: "edit", link: <Link to="/form">Form</Link> },
                { name: "Theme management",  group: 'Components', route: "/theme", icon: "styles", link: <Link to="/theme">Theme management</Link> },
                { name: "Cards",  group: 'Components', route: "/cards", icon: "cards", link: <Link to="/cards">Cards view</Link> },
                { name: "Table",  group: 'Components', route: "/table", icon: "database" },
                { name: "Kanban",  group: 'Components', route: "/kanban", icon: "kanban" },
                { name: "Chat (soon)",  group: 'Components', route: "/chat", icon: "bubble", disabled: true },
                { name: "Comments (soon)",  group: 'Components', route: "/comments", icon: "version", disabled: true },
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
        "sl": "getBooks",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "author",
            "deleteField": "",
            "cardBodyText": "year",
            "cardImage": true,
            "cardImageField": "poster",
            "cardImageType": "left",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "author",
                        "fetch": [
                            {
                                "fieldSysName": "books",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "title",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
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
                        "sysName": "author",
                        "name": "Author",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "writers"
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
                        "fieldSysName": "poster",
                        "fetch": [],
                        "sysName": "poster",
                        "name": "Poster",
                        "dataType": "file",
                        "format": "image",
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
                        "link": ""
                    },
                    {
                        "fieldSysName": "upvote_number",
                        "fetch": [],
                        "sysName": "upvote_number",
                        "name": "Upvotes number",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "user_owner",
                        "fetch": [],
                        "sysName": "user_owner",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "year",
                        "fetch": [],
                        "sysName": "year",
                        "name": "Year",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "author",
                        "fetch": [],
                        "sysName": "author",
                        "name": "Author",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "writers"
                    },
                    {
                        "fieldSysName": "delete_reason",
                        "fetch": [],
                        "sysName": "delete_reason",
                        "name": "Delete reason",
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
                        "fieldSysName": "isHidden",
                        "fetch": [],
                        "sysName": "isHidden",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "poster",
                        "fetch": [],
                        "sysName": "poster",
                        "name": "Poster",
                        "dataType": "file",
                        "format": "image",
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
                        "link": ""
                    },
                    {
                        "fieldSysName": "user_owner",
                        "fetch": [],
                        "sysName": "user_owner",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "year",
                        "fetch": [],
                        "sysName": "year",
                        "name": "Year",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "author": {
                        "id": "author",
                        "content": "Author",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "writers",
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
                    "poster": {
                        "id": "poster",
                        "content": "Poster",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
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
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "upvote_number": {
                        "id": "upvote_number",
                        "content": "Upvotes number",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "user_owner": {
                        "id": "user_owner",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "year": {
                        "id": "year",
                        "content": "Year",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "delete_reason": {
                        "id": "delete_reason",
                        "content": "Delete reason",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": null,
                        "actions": []
                    },
                    "isHidden": {
                        "id": "isHidden",
                        "content": "",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "",
                        "actions": []
                    },
                    "action__46801637486998874": {
                        "content": "Upvote",
                        "id": "action__46801637486998874",
                        "type": "action",
                        "actions": []
                    },
                    "action__10481637487615613": {
                        "content": "Delete",
                        "id": "action__10481637487615613",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "author": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
                        "quickSearchSL": "getAuthors",
                        "configureLinkedCard": {
                            "fields": {
                                "books": {
                                    "id": "books",
                                    "content": "Books",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
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
                                "name": {
                                    "id": "name",
                                    "content": "Name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "books": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "name",
                                "books",
                                "id"
                            ]
                        },
                        "subHeader": "Author: "
                    },
                    "poster": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true
                    },
                    "title": {
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
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "isHidden": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "user_owner": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "upvotes_number": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "upvote_number": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "delete_reason": {
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
                            "author",
                            "poster",
                            "title",
                            "year",
                            "id",
                            "isHidden",
                            "user_owner",
                            "delete_reason",
                            "upvote_number",
                            "action__46801637486998874",
                            "action__10481637487615613"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "newUpvote",
                        "id": "46801637486998874",
                        "name": "Upvote",
                        "displayAs": "button",
                        "buttonIcon": "arrowUp",
                        "buttonType": "accent",
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
                                    "fieldSysName": "book_id",
                                    "fetch": [],
                                    "sysName": "book_id",
                                    "name": "Book",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "books"
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "User",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "57541637487033526",
                                "target": "book_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "67011637487049519",
                                "target": "user_id",
                                "type": "user",
                                "value": null
                            }
                        ],
                        "dropdown": true,
                        "closePopup": true,
                        "showMessage": false
                    },
                    {
                        "sysName": "",
                        "id": "10481637487615613",
                        "name": "Delete",
                        "displayAs": "form",
                        "closePopup": true,
                        "showMessage": false,
                        "formFields": [
                            {
                                "id": "87071637487687834",
                                "field": {
                                    "fieldSysName": "delete_reason",
                                    "fetch": [],
                                    "sysName": "delete_reason",
                                    "name": "Delete reason",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "63791637487694557",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "88751637487706528",
                                "target": "isHidden",
                                "type": "const",
                                "value": "true"
                            }
                        ],
                        "conditionals": [
                            {
                                "id": "35431637487958550",
                                "target": "field",
                                "value": null
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "author": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
                    "quickSearchSL": "getAuthors",
                    "configureLinkedCard": {
                        "fields": {
                            "books": {
                                "id": "books",
                                "content": "Books",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
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
                            "name": {
                                "id": "name",
                                "content": "Name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "books": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "name",
                            "books",
                            "id"
                        ]
                    },
                    "subHeader": "Author: ",
                    "searchData": [
                        {
                            "key": "b5664ae5-a71e-4cb0-8df7-b1d8b69ef239",
                            "value": "Ernest Hemingway"
                        },
                        {
                            "key": "7ce559c2-699f-41d3-b659-50488d68da92",
                            "value": "Arkady and Boris Strugatsky"
                        },
                        {
                            "key": "10a5d589-84f9-4c23-b81e-b5b044bc47fe",
                            "value": "Fyodor Dostoevsky"
                        },
                        {
                            "key": "253f33f9-bdc3-458a-833a-e3ea948a8691",
                            "value": "John Fowles"
                        }
                    ]
                },
                "poster": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true
                },
                "title": {
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
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isHidden": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user_owner": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "upvotes_number": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "upvote_number": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "delete_reason": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "showCounter": true,
            "counterField": "upvote_number",
            "counterText": " upvotes",
            "actions": [
                {
                    "sysName": "newUpvote",
                    "id": "46801637486998874",
                    "name": "Upvote",
                    "displayAs": "button",
                    "buttonIcon": "arrowUp",
                    "buttonType": "accent",
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
                                "fieldSysName": "book_id",
                                "fetch": [],
                                "sysName": "book_id",
                                "name": "Book",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "books"
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "User",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "57541637487033526",
                            "target": "book_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "67011637487049519",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        }
                    ],
                    "dropdown": true,
                    "closePopup": true,
                    "showMessage": false
                },
                {
                    "sysName": "",
                    "id": "10481637487615613",
                    "name": "Delete",
                    "displayAs": "form",
                    "closePopup": true,
                    "showMessage": false,
                    "formFields": [
                        {
                            "id": "87071637487687834",
                            "field": {
                                "fieldSysName": "delete_reason",
                                "fetch": [],
                                "sysName": "delete_reason",
                                "name": "Delete reason",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "63791637487694557",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "88751637487706528",
                            "target": "isHidden",
                            "type": "const",
                            "value": "true"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "35431637487958550",
                            "target": "id",
                            "value": "user_owner",
                            "field": "user_owner",
                            "type": "objectField"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "All my books",
        "actions": null,
        "headers": [
            {
                "sysName": "author",
                "name": "Author",
                "dataType": "link",
                "id": "11501635749806057",
                "link": "writers",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [
                    "country"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": true,
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
                "sysName": "poster",
                "name": "Poster",
                "dataType": "file",
                "id": "36271635749824406",
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
                "format": "image",
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
                "name": "Title",
                "dataType": "string",
                "id": "31231635749786486",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "upvote_number",
                "name": "Upvotes number",
                "dataType": "number",
                "id": "37191637486819294",
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
                "format": "positiveNum",
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
                "sysName": "user_owner",
                "name": "",
                "dataType": "link",
                "id": "44781635879020411",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "year",
                "name": "Year",
                "dataType": "number",
                "id": "25951635749794490",
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
                "author": {
                    "books": [
                        {
                            "title": "The Old Man and The Sea",
                            "id": "a4555493-1af2-4957-b73c-45a418962863"
                        },
                        {
                            "title": "The Sun Also Rises",
                            "id": "8d073226-d593-44f9-9361-2b87144a8bca"
                        }
                    ],
                    "name": "Ernest Hemingway",
                    "id": "b5664ae5-a71e-4cb0-8df7-b1d8b69ef239"
                },
                "year": 1923,
                "upvote_number": 1,
                "poster": "https://api.alfa.directual.com/fileUploaded/bootcamp-demo/a0f089e4-14f6-4b84-80be-17a2b455bf5b.jpeg",
                "id": "8d073226-d593-44f9-9361-2b87144a8bca",
                "user_owner": "user",
                "title": "The Sun Also Rises",
                "delete_reason": "",
                "isHidden": ""
            },
            {
                "author": {
                    "books": [
                        {
                            "title": "The Old Man and The Sea",
                            "id": "a4555493-1af2-4957-b73c-45a418962863"
                        },
                        {
                            "title": "The Sun Also Rises",
                            "id": "8d073226-d593-44f9-9361-2b87144a8bca"
                        }
                    ],
                    "name": "Ernest Hemingway",
                    "id": "b5664ae5-a71e-4cb0-8df7-b1d8b69ef239"
                },
                "year": 1951,
                "poster": "https://api.alfa.directual.com/fileUploaded/bootcamp-demo/c5044d7d-6178-4333-8fd3-b1951f96c092.jpeg",
                "id": "a4555493-1af2-4957-b73c-45a418962863",
                "user_owner": "user",
                "title": "The Old Man and The Sea",
                "delete_reason": "",
                "isHidden": ""
            },
            {
                "author": {
                    "books": [
                        {
                            "title": "Roadside Picnic",
                            "id": "ed971f8a-1082-4b06-b6bd-f6fa2893b9be"
                        },
                        {
                            "title": "The Doomed City",
                            "id": "fedaed1e-d205-44c3-927b-4bda53af961f"
                        }
                    ],
                    "name": "Arkady and Boris Strugatsky",
                    "id": "7ce559c2-699f-41d3-b659-50488d68da92"
                },
                "year": 1972,
                "poster": "https://api.alfa.directual.com/fileUploaded/bootcamp-demo/fb24d301-df99-4da1-9ba0-5f10f8c60022.jpeg",
                "id": "fedaed1e-d205-44c3-927b-4bda53af961f",
                "title": "The Doomed City",
                "delete_reason": "",
                "isHidden": "",
                "user_owner": ""
            },
            {
                "author": {
                    "books": [
                        {
                            "title": "Roadside Picnic",
                            "id": "ed971f8a-1082-4b06-b6bd-f6fa2893b9be"
                        },
                        {
                            "title": "The Doomed City",
                            "id": "fedaed1e-d205-44c3-927b-4bda53af961f"
                        }
                    ],
                    "name": "Arkady and Boris Strugatsky",
                    "id": "7ce559c2-699f-41d3-b659-50488d68da92"
                },
                "year": 1991,
                "poster": "https://api.alfa.directual.com/fileUploaded/bootcamp-demo/df47ddc2-cca4-44de-ad1c-0174fd411b19.jpeg",
                "id": "ed971f8a-1082-4b06-b6bd-f6fa2893b9be",
                "title": "Roadside Picnic",
                "delete_reason": "",
                "isHidden": "",
                "user_owner": ""
            },
            {
                "author": {
                    "books": [],
                    "name": "John Fowles",
                    "id": "253f33f9-bdc3-458a-833a-e3ea948a8691"
                },
                "year": 1965,
                "poster": "https://api.directual.com/fileUploaded/bootcamp-demo/web/5fc74ce4-769b-44df-b8b7-d86f6e0a0a26.jpeg",
                "id": "986948f3-402a-4f9e-8b3a-3dee6e67eca1",
                "title": "The Magus",
                "delete_reason": "",
                "isHidden": "",
                "user_owner": ""
            },
            {
                "author": {
                    "books": [],
                    "name": "John Fowles",
                    "id": "253f33f9-bdc3-458a-833a-e3ea948a8691"
                },
                "year": 1984,
                "poster": "https://api.directual.com/fileUploaded/bootcamp-demo/web/24ed0151-04d8-4458-ab76-3e07725da0b9.jpeg",
                "id": "53e11c1d-1f95-4c7b-bf4b-fd2f84682e2d",
                "user_owner": "pavel@directual.com",
                "title": "The French Lieutenant's Woman (UK)",
                "delete_reason": "",
                "isHidden": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "author.books.title",
                99042268
            ],
            [
                "author.id",
                99042269
            ],
            [
                "author.name",
                99042269
            ],
            [
                "id",
                99042268
            ],
            [
                "poster",
                99042268
            ],
            [
                "title",
                99042268
            ],
            [
                "upvote_number",
                99042268
            ],
            [
                "user_owner",
                99042268
            ],
            [
                "year",
                99042268
            ]
        ],
        "writeFields": [
            "author",
            "delete_reason",
            "id",
            "isHidden",
            "poster",
            "title",
            "user_owner",
            "year"
        ],
        "structures": {
            "99042268": {
                "networkID": 10389,
                "sysName": "books",
                "name": "Books",
                "id": 99042268,
                "dateCreated": "2021-11-01T06:56:07Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"31231635749786486\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"year\",\"name\":\"Year\",\"dataType\":\"number\",\"id\":\"25951635749794490\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"author\",\"name\":\"Author\",\"dataType\":\"link\",\"id\":\"11501635749806057\",\"link\":\"writers\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[\"country\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"poster\",\"name\":\"Poster\",\"dataType\":\"file\",\"id\":\"36271635749824406\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"isHidden\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"99541635849030655\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"user_owner\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"44781635879020411\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"upvote_number\",\"name\":\"Upvotes number\",\"dataType\":\"number\",\"id\":\"37191637486819294\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"upvotes_ids\",\"name\":\"Upvotes\",\"dataType\":\"arrayLink\",\"id\":\"91701637486882242\",\"link\":\"upvotes\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"delete_reason\",\"name\":\"Delete reason\",\"dataType\":\"string\",\"id\":\"26531637487639212\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": "[]",
                "jsonViewIdSettings": "[{\"sysName\":\"title\"},{\"sysName\":\"year\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-21T09:40:50Z",
                "createBy": 1,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": 33668957
            },
            "99042269": {
                "networkID": 10389,
                "sysName": "writers",
                "name": "Writers",
                "id": 99042269,
                "dateCreated": "2021-11-01T06:56:15Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"name\":\"Name\",\"dataType\":\"string\",\"id\":\"10631635749855801\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"books\",\"name\":\"Books\",\"dataType\":\"arrayLink\",\"id\":\"32901635749861943\",\"link\":\"books\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"string\",\"id\":\"47431636052063449\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-04T18:54:32Z",
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": 33668957
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "author",
                "name": "Author",
                "dataType": "link",
                "id": "11501635749806057",
                "link": "writers",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 3,
                "linkIndexFieldSysName": [
                    "country"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": true,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "delete_reason",
                "name": "Delete reason",
                "dataType": "string",
                "id": "26531637487639212",
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
                "sysName": "isHidden",
                "name": "",
                "dataType": "boolean",
                "id": "99541635849030655",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "poster",
                "name": "Poster",
                "dataType": "file",
                "id": "36271635749824406",
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
                "format": "image",
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
                "name": "Title",
                "dataType": "string",
                "id": "31231635749786486",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "user_owner",
                "name": "",
                "dataType": "link",
                "id": "44781635879020411",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "year",
                "name": "Year",
                "dataType": "number",
                "id": "25951635749794490",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "quickSearch": "true"
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
        "sl": "addGoods",
        "formName": "Новая модель товара",
        "formDesc": "",
        "formButton": "Добавить",
        "placeholder": "",
        "maxWidth": "600",
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
                        "fieldSysName": "categoryType",
                        "fetch": [],
                        "sysName": "categoryType",
                        "name": "Подтип категории",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "categoryType"
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
                        "fieldSysName": "gender",
                        "fetch": [],
                        "sysName": "gender",
                        "name": "Пол",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "gender"
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
                        "name": "Бьюти",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryBeauty"
                    },
                    {
                        "fieldSysName": "subcategoryInterior",
                        "fetch": [],
                        "sysName": "subcategoryInterior",
                        "name": "Интерьер",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryInterior"
                    },
                    {
                        "fieldSysName": "subcategoryKids",
                        "fetch": [],
                        "sysName": "subcategoryKids",
                        "name": "Детское",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryKids"
                    },
                    {
                        "fieldSysName": "subcategoryMen",
                        "fetch": [],
                        "sysName": "subcategoryMen",
                        "name": "Мужское",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryMen"
                    },
                    {
                        "fieldSysName": "subcategoryWomen",
                        "fetch": [],
                        "sysName": "subcategoryWomen",
                        "name": "Женское",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "subcategoryWomen"
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
                    "brand": {
                        "id": "brand",
                        "content": "Бренд",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "Brands"
                    },
                    "category": {
                        "id": "category",
                        "content": "Категория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "category"
                    },
                    "categoryType": {
                        "id": "categoryType",
                        "content": "Подтип категории",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "categoryType"
                    },
                    "color": {
                        "id": "color",
                        "content": "Цвет",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "colors"
                    },
                    "description": {
                        "id": "description",
                        "content": "Описание",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "gender": {
                        "id": "gender",
                        "content": "Пол",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "gender"
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
                        "link": ""
                    },
                    "name": {
                        "id": "name",
                        "content": "Название",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "photo": {
                        "id": "photo",
                        "content": "Фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "price": {
                        "id": "price",
                        "content": "Цена, ₽",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "subcategoryBeauty": {
                        "id": "subcategoryBeauty",
                        "content": "Бьюти",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "subcategoryBeauty"
                    },
                    "subcategoryInterior": {
                        "id": "subcategoryInterior",
                        "content": "Интерьер",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "subcategoryInterior"
                    },
                    "subcategoryKids": {
                        "id": "subcategoryKids",
                        "content": "Детское",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "subcategoryKids"
                    },
                    "subcategoryMen": {
                        "id": "subcategoryMen",
                        "content": "Мужское",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "subcategoryMen"
                    },
                    "subcategoryWomen": {
                        "id": "subcategoryWomen",
                        "content": "Женское",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "subcategoryWomen"
                    },
                    "vendorCode": {
                        "id": "vendorCode",
                        "content": "Артикул",
                        "type": "field",
                        "dataType": "string",
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
                    "brand": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "addGoodChooseBrand",
                        "required": true
                    },
                    "category": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "color": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "isNew": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "required": false,
                        "defaultValue": "true"
                    },
                    "name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false,
                        "fileUpload": true
                    },
                    "price": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "descriptionFlag": true,
                        "description": "Базовая цена, без скидки"
                    },
                    "subcategoryBeauty": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryInterior": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryKids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryMen": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryWomen": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "categoryType": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "vendorCode": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "gender": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "id",
                            "brand",
                            "vendorCode",
                            "name",
                            "description",
                            "color",
                            "isNew",
                            "photo",
                            "price",
                            "category",
                            "gender"
                        ]
                    },
                    "49311629039407639": {
                        "id": "49311629039407639",
                        "title": "New section",
                        "fieldIds": [
                            "subcategoryMen"
                        ],
                        "display": false,
                        "cond": [
                            {
                                "id": "35971629039562232",
                                "field": "category",
                                "value": "men"
                            }
                        ]
                    },
                    "52911629039421742": {
                        "id": "52911629039421742",
                        "title": "New section",
                        "fieldIds": [
                            "subcategoryWomen"
                        ],
                        "display": false,
                        "cond": [
                            {
                                "id": "87391629039576971",
                                "field": "category",
                                "value": "women"
                            }
                        ]
                    },
                    "24781629039428006": {
                        "id": "24781629039428006",
                        "title": "New section",
                        "fieldIds": [
                            "subcategoryKids"
                        ],
                        "cond": [
                            {
                                "id": "87061629041334154",
                                "field": "category",
                                "value": "kids"
                            }
                        ]
                    },
                    "92061629039428511": {
                        "id": "92061629039428511",
                        "title": "New section",
                        "fieldIds": [
                            "subcategoryBeauty"
                        ],
                        "cond": [
                            {
                                "id": "42351629042060046",
                                "field": "category",
                                "value": "beauty"
                            }
                        ]
                    },
                    "96561629039429008": {
                        "id": "96561629039429008",
                        "title": "New section",
                        "fieldIds": [
                            "subcategoryInterior"
                        ],
                        "cond": [
                            {
                                "id": "65591629042072515",
                                "field": "category",
                                "value": "interior"
                            }
                        ]
                    },
                    "16321629039867927": {
                        "id": "16321629039867927",
                        "title": "New section",
                        "fieldIds": [
                            "categoryType"
                        ],
                        "cond": [
                            {
                                "id": "28951637787811501",
                                "field": "category",
                                "value": "null"
                            },
                            {
                                "id": "41911637787817828",
                                "field": "category",
                                "value": "men"
                            }
                        ],
                        "condOperator": "or"
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "16321629039867927",
                    "49311629039407639",
                    "52911629039421742",
                    "24781629039428006",
                    "92061629039428511",
                    "96561629039429008"
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
                "brand": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "addGoodChooseBrand",
                    "required": true,
                    "searchData": [
                        {
                            "key": "cf877e5c-eb03-4660-8e84-db1926acaf77",
                            "value": "UNIQLO"
                        }
                    ]
                },
                "category": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "searchData": [
                        {
                            "key": "men",
                            "value": "Мужское"
                        },
                        {
                            "key": "women",
                            "value": "Женское"
                        },
                        {
                            "key": "kids",
                            "value": "Дети"
                        },
                        {
                            "key": "beauty",
                            "value": "Бьюти"
                        },
                        {
                            "key": "interior",
                            "value": "Интерьер"
                        }
                    ]
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
                        }
                    ]
                },
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "isNew": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "required": false,
                    "defaultValue": "true"
                },
                "name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "photo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "fileUpload": true
                },
                "price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "descriptionFlag": true,
                    "description": "Базовая цена, без скидки"
                },
                "subcategoryBeauty": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "care",
                            "value": "Уход"
                        },
                        {
                            "key": "beautyProducts",
                            "value": "Косметика"
                        },
                        {
                            "key": "faceMassageTools",
                            "value": "Массажеры"
                        },
                        {
                            "key": "hygiene",
                            "value": "Гигиена"
                        }
                    ]
                },
                "subcategoryInterior": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "furniture",
                            "value": "мебель"
                        },
                        {
                            "key": "lifestyle",
                            "value": "аксессуары для дома"
                        },
                        {
                            "key": "bedclothes",
                            "value": "постельное белье"
                        },
                        {
                            "key": "candles",
                            "value": "свечи и ароматы для дома "
                        },
                        {
                            "key": "tableware",
                            "value": "посуда"
                        },
                        {
                            "key": "stationery",
                            "value": "канцелярия "
                        }
                    ]
                },
                "subcategoryKids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "kidsClothing",
                            "value": "Вся одежда"
                        },
                        {
                            "key": "kidsSuits",
                            "value": "Костюмы"
                        },
                        {
                            "key": "kidsCoats",
                            "value": "Пальто "
                        },
                        {
                            "key": "kidsDresses",
                            "value": "Платья"
                        },
                        {
                            "key": "kidsJackets",
                            "value": "Куртки"
                        },
                        {
                            "key": "kidsShorts",
                            "value": "Шорты "
                        },
                        {
                            "key": "kidsSkirts",
                            "value": "Юбки"
                        },
                        {
                            "key": "kidsPajamas",
                            "value": "Пижамы"
                        },
                        {
                            "key": "kidsSwimwear",
                            "value": "Пляжная одежда"
                        },
                        {
                            "key": "kidsTshirts",
                            "value": "Футболки и топы"
                        },
                        {
                            "key": "kidsTracksuits",
                            "value": "Спортивные костюмы"
                        },
                        {
                            "key": "kidsTrousers",
                            "value": "Брюки "
                        },
                        {
                            "key": "kidsAccessories",
                            "value": "Аксессуары "
                        },
                        {
                            "key": "kidsShoes ",
                            "value": "Обувь"
                        },
                        {
                            "key": "babyClothing",
                            "value": "Все для новорожденных"
                        },
                        {
                            "key": "babyGifts",
                            "value": "Подарки"
                        }
                    ]
                },
                "subcategoryMen": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "outerwear",
                            "value": "Верхняя одежда"
                        },
                        {
                            "key": "jeans",
                            "value": "Джинсы "
                        },
                        {
                            "key": "trousers",
                            "value": "Брюки"
                        },
                        {
                            "key": "jumpsuits",
                            "value": "Комбинезоны "
                        },
                        {
                            "key": "sweaters",
                            "value": "Свитеры и джемперы"
                        },
                        {
                            "key": "hoodies",
                            "value": "Толстовки и худи"
                        },
                        {
                            "key": "tshirts",
                            "value": "Футболки и поло"
                        },
                        {
                            "key": "shorts",
                            "value": "Шорты"
                        },
                        {
                            "key": "shirts",
                            "value": "Рубашки"
                        },
                        {
                            "key": "jackets",
                            "value": "Пиджаки "
                        },
                        {
                            "key": "suits",
                            "value": "Костюмы"
                        },
                        {
                            "key": "swimwear",
                            "value": "Пляжная одежда"
                        },
                        {
                            "key": "underwear",
                            "value": "Белье и носки"
                        },
                        {
                            "key": "sneakers",
                            "value": "Кроссовки и кеды"
                        },
                        {
                            "key": "sandals",
                            "value": "Сандалии"
                        },
                        {
                            "key": "boots",
                            "value": "Ботинки "
                        },
                        {
                            "key": "hats",
                            "value": "Головные уборы "
                        },
                        {
                            "key": "ties",
                            "value": "Галстуки"
                        },
                        {
                            "key": "glasses",
                            "value": "Очки "
                        },
                        {
                            "key": "gloves",
                            "value": "Перчатки"
                        },
                        {
                            "key": "belts",
                            "value": "Ремни "
                        },
                        {
                            "key": "cases",
                            "value": "Чехлы"
                        },
                        {
                            "key": "keyrings",
                            "value": "Брелоки "
                        },
                        {
                            "key": "other",
                            "value": "Другое"
                        },
                        {
                            "key": "backpacks",
                            "value": "Рюкзаки "
                        },
                        {
                            "key": "bags",
                            "value": "Сумки и клатчи "
                        },
                        {
                            "key": "wallets",
                            "value": "Кошельки"
                        },
                        {
                            "key": "briefcases",
                            "value": "Портфели и папки"
                        },
                        {
                            "key": "rings",
                            "value": "Кольца"
                        },
                        {
                            "key": "earrings",
                            "value": "Серьги "
                        },
                        {
                            "key": "necklaces",
                            "value": "Колье и подвески"
                        },
                        {
                            "key": "bracelets",
                            "value": "Браслеты "
                        },
                        {
                            "key": "cufflinks",
                            "value": "Запонки"
                        },
                        {
                            "key": "watches",
                            "value": "Часы"
                        }
                    ]
                },
                "subcategoryWomen": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "outerwear",
                            "value": "Верхняя одежда"
                        },
                        {
                            "key": "dresses",
                            "value": "Платья "
                        },
                        {
                            "key": "jeans",
                            "value": "Джинсы "
                        },
                        {
                            "key": "trousers",
                            "value": "Брюки"
                        },
                        {
                            "key": "jumpsuits",
                            "value": "Комбинезоны "
                        },
                        {
                            "key": "sweaters",
                            "value": "Свитеры и джемперы"
                        },
                        {
                            "key": "hoodies",
                            "value": "Толстовки и худи"
                        },
                        {
                            "key": "tshirts",
                            "value": "Футболки и поло"
                        },
                        {
                            "key": "shorts",
                            "value": "Шорты"
                        },
                        {
                            "key": "shirts",
                            "value": "Рубашки"
                        },
                        {
                            "key": "tops",
                            "value": "Топы"
                        },
                        {
                            "key": "jackets",
                            "value": "Пиджаки "
                        },
                        {
                            "key": "suits",
                            "value": "Костюмы"
                        },
                        {
                            "key": "skirts",
                            "value": "Юбки"
                        },
                        {
                            "key": "swimwear",
                            "value": "Купальники"
                        },
                        {
                            "key": "underwear",
                            "value": "Белье и носки"
                        },
                        {
                            "key": "sneakers",
                            "value": "Кроссовки и кеды"
                        },
                        {
                            "key": "sandals",
                            "value": "Сандалии и босоножки"
                        },
                        {
                            "key": "brogues",
                            "value": "Ботинки "
                        },
                        {
                            "key": "boots",
                            "value": "Сапоги и ботильоны"
                        },
                        {
                            "key": "pumps",
                            "value": "Туфли "
                        },
                        {
                            "key": "hats",
                            "value": "Головные уборы "
                        },
                        {
                            "key": "glasses",
                            "value": "Очки "
                        },
                        {
                            "key": "gloves",
                            "value": "Перчатки"
                        },
                        {
                            "key": "belts",
                            "value": "Ремни "
                        },
                        {
                            "key": "covers",
                            "value": "Чехлы"
                        },
                        {
                            "key": "keyrings",
                            "value": "Брелоки "
                        },
                        {
                            "key": "other",
                            "value": "Другое"
                        },
                        {
                            "key": "backpacks",
                            "value": "Рюкзаки "
                        },
                        {
                            "key": "bags",
                            "value": "Сумки и клатчи "
                        },
                        {
                            "key": "wallets",
                            "value": "Кошельки"
                        },
                        {
                            "key": "briefcases",
                            "value": "Портфели и папки"
                        },
                        {
                            "key": "rings",
                            "value": "Кольца"
                        },
                        {
                            "key": "earrings",
                            "value": "Серьги "
                        },
                        {
                            "key": "necklaces",
                            "value": "Колье и подвески"
                        },
                        {
                            "key": "bracelets",
                            "value": "Браслеты "
                        },
                        {
                            "key": "hairAccessories",
                            "value": "Аксессуары для волос"
                        },
                        {
                            "key": "watches",
                            "value": "Часы"
                        }
                    ]
                },
                "categoryType": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "footwear",
                            "value": "Обувь"
                        },
                        {
                            "key": "accessories",
                            "value": "Аксессуары"
                        },
                        {
                            "key": "bags",
                            "value": "Сумки"
                        },
                        {
                            "key": "underwear",
                            "value": "Белье"
                        },
                        {
                            "key": "jewelry",
                            "value": "Украшения"
                        },
                        {
                            "key": "clothes",
                            "value": "Одежда"
                        }
                    ]
                },
                "vendorCode": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "gender": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "searchData": [
                        {
                            "key": "men",
                            "value": "Мужское"
                        },
                        {
                            "key": "women",
                            "value": "Женское"
                        }
                    ]
                }
            }
        },
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": true,
                "linkOrArrayLinkType": true,
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "array": false
            },
            {
                "sysName": "categoryType",
                "dataType": "link",
                "name": "Подтип категории",
                "id": "32291628759887053",
                "link": "categoryType",
                "group": "1624486873153",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "array": false
            },
            {
                "sysName": "gender",
                "dataType": "link",
                "name": "Пол",
                "id": "66261634401502556",
                "link": "gender",
                "group": "1624486873153",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "array": false
            },
            {
                "sysName": "subcategoryBeauty",
                "dataType": "link",
                "name": "Бьюти",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "array": false
            },
            {
                "sysName": "subcategoryInterior",
                "dataType": "link",
                "name": "Интерьер",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "array": false
            },
            {
                "sysName": "subcategoryKids",
                "dataType": "link",
                "name": "Детское",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "array": false
            },
            {
                "sysName": "subcategoryMen",
                "dataType": "link",
                "name": "Мужское",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "array": false
            },
            {
                "sysName": "subcategoryWomen",
                "dataType": "link",
                "name": "Женское",
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
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": true,
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
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "arrayLink": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
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
            horizontal={currentTheme.desktopMenu=='top'}
        >
            <Router>
                <MainMenuWrapper themeName={currentTheme} horizontal={currentTheme.desktopMenu=='top'}/>
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
                            <FpsCards data={newCardActions} currentBP='desktop' />
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