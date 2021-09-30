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
                            "priceUnits": "руб.",
                            "titleField": "good",
                            "priceField": "finalPrice",
                            "quantityField": "quantity"
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
                                }
                            },
                            "fieldOrder": [
                                "finalPrice",
                                "good",
                                "good_in_cart_name",
                                "image",
                                "quantity"
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
                        "priceUnits": "руб.",
                        "titleField": "good",
                        "priceField": "finalPrice",
                        "quantityField": "quantity"
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
                            }
                        },
                        "fieldOrder": [
                            "finalPrice",
                            "good",
                            "good_in_cart_name",
                            "image",
                            "quantity"
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
                        "image": "https://api.directual.com/fileUploaded/cart/7e71ae85-66e9-4e44-9ddc-add69a90c998.jpg",
                        "good": {
                            "price": 10,
                            "name": "apples",
                            "id": "1"
                        },
                        "good_in_cart_name": "good 3",
                        "id": "1",
                        "finalPrice": 99
                    },
                    {
                        "quantity": 4,
                        "image": "https://api.directual.com/fileUploaded/cart/7e71ae85-66e9-4e44-9ddc-add69a90c998.jpg",
                        "good": {
                            "price": 20,
                            "name": "bananas",
                            "id": "2"
                        },
                        "good_in_cart_name": "good 2",
                        "id": "2",
                        "finalPrice": 120
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
                        "finalPrice": 400
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
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"39841632654618610\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"price\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"16831632654619092\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image\",\"name\":\"Image\",\"dataType\":\"file\",\"id\":\"61001632654724498\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
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
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
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
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cart_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"27951632654884383\",\"link\":\"cart\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"good\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"56301632654884854\",\"link\":\"goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"quantity\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"10581632654902116\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"finalPrice\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"41241632654906714\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"good_in_cart_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"40521632944512531\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image\",\"name\":\"\",\"dataType\":\"file\",\"id\":\"86301632946954729\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"good_in_cart_name\"},{\"sysName\":\"good\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-29T20:22:41Z",
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
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
        "sl": "getOrdersAdmin",
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
                        "fieldSysName": "bankOrderID",
                        "fetch": [],
                        "sysName": "bankOrderID",
                        "name": "bankOrderID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "cost",
                        "fetch": [],
                        "sysName": "cost",
                        "name": "Стоимость закза",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "customer",
                        "fetch": [
                            {
                                "fieldSysName": "adress",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "email",
                                "condition": null,
                                "fetch": []
                            },
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
                                "fieldSysName": "phone",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "customer",
                        "name": "Покупатель",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "good",
                        "fetch": [
                            {
                                "fieldSysName": "agreed",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "brandName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "colorName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "isNew",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "isSale",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "itemCost",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "oldPrice",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "photo",
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
                        "sysName": "good",
                        "name": "Позиции в заказе",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "itemsInCart"
                    },
                    {
                        "fieldSysName": "orderNumber",
                        "fetch": [],
                        "sysName": "orderNumber",
                        "name": "Номер заказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "orderStatus",
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
                        "sysName": "orderStatus",
                        "name": "Статус заказа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "orderStatuses"
                    },
                    {
                        "fieldSysName": "paymentStatus",
                        "fetch": [],
                        "sysName": "paymentStatus",
                        "name": "paymentStatus",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "bankOrderID": {
                        "id": "bankOrderID",
                        "content": "bankOrderID",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "cost": {
                        "id": "cost",
                        "content": "Стоимость закза",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "customer": {
                        "id": "customer",
                        "content": "Покупатель",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "good": {
                        "id": "good",
                        "content": "Позиции в заказе",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "itemsInCart",
                        "actions": []
                    },
                    "orderNumber": {
                        "id": "orderNumber",
                        "content": "Номер заказа",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "orderStatus": {
                        "id": "orderStatus",
                        "content": "Статус заказа",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "orderStatuses",
                        "actions": []
                    },
                    "paymentStatus": {
                        "id": "paymentStatus",
                        "content": "paymentStatus",
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
                    "agreedAction": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "colorName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "goodsDescription_id": {
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
                    "isNew": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "isSale": {
                        "include": true,
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
                    "order": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "agreed": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bankOrderID": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "cost": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "customer": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "adress": {
                                    "id": "adress",
                                    "content": "Адрес",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "email": {
                                    "id": "email",
                                    "content": "Email",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "phone": {
                                    "id": "phone",
                                    "content": "Телефон",
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
                                "lastName": {
                                    "id": "lastName",
                                    "content": "Фамилия",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "adress": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "email": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "phone": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "firstName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "lastName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "adress",
                                "email",
                                "phone",
                                "firstName",
                                "lastName"
                            ]
                        },
                        "veiwOption": "cart",
                        "cartView": {
                            "title": true,
                            "titleField": "firstName"
                        }
                    },
                    "good": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "agreed": {
                                    "id": "agreed",
                                    "content": "Согласован",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "brandName": {
                                    "id": "brandName",
                                    "content": "Бренд",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "colorName": {
                                    "id": "colorName",
                                    "content": "Цвет",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "description": {
                                    "id": "description",
                                    "content": "Описание",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "isNew": {
                                    "id": "isNew",
                                    "content": "Новый",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "isSale": {
                                    "id": "isSale",
                                    "content": "Скидка",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "boolean",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "itemCost": {
                                    "id": "itemCost",
                                    "content": "Стоимость",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "name": {
                                    "id": "name",
                                    "content": "Название",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "oldPrice": {
                                    "id": "oldPrice",
                                    "content": "Старая цена ₽",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "photo": {
                                    "id": "photo",
                                    "content": "Фото",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "multipleImages",
                                    "formatOptions": {}
                                },
                                "price": {
                                    "id": "price",
                                    "content": "Цена ₽",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "quantity": {
                                    "id": "quantity",
                                    "content": "Количество",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "agreed": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "brandName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "colorName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "description": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "isNew": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "isSale": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "itemCost": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "oldPrice": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "photo": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "price": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "quantity": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "agreed",
                                "brandName",
                                "colorName",
                                "description",
                                "isNew",
                                "isSale",
                                "itemCost",
                                "name",
                                "oldPrice",
                                "photo",
                                "price",
                                "quantity"
                            ]
                        },
                        "veiwOption": "cart",
                        "cartView": {
                            "title": true,
                            "deleteOn": true,
                            "price": true,
                            "priceField": "itemCost",
                            "priceUnits": "р.",
                            "titleField": "name",
                            "quantity": true,
                            "quantityField": "quantity",
                            "image": false,
                            "imageField": "photo"
                        }
                    },
                    "orderNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "orderStatus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paymentStatus": {
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
                        "title": "Заказ",
                        "fieldIds": [
                            "orderNumber",
                            "cost",
                            "customer",
                            "good",
                            "orderStatus"
                        ]
                    },
                    "48631631796857920": {
                        "id": "48631631796857920",
                        "title": "Банковские операции",
                        "fieldIds": [
                            "paymentStatus",
                            "bankOrderID"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "48631631796857920"
                ],
                "actions": []
            },
            "fields": {
                "agreedAction": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "colorName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "goodsDescription_id": {
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
                "isNew": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isSale": {
                    "include": true,
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
                "order": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "photo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "agreed": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bankOrderID": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "cost": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "customer": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "adress": {
                                "id": "adress",
                                "content": "Адрес",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "email": {
                                "id": "email",
                                "content": "Email",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "phone": {
                                "id": "phone",
                                "content": "Телефон",
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
                            "lastName": {
                                "id": "lastName",
                                "content": "Фамилия",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "adress": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "email": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "phone": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "firstName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "adress",
                            "email",
                            "phone",
                            "firstName",
                            "lastName"
                        ]
                    },
                    "veiwOption": "cart",
                    "cartView": {
                        "title": true,
                        "titleField": "firstName"
                    }
                },
                "good": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "agreed": {
                                "id": "agreed",
                                "content": "Согласован",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "brandName": {
                                "id": "brandName",
                                "content": "Бренд",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "colorName": {
                                "id": "colorName",
                                "content": "Цвет",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "description": {
                                "id": "description",
                                "content": "Описание",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "isNew": {
                                "id": "isNew",
                                "content": "Новый",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
                                "format": null,
                                "formatOptions": {}
                            },
                            "isSale": {
                                "id": "isSale",
                                "content": "Скидка",
                                "type": "field",
                                "read": true,
                                "dataType": "boolean",
                                "format": null,
                                "formatOptions": {}
                            },
                            "itemCost": {
                                "id": "itemCost",
                                "content": "Стоимость",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": {}
                            },
                            "name": {
                                "id": "name",
                                "content": "Название",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "oldPrice": {
                                "id": "oldPrice",
                                "content": "Старая цена ₽",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": {}
                            },
                            "photo": {
                                "id": "photo",
                                "content": "Фото",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "multipleImages",
                                "formatOptions": {}
                            },
                            "price": {
                                "id": "price",
                                "content": "Цена ₽",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": {}
                            },
                            "quantity": {
                                "id": "quantity",
                                "content": "Количество",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "agreed": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "brandName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "colorName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "description": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "isNew": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "isSale": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "itemCost": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "oldPrice": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "photo": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "price": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "quantity": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "agreed",
                            "brandName",
                            "colorName",
                            "description",
                            "isNew",
                            "isSale",
                            "itemCost",
                            "name",
                            "oldPrice",
                            "photo",
                            "price",
                            "quantity"
                        ]
                    },
                    "veiwOption": "cart",
                    "cartView": {
                        "title": true,
                        "deleteOn": true,
                        "price": true,
                        "priceField": "itemCost",
                        "priceUnits": "р.",
                        "titleField": "name",
                        "quantity": true,
                        "quantityField": "quantity",
                        "image": false,
                        "imageField": "photo"
                    }
                },
                "orderNumber": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "orderStatus": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paymentStatus": {
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
                        "fieldSysName": "bankOrderID",
                        "fetch": [],
                        "sysName": "bankOrderID",
                        "name": "bankOrderID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "cost",
                        "fetch": [],
                        "sysName": "cost",
                        "name": "Стоимость закза",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "customer",
                        "fetch": [
                            {
                                "fieldSysName": "adress",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "email",
                                "condition": null,
                                "fetch": []
                            },
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
                                "fieldSysName": "phone",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "customer",
                        "name": "Покупатель",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "good",
                        "fetch": [
                            {
                                "fieldSysName": "agreed",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "brandName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "colorName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "isNew",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "isSale",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "itemCost",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "oldPrice",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "photo",
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
                        "sysName": "good",
                        "name": "Позиции в заказе",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "itemsInCart"
                    },
                    {
                        "fieldSysName": "orderNumber",
                        "fetch": [],
                        "sysName": "orderNumber",
                        "name": "Номер заказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "orderStatus",
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
                        "sysName": "orderStatus",
                        "name": "Статус заказа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "orderStatuses"
                    },
                    {
                        "fieldSysName": "paymentStatus",
                        "fetch": [],
                        "sysName": "paymentStatus",
                        "name": "paymentStatus",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "bankOrderID": {
                        "id": "bankOrderID",
                        "content": "bankOrderID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "cost": {
                        "id": "cost",
                        "content": "Стоимость закза",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "customer": {
                        "id": "customer",
                        "content": "Покупатель",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser"
                    },
                    "good": {
                        "id": "good",
                        "content": "Позиции в заказе",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "itemsInCart"
                    },
                    "orderNumber": {
                        "id": "orderNumber",
                        "content": "Номер заказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "orderStatus": {
                        "id": "orderStatus",
                        "content": "Статус заказа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "orderStatuses"
                    },
                    "paymentStatus": {
                        "id": "paymentStatus",
                        "content": "paymentStatus",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "agreedAction": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "colorName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "goodsDescription_id": {
                        "include": true,
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
                    "isNew": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "isSale": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "name": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "order": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "agreed": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "good": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "bankOrderID": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "cost": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "customer": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "orderNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "colorCell": false,
                        "colorCellType": "text",
                        "colorCellSource": "field"
                    },
                    "orderStatus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "paymentStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "bankOrderID",
                    "orderNumber",
                    "good",
                    "cost",
                    "customer",
                    "orderStatus",
                    "paymentStatus"
                ]
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "bankOrderID",
                "dataType": "string",
                "name": "bankOrderID",
                "id": "15641630458179728",
                "link": null,
                "group": "1630368229089",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "cost",
                "dataType": "number",
                "name": "Стоимость закза",
                "id": "97951627940223097",
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
            },
            {
                "sysName": "customer",
                "dataType": "link",
                "name": "Покупатель",
                "id": "55421627940261791",
                "link": "WebUser",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "good",
                "dataType": "arrayLink",
                "name": "Позиции в заказе",
                "id": "82021625428782418",
                "link": "itemsInCart",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    "brandID.id",
                    "good.good.id",
                    "id",
                    "good.good"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "indexExists": true,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "orderNumber",
                "dataType": "string",
                "name": "Номер заказа",
                "id": "24861630368180012",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "orderStatus",
                "dataType": "link",
                "name": "Статус заказа",
                "id": "95151630619162902",
                "link": "orderStatuses",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "array": false
            },
            {
                "sysName": "paymentStatus",
                "dataType": "string",
                "name": "paymentStatus",
                "id": "36481630678719313",
                "link": "",
                "group": "1630678669874",
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
        "data": [
            {
                "orderNumber": "vitrinabrands_1000020",
                "paymentStatus": "0",
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 1,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "agreed": "Не согласован",
                        "id": "1547b8b4-be28-40da-b2e7-8f133636e0e1",
                        "isNew": true,
                        "itemCost": 16000,
                        "colorName": "black"
                    }
                ],
                "orderStatus": {
                    "id": "payed",
                    "status": "Оплачен"
                },
                "cost": 16000,
                "bankOrderID": "4f81b1e0-a483-768a-b044-6a3a0427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000019",
                "paymentStatus": "0",
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 1,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "agreed": "Не согласован",
                        "id": "1547b8b4-be28-40da-b2e7-8f133636e0e1",
                        "isNew": true,
                        "itemCost": 16000,
                        "colorName": "black"
                    }
                ],
                "orderStatus": {
                    "id": "waitPayment",
                    "status": "Ждем оплаты"
                },
                "cost": 16000,
                "bankOrderID": "4d9b9c13-4809-7239-ab47-635f0427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000004",
                "good": [
                    {
                        "name": "Diesel T-Diego-Logo large logo t-shirt in white",
                        "quantity": 1,
                        "photo": "https://images.asos-media.com/products/diesel-t-diego-logo-large-logo-t-shirt-in-white/20842396-1-white?$n_640w$&wid=513&fit=constrain",
                        "description": "T-shirt by Diesel\n\n- Aesthetic: on point \n- Crew neck\n- Short sleeves\n- Logo print to chest\n- Regular fit\n- True to size",
                        "price": 5400,
                        "brandName": "Diesel",
                        "agreed": "Не согласован",
                        "id": "f5e1cdbe-9616-4cfd-b923-e14e1455fa4c",
                        "isNew": true,
                        "colorName": "Белый"
                    },
                    {
                        "name": "Calvin Klein Jeans institutional graphic logo sweatshirt in black",
                        "quantity": 1,
                        "photo": "https://images.asos-media.com/products/calvin-klein-jeans-institutional-graphic-logo-sweatshirt-in-black/23901155-1-black?$n_960w$&wid=952&fit=constrain",
                        "description": "Sweatshirt by Calvin Klein Jeans\n\n- Part of our responsible edit\n- Crew neck\n- Branded print details\n- Ribbed trims\n- Relaxed fit",
                        "price": 4500,
                        "brandName": "Calvin Klein",
                        "agreed": "Согласован",
                        "id": "f8d39fce-f29c-4c32-9281-740ce87b321c",
                        "isNew": true,
                        "colorName": "Черный"
                    }
                ],
                "orderStatus": {
                    "id": "newOrder",
                    "status": "Новый"
                },
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                }
            },
            {
                "orderNumber": "vitrinabrands_1000029",
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 3,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "agreed": "Не согласован",
                        "id": "1ce65a25-a9a9-4174-825b-5d28651a4ed3",
                        "isNew": true,
                        "itemCost": 48000,
                        "colorName": "black"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 2,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "agreed": "Согласован",
                        "id": "ddbbb417-667c-48cd-9885-8b0d2521e616",
                        "isNew": false,
                        "itemCost": 24000,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "orderStatus": "delivery",
                "cost": 72000,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                }
            },
            {
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 5,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "id": "8eb90fea-7330-4efa-90a8-33ed83d766d6",
                        "isNew": true,
                        "itemCost": 80000,
                        "colorName": "black"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 4,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "id": "2e73c4e1-fa04-4deb-a769-3289fff263d0",
                        "isNew": false,
                        "itemCost": 48000,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "cost": 128000,
                "orderNumber": "vitrinabrands_1000031"
            },
            {
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 2,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "agreed": "Не согласован",
                        "id": "b428d94f-4701-451c-bf3f-451eaeae4fc6",
                        "isNew": true,
                        "itemCost": 32000,
                        "colorName": "black"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 3,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "agreed": "Согласован",
                        "id": "f9a13460-1923-461d-ac42-eab7340d230f",
                        "isNew": false,
                        "itemCost": 36000,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "cost": 68000,
                "orderNumber": "vitrinabrands_1000030"
            },
            {
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 3,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "agreed": "Согласован",
                        "id": "8cadf031-be4a-4b11-b2dd-bd23931f06bc",
                        "isNew": true,
                        "itemCost": 48000,
                        "colorName": "black"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 2,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "agreed": "Согласован",
                        "id": "cade321b-9174-445c-a4e7-b11f0c9f587b",
                        "isNew": false,
                        "itemCost": 24000,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "cost": 72000,
                "orderNumber": "vitrinabrands_1000027"
            },
            {
                "good": [
                    {
                        "name": "Calvin Klein Jeans colourblock pop over jacket in black",
                        "quantity": 3,
                        "description": "Windbreaker jacket by Calvin Klein Jeans\n\n- Throw-on appeal\n- High collar\n- Half zip fastening\n- Raglan sleeves \n- Three pockets\n- Elasticated cuffs and hem \n- Regular fit",
                        "price": 16000,
                        "brandName": "Calvin Klein",
                        "id": "3503fa85-bee4-4fa5-9046-75cfd02ab2cf",
                        "isNew": true,
                        "itemCost": 48000,
                        "colorName": "black"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 2,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "agreed": "Согласован",
                        "id": "86026c73-1bcf-43ea-b36d-ecc10249c068",
                        "isNew": false,
                        "itemCost": 24000,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "cost": 72000,
                "orderNumber": "vitrinabrands_1000028"
            },
            {
                "orderNumber": "100009",
                "good": [
                    {
                        "name": "Diesel T-Diego-Logo large logo t-shirt in white",
                        "quantity": 1,
                        "photo": "https://images.asos-media.com/products/diesel-t-diego-logo-large-logo-t-shirt-in-white/20842396-1-white?$n_640w$&wid=513&fit=constrain",
                        "description": "T-shirt by Diesel\n\n- Aesthetic: on point \n- Crew neck\n- Short sleeves\n- Logo print to chest\n- Regular fit\n- True to size",
                        "price": 5400,
                        "brandName": "Diesel",
                        "agreed": "Не согласован",
                        "id": "f5e1cdbe-9616-4cfd-b923-e14e1455fa4c",
                        "isNew": true,
                        "colorName": "Белый"
                    },
                    {
                        "name": "Calvin Klein Jeans institutional graphic logo sweatshirt in black",
                        "quantity": 1,
                        "photo": "https://images.asos-media.com/products/calvin-klein-jeans-institutional-graphic-logo-sweatshirt-in-black/23901155-1-black?$n_960w$&wid=952&fit=constrain",
                        "description": "Sweatshirt by Calvin Klein Jeans\n\n- Part of our responsible edit\n- Crew neck\n- Branded print details\n- Ribbed trims\n- Relaxed fit",
                        "price": 4500,
                        "brandName": "Calvin Klein",
                        "agreed": "Согласован",
                        "id": "f8d39fce-f29c-4c32-9281-740ce87b321c",
                        "isNew": true,
                        "colorName": "Черный"
                    }
                ],
                "orderStatus": {
                    "id": "newOrder",
                    "status": "Новый"
                },
                "cost": 96,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                }
            },
            {
                "orderNumber": "vitrinabrands_1000002",
                "paymentStatus": "6",
                "good": [
                    {
                        "name": "Calvin Klein Jeans institutional graphic logo sweatshirt in black",
                        "quantity": 1,
                        "photo": "https://images.asos-media.com/products/calvin-klein-jeans-institutional-graphic-logo-sweatshirt-in-black/23901155-1-black?$n_960w$&wid=952&fit=constrain",
                        "description": "Sweatshirt by Calvin Klein Jeans\n\n- Part of our responsible edit\n- Crew neck\n- Branded print details\n- Ribbed trims\n- Relaxed fit",
                        "price": 4500,
                        "brandName": "Calvin Klein",
                        "agreed": "Согласован",
                        "id": "f8d39fce-f29c-4c32-9281-740ce87b321c",
                        "isNew": true,
                        "colorName": "Черный"
                    },
                    {
                        "name": "Diesel T-Diego-Logo large logo t-shirt in white",
                        "quantity": 1,
                        "photo": "https://images.asos-media.com/products/diesel-t-diego-logo-large-logo-t-shirt-in-white/20842396-1-white?$n_640w$&wid=513&fit=constrain",
                        "description": "T-shirt by Diesel\n\n- Aesthetic: on point \n- Crew neck\n- Short sleeves\n- Logo print to chest\n- Regular fit\n- True to size",
                        "price": 5400,
                        "brandName": "Diesel",
                        "agreed": "Не согласован",
                        "id": "f5e1cdbe-9616-4cfd-b923-e14e1455fa4c",
                        "isNew": true,
                        "colorName": "Белый"
                    }
                ],
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "bankOrderID": "66276758-311b-7cb6-8fd9-6c950427f718"
            },
            {
                "good": [],
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "cost": 100,
                "orderNumber": "vitrinabrands_1000003"
            },
            {
                "orderNumber": "vitrinabrands_1000005",
                "paymentStatus": "6",
                "good": [
                    {
                        "name": "Diesel T-Diego-Logo large logo t-shirt in white",
                        "quantity": 2,
                        "photo": "https://images.asos-media.com/products/diesel-t-diego-logo-large-logo-t-shirt-in-white/20842396-1-white?$n_640w$&wid=513&fit=constrain",
                        "description": "T-shirt by Diesel\n\n- Aesthetic: on point \n- Crew neck\n- Short sleeves\n- Logo print to chest\n- Regular fit\n- True to size",
                        "price": 5400,
                        "brandName": "Diesel",
                        "id": "f148e032-51eb-415f-abec-09aa33427f3e",
                        "isNew": true,
                        "colorName": "Белый"
                    },
                    {
                        "name": "Calvin Klein Jeans institutional graphic logo sweatshirt in black",
                        "quantity": 2,
                        "photo": "https://images.asos-media.com/products/calvin-klein-jeans-institutional-graphic-logo-sweatshirt-in-black/23901155-1-black?$n_960w$&wid=952&fit=constrain",
                        "description": "Sweatshirt by Calvin Klein Jeans\n\n- Part of our responsible edit\n- Crew neck\n- Branded print details\n- Ribbed trims\n- Relaxed fit",
                        "price": 4500,
                        "brandName": "Calvin Klein",
                        "id": "9915a0dd-5503-438f-9a4d-5fe7a3f832ee",
                        "isNew": true,
                        "colorName": "Черный"
                    }
                ],
                "cost": 100,
                "customer": {
                    "lastName": "Иванов",
                    "firstName": "Иван",
                    "phone": "+79111234567",
                    "email": "mxf@mail.ru"
                },
                "bankOrderID": "9b654133-591e-7bab-aa04-4e1d0427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000006",
                "good": [],
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "bankOrderID": "a7711462-bdf4-7d94-9ca0-b1de0427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000007",
                "paymentStatus": "0",
                "good": [
                    {
                        "name": "Diesel T-Diego-Logo large logo t-shirt in white",
                        "quantity": 1,
                        "description": "T-shirt by Diesel\n\n- Aesthetic: on point \n- Crew neck\n- Short sleeves\n- Logo print to chest\n- Regular fit\n- True to size",
                        "price": 5400,
                        "brandName": "e3e7dad9-b2a1-4448-8c41-61f1d4fa7a4f",
                        "id": "5204afe5-46b1-4ba1-ac1e-74acf0810b30",
                        "isNew": true,
                        "colorName": "white"
                    },
                    {
                        "name": "Diesel T-Diego-Logo large logo t-shirt in white",
                        "quantity": 1,
                        "description": "T-shirt by Diesel\n\n- Aesthetic: on point \n- Crew neck\n- Short sleeves\n- Logo print to chest\n- Regular fit\n- True to size",
                        "price": 5400,
                        "brandName": "e3e7dad9-b2a1-4448-8c41-61f1d4fa7a4f",
                        "id": "5731df78-55da-4c06-9226-87acf470ceb9",
                        "isNew": true,
                        "colorName": "white"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 1,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "e3e7dad9-b2a1-4448-8c41-61f1d4fa7a4f",
                        "id": "4a1a91fb-88d1-479f-85e2-9abe0d9255c1",
                        "isNew": false,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "bankOrderID": "f96be82c-7a5e-760a-b7fc-b3500427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000008",
                "paymentStatus": "0",
                "good": [],
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "bankOrderID": "fcd3df5e-f0e1-79bc-8ea9-f2bf0427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000009",
                "paymentStatus": "0",
                "good": [
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 1,
                        "oldPrice": 10000,
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "e3e7dad9-b2a1-4448-8c41-61f1d4fa7a4f",
                        "id": "1ef7c189-29f5-4009-8199-e668688e48a5",
                        "isNew": false,
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "bankOrderID": "b69c11aa-b4f2-7834-b18f-bf420427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000010",
                "paymentStatus": "0",
                "good": [],
                "cost": 100,
                "customer": {
                    "firstName": "1",
                    "email": "test1@test.ru"
                },
                "bankOrderID": "989c133c-57b5-7668-a48a-81f40427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000011",
                "paymentStatus": "0",
                "good": [
                    {
                        "quantity": 1,
                        "id": "6f88351a-39b5-4d01-a60a-100a5a7ce338"
                    },
                    {
                        "quantity": 1,
                        "id": "1c78a45e-01b0-4539-9203-5ab40740240b"
                    }
                ],
                "cost": 100,
                "bankOrderID": "098df43f-a69e-7662-8294-de9a0427f718"
            },
            {
                "orderNumber": "vitrinabrands_1000012",
                "paymentStatus": "0",
                "good": [
                    {
                        "quantity": 1,
                        "id": "45c4cb82-8a3f-43f1-9fa1-1f9c384383d9"
                    },
                    {
                        "quantity": 1,
                        "id": "c23f2287-9834-41e7-80c5-325b8e02e3a3"
                    }
                ],
                "cost": 100,
                "bankOrderID": "adb69a46-3353-7101-a589-9dda0427f718"
            },
            {
                "good": [
                    {
                        "quantity": 1,
                        "id": "bb56760c-e99e-45b8-a37e-875271585298"
                    },
                    {
                        "quantity": 1,
                        "id": "894139dd-fc74-4519-b55a-0cbc93b0abe9"
                    }
                ],
                "orderNumber": "vitrinabrands_1000013"
            }
        ],
        "totalPages": 2,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "bankOrderID",
                1402300
            ],
            [
                "cost",
                1402300
            ],
            [
                "customer.adress",
                1396851
            ],
            [
                "customer.email",
                1396851
            ],
            [
                "customer.firstName",
                1396851
            ],
            [
                "customer.lastName",
                1396851
            ],
            [
                "customer.phone",
                1396851
            ],
            [
                "good.agreed",
                1402255
            ],
            [
                "good.brandName",
                1402255
            ],
            [
                "good.colorName",
                1402255
            ],
            [
                "good.description",
                1402255
            ],
            [
                "good.isNew",
                1402255
            ],
            [
                "good.isSale",
                1402255
            ],
            [
                "good.itemCost",
                1402255
            ],
            [
                "good.name",
                1402255
            ],
            [
                "good.oldPrice",
                1402255
            ],
            [
                "good.photo",
                1402255
            ],
            [
                "good.price",
                1402255
            ],
            [
                "good.quantity",
                1402255
            ],
            [
                "orderNumber",
                1402300
            ],
            [
                "orderStatus.id",
                99023983
            ],
            [
                "orderStatus.status",
                99023983
            ],
            [
                "paymentStatus",
                1402300
            ]
        ],
        "writeFields": [],
        "structures": {
            "1396851": {
                "networkID": 7332,
                "sysName": "WebUser",
                "name": "App users",
                "id": 1396851,
                "dateCreated": "2021-06-18T12:42:59Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"userpic\",\"name\":\"userpic\",\"dataType\":\"link\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"phone\",\"name\":\"Телефон\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"id\",\"name\":\"Логин (e-mail)\",\"dataType\":\"id\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"bik\",\"name\":\"БИК\",\"dataType\":\"string\",\"id\":\"23521625927939680\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"Favorites\",\"name\":\"Избранные\",\"dataType\":\"arrayLink\",\"id\":\"28321627692145465\",\"link\":\"goods\",\"group\":\"1625430271500\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"gender\",\"name\":\"Пол\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"ogrn\",\"name\":\"ОГРН\",\"dataType\":\"string\",\"id\":\"32001625927766678\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"country\",\"name\":\"Страна\",\"dataType\":\"string\",\"id\":\"33321628701430394\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"whoAdd\",\"name\":\"Who add\",\"dataType\":\"link\",\"id\":\"35501625913518138\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false},{\"sysName\":\"kindOfActivity\",\"name\":\"Основной вид деятельности\",\"dataType\":\"string\",\"id\":\"37161625927949139\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"paymentAccount\",\"name\":\"Р/с\",\"dataType\":\"string\",\"id\":\"38741625927806465\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"city\",\"name\":\"Город\",\"dataType\":\"string\",\"id\":\"39491628701450498\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"lastName\",\"name\":\"Фамилия\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"cart\",\"name\":\"Корзина\",\"dataType\":\"arrayLink\",\"id\":\"44311627692203902\",\"link\":\"itemsInCart\",\"group\":\"1625430271500\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"firstName\",\"name\":\"Имя\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"entity\",\"name\":\"Юр.лицо\",\"dataType\":\"string\",\"id\":\"50681625927701368\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"commentAdress\",\"name\":\"Комментарий\",\"dataType\":\"string\",\"id\":\"52021628701504080\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"index\",\"name\":\"Индекс\",\"dataType\":\"string\",\"id\":\"55461628701457851\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"adress\",\"name\":\"Адрес\",\"dataType\":\"string\",\"id\":\"58321625927789978\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"goods\",\"name\":\"Товары\",\"dataType\":\"arrayLink\",\"id\":\"59641628237696484\",\"link\":\"goods\",\"group\":\"-1776115286\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"role\",\"name\":\"Статус (РОЛИ)\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"house\",\"name\":\"Дом\",\"dataType\":\"string\",\"id\":\"60171628701483573\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"bank\",\"name\":\"Банк\",\"dataType\":\"string\",\"id\":\"62951625927910972\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"apart\",\"name\":\"Квартира\",\"dataType\":\"string\",\"id\":\"64671628701490630\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"thirdName\",\"name\":\"Отчество\",\"dataType\":\"string\",\"id\":\"79761628701234488\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"brand_ids\",\"name\":\" Бренды\",\"dataType\":\"arrayLink\",\"id\":\"85401628591982213\",\"link\":\"Brands\",\"group\":\"1628591974821\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true},{\"sysName\":\"correspondentAccount\",\"name\":\"К/с\",\"dataType\":\"string\",\"id\":\"88821625927871201\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false},{\"sysName\":\"street\",\"name\":\"Улица\",\"dataType\":\"string\",\"id\":\"99241628701478061\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false}]",
                "jsonGroupSettings": "[{\"name\":\"System fields\",\"id\":-1776115286,\"order\":1},{\"name\":\"Entity fields\",\"id\":1625430301390,\"order\":4},{\"name\":\"Brand\",\"id\":1628591974821,\"order\":3},{\"name\":\"Customer fiedls\",\"id\":1625430271500,\"order\":2},{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"},{\"sysName\":\"email\"},{\"sysName\":\"phone\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-05T18:54:48Z",
                "createBy": 0,
                "changedBy": 4232,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "Логин (e-mail)",
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "array": false
                },
                "folderId": null
            },
            "1402255": {
                "networkID": 7332,
                "sysName": "itemsInCart",
                "name": "Товары в корзине",
                "id": 1402255,
                "dateCreated": "2021-07-04T19:04:24Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"11371630843747160\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"goodsDescription_id\",\"name\":\"Модель товара\",\"dataType\":\"link\",\"id\":\"20761630835730713\",\"link\":\"goods\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"brand.owner_id.id\",\"brand.id\",\"brand\",\"brand.owner_id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"deliveryNumber\",\"name\":\"Номер доставки\",\"dataType\":\"string\",\"id\":\"26941632140768432\",\"link\":null,\"group\":\"1632140758049\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"orderStatus\",\"name\":\"Статус заказа\",\"dataType\":\"link\",\"id\":\"30371632988728881\",\"link\":\"orderStatuses\",\"group\":\"1630859367483\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"isSale\",\"name\":\"Скидка\",\"dataType\":\"boolean\",\"id\":\"31131630843864948\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"itemCost\",\"name\":\"Стоимость\",\"dataType\":\"number\",\"id\":\"35261627890193579\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"link\",\"id\":\"38811630452697484\",\"link\":\"orderStatuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"42151630843779057\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"agreedAction\",\"name\":\"Выбери согласование\",\"dataType\":\"boolean\",\"id\":\"44901630869302044\",\"link\":\"\",\"group\":\"1630859367483\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Согласован\",\"Не согласован\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"45251630843760961\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"oldPrice\",\"name\":\"Старая цена ₽\",\"dataType\":\"number\",\"id\":\"46501630843904447\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"quantity\",\"name\":\"Количество\",\"dataType\":\"number\",\"id\":\"61771625428487124\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"order\",\"name\":\"Заказ\",\"dataType\":\"link\",\"id\":\"66671630859384324\",\"link\":\"orders\",\"group\":\"1630859367483\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"colorName\",\"name\":\"Цвет\",\"dataType\":\"string\",\"id\":\"67821630843685022\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"brandID\",\"name\":\"Бренд\",\"dataType\":\"link\",\"id\":\"70171631851976052\",\"link\":\"Brands\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"good\",\"name\":\"Товар\",\"dataType\":\"link\",\"id\":\"75511625428234499\",\"link\":\"goodSpecification\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"customer\",\"name\":\"Покупатель\",\"dataType\":\"link\",\"id\":\"81641627890324484\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"agreed\",\"name\":\"Согласован\",\"dataType\":\"string\",\"id\":\"82191630854462175\",\"link\":null,\"group\":\"1630843672402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"brandName\",\"name\":\"Бренд\",\"dataType\":\"string\",\"id\":\"84781630844173461\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"isNew\",\"name\":\"Новый\",\"dataType\":\"boolean\",\"id\":\"91591630843853021\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"price\",\"name\":\"Цена ₽\",\"dataType\":\"number\",\"id\":\"95431630843711798\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1630843672402,\"name\":\"Good Description\",\"order\":0},{\"id\":1630859367483,\"name\":\"Order\",\"order\":1},{\"id\":1632140758049,\"name\":\"Delivery\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"agreed\"},{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-30T11:46:57Z",
                "createBy": 4400,
                "changedBy": 4232,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "array": false
                },
                "folderId": 33635178
            },
            "1402300": {
                "networkID": 7332,
                "sysName": "orders",
                "name": "Заказы",
                "id": 1402300,
                "dateCreated": "2021-07-04T19:59:25Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"good\",\"name\":\"Позиции в заказе\",\"dataType\":\"arrayLink\",\"id\":\"82021625428782418\",\"link\":\"itemsInCart\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"brandID.id\",\"good.good.id\",\"id\",\"good.good\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"array\":false},{\"sysName\":\"cost\",\"name\":\"Стоимость закза\",\"dataType\":\"number\",\"id\":\"97951627940223097\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"customer\",\"name\":\"Покупатель\",\"dataType\":\"link\",\"id\":\"55421627940261791\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"orderNumber\",\"name\":\"Номер заказа\",\"dataType\":\"string\",\"id\":\"24861630368180012\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"orderStatus\",\"name\":\"Статус заказа\",\"dataType\":\"link\",\"id\":\"95151630619162902\",\"link\":\"orderStatuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"approveStatus\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"22221632170388065\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"approveStatusText\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"53051632170412476\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"itemsNumber\",\"name\":\"Количество позиций\",\"dataType\":\"number\",\"id\":\"21231632171784740\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"returnURL\",\"name\":\"returnURL\",\"dataType\":\"string\",\"id\":\"71171630456433244\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"registrationResponse\",\"name\":\"Registration response\",\"dataType\":\"json\",\"id\":\"17441630453259760\",\"link\":\"\",\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"array\":false},{\"sysName\":\"errorCode\",\"name\":\"Error code\",\"dataType\":\"string\",\"id\":\"45421630453284300\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"errorMessage\",\"name\":\"Error message\",\"dataType\":\"string\",\"id\":\"90191630453292316\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"bankOrderID\",\"name\":\"bankOrderID\",\"dataType\":\"string\",\"id\":\"15641630458179728\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"paymentURL\",\"name\":\"paymentURL\",\"dataType\":\"string\",\"id\":\"31521630458197492\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"checkStatusResponse\",\"name\":\"checkStatusResponse\",\"dataType\":\"json\",\"id\":\"19581630678684081\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"array\":false},{\"sysName\":\"paymentStatus\",\"name\":\"paymentStatus\",\"dataType\":\"string\",\"id\":\"36481630678719313\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"CheckStatusErrorCode\",\"name\":\"errorCode\",\"dataType\":\"string\",\"id\":\"96501630678736702\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"CheckStatusErrorMessage\",\"name\":\"errorMessage\",\"dataType\":\"string\",\"id\":\"14001630678743346\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"approvedCost\",\"name\":\"Стоимость подтвер.\",\"dataType\":\"number\",\"id\":\"69031632174627431\",\"link\":\"\",\"group\":\"1632203677843\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"approvedNumber\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"94221632203697814\",\"link\":\"\",\"group\":\"1632203677843\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"notApprovedNumber\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"70891632203715872\",\"link\":\"\",\"group\":\"1632203677843\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"finishPaymentResponse\",\"name\":\"finishPaymentResponse\",\"dataType\":\"json\",\"id\":\"86821632205362496\",\"link\":\"\",\"group\":\"1632205348515\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"array\":false},{\"sysName\":\"finishPaymentErrorCode\",\"name\":\"finishPaymentErrorCode\",\"dataType\":\"string\",\"id\":\"10671632205391719\",\"link\":\"\",\"group\":\"1632205348515\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false},{\"sysName\":\"finishPaymentErrorMessage\",\"name\":\"finishPaymentErrorMessage\",\"dataType\":\"string\",\"id\":\"91351632205399307\",\"link\":\"\",\"group\":\"1632205348515\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Approve\",\"id\":1632203677843,\"order\":0},{\"name\":\"Bank registration\",\"id\":1630368229089,\"order\":1},{\"name\":\"Bank check status\",\"id\":1630678669874,\"order\":2},{\"name\":\"Finish payment\",\"id\":1632205348515,\"order\":3}]",
                "jsonViewIdSettings": "[{\"sysName\":\"orderNumber\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-30T07:46:09Z",
                "createBy": 4400,
                "changedBy": 4232,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "array": false
                },
                "folderId": 33635178
            },
            "99023983": {
                "networkID": 7332,
                "sysName": "orderStatuses",
                "name": "Order Statuses",
                "id": 99023983,
                "dateCreated": "2021-09-17T05:37:28Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"string\",\"id\":\"89961631857075918\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-17T05:38:12Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "array": false
                },
                "folderId": 33632409
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
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
                <ContentWrapper whiteLabel={true} themeName={currentTheme}>
                    <Switch>
                        <Route exact path="/table">
                            <TabsPane tabs={exampleTabs} hideSingleTab currentTabKey={1} fixedScroll={false} />
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