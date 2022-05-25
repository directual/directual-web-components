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
        "sl": "myCart",
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
                        "fieldSysName": "good_in_order_ids",
                        "fetch": [
                            {
                                "fieldSysName": "good",
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
                                "fieldSysName": "price",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "quantity",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "good_in_order_ids",
                        "name": "Goods",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goodInTheOrder"
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
                        "fieldSysName": "pay_action",
                        "fetch": [],
                        "sysName": "pay_action",
                        "name": "Place order",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "price_displayed",
                        "fetch": [],
                        "sysName": "price_displayed",
                        "name": "Total",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "good_in_order_ids",
                        "fetch": [],
                        "sysName": "good_in_order_ids",
                        "name": "Goods",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "goodInTheOrder"
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
                    "good_in_order_ids": {
                        "id": "good_in_order_ids",
                        "content": "Goods",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "goodInTheOrder",
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
                    "pay_action": {
                        "id": "pay_action",
                        "content": "Place order",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "price_displayed": {
                        "id": "price_displayed",
                        "content": "Total",
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
                    "good_in_order_ids": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "veiwOption": "cart",
                        "cartView": {
                            "title": true,
                            "titleField": "good",
                            "quantity": true,
                            "price": true,
                            "quantityField": "quantity",
                            "priceField": "price",
                            "priceUnits": "US$",
                            "deleteOn": true
                        },
                        "configureLinkedCard": {
                            "fields": {
                                "good": {
                                    "id": "good",
                                    "content": "Good",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "price": {
                                    "id": "price",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "quantity": {
                                    "id": "quantity",
                                    "content": "Quantity",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": "positiveNum",
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "good": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "price": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "quantity": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "good",
                                "price",
                                "quantity"
                            ]
                        }
                    },
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sum": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "price_displayed": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "pay_action": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsButton": true,
                        "button": {
                            "icon": "done",
                            "type": "accent",
                            "title": "Place order"
                        }
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "good_in_order_ids",
                            "id",
                            "price_displayed",
                            "pay_action"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "good_in_order_ids": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "veiwOption": "cart",
                    "cartView": {
                        "title": true,
                        "titleField": "good",
                        "quantity": true,
                        "price": true,
                        "quantityField": "quantity",
                        "priceField": "price",
                        "priceUnits": "US$",
                        "deleteOn": true
                    },
                    "configureLinkedCard": {
                        "fields": {
                            "good": {
                                "id": "good",
                                "content": "Good",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "price": {
                                "id": "price",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            },
                            "quantity": {
                                "id": "quantity",
                                "content": "Quantity",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": "positiveNum",
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "good": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "price": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "quantity": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "good",
                            "price",
                            "quantity"
                        ]
                    }
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sum": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "price_displayed": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "pay_action": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true,
                    "button": {
                        "icon": "done",
                        "type": "accent",
                        "title": "Place order"
                    }
                }
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "good_in_order_ids",
                "name": "Goods",
                "dataType": "arrayLink",
                "id": "69201653317565747",
                "link": "goodInTheOrder",
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
                "array": false,
                "typeVariable": {},
                "arrayLink": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
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
                "array": false,
                "typeVariable": {},
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "indexExists": false
            },
            {
                "sysName": "pay_action",
                "name": "Place order",
                "dataType": "string",
                "id": "27481653396557905",
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
                "format": "webLink",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "indexExists": false
            },
            {
                "sysName": "price_displayed",
                "name": "Total",
                "dataType": "string",
                "id": "50091653393659371",
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
                "array": false,
                "typeVariable": {},
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "indexExists": false
            }
        ],
        "data": [
            {
                "pay_action": "https://stripe.com",
                "price_displayed": "60 000 US$",
                "good_in_order_ids": [
                    {
                        "quantity": 2,
                        "good": {
                            "title": "Mercedes 280SL"
                        },
                        "price": 30000,
                        "id": "262186552ccdd0f29c1ff53041cbc48f"
                    }
                ],
                "id": "50d3b689-8d08-4bb1-9f0b-9f10b6c22286"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "good_in_order_ids.good.title",
                99107175
            ],
            [
                "good_in_order_ids.price",
                99107177
            ],
            [
                "good_in_order_ids.quantity",
                99107177
            ],
            [
                "id",
                99107176
            ],
            [
                "pay_action",
                99107176
            ],
            [
                "price_displayed",
                99107176
            ]
        ],
        "writeFields": [
            "good_in_order_ids",
            "id"
        ],
        "structures": {
            "99107175": {
                "networkID": 13182,
                "sysName": "goods",
                "name": "goods",
                "id": 99107175,
                "dateCreated": "2022-05-23T14:49:52Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"25651653317510996\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"10491653331482505\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"price\",\"name\":\"Price, US$\",\"dataType\":\"decimal\",\"id\":\"37111653317511499\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"price_displayed\",\"name\":\"Price\",\"dataType\":\"string\",\"id\":\"71751653332297116\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"image\",\"name\":\"Images\",\"dataType\":\"file\",\"id\":\"85971653317512108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"merchant_id\",\"name\":\"Merchant\",\"dataType\":\"link\",\"id\":\"83931653331400591\",\"link\":\"merchants\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"indexExists\":false},{\"sysName\":\"is_hidden\",\"name\":\"Hidden?\",\"dataType\":\"boolean\",\"id\":\"32521653331455301\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"@who\",\"name\":\"who changed\",\"dataType\":\"string\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"@dateCreated\",\"name\":\"date created\",\"dataType\":\"date\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"@dateChanged\",\"name\":\"date changed\",\"dataType\":\"date\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-05-23T18:58:35Z",
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
                    "array": false,
                    "typeVariable": {},
                    "arrayLink": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "indexExists": false
                },
                "folderId": 33701275
            },
            "99107176": {
                "networkID": 13182,
                "sysName": "carts",
                "name": "carts",
                "id": 99107176,
                "dateCreated": "2022-05-23T14:50:14Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"name\":\"User\",\"dataType\":\"string\",\"id\":\"18851653317560163\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"sum\",\"name\":\"Total, US$\",\"dataType\":\"decimal\",\"id\":\"27441653319190990\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"pay_action\",\"name\":\"Place order\",\"dataType\":\"string\",\"id\":\"27481653396557905\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"price_displayed\",\"name\":\"Total\",\"dataType\":\"string\",\"id\":\"50091653393659371\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"good_in_order_ids\",\"name\":\"Goods\",\"dataType\":\"arrayLink\",\"id\":\"69201653317565747\",\"link\":\"goodInTheOrder\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"price_displayed\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-05-24T12:49:35Z",
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
                    "array": false,
                    "typeVariable": {},
                    "arrayLink": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "indexExists": false
                },
                "folderId": 33701275
            },
            "99107177": {
                "networkID": 13182,
                "sysName": "goodInTheOrder",
                "name": "good-in-the-order",
                "id": 99107177,
                "dateCreated": "2022-05-23T14:50:54Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"cart_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"30501653395336579\",\"link\":\"carts\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"indexExists\":false},{\"sysName\":\"price\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"70191653393641790\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"good\",\"name\":\"Good\",\"dataType\":\"link\",\"id\":\"74701653319743249\",\"link\":\"goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"indexExists\":false},{\"sysName\":\"quantity\",\"name\":\"Quantity\",\"dataType\":\"number\",\"id\":\"86131653319772894\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"good\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-05-24T12:35:58Z",
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
                    "array": false,
                    "typeVariable": {},
                    "arrayLink": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "indexExists": false
                },
                "folderId": 33701275
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "good_in_order_ids",
                "name": "Goods",
                "dataType": "arrayLink",
                "id": "69201653317565747",
                "link": "goodInTheOrder",
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
                "array": false,
                "typeVariable": {},
                "arrayLink": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
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
                "array": false,
                "typeVariable": {},
                "arrayLink": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "indexExists": false
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

    let exampleTable = {
        "sl": "allListings",
        "pageSize": "7",
        "headerField": null,
        "params": {
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "ArtNowArtwork_id",
                        "fetch": [],
                        "sysName": "ArtNowArtwork_id",
                        "name": "ID картины на ArtNow",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowDiscountOn",
                        "fetch": [],
                        "sysName": "ArtNowDiscountOn",
                        "name": "Скидка на ArtNow",
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
                                "Скидка",
                                "Обычная цена"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "ArtNowDiscount_id",
                        "fetch": [],
                        "sysName": "ArtNowDiscount_id",
                        "name": "Скидка на ArtNow (ID и срок акции)",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "artnow_discount"
                    },
                    {
                        "fieldSysName": "ArtNowPrice",
                        "fetch": [],
                        "sysName": "ArtNowPrice",
                        "name": "Цена для ArtNow",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowPublishTime",
                        "fetch": [],
                        "sysName": "ArtNowPublishTime",
                        "name": "Время публикации на ArtNow",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowResponse",
                        "fetch": [],
                        "sysName": "ArtNowResponse",
                        "name": "Ответ сервера",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowStatus",
                        "fetch": [],
                        "sysName": "ArtNowStatus",
                        "name": "Статус  на ArtNow",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "placesStatus"
                    },
                    {
                        "fieldSysName": "ArtNowStatusColor",
                        "fetch": [],
                        "sysName": "ArtNowStatusColor",
                        "name": "Цвет (статус)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNow_url",
                        "fetch": [],
                        "sysName": "ArtNow_url",
                        "name": "ArtNow",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "active",
                        "fetch": [],
                        "sysName": "active",
                        "name": "Активная карточка",
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
                                "Активная",
                                "Архивная"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "artfinderStatusColor",
                        "fetch": [],
                        "sysName": "artfinderStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artfinder_url",
                        "fetch": [],
                        "sysName": "artfinder_url",
                        "name": "ArtFinder",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artist",
                        "fetch": [],
                        "sysName": "artist",
                        "name": "Автор",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "artists"
                    },
                    {
                        "fieldSysName": "artmajeurStatusColor",
                        "fetch": [],
                        "sysName": "artmajeurStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artmajeur_url",
                        "fetch": [],
                        "sysName": "artmajeur_url",
                        "name": "Artmajeur",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artworkStatus",
                        "fetch": [],
                        "sysName": "artworkStatus",
                        "name": "Статус картины",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Status"
                    },
                    {
                        "fieldSysName": "artworkStatusColor",
                        "fetch": [],
                        "sysName": "artworkStatusColor",
                        "name": "Статус картины (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayItem_id",
                        "fetch": [],
                        "sysName": "ebayItem_id",
                        "name": "ID лота на eBay",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayStatus",
                        "fetch": [],
                        "sysName": "ebayStatus",
                        "name": "Статус на сайте",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "placesStatus"
                    },
                    {
                        "fieldSysName": "ebayStatusColor",
                        "fetch": [],
                        "sysName": "ebayStatusColor",
                        "name": "Статус на сайте (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebay_account",
                        "fetch": [],
                        "sysName": "ebay_account",
                        "name": "Аккаунт eBay",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebay_url",
                        "fetch": [],
                        "sysName": "ebay_url",
                        "name": "eBay",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayauctionStatusColor",
                        "fetch": [],
                        "sysName": "ebayauctionStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayauction_url",
                        "fetch": [],
                        "sysName": "ebayauction_url",
                        "name": "eBay Auction",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "etsyStatusColor",
                        "fetch": [],
                        "sysName": "etsyStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "etsy_url",
                        "fetch": [],
                        "sysName": "etsy_url",
                        "name": "Etsy",
                        "dataType": "string",
                        "format": "webLink",
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
                        "fieldSysName": "listingLog",
                        "fetch": [
                            {
                                "fieldSysName": "api_response",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "event",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "places",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "value",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "listingLog",
                        "name": "Лог",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "listingLog"
                    },
                    {
                        "fieldSysName": "meshokBold",
                        "fetch": [],
                        "sysName": "meshokBold",
                        "name": "Выделение жирным (Y/N)",
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
                        "fieldSysName": "meshokDescription",
                        "fetch": [],
                        "sysName": "meshokDescription",
                        "name": "Описание лота",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokFree",
                        "fetch": [],
                        "sysName": "meshokFree",
                        "name": "Бесплатный лот",
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
                                "Бесплатный лот",
                                "Обычный лот"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "meshokItem_id",
                        "fetch": [],
                        "sysName": "meshokItem_id",
                        "name": "ID лота на Мешке",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokLongevity",
                        "fetch": [],
                        "sysName": "meshokLongevity",
                        "name": "Продолжительность торгов в днях",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokPrice",
                        "fetch": [],
                        "sysName": "meshokPrice",
                        "name": "Цена на Мешке (купить сейчас)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokPublishTime",
                        "fetch": [],
                        "sysName": "meshokPublishTime",
                        "name": "Время публикации на Мешке",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokRecommended",
                        "fetch": [],
                        "sysName": "meshokRecommended",
                        "name": "Рекомендуемый (Y/N)",
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
                        "fieldSysName": "meshokRespond",
                        "fetch": [],
                        "sysName": "meshokRespond",
                        "name": "Ответ сервера",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokSaleType",
                        "fetch": [],
                        "sysName": "meshokSaleType",
                        "name": "Тип продажи (Sale или Auction)",
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
                                "Sale",
                                "Auction"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "meshokStartPrice",
                        "fetch": [],
                        "sysName": "meshokStartPrice",
                        "name": "Аукционная цена",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokStatus",
                        "fetch": [],
                        "sysName": "meshokStatus",
                        "name": "Статус на Мешке",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "placesStatus"
                    },
                    {
                        "fieldSysName": "meshokStatusColor",
                        "fetch": [],
                        "sysName": "meshokStatusColor",
                        "name": "Статус (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokTitle",
                        "fetch": [],
                        "sysName": "meshokTitle",
                        "name": "Заголовок лота (max 100)",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshok_url",
                        "fetch": [],
                        "sysName": "meshok_url",
                        "name": " Мешок",
                        "dataType": "string",
                        "format": "webLink",
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
                        "link": ""
                    },
                    {
                        "fieldSysName": "ozonStatusColor",
                        "fetch": [],
                        "sysName": "ozonStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ozon_url",
                        "fetch": [],
                        "sysName": "ozon_url",
                        "name": "Озон",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "pictures",
                        "fetch": [],
                        "sysName": "pictures",
                        "name": "Изображения",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "short_description",
                        "fetch": [],
                        "sysName": "short_description",
                        "name": "Описание",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "sku",
                        "fetch": [
                            {
                                "fieldSysName": "cost",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paid",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "warehouse",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "sku",
                        "name": "Артикул",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "artworks"
                    },
                    {
                        "fieldSysName": "stickerColor",
                        "fetch": [],
                        "sysName": "stickerColor",
                        "name": "Стикер (подсветка)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stickers",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "sticker",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "stickers",
                        "name": "Стикеры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "listingStickers"
                    },
                    {
                        "fieldSysName": "thumbnail",
                        "fetch": [],
                        "sysName": "thumbnail",
                        "name": "Миниатюра",
                        "dataType": "file",
                        "format": "image",
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
                        "fieldSysName": "stickers",
                        "fetch": [],
                        "sysName": "stickers",
                        "name": "Стикеры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "listingStickers"
                    }
                ],
                "fields": {
                    "ArtNowArtwork_id": {
                        "id": "ArtNowArtwork_id",
                        "content": "ID картины на ArtNow",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ArtNowDiscountOn": {
                        "id": "ArtNowDiscountOn",
                        "content": "Скидка на ArtNow",
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
                                "Скидка",
                                "Обычная цена"
                            ],
                            "validWeekDays": {
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
                    "ArtNowDiscount_id": {
                        "id": "ArtNowDiscount_id",
                        "content": "Скидка на ArtNow (ID и срок акции)",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "artnow_discount",
                        "actions": []
                    },
                    "ArtNowPrice": {
                        "id": "ArtNowPrice",
                        "content": "Цена для ArtNow",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ArtNowPublishTime": {
                        "id": "ArtNowPublishTime",
                        "content": "Время публикации на ArtNow",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ArtNowResponse": {
                        "id": "ArtNowResponse",
                        "content": "Ответ сервера",
                        "type": "field",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ArtNowStatus": {
                        "id": "ArtNowStatus",
                        "content": "Статус  на ArtNow",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "placesStatus",
                        "actions": []
                    },
                    "ArtNowStatusColor": {
                        "id": "ArtNowStatusColor",
                        "content": "Цвет (статус)",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ArtNow_url": {
                        "id": "ArtNow_url",
                        "content": "ArtNow",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "active": {
                        "id": "active",
                        "content": "Активная карточка",
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
                                "Активная",
                                "Архивная"
                            ],
                            "validWeekDays": {
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
                    "artfinderStatusColor": {
                        "id": "artfinderStatusColor",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "artfinder_url": {
                        "id": "artfinder_url",
                        "content": "ArtFinder",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "artist": {
                        "id": "artist",
                        "content": "Автор",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "artists",
                        "actions": []
                    },
                    "artmajeurStatusColor": {
                        "id": "artmajeurStatusColor",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "artmajeur_url": {
                        "id": "artmajeur_url",
                        "content": "Artmajeur",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "artworkStatus": {
                        "id": "artworkStatus",
                        "content": "Статус картины",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Status",
                        "actions": []
                    },
                    "artworkStatusColor": {
                        "id": "artworkStatusColor",
                        "content": "Статус картины (цвет)",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ebayItem_id": {
                        "id": "ebayItem_id",
                        "content": "ID лота на eBay",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ebayStatus": {
                        "id": "ebayStatus",
                        "content": "Статус на сайте",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "placesStatus",
                        "actions": []
                    },
                    "ebayStatusColor": {
                        "id": "ebayStatusColor",
                        "content": "Статус на сайте (цвет)",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ebay_account": {
                        "id": "ebay_account",
                        "content": "Аккаунт eBay",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ebay_url": {
                        "id": "ebay_url",
                        "content": "eBay",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ebayauctionStatusColor": {
                        "id": "ebayauctionStatusColor",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ebayauction_url": {
                        "id": "ebayauction_url",
                        "content": "eBay Auction",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "etsyStatusColor": {
                        "id": "etsyStatusColor",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "etsy_url": {
                        "id": "etsy_url",
                        "content": "Etsy",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
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
                    "listingLog": {
                        "id": "listingLog",
                        "content": "Лог",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "listingLog",
                        "actions": []
                    },
                    "meshokBold": {
                        "id": "meshokBold",
                        "content": "Выделение жирным (Y/N)",
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokDescription": {
                        "id": "meshokDescription",
                        "content": "Описание лота",
                        "type": "field",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokFree": {
                        "id": "meshokFree",
                        "content": "Бесплатный лот",
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
                                "Бесплатный лот",
                                "Обычный лот"
                            ],
                            "validWeekDays": {
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
                    "meshokItem_id": {
                        "id": "meshokItem_id",
                        "content": "ID лота на Мешке",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokLongevity": {
                        "id": "meshokLongevity",
                        "content": "Продолжительность торгов в днях",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokPrice": {
                        "id": "meshokPrice",
                        "content": "Цена на Мешке (купить сейчас)",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokPublishTime": {
                        "id": "meshokPublishTime",
                        "content": "Время публикации на Мешке",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokRecommended": {
                        "id": "meshokRecommended",
                        "content": "Рекомендуемый (Y/N)",
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokRespond": {
                        "id": "meshokRespond",
                        "content": "Ответ сервера",
                        "type": "field",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokSaleType": {
                        "id": "meshokSaleType",
                        "content": "Тип продажи (Sale или Auction)",
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
                                "Sale",
                                "Auction"
                            ],
                            "validWeekDays": {
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
                    "meshokStartPrice": {
                        "id": "meshokStartPrice",
                        "content": "Аукционная цена",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokStatus": {
                        "id": "meshokStatus",
                        "content": "Статус на Мешке",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "placesStatus",
                        "actions": []
                    },
                    "meshokStatusColor": {
                        "id": "meshokStatusColor",
                        "content": "Статус (цвет)",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshokTitle": {
                        "id": "meshokTitle",
                        "content": "Заголовок лота (max 100)",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "meshok_url": {
                        "id": "meshok_url",
                        "content": " Мешок",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
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
                        "link": "",
                        "actions": []
                    },
                    "ozonStatusColor": {
                        "id": "ozonStatusColor",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "ozon_url": {
                        "id": "ozon_url",
                        "content": "Озон",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "pictures": {
                        "id": "pictures",
                        "content": "Изображения",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "short_description": {
                        "id": "short_description",
                        "content": "Описание",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "sku": {
                        "id": "sku",
                        "content": "Артикул",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "artworks",
                        "actions": []
                    },
                    "stickerColor": {
                        "id": "stickerColor",
                        "content": "Стикер (подсветка)",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "stickers": {
                        "id": "stickers",
                        "content": "Стикеры",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "listingStickers",
                        "actions": []
                    },
                    "thumbnail": {
                        "id": "thumbnail",
                        "content": "Миниатюра",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__15121644188982379": {
                        "content": "Добавить в рекомендуемые Мешок",
                        "id": "action__15121644188982379",
                        "type": "action",
                        "actions": []
                    },
                    "action__47121644189217526": {
                        "content": " Выделить жирным Мешок",
                        "id": "action__47121644189217526",
                        "type": "action",
                        "actions": []
                    },
                    "action__89551644189427987": {
                        "content": "Добавить в раздел скидок ArtNow",
                        "id": "action__89551644189427987",
                        "type": "action",
                        "actions": []
                    },
                    "action__29301644190223527": {
                        "content": "Убрать из раздела скидок ArtNow",
                        "id": "action__29301644190223527",
                        "type": "action",
                        "actions": []
                    },
                    "action__56461644348009506": {
                        "content": "Опубликовать на ArtNow прямо сейчас",
                        "id": "action__56461644348009506",
                        "type": "action",
                        "actions": []
                    },
                    "action__24121644352990727": {
                        "content": "Изменить цену на ArtNow ",
                        "id": "action__24121644352990727",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "@dateChanged": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNowArtwork_id": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNowDiscountOn": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNowDiscount_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {},
                            "fieldParams": {},
                            "fieldOrder": []
                        },
                        "descriptionFlag": true,
                        "description": "Скидка 50% на эту картину от указанной цены! "
                    },
                    "ArtNowPrice": {
                        "include": true,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": false,
                        "description": "1"
                    },
                    "ArtNowPublishTime": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNowResponse": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNowStatus": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNowStatusColor": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ArtNow_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": false,
                        "displayAsButton": true,
                        "button": {
                            "type": "accent"
                        }
                    },
                    "active": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "artist": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {},
                            "fieldParams": {},
                            "fieldOrder": []
                        }
                    },
                    "ebayItem_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ebayStatus": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ebayStatusColor": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ebay_account": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ebay_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsButton": true
                    },
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "listing_result": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "listing_status": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokBold": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokDescription": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokFree": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokItem_id": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokLongevity": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokPrice": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokPublishTime": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokRecommended": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokRespond": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokSaleType": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokStartPrice": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokStatus": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokStatusColor": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshokTitle": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "meshok_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsButton": true
                    },
                    "name": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "place": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "short_description": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sku": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "cost": {
                                    "id": "cost",
                                    "content": "Закупочная стоимость",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "decimal",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "paid": {
                                    "id": "paid",
                                    "content": "Оплачено",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
                                    "format": null,
                                    "formatOptions": {
                                        "customOptionLabel": "My option",
                                        "keyValue": {
                                            "key": "key",
                                            "value": "value",
                                            "button": "One more"
                                        },
                                        "booleanOptions": [
                                            "Yes",
                                            "No"
                                        ],
                                        "customOptionPlaceholder": "Describe your option",
                                        "range": {},
                                        "customOptionType": "textarea"
                                    }
                                },
                                "warehouse": {
                                    "id": "warehouse",
                                    "content": "Склад",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "id": {
                                    "id": "id",
                                    "content": "SKU",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "id",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "cost": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "paid": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "warehouse": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": false,
                                    "disableEditing": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "action__24121644352990727",
                                "warehouse",
                                "cost",
                                null,
                                "paid"
                            ]
                        }
                    },
                    "thumbnail": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "artfinder_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "artmajeur_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ebayauction_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "etsy_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ozon_url": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsButton": true
                    },
                    "artfinderStatusColor": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "artmajeurStatusColor": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ebayauctionStatusColor": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "etsyStatusColor": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ozonStatusColor": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "artworkStatus": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "artworkStatusColor": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "pictures": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stickers": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
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
                                "sticker": {
                                    "id": "sticker",
                                    "content": "Стикер",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "@dateChanged": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "@dateCreated": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "@who": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artfinder_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artistPlanfix": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_bio": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_bio_eng": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_by": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_by_eng": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_comment": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_places": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_short": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_short_eng": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_tags": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artist_tags_eng": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artnowDiscount": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artnow_id": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artworks": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artworksInGallery": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artworksNeedPay": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "artworksWarehouse_pdf": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "costNeedPay": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "costSoldArtworksAll": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "costSoldArtworksMonth": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "costSoldArtworksThree": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "counter": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolder": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderArtist": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderBig": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderMore": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderReserved": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderSold": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderSoldMore": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "driveFolderURL": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": false,
                                    "disableEditing": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "json": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "last_name": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "last_name_eng": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name_eng": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "perfix": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "photo": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "profitSoldArtworksAll": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "profitSoldArtworksMonth": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "profitSoldArtworksThree": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "soldArtworks": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "soldStatus": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "sumSoldArtworkMonth": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "sumSoldArtworkThree": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "sumSoldArtworksAll": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "sticker": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "@dateChanged",
                                "@dateCreated",
                                null,
                                "id",
                                "sticker"
                            ]
                        },
                        "veiwOption": "tags",
                        "cartView": {
                            "image": false,
                            "title": true,
                            "titleField": "sticker"
                        }
                    },
                    "stickerColor": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "listingLog": {
                        "include": true,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1644403988274",
                                    "field": "date"
                                },
                                {
                                    "id": "1644403992425",
                                    "field": "places"
                                },
                                {
                                    "id": "1644415273999",
                                    "field": "event"
                                },
                                {
                                    "id": "1644403995690",
                                    "field": "status"
                                },
                                {
                                    "id": "1644405219945",
                                    "field": "id"
                                },
                                {
                                    "id": "1644415356697",
                                    "field": "value"
                                }
                            ],
                            "deleteOn": true,
                            "itogo": false
                        },
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
                                "date": {
                                    "id": "date",
                                    "content": "Дата",
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
                                        "dateFormat": "DD/MM/YY",
                                        "timeFormat": " HH:mm",
                                        "isUTC": "false"
                                    }
                                },
                                "status": {
                                    "id": "status",
                                    "content": "Статус",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
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
                                            "Успех",
                                            "Ошибка"
                                        ],
                                        "validWeekDays": {
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
                                    }
                                },
                                "places": {
                                    "id": "places",
                                    "content": "Площадка",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "api_response": {
                                    "id": "api_response",
                                    "content": "Ответ сервера",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "json",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "value": {
                                    "id": "value",
                                    "content": "Передаваемое значение",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "event": {
                                    "id": "event",
                                    "content": "Событие",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "api_response": {
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
                                "event": {
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
                                "places": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "status": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "value": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                null,
                                "id",
                                "date",
                                "status",
                                "places",
                                "api_response",
                                "value",
                                null,
                                "event"
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "date",
                        "cartView": {
                            "title": true,
                            "titleField": "event",
                            "status": true,
                            "statusField": "status"
                        },
                        "quickSearchSL": "ListingsLog",
                        "sortDirection": "desc"
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "Другие",
                        "fieldIds": [
                            "artfinder_url",
                            "artmajeur_url",
                            "ebayauction_url",
                            "artfinderStatusColor",
                            "artmajeurStatusColor",
                            "ebayauctionStatusColor"
                        ]
                    },
                    "78241644180299156": {
                        "id": "78241644180299156",
                        "title": "ArtNow",
                        "fieldIds": [
                            "ArtNow_url",
                            "ArtNowStatus",
                            "ArtNowPrice",
                            "action__24121644352990727",
                            "action__56461644348009506",
                            "ArtNowDiscount_id",
                            "action__89551644189427987",
                            "action__29301644190223527",
                            "ArtNowArtwork_id",
                            "ArtNowPublishTime",
                            "ArtNowResponse",
                            "ArtNowStatusColor"
                        ]
                    },
                    "29941644180310098": {
                        "id": "29941644180310098",
                        "title": "Мешок",
                        "fieldIds": [
                            "meshokSaleType",
                            "meshokTitle",
                            "meshokDescription",
                            "meshokFree",
                            "meshokPrice",
                            "meshokItem_id",
                            "meshokPublishTime",
                            "meshokLongevity",
                            "meshokStartPrice",
                            "meshokRespond",
                            "meshokStatus",
                            "meshokStatusColor",
                            "meshok_url",
                            "meshokRecommended",
                            "action__15121644188982379",
                            "meshokBold",
                            "action__47121644189217526"
                        ]
                    },
                    "14451644180441918": {
                        "id": "14451644180441918",
                        "title": "О предмете",
                        "fieldIds": [
                            "artworkStatus",
                            "sku",
                            "pictures",
                            "thumbnail",
                            "name",
                            "short_description",
                            "artist",
                            "id",
                            "active",
                            "artworkStatusColor",
                            "ArtNowDiscountOn",
                            "stickers",
                            "stickerColor"
                        ]
                    },
                    "45991644180493676": {
                        "id": "45991644180493676",
                        "title": "eBay",
                        "fieldIds": [
                            "ebay_account",
                            "ebayStatus",
                            "ebayStatusColor",
                            "ebay_url",
                            "ebayItem_id"
                        ]
                    },
                    "71271644180525350": {
                        "id": "71271644180525350",
                        "title": "Озон",
                        "fieldIds": [
                            "ozon_url",
                            "ozonStatusColor"
                        ]
                    },
                    "80081644180546734": {
                        "id": "80081644180546734",
                        "title": "Etsy",
                        "fieldIds": [
                            "etsyStatusColor",
                            "etsy_url"
                        ]
                    },
                    "57711644414895650": {
                        "id": "57711644414895650",
                        "title": "Лог (НЕРАБОТАЮЩАЯ ТАБЛИЦА ДЛЯ ПАВЛА)",
                        "fieldIds": [
                            "listingLog"
                        ]
                    }
                },
                "columnOrder": [
                    "57711644414895650",
                    "14451644180441918",
                    "78241644180299156",
                    "29941644180310098",
                    "45991644180493676",
                    "71271644180525350",
                    "80081644180546734",
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "",
                        "id": "15121644188982379",
                        "name": "Добавить в рекомендуемые Мешок",
                        "displayAs": "button",
                        "buttonTitle": "Добавить в рекомендуемые (44 руб.)",
                        "conditionals": [
                            {
                                "id": "49791644189005764",
                                "target": "field",
                                "value": "false",
                                "field": "meshokRecommended"
                            },
                            {
                                "id": "43101644348468089",
                                "target": "field",
                                "value": "Active",
                                "field": "meshokStatus"
                            }
                        ],
                        "buttonIcon": "money",
                        "buttonType": "accent"
                    },
                    {
                        "sysName": "",
                        "id": "47121644189217526",
                        "name": " Выделить жирным Мешок",
                        "displayAs": "button",
                        "buttonTitle": "Выделить жирным (5 руб.)",
                        "buttonType": "accent",
                        "buttonIcon": "stopFill",
                        "conditionals": [
                            {
                                "id": "19271644189413910",
                                "target": "field",
                                "value": "false",
                                "field": "meshokBold"
                            },
                            {
                                "id": "61771644348500181",
                                "target": "field",
                                "value": "Active",
                                "field": "meshokStatus"
                            }
                        ]
                    },
                    {
                        "sysName": "actions",
                        "id": "89551644189427987",
                        "name": "Добавить в раздел скидок ArtNow",
                        "displayAs": "button",
                        "buttonIcon": "hook",
                        "buttonType": "accent",
                        "buttonTitle": "Добавить в раздел скидок",
                        "conditionals": [
                            {
                                "id": "61051644189537653",
                                "target": "field",
                                "value": "false",
                                "field": "ArtNowDiscountOn"
                            },
                            {
                                "id": "25841644348525148",
                                "target": "field",
                                "value": "Active",
                                "field": "ArtNowStatus"
                            }
                        ],
                        "closePopup": true,
                        "showMessage": false,
                        "dropdown": true,
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "25321644414317264",
                                "target": "listing_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "88571644414321365",
                                "target": "trigger",
                                "type": "const",
                                "value": "WorkToDiscount"
                            },
                            {
                                "id": "36111644414329237",
                                "target": "user_id",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "30491644414332619",
                                "target": "actionDescription",
                                "type": "const",
                                "value": "Добавить в раздел скидок ArtNow"
                            },
                            {
                                "id": "11021644414336405",
                                "target": "actionForm",
                                "type": "const",
                                "value": "Listings"
                            }
                        ]
                    },
                    {
                        "sysName": "actions",
                        "id": "29301644190223527",
                        "name": "Убрать из раздела скидок ArtNow",
                        "displayAs": "button",
                        "buttonTitle": "Убрать из раздела скидок",
                        "buttonType": "danger",
                        "buttonIcon": "refresh",
                        "conditionals": [
                            {
                                "id": "67011644190274984",
                                "target": "field",
                                "value": "true",
                                "field": "ArtNowDiscountOn"
                            }
                        ],
                        "closePopup": true,
                        "showMessage": false,
                        "formMapping": [
                            {
                                "id": "15441644414167193",
                                "target": "listing_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "72101644414218534",
                                "target": "trigger",
                                "type": "const",
                                "value": "WorkUnDiscount"
                            },
                            {
                                "id": "17221644414256985",
                                "target": "actionForm",
                                "type": "const",
                                "value": "Listings"
                            },
                            {
                                "id": "27941644414259670",
                                "target": "actionDescription",
                                "type": "const",
                                "value": "Удалить из раздела скидок ArtNow"
                            },
                            {
                                "id": "56231644414263568",
                                "target": "user_id",
                                "type": "user",
                                "value": null
                            }
                        ],
                        "dropdown": true,
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ]
                        }
                    },
                    {
                        "sysName": "actions",
                        "id": "56461644348009506",
                        "name": "Опубликовать на ArtNow прямо сейчас",
                        "displayAs": "form",
                        "buttonType": "accent",
                        "buttonIcon": "actions",
                        "SLtype": "other",
                        "formMapping": [
                            {
                                "id": "70371644348868988",
                                "target": "user_id",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "13461644348872716",
                                "target": "actionForm",
                                "type": "const",
                                "value": "Listings"
                            },
                            {
                                "id": "88681644348876114",
                                "target": "actionDescription",
                                "type": "const",
                                "value": "Опубликовать на ArtNow прямо сейчас (без расписания)"
                            },
                            {
                                "id": "82191644348878966",
                                "target": "listing_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "70701644348886447",
                                "target": "trigger",
                                "type": "const",
                                "value": "addToArtnowImmediately"
                            }
                        ],
                        "conditionals": [
                            {
                                "id": "63711644348121207",
                                "target": "field",
                                "value": "Draft",
                                "field": "ArtNowStatus"
                            }
                        ],
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ]
                        },
                        "showMessage": true,
                        "closePopup": false,
                        "resultMessage": "",
                        "resultButton": "Опубликовано!",
                        "formFields": [
                            {
                                "id": "87521644351050055",
                                "field": {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "buttonTitle": "Опубликовать!"
                    },
                    {
                        "sysName": "actions",
                        "id": "24121644352990727",
                        "name": "Изменить цену на ArtNow ",
                        "displayAs": "form",
                        "callFrom": "main",
                        "callFromField": "sku",
                        "formMapping": [
                            {
                                "id": "94901644353093262",
                                "target": "listing_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "70971644353784344",
                                "target": "actionDescription",
                                "type": "const",
                                "value": "Меняем цену на ArtNow"
                            },
                            {
                                "id": "37151644353787577",
                                "target": "actionForm",
                                "type": "const",
                                "value": "Listings"
                            },
                            {
                                "id": "95821644353791373",
                                "target": "trigger",
                                "type": "const",
                                "value": "changePriceArtnow"
                            },
                            {
                                "id": "80361644353800803",
                                "target": "user_id",
                                "type": "user",
                                "value": null
                            }
                        ],
                        "closePopup": true,
                        "showMessage": false,
                        "SLtype": "other",
                        "buttonIcon": "money",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "actionDescription",
                                    "fetch": [],
                                    "sysName": "actionDescription",
                                    "name": "Что делаем",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "actionForm",
                                    "fetch": [],
                                    "sysName": "actionForm",
                                    "name": "Откуда запустили",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "artwork_id",
                                    "fetch": [],
                                    "sysName": "artwork_id",
                                    "name": "Картина",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "artworks"
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
                                    "fieldSysName": "listing_id",
                                    "fetch": [],
                                    "sysName": "listing_id",
                                    "name": "Листинг",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "listings"
                                },
                                {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "trigger",
                                    "fetch": [],
                                    "sysName": "trigger",
                                    "name": "Команда триггер",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "user_id",
                                    "fetch": [],
                                    "sysName": "user_id",
                                    "name": "Кто нажал",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "WebUser"
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "22661644353603603",
                                "field": {
                                    "fieldSysName": "priceArtNow",
                                    "fetch": [],
                                    "sysName": "priceArtNow",
                                    "name": "Новая цена для ArtNow",
                                    "dataType": "decimal",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "buttonTitle": "Изменить цену на ArtNow",
                        "buttonType": "accent",
                        "conditionals": [
                            {
                                "id": "84461644354875555",
                                "target": "field",
                                "value": "Active",
                                "field": "ArtNowStatus"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "@dateChanged": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNowArtwork_id": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNowDiscountOn": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNowDiscount_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {},
                        "fieldParams": {},
                        "fieldOrder": []
                    },
                    "descriptionFlag": true,
                    "description": "Скидка 50% на эту картину от указанной цены! "
                },
                "ArtNowPrice": {
                    "include": true,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": false,
                    "description": "1"
                },
                "ArtNowPublishTime": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNowResponse": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNowStatus": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNowStatusColor": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ArtNow_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": false,
                    "displayAsButton": true,
                    "button": {
                        "type": "accent"
                    }
                },
                "active": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "artist": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {},
                        "fieldParams": {},
                        "fieldOrder": []
                    }
                },
                "ebayItem_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ebayStatus": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ebayStatusColor": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ebay_account": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ebay_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true
                },
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "listing_result": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "listing_status": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokBold": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokDescription": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokFree": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokItem_id": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokLongevity": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokPrice": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokPublishTime": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokRecommended": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokRespond": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokSaleType": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokStartPrice": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokStatus": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokStatusColor": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshokTitle": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "meshok_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true
                },
                "name": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "place": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "short_description": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sku": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "cost": {
                                "id": "cost",
                                "content": "Закупочная стоимость",
                                "type": "field",
                                "read": true,
                                "dataType": "decimal",
                                "format": null,
                                "formatOptions": null
                            },
                            "paid": {
                                "id": "paid",
                                "content": "Оплачено",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
                                "format": null,
                                "formatOptions": {
                                    "customOptionLabel": "My option",
                                    "keyValue": {
                                        "key": "key",
                                        "value": "value",
                                        "button": "One more"
                                    },
                                    "booleanOptions": [
                                        "Yes",
                                        "No"
                                    ],
                                    "customOptionPlaceholder": "Describe your option",
                                    "range": {},
                                    "customOptionType": "textarea"
                                }
                            },
                            "warehouse": {
                                "id": "warehouse",
                                "content": "Склад",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "id": {
                                "id": "id",
                                "content": "SKU",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "cost": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "paid": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "warehouse": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "action__24121644352990727",
                            "warehouse",
                            "cost",
                            null,
                            "paid"
                        ]
                    }
                },
                "thumbnail": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "artfinder_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "artmajeur_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ebayauction_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "etsy_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ozon_url": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsButton": true
                },
                "artfinderStatusColor": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "artmajeurStatusColor": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ebayauctionStatusColor": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "etsyStatusColor": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ozonStatusColor": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "artworkStatus": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "artworkStatusColor": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "pictures": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stickers": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
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
                            "sticker": {
                                "id": "sticker",
                                "content": "Стикер",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "@dateChanged": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "@dateCreated": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "@who": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artfinder_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artistPlanfix": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_bio": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_bio_eng": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_by": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_by_eng": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_comment": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_places": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_short": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_short_eng": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_tags": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artist_tags_eng": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artnowDiscount": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artnow_id": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artworks": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artworksInGallery": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artworksNeedPay": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "artworksWarehouse_pdf": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "costNeedPay": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "costSoldArtworksAll": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "costSoldArtworksMonth": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "costSoldArtworksThree": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "counter": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolder": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderArtist": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderBig": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderMore": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderReserved": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderSold": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderSoldMore": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "driveFolderURL": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "json": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "last_name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "last_name_eng": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name_eng": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "perfix": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "photo": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "profitSoldArtworksAll": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "profitSoldArtworksMonth": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "profitSoldArtworksThree": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "soldArtworks": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "soldStatus": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "sumSoldArtworkMonth": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "sumSoldArtworkThree": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "sumSoldArtworksAll": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "sticker": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "@dateChanged",
                            "@dateCreated",
                            null,
                            "id",
                            "sticker"
                        ]
                    },
                    "veiwOption": "tags",
                    "cartView": {
                        "image": false,
                        "title": true,
                        "titleField": "sticker"
                    },
                    "searchData": [
                        {
                            "key": "artnowDiscount50%",
                            "value": "Скидка ArtNow"
                        },
                        {
                            "key": "error",
                            "value": "Ошибка!"
                        }
                    ]
                },
                "stickerColor": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "listingLog": {
                    "include": true,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1644403988274",
                                "field": "date"
                            },
                            {
                                "id": "1644403992425",
                                "field": "places"
                            },
                            {
                                "id": "1644415273999",
                                "field": "event"
                            },
                            {
                                "id": "1644403995690",
                                "field": "status"
                            },
                            {
                                "id": "1644405219945",
                                "field": "id"
                            },
                            {
                                "id": "1644415356697",
                                "field": "value"
                            }
                        ],
                        "deleteOn": true,
                        "itogo": false
                    },
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
                            "date": {
                                "id": "date",
                                "content": "Дата",
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
                                    "dateFormat": "DD/MM/YY",
                                    "timeFormat": " HH:mm",
                                    "isUTC": "false"
                                }
                            },
                            "status": {
                                "id": "status",
                                "content": "Статус",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
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
                                        "Успех",
                                        "Ошибка"
                                    ],
                                    "validWeekDays": {
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
                                }
                            },
                            "places": {
                                "id": "places",
                                "content": "Площадка",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "api_response": {
                                "id": "api_response",
                                "content": "Ответ сервера",
                                "type": "field",
                                "read": true,
                                "dataType": "json",
                                "format": null,
                                "formatOptions": null
                            },
                            "value": {
                                "id": "value",
                                "content": "Передаваемое значение",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "event": {
                                "id": "event",
                                "content": "Событие",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "api_response": {
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
                            "event": {
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
                            "places": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "status": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "value": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            null,
                            "id",
                            "date",
                            "status",
                            "places",
                            "api_response",
                            "value",
                            null,
                            "event"
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "date",
                    "cartView": {
                        "title": true,
                        "titleField": "event",
                        "status": true,
                        "statusField": "status"
                    },
                    "quickSearchSL": "ListingsLog",
                    "sortDirection": "desc"
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "ArtNowArtwork_id",
                        "fetch": [],
                        "sysName": "ArtNowArtwork_id",
                        "name": "ID картины на ArtNow",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowDiscountOn",
                        "fetch": [],
                        "sysName": "ArtNowDiscountOn",
                        "name": "Скидка на ArtNow",
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
                                "Скидка",
                                "Обычная цена"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "ArtNowDiscount_id",
                        "fetch": [],
                        "sysName": "ArtNowDiscount_id",
                        "name": "Скидка на ArtNow (ID и срок акции)",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "artnow_discount"
                    },
                    {
                        "fieldSysName": "ArtNowPrice",
                        "fetch": [],
                        "sysName": "ArtNowPrice",
                        "name": "Цена для ArtNow",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowPublishTime",
                        "fetch": [],
                        "sysName": "ArtNowPublishTime",
                        "name": "Время публикации на ArtNow",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowResponse",
                        "fetch": [],
                        "sysName": "ArtNowResponse",
                        "name": "Ответ сервера",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNowStatus",
                        "fetch": [],
                        "sysName": "ArtNowStatus",
                        "name": "Статус  на ArtNow",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "placesStatus"
                    },
                    {
                        "fieldSysName": "ArtNowStatusColor",
                        "fetch": [],
                        "sysName": "ArtNowStatusColor",
                        "name": "Цвет (статус)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ArtNow_url",
                        "fetch": [],
                        "sysName": "ArtNow_url",
                        "name": "ArtNow",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "active",
                        "fetch": [],
                        "sysName": "active",
                        "name": "Активная карточка",
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
                                "Активная",
                                "Архивная"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "artfinderStatusColor",
                        "fetch": [],
                        "sysName": "artfinderStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artfinder_url",
                        "fetch": [],
                        "sysName": "artfinder_url",
                        "name": "ArtFinder",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artist",
                        "fetch": [],
                        "sysName": "artist",
                        "name": "Автор",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "artists"
                    },
                    {
                        "fieldSysName": "artmajeurStatusColor",
                        "fetch": [],
                        "sysName": "artmajeurStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artmajeur_url",
                        "fetch": [],
                        "sysName": "artmajeur_url",
                        "name": "Artmajeur",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "artworkStatus",
                        "fetch": [],
                        "sysName": "artworkStatus",
                        "name": "Статус картины",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Status"
                    },
                    {
                        "fieldSysName": "artworkStatusColor",
                        "fetch": [],
                        "sysName": "artworkStatusColor",
                        "name": "Статус картины (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayItem_id",
                        "fetch": [],
                        "sysName": "ebayItem_id",
                        "name": "ID лота на eBay",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayStatus",
                        "fetch": [],
                        "sysName": "ebayStatus",
                        "name": "Статус на сайте",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "placesStatus"
                    },
                    {
                        "fieldSysName": "ebayStatusColor",
                        "fetch": [],
                        "sysName": "ebayStatusColor",
                        "name": "Статус на сайте (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebay_account",
                        "fetch": [],
                        "sysName": "ebay_account",
                        "name": "Аккаунт eBay",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebay_url",
                        "fetch": [],
                        "sysName": "ebay_url",
                        "name": "eBay",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayauctionStatusColor",
                        "fetch": [],
                        "sysName": "ebayauctionStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ebayauction_url",
                        "fetch": [],
                        "sysName": "ebayauction_url",
                        "name": "eBay Auction",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "etsyStatusColor",
                        "fetch": [],
                        "sysName": "etsyStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "etsy_url",
                        "fetch": [],
                        "sysName": "etsy_url",
                        "name": "Etsy",
                        "dataType": "string",
                        "format": "webLink",
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
                        "fieldSysName": "listingLog",
                        "fetch": [
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
                                "fieldSysName": "places",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "status",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "listingLog",
                        "name": "Лог",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "listingLog"
                    },
                    {
                        "fieldSysName": "meshokBold",
                        "fetch": [],
                        "sysName": "meshokBold",
                        "name": "Выделение жирным (Y/N)",
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
                        "fieldSysName": "meshokDescription",
                        "fetch": [],
                        "sysName": "meshokDescription",
                        "name": "Описание лота",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokFree",
                        "fetch": [],
                        "sysName": "meshokFree",
                        "name": "Бесплатный лот",
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
                                "Бесплатный лот",
                                "Обычный лот"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "meshokItem_id",
                        "fetch": [],
                        "sysName": "meshokItem_id",
                        "name": "ID лота на Мешке",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokLongevity",
                        "fetch": [],
                        "sysName": "meshokLongevity",
                        "name": "Продолжительность торгов в днях",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokPrice",
                        "fetch": [],
                        "sysName": "meshokPrice",
                        "name": "Цена на Мешке (купить сейчас)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokPublishTime",
                        "fetch": [],
                        "sysName": "meshokPublishTime",
                        "name": "Время публикации на Мешке",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokRecommended",
                        "fetch": [],
                        "sysName": "meshokRecommended",
                        "name": "Рекомендуемый (Y/N)",
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
                        "fieldSysName": "meshokRespond",
                        "fetch": [],
                        "sysName": "meshokRespond",
                        "name": "Ответ сервера",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokSaleType",
                        "fetch": [],
                        "sysName": "meshokSaleType",
                        "name": "Тип продажи (Sale или Auction)",
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
                                "Sale",
                                "Auction"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "meshokStartPrice",
                        "fetch": [],
                        "sysName": "meshokStartPrice",
                        "name": "Аукционная цена",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokStatus",
                        "fetch": [],
                        "sysName": "meshokStatus",
                        "name": "Статус на Мешке",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "placesStatus"
                    },
                    {
                        "fieldSysName": "meshokStatusColor",
                        "fetch": [],
                        "sysName": "meshokStatusColor",
                        "name": "Статус (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshokTitle",
                        "fetch": [],
                        "sysName": "meshokTitle",
                        "name": "Заголовок лота (max 100)",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "meshok_url",
                        "fetch": [],
                        "sysName": "meshok_url",
                        "name": " Мешок",
                        "dataType": "string",
                        "format": "webLink",
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
                        "link": ""
                    },
                    {
                        "fieldSysName": "ozonStatusColor",
                        "fetch": [],
                        "sysName": "ozonStatusColor",
                        "name": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "ozon_url",
                        "fetch": [],
                        "sysName": "ozon_url",
                        "name": "Озон",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "pictures",
                        "fetch": [],
                        "sysName": "pictures",
                        "name": "Изображения",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "short_description",
                        "fetch": [],
                        "sysName": "short_description",
                        "name": "Описание",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "sku",
                        "fetch": [
                            {
                                "fieldSysName": "cost",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paid",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "warehouse",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "sku",
                        "name": "Артикул",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "artworks"
                    },
                    {
                        "fieldSysName": "stickerColor",
                        "fetch": [],
                        "sysName": "stickerColor",
                        "name": "Стикер (подсветка)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "stickers",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "sticker",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "stickers",
                        "name": "Стикеры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "listingStickers"
                    },
                    {
                        "fieldSysName": "thumbnail",
                        "fetch": [],
                        "sysName": "thumbnail",
                        "name": "Миниатюра",
                        "dataType": "file",
                        "format": "image",
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
                        "fieldSysName": "stickers",
                        "fetch": [],
                        "sysName": "stickers",
                        "name": "Стикеры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "listingStickers"
                    }
                ],
                "fields": {
                    "ArtNowArtwork_id": {
                        "id": "ArtNowArtwork_id",
                        "content": "ID картины на ArtNow",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ArtNowDiscountOn": {
                        "id": "ArtNowDiscountOn",
                        "content": "Скидка на ArtNow",
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
                                "Скидка",
                                "Обычная цена"
                            ],
                            "validWeekDays": {
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
                        "link": ""
                    },
                    "ArtNowDiscount_id": {
                        "id": "ArtNowDiscount_id",
                        "content": "Скидка на ArtNow (ID и срок акции)",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "artnow_discount"
                    },
                    "ArtNowPrice": {
                        "id": "ArtNowPrice",
                        "content": "Цена для ArtNow",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ArtNowPublishTime": {
                        "id": "ArtNowPublishTime",
                        "content": "Время публикации на ArtNow",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ArtNowResponse": {
                        "id": "ArtNowResponse",
                        "content": "Ответ сервера",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ArtNowStatus": {
                        "id": "ArtNowStatus",
                        "content": "Статус  на ArtNow",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "placesStatus"
                    },
                    "ArtNowStatusColor": {
                        "id": "ArtNowStatusColor",
                        "content": "Цвет (статус)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ArtNow_url": {
                        "id": "ArtNow_url",
                        "content": "ArtNow",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "active": {
                        "id": "active",
                        "content": "Активная карточка",
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
                                "Активная",
                                "Архивная"
                            ],
                            "validWeekDays": {
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
                        "link": ""
                    },
                    "artfinderStatusColor": {
                        "id": "artfinderStatusColor",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "artfinder_url": {
                        "id": "artfinder_url",
                        "content": "ArtFinder",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "artist": {
                        "id": "artist",
                        "content": "Автор",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "artists"
                    },
                    "artmajeurStatusColor": {
                        "id": "artmajeurStatusColor",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "artmajeur_url": {
                        "id": "artmajeur_url",
                        "content": "Artmajeur",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "artworkStatus": {
                        "id": "artworkStatus",
                        "content": "Статус картины",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Status"
                    },
                    "artworkStatusColor": {
                        "id": "artworkStatusColor",
                        "content": "Статус картины (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ebayItem_id": {
                        "id": "ebayItem_id",
                        "content": "ID лота на eBay",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ebayStatus": {
                        "id": "ebayStatus",
                        "content": "Статус на сайте",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "placesStatus"
                    },
                    "ebayStatusColor": {
                        "id": "ebayStatusColor",
                        "content": "Статус на сайте (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ebay_account": {
                        "id": "ebay_account",
                        "content": "Аккаунт eBay",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ebay_url": {
                        "id": "ebay_url",
                        "content": "eBay",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ebayauctionStatusColor": {
                        "id": "ebayauctionStatusColor",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ebayauction_url": {
                        "id": "ebayauction_url",
                        "content": "eBay Auction",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "etsyStatusColor": {
                        "id": "etsyStatusColor",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "etsy_url": {
                        "id": "etsy_url",
                        "content": "Etsy",
                        "dataType": "string",
                        "format": "webLink",
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
                    "listingLog": {
                        "id": "listingLog",
                        "content": "Лог",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "listingLog"
                    },
                    "meshokBold": {
                        "id": "meshokBold",
                        "content": "Выделение жирным (Y/N)",
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
                        "read": true,
                        "link": ""
                    },
                    "meshokDescription": {
                        "id": "meshokDescription",
                        "content": "Описание лота",
                        "dataType": "string",
                        "format": "html",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokFree": {
                        "id": "meshokFree",
                        "content": "Бесплатный лот",
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
                                "Бесплатный лот",
                                "Обычный лот"
                            ],
                            "validWeekDays": {
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
                        "link": ""
                    },
                    "meshokItem_id": {
                        "id": "meshokItem_id",
                        "content": "ID лота на Мешке",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokLongevity": {
                        "id": "meshokLongevity",
                        "content": "Продолжительность торгов в днях",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokPrice": {
                        "id": "meshokPrice",
                        "content": "Цена на Мешке (купить сейчас)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokPublishTime": {
                        "id": "meshokPublishTime",
                        "content": "Время публикации на Мешке",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokRecommended": {
                        "id": "meshokRecommended",
                        "content": "Рекомендуемый (Y/N)",
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
                        "read": true,
                        "link": ""
                    },
                    "meshokRespond": {
                        "id": "meshokRespond",
                        "content": "Ответ сервера",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokSaleType": {
                        "id": "meshokSaleType",
                        "content": "Тип продажи (Sale или Auction)",
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
                                "Sale",
                                "Auction"
                            ],
                            "validWeekDays": {
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
                        "link": ""
                    },
                    "meshokStartPrice": {
                        "id": "meshokStartPrice",
                        "content": "Аукционная цена",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokStatus": {
                        "id": "meshokStatus",
                        "content": "Статус на Мешке",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "placesStatus"
                    },
                    "meshokStatusColor": {
                        "id": "meshokStatusColor",
                        "content": "Статус (цвет)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshokTitle": {
                        "id": "meshokTitle",
                        "content": "Заголовок лота (max 100)",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "meshok_url": {
                        "id": "meshok_url",
                        "content": " Мешок",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "name": {
                        "id": "name",
                        "content": "Название",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ozonStatusColor": {
                        "id": "ozonStatusColor",
                        "content": "",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "ozon_url": {
                        "id": "ozon_url",
                        "content": "Озон",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "pictures": {
                        "id": "pictures",
                        "content": "Изображения",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "short_description": {
                        "id": "short_description",
                        "content": "Описание",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "sku": {
                        "id": "sku",
                        "content": "Артикул",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "artworks"
                    },
                    "stickerColor": {
                        "id": "stickerColor",
                        "content": "Стикер (подсветка)",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "stickers": {
                        "id": "stickers",
                        "content": "Стикеры",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "listingStickers"
                    },
                    "thumbnail": {
                        "id": "thumbnail",
                        "content": "Миниатюра",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
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
                    "ArtNowArtwork_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowDiscountOn": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowDiscount_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowPrice": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowPublishTime": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowResponse": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNowStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ArtNow_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "ArtNowStatusColor",
                        "displayAsButton": true,
                        "button": {
                            "title": " ",
                            "type": "accent",
                            "icon": "done"
                        },
                        "colorCellConst": "#138808"
                    },
                    "active": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "artist": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ebayItem_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ebayStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ebayStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ebay_account": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ebay_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "displayAsButton": true,
                        "button": {
                            "title": " ",
                            "type": "accent",
                            "icon": "done"
                        },
                        "colorCellSource": "field",
                        "colorCellField": "ebayStatusColor",
                        "colorCellConst": "#00E6F2"
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "listing_result": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "listing_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokBold": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokDescription": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokFree": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokItem_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokLongevity": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokPrice": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokPublishTime": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokRecommended": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokRespond": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokSaleType": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokStartPrice": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshokTitle": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "meshok_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "displayAsButton": true,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "meshokStatusColor",
                        "button": {
                            "title": " ",
                            "type": "accent",
                            "icon": "done"
                        },
                        "colorCellConst": "#0088AE"
                    },
                    "name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": false
                    },
                    "place": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "short_description": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "sku": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": false,
                        "colorCellSource": "field",
                        "colorCellField": "artworkStatusColor",
                        "colorCellType": "text"
                    },
                    "thumbnail": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "fileImage": true,
                        "colorCell": false,
                        "colorCellSource": "field",
                        "colorCellField": "artworkStatusColor"
                    },
                    "artfinder_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "displayAsButton": true,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "artmajeurStatusColor",
                        "button": {
                            "title": " ",
                            "icon": "academy"
                        }
                    },
                    "artmajeur_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "displayAsButton": true,
                        "colorCellSource": "field",
                        "colorCellField": "artmajeurStatusColor"
                    },
                    "ebayauction_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "displayAsButton": true,
                        "button": {
                            "title": " ",
                            "icon": "academy"
                        },
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "ebayauctionStatusColor"
                    },
                    "etsy_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "displayAsButton": true,
                        "button": {
                            "type": "accent",
                            "title": " ",
                            "icon": "babai"
                        },
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "etsyStatusColor"
                    },
                    "ozon_url": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "displayAsButton": true,
                        "colorCellSource": "field",
                        "colorCellField": "ozonStatusColor",
                        "button": {
                            "icon": "done",
                            "title": " ",
                            "type": "accent"
                        },
                        "colorCellType": "background"
                    },
                    "artfinderStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "artmajeurStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ebayauctionStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "etsyStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "ozonStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "artworkStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "artworkStatusColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorRow": true
                    },
                    "pictures": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "fileImage": true
                    },
                    "stickers": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": true,
                        "colorCellSource": "field",
                        "colorCellField": "stickerColor"
                    },
                    "stickerColor": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "listingLog": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "thumbnail",
                    "artist",
                    "name",
                    "stickers",
                    "short_description",
                    "artworkStatusColor",
                    "sku",
                    "meshok_url",
                    "ArtNow_url",
                    "ebay_url",
                    "ArtNowStatusColor",
                    "ArtNowArtwork_id",
                    "ArtNowDiscount_id",
                    "ArtNowPrice",
                    "ArtNowPublishTime",
                    "ArtNowResponse",
                    "ArtNowStatus",
                    "active",
                    "ebayItem_id",
                    "ebayStatus",
                    "ebayStatusColor",
                    "ebay_account",
                    "id",
                    "meshokBold",
                    "meshokDescription",
                    "meshokFree",
                    "meshokItem_id",
                    "meshokLongevity",
                    "meshokPrice",
                    "meshokPublishTime",
                    "meshokRecommended",
                    "meshokRespond",
                    "meshokSaleType",
                    "meshokStartPrice",
                    "meshokStatus",
                    "meshokStatusColor",
                    "meshokTitle",
                    "artfinder_url",
                    "ozon_url",
                    "artmajeur_url",
                    "ebayauction_url",
                    "etsy_url",
                    "artfinderStatusColor",
                    "artmajeurStatusColor",
                    "ebayauctionStatusColor",
                    "etsyStatusColor",
                    "ozonStatusColor",
                    "artworkStatus",
                    "ArtNowDiscountOn",
                    "pictures",
                    "stickerColor",
                    "listingLog"
                ]
            },
            "hideExpandTD": true,
            "actions": [
                {
                    "sysName": "",
                    "id": "15121644188982379",
                    "name": "Добавить в рекомендуемые Мешок",
                    "displayAs": "button",
                    "buttonTitle": "Добавить в рекомендуемые (44 руб.)",
                    "conditionals": [
                        {
                            "id": "49791644189005764",
                            "target": "field",
                            "value": "false",
                            "field": "meshokRecommended"
                        },
                        {
                            "id": "43101644348468089",
                            "target": "field",
                            "value": "Active",
                            "field": "meshokStatus"
                        }
                    ],
                    "buttonIcon": "money",
                    "buttonType": "accent"
                },
                {
                    "sysName": "",
                    "id": "47121644189217526",
                    "name": " Выделить жирным Мешок",
                    "displayAs": "button",
                    "buttonTitle": "Выделить жирным (5 руб.)",
                    "buttonType": "accent",
                    "buttonIcon": "stopFill",
                    "conditionals": [
                        {
                            "id": "19271644189413910",
                            "target": "field",
                            "value": "false",
                            "field": "meshokBold"
                        },
                        {
                            "id": "61771644348500181",
                            "target": "field",
                            "value": "Active",
                            "field": "meshokStatus"
                        }
                    ]
                },
                {
                    "sysName": "actions",
                    "id": "89551644189427987",
                    "name": "Добавить в раздел скидок ArtNow",
                    "displayAs": "button",
                    "buttonIcon": "hook",
                    "buttonType": "accent",
                    "buttonTitle": "Добавить в раздел скидок",
                    "conditionals": [
                        {
                            "id": "61051644189537653",
                            "target": "field",
                            "value": "false",
                            "field": "ArtNowDiscount_id"
                        },
                        {
                            "id": "25841644348525148",
                            "target": "field",
                            "value": "Active",
                            "field": "ArtNowStatus"
                        }
                    ],
                    "closePopup": true,
                    "showMessage": false,
                    "dropdown": true,
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "25321644414317264",
                            "target": "listing_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "88571644414321365",
                            "target": "trigger",
                            "type": "const",
                            "value": "WorkToDiscount"
                        },
                        {
                            "id": "36111644414329237",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "30491644414332619",
                            "target": "actionDescription",
                            "type": "const",
                            "value": "Добавить в раздел скидок ArtNow"
                        },
                        {
                            "id": "11021644414336405",
                            "target": "actionForm",
                            "type": "const",
                            "value": "Listings"
                        }
                    ]
                },
                {
                    "sysName": "actions",
                    "id": "29301644190223527",
                    "name": "Убрать из раздела скидок ArtNow",
                    "displayAs": "button",
                    "buttonTitle": "Убрать из раздела скидок",
                    "buttonType": "danger",
                    "buttonIcon": "refresh",
                    "conditionals": [
                        {
                            "id": "67011644190274984",
                            "target": "field",
                            "value": "true",
                            "field": "ArtNowDiscountOn"
                        }
                    ],
                    "closePopup": true,
                    "showMessage": false,
                    "formMapping": [
                        {
                            "id": "15441644414167193",
                            "target": "listing_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "72101644414218534",
                            "target": "trigger",
                            "type": "const",
                            "value": "WorkUnDiscount"
                        },
                        {
                            "id": "17221644414256985",
                            "target": "actionForm",
                            "type": "const",
                            "value": "Listings"
                        },
                        {
                            "id": "27941644414259670",
                            "target": "actionDescription",
                            "type": "const",
                            "value": "Удалить из раздела скидок ArtNow"
                        },
                        {
                            "id": "56231644414263568",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        }
                    ],
                    "dropdown": true,
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    }
                },
                {
                    "sysName": "actions",
                    "id": "56461644348009506",
                    "name": "Опубликовать на ArtNow прямо сейчас",
                    "displayAs": "form",
                    "buttonType": "accent",
                    "buttonIcon": "actions",
                    "SLtype": "other",
                    "formMapping": [
                        {
                            "id": "70371644348868988",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "13461644348872716",
                            "target": "actionForm",
                            "type": "const",
                            "value": "Listings"
                        },
                        {
                            "id": "88681644348876114",
                            "target": "actionDescription",
                            "type": "const",
                            "value": "Опубликовать на ArtNow прямо сейчас (без расписания)"
                        },
                        {
                            "id": "82191644348878966",
                            "target": "listing_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "70701644348886447",
                            "target": "trigger",
                            "type": "const",
                            "value": "addToArtnowImmediately"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "63711644348121207",
                            "target": "field",
                            "value": "Draft",
                            "field": "ArtNowStatus"
                        }
                    ],
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "",
                    "resultButton": "Опубликовано!",
                    "formFields": [
                        {
                            "id": "87521644351050055",
                            "field": {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "buttonTitle": "Опубликовать!"
                },
                {
                    "sysName": "actions",
                    "id": "24121644352990727",
                    "name": "Изменить цену на ArtNow ",
                    "displayAs": "form",
                    "callFrom": "main",
                    "callFromField": "sku",
                    "formMapping": [
                        {
                            "id": "94901644353093262",
                            "target": "listing_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "70971644353784344",
                            "target": "actionDescription",
                            "type": "const",
                            "value": "Меняем цену на ArtNow"
                        },
                        {
                            "id": "37151644353787577",
                            "target": "actionForm",
                            "type": "const",
                            "value": "Listings"
                        },
                        {
                            "id": "95821644353791373",
                            "target": "trigger",
                            "type": "const",
                            "value": "changePriceArtnow"
                        },
                        {
                            "id": "80361644353800803",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        }
                    ],
                    "closePopup": true,
                    "showMessage": false,
                    "SLtype": "other",
                    "buttonIcon": "money",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "actionDescription",
                                "fetch": [],
                                "sysName": "actionDescription",
                                "name": "Что делаем",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "actionForm",
                                "fetch": [],
                                "sysName": "actionForm",
                                "name": "Откуда запустили",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "artwork_id",
                                "fetch": [],
                                "sysName": "artwork_id",
                                "name": "Картина",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "artworks"
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
                                "fieldSysName": "listing_id",
                                "fetch": [],
                                "sysName": "listing_id",
                                "name": "Листинг",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "listings"
                            },
                            {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "trigger",
                                "fetch": [],
                                "sysName": "trigger",
                                "name": "Команда триггер",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "name": "Кто нажал",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "WebUser"
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "22661644353603603",
                            "field": {
                                "fieldSysName": "priceArtNow",
                                "fetch": [],
                                "sysName": "priceArtNow",
                                "name": "Новая цена для ArtNow",
                                "dataType": "decimal",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "buttonTitle": "Изменить цену на ArtNow",
                    "buttonType": "accent",
                    "conditionals": [
                        {
                            "id": "84461644354875555",
                            "target": "field",
                            "value": "Active",
                            "field": "ArtNowStatus"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "ArtNowArtwork_id",
                "name": "ID картины на ArtNow",
                "dataType": "number",
                "id": "73911644167167312",
                "link": "",
                "group": "1644166943042",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowDiscountOn",
                "name": "Скидка на ArtNow",
                "dataType": "boolean",
                "id": "86401644189698747",
                "link": "",
                "group": "1644166943042",
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
                        "Скидка",
                        "Обычная цена"
                    ],
                    "validWeekDays": {
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowDiscount_id",
                "name": "Скидка на ArtNow (ID и срок акции)",
                "dataType": "link",
                "id": "65311644167302182",
                "link": "artnow_discount",
                "group": "1644166943042",
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
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowPrice",
                "name": "Цена для ArtNow",
                "dataType": "decimal",
                "id": "67171644167110674",
                "link": "",
                "group": "1644166943042",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowPublishTime",
                "name": "Время публикации на ArtNow",
                "dataType": "date",
                "id": "24521644167207062",
                "link": "",
                "group": "1644166943042",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowResponse",
                "name": "Ответ сервера",
                "dataType": "json",
                "id": "13251644167322915",
                "link": "",
                "group": "1644166943042",
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
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowStatus",
                "name": "Статус  на ArtNow",
                "dataType": "link",
                "id": "99041644168072624",
                "link": "placesStatus",
                "group": "1644166943042",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNowStatusColor",
                "name": "Цвет (статус)",
                "dataType": "string",
                "id": "32131644168115144",
                "link": "",
                "group": "1644166943042",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ArtNow_url",
                "name": "ArtNow",
                "dataType": "string",
                "id": "92671644167182314",
                "link": "",
                "group": "1644166943042",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "active",
                "name": "Активная карточка",
                "dataType": "boolean",
                "id": "43441644168198277",
                "link": "",
                "group": "1644166315031",
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
                        "Активная",
                        "Архивная"
                    ],
                    "validWeekDays": {
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artfinderStatusColor",
                "name": "",
                "dataType": "string",
                "id": "43181644176653644",
                "link": "",
                "group": "1644176344635",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artfinder_url",
                "name": "ArtFinder",
                "dataType": "string",
                "id": "96881644176458295",
                "link": "",
                "group": "1644176344635",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artist",
                "name": "Автор",
                "dataType": "link",
                "id": "21291644172744708",
                "link": "artists",
                "group": "1644166315031",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artmajeurStatusColor",
                "name": "",
                "dataType": "string",
                "id": "78831644176663231",
                "link": "",
                "group": "1644176364118",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artmajeur_url",
                "name": "Artmajeur",
                "dataType": "string",
                "id": "51941644176483110",
                "link": "",
                "group": "1644176364118",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artworkStatus",
                "name": "Статус картины",
                "dataType": "link",
                "id": "84191644180986673",
                "link": "Status",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "artworkStatusColor",
                "name": "Статус картины (цвет)",
                "dataType": "string",
                "id": "67481644181000890",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebayItem_id",
                "name": "ID лота на eBay",
                "dataType": "string",
                "id": "55091644169488622",
                "link": "",
                "group": "1644166973166",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebayStatus",
                "name": "Статус на сайте",
                "dataType": "link",
                "id": "22031644169505254",
                "link": "placesStatus",
                "group": "1644166973166",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebayStatusColor",
                "name": "Статус на сайте (цвет)",
                "dataType": "string",
                "id": "97291644169514157",
                "link": "",
                "group": "1644166973166",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebay_account",
                "name": "Аккаунт eBay",
                "dataType": "string",
                "id": "73851644169464887",
                "link": "",
                "group": "1644166973166",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebay_url",
                "name": "eBay",
                "dataType": "string",
                "id": "18211644169498004",
                "link": "",
                "group": "1644166973166",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebayauctionStatusColor",
                "name": "",
                "dataType": "string",
                "id": "44821644176644662",
                "link": "",
                "group": "1644176327535",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ebayauction_url",
                "name": "eBay Auction",
                "dataType": "string",
                "id": "48561644176507680",
                "link": "",
                "group": "1644176327535",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "etsyStatusColor",
                "name": "",
                "dataType": "string",
                "id": "65311644176642614",
                "link": "",
                "group": "1644176293721",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "etsy_url",
                "name": "Etsy",
                "dataType": "string",
                "id": "19001644176435778",
                "link": "",
                "group": "1644176293721",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "listingLog",
                "name": "Лог",
                "dataType": "arrayLink",
                "id": "46981644399878505",
                "link": "listingLog",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokBold",
                "name": "Выделение жирным (Y/N)",
                "dataType": "boolean",
                "id": "63531644168581207",
                "link": "",
                "group": "1644166961082",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokDescription",
                "name": "Описание лота",
                "dataType": "string",
                "id": "88341644168781274",
                "link": "",
                "group": "1644166961082",
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
                "format": "html",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokFree",
                "name": "Бесплатный лот",
                "dataType": "boolean",
                "id": "12211644169258476",
                "link": "",
                "group": "1644166961082",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Бесплатный лот",
                        "Обычный лот"
                    ],
                    "validWeekDays": {
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokItem_id",
                "name": "ID лота на Мешке",
                "dataType": "number",
                "id": "62541644168737226",
                "link": "",
                "group": "1644166961082",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokLongevity",
                "name": "Продолжительность торгов в днях",
                "dataType": "number",
                "id": "65491644168952791",
                "link": "",
                "group": "1644166961082",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokPrice",
                "name": "Цена на Мешке (купить сейчас)",
                "dataType": "decimal",
                "id": "44791644168647442",
                "link": "",
                "group": "1644166961082",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokPublishTime",
                "name": "Время публикации на Мешке",
                "dataType": "date",
                "id": "86931644169370276",
                "link": "",
                "group": "1644166961082",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokRecommended",
                "name": "Рекомендуемый (Y/N)",
                "dataType": "boolean",
                "id": "37131644168579706",
                "link": "",
                "group": "1644166961082",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokRespond",
                "name": "Ответ сервера",
                "dataType": "json",
                "id": "96721644168999188",
                "link": "",
                "group": "1644166961082",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 11,
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
                "typeVariable": {},
                "json": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokSaleType",
                "name": "Тип продажи (Sale или Auction)",
                "dataType": "boolean",
                "id": "14951644168469793",
                "link": "",
                "group": "1644166961082",
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
                        "Sale",
                        "Auction"
                    ],
                    "validWeekDays": {
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokStartPrice",
                "name": "Аукционная цена",
                "dataType": "decimal",
                "id": "89791644169142743",
                "link": "",
                "group": "1644166961082",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokStatus",
                "name": "Статус на Мешке",
                "dataType": "link",
                "id": "20191644169008692",
                "link": "placesStatus",
                "group": "1644166961082",
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
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokStatusColor",
                "name": "Статус (цвет)",
                "dataType": "string",
                "id": "19721644169001088",
                "link": "",
                "group": "1644166961082",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshokTitle",
                "name": "Заголовок лота (max 100)",
                "dataType": "string",
                "id": "15441644168410613",
                "link": "",
                "group": "1644166961082",
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "meshok_url",
                "name": " Мешок",
                "dataType": "string",
                "id": "45671644168738640",
                "link": "",
                "group": "1644166961082",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "name",
                "name": "Название",
                "dataType": "string",
                "id": "27581644172742591",
                "link": "",
                "group": "1644166315031",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ozonStatusColor",
                "name": "",
                "dataType": "string",
                "id": "76351644176628939",
                "link": "",
                "group": "1644176279964",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "ozon_url",
                "name": "Озон",
                "dataType": "string",
                "id": "66021644176417456",
                "link": "",
                "group": "1644176279964",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "pictures",
                "name": "Изображения",
                "dataType": "file",
                "id": "94741644172959225",
                "link": "",
                "group": "1644166315031",
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
                "format": "multipleImages",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "short_description",
                "name": "Описание",
                "dataType": "string",
                "id": "55501644172744029",
                "link": "",
                "group": "1644166315031",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "sku",
                "name": "Артикул",
                "dataType": "link",
                "id": "74951617307790142",
                "link": "artworks",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    "places_for_change.id",
                    "places_for_change.place",
                    "places_for_change"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": true,
                "array": false
            },
            {
                "sysName": "stickerColor",
                "name": "Стикер (подсветка)",
                "dataType": "string",
                "id": "10391644399367241",
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
                "format": "color",
                "formatOptions": null,
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "stickers",
                "name": "Стикеры",
                "dataType": "arrayLink",
                "id": "26441644356516508",
                "link": "listingStickers",
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
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "thumbnail",
                "name": "Миниатюра",
                "dataType": "file",
                "id": "52731644167254431",
                "link": "",
                "group": "1644166315031",
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
                "format": "image",
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "listingLog": [
                    {
                        "api_response": "ArtNowResponse",
                        "date": 1644420922839,
                        "id": "64238e2f-cc81-4c50-98e8-2d0e6aee1730"
                    }
                ],
                "id": "1",
                "ArtNowResponse": "{\n   \"status\": \"success\"\n}",
                "stickers": [
                    {
                        "sticker": "Ошибка!",
                        "id": "error"
                    }
                ],
                "stickerColor": "#FF631C"
            },
            {
                "meshokStatusColor": "#0088AE",
                "name": "Река Гремячая, май",
                "listingLog": [
                    {
                        "event": "Изменить цену",
                        "api_response": "ArtNowResponse",
                        "id": "e9fcfcb1-149e-4a1d-bd2f-3ea7f7f4b478",
                        "date": 1644418131691,
                        "status": true,
                        "value": "30000",
                        "places": "ArtNow"
                    }
                ],
                "sku": {
                    "cost": 7500,
                    "paid": false,
                    "id": "Alexandrovsky_111809",
                    "warehouse": "Оптиков"
                },
                "meshokLongevity": 1,
                "ArtNow_url": "https://artnow.ru/ru/gallery/3/30877/picture/0/971959.html",
                "short_description": "Холст / Масло, 40x61 см",
                "meshokFree": false,
                "ArtNowPrice": 30000,
                "thumbnail": "https://api.alfa.directual.com/fileUploaded/artline/8e82f11c-14cd-4848-9ca4-b36eed3d4ba2.jpg",
                "ArtNowStatusColor": "#138808",
                "meshokDescription": "Настоящая картина \"Река Гремячая, май\", выполнена профессиональным живописцем Александром Александровским масляными красками на холсте. Жанр произведения - Пейзаж. Выполнено в стиле Реализм.\nРазмер - 40х61 см.\n\nПробуждение всех красок природы в безмолвном спокойствии реки.\n\nАлександр Александровский родился в 1951 году в г.Пушкин, Ленинградской области. В 1983 по 1989 гг. он учился в Санкт- Петербургской Академии Художеств им. И.Репина на факультете живописи в мастерской профессора Б.С.Угарова. Его основным учителем живописи можно считать профессора П.И.Рейхета. С 1996 г. - член Союза Художников России.",
                "pictures": "https://api.alfa.directual.com/fileUploaded/artline/27ced4d3-3738-4d14-a460-dfc7a01b6bdc.jpg,https://api.alfa.directual.com/fileUploaded/artline/fdd30224-ad90-438b-978c-a2f4e7eea06d.jpg,https://api.alfa.directual.com/fileUploaded/artline/379eadeb-4187-44bc-9e43-62db8358f4a2.jpg",
                "meshokSaleType": true,
                "id": "Alexandrovsky_111809",
                "artist": "Alexandrovsky",
                "ArtNowArtwork_id": 971959,
                "ArtNowResponse": "{\"status\":\"success\"}",
                "stickers": [],
                "ArtNowStatus": "Active",
                "meshokTitle": "КАРТИНА \"Река Гремячая, май\" Художник Александр АЛЕКСАНДРОВСКИЙ Холст / Масло, 40x61 см",
                "meshokRecommended": false,
                "artworkStatusColor": "#1265B5",
                "artworkStatus": "Sale",
                "meshokBold": false,
                "meshokStatus": "Dfart",
                "meshokPrice": 29000,
                "active": true
            },
            {
                "meshokStatusColor": "#0088AE",
                "name": "Близ Спаса Нередицы",
                "listingLog": [
                    {
                        "event": "Добавить в раздел Скидки",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "8bc78580-954a-4c78-99d5-a9acaad0f91c",
                        "date": 1644417376903,
                        "status": true,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Добавить в раздел Скидки",
                        "api_response": "{\"status\":\"error\",\"description\":\"\\u0420\\u0430\\u0431\\u043e\\u0442\\u0430 objectid \\u0443\\u0436\\u0435 \\u043f\\u0440\\u0438\\u0441\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u0435\\u0442 \\u0432 \\u0440\\u0430\\u0437\\u0434\\u0435\\u043b\\u0435 \\u0421\\u043a\\u0438\\u0434\\u043a\\u0438\"}",
                        "id": "bd267bec-80c9-41a8-9500-97cabff7af92",
                        "date": 1644417418110,
                        "status": false,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Добавить в раздел Скидки",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "7f811ac7-13d7-433b-8c51-4cde09a9d0e2",
                        "date": 1644417469087,
                        "status": true,
                        "places": "ArtNow"
                    }
                ],
                "sku": {
                    "cost": 8000,
                    "paid": false,
                    "id": "Alexandrovsky_101746",
                    "warehouse": "Оптиков"
                },
                "meshokLongevity": 1,
                "ArtNow_url": "https://artnow.ru/ru/gallery/3/30877/picture/0/923221.html",
                "short_description": "Холст / Масло, 50x70 см",
                "meshokFree": false,
                "ArtNowPrice": 24000,
                "thumbnail": "https://api.alfa.directual.com/fileUploaded/artline/bc3e47e7-b052-4d86-8b2b-fda4839f831f.jpg",
                "ArtNowStatusColor": "#138808",
                "meshokDescription": "Настоящая картина \"Близ Спаса Нередицы\", выполнена профессиональным живописцем Александром Александровским масляными красками на холсте. Жанр произведения - Пейзаж. Выполнено в стиле Реализм.\nРазмер - 50х70 см.\n\nЛетний день в русской деревне недалеко от Великого Новгорода. Ровные ряды грядок обрабатывают крестьяне. Рядом скошенный луг и стог сена. За серым забором под широкими ветвистыми деревьями видны крыши деревянных домов. Вдали на высоких зеленых холмах под облаками голубого неба купола церкви Спаса Нередицы. \n\nАлександр Александровский родился в 1951 году в г.Пушкин, Ленинградской области. В 1983 по 1989 гг. он учился в Санкт- Петербургской Академии Художеств им. И.Репина на факультете живописи в мастерской профессора Б.С.Угарова. Его основным учителем живописи можно считать профессора П.И.Рейхета. С 1996 г. - член Союза Художников России.",
                "pictures": "https://api.alfa.directual.com/fileUploaded/artline/38da72ca-252b-4d41-9dd5-a53f2b497a67.jpg,,",
                "meshokSaleType": true,
                "id": "Alexandrovsky_101746",
                "artist": "Alexandrovsky",
                "ArtNowArtwork_id": 923221,
                "ArtNowResponse": "{\"status\":\"success\"}",
                "stickers": [
                    {
                        "sticker": "Скидка ArtNow",
                        "id": "artnowDiscount50%"
                    }
                ],
                "ArtNowStatus": "Active",
                "meshokTitle": "КАРТИНА \"Близ Спаса Нередицы\" Художник Александр АЛЕКСАНДРОВСКИЙ Холст / Масло, 50x70 см",
                "meshokRecommended": false,
                "artworkStatusColor": "#1265B5",
                "ArtNowDiscount_id": "Alexandrovsky_Painting_374",
                "artworkStatus": "Sale",
                "meshokBold": false,
                "meshokStatus": "Dfart",
                "meshokPrice": 24000,
                "active": true
            },
            {
                "meshokStatusColor": "#0088AE",
                "name": "Девушка с коровой и петухом",
                "listingLog": [
                    {
                        "event": "Измененить цену",
                        "api_response": "ArtNowResponse}}",
                        "id": "98390fbc-3912-457b-bf81-5e0e8007c446",
                        "date": 1644414684316,
                        "status": true,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Измененить цену",
                        "api_response": "ArtNowResponse",
                        "id": "9b0b4fff-9167-45e9-bf4e-0dbbe3d7544d",
                        "date": 1644415498415,
                        "status": true,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Измененить цену",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "8b7dc076-62e3-4ee6-90d0-e6a717affc3d",
                        "date": 1644416116641,
                        "status": true,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Изменить цену",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "fab4bb80-c06a-477a-a7b2-9e0c21fda8ef",
                        "date": 1644417156201,
                        "status": true,
                        "value": "84000",
                        "places": "ArtNow"
                    },
                    {
                        "event": "Добавить в раздел Скидки",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "1481e14e-a91d-4a95-a151-dec75a25007b",
                        "date": 1644417183576,
                        "status": true,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Измененить цену на ArtNow",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "faf62f7f-75aa-4ee4-9824-325789e36720",
                        "date": 1644402615106,
                        "status": false,
                        "places": "ArtNow"
                    },
                    {
                        "event": "Измененить цену на ArtNow",
                        "api_response": "{\"status\":\"success\"}",
                        "id": "f42b6391-81ea-4ff7-b857-3b7259c94d84",
                        "date": 1644403769022,
                        "status": true,
                        "places": "ArtNow"
                    }
                ],
                "sku": {
                    "cost": 14000,
                    "paid": false,
                    "id": "Chatinyan_003726",
                    "warehouse": "Чатинян Армения"
                },
                "meshokLongevity": 30,
                "ArtNow_url": "https://artnow.ru/ru/gallery/3/51232/picture/0/1061383.html",
                "short_description": "Холст/Масло, 70х60см",
                "meshokFree": false,
                "ArtNowPrice": 84000,
                "thumbnail": "https://api.alfa.directual.com/fileUploaded/artline/d1383b00-8b4b-49d3-ab45-697ea5c1b0f0.jpeg",
                "ArtNowStatusColor": "4A8E10",
                "meshokDescription": "Настоящая картина \"Девушка с коровой и петухом\", выполнена известным армянским художником Мгером Чатиняном масляными красками на холсте. Жанр произведения - Жанровая композиция. Выполнено в стиле Реализм.\nРазмер - 70х60 см.\n\n\n\n﻿﻿﻿Мгер Чатинян родился в Армении в 1989 году. Окончив среднюю школу в 2006 году, увлёкся живописью и рисованием. Первым его учителем и вдохновителем стал отец - преподаватель живописи и истории искусств.\nВ 2010 году окончил Ванадзорский государственный педагогический институт, где обучался на факультете живописи и графики. С 2012 года - член Всемирного союза армянских художников. С 2019 года - член Союза художников Армении.",
                "pictures": "https://api.directual.com/fileUploaded/artline/web/12074341-4537-4557-abbc-a6d9b5a71439.jpeg,,",
                "meshokSaleType": true,
                "id": "Chatinyan_003726",
                "artist": "Chatinyan",
                "ArtNowArtwork_id": 1061383,
                "ArtNowResponse": "{\"status\":\"success\"}",
                "stickers": [
                    {
                        "sticker": "Скидка ArtNow",
                        "id": "artnowDiscount50%"
                    }
                ],
                "ArtNowStatus": "Active",
                "meshokTitle": "КАРТИНА \"Девушка с коровой и петухом\" Художник Мгер ЧАТИНЯН Холст/Масло, 70х60см",
                "meshokRecommended": false,
                "artworkStatusColor": "4A8E10",
                "ArtNowDiscount_id": "Chatinyan_Painting_305",
                "artworkStatus": "Sale",
                "meshokStartPrice": 31500,
                "ArtNowDiscountOn": false,
                "meshokBold": false,
                "meshokStatus": "Draft",
                "meshokPrice": 42000,
                "active": true
            },
            {
                "meshokStatusColor": "#138808",
                "name": "Валаам, Владимирский мост",
                "sku": {
                    "cost": 8500,
                    "id": "Alexandrovsky_061706-4",
                    "warehouse": "Оптиков"
                },
                "meshokLongevity": 3,
                "ArtNow_url": "https://artnow.ru/ru/gallery/3/30877/picture/0/906347.html",
                "short_description": "Холст/Масло, 55х70см",
                "meshokFree": false,
                "ArtNowPrice": 34000,
                "thumbnail": "https://api.alfa.directual.com/fileUploaded/artline/920330f5-528b-487e-99eb-7733c7ec0dc2.jpg",
                "ArtNowStatusColor": "#138808",
                "meshokDescription": "Настоящая картина \"Валлам, Владимирский мост\", выполнена профессиональным живописцем Александром Александровским масляными красками на холсте. Жанр произведения - Пейзаж. Выполнено в стиле Реализм.\nРазмер - 55х70 см.\n\nВладимирский мост на Валааме. Монах ловит рыбу с лодки. Картина создана с натуры, на пленэре.\n\nАлександр Александровский родился в 1951 году в г.Пушкин, Ленинградской области. В 1983 по 1989 гг. он учился в Санкт- Петербургской Академии Художеств им. И.Репина на факультете живописи в мастерской профессора Б.С.Угарова. Его основным учителем живописи можно считать профессора П.И.Рейхета. С 1996 г. - член Союза Художников России.",
                "pictures": "https://api.alfa.directual.com/fileUploaded/artline/26fe6806-9355-47a9-8f88-e8ef5169ee89.jpg,https://api.alfa.directual.com/fileUploaded/artline/73e422d9-0ac5-49e1-8a53-80f8f0d0ab08.jpg,https://api.alfa.directual.com/fileUploaded/artline/605dbdc7-63a8-4a07-948a-287824cdae75.jpg",
                "meshokSaleType": false,
                "id": "Alexandrovsky_061706-4",
                "meshokItem_id": 115956752,
                "artist": "Alexandrovsky",
                "ArtNowArtwork_id": 906347,
                "ArtNowStatus": "Active",
                "meshokTitle": "КАРТИНА \"Валлам, Владимирский мост\" Художник Александр АЛЕКСАНДРОВСКИЙ Холст/Масло, 55х70см",
                "meshokRecommended": false,
                "artworkStatusColor": "#1265B5",
                "artworkStatus": "Sale",
                "meshokPublishTime": 1643308637945,
                "meshok_url": "https://meshok.net/item/115956752",
                "meshokStartPrice": 16500,
                "meshokBold": false,
                "meshokStatus": "Active",
                "meshokPrice": 34000,
                "active": true,
                "stickers": ""
            },
            {
                "meshokStatusColor": "#0088AE",
                "name": "Аничков мост в Санкт-Петербурге",
                "sku": {
                    "cost": 7000,
                    "id": "Alexandrovsky_091403-14",
                    "warehouse": "Оптиков"
                },
                "short_description": "Холст / Масло, 40х60 см",
                "thumbnail": "https://api.alfa.directual.com/fileUploaded/artline/2e0a4330-4e69-42e0-92f8-ad3df52f5192.jpg",
                "ArtNowStatusColor": "#0088AE",
                "pictures": "https://api.alfa.directual.com/fileUploaded/artline/da1fe1d7-d7f1-4c3f-ab12-7eb42c6d3fa2.jpg,https://api.alfa.directual.com/fileUploaded/artline/7d8f44df-66c2-41d7-980f-95970e302e50.jpg,https://api.alfa.directual.com/fileUploaded/artline/2baa6ce3-60af-4abf-a577-b6b5ff3dc5cc.jpg",
                "id": "Alexandrovsky_091403-14",
                "artist": "Alexandrovsky",
                "ArtNowStatus": "Draft",
                "artworkStatusColor": "#1265B5",
                "artworkStatus": "Sale",
                "meshokStatus": "Dfart",
                "active": true,
                "stickers": ""
            },
            {
                "meshokStatusColor": "#0088AE",
                "name": "Этюд #28",
                "sku": {
                    "paid": true,
                    "id": "Chatinyan_s028",
                    "warehouse": "Чатинян Москва"
                },
                "meshokLongevity": 1,
                "short_description": "Бумага / Масло, 30x21 см",
                "meshokFree": false,
                "ArtNowPrice": 16000,
                "ArtNowStatusColor": "#0088AE",
                "meshokDescription": "Настоящая картина \"Этюд #28\", выполнена известным армянским художником Мгером Чатиняном масляными красками на бумаге. Жанр произведения - Натюрморт. Выполнено в стиле Реализм.\nРазмер - 30х21 см.\n\nЭтюд известного армянского художника-живописца Мгера Чатиняна. Создан с натуры, масляными красками.\n\n﻿﻿﻿Мгер Чатинян родился в Армении в 1989 году. Окончив среднюю школу в 2006 году, увлёкся живописью и рисованием. Первым его учителем и вдохновителем стал отец - преподаватель живописи и истории искусств.\nВ 2010 году окончил Ванадзорский государственный педагогический институт, где обучался на факультете живописи и графики. С 2012 года - член Всемирного союза армянских художников. С 2019 года - член Союза художников Армении.",
                "pictures": "https://artegogallery.ru/image/catalog/Chatinyan_s028.jpg,,",
                "meshokSaleType": true,
                "id": "Chatinyan_s028",
                "artist": "Chatinyan",
                "ArtNowStatus": "Draft",
                "meshokTitle": "КАРТИНА \"Этюд #28\" Художник Мгер ЧАТИНЯН Бумага / Масло, 30x21 см",
                "meshokRecommended": false,
                "artworkStatusColor": "#1265B5",
                "artworkStatus": "Sale",
                "meshokBold": false,
                "meshokStatus": "Dfart",
                "meshokPrice": 16000,
                "active": true,
                "stickers": ""
            }
        ],
        "totalPages": 109,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "ArtNowArtwork_id",
                1371848
            ],
            [
                "ArtNowDiscountOn",
                1371848
            ],
            [
                "ArtNowDiscount_id",
                1371848
            ],
            [
                "ArtNowPrice",
                1371848
            ],
            [
                "ArtNowPublishTime",
                1371848
            ],
            [
                "ArtNowResponse",
                1371848
            ],
            [
                "ArtNowStatus",
                1371848
            ],
            [
                "ArtNowStatusColor",
                1371848
            ],
            [
                "ArtNow_url",
                1371848
            ],
            [
                "active",
                1371848
            ],
            [
                "artfinderStatusColor",
                1371848
            ],
            [
                "artfinder_url",
                1371848
            ],
            [
                "artist",
                1371848
            ],
            [
                "artmajeurStatusColor",
                1371848
            ],
            [
                "artmajeur_url",
                1371848
            ],
            [
                "artworkStatus",
                1371848
            ],
            [
                "artworkStatusColor",
                1371848
            ],
            [
                "ebayItem_id",
                1371848
            ],
            [
                "ebayStatus",
                1371848
            ],
            [
                "ebayStatusColor",
                1371848
            ],
            [
                "ebay_account",
                1371848
            ],
            [
                "ebay_url",
                1371848
            ],
            [
                "ebayauctionStatusColor",
                1371848
            ],
            [
                "ebayauction_url",
                1371848
            ],
            [
                "etsyStatusColor",
                1371848
            ],
            [
                "etsy_url",
                1371848
            ],
            [
                "id",
                1371848
            ],
            [
                "listingLog.api_response",
                99017356
            ],
            [
                "listingLog.date",
                99017356
            ],
            [
                "listingLog.event",
                99017356
            ],
            [
                "listingLog.id",
                99017356
            ],
            [
                "listingLog.places",
                99017356
            ],
            [
                "listingLog.status",
                99017356
            ],
            [
                "listingLog.value",
                99017356
            ],
            [
                "meshokBold",
                1371848
            ],
            [
                "meshokDescription",
                1371848
            ],
            [
                "meshokFree",
                1371848
            ],
            [
                "meshokItem_id",
                1371848
            ],
            [
                "meshokLongevity",
                1371848
            ],
            [
                "meshokPrice",
                1371848
            ],
            [
                "meshokPublishTime",
                1371848
            ],
            [
                "meshokRecommended",
                1371848
            ],
            [
                "meshokRespond",
                1371848
            ],
            [
                "meshokSaleType",
                1371848
            ],
            [
                "meshokStartPrice",
                1371848
            ],
            [
                "meshokStatus",
                1371848
            ],
            [
                "meshokStatusColor",
                1371848
            ],
            [
                "meshokTitle",
                1371848
            ],
            [
                "meshok_url",
                1371848
            ],
            [
                "name",
                1371848
            ],
            [
                "ozonStatusColor",
                1371848
            ],
            [
                "ozon_url",
                1371848
            ],
            [
                "pictures",
                1371848
            ],
            [
                "short_description",
                1371848
            ],
            [
                "sku.cost",
                1371826
            ],
            [
                "sku.id",
                1371826
            ],
            [
                "sku.paid",
                1371826
            ],
            [
                "sku.warehouse",
                1371826
            ],
            [
                "stickerColor",
                1371848
            ],
            [
                "stickers.id",
                99075200
            ],
            [
                "stickers.sticker",
                99075200
            ],
            [
                "thumbnail",
                1371848
            ]
        ],
        "writeFields": [
            "id",
            "stickers"
        ],
        "structures": {
            "1371826": {
                "networkID": 4203,
                "sysName": "artworks",
                "name": "Картины",
                "id": 1371826,
                "dateCreated": "2021-04-01T19:57:23Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"SKU\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"15471617307220262\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artist\",\"dataType\":\"link\",\"name\":\"Автор\",\"id\":\"48311617307253557\",\"link\":\"artists\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"artist_places.id\",\"artist_places\",\"last_name_eng\",\"artnow_id\",\"name\",\"last_name\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"Изображение\",\"id\":\"52871617307301637\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"height_cm\",\"dataType\":\"decimal\",\"name\":\"Высота, см\",\"id\":\"49751617397302610\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"width_cm\",\"dataType\":\"decimal\",\"name\":\"Ширина, см\",\"id\":\"39071617397374760\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price\",\"dataType\":\"decimal\",\"name\":\"Цена, руб.\",\"id\":\"57021617307315332\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"created_date\",\"dataType\":\"date\",\"name\":\"Дата добавления\",\"id\":\"79321625229183027\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"thumbnail\",\"dataType\":\"file\",\"name\":\"Миниатюра\",\"id\":\"33951632853665205\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image_1\",\"dataType\":\"file\",\"name\":\"Фото не обрезанное\",\"id\":\"96831617364187782\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image_2\",\"dataType\":\"file\",\"name\":\"Фото с оборота\",\"id\":\"39051617364208409\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image_big\",\"dataType\":\"file\",\"name\":\"Большое фото\",\"id\":\"80751617364221701\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"video\",\"dataType\":\"file\",\"name\":\"Видео\",\"id\":\"37591617725458333\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"imageGoogleDriveID\",\"dataType\":\"string\",\"name\":\"GoogleDrive: Фото\",\"id\":\"37691632084520844\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image1GoogleDriveID\",\"dataType\":\"string\",\"name\":\"GoogleDrive: Фото не обрезанное\",\"id\":\"63391632084538838\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image2GoogleDriveID\",\"dataType\":\"string\",\"name\":\"GoogleDrive: Фото с оборота\",\"id\":\"85071632084540640\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"imageBigGoogleDriveID\",\"dataType\":\"string\",\"name\":\"GoogleDrive: Большое фото\",\"id\":\"33761632084541556\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"images\",\"dataType\":\"file\",\"name\":\"Изображения\",\"id\":\"64821633297002923\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"COA\",\"dataType\":\"string\",\"name\":\"Сертификат Аутентичности\",\"id\":\"62081637875819783\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"phash\",\"dataType\":\"string\",\"name\":\"Прецептивный хэш\",\"id\":\"40781643560061999\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"colors\",\"dataType\":\"array\",\"name\":\"Основные цвета\",\"id\":\"73351643566399575\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":true},{\"sysName\":\"color_1\",\"dataType\":\"string\",\"name\":\"Основной цвет №1\",\"id\":\"79811643567276685\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"color_2\",\"dataType\":\"string\",\"name\":\"Основной цвет №2\",\"id\":\"55951643567286285\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"coudinary_public_id\",\"dataType\":\"string\",\"name\":\"Public ID на Cloudinary\",\"id\":\"92111643623155384\",\"link\":\"\",\"group\":\"1617364168856\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name_eng\",\"dataType\":\"string\",\"name\":\"Name\",\"id\":\"63251617307229759\",\"link\":null,\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"description_eng\",\"dataType\":\"string\",\"name\":\"Description\",\"id\":\"37001617387678775\",\"link\":\"\",\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"short_description_eng\",\"dataType\":\"string\",\"name\":\"Short description\",\"id\":\"39671617387882672\",\"link\":null,\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"tags_eng\",\"dataType\":\"array\",\"name\":\"Tags\",\"id\":\"72951617387940324\",\"link\":\"\",\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":true},{\"sysName\":\"height_inches\",\"dataType\":\"decimal\",\"name\":\"Height, inches\",\"id\":\"14921617397473651\",\"link\":\"\",\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"width_inches\",\"dataType\":\"decimal\",\"name\":\"Width, inches\",\"id\":\"33911617397508148\",\"link\":\"\",\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price_usd\",\"dataType\":\"decimal\",\"name\":\"Price, USD\",\"id\":\"29191617401736641\",\"link\":\"\",\"group\":\"1617387470618\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"29011617350244787\",\"link\":\"Status\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"True\",\"False\"],\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"multipleChoice\":[{\"value\":\"draft\",\"label\":\"Черновик\"},{\"value\":\"active\",\"label\":\"Продается\"},{\"value\":\"to_order\",\"label\":\"Нет в наличии, возможен заказ\"},{\"value\":\"sold\",\"label\":\"Продано\"},{\"value\":\"not_for_sale\",\"label\":\"Не продается\"}]},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"listings_id\",\"dataType\":\"arrayLink\",\"name\":\"Список размещений\",\"id\":\"42601619298844812\",\"link\":\"listings\",\"group\":\"1617387532865\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"places\",\"dataType\":\"arrayLink\",\"name\":\"Площадки\",\"id\":\"21191617307369281\",\"link\":\"places\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"places_blocked\",\"dataType\":\"arrayLink\",\"name\":\"Заблокированные площадки\",\"id\":\"13051618302602071\",\"link\":\"places\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"Вес, кг\",\"id\":\"81601617397267397\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"warehouse\",\"dataType\":\"link\",\"name\":\"Склад\",\"id\":\"54591617397295556\",\"link\":\"Warehouse\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cost\",\"dataType\":\"decimal\",\"name\":\"Закупочная стоимость\",\"id\":\"81471617398432102\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"paid\",\"dataType\":\"boolean\",\"name\":\"Оплачено\",\"id\":\"60961617398495249\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"Yes\",\"No\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"priority\",\"dataType\":\"json\",\"name\":\"Приоритет\",\"id\":\"58851618326587148\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"slider\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"unitName\":\"🔥\",\"booleanOptions\":[\"True\",\"False\"],\"customOptionPlaceholder\":\"Describe your option\",\"range\":{\"min\":1,\"max\":10,\"step\":1},\"customOptionType\":\"textarea\"},\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"Источник добавления в БД\",\"id\":\"31811618415192130\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"main\",\"label\":\"Основной\"},{\"value\":\"Arhive\",\"label\":\" Импорт из SubmiArt\"},{\"value\":\"sheets\",\"label\":\" Импорт из таблиц\"}]},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"Supplier\",\"dataType\":\"link\",\"name\":\"Поставщик\",\"id\":\"61421627642767764\",\"link\":\"ArtSupplier\",\"group\":\"1617387532865\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"source_url\",\"dataType\":\"string\",\"name\":\"Ссылка на источник\",\"id\":\"50141628596802984\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"WebUser\",\"dataType\":\"link\",\"name\":\"Кто добавил\",\"id\":\"53341630513051640\",\"link\":\"WebUser\",\"group\":\"1617387532865\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"warehouseUSA_id\",\"dataType\":\"number\",\"name\":\"Номер на складе в США\",\"id\":\"39001634027238609\",\"link\":\"\",\"group\":\"1617387532865\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"62521617387659649\",\"link\":\"\",\"group\":\"1617387648771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"short_description\",\"dataType\":\"string\",\"name\":\"Краткое описание\",\"id\":\"84171617387818260\",\"link\":null,\"group\":\"1617387648771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"tags\",\"dataType\":\"array\",\"name\":\"Ключевые слова\",\"id\":\"35061617388282940\",\"link\":\"\",\"group\":\"1617387648771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":true},{\"sysName\":\"year\",\"dataType\":\"number\",\"name\":\"Год\",\"id\":\"98641617396969654\",\"link\":\"\",\"group\":\"1617387648771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"orientation\",\"dataType\":\"string\",\"name\":\"Формат\",\"id\":\"77891617473123941\",\"link\":\"\",\"group\":\"1617387648771\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"material_id\",\"dataType\":\"link\",\"name\":\"Материал\",\"id\":\"12071617397013098\",\"link\":\"materials\",\"group\":\"1617396999819\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"medium_id\",\"dataType\":\"link\",\"name\":\"Техника\",\"id\":\"39361617397046676\",\"link\":\"medium\",\"group\":\"1617396999819\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"category_id\",\"dataType\":\"link\",\"name\":\"Раздел\",\"id\":\"55911617397139820\",\"link\":\"category\",\"group\":\"1617396999819\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"style_id\",\"dataType\":\"link\",\"name\":\"Направление\",\"id\":\"27611617397161029\",\"link\":\"style\",\"group\":\"1617396999819\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"subject_id\",\"dataType\":\"link\",\"name\":\"Жанр\",\"id\":\"18031617397182865\",\"link\":\"subject\",\"group\":\"1617396999819\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"buyer_id\",\"dataType\":\"link\",\"name\":\"Покупатель\",\"id\":\"35621617734554085\",\"link\":\"Buyers\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_price\",\"dataType\":\"decimal\",\"name\":\"Цена продажи, руб\",\"id\":\"37861617725147530\",\"link\":\"\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_price_usd\",\"dataType\":\"decimal\",\"name\":\"Цена продажи, USD\",\"id\":\"25311617725181649\",\"link\":\"\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_fee\",\"dataType\":\"decimal\",\"name\":\"Комиссия, руб\",\"id\":\"45011617725219166\",\"link\":\"\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_fee_usd\",\"dataType\":\"decimal\",\"name\":\"Комиссия, USD\",\"id\":\"33491617725243102\",\"link\":\"\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_place\",\"dataType\":\"link\",\"name\":\"Канал продажи\",\"id\":\"78661617725307618\",\"link\":\"places\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artwork_note\",\"dataType\":\"string\",\"name\":\"Примечание\",\"id\":\"97461624183106046\",\"link\":\"\",\"group\":\"1618302508063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_date\",\"dataType\":\"date\",\"name\":\"Дата продажи\",\"id\":\"22741624184781891\",\"link\":\"\",\"group\":\"1618302508063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"order_id\",\"dataType\":\"link\",\"name\":\"Заказ\",\"id\":\"34391631311092290\",\"link\":\"orders\",\"group\":\"1618302508063\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artworkPaymentStatus\",\"dataType\":\"link\",\"name\":\"Статус оплаты\",\"id\":\"16481631643517332\",\"link\":\"paymentstatus\",\"group\":\"1618302508063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artworkShippingStatus\",\"dataType\":\"link\",\"name\":\"Статус доставки\",\"id\":\"98571631646551685\",\"link\":\"shippingstatus\",\"group\":\"1618302508063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"soldStatus\",\"dataType\":\"link\",\"name\":\"Статус проданной работы Sold/Order\",\"id\":\"34751631899392576\",\"link\":\"Status\",\"group\":\"1618302508063\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"meshokListing\",\"dataType\":\"link\",\"name\":\"Мешок\",\"id\":\"37551627574424844\",\"link\":\"meshok\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"meshok_url\",\"dataType\":\"string\",\"name\":\"Ссылка на Мешке\",\"id\":\"93841628508938752\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"meshok_Free_url\",\"dataType\":\"string\",\"name\":\"Бесплатный лот на Мешке\",\"id\":\"44141630619345624\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artnowListing\",\"dataType\":\"link\",\"name\":\"Листинг на ArtNow\",\"id\":\"59641627920801644\",\"link\":\"artnow\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artnow_url\",\"dataType\":\"string\",\"name\":\"Ссылка на ArtNow\",\"id\":\"73381628509013517\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artnowDelete\",\"dataType\":\"boolean\",\"name\":\"Удалить с ArtNow\",\"id\":\"37511631142041528\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artmajeurListing\",\"dataType\":\"link\",\"name\":\"Листинг на Artmajeur\",\"id\":\"25911627979789440\",\"link\":\"artmajeur\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artmajeur_url\",\"dataType\":\"string\",\"name\":\"Ссылка на Artmajeur\",\"id\":\"45261628509066773\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artfinderListing\",\"dataType\":\"link\",\"name\":\"Листинг на Artfinder\",\"id\":\"10101628032557039\",\"link\":\"artfinder\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artfinder_url\",\"dataType\":\"string\",\"name\":\"Ссылка на Artfinder\",\"id\":\"23561628509069585\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"ebay_artegogallery_id\",\"dataType\":\"link\",\"name\":\"Листинг на eBay\",\"id\":\"93351630710200316\",\"link\":\"eBay\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"ebay_artegogallery_url\",\"dataType\":\"string\",\"name\":\"Ссылка на eBay\",\"id\":\"83121630710219753\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"ebay_ebaev_id\",\"dataType\":\"link\",\"name\":\"Листинг на eBay_UK\",\"id\":\"49931630710288645\",\"link\":\"eBay\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"ebay_ebaev_url\",\"dataType\":\"string\",\"name\":\"Ссылка на eBay_UK\",\"id\":\"82851630710311289\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artworkLog\",\"dataType\":\"arrayLink\",\"name\":\"Лог картины\",\"id\":\"84031631728071793\",\"link\":\"artworkLog\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artworkLogText\",\"dataType\":\"string\",\"name\":\"Лог картины текст\",\"id\":\"61441631728743690\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"artworkLogTextAdd\",\"dataType\":\"string\",\"name\":\"Добавить в лог (произвольный текст)\",\"id\":\"77491632502928980\",\"link\":null,\"group\":\"1627574410412\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"endedAllPlaces\",\"dataType\":\"boolean\",\"name\":\"Снято со всех площадок\",\"id\":\"20101631742075290\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Снято\",\"Нужно снять\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"addEverywhere\",\"dataType\":\"json\",\"name\":\"Добавить сразу везде\",\"id\":\"17931635620679145\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"true\",\"label\":\"Добавить везде\"}]},\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"places_for_add\",\"dataType\":\"arrayLink\",\"name\":\"Площадки для добавления\",\"id\":\"97461620078153044\",\"link\":\"places\",\"group\":\"1627574410412\",\"tags\":null,\"indexing\":true,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"planfix_id\",\"dataType\":\"string\",\"name\":\"ID в Планфиксе\",\"id\":\"59771639947765312\",\"link\":\"\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"listing_id\",\"dataType\":\"link\",\"name\":\"Листинг\",\"id\":\"46601644179929008\",\"link\":\"listings\",\"group\":\"1627574410412\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"priority_places\",\"dataType\":\"arrayLink\",\"name\":\"Первоочередное размещение\",\"id\":\"24691619972012677\",\"link\":\"places\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"places_for_change\",\"dataType\":\"arrayLink\",\"name\":\"Снять с продажи\",\"id\":\"39931619991679883\",\"link\":\"listings\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"id\",\"sku\",\"place\",\"listing_url\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"meshok_id\",\"dataType\":\"string\",\"name\":\"ID на Мешке\",\"id\":\"26921624182122348\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"google_label\",\"dataType\":\"string\",\"name\":\"Ключевые от Гугла\",\"id\":\"45121632781072402\",\"link\":null,\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"meshokListingID\",\"dataType\":\"link\",\"name\":\"Публикация на Мешке\",\"id\":\"54261627575389625\",\"link\":\"listings\",\"group\":\"1628508972688\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"json\",\"dataType\":\"json\",\"name\":\"json\",\"id\":\"95201632820697315\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price_usd_d\",\"dataType\":\"decimal\",\"name\":\"price_usd_d\",\"id\":\"52451633186847276\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price_rub\",\"dataType\":\"decimal\",\"name\":\"price_rub\",\"id\":\"13351633166246589\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_price_usd_d\",\"dataType\":\"decimal\",\"name\":\"sold_price_usd\",\"id\":\"51711633186982227\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_price_d\",\"dataType\":\"decimal\",\"name\":\"sold_price\",\"id\":\"18401633186986430\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_fee_usd_d\",\"dataType\":\"decimal\",\"name\":\"sold_fee_usd\",\"id\":\"24211633192747885\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_fee_d\",\"dataType\":\"decimal\",\"name\":\"sold_fee\",\"id\":\"38751633192749668\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cost_d\",\"dataType\":\"decimal\",\"name\":\"cost_d\",\"id\":\"36491633195486846\",\"link\":\"\",\"group\":\"1628508972688\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyOftrue\",\"dataType\":\"json\",\"name\":\"Копия\",\"id\":\"84381631124194791\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"isCopy\",\"label\":\"Копия\"}]},\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyOf\",\"dataType\":\"arrayLink\",\"name\":\"Список копий\",\"id\":\"84621631122612143\",\"link\":\"artworks\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyID\",\"dataType\":\"link\",\"name\":\"Предыдущая копия\",\"id\":\"42281631126281061\",\"link\":\"artworks\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyImage\",\"dataType\":\"file\",\"name\":\"Копия: Новые изображения\",\"id\":\"70021631202755031\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyImage_1\",\"dataType\":\"file\",\"name\":\"Копия: Необрезанное фото\",\"id\":\"31681631203141323\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyImage_2\",\"dataType\":\"file\",\"name\":\"Копия: Фото оборота\",\"id\":\"28101631203146454\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyImage_big\",\"dataType\":\"file\",\"name\":\"Копия: Большое фото\",\"id\":\"98951631203158037\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyPrice\",\"dataType\":\"decimal\",\"name\":\"Копия: Новая цена\",\"id\":\"18071631203205990\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyName\",\"dataType\":\"string\",\"name\":\"Копия: Новое название\",\"id\":\"70531631203259201\",\"link\":null,\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyArtnowPrice\",\"dataType\":\"decimal\",\"name\":\"Копия: Цена для ArtNow\",\"id\":\"27271631203400081\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"newID\",\"dataType\":\"link\",\"name\":\"Копия: Новый артикул\",\"id\":\"54341631205142015\",\"link\":\"artworks\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyPublishNow\",\"dataType\":\"json\",\"name\":\"Копия: Опубликовать минуя черновики\",\"id\":\"84681631206977175\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"now\",\"label\":\"true\"}]},\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyNo\",\"dataType\":\"number\",\"name\":\"Номер копии\",\"id\":\"65181631370777212\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyBuyers\",\"dataType\":\"arrayLink\",\"name\":\"Покупатели копий\",\"id\":\"82371631392933566\",\"link\":\"Buyers\",\"group\":\"1631126236514\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyLastDate\",\"dataType\":\"date\",\"name\":\"Дата продажи последней копии\",\"id\":\"41191631395566626\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"copyLastPlace\",\"dataType\":\"link\",\"name\":\"Место продажи последней копии\",\"id\":\"59441631395600284\",\"link\":\"places\",\"group\":\"1631126236514\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"forTemplate\",\"dataType\":\"boolean\",\"name\":\"Создать шаблон на основе этой картины\",\"id\":\"79101631901936521\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"toDelete\",\"dataType\":\"boolean\",\"name\":\"Удалить черновик\",\"id\":\"14271632500552946\",\"link\":\"\",\"group\":\"1631126236514\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayField1\",\"dataType\":\"string\",\"name\":\"Размеры в-ш\",\"id\":\"74371635974335125\",\"link\":null,\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayField2\",\"dataType\":\"string\",\"name\":\"Материал-техника\",\"id\":\"65571635974410309\",\"link\":null,\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayField3\",\"dataType\":\"string\",\"name\":\"Жанр-стиль\",\"id\":\"75761635975181955\",\"link\":null,\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayFill\",\"dataType\":\"boolean\",\"name\":\"FastWay: Обработано\",\"id\":\"45641635976128197\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayPrice\",\"dataType\":\"boolean\",\"name\":\"FastWay: Цены\",\"id\":\"49911635976771183\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayResult\",\"dataType\":\"boolean\",\"name\":\"Результат заполнения формы\",\"id\":\"24441635977323711\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayResultTitle\",\"dataType\":\"string\",\"name\":\"Result message title\",\"id\":\"92951635977333079\",\"link\":null,\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayResultText\",\"dataType\":\"string\",\"name\":\"Cсылка на сформированную карточку товара\",\"id\":\"59531635977334947\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"fastwayNewID\",\"dataType\":\"string\",\"name\":\"Новый ID\",\"id\":\"30511636188118683\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sold_date_pf\",\"dataType\":\"string\",\"name\":\"Служебное ПФ можно удалить\",\"id\":\"49461640192067785\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"tmp_cloudinary\",\"dataType\":\"boolean\",\"name\":\"Можно удалить\",\"id\":\"82151643648440990\",\"link\":\"\",\"group\":\"1635974311504\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Площадки\",\"id\":1627574410412,\"order\":7},{\"name\":\"Запись о продаже\",\"id\":1618302508063,\"order\":6},{\"name\":\"Статус и наличие\",\"id\":1617387532865,\"order\":0},{\"name\":\"Английский язык\",\"id\":1617387470618,\"order\":2},{\"name\":\"Атрибуты\",\"id\":1617396999819,\"order\":4},{\"name\":\"К удалению\",\"id\":1628508972688,\"order\":8},{\"name\":\"Описания и ключевые\",\"id\":1617387648771,\"order\":3},{\"name\":\"Копия\",\"id\":1631126236514,\"order\":5},{\"name\":\"Удалить\",\"id\":1635974311504,\"order\":9},{\"name\":\"Дополнительные медиа\",\"id\":1617364168856,\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"name\"},{\"sysName\":\"artist\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-02-06T20:39:14Z",
                "createBy": 4244,
                "changedBy": 4244,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "SKU",
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33618304
            },
            "1371848": {
                "networkID": 4203,
                "sysName": "listings",
                "name": "Список всех размещений",
                "id": 1371848,
                "dateCreated": "2021-04-01T20:08:07Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stickerColor\",\"name\":\"Стикер (подсветка)\",\"dataType\":\"string\",\"id\":\"10391644399367241\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayStartTime\",\"name\":\"Дата размещения\",\"dataType\":\"date\",\"id\":\"10431644228795510\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokFree\",\"name\":\"Бесплатный лот\",\"dataType\":\"boolean\",\"id\":\"12211644169258476\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Бесплатный лот\",\"Обычный лот\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowResponse\",\"name\":\"Ответ сервера\",\"dataType\":\"json\",\"id\":\"13251644167322915\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokSaleType\",\"name\":\"Тип продажи (Sale или Auction)\",\"dataType\":\"boolean\",\"id\":\"14951644168469793\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Sale\",\"Auction\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokTitle\",\"name\":\"Заголовок лота (max 100)\",\"dataType\":\"string\",\"id\":\"15441644168410613\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayListingDuration\",\"name\":\"Продолжительность\",\"dataType\":\"string\",\"id\":\"15441644228846946\",\"link\":null,\"group\":\"1644166973166\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebay_url\",\"name\":\"eBay\",\"dataType\":\"string\",\"id\":\"18211644169498004\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayauctionStatus\",\"name\":\"Статус на сайте\",\"dataType\":\"link\",\"id\":\"18601644228682861\",\"link\":\"placesStatus\",\"group\":\"1644176327535\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"etsy_url\",\"name\":\"Etsy\",\"dataType\":\"string\",\"id\":\"19001644176435778\",\"link\":\"\",\"group\":\"1644176293721\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokStatusColor\",\"name\":\"Статус (цвет)\",\"dataType\":\"string\",\"id\":\"19721644169001088\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokStatus\",\"name\":\"Статус на Мешке\",\"dataType\":\"link\",\"id\":\"20191644169008692\",\"link\":\"placesStatus\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"artist\",\"name\":\"Автор\",\"dataType\":\"link\",\"id\":\"21291644172744708\",\"link\":\"artists\",\"group\":\"1644166315031\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayStatus\",\"name\":\"Статус на сайте\",\"dataType\":\"link\",\"id\":\"22031644169505254\",\"link\":\"placesStatus\",\"group\":\"1644166973166\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayPrice\",\"name\":\"Цена на eBay, USD\",\"dataType\":\"decimal\",\"id\":\"23181644228321115\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowPublishTime\",\"name\":\"Время публикации на ArtNow\",\"dataType\":\"date\",\"id\":\"24521644167207062\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"place\",\"name\":\"Сайт\",\"dataType\":\"link\",\"id\":\"25241617307878901\",\"link\":\"places\",\"group\":\"1644166890366\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stickers\",\"name\":\"Стикеры\",\"dataType\":\"arrayLink\",\"id\":\"26441644356516508\",\"link\":\"listingStickers\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"27581644172742591\",\"link\":\"\",\"group\":\"1644166315031\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"listing_status\",\"name\":\"Статус на сайте\",\"dataType\":\"link\",\"id\":\"29211619996964238\",\"link\":\"Status\",\"group\":\"1644166890366\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowStatusColor\",\"name\":\"Цвет (статус)\",\"dataType\":\"string\",\"id\":\"32131644168115144\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokRecommended\",\"name\":\"Рекомендуемый (Y/N)\",\"dataType\":\"boolean\",\"id\":\"37131644168579706\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"artfinderStatusColor\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"43181644176653644\",\"link\":\"\",\"group\":\"1644176344635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"active\",\"name\":\"Активная карточка\",\"dataType\":\"boolean\",\"id\":\"43441644168198277\",\"link\":\"\",\"group\":\"1644166315031\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Активная\",\"Архивная\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokPrice\",\"name\":\"Цена на Мешке (купить сейчас)\",\"dataType\":\"decimal\",\"id\":\"44791644168647442\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayauctionStatusColor\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"44821644176644662\",\"link\":\"\",\"group\":\"1644176327535\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshok_url\",\"name\":\" Мешок\",\"dataType\":\"string\",\"id\":\"45671644168738640\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"listingLog\",\"name\":\"Лог\",\"dataType\":\"arrayLink\",\"id\":\"46981644399878505\",\"link\":\"listingLog\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayauction_url\",\"name\":\"eBay Auction\",\"dataType\":\"string\",\"id\":\"48561644176507680\",\"link\":\"\",\"group\":\"1644176327535\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"artmajeur_url\",\"name\":\"Artmajeur\",\"dataType\":\"string\",\"id\":\"51941644176483110\",\"link\":\"\",\"group\":\"1644176364118\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"thumbnail\",\"name\":\"Миниатюра\",\"dataType\":\"file\",\"id\":\"52731644167254431\",\"link\":\"\",\"group\":\"1644166315031\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayItem_id\",\"name\":\"ID лота на eBay\",\"dataType\":\"string\",\"id\":\"55091644169488622\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"short_description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"55501644172744029\",\"link\":\"\",\"group\":\"1644166315031\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayTitle\",\"name\":\"Заголовок (max 80 знаков)\",\"dataType\":\"string\",\"id\":\"55741644228295017\",\"link\":null,\"group\":\"1644166973166\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayDescription\",\"name\":\"Описание (html)\",\"dataType\":\"string\",\"id\":\"59821644228312136\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokItem_id\",\"name\":\"ID лота на Мешке\",\"dataType\":\"number\",\"id\":\"62541644168737226\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokBold\",\"name\":\"Выделение жирным (Y/N)\",\"dataType\":\"boolean\",\"id\":\"63531644168581207\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayauctionListingDuration\",\"name\":\"Продолжительность торгов\",\"dataType\":\"string\",\"id\":\"64481644228854564\",\"link\":null,\"group\":\"1644176327535\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"listing_result\",\"name\":\"Результат\",\"dataType\":\"json\",\"id\":\"64551619538625205\",\"link\":\"\",\"group\":\"1644166890366\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"radioOptions\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"booleanOptions\":[\"True\",\"False\"],\"customOption\":false,\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"multipleChoice\":[{\"value\":\"success\",\"label\":\"Размещено\"},{\"value\":\"error\",\"label\":\"Ошибка!\"}]},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowDiscount_id\",\"name\":\"Скидка на ArtNow (ID и срок акции)\",\"dataType\":\"link\",\"id\":\"65311644167302182\",\"link\":\"artnow_discount\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"etsyStatusColor\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"65311644176642614\",\"link\":\"\",\"group\":\"1644176293721\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokLongevity\",\"name\":\"Продолжительность торгов в днях\",\"dataType\":\"number\",\"id\":\"65491644168952791\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayauctionCurrentPrice\",\"name\":\"Аукционная цена, USD\",\"dataType\":\"decimal\",\"id\":\"65641644228730547\",\"link\":\"\",\"group\":\"1644176327535\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ozon_url\",\"name\":\"Озон\",\"dataType\":\"string\",\"id\":\"66021644176417456\",\"link\":\"\",\"group\":\"1644176279964\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowPrice\",\"name\":\"Цена для ArtNow\",\"dataType\":\"decimal\",\"id\":\"67171644167110674\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"artworkStatusColor\",\"name\":\"Статус картины (цвет)\",\"dataType\":\"string\",\"id\":\"67481644181000890\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebay_account\",\"name\":\"Аккаунт eBay\",\"dataType\":\"string\",\"id\":\"73851644169464887\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowArtwork_id\",\"name\":\"ID картины на ArtNow\",\"dataType\":\"number\",\"id\":\"73911644167167312\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"sku\",\"name\":\"Артикул\",\"dataType\":\"link\",\"id\":\"74951617307790142\",\"link\":\"artworks\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"places_for_change.id\",\"places_for_change.place\",\"places_for_change\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"ebayauctionStartTime\",\"name\":\"Дата начала торгов\",\"dataType\":\"date\",\"id\":\"76221644228807421\",\"link\":\"\",\"group\":\"1644176327535\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ozonStatusColor\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"76351644176628939\",\"link\":\"\",\"group\":\"1644176279964\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"artmajeurStatusColor\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"78831644176663231\",\"link\":\"\",\"group\":\"1644176364118\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"artworkStatus\",\"name\":\"Статус картины\",\"dataType\":\"link\",\"id\":\"84191644180986673\",\"link\":\"Status\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowDiscountOn\",\"name\":\"Скидка на ArtNow\",\"dataType\":\"boolean\",\"id\":\"86401644189698747\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Скидка\",\"Обычная цена\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokPublishTime\",\"name\":\"Время публикации на Мешке\",\"dataType\":\"date\",\"id\":\"86931644169370276\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokDescription\",\"name\":\"Описание лота\",\"dataType\":\"string\",\"id\":\"88341644168781274\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokStartPrice\",\"name\":\"Аукционная цена\",\"dataType\":\"decimal\",\"id\":\"89791644169142743\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNow_url\",\"name\":\"ArtNow\",\"dataType\":\"string\",\"id\":\"92671644167182314\",\"link\":\"\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokSaleType_old\",\"name\":\"Статус на Мешке (устарело)\",\"dataType\":\"string\",\"id\":\"93571644185013930\",\"link\":\"\",\"group\":\"1644166890366\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"pictures\",\"name\":\"Изображения\",\"dataType\":\"file\",\"id\":\"94741644172959225\",\"link\":\"\",\"group\":\"1644166315031\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"meshokRespond\",\"name\":\"Ответ сервера\",\"dataType\":\"json\",\"id\":\"96721644168999188\",\"link\":\"\",\"group\":\"1644166961082\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"artfinder_url\",\"name\":\"ArtFinder\",\"dataType\":\"string\",\"id\":\"96881644176458295\",\"link\":\"\",\"group\":\"1644176344635\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ebayStatusColor\",\"name\":\"Статус на сайте (цвет)\",\"dataType\":\"string\",\"id\":\"97291644169514157\",\"link\":\"\",\"group\":\"1644166973166\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ArtNowStatus\",\"name\":\"Статус  на ArtNow\",\"dataType\":\"link\",\"id\":\"99041644168072624\",\"link\":\"placesStatus\",\"group\":\"1644166943042\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"eBay Fixprice\",\"id\":1644166973166,\"order\":3},{\"name\":\"ArtNow\",\"id\":1644166943042,\"order\":1},{\"name\":\"ArtFinder\",\"id\":1644176344635,\"order\":7},{\"name\":\"Базовая информация о предмете\",\"id\":1644166315031,\"order\":0},{\"name\":\"Мешок\",\"id\":1644166961082,\"order\":2},{\"name\":\"Legacy (удалить)\",\"id\":1644166890366,\"order\":9},{\"name\":\"etsy\",\"id\":1644176293721,\"order\":6},{\"name\":\"eBay Auction\",\"id\":1644176327535,\"order\":4},{\"name\":\"Artmajeur\",\"id\":1644176364118,\"order\":8},{\"name\":\"Озон\",\"id\":1644176279964,\"order\":5}]",
                "jsonViewIdSettings": "[{\"sysName\":\"sku\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-02-09T10:17:36Z",
                "createBy": 4244,
                "changedBy": 4244,
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33638953
            },
            "99017356": {
                "networkID": 4203,
                "sysName": "listingLog",
                "name": "Лог листингов",
                "id": 99017356,
                "dateCreated": "2021-08-31T10:45:14Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"item\",\"name\":\"Объект\",\"dataType\":\"link\",\"id\":\"11971627733338715\",\"link\":\"artworks\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"api_response\",\"name\":\"Ответ сервера\",\"dataType\":\"json\",\"id\":\"17711644402128597\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"boolean\",\"id\":\"19281627733411173\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Успех\",\"Ошибка\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"event\",\"name\":\"Событие\",\"dataType\":\"string\",\"id\":\"75261627733451401\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"value\",\"name\":\"Передаваемое значение\",\"dataType\":\"string\",\"id\":\"82781644415104546\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Дата\",\"dataType\":\"date\",\"id\":\"91901627733221180\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/YY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"places\",\"name\":\"Площадка\",\"dataType\":\"link\",\"id\":\"94931627733233111\",\"link\":\"places\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"listing_id\",\"name\":\"Листинг\",\"dataType\":\"link\",\"id\":\"97691644399978218\",\"link\":\"listings\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"listing_id\"},{\"sysName\":\"places\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-02-09T14:06:18Z",
                "createBy": 4244,
                "changedBy": 4244,
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33638953
            },
            "99075200": {
                "networkID": 4203,
                "sysName": "listingStickers",
                "name": "Стикеры для листингов",
                "id": 99075200,
                "dateCreated": "2022-02-08T21:50:40Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"sticker\",\"dataType\":\"string\",\"name\":\"Стикер\",\"id\":\"45641644357047218\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"sticker\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-02-08T21:51:10Z",
                "createBy": 4244,
                "changedBy": 4244,
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33638953
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "stickers",
                "name": "Стикеры",
                "dataType": "arrayLink",
                "id": "26441644356516508",
                "link": "listingStickers",
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
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            }
        ],
        "quickSearch": "true",
        "httpParams": {}
    }

    let authExample = {
        // isAuth: false,
        isAuth: false,
        //role: "admin",
        //token: "a256c0c6-6aa1-4706-afad-521d0d37e3f3",
        //user: "manager"
    }

    let exampleForm = {
        "sl": "editEmployeeProfile",
        "formName": "Профиль кандидата",
        "formDesc": "",
        "formButton": "Сохранить",
        "placeholder": "",
        "maxWidth": "500",
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
                        "fieldSysName": "22_functions",
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
                        "sysName": "22_functions",
                        "name": "Функции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions22"
                    },
                    {
                        "fieldSysName": "52_functions",
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
                        "sysName": "52_functions",
                        "name": "Функции для категории 52",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions52"
                    },
                    {
                        "fieldSysName": "Facebook_lonk",
                        "fetch": [],
                        "sysName": "Facebook_lonk",
                        "name": "Facebook",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Instagram_link",
                        "fetch": [],
                        "sysName": "Instagram_link",
                        "name": "Instagram",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "about_last_job",
                        "fetch": [],
                        "sysName": "about_last_job",
                        "name": "Последнее место работы",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "about_last_job_bool",
                        "fetch": [],
                        "sysName": "about_last_job_bool",
                        "name": "Опыт работы",
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
                                "есть опыт",
                                "нет опыта"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "birthday",
                        "fetch": [],
                        "sysName": "birthday",
                        "name": "Дата рождения",
                        "dataType": "date",
                        "format": "",
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
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "Город",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "cities"
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
                        "name": "Username (login)",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang",
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
                        "sysName": "lang",
                        "name": "Знание иностранных языков",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang_cat"
                    },
                    {
                        "fieldSysName": "lang_ch",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_ch",
                        "name": "Уровень владения китайским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_de",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_de",
                        "name": "Уровень владения немецким языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_en",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_en",
                        "name": "Уровень владения английским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_fr",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_fr",
                        "name": "Уровень владения французским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_from_user",
                        "fetch": [],
                        "sysName": "lang_from_user",
                        "name": "Свой вариант",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_id",
                        "name": "Знание иностранных языков",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_it",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_it",
                        "name": "Уровень владения итальянским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_rus",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_rus",
                        "name": "Уровень владения русским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_sp",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "lang_cat_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "lang_sp",
                        "name": "Уровень владения испанским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
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
                        "fieldSysName": "salary_raw",
                        "fetch": [],
                        "sysName": "salary_raw",
                        "name": "Ожидания по доходу ",
                        "dataType": "json",
                        "format": "rangeSlider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "k ₽",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {
                                "max": 300,
                                "min": 20,
                                "step": 10
                            },
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "schedule",
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
                        "sysName": "schedule",
                        "name": "Занятость",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "schedule"
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [],
                        "sysName": "type",
                        "name": "Категория вакансий",
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
                                "2 через 2",
                                "5 через 2"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": "Type2252"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "22_functions",
                        "fetch": [],
                        "sysName": "22_functions",
                        "name": "Функции",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions22"
                    },
                    {
                        "fieldSysName": "52_functions",
                        "fetch": [],
                        "sysName": "52_functions",
                        "name": "Функции для категории 52",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "functions52"
                    },
                    {
                        "fieldSysName": "CV_file",
                        "fetch": [],
                        "sysName": "CV_file",
                        "name": "Резюме",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Facebook_lonk",
                        "fetch": [],
                        "sysName": "Facebook_lonk",
                        "name": "Facebook",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Instagram_link",
                        "fetch": [],
                        "sysName": "Instagram_link",
                        "name": "Instagram",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "about_last_job",
                        "fetch": [],
                        "sysName": "about_last_job",
                        "name": "Последнее место работы",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "about_last_job_bool",
                        "fetch": [],
                        "sysName": "about_last_job_bool",
                        "name": "Опыт работы",
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
                                "есть опыт",
                                "нет опыта"
                            ],
                            "validWeekDays": {
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
                        "fieldSysName": "birthday",
                        "fetch": [],
                        "sysName": "birthday",
                        "name": "Дата рождения",
                        "dataType": "date",
                        "format": "",
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
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "Город",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "cities"
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
                        "name": "Username (login)",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang",
                        "fetch": [],
                        "sysName": "lang",
                        "name": "Знание иностранных языков",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang_cat"
                    },
                    {
                        "fieldSysName": "lang_ch",
                        "fetch": [],
                        "sysName": "lang_ch",
                        "name": "Уровень владения китайским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_de",
                        "fetch": [],
                        "sysName": "lang_de",
                        "name": "Уровень владения немецким языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_en",
                        "fetch": [],
                        "sysName": "lang_en",
                        "name": "Уровень владения английским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_fr",
                        "fetch": [],
                        "sysName": "lang_fr",
                        "name": "Уровень владения французским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_from_user",
                        "fetch": [],
                        "sysName": "lang_from_user",
                        "name": "Свой вариант",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_id",
                        "fetch": [],
                        "sysName": "lang_id",
                        "name": "Знание иностранных языков",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "lang_it",
                        "fetch": [],
                        "sysName": "lang_it",
                        "name": "Уровень владения итальянским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_rus",
                        "fetch": [],
                        "sysName": "lang_rus",
                        "name": "Уровень владения русским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
                    },
                    {
                        "fieldSysName": "lang_sp",
                        "fetch": [],
                        "sysName": "lang_sp",
                        "name": "Уровень владения испанским языком",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "lang"
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
                        "fieldSysName": "salary_raw",
                        "fetch": [],
                        "sysName": "salary_raw",
                        "name": "Ожидания по доходу ",
                        "dataType": "json",
                        "format": "rangeSlider",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "unitName": "k ₽",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {
                                "max": 300,
                                "min": 20,
                                "step": 10
                            },
                            "customOptionType": "textarea"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "schedule",
                        "fetch": [],
                        "sysName": "schedule",
                        "name": "Занятость",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "schedule"
                    },
                    {
                        "fieldSysName": "type",
                        "fetch": [],
                        "sysName": "type",
                        "name": "Категория вакансий",
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
                                "2 через 2",
                                "5 через 2"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "link": "Type2252"
                    }
                ],
                "fields": {
                    "22_functions": {
                        "id": "22_functions",
                        "content": "Функции",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "functions22"
                    },
                    "52_functions": {
                        "id": "52_functions",
                        "content": "Функции для категории 52",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "functions52"
                    },
                    "Facebook_lonk": {
                        "id": "Facebook_lonk",
                        "content": "Facebook",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "Instagram_link": {
                        "id": "Instagram_link",
                        "content": "Instagram",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "about_last_job": {
                        "id": "about_last_job",
                        "content": "Последнее место работы",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null
                    },
                    "about_last_job_bool": {
                        "id": "about_last_job_bool",
                        "content": "Опыт работы",
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
                                "есть опыт",
                                "нет опыта"
                            ],
                            "validWeekDays": {
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
                    "birthday": {
                        "id": "birthday",
                        "content": "Дата рождения",
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
                            "dateFormat": "DD.MM.Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "city": {
                        "id": "city",
                        "content": "Город",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "cities"
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
                        "link": ""
                    },
                    "id": {
                        "id": "id",
                        "content": "Username (login)",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "lang": {
                        "id": "lang",
                        "content": "Знание иностранных языков",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang_cat"
                    },
                    "lang_ch": {
                        "id": "lang_ch",
                        "content": "Уровень владения китайским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_de": {
                        "id": "lang_de",
                        "content": "Уровень владения немецким языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_en": {
                        "id": "lang_en",
                        "content": "Уровень владения английским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_fr": {
                        "id": "lang_fr",
                        "content": "Уровень владения французским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_from_user": {
                        "id": "lang_from_user",
                        "content": "Свой вариант",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "lang_id": {
                        "id": "lang_id",
                        "content": "Знание иностранных языков",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "lang_it": {
                        "id": "lang_it",
                        "content": "Уровень владения итальянским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_rus": {
                        "id": "lang_rus",
                        "content": "Уровень владения русским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
                    },
                    "lang_sp": {
                        "id": "lang_sp",
                        "content": "Уровень владения испанским языком",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "lang"
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
                        "link": ""
                    },
                    "salary_raw": {
                        "id": "salary_raw",
                        "content": "Ожидания по доходу ",
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
                            "unitName": "k ₽",
                            "booleanOptions": [
                                "True",
                                "False"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {
                                "max": 300,
                                "min": 20,
                                "step": 10
                            },
                            "customOptionType": "textarea"
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "schedule": {
                        "id": "schedule",
                        "content": "Занятость",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "schedule"
                    },
                    "type": {
                        "id": "type",
                        "content": "Категория вакансий",
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
                                "2 через 2",
                                "5 через 2"
                            ],
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea"
                        },
                        "write": true,
                        "read": true,
                        "link": "Type2252"
                    },
                    "CV_file": {
                        "id": "CV_file",
                        "content": "Резюме",
                        "type": "field",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "22_functions": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "defaultValueOn": false,
                        "description": "Вакансии в шоурумах, магазинах, салонах, фитнес-клубах и ресторанном бизнесе",
                        "quickSearchSL": "function22Displayed",
                        "defaultValue": ""
                    },
                    "52_functions": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": false,
                        "description": "Вакансии в креативе, бизнесе и стажировки"
                    },
                    "city": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false,
                        "defaultValue": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                        "required": true
                    },
                    "firstName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": true
                    },
                    "lastName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "salary_raw": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": true,
                        "defaultValue": {
                            "secondValue": 100,
                            "firstValue": 50
                        },
                        "descriptionFlag": true,
                        "description": "Доход в месяц, тыс.  ₽"
                    },
                    "type": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false,
                        "defaultValueOn": true,
                        "defaultValue": "22"
                    },
                    "Facebook_lonk": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "опционально"
                    },
                    "Instagram_link": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "опционально"
                    },
                    "lang_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langEng"
                    },
                    "about_last_job": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "Опишите последнее место работы: должность, название компании, продолжительность"
                    },
                    "schedule": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "about_last_job_bool": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true
                    },
                    "birthday": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": true,
                        "hidden": false
                    },
                    "lang": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "lang_ch": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langCh"
                    },
                    "lang_de": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langDe"
                    },
                    "lang_en": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langEng"
                    },
                    "lang_fr": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langFr"
                    },
                    "lang_it": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langIt"
                    },
                    "lang_sp": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langSp"
                    },
                    "lang_from_user": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "lang_rus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "langRu"
                    },
                    "CV_file": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": false,
                        "descriptionFlag": true,
                        "description": "Вы можете загрузить файл (pdf)"
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "Основная информация",
                        "fieldIds": [
                            "firstName",
                            "lastName",
                            "birthday",
                            "city",
                            "id",
                            "Instagram_link",
                            "Facebook_lonk",
                            "about_last_job_bool"
                        ]
                    },
                    "39401609181601788": {
                        "id": "39401609181601788",
                        "title": "Ожидаемый доход",
                        "fieldIds": [
                            "salary_raw"
                        ]
                    },
                    "24571609181681819": {
                        "id": "24571609181681819",
                        "title": "Функции для графика 2/2",
                        "fieldIds": [
                            "22_functions"
                        ],
                        "cond": [
                            {
                                "id": "10781637228072872",
                                "field": "type",
                                "value": "22"
                            }
                        ]
                    },
                    "21061609181696456": {
                        "id": "21061609181696456",
                        "title": "Функции для графика 5/2",
                        "fieldIds": [
                            "52_functions"
                        ],
                        "cond": []
                    },
                    "82661637227887760": {
                        "id": "82661637227887760",
                        "title": "Последнее место работы",
                        "fieldIds": [
                            "about_last_job"
                        ],
                        "display": false,
                        "cond": [
                            {
                                "id": "88691637227953719",
                                "field": "about_last_job_bool",
                                "value": "true"
                            }
                        ]
                    },
                    "27871637227987594": {
                        "id": "27871637227987594",
                        "title": "New section",
                        "fieldIds": [
                            "schedule",
                            "type"
                        ]
                    },
                    "74791637228100031": {
                        "id": "74791637228100031",
                        "title": "New section",
                        "fieldIds": [
                            "lang"
                        ]
                    },
                    "88181637228548417": {
                        "id": "88181637228548417",
                        "title": "английский",
                        "fieldIds": [
                            "lang_en",
                            "lang_id"
                        ],
                        "cond": [
                            {
                                "id": "82981637228575224",
                                "field": "lang",
                                "value": "английский"
                            }
                        ]
                    },
                    "67101637228634133": {
                        "id": "67101637228634133",
                        "title": "испанский",
                        "fieldIds": [
                            "lang_sp"
                        ],
                        "cond": [
                            {
                                "id": "68871637231125355",
                                "field": "lang",
                                "value": "испанский"
                            }
                        ]
                    },
                    "19341637231047628": {
                        "id": "19341637231047628",
                        "title": "немецкий",
                        "fieldIds": [
                            "lang_de"
                        ],
                        "cond": [
                            {
                                "id": "75251637231068811",
                                "field": "lang",
                                "value": "немецкий"
                            }
                        ]
                    },
                    "99191637231132351": {
                        "id": "99191637231132351",
                        "title": "итальянский",
                        "fieldIds": [
                            "lang_it"
                        ],
                        "cond": [
                            {
                                "id": "50761637231198132",
                                "field": "lang",
                                "value": "итальянский"
                            }
                        ]
                    },
                    "17421637231143781": {
                        "id": "17421637231143781",
                        "title": "французский",
                        "fieldIds": [
                            "lang_fr"
                        ],
                        "cond": [
                            {
                                "id": "88991637231153851",
                                "field": "lang",
                                "value": "французский"
                            }
                        ]
                    },
                    "79481637231168015": {
                        "id": "79481637231168015",
                        "title": "китайский",
                        "fieldIds": [
                            "lang_ch"
                        ],
                        "cond": [
                            {
                                "id": "23081637231182473",
                                "field": "lang",
                                "value": "китайский"
                            }
                        ]
                    },
                    "49231637235858050": {
                        "id": "49231637235858050",
                        "title": "другой язык",
                        "fieldIds": [
                            "lang_from_user"
                        ],
                        "cond": [
                            {
                                "id": "97911637235860697",
                                "field": "lang",
                                "value": "другой язык"
                            }
                        ]
                    },
                    "55461637827209784": {
                        "id": "55461637827209784",
                        "title": "New section",
                        "fieldIds": [
                            "lang_rus"
                        ],
                        "cond": [
                            {
                                "id": "79351637827445084",
                                "field": "lang",
                                "value": "русский"
                            }
                        ]
                    },
                    "60821644480281556": {
                        "id": "60821644480281556",
                        "title": "New section",
                        "fieldIds": [
                            "CV_file"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "82661637227887760",
                    "27871637227987594",
                    "24571609181681819",
                    "21061609181696456",
                    "39401609181601788",
                    "60821644480281556",
                    "74791637228100031",
                    "88181637228548417",
                    "67101637228634133",
                    "19341637231047628",
                    "99191637231132351",
                    "17421637231143781",
                    "79481637231168015",
                    "49231637235858050",
                    "55461637827209784"
                ]
            },
            "fields": {
                "22_functions": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "defaultValueOn": false,
                    "description": "Вакансии в шоурумах, магазинах, салонах, фитнес-клубах и ресторанном бизнесе",
                    "quickSearchSL": "function22Displayed",
                    "defaultValue": "",
                    "searchData": [
                        {
                            "key": "b5d6682c-09da-4d8b-86ef-abe3295da502",
                            "value": "Шеф"
                        },
                        {
                            "key": "772fafad-36a7-4ccc-b338-ebb3b670e554",
                            "value": "Официант"
                        },
                        {
                            "key": "ee6cd622-e697-4d59-bca0-d34d4d6fa058",
                            "value": "Хостес"
                        },
                        {
                            "key": "8736e749-48f8-4dfb-ba6d-483d0ce9f350",
                            "value": "Бариста"
                        },
                        {
                            "key": "cf10904f-55e2-4678-8b88-3f01f70b8308",
                            "value": "Повар универсал"
                        },
                        {
                            "key": "d6d250fd-4f29-4b09-a140-9757ac0266aa",
                            "value": "Управляющий"
                        },
                        {
                            "key": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92",
                            "value": "Администратор"
                        },
                        {
                            "key": "58b198e4-6ec9-4cde-87cf-8edf8d88af95",
                            "value": "Продавец-консультант"
                        },
                        {
                            "key": "3a6782d8-5938-4d7c-acc3-00c072db4b71",
                            "value": "Визажист"
                        },
                        {
                            "key": "c127df30-c9ce-4063-9a66-a005d4c9695a",
                            "value": "Мастер маникюра"
                        },
                        {
                            "key": "622fe247-51cb-4295-a8b4-eaf189dd807d",
                            "value": "Косметолог"
                        },
                        {
                            "key": "d91564fe-70ce-406a-8119-cbbe2deef5a4",
                            "value": "Фитнес-тренер"
                        },
                        {
                            "key": "9b643b1a-5e5d-45c2-9bfa-847fca9201c0",
                            "value": "Стилист"
                        },
                        {
                            "key": "9153c4b7-e930-48ed-92e8-da4abbf63d3f",
                            "value": "Бровист"
                        },
                        {
                            "key": "bd30b2d4-5c78-4619-8a3d-d8d7846b9ff3",
                            "value": "Массаж"
                        },
                        {
                            "key": "b6b7ec50-543f-43a9-9b6e-47c7859de0a9",
                            "value": "Кондитер"
                        },
                        {
                            "key": "1b4c64cd-a6b6-4039-ad51-dd96bddc4c19",
                            "value": "Бармен"
                        },
                        {
                            "key": "819710b2-4402-4dba-9d84-3508670a5aa4",
                            "value": "Лашмейкер"
                        },
                        {
                            "key": "cca21f9d-7265-4faf-848c-5cce731d806f",
                            "value": "Мерчендайзер"
                        },
                        {
                            "key": "3d557adf-d332-4741-afaf-8538bdca86a4",
                            "value": "Остеопат"
                        },
                        {
                            "key": "fbbb2666-e00e-47f3-8235-0a5f59eadc8c",
                            "value": "Менеджер интернет-магазина"
                        },
                        {
                            "key": "9e071824-e8b4-4fb8-82a4-7567ecd6876a",
                            "value": "Флорист"
                        },
                        {
                            "key": "6db6c43a-0b91-4dd6-a872-19afe943f23f",
                            "value": "Кондитер"
                        },
                        {
                            "key": "86ec0c01-83b7-47d9-b346-99c90a33037d",
                            "value": "Пекарь"
                        },
                        {
                            "key": "d4dbbd3d-2351-4019-aba1-b82890fd8b26",
                            "value": "Менеджер шоурума"
                        },
                        {
                            "key": "45d41e97-bb33-4776-9c6c-901bbc341bf0",
                            "value": "Оператор заказов"
                        },
                        {
                            "key": "70d1cea8-f027-43d3-b225-a4b33b36fccd",
                            "value": "Повар заготовщик"
                        },
                        {
                            "key": "166d6234-0a64-4f17-b88e-43e28495a951",
                            "value": "Курьер"
                        },
                        {
                            "key": "009d679a-11c2-44fe-9665-cf5b2125deb1",
                            "value": "Онлайн-консультант"
                        },
                        {
                            "key": "f6943029-4c27-4f80-a07c-6f7e6d3ced4e",
                            "value": "Ассистент"
                        },
                        {
                            "key": "c5474ed3-c7f6-440f-a48b-05f1782807da",
                            "value": "Су-шеф"
                        },
                        {
                            "key": "443ae3b7-b2e0-4fa4-a1fb-52f265f2918f",
                            "value": "Сомелье"
                        },
                        {
                            "key": "87517e62-d793-44f4-a971-4c3ce2e58d20",
                            "value": "Парикмахер"
                        },
                        {
                            "key": "07afb7d5-fff4-4d22-84d1-da9438ccf64d",
                            "value": "Кавист"
                        },
                        {
                            "key": "0c935991-2dcb-423a-9901-4cea66cb9939",
                            "value": "Контент"
                        },
                        {
                            "key": "e0e6d108-f9b0-4e9e-a9cf-f7719fbd1544",
                            "value": "SMM"
                        },
                        {
                            "key": "1a1df654-bfe2-4ebe-a707-bf8ee56cfa5f",
                            "value": "PR"
                        },
                        {
                            "key": "6ec16361-f5c1-41a5-befa-f4e3d1d81da1",
                            "value": "Копирайтинг"
                        },
                        {
                            "key": "d2ce0f98-bb0f-4306-9c41-70d3a177c455",
                            "value": "Редактор"
                        },
                        {
                            "key": "7286b17c-95a8-44b8-8d6c-e1b15f8be36d",
                            "value": "Фотограф"
                        },
                        {
                            "key": "5b149780-c689-4081-875c-61f115976e77",
                            "value": "Таргетинг"
                        },
                        {
                            "key": "43c63190-bac6-4a79-a988-b02109615869",
                            "value": "Графический дизайн"
                        },
                        {
                            "key": "f311d5c7-41db-4967-942a-fc2c62d2ea37",
                            "value": "HR "
                        },
                        {
                            "key": "22eef2f7-ca15-4e28-ab44-61a0d70e5a7e",
                            "value": "Видеограф"
                        },
                        {
                            "key": "cbdb7a87-0847-4200-bc4f-9b9a66e87f90",
                            "value": "Дизайнер"
                        },
                        {
                            "key": "5121a5a0-298d-4ffd-be89-82ac70faff33",
                            "value": "Байер"
                        },
                        {
                            "key": "1bbd2373-8802-4516-b184-f4edad825d61",
                            "value": "Бренд менеджер "
                        },
                        {
                            "key": "04ba4d23-9645-461a-92cd-1cf5762a40ff",
                            "value": "IT "
                        },
                        {
                            "key": "1fca9201-0d84-4368-af64-83d88de9f47d",
                            "value": "UI/UX дизайн"
                        },
                        {
                            "key": "6ba32b16-63f5-4a7d-af67-0bbc5b748524",
                            "value": "Продюсер"
                        },
                        {
                            "key": "2b0f62d0-e930-43ad-a7c1-f8eb09064702",
                            "value": "Маркетинг"
                        },
                        {
                            "key": "566ae8b7-e20a-43f2-abb2-7571ffba9693",
                            "value": "Art-директор"
                        },
                        {
                            "key": "73a9d655-0f82-4464-bc67-bf78402064ea",
                            "value": "Стажер"
                        },
                        {
                            "key": "30ac7bff-a88b-45ec-8d36-291555baf92f",
                            "value": "Персональный ассистент"
                        },
                        {
                            "key": "21d634ac-5cb5-42e0-b388-d5f7744cdc7e",
                            "value": "Motion-дизайнер"
                        },
                        {
                            "key": "23f782b8-4fb1-4fe3-9e26-d0142a7866e1",
                            "value": "Продакт менеджер"
                        },
                        {
                            "key": "83858b55-e0da-4dbb-baa1-d9a85074f185",
                            "value": "Пошив"
                        },
                        {
                            "key": "ed0ff032-7909-4883-b431-ffdba34bb2d9",
                            "value": "Производство "
                        },
                        {
                            "key": "49bd291f-a51a-448a-895f-167945404850",
                            "value": "Бухгалтер"
                        },
                        {
                            "key": "1e966e56-e548-45be-89b1-67d37f665956",
                            "value": "Ретушер"
                        },
                        {
                            "key": "e221fb6f-c9c2-4baf-8b2b-1c4a991dfe58",
                            "value": "Account"
                        },
                        {
                            "key": "561c347d-619e-4882-ba25-c8a42243210c",
                            "value": "Sale менеджер"
                        },
                        {
                            "key": "6cae3c05-5aea-4c81-9ae8-120e5c60f2aa",
                            "value": "Ювелир"
                        },
                        {
                            "key": "810f70f6-65ba-4d66-9f29-ae34c8e591e7",
                            "value": "Event менеджер"
                        },
                        {
                            "key": "f7d8ae3c-0fce-418b-9cc5-5d5dd710c7ee",
                            "value": "Заместитель директора"
                        },
                        {
                            "key": "e60b3360-78e1-4b21-9ad2-d9c830e522ae",
                            "value": "Рекрутер"
                        },
                        {
                            "key": "f024cdf3-66be-4933-9ea8-2b4c7aac4af9",
                            "value": "Тренинг менеджер"
                        },
                        {
                            "key": "4ef4bb20-639c-4fe5-908f-71f0de661ce4",
                            "value": "Документооборот "
                        },
                        {
                            "key": "e32188a0-db87-497c-a800-0187a5324643",
                            "value": "Менеджер по работе с клиентами"
                        },
                        {
                            "key": "7577189e-ef1e-4db0-8663-5d63c4b5cbd3",
                            "value": "Креатор"
                        },
                        {
                            "key": "8201e9a2-bf07-45e2-83b9-634b0bb65628",
                            "value": "Повар холодного цеха"
                        },
                        {
                            "key": "fecb2530-f166-4a09-9ff2-76e233bfac41",
                            "value": "Сушист"
                        },
                        {
                            "key": "284fc441-154f-4166-98cd-4a78ad18cec4",
                            "value": "Пиццайоло"
                        },
                        {
                            "key": "da8074bf-7779-4558-ab48-8a63ec85cb96",
                            "value": "Кассир"
                        },
                        {
                            "key": "427d0b76-f6ee-42d6-ab30-71a7302f164c",
                            "value": "Технолог"
                        },
                        {
                            "key": "bc73b255-90a1-460f-a7a1-241a108856b0",
                            "value": "Клининг"
                        },
                        {
                            "key": "59ed9514-df6f-4ae8-97e1-8d658b435381",
                            "value": "Кладовщик"
                        },
                        {
                            "key": "d98dbd5a-b912-4383-9408-51ac5c57ecf4",
                            "value": "*Мало опыта (получать вакансии из этой сферы, которые не требуют опыта)"
                        },
                        {
                            "key": "53f31cce-75ef-4342-81e6-f7dab094b261",
                            "value": "Повар горячего цеха"
                        },
                        {
                            "key": "70f751a1-6772-4ee6-b88d-a7f55841b3d1",
                            "value": "Менеджер проектов"
                        },
                        {
                            "key": "d04beb82-ac19-4f02-a0ef-fb6907e32bfd",
                            "value": "Товаровед"
                        },
                        {
                            "key": "fed0f49a-e210-4499-a2a6-24f6c6a6aad6",
                            "value": "Багажист"
                        },
                        {
                            "key": "a18ce212-0e7e-42d1-aab4-0412698815ec",
                            "value": "Беллмен"
                        }
                    ]
                },
                "52_functions": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": false,
                    "description": "Вакансии в креативе, бизнесе и стажировки"
                },
                "city": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false,
                    "defaultValue": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                    "required": true,
                    "searchData": [
                        {
                            "key": "5f07b0e5-cdeb-4b6d-bd7d-1b5aa25d597b",
                            "value": "Астрахань"
                        },
                        {
                            "key": "efd0190e-1a19-40a7-9d00-b695b60e7b18",
                            "value": "Новосибирск"
                        },
                        {
                            "key": "71a52f70-4701-476f-a9eb-065ed0ce34c0",
                            "value": "Тюмень"
                        },
                        {
                            "key": "cf89852c-0979-4dc2-a688-9f5f40e5f7b1",
                            "value": "Иркутск"
                        },
                        {
                            "key": "9f937f4d-fff3-4e95-9833-05edba95e9fb",
                            "value": "Киров"
                        },
                        {
                            "key": "2985fa84-8a83-4cfe-8ac8-086b46480e1b",
                            "value": "Уфа"
                        },
                        {
                            "key": "c272e7cd-d3c1-41a6-8ef3-731c1b6d3b0b",
                            "value": "Тольятти"
                        },
                        {
                            "key": "fa3a51d6-2784-48aa-acb6-58a4934260cb",
                            "value": "Нижний Новгород"
                        },
                        {
                            "key": "e32a86b6-07a0-4ee6-b380-6b51a72f4937",
                            "value": "Пенза"
                        },
                        {
                            "key": "fa8828c2-03ab-4a44-9301-407331a645bc",
                            "value": "Томск"
                        },
                        {
                            "key": "155a6363-9fb5-4d1c-b033-774825f25f1d",
                            "value": "Калининград"
                        },
                        {
                            "key": "a537ad97-3d9a-4247-ab7c-c5fd09e323d4",
                            "value": "Пятигорск"
                        },
                        {
                            "key": "419030a9-a9dc-4a41-a633-a23dbbb65116",
                            "value": "Норильск"
                        },
                        {
                            "key": "141bf2ba-a924-4d61-8f4a-abe19dd79b5f",
                            "value": "Арзамас"
                        },
                        {
                            "key": "beed9e2a-51f1-447b-973a-c369bf297e19",
                            "value": "Сыктывкар"
                        },
                        {
                            "key": "8ab91dfb-83c1-44fb-af26-7487894a1569",
                            "value": "Нижнекамск"
                        },
                        {
                            "key": "a0ec46a3-44de-4a4a-a0dc-126b0c4afbf5",
                            "value": "Балашиха"
                        },
                        {
                            "key": "4f04826b-a0f7-4abd-8261-e81b5f869b69",
                            "value": "Санкт-Петербург"
                        },
                        {
                            "key": "fff854f9-473f-46d8-afd2-318abd771a04",
                            "value": "Воронеж"
                        },
                        {
                            "key": "b7ca406f-71d8-4125-b22b-1c4b3b5b3873",
                            "value": "Междуреченск"
                        },
                        {
                            "key": "f6c16e58-b736-4fb3-b1f4-bf988f2b7fc2",
                            "value": "Северодвинск"
                        },
                        {
                            "key": "8d8ee02c-05ca-4f16-b118-405f0a4a2028",
                            "value": "Магнитогорск"
                        },
                        {
                            "key": "15d359fc-e894-4f19-8279-0195fa45b8f3",
                            "value": "Улан-Удэ"
                        },
                        {
                            "key": "35926902-ce08-4620-b791-a957b8e030bf",
                            "value": "Ульяновск"
                        },
                        {
                            "key": "3625e59b-92be-4931-be3b-1657b1f1eab4",
                            "value": "Великий Новгород"
                        },
                        {
                            "key": "f5df55f5-7f2a-4d85-b9c3-c88b89fdf8b6",
                            "value": "Химки"
                        },
                        {
                            "key": "64dfbbca-a11f-4ca5-a9fa-4fbb6b2d868c",
                            "value": "Батайск"
                        },
                        {
                            "key": "42af9a7c-b7ea-4079-91a5-65b408ddc2de",
                            "value": "Тула"
                        },
                        {
                            "key": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                            "value": "Москва"
                        },
                        {
                            "key": "c8c7d6d0-4fc6-41dd-a799-a8ad91e86fe7",
                            "value": "Казань"
                        },
                        {
                            "key": "387c5608-bfe7-48a9-808e-1f394fd46228",
                            "value": "Уссурийск"
                        },
                        {
                            "key": "5347ab07-6807-496e-932b-4db13ec17ac3",
                            "value": "Вологда"
                        },
                        {
                            "key": "aa11ad14-a9f4-42ee-acad-06047ebdf17a",
                            "value": "Саранск"
                        },
                        {
                            "key": "e55baa9d-693a-4b17-8dd5-492d67a9bc69",
                            "value": "Рыбинск"
                        },
                        {
                            "key": "c7e0c655-930b-455a-b21e-09b823ec6ba8",
                            "value": "Ноябрьск"
                        },
                        {
                            "key": "6a9fc335-cbc3-4f44-addf-8c8ca81ac238",
                            "value": "Находка"
                        },
                        {
                            "key": "e37beb72-222e-4cdf-acd2-f36100784e15",
                            "value": "Волжский"
                        },
                        {
                            "key": "e980a012-b87e-46fa-98b9-bc62c29f432f",
                            "value": "Ижевск"
                        },
                        {
                            "key": "d317eccc-2c59-4443-adda-5dcb267453a0",
                            "value": "Красноярск"
                        },
                        {
                            "key": "2fda8d82-7c06-46f8-bc25-6df163a7b554",
                            "value": "Волгоград"
                        },
                        {
                            "key": "dbe428b0-33d4-451d-ba51-82d8bcd0d6d4",
                            "value": "Нефтеюганск"
                        },
                        {
                            "key": "ecb2b6a4-dd90-4d7a-9873-97f2417042cc",
                            "value": "Пушкино"
                        },
                        {
                            "key": "20a74ee5-5cd4-45b1-a243-aa7db323a0c2",
                            "value": "Тамбов"
                        },
                        {
                            "key": "14aca2a9-a7c1-4b94-baa3-011851f8c2f1",
                            "value": "Новочеркасск"
                        },
                        {
                            "key": "dfc75bdc-ac4d-41b6-bdad-220ea284a00e",
                            "value": "Ярославль"
                        },
                        {
                            "key": "d7b0a7a9-71ca-484f-9a43-5629d9226850",
                            "value": "Северск"
                        },
                        {
                            "key": "b2a7a390-a8cd-46e3-b2b0-219bd356343f",
                            "value": "Новомосковск"
                        },
                        {
                            "key": "a4d031ad-645c-4c5c-86f9-2a85819dc283",
                            "value": "Мытищи"
                        },
                        {
                            "key": "8b9c8a1d-8429-43a6-acc3-b4d2fd2ddf80",
                            "value": "Люберцы"
                        },
                        {
                            "key": "1d0dc234-a8d0-4d14-93a4-42f8beb6e474",
                            "value": "Саратов"
                        },
                        {
                            "key": "a92b6c0a-cabe-4a03-b1b8-808dc039869f",
                            "value": "Липецк "
                        },
                        {
                            "key": "db96b2ff-efb5-48e3-a079-1449024642ea",
                            "value": "Ставрополь"
                        },
                        {
                            "key": "87413717-a238-4c2b-b8b8-b9ebbbd13d88",
                            "value": "Златоуст"
                        },
                        {
                            "key": "ab697bbb-564b-47f3-aa26-2b963422aa45",
                            "value": "Березники"
                        },
                        {
                            "key": "51f7889b-2afd-49e9-b9fe-fdc3d43bb4cb",
                            "value": "Комсомольск-на-Амуре"
                        },
                        {
                            "key": "34b49b0b-f99d-4e79-a433-1a6612d712c5",
                            "value": "Октябрьский"
                        },
                        {
                            "key": "ee7c7efc-2577-4efa-9675-f2bf3b4e3ba1",
                            "value": "Оренбург"
                        },
                        {
                            "key": "a0734bbe-965e-4be4-bf3e-0058587fb0d1",
                            "value": "Чебоксары"
                        },
                        {
                            "key": "6cb5b487-5cb7-4bf4-a197-c1fb7fd141ad",
                            "value": "Курск"
                        },
                        {
                            "key": "e0e43003-5d03-4ed2-812f-13f29d79c5e6",
                            "value": "Рязань"
                        },
                        {
                            "key": "1b8475ce-5637-486c-8902-8e763c05053c",
                            "value": "Набережные Челны"
                        },
                        {
                            "key": "293bb3e2-22b7-4dbd-9d18-1fa7e5321b48",
                            "value": "Иваново"
                        },
                        {
                            "key": "6451bc49-0213-416c-a656-119d4b52b63b",
                            "value": "Армавир"
                        },
                        {
                            "key": "18686d6b-3c73-4e03-9329-2f4c46e0c430",
                            "value": "Рубцовск"
                        },
                        {
                            "key": "81dce290-2cff-406c-bc0d-3914be9534c1",
                            "value": "Артем"
                        },
                        {
                            "key": "a952104f-36d4-4ed0-9ebb-a52b3135c8a8",
                            "value": "Шахты"
                        },
                        {
                            "key": "a20d2a73-9aa6-4353-8aad-e0556648dbea",
                            "value": "Каспийск"
                        },
                        {
                            "key": "0430d3db-b2b6-4745-a6b7-7aa3d1e2cd00",
                            "value": "Новороссийск"
                        },
                        {
                            "key": "923858f8-28a2-4ff8-8c3c-fc96aa7081c7",
                            "value": "Коломна"
                        },
                        {
                            "key": "2c7b72c2-c88d-4478-8a87-9f1c442b6dd4",
                            "value": "Камышин"
                        },
                        {
                            "key": "312c47b1-855c-462f-bcbc-92616220e080",
                            "value": "Стерлитамак"
                        },
                        {
                            "key": "59dc4c08-4a5b-4a21-bede-5772eae25d69",
                            "value": "Ессентуки "
                        },
                        {
                            "key": "c0f6e5fe-15e7-469a-9dcc-6740e29585ac",
                            "value": "Якутск"
                        },
                        {
                            "key": "6483da5c-3d7d-4e62-a5b7-c259f5b11f0f",
                            "value": "Орел"
                        },
                        {
                            "key": "6aa99a15-e1d3-4318-9f63-2a07b63690e1",
                            "value": "Подольск"
                        },
                        {
                            "key": "9e5fb78a-03c1-4016-a7f3-8341c0cbfcf6",
                            "value": "Краснодар"
                        },
                        {
                            "key": "68bcde48-bffe-4d82-aab2-c04dd3393e89",
                            "value": "Омск"
                        },
                        {
                            "key": "ff68b6d3-8478-4520-8a59-897b992f5f87",
                            "value": "Нижний Тагил"
                        },
                        {
                            "key": "0385a585-a0bf-4c62-835d-5c2343341ac4",
                            "value": "Белгород"
                        },
                        {
                            "key": "5c236ec0-8f7a-4fa5-8e48-24d21f1ea39e",
                            "value": "Чита"
                        },
                        {
                            "key": "8cb8d65f-0e5b-4af3-a41f-db90ca5a9647",
                            "value": "Грозный"
                        },
                        {
                            "key": "1dca24bc-dcbe-49a2-9392-1cbf0cd6a729",
                            "value": "Ангарск"
                        },
                        {
                            "key": "5f4e2ed6-c77c-4ce3-bc36-5e639a4a975b",
                            "value": "Новокузнецк"
                        },
                        {
                            "key": "a5e850fa-0ce2-4f5f-a276-de5c731626ff",
                            "value": "Барнаул"
                        },
                        {
                            "key": "405608e6-a8d2-44c3-b371-87ac6762741a",
                            "value": "Владивосток"
                        },
                        {
                            "key": "7a211c47-1b4a-42b2-97ee-4c690ae147fd",
                            "value": "Самара"
                        },
                        {
                            "key": "49e45256-e242-41a6-b7ba-ea5c597dc67d",
                            "value": "Кисловодск"
                        },
                        {
                            "key": "11edc61d-a00f-4ec8-b88e-d35b4eca2a19",
                            "value": "Обнинск"
                        },
                        {
                            "key": "183be710-49ea-42b1-bfcb-8391188d1864",
                            "value": "Волгодонск"
                        },
                        {
                            "key": "411c9c4a-6590-4f12-9340-b268d1bade7b",
                            "value": "Екатеринбург"
                        },
                        {
                            "key": "ee69e04b-bb3b-4835-a8c9-2a2fa47c9c1a",
                            "value": "Кемерово"
                        },
                        {
                            "key": "4df6ed07-84ce-4324-a75c-b80b4138b8fa",
                            "value": "Сургут"
                        },
                        {
                            "key": "573d8f7f-2227-4a4e-801b-f77e04a532db",
                            "value": "Дзержинск"
                        },
                        {
                            "key": "b37f7d2f-78fa-48ff-8915-0ce7fcd6e220",
                            "value": "Серпухов"
                        },
                        {
                            "key": "e2591b96-b2ba-4ce8-8c63-9477481effb5",
                            "value": "Тверь"
                        },
                        {
                            "key": "a6b631d7-1456-421a-a8b7-a8880a9d3383",
                            "value": "Челябинск"
                        },
                        {
                            "key": "d1bfc6ed-4a83-4f0a-a553-45a3152a03ff",
                            "value": "Ростов-на-Дону"
                        },
                        {
                            "key": "296ceb44-e414-4026-8037-303680b519af",
                            "value": "Кызыл"
                        },
                        {
                            "key": "796783ae-c833-4dbf-91b2-3e31682ac3ba",
                            "value": "Ковров"
                        },
                        {
                            "key": "88c9dcaa-3f67-4ac7-b852-d4843abd2e0f",
                            "value": "Нефтекамск"
                        },
                        {
                            "key": "2a58d436-70b0-4707-b52e-21c4a91f1ddd",
                            "value": "Хабаровск"
                        },
                        {
                            "key": "fa5befd0-2901-433a-8605-ab4a9e6727cc",
                            "value": "Благовещенск"
                        },
                        {
                            "key": "766bf994-acfb-449b-a637-8ed86a83d4b9",
                            "value": "Абакан"
                        },
                        {
                            "key": "886de159-f52c-4e0f-8fbf-c290e42b8880",
                            "value": "Махачкала"
                        },
                        {
                            "key": "aeeffdac-8680-4de7-a6b9-fbeee9732752",
                            "value": "Брянск"
                        },
                        {
                            "key": "a8b3fdc6-32ca-4210-adee-f779417c6bb6",
                            "value": "Пермь"
                        },
                        {
                            "key": "962b61df-8781-4eec-9943-901c7d411592",
                            "value": "Хасавюрт"
                        },
                        {
                            "key": "d32dbef5-8cff-4874-828b-af6db8aa9846",
                            "value": "Новочебоксарск"
                        },
                        {
                            "key": "f35e0627-33b3-495d-b12b-86a2c9cf5afe",
                            "value": "Димитровград"
                        },
                        {
                            "key": "52b6844a-669d-470a-b3bd-617a8cf18e89",
                            "value": "Первоуральск"
                        },
                        {
                            "key": "59746661-04a6-431f-913c-7100ae693e45",
                            "value": "Салават"
                        },
                        {
                            "key": "07aadf04-2e21-4311-9466-512a18a4afd9",
                            "value": "Щелково"
                        },
                        {
                            "key": "6237f1fb-f593-42ef-bd41-180e83381e30",
                            "value": "Новокуйбышевск"
                        },
                        {
                            "key": "8e3e81bd-5999-4e15-a87b-df3c869c7454",
                            "value": "Петропавловск-Камчатский"
                        },
                        {
                            "key": "fbe1bea9-9ba3-42c3-a708-4e29e2601dbb",
                            "value": "Братск"
                        },
                        {
                            "key": "1653dbff-d223-4dee-8045-dada8685e366",
                            "value": "Альметьевск"
                        },
                        {
                            "key": "25c415a2-29a6-49cb-a9f0-0daaf112175e",
                            "value": "Йошкар-Ола"
                        },
                        {
                            "key": "0b8a1695-8a68-4491-88f1-562ecbbbeab6",
                            "value": "Новый Уренгой"
                        },
                        {
                            "key": "2d0da3cb-1d1c-490e-b67b-70b9f78f8d2f",
                            "value": "Воткинск"
                        },
                        {
                            "key": "e70f3e35-6f6e-4b45-8861-17716a2a3927",
                            "value": "Курган"
                        },
                        {
                            "key": "7a70eb26-b75a-4ce1-bd40-776742689221",
                            "value": "Дербент"
                        },
                        {
                            "key": "ccf4061b-b791-4bd6-925c-245c6257485f",
                            "value": "Невинномысск"
                        },
                        {
                            "key": "cf53a24a-3a9d-4192-acd4-c5829dec337b",
                            "value": "Орск"
                        },
                        {
                            "key": "42790cbf-02d7-4585-b274-117e6ccb0c60",
                            "value": "Сарапул"
                        },
                        {
                            "key": "6d4d13b3-f0b9-40f0-8b88-0c2c76cd8a9e",
                            "value": "Новошахтинск"
                        },
                        {
                            "key": "6b171a2c-af75-46bc-9429-79ec29b54a1d",
                            "value": "Балаково"
                        },
                        {
                            "key": "21bf7b64-5b43-4c95-ba7b-0c678e73b9f6",
                            "value": "Смоленск"
                        },
                        {
                            "key": "0bae7c17-0e1f-40f6-b27c-47458c2c81d8",
                            "value": "Сергиев Посад"
                        },
                        {
                            "key": "b9ac35fb-ef27-4d4b-9fcd-3a806c871ed4",
                            "value": "Бийск"
                        },
                        {
                            "key": "b4a5efd6-0013-4f47-9f5b-709070821c61",
                            "value": "Ачинск"
                        },
                        {
                            "key": "3a132be6-eb78-468e-bfc4-d0d369ff2ff6",
                            "value": "Старый Оскол"
                        },
                        {
                            "key": "1e7dd1af-6fce-4e04-8dcd-bdceaef37f8e",
                            "value": "Владикавказ"
                        },
                        {
                            "key": "9b5e8b83-d806-4855-ae3d-3b5d7f425536",
                            "value": "Кострома"
                        },
                        {
                            "key": "e31eed11-c387-4dbe-882d-dbd624eeaba3",
                            "value": "Жуковский"
                        },
                        {
                            "key": "8176f813-1930-4a5d-a67d-e7a60beb14cc",
                            "value": "Миасс"
                        },
                        {
                            "key": "e7041943-68b2-4a50-b760-5e15ca6a3603",
                            "value": "Ленинск-Кузнецкий"
                        },
                        {
                            "key": "a81cace3-0ae3-4c48-9346-ebd67f740e2b",
                            "value": "Елец"
                        },
                        {
                            "key": "704f3ef5-a27b-4988-baca-f6e002e9a164",
                            "value": "Красногорск"
                        },
                        {
                            "key": "aa1b9dfe-9b26-4a88-84db-212f35dcc7e1",
                            "value": "Владимир"
                        },
                        {
                            "key": "991e734f-a888-4340-ae4c-d5bd32273188",
                            "value": "Архангельск"
                        },
                        {
                            "key": "944b7750-cdfb-43b9-a2cc-9dd94ca49f15",
                            "value": "Сочи"
                        },
                        {
                            "key": "60911776-c88f-48bb-b619-06a61c8ffd05",
                            "value": "Мурманск"
                        },
                        {
                            "key": "e1e8063c-23d1-432e-8e57-5d618410b3b7",
                            "value": "Прокопьевск"
                        },
                        {
                            "key": "1fa0dda4-186d-4192-8a3f-923c7944d95d",
                            "value": "Южно-Сахалинск"
                        },
                        {
                            "key": "900710e0-c8ed-4e3c-961c-32261fb1c6ed",
                            "value": "Черкесск"
                        },
                        {
                            "key": "673f8960-e484-4b9e-83e3-989ff7759e7b",
                            "value": "Петрозаводск"
                        },
                        {
                            "key": "other",
                            "value": "Другой город / за пределами РФ"
                        },
                        {
                            "key": "1dfaa028-6c8b-4bd7-9ce9-b9462848e7b2",
                            "value": "Каменск-Уральский"
                        },
                        {
                            "key": "75bf8bc5-b1ec-454e-973d-368253b4ca46",
                            "value": "Элиста"
                        },
                        {
                            "key": "beda39e1-253f-44d5-a4b8-c717433a7511",
                            "value": "Железнодорожный"
                        },
                        {
                            "key": "52a85978-37eb-4b02-b0d9-eb857686469c",
                            "value": "Орехово-Зуево"
                        },
                        {
                            "key": "01046d0e-326a-4289-85d8-208625de89e4",
                            "value": "Копейск"
                        },
                        {
                            "key": "2b70ca02-bdad-4d84-864d-909c0a3e8b2c",
                            "value": "Нижневартовск"
                        },
                        {
                            "key": "fe4548ac-431f-4b11-84f7-b84d884f2bd3",
                            "value": "Электросталь"
                        },
                        {
                            "key": "adcb3d0d-ca62-4f35-a892-4e7c71be563f",
                            "value": "Одинцово"
                        },
                        {
                            "key": "44cf953a-3673-41a2-a763-382e1e6c95ed",
                            "value": "Псков"
                        },
                        {
                            "key": "05ae4d4b-2ff2-4cfc-92ff-1153ea27fd7f",
                            "value": "Калуга"
                        },
                        {
                            "key": "da4f760e-f3db-44dd-93d8-5a42873062b9",
                            "value": "Энгельс "
                        },
                        {
                            "key": "1ad5cced-44c5-456e-9f83-2099fc678dfd",
                            "value": "Королев"
                        },
                        {
                            "key": "729165b3-1352-450c-a7c8-aca6f89eafeb",
                            "value": "Сызрань"
                        },
                        {
                            "key": "51f0a82c-49af-4ea7-b1ea-c1e99099923c",
                            "value": "Майкоп"
                        },
                        {
                            "key": "ccf34bd4-1720-49f8-8d98-a11d4ab6c629",
                            "value": "Таганрог"
                        },
                        {
                            "key": "33599e07-6e48-490a-b918-360d51d307fb",
                            "value": "Нальчик"
                        },
                        {
                            "key": "191bc69a-cd30-4456-8e11-59dd98476e2b",
                            "value": "Череповец"
                        },
                        {
                            "key": "f0ffa934-f809-4d28-a9d0-c6276c148189",
                            "value": "Муром"
                        },
                        {
                            "key": "c084b3f3-572e-4fe5-b263-a17f7ce86fa6",
                            "value": "Киев (Украина)"
                        },
                        {
                            "key": "52d76ee4-de85-46ed-b69b-e4f4cde5086e",
                            "value": "Одесса (Украина)"
                        },
                        {
                            "key": "102ddf64-14fa-43c1-9c85-1d2b821ac61d",
                            "value": "Минск (Белоруссия)"
                        }
                    ]
                },
                "firstName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": true
                },
                "lastName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "salary_raw": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": true,
                    "defaultValue": {
                        "secondValue": 100,
                        "firstValue": 50
                    },
                    "descriptionFlag": true,
                    "description": "Доход в месяц, тыс.  ₽"
                },
                "type": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "defaultValueOn": true,
                    "defaultValue": "22",
                    "searchData": [
                        {
                            "key": "22",
                            "value": "22 — сфера услуг, сменный график"
                        },
                        {
                            "key": "52",
                            "value": "52 — офисная работа и креатив"
                        }
                    ]
                },
                "Facebook_lonk": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "опционально"
                },
                "Instagram_link": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "опционально"
                },
                "lang_id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langEng",
                    "searchData": [
                        {
                            "key": "9fda1508-67fd-4180-909e-b71c0cd6d98e",
                            "value": "английский элементарный"
                        },
                        {
                            "key": "11f60df4-8ba5-42b8-bccb-8b010117fa0f",
                            "value": "английский средний"
                        },
                        {
                            "key": "8c848610-2249-4f5f-807f-ee9747bb4b60",
                            "value": "английский свободный"
                        }
                    ]
                },
                "about_last_job": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "Опишите последнее место работы: должность, название компании, продолжительность"
                },
                "schedule": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "36e396ce-bbfe-47aa-9d62-61190ac6658e",
                            "value": "полная"
                        },
                        {
                            "key": "437e0e02-fcfa-405d-a491-798e5436682f",
                            "value": "частичная"
                        },
                        {
                            "key": "feae4430-7c4d-4423-a90e-dad92e287799",
                            "value": "неважно"
                        }
                    ]
                },
                "about_last_job_bool": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true
                },
                "birthday": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": true,
                    "hidden": false
                },
                "lang": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "searchData": [
                        {
                            "key": "английский",
                            "value": "английский"
                        },
                        {
                            "key": "немецкий",
                            "value": "немецкий"
                        },
                        {
                            "key": "французский",
                            "value": "французский"
                        },
                        {
                            "key": "итальянский",
                            "value": "итальянский"
                        },
                        {
                            "key": "испанский",
                            "value": "испанский"
                        },
                        {
                            "key": "китайский",
                            "value": "китайский"
                        },
                        {
                            "key": "другой язык",
                            "value": "другой язык"
                        },
                        {
                            "key": "русский",
                            "value": "русский"
                        }
                    ]
                },
                "lang_ch": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langCh",
                    "searchData": [
                        {
                            "key": "262fffaa-0baf-4382-a217-d283bb63358b",
                            "value": "китайский элементарный"
                        },
                        {
                            "key": "85022754-2101-4cb0-933a-86e20ae680f9",
                            "value": "китайский средний"
                        },
                        {
                            "key": "453fa484-da51-45cf-9811-3f79690ec2a5",
                            "value": "китайский свободный"
                        }
                    ]
                },
                "lang_de": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langDe",
                    "searchData": [
                        {
                            "key": "699c74d1-3760-4ff6-aada-bf65e0d7976a",
                            "value": "немецкий элементарный"
                        },
                        {
                            "key": "5500ae7e-903f-42c1-bcec-1cadd270d37a",
                            "value": "немецкий средний"
                        },
                        {
                            "key": "c76d6a02-f13b-4340-ba9d-aa758ea4387d",
                            "value": "немецкий свободный"
                        }
                    ]
                },
                "lang_en": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langEng",
                    "searchData": [
                        {
                            "key": "9fda1508-67fd-4180-909e-b71c0cd6d98e",
                            "value": "английский элементарный"
                        },
                        {
                            "key": "11f60df4-8ba5-42b8-bccb-8b010117fa0f",
                            "value": "английский средний"
                        },
                        {
                            "key": "8c848610-2249-4f5f-807f-ee9747bb4b60",
                            "value": "английский свободный"
                        }
                    ]
                },
                "lang_fr": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langFr",
                    "searchData": [
                        {
                            "key": "afd7708a-4e3d-4179-9424-24604f87a122",
                            "value": "французский элементарный"
                        },
                        {
                            "key": "8e327644-4445-43dd-b778-7f7f4a764e09",
                            "value": "французский средний"
                        },
                        {
                            "key": "b0e8bb65-12e9-4da4-848f-73c41dd1e341",
                            "value": "французский свободный"
                        }
                    ]
                },
                "lang_it": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langIt",
                    "searchData": [
                        {
                            "key": "d85b2875-9b12-4da0-bc1e-9f889fce06a9",
                            "value": "итальянский элементарный"
                        },
                        {
                            "key": "29246deb-d25f-497a-a784-40594158c7e7",
                            "value": "итальянский средний"
                        },
                        {
                            "key": "a0d4f989-fb32-43fa-86ba-50b8f615448f",
                            "value": "итальянский свободный"
                        }
                    ]
                },
                "lang_sp": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langSp",
                    "searchData": [
                        {
                            "key": "44a1f588-6353-4bdf-bfac-98d977e05115",
                            "value": "испанский элементарный"
                        },
                        {
                            "key": "9441a282-8173-4149-9c3e-d992c950d13d",
                            "value": "испанский средний"
                        },
                        {
                            "key": "a2f3c7d7-93b6-4132-8f5e-5282c08ac296",
                            "value": "испанский свободный"
                        }
                    ]
                },
                "lang_from_user": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "lang_rus": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "langRu",
                    "searchData": [
                        {
                            "key": "bcfb4cb9-925f-41cd-8959-6a6bb42cc203",
                            "value": "русский элементарный"
                        },
                        {
                            "key": "23e0d273-9429-47ce-bcd1-8cd131885a8c",
                            "value": "русский средний"
                        },
                        {
                            "key": "4f7a7564-4b07-4f25-ba30-a030319a32c9",
                            "value": "русский свободный"
                        }
                    ]
                },
                "CV_file": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false,
                    "descriptionFlag": true,
                    "description": "Вы можете загрузить файл (pdf)"
                }
            },
            "useEditing": true,
            "edit": true
        },
        "fileds": [
            {
                "sysName": "22_functions",
                "dataType": "arrayLink",
                "name": "Функции",
                "id": "34391607077096514",
                "link": "functions22",
                "group": "1607016878115",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "52_functions",
                "dataType": "arrayLink",
                "name": "Функции для категории 52",
                "id": "22101607077116998",
                "link": "functions52",
                "group": "1607016878115",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "CV_file",
                "dataType": "file",
                "name": "Резюме",
                "id": "84081609825345581",
                "link": "",
                "group": "1607016878115",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "Facebook_lonk",
                "dataType": "string",
                "name": "Facebook",
                "id": "64931609825374119",
                "link": "",
                "group": "1607016878115",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "Instagram_link",
                "dataType": "string",
                "name": "Instagram",
                "id": "91391609825359387",
                "link": "",
                "group": "1607016878115",
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
                "format": "webLink",
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "about_last_job",
                "dataType": "string",
                "name": "Последнее место работы",
                "id": "48551634130491392",
                "link": null,
                "group": "1607016878115",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "about_last_job_bool",
                "dataType": "boolean",
                "name": "Опыт работы",
                "id": "59381637227629563",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 20,
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
                        "есть опыт",
                        "нет опыта"
                    ],
                    "validWeekDays": {
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "birthday",
                "dataType": "date",
                "name": "Дата рождения",
                "id": "78441637227542072",
                "link": "",
                "group": "1607016878115",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 19,
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
                    "dateFormat": "DD.MM.Y",
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "city",
                "dataType": "link",
                "name": "Город",
                "id": "80181607081867668",
                "link": "cities",
                "group": "1606985920923",
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
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "firstName",
                "dataType": "string",
                "name": "Имя",
                "id": "5",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "Username (login)",
                "id": "13",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang",
                "dataType": "link",
                "name": "Знание иностранных языков",
                "id": "57241635953910336",
                "link": "lang_cat",
                "group": "1637230118801",
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
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_ch",
                "dataType": "link",
                "name": "Уровень владения китайским языком",
                "id": "82121637230433990",
                "link": "lang",
                "group": "1637230118801",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_de",
                "dataType": "link",
                "name": "Уровень владения немецким языком",
                "id": "30111637230295842",
                "link": "lang",
                "group": "1637230118801",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_en",
                "dataType": "link",
                "name": "Уровень владения английским языком",
                "id": "78151637230252127",
                "link": "lang",
                "group": "1637230118801",
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
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_fr",
                "dataType": "link",
                "name": "Уровень владения французским языком",
                "id": "55011637230342892",
                "link": "lang",
                "group": "1637230118801",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_from_user",
                "dataType": "string",
                "name": "Свой вариант",
                "id": "98651637235752912",
                "link": "",
                "group": "1637230118801",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_id",
                "dataType": "string",
                "name": "Знание иностранных языков",
                "id": "64741635954610219",
                "link": "",
                "group": "1637230118801",
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
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_it",
                "dataType": "link",
                "name": "Уровень владения итальянским языком",
                "id": "61961637230368791",
                "link": "lang",
                "group": "1637230118801",
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
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_rus",
                "dataType": "link",
                "name": "Уровень владения русским языком",
                "id": "24411637827277006",
                "link": "lang",
                "group": "1637230118801",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lang_sp",
                "dataType": "link",
                "name": "Уровень владения испанским языком",
                "id": "77751637230396792",
                "link": "lang",
                "group": "1637230118801",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "lastName",
                "dataType": "string",
                "name": "Фамилия",
                "id": "4",
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
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "salary_raw",
                "dataType": "json",
                "name": "Ожидания по доходу ",
                "id": "63391607082324656",
                "link": "",
                "group": "1607016878115",
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
                "format": "rangeSlider",
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "unitName": "k ₽",
                    "booleanOptions": [
                        "True",
                        "False"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {
                        "max": 300,
                        "min": 20,
                        "step": 10
                    },
                    "customOptionType": "textarea"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": true,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "schedule",
                "dataType": "arrayLink",
                "name": "Занятость",
                "id": "90801635956020309",
                "link": "schedule",
                "group": "1607016878115",
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
                "indexExists": false,
                "typeVariable": {},
                "linkType": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "type",
                "dataType": "link",
                "name": "Категория вакансий",
                "id": "68641607070972375",
                "link": "Type2252",
                "group": "1607016878115",
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
                    "booleanOptions": [
                        "2 через 2",
                        "5 через 2"
                    ],
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "linkType": true,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "birthday": 1646142221164,
                "Facebook_lonk": "11",
                "city": "95ddc157-f2dc-4ab1-a1e5-ce9c6398bfdf",
                "lang_it": {
                    "name": "итальянский средний",
                    "lang_cat_id": "итальянский",
                    "id": "29246deb-d25f-497a-a784-40594158c7e7"
                },
                "52_functions": [],
                "salary_raw": "{\"secondValue\":100,\"firstValue\":50}",
                "about_last_job_bool": false,
                "22_functions": [
                    {
                        "name": "Шеф",
                        "id": "b5d6682c-09da-4d8b-86ef-abe3295da502"
                    },
                    {
                        "name": "Повар универсал",
                        "id": "cf10904f-55e2-4678-8b88-3f01f70b8308"
                    },
                    {
                        "name": "Администратор",
                        "id": "cee393b6-1f7f-459b-8d5f-a9b59c41cf92"
                    },
                    {
                        "name": "HR ",
                        "id": "f311d5c7-41db-4967-942a-fc2c62d2ea37"
                    }
                ],
                "lang_id": "итальянский средний",
                "lastName": "Ершов",
                "firstName": "Павел",
                "id": "79151845361",
                "about_last_job": "about_last_job",
                "schedule": [
                    {
                        "name": "полная",
                        "id": "36e396ce-bbfe-47aa-9d62-61190ac6658e"
                    }
                ],
                "lang": {
                    "name": "французский",
                    "id": "французский"
                },
                "type": "22"
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