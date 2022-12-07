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
        "sl": "getGoods",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "merchant_id",
            "deleteField": "",
            "cardBodyText": "price_displayed",
            "cardImage": true,
            "cardImageField": "image",
            "cardImageType": "cover",
            "cardImageSize": 180,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Description",
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
                        "fieldSysName": "image",
                        "fetch": [],
                        "sysName": "image",
                        "name": "Images",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "merchant_id",
                        "fetch": [
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "logo",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "title",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "merchant_id",
                        "name": "Merchant",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "merchants"
                    },
                    {
                        "fieldSysName": "price_displayed",
                        "fetch": [],
                        "sysName": "price_displayed",
                        "name": "Price",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "title",
                        "fetch": [],
                        "sysName": "title",
                        "name": "Title",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    }
                ],
                "writeFields": [],
                "fields": {
                    "description": {
                        "id": "description",
                        "content": "Description",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
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
                    "image": {
                        "id": "image",
                        "content": "Images",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "merchant_id": {
                        "id": "merchant_id",
                        "content": "Merchant",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "merchants",
                        "actions": []
                    },
                    "price_displayed": {
                        "id": "price_displayed",
                        "content": "Price",
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
                        "content": "Title",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "action__67701653335833902": {
                        "id": "action__67701653335833902",
                        "content": "Request sign in",
                        "type": "action",
                        "actions": []
                    },
                    "action__80061653336923637": {
                        "id": "action__80061653336923637",
                        "content": "Add to cart",
                        "type": "action",
                        "actions": []
                    },
                    "action__14421657225734565": {
                        "id": "action__14421657225734565",
                        "content": "Buy",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "image": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "price": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "title": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "description": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "merchant_id": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "description": {
                                    "id": "description",
                                    "content": "Description",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "markdown",
                                    "formatOptions": null
                                },
                                "logo": {
                                    "id": "logo",
                                    "content": "Logo",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "image",
                                    "formatOptions": null
                                },
                                "title": {
                                    "id": "title",
                                    "content": "Title",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "description": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "logo": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "title": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "logo",
                                "title",
                                "description"
                            ]
                        },
                        "subHeader": "Merchant: ",
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1653385369232",
                                    "field": "logo"
                                },
                                {
                                    "id": "1653385369868",
                                    "field": "title"
                                }
                            ]
                        },
                        "cartView": {
                            "image": true,
                            "imageField": "logo",
                            "title": true,
                            "titleField": "title"
                        }
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
                            "id",
                            "image",
                            "title",
                            "description",
                            "merchant_id",
                            "price_displayed",
                            "action__67701653335833902",
                            "action__80061653336923637",
                            "action__14421657225734565"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [],
                "cardsOrPage": "card",
                "anotherPage": "catalogue"
            },
            "fields": {
                "id": {
                    "include": false,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "image": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "price": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "title": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "description": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "merchant_id": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "description": {
                                "id": "description",
                                "content": "Description",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "markdown",
                                "formatOptions": null
                            },
                            "logo": {
                                "id": "logo",
                                "content": "Logo",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "image",
                                "formatOptions": null
                            },
                            "title": {
                                "id": "title",
                                "content": "Title",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "description": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "logo": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "title": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "logo",
                            "title",
                            "description"
                        ]
                    },
                    "subHeader": "Merchant: ",
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1653385369232",
                                "field": "logo"
                            },
                            {
                                "id": "1653385369868",
                                "field": "title"
                            }
                        ]
                    },
                    "cartView": {
                        "image": true,
                        "imageField": "logo",
                        "title": true,
                        "titleField": "title"
                    }
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
            "actions": [
                {
                    "sysName": "",
                    "id": "67701653335833902",
                    "name": "Request sign in",
                    "displayAs": "button",
                    "buttonIcon": "cart",
                    "buttonType": "accent",
                    "showMessage": true,
                    "closePopup": false,
                    "resultButton": "",
                    "resultMessage": "You need to <a href=\"/signin\">authorise</a> first",
                    "conditionals": [
                        {
                            "id": "12791653335897541",
                            "target": "isNotAuth",
                            "value": null
                        }
                    ],
                    "buttonTitle": "Add to cart",
                    "dropdown": false,
                    "footerButtons": false
                },
                {
                    "sysName": "postUserAcion",
                    "id": "80061653336923637",
                    "name": "Add to cart",
                    "displayAs": "button",
                    "buttonIcon": "cart",
                    "buttonType": "accent",
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Added! <a href=\"/cart\">Go to cart<a/>",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "format": "",
                                "formatOptions": {}
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "good_id",
                                "fetch": [],
                                "sysName": "good_id",
                                "format": "",
                                "formatOptions": {}
                            },
                            {
                                "fieldSysName": "merchant_id",
                                "fetch": [],
                                "sysName": "merchant_id",
                                "format": "",
                                "formatOptions": {}
                            },
                            {
                                "fieldSysName": "type",
                                "fetch": [],
                                "sysName": "type",
                                "format": "",
                                "formatOptions": {}
                            },
                            {
                                "fieldSysName": "user_id",
                                "fetch": [],
                                "sysName": "user_id",
                                "format": "",
                                "formatOptions": {}
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "16751653336968029",
                            "target": "good_id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "28341653336973271",
                            "target": "user_id",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "76941653336985854",
                            "target": "type",
                            "type": "const",
                            "value": "add_to_cart"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "96581653336969316",
                            "target": "isAutn",
                            "value": null
                        }
                    ],
                    "dropdown": false,
                    "footerButtons": false
                },
                {
                    "sysName": "",
                    "id": "14421657225734565",
                    "name": "Buy",
                    "displayAs": "button",
                    "buttonIcon": "money",
                    "buttonType": "accent",
                    "footerButtons": true,
                    "buttonTitle": "Purchase",
                    "web3": true,
                    "web3Mapping": [
                        {
                            "id": "41071657226141895",
                            "target": "amount",
                            "type": "const",
                            "value": "14"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "description",
                "name": "Description",
                "dataType": "string",
                "id": "10491653331482505",
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
                "array": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "image",
                "name": "Images",
                "dataType": "file",
                "id": "85971653317512108",
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
                "array": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "merchant_id",
                "name": "Merchant",
                "dataType": "link",
                "id": "83931653331400591",
                "link": "merchants",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 6,
                "linkIndexFieldSysName": [
                    "user_id",
                    "status"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": true,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "price_displayed",
                "name": "Price",
                "dataType": "string",
                "id": "71751653332297116",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            },
            {
                "sysName": "title",
                "name": "Title",
                "dataType": "string",
                "id": "25651653317510996",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "json": false
            }
        ],
        "data": [
            {
                "price_displayed": "14 000 MATIC",
                "image": "https://api.directual.com/fileUploaded/showcase-store/web/c5e9701c-6019-4ab9-8bed-168d90c05234.jpeg,https://api.directual.com/fileUploaded/showcase-store/web/e43b3a79-1146-48bf-bdd5-feae82f3782c.jpeg,https://api.directual.com/fileUploaded/showcase-store/web/ff4f0210-6efb-4b5d-a4c6-8ceb754bc2af.jpeg",
                "description": "A beautiful Mid-century head turner, this 1955 Ford Customline is the desired 2-door variant, lovingly named the Blue Angel. If you like getting thumbs up in real life, cruise this joy ride! Clean title, odometer shows approximately 67,364 miles.",
                "id": "e93318e5-e587-4fe2-a146-873c288a9bdb",
                "title": "1955 Ford Customline",
                "merchant_id": {
                    "logo": "https://api.directual.com/fileUploaded/showcase-store/web/8b2b5ee8-7912-4852-b0b6-cc384413aefb.png",
                    "description": "Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. ",
                    "title": "Ford"
                }
            },
            {
                "price_displayed": "25 000 MATIC",
                "image": "https://api.alfa.directual.com/fileUploaded/showcase-store/2d72ecab-fc6f-4b09-b24c-14ac5a4a004e.jpeg,https://api.alfa.directual.com/fileUploaded/showcase-store/4fd6150c-418c-407e-a788-d251cd1ee2ad.jpeg",
                "id": "44ababdf-957e-4e41-b95f-ff087bd0b11f",
                "title": "Lotus Elite Type 14",
                "merchant_id": {
                    "logo": "https://api.alfa.directual.com/fileUploaded/showcase-store/06a6b30c-de1e-48c7-a316-ba2f0dd6fe37.jpeg",
                    "description": "Lotus Cars Limited is a British automotive company headquartered in Norfolk, England.",
                    "title": "Lotus Cars"
                }
            },
            {
                "price_displayed": "34 000 MATIC",
                "image": "https://api.directual.com/fileUploaded/showcase-store/web/6db101f0-5c57-41e7-b9b6-6b32be5253b1.jpeg,https://api.directual.com/fileUploaded/showcase-store/web/73f76cfe-a6a6-429a-91c1-b65d3fb64e7b.jpeg,https://api.directual.com/fileUploaded/showcase-store/web/9a559947-ef6b-4da8-8bc5-b250c2ea8c98.jpeg",
                "description": "This Classic Ford Bronco is built with a 100% Brand  New Complete STEEL BODY.\nBrand New Ford Aluminator LIMITED SIGNED Edition  5.0 Coyote motor with warranty. Ceramic stainless steel headers \nCustom clock able racing Starter.",
                "id": "53a44287-47ee-489b-bb06-06b948464bd2",
                "title": "1968 Ford Bronco",
                "merchant_id": {
                    "logo": "https://api.directual.com/fileUploaded/showcase-store/web/8b2b5ee8-7912-4852-b0b6-cc384413aefb.png",
                    "description": "Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. ",
                    "title": "Ford"
                }
            },
            {
                "price_displayed": "18 000 US$",
                "image": "https://api.directual.com/fileUploaded/showcase-store/web/19ff8104-2b8f-4fd4-99bc-0ce93b981b9a.jpeg,https://api.directual.com/fileUploaded/showcase-store/web/9317a486-82e3-4c1f-9d22-1fdd93e02ad7.jpeg",
                "description": "Mustang fastback, 289, 4 speed, power front disc, A/M, AC, power steering. New glass and interior. Completely redone 2018.",
                "id": "886ea34d-606f-4fdc-802e-0a41074ceda4",
                "title": "1965 Ford Mustang",
                "merchant_id": {
                    "logo": "https://api.directual.com/fileUploaded/showcase-store/web/8b2b5ee8-7912-4852-b0b6-cc384413aefb.png",
                    "description": "Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. ",
                    "title": "Ford"
                }
            },
            {
                "price_displayed": "33 000 US$",
                "image": "https://api.alfa.directual.com/fileUploaded/showcase-store/ba67ef96-9ccf-4a6c-a23a-3528a56efd6f.jpeg,https://api.alfa.directual.com/fileUploaded/showcase-store/a9f345ab-e1d5-4671-a94c-acd8bf10b421.jpeg",
                "id": "866a80f6-2649-4fca-88df-80f5fa517fe3",
                "title": "Mercedes 280SL",
                "merchant_id": {
                    "description": "Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand. Both Mercedes-Benz and Mercedes-Benz AG are headquartered in Stuttgart, Baden-Württemberg, Germany.",
                    "logo": "https://api.alfa.directual.com/fileUploaded/showcase-store/bf65084a-90d3-43ac-b5fc-d28d2f7a07db.jpeg",
                    "title": "Mercedes Benz"
                }
            },
            {
                "price_displayed": "42 000 US$",
                "image": "https://api.directual.com/fileUploaded/showcase-store/web/ba205a6d-7c3a-4def-bd5a-358b3c22420c.jpeg,https://api.directual.com/fileUploaded/showcase-store/web/f58e6c71-e0e7-4694-a123-8528473ca247.jpeg",
                "description": "Georgios 2007 Mercedes SL-550, only 62K miles, Desineo Edition. Low 62 K miles. In the world of premium and exotic roadsters, only a handful of vehicles offer the exclusivity, performance and overall reliability of the Mercedes-Benz SL.",
                "id": "ddd84e89-9482-4b2c-87e4-df35c1e3bd87",
                "title": "2007 Mercedes SL-550",
                "merchant_id": {
                    "description": "Mercedes-Benz, commonly referred to as Mercedes, is a German luxury automotive brand. Both Mercedes-Benz and Mercedes-Benz AG are headquartered in Stuttgart, Baden-Württemberg, Germany.",
                    "logo": "https://api.alfa.directual.com/fileUploaded/showcase-store/bf65084a-90d3-43ac-b5fc-d28d2f7a07db.jpeg",
                    "title": "Mercedes Benz"
                }
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "description",
                99108668
            ],
            [
                "id",
                99108668
            ],
            [
                "image",
                99108668
            ],
            [
                "merchant_id.description",
                99108672
            ],
            [
                "merchant_id.logo",
                99108672
            ],
            [
                "merchant_id.title",
                99108672
            ],
            [
                "price_displayed",
                99108668
            ],
            [
                "title",
                99108668
            ]
        ],
        "writeFields": [],
        "structures": {
            "99108668": {
                "networkID": 13236,
                "id": 99108668,
                "dateCreated": "2022-05-23T14:49:52Z",
                "hidden": false,
                "dateHidden": null,
                "name": "goods",
                "sysName": "goods",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"25651653317510996\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"10491653331482505\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"price\",\"name\":\"Price, US$\",\"dataType\":\"decimal\",\"id\":\"37111653317511499\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"price_displayed\",\"name\":\"Price\",\"dataType\":\"string\",\"id\":\"71751653332297116\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"image\",\"name\":\"Images\",\"dataType\":\"file\",\"id\":\"85971653317512108\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"merchant_id\",\"name\":\"Merchant\",\"dataType\":\"link\",\"id\":\"83931653331400591\",\"link\":\"merchants\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"user_id\",\"status\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":true},{\"sysName\":\"is_hidden\",\"name\":\"Hidden?\",\"dataType\":\"boolean\",\"id\":\"32521653331455301\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"is_approved\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"85631653579889829\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-05-26T18:54:50Z",
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false
                },
                "folderId": 33702036
            },
            "99108672": {
                "networkID": 13236,
                "id": 99108672,
                "dateCreated": "2022-05-23T18:43:55Z",
                "hidden": false,
                "dateHidden": null,
                "name": "merchants",
                "sysName": "merchants",
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"23361653331526962\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"logo\",\"name\":\"Logo\",\"dataType\":\"file\",\"id\":\"53661653331527465\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"description\",\"name\":\"Description\",\"dataType\":\"string\",\"id\":\"69491653331531928\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"user_id\",\"name\":\"Owner\",\"dataType\":\"link\",\"id\":\"17271653331543139\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":true,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"good_ids\",\"name\":\"Goods\",\"dataType\":\"arrayLink\",\"id\":\"12551653331589988\",\"link\":\"goods\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false},{\"sysName\":\"status\",\"name\":\"Status\",\"dataType\":\"string\",\"id\":\"61681653585632822\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"color\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"98031653588039980\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false},{\"sysName\":\"message\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"31721653588052113\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"json\":false,\"typeVariable\":{},\"linkType\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-05-26T18:00:57Z",
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false
                },
                "folderId": 33702036
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
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
        "sl": "kanban",
        "pageSize": "50",
        "headerField": null,
        "params": {
            "cardHeaderComment": "col",
            "cardBodyText": "weight",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "col",
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
                        "sysName": "col",
                        "name": "Colmn",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "columns"
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
                        "fieldSysName": "name",
                        "fetch": [],
                        "sysName": "name",
                        "name": "NAME",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "text",
                        "fetch": [],
                        "sysName": "text",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "col",
                        "fetch": [],
                        "sysName": "col",
                        "name": "Colmn",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "columns"
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
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "col": {
                        "id": "col",
                        "content": "Colmn",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "columns",
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
                    "image": {
                        "id": "image",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "name": {
                        "id": "name",
                        "content": "NAME",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "text": {
                        "id": "text",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "weight": {
                        "id": "weight",
                        "content": "",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__68981660905091745": {
                        "id": "action__68981660905091745",
                        "content": "New action",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "col": {
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
                    "image": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "name": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "text": {
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
                            "col",
                            "id",
                            "image",
                            "name",
                            "text",
                            "weight",
                            "action__68981660905091745"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [],
                "cardsOrPage": "page"
            },
            "fields": {
                "col": {
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
                "image": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "name": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "text": {
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
            "kanbanParams": {
                "columnField": "col",
                "columnsStruct": "columns",
                "columns": [
                    {
                        "id": "col-1",
                        "name": "one "
                    },
                    {
                        "id": "col-3",
                        "name": "three "
                    },
                    {
                        "id": "col-2",
                        "name": "two "
                    }
                ],
                "columnsVisibility": {
                    "2": {
                        "isHidden": true
                    }
                },
                "dragndropOption": "same",
                "sortField": "weight",
                "columnWidth": 350
            },
            "showCounter": true,
            "counterField": "id",
            "actions": [
                {
                    "sysName": "kanban2",
                    "id": "68981660905091745",
                    "name": "New action",
                    "displayAs": "button",
                    "footerButtons": true,
                    "buttonIcon": "actions",
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
                                "fieldSysName": "link",
                                "fetch": [],
                                "sysName": "link",
                                "name": "",
                                "dataType": "link",
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
                                "fieldSysName": "name",
                                "fetch": [],
                                "sysName": "name",
                                "name": "NAME",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "94081664743361671",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        },
                        {
                            "id": "69961664743367064",
                            "target": "name",
                            "type": "const",
                            "value": "сила в правде"
                        }
                    ]
                }
            ],
            "cardHeaderStyle": "p"
        },
        "tableTitle": "Trello1",
        "actions": null,
        "headers": [
            {
                "sysName": "col",
                "dataType": "link",
                "name": "Colmn",
                "id": "98481659390930255",
                "link": "columns",
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
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
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
                "sysName": "image",
                "dataType": "file",
                "name": "",
                "id": "75311659390953617",
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
                "sysName": "name",
                "dataType": "string",
                "name": "NAME",
                "id": "94231659390940732",
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
                "sysName": "text",
                "dataType": "string",
                "name": "",
                "id": "51671659390951143",
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
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "weight",
                "dataType": "decimal",
                "name": "",
                "id": "53081660230900734",
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
                "name": "сила в правде",
                "image": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/d0729f6b-c432-4bee-a561-ba10123de7b7.jpeg",
                "text": "Sweet and nice berry",
                "id": "obj-1",
                "col": {
                    "name": "one",
                    "id": "col-1"
                }
            },
            {
                "weight": 2.3,
                "name": "cила в правде брат",
                "image": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/2b03e65d-d1b5-41ab-9291-d0a9fc687864.jpeg",
                "text": "Another solid berry",
                "id": "obj-2",
                "col": {
                    "name": "one",
                    "id": "col-1"
                }
            },
            {
                "name": "сила в правде",
                "image": "https://api.alfa.directual.com/fileUploaded/temaplate-crm/15697140-9cd6-4d73-9114-3161870b8d48.jpeg",
                "text": "Love the juice!",
                "id": "obj-3",
                "col": {
                    "name": "one",
                    "id": "col-1"
                }
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "col.id",
                99123978
            ],
            [
                "col.name",
                99123978
            ],
            [
                "id",
                99123979
            ],
            [
                "image",
                99123979
            ],
            [
                "name",
                99123979
            ],
            [
                "text",
                99123979
            ],
            [
                "weight",
                99123979
            ]
        ],
        "writeFields": [
            "col",
            "id",
            "weight"
        ],
        "structures": {
            "99123978": {
                "id": 99123978,
                "dateCreated": "2022-08-01T21:54:31Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 13796,
                "name": "columns",
                "sysName": "columns",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"30861659390887062\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"second\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"28191659453539947\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"},{\"sysName\":\"second\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-08-02T15:19:07Z",
                "createBy": 3527,
                "changedBy": 3527,
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": null
            },
            "99123979": {
                "id": 99123979,
                "dateCreated": "2022-08-01T21:55:21Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 13796,
                "name": "objects",
                "sysName": "objects",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"col\",\"dataType\":\"link\",\"name\":\"Colmn\",\"id\":\"98481659390930255\",\"link\":\"columns\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"NAME\",\"id\":\"94231659390940732\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"51671659390951143\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"75311659390953617\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"\",\"id\":\"53081660230900734\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link\",\"dataType\":\"link\",\"name\":\"\",\"id\":\"40491660901280670\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-08-29T14:27:46Z",
                "createBy": 3527,
                "changedBy": 1,
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
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
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
                "sysName": "col",
                "dataType": "link",
                "name": "Colmn",
                "id": "98481659390930255",
                "link": "columns",
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
                "indexExists": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
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
                "sysName": "weight",
                "dataType": "decimal",
                "name": "",
                "id": "53081660230900734",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "quickSearch": null,
        "httpParams": {}
    }

    let exampleTable = {
        "sl": "getFinancialReport",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "_report_ts",
                        "fetch": [],
                        "sysName": "_report_ts",
                        "name": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "balance___sum",
                        "fetch": [],
                        "sysName": "balance___sum",
                        "name": "sum(balance)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bool",
                        "fetch": [],
                        "sysName": "bool",
                        "name": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
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
                        "fieldSysName": "id___count",
                        "fetch": [],
                        "sysName": "id___count",
                        "name": "count(id)",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "period",
                        "fetch": [],
                        "sysName": "period",
                        "name": "period",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                                "fieldSysName": "title",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "type",
                        "name": "type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "transaction_types"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "_report_ts": {
                        "id": "_report_ts",
                        "content": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "balance___sum": {
                        "id": "balance___sum",
                        "content": "sum(balance)",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bool": {
                        "id": "bool",
                        "content": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
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
                    "id___count": {
                        "id": "id___count",
                        "content": "count(id)",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "period": {
                        "id": "period",
                        "content": "period",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "type": {
                        "id": "type",
                        "content": "type",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "transaction_types",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "_report_ts": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "balance___sum": {
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
                    "id___count": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "period": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "type": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bool": {
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
                            "_report_ts",
                            "balance___sum",
                            "id",
                            "id___count",
                            "period",
                            "type",
                            "bool"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "_report_ts": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "balance___sum": {
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
                "id___count": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "period": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "type": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bool": {
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
                        "fieldSysName": "_report_ts",
                        "fetch": [],
                        "sysName": "_report_ts",
                        "name": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "balance___sum",
                        "fetch": [],
                        "sysName": "balance___sum",
                        "name": "sum(balance)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bool",
                        "fetch": [],
                        "sysName": "bool",
                        "name": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
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
                        "fieldSysName": "id___count",
                        "fetch": [],
                        "sysName": "id___count",
                        "name": "count(id)",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "period",
                        "fetch": [],
                        "sysName": "period",
                        "name": "period",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                                "fieldSysName": "title",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "type",
                        "name": "type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "transaction_types"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "_report_ts": {
                        "id": "_report_ts",
                        "content": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": ""
                    },
                    "balance___sum": {
                        "id": "balance___sum",
                        "content": "sum(balance)",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "bool": {
                        "id": "bool",
                        "content": "Ще не вмерла?",
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
                                "Скоро",
                                "Очень скоро"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
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
                    "id": {
                        "id": "id",
                        "content": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "id___count": {
                        "id": "id___count",
                        "content": "count(id)",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "period": {
                        "id": "period",
                        "content": "period",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "type": {
                        "id": "type",
                        "content": "type",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "transaction_types"
                    }
                },
                "fieldParams": {
                    "_report_ts": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "balance___sum": {
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
                    "id___count": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "period": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "type": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "bool": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "_report_ts",
                    "balance___sum",
                    "id",
                    "id___count",
                    "period",
                    "type",
                    "bool"
                ]
            },
            "filterParams": {
                "isSorting": true,
                "isFiltering": true,
                "filterFields": {
                    "period": {
                        "active": true,
                        "dataType": "string",
                        "format": "",
                        "name": "period",
                        "formatOptions": {}
                    },
                    "type": {
                        "active": true,
                        "dataType": "link",
                        "format": "",
                        "linkDirectory": [
                            {
                                "id": "paddle_payment",
                                "text": "💹 Paddle"
                            },
                            {
                                "id": "tinkoff",
                                "text": "💹 Tinkoff"
                            },
                            {
                                "id": "app_payment",
                                "text": "🔥 App Payment"
                            },
                            {
                                "id": "promo",
                                "text": "🆓 Promo"
                            },
                            {
                                "id": "ondemand",
                                "text": "🔥 On-demand Payment"
                            },
                            {
                                "id": "team_payment",
                                "text": "🔥 Team Payment"
                            },
                            {
                                "id": "crypto",
                                "text": "💹 Crypto"
                            },
                            {
                                "id": "bank_payment",
                                "text": "💹 Wire payment"
                            }
                        ],
                        "name": "type",
                        "formatOptions": {}
                    },
                    "balance___sum": {
                        "active": true,
                        "dataType": "decimal",
                        "format": "",
                        "name": "sum(balance)",
                        "formatOptions": {}
                    },
                    "id___count": {
                        "active": true,
                        "dataType": "number",
                        "format": "",
                        "name": "count(id)",
                        "formatOptions": {}
                    },
                    "_report_ts": {
                        "active": true,
                        "dataType": "date",
                        "format": "",
                        "name": "report create time",
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
                            "dateFormat": "DD MMM, Y",
                            "timeFormat": "",
                            "isUTC": "false"
                        }
                    },
                    "bool": {
                        "active": true,
                        "dataType": "boolean",
                        "format": "",
                        "name": "Ще не вмерла?",
                        "formatOptions": {
                            "customOptionLabel": "My option",
                            "keyValue": {
                                "key": "key",
                                "value": "value",
                                "button": "One more"
                            },
                            "dateLocale": "en-gb",
                            "booleanOptions": [
                                "Скоро",
                                "Очень скоро"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
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
                    "id": {
                        "active": true,
                        "dataType": "id",
                        "format": "",
                        "name": "id",
                        "formatOptions": {}
                    }
                }
            }
        },
        "tableTitle": "Financial Report",
        "actions": null,
        "headers": [
            {
                "sysName": "_report_ts",
                "name": "report create time",
                "dataType": "date",
                "id": "6",
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
                    "dateFormat": "DD MMM, Y",
                    "timeFormat": "",
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
                "sysName": "balance___sum",
                "name": "sum(balance)",
                "dataType": "decimal",
                "id": "1",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "bool",
                "name": "Ще не вмерла?",
                "dataType": "boolean",
                "id": "81091670421684945",
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
                "formatOptions": {
                    "customOptionLabel": "My option",
                    "keyValue": {
                        "key": "key",
                        "value": "value",
                        "button": "One more"
                    },
                    "dateLocale": "en-gb",
                    "booleanOptions": [
                        "Скоро",
                        "Очень скоро"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
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
                "sysName": "id",
                "name": "id",
                "dataType": "id",
                "id": "5",
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
                "sysName": "id___count",
                "name": "count(id)",
                "dataType": "number",
                "id": "2",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "period",
                "name": "period",
                "dataType": "string",
                "id": "3",
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
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "type",
                "name": "type",
                "dataType": "link",
                "id": "4",
                "link": "transaction_types",
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
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "_report_ts": 1670406206068,
                "balance___sum": 83.72,
                "id___count": 5,
                "id": "6390603eaaea0bbf565bf2da",
                "type": {
                    "id": "paddle_payment",
                    "title": "💹 Paddle"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 97,
                "id___count": 3,
                "id": "6390603eaaea0bbf565bf2db",
                "type": {
                    "id": "tinkoff",
                    "title": "💹 Tinkoff"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 0.84,
                "id___count": 1,
                "id": "6390603eaaea0bbf565bf2dc",
                "type": {
                    "id": "crypto",
                    "title": "💹 Crypto"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 1104.18,
                "id___count": 16,
                "id": "6390603eaaea0bbf565bf2dd",
                "type": {
                    "id": "paddle_payment",
                    "title": "💹 Paddle"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -433.56,
                "id___count": 13,
                "id": "6390603eaaea0bbf565bf2de",
                "type": {
                    "id": "ondemand",
                    "title": "🔥 On-demand Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -1146.19,
                "id___count": 13,
                "id": "6390603eaaea0bbf565bf2df",
                "type": {
                    "id": "team_payment",
                    "title": "🔥 Team Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -7736.5,
                "id___count": 132,
                "id": "6390603eaaea0bbf565bf2e0",
                "type": {
                    "id": "app_payment",
                    "title": "🔥 App Payment"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 1351.78125,
                "id___count": 20,
                "id": "6390603eaaea0bbf565bf2e1",
                "type": {
                    "id": "tinkoff",
                    "title": "💹 Tinkoff"
                },
                "period": "11-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": -1405.5,
                "id___count": 26,
                "id": "6390603eaaea0bbf565bf2e2",
                "type": {
                    "id": "app_payment",
                    "title": "🔥 App Payment"
                },
                "period": "12-2022"
            },
            {
                "_report_ts": 1670406206068,
                "balance___sum": 3975,
                "id___count": 44,
                "id": "6390603eaaea0bbf565bf2e3",
                "type": {
                    "id": "promo",
                    "title": "🆓 Promo"
                },
                "period": "11-2022"
            }
        ],
        "totalPages": 9,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "_report_ts",
                99155789
            ],
            [
                "balance___sum",
                99155789
            ],
            [
                "bool",
                99155789
            ],
            [
                "id",
                99155789
            ],
            [
                "id___count",
                99155789
            ],
            [
                "period",
                99155789
            ],
            [
                "type.id",
                99155990
            ],
            [
                "type.title",
                99155990
            ]
        ],
        "writeFields": [],
        "structures": {
            "99155789": {
                "networkID": 1822,
                "sysName": "report_554374085_for_struct_appwallet",
                "name": "Report [Full report]",
                "id": 99155789,
                "dateCreated": "2022-12-07T09:39:25Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"balance___sum\",\"name\":\"sum(balance)\",\"dataType\":\"decimal\",\"id\":\"1\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id___count\",\"name\":\"count(id)\",\"dataType\":\"number\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"period\",\"name\":\"period\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"type\",\"name\":\"type\",\"dataType\":\"link\",\"id\":\"4\",\"link\":\"transaction_types\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"_report_ts\",\"name\":\"report create time\",\"dataType\":\"date\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bool\",\"name\":\"Ще не вмерла?\",\"dataType\":\"boolean\",\"id\":\"81091670421684945\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Скоро\",\"Очень скоро\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T14:06:41Z",
                "createBy": null,
                "changedBy": 3527,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "name": "id",
                    "dataType": "id",
                    "id": "5",
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
                "folderId": 33576258
            },
            "99155990": {
                "networkID": 1822,
                "sysName": "transaction_types",
                "name": "Transaction types",
                "id": 99155990,
                "dateCreated": "2022-12-07T13:05:44Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"11991670418438514\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2022-12-07T13:12:52Z",
                "createBy": 3527,
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
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33575450
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
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
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} locale='FRA'/> },
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