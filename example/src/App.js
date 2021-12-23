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
        "sl": "4stage-offers",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "offer_date",
            "deleteField": "",
            "cardBodyText": "payment_status",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "clients_email",
                        "fetch": [],
                        "sysName": "clients_email",
                        "name": "Эмейл клиента",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "company_inn",
                        "fetch": [],
                        "sysName": "company_inn",
                        "name": "ИНН",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "company_name",
                        "fetch": [],
                        "sysName": "company_name",
                        "name": "Название компании",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "email_send_date",
                        "fetch": [],
                        "sysName": "email_send_date",
                        "name": "Дата отправки эмейла",
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
                        "name": "ID",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "offer_date",
                        "fetch": [],
                        "sysName": "offer_date",
                        "name": "Дата",
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
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "offer_text",
                        "fetch": [],
                        "sysName": "offer_text",
                        "name": "Офер",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_color",
                        "fetch": [],
                        "sysName": "payment_color",
                        "name": "payment_color",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_date",
                        "fetch": [],
                        "sysName": "payment_date",
                        "name": "Дата оплаты",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_status",
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
                            },
                            {
                                "fieldSysName": "status_color",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "payment_status",
                        "name": "Статус оплаты",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_stage_payment_status"
                    },
                    {
                        "fieldSysName": "payment_sum",
                        "fetch": [],
                        "sysName": "payment_sum",
                        "name": "Сумма оплаты",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_webLink",
                        "fetch": [],
                        "sysName": "payment_webLink",
                        "name": "Ссылка на страницу с оплатой",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payments_link",
                        "fetch": [],
                        "sysName": "payments_link",
                        "name": "payments_link",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_2_payments_cloudpayments"
                    },
                    {
                        "fieldSysName": "requestID_link",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "requestID_link",
                        "name": "ID заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "scoring_request_tgbot"
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "id",
                        "fetch": [],
                        "sysName": "id",
                        "name": "ID",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_status",
                        "fetch": [],
                        "sysName": "payment_status",
                        "name": "Статус оплаты",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_stage_payment_status"
                    }
                ],
                "fields": {
                    "clients_email": {
                        "id": "clients_email",
                        "content": "Эмейл клиента",
                        "type": "field",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "company_inn": {
                        "id": "company_inn",
                        "content": "ИНН",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "company_name": {
                        "id": "company_name",
                        "content": "Название компании",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "email_send_date": {
                        "id": "email_send_date",
                        "content": "Дата отправки эмейла",
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
                        "content": "ID",
                        "type": "field",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "offer_date": {
                        "id": "offer_date",
                        "content": "Дата",
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
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "offer_text": {
                        "id": "offer_text",
                        "content": "Офер",
                        "type": "field",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payment_color": {
                        "id": "payment_color",
                        "content": "payment_color",
                        "type": "field",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payment_date": {
                        "id": "payment_date",
                        "content": "Дата оплаты",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payment_status": {
                        "id": "payment_status",
                        "content": "Статус оплаты",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "4_stage_payment_status",
                        "actions": []
                    },
                    "payment_sum": {
                        "id": "payment_sum",
                        "content": "Сумма оплаты",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payment_webLink": {
                        "id": "payment_webLink",
                        "content": "Ссылка на страницу с оплатой",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payments_link": {
                        "id": "payments_link",
                        "content": "payments_link",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "4_2_payments_cloudpayments",
                        "actions": []
                    },
                    "requestID_link": {
                        "id": "requestID_link",
                        "content": "ID заявки",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "scoring_request_tgbot",
                        "actions": []
                    },
                    "action__77821639718597995": {
                        "content": "Клиент отказался",
                        "id": "action__77821639718597995",
                        "type": "action",
                        "actions": []
                    },
                    "action__95611639720693040": {
                        "content": " ",
                        "id": "action__95611639720693040",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "clients_email": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "company_inn": {
                        "include": true,
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
                    "email_send_date": {
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
                    "offer_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "offer_text": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "configureLinkedCard": {
                            "fields": {
                                "name": {
                                    "id": "name",
                                    "content": "Статус",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "status_color": {
                                    "id": "status_color",
                                    "content": "status_color",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "color",
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "status_color": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "name",
                                "status_color"
                            ]
                        },
                        "quickSearchSL": "offers_status"
                    },
                    "payment_sum": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_webLink": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payments_link": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "requestID_link": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_color": {
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
                            "requestID_link",
                            "offer_date",
                            "company_name",
                            "company_inn",
                            "offer_text",
                            "clients_email",
                            "email_send_date",
                            "payment_webLink",
                            "action__95611639720693040",
                            "id",
                            "payment_status",
                            "payment_sum",
                            "payment_date",
                            "payments_link",
                            "payment_color",
                            "action__77821639718597995"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "changeStatus_rejected",
                        "id": "77821639718597995",
                        "name": "Клиент отказался",
                        "displayAs": "button",
                        "buttonIcon": "actions",
                        "buttonType": "danger",
                        "dropdown": true,
                        "buttonTitle": "Отказ клиента",
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "ID",
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
                                    "name": "ID",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ]
                        },
                        "formMapping": [
                            {
                                "id": "75121639720425959",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ]
                    },
                    {
                        "sysName": "sendEmail",
                        "id": "95611639720693040",
                        "name": " ",
                        "displayAs": "form",
                        "buttonIcon": "mail",
                        "buttonType": "accent",
                        "buttonTitle": "Отправить",
                        "showMessage": true,
                        "closePopup": false,
                        "resultMessage": "Отправлено!",
                        "SLtype": "other",
                        "fields": {
                            "readFields": [
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "ID",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ],
                            "writeFields": [
                                {
                                    "fieldSysName": "clients_email",
                                    "fetch": [],
                                    "sysName": "clients_email",
                                    "name": "Эмейл клиента",
                                    "dataType": "string",
                                    "format": "email",
                                    "formatOptions": {},
                                    "link": ""
                                },
                                {
                                    "fieldSysName": "id",
                                    "fetch": [],
                                    "sysName": "id",
                                    "name": "ID",
                                    "dataType": "id",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "42271639720741800",
                                "field": {
                                    "fieldSysName": "clients_email",
                                    "fetch": [],
                                    "sysName": "clients_email",
                                    "name": "Эмейл клиента",
                                    "dataType": "string",
                                    "format": "email",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "54031639720745749",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ]
                    }
                ]
            },
            "fields": {
                "clients_email": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_inn": {
                    "include": true,
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
                "email_send_date": {
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
                "offer_date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "offer_text": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "configureLinkedCard": {
                        "fields": {
                            "name": {
                                "id": "name",
                                "content": "Статус",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "status_color": {
                                "id": "status_color",
                                "content": "status_color",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "color",
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "status_color": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "name",
                            "status_color"
                        ]
                    },
                    "quickSearchSL": "offers_status",
                    "searchData": [
                        {
                            "key": "0",
                            "value": "ожидает оплаты"
                        },
                        {
                            "key": "1",
                            "value": "оплачен"
                        },
                        {
                            "key": "2",
                            "value": "отказ клиента"
                        }
                    ]
                },
                "payment_sum": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_webLink": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payments_link": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "requestID_link": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_color": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "cardColor": "payment_color",
            "cardColorOption": "left",
            "actions": [
                {
                    "sysName": "changeStatus_rejected",
                    "id": "77821639718597995",
                    "name": "Клиент отказался",
                    "displayAs": "button",
                    "buttonIcon": "actions",
                    "buttonType": "danger",
                    "dropdown": true,
                    "buttonTitle": "Отказ клиента",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "ID",
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
                                "name": "ID",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "35591639733791542",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "conditionals": [
                        {
                            "id": "23801639733808368",
                            "target": "field",
                            "value": "0",
                            "field": "payment_status",
                            "fieldValue": null
                        }
                    ]
                },
                {
                    "sysName": "sendEmail",
                    "id": "95611639720693040",
                    "name": " ",
                    "displayAs": "form",
                    "buttonIcon": "mail",
                    "buttonType": "accent",
                    "buttonTitle": "Отправить",
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Отправлено!",
                    "SLtype": "other",
                    "fields": {
                        "readFields": [
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "ID",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ],
                        "writeFields": [
                            {
                                "fieldSysName": "clients_email",
                                "fetch": [],
                                "sysName": "clients_email",
                                "name": "Эмейл клиента",
                                "dataType": "string",
                                "format": "email",
                                "formatOptions": {},
                                "link": ""
                            },
                            {
                                "fieldSysName": "id",
                                "fetch": [],
                                "sysName": "id",
                                "name": "ID",
                                "dataType": "id",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "42271639720741800",
                            "field": {
                                "fieldSysName": "clients_email",
                                "fetch": [],
                                "sysName": "clients_email",
                                "name": "Эмейл клиента",
                                "dataType": "string",
                                "format": "email",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "54031639720745749",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ]
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "clients_email",
                "dataType": "string",
                "name": "Эмейл клиента",
                "id": "97771639403501712",
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
                "format": "email",
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "company_inn",
                "dataType": "string",
                "name": "ИНН",
                "id": "10131639406091671",
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
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "company_name",
                "dataType": "string",
                "name": "Название компании",
                "id": "24331639406110698",
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
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "email_send_date",
                "dataType": "date",
                "name": "Дата отправки эмейла",
                "id": "17941639410299451",
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
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id",
                "dataType": "id",
                "name": "ID",
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
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "offer_date",
                "dataType": "date",
                "name": "Дата",
                "id": "82591639403449086",
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
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "offer_text",
                "dataType": "string",
                "name": "Офер",
                "id": "44141639403468400",
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
                "format": "markdown",
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payment_color",
                "dataType": "string",
                "name": "payment_color",
                "id": "23961639718760502",
                "link": "",
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
                "format": "color",
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payment_date",
                "dataType": "date",
                "name": "Дата оплаты",
                "id": "93341639403865328",
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
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payment_status",
                "dataType": "link",
                "name": "Статус оплаты",
                "id": "46131639403829927",
                "link": "4_stage_payment_status",
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
                "typeVariable": {},
                "linkType": true,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payment_sum",
                "dataType": "number",
                "name": "Сумма оплаты",
                "id": "67961639403853161",
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
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payment_webLink",
                "dataType": "string",
                "name": "Ссылка на страницу с оплатой",
                "id": "76831639403924581",
                "link": "",
                "group": "1639403909672",
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
                "arrayLink": false,
                "json": false,
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payments_link",
                "dataType": "link",
                "name": "payments_link",
                "id": "11151639404028290",
                "link": "4_2_payments_cloudpayments",
                "group": "1639403909672",
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
                "typeVariable": {},
                "linkType": true,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "requestID_link",
                "dataType": "link",
                "name": "ID заявки",
                "id": "64301639406053197",
                "link": "scoring_request_tgbot",
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
                "typeVariable": {},
                "linkType": true,
                "linkOrArrayLinkType": true,
                "indexExists": false,
                "array": false
            }
        ],
        "data": [
            {
                "company_inn": "5321178517",
                "offer_date": 1639663203000,
                "company_name": "ООО \"ТСК-ВН\"",
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 4000000р. до 4000000р. на Карме:\n- Исполнение государственного контракта/закупки 3470503110021000028;\n- Ставка 1.6% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 11 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 2 дней c момента подписания документов.\n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов \n\nСсылка для оплаты - pay.karma.red/dg3\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nКоманда инвестиционной платформы Карма",
                "payment_status": {
                    "name": "ожидает оплаты",
                    "status_color": "#FFE4B5",
                    "id": "0"
                },
                "payment_webLink": "pay.karma.red/4r7",
                "id": "5321178517|3470503110021000028",
                "payment_color": "#FFE4B5",
                "requestID_link": "5321178517|3470503110021000028"
            },
            {
                "company_inn": "7743330499",
                "offer_date": 1639643382000,
                "company_name": "ООО \"СЕВЕРСТРОЙГРУПП\"",
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 3р. до 5р. на Карме:\n- Исполнение государственного контракта/закупки ;\n- Ставка 2.1% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 6 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 2 дней c момента подписания документов.\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nКоманда инвестиционной платформы Карма",
                "payment_status": {
                    "name": "ожидает оплаты",
                    "status_color": "#FFE4B5",
                    "id": "0"
                },
                "payment_webLink": "pay.karma.red/stj",
                "id": "90a10744-4be9-4f38-a61c-04e2a4bda7a3",
                "payment_color": "#FFE4B5",
                "requestID_link": "90a10744-4be9-4f38-a61c-04e2a4bda7a3"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "clients_email",
                99055927
            ],
            [
                "company_inn",
                99055927
            ],
            [
                "company_name",
                99055927
            ],
            [
                "email_send_date",
                99055927
            ],
            [
                "id",
                99055927
            ],
            [
                "offer_date",
                99055927
            ],
            [
                "offer_text",
                99055927
            ],
            [
                "payment_color",
                99055927
            ],
            [
                "payment_date",
                99055927
            ],
            [
                "payment_status.id",
                99056814
            ],
            [
                "payment_status.name",
                99056814
            ],
            [
                "payment_status.status_color",
                99056814
            ],
            [
                "payment_sum",
                99055927
            ],
            [
                "payment_webLink",
                99055927
            ],
            [
                "payments_link",
                99055927
            ],
            [
                "requestID_link.id",
                1350501
            ]
        ],
        "writeFields": [
            "id",
            "payment_status"
        ],
        "structures": {
            "1350501": {
                "id": 1350501,
                "dateCreated": "2021-03-03T10:27:37Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 4355,
                "name": "Заявки на КИК",
                "sysName": "scoring_request_tgbot",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_cred_history\",\"dataType\":\"string\",\"name\":\"Согласие на запрос БКИ\",\"id\":\"10041628778275617\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_current_count_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_current_count_Plus_contracts_aff\",\"id\":\"10081637505600973\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_HasDebtFNS\",\"dataType\":\"string\",\"name\":\"company_HasDebtFNS\",\"id\":\"10151637411847904\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_fssp_active_1\",\"dataType\":\"number\",\"name\":\"affilates_fssp_active_F1\",\"id\":\"10401617642939913\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_contractsFinished_sum\",\"dataType\":\"number\",\"name\":\"founder2_contractsFinished_ALL_sum\",\"id\":\"11821619592355477\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_date\",\"dataType\":\"date\",\"name\":\"founder1_date\",\"id\":\"12121619588352045\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ul_employees_payroll_forTKB\",\"dataType\":\"number\",\"name\":\"ul_employees_payroll_forTKB\",\"id\":\"12441637924600253\",\"link\":\"\",\"group\":\"1637399992291\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"revenue_lastYear_Plus_revenue_aff\",\"dataType\":\"number\",\"name\":\"revenue_lastYear_Plus_revenue_aff\",\"id\":\"12881637505447216\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"inn_check_status_tkb\",\"dataType\":\"boolean\",\"name\":\"inn_check_status_tkb\",\"id\":\"13101637848458693\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_count_F2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_count_F2\",\"id\":\"13981637488704282\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tkb_response\",\"dataType\":\"string\",\"name\":\"Результат ТКБ\",\"id\":\"14381638209202523\",\"link\":null,\"group\":\"1635316815357\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_phone\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"14561637762342313\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courtsSum_devide_revenueLastYear\",\"dataType\":\"decimal\",\"name\":\"courtsSum_devide_revenueLastYear\",\"id\":\"14601637505819611\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"14601637686491408\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"listing_fee\",\"dataType\":\"number\",\"name\":\"Комиссия за выдачу\",\"id\":\"15171636451157189\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_region_code\",\"dataType\":\"string\",\"name\":\"company_region_code\",\"id\":\"16001637411810443\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_email\",\"dataType\":\"string\",\"name\":\"Эмейл\",\"id\":\"16351637762331766\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF2_courts_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF2_courts_active_count\",\"id\":\"16721637490137239\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"verification_link\",\"dataType\":\"link\",\"name\":\"verification_link\",\"id\":\"16821637863153646\",\"link\":\"vertification\",\"group\":\"1639220671976\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"experience_stop\",\"dataType\":\"boolean\",\"name\":\"experience_stop\",\"id\":\"17341633343130460\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bankruptcy_stop\",\"dataType\":\"string\",\"name\":\"bankruptcy_stop\",\"id\":\"17381615309644031\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"newDB_founder1_check_status\",\"dataType\":\"string\",\"name\":\"newDB_founder1_check_status\",\"id\":\"17411619711934154\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_status\",\"dataType\":\"string\",\"name\":\"company_status\",\"id\":\"17571622211293259\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courts_to_finishedContracts_36M\",\"dataType\":\"number\",\"name\":\"courts_to_finishedContracts_36M\",\"id\":\"17651622103928902\",\"link\":\"\",\"group\":\"1637487441419\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fssp_active_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Текущие исполнительные производства\",\"id\":\"17901639311484601\",\"link\":\"8_1_seldon_cases_list\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_2page_parse_link\",\"dataType\":\"link\",\"name\":\"founder1_passport_2page_parse_link\",\"id\":\"18931637757146406\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_tkb_loan_sum\",\"dataType\":\"number\",\"name\":\"Запрашиваемая у ТКБ сумма займа\",\"id\":\"18971638207443027\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tg_chat\",\"dataType\":\"link\",\"name\":\"Ссылка на ТГ чат\",\"id\":\"19081614769919099\",\"link\":\"TChat\",\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"link_user\",\"dataType\":\"link\",\"name\":\"link_user\",\"id\":\"20051617913201594\",\"link\":\"WebUser\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_company_cred_history_consent\",\"dataType\":\"file\",\"name\":\"Скан согласия на запрос КИ юрлица\",\"id\":\"20061635494973366\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_2\",\"id\":\"20121617642785998\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_hand_input\",\"dataType\":\"string\",\"name\":\"Заполнить данные паспорта вручную\",\"id\":\"20231638899256561\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_stop\",\"dataType\":\"string\",\"name\":\"affilates_courts_stop\",\"id\":\"20651616949252452\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_bankrapcy_1\",\"dataType\":\"number\",\"name\":\"affilates_bankrapcy_F1\",\"id\":\"21191617643024089\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status_2nd_stage\",\"dataType\":\"link\",\"name\":\"Статус 2 этап\",\"id\":\"21401638543027682\",\"link\":\"statuses_2nd_stage\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_massCoowner_stop\",\"dataType\":\"string\",\"name\":\"ceo_massCoowner_stop\",\"id\":\"21531637661861027\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_cred_history_UL_bki\",\"dataType\":\"string\",\"name\":\"Выгрузка КИ ЮЛ\",\"id\":\"22161629466294917\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"revenue_lasteYear\",\"dataType\":\"string\",\"name\":\"revenue_lasteYear\",\"id\":\"22731631474126844\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_contractsFinished_sum\",\"dataType\":\"number\",\"name\":\"founder1_contractsFinished_ALL_sum\",\"id\":\"22951619592333725\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_taxDue_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Долги по налогам учредитель 1\",\"id\":\"22951639677451830\",\"link\":\"dolgi_fl\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_fssp_active\",\"dataType\":\"number\",\"name\":\"affilates_fssp_active\",\"id\":\"23121616701407928\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_contract_link\",\"dataType\":\"link\",\"name\":\"Ссылка на контракт под займ\",\"id\":\"23591638207337667\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_sum_string_separated\",\"dataType\":\"string\",\"name\":\"request_sum_string_separated\",\"id\":\"24091629378568200\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Компания\",\"id\":\"24101615328068558\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_disqualificationStatus_stop\",\"dataType\":\"string\",\"name\":\"ceo_disqualificationStatus_stop\",\"id\":\"24261637661744631\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"link_requests_gpn\",\"dataType\":\"string\",\"name\":\"link_requests_gpn\",\"id\":\"24621615381028707\",\"link\":\"\",\"group\":\"1615572593280\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_email\",\"dataType\":\"string\",\"name\":\"Эмейл\",\"id\":\"24651637762401750\",\"link\":null,\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_F1\",\"id\":\"24961617642770537\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"result_isSend_TG\",\"dataType\":\"boolean\",\"name\":\"result_isSend_TG\",\"id\":\"24961619796626173\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ul_employees_forTKB_fact\",\"dataType\":\"number\",\"name\":\"ul_employees_forTKB_fact\",\"id\":\"25521637924699311\",\"link\":\"\",\"group\":\"1637399992291\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_passport_1page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"26011638708833723\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_json\",\"dataType\":\"json\",\"name\":\"founder2_json\",\"id\":\"26331615568570232\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_count_F1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_count_F1\",\"id\":\"26381637488646957\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"26411638708813690\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_recordDate_stop\",\"dataType\":\"string\",\"name\":\"ceo_recordDate_stop_6months\",\"id\":\"26441637659889904\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_status\",\"dataType\":\"link\",\"name\":\"Статус заявки\",\"id\":\"26821618985864619\",\"link\":\"kik_requests_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_contractsFinished_count_1m\",\"dataType\":\"number\",\"name\":\"founder2_contractsFinished__ALL_count100к\",\"id\":\"26861619592319330\",\"link\":\"\",\"group\":\"1637487441419\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cred_score_FL_bki\",\"dataType\":\"string\",\"name\":\"cred_score_FL_bki\",\"id\":\"26951629466389634\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_issuer\",\"dataType\":\"date\",\"name\":\"орган, выдавший паспорт\",\"id\":\"27371619035813042\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"link_founder2_fl_scoring\",\"dataType\":\"link\",\"name\":\"link_founder2_fl_scoring\",\"id\":\"27531616666577907\",\"link\":\"fl_scoring\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_sum_stop\",\"dataType\":\"string\",\"name\":\"contracts_lastYear_sum_stop\",\"id\":\"27771615309529993\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"okb_creditburo_report\",\"dataType\":\"file\",\"name\":\"Отчет ОКБ\",\"id\":\"27791638900271255\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_file\",\"dataType\":\"file\",\"name\":\"Паспорт разворот с пропиской\",\"id\":\"27891637757230132\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier\",\"dataType\":\"number\",\"name\":\"affilates_badSupplier\",\"id\":\"28071616701415658\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fssp_active_count\",\"dataType\":\"number\",\"name\":\"fssp_active_count\",\"id\":\"28201637411684148\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affiliated_copmanies_array\",\"dataType\":\"array\",\"name\":\"affiliated_copmanies_array\",\"id\":\"28261637566298044\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"founder1_stop\",\"dataType\":\"string\",\"name\":\"founder1_taxDue_stop\",\"id\":\"28281636624393637\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_founder1_persdata_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на обработку ПД поручителя 1\",\"id\":\"28771635494836156\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fl_scoring_status\",\"dataType\":\"string\",\"name\":\"Статус проверки\",\"id\":\"29011638795259743\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_foto\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"29061619035843312\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ready_for_verification\",\"dataType\":\"boolean\",\"name\":\"Корректность введенных данных для проверки ФЛ\",\"id\":\"30011637859979186\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_passport_2page_file\",\"dataType\":\"file\",\"name\":\"Паспорт разворот с пропиской\",\"id\":\"30091637756680508\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"purchase_link\",\"dataType\":\"link\",\"name\":\"Ссылка на закупку под займ\",\"id\":\"30631639206951914\",\"link\":\"6_3_purchases\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_passport_2page_status_success\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"30841638709060139\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"scoring_result\",\"dataType\":\"string\",\"name\":\"Проверка стоп-факторов для эмейл рассылки\",\"id\":\"31141615326583640\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_num\",\"dataType\":\"string\",\"name\":\"номер/серия паспорта\",\"id\":\"31201619035751898\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tkb_credit_report\",\"dataType\":\"file\",\"name\":\"tkb_credit_report\",\"id\":\"31251635316843214\",\"link\":\"\",\"group\":\"1635316815357\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_osv_58\",\"dataType\":\"file\",\"name\":\"ОСВ 58 счет\",\"id\":\"31281638816900683\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_contract_term_mo\",\"dataType\":\"number\",\"name\":\"request_contract_term_mo\",\"id\":\"31341629125617381\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"disc_to_front\",\"dataType\":\"string\",\"name\":\"Описание для фронта\",\"id\":\"31541618986305964\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courtsSum_devide_contractsOnProcess\",\"dataType\":\"decimal\",\"name\":\"courtsSum_devide_contractsOnProcess\",\"id\":\"31601637505770383\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"verification_result_text\",\"dataType\":\"string\",\"name\":\" \",\"id\":\"31911638281685268\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF2_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF2_net_income_lastYear\",\"id\":\"32401637490364521\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_name\",\"dataType\":\"string\",\"name\":\"ФИО учредитель 2\",\"id\":\"32721616333603481\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_id\",\"dataType\":\"string\",\"name\":\"ID заявки\",\"id\":\"33801639125590548\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courtsSum_Plus_aff\",\"dataType\":\"number\",\"name\":\"courtsRisk_Plus_aff\",\"id\":\"33941637505625624\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fsspSum_Plus_aff\",\"dataType\":\"number\",\"name\":\"fssp_Plus_aff\",\"id\":\"34251637505670142\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"verification_finished_date\",\"dataType\":\"date\",\"name\":\"Дата завершения андеррайтинга\",\"id\":\"34471637935419649\",\"link\":\"\",\"group\":\"1639220671976\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tkb_anketa\",\"dataType\":\"file\",\"name\":\"tkb_anketa\",\"id\":\"34611635316824859\",\"link\":\"\",\"group\":\"1635316815357\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts44_finished_qnt\",\"dataType\":\"number\",\"name\":\"contracts44_finished_qnt\",\"id\":\"34971637411596051\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_stop_factors_array\",\"dataType\":\"array\",\"name\":\"Стоп-факторы\",\"id\":\"35111637942430315\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"ceo_passport_1page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"35261638708779186\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"2nd_step_check_result\",\"dataType\":\"string\",\"name\":\"Результат 2 этап\",\"id\":\"35381638210687318\",\"link\":null,\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bubble_user_id\",\"dataType\":\"string\",\"name\":\"bubble_Scroing_Request2\",\"id\":\"35901628509165840\",\"link\":\"\",\"group\":\"1637402544308\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_email\",\"dataType\":\"string\",\"name\":\"Эмейл\",\"id\":\"36181637762366774\",\"link\":null,\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_active_1\",\"dataType\":\"number\",\"name\":\"affilates_courts_active_F1\",\"id\":\"36391617642903688\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_stop\",\"dataType\":\"string\",\"name\":\"founder2_taxDue_stop\",\"id\":\"36551636624409683\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"inn_check_link\",\"dataType\":\"string\",\"name\":\"inn_check_link\",\"id\":\"36641639402982794\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_phones_array\",\"dataType\":\"string\",\"name\":\"company_phones_array\",\"id\":\"37161637411884622\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_current_Sum_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_current_Plus_contracts_aff\",\"id\":\"37771637505478416\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_bankrapcy_2\",\"dataType\":\"number\",\"name\":\"affilates_bankrapcy_2\",\"id\":\"37961617643042780\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_is_ceo\",\"dataType\":\"boolean\",\"name\":\"Является генеральным директором\",\"id\":\"38791637838680229\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_founder2_tgInfo\",\"dataType\":\"string\",\"name\":\"founder1_founder2_tgInfo\",\"id\":\"38931631300363141\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_okved_array\",\"dataType\":\"string\",\"name\":\"company_okved_array\",\"id\":\"39161637411979167\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"addContract_operation_result\",\"dataType\":\"string\",\"name\":\" \",\"id\":\"39781639399961381\",\"link\":null,\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bad_supplier_stop\",\"dataType\":\"string\",\"name\":\"bad_supplier_stop\",\"id\":\"40001615309623326\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"transfer_to_tkb\",\"dataType\":\"boolean\",\"name\":\"Передавать в ТКБ\",\"id\":\"40071638205752928\",\"link\":\"\",\"group\":\"1635316815357\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_pers_data\",\"dataType\":\"string\",\"name\":\"Согласие на обработку перс.данных\",\"id\":\"40151628778231470\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilates_net_income_lastYear\",\"id\":\"40331637487098610\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stop_factors_front\",\"dataType\":\"string\",\"name\":\"Стоп-факторы\",\"id\":\"40441638282820478\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_fl_scoring_link\",\"dataType\":\"link\",\"name\":\"ceo_fl_scoring_link\",\"id\":\"40921637686542776\",\"link\":\"fl_scoring\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_affilatedCompanies_30percPlus\",\"dataType\":\"array\",\"name\":\"founder2_affilatedCompanies_30percPlus\",\"id\":\"41391637567276403\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"file_beneficiary_passport\",\"dataType\":\"string\",\"name\":\"Скан паспорта бенефициара\",\"id\":\"41701628778649076\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"source\",\"id\":\"42861615329015776\",\"link\":null,\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_end_date_day\",\"dataType\":\"string\",\"name\":\"contract_end_date_day\",\"id\":\"43091629128753712\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_to_lastYear_revenue\",\"dataType\":\"decimal\",\"name\":\"affilates_courts_to_lastYear_revenue\",\"id\":\"43371637487393611\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_active_count\",\"dataType\":\"number\",\"name\":\"affilates_courts_active_count\",\"id\":\"43891637487244818\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_fssp_stop\",\"dataType\":\"string\",\"name\":\"affilates_fssp_stop\",\"id\":\"43901616949269751\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF1_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF1_revenue_lastYear\",\"id\":\"43951637488756526\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_form_1_2\",\"dataType\":\"file\",\"name\":\"Бухгалтерская отчетность\",\"id\":\"44191635494996001\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_deBrain_passport_parse_1str\",\"dataType\":\"link\",\"name\":\"Данные паспорта\",\"id\":\"44671637756509725\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier_1\",\"dataType\":\"number\",\"name\":\"affilates_badSupplier_F1\",\"id\":\"45431617642980165\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF1_fssp_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF1_fssp_active_count\",\"id\":\"45541637488919412\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isMassHeadFNS\",\"dataType\":\"string\",\"name\":\"isMassHeadFNS\",\"id\":\"45741637651311907\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"karma_fee\",\"dataType\":\"number\",\"name\":\"karma_fee\",\"id\":\"46791629125635235\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_current_sum\",\"dataType\":\"number\",\"name\":\"contracts_current_sum\",\"id\":\"47421615308655979\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"date_of_verification_str\",\"dataType\":\"string\",\"name\":\"Дата заявки\",\"id\":\"47561637677738812\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"approved_APR\",\"dataType\":\"decimal\",\"name\":\"Одобренная ставка годовых\",\"id\":\"47611636451087461\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_founder2_dolgi_TG\",\"dataType\":\"array\",\"name\":\"founder1_founder2_dolgi_TG\",\"id\":\"47691619369642713\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"soglasie_persDannie\",\"dataType\":\"string\",\"name\":\"согласие на передачу персональных данных\",\"id\":\"47781619035988898\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"soglasie_Bki\",\"dataType\":\"string\",\"name\":\"согласие на запрос БКИ\",\"id\":\"49411619036028075\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_date\",\"dataType\":\"date\",\"name\":\"Дата заявки\",\"id\":\"49591618987063315\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_cred_history_sig\",\"dataType\":\"string\",\"name\":\"Согласие на запрос БКИ. ЭЦП\",\"id\":\"49601628778845466\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_courts_active_count\",\"dataType\":\"number\",\"name\":\"company_courts_active_count\",\"id\":\"49601637487195860\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_osv_67\",\"dataType\":\"file\",\"name\":\"ОСВ 67 счет\",\"id\":\"49791638817030735\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bubble_status\",\"dataType\":\"string\",\"name\":\"bubble_status\",\"id\":\"50741629363590527\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bad_supplier\",\"dataType\":\"number\",\"name\":\"bad_supplier\",\"id\":\"50901615306200181\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_osv_62\",\"dataType\":\"file\",\"name\":\"ОСВ 62 счет\",\"id\":\"50931638817051973\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_passport_2page_parse_link\",\"dataType\":\"link\",\"name\":\"founder2_passport_2page_parse_link\",\"id\":\"51071637756766920\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_active\",\"dataType\":\"number\",\"name\":\"affilates_courts_active\",\"id\":\"51451616701381065\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_disp_on_front\",\"dataType\":\"boolean\",\"name\":\"f2_disp_on_front\",\"id\":\"51651637848494483\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tg_user\",\"dataType\":\"link\",\"name\":\"ТГ Юзер\",\"id\":\"51801614767283835\",\"link\":\"TUser\",\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"cred_score_UL_bki\",\"dataType\":\"string\",\"name\":\"cred_score_UL_bki\",\"id\":\"52481629466359222\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_disqualificationStatus\",\"dataType\":\"string\",\"name\":\"ceo_disqualificationStatus\",\"id\":\"52571637412331774\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"approved_MPR\",\"dataType\":\"decimal\",\"name\":\"Одобренная ставка в мес\",\"id\":\"52751636451134250\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"newDB_check_status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"52891619711876525\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"reg_date_stop\",\"dataType\":\"string\",\"name\":\"reg_date_stop\",\"id\":\"52961637572803439\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fssp_tax\",\"dataType\":\"number\",\"name\":\"Исполнительные производства по налогам 12 мес.\",\"id\":\"52971639311627555\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_osv_66\",\"dataType\":\"file\",\"name\":\"ОСВ 66 счет\",\"id\":\"53061638817020634\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isMassHeadSeldon\",\"dataType\":\"string\",\"name\":\"isMassHeadSeldon\",\"id\":\"54141637651302617\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_affilatedCompanies_30percPlus\",\"dataType\":\"array\",\"name\":\"founder1_affilatedCompanies_30percPlus\",\"id\":\"54871637567087280\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"fsspCount_Plus_aff\",\"dataType\":\"number\",\"name\":\"fsspCount_Plus_aff\",\"id\":\"54901637505741499\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_count_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_lastYear_count_Plus_contracts_aff\",\"id\":\"55591637505570990\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founders_json_test\",\"dataType\":\"string\",\"name\":\"founders_json_null_test\",\"id\":\"55611633353758385\",\"link\":\"\",\"group\":\"1615568532385\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"55821616333612266\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts44_finished_all_sum\",\"dataType\":\"decimal\",\"name\":\"contracts44_finished_all_sum\",\"id\":\"56221634556076890\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"56361638345550170\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF1_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF1_net_income_lastYear\",\"id\":\"56451637488798888\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"net_assets\",\"dataType\":\"string\",\"name\":\"Чистые активы\",\"id\":\"56501639728317096\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"1st_stage_scoring_status\",\"dataType\":\"string\",\"name\":\" \",\"id\":\"58271639293425314\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_founder2_Stake_stop\",\"dataType\":\"string\",\"name\":\"founder1_founder2_Stake_stop\",\"id\":\"58391615309661185\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_NotReportFNS\",\"dataType\":\"string\",\"name\":\"company_NotReportFNS\",\"id\":\"58611637411824187\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"58841637412314390\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_fssp_active_2\",\"dataType\":\"number\",\"name\":\"affilates_fssp_active_2\",\"id\":\"59081617642967324\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"59451614767265195\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"loan_cost_from_contract\",\"dataType\":\"decimal\",\"name\":\"loan_cost_from_contract\",\"id\":\"60901629125710951\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_end_date_month\",\"dataType\":\"number\",\"name\":\"contract_end_date_month\",\"id\":\"61111629128742312\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ul_employees_forTKB\",\"dataType\":\"number\",\"name\":\"ul_employees_forTKB\",\"id\":\"61151637924568907\",\"link\":\"\",\"group\":\"1637399992291\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_passport_2page_status_success\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"61511638708908864\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_founder2_stake\",\"dataType\":\"number\",\"name\":\"founder1_founder2_stake\",\"id\":\"61731615573275242\",\"link\":\"\",\"group\":\"1615568532385\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fssp_stop\",\"dataType\":\"string\",\"name\":\"fssp_stop\",\"id\":\"61961615309612494\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_date\",\"dataType\":\"string\",\"name\":\"дата выдачи паспорта\",\"id\":\"61991619035776449\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courts_stop\",\"dataType\":\"string\",\"name\":\"courts_stop\",\"id\":\"62271615309588548\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_legal_form\",\"dataType\":\"string\",\"name\":\"company_legal_form_stop\",\"id\":\"62451633500675635\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founders_json\",\"dataType\":\"json\",\"name\":\"founders_json\",\"id\":\"62841615567878056\",\"link\":\"\",\"group\":\"1615568532385\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"223fz_contracts\",\"dataType\":\"arrayLink\",\"name\":\"223fz_contracts\",\"id\":\"63031634478736587\",\"link\":\"look_for_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"courts_active_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Текущие судебные дела\",\"id\":\"63311639234462712\",\"link\":\"5_2_seldon_courts_cases\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_reg_date\",\"dataType\":\"date\",\"name\":\"company_reg_date\",\"id\":\"63771637411775435\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"debt_lasteYear\",\"dataType\":\"string\",\"name\":\"debt_lasteYear\",\"id\":\"64351631474223275\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affiliated_copmanies\",\"dataType\":\"arrayLink\",\"name\":\"affiliated_copmanies_ulAnalisys\",\"id\":\"64921633501212085\",\"link\":\"ul_analysys\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_status_history\",\"dataType\":\"array\",\"name\":\"request_status_history (удалить)\",\"id\":\"65081637943008627\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"massCoowner\",\"dataType\":\"string\",\"name\":\"massCoowner\",\"id\":\"65201637651320862\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_2page_file\",\"dataType\":\"file\",\"name\":\"Паспорт разворот с пропиской\",\"id\":\"66371637757113797\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilates_revenue_lastYear\",\"id\":\"66861637487084786\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"rejected_contracts_link\",\"dataType\":\"arrayLink\",\"name\":\"Отмененные контракты 2 года\",\"id\":\"67191638433925288\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"courtsCount_Plus_aff\",\"dataType\":\"number\",\"name\":\"courtsCount_Plus_aff\",\"id\":\"67481637505721992\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_F1\",\"id\":\"68041617642799008\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"main_request_link\",\"dataType\":\"link\",\"name\":\"main_request_link\",\"id\":\"68391633504139121\",\"link\":\"scoring_request_tgbot\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_count\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_count\",\"id\":\"68641637486998049\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_stake\",\"dataType\":\"number\",\"name\":\"Доля в компании учредитель 2\",\"id\":\"68721615568917905\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_scoring_tgInfo\",\"dataType\":\"string\",\"name\":\"ceo_scoring_tgInfo\",\"id\":\"68751638435918581\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_name\",\"dataType\":\"string\",\"name\":\"ФИО учредитель 1\",\"id\":\"69811616333588416\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_contract_sum\",\"dataType\":\"number\",\"name\":\"Сумма контракта\",\"id\":\"69881638207965679\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stop_factors_persons\",\"dataType\":\"boolean\",\"name\":\"Стоп-факторы\",\"id\":\"70141637942504135\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF2_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF2_revenue_lastYear\",\"id\":\"70741637490340743\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"bankruptcy\",\"dataType\":\"number\",\"name\":\"bankruptcy messages\",\"id\":\"70841615306222455\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"inn_length\",\"dataType\":\"number\",\"name\":\"Длина ИНН\",\"id\":\"71051614769408307\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tgUser_name\",\"dataType\":\"string\",\"name\":\"tgUser_name\",\"id\":\"71311620811321031\",\"link\":null,\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess\",\"id\":\"71551616701312169\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M\",\"id\":\"72031616701358703\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_passport_hand_input\",\"dataType\":\"string\",\"name\":\"Заполнить данные паспорта вручную\",\"id\":\"72231638899438216\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_passport_1page_parse_link\",\"dataType\":\"link\",\"name\":\"Данные паспорта\",\"id\":\"72361637757074262\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_parse_link\",\"dataType\":\"link\",\"name\":\"ceo_passport_2page_parse_link\",\"id\":\"72891637757288880\",\"link\":\"dbrain_passports_check\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_sites_array\",\"dataType\":\"string\",\"name\":\"company_sites_array\",\"id\":\"72981637411904875\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_stake\",\"dataType\":\"number\",\"name\":\"Доля в компании учредитель 1\",\"id\":\"73481615568909612\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_phone\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"73531637762410972\",\"link\":null,\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_stop_factors_array\",\"dataType\":\"array\",\"name\":\"Стоп-факторы\",\"id\":\"74131637942404270\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"fssp_active\",\"dataType\":\"number\",\"name\":\"fssp_active_sum\",\"id\":\"74631615306175574\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_stop_factors_array\",\"dataType\":\"array\",\"name\":\"Стоп-факторы\",\"id\":\"74961637942338248\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"founder1_json\",\"dataType\":\"json\",\"name\":\"founder1_json\",\"id\":\"75141615568550421\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_accept_pers_data_founder1\",\"dataType\":\"string\",\"name\":\"Согласие на ПД от Беника1\",\"id\":\"75371631631544470\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"mailto_directual\",\"dataType\":\"string\",\"name\":\"mailto_directual\",\"id\":\"75391629470333919\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"max_term_mo\",\"dataType\":\"number\",\"name\":\"max_term_mo\",\"id\":\"75421629125622914\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_phone\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"75611637762375558\",\"link\":null,\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_count_F1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_count_F1\",\"id\":\"75941637488550122\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"approved_sum\",\"dataType\":\"number\",\"name\":\"Одобренная сумма займа\",\"id\":\"75981636451053113\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF2_fssp_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF2_fssp_active_count\",\"id\":\"76011637490151140\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_term\",\"dataType\":\"number\",\"name\":\"Ожидаемый срок кредита\",\"id\":\"76431636451183068\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_sum\",\"dataType\":\"number\",\"name\":\"contracts_lastYear_sum\",\"id\":\"76721615305960960\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tkb_requests_link\",\"dataType\":\"link\",\"name\":\"tkb_requests_link\",\"id\":\"77001638206802791\",\"link\":\"requests_for_loans_kik_1_10m\",\"group\":\"1635316815357\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_founder2_passport\",\"dataType\":\"file\",\"name\":\"Паспорт основной разворот или несколько станиц\",\"id\":\"77481635494955482\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier_stop\",\"dataType\":\"string\",\"name\":\"affilates_badSupplier_stop\",\"id\":\"77591616949293970\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"link_founder1_fl_scoring\",\"dataType\":\"link\",\"name\":\"link_founder1_fl_scoring\",\"id\":\"78321616666592749\",\"link\":\"fl_scoring\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"credit_limit\",\"dataType\":\"number\",\"name\":\"Кредитный лимит max\",\"id\":\"78461636017393639\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_ALL\",\"dataType\":\"decimal\",\"name\":\"affilates_contracts_finished_ALL\",\"id\":\"78801637489078131\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_51acc_report\",\"dataType\":\"file\",\"name\":\"Карточка 51 счета\",\"id\":\"79091638816819060\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_tgInfo\",\"dataType\":\"string\",\"name\":\"founder1_tgInfo\",\"id\":\"79391631299594735\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts44_onProcess_qnt\",\"dataType\":\"number\",\"name\":\"contracts44_onProcess_qnt\",\"id\":\"80771634556118813\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_recordDate\",\"dataType\":\"date\",\"name\":\"ceo_recordDate\",\"id\":\"81351637412323165\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_taxDue_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Долги по налогам учредитель 2\",\"id\":\"81491639677547506\",\"link\":\"dolgi_fl\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":36,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"ulanalis_link\",\"dataType\":\"link\",\"name\":\"Ссылка на базу анализа ЮЛ \",\"id\":\"81541614770111873\",\"link\":\"ul_analysys\",\"group\":\"1637399992291\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_is_ceo\",\"dataType\":\"boolean\",\"name\":\"Является генеральным директором\",\"id\":\"82041637838436048\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"link_massScoring\",\"dataType\":\"string\",\"name\":\"link_massScoring\",\"id\":\"82121615386191476\",\"link\":\"\",\"group\":\"1615572593280\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"scoring_errors\",\"dataType\":\"array\",\"name\":\"Ошибки при проверке\",\"id\":\"82391638433227333\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"date_of_verification\",\"dataType\":\"date\",\"name\":\"Дата заявки\",\"id\":\"82671637572228767\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ogrn\",\"dataType\":\"string\",\"name\":\"ogrn\",\"id\":\"82681637676541032\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_HasDebtFNS_stop\",\"dataType\":\"string\",\"name\":\"company_HasDebtFNS_stop\",\"id\":\"82951637661792053\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_inn\",\"dataType\":\"string\",\"name\":\"founder2_inn\",\"id\":\"83491616333620078\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stop_factors_array\",\"dataType\":\"array\",\"name\":\"stop_factors_array\",\"id\":\"83551636629851082\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"company_emails_array\",\"dataType\":\"string\",\"name\":\"company_emails_array\",\"id\":\"83581637411864419\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_contract_buyer\",\"dataType\":\"string\",\"name\":\"Заказчик\",\"id\":\"83631638207480382\",\"link\":null,\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_NotReportFNS_stop\",\"dataType\":\"string\",\"name\":\"company_NotReportFNS_stop\",\"id\":\"84161637661709579\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_founder2_Stake\",\"dataType\":\"number\",\"name\":\"НЕ ИСПОЛЬЗОВАТЬ!\",\"id\":\"84171615306238000\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"verification_finished_date_str\",\"dataType\":\"string\",\"name\":\"Дата завершения андеррайтинга\",\"id\":\"84961637935483930\",\"link\":\"\",\"group\":\"1639220671976\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_to_currentContracts\",\"dataType\":\"decimal\",\"name\":\"affilates_courts_to_currentContracts\",\"id\":\"85081637487268092\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"purchase_contract_num\",\"dataType\":\"string\",\"name\":\"purchase_contract_num\",\"id\":\"85101639220036375\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isAffilatedCompanyScoring\",\"dataType\":\"boolean\",\"name\":\"isAffilatedCompanyScoring (удалить)\",\"id\":\"85521617031440970\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_status_success\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"85561638708961087\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_count_F2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_count_F2\",\"id\":\"85811637488612819\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"nbki_creditburo_report\",\"dataType\":\"file\",\"name\":\"Отчет НБКИ\",\"id\":\"85961638900313182\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilatesF1_courts_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF1_courts_active_count\",\"id\":\"86161637488883362\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_address\",\"dataType\":\"string\",\"name\":\"company_address\",\"id\":\"86271637411769316\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"verification_result_text2\",\"dataType\":\"string\",\"name\":\"Результат проверки\",\"id\":\"86301638283259404\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"loan_cost_from_loan\",\"dataType\":\"decimal\",\"name\":\"loan_cost_from_loan\",\"id\":\"86491629125681914\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_bankruptcy_alert\",\"dataType\":\"string\",\"name\":\"affilates_bankruptcy_stop\",\"id\":\"86601617552110402\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_founder2_cred_history_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на запрос КИ поручителя 2\",\"id\":\"86861635494941092\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_regDate_stop\",\"dataType\":\"string\",\"name\":\"founder1_regDate_stop\",\"id\":\"86921637572823406\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"percent_to_pay\",\"dataType\":\"number\",\"name\":\"percent_to_pay\",\"id\":\"87131629125664389\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"link_GasContract\",\"dataType\":\"link\",\"name\":\"link_GasContract\",\"id\":\"87181615572602843\",\"link\":\"GasContract\",\"group\":\"1615572593280\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"profit_lasteYear\",\"dataType\":\"string\",\"name\":\"profit_lasteYear\",\"id\":\"88141631474204216\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_massHead\",\"dataType\":\"string\",\"name\":\"ceo_massHead\",\"id\":\"88211637651291032\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"loan_contract\",\"dataType\":\"string\",\"name\":\"Контракт для финансирования (удалить)\",\"id\":\"88361638546128308\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_fssp_count\",\"dataType\":\"number\",\"name\":\"affilates_fssp_count\",\"id\":\"88551637486970921\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"passport_user\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"88651619023702760\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_tgInfo\",\"dataType\":\"string\",\"name\":\"founder2_tgInfo\",\"id\":\"88771631299608516\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_sum\",\"dataType\":\"number\",\"name\":\"Сумма запрошенного займа\",\"id\":\"88801629096458022\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_1page_file\",\"dataType\":\"file\",\"name\":\"Паспорт основной разворот или несколько станиц\",\"id\":\"89231637757206387\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"front_request_link\",\"dataType\":\"link\",\"name\":\"front_request_link\",\"id\":\"89321639221152526\",\"link\":\"look_for_contracts\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_courts_to_lastYear_revenue\",\"dataType\":\"decimal\",\"name\":\"company_courts_to_lastYear_revenue\",\"id\":\"89481637487358412\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"fssp_closed_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Завершенные исполнительные производства\",\"id\":\"89631639311549729\",\"link\":\"8_1_seldon_cases_list\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"finished_contracts_link\",\"dataType\":\"arrayLink\",\"name\":\"Завершенные контракты 2 года\",\"id\":\"89791638347060068\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_name\",\"dataType\":\"string\",\"name\":\"ФИО генеральный директор\",\"id\":\"90081637412292133\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contract_end_date_year\",\"dataType\":\"number\",\"name\":\"contract_end_date_year\",\"id\":\"90111629128730811\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_contract_url\",\"dataType\":\"string\",\"name\":\"request_contract_url\",\"id\":\"90701629096471245\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"approved_term\",\"dataType\":\"number\",\"name\":\"Одобренный срок займа в мес\",\"id\":\"91661636451068994\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_passport_1page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"92181638709026065\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder1_contractsFinished_count_1m\",\"dataType\":\"number\",\"name\":\"founder1_contractsFinished_ALL_count100к\",\"id\":\"92971619592251815\",\"link\":\"\",\"group\":\"1637487441419\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"newDB_founder2_check_status\",\"dataType\":\"string\",\"name\":\"newDB_founder2_check_status\",\"id\":\"92981619711951008\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"request_contract_end_date\",\"dataType\":\"number\",\"name\":\"request_contract_end_date\",\"id\":\"94011629096485355\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courts_closed_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Завершенные судебные дела\",\"id\":\"94071639234503811\",\"link\":\"5_2_seldon_courts_cases\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_scoring_tgInfo\",\"dataType\":\"string\",\"name\":\"f2_scoring_tgInfo\",\"id\":\"94111638435902771\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_employeesFNS\",\"dataType\":\"string\",\"name\":\"company_employeesFNS\",\"id\":\"94181637411815099\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_passport_2page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"94451638709034118\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"current_contracts_link\",\"dataType\":\"arrayLink\",\"name\":\"Текущие контракты\",\"id\":\"94711638342955962\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier_2\",\"dataType\":\"number\",\"name\":\"affilates_badSupplier_2\",\"id\":\"94841617643008238\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_count\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_count\",\"id\":\"94841637487029829\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f2_passport_hand_input\",\"dataType\":\"string\",\"name\":\"Заполнить данные паспорта вручную\",\"id\":\"94861638899460880\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"company_net_income_lastYear\",\"id\":\"95091637412370243\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_passport_2page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"95261638708845803\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_passport_1page_parse_link\",\"dataType\":\"link\",\"name\":\"Данные паспорта\",\"id\":\"95281637757249759\",\"link\":\"dbrain_passports_check\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_okved_main\",\"dataType\":\"string\",\"name\":\"company_okved_main\",\"id\":\"95701637412872207\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"2nd_step_addcontract_success_error\",\"dataType\":\"string\",\"name\":\"Результат\",\"id\":\"95721638816210367\",\"link\":null,\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_2\",\"id\":\"95841617642839408\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"ceo_massHead_stop\",\"dataType\":\"string\",\"name\":\"ceo_massHead\",\"id\":\"96011637661829987\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_status_stop\",\"dataType\":\"string\",\"name\":\"company_status_stop\",\"id\":\"96201622212091176\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_courts_to_currentContracts\",\"dataType\":\"decimal\",\"name\":\"company_courts_to_currentContracts\",\"id\":\"96211637487337696\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_founder2_persdata_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на обработку ПД поручителя 2\",\"id\":\"96441635494923300\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"f1_scoring_tgInfo\",\"dataType\":\"string\",\"name\":\"f1_scoring_tgInfo\",\"id\":\"96441638435864095\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_lastYear_Plus_contracts_aff\",\"id\":\"96731631453056084\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"founder2_date\",\"dataType\":\"date\",\"name\":\"founder2_date\",\"id\":\"97801619588363357\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_bankrapcy\",\"dataType\":\"number\",\"name\":\"affilates_bankrapcy\",\"id\":\"98641616701433777\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"company_revenue_lastYear\",\"id\":\"98871637412360715\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"scor_Result\",\"dataType\":\"string\",\"name\":\"Результат проверки\",\"id\":\"98931616950347813\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_osv_60\",\"dataType\":\"file\",\"name\":\"ОСВ 60 счет\",\"id\":\"99481638817037528\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"courts_active\",\"dataType\":\"number\",\"name\":\"courts_active\",\"id\":\"99521615306135268\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_founder1_passport\",\"dataType\":\"file\",\"name\":\"Паспорт основной разворот или несколько станиц\",\"id\":\"99531635494902371\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"affilates_courts_active_2\",\"dataType\":\"number\",\"name\":\"affilates_courts_active_2\",\"id\":\"99651617642920101\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_cred_history_FL_bki\",\"dataType\":\"string\",\"name\":\"Выгрузка КИ ФЛ\",\"id\":\"99671629466324332\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"file_founder1_cred_history_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на запрос КИ поручителя 1\",\"id\":\"99801635494872457\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Контракты\",\"id\":1638688560441,\"order\":2},{\"name\":\"Request source/contacts\",\"id\":1637402544308,\"order\":16},{\"name\":\"New Group 16\",\"id\":1637685839307,\"order\":4},{\"name\":\"Сводный результат аффилированные компании\",\"id\":1637403982889,\"order\":8},{\"name\":\"ссылки\",\"id\":1615572593280,\"order\":18},{\"name\":\"Учредители\",\"id\":1615568532385,\"order\":14},{\"name\":\"founder 2\",\"id\":1617642741592,\"order\":11},{\"name\":\"main UL + aff. campanies\",\"id\":1637505341738,\"order\":9},{\"name\":\"founder 1\",\"id\":1617642712846,\"order\":10},{\"name\":\"New Group 20\",\"id\":1639231449924,\"order\":0},{\"name\":\"3й этап андеррайтинг\",\"id\":1639220671976,\"order\":1},{\"name\":\"UL Info\",\"id\":1637399992291,\"order\":5},{\"name\":\"Удалить\",\"id\":1637397537360,\"order\":19},{\"name\":\"Генеральный директор\",\"id\":1637685688438,\"order\":7},{\"name\":\"TKB\",\"id\":1635316815357,\"order\":17},{\"name\":\"TG fields\",\"id\":1631474118117,\"order\":15},{\"name\":\"Стоп-Факторы Чек Лист\",\"id\":1615309515999,\"order\":12},{\"name\":\"ScorResults UL data\",\"id\":1637410768588,\"order\":6},{\"name\":\"удалить2\",\"id\":1637487441419,\"order\":13},{\"name\":\"Второй этап доп. проверка\",\"id\":1639206012090,\"order\":3}]",
                "jsonViewIdSettings": "[{\"sysName\":\"company_name\"},{\"sysName\":\"id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-17T08:05:52Z",
                "createBy": 4798,
                "changedBy": 4798,
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
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33607201
            },
            "99055927": {
                "id": 99055927,
                "dateCreated": "2021-12-13T13:50:40Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 4355,
                "name": "4 этап. Предложение заёмщикам",
                "sysName": "4_stage_offers_payments",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"ID\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"10131639406091671\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payments_link\",\"dataType\":\"link\",\"name\":\"payments_link\",\"id\":\"11151639404028290\",\"link\":\"4_2_payments_cloudpayments\",\"group\":\"1639403909672\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"underrating_link\",\"dataType\":\"link\",\"name\":\"underrating_link\",\"id\":\"15081639410515779\",\"link\":\"vertification\",\"group\":\"1639403909672\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"email_send_date\",\"dataType\":\"date\",\"name\":\"Дата отправки эмейла\",\"id\":\"17941639410299451\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_color\",\"dataType\":\"string\",\"name\":\"payment_color\",\"id\":\"23961639718760502\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Название компании\",\"id\":\"24331639406110698\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_text\",\"dataType\":\"string\",\"name\":\"Офер\",\"id\":\"44141639403468400\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_status\",\"dataType\":\"link\",\"name\":\"Статус оплаты\",\"id\":\"46131639403829927\",\"link\":\"4_stage_payment_status\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_id\",\"dataType\":\"string\",\"name\":\"ID платежа\",\"id\":\"60191639641813114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"requestID_link\",\"dataType\":\"link\",\"name\":\"ID заявки\",\"id\":\"64301639406053197\",\"link\":\"scoring_request_tgbot\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_sum\",\"dataType\":\"number\",\"name\":\"Сумма оплаты\",\"id\":\"67961639403853161\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_webLink\",\"dataType\":\"string\",\"name\":\"Ссылка на страницу с оплатой\",\"id\":\"76831639403924581\",\"link\":\"\",\"group\":\"1639403909672\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_date\",\"dataType\":\"date\",\"name\":\"Дата\",\"id\":\"82591639403449086\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_date\",\"dataType\":\"date\",\"name\":\"Дата оплаты\",\"id\":\"93341639403865328\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"clients_email\",\"dataType\":\"string\",\"name\":\"Эмейл клиента\",\"id\":\"97771639403501712\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1639403909672,\"name\":\"offer_params\",\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"company_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-17T05:48:35Z",
                "createBy": 4798,
                "changedBy": 4798,
                "_settings": null,
                "_nativeIndexSettings": null,
                "objectIDSysName": "id",
                "innerIDField": {
                    "sysName": "id",
                    "dataType": "id",
                    "name": "ID",
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
                    "typeVariable": {},
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33638913
            },
            "99056814": {
                "id": 99056814,
                "dateCreated": "2021-12-17T05:43:31Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 4355,
                "name": "Статусы оплаты по оферу",
                "sysName": "4_stage_payment_status",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"64771639719820213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status_color\",\"dataType\":\"string\",\"name\":\"status_color\",\"id\":\"97901639719913038\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-17T05:48:41Z",
                "createBy": 4798,
                "changedBy": 4798,
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
                    "arrayLink": false,
                    "json": false,
                    "typeVariable": {},
                    "linkType": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": 33673948
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "id",
                "dataType": "id",
                "name": "ID",
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
                "typeVariable": {},
                "linkType": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "payment_status",
                "dataType": "link",
                "name": "Статус оплаты",
                "id": "46131639403829927",
                "link": "4_stage_payment_status",
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
                "typeVariable": {},
                "linkType": true,
                "linkOrArrayLinkType": true,
                "indexExists": false,
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
        "sl": "getOrdersToDelivery",
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
                        "fieldSysName": "CheckStatusErrorCode",
                        "fetch": [],
                        "sysName": "CheckStatusErrorCode",
                        "name": "errorCode",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "CheckStatusErrorMessage",
                        "fetch": [],
                        "sysName": "CheckStatusErrorMessage",
                        "name": "errorMessage",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approveStatus",
                        "fetch": [],
                        "sysName": "approveStatus",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approveStatusText",
                        "fetch": [],
                        "sysName": "approveStatusText",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approvedCost",
                        "fetch": [],
                        "sysName": "approvedCost",
                        "name": "Стоимость подтвер.",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approvedNumber",
                        "fetch": [],
                        "sysName": "approvedNumber",
                        "name": "Количество согласованных позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
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
                        "fieldSysName": "checkStatusResponse",
                        "fetch": [],
                        "sysName": "checkStatusResponse",
                        "name": "checkStatusResponse",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "cost",
                        "fetch": [],
                        "sysName": "cost",
                        "name": "Стоимость заказа",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "customer",
                        "fetch": [],
                        "sysName": "customer",
                        "name": "Покупатель",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "delivery",
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
                        "sysName": "delivery",
                        "name": "Доставка",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "delivery"
                    },
                    {
                        "fieldSysName": "errorCode",
                        "fetch": [],
                        "sysName": "errorCode",
                        "name": "Error code",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "errorMessage",
                        "fetch": [],
                        "sysName": "errorMessage",
                        "name": "Error message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "finishPaymentErrorCode",
                        "fetch": [],
                        "sysName": "finishPaymentErrorCode",
                        "name": "finishPaymentErrorCode",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "finishPaymentErrorMessage",
                        "fetch": [],
                        "sysName": "finishPaymentErrorMessage",
                        "name": "finishPaymentErrorMessage",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "finishPaymentResponse",
                        "fetch": [],
                        "sysName": "finishPaymentResponse",
                        "name": "finishPaymentResponse",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                                "fieldSysName": "agreedAction",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "brandID",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "brandName",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
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
                                "fieldSysName": "customer",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "deliveryNumber",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "good",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "goodsDescription_id",
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
                                "fieldSysName": "id",
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
                                        "fieldSysName": "status",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "userStatus",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
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
                        "fieldSysName": "itemsNumber",
                        "fetch": [],
                        "sysName": "itemsNumber",
                        "name": "Количество позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "notApprovedNumber",
                        "fetch": [],
                        "sysName": "notApprovedNumber",
                        "name": "Количество несогласованных позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                    },
                    {
                        "fieldSysName": "paymentURL",
                        "fetch": [],
                        "sysName": "paymentURL",
                        "name": "paymentURL",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "registrationResponse",
                        "fetch": [],
                        "sysName": "registrationResponse",
                        "name": "Registration response",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "returnURL",
                        "fetch": [],
                        "sysName": "returnURL",
                        "name": "returnURL",
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
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "CheckStatusErrorCode": {
                        "id": "CheckStatusErrorCode",
                        "content": "errorCode",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "CheckStatusErrorMessage": {
                        "id": "CheckStatusErrorMessage",
                        "content": "errorMessage",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "approveStatus": {
                        "id": "approveStatus",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "approveStatusText": {
                        "id": "approveStatusText",
                        "content": "",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "approvedCost": {
                        "id": "approvedCost",
                        "content": "Стоимость подтвер.",
                        "type": "field",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "approvedNumber": {
                        "id": "approvedNumber",
                        "content": "Количество согласованных позиций",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
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
                    "checkStatusResponse": {
                        "id": "checkStatusResponse",
                        "content": "checkStatusResponse",
                        "type": "field",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "cost": {
                        "id": "cost",
                        "content": "Стоимость заказа",
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
                    "delivery": {
                        "id": "delivery",
                        "content": "Доставка",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "delivery",
                        "actions": []
                    },
                    "errorCode": {
                        "id": "errorCode",
                        "content": "Error code",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "errorMessage": {
                        "id": "errorMessage",
                        "content": "Error message",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "finishPaymentErrorCode": {
                        "id": "finishPaymentErrorCode",
                        "content": "finishPaymentErrorCode",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "finishPaymentErrorMessage": {
                        "id": "finishPaymentErrorMessage",
                        "content": "finishPaymentErrorMessage",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "finishPaymentResponse": {
                        "id": "finishPaymentResponse",
                        "content": "finishPaymentResponse",
                        "type": "field",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
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
                        "actions": [
                            {
                                "sysName": "enterDeliveryNum",
                                "id": "88401632207650438",
                                "name": "Enter Deliver Number",
                                "displayAs": "form",
                                "callFrom": "linked",
                                "callFromField": "good",
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
                                            "fieldSysName": "deliveryNumber",
                                            "fetch": [],
                                            "sysName": "deliveryNumber",
                                            "name": "Номер доставки",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": null
                                        },
                                        {
                                            "fieldSysName": "good",
                                            "fetch": [],
                                            "sysName": "good",
                                            "name": "Товар",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "goodSpecification"
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
                                            "fieldSysName": "order",
                                            "fetch": [],
                                            "sysName": "order",
                                            "name": "Заказ",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "orders"
                                        },
                                        {
                                            "fieldSysName": "orderStatus",
                                            "fetch": [],
                                            "sysName": "orderStatus",
                                            "name": "Статус заказа",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "orderStatuses"
                                        },
                                        {
                                            "fieldSysName": "status",
                                            "fetch": [],
                                            "sysName": "status",
                                            "name": "Статус",
                                            "dataType": "link",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": "orderStatuses"
                                        }
                                    ]
                                },
                                "formFields": [
                                    {
                                        "id": "25741632207700698",
                                        "field": {
                                            "fieldSysName": "deliveryNumber",
                                            "fetch": [],
                                            "sysName": "deliveryNumber",
                                            "name": "Номер доставки",
                                            "dataType": "string",
                                            "format": "",
                                            "formatOptions": {},
                                            "link": null
                                        }
                                    }
                                ],
                                "formMapping": [
                                    {
                                        "id": "24331632207708264",
                                        "target": "id",
                                        "type": "linkedField",
                                        "value": "id"
                                    },
                                    {
                                        "id": "39451633080607965",
                                        "target": "status",
                                        "type": "const",
                                        "value": "withConsignmentNote"
                                    },
                                    {
                                        "id": "33181633692047504",
                                        "target": "orderStatus",
                                        "type": "const",
                                        "value": "withConsignmentNote"
                                    }
                                ],
                                "buttonTitle": "Отправить",
                                "conditionals": [],
                                "buttonIcon": "cube",
                                "buttonType": "accent",
                                "closePopup": true,
                                "showMessage": false
                            }
                        ]
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
                    "itemsNumber": {
                        "id": "itemsNumber",
                        "content": "Количество позиций",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "notApprovedNumber": {
                        "id": "notApprovedNumber",
                        "content": "Количество несогласованных позиций",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
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
                    },
                    "paymentURL": {
                        "id": "paymentURL",
                        "content": "paymentURL",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "registrationResponse": {
                        "id": "registrationResponse",
                        "content": "Registration response",
                        "type": "field",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "returnURL": {
                        "id": "returnURL",
                        "content": "returnURL",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "action__88401632207650438": {
                        "content": "Enter Deliver Number",
                        "id": "action__88401632207650438",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "CheckStatusErrorCode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "CheckStatusErrorMessage": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "approveStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "approveStatusText": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "approvedCost": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "approvedNumber": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bankOrderID": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "checkStatusResponse": {
                        "include": false,
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
                        "clickable": false
                    },
                    "errorCode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "errorMessage": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "finishPaymentErrorCode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "finishPaymentErrorMessage": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "finishPaymentResponse": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
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
                                "agreedAction": {
                                    "id": "agreedAction",
                                    "content": "Выбери согласование",
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
                                            "Согласован",
                                            "Не согласован"
                                        ],
                                        "validWeekDays": {
                                            "mon": true,
                                            "thu": true,
                                            "tue": true,
                                            "sun": true,
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
                                "brandID": {
                                    "id": "brandID",
                                    "content": "Бренд",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
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
                                "customer": {
                                    "id": "customer",
                                    "content": "Покупатель",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "deliveryNumber": {
                                    "id": "deliveryNumber",
                                    "content": "Номер доставки",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
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
                                "good": {
                                    "id": "good",
                                    "content": "Товар",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "goodsDescription_id": {
                                    "id": "goodsDescription_id",
                                    "content": "Модель товара",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
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
                                },
                                "status": {
                                    "id": "status",
                                    "content": "Статус",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "action__88401632207650438": {
                                    "id": "action__88401632207650438",
                                    "content": "Enter Deliver Number",
                                    "type": "action"
                                }
                            },
                            "fieldParams": {
                                "@dateChanged": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "@dateCreated": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "@who": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "agreed": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "agreedAction": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "brandID": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "brandName": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "colorName": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "customer": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "deliveryNumber": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200,
                                    "displayAsHint": true,
                                    "hintType": "ok"
                                },
                                "description": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "good": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "goodsDescription_id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "isNew": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "isSale": {
                                    "include": false,
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
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "order": {
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
                                },
                                "status": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "action__88401632207650438",
                                "deliveryNumber",
                                "@dateChanged",
                                "@dateCreated",
                                "@who",
                                "status",
                                "agreed",
                                "agreedAction",
                                "photo",
                                "order",
                                "name",
                                "brandID",
                                "customer",
                                "goodsDescription_id",
                                "good",
                                "price",
                                "quantity",
                                "itemCost",
                                "brandName",
                                "colorName",
                                "description",
                                null,
                                "id",
                                "isNew",
                                "isSale",
                                "oldPrice"
                            ]
                        },
                        "veiwOption": "cart",
                        "cartView": {
                            "image": true,
                            "imageField": "photo",
                            "title": true,
                            "titleField": "name",
                            "price": true,
                            "priceField": "price",
                            "priceUnits": "₽",
                            "quantity": true,
                            "quantityField": "quantity"
                        }
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "itemsNumber": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "notApprovedNumber": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
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
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paymentURL": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "registrationResponse": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "returnURL": {
                        "include": false,
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
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "New section",
                        "fieldIds": [
                            "CheckStatusErrorCode",
                            "CheckStatusErrorMessage",
                            "approveStatus",
                            "approveStatusText",
                            "approvedNumber",
                            "bankOrderID",
                            "checkStatusResponse",
                            "errorCode",
                            "errorMessage",
                            "finishPaymentErrorCode",
                            "finishPaymentErrorMessage",
                            "finishPaymentResponse",
                            "orderNumber",
                            "customer",
                            "cost",
                            "approvedCost",
                            "good",
                            "id",
                            "itemsNumber",
                            "orderStatus",
                            "notApprovedNumber",
                            "paymentStatus",
                            "paymentURL",
                            "registrationResponse",
                            "returnURL",
                            "delivery"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": [
                    {
                        "sysName": "enterDeliveryNum",
                        "id": "88401632207650438",
                        "name": "Enter Deliver Number",
                        "displayAs": "form",
                        "callFrom": "linked",
                        "callFromField": "good",
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
                                    "fieldSysName": "deliveryNumber",
                                    "fetch": [],
                                    "sysName": "deliveryNumber",
                                    "name": "Номер доставки",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                },
                                {
                                    "fieldSysName": "good",
                                    "fetch": [],
                                    "sysName": "good",
                                    "name": "Товар",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "goodSpecification"
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
                                    "fieldSysName": "order",
                                    "fetch": [],
                                    "sysName": "order",
                                    "name": "Заказ",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "orders"
                                },
                                {
                                    "fieldSysName": "orderStatus",
                                    "fetch": [],
                                    "sysName": "orderStatus",
                                    "name": "Статус заказа",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "orderStatuses"
                                },
                                {
                                    "fieldSysName": "status",
                                    "fetch": [],
                                    "sysName": "status",
                                    "name": "Статус",
                                    "dataType": "link",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": "orderStatuses"
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "25741632207700698",
                                "field": {
                                    "fieldSysName": "deliveryNumber",
                                    "fetch": [],
                                    "sysName": "deliveryNumber",
                                    "name": "Номер доставки",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": null
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "24331632207708264",
                                "target": "id",
                                "type": "linkedField",
                                "value": "id"
                            },
                            {
                                "id": "39451633080607965",
                                "target": "status",
                                "type": "const",
                                "value": "withConsignmentNote"
                            },
                            {
                                "id": "33181633692047504",
                                "target": "orderStatus",
                                "type": "const",
                                "value": "withConsignmentNote"
                            }
                        ],
                        "buttonTitle": "Отправить",
                        "conditionals": [],
                        "buttonIcon": "cube",
                        "buttonType": "accent",
                        "closePopup": true,
                        "showMessage": false
                    }
                ]
            },
            "fields": {
                "CheckStatusErrorCode": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "CheckStatusErrorMessage": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "approveStatus": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "approveStatusText": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "approvedCost": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "approvedNumber": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bankOrderID": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "checkStatusResponse": {
                    "include": false,
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
                    "clickable": false
                },
                "errorCode": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "errorMessage": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "finishPaymentErrorCode": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "finishPaymentErrorMessage": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "finishPaymentResponse": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
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
                            "agreedAction": {
                                "id": "agreedAction",
                                "content": "Выбери согласование",
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
                                        "Согласован",
                                        "Не согласован"
                                    ],
                                    "validWeekDays": {
                                        "mon": true,
                                        "thu": true,
                                        "tue": true,
                                        "sun": true,
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
                            "brandID": {
                                "id": "brandID",
                                "content": "Бренд",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
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
                            "customer": {
                                "id": "customer",
                                "content": "Покупатель",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "deliveryNumber": {
                                "id": "deliveryNumber",
                                "content": "Номер доставки",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
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
                            "good": {
                                "id": "good",
                                "content": "Товар",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "goodsDescription_id": {
                                "id": "goodsDescription_id",
                                "content": "Модель товара",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
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
                            },
                            "status": {
                                "id": "status",
                                "content": "Статус",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "action__88401632207650438": {
                                "id": "action__88401632207650438",
                                "content": "Enter Deliver Number",
                                "type": "action"
                            }
                        },
                        "fieldParams": {
                            "@dateChanged": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "@dateCreated": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "@who": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "agreed": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "agreedAction": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "brandID": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "brandName": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "colorName": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "customer": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "deliveryNumber": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200,
                                "displayAsHint": true,
                                "hintType": "ok"
                            },
                            "description": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "good": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "goodsDescription_id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "isNew": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "isSale": {
                                "include": false,
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
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "order": {
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
                            },
                            "status": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "action__88401632207650438",
                            "deliveryNumber",
                            "@dateChanged",
                            "@dateCreated",
                            "@who",
                            "status",
                            "agreed",
                            "agreedAction",
                            "photo",
                            "order",
                            "name",
                            "brandID",
                            "customer",
                            "goodsDescription_id",
                            "good",
                            "price",
                            "quantity",
                            "itemCost",
                            "brandName",
                            "colorName",
                            "description",
                            null,
                            "id",
                            "isNew",
                            "isSale",
                            "oldPrice"
                        ]
                    },
                    "veiwOption": "cart",
                    "cartView": {
                        "image": true,
                        "imageField": "photo",
                        "title": true,
                        "titleField": "name",
                        "price": true,
                        "priceField": "price",
                        "priceUnits": "₽",
                        "quantity": true,
                        "quantityField": "quantity"
                    }
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "itemsNumber": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "notApprovedNumber": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
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
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paymentURL": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "registrationResponse": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "returnURL": {
                    "include": false,
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
                }
            },
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "CheckStatusErrorCode",
                        "fetch": [],
                        "sysName": "CheckStatusErrorCode",
                        "name": "errorCode",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "CheckStatusErrorMessage",
                        "fetch": [],
                        "sysName": "CheckStatusErrorMessage",
                        "name": "errorMessage",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approveStatus",
                        "fetch": [],
                        "sysName": "approveStatus",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approveStatusText",
                        "fetch": [],
                        "sysName": "approveStatusText",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approvedCost",
                        "fetch": [],
                        "sysName": "approvedCost",
                        "name": "Стоимость подтвер.",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "approvedNumber",
                        "fetch": [],
                        "sysName": "approvedNumber",
                        "name": "Количество согласованных позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
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
                        "fieldSysName": "checkStatusResponse",
                        "fetch": [],
                        "sysName": "checkStatusResponse",
                        "name": "checkStatusResponse",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "cost",
                        "fetch": [],
                        "sysName": "cost",
                        "name": "Стоимость заказа",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "customer",
                        "fetch": [],
                        "sysName": "customer",
                        "name": "Покупатель",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "delivery",
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
                        "sysName": "delivery",
                        "name": "Доставка",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "delivery"
                    },
                    {
                        "fieldSysName": "errorCode",
                        "fetch": [],
                        "sysName": "errorCode",
                        "name": "Error code",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "errorMessage",
                        "fetch": [],
                        "sysName": "errorMessage",
                        "name": "Error message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "finishPaymentErrorCode",
                        "fetch": [],
                        "sysName": "finishPaymentErrorCode",
                        "name": "finishPaymentErrorCode",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "finishPaymentErrorMessage",
                        "fetch": [],
                        "sysName": "finishPaymentErrorMessage",
                        "name": "finishPaymentErrorMessage",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "finishPaymentResponse",
                        "fetch": [],
                        "sysName": "finishPaymentResponse",
                        "name": "finishPaymentResponse",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                                "fieldSysName": "agreedAction",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "brandID",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "brandName",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "id",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
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
                                "fieldSysName": "customer",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "deliveryNumber",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "good",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "goodsDescription_id",
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
                                "fieldSysName": "id",
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
                                        "fieldSysName": "status",
                                        "condition": null,
                                        "fetch": []
                                    },
                                    {
                                        "fieldSysName": "userStatus",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
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
                        "fieldSysName": "itemsNumber",
                        "fetch": [],
                        "sysName": "itemsNumber",
                        "name": "Количество позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "notApprovedNumber",
                        "fetch": [],
                        "sysName": "notApprovedNumber",
                        "name": "Количество несогласованных позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
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
                    },
                    {
                        "fieldSysName": "paymentURL",
                        "fetch": [],
                        "sysName": "paymentURL",
                        "name": "paymentURL",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "registrationResponse",
                        "fetch": [],
                        "sysName": "registrationResponse",
                        "name": "Registration response",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "returnURL",
                        "fetch": [],
                        "sysName": "returnURL",
                        "name": "returnURL",
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
                        "name": "id",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "CheckStatusErrorCode": {
                        "id": "CheckStatusErrorCode",
                        "content": "errorCode",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "CheckStatusErrorMessage": {
                        "id": "CheckStatusErrorMessage",
                        "content": "errorMessage",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "approveStatus": {
                        "id": "approveStatus",
                        "content": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "approveStatusText": {
                        "id": "approveStatusText",
                        "content": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "approvedCost": {
                        "id": "approvedCost",
                        "content": "Стоимость подтвер.",
                        "dataType": "number",
                        "format": "positiveNum",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "approvedNumber": {
                        "id": "approvedNumber",
                        "content": "Количество согласованных позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "bankOrderID": {
                        "id": "bankOrderID",
                        "content": "bankOrderID",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "checkStatusResponse": {
                        "id": "checkStatusResponse",
                        "content": "checkStatusResponse",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "cost": {
                        "id": "cost",
                        "content": "Стоимость заказа",
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
                    "delivery": {
                        "id": "delivery",
                        "content": "Доставка",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "delivery"
                    },
                    "errorCode": {
                        "id": "errorCode",
                        "content": "Error code",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "errorMessage": {
                        "id": "errorMessage",
                        "content": "Error message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "finishPaymentErrorCode": {
                        "id": "finishPaymentErrorCode",
                        "content": "finishPaymentErrorCode",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "finishPaymentErrorMessage": {
                        "id": "finishPaymentErrorMessage",
                        "content": "finishPaymentErrorMessage",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "finishPaymentResponse": {
                        "id": "finishPaymentResponse",
                        "content": "finishPaymentResponse",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
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
                    "itemsNumber": {
                        "id": "itemsNumber",
                        "content": "Количество позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "notApprovedNumber": {
                        "id": "notApprovedNumber",
                        "content": "Количество несогласованных позиций",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
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
                    },
                    "paymentURL": {
                        "id": "paymentURL",
                        "content": "paymentURL",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "registrationResponse": {
                        "id": "registrationResponse",
                        "content": "Registration response",
                        "dataType": "json",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "returnURL": {
                        "id": "returnURL",
                        "content": "returnURL",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    }
                },
                "fieldParams": {
                    "CheckStatusErrorCode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "CheckStatusErrorMessage": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "approveStatus": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "approveStatusText": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "approvedCost": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "approvedNumber": {
                        "include": false,
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
                    "checkStatusResponse": {
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
                    "errorCode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "errorMessage": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "finishPaymentErrorCode": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "finishPaymentErrorMessage": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "finishPaymentResponse": {
                        "include": false,
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
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "itemsNumber": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "notApprovedNumber": {
                        "include": false,
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
                        "colorSize": 40
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
                    },
                    "paymentURL": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "registrationResponse": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "returnURL": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "delivery": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "CheckStatusErrorCode",
                    "CheckStatusErrorMessage",
                    "approveStatus",
                    "approveStatusText",
                    "approvedNumber",
                    "bankOrderID",
                    "checkStatusResponse",
                    "errorCode",
                    "errorMessage",
                    "finishPaymentErrorCode",
                    "finishPaymentErrorMessage",
                    "finishPaymentResponse",
                    "orderNumber",
                    "customer",
                    "cost",
                    "approvedCost",
                    "good",
                    "orderStatus",
                    "itemsNumber",
                    "id",
                    "notApprovedNumber",
                    "paymentStatus",
                    "paymentURL",
                    "registrationResponse",
                    "returnURL",
                    "delivery"
                ]
            },
            "actions": [
                {
                    "sysName": "enterDeliveryNum",
                    "id": "88401632207650438",
                    "name": "Enter Deliver Number",
                    "displayAs": "form",
                    "callFrom": "linked",
                    "callFromField": "good",
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
                                "fieldSysName": "deliveryNumber",
                                "fetch": [],
                                "sysName": "deliveryNumber",
                                "name": "Номер доставки",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "good",
                                "fetch": [],
                                "sysName": "good",
                                "name": "Товар",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "goodSpecification"
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
                                "fieldSysName": "order",
                                "fetch": [],
                                "sysName": "order",
                                "name": "Заказ",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "orders"
                            },
                            {
                                "fieldSysName": "orderStatus",
                                "fetch": [],
                                "sysName": "orderStatus",
                                "name": "Статус заказа",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "orderStatuses"
                            },
                            {
                                "fieldSysName": "status",
                                "fetch": [],
                                "sysName": "status",
                                "name": "Статус",
                                "dataType": "link",
                                "format": "",
                                "formatOptions": {},
                                "link": "orderStatuses"
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "25741632207700698",
                            "field": {
                                "fieldSysName": "deliveryNumber",
                                "fetch": [],
                                "sysName": "deliveryNumber",
                                "name": "Номер доставки",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "24331632207708264",
                            "target": "id",
                            "type": "linkedField",
                            "value": "id"
                        },
                        {
                            "id": "39451633080607965",
                            "target": "status",
                            "type": "const",
                            "value": "withConsignmentNote"
                        },
                        {
                            "id": "33181633692047504",
                            "target": "orderStatus",
                            "type": "const",
                            "value": "withConsignmentNote"
                        }
                    ],
                    "buttonTitle": "Отправить",
                    "conditionals": [],
                    "buttonIcon": "cube",
                    "buttonType": "accent",
                    "closePopup": true,
                    "showMessage": false
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "CheckStatusErrorCode",
                "dataType": "string",
                "name": "errorCode",
                "id": "96501630678736702",
                "link": "",
                "group": "1630678669874",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "CheckStatusErrorMessage",
                "dataType": "string",
                "name": "errorMessage",
                "id": "14001630678743346",
                "link": "",
                "group": "1630678669874",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "approveStatus",
                "dataType": "string",
                "name": "",
                "id": "22221632170388065",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "approveStatusText",
                "dataType": "string",
                "name": "",
                "id": "53051632170412476",
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
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "approvedCost",
                "dataType": "number",
                "name": "Стоимость подтвер.",
                "id": "69031632174627431",
                "link": "",
                "group": "1632203677843",
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
                "format": "positiveNum",
                "formatOptions": {},
                "groupName": null,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "approvedNumber",
                "dataType": "number",
                "name": "Количество согласованных позиций",
                "id": "94221632203697814",
                "link": "",
                "group": "1632203677843",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "checkStatusResponse",
                "dataType": "json",
                "name": "checkStatusResponse",
                "id": "19581630678684081",
                "link": "",
                "group": "1630678669874",
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
                "json": true,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "cost",
                "dataType": "number",
                "name": "Стоимость заказа",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "delivery",
                "dataType": "link",
                "name": "Доставка",
                "id": "79041633937148454",
                "link": "delivery",
                "group": "0",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "errorCode",
                "dataType": "string",
                "name": "Error code",
                "id": "45421630453284300",
                "link": null,
                "group": "1630368229089",
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
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "errorMessage",
                "dataType": "string",
                "name": "Error message",
                "id": "90191630453292316",
                "link": null,
                "group": "1630368229089",
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
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "finishPaymentErrorCode",
                "dataType": "string",
                "name": "finishPaymentErrorCode",
                "id": "10671632205391719",
                "link": "",
                "group": "1632205348515",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "finishPaymentErrorMessage",
                "dataType": "string",
                "name": "finishPaymentErrorMessage",
                "id": "91351632205399307",
                "link": "",
                "group": "1632205348515",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "finishPaymentResponse",
                "dataType": "json",
                "name": "finishPaymentResponse",
                "id": "86821632205362496",
                "link": "",
                "group": "1632205348515",
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
                "json": true,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": true,
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
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "itemsNumber",
                "dataType": "number",
                "name": "Количество позиций",
                "id": "21231632171784740",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "notApprovedNumber",
                "dataType": "number",
                "name": "Количество несогласованных позиций",
                "id": "70891632203715872",
                "link": "",
                "group": "1632203677843",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "paymentURL",
                "dataType": "string",
                "name": "paymentURL",
                "id": "31521630458197492",
                "link": null,
                "group": "1630368229089",
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
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "registrationResponse",
                "dataType": "json",
                "name": "Registration response",
                "id": "17441630453259760",
                "link": "",
                "group": "1630368229089",
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
                "json": true,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "returnURL",
                "dataType": "string",
                "name": "returnURL",
                "id": "71171630456433244",
                "link": null,
                "group": "1630368229089",
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
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "CheckStatusErrorCode": "0",
                "checkStatusResponse": "{\"Success\":true,\"ErrorCode\":\"0\",\"Message\":\"OK\",\"TerminalKey\":\"1638974080500DEMO\",\"Status\":\"AUTHORIZED\",\"PaymentId\":\"917844807\",\"OrderId\":\"vitrinabrands_1000116\",\"Params\":[{\"Key\":\"Route\",\"Value\":\"ACQ\"}],\"Amount\":2079800}",
                "orderNumber": "vitrinabrands_1000116",
                "errorMessage": "Неверный статус транзакции.",
                "paymentStatus": "CONFIRMED",
                "good": [],
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "finishPaymentErrorCode": "0",
                "errorCode": "8",
                "id": "1000116",
                "cost": 20798,
                "paymentURL": "https://securepay.tinkoff.ru/new/UASiOFCj",
                "itemsNumber": 1,
                "customer": "mxf@mail.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/vd_index",
                "finishPaymentResponse": "{\"Success\":true,\"ErrorCode\":\"0\",\"TerminalKey\":\"1638974080500DEMO\",\"Status\":\"CONFIRMED\",\"PaymentId\":\"917844807\",\"OrderId\":\"vitrinabrands_1000116\"}",
                "registrationResponse": "{\"Success\":false,\"ErrorCode\":\"8\",\"Message\":\"Неверный статус транзакции.\",\"Details\":\"Заказ vitrinabrands_1000116 был оплачен.\"}",
                "approvedCost": 799,
                "delivery": {
                    "price": 799,
                    "name": "Курьер СДЭК",
                    "description": "Описание",
                    "id": "courier"
                },
                "bankOrderID": "917844807"
            },
            {
                "CheckStatusErrorCode": "0",
                "checkStatusResponse": "{\n\"ErrorCode\": \"0\",\n\"ErrorMessage\": \"Без ошибок\",\n\"Status\": \"AUTHORIZED\"\n}",
                "orderNumber": "vitrinabrands_1000048",
                "errorMessage": "Деньги авторизированы",
                "paymentStatus": "CONFIRMED",
                "good": [],
                "approveStatusText": "✅ 2, ❌2 из 4",
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "approvedNumber": 2,
                "finishPaymentErrorCode": "0",
                "errorCode": "0",
                "id": "1000048",
                "cost": 140000,
                "paymentURL": "https://securepay.tinkoff.ru/new/pGXfFOsR",
                "notApprovedNumber": 2,
                "itemsNumber": 4,
                "finishPaymentErrorMessage": "Без ошибок",
                "customer": "test4@test.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/vd_index",
                "finishPaymentResponse": "{\"token_type\":\"Bearer\",\"expires_in\":3600,\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlOTlkNGI2NTExNTkzMDA1YjY1MTI2ZjkwMTQ4NzE1NmI2NGYwZTZiNzQ0OThmYjdmZDQ3MDQzODEzMjRmYzg3MDgzNmVhM2E5NWMzZjIxIn0.eyJhdWQiOiIyMjkwMTczZWUwY2U1NDIzYzIxOWY2NmRlMGNjY2RmYSIsImp0aSI6ImFlOTlkNGI2NTExNTkzMDA1YjY1MTI2ZjkwMTQ4NzE1NmI2NGYwZTZiNzQ0OThmYjdmZDQ3MDQzODEzMjRmYzg3MDgzNmVhM2E5NWMzZjIxIiwiaWF0IjoxNjM0OTAyMzA2LCJuYmYiOjE2MzQ5MDIzMDYsImV4cCI6MTYzNDkwNTkwNiwic3ViIjoiIiwic2NvcGVzIjpbXSwidXNlciI6eyJpZCI6NzgyODYxMiwiZ3JvdXBfaWQiOm51bGwsInBhcmVudF9pZCI6bnVsbCwiYXJlYSI6InJlc3QifX0.BhpX4QlWlLqqj_MKCPNJhioGSMWYeOdo3ngGOBlO6rpIy_kQLI2ZUzE1QPKFOgM3ak0WqeENxMK9KU9LOGL2hd7VQ7VKevf3eYjKII40M-Xp6wgWQBEkVdOiLAf4eoKwxvn2yKR5SJkax2PJ9WzpN7SqCJTZXCCaa-yRYGVWBWFAxxVR4A_Ow3KOWXUuZIAGMt4tf5h_pPafeAZrMAcby9LsAFPDOPzY-hnTxMqknFyhW8jHvJmvNP9NZtvlihBc_MbnbYLej2otXGKOMVDGbeRdzRdWS0CJ8326lhc_T_7iC-mRiitHRD2-kYhxTiUA9YWI09kLdFmHI86cxX60RA\"}",
                "registrationResponse": "{\n   \"Success\": true,\n   \"ErrorCode\": \"0\",\n   \"TerminalKey\": \"DEMO\",\n   \"Status\": \"NEW\",\n   \"PaymentId\": \"666739248\",\n   \"OrderId\": \"1d5ff5e7b2194d20a4fc1fde3fdc733c\",\n   \"Amount\": 50000,\n   \"PaymentURL\": \"https://securepay.tinkoff.ru/new/pGXfFOsR\",\n   \"Message\": \"Деньги авторизированы\"\n}",
                "approvedCost": 60000,
                "CheckStatusErrorMessage": "Без ошибок",
                "delivery": "delivery1",
                "bankOrderID": "666739248"
            },
            {
                "CheckStatusErrorCode": "0",
                "checkStatusResponse": "{\n\"ErrorCode\": \"0\",\n\"ErrorMessage\": \"Без ошибок\",\n\"Status\": \"AUTHORIZED\"\n}",
                "orderNumber": "vitrinabrands_1000043",
                "errorMessage": "Деньги авторизированы",
                "paymentStatus": "CONFIRMED",
                "good": [],
                "approveStatusText": "✅ 2, ❌0 из 2",
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "approvedNumber": 2,
                "finishPaymentErrorCode": "0",
                "errorCode": "0",
                "id": "1000043",
                "cost": 72000,
                "paymentURL": "https://securepay.tinkoff.ru/new/pGXfFOsR",
                "notApprovedNumber": 0,
                "itemsNumber": 2,
                "finishPaymentErrorMessage": "Без ошибок",
                "customer": "test1@test.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/vd_index",
                "finishPaymentResponse": "{\n  \"ErrorCode\": \"0\",\n  \"ErrorMessage\": \"Без ошибок\",\n  \"Status\": \"CONFIRMED\"\n}",
                "registrationResponse": "{\n   \"Success\": true,\n   \"ErrorCode\": \"0\",\n   \"TerminalKey\": \"DEMO\",\n   \"Status\": \"NEW\",\n   \"PaymentId\": \"666739248\",\n   \"OrderId\": \"1d5ff5e7b2194d20a4fc1fde3fdc733c\",\n   \"Amount\": 50000,\n   \"PaymentURL\": \"https://securepay.tinkoff.ru/new/pGXfFOsR\",\n   \"Message\": \"Деньги авторизированы\"\n}",
                "approvedCost": 72000,
                "CheckStatusErrorMessage": "Без ошибок",
                "bankOrderID": "666739248"
            },
            {
                "CheckStatusErrorCode": "0",
                "checkStatusResponse": "{\n\"ErrorCode\": \"0\",\n\"ErrorMessage\": \"Без ошибок\",\n\"Status\": \"AUTHORIZED\"\n}",
                "orderNumber": "vitrinabrands_1000044",
                "errorMessage": "Деньги авторизированы",
                "paymentStatus": "CONFIRMED",
                "good": [],
                "approveStatusText": "✅ 2, ❌0 из 2",
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "approvedNumber": 2,
                "finishPaymentErrorCode": "0",
                "errorCode": "0",
                "id": "1000044",
                "cost": 72000,
                "paymentURL": "https://securepay.tinkoff.ru/new/pGXfFOsR",
                "notApprovedNumber": 0,
                "itemsNumber": 2,
                "finishPaymentErrorMessage": "Без ошибок",
                "customer": "test1@test.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/vd_index",
                "finishPaymentResponse": "{\n  \"ErrorCode\": \"0\",\n  \"ErrorMessage\": \"Без ошибок\",\n  \"Status\": \"CONFIRMED\"\n}",
                "registrationResponse": "{\n   \"Success\": true,\n   \"ErrorCode\": \"0\",\n   \"TerminalKey\": \"DEMO\",\n   \"Status\": \"NEW\",\n   \"PaymentId\": \"666739248\",\n   \"OrderId\": \"1d5ff5e7b2194d20a4fc1fde3fdc733c\",\n   \"Amount\": 50000,\n   \"PaymentURL\": \"https://securepay.tinkoff.ru/new/pGXfFOsR\",\n   \"Message\": \"Деньги авторизированы\"\n}",
                "approvedCost": 72000,
                "CheckStatusErrorMessage": "Без ошибок",
                "bankOrderID": "666739248"
            },
            {
                "orderNumber": "vitrinabrands_1000004",
                "errorMessage": "Заказ с таким номером уже обработан",
                "good": [],
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "errorCode": "1",
                "id": "1000004",
                "cost": 100,
                "customer": "test1@test.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/favorites?debug_mode=true",
                "registrationResponse": "{\"errorCode\":\"1\",\"errorMessage\":\"Заказ с таким номером уже обработан\"}"
            },
            {
                "orderNumber": "vitrinabrands_1000036",
                "good": [
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 3,
                        "oldPrice": 10000,
                        "good": "2ab2c278-903a-4794-838e-409eaa5d18e8",
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "id": "7bdaf9b3-ec17-4815-895d-7be9e5633e38",
                        "brandID": "e3e7dad9-b2a1-4448-8c41-61f1d4fa7a4f",
                        "customer": "test1@test.ru",
                        "isNew": false,
                        "itemCost": 12000,
                        "goodsDescription_id": "5c73f7a4-9c16-4ca5-bef1-42c4f8fddb5a",
                        "isSale": true,
                        "colorName": "dark-blue"
                    },
                    {
                        "name": "Diesel D-Amny-y super skinny jeans in mid wash",
                        "quantity": 1,
                        "oldPrice": 10000,
                        "good": "2ab2c278-903a-4794-838e-409eaa5d18e8",
                        "description": "Super-skinny jeans by Diesel\n- It’s all in the jeans\n- Regular rise\n- Belt loops\n- Five pockets\n- Super-skinny fit\n\n**LOOK AFTER ME**\n\nMachine wash according to instructions on care label\n\n**ABOUT ME**\n\n- Stretch denim\n- Mid-blue wash\n\nMain: 98% Cotton, 2% Elastane.",
                        "price": 12000,
                        "brandName": "Diesel",
                        "id": "1a897976-3ce5-47cb-b096-aa5b422b5388",
                        "brandID": "e3e7dad9-b2a1-4448-8c41-61f1d4fa7a4f",
                        "customer": "test1@test.ru",
                        "isNew": false,
                        "itemCost": 12000,
                        "goodsDescription_id": "5c73f7a4-9c16-4ca5-bef1-42c4f8fddb5a",
                        "isSale": true,
                        "colorName": "dark-blue"
                    }
                ],
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "id": "1000036",
                "cost": 44500,
                "itemsNumber": 4,
                "customer": "test1@test.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/vd_index",
                "approvedCost": 0
            },
            {
                "orderNumber": "vitrinabrands_1000041",
                "good": [],
                "orderStatus": {
                    "id": "payed",
                    "status": "Без накладной"
                },
                "id": "1000041",
                "cost": 128000,
                "itemsNumber": 2,
                "customer": "test1@test.ru",
                "returnURL": "https://virtualbrand.bubbleapps.io/version-test/vd_index",
                "approvedCost": 0
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "CheckStatusErrorCode",
                1402300
            ],
            [
                "CheckStatusErrorMessage",
                1402300
            ],
            [
                "approveStatus",
                1402300
            ],
            [
                "approveStatusText",
                1402300
            ],
            [
                "approvedCost",
                1402300
            ],
            [
                "approvedNumber",
                1402300
            ],
            [
                "bankOrderID",
                1402300
            ],
            [
                "checkStatusResponse",
                1402300
            ],
            [
                "cost",
                1402300
            ],
            [
                "customer",
                1402300
            ],
            [
                "delivery.description",
                99035406
            ],
            [
                "delivery.id",
                99035406
            ],
            [
                "delivery.name",
                99035406
            ],
            [
                "delivery.price",
                99035406
            ],
            [
                "errorCode",
                1402300
            ],
            [
                "errorMessage",
                1402300
            ],
            [
                "finishPaymentErrorCode",
                1402300
            ],
            [
                "finishPaymentErrorMessage",
                1402300
            ],
            [
                "finishPaymentResponse",
                1402300
            ],
            [
                "good.agreed",
                1402255
            ],
            [
                "good.agreedAction",
                1402255
            ],
            [
                "good.brandID.brandName",
                1426040
            ],
            [
                "good.brandID.id",
                1426040
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
                "good.customer",
                1402255
            ],
            [
                "good.deliveryNumber",
                1402255
            ],
            [
                "good.description",
                1402255
            ],
            [
                "good.good",
                1402255
            ],
            [
                "good.goodsDescription_id.id",
                1397569
            ],
            [
                "good.goodsDescription_id.name",
                1397569
            ],
            [
                "good.id",
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
                "good.status.id",
                99023983
            ],
            [
                "good.status.status",
                99023983
            ],
            [
                "good.status.userStatus",
                99023983
            ],
            [
                "id",
                1402300
            ],
            [
                "itemsNumber",
                1402300
            ],
            [
                "notApprovedNumber",
                1402300
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
            ],
            [
                "paymentURL",
                1402300
            ],
            [
                "registrationResponse",
                1402300
            ],
            [
                "returnURL",
                1402300
            ]
        ],
        "writeFields": [
            "id"
        ],
        "structures": {
            "1397569": {
                "networkID": 7332,
                "sysName": "goods",
                "name": "Модель товара (номенклатура)",
                "id": 1397569,
                "dateCreated": "2021-06-21T21:22:23Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"vendorCode\",\"name\":\"Артикул\",\"dataType\":\"string\",\"id\":\"51831627942104491\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"name\":\"Название\",\"dataType\":\"string\",\"id\":\"90461624310568714\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"93171624310572841\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"color\",\"name\":\"Цвет\",\"dataType\":\"link\",\"id\":\"85091624310580305\",\"link\":\"colors\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"tags\",\"name\":\"Тэги\",\"dataType\":\"string\",\"id\":\"22641624310590765\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"31701624310616441\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"brand\",\"name\":\"Бренд\",\"dataType\":\"link\",\"id\":\"67261624310684962\",\"link\":\"Brands\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"moderation_status\",\"brandName\",\"owner_id\",\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":true,\"array\":false},{\"sysName\":\"isNew\",\"name\":\"Новый товар\",\"dataType\":\"boolean\",\"id\":\"80961624316987394\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"isSale\",\"name\":\"Распродажа\",\"dataType\":\"boolean\",\"id\":\"70721624317005679\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"price\",\"name\":\"Цена, ₽\",\"dataType\":\"number\",\"id\":\"74391627677598162\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"goodSpecification\",\"name\":\"Товарные позиции\",\"dataType\":\"arrayLink\",\"id\":\"16081627942155485\",\"link\":\"goodSpecification\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":true,\"array\":false},{\"sysName\":\"oldPrice\",\"name\":\"Старая цена\",\"dataType\":\"number\",\"id\":\"64811628534783413\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"category\",\"name\":\"Категория\",\"dataType\":\"link\",\"id\":\"99311624310596554\",\"link\":\"category\",\"group\":\"1624486873153\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryMen\",\"name\":\"Мужское, подкатегория\",\"dataType\":\"link\",\"id\":\"63351624486661483\",\"link\":\"subcategoryMen\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryWomen\",\"name\":\"Женское, подкатегория\",\"dataType\":\"link\",\"id\":\"54621624486680601\",\"link\":\"subcategoryWomen\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryKids\",\"name\":\"Детское, подкатегория\",\"dataType\":\"link\",\"id\":\"35001624486729783\",\"link\":\"subcategoryKids\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryBeauty\",\"name\":\"Бьюти, подкатегория\",\"dataType\":\"link\",\"id\":\"88001624486752931\",\"link\":\"subcategoryBeauty\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"subcategoryInterior\",\"name\":\"Интерьер, подкатегория\",\"dataType\":\"link\",\"id\":\"12011624486790587\",\"link\":\"subcategoryInterior\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"categoryType\",\"name\":\"Тип товара\",\"dataType\":\"link\",\"id\":\"32291628759887053\",\"link\":\"categoryType\",\"group\":\"1624486873153\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"name\":\"Пол\",\"dataType\":\"link\",\"id\":\"66261634401502556\",\"link\":\"gender\",\"group\":\"1624486873153\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"isDeleted\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"79241630009759326\",\"link\":\"\",\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"moderation_status\",\"name\":\"new,approved,declined\",\"dataType\":\"string\",\"id\":\"77881630010002681\",\"link\":null,\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"decline_reason\",\"name\":\"Причина отказа\",\"dataType\":\"string\",\"id\":\"82001630010018372\",\"link\":null,\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"moderation_status_text\",\"name\":\"Статус модерации\",\"dataType\":\"string\",\"id\":\"66871630010028924\",\"link\":null,\"group\":\"1630009990145\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"weight\",\"name\":\"Значимость для Главной страницы\",\"dataType\":\"number\",\"id\":\"54001633954678861\",\"link\":\"\",\"group\":\"1633954671381\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"seoTitle\",\"name\":\"seoTitle\",\"dataType\":\"string\",\"id\":\"30971639572889023\",\"link\":\"\",\"group\":\"1639572879608\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"seoDescription\",\"name\":\"seoDescription\",\"dataType\":\"string\",\"id\":\"59081639572904825\",\"link\":\"\",\"group\":\"1639572879608\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"seoKeywords\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"58371639572933399\",\"link\":\"\",\"group\":\"1639572879608\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Category\",\"id\":1624486873153,\"order\":0},{\"name\":\"Workflow\",\"id\":1630009990145,\"order\":1},{\"name\":\"Новости\",\"id\":1633954671381,\"order\":2},{\"name\":\"SEO\",\"id\":1639572879608,\"order\":3}]",
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-15T12:55:57Z",
                "createBy": 4400,
                "changedBy": 6452,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33635177
            },
            "1402255": {
                "networkID": 7332,
                "sysName": "itemsInCart",
                "name": "Товары в корзине",
                "id": 1402255,
                "dateCreated": "2021-07-04T19:04:24Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"11371630843747160\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cart\",\"dataType\":\"link\",\"name\":\"Корзина\",\"id\":\"15961639141750099\",\"link\":\"cart\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"goodsDescription_id\",\"dataType\":\"link\",\"name\":\"Модель товара\",\"id\":\"20761630835730713\",\"link\":\"goods\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[\"brand.owner_id.id\",\"brand.id\",\"brand\",\"brand.owner_id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"deliveryNumber\",\"dataType\":\"string\",\"name\":\"Номер доставки\",\"id\":\"26941632140768432\",\"link\":null,\"group\":\"1632140758049\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"pushBrand\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"27321640244772681\",\"link\":\"\",\"group\":\"1640244762423\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"orderStatus\",\"dataType\":\"link\",\"name\":\"Статус заказа(del)\",\"id\":\"30371632988728881\",\"link\":\"orderStatuses\",\"group\":\"1630859367483\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"isSale\",\"dataType\":\"boolean\",\"name\":\"Скидка\",\"id\":\"31131630843864948\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"itemCost\",\"dataType\":\"number\",\"name\":\"Стоимость\",\"id\":\"35261627890193579\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"status\",\"dataType\":\"link\",\"name\":\"Статус\",\"id\":\"38811630452697484\",\"link\":\"orderStatuses\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"photo\",\"dataType\":\"file\",\"name\":\"Фото\",\"id\":\"42151630843779057\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"agreedAction\",\"dataType\":\"boolean\",\"name\":\"Выбери согласование\",\"id\":\"44901630869302044\",\"link\":\"\",\"group\":\"1630859367483\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Согласован\",\"Не согласован\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"45251630843760961\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"oldPrice\",\"dataType\":\"number\",\"name\":\"Старая цена ₽\",\"id\":\"46501630843904447\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"quantity\",\"dataType\":\"number\",\"name\":\"Количество\",\"id\":\"61771625428487124\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"order\",\"dataType\":\"link\",\"name\":\"Заказ\",\"id\":\"66671630859384324\",\"link\":\"orders\",\"group\":\"1630859367483\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"colorName\",\"dataType\":\"string\",\"name\":\"Цвет\",\"id\":\"67821630843685022\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"dateChange\",\"dataType\":\"date\",\"name\":\"Дата изменения\",\"id\":\"70091633939249116\",\"link\":\"\",\"group\":\"1630859367483\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"brandID\",\"dataType\":\"link\",\"name\":\"Бренд\",\"id\":\"70171631851976052\",\"link\":\"Brands\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good\",\"dataType\":\"link\",\"name\":\"Товар\",\"id\":\"75511625428234499\",\"link\":\"goodSpecification\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"customer\",\"dataType\":\"link\",\"name\":\"Покупатель\",\"id\":\"81641627890324484\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[\"id\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"agreed\",\"dataType\":\"string\",\"name\":\"Согласован\",\"id\":\"82191630854462175\",\"link\":null,\"group\":\"1630843672402\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"tax\",\"dataType\":\"string\",\"name\":\"НДС\",\"id\":\"82841640106171557\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"brandName\",\"dataType\":\"string\",\"name\":\"Бренд\",\"id\":\"84781630844173461\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"isNew\",\"dataType\":\"boolean\",\"name\":\"Новый\",\"id\":\"91591630843853021\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price\",\"dataType\":\"number\",\"name\":\"Цена ₽\",\"id\":\"95431630843711798\",\"link\":\"\",\"group\":\"1630843672402\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"dateCreate\",\"dataType\":\"date\",\"name\":\"Дата создания\",\"id\":\"96141633939241010\",\"link\":\"\",\"group\":\"1630859367483\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Good Description\",\"id\":1630843672402,\"order\":0},{\"name\":\"Order\",\"id\":1630859367483,\"order\":1},{\"name\":\"Delivery\",\"id\":1632140758049,\"order\":2},{\"name\":\"push\",\"id\":1640244762423,\"order\":3}]",
                "jsonViewIdSettings": "[{\"sysName\":\"agreed\"},{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-23T07:35:53Z",
                "createBy": 4400,
                "changedBy": 6452,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
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
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"finishPaymentErrorCode\",\"dataType\":\"string\",\"name\":\"finishPaymentErrorCode\",\"id\":\"10671632205391719\",\"link\":\"\",\"group\":\"1632205348515\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"CheckStatusErrorMessage\",\"dataType\":\"string\",\"name\":\"errorMessage\",\"id\":\"14001630678743346\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"bankOrderID\",\"dataType\":\"string\",\"name\":\"bankOrderID\",\"id\":\"15641630458179728\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"registrationResponse\",\"dataType\":\"json\",\"name\":\"Registration response\",\"id\":\"17441630453259760\",\"link\":\"\",\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"checkStatusResponse\",\"dataType\":\"json\",\"name\":\"checkStatusResponse\",\"id\":\"19581630678684081\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"itemsNumber\",\"dataType\":\"number\",\"name\":\"Количество позиций\",\"id\":\"21231632171784740\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"approveStatus\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"22221632170388065\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"orderNumber\",\"dataType\":\"string\",\"name\":\"Номер заказа\",\"id\":\"24861630368180012\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"paymentURL\",\"dataType\":\"string\",\"name\":\"paymentURL\",\"id\":\"31521630458197492\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"paymentStatus\",\"dataType\":\"string\",\"name\":\"paymentStatus\",\"id\":\"36481630678719313\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"errorCode\",\"dataType\":\"string\",\"name\":\"Error code\",\"id\":\"45421630453284300\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"emailBody\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"45461633509481917\",\"link\":\"\",\"group\":\"1633509473142\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"approveStatusText\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"53051632170412476\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"customer\",\"dataType\":\"link\",\"name\":\"Покупатель\",\"id\":\"55421627940261791\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"approvedCost\",\"dataType\":\"number\",\"name\":\"Стоимость подтвер.\",\"id\":\"69031632174627431\",\"link\":\"\",\"group\":\"1632203677843\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"notApprovedNumber\",\"dataType\":\"number\",\"name\":\"Количество несогласованных позиций\",\"id\":\"70891632203715872\",\"link\":\"\",\"group\":\"1632203677843\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"returnURL\",\"dataType\":\"string\",\"name\":\"returnURL\",\"id\":\"71171630456433244\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"delivery\",\"dataType\":\"link\",\"name\":\"Доставка\",\"id\":\"79041633937148454\",\"link\":\"delivery\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"dateUpdate\",\"dataType\":\"date\",\"name\":\"Дата обновления\",\"id\":\"79401633759236551\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"address\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"79491640187070416\",\"link\":\"\",\"group\":\"1640187068057\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"good\",\"dataType\":\"arrayLink\",\"name\":\"Позиции в заказе\",\"id\":\"82021625428782418\",\"link\":\"itemsInCart\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"brandID.id\",\"good.good.id\",\"id\",\"good.good\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"indexExists\":true,\"typeVariable\":{},\"array\":false},{\"sysName\":\"dateCreate\",\"dataType\":\"date\",\"name\":\"Дата создания\",\"id\":\"83271633759077802\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.YY\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"finishPaymentResponse\",\"dataType\":\"json\",\"name\":\"finishPaymentResponse\",\"id\":\"86821632205362496\",\"link\":\"\",\"group\":\"1632205348515\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"errorMessage\",\"dataType\":\"string\",\"name\":\"Error message\",\"id\":\"90191630453292316\",\"link\":null,\"group\":\"1630368229089\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"finishPaymentErrorMessage\",\"dataType\":\"string\",\"name\":\"finishPaymentErrorMessage\",\"id\":\"91351632205399307\",\"link\":\"\",\"group\":\"1632205348515\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"approvedNumber\",\"dataType\":\"number\",\"name\":\"Количество согласованных позиций\",\"id\":\"94221632203697814\",\"link\":\"\",\"group\":\"1632203677843\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"orderStatus\",\"dataType\":\"link\",\"name\":\"Статус заказа\",\"id\":\"95151630619162902\",\"link\":\"orderStatuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"CheckStatusErrorCode\",\"dataType\":\"string\",\"name\":\"errorCode\",\"id\":\"96501630678736702\",\"link\":\"\",\"group\":\"1630678669874\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"cost\",\"dataType\":\"number\",\"name\":\"Стоимость заказа\",\"id\":\"97951627940223097\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Approve\",\"id\":1632203677843,\"order\":0},{\"name\":\"Email\",\"id\":1633509473142,\"order\":4},{\"name\":\"Finish payment\",\"id\":1632205348515,\"order\":3},{\"name\":\"Bank registration\",\"id\":1630368229089,\"order\":1},{\"name\":\"Bank check status\",\"id\":1630678669874,\"order\":2},{\"name\":\"New Group 7\",\"id\":1640187068057,\"order\":6},{\"name\":\"User Status\",\"id\":1633593921481,\"order\":5}]",
                "jsonViewIdSettings": "[{\"sysName\":\"orderNumber\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-22T16:37:58Z",
                "createBy": 4400,
                "changedBy": 6452,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33635178
            },
            "1426040": {
                "networkID": 7332,
                "sysName": "Brands",
                "name": "Brands",
                "id": 1426040,
                "dateCreated": "2021-08-10T10:38:26Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"descriptionHeader\",\"dataType\":\"string\",\"name\":\"Заголовок описания\",\"id\":\"10691634394430253\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"moderation_status_message\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"16321628685693721\",\"link\":null,\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"year\",\"dataType\":\"number\",\"name\":\"Год создания\",\"id\":\"17061628592689240\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"shopRules\",\"dataType\":\"string\",\"name\":\"Правила магазина\",\"id\":\"17571628592771666\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"holidays\",\"dataType\":\"boolean\",\"name\":\"каникулы\",\"id\":\"20341639751041570\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"salesCity\",\"dataType\":\"string\",\"name\":\"Города продаж\",\"id\":\"21471628592699059\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"companyName\",\"dataType\":\"string\",\"name\":\"Юридическое наименование  \",\"id\":\"22421640093084982\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"pending_goods_ids\",\"dataType\":\"arrayLink\",\"name\":\"Товары, ожидающие модерации\",\"id\":\"22601628703842456\",\"link\":\"goods\",\"group\":\"1628684864978\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"accept_TOS\",\"dataType\":\"json\",\"name\":\"Правила площадки\",\"id\":\"23631634982276889\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"checkboxes\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"accept\",\"label\":\"Принимаю правила использования площадки VitrinaBrands\"}]},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"good_ids\",\"dataType\":\"arrayLink\",\"name\":\"Товары (модели)\",\"id\":\"26571628684869720\",\"link\":\"goods\",\"group\":\"1628684864978\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"brandName\",\"dataType\":\"string\",\"name\":\"Название бренда\",\"id\":\"34541628592680613\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"seoKeywords\",\"dataType\":\"string\",\"name\":\"seoKeywords\",\"id\":\"35051639573194166\",\"link\":\"\",\"group\":\"1639573183227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"owner_id\",\"dataType\":\"link\",\"name\":\"Владелец\",\"id\":\"36491628592826659\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"delivery\",\"dataType\":\"string\",\"name\":\"Опции доставки\",\"id\":\"37351628592700811\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"INN\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"45701640093071832\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"Описание\",\"id\":\"47341628592699578\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"manager_alert\",\"dataType\":\"string\",\"name\":\"Внимание\",\"id\":\"47341637789593389\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tax\",\"dataType\":\"link\",\"name\":\"НДС\",\"id\":\"47381640101252292\",\"link\":\"tax\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"seoTitle\",\"dataType\":\"string\",\"name\":\"seoTitle\",\"id\":\"55861639573191684\",\"link\":\"\",\"group\":\"1639573183227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"moderation_colour\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"63801628703966398\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"logo\",\"dataType\":\"file\",\"name\":\"Логотип\",\"id\":\"72191628592688721\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"seoDescription\",\"dataType\":\"string\",\"name\":\"seoDescription\",\"id\":\"74241639573193321\",\"link\":\"\",\"group\":\"1639573183227\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"moderation_status\",\"dataType\":\"string\",\"name\":\"Статус модерации\",\"id\":\"74811628610372656\",\"link\":null,\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isOnHolidays\",\"dataType\":\"boolean\",\"name\":\"каникулы\",\"id\":\"78701640093054576\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"80531628592689780\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"phone\",\"dataType\":\"string\",\"name\":\"Телефон\",\"id\":\"86461640093085688\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isHidden\",\"dataType\":\"boolean\",\"name\":\"\",\"id\":\"88081628672775037\",\"link\":\"\",\"group\":\"1628610366405\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image_hor\",\"dataType\":\"file\",\"name\":\"Иллюстрация (900x320)\",\"id\":\"91731634981558700\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image_vert\",\"dataType\":\"file\",\"name\":\"Иллюстрация (300x460)\",\"id\":\"95951634981559396\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Tech fields\",\"id\":1628610366405,\"order\":0},{\"name\":\"Goods\",\"id\":1628684864978,\"order\":1},{\"name\":\"seo\",\"id\":1639573183227,\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"brandName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-21T15:41:27Z",
                "createBy": 21,
                "changedBy": 4400,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33648500
            },
            "99023983": {
                "networkID": 7332,
                "sysName": "orderStatuses",
                "name": "Order Statuses",
                "id": 99023983,
                "dateCreated": "2021-09-17T05:37:28Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"userStatus\",\"name\":\"Статус Пользователя\",\"dataType\":\"string\",\"id\":\"59971633594014791\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status\",\"name\":\"Статус\",\"dataType\":\"string\",\"id\":\"89961631857075918\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-07T08:07:19Z",
                "createBy": 4400,
                "changedBy": 4232,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33632409
            },
            "99035406": {
                "networkID": 7332,
                "sysName": "delivery",
                "name": "Delivery",
                "id": 99035406,
                "dateCreated": "2021-10-08T12:12:03Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"price\",\"dataType\":\"number\",\"name\":\"Цена\",\"id\":\"18551633695198014\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"description\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"58121633695261291\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Название\",\"id\":\"71691633695191189\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-10-08T12:14:34Z",
                "createBy": 4400,
                "changedBy": 4400,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33632409
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "typeVariable": {},
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
        //user: "pavel@directual.com"
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
                        "name": "Функции для категории 22",
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
                        "name": "Функции для категории 22",
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
                        "content": "Функции для категории 22",
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
                        "quickSearchSL": "function22Displayed"
                    },
                    "52_functions": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
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
                        "clickable": false
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
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "required": false,
                        "defaultValueOn": false,
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
                        "cond": [
                            {
                                "id": "58551609181799429",
                                "field": "type",
                                "value": "52"
                            }
                        ]
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
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "82661637227887760",
                    "27871637227987594",
                    "24571609181681819",
                    "21061609181696456",
                    "39401609181601788",
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
                            "value": "Повар"
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
                            "value": "Заготовщик"
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
                        }
                    ]
                },
                "52_functions": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "Вакансии в креативе, бизнесе и стажировки",
                    "searchData": [
                        {
                            "key": "14746650-98aa-44d7-8989-472c8162dba8",
                            "value": "Контент"
                        },
                        {
                            "key": "5c696884-c6e8-4608-a928-06ca86d28f52",
                            "value": "SMM"
                        },
                        {
                            "key": "5b27b967-9c4d-4dbe-89f0-abb4186e64a1",
                            "value": "PR"
                        },
                        {
                            "key": "605143a0-bb72-49ec-a7c2-16d6a84baa6b",
                            "value": "Копирайтинг"
                        },
                        {
                            "key": "565e74f1-6a97-491b-a97b-7578d26f9b0e",
                            "value": "Редактор"
                        },
                        {
                            "key": "d4e838bd-8e32-4a65-9d08-09ccf5e8956c",
                            "value": "Фотограф"
                        },
                        {
                            "key": "b0458bef-2b44-42a7-a27f-69f4043eb19a",
                            "value": " Таргетинг"
                        },
                        {
                            "key": "02b3892a-9ca7-40e3-bb79-2a4682fe445c",
                            "value": "Графический дизайн"
                        },
                        {
                            "key": "f9e6e8ea-aea5-4a2e-b46c-4dfa353fec64",
                            "value": "HR"
                        },
                        {
                            "key": "aaa68f68-4196-4561-b4ca-6957ee1f5271",
                            "value": "Видеограф"
                        },
                        {
                            "key": "f357eb22-9b97-4889-ae7b-1359a837626e",
                            "value": "Fashion-дизайнер"
                        },
                        {
                            "key": "d8a43cf3-5903-4073-95e3-d7f400ff28cc",
                            "value": "Баер"
                        },
                        {
                            "key": "35a1a90b-b7bf-44dd-b2cb-0537f35c995a",
                            "value": "Бренд менеджер"
                        },
                        {
                            "key": "57816d4e-5d1a-4240-8eda-0041ccdc3d55",
                            "value": "IT"
                        },
                        {
                            "key": "2ee7a4c1-51a4-46d9-b93a-f4c06f9dc095",
                            "value": "Стилист"
                        },
                        {
                            "key": "fdd5dd01-1867-4f2d-a579-4032bc691551",
                            "value": "UI/UX дизайн"
                        },
                        {
                            "key": "69cf9997-fd45-442e-8590-74815535e949",
                            "value": "Продюсер"
                        },
                        {
                            "key": "b5ecf298-bc0b-4010-964a-9eb1f36e88c7",
                            "value": "Маркетинг"
                        },
                        {
                            "key": "42793449-612e-4a86-b519-e59c8c4d0f7b",
                            "value": "Art-директор"
                        },
                        {
                            "key": "9d328ba3-59c4-43f8-809d-068d86dada3c",
                            "value": "Стажер "
                        },
                        {
                            "key": "e3673d9f-84cc-4e92-bdae-5bd81ad3fefc",
                            "value": "Менеджер проектов"
                        },
                        {
                            "key": "6110b6ca-dada-4db8-ae7a-3c5750cfabb2",
                            "value": "Личный помощник"
                        },
                        {
                            "key": "805e95ec-380a-4822-ad5f-bddbd2b0f695",
                            "value": "Motion-дизайнер"
                        },
                        {
                            "key": "dca9b4e9-c48c-4626-80bd-c8efc04d3c5b",
                            "value": "Продакт менеджер "
                        },
                        {
                            "key": "5379db04-9d22-4ee2-963d-4244435c4c08",
                            "value": "Пошив"
                        },
                        {
                            "key": "f51b17ea-ace5-487a-a043-3259040495e3",
                            "value": "Производство"
                        },
                        {
                            "key": "635b333a-33e8-4b59-91bd-ed54f0508235",
                            "value": "Бухгалтер"
                        },
                        {
                            "key": "2b5a280e-052e-430a-a5bd-0f340d6f9298",
                            "value": "Ретушер"
                        },
                        {
                            "key": "c68109f6-1b68-4f09-ac34-67a8390ea2dd",
                            "value": "Account "
                        },
                        {
                            "key": "00ad0a1c-5600-458e-8b2b-7e12b9e6588d",
                            "value": "Sale менеджер"
                        },
                        {
                            "key": "56890dd6-b40c-4293-83b9-bc0ad4e4cf6f",
                            "value": "Дизайн"
                        },
                        {
                            "key": "8bc295b5-4239-4bd2-a21d-3f305f6e210b",
                            "value": "Ювелир"
                        },
                        {
                            "key": "de84414a-0886-41c4-bc51-1321abf1f722",
                            "value": "Администратор"
                        },
                        {
                            "key": "286b253f-f862-49a5-bdca-2301edc2a679",
                            "value": "Event"
                        },
                        {
                            "key": "d7d77bb4-7414-456a-9bef-843bd3e3d800",
                            "value": "Интернет-магазин"
                        },
                        {
                            "key": "a879abc4-6a98-436c-8042-40010a0c62d7",
                            "value": "Заместитель директора "
                        },
                        {
                            "key": "73b56a2a-78fe-447e-a9d4-8a574b9e9359",
                            "value": "Ассистент"
                        },
                        {
                            "key": "eccbdeb2-465b-423b-a1a4-753f80061e5d",
                            "value": "Рекрутер"
                        },
                        {
                            "key": "71474bd7-a847-45e2-a4e9-fa24dd3c4214",
                            "value": "Менеджер по персоналу "
                        },
                        {
                            "key": "df34e35c-e896-4a08-830d-57a2371f053c",
                            "value": "CRM"
                        },
                        {
                            "key": "35c05b79-a66b-4fad-b330-b0ab7f56a224",
                            "value": "Шеф"
                        },
                        {
                            "key": "8dda2828-3c80-4004-8793-64fd8009000e",
                            "value": "Повар"
                        },
                        {
                            "key": "af45d23d-e18a-402a-8fbc-82e3b5389057",
                            "value": "Заготовщик"
                        },
                        {
                            "key": "a6780878-7f4d-4e16-8a96-32a49da4b262",
                            "value": "Тренинги"
                        },
                        {
                            "key": "8889e6da-417a-48bd-9acb-46391c47d886",
                            "value": "Документооборот"
                        },
                        {
                            "key": "fa8284b2-40fd-4c45-bad9-94bd71eb53d5",
                            "value": "Управляющий"
                        },
                        {
                            "key": "64543439-15f7-41f1-abaa-ef71d2094c4e",
                            "value": "Менеджер по работе с клиентами"
                        },
                        {
                            "key": "a59110ed-077c-426f-99e1-09d3b0d11ef3",
                            "value": "Креатор"
                        },
                        {
                            "key": "f483faf7-ac03-4579-970c-54be779c83c0",
                            "value": "Креативный дизайнер"
                        },
                        {
                            "key": "a9425703-94df-4f66-926f-093f37827bf5",
                            "value": "Менеджер по продажам"
                        },
                        {
                            "key": "f2c6e85c-3b80-4d93-9968-907dd86031fb",
                            "value": "Креативный директор"
                        },
                        {
                            "key": "766febe7-0ad0-4750-892f-f39e7f1b28db",
                            "value": "Директор магазина"
                        }
                    ]
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
                    "clickable": false
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
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "required": false,
                    "defaultValueOn": false,
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
                }
            },
            "useEditing": true,
            "edit": true
        },
        "fileds": [
            {
                "sysName": "22_functions",
                "name": "Функции для категории 22",
                "dataType": "arrayLink",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "52_functions",
                "name": "Функции для категории 52",
                "dataType": "arrayLink",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "Facebook_lonk",
                "name": "Facebook",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "Instagram_link",
                "name": "Instagram",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "about_last_job",
                "name": "Последнее место работы",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "about_last_job_bool",
                "name": "Опыт работы",
                "dataType": "boolean",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "birthday",
                "name": "Дата рождения",
                "dataType": "date",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "city",
                "name": "Город",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "firstName",
                "name": "Имя",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "id",
                "name": "Username (login)",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang",
                "name": "Знание иностранных языков",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_ch",
                "name": "Уровень владения китайским языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_de",
                "name": "Уровень владения немецким языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_en",
                "name": "Уровень владения английским языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_fr",
                "name": "Уровень владения французским языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_from_user",
                "name": "Свой вариант",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_id",
                "name": "Знание иностранных языков",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_it",
                "name": "Уровень владения итальянским языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_rus",
                "name": "Уровень владения русским языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lang_sp",
                "name": "Уровень владения испанским языком",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "lastName",
                "name": "Фамилия",
                "dataType": "string",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "salary_raw",
                "name": "Ожидания по доходу ",
                "dataType": "json",
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
                "typeVariable": {},
                "json": true,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "schedule",
                "name": "Занятость",
                "dataType": "arrayLink",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "linkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "type",
                "name": "Категория вакансий",
                "dataType": "link",
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
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "linkType": true,
                "indexExists": false,
                "array": false
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [
            {
                "birthday": 1638392400000,
                "Facebook_lonk": "11",
                "city": "efd0190e-1a19-40a7-9d00-b695b60e7b18",
                "52_functions": [
                    {
                        "name": "Графический дизайн",
                        "id": "02b3892a-9ca7-40e3-bb79-2a4682fe445c"
                    },
                    {
                        "name": "Контент",
                        "id": "14746650-98aa-44d7-8989-472c8162dba8"
                    }
                ],
                "salary_raw": "{\"secondValue\":100,\"firstValue\":50}",
                "about_last_job_bool": false,
                "22_functions": [],
                "lastName": "Ершов",
                "firstName": "Павел",
                "id": "79151845361",
                "schedule": [
                    {
                        "name": "полная",
                        "id": "36e396ce-bbfe-47aa-9d62-61190ac6658e"
                    }
                ],
                "lang": {
                    "name": "английский",
                    "id": "английский"
                },
                "type": "52"
            }
        ]
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