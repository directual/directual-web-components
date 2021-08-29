import React, { useEffect, useState } from 'react'
import {
    FpsCards, FpsForm, MainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet,
    Dnd, Profile
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
        "sl": "getAllBrands",
        "pageSize": "22",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "owner_id",
            "deleteField": "",
            "cardBodyText": null,
            "cardImage": true,
            "cardImageField": "logo",
            "cardImageType": "leftCircle",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "brandName",
                        "fetch": [],
                        "sysName": "brandName",
                        "name": "Название бренда",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "Город",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "delivery",
                        "fetch": [],
                        "sysName": "delivery",
                        "name": "Опции доставки",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
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
                        "fieldSysName": "logo",
                        "fetch": [],
                        "sysName": "logo",
                        "name": "Логотип",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "moderation_status",
                        "fetch": [],
                        "sysName": "moderation_status",
                        "name": "Статус модерации",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "owner_id",
                        "fetch": [
                            {
                                "fieldSysName": "firstName",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "id",
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
                        ],
                        "sysName": "owner_id",
                        "name": "Владелец",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "salesCity",
                        "fetch": [],
                        "sysName": "salesCity",
                        "name": "Города продаж",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "shopRules",
                        "fetch": [],
                        "sysName": "shopRules",
                        "name": "Правила магазина",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "year",
                        "fetch": [],
                        "sysName": "year",
                        "name": "Год создания",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "brandName",
                        "fetch": [],
                        "sysName": "brandName",
                        "name": "Название бренда",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "city",
                        "fetch": [],
                        "sysName": "city",
                        "name": "Город",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "delivery",
                        "fetch": [],
                        "sysName": "delivery",
                        "name": "Опции доставки",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
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
                        "fieldSysName": "logo",
                        "fetch": [],
                        "sysName": "logo",
                        "name": "Логотип",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "moderation_status",
                        "fetch": [],
                        "sysName": "moderation_status",
                        "name": "Статус модерации",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "owner_id",
                        "fetch": [],
                        "sysName": "owner_id",
                        "name": "Владелец",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "salesCity",
                        "fetch": [],
                        "sysName": "salesCity",
                        "name": "Города продаж",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "shopRules",
                        "fetch": [],
                        "sysName": "shopRules",
                        "name": "Правила магазина",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "year",
                        "fetch": [],
                        "sysName": "year",
                        "name": "Год создания",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "brandName": {
                        "id": "brandName",
                        "content": "Название бренда",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "city": {
                        "id": "city",
                        "content": "Город",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "delivery": {
                        "id": "delivery",
                        "content": "Опции доставки",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "description": {
                        "id": "description",
                        "content": "Описание",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
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
                    "logo": {
                        "id": "logo",
                        "content": "Логотип",
                        "type": "field",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "moderation_status": {
                        "id": "moderation_status",
                        "content": "Статус модерации",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "owner_id": {
                        "id": "owner_id",
                        "content": "Владелец",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "salesCity": {
                        "id": "salesCity",
                        "content": "Города продаж",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "shopRules": {
                        "id": "shopRules",
                        "content": "Правила магазина",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "year": {
                        "id": "year",
                        "content": "Год создания",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
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
                    "action__45611628686973693": {
                        "id": "action__45611628686973693",
                        "content": "Send to moderation",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "brandName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "city": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "delivery": {
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
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "logo": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileImage": true
                    },
                    "moderation_status": {
                        "include": false,
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
                                },
                                "userpic": {
                                    "id": "userpic",
                                    "content": "userpic",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "id": {
                                    "id": "id",
                                    "content": "Логин (e-mail)",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "id",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "firstName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "lastName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "userpic": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "firstName",
                                "lastName",
                                "userpic",
                                "id"
                            ]
                        },
                        "subHeader": "Brand owner: "
                    },
                    "salesCity": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "shopRules": {
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
                    "brand": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {},
                            "fieldParams": {
                                "brandName": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                null
                            ]
                        }
                    },
                    "category": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "goodSpecification": {
                        "include": true,
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
                    "price": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryBeauty": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryInterior": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryKids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryMen": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "subcategoryWomen": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
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
                    "color": {
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
                    "isHidden": {
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
                            "logo",
                            "owner_id",
                            "brandName",
                            "year",
                            "description",
                            "id",
                            "city",
                            "salesCity",
                            "delivery",
                            "moderation_status",
                            "shopRules",
                            "action__45611628686973693",
                            "isHidden"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "",
                        "id": "37251628672828576",
                        "name": "Delete brand",
                        "displayAs": "button",
                        "buttonIcon": "delete",
                        "buttonType": "danger",
                        "dropdown": true,
                        "closePopup": true,
                        "formMapping": [
                            {
                                "id": "55021628672841836",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            },
                            {
                                "id": "58711628672845111",
                                "target": "isHidden",
                                "type": "const",
                                "value": "true"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "brandName": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "city": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "delivery": {
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
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "logo": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileImage": true
                },
                "moderation_status": {
                    "include": false,
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
                            },
                            "userpic": {
                                "id": "userpic",
                                "content": "userpic",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "id": {
                                "id": "id",
                                "content": "Логин (e-mail)",
                                "type": "field",
                                "read": true,
                                "dataType": "id",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "firstName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "lastName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "userpic": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "firstName",
                            "lastName",
                            "userpic",
                            "id"
                        ]
                    },
                    "subHeader": "Brand owner: "
                },
                "salesCity": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "shopRules": {
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
                "brand": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {},
                        "fieldParams": {
                            "brandName": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            null
                        ]
                    }
                },
                "category": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "goodSpecification": {
                    "include": true,
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
                "price": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryBeauty": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryInterior": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryKids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryMen": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "subcategoryWomen": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
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
                "color": {
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
                "isHidden": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "45611628686973693",
                    "name": "Send to moderation",
                    "displayAs": "button",
                    "buttonIcon": "clocks",
                    "dropdown": true,
                    "closePopup": true,
                    "formMapping": [
                        {
                            "id": "51231628687001525",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "45991628687010759",
                            "target": "moderation_status",
                            "type": "const",
                            "value": "new"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "14911628956141803",
                            "target": "id_not_in",
                            "value": "city",
                            "type": "objectField"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "Все активные бренды",
        "actions": null,
        "headers": [
            {
                "sysName": "brandName",
                "name": "Название бренда",
                "dataType": "string",
                "id": "34541628592680613",
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
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "city",
                "name": "Город",
                "dataType": "string",
                "id": "80531628592689780",
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
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "delivery",
                "name": "Опции доставки",
                "dataType": "string",
                "id": "37351628592700811",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "description",
                "name": "Описание",
                "dataType": "string",
                "id": "47341628592699578",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
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
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "logo",
                "name": "Логотип",
                "dataType": "file",
                "id": "72191628592688721",
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
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "moderation_status",
                "name": "Статус модерации",
                "dataType": "string",
                "id": "74811628610372656",
                "link": null,
                "group": "1628610366405",
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
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "owner_id",
                "name": "Владелец",
                "dataType": "link",
                "id": "36491628592826659",
                "link": "WebUser",
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
                "linkType": true,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false
            },
            {
                "sysName": "salesCity",
                "name": "Города продаж",
                "dataType": "string",
                "id": "21471628592699059",
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
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "shopRules",
                "name": "Правила магазина",
                "dataType": "string",
                "id": "17571628592771666",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "year",
                "name": "Год создания",
                "dataType": "number",
                "id": "17061628592689240",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            }
        ],
        "data": [
            {
                "city": "text,pavel@directual.com,hello there!,lol",
                "description": "Хороший бренд",
                "owner_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "year": 1900,
                "brandName": "Diesel",
                "logo": "data:image/jpeg;base64,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",
                "id": "103a004e-fd74-4340-b108-68db2d4a918c",
                "moderation_status": "active",
                "salesCity": "Весь мир",
                "delivery": "",
                "isHidden": "",
                "shopRules": ""
            },
            {
                "city": "New York",
                "description": "—",
                "owner_id": {
                    "lastName": "Ershov",
                    "firstName": "Pavel",
                    "id": "pavel@directual.com"
                },
                "year": 1900,
                "brandName": "Calvin Klein",
                "logo": "https://logowik.com/content/uploads/images/969_calvinklein.jpg",
                "id": "6e7e43e4-5ffe-4201-8252-57bb2b4a96a1",
                "moderation_status": "active",
                "delivery": "",
                "isHidden": "",
                "salesCity": "",
                "shopRules": ""
            },
            {
                "city": "Екатеринбург ",
                "description": "Женское минималистичное белье и спортивная одежда",
                "owner_id": {
                    "id": "admin"
                },
                "year": 2014,
                "brandName": "Belle YOU",
                "logo": "https://www.instagram.com/belleyou.ru/",
                "id": "ab53bc7b-d932-4e57-a345-ba382dbdb629",
                "moderation_status": "active",
                "salesCity": "Москва, Санкт-Петербург, Екатеринбург ",
                "delivery": "Только Сдэк",
                "shopRules": "Возврат возможен",
                "isHidden": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "brandName",
                1426040
            ],
            [
                "city",
                1426040
            ],
            [
                "delivery",
                1426040
            ],
            [
                "description",
                1426040
            ],
            [
                "id",
                1426040
            ],
            [
                "logo",
                1426040
            ],
            [
                "moderation_status",
                1426040
            ],
            [
                "owner_id.firstName",
                1396851
            ],
            [
                "owner_id.id",
                1396851
            ],
            [
                "owner_id.lastName",
                1396851
            ],
            [
                "owner_id.userpic",
                1396851
            ],
            [
                "salesCity",
                1426040
            ],
            [
                "shopRules",
                1426040
            ],
            [
                "year",
                1426040
            ]
        ],
        "writeFields": [
            "brandName",
            "city",
            "delivery",
            "description",
            "id",
            "isHidden",
            "logo",
            "moderation_status",
            "owner_id",
            "salesCity",
            "shopRules",
            "year"
        ],
        "structures": {
            "1396851": {
                "networkID": 7332,
                "id": 1396851,
                "dateCreated": "2021-06-18T12:42:59Z",
                "hidden": false,
                "dateHidden": null,
                "name": "App users",
                "sysName": "WebUser",
                "jsonObject": "[{\"sysName\":\"userpic\",\"dataType\":\"link\",\"name\":\"userpic\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"string\",\"name\":\"dateCreated\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"password\",\"dataType\":\"string\",\"name\":\"Password (hash)\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"Логин (e-mail)\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isBlocked\",\"dataType\":\"boolean\",\"name\":\"Block user\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"bik\",\"dataType\":\"string\",\"name\":\"БИК\",\"id\":\"23521625927939680\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"Favorites\",\"dataType\":\"arrayLink\",\"name\":\"Избранные\",\"id\":\"28321627692145465\",\"link\":\"goods\",\"group\":\"1625430271500\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"ogrn\",\"dataType\":\"string\",\"name\":\"ОГРН\",\"id\":\"32001625927766678\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"country\",\"dataType\":\"string\",\"name\":\"Страна\",\"id\":\"33321628701430394\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"whoAdd\",\"dataType\":\"link\",\"name\":\"Who add\",\"id\":\"35501625913518138\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"kindOfActivity\",\"dataType\":\"string\",\"name\":\"Основной вид деятельности\",\"id\":\"37161625927949139\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"paymentAccount\",\"dataType\":\"string\",\"name\":\"Р/с\",\"id\":\"38741625927806465\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"39491628701450498\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"cart\",\"dataType\":\"arrayLink\",\"name\":\"Корзина\",\"id\":\"44311627692203902\",\"link\":\"itemsInCart\",\"group\":\"1625430271500\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"entity\",\"dataType\":\"string\",\"name\":\"Юр.лицо\",\"id\":\"50681625927701368\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"commentAdress\",\"dataType\":\"string\",\"name\":\"Комментарий\",\"id\":\"52021628701504080\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"index\",\"dataType\":\"string\",\"name\":\"Индекс\",\"id\":\"55461628701457851\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"adress\",\"dataType\":\"string\",\"name\":\"Адрес\",\"id\":\"58321625927789978\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"goods\",\"dataType\":\"arrayLink\",\"name\":\"Товары\",\"id\":\"59641628237696484\",\"link\":\"goods\",\"group\":\"-1776115286\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"role\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"house\",\"dataType\":\"string\",\"name\":\"Дом\",\"id\":\"60171628701483573\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"bank\",\"dataType\":\"string\",\"name\":\"Банк\",\"id\":\"62951625927910972\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"apart\",\"dataType\":\"string\",\"name\":\"Квартира\",\"id\":\"64671628701490630\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isAuthorization\",\"dataType\":\"boolean\",\"name\":\"isAuthorization\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"thirdName\",\"dataType\":\"string\",\"name\":\"Отчество\",\"id\":\"79761628701234488\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"dateLastActivity\",\"dataType\":\"string\",\"name\":\"dateLastActivity\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"brand_ids\",\"dataType\":\"arrayLink\",\"name\":\" Бренды\",\"id\":\"85401628591982213\",\"link\":\"Brands\",\"group\":\"1628591974821\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"correspondentAccount\",\"dataType\":\"string\",\"name\":\"К/с\",\"id\":\"88821625927871201\",\"link\":null,\"group\":\"1625430301390\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"email\",\"dataType\":\"string\",\"name\":\"Email\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"Contacts\",\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"street\",\"dataType\":\"string\",\"name\":\"Улица\",\"id\":\"99241628701478061\",\"link\":\"\",\"group\":\"1625430271500\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"name\":\"System fields\",\"id\":-1776115286,\"order\":1},{\"name\":\"Entity fields\",\"id\":1625430301390,\"order\":4},{\"name\":\"Brand\",\"id\":1628591974821,\"order\":3},{\"name\":\"Customer fiedls\",\"id\":1625430271500,\"order\":2},{\"name\":\"Contacts\",\"id\":-502807437,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T17:06:27Z",
                "createBy": 0,
                "changedBy": 4400,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "Логин (e-mail)",
                    "dataType": "id",
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
                    "linkType": false,
                    "json": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "linkOrArrayLinkType": false,
                    "arrayLink": false
                },
                "folderId": null
            },
            "1426040": {
                "networkID": 7332,
                "id": 1426040,
                "dateCreated": "2021-08-10T10:38:26Z",
                "hidden": false,
                "dateHidden": null,
                "name": "Brands",
                "sysName": "Brands",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"moderation_status_message\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"16321628685693721\",\"link\":null,\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"year\",\"dataType\":\"number\",\"name\":\"Год создания\",\"id\":\"17061628592689240\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"shopRules\",\"dataType\":\"string\",\"name\":\"Правила магазина\",\"id\":\"17571628592771666\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"salesCity\",\"dataType\":\"string\",\"name\":\"Города продаж\",\"id\":\"21471628592699059\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"pending_goods_ids\",\"dataType\":\"arrayLink\",\"name\":\"Товары, ожидающие модерации\",\"id\":\"22601628703842456\",\"link\":\"goods\",\"group\":\"1628684864978\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"good_ids\",\"dataType\":\"arrayLink\",\"name\":\"Товары (модели)\",\"id\":\"26571628684869720\",\"link\":\"goods\",\"group\":\"1628684864978\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"brandName\",\"dataType\":\"string\",\"name\":\"Название бренда\",\"id\":\"34541628592680613\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"owner_id\",\"dataType\":\"link\",\"name\":\"Владелец\",\"id\":\"36491628592826659\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"delivery\",\"dataType\":\"string\",\"name\":\"Опции доставки\",\"id\":\"37351628592700811\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"47341628592699578\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"moderation_colour\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"63801628703966398\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"logo\",\"dataType\":\"file\",\"name\":\"Логотип\",\"id\":\"72191628592688721\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"moderation_status\",\"dataType\":\"string\",\"name\":\"Статус модерации\",\"id\":\"74811628610372656\",\"link\":null,\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"80531628592689780\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"isHidden\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"88081628672775037\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"typeVariable\":{},\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Tech fields\",\"id\":1628610366405,\"order\":0},{\"name\":\"Goods\",\"id\":1628684864978,\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"brandName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-08-11T17:46:16Z",
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
                    "linkType": false,
                    "json": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "linkOrArrayLinkType": false,
                    "arrayLink": false
                },
                "folderId": 33648500
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "brandName",
                "name": "Название бренда",
                "dataType": "string",
                "id": "34541628592680613",
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
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "city",
                "name": "Город",
                "dataType": "string",
                "id": "80531628592689780",
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
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "delivery",
                "name": "Опции доставки",
                "dataType": "string",
                "id": "37351628592700811",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "description",
                "name": "Описание",
                "dataType": "string",
                "id": "47341628592699578",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
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
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "isHidden",
                "name": "",
                "dataType": "boolean",
                "id": "88081628672775037",
                "link": "",
                "group": "1628610366405",
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
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "logo",
                "name": "Логотип",
                "dataType": "file",
                "id": "72191628592688721",
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
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "moderation_status",
                "name": "Статус модерации",
                "dataType": "string",
                "id": "74811628610372656",
                "link": null,
                "group": "1628610366405",
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
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "owner_id",
                "name": "Владелец",
                "dataType": "link",
                "id": "36491628592826659",
                "link": "WebUser",
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
                "linkType": true,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": true,
                "arrayLink": false
            },
            {
                "sysName": "salesCity",
                "name": "Города продаж",
                "dataType": "string",
                "id": "21471628592699059",
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
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "shopRules",
                "name": "Правила магазина",
                "dataType": "string",
                "id": "17571628592771666",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            },
            {
                "sysName": "year",
                "name": "Год создания",
                "dataType": "number",
                "id": "17061628592689240",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "linkType": false,
                "json": false,
                "indexExists": false,
                "typeVariable": {},
                "linkOrArrayLinkType": false,
                "arrayLink": false
            }
        ],
        "quickSearch": "true"
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
        "sl": "isGreat",
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
                        "fieldSysName": "author",
                        "fetch": [],
                        "sysName": "author",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Authors"
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
                        "fieldSysName": "isGreat",
                        "fetch": [],
                        "sysName": "isGreat",
                        "name": "isGreat",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "author",
                        "fetch": [],
                        "sysName": "author",
                        "name": "",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Authors"
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
                        "fieldSysName": "isGreat",
                        "fetch": [],
                        "sysName": "isGreat",
                        "name": "isGreat",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "author": {
                        "id": "author",
                        "content": "",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "Authors",
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
                    "isGreat": {
                        "id": "isGreat",
                        "content": "isGreat",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "title": {
                        "id": "title",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "author": {
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
                    "isGreat": {
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
                            "author",
                            "id",
                            "isGreat",
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
                "author": {
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
                "isGreat": {
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
                "sysName": "author",
                "name": "",
                "dataType": "link",
                "id": "13781619702243181",
                "link": "Authors",
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
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "json": false,
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
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "arrayLink": false
            },
            {
                "sysName": "isGreat",
                "name": "isGreat",
                "dataType": "boolean",
                "id": "82841623872260049",
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "arrayLink": false
            },
            {
                "sysName": "title",
                "name": "",
                "dataType": "string",
                "id": "76761619702242678",
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "arrayLink": false
            }
        ],
        "data": [
            {
                "author": "ffc054fe-a4ad-476b-9e27-3a5c98b2b10b",
                "title": "War and Peace",
                "id": "8b6be6b0-8183-4f93-a560-b268c20e62d1",
                "isGreat": ""
            },
            {
                "author": "ffc054fe-a4ad-476b-9e27-3a5c98b2b10b",
                "isGreat": true,
                "title": "War and Peace",
                "id": "8b6be6b0-8183-4f93-a560-b268c20e62d"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "author",
                1380644
            ],
            [
                "id",
                1380644
            ],
            [
                "isGreat",
                1380644
            ],
            [
                "title",
                1380644
            ]
        ],
        "writeFields": [
            "author",
            "id",
            "isGreat",
            "title"
        ],
        "structures": {
            "1380644": {
                "networkID": 5420,
                "sysName": "actions",
                "name": "actions",
                "id": 1380644,
                "dateCreated": "2021-04-29T13:17:18Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"arrayLink\":false},{\"sysName\":\"author\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"13781619702243181\",\"link\":\"Authors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"json\":false,\"arrayLink\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"76761619702242678\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"arrayLink\":false},{\"sysName\":\"isGreat\",\"name\":\"isGreat\",\"dataType\":\"boolean\",\"id\":\"82841623872260049\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"json\":false,\"arrayLink\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-06-16T19:37:51Z",
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
                    "formatOptions": {},
                    "groupName": null,
                    "typeVariable": {},
                    "linkType": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "json": false,
                    "arrayLink": false
                },
                "objectIDSysName": "id",
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "author",
                "name": "",
                "dataType": "link",
                "id": "13781619702243181",
                "link": "Authors",
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
                "linkType": true,
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "json": false,
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
                "formatOptions": {},
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "arrayLink": false
            },
            {
                "sysName": "isGreat",
                "name": "isGreat",
                "dataType": "boolean",
                "id": "82841623872260049",
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "arrayLink": false
            },
            {
                "sysName": "title",
                "name": "",
                "dataType": "string",
                "id": "76761619702242678",
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
                "linkType": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "json": false,
                "arrayLink": false
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
        "sl": "robokassa",
        "formName": "",
        "formDesc": "",
        "formButton": "",
        "placeholder": "",
        "maxWidth": "",
        "formButtonResubmit": null,
        "params": {
            "result": {
                "resultTitleField": "EMail",
                "resultMessageField": "paymentUrl",
                "isSuccessField": "result",
                "isLink": true,
                "linkTitle": "Для оплаты перейдите по ссылке"
            },
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "EMail",
                        "fetch": [],
                        "sysName": "EMail",
                        "name": " eMail",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "OutSum",
                        "fetch": [],
                        "sysName": "OutSum",
                        "name": "Сумма",
                        "dataType": "decimal",
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
                        "fieldSysName": "paymentUrl",
                        "fetch": [],
                        "sysName": "paymentUrl",
                        "name": "Ссылка на оплату",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "result",
                        "fetch": [],
                        "sysName": "result",
                        "name": "Результат",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [],
                        "sysName": "user_id",
                        "name": "Плательщик",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "EMail",
                        "fetch": [],
                        "sysName": "EMail",
                        "name": " eMail",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "Fee",
                        "fetch": [],
                        "sysName": "Fee",
                        "name": "Комиссия Robokassa",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "InvId",
                        "fetch": [],
                        "sysName": "InvId",
                        "name": "Номер заказа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "OutSum",
                        "fetch": [],
                        "sysName": "OutSum",
                        "name": "Сумма",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "SignatureValue",
                        "fetch": [],
                        "sysName": "SignatureValue",
                        "name": "Контрольная сумма (hash)",
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
                        "fieldSysName": "paymentUrl",
                        "fetch": [],
                        "sysName": "paymentUrl",
                        "name": "Ссылка на оплату",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "result",
                        "fetch": [],
                        "sysName": "result",
                        "name": "Результат",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "timestamp",
                        "fetch": [],
                        "sysName": "timestamp",
                        "name": "Дата",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "user_id",
                        "fetch": [],
                        "sysName": "user_id",
                        "name": "Плательщик",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "fields": {
                    "EMail": {
                        "id": "EMail",
                        "content": " eMail",
                        "type": "field",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "OutSum": {
                        "id": "OutSum",
                        "content": "Сумма",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
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
                    "paymentUrl": {
                        "id": "paymentUrl",
                        "content": "Ссылка на оплату",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "result": {
                        "id": "result",
                        "content": "Результат",
                        "type": "field",
                        "dataType": "boolean",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "user_id": {
                        "id": "user_id",
                        "content": "Плательщик",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser"
                    },
                    "Fee": {
                        "id": "Fee",
                        "content": "Комиссия Robokassa",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    },
                    "InvId": {
                        "id": "InvId",
                        "content": "Номер заказа",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": null
                    },
                    "SignatureValue": {
                        "id": "SignatureValue",
                        "content": "Контрольная сумма (hash)",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": null
                    },
                    "timestamp": {
                        "id": "timestamp",
                        "content": "Дата",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "EMail": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "OutSum": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "Fee": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "InvId": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "SignatureValue": {
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
                    "timestamp": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paymentUrl": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "result": {
                        "include": false,
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
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "OutSum",
                            "EMail",
                            "Fee",
                            "InvId",
                            "SignatureValue",
                            "id",
                            "timestamp",
                            "paymentUrl",
                            "result",
                            "user_id"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ]
            },
            "fields": {
                "EMail": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "OutSum": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "Fee": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "InvId": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "SignatureValue": {
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
                "timestamp": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paymentUrl": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "result": {
                    "include": false,
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
                }
            }
        },
        "fileds": [
            {
                "sysName": "EMail",
                "name": " eMail",
                "dataType": "string",
                "id": "70261629037272513",
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
                "format": "email",
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "Fee",
                "name": "Комиссия Robokassa",
                "dataType": "decimal",
                "id": "13771629037294186",
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "InvId",
                "name": "Номер заказа",
                "dataType": "string",
                "id": "30061629037193810",
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "OutSum",
                "name": "Сумма",
                "dataType": "decimal",
                "id": "19691629037190700",
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "SignatureValue",
                "name": "Контрольная сумма (hash)",
                "dataType": "string",
                "id": "78111629037313808",
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "paymentUrl",
                "name": "Ссылка на оплату",
                "dataType": "string",
                "id": "94611629043087524",
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
                "format": "webLink",
                "formatOptions": null,
                "groupName": null,
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "result",
                "name": "Результат",
                "dataType": "boolean",
                "id": "27121629043913542",
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
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "timestamp",
                "name": "Дата",
                "dataType": "date",
                "id": "64721629037415659",
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "typeVariable": {}
            },
            {
                "sysName": "user_id",
                "name": "Плательщик",
                "dataType": "link",
                "id": "82261629045997563",
                "link": "WebUser",
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
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "typeVariable": {}
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