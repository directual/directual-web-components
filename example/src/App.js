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
        "sl": "manageCategories",
        "pageSize": "20",
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
                        "fieldSysName": "isDelete",
                        "fetch": [],
                        "sysName": "isDelete",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "Название категории",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "participants",
                        "fetch": [],
                        "sysName": "participants",
                        "name": "Количество участников",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
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
                        "fieldSysName": "isDelete",
                        "fetch": [],
                        "sysName": "isDelete",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "Название категории",
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
                        "link": "",
                        "actions": []
                    },
                    "isDelete": {
                        "id": "isDelete",
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
                    "name": {
                        "id": "name",
                        "content": "Название категории",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "participants": {
                        "id": "participants",
                        "content": "Количество участников",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__80431632037015636": {
                        "id": "action__80431632037015636",
                        "content": "Закончили!",
                        "type": "action",
                        "actions": []
                    },
                    "action__34821632037021738": {
                        "id": "action__34821632037021738",
                        "content": "Еще не закончили!",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": true
                    },
                    "isDelete": {
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
                    "participants": {
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
                        "title": "Общее инфо",
                        "fieldIds": [
                            "name",
                            "participants",
                            "id",
                            "isDelete"
                        ]
                    },
                    "75291632037116471": {
                        "id": "75291632037116471",
                        "title": "Действия",
                        "fieldIds": [
                            "action__80431632037015636",
                            "action__34821632037021738"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "75291632037116471"
                ],
                "actions": []
            },
            "fields": {
                "id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": true
                },
                "isDelete": {
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
                "participants": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "catFinish",
                    "id": "80431632037015636",
                    "name": "Закончили!",
                    "displayAs": "button",
                    "buttonIcon": "done",
                    "buttonType": "accent",
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
                                "fieldSysName": "action",
                                "fetch": [],
                                "sysName": "action",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "category_id",
                                "fetch": [],
                                "sysName": "category_id",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Categories"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "32181632037048348",
                            "target": "category_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "36791632037056908",
                            "target": "action",
                            "type": "const",
                            "value": "finish"
                        }
                    ]
                },
                {
                    "sysName": "catFinish",
                    "id": "34821632037021738",
                    "name": "Еще не закончили!",
                    "displayAs": "button",
                    "buttonIcon": "clocks",
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
                                "fieldSysName": "action",
                                "fetch": [],
                                "sysName": "action",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "category_id",
                                "fetch": [],
                                "sysName": "category_id",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Categories"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "18701632037080343",
                            "target": "category_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "68741632037089800",
                            "target": "action",
                            "type": "const",
                            "value": "continue"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "Категории",
        "actions": null,
        "headers": [
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "isDelete",
                "dataType": "boolean",
                "name": "",
                "id": "23961630845476759",
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
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "name",
                "dataType": "string",
                "name": "Название категории",
                "id": "34241630845441302",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "participants",
                "dataType": "number",
                "name": "Количество участников",
                "id": "83591630845451672",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            }
        ],
        "data": [
            {
                "name": "Мужчины до 95 кг.",
                "id": "e37be8bc-358b-4a6a-8b49-faf3a5f277da",
                "isDelete": ""
            },
            {
                "name": "Мужчины до 66 кг.",
                "id": "8e10f385-21a4-492e-ab4b-73684f6b74f3",
                "isDelete": ""
            },
            {
                "name": "Мужчины до 60 кг.",
                "id": "02aa6579-e3b5-453b-9af5-61d63f52d6e5",
                "isDelete": ""
            },
            {
                "name": "Девушки до 60 кг.",
                "id": "64f57fe0-e8ac-46de-b18c-fcd5baf50c27",
                "isDelete": ""
            },
            {
                "name": "Мужчины до 71 кг.",
                "id": "5a329117-5e42-4972-9d35-4b0ec505835b",
                "isDelete": ""
            },
            {
                "name": "Мужчины до 75 кг.",
                "id": "4d04ce17-ce35-4ebb-ad28-abaed8ff6d62",
                "isDelete": ""
            },
            {
                "name": "Мужчины до 79 кг.",
                "id": "1976f364-40ee-4ef2-a69f-b1cd1f3dbbac",
                "isDelete": ""
            },
            {
                "name": "Девушки до 70 кг.",
                "id": "646b3091-1ad4-4528-97e3-899de618d7ee",
                "isDelete": ""
            },
            {
                "name": "Мужчины до 84 кг.",
                "id": "ee8b73a9-3ee2-41e6-9255-bafdfe124654",
                "isDelete": ""
            },
            {
                "name": "Мужчины абс.",
                "id": "9644d46b-26e2-4def-821f-eca8e50655cb",
                "isDelete": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "id",
                99019611
            ],
            [
                "isDelete",
                99019611
            ],
            [
                "name",
                99019611
            ],
            [
                "participants",
                99019611
            ]
        ],
        "writeFields": [
            "id",
            "isDelete",
            "name"
        ],
        "structures": {
            "99019611": {
                "networkID": 9312,
                "sysName": "Categories",
                "name": "Категории",
                "id": 99019611,
                "dateCreated": "2021-09-05T12:37:13Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isDelete\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"23961630845476759\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название категории\",\"id\":\"34241630845441302\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"participants\",\"dataType\":\"number\",\"name\":\"Количество участников\",\"id\":\"83591630845451672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-05T12:38:07Z",
                "createBy": 21,
                "changedBy": 21,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33657238
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "isDelete",
                "dataType": "boolean",
                "name": "",
                "id": "23961630845476759",
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
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "name",
                "dataType": "string",
                "name": "Название категории",
                "id": "34241630845441302",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            }
        ],
        "quickSearch": "false",
        "httpParams": {}
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
    "sl": "myJobsActive",
    "pageSize": "10",
    "headerField": null,
    "params": {
        "cardListLayout": "grid",
        "cardHeaderComment": "date_created",
        "deleteField": "",
        "cardBodyText": "functions_22",
        "cardImage": false,
        "cardImageField": null,
        "cardImageType": "leftCircle",
        "cardImageSize": 50,
        "objectView": {},
        "data": {
            "readFields": [
                {
                    "fieldSysName": "candidates_quantity",
                    "fetch": [],
                    "sysName": "candidates_quantity",
                    "name": "Количество подходящих профилей кандидатов",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "company_city_ids",
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
                    "sysName": "company_city_ids",
                    "name": "Страна работодателя",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "cities"
                },
                {
                    "fieldSysName": "company_description",
                    "fetch": [],
                    "sysName": "company_description",
                    "name": "Описание компании работодателя",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "company_in_profile",
                    "fetch": [],
                    "sysName": "company_in_profile",
                    "name": "Работодатель",
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
                            "Указан в моем профиле работодателя",
                            "Другая компания"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "company_name",
                    "fetch": [],
                    "sysName": "company_name",
                    "name": "Название компании работодателя",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "company_website",
                    "fetch": [],
                    "sysName": "company_website",
                    "name": "Сайт работодателя",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "connect_instructions",
                    "fetch": [],
                    "sysName": "connect_instructions",
                    "name": "Инструкции для связи кандидату",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "connect_type",
                    "fetch": [],
                    "sysName": "connect_type",
                    "name": "Способ связи с кандидатом",
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
                            "Выслать кандидату мой телеграм",
                            "Другой способ"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "date_created",
                    "fetch": [],
                    "sysName": "date_created",
                    "name": "Дата размещения вакансии",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "functions_22",
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
                    "sysName": "functions_22",
                    "name": "Функции",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "functions22"
                },
                {
                    "fieldSysName": "functions_52",
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
                    "sysName": "functions_52",
                    "name": "Функции для вакансий 5/2",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "functions52"
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
                    "fieldSysName": "job_description",
                    "fetch": [],
                    "sysName": "job_description",
                    "name": "Описание вакансии",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "job_name",
                    "fetch": [],
                    "sysName": "job_name",
                    "name": "Название вакансии",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "job_status_message",
                    "fetch": [],
                    "sysName": "job_status_message",
                    "name": "Статус вакансии",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "logo",
                    "fetch": [],
                    "sysName": "logo",
                    "name": "Логотип",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "payment_link",
                    "fetch": [],
                    "sysName": "payment_link",
                    "name": "Оплатить размещение по тарифу Small",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "push_bool",
                    "fetch": [],
                    "sysName": "push_bool",
                    "name": "",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "responds_approved_ids",
                    "fetch": [
                        {
                            "fieldSysName": "Employer_respond",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "date_process",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "salary_text",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_CV",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_fb",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_insta",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_phone",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_photo",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_telegram",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "responds_approved_ids",
                    "name": "✅ Одобренные отклики",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Responds"
                },
                {
                    "fieldSysName": "responds_declined_ids",
                    "fetch": [
                        {
                            "fieldSysName": "date_process",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_CV",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_fb",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_insta",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_photo",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "responds_declined_ids",
                    "name": "🚫 Отклоненные отклики",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Responds"
                },
                {
                    "fieldSysName": "responds_new",
                    "fetch": [],
                    "sysName": "responds_new",
                    "name": "Новых откликов",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "responds_new_ids",
                    "fetch": [
                        {
                            "fieldSysName": "about_last_work",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "date_respond",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "id",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "jobFunctions22",
                            "condition": null,
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
                            ]
                        },
                        {
                            "fieldSysName": "review",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "salary_text",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_CV",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_fb",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_functions",
                            "condition": null,
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
                            ]
                        },
                        {
                            "fieldSysName": "user_insta",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_lastName",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_name",
                            "condition": null,
                            "fetch": []
                        },
                        {
                            "fieldSysName": "user_photo",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "responds_new_ids",
                    "name": "🙋‍♂️ Новые отклики",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "link": "Responds"
                },
                {
                    "fieldSysName": "salary",
                    "fetch": [],
                    "sysName": "salary",
                    "name": "Зарплатная вилка*",
                    "dataType": "json",
                    "format": "rangeSlider",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "unitName": "$",
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
                            "min": 1000,
                            "max": 40000,
                            "step": 250
                        },
                        "customOptionType": "textarea",
                        "dateFormat": "DD/MM/Y",
                        "timeFormat": " HH:mm",
                        "isUTC": "false"
                    },
                    "link": ""
                },
                {
                    "fieldSysName": "salary_text",
                    "fetch": [],
                    "sysName": "salary_text",
                    "name": "Зарплатная вилка",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
                },
                {
                    "fieldSysName": "tariff",
                    "fetch": [],
                    "sysName": "tariff",
                    "name": "Тариф",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": null
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
                            "fieldSysName": "type",
                            "condition": null,
                            "fetch": []
                        }
                    ],
                    "sysName": "type",
                    "name": "Категория вакансии",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "link": "Type2252"
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
                    "fieldSysName": "job_description",
                    "fetch": [],
                    "sysName": "job_description",
                    "name": "Описание вакансии",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "link": ""
                },
                {
                    "fieldSysName": "job_status",
                    "fetch": [],
                    "sysName": "job_status",
                    "name": "Статус (техническое поле)",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "link": ""
                }
            ],
            "fields": {
                "candidates_quantity": {
                    "id": "candidates_quantity",
                    "content": "Количество подходящих профилей кандидатов",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_city_ids": {
                    "id": "company_city_ids",
                    "content": "Страна работодателя",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "cities",
                    "actions": []
                },
                "company_description": {
                    "id": "company_description",
                    "content": "Описание компании работодателя",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_in_profile": {
                    "id": "company_in_profile",
                    "content": "Работодатель",
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
                            "Указан в моем профиле работодателя",
                            "Другая компания"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_name": {
                    "id": "company_name",
                    "content": "Название компании работодателя",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "company_website": {
                    "id": "company_website",
                    "content": "Сайт работодателя",
                    "type": "field",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "connect_instructions": {
                    "id": "connect_instructions",
                    "content": "Инструкции для связи кандидату",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "connect_type": {
                    "id": "connect_type",
                    "content": "Способ связи с кандидатом",
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
                            "Выслать кандидату мой телеграм",
                            "Другой способ"
                        ],
                        "customOptionPlaceholder": "Describe your option",
                        "range": {},
                        "customOptionType": "textarea"
                    },
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "date_created": {
                    "id": "date_created",
                    "content": "Дата размещения вакансии",
                    "type": "field",
                    "dataType": "date",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "functions_22": {
                    "id": "functions_22",
                    "content": "Функции",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "functions22",
                    "actions": []
                },
                "functions_52": {
                    "id": "functions_52",
                    "content": "Функции для вакансий 5/2",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "functions52",
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
                "job_description": {
                    "id": "job_description",
                    "content": "Описание вакансии",
                    "type": "field",
                    "dataType": "string",
                    "format": "markdown",
                    "formatOptions": {},
                    "write": true,
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "job_name": {
                    "id": "job_name",
                    "content": "Название вакансии",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "job_status_message": {
                    "id": "job_status_message",
                    "content": "Статус вакансии",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "logo": {
                    "id": "logo",
                    "content": "Логотип",
                    "type": "field",
                    "dataType": "file",
                    "format": "image",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "payment_link": {
                    "id": "payment_link",
                    "content": "Оплатить размещение по тарифу Small",
                    "type": "field",
                    "dataType": "string",
                    "format": "webLink",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "push_bool": {
                    "id": "push_bool",
                    "content": "",
                    "type": "field",
                    "dataType": "boolean",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "responds_approved_ids": {
                    "id": "responds_approved_ids",
                    "content": "✅ Одобренные отклики",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Responds",
                    "actions": []
                },
                "responds_declined_ids": {
                    "id": "responds_declined_ids",
                    "content": "🚫 Отклоненные отклики",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Responds",
                    "actions": []
                },
                "responds_new": {
                    "id": "responds_new",
                    "content": "Новых откликов",
                    "type": "field",
                    "dataType": "number",
                    "format": "positiveNum",
                    "formatOptions": {},
                    "read": true,
                    "link": "",
                    "actions": []
                },
                "responds_new_ids": {
                    "id": "responds_new_ids",
                    "content": "🙋‍♂️ Новые отклики",
                    "type": "field",
                    "dataType": "arrayLink",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Responds",
                    "actions": [
                        {
                            "sysName": "respondProcessing",
                            "id": "23791610105623418",
                            "name": "Одобрить",
                            "displayAs": "button",
                            "buttonIcon": "done",
                            "buttonType": "accent",
                            "closePopup": true,
                            "callFrom": "linked",
                            "callFromField": "responds_new_ids",
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
                                        "name": "Статус (suggested,new,approved,declined)",
                                        "dataType": "string",
                                        "format": "",
                                        "formatOptions": {},
                                        "link": ""
                                    }
                                ]
                            },
                            "formMapping": [
                                {
                                    "id": "82751610105650081",
                                    "target": "id",
                                    "type": "linkedField",
                                    "value": "id"
                                },
                                {
                                    "id": "86771610105697488",
                                    "target": "status",
                                    "type": "const",
                                    "value": "approved"
                                }
                            ]
                        },
                        {
                            "sysName": "respondProcessing",
                            "id": "90591610105714148",
                            "name": "Отклонить",
                            "displayAs": "button",
                            "buttonIcon": "ban",
                            "buttonType": "danger",
                            "closePopup": true,
                            "SLtype": "other",
                            "callFrom": "linked",
                            "callFromField": "responds_new_ids",
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
                                        "name": "Статус (suggested,new,approved,declined)",
                                        "dataType": "string",
                                        "format": "",
                                        "formatOptions": {},
                                        "link": ""
                                    }
                                ]
                            },
                            "formMapping": [
                                {
                                    "id": "40881610105737033",
                                    "target": "id",
                                    "type": "linkedField",
                                    "value": "id"
                                },
                                {
                                    "id": "91331610105743116",
                                    "target": "status",
                                    "type": "const",
                                    "value": "declined"
                                }
                            ]
                        }
                    ]
                },
                "salary": {
                    "id": "salary",
                    "content": "Зарплатная вилка*",
                    "type": "field",
                    "dataType": "json",
                    "format": "rangeSlider",
                    "formatOptions": {
                        "customOptionLabel": "My option",
                        "keyValue": {
                            "key": "key",
                            "value": "value",
                            "button": "One more"
                        },
                        "unitName": "$",
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
                            "min": 1000,
                            "max": 40000,
                            "step": 250
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
                "salary_text": {
                    "id": "salary_text",
                    "content": "Зарплатная вилка",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "tariff": {
                    "id": "tariff",
                    "content": "Тариф",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": null,
                    "actions": []
                },
                "type": {
                    "id": "type",
                    "content": "Категория вакансии",
                    "type": "field",
                    "dataType": "link",
                    "format": "",
                    "formatOptions": {},
                    "read": true,
                    "link": "Type2252",
                    "actions": []
                },
                "job_status": {
                    "id": "job_status",
                    "content": "Статус (техническое поле)",
                    "type": "field",
                    "dataType": "string",
                    "format": "",
                    "formatOptions": {},
                    "write": true,
                    "link": "",
                    "actions": []
                },
                "action__40561609919684635": {
                    "content": "Архивировать вакансию",
                    "id": "action__40561609919684635",
                    "type": "action",
                    "actions": []
                },
                "action__23791610105623418": {
                    "content": "Одобрить",
                    "id": "action__23791610105623418",
                    "type": "action",
                    "actions": []
                },
                "action__90591610105714148": {
                    "content": "Отклонить",
                    "id": "action__90591610105714148",
                    "type": "action",
                    "actions": []
                },
                "action__96651636300008889": {
                    "content": "Пуш вакансии",
                    "id": "action__96651636300008889",
                    "type": "action",
                    "actions": []
                },
                "action__63411653242756984": {
                    "content": "Удалить",
                    "id": "action__63411653242756984",
                    "type": "action",
                    "actions": []
                }
            },
            "fieldParams": {
                "functions_22": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "functions_52": {
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
                },
                "job_description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "stringDisplay": "markdown"
                },
                "job_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "salary": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "jsonDisplay": {
                        "type": "range",
                        "unitName": "k ₽",
                        "range": {
                            "min": 0,
                            "max": 300,
                            "step": 10
                        }
                    },
                    "descriptionFlag": true,
                    "description": "Доход в мес, тыс. ₽"
                },
                "type": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_city_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_in_profile": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_website": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_description": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "connect_instructions": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "connect_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "job_status_message": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": true,
                    "hintType": "ok"
                },
                "responds_approved_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "Employer_respond": {
                                "id": "Employer_respond",
                                "content": "Ответ работодателя",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "date_process": {
                                "id": "date_process",
                                "content": "Дата обработки работодателем",
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
                                    "timeFormat": "",
                                    "isUTC": "false"
                                }
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
                            "salary_text": {
                                "id": "salary_text",
                                "content": "Зарплатная вилка",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_CV": {
                                "id": "user_CV",
                                "content": "Резюме кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_fb": {
                                "id": "user_fb",
                                "content": "Facebook",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "webLink",
                                "formatOptions": {}
                            },
                            "user_insta": {
                                "id": "user_insta",
                                "content": "Instagram",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "webLink",
                                "formatOptions": {}
                            },
                            "user_lastName": {
                                "id": "user_lastName",
                                "content": "Фамилия кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_name": {
                                "id": "user_name",
                                "content": "Имя кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_phone": {
                                "id": "user_phone",
                                "content": "Телефон кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "phone",
                                "formatOptions": {}
                            },
                            "user_photo": {
                                "id": "user_photo",
                                "content": "Фото кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": {}
                            },
                            "user_telegram": {
                                "id": "user_telegram",
                                "content": "Telegram",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "date_process": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "salary_text": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_CV": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_phone": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_photo": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "user_telegram": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "Employer_respond": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_insta": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_fb": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            null,
                            "Employer_respond",
                            "date_process",
                            "id",
                            "salary_text",
                            "user_CV",
                            "user_fb",
                            "user_insta",
                            "user_lastName",
                            "user_name",
                            "user_phone",
                            "user_photo",
                            "user_telegram"
                        ]
                    },
                    "subHeader": "Одобренный отклик: "
                },
                "responds_declined_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {},
                        "fieldParams": {
                            "date_process": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_CV": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_photo": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "user_fb": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_insta": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            null
                        ]
                    },
                    "subHeader": "Отклоненный отклик:"
                },
                "responds_new": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "responds_new_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "action__23791610105623418": {
                                "id": "action__23791610105623418",
                                "content": "Одобрить",
                                "type": "action"
                            },
                            "action__90591610105714148": {
                                "id": "action__90591610105714148",
                                "content": "Отклонить",
                                "type": "action"
                            },
                            "about_last_work": {
                                "id": "about_last_work",
                                "content": "Место последней работы",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "date_respond": {
                                "id": "date_respond",
                                "content": "Дата отклика",
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
                                    "timeFormat": "",
                                    "isUTC": "false"
                                }
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
                            "review": {
                                "id": "review",
                                "content": "О кандидате",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "salary_text": {
                                "id": "salary_text",
                                "content": "Зарплатная вилка",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_CV": {
                                "id": "user_CV",
                                "content": "Резюме кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_fb": {
                                "id": "user_fb",
                                "content": "Facebook",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "webLink",
                                "formatOptions": {}
                            },
                            "user_insta": {
                                "id": "user_insta",
                                "content": "Instagram",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "webLink",
                                "formatOptions": {}
                            },
                            "user_lastName": {
                                "id": "user_lastName",
                                "content": "Фамилия кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_name": {
                                "id": "user_name",
                                "content": "Имя кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_photo": {
                                "id": "user_photo",
                                "content": "Фото кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": {}
                            },
                            "jobFunctions22": {
                                "id": "jobFunctions22",
                                "content": "Функции",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user_functions": {
                                "id": "user_functions",
                                "content": "Функции кандидата",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "date_respond": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "salary_text": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_CV": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_photo": {
                                "include": true,
                                "fileImageFormat": "circle",
                                "fileImageSize": 200,
                                "fileImage": true
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_fb": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_insta": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "about_last_work": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "review": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200,
                                "displayAsHint": true,
                                "hintType": "ok"
                            },
                            "jobFunctions22": {
                                "include": false,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_functions": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date_respond",
                            "user_photo",
                            null,
                            "user_name",
                            "user_lastName",
                            "about_last_work",
                            "id",
                            "review",
                            "salary_text",
                            "user_CV",
                            "user_fb",
                            "user_insta",
                            "user_functions",
                            "action__23791610105623418",
                            "action__90591610105714148",
                            "jobFunctions22"
                        ]
                    },
                    "subHeader": "Новый отклик: "
                },
                "date_created": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_link": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true,
                    "button": {
                        "icon": "creditcard",
                        "type": "accent",
                        "title": "Оплатить размещение за 3 999 ₽"
                    }
                },
                "job_status": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "salary_text": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "Доход в мес, тыс. $"
                },
                "candidates_quantity": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tariff": {
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
                "delete": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "push_bool": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "logo": {
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
                    "title": "Вакансия",
                    "fieldIds": [
                        "id",
                        "job_status_message",
                        "job_name",
                        "job_description",
                        "company_city_ids",
                        "company_description",
                        "company_in_profile",
                        "company_name",
                        "company_website",
                        "connect_instructions",
                        "connect_type",
                        "date_created",
                        "type",
                        "functions_22",
                        "functions_52",
                        "candidates_quantity",
                        "payment_link",
                        "push_bool",
                        "responds_new",
                        "salary_text",
                        "tariff",
                        "job_status",
                        "salary",
                        "action__63411653242756984",
                        "logo"
                    ]
                },
                "94701609918985017": {
                    "id": "94701609918985017",
                    "title": "Отклики",
                    "fieldIds": [
                        "responds_new_ids",
                        "responds_declined_ids",
                        "responds_approved_ids"
                    ]
                },
                "45871609919735841": {
                    "id": "45871609919735841",
                    "title": "Действия с вакансией",
                    "fieldIds": [
                        "action__96651636300008889",
                        "action__40561609919684635"
                    ]
                }
            },
            "columnOrder": [
                "tab-1",
                "94701609918985017",
                "45871609919735841"
            ],
            "actions": [
                {
                    "sysName": "",
                    "id": "40561609919684635",
                    "name": "Архивировать вакансию",
                    "displayAs": "button",
                    "buttonIcon": "delete",
                    "buttonType": "danger",
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "65381609919709047",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "98791609919716151",
                            "target": "job_status",
                            "type": "const",
                            "value": "archived"
                        }
                    ],
                    "dropdown": false,
                    "footerButtons": true
                },
                {
                    "sysName": "respondProcessing",
                    "id": "23791610105623418",
                    "name": "Одобрить",
                    "displayAs": "button",
                    "buttonIcon": "done",
                    "buttonType": "accent",
                    "closePopup": true,
                    "callFrom": "linked",
                    "callFromField": "responds_new_ids",
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
                                "name": "Статус (suggested,new,approved,declined)",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "82751610105650081",
                            "target": "id",
                            "type": "linkedField",
                            "value": "id"
                        },
                        {
                            "id": "86771610105697488",
                            "target": "status",
                            "type": "const",
                            "value": "approved"
                        }
                    ]
                },
                {
                    "sysName": "respondProcessing",
                    "id": "90591610105714148",
                    "name": "Отклонить",
                    "displayAs": "button",
                    "buttonIcon": "ban",
                    "buttonType": "danger",
                    "closePopup": true,
                    "SLtype": "other",
                    "callFrom": "linked",
                    "callFromField": "responds_new_ids",
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
                                "name": "Статус (suggested,new,approved,declined)",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "40881610105737033",
                            "target": "id",
                            "type": "linkedField",
                            "value": "id"
                        },
                        {
                            "id": "91331610105743116",
                            "target": "status",
                            "type": "const",
                            "value": "declined"
                        }
                    ]
                },
                {
                    "sysName": "jobAction",
                    "id": "96651636300008889",
                    "name": "Пуш вакансии",
                    "displayAs": "button",
                    "conditionals": [
                        {
                            "id": "98251636300039330",
                            "target": "field",
                            "value": "true",
                            "field": "push_bool"
                        }
                    ],
                    "buttonIcon": "bellActive",
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
                            },
                            {
                                "fieldSysName": "is_type_Acquiring_bool",
                                "fetch": [],
                                "sysName": "is_type_Acquiring_bool",
                                "name": "Способ оплаты",
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
                                        "Оплата по ссылке",
                                        "Рассчетный счет"
                                    ],
                                    "validWeekDays": {
                                        "mon": true,
                                        "thu": true,
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
                                "fieldSysName": "tariffJson",
                                "fetch": [],
                                "sysName": "tariffJson",
                                "name": "Выбрать тариф",
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
                                            "value": "Basic",
                                            "label": "Basic- 1 999 руб"
                                        },
                                        {
                                            "value": "Business-s",
                                            "label": "Business-S 20 000 руб"
                                        },
                                        {
                                            "value": "Business-M",
                                            "label": "Business-M 50 000 руб"
                                        }
                                    ]
                                },
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "INN",
                                "fetch": [],
                                "sysName": "INN",
                                "name": "ИНН",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
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
                                "fieldSysName": "bank_INN",
                                "fetch": [],
                                "sysName": "bank_INN",
                                "name": "ИНН банка",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "bank_account",
                                "fetch": [],
                                "sysName": "bank_account",
                                "name": "расчетный счет",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "bank_bik",
                                "fetch": [],
                                "sysName": "bank_bik",
                                "name": "БИК банка",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "company_name",
                                "fetch": [],
                                "sysName": "company_name",
                                "name": "название компании",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "director",
                                "fetch": [],
                                "sysName": "director",
                                "name": "ФИО директора",
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
                                "fieldSysName": "is_type_Acquiring_bool",
                                "fetch": [],
                                "sysName": "is_type_Acquiring_bool",
                                "name": "Способ оплаты",
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
                                        "Оплата по ссылке",
                                        "Рассчетный счет"
                                    ],
                                    "validWeekDays": {
                                        "mon": true,
                                        "thu": true,
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
                                "fieldSysName": "job_id",
                                "fetch": [],
                                "sysName": "job_id",
                                "name": "",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Jobs"
                            },
                            {
                                "fieldSysName": "tariffJson",
                                "fetch": [],
                                "sysName": "tariffJson",
                                "name": "Выбрать тариф",
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
                                            "value": "Basic",
                                            "label": "Basic- 1 999 руб"
                                        },
                                        {
                                            "value": "Business-s",
                                            "label": "Business-S 20 000 руб"
                                        },
                                        {
                                            "value": "Business-M",
                                            "label": "Business-M 50 000 руб"
                                        }
                                    ]
                                },
                                "link": ""
                            },
                            {
                                "fieldSysName": "type",
                                "fetch": [],
                                "sysName": "type",
                                "name": "Правовая организация (ООО, ИП, АНО)",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
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
                            "id": "28681636300086706",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "91941636300102117",
                            "target": "action",
                            "type": "const",
                            "value": "pushThisJob"
                        },
                        {
                            "id": "46801636300135113",
                            "target": "job_id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ]
                },
                {
                    "sysName": "",
                    "id": "63411653242756984",
                    "name": "Удалить",
                    "displayAs": "button",
                    "buttonIcon": "delete",
                    "closePopup": true,
                    "showMessage": false,
                    "dropdown": false,
                    "formMapping": [
                        {
                            "id": "67931653242784499",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "27541653242792509",
                            "target": "job_status",
                            "type": "const",
                            "value": "deleted"
                        }
                    ],
                    "footerButtons": true
                }
            ]
        },
        "fields": {
            "functions_22": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "functions_52": {
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
            },
            "job_description": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "stringDisplay": "markdown"
            },
            "job_name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "salary": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "jsonDisplay": {
                    "type": "range",
                    "unitName": "k ₽",
                    "range": {
                        "min": 0,
                        "max": 300,
                        "step": 10
                    }
                },
                "descriptionFlag": true,
                "description": "Доход в мес, тыс. ₽"
            },
            "type": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_city_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_in_profile": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_name": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_website": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "company_description": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "connect_instructions": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "connect_type": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "job_status_message": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "displayAsHint": true,
                "hintType": "ok"
            },
            "responds_approved_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "Employer_respond": {
                            "id": "Employer_respond",
                            "content": "Ответ работодателя",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "date_process": {
                            "id": "date_process",
                            "content": "Дата обработки работодателем",
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
                                "timeFormat": "",
                                "isUTC": "false"
                            }
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
                        "salary_text": {
                            "id": "salary_text",
                            "content": "Зарплатная вилка",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_CV": {
                            "id": "user_CV",
                            "content": "Резюме кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_fb": {
                            "id": "user_fb",
                            "content": "Facebook",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "webLink",
                            "formatOptions": {}
                        },
                        "user_insta": {
                            "id": "user_insta",
                            "content": "Instagram",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "webLink",
                            "formatOptions": {}
                        },
                        "user_lastName": {
                            "id": "user_lastName",
                            "content": "Фамилия кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_name": {
                            "id": "user_name",
                            "content": "Имя кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_phone": {
                            "id": "user_phone",
                            "content": "Телефон кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "phone",
                            "formatOptions": {}
                        },
                        "user_photo": {
                            "id": "user_photo",
                            "content": "Фото кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file",
                            "format": "image",
                            "formatOptions": {}
                        },
                        "user_telegram": {
                            "id": "user_telegram",
                            "content": "Telegram",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        }
                    },
                    "fieldParams": {
                        "date_process": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "id": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "salary_text": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_CV": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_lastName": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_phone": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_photo": {
                            "include": true,
                            "fileImageFormat": "circle",
                            "fileImageSize": 200,
                            "fileImage": true
                        },
                        "user_telegram": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "Employer_respond": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_insta": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_fb": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        null,
                        "Employer_respond",
                        "date_process",
                        "id",
                        "salary_text",
                        "user_CV",
                        "user_fb",
                        "user_insta",
                        "user_lastName",
                        "user_name",
                        "user_phone",
                        "user_photo",
                        "user_telegram"
                    ]
                },
                "subHeader": "Одобренный отклик: "
            },
            "responds_declined_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {},
                    "fieldParams": {
                        "date_process": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_CV": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_photo": {
                            "include": true,
                            "fileImageFormat": "circle",
                            "fileImageSize": 200,
                            "fileImage": true
                        },
                        "user_fb": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_insta": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_lastName": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        null
                    ]
                },
                "subHeader": "Отклоненный отклик:"
            },
            "responds_new": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "responds_new_ids": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": true,
                "configureLinkedCard": {
                    "fields": {
                        "action__23791610105623418": {
                            "id": "action__23791610105623418",
                            "content": "Одобрить",
                            "type": "action"
                        },
                        "action__90591610105714148": {
                            "id": "action__90591610105714148",
                            "content": "Отклонить",
                            "type": "action"
                        },
                        "about_last_work": {
                            "id": "about_last_work",
                            "content": "Место последней работы",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": null
                        },
                        "date_respond": {
                            "id": "date_respond",
                            "content": "Дата отклика",
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
                                "timeFormat": "",
                                "isUTC": "false"
                            }
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
                        "review": {
                            "id": "review",
                            "content": "О кандидате",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": null
                        },
                        "salary_text": {
                            "id": "salary_text",
                            "content": "Зарплатная вилка",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_CV": {
                            "id": "user_CV",
                            "content": "Резюме кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_fb": {
                            "id": "user_fb",
                            "content": "Facebook",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "webLink",
                            "formatOptions": {}
                        },
                        "user_insta": {
                            "id": "user_insta",
                            "content": "Instagram",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": "webLink",
                            "formatOptions": {}
                        },
                        "user_lastName": {
                            "id": "user_lastName",
                            "content": "Фамилия кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_name": {
                            "id": "user_name",
                            "content": "Имя кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "string",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_photo": {
                            "id": "user_photo",
                            "content": "Фото кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "file",
                            "format": "image",
                            "formatOptions": {}
                        },
                        "jobFunctions22": {
                            "id": "jobFunctions22",
                            "content": "Функции",
                            "type": "field",
                            "read": true,
                            "dataType": "arrayLink",
                            "format": null,
                            "formatOptions": {}
                        },
                        "user_functions": {
                            "id": "user_functions",
                            "content": "Функции кандидата",
                            "type": "field",
                            "read": true,
                            "dataType": "arrayLink",
                            "format": null,
                            "formatOptions": {}
                        }
                    },
                    "fieldParams": {
                        "date_respond": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "salary_text": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_CV": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_name": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_photo": {
                            "include": true,
                            "fileImageFormat": "circle",
                            "fileImageSize": 200,
                            "fileImage": true
                        },
                        "id": {
                            "include": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_fb": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_insta": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_lastName": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "about_last_work": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "review": {
                            "include": true,
                            "fileImageFormat": "square",
                            "fileImageSize": 200,
                            "displayAsHint": true,
                            "hintType": "ok"
                        },
                        "jobFunctions22": {
                            "include": false,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        },
                        "user_functions": {
                            "include": true,
                            "disableEditing": false,
                            "fileImageFormat": "square",
                            "fileImageSize": 200
                        }
                    },
                    "fieldOrder": [
                        "date_respond",
                        "user_photo",
                        null,
                        "user_name",
                        "user_lastName",
                        "about_last_work",
                        "id",
                        "review",
                        "salary_text",
                        "user_CV",
                        "user_fb",
                        "user_insta",
                        "user_functions",
                        "action__23791610105623418",
                        "action__90591610105714148",
                        "jobFunctions22"
                    ]
                },
                "subHeader": "Новый отклик: "
            },
            "date_created": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "payment_link": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "displayAsButton": true,
                "button": {
                    "icon": "creditcard",
                    "type": "accent",
                    "title": "Оплатить размещение за 3 999 ₽"
                }
            },
            "job_status": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "salary_text": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false,
                "descriptionFlag": true,
                "description": "Доход в мес, тыс. $"
            },
            "candidates_quantity": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "tariff": {
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
            "delete": {
                "include": true,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "push_bool": {
                "include": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            },
            "logo": {
                "include": true,
                "disableEditing": false,
                "fileImageFormat": "square",
                "quickSearch": false,
                "fileImageSize": 200,
                "clickable": false
            }
        },
        "showCounter": true,
        "counterField": "responds_new",
        "counterText": "новых откликов",
        "actions": [
            {
                "sysName": "",
                "id": "40561609919684635",
                "name": "Архивировать вакансию",
                "displayAs": "button",
                "buttonIcon": "delete",
                "buttonType": "danger",
                "closePopup": true,
                "formMapping": [
                    {
                        "id": "65381609919709047",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "98791609919716151",
                        "target": "job_status",
                        "type": "const",
                        "value": "archived"
                    }
                ],
                "dropdown": false,
                "footerButtons": true
            },
            {
                "sysName": "respondProcessing",
                "id": "23791610105623418",
                "name": "Одобрить",
                "displayAs": "button",
                "buttonIcon": "done",
                "buttonType": "accent",
                "closePopup": true,
                "callFrom": "linked",
                "callFromField": "responds_new_ids",
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
                            "name": "Статус (suggested,new,approved,declined)",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        }
                    ]
                },
                "formMapping": [
                    {
                        "id": "82751610105650081",
                        "target": "id",
                        "type": "linkedField",
                        "value": "id"
                    },
                    {
                        "id": "86771610105697488",
                        "target": "status",
                        "type": "const",
                        "value": "approved"
                    }
                ]
            },
            {
                "sysName": "respondProcessing",
                "id": "90591610105714148",
                "name": "Отклонить",
                "displayAs": "button",
                "buttonIcon": "ban",
                "buttonType": "danger",
                "closePopup": true,
                "SLtype": "other",
                "callFrom": "linked",
                "callFromField": "responds_new_ids",
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
                            "name": "Статус (suggested,new,approved,declined)",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": ""
                        }
                    ]
                },
                "formMapping": [
                    {
                        "id": "40881610105737033",
                        "target": "id",
                        "type": "linkedField",
                        "value": "id"
                    },
                    {
                        "id": "91331610105743116",
                        "target": "status",
                        "type": "const",
                        "value": "declined"
                    }
                ]
            },
            {
                "sysName": "jobAction",
                "id": "96651636300008889",
                "name": "Пуш вакансии",
                "displayAs": "button",
                "conditionals": [
                    {
                        "id": "98251636300039330",
                        "target": "field",
                        "value": "true",
                        "field": "push_bool"
                    }
                ],
                "buttonIcon": "bellActive",
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
                        },
                        {
                            "fieldSysName": "is_type_Acquiring_bool",
                            "fetch": [],
                            "sysName": "is_type_Acquiring_bool",
                            "name": "Способ оплаты",
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
                                    "Оплата по ссылке",
                                    "Рассчетный счет"
                                ],
                                "validWeekDays": {
                                    "mon": true,
                                    "thu": true,
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
                            "fieldSysName": "tariffJson",
                            "fetch": [],
                            "sysName": "tariffJson",
                            "name": "Выбрать тариф",
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
                                        "value": "Basic",
                                        "label": "Basic- 1 999 руб"
                                    },
                                    {
                                        "value": "Business-s",
                                        "label": "Business-S 20 000 руб"
                                    },
                                    {
                                        "value": "Business-M",
                                        "label": "Business-M 50 000 руб"
                                    }
                                ]
                            },
                            "link": ""
                        }
                    ],
                    "writeFields": [
                        {
                            "fieldSysName": "INN",
                            "fetch": [],
                            "sysName": "INN",
                            "name": "ИНН",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": null
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
                            "fieldSysName": "bank_INN",
                            "fetch": [],
                            "sysName": "bank_INN",
                            "name": "ИНН банка",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": null
                        },
                        {
                            "fieldSysName": "bank_account",
                            "fetch": [],
                            "sysName": "bank_account",
                            "name": "расчетный счет",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": null
                        },
                        {
                            "fieldSysName": "bank_bik",
                            "fetch": [],
                            "sysName": "bank_bik",
                            "name": "БИК банка",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": null
                        },
                        {
                            "fieldSysName": "company_name",
                            "fetch": [],
                            "sysName": "company_name",
                            "name": "название компании",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": null
                        },
                        {
                            "fieldSysName": "director",
                            "fetch": [],
                            "sysName": "director",
                            "name": "ФИО директора",
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
                            "fieldSysName": "is_type_Acquiring_bool",
                            "fetch": [],
                            "sysName": "is_type_Acquiring_bool",
                            "name": "Способ оплаты",
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
                                    "Оплата по ссылке",
                                    "Рассчетный счет"
                                ],
                                "validWeekDays": {
                                    "mon": true,
                                    "thu": true,
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
                            "fieldSysName": "job_id",
                            "fetch": [],
                            "sysName": "job_id",
                            "name": "",
                            "dataType": "link",
                            "format": "",
                            "formatOptions": {},
                            "link": "Jobs"
                        },
                        {
                            "fieldSysName": "tariffJson",
                            "fetch": [],
                            "sysName": "tariffJson",
                            "name": "Выбрать тариф",
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
                                        "value": "Basic",
                                        "label": "Basic- 1 999 руб"
                                    },
                                    {
                                        "value": "Business-s",
                                        "label": "Business-S 20 000 руб"
                                    },
                                    {
                                        "value": "Business-M",
                                        "label": "Business-M 50 000 руб"
                                    }
                                ]
                            },
                            "link": ""
                        },
                        {
                            "fieldSysName": "type",
                            "fetch": [],
                            "sysName": "type",
                            "name": "Правовая организация (ООО, ИП, АНО)",
                            "dataType": "string",
                            "format": "",
                            "formatOptions": {},
                            "link": null
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
                        "id": "28681636300086706",
                        "target": "user_id",
                        "type": "user",
                        "value": null
                    },
                    {
                        "id": "91941636300102117",
                        "target": "action",
                        "type": "const",
                        "value": "pushThisJob"
                    },
                    {
                        "id": "46801636300135113",
                        "target": "job_id",
                        "type": "objectField",
                        "value": "id"
                    }
                ]
            },
            {
                "sysName": "",
                "id": "63411653242756984",
                "name": "Удалить",
                "displayAs": "button",
                "buttonIcon": "delete",
                "closePopup": true,
                "showMessage": false,
                "dropdown": false,
                "formMapping": [
                    {
                        "id": "67931653242784499",
                        "target": "id",
                        "type": "objectField",
                        "value": "id"
                    },
                    {
                        "id": "27541653242792509",
                        "target": "job_status",
                        "type": "const",
                        "value": "deleted"
                    }
                ],
                "footerButtons": true
            }
        ],
        "cardImageResize": "contain"
    },
    "tableTitle": "Активные вакансии",
    "actions": null,
    "headers": [
        {
            "sysName": "candidates_quantity",
            "dataType": "number",
            "name": "Количество подходящих профилей кандидатов",
            "id": "12591609943959558",
            "link": "",
            "group": "1609920960347",
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
            "format": "positiveNum",
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
            "sysName": "company_city_ids",
            "dataType": "arrayLink",
            "name": "Страна работодателя",
            "id": "10281607944727109",
            "link": "cities",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "array": false
        },
        {
            "sysName": "company_description",
            "dataType": "string",
            "name": "Описание компании работодателя",
            "id": "17331609671162114",
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
            "format": "markdown",
            "formatOptions": null,
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
            "sysName": "company_in_profile",
            "dataType": "boolean",
            "name": "Работодатель",
            "id": "33951607944479971",
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
                "booleanOptions": [
                    "Указан в моем профиле работодателя",
                    "Другая компания"
                ],
                "customOptionPlaceholder": "Describe your option",
                "range": {},
                "customOptionType": "textarea"
            },
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
            "sysName": "company_name",
            "dataType": "string",
            "name": "Название компании работодателя",
            "id": "22051607944259558",
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
            "sysName": "company_website",
            "dataType": "string",
            "name": "Сайт работодателя",
            "id": "76091607944603531",
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
            "format": "webLink",
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
            "sysName": "connect_instructions",
            "dataType": "string",
            "name": "Инструкции для связи кандидату",
            "id": "64711607948185707",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 14,
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
            "sysName": "connect_type",
            "dataType": "boolean",
            "name": "Способ связи с кандидатом",
            "id": "65731607948157836",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 13,
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
                "booleanOptions": [
                    "Выслать кандидату мой телеграм",
                    "Другой способ"
                ],
                "customOptionPlaceholder": "Describe your option",
                "range": {},
                "customOptionType": "textarea"
            },
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
            "sysName": "date_created",
            "dataType": "date",
            "name": "Дата размещения вакансии",
            "id": "76531609833917406",
            "link": "",
            "group": "1609833907682",
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
            "sysName": "functions_22",
            "dataType": "arrayLink",
            "name": "Функции",
            "id": "82251607941755646",
            "link": "functions22",
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
            "format": null,
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "array": false
        },
        {
            "sysName": "functions_52",
            "dataType": "arrayLink",
            "name": "Функции для вакансий 5/2",
            "id": "67731607941768628",
            "link": "functions52",
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
            "formatOptions": {},
            "groupName": null,
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "job_description",
            "dataType": "string",
            "name": "Описание вакансии",
            "id": "74961607943694679",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "job_name",
            "dataType": "string",
            "name": "Название вакансии",
            "id": "93071607941686773",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "job_status_message",
            "dataType": "string",
            "name": "Статус вакансии",
            "id": "30881609826436336",
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
            "sysName": "logo",
            "dataType": "file",
            "name": "Логотип",
            "id": "23071661425386261",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 21,
            "linkIndexFieldSysName": [],
            "defaultValue": "",
            "constraints": null,
            "synthetic": false,
            "format": "image",
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
            "sysName": "payment_link",
            "dataType": "string",
            "name": "Оплатить размещение по тарифу Small",
            "id": "29021609872910913",
            "link": "",
            "group": "0",
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
            "format": "webLink",
            "formatOptions": null,
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
            "sysName": "push_bool",
            "dataType": "boolean",
            "name": "",
            "id": "87721635926342338",
            "link": "",
            "group": "1635177184504",
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
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "responds_approved_ids",
            "dataType": "arrayLink",
            "name": "✅ Одобренные отклики",
            "id": "67331609830708204",
            "link": "Responds",
            "group": "1609753049831",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "array": false
        },
        {
            "sysName": "responds_declined_ids",
            "dataType": "arrayLink",
            "name": "🚫 Отклоненные отклики",
            "id": "19311609830709019",
            "link": "Responds",
            "group": "1609753049831",
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
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "array": false
        },
        {
            "sysName": "responds_new",
            "dataType": "number",
            "name": "Новых откликов",
            "id": "59481609753074292",
            "link": "",
            "group": "1609753049831",
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
            "format": "positiveNum",
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
            "sysName": "responds_new_ids",
            "dataType": "arrayLink",
            "name": "🙋‍♂️ Новые отклики",
            "id": "52651609830657074",
            "link": "Responds",
            "group": "1609753049831",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": false,
            "arrayLink": true,
            "array": false
        },
        {
            "sysName": "salary",
            "dataType": "json",
            "name": "Зарплатная вилка*",
            "id": "15401607941726857",
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
            "format": "rangeSlider",
            "formatOptions": {
                "customOptionLabel": "My option",
                "keyValue": {
                    "key": "key",
                    "value": "value",
                    "button": "One more"
                },
                "unitName": "$",
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
                    "min": 1000,
                    "max": 40000,
                    "step": 250
                },
                "customOptionType": "textarea",
                "dateFormat": "DD/MM/Y",
                "timeFormat": " HH:mm",
                "isUTC": "false"
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
            "sysName": "salary_text",
            "dataType": "string",
            "name": "Зарплатная вилка",
            "id": "68241609919064693",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 19,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "tariff",
            "dataType": "string",
            "name": "Тариф",
            "id": "99111612819479362",
            "link": null,
            "group": "0",
            "tags": null,
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 20,
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
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "type",
            "dataType": "link",
            "name": "Категория вакансии",
            "id": "82641607941710823",
            "link": "Type2252",
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
            "indexExists": false,
            "linkOrArrayLinkType": true,
            "linkType": true,
            "arrayLink": false,
            "array": false
        }
    ],
    "data": [
        {
            "company_name": "RS",
            "company_city_ids": [
                {
                    "id": "Afghanistan"
                }
            ],
            "job_name": "logo",
            "functions_52": [],
            "connect_type": true,
            "salary": "{\"secondValue\":10000,\"firstValue\":1000}",
            "job_status_message": "Ожидает активации",
            "responds_approved_ids": [],
            "job_description": "Requirements: \n- one\n- two\n- three\n\nResponsibilities:\n- one\n- two\n- three\n\nConditions: \n- one\n- two\n- three",
            "id": "3e4cfdce-cc3d-4bc3-9525-a6bb62ae39b0",
            "company_description": "RS",
            "responds_new_ids": [],
            "functions_22": [
                {
                    "name": "Analytics ",
                    "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                }
            ],
            "type": {
                "id": "22",
                "type": "Pro - business functions "
            },
            "company_website": "RS",
            "responds_declined_ids": [],
            "job_status": ""
        },
        {
            "salary_text": "От 1000k $ до 10000k $",
            "date_created": 1661076955000,
            "company_name": "RS",
            "company_city_ids": [
                {
                    "id": "Afghanistan"
                }
            ],
            "job_name": "vac5",
            "connect_type": true,
            "salary": "{\"secondValue\":10000,\"firstValue\":1000}",
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "responds_approved_ids": [
                {
                    "salary_text": "От 1000k $ до 10000k $",
                    "date_process": 1661077060000,
                    "user_CV": "https://api.directual.com/fileUploaded/upandout/web/252746d2-3fc1-4cec-aee5-9290930165ec.png",
                    "user_lastName": "o",
                    "Employer_respond": "Ваш отклик заинтересовал работодателя. Можете связаться с ним через телеграм @ или телефон +79670923500",
                    "user_phone": "79851717196",
                    "id": "cfc7965faea2c6976670f86488141335",
                    "user_telegram": "aantonostrovsky",
                    "user_name": "t"
                }
            ],
            "job_description": "Требования \n- один\n- два\n- три\n\nОбязанности\n- один\n- два\n- три\n\nУсловия \n- один\n- два\n- три",
            "id": "c76d4b50-3ef0-4d7f-b500-da010d075a6b",
            "company_description": "RS",
            "responds_new_ids": [],
            "functions_22": [
                {
                    "name": "Analytics ",
                    "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                }
            ],
            "responds_new": 0,
            "type": {
                "id": "22",
                "type": "Pro - business functions "
            },
            "company_website": "RS",
            "job_status": ""
        },
        {
            "salary_text": "От 1000k $ до 10000k $",
            "date_created": 1661076183000,
            "company_name": "RS",
            "company_city_ids": [
                {
                    "id": "Afghanistan"
                }
            ],
            "job_name": "vac4",
            "connect_type": true,
            "salary": "{\"secondValue\":10000,\"firstValue\":1000}",
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "job_description": "Требования \n- один\n- два\n- три\n\nОбязанности\n- один\n- два\n- три\n\nУсловия \n- один\n- два\n- три",
            "id": "9fb36dcc-00bd-495b-b961-7a7aaa551837",
            "company_description": "RS",
            "responds_new_ids": [],
            "functions_22": [
                {
                    "name": "Analytics ",
                    "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                }
            ],
            "responds_new": 0,
            "type": {
                "id": "22",
                "type": "Pro - business functions "
            },
            "company_website": "RS",
            "responds_declined_ids": [
                {
                    "date_process": 1661076433000,
                    "user_CV": "https://api.directual.com/fileUploaded/upandout/web/252746d2-3fc1-4cec-aee5-9290930165ec.png",
                    "user_lastName": "o",
                    "id": "689072ff323e5ffd59e930345e6d2857",
                    "user_name": "t"
                }
            ],
            "job_status": ""
        },
        {
            "salary_text": "От 1000k $ до 10000k $",
            "date_created": 1661032926000,
            "company_name": "RS",
            "company_city_ids": [
                {
                    "id": "Afghanistan"
                }
            ],
            "job_name": "vac3",
            "connect_type": true,
            "salary": "{\"secondValue\":10000,\"firstValue\":1000}",
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "job_description": "Требования \n- один\n- два\n- три\n\nОбязанности\n- один\n- два\n- три\n\nУсловия \n- один\n- два\n- три",
            "id": "ed3342e4-54a9-4fe1-9a6e-35e2b856df1f",
            "company_description": "RS",
            "responds_new_ids": [
                {
                    "salary_text": "От 1000k $ до 10000k $",
                    "date_respond": 1661032948000,
                    "user_CV": "https://api.directual.com/fileUploaded/upandout/web/252746d2-3fc1-4cec-aee5-9290930165ec.png",
                    "user_lastName": "o",
                    "id": "e7b9b0a0d2a445bb2088cbfcbd66b62e",
                    "jobFunctions22": [
                        {
                            "name": "Analytics ",
                            "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                        }
                    ],
                    "user_name": "t"
                }
            ],
            "functions_22": [
                {
                    "name": "Analytics ",
                    "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                }
            ],
            "responds_new": 1,
            "type": {
                "id": "22",
                "type": "Pro - business functions "
            },
            "company_website": "RS",
            "job_status": ""
        },
        {
            "salary_text": "От 1000k $ до 10000k $",
            "date_created": 1661032121000,
            "company_name": "RS",
            "company_city_ids": [
                {
                    "id": "Afghanistan"
                }
            ],
            "job_name": "vac2",
            "connect_type": true,
            "salary": "{\"secondValue\":10000,\"firstValue\":1000}",
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "job_description": "Требования \n- один\n- два\n- три\n\nОбязанности\n- один\n- два\n- три\n\nУсловия \n- один\n- два\n- три",
            "id": "61fce966-e010-4bc4-a196-b82055c1a618",
            "company_description": "RS",
            "responds_new_ids": [],
            "functions_22": [
                {
                    "name": "Analytics ",
                    "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                }
            ],
            "responds_new": 0,
            "type": {
                "id": "22",
                "type": "Pro - business functions "
            },
            "company_website": "RS",
            "responds_declined_ids": [
                {
                    "date_process": 1661032189000,
                    "user_CV": "https://api.directual.com/fileUploaded/upandout/web/252746d2-3fc1-4cec-aee5-9290930165ec.png",
                    "user_lastName": "o",
                    "id": "652ce73e67efec1a8d61ba4ede04c6c9",
                    "user_name": "t"
                }
            ],
            "job_status": ""
        },
        {
            "salary_text": "От 1000k $ до 10000k $",
            "date_created": 1661028316000,
            "company_name": "RS",
            "company_city_ids": [
                {
                    "id": "Afghanistan"
                }
            ],
            "job_name": "vac",
            "connect_type": true,
            "salary": "{\"secondValue\":10000,\"firstValue\":1000}",
            "candidates_quantity": 1,
            "job_status_message": "Активная вакансия",
            "responds_approved_ids": [
                {
                    "salary_text": "От 1000k $ до 10000k $",
                    "date_process": 1661028352000,
                    "user_CV": "https://api.directual.com/fileUploaded/upandout/web/252746d2-3fc1-4cec-aee5-9290930165ec.png",
                    "user_lastName": "o",
                    "Employer_respond": "Ваш отклик заинтересовал работодателя. Можете связаться с ним через телеграм @ или телефон +79670923500",
                    "user_phone": "79851717196",
                    "id": "efd1903ee6c393eb8d755c5f79832a53",
                    "user_telegram": "aantonostrovsky",
                    "user_name": "t"
                }
            ],
            "job_description": "Требования \n- один\n- два\n- три\n\nОбязанности\n- один\n- два\n- три\n\nУсловия \n- один\n- два\n- три",
            "id": "4de7f1a4-161c-4034-ab52-b6af252d16eb",
            "company_description": "RS",
            "responds_new_ids": [],
            "functions_22": [
                {
                    "name": "Analytics ",
                    "id": "9d39145b-3f57-4df7-a32a-660fa62e53cb"
                }
            ],
            "responds_new": 0,
            "type": {
                "id": "22",
                "type": "Pro - business functions "
            },
            "company_website": "RS",
            "job_status": ""
        }
    ],
    "totalPages": 1,
    "pageNumber": 0,
    "error": null,
    "fieldScheme": [
        [
            "candidates_quantity",
            99105121
        ],
        [
            "company_city_ids.id",
            99105112
        ],
        [
            "company_city_ids.name",
            99105112
        ],
        [
            "company_description",
            99105121
        ],
        [
            "company_in_profile",
            99105121
        ],
        [
            "company_name",
            99105121
        ],
        [
            "company_website",
            99105121
        ],
        [
            "connect_instructions",
            99105121
        ],
        [
            "connect_type",
            99105121
        ],
        [
            "date_created",
            99105121
        ],
        [
            "functions_22.id",
            99105114
        ],
        [
            "functions_22.name",
            99105114
        ],
        [
            "functions_52.id",
            99105115
        ],
        [
            "functions_52.name",
            99105115
        ],
        [
            "id",
            99105121
        ],
        [
            "job_description",
            99105121
        ],
        [
            "job_name",
            99105121
        ],
        [
            "job_status_message",
            99105121
        ],
        [
            "logo",
            99105121
        ],
        [
            "payment_link",
            99105121
        ],
        [
            "push_bool",
            99105121
        ],
        [
            "responds_approved_ids.Employer_respond",
            99105122
        ],
        [
            "responds_approved_ids.date_process",
            99105122
        ],
        [
            "responds_approved_ids.id",
            99105122
        ],
        [
            "responds_approved_ids.salary_text",
            99105122
        ],
        [
            "responds_approved_ids.user_CV",
            99105122
        ],
        [
            "responds_approved_ids.user_fb",
            99105122
        ],
        [
            "responds_approved_ids.user_insta",
            99105122
        ],
        [
            "responds_approved_ids.user_lastName",
            99105122
        ],
        [
            "responds_approved_ids.user_name",
            99105122
        ],
        [
            "responds_approved_ids.user_phone",
            99105122
        ],
        [
            "responds_approved_ids.user_photo",
            99105122
        ],
        [
            "responds_approved_ids.user_telegram",
            99105122
        ],
        [
            "responds_declined_ids.date_process",
            99105122
        ],
        [
            "responds_declined_ids.user_CV",
            99105122
        ],
        [
            "responds_declined_ids.user_fb",
            99105122
        ],
        [
            "responds_declined_ids.user_insta",
            99105122
        ],
        [
            "responds_declined_ids.user_lastName",
            99105122
        ],
        [
            "responds_declined_ids.user_name",
            99105122
        ],
        [
            "responds_declined_ids.user_photo",
            99105122
        ],
        [
            "responds_new",
            99105121
        ],
        [
            "responds_new_ids.about_last_work",
            99105122
        ],
        [
            "responds_new_ids.date_respond",
            99105122
        ],
        [
            "responds_new_ids.id",
            99105122
        ],
        [
            "responds_new_ids.jobFunctions22.id",
            99105114
        ],
        [
            "responds_new_ids.jobFunctions22.name",
            99105114
        ],
        [
            "responds_new_ids.review",
            99105122
        ],
        [
            "responds_new_ids.salary_text",
            99105122
        ],
        [
            "responds_new_ids.user_CV",
            99105122
        ],
        [
            "responds_new_ids.user_fb",
            99105122
        ],
        [
            "responds_new_ids.user_functions.id",
            99105114
        ],
        [
            "responds_new_ids.user_functions.name",
            99105114
        ],
        [
            "responds_new_ids.user_insta",
            99105122
        ],
        [
            "responds_new_ids.user_lastName",
            99105122
        ],
        [
            "responds_new_ids.user_name",
            99105122
        ],
        [
            "responds_new_ids.user_photo",
            99105122
        ],
        [
            "salary",
            99105121
        ],
        [
            "salary_text",
            99105121
        ],
        [
            "tariff",
            99105121
        ],
        [
            "type.id",
            99105113
        ],
        [
            "type.type",
            99105113
        ]
    ],
    "writeFields": [
        "id",
        "job_description",
        "job_status"
    ],
    "structures": {
        "99105112": {
            "networkID": 13112,
            "sysName": "cities",
            "name": "Cities",
            "id": 99105112,
            "dateCreated": "2020-09-18T07:42:27Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"delete\",\"name\":\"Delete\",\"dataType\":\"boolean\",\"id\":\"48871612514340554\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"City name\",\"dataType\":\"string\",\"id\":\"64661600414975068\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"id\"},{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-07-05T17:22:41Z",
            "createBy": 1,
            "changedBy": 12635,
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            "folderId": 33700195
        },
        "99105113": {
            "networkID": 13112,
            "sysName": "Type2252",
            "name": "Тип",
            "id": 99105113,
            "dateCreated": "2020-12-04T08:33:52Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"type\",\"dataType\":\"string\",\"name\":\"Тип работы\",\"id\":\"42681607070870540\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[]",
            "jsonViewIdSettings": "[{\"sysName\":\"type\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":false,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": false,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-05-30T11:18:43Z",
            "createBy": 1,
            "changedBy": 12635,
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            "folderId": 33700195
        },
        "99105114": {
            "networkID": 13112,
            "sysName": "functions22",
            "name": "Функции ",
            "id": 99105114,
            "dateCreated": "2020-12-04T10:19:23Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Функция\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isDelete\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"96931607077672366\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"typeId\",\"dataType\":\"link\",\"name\":\"тип\",\"id\":\"57581653479560073\",\"link\":\"Type2252\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"categoryFunctionId\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"38351653909146634\",\"link\":\"functionCategory\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"new_function22_Id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"96771634634147446\",\"link\":\"functions22\",\"group\":\"1634634145458\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"DELETE_it\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"60411634634215956\",\"link\":null,\"group\":\"1634634145458\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isNotActive\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"89071634641142231\",\"link\":\"\",\"group\":\"1634634145458\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Function22 update\",\"id\":1634715866483,\"order\":0},{\"name\":\"New Group 1\",\"id\":1634634145458,\"order\":0},{\"name\":\"New Group 2\",\"id\":1634634214211,\"order\":1}]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-05-30T11:18:31Z",
            "createBy": 1,
            "changedBy": 12635,
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            "folderId": 33700195
        },
        "99105115": {
            "networkID": 13112,
            "sysName": "functions52",
            "name": "legacy не использовать",
            "id": 99105115,
            "dateCreated": "2020-12-04T10:19:52Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Функция\",\"id\":\"83101607077166818\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isDelete\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"21621607077688079\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isNotActive\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"87521634717412605\",\"link\":\"\",\"group\":\"1634717403997\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"DELETE_it\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"63661634717413802\",\"link\":null,\"group\":\"1634717403997\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"new_function52_Id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"40721634717424085\",\"link\":\"functions22\",\"group\":\"1634717403997\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"New Group 1\",\"id\":1634717403997,\"order\":0}]",
            "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-05-30T11:23:53Z",
            "createBy": 1,
            "changedBy": 12635,
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            "folderId": 33701999
        },
        "99105121": {
            "networkID": 13112,
            "sysName": "Jobs",
            "name": "Вакансии",
            "id": 99105121,
            "dateCreated": "2020-12-14T10:27:24Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_city_ids\",\"dataType\":\"arrayLink\",\"name\":\"Страна работодателя\",\"id\":\"10281607944727109\",\"link\":\"cities\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"IsTariffEmpty_bool\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"10671635933085162\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"schedule_ids\",\"dataType\":\"arrayLink\",\"name\":\"Занятость\",\"id\":\"11651636216216294\",\"link\":\"schedule\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"candidates_quantity\",\"dataType\":\"number\",\"name\":\"Количество подходящих профилей кандидатов\",\"id\":\"12591609943959558\",\"link\":\"\",\"group\":\"1609920960347\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"job_status\",\"dataType\":\"string\",\"name\":\"Статус (техническое поле)\",\"id\":\"14461609825098470\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"output2_front\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"14631636995567315\",\"link\":null,\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"industriesIds\",\"dataType\":\"arrayLink\",\"name\":\"\",\"id\":\"14881653994059415\",\"link\":\"preferredIndustries\",\"group\":\"1653911834756\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"salary\",\"dataType\":\"json\",\"name\":\"Зарплатная вилка*\",\"id\":\"15401607941726857\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"rangeSlider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"$\",\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":1000,\"max\":40000,\"step\":250},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"push_date_next\",\"dataType\":\"date\",\"name\":\"Следующий пуш\",\"id\":\"16701636296312919\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_description\",\"dataType\":\"string\",\"name\":\"Описание компании работодателя\",\"id\":\"17331609671162114\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responds_declined_ids\",\"dataType\":\"arrayLink\",\"name\":\"🚫 Отклоненные отклики\",\"id\":\"19311609830709019\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Название компании работодателя\",\"id\":\"22051607944259558\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logo\",\"dataType\":\"file\",\"name\":\"Логотип\",\"id\":\"23071661425386261\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_link\",\"dataType\":\"string\",\"name\":\"Оплатить размещение по тарифу Small\",\"id\":\"29021609872910913\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"job_status_message\",\"dataType\":\"string\",\"name\":\"Статус вакансии\",\"id\":\"30881609826436336\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"alfa_order_id\",\"dataType\":\"string\",\"name\":\"alfa_order_id\",\"id\":\"32461611754232251\",\"link\":null,\"group\":\"1611754226358\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"experience\",\"dataType\":\"boolean\",\"name\":\"Опыт\",\"id\":\"32911637134596843\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"есть опыт\",\"нет опыта\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_in_profile\",\"dataType\":\"boolean\",\"name\":\"Работодатель\",\"id\":\"33951607944479971\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Указан в моем профиле работодателя\",\"Другая компания\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"workType\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"39851653911836469\",\"link\":\"workType\",\"group\":\"1653911834756\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Пользователь, разместивший вакансию\",\"id\":\"41481607941663169\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"output1_front\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"47441636995549742\",\"link\":null,\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"button_start\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"49071635936934347\",\"link\":null,\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responds_new_ids\",\"dataType\":\"arrayLink\",\"name\":\"🙋‍♂️ Новые отклики\",\"id\":\"52651609830657074\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_editor_id\",\"dataType\":\"link\",\"name\":\"Кто внес изменение\",\"id\":\"55761609867584495\",\"link\":\"WebUser\",\"group\":\"1609833907682\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responds_new\",\"dataType\":\"number\",\"name\":\"Новых откликов\",\"id\":\"59481609753074292\",\"link\":\"\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"connect_instructions\",\"dataType\":\"string\",\"name\":\"Инструкции для связи кандидату\",\"id\":\"64711607948185707\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"connect_type\",\"dataType\":\"boolean\",\"name\":\"Способ связи с кандидатом\",\"id\":\"65731607948157836\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Выслать кандидату мой телеграм\",\"Другой способ\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lang\",\"dataType\":\"arrayLink\",\"name\":\"Язык\",\"id\":\"66181637240419629\",\"link\":\"lang\",\"group\":\"1635177184504\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"htlmlFront\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"67281643801562548\",\"link\":\"\",\"group\":\"1637240411824\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responds_approved_ids\",\"dataType\":\"arrayLink\",\"name\":\"✅ Одобренные отклики\",\"id\":\"67331609830708204\",\"link\":\"Responds\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"functions_52\",\"dataType\":\"arrayLink\",\"name\":\"Функции для вакансий 5/2\",\"id\":\"67731607941768628\",\"link\":\"functions52\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Зарплатная вилка\",\"id\":\"68241609919064693\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"placeType\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"70151653911872231\",\"link\":\"placeType\",\"group\":\"1653911834756\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"alfa_order_i_middle\",\"dataType\":\"string\",\"name\":\"alfa_order_i_middle\",\"id\":\"70311612819949475\",\"link\":null,\"group\":\"1611754226358\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bool_front\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"70981636995534355\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"api_response\",\"dataType\":\"json\",\"name\":\"api_response\",\"id\":\"74071611754628918\",\"link\":\"\",\"group\":\"1611754226358\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"job_description\",\"dataType\":\"string\",\"name\":\"Описание вакансии\",\"id\":\"74961607943694679\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"responds_total\",\"dataType\":\"number\",\"name\":\"Всего откликов\",\"id\":\"74961609753055250\",\"link\":\"\",\"group\":\"1609753049831\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_website\",\"dataType\":\"string\",\"name\":\"Сайт работодателя\",\"id\":\"76091607944603531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата размещения вакансии\",\"id\":\"76531609833917406\",\"link\":\"\",\"group\":\"1609833907682\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_link_middle\",\"dataType\":\"string\",\"name\":\"Оплатить размещение по тарифу Middle\",\"id\":\"78131612819625631\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tariff_id\",\"dataType\":\"link\",\"name\":\"Тариф\",\"id\":\"79131635232355074\",\"link\":\"tarif\",\"group\":\"1635177184504\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"push_date\",\"dataType\":\"date\",\"name\":\"Когда пушили последний раз\",\"id\":\"80851620149133864\",\"link\":\"\",\"group\":\"1620149127389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"end\",\"dataType\":\"date\",\"name\":\"дата окончания\",\"id\":\"81601636223265516\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"functions_22\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"82251607941755646\",\"link\":\"functions22\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"dataType\":\"link\",\"name\":\"Категория вакансии\",\"id\":\"82641607941710823\",\"link\":\"Type2252\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"push_bool\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"87721635926342338\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"deleteVacancy\",\"dataType\":\"boolean\",\"name\":\"удаляем с портала \",\"id\":\"88791653170273961\",\"link\":\"\",\"group\":\"1653170267663\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"about_tarif\",\"dataType\":\"string\",\"name\":\"О тарифах\",\"id\":\"88881636457184263\",\"link\":\"\",\"group\":\"1635177184504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"candidates_ids\",\"dataType\":\"arrayLink\",\"name\":\"Подходящие кандидаты\",\"id\":\"89551609920966036\",\"link\":\"WebUser\",\"group\":\"1609920960347\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_id\",\"dataType\":\"link\",\"name\":\"Компания\",\"id\":\"90851635177187999\",\"link\":\"company\",\"group\":\"1635177184504\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"user_ids\",\"user_ids.id\",\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"job_name\",\"dataType\":\"string\",\"name\":\"Название вакансии\",\"id\":\"93071607941686773\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tariff\",\"dataType\":\"string\",\"name\":\"Тариф\",\"id\":\"99111612819479362\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"id\":1609920960347,\"name\":\"Matching\",\"order\":2},{\"id\":1609833907682,\"name\":\"Timeline\",\"order\":1},{\"id\":1620149127389,\"name\":\"Push\",\"order\":4},{\"id\":1635177184504,\"name\":\"New Group 6\",\"order\":5},{\"id\":1611754226358,\"name\":\"Technical fields\",\"order\":3},{\"id\":1609753049831,\"name\":\"Отклики\",\"order\":0},{\"id\":1637240411824,\"name\":\"New Group 7\",\"order\":6},{\"id\":1653911834756,\"name\":\"New Group 9\",\"order\":8},{\"id\":1653170267663,\"name\":\"удаление\",\"order\":7}]",
            "jsonViewIdSettings": "[{\"sysName\":\"job_name\"},{\"sysName\":\"company_name\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-08-25T11:52:00Z",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            "folderId": 33700197
        },
        "99105122": {
            "networkID": 13112,
            "sysName": "Responds",
            "name": "Отклики",
            "id": 99105122,
            "dateCreated": "2021-01-04T09:40:26Z",
            "hidden": false,
            "dateHidden": null,
            "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"placeType\",\"dataType\":\"link\",\"name\":\"Формат\",\"id\":\"10531653912006767\",\"link\":\"placeType\",\"group\":\"1653911945771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"job_id\",\"dataType\":\"link\",\"name\":\"Вакансия\",\"id\":\"17681609753231539\",\"link\":\"Jobs\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"job_status\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"jobCompany\",\"dataType\":\"string\",\"name\":\"Название компании работодателя\",\"id\":\"18201609753320275\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_telegram\",\"dataType\":\"string\",\"name\":\"Telegram\",\"id\":\"18501610096811464\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_photo\",\"dataType\":\"file\",\"name\":\"Фото кандидата\",\"id\":\"19891610104119331\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobType\",\"dataType\":\"link\",\"name\":\"График\",\"id\":\"21591609753362987\",\"link\":\"Type2252\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_created\",\"dataType\":\"date\",\"name\":\"Дата подбора вакансии\",\"id\":\"22671609753618893\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"workType\",\"dataType\":\"link\",\"name\":\"Занятость\",\"id\":\"29931653911947141\",\"link\":\"workType\",\"group\":\"1653911945771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"dataType\":\"link\",\"name\":\"Кандидат\",\"id\":\"30541609753246985\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_notification\",\"dataType\":\"date\",\"name\":\"Дата оповещения пользователя\",\"id\":\"31161610956208007\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bodyTG\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"38881643960350054\",\"link\":\"\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_CV\",\"dataType\":\"file\",\"name\":\"Резюме кандидата\",\"id\":\"42111610096763643\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"companylogo\",\"dataType\":\"file\",\"name\":\"Logo\",\"id\":\"43991637830679788\",\"link\":\"\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jsonTG\",\"dataType\":\"json\",\"name\":\"\",\"id\":\"45331643976031596\",\"link\":\"\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobFunctions22\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"45431609753369136\",\"link\":\"functions22\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"about_last_work\",\"dataType\":\"string\",\"name\":\"Место последней работы\",\"id\":\"49251634204880956\",\"link\":null,\"group\":\"1610096745541\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobName\",\"dataType\":\"string\",\"name\":\"Название вакансии\",\"id\":\"51461609753306387\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"schedule\",\"dataType\":\"arrayLink\",\"name\":\"Занятость\",\"id\":\"53991637243593343\",\"link\":\"schedule\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_functions\",\"dataType\":\"arrayLink\",\"name\":\"Функции кандидата\",\"id\":\"57471643893031773\",\"link\":\"functions22\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_process\",\"dataType\":\"date\",\"name\":\"Дата обработки работодателем\",\"id\":\"62351609753664330\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_name\",\"dataType\":\"string\",\"name\":\"Имя кандидата\",\"id\":\"62681610095241918\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"dataType\":\"link\",\"name\":\"Категория вакансий \",\"id\":\"62931657185150116\",\"link\":\"Type2252\",\"group\":\"1653911945771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobCompanySite\",\"dataType\":\"string\",\"name\":\"Сайт работодателя\",\"id\":\"63091609753320998\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobCompanyCity\",\"dataType\":\"arrayLink\",\"name\":\"Cтрана работодателя \",\"id\":\"67721609753322261\",\"link\":\"cities\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_respond\",\"dataType\":\"date\",\"name\":\"Дата отклика\",\"id\":\"68381609753647773\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"MMMM D, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"preferredIndustries\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"68431653912024128\",\"link\":\"preferredIndustries\",\"group\":\"1653911945771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobCompanyDesc\",\"dataType\":\"string\",\"name\":\"Описание компании работодателя\",\"id\":\"70501609753347877\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_insta\",\"dataType\":\"string\",\"name\":\"Instagram\",\"id\":\"73291610114557556\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_fb\",\"dataType\":\"string\",\"name\":\"Facebook\",\"id\":\"76181610114558163\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobFunctions52\",\"dataType\":\"arrayLink\",\"name\":\"Функции\",\"id\":\"77141609753455553\",\"link\":\"functions52\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"lang_disp\",\"dataType\":\"string\",\"name\":\"язык\",\"id\":\"77861637243535311\",\"link\":\"\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logo\",\"dataType\":\"file\",\"name\":\"Логотип\",\"id\":\"81671661428334946\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"jobDescription\",\"dataType\":\"string\",\"name\":\"Описание вакансии\",\"id\":\"87151609753355684\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_phone\",\"dataType\":\"string\",\"name\":\"Телефон кандидата\",\"id\":\"87451610096826236\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"salary_text\",\"dataType\":\"string\",\"name\":\"Salary expectations\",\"id\":\"87951609753577950\",\"link\":\"\",\"group\":\"1609753298511\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Статус (suggested,new,approved,declined)\",\"id\":\"91021609753267495\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"Employer_respond\",\"dataType\":\"string\",\"name\":\"Ответ работодателя\",\"id\":\"91271610110441320\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"review\",\"dataType\":\"string\",\"name\":\"О кандидате\",\"id\":\"92131637828974080\",\"link\":null,\"group\":\"1637243488726\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"experiance\",\"dataType\":\"boolean\",\"name\":\"опыт\",\"id\":\"93201637243490672\",\"link\":\"\",\"group\":\"1637243488726\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"есть опыт\",\"нет опыта\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_lastName\",\"dataType\":\"string\",\"name\":\"Фамилия кандидата\",\"id\":\"93431610096794050\",\"link\":\"\",\"group\":\"1610096745541\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
            "jsonGroupSettings": "[{\"name\":\"Описание вакансии\",\"id\":1609753298511,\"order\":0},{\"name\":\" Инфо о кандидате\",\"id\":1610096745541,\"order\":1},{\"name\":\"New Group 3\",\"id\":1637243488726,\"order\":2},{\"name\":\"New Group 4\",\"id\":1653911945771,\"order\":3}]",
            "jsonViewIdSettings": "[{\"sysName\":\"jobName\"},{\"sysName\":\"jobCompany\"},{\"sysName\":\"user_name\"},{\"sysName\":\"user_lastName\"}]",
            "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
            "jsonNativeIndexSettings": null,
            "indexEnabled": true,
            "lastIndexUpdate": 0,
            "indexName": "",
            "dateChanged": "2022-08-25T11:52:25Z",
            "createBy": 1,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            "folderId": 33700197
        }
    },
    "isSuccessWrite": false,
    "writeError": null,
    "writeResponse": null,
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
            "sysName": "job_description",
            "dataType": "string",
            "name": "Описание вакансии",
            "id": "74961607943694679",
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
            "typeVariable": {},
            "json": false,
            "indexExists": false,
            "linkOrArrayLinkType": false,
            "linkType": false,
            "arrayLink": false,
            "array": false
        },
        {
            "sysName": "job_status",
            "dataType": "string",
            "name": "Статус (техническое поле)",
            "id": "14461609825098470",
            "link": "",
            "group": "0",
            "tags": "",
            "indexing": false,
            "ordering": false,
            "description": null,
            "weight": null,
            "order": 15,
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
        }
    ],
    "quickSearch": "true",
    "httpParams": {}
}

    let exampleTable = {
        "sl": "manageParticipationRequests",
        "pageSize": "100",
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
                        "fieldSysName": "Age",
                        "fetch": [],
                        "sysName": "Age",
                        "name": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "cat_id",
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
                        "sysName": "cat_id",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Categories"
                    },
                    {
                        "fieldSysName": "email",
                        "fetch": [],
                        "sysName": "email",
                        "name": " Электропочта",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "firstName",
                        "fetch": [],
                        "sysName": "firstName",
                        "name": "Имя",
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
                        "fieldSysName": "lastName",
                        "fetch": [],
                        "sysName": "lastName",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "phone",
                        "fetch": [],
                        "sysName": "phone",
                        "name": "Номер телефона",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "school",
                        "fetch": [],
                        "sysName": "school",
                        "name": "Школа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Вес, кг.",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "Age",
                        "fetch": [],
                        "sysName": "Age",
                        "name": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "cat_id",
                        "fetch": [],
                        "sysName": "cat_id",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Categories"
                    },
                    {
                        "fieldSysName": "email",
                        "fetch": [],
                        "sysName": "email",
                        "name": " Электропочта",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "firstName",
                        "fetch": [],
                        "sysName": "firstName",
                        "name": "Имя",
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
                        "fieldSysName": "lastName",
                        "fetch": [],
                        "sysName": "lastName",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "phone",
                        "fetch": [],
                        "sysName": "phone",
                        "name": "Номер телефона",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "school",
                        "fetch": [],
                        "sysName": "school",
                        "name": "Школа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Вес, кг.",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "Age": {
                        "id": "Age",
                        "content": "Возраст",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "cat_id": {
                        "id": "cat_id",
                        "content": "Категория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Categories",
                        "actions": []
                    },
                    "email": {
                        "id": "email",
                        "content": " Электропочта",
                        "type": "field",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "firstName": {
                        "id": "firstName",
                        "content": "Имя",
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
                    "lastName": {
                        "id": "lastName",
                        "content": "Фамилия",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "phone": {
                        "id": "phone",
                        "content": "Номер телефона",
                        "type": "field",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "school": {
                        "id": "school",
                        "content": "Школа",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "weight": {
                        "id": "weight",
                        "content": "Вес, кг.",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "Age": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "cat_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "manageCategories"
                    },
                    "email": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "firstName": {
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
                    "lastName": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "phone": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "school": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "weight": {
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
                            "Age",
                            "cat_id",
                            "email",
                            "firstName",
                            "id",
                            "lastName",
                            "phone",
                            "school",
                            "weight"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "Age": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "cat_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "manageCategories",
                    "searchData": [
                        {
                            "key": "e092e123-df0e-469c-85eb-41cb138e404a",
                            "value": "Мужчины до 62 кг."
                        },
                        {
                            "key": "12e7af99-c307-41d7-b8e3-e22d911455f4",
                            "value": "Мужчины до 70 кг."
                        },
                        {
                            "key": "d139a7ec-a9d6-4ef2-9914-49d17790b90d",
                            "value": "Мужчины до 85 кг."
                        },
                        {
                            "key": "528bacd2-62eb-40a1-aec3-62c6a8dddbc4",
                            "value": "Мужчины до 95 кг."
                        },
                        {
                            "key": "246e702c-936c-49b0-893f-128ce4b0a17a",
                            "value": "Мужчины абс."
                        },
                        {
                            "key": "9e3703b6-3834-4d32-b5b3-c5bc570e49a5",
                            "value": "Женщины до 60 кг."
                        },
                        {
                            "key": "8cfd3eb8-8ec4-4408-b8e8-4c9bed0e11c8",
                            "value": "Женщины абс."
                        }
                    ]
                },
                "email": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "firstName": {
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
                "lastName": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "phone": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "school": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "weight": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "Age",
                        "fetch": [],
                        "sysName": "Age",
                        "name": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "cat_id",
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
                        "sysName": "cat_id",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Categories"
                    },
                    {
                        "fieldSysName": "email",
                        "fetch": [],
                        "sysName": "email",
                        "name": " Электропочта",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "firstName",
                        "fetch": [],
                        "sysName": "firstName",
                        "name": "Имя",
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
                        "fieldSysName": "lastName",
                        "fetch": [],
                        "sysName": "lastName",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "phone",
                        "fetch": [],
                        "sysName": "phone",
                        "name": "Номер телефона",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "school",
                        "fetch": [],
                        "sysName": "school",
                        "name": "Школа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Вес, кг.",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "Age",
                        "fetch": [],
                        "sysName": "Age",
                        "name": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "cat_id",
                        "fetch": [],
                        "sysName": "cat_id",
                        "name": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Categories"
                    },
                    {
                        "fieldSysName": "email",
                        "fetch": [],
                        "sysName": "email",
                        "name": " Электропочта",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "firstName",
                        "fetch": [],
                        "sysName": "firstName",
                        "name": "Имя",
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
                        "fieldSysName": "lastName",
                        "fetch": [],
                        "sysName": "lastName",
                        "name": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "phone",
                        "fetch": [],
                        "sysName": "phone",
                        "name": "Номер телефона",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "school",
                        "fetch": [],
                        "sysName": "school",
                        "name": "Школа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Вес, кг.",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "Age": {
                        "id": "Age",
                        "content": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "cat_id": {
                        "id": "cat_id",
                        "content": "Категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Categories"
                    },
                    "email": {
                        "id": "email",
                        "content": " Электропочта",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "firstName": {
                        "id": "firstName",
                        "content": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
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
                    "lastName": {
                        "id": "lastName",
                        "content": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "phone": {
                        "id": "phone",
                        "content": "Номер телефона",
                        "dataType": "string",
                        "format": "phone",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "school": {
                        "id": "school",
                        "content": "Школа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "weight": {
                        "id": "weight",
                        "content": "Вес, кг.",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "Age": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "cat_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "email": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "firstName": {
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
                    "lastName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "phone": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "school": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "weight": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "lastName",
                    "firstName",
                    "cat_id",
                    "weight",
                    "school",
                    "Age",
                    "email",
                    "id",
                    "phone"
                ]
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "Age",
                "name": "Возраст",
                "dataType": "number",
                "id": "67461662292221257",
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
                "sysName": "cat_id",
                "name": "Категория",
                "dataType": "link",
                "id": "88291663411323412",
                "link": "Categories",
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
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "email",
                "name": " Электропочта",
                "dataType": "string",
                "id": "81671662292185465",
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
                "format": "email",
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
                "sysName": "firstName",
                "name": "Имя",
                "dataType": "string",
                "id": "83811662292152973",
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
                "sysName": "lastName",
                "name": "Фамилия",
                "dataType": "string",
                "id": "33031662292146402",
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
                "sysName": "phone",
                "name": "Номер телефона",
                "dataType": "string",
                "id": "39111662292175533",
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
                "format": "phone",
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
                "sysName": "school",
                "name": "Школа",
                "dataType": "string",
                "id": "78291662292194098",
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
                "sysName": "weight",
                "name": "Вес, кг.",
                "dataType": "decimal",
                "id": "84471662292164433",
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
                "school": "Cheng Long",
                "weight": 135,
                "email": "nikolaevnick@yandex.ru",
                "cat_id": {
                    "name": "Мужчины абс.",
                    "id": "246e702c-936c-49b0-893f-128ce4b0a17a"
                },
                "lastName": "Николаев",
                "firstName": "Николай",
                "id": "6c0f009a-96be-411a-b5b2-85ca29dcbbbe",
                "Age": 37,
                "phone": "79036211282"
            },
            {
                "school": "Ян",
                "weight": 120,
                "email": "79265299797@yandex.ru",
                "cat_id": {
                    "name": "Мужчины абс.",
                    "id": "246e702c-936c-49b0-893f-128ce4b0a17a"
                },
                "lastName": "Лебедев",
                "firstName": "Антон",
                "id": "33efc974-3159-4eb8-a976-6cc73727e180",
                "Age": 40,
                "phone": "79265299797"
            },
            {
                "school": "Cheng Long",
                "weight": 115,
                "email": "Nikif87@yandex.ru",
                "lastName": "Никифоров",
                "firstName": "Денис",
                "id": "8a9c70b1-124a-458f-8e4f-ac9284bc7f75",
                "Age": 35,
                "phone": "89268441109",
                "cat_id": ""
            },
            {
                "school": "АКБИ",
                "weight": 95,
                "email": "igor20034@gmail.com",
                "lastName": "Ковалев",
                "firstName": "Игорь",
                "id": "5c5ade11-0dd3-4b86-9d24-f74c1453182b",
                "Age": 19,
                "phone": "89851427251",
                "cat_id": ""
            },
            {
                "weight": 90,
                "email": "Obzzzen@gmail.com",
                "lastName": "Сирош",
                "firstName": "Влад",
                "id": "fedba457-5bfc-4799-8854-78ef8ad94859",
                "Age": 29,
                "phone": "89370930343",
                "cat_id": "",
                "school": ""
            },
            {
                "school": "Cheng Long",
                "weight": 89,
                "email": "Sidorov.taiji@gmailcom",
                "lastName": "Сидоров",
                "firstName": "Владимир",
                "id": "5bfef3b4-bf7a-41ee-8647-4af96dbed377",
                "Age": 45,
                "phone": "79689260389",
                "cat_id": ""
            },
            {
                "school": "Молодой дракон",
                "weight": 87,
                "email": "mihaillepeschkin@yandex.ru",
                "lastName": "Лепёшкин",
                "firstName": "Михаил",
                "id": "5704a427-28e4-4566-ab02-07081a85fec3",
                "Age": 16,
                "phone": "89154836522",
                "cat_id": ""
            },
            {
                "school": "Хануман ",
                "weight": 85,
                "email": "g.bespoyasniy@gmail.com ",
                "lastName": "Беспоясный",
                "firstName": "Глеб",
                "id": "7a358b3b-0b28-4b60-94ae-bf4fcff66fff",
                "Age": 24,
                "phone": "79154486094",
                "cat_id": ""
            },
            {
                "school": "Cheng Long",
                "weight": 85,
                "email": "gt.taiji@gmail.com",
                "lastName": "Тюляев",
                "firstName": "Георгий",
                "id": "307c8aae-01af-4154-86ac-9360e6b1c5ce",
                "Age": 29,
                "phone": "79262075652",
                "cat_id": ""
            },
            {
                "school": "Федерация УШУ г. Зеленодольска Республика Татарстан",
                "weight": 84,
                "email": "roman429916@mail.ru",
                "lastName": "Курятков",
                "firstName": "Роман",
                "id": "783f31f0-2ca8-43d5-aec7-f4fb3942af2d",
                "Age": 46,
                "phone": "89033429916",
                "cat_id": ""
            },
            {
                "school": "Парящий дракон",
                "weight": 82,
                "email": "Bulat37@mail.ru",
                "lastName": "Равилов",
                "firstName": "Булат",
                "id": "e4971275-cfbd-4e02-9ab2-e5096efdd52d",
                "Age": 39,
                "phone": "89269229827",
                "cat_id": ""
            },
            {
                "school": "Чен Лун",
                "weight": 78,
                "email": "a.yurlov@mail.ru",
                "lastName": "Юрлов",
                "firstName": "Александр",
                "id": "1b4dc83d-5a5d-485b-9d8b-9b24ebb24188",
                "Age": 44,
                "phone": "89154496455",
                "cat_id": ""
            },
            {
                "school": "Cheng Long",
                "weight": 74,
                "email": "antonjarall@mail.ru",
                "lastName": "Антонов",
                "firstName": "Антон",
                "id": "9b7497cb-2aaf-4530-b1a4-e4699e963f19",
                "Age": 29,
                "phone": "89775749918",
                "cat_id": ""
            },
            {
                "school": "Hanuman",
                "weight": 69,
                "lastName": "Чумаченко",
                "firstName": "Дмитрий",
                "id": "32b6836f-15e6-4a46-a0d3-e1b81e264570",
                "Age": 34,
                "phone": "89055227033",
                "cat_id": "",
                "email": ""
            },
            {
                "school": "Cheng Long",
                "weight": 69,
                "email": "ver069@bk.ru",
                "lastName": "Веретенников",
                "firstName": "Роман",
                "id": "bcafc238-7627-4636-90a4-fa4b8d0c6a19",
                "Age": 39,
                "phone": "89189105421",
                "cat_id": ""
            },
            {
                "school": "Содружество воинских духовных традиций",
                "weight": 69,
                "email": "voin9uha@gmail.com",
                "lastName": "Терентьев",
                "firstName": "Данил",
                "id": "e1ee74c2-3b38-4452-952c-7e43a0951ba7",
                "Age": 29,
                "phone": "89852186796",
                "cat_id": ""
            },
            {
                "school": "Парящий дракон - Калининград",
                "weight": 69,
                "email": "Shenlungdao39@mail.ru",
                "lastName": "Аскаров",
                "firstName": "Андрей",
                "id": "5242cf16-a4da-4d8a-bf60-a782defe6833",
                "Age": 37,
                "phone": "89097925098",
                "cat_id": ""
            },
            {
                "school": "клуб Кокон, школа Илицюань",
                "weight": 67,
                "email": "dumkaptaha@gmail.com",
                "lastName": "Балицкая",
                "firstName": "Екатерина",
                "id": "2e0a839b-3a61-4b2c-9bb5-1c13f64d569f",
                "Age": 37,
                "phone": "89859724852",
                "cat_id": ""
            },
            {
                "school": "Cheng Long / АКБИ",
                "weight": 67,
                "email": "Wulava@gmail.com",
                "lastName": "Лавлинский",
                "firstName": "Вадим",
                "id": "26611a73-db73-4940-ab34-fa27d36d3dbe",
                "Age": 30,
                "phone": "79175343717",
                "cat_id": ""
            },
            {
                "school": "Школа Ушу Максима Пулатова",
                "weight": 66,
                "email": "wushu_pulatov_school@mail.ru",
                "lastName": "Пулатов",
                "firstName": "Максим",
                "id": "f227d23d-1b5d-4706-aa80-34242b443e51",
                "Age": 31,
                "phone": "79011915069",
                "cat_id": ""
            },
            {
                "school": " Fight Nights",
                "weight": 65,
                "email": "inhim33@yandex.ru",
                "lastName": "Белозеров",
                "firstName": "Олег",
                "id": "c051c06c-f6ee-468d-82dd-27106209e3ec",
                "Age": 24,
                "phone": "79099089886",
                "cat_id": ""
            },
            {
                "school": "Молодой Дракон",
                "weight": 64,
                "email": "obench@yandex.ru",
                "lastName": "Бенч",
                "firstName": "Оксана",
                "id": "522c5175-f89c-46bb-bd15-9878c54f0e03",
                "Age": 43,
                "phone": "74955422628",
                "cat_id": ""
            },
            {
                "school": "Брандер",
                "weight": 61,
                "email": "Midawad.go@gmail.com",
                "lastName": "Фатин",
                "firstName": "Вадим",
                "id": "a2101270-5edd-48b6-86f4-35269c06f5ed",
                "Age": 30,
                "phone": "89099888353",
                "cat_id": ""
            },
            {
                "school": "Содружество Воинских духовных традиций ",
                "weight": 60,
                "email": "malax_ov@mail.ru",
                "lastName": "Малахов",
                "firstName": "Сергей",
                "id": "91e9efec-d2fd-4558-92bf-42a62a570109",
                "Age": 34,
                "phone": "89998357619",
                "cat_id": ""
            },
            {
                "school": "АКБИ",
                "weight": 58,
                "lastName": "Бакотина",
                "firstName": "Ксения",
                "id": "ccc0a087-aac1-44f3-834c-5493b9818a13",
                "Age": 15,
                "phone": "89162186320",
                "cat_id": "",
                "email": ""
            },
            {
                "school": "Сергиев Посад",
                "weight": 56,
                "email": "marinazayzay@gmail.com",
                "lastName": "Никитина",
                "firstName": "Марина",
                "id": "94c4976c-91c5-4262-b9d0-332de551705f",
                "Age": 31,
                "phone": "89104032227",
                "cat_id": ""
            },
            {
                "school": "Школа традиционного ушу \"Лунфэн\"",
                "weight": 56,
                "email": "beygoshut@gmail.com",
                "lastName": "Гаврилов",
                "firstName": "Михаил",
                "id": "ee640364-2b93-417b-91d9-60d8ee9f465d",
                "Age": 18,
                "phone": "89151295740",
                "cat_id": ""
            },
            {
                "school": "Cheng Long",
                "weight": 55,
                "email": "batyr_minkhanov@mail.ru",
                "lastName": "Минханов",
                "firstName": "Батыр",
                "id": "5c587368-5d11-4483-bd7e-7a4ec2e4f9cc",
                "Age": 31,
                "phone": "89030010234",
                "cat_id": ""
            },
            {
                "school": "WeGym Синица (тайцзицюань)",
                "weight": 51,
                "email": "vadimponomarev.n@gmail.com",
                "lastName": "Пономарёв ",
                "firstName": "Вадим",
                "id": "fbe4f602-2d46-46af-bed8-1755e6f92280",
                "Age": 51,
                "phone": "89263866731",
                "cat_id": ""
            },
            {
                "school": "Практика Чэнь",
                "weight": 50,
                "email": "Lashkovae@mail.ru",
                "lastName": "Лашкова",
                "firstName": "Екатерина",
                "id": "9b1e0e8b-6e24-40c9-be73-f2f5bed1bbc0",
                "Age": 48,
                "phone": "79219179439",
                "cat_id": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "Age",
                99132583
            ],
            [
                "cat_id.id",
                99019611
            ],
            [
                "cat_id.name",
                99019611
            ],
            [
                "email",
                99132583
            ],
            [
                "firstName",
                99132583
            ],
            [
                "id",
                99132583
            ],
            [
                "lastName",
                99132583
            ],
            [
                "phone",
                99132583
            ],
            [
                "school",
                99132583
            ],
            [
                "weight",
                99132583
            ]
        ],
        "writeFields": [
            "Age",
            "cat_id",
            "email",
            "firstName",
            "id",
            "lastName",
            "phone",
            "school",
            "weight"
        ],
        "structures": {
            "99019611": {
                "networkID": 9312,
                "sysName": "Categories",
                "name": "Категории",
                "id": 99019611,
                "dateCreated": "2021-09-05T12:37:13Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"isDelete\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"23961630845476759\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название категории\",\"id\":\"34241630845441302\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"participants\",\"dataType\":\"number\",\"name\":\"Количество участников\",\"id\":\"83591630845451672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"youtubeLiveStream\",\"dataType\":\"string\",\"name\":\"Live-видео\",\"id\":\"88621662968088719\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"youTube\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-09-12T07:35:07Z",
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33657238
            },
            "99132583": {
                "networkID": 9312,
                "sysName": "participation_requests",
                "name": "Заявки на участие",
                "id": 99132583,
                "dateCreated": "2022-09-04T11:48:32Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"33031662292146402\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Номер телефона\",\"id\":\"39111662292175533\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"Age\",\"dataType\":\"number\",\"name\":\"Возраст\",\"id\":\"67461662292221257\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"school\",\"dataType\":\"string\",\"name\":\"Школа\",\"id\":\"78291662292194098\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\" Электропочта\",\"id\":\"81671662292185465\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"83811662292152973\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"Вес, кг.\",\"id\":\"84471662292164433\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cat_id\",\"dataType\":\"link\",\"name\":\"Категория\",\"id\":\"88291663411323412\",\"link\":\"Categories\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"lastName\"},{\"sysName\":\"firstName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-09-17T10:42:18Z",
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
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 0
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "Age",
                "name": "Возраст",
                "dataType": "number",
                "id": "67461662292221257",
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
                "sysName": "cat_id",
                "name": "Категория",
                "dataType": "link",
                "id": "88291663411323412",
                "link": "Categories",
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
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "email",
                "name": " Электропочта",
                "dataType": "string",
                "id": "81671662292185465",
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
                "format": "email",
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
                "sysName": "firstName",
                "name": "Имя",
                "dataType": "string",
                "id": "83811662292152973",
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
                "sysName": "lastName",
                "name": "Фамилия",
                "dataType": "string",
                "id": "33031662292146402",
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
                "sysName": "phone",
                "name": "Номер телефона",
                "dataType": "string",
                "id": "39111662292175533",
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
                "format": "phone",
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
                "sysName": "school",
                "name": "Школа",
                "dataType": "string",
                "id": "78291662292194098",
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
                "sysName": "weight",
                "name": "Вес, кг.",
                "dataType": "decimal",
                "id": "84471662292164433",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "array": false
            }
        ],
        "quickSearch": "true",
        "httpParams": {}
    }

    let authExample = {
        isAuth: false,
        //role: "admin",
        //token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        //user: "manager"
    }

    let exampleForm = {
        "sl": "putTagToUser",
        "formName": "Добавление Тэга",
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
                        "fieldSysName": "Id",
                        "fetch": [],
                        "sysName": "Id",
                        "name": "Id",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "Id",
                        "fetch": [],
                        "sysName": "Id",
                        "name": "Id",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "tag",
                        "fetch": [],
                        "sysName": "tag",
                        "name": "Тэги",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "Id": {
                        "id": "Id",
                        "content": "Id",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "tag": {
                        "id": "tag",
                        "content": "Тэги",
                        "type": "field",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "Id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tag": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "defaultValue": "test",
                        "disableEditing": false
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "Id",
                            "tag"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ]
            },
            "fields": {
                "Id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tag": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "defaultValue": "test",
                    "disableEditing": false
                }
            },
            "useEditing": true,
            "editObject": "url"
        },
        "fileds": [
            {
                "sysName": "Id",
                "dataType": "string",
                "name": "Id",
                "id": "8",
                "link": "",
                "group": "94544219",
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
                "groupName": "Legacy fields (retained for backward compatibility)",
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "tag",
                "dataType": "array",
                "name": "Тэги",
                "id": "26921663168756688",
                "link": "",
                "group": "94544219",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 23,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": true
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "Id": "1491084555"
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
                            <FpsCards locale="ESP" data={cardActions} auth={authExample} currentBP='desktop' />
                            <hr />
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