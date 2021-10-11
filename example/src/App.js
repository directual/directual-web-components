import React, { useEffect, useState } from 'react'
import {
    FpsCards, FpsForm, MainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet,
    Dnd, Profile, TabsPane, Stopwatch
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
                                "fieldSysName": "finalPrice",
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
                                "fetch": []
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
                        "veiwOption": "cart",
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
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "good": {
                                    "id": "good",
                                    "content": "",
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
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "image",
                                    "formatOptions": {}
                                },
                                "quantity": {
                                    "id": "quantity",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "status": {
                                    "id": "status",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
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
                                }
                            },
                            "fieldOrder": [
                                null,
                                "finalPrice",
                                "good",
                                "good_in_cart_name",
                                "image",
                                "quantity",
                                "status"
                            ]
                        }
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
                            "title"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
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
                    "veiwOption": "cart",
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
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": null
                            },
                            "good": {
                                "id": "good",
                                "content": "",
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
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": {}
                            },
                            "quantity": {
                                "id": "quantity",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": null
                            },
                            "status": {
                                "id": "status",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
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
                            }
                        },
                        "fieldOrder": [
                            null,
                            "finalPrice",
                            "good",
                            "good_in_cart_name",
                            "image",
                            "quantity",
                            "status"
                        ]
                    }
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
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "Cart_price",
                "dataType": "number",
                "name": "",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "goods",
                "dataType": "arrayLink",
                "name": "",
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
                "indexExists": false,
                "arrayLink": true,
                "linkType": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "string",
                "name": "",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "title",
                "dataType": "string",
                "name": "",
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
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "title": "Cart",
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
                        "status": "1",
                        "finalPrice": 99
                    },
                    {
                        "quantity": 4,
                        "image": "https://api.directual.com/fileUploaded/cart/7e71ae85-66e9-4e44-9ddc-add69a90c998.jpg",
                        "good": {
                            "price": 15,
                            "name": "oranges",
                            "id": "3"
                        },
                        "good_in_cart_name": "good 1",
                        "id": "3",
                        "status": "2",
                        "finalPrice": 400
                    }
                ],
                "status": "new",
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
                "goods.finalPrice",
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
                "goods.status",
                99031304
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
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"39841632654618610\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"16831632654619092\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"Image\",\"id\":\"61001632654724498\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-26T11:13:42Z",
                "createBy": 21,
                "changedBy": 21,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "linkType": false,
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
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cart_id\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"27951632654884383\",\"link\":\"cart\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"56301632654884854\",\"link\":\"goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"quantity\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"10581632654902116\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"finalPrice\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"41241632654906714\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good_in_cart_name\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"40521632944512531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"86301632946954729\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"43591633889912266\",\"link\":\"status\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"indexExists\":false,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"good\"},{\"sysName\":\"quantity\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-10T18:19:36Z",
                "createBy": 21,
                "changedBy": 21,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "linkType": false,
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
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "arrayLink": false,
                    "linkType": false,
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
                "dataType": "arrayLink",
                "name": "",
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
                "indexExists": false,
                "arrayLink": true,
                "linkType": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "quickSearch": "false"
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
        "sl": "adminPaidApps",
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
                        "fieldSysName": "UsageHistory_ids",
                        "fetch": [],
                        "sysName": "UsageHistory_ids",
                        "name": "Usage history",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "UsageHistory"
                    },
                    {
                        "fieldSysName": "balance",
                        "fetch": [],
                        "sysName": "balance",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "comments",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "files",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "text",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
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
                                    },
                                    {
                                        "fieldSysName": "userpic",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "comments",
                        "name": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "admin_comments"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_blocked",
                        "fetch": [],
                        "sysName": "is_blocked",
                        "name": "is_blocked",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_sandbox",
                        "fetch": [],
                        "sysName": "is_sandbox",
                        "name": "is_sandbox",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "App name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "country",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "first_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "last_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "owner_id",
                        "name": "Owner",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    },
                    {
                        "fieldSysName": "paddle_subscription_id",
                        "fetch": [],
                        "sysName": "paddle_subscription_id",
                        "name": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "paddle_subscription_status",
                        "fetch": [],
                        "sysName": "paddle_subscription_status",
                        "name": "Paddle Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "plan_id",
                        "fetch": [
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
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
                            },
                            {
                                "fieldSysName": "price",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "plan_id",
                        "name": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Tariff"
                    },
                    {
                        "fieldSysName": "sysName",
                        "fetch": [],
                        "sysName": "sysName",
                        "name": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "plan_id",
                        "fetch": [],
                        "sysName": "plan_id",
                        "name": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Tariff"
                    }
                ],
                "fields": {
                    "UsageHistory_ids": {
                        "id": "UsageHistory_ids",
                        "content": "Usage history",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "UsageHistory",
                        "actions": []
                    },
                    "balance": {
                        "id": "balance",
                        "content": "",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "comments": {
                        "id": "comments",
                        "content": "Comments",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "admin_comments",
                        "actions": [
                            {
                                "sysName": "",
                                "id": "74431633379680598",
                                "name": "test",
                                "displayAs": "button",
                                "callFrom": "linked",
                                "callFromField": "comments",
                                "formMapping": [
                                    {
                                        "id": "54981633379694679",
                                        "target": "id",
                                        "type": "linkedField",
                                        "value": "text"
                                    }
                                ]
                            }
                        ]
                    },
                    "id": {
                        "id": "id",
                        "content": "App id",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "is_blocked": {
                        "id": "is_blocked",
                        "content": "is_blocked",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "is_sandbox": {
                        "id": "is_sandbox",
                        "content": "is_sandbox",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "name": {
                        "id": "name",
                        "content": "App name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "owner_id": {
                        "id": "owner_id",
                        "content": "Owner",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users",
                        "actions": []
                    },
                    "paddle_subscription_id": {
                        "id": "paddle_subscription_id",
                        "content": "Paddle ID",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "paddle_subscription_status": {
                        "id": "paddle_subscription_status",
                        "content": "Paddle Status",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "plan_id": {
                        "id": "plan_id",
                        "content": "Billing plan",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Tariff",
                        "actions": []
                    },
                    "sysName": {
                        "id": "sysName",
                        "content": "System name",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "action__23761633090760775": {
                        "content": "Refresh subscription status",
                        "id": "action__23761633090760775",
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
                    "name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "owner_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "country": {
                                    "id": "country",
                                    "content": "Country",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "first_name": {
                                    "id": "first_name",
                                    "content": "First name",
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
                                    "formatOptions": null
                                },
                                "last_name": {
                                    "id": "last_name",
                                    "content": "Last name",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "country": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "first_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "last_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "first_name",
                                "last_name",
                                "country"
                            ]
                        }
                    },
                    "plan_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "adminChangeTariff"
                    },
                    "stat_get": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_post": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_proc": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_sync": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stat_users": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sysName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_sandbox": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paddle_subscription_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paddle_subscription_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "comments": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "configureLinkedCard": {
                            "fields": {
                                "date": {
                                    "id": "date",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "date",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "files": {
                                    "id": "files",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": null
                                },
                                "text": {
                                    "id": "text",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "user_id": {
                                    "id": "user_id",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "files": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "text": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "user_id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "date",
                                "files",
                                "text",
                                "user_id"
                            ]
                        },
                        "sortArrayLink": true,
                        "veiwOption": "tags",
                        "cartView": {
                            "image": false
                        }
                    },
                    "UsageHistory_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "balance": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "is_blocked": {
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
                        "title": "App info",
                        "fieldIds": [
                            "id",
                            "name",
                            "owner_id",
                            "sysName",
                            "is_sandbox",
                            "is_blocked"
                        ]
                    },
                    "78721633090718330": {
                        "id": "78721633090718330",
                        "title": "Billing",
                        "fieldIds": [
                            "balance",
                            "plan_id",
                            "paddle_subscription_id",
                            "paddle_subscription_status",
                            "action__23761633090760775",
                            "UsageHistory_ids",
                            "action__39991633095320582",
                            "action__82541633095309885"
                        ]
                    },
                    "85421633090729272": {
                        "id": "85421633090729272",
                        "title": "Actions",
                        "fieldIds": []
                    },
                    "36061633090983107": {
                        "id": "36061633090983107",
                        "title": "Timeline and Comments",
                        "fieldIds": [
                            "comments"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "36061633090983107",
                    "78721633090718330",
                    "85421633090729272"
                ],
                "actions": [
                    {
                        "sysName": "adminChangeApp",
                        "id": "23761633090760775",
                        "name": "Refresh subscription status",
                        "displayAs": "button",
                        "buttonIcon": "refresh",
                        "closePopup": false,
                        "showMessage": true,
                        "resultMessage": "Refreshed!",
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
                                    "link": null
                                },
                                {
                                    "fieldSysName": "app_id",
                                    "fetch": [],
                                    "sysName": "app_id",
                                    "name": "App ID",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "Apps"
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "37891633362861483",
                                "target": "app_id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "24031633362868403",
                                "target": "action",
                                "type": "const",
                                "value": "refresh_paddle"
                            }
                        ],
                        "resultButton": ""
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
                "name": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "owner_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "country": {
                                "id": "country",
                                "content": "Country",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "first_name": {
                                "id": "first_name",
                                "content": "First name",
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
                                "formatOptions": null
                            },
                            "last_name": {
                                "id": "last_name",
                                "content": "Last name",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "country": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "first_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "last_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "first_name",
                            "last_name",
                            "country"
                        ]
                    }
                },
                "plan_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "adminChangeTariff",
                    "searchData": [
                        {
                            "key": "FREE",
                            "value": "Free"
                        },
                        {
                            "key": "Business",
                            "value": "Business (legacy)"
                        },
                        {
                            "key": "Startup",
                            "value": "Startup (legacy)"
                        },
                        {
                            "key": "Pro",
                            "value": "Pro (legacy)"
                        },
                        {
                            "key": "Business-monthly",
                            "value": "Business (monthly)"
                        },
                        {
                            "key": "Business-yearly",
                            "value": "Business (yearly)"
                        },
                        {
                            "key": "Pro-monthly",
                            "value": "Pro (monthly)"
                        },
                        {
                            "key": "Pro-yearly",
                            "value": "Pro (yearly)"
                        },
                        {
                            "key": "Business-DEV",
                            "value": "Business DEV-env"
                        },
                        {
                            "key": "Startup-monthly",
                            "value": "Startup (monthly)"
                        },
                        {
                            "key": "Startup-yearly",
                            "value": "Startup (yearly)"
                        }
                    ]
                },
                "stat_get": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_post": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_proc": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_sync": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stat_users": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sysName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_sandbox": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paddle_subscription_id": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paddle_subscription_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "comments": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "configureLinkedCard": {
                        "fields": {
                            "date": {
                                "id": "date",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
                                "format": null,
                                "formatOptions": null
                            },
                            "files": {
                                "id": "files",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": null
                            },
                            "text": {
                                "id": "text",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "user_id": {
                                "id": "user_id",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "files": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "text": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user_id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date",
                            "files",
                            "text",
                            "user_id"
                        ]
                    },
                    "sortArrayLink": true,
                    "veiwOption": "tags",
                    "cartView": {
                        "image": false
                    }
                },
                "UsageHistory_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "balance": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "is_blocked": {
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
                        "fieldSysName": "UsageHistory_ids",
                        "fetch": [],
                        "sysName": "UsageHistory_ids",
                        "name": "Usage history",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "UsageHistory"
                    },
                    {
                        "fieldSysName": "balance",
                        "fetch": [],
                        "sysName": "balance",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "comments",
                        "fetch": [
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "files",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "text",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "user_id",
                                "condition": null,
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
                                    },
                                    {
                                        "fieldSysName": "userpic",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            }
                        ],
                        "sysName": "comments",
                        "name": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "admin_comments"
                    },
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_blocked",
                        "fetch": [],
                        "sysName": "is_blocked",
                        "name": "is_blocked",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "is_sandbox",
                        "fetch": [],
                        "sysName": "is_sandbox",
                        "name": "is_sandbox",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "App name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "country",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "first_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "last_name",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "owner_id",
                        "name": "Owner",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Cloud_users"
                    },
                    {
                        "fieldSysName": "paddle_subscription_id",
                        "fetch": [],
                        "sysName": "paddle_subscription_id",
                        "name": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "paddle_subscription_status",
                        "fetch": [],
                        "sysName": "paddle_subscription_status",
                        "name": "Paddle Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "plan_id",
                        "fetch": [
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
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
                            },
                            {
                                "fieldSysName": "price",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "plan_id",
                        "name": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Tariff"
                    },
                    {
                        "fieldSysName": "sysName",
                        "fetch": [],
                        "sysName": "sysName",
                        "name": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "plan_id",
                        "fetch": [],
                        "sysName": "plan_id",
                        "name": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Tariff"
                    }
                ],
                "fields": {
                    "UsageHistory_ids": {
                        "id": "UsageHistory_ids",
                        "content": "Usage history",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "UsageHistory"
                    },
                    "balance": {
                        "id": "balance",
                        "content": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "comments": {
                        "id": "comments",
                        "content": "Comments",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "admin_comments"
                    },
                    "id": {
                        "id": "id",
                        "content": "App id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "is_blocked": {
                        "id": "is_blocked",
                        "content": "is_blocked",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "is_sandbox": {
                        "id": "is_sandbox",
                        "content": "is_sandbox",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "name": {
                        "id": "name",
                        "content": "App name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "owner_id": {
                        "id": "owner_id",
                        "content": "Owner",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Cloud_users"
                    },
                    "paddle_subscription_id": {
                        "id": "paddle_subscription_id",
                        "content": "Paddle ID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "paddle_subscription_status": {
                        "id": "paddle_subscription_status",
                        "content": "Paddle Status",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "plan_id": {
                        "id": "plan_id",
                        "content": "Billing plan",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Tariff"
                    },
                    "sysName": {
                        "id": "sysName",
                        "content": "System name",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "name": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "owner_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "plan_id": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_get": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_post": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_proc": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_sync": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stat_users": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "sysName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "is_sandbox": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "paddle_subscription_id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "paddle_subscription_status": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "comments": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "UsageHistory_ids": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "balance": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "is_blocked": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "name",
                    "sysName",
                    "plan_id",
                    "paddle_subscription_id",
                    "paddle_subscription_status",
                    "is_sandbox",
                    "owner_id",
                    "id",
                    "comments",
                    "UsageHistory_ids",
                    "balance",
                    "is_blocked"
                ]
            },
            "actions": [
                {
                    "sysName": "adminChangeApp",
                    "id": "23761633090760775",
                    "name": "Refresh subscription status",
                    "displayAs": "button",
                    "buttonIcon": "refresh",
                    "closePopup": false,
                    "showMessage": true,
                    "resultMessage": "Refreshed!",
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
                                "link": null
                            },
                            {
                                "fieldSysName": "app_id",
                                "fetch": [],
                                "sysName": "app_id",
                                "name": "App ID",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "Apps"
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "37891633362861483",
                            "target": "app_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "24031633362868403",
                            "target": "action",
                            "type": "const",
                            "value": "refresh_paddle"
                        }
                    ],
                    "resultButton": ""
                },
                {
                    "sysName": "",
                    "id": "74431633379680598",
                    "name": "test",
                    "displayAs": "button",
                    "callFrom": "linked",
                    "callFromField": "comments",
                    "formMapping": [
                        {
                            "id": "54981633379694679",
                            "target": "id",
                            "type": "linkedField",
                            "value": "text"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "Paid apps",
        "actions": null,
        "headers": [
            {
                "sysName": "UsageHistory_ids",
                "name": "Usage history",
                "dataType": "arrayLink",
                "id": "48791633369864037",
                "link": "UsageHistory",
                "group": "1623707015468",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "balance",
                "name": "",
                "dataType": "decimal",
                "id": "20731633354617743",
                "link": "",
                "group": "1633095201028",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "comments",
                "name": "Comments",
                "dataType": "arrayLink",
                "id": "44101633194013799",
                "link": "admin_comments",
                "group": "1633095201028",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "id",
                "name": "App id",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "is_blocked",
                "name": "is_blocked",
                "dataType": "boolean",
                "id": "82901633095583058",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "is_sandbox",
                "name": "is_sandbox",
                "dataType": "boolean",
                "id": "47331625209998636",
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
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "name",
                "name": "App name",
                "dataType": "string",
                "id": "13661623706989350",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "owner_id",
                "name": "Owner",
                "dataType": "link",
                "id": "41841623707118206",
                "link": "Cloud_users",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "paddle_subscription_id",
                "name": "Paddle ID",
                "dataType": "string",
                "id": "13631633089941494",
                "link": null,
                "group": "1623707015468",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "paddle_subscription_status",
                "name": "Paddle Status",
                "dataType": "string",
                "id": "99931633090832671",
                "link": null,
                "group": "1623707015468",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "plan_id",
                "name": "Billing plan",
                "dataType": "link",
                "id": "74161623707026653",
                "link": "Tariff",
                "group": "1623707015468",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "sysName",
                "name": "System name",
                "dataType": "string",
                "id": "27541623706978377",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            }
        ],
        "data": [
            {
                "name": "zerocoder",
                "owner_id": {
                    "id": "leonid.byakov@gmail.com",
                    "first_name": "Leonid  Byakov"
                },
                "sysName": "hh_send_message",
                "plan_id": {
                    "price": 429,
                    "name": "Business (monthly)",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "paddle_subscription_id": "8277015",
                "id": "2894",
                "UsageHistory_ids": [
                    ""
                ],
                "comments": []
            },
            {
                "owner_id": {
                    "id": "admin"
                },
                "sysName": "CHAIRY_TEST",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7298169",
                "id": "2572"
            },
            {
                "owner_id": {
                    "id": "admin"
                },
                "sysName": "directual-site",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "6695213",
                "id": "1822",
                "comments": []
            },
            {
                "owner_id": {
                    "country": "NZ",
                    "last_name": "Mile",
                    "id": "techops_team@finalmile.io",
                    "first_name": "Final"
                },
                "sysName": "final-mile",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8864170",
                "id": "6773"
            },
            {
                "owner_id": {
                    "id": "admin"
                },
                "sysName": "CHAIRY_DEV",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "4920038",
                "id": "2571"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Kholmatov",
                    "id": "b.kholmatov@bsl.dev",
                    "first_name": "Bakhrom"
                },
                "sysName": "korzinanadom-dev",
                "plan_id": {
                    "price": 429,
                    "name": "Business (monthly)",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "paddle_subscription_id": "7020494",
                "id": "6283"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Laptev",
                    "id": "artemlaptev7@gmail.com",
                    "first_name": "Artem"
                },
                "sysName": "testartem",
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "paddle_subscription_id": "5970941",
                "id": "4355"
            },
            {
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Baev",
                    "id": "artosiris@gmail.com",
                    "first_name": "Egor"
                },
                "sysName": "art",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6843966",
                "id": "4509"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Venture",
                    "id": "addventureplatform@gmail.com",
                    "first_name": "Add"
                },
                "sysName": "addventure-test",
                "plan_id": {
                    "price": 1188,
                    "name": "Pro (yearly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-yearly"
                },
                "paddle_subscription_id": "7229646",
                "id": "5836"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Kholmatov",
                    "id": "b.kholmatov@bsl.dev",
                    "first_name": "Bakhrom"
                },
                "sysName": "korzinanadom-test",
                "plan_id": {
                    "price": 0,
                    "name": "Business DEV-env",
                    "description": "Development environment for an app on Business plan",
                    "id": "Business-DEV"
                },
                "id": "6882"
            },
            {
                "plan_id": {
                    "price": 1188,
                    "name": "Pro (yearly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-yearly"
                },
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Ershov",
                    "id": "pavel@directual.com",
                    "first_name": "Pavel"
                },
                "sysName": "tuishou",
                "id": "9312"
            },
            {
                "owner_id": {
                    "id": "admin"
                },
                "sysName": "vitrina2252",
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "paddle_subscription_id": "6240856",
                "id": "4265"
            },
            {
                "owner_id": {
                    "country": "PR",
                    "last_name": "Kotthoff",
                    "id": "jonkotthoff@migoiq.app",
                    "first_name": "Jonathan"
                },
                "sysName": "migoplatform",
                "plan_id": {
                    "price": 429,
                    "name": "Business (monthly)",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "paddle_subscription_id": "8705268",
                "id": "8742"
            },
            {
                "owner_id": {
                    "last_name": "Dolgov",
                    "id": "n.dolgov@directual.com",
                    "first_name": "Nikita"
                },
                "sysName": "medtechgrants",
                "plan_id": {
                    "price": 429,
                    "name": "Business (monthly)",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-monthly"
                },
                "id": "7707",
                "is_sandbox": false
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "S",
                    "id": "dmitry@greatidea.me",
                    "first_name": "Dmitry"
                },
                "sysName": "demo_4404",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "5174190",
                "id": "3871"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Parfenov",
                    "id": "valery.v.parfenov@yandex.ru",
                    "first_name": "Valery"
                },
                "sysName": "tendercrm",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8756334",
                "id": "9301"
            },
            {
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Baev",
                    "id": "artosiris@gmail.com",
                    "first_name": "Egor"
                },
                "sysName": "artline",
                "plan_id": {
                    "price": 99,
                    "name": "Pro (legacy)",
                    "description": "Legacy plan. Pro, monthly payments",
                    "id": "Pro"
                },
                "paddle_subscription_id": "6838391",
                "id": "4203"
            },
            {
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "sysName": "avtor24",
                "owner_id": {
                    "country": "KZ",
                    "last_name": "Mussayeva",
                    "id": "dayanamussayeva12@gmail.com",
                    "first_name": "Dayana"
                },
                "id": "7741"
            },
            {
                "sysName": "UFG_PROD",
                "owner_id": {
                    "id": "admin"
                },
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "id": "2568"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Boyko",
                    "id": "for.work.vboyko@gmail.com",
                    "first_name": "Vladislav"
                },
                "sysName": "relations",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "8919350",
                "id": "9500"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "novozhilov",
                    "id": "novozhilov@code-word.ru",
                    "first_name": "dimitry"
                },
                "sysName": "bizitoys",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7550583",
                "id": "7030"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Sidorov",
                    "id": "as@edyes.ru",
                    "first_name": "Anton"
                },
                "sysName": "edyes",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8138700",
                "id": "7711"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Vishnevsky",
                    "id": "k.vishnevskiy@i-free.com",
                    "first_name": "Kirill"
                },
                "sysName": "life-plus-sleep-bot",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8830454",
                "id": "9364"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Robot",
                    "id": "digitalassistant@mkskom.ru",
                    "first_name": "Rob"
                },
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "sysName": "botrpa",
                "id": "9443"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Карачев",
                    "id": "9277383085a@gmail.com",
                    "first_name": "Александр"
                },
                "sysName": "holiday",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8251499",
                "id": "7100"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Карпов",
                    "id": "gelogeern@gmail.com",
                    "first_name": "Олег"
                },
                "sysName": "beton-platform",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8702321",
                "id": "7047"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Production",
                    "id": "insta.masterskaya@gmail.com",
                    "first_name": "Centurion"
                },
                "sysName": "centurion",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7884360",
                "id": "7066"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "UDALOV",
                    "id": "u@modapogoda.ru",
                    "first_name": "YURI"
                },
                "sysName": "mp",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6791951",
                "id": "5283"
            },
            {
                "owner_id": {
                    "country": "Undefined",
                    "last_name": "Baev",
                    "id": "artosiris@gmail.com",
                    "first_name": "Egor"
                },
                "sysName": "artbot",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6844185",
                "id": "6155"
            },
            {
                "owner_id": {
                    "country": "ES",
                    "last_name": "Aksoy",
                    "id": "kaanaksoy81@gmail.com",
                    "first_name": "Kaan"
                },
                "sysName": "kaanstestapp",
                "plan_id": {
                    "price": 99,
                    "name": "Pro (legacy)",
                    "description": "Legacy plan. Pro, monthly payments",
                    "id": "Pro"
                },
                "paddle_subscription_id": "6596597",
                "id": "4858"
            },
            {
                "owner_id": {
                    "country": "IE",
                    "last_name": "Мокринский",
                    "id": "mokrinsky.denis@gmail.com",
                    "first_name": "Денис"
                },
                "sysName": "testCMS",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6462194",
                "id": "3782"
            },
            {
                "owner_id": {
                    "country": "NL",
                    "last_name": "Mével",
                    "id": "tim@zack.eco",
                    "first_name": "Timothée"
                },
                "sysName": "intra-zack",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6582882",
                "id": "5109"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Newer",
                    "id": "anewnewer@gmail.com",
                    "first_name": "Alex"
                },
                "sysName": "uibakery",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6794144",
                "id": "4360"
            },
            {
                "owner_id": {
                    "country": "US",
                    "last_name": "Burris",
                    "id": "amy@steelbuildingconcepts.com",
                    "first_name": "Amy"
                },
                "sysName": "3d-builder",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6453774",
                "id": "5330"
            },
            {
                "owner_id": {
                    "country": "AU",
                    "last_name": "Roberts",
                    "id": "gareth@bonsaitech.com.au",
                    "first_name": "Gareth"
                },
                "sysName": "side-effectz",
                "plan_id": {
                    "price": 99,
                    "name": "Pro (legacy)",
                    "description": "Legacy plan. Pro, monthly payments",
                    "id": "Pro"
                },
                "paddle_subscription_id": "6571019",
                "id": "5841"
            },
            {
                "owner_id": {
                    "country": "UA",
                    "last_name": "Павел",
                    "id": "donchenko.pavel@gmail.com",
                    "first_name": "Донченко"
                },
                "sysName": "lass",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "8625708",
                "id": "8909"
            },
            {
                "owner_id": {
                    "country": "IL",
                    "last_name": "Aller",
                    "id": "dr.aller@yandex.ru",
                    "first_name": "Khelmut"
                },
                "sysName": "consilium-dental",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "9011397",
                "id": "9393"
            },
            {
                "owner_id": {
                    "country": "US",
                    "last_name": "Lawhon",
                    "id": "hi@nicklawhon.com",
                    "first_name": "Nick"
                },
                "sysName": "fantasyvolley",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "9108131",
                "id": "9935"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "id": "dv@aic.ru"
                },
                "sysName": "aic-test1",
                "plan_id": {
                    "price": 39,
                    "name": "Startup (monthly)",
                    "description": "Ideal for building an MVP or an internal app",
                    "id": "Startup-monthly"
                },
                "paddle_subscription_id": "8577917",
                "id": "2598"
            },
            {
                "sysName": "fps-test",
                "owner_id": {
                    "id": "admin"
                },
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "id": "2635"
            },
            {
                "sysName": "test222",
                "owner_id": {
                    "id": "admin"
                },
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "id": "2650"
            },
            {
                "owner_id": {
                    "country": "IE",
                    "last_name": "Vernikovsky",
                    "id": "dmitry.vernikovsky@gmail.com",
                    "first_name": "Dmitry"
                },
                "sysName": "demo_4232",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7360383",
                "id": "3652"
            },
            {
                "owner_id": {
                    "country": "IE",
                    "last_name": "Magaña Tejeira",
                    "id": "juanmaganatejeira@gmail.com",
                    "first_name": "Juan"
                },
                "sysName": "demo_4319",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "4804737",
                "id": "3757"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Konovalov",
                    "id": "leadthis@yandex.ru",
                    "first_name": "Alexey"
                },
                "sysName": "DirectualHero",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "5298438",
                "id": "4060"
            },
            {
                "owner_id": {
                    "country": "DE",
                    "last_name": "Fischer",
                    "id": "michellefischerdigital@gmail.com",
                    "first_name": "Michelle"
                },
                "sysName": "phumble",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6412112",
                "id": "5055"
            },
            {
                "owner_id": {
                    "country": "GR",
                    "last_name": "Papanikolaou",
                    "id": "periklis.wmri@gmail.com",
                    "first_name": "Periklis"
                },
                "sysName": "demo_4157",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "4789096",
                "id": "3558"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Нагаев",
                    "id": "maxim.nagaev@gmail.com",
                    "first_name": "Максим"
                },
                "sysName": "er",
                "plan_id": {
                    "price": 3600,
                    "name": "Business (yearly)",
                    "description": "Great for high loaded, business-critical, enterprise-grade apps",
                    "id": "Business-yearly"
                },
                "paddle_subscription_id": "8296847",
                "id": "4531"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "No",
                    "id": "xtrms@yandex.ru",
                    "first_name": "Vladimir"
                },
                "sysName": "movies0001",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "6961350",
                "id": "6351"
            },
            {
                "owner_id": {
                    "country": "CA",
                    "last_name": "Mallett",
                    "id": "steve.mallett@gmail.com",
                    "first_name": "Steve"
                },
                "sysName": "stevemvp",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6357604",
                "id": "4699"
            },
            {
                "owner_id": {
                    "country": "MD",
                    "last_name": "Bee",
                    "id": "softwarereviewguru@gmail.com",
                    "first_name": "Guru"
                },
                "sysName": "demo_4332",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "4846067",
                "id": "3774"
            },
            {
                "owner_id": {
                    "country": "ZA",
                    "last_name": "Filyakov",
                    "id": "vfilyakovza@gmail.com",
                    "first_name": "Vladimir"
                },
                "sysName": "alkhibrah",
                "plan_id": {
                    "price": 99,
                    "name": "Pro (legacy)",
                    "description": "Legacy plan. Pro, monthly payments",
                    "id": "Pro"
                },
                "paddle_subscription_id": "6564721",
                "id": "5861"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "воробьев",
                    "id": "artandvor@gmail.com",
                    "first_name": "артем"
                },
                "sysName": "univer",
                "plan_id": {
                    "price": 30,
                    "name": "Startup (legacy)",
                    "description": "Legacy plan. Startup, monthly payments",
                    "id": "Startup"
                },
                "paddle_subscription_id": "6580336",
                "id": "4950"
            },
            {
                "owner_id": {
                    "country": "US",
                    "last_name": "Ouellette",
                    "id": "jesse@revenueadvisory.com",
                    "first_name": "Jesse"
                },
                "sysName": "saasdata",
                "plan_id": {
                    "price": 300,
                    "name": "Business (legacy)",
                    "description": "Legacy plan. Business, monthly payments",
                    "id": "Business"
                },
                "paddle_subscription_id": "6610111",
                "id": "5374"
            },
            {
                "owner_id": {
                    "last_name": "Mozer",
                    "id": "a.mozer@directual.com",
                    "first_name": "Anna"
                },
                "sysName": "crm-template",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7100874",
                "id": "5835"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "No",
                    "id": "xtrms@yandex.ru",
                    "first_name": "Vladimir"
                },
                "sysName": "crm0001",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7604118",
                "id": "6840"
            },
            {
                "owner_id": {
                    "country": "GB",
                    "last_name": "Whitaker",
                    "id": "admin@middlelink.io",
                    "first_name": "Joel"
                },
                "sysName": "like-system",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7044669",
                "id": "6452"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Lakiza",
                    "id": "slakiza@gmail.com",
                    "first_name": "Sergey"
                },
                "sysName": "hhkllhh",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "6949015",
                "id": "6328"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Гл",
                    "id": "zhukpaukileopard@gmail.com",
                    "first_name": "Анна"
                },
                "sysName": "movies-beginner",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7918163",
                "id": "6934"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Proskurin",
                    "id": "kp@g-71.com",
                    "first_name": "Kirill"
                },
                "sysName": "sellerhero",
                "plan_id": {
                    "price": 99,
                    "name": "Pro (legacy)",
                    "description": "Legacy plan. Pro, monthly payments",
                    "id": "Pro"
                },
                "paddle_subscription_id": "6461347",
                "id": "4911"
            },
            {
                "owner_id": {
                    "country": "RU",
                    "last_name": "Гл",
                    "id": "zhukpaukileopard@gmail.com",
                    "first_name": "Анна"
                },
                "sysName": "crm-basic-module",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7826375",
                "id": "7308"
            },
            {
                "owner_id": {
                    "country": "IE",
                    "last_name": "Vernikovsky",
                    "id": "dmitry.vernikovsky@gmail.com",
                    "first_name": "Dmitry"
                },
                "sysName": "kiwicrm",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "7865188",
                "id": "7380"
            },
            {
                "owner_id": {
                    "country": "KZ",
                    "last_name": "Mussayeva",
                    "id": "dayanamussayeva12@gmail.com",
                    "first_name": "Dayana"
                },
                "sysName": "monday-sender",
                "plan_id": {
                    "price": 139,
                    "name": "Pro (monthly)",
                    "description": "Includes advanced features for developing and scaling your app",
                    "id": "Pro-monthly"
                },
                "paddle_subscription_id": "8322370",
                "id": "8340"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "UsageHistory_ids",
                1395053
            ],
            [
                "balance",
                1395053
            ],
            [
                "comments.date",
                99033830
            ],
            [
                "comments.files",
                99033830
            ],
            [
                "comments.text",
                99033830
            ],
            [
                "comments.user_id.firstName",
                17682
            ],
            [
                "comments.user_id.lastName",
                17682
            ],
            [
                "comments.user_id.userpic",
                17682
            ],
            [
                "id",
                1395053
            ],
            [
                "is_blocked",
                1395053
            ],
            [
                "is_sandbox",
                1395053
            ],
            [
                "name",
                1395053
            ],
            [
                "owner_id.country",
                1282551
            ],
            [
                "owner_id.first_name",
                1282551
            ],
            [
                "owner_id.id",
                1282551
            ],
            [
                "owner_id.last_name",
                1282551
            ],
            [
                "paddle_subscription_id",
                1395053
            ],
            [
                "paddle_subscription_status",
                1395053
            ],
            [
                "plan_id.description",
                1294700
            ],
            [
                "plan_id.id",
                1294700
            ],
            [
                "plan_id.name",
                1294700
            ],
            [
                "plan_id.price",
                1294700
            ],
            [
                "sysName",
                1395053
            ]
        ],
        "writeFields": [
            "id",
            "plan_id"
        ],
        "structures": {
            "17682": {
                "networkID": 1822,
                "sysName": "WebUser",
                "name": "App users",
                "id": 17682,
                "dateCreated": "2018-08-24T09:51:34Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"role\",\"name\":\"role\",\"dataType\":\"string\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"11091633193856259\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"1633193869317\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"27051633193856853\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"1633193869317\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"email\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userpic\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"49631633193892687\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"phone\",\"name\":\"phone\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"1633193869317\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"password\",\"name\":\"password\",\"dataType\":\"string\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"8\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"legacy fields\",\"id\":1633193869317,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-02T16:58:26Z",
                "createBy": null,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "8",
                    "link": "",
                    "group": "0",
                    "tags": "",
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
                    "array": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 0
            },
            "1282551": {
                "networkID": 1822,
                "sysName": "Cloud_users",
                "name": "👨🏻 Cloud users",
                "id": 1282551,
                "dateCreated": "2019-10-05T15:17:37Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":true,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"note\",\"name\":\"Note\",\"dataType\":\"string\",\"id\":\"34591570383079323\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"first_name\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"23971570288647049\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"last_name\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"81941570288646826\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"locale\",\"name\":\"locale\",\"dataType\":\"string\",\"id\":\"47031570379144750\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"source\",\"name\":\"Source\",\"dataType\":\"string\",\"id\":\"92371570288676773\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"request_id\",\"name\":\"Request ID\",\"dataType\":\"link\",\"id\":\"23691571997337572\",\"link\":\"Requests\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"ip\",\"name\":\"ip\",\"dataType\":\"string\",\"id\":\"70561588673350213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"country\",\"name\":\"Country\",\"dataType\":\"link\",\"id\":\"37101588673355053\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"social_register\",\"name\":\"social_register\",\"dataType\":\"boolean\",\"id\":\"71461588678509868\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"register_date\",\"name\":\"Register date\",\"dataType\":\"date\",\"id\":\"36551588868841568\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YYYY\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"country_id\",\"name\":\"Country link (ISO)\",\"dataType\":\"link\",\"id\":\"31401588873548829\",\"link\":\"CountriesISO\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"last_activity_date\",\"name\":\"Last activity date\",\"dataType\":\"date\",\"id\":\"96951570962621002\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"apps\",\"name\":\"Apps\",\"dataType\":\"arrayLink\",\"id\":\"80561587152006234\",\"link\":\"AppInfo\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"number_of_sl\",\"name\":\"Number of SLs\",\"dataType\":\"number\",\"id\":\"41141570962898360\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"number_of_structures\",\"name\":\"Number of structures\",\"dataType\":\"number\",\"id\":\"70371570962891170\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"number_of_scenarios\",\"name\":\"Number of scenarios\",\"dataType\":\"number\",\"id\":\"71201570962890259\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"logged_in\",\"name\":\"Have logged in\",\"dataType\":\"boolean\",\"id\":\"42361570962605801\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"number_of_apps\",\"name\":\"Number of apps\",\"dataType\":\"number\",\"id\":\"41911570383626553\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"today_stat_id\",\"name\":\"Today stat link\",\"dataType\":\"link\",\"id\":\"42431587908594891\",\"link\":\"Dashboard_data\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"team_ids\",\"name\":\"Teams\",\"dataType\":\"arrayLink\",\"id\":\"26441632905559721\",\"link\":\"Teams\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"current_team_plans\",\"name\":\"Current team plans\",\"dataType\":\"arrayLink\",\"id\":\"45021632906172898\",\"link\":\"TeamTariffs\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"isLTD_user\",\"name\":\"LTD user\",\"dataType\":\"boolean\",\"id\":\"13531632918815271\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"Paid_app_plan_user\",\"name\":\"Paid app plan user\",\"dataType\":\"boolean\",\"id\":\"22421632918830874\",\"link\":\"\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"current_app_plans\",\"name\":\"Current app plans\",\"dataType\":\"arrayLink\",\"id\":\"54321632918865581\",\"link\":\"Tariff\",\"group\":\"1570288674389\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"mailchimp_tags\",\"name\":\"Mailchimp labels\",\"dataType\":\"string\",\"id\":\"97421570379132976\",\"link\":null,\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"mailchimp_segments\",\"name\":\"Mailchimp Segments\",\"dataType\":\"array\",\"id\":\"84981587457354001\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":true},{\"sysName\":\"is_country_synced\",\"name\":\"is_country_synced\",\"dataType\":\"boolean\",\"id\":\"31991605527320825\",\"link\":\"\",\"group\":\"1570379125072\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"app_description\",\"name\":\"App description\",\"dataType\":\"string\",\"id\":\"72461572603438535\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"customer_type\",\"name\":\"Customer type\",\"dataType\":\"string\",\"id\":\"93281572603437791\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"utm_source\",\"name\":\"utm_source\",\"dataType\":\"string\",\"id\":\"91131588673287122\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"utm_medium\",\"name\":\"utm_medium\",\"dataType\":\"string\",\"id\":\"27621588673319861\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"utm_campaign\",\"name\":\"utm_campaign\",\"dataType\":\"string\",\"id\":\"85671588673320381\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"survey_ids\",\"name\":\"Surveys\",\"dataType\":\"arrayLink\",\"id\":\"27581591180002769\",\"link\":\"Surveys\",\"group\":\"1570381436668\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"ref\",\"name\":\"ref\",\"dataType\":\"string\",\"id\":\"68451626349155030\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"storage\",\"name\":\"Survey storage\",\"dataType\":\"json\",\"id\":\"86371627198748459\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"array\":false},{\"sysName\":\"survey_step_1_raw\",\"name\":\"Which describes you best\",\"dataType\":\"string\",\"id\":\"24041632732046851\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"survey_step_2_raw\",\"name\":\"Whom do you want to build apps for\",\"dataType\":\"string\",\"id\":\"57151632732047604\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"survey_step_3_raw\",\"name\":\"How did you know about Directual\",\"dataType\":\"string\",\"id\":\"98341632732048278\",\"link\":null,\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"survey_is_aborted\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"75331632901439193\",\"link\":\"\",\"group\":\"1570381436668\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"notifications_account\",\"name\":\"Notify about Account\",\"dataType\":\"boolean\",\"id\":\"49381572378982097\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"notifications_academy\",\"name\":\"Notify about Academy\",\"dataType\":\"boolean\",\"id\":\"97951572378981844\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"notifications_blog\",\"name\":\"Notify about Blog\",\"dataType\":\"boolean\",\"id\":\"20211572378981407\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"unsubscribed\",\"name\":\"unsubscribed\",\"dataType\":\"boolean\",\"id\":\"20361600521081143\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"unsibscribed_reason\",\"name\":\"unsibscribed_reason\",\"dataType\":\"string\",\"id\":\"87491600521243757\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"admin_notification_text\",\"name\":\"admin_notification_text\",\"dataType\":\"string\",\"id\":\"21331602224278958\",\"link\":\"\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"whom_to_alert\",\"name\":\"\",\"dataType\":\"arrayLink\",\"id\":\"61381602224446180\",\"link\":\"TUser\",\"group\":\"1572378880897\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"email_hash\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"40581588875619696\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"gravatar\",\"name\":\"Gravatar\",\"dataType\":\"string\",\"id\":\"89411588875620336\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"gravatar_pic\",\"name\":\" \",\"dataType\":\"file\",\"id\":\"77261619116355317\",\"link\":\"\",\"group\":\"1588875605532\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1570381436668,\"name\":\"CRM\",\"order\":2},{\"id\":1588875605532,\"name\":\"Gravatar\",\"order\":4},{\"id\":1570288674389,\"name\":\"Cloud usage\",\"order\":0},{\"id\":1572378880897,\"name\":\"Notifications settings\",\"order\":3},{\"id\":1570379125072,\"name\":\"Mailchimp\",\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"first_name\"},{\"sysName\":\"last_name\"},{\"sysName\":\"country\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-29T12:34:50Z",
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
                    "array": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 667556
            },
            "1294700": {
                "networkID": 1822,
                "sysName": "Tariff",
                "name": "💰 Tariffs",
                "id": 1294700,
                "dateCreated": "2020-02-27T12:54:30Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"7\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"price\",\"name\":\"price\",\"dataType\":\"decimal\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"visible\",\"name\":\"visible\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"settings\",\"name\":\"settings\",\"dataType\":\"json\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"description\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"name\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"is_default\",\"name\":\"is_default\",\"dataType\":\"boolean\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"paddle_id\",\"name\":\"paddle_id\",\"dataType\":\"string\",\"id\":\"77771590089291447\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"available_for_admin\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"97171633096560133\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-04T15:06:16Z",
                "createBy": 0,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "7",
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
                    "array": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 33664904
            },
            "1395053": {
                "networkID": 1822,
                "sysName": "Apps",
                "name": "📱 Apps",
                "id": 1395053,
                "dateCreated": "2021-06-14T21:39:39Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"App id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"raw_app_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"12131623746301658\",\"link\":\"AppInfo\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"paddle_subscription_id\",\"name\":\"Paddle ID\",\"dataType\":\"string\",\"id\":\"13631633089941494\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"name\",\"name\":\"App name\",\"dataType\":\"string\",\"id\":\"13661623706989350\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"stat_proc\",\"name\":\"Stat | Proc exec\",\"dataType\":\"number\",\"id\":\"16611623707312286\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"balance\",\"name\":\"\",\"dataType\":\"decimal\",\"id\":\"20731633354617743\",\"link\":\"\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color_get\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"26091623775679245\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"paddle_update_date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"26191633364756662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"sysName\",\"name\":\"System name\",\"dataType\":\"string\",\"id\":\"27541623706978377\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"isLegacy\",\"name\":\"Legacy app\",\"dataType\":\"boolean\",\"id\":\"30351623746607632\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"stat_post\",\"name\":\"Stat | POST\",\"dataType\":\"number\",\"id\":\"37551623707296997\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"38791623706999272\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"is_excess\",\"name\":\"Excess plan\",\"dataType\":\"boolean\",\"id\":\"40361623748858552\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"🔥 hit limits\",\" \"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"owner_id\",\"name\":\"Owner\",\"dataType\":\"link\",\"id\":\"41841623707118206\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"comments\",\"name\":\"Comments\",\"dataType\":\"arrayLink\",\"id\":\"44101633194013799\",\"link\":\"admin_comments\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color_sync\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"45481623775706832\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"merchant_event_ids\",\"name\":\"Paddle events\",\"dataType\":\"arrayLink\",\"id\":\"46441623707088217\",\"link\":\"MerchantEvent\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"is_sandbox\",\"name\":\"is_sandbox\",\"dataType\":\"boolean\",\"id\":\"47331625209998636\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"UsageHistory_ids\",\"name\":\"Usage history\",\"dataType\":\"arrayLink\",\"id\":\"48791633369864037\",\"link\":\"UsageHistory\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"developer_ids\",\"name\":\"Developers\",\"dataType\":\"arrayLink\",\"id\":\"54301623707131642\",\"link\":\"Cloud_users\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"isTeam\",\"name\":\"Team app\",\"dataType\":\"boolean\",\"id\":\"68981623707196589\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"reports\",\"name\":\"reports\",\"dataType\":\"arrayLink\",\"id\":\"71551633353882284\",\"link\":\"UsageHistory\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"plan_id\",\"name\":\"Billing plan\",\"dataType\":\"link\",\"id\":\"74161623707026653\",\"link\":\"Tariff\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"change_plan_request_ids\",\"name\":\"Plan change requests\",\"dataType\":\"arrayLink\",\"id\":\"76611623707045935\",\"link\":\"ChangeTariffRequests\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"stat_users\",\"name\":\"Stat | Users\",\"dataType\":\"number\",\"id\":\"76861623707270662\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"79011623748876085\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"is_blocked\",\"name\":\"is_blocked\",\"dataType\":\"boolean\",\"id\":\"82901633095583058\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"admin_requests_ids\",\"name\":\"Admin actions\",\"dataType\":\"arrayLink\",\"id\":\"85821633095205778\",\"link\":\"admin_app_change_requests\",\"group\":\"1633095201028\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color_users\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"86811623775714205\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"stat_sync\",\"name\":\"Stat | SYNC Proc exec\",\"dataType\":\"number\",\"id\":\"87341623707329117\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color_post\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"89081623775692061\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"color_proc\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"92601623775698497\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"team_id\",\"name\":\"Team\",\"dataType\":\"link\",\"id\":\"94291623707210181\",\"link\":\"Teams\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"stat_get\",\"name\":\"Stat | GET\",\"dataType\":\"number\",\"id\":\"94951623707229504\",\"link\":\"\",\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"raw_usage_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"96391623747858362\",\"link\":\"UsageHistory\",\"group\":\"1623746295898\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false},{\"sysName\":\"paddle_subscription_status\",\"name\":\"Paddle Status\",\"dataType\":\"string\",\"id\":\"99931633090832671\",\"link\":null,\"group\":\"1623707015468\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Billing\",\"id\":1623707015468,\"order\":0},{\"name\":\"RAW_data\",\"id\":1623746295898,\"order\":2},{\"name\":\"ADMIN\",\"id\":1633095201028,\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"sysName\"},{\"sysName\":\"id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-04T17:51:25Z",
                "createBy": 1,
                "changedBy": 21,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "App id",
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 667556
            },
            "99033830": {
                "networkID": 1822,
                "sysName": "admin_comments",
                "name": "Admin comments",
                "id": 99033830,
                "dateCreated": "2021-10-02T16:37:50Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"app_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"34331633193766936\",\"link\":\"Apps\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"38001633193719054\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"text\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"60041633193741409\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"67911633193701811\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"files\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"73621633193726412\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-02T16:56:18Z",
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "indexExists": false
                },
                "folderId": 667556
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "id",
                "name": "App id",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
            },
            {
                "sysName": "plan_id",
                "name": "Billing plan",
                "dataType": "link",
                "id": "74161623707026653",
                "link": "Tariff",
                "group": "1623707015468",
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
                "array": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "indexExists": false
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
        "sl": "testFiles",
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
                        "fieldSysName": "file",
                        "fetch": [],
                        "sysName": "file",
                        "name": "",
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
                        "fieldSysName": "image",
                        "fetch": [],
                        "sysName": "image",
                        "name": "",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "multiFiles",
                        "fetch": [],
                        "sysName": "multiFiles",
                        "name": "",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "multiImages",
                        "fetch": [],
                        "sysName": "multiImages",
                        "name": "",
                        "dataType": "file",
                        "format": "multipleImages",
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
                    "file": {
                        "id": "file",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "image": {
                        "id": "image",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "multiFiles": {
                        "id": "multiFiles",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "multiImages": {
                        "id": "multiImages",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
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
                    "file": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true
                    },
                    "image": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true
                    },
                    "multiFiles": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true
                    },
                    "multiImages": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "id",
                            "file",
                            "image",
                            "multiFiles",
                            "multiImages"
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
                "file": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true
                },
                "image": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true
                },
                "multiFiles": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true
                },
                "multiImages": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true
                }
            }
        },
        "fileds": [
            {
                "sysName": "file",
                "dataType": "file",
                "name": "",
                "id": "39501631550751631",
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
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false
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
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false
            },
            {
                "sysName": "image",
                "dataType": "file",
                "name": "",
                "id": "78161631550767971",
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
                "format": "image",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false
            },
            {
                "sysName": "multiFiles",
                "dataType": "file",
                "name": "",
                "id": "77061631550759737",
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
                "format": "multipleFiles",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false
            },
            {
                "sysName": "multiImages",
                "dataType": "file",
                "name": "",
                "id": "64151631550776568",
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
                "format": "multipleImages",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false
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


    const exampleTabs = [
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} /> },
        { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
    ]

    return (
        <FpsWrapper>
            <Router>
                <MainMenuWrapper themeName={currentTheme} />
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