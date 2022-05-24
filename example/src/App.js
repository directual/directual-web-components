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
                                "fetch": []
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
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "good_in_order_ids",
                            "id",
                            "price_displayed"
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
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"10491653331482505\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"25651653317510996\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"is_hidden\",\"name\":\"Hidden?\",\"dataType\":\"boolean\",\"id\":\"32521653331455301\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"price\",\"name\":\"Price, US$\",\"dataType\":\"decimal\",\"id\":\"37111653317511499\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"price_displayed\",\"name\":\"Price\",\"dataType\":\"string\",\"id\":\"71751653332297116\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false},{\"sysName\":\"merchant_id\",\"name\":\"Merchant\",\"dataType\":\"link\",\"id\":\"83931653331400591\",\"link\":\"merchants\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":true},{\"sysName\":\"image\",\"name\":\"Images\",\"dataType\":\"file\",\"id\":\"85971653317512108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"linkType\":false}]",
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
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"name\":\"User\",\"dataType\":\"string\",\"id\":\"18851653317560163\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"sum\",\"name\":\"Total, US$\",\"dataType\":\"decimal\",\"id\":\"27441653319190990\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"price_displayed\",\"name\":\"Total\",\"dataType\":\"string\",\"id\":\"50091653393659371\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"indexExists\":false},{\"sysName\":\"good_in_order_ids\",\"name\":\"Goods\",\"dataType\":\"arrayLink\",\"id\":\"69201653317565747\",\"link\":\"goodInTheOrder\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"typeVariable\":{},\"arrayLink\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"price_displayed\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-05-24T12:04:41Z",
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
        "sl": "emailRouter",
        "formName": "Manual routing 🕹 | Stage",
        "formDesc": "",
        "formButton": "Continue",
        "placeholder": "false",
        "maxWidth": "400",
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
                        "fieldSysName": "current_step",
                        "fetch": [],
                        "sysName": "current_step",
                        "name": "",
                        "dataType": "number",
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
                        "fieldSysName": "intro_email",
                        "fetch": [],
                        "sysName": "intro_email",
                        "name": "Send intro email?",
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
                                    "value": "yes",
                                    "label": "Send intro email"
                                },
                                {
                                    "value": "no",
                                    "label": "Do not send intro email"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "intro_email_language",
                        "fetch": [],
                        "sysName": "intro_email_language",
                        "name": "Select the language of the email",
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
                                    "value": "languageRu",
                                    "label": "Ru"
                                },
                                {
                                    "value": "languageEn",
                                    "label": "En"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_routed_manually",
                        "fetch": [],
                        "sysName": "is_routed_manually",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "project_id",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "project_id",
                        "name": "Project",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "projects"
                    },
                    {
                        "fieldSysName": "rounting_new_project_title",
                        "fetch": [],
                        "sysName": "rounting_new_project_title",
                        "name": "Project title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_project",
                        "fetch": [],
                        "sysName": "routing_project",
                        "name": "Project",
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
                                    "value": "new",
                                    "label": "Create new project"
                                },
                                {
                                    "value": "existing",
                                    "label": "Add to existing project"
                                },
                                {
                                    "label": " Create multiple new projects",
                                    "value": "multiple"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_status",
                        "fetch": [],
                        "sysName": "routing_status",
                        "name": "Pipeline stage",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "pipeline_statuses"
                    },
                    {
                        "fieldSysName": "routing_suggested_projects",
                        "fetch": [],
                        "sysName": "routing_suggested_projects",
                        "name": "Suggested projects",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_type",
                        "fetch": [],
                        "sysName": "routing_type",
                        "name": "What is it?",
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
                                    "value": "startup",
                                    "label": "Email from startup founder"
                                },
                                {
                                    "value": "partner",
                                    "label": "Intro email from partner"
                                },
                                {
                                    "value": "vp",
                                    "label": "Email from VP"
                                },
                                {
                                    "label": "Recommendation of another startup from startup founder",
                                    "value": "recommendationStartup"
                                },
                                {
                                    "value": " forwardedStartup",
                                    "label": "Forwarded email from startup founder"
                                },
                                {
                                    "value": " forwardedVp",
                                    "label": "Forwarded email from vp"
                                },
                                {
                                    "value": "batch",
                                    "label": "Batch from accelerator"
                                }
                            ]
                        },
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
                        "fieldSysName": "intro_email",
                        "fetch": [],
                        "sysName": "intro_email",
                        "name": "Send intro email?",
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
                                    "value": "yes",
                                    "label": "Send intro email"
                                },
                                {
                                    "value": "no",
                                    "label": "Do not send intro email"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "intro_email_language",
                        "fetch": [],
                        "sysName": "intro_email_language",
                        "name": "Select the language of the email",
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
                                    "value": "languageRu",
                                    "label": "Ru"
                                },
                                {
                                    "value": "languageEn",
                                    "label": "En"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_routed_manually",
                        "fetch": [],
                        "sysName": "is_routed_manually",
                        "name": "",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "project_id",
                        "fetch": [],
                        "sysName": "project_id",
                        "name": "Project",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "projects"
                    },
                    {
                        "fieldSysName": "rounting_new_project_title",
                        "fetch": [],
                        "sysName": "rounting_new_project_title",
                        "name": "Project title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routed",
                        "fetch": [],
                        "sysName": "routed",
                        "name": "Routed to a project",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_project",
                        "fetch": [],
                        "sysName": "routing_project",
                        "name": "Project",
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
                                    "value": "new",
                                    "label": "Create new project"
                                },
                                {
                                    "value": "existing",
                                    "label": "Add to existing project"
                                },
                                {
                                    "label": " Create multiple new projects",
                                    "value": "multiple"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_status",
                        "fetch": [],
                        "sysName": "routing_status",
                        "name": "Pipeline stage",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "pipeline_statuses"
                    },
                    {
                        "fieldSysName": "routing_suggested_projects",
                        "fetch": [],
                        "sysName": "routing_suggested_projects",
                        "name": "Suggested projects",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "routing_type",
                        "fetch": [],
                        "sysName": "routing_type",
                        "name": "What is it?",
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
                                    "value": "startup",
                                    "label": "Email from startup founder"
                                },
                                {
                                    "value": "partner",
                                    "label": "Intro email from partner"
                                },
                                {
                                    "value": "vp",
                                    "label": "Email from VP"
                                },
                                {
                                    "label": "Recommendation of another startup from startup founder",
                                    "value": "recommendationStartup"
                                },
                                {
                                    "value": " forwardedStartup",
                                    "label": "Forwarded email from startup founder"
                                },
                                {
                                    "value": " forwardedVp",
                                    "label": "Forwarded email from vp"
                                },
                                {
                                    "value": "batch",
                                    "label": "Batch from accelerator"
                                }
                            ]
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "who_routed_id",
                        "fetch": [],
                        "sysName": "who_routed_id",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "fields": {
                    "current_step": {
                        "id": "current_step",
                        "content": "",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
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
                    "intro_email": {
                        "id": "intro_email",
                        "content": "Send intro email?",
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
                                    "value": "yes",
                                    "label": "Send intro email"
                                },
                                {
                                    "value": "no",
                                    "label": "Do not send intro email"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "intro_email_language": {
                        "id": "intro_email_language",
                        "content": "Select the language of the email",
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
                                    "value": "languageRu",
                                    "label": "Ru"
                                },
                                {
                                    "value": "languageEn",
                                    "label": "En"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "is_routed_manually": {
                        "id": "is_routed_manually",
                        "content": "",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "project_id": {
                        "id": "project_id",
                        "content": "Project",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "projects"
                    },
                    "rounting_new_project_title": {
                        "id": "rounting_new_project_title",
                        "content": "Project title",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routing_project": {
                        "id": "routing_project",
                        "content": "Project",
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
                                    "value": "new",
                                    "label": "Create new project"
                                },
                                {
                                    "value": "existing",
                                    "label": "Add to existing project"
                                },
                                {
                                    "label": " Create multiple new projects",
                                    "value": "multiple"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routing_status": {
                        "id": "routing_status",
                        "content": "Pipeline stage",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "pipeline_statuses"
                    },
                    "routing_suggested_projects": {
                        "id": "routing_suggested_projects",
                        "content": "Suggested projects",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routing_type": {
                        "id": "routing_type",
                        "content": "What is it?",
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
                                    "value": "startup",
                                    "label": "Email from startup founder"
                                },
                                {
                                    "value": "partner",
                                    "label": "Intro email from partner"
                                },
                                {
                                    "value": "vp",
                                    "label": "Email from VP"
                                },
                                {
                                    "label": "Recommendation of another startup from startup founder",
                                    "value": "recommendationStartup"
                                },
                                {
                                    "value": " forwardedStartup",
                                    "label": "Forwarded email from startup founder"
                                },
                                {
                                    "value": " forwardedVp",
                                    "label": "Forwarded email from vp"
                                },
                                {
                                    "value": "batch",
                                    "label": "Batch from accelerator"
                                }
                            ]
                        },
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "routed": {
                        "id": "routed",
                        "content": "Routed to a project",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "who_routed_id": {
                        "id": "who_routed_id",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": "WebUser"
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": false
                    },
                    "intro_email": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "disableEditing": false
                    },
                    "intro_email_language": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_routed_manually": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "rounting_new_project_title": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false
                    },
                    "routing_project": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false
                    },
                    "routing_status": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "routing_suggested_projects": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "routing_type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false
                    },
                    "project_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "dropdownProjects",
                        "required": false
                    },
                    "routed": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "who_routed_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "defaultValueOn": false
                    },
                    "current_step": {
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
                        "title": "Other",
                        "fieldIds": [
                            "intro_email_language",
                            "is_routed_manually",
                            "routing_status",
                            "routing_suggested_projects",
                            "routed"
                        ]
                    },
                    "19201645080382417": {
                        "id": "19201645080382417",
                        "title": "Step I",
                        "fieldIds": [
                            "routing_type"
                        ],
                        "cond": [
                            {
                                "id": "64161645098900033",
                                "field": "current_step",
                                "value": "1"
                            }
                        ]
                    },
                    "94901645081047512": {
                        "id": "94901645081047512",
                        "title": "Auto",
                        "fieldIds": [
                            "id",
                            "who_routed_id"
                        ]
                    },
                    "86231645086386203": {
                        "id": "86231645086386203",
                        "title": "Step II",
                        "fieldIds": [
                            "routing_project"
                        ],
                        "cond": [
                            {
                                "id": "36081645086396349",
                                "field": "current_step",
                                "value": "2"
                            }
                        ]
                    },
                    "86971645086861307": {
                        "id": "86971645086861307",
                        "title": "Step III",
                        "fieldIds": [
                            "project_id"
                        ],
                        "cond": [
                            {
                                "id": "11671645099043885",
                                "field": "current_step",
                                "value": "3"
                            },
                            {
                                "id": "80951645099882152",
                                "field": "routing_project",
                                "value": "{\"value\": \"existing\"}"
                            }
                        ],
                        "display": false
                    },
                    "29391645086908099": {
                        "id": "29391645086908099",
                        "title": "Step III",
                        "fieldIds": [
                            "rounting_new_project_title"
                        ],
                        "display": false,
                        "cond": [
                            {
                                "id": "25061645099052058",
                                "field": "current_step",
                                "value": "3"
                            },
                            {
                                "id": "46151645099902261",
                                "field": "routing_project",
                                "value": "{\"value\": \"new\"}"
                            }
                        ]
                    },
                    "40601645092548192": {
                        "id": "40601645092548192",
                        "title": "Step IV",
                        "fieldIds": [
                            "intro_email"
                        ],
                        "cond": [
                            {
                                "id": "60871645099286424",
                                "field": "current_step",
                                "value": "4"
                            }
                        ],
                        "condOperator": "or",
                        "display": true
                    },
                    "87791645092548444": {
                        "id": "87791645092548444",
                        "title": "New section",
                        "fieldIds": [
                            "current_step"
                        ]
                    }
                },
                "columnOrder": [
                    "19201645080382417",
                    "86231645086386203",
                    "86971645086861307",
                    "29391645086908099",
                    "40601645092548192",
                    "94901645081047512",
                    "tab-1",
                    "87791645092548444"
                ]
            },
            "fields": {
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false
                },
                "intro_email": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "disableEditing": false
                },
                "intro_email_language": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_routed_manually": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "rounting_new_project_title": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false
                },
                "routing_project": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false
                },
                "routing_status": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "routing_suggested_projects": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "routing_type": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false
                },
                "project_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "dropdownProjects",
                    "required": false,
                    "searchData": [
                        {
                            "key": "72c2db2c-784a-4de8-9264-0d0ac52ac7e1",
                            "value": "Amazon"
                        },
                        {
                            "key": "d887dc17-5346-4e27-b928-61b020ddba2f",
                            "value": "Fluentino"
                        }
                    ]
                },
                "routed": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "who_routed_id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "defaultValueOn": false
                },
                "current_step": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "resultScreen": {
                "disableResubmit": false,
                "resubmitType": "timer_3sec"
            },
            "useEditing": true,
            "editObject": "url",
            "auth": {
                "isPerson": true,
                "userIdField": "who_routed_id"
            }
        },
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "intro_email",
                "name": "Send intro email?",
                "dataType": "json",
                "id": "78601645079109279",
                "link": "",
                "group": "1642452982722",
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
                            "value": "yes",
                            "label": "Send intro email"
                        },
                        {
                            "value": "no",
                            "label": "Do not send intro email"
                        }
                    ]
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": true,
                "array": false
            },
            {
                "sysName": "intro_email_language",
                "name": "Select the language of the email",
                "dataType": "json",
                "id": "69431645079172565",
                "link": "",
                "group": "1642452982722",
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
                            "value": "languageRu",
                            "label": "Ru"
                        },
                        {
                            "value": "languageEn",
                            "label": "En"
                        }
                    ]
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": true,
                "array": false
            },
            {
                "sysName": "is_routed_manually",
                "name": "",
                "dataType": "boolean",
                "id": "42601642453255552",
                "link": "",
                "group": "1642452982722",
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
                "sysName": "project_id",
                "name": "Project",
                "dataType": "link",
                "id": "62851637161178710",
                "link": "projects",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "rounting_new_project_title",
                "name": "Project title",
                "dataType": "string",
                "id": "53171642453217689",
                "link": "",
                "group": "1642452982722",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "routed",
                "name": "Routed to a project",
                "dataType": "boolean",
                "id": "35031637165370928",
                "link": "",
                "group": "1637165364040",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "routing_project",
                "name": "Project",
                "dataType": "json",
                "id": "41641642453080246",
                "link": "",
                "group": "1642452982722",
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
                            "value": "new",
                            "label": "Create new project"
                        },
                        {
                            "value": "existing",
                            "label": "Add to existing project"
                        },
                        {
                            "label": " Create multiple new projects",
                            "value": "multiple"
                        }
                    ]
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": true,
                "array": false
            },
            {
                "sysName": "routing_status",
                "name": "Pipeline stage",
                "dataType": "link",
                "id": "48251642453286164",
                "link": "pipeline_statuses",
                "group": "1642452982722",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "routing_suggested_projects",
                "name": "Suggested projects",
                "dataType": "string",
                "id": "81721642453141376",
                "link": "",
                "group": "1642452982722",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "routing_type",
                "name": "What is it?",
                "dataType": "json",
                "id": "33201642452990143",
                "link": "",
                "group": "1642452982722",
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
                            "value": "startup",
                            "label": "Email from startup founder"
                        },
                        {
                            "value": "partner",
                            "label": "Intro email from partner"
                        },
                        {
                            "value": "vp",
                            "label": "Email from VP"
                        },
                        {
                            "label": "Recommendation of another startup from startup founder",
                            "value": "recommendationStartup"
                        },
                        {
                            "value": " forwardedStartup",
                            "label": "Forwarded email from startup founder"
                        },
                        {
                            "value": " forwardedVp",
                            "label": "Forwarded email from vp"
                        },
                        {
                            "value": "batch",
                            "label": "Batch from accelerator"
                        }
                    ]
                },
                "groupName": null,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": true,
                "array": false
            },
            {
                "sysName": "who_routed_id",
                "name": "",
                "dataType": "link",
                "id": "14581642752353174",
                "link": "WebUser",
                "group": "1642452982722",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "routing_type": "{\"value\":\"startup\"}",
                "current_step": 3,
                "routing_project": "{\"value\":\"new\"}",
                "id": "3c511608-7103-40b7-964e-cd7c22d8e583"
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