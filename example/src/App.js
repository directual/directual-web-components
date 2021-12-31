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
        "sl": "projects",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardListLayout": "grid",
            "cardHeaderComment": "website",
            "deleteField": "",
            "cardBodyText": null,
            "cardImage": true,
            "cardImageField": "logo",
            "cardImageType": "left",
            "cardImageSize": 150,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "analyst_ids",
                        "fetch": [
                            {
                                "fieldSysName": "displayedName",
                                "condition": null,
                                "fetch": []
                            },
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
                        "sysName": "analyst_ids",
                        "name": "Analysts team",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "attached_files",
                        "fetch": [],
                        "sysName": "attached_files",
                        "name": "Attached files",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "description",
                        "fetch": [],
                        "sysName": "description",
                        "name": "Short description",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "emails",
                        "fetch": [
                            {
                                "fieldSysName": "attachments",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "date",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "from",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "subject",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "text",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "emails",
                        "name": "Emails",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "parsed_emails"
                    },
                    {
                        "fieldSysName": "event_ids",
                        "fetch": [
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
                                "fieldSysName": "project_id",
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
                                "fieldSysName": "user",
                                "condition": null,
                                "fetch": [
                                    {
                                        "fieldSysName": "displayedName",
                                        "condition": null,
                                        "fetch": []
                                    },
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
                                ]
                            }
                        ],
                        "sysName": "event_ids",
                        "name": "Events",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "projects_events"
                    },
                    {
                        "fieldSysName": "investor_ids",
                        "fetch": [
                            {
                                "fieldSysName": "displayedName",
                                "condition": null,
                                "fetch": []
                            },
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
                        "sysName": "investor_ids",
                        "name": "Investors who have an access",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "logo",
                        "fetch": [],
                        "sysName": "logo",
                        "name": "Logo",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "partner_ids",
                        "fetch": [
                            {
                                "fieldSysName": "displayedName",
                                "condition": null,
                                "fetch": []
                            },
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
                        "sysName": "partner_ids",
                        "name": "Partners",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "servise_provider_ids",
                        "fetch": [
                            {
                                "fieldSysName": "displayedName",
                                "condition": null,
                                "fetch": []
                            },
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
                        "sysName": "servise_provider_ids",
                        "name": "Service provoders",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "team",
                        "fetch": [
                            {
                                "fieldSysName": "displayedName",
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
                                "fieldSysName": "position",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "userpic",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "team",
                        "name": "Startup Team",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
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
                        "fieldSysName": "website",
                        "fetch": [],
                        "sysName": "website",
                        "name": "Web-site",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "analyst_ids": {
                        "id": "analyst_ids",
                        "content": "Analysts team",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "attached_files": {
                        "id": "attached_files",
                        "content": "Attached files",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "description": {
                        "id": "description",
                        "content": "Short description",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "emails": {
                        "id": "emails",
                        "content": "Emails",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "parsed_emails",
                        "actions": []
                    },
                    "event_ids": {
                        "id": "event_ids",
                        "content": "Events",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "projects_events",
                        "actions": []
                    },
                    "investor_ids": {
                        "id": "investor_ids",
                        "content": "Investors who have an access",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "logo": {
                        "id": "logo",
                        "content": "Logo",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "partner_ids": {
                        "id": "partner_ids",
                        "content": "Partners",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "servise_provider_ids": {
                        "id": "servise_provider_ids",
                        "content": "Service provoders",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "team": {
                        "id": "team",
                        "content": "Startup Team",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
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
                        "link": "",
                        "actions": []
                    },
                    "website": {
                        "id": "website",
                        "content": "Web-site",
                        "type": "field",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__69421639220245895": {
                        "content": "Move to Screening",
                        "id": "action__69421639220245895",
                        "type": "action",
                        "actions": []
                    },
                    "action__13251639220246787": {
                        "content": "Reject",
                        "id": "action__13251639220246787",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "description": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "emails": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "configureLinkedCard": {
                            "fields": {
                                "attachments": {
                                    "id": "attachments",
                                    "content": "Attachments",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "file",
                                    "format": "multipleFiles",
                                    "formatOptions": null
                                },
                                "date": {
                                    "id": "date",
                                    "content": "Date",
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
                                        "dateFormat": "DD MMM, Y",
                                        "timeFormat": " HH:mm",
                                        "isUTC": "false"
                                    }
                                },
                                "from": {
                                    "id": "from",
                                    "content": "From",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "subject": {
                                    "id": "subject",
                                    "content": "Subject",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "text": {
                                    "id": "text",
                                    "content": "Text",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                }
                            },
                            "fieldParams": {
                                "attachments": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "from": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "subject": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "text": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "from",
                                "subject",
                                "date",
                                "text",
                                "attachments"
                            ]
                        },
                        "subHeader": "Email: ",
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1639220374384",
                                    "field": "from"
                                },
                                {
                                    "id": "1639220377524",
                                    "field": "subject"
                                },
                                {
                                    "id": "1639220381447",
                                    "field": "date"
                                }
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "date"
                    },
                    "id": {
                        "include": false,
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
                    },
                    "reject_reason": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "attached_files": {
                        "include": true,
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
                        "clickable": false
                    },
                    "team": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1639404773172",
                                    "field": "userpic"
                                },
                                {
                                    "id": "1639404761649",
                                    "field": "firstName"
                                },
                                {
                                    "id": "1639404764809",
                                    "field": "lastName"
                                },
                                {
                                    "id": "1639404766810",
                                    "field": "position"
                                }
                            ]
                        }
                    },
                    "website": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "analyst_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "event_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1639667712314",
                                    "field": "event"
                                },
                                {
                                    "id": "1639667715942",
                                    "field": "user"
                                },
                                {
                                    "id": "1639667720510",
                                    "field": "date"
                                }
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "date",
                        "sortDirection": "desc",
                        "configureLinkedCard": {
                            "fields": {
                                "date": {
                                    "id": "date",
                                    "content": "Date",
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
                                        "dateFormat": "DD MMM, Y,",
                                        "timeFormat": " HH:mm",
                                        "isUTC": "false"
                                    }
                                },
                                "event": {
                                    "id": "event",
                                    "content": "Event",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
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
                                "project_id": {
                                    "id": "project_id",
                                    "content": "Project",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "user": {
                                    "id": "user",
                                    "content": "User",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "event": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "id": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "project_id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "user": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "date",
                                "user",
                                "project_id",
                                "event",
                                "id"
                            ]
                        },
                        "subHeader": "Event: "
                    },
                    "investor_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "partner_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "servise_provider_ids": {
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
                            "logo",
                            "title",
                            "website",
                            "description",
                            "attached_files"
                        ]
                    },
                    "96961639220414996": {
                        "id": "96961639220414996",
                        "title": "Actions",
                        "fieldIds": [
                            "action__69421639220245895",
                            "action__13251639220246787"
                        ]
                    },
                    "61821639220419046": {
                        "id": "61821639220419046",
                        "title": "Communication",
                        "fieldIds": [
                            "emails"
                        ]
                    },
                    "85221639667665927": {
                        "id": "85221639667665927",
                        "title": "Events",
                        "fieldIds": [
                            "event_ids"
                        ]
                    },
                    "78351639667677940": {
                        "id": "78351639667677940",
                        "title": "Participants",
                        "fieldIds": [
                            "team",
                            "analyst_ids",
                            "investor_ids",
                            "partner_ids",
                            "servise_provider_ids"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "78351639667677940",
                    "85221639667665927",
                    "61821639220419046",
                    "96961639220414996"
                ],
                "actions": [
                    {
                        "sysName": "",
                        "id": "69421639220245895",
                        "name": "Move to Screening",
                        "displayAs": "button",
                        "buttonType": "accent",
                        "buttonIcon": "done",
                        "closePopup": true,
                        "showMessage": false,
                        "dropdown": true
                    },
                    {
                        "sysName": "",
                        "id": "13251639220246787",
                        "name": "Reject",
                        "displayAs": "form",
                        "buttonType": "danger",
                        "buttonIcon": "ban",
                        "closePopup": true,
                        "showMessage": false,
                        "dropdown": true,
                        "formFields": []
                    }
                ]
            },
            "fields": {
                "description": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "emails": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "configureLinkedCard": {
                        "fields": {
                            "attachments": {
                                "id": "attachments",
                                "content": "Attachments",
                                "type": "field",
                                "read": true,
                                "dataType": "file",
                                "format": "multipleFiles",
                                "formatOptions": null
                            },
                            "date": {
                                "id": "date",
                                "content": "Date",
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
                                    "dateFormat": "DD MMM, Y",
                                    "timeFormat": " HH:mm",
                                    "isUTC": "false"
                                }
                            },
                            "from": {
                                "id": "from",
                                "content": "From",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "subject": {
                                "id": "subject",
                                "content": "Subject",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "text": {
                                "id": "text",
                                "content": "Text",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            }
                        },
                        "fieldParams": {
                            "attachments": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "from": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "subject": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "text": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "from",
                            "subject",
                            "date",
                            "text",
                            "attachments"
                        ]
                    },
                    "subHeader": "Email: ",
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1639220374384",
                                "field": "from"
                            },
                            {
                                "id": "1639220377524",
                                "field": "subject"
                            },
                            {
                                "id": "1639220381447",
                                "field": "date"
                            }
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "date"
                },
                "id": {
                    "include": false,
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
                },
                "reject_reason": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "attached_files": {
                    "include": true,
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
                    "clickable": false
                },
                "team": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1639404773172",
                                "field": "userpic"
                            },
                            {
                                "id": "1639404761649",
                                "field": "firstName"
                            },
                            {
                                "id": "1639404764809",
                                "field": "lastName"
                            },
                            {
                                "id": "1639404766810",
                                "field": "position"
                            }
                        ]
                    }
                },
                "website": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "analyst_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "event_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1639667712314",
                                "field": "event"
                            },
                            {
                                "id": "1639667715942",
                                "field": "user"
                            },
                            {
                                "id": "1639667720510",
                                "field": "date"
                            }
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "date",
                    "sortDirection": "desc",
                    "configureLinkedCard": {
                        "fields": {
                            "date": {
                                "id": "date",
                                "content": "Date",
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
                                    "dateFormat": "DD MMM, Y,",
                                    "timeFormat": " HH:mm",
                                    "isUTC": "false"
                                }
                            },
                            "event": {
                                "id": "event",
                                "content": "Event",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
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
                            "project_id": {
                                "id": "project_id",
                                "content": "Project",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            },
                            "user": {
                                "id": "user",
                                "content": "User",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "event": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "id": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "project_id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "user": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "date",
                            "user",
                            "project_id",
                            "event",
                            "id"
                        ]
                    },
                    "subHeader": "Event: "
                },
                "investor_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "partner_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "servise_provider_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "69421639220245895",
                    "name": "Move to Screening",
                    "displayAs": "button",
                    "buttonType": "accent",
                    "buttonIcon": "done",
                    "closePopup": true,
                    "showMessage": false,
                    "dropdown": true
                },
                {
                    "sysName": "",
                    "id": "13251639220246787",
                    "name": "Reject",
                    "displayAs": "button",
                    "buttonType": "danger",
                    "buttonIcon": "ban",
                    "closePopup": true,
                    "showMessage": false,
                    "dropdown": true,
                    "formFields": []
                }
            ],
            "cardImageSizeHeight": 150,
            "cardImageResize": "contain"
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "analyst_ids",
                "name": "Analysts team",
                "dataType": "arrayLink",
                "id": "14231639663934567",
                "link": "WebUser",
                "group": "1639663912103",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "attached_files",
                "name": "Attached files",
                "dataType": "file",
                "id": "63191639403918882",
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
                "format": "multipleFiles",
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "description",
                "name": "Short description",
                "dataType": "string",
                "id": "24521636920364485",
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
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "emails",
                "name": "Emails",
                "dataType": "arrayLink",
                "id": "73331637165505301",
                "link": "parsed_emails",
                "group": "1636918595238",
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
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "event_ids",
                "name": "Events",
                "dataType": "arrayLink",
                "id": "34621639665365546",
                "link": "projects_events",
                "group": "1639663912103",
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
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "investor_ids",
                "name": "Investors who have an access",
                "dataType": "arrayLink",
                "id": "43731639663918598",
                "link": "WebUser",
                "group": "1639663912103",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "logo",
                "name": "Logo",
                "dataType": "file",
                "id": "25231639403856783",
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
                "format": "image",
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "partner_ids",
                "name": "Partners",
                "dataType": "arrayLink",
                "id": "75041639663942840",
                "link": "WebUser",
                "group": "1639663912103",
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
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "servise_provider_ids",
                "name": "Service provoders",
                "dataType": "arrayLink",
                "id": "77591639664137543",
                "link": "WebUser",
                "group": "1639663912103",
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
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "team",
                "name": "Startup Team",
                "dataType": "arrayLink",
                "id": "39861639403965801",
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
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "title",
                "name": "Title",
                "dataType": "string",
                "id": "99321636920358355",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "website",
                "name": "Web-site",
                "dataType": "string",
                "id": "26451639403842222",
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
                "format": "webLink",
                "formatOptions": null,
                "groupName": null,
                "typeVariable": {},
                "linkType": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "data": [
            {
                "website": "funspace.ru",
                "description": "Фанспейс – это быстро растущий интернет-стартап. Команда выпускников Физтеха при поддержке известного бизнес-ангела создали и запустили легальный музыкальный стриминг-портал FunSpace.ru Запуск проекта состоялся 1 ноября 2010 года. Работа программистом в команде проекта даст большой опыт работы с современными средствами веб-разработки (C#, MSSQL, собственный js-фреймворк).",
                "logo": "https://api.directual.com/fileUploaded/jj/web/b06e967b-35c5-49bd-9288-d5e4931f1326.jpeg",
                "team": [
                    {
                        "lastName": "Ершов",
                        "firstName": "Павел",
                        "id": "pavel@ershov.org",
                        "position": "founder",
                        "displayedName": "founder at Funspace"
                    }
                ],
                "title": "Funspace",
                "event_ids": [
                    {
                        "event": "Request is created",
                        "id": "2b870b9c-920a-4500-98fd-adeeffbfde88",
                        "date": 1640551095000,
                        "project_id": {
                            "title": "Funspace"
                        },
                        "user": {
                            "firstName": "Павел",
                            "lastName": "Ершов",
                            "displayedName": "founder at Funspace",
                            "id": "pavel@ershov.org"
                        }
                    },
                    {
                        "event": "Request is approved",
                        "id": "c85ea738-c866-441c-87eb-28f8ae382085",
                        "date": 1640551135000,
                        "project_id": {
                            "title": "Funspace"
                        },
                        "user": {
                            "lastName": "Ershov",
                            "firstName": "Pavel",
                            "id": "liat@frtk.ru",
                            "displayedName": "Super Admin",
                            "userpic": "https://api.directual.com/fileUploaded/jj/web/f13021d4-691f-431b-b212-6b69aacebcec.jpg"
                        }
                    }
                ]
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "analyst_ids.displayedName",
                99046526
            ],
            [
                "analyst_ids.firstName",
                99046526
            ],
            [
                "analyst_ids.id",
                99046526
            ],
            [
                "analyst_ids.lastName",
                99046526
            ],
            [
                "analyst_ids.userpic",
                99046526
            ],
            [
                "attached_files",
                99055454
            ],
            [
                "description",
                99055454
            ],
            [
                "emails.attachments",
                99055457
            ],
            [
                "emails.date",
                99055457
            ],
            [
                "emails.from",
                99055457
            ],
            [
                "emails.subject",
                99055457
            ],
            [
                "emails.text",
                99055457
            ],
            [
                "event_ids.date",
                99056682
            ],
            [
                "event_ids.event",
                99056682
            ],
            [
                "event_ids.id",
                99056682
            ],
            [
                "event_ids.project_id.title",
                99055454
            ],
            [
                "event_ids.user.displayedName",
                99046526
            ],
            [
                "event_ids.user.firstName",
                99046526
            ],
            [
                "event_ids.user.id",
                99046526
            ],
            [
                "event_ids.user.lastName",
                99046526
            ],
            [
                "event_ids.user.userpic",
                99046526
            ],
            [
                "investor_ids.displayedName",
                99046526
            ],
            [
                "investor_ids.firstName",
                99046526
            ],
            [
                "investor_ids.id",
                99046526
            ],
            [
                "investor_ids.lastName",
                99046526
            ],
            [
                "investor_ids.userpic",
                99046526
            ],
            [
                "logo",
                99055454
            ],
            [
                "partner_ids.displayedName",
                99046526
            ],
            [
                "partner_ids.firstName",
                99046526
            ],
            [
                "partner_ids.id",
                99046526
            ],
            [
                "partner_ids.lastName",
                99046526
            ],
            [
                "partner_ids.userpic",
                99046526
            ],
            [
                "servise_provider_ids.displayedName",
                99046526
            ],
            [
                "servise_provider_ids.firstName",
                99046526
            ],
            [
                "servise_provider_ids.id",
                99046526
            ],
            [
                "servise_provider_ids.lastName",
                99046526
            ],
            [
                "servise_provider_ids.userpic",
                99046526
            ],
            [
                "team.displayedName",
                99046526
            ],
            [
                "team.firstName",
                99046526
            ],
            [
                "team.lastName",
                99046526
            ],
            [
                "team.position",
                99046526
            ],
            [
                "team.userpic",
                99046526
            ],
            [
                "title",
                99055454
            ],
            [
                "website",
                99055454
            ]
        ],
        "writeFields": [],
        "structures": {
            "99046526": {
                "networkID": 10594,
                "sysName": "WebUser",
                "name": "App users",
                "id": 99046526,
                "dateCreated": "2021-11-13T20:03:09Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"dateLastActivity\",\"name\":\"dateLastActivity\",\"dataType\":\"string\",\"id\":\"8\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"name\":\"dateCreated\",\"dataType\":\"string\",\"id\":\"11\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isAuthorization\",\"name\":\"isAuthorization\",\"dataType\":\"boolean\",\"id\":\"7\",\"link\":\"\",\"group\":\"-1776115286\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":\"System fields\",\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"phone\",\"name\":\"Phone\",\"dataType\":\"string\",\"id\":\"10\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"phone\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"email\",\"name\":\"Email\",\"dataType\":\"string\",\"id\":\"9\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"userpic\",\"name\":\"User pic\",\"dataType\":\"file\",\"id\":\"1\",\"link\":\"\",\"group\":\"-502807437\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":\"Contacts\",\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"id\",\"name\":\"Username (login)\",\"dataType\":\"id\",\"id\":\"13\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"role\",\"name\":\"Roles\",\"dataType\":\"string\",\"id\":\"6\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"password\",\"name\":\"Password (hash)\",\"dataType\":\"string\",\"id\":\"12\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"firstName\",\"name\":\"First name\",\"dataType\":\"string\",\"id\":\"5\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"lastName\",\"name\":\"Last name\",\"dataType\":\"string\",\"id\":\"4\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"gender\",\"name\":\"Gender\",\"dataType\":\"string\",\"id\":\"3\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isBlocked\",\"name\":\"Block user\",\"dataType\":\"boolean\",\"id\":\"2\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"displayedName\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"36841639666350964\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"secret\",\"name\":\"secret\",\"dataType\":\"string\",\"id\":\"81131636839496227\",\"link\":\"\",\"group\":\"1636839487957\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"project_related_ids\",\"name\":\"Startups I work with\",\"dataType\":\"arrayLink\",\"id\":\"10591639666580160\",\"link\":\"projects\",\"group\":\"1639404461476\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"notif_TG\",\"name\":\"Notify me on Telegram\",\"dataType\":\"boolean\",\"id\":\"55581639915058553\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"notif_Email\",\"name\":\"Notify me by Email\",\"dataType\":\"boolean\",\"id\":\"61231639915065277\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Yes\",\"No\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"TChat\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"51251639915154028\",\"link\":\"TChat\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"TG_connected\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"14511639917675138\",\"link\":\"\",\"group\":\"1639915049523\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"project_startup_ids\",\"name\":\"Startups I founded\",\"dataType\":\"arrayLink\",\"id\":\"99101639666544049\",\"link\":\"projects\",\"group\":\"1640545084014\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"position\",\"name\":\"Position\",\"dataType\":\"string\",\"id\":\"80781639404250182\",\"link\":null,\"group\":\"1640545084014\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"investor_description\",\"name\":\"Investor description\",\"dataType\":\"string\",\"id\":\"20761640545659727\",\"link\":null,\"group\":\"1640545217327\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"investor_name\",\"name\":\"Fund name\",\"dataType\":\"string\",\"id\":\"92711640545660269\",\"link\":null,\"group\":\"1640545217327\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"investor_url\",\"name\":\"Fund web-site or Linkedin\",\"dataType\":\"string\",\"id\":\"66071640545660807\",\"link\":\"\",\"group\":\"1640545217327\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"partner_name\",\"name\":\"Partner name\",\"dataType\":\"string\",\"id\":\"50731640545683109\",\"link\":null,\"group\":\"1640545225304\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"partner_description\",\"name\":\"Partner description\",\"dataType\":\"string\",\"id\":\"63771640545684282\",\"link\":null,\"group\":\"1640545225304\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"partner_url\",\"name\":\"Web-site\",\"dataType\":\"string\",\"id\":\"35691640545684840\",\"link\":\"\",\"group\":\"1640545225304\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sp_name\",\"name\":\"Service Provider name\",\"dataType\":\"string\",\"id\":\"42411640545708896\",\"link\":null,\"group\":\"1640545234672\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sp_description\",\"name\":\"What service it provides\",\"dataType\":\"string\",\"id\":\"20711640545710396\",\"link\":null,\"group\":\"1640545234672\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"sp_url\",\"name\":\"Web-site\",\"dataType\":\"string\",\"id\":\"66271640545710955\",\"link\":\"\",\"group\":\"1640545234672\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Password restoring\",\"id\":1636839487957,\"order\":7},{\"name\":\"Startuper fields\",\"id\":1640545084014,\"order\":0},{\"name\":\"Service Provider fields\",\"id\":1640545234672,\"order\":4},{\"name\":\"Investor fields\",\"id\":1640545217327,\"order\":2},{\"name\":\"System fields (LEGACY)\",\"id\":-1776115286,\"order\":8},{\"name\":\"Partner fields\",\"id\":1640545225304,\"order\":3},{\"name\":\"Notifications\",\"id\":1639915049523,\"order\":6},{\"name\":\"Contacts\",\"id\":-502807437,\"order\":5},{\"name\":\"My projects\",\"id\":1639404461476,\"order\":1}]",
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"},{\"sysName\":\"displayedName\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-26T20:14:54Z",
                "createBy": 0,
                "changedBy": 1,
                "_settings": null,
                "_nativeIndexSettings": null,
                "innerIDField": {
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
                    "linkType": false,
                    "indexExists": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": null
            },
            "99055454": {
                "networkID": 10594,
                "sysName": "projects",
                "name": "Projects (pipeline)",
                "id": 99055454,
                "dateCreated": "2021-11-14T19:35:37Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"title\",\"name\":\"Title\",\"dataType\":\"string\",\"id\":\"99321636920358355\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"description\",\"name\":\"Short description\",\"dataType\":\"string\",\"id\":\"24521636920364485\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"logo\",\"name\":\"Logo\",\"dataType\":\"file\",\"id\":\"25231639403856783\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"website\",\"name\":\"Web-site\",\"dataType\":\"string\",\"id\":\"26451639403842222\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"attached_files\",\"name\":\"Attached files\",\"dataType\":\"file\",\"id\":\"63191639403918882\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"team\",\"name\":\"Startup Team\",\"dataType\":\"arrayLink\",\"id\":\"39861639403965801\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"domains\",\"name\":\"List of domains\",\"dataType\":\"array\",\"id\":\"23651636918569823\",\"link\":\"\",\"group\":\"1636918595238\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":true},{\"sysName\":\"attachments\",\"name\":\"Attachments\",\"dataType\":\"arrayLink\",\"id\":\"53061636920409833\",\"link\":\"attachments\",\"group\":\"1636918595238\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"emails\",\"name\":\"Emails\",\"dataType\":\"arrayLink\",\"id\":\"73331637165505301\",\"link\":\"parsed_emails\",\"group\":\"1636918595238\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"investor_ids\",\"name\":\"Investors who have an access\",\"dataType\":\"arrayLink\",\"id\":\"43731639663918598\",\"link\":\"WebUser\",\"group\":\"1639663912103\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"analyst_ids\",\"name\":\"Analysts team\",\"dataType\":\"arrayLink\",\"id\":\"14231639663934567\",\"link\":\"WebUser\",\"group\":\"1639663912103\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"partner_ids\",\"name\":\"Partners\",\"dataType\":\"arrayLink\",\"id\":\"75041639663942840\",\"link\":\"WebUser\",\"group\":\"1639663912103\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"servise_provider_ids\",\"name\":\"Service provoders\",\"dataType\":\"arrayLink\",\"id\":\"77591639664137543\",\"link\":\"WebUser\",\"group\":\"1639663912103\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"event_ids\",\"name\":\"Events\",\"dataType\":\"arrayLink\",\"id\":\"34621639665365546\",\"link\":\"projects_events\",\"group\":\"1639663912103\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"pipeline_status\",\"name\":\"Pipeline status\",\"dataType\":\"link\",\"id\":\"64161640539258747\",\"link\":\"pipeline_statuses\",\"group\":\"1639663912103\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"admin\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"30561639664906663\",\"link\":\"\",\"group\":\"1639664898470\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Emails parsing\",\"id\":1636918595238,\"order\":0},{\"name\":\"Workflow\",\"id\":1639663912103,\"order\":1},{\"name\":\"Technical group\",\"id\":1639664898470,\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"title\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-26T18:21:08Z",
                "createBy": 21,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33677059
            },
            "99055457": {
                "networkID": 10594,
                "sysName": "parsed_emails",
                "name": "parsed emails",
                "id": 99055457,
                "dateCreated": "2021-11-14T19:39:02Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"subject\",\"dataType\":\"string\",\"name\":\"Subject\",\"id\":\"92441637161160551\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"from\",\"dataType\":\"string\",\"name\":\"From\",\"id\":\"11801637161162900\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"project_id\",\"dataType\":\"link\",\"name\":\"Project\",\"id\":\"62851637161178710\",\"link\":\"projects\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"text\",\"dataType\":\"string\",\"name\":\"Text\",\"id\":\"79841637161192563\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"html\",\"dataType\":\"string\",\"name\":\"Html text\",\"id\":\"42911637161208858\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"html\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"attachment_ids\",\"dataType\":\"arrayLink\",\"name\":\"Attachments\",\"id\":\"99301637161220184\",\"link\":\"attachments\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"date\",\"dataType\":\"date\",\"name\":\"Date\",\"id\":\"53721637161237442\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"attachments\",\"dataType\":\"file\",\"name\":\"Attachments\",\"id\":\"47501637166464151\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"routed\",\"dataType\":\"boolean\",\"name\":\"Routed to a project\",\"id\":\"35031637165370928\",\"link\":\"\",\"group\":\"1637165364040\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@who\",\"dataType\":\"string\",\"name\":\"who changed\",\"id\":\"-1\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateCreated\",\"dataType\":\"date\",\"name\":\"date created\",\"id\":\"-2\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"@dateChanged\",\"dataType\":\"date\",\"name\":\"date changed\",\"id\":\"-3\",\"link\":\"\",\"group\":\"\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":null,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Auto routing\",\"id\":1637165364040,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"from\"},{\"sysName\":\"subject\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-11-17T16:35:26Z",
                "createBy": 21,
                "changedBy": 21,
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33671252
            },
            "99056682": {
                "networkID": 10594,
                "sysName": "projects_events",
                "name": "🛎 Projects' Events",
                "id": 99056682,
                "dateCreated": "2021-12-16T14:33:47Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"project_id\",\"name\":\"Project\",\"dataType\":\"link\",\"id\":\"85031639665247381\",\"link\":\"projects\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"event\",\"name\":\"Event\",\"dataType\":\"string\",\"id\":\"25531639665248085\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"user\",\"name\":\"User\",\"dataType\":\"link\",\"id\":\"48011639665266301\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date\",\"name\":\"Date\",\"dataType\":\"date\",\"id\":\"25831639665278300\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM, Y,\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"event\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-26T18:21:31Z",
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "objectIDSysName": "id",
                "folderId": 33677059
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false",
        "httpParams": []
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
        "sl": "4stage-offers",
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
                        "fieldSysName": "invoices_arrayLink",
                        "fetch": [
                            {
                                "fieldSysName": "company_inn",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "company_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "invoiceDate",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "invoiceID",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "invoice_status",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "order_description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "order_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "order_sum",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paymentMethod_terminalID",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paymentStatus",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paymentUrl",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "payment_date",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "invoices_arrayLink",
                        "name": "Инвойсы",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "invoice"
                    },
                    {
                        "fieldSysName": "offer_date",
                        "fetch": [],
                        "sysName": "offer_date",
                        "name": "Дата начало",
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
                    },
                    {
                        "fieldSysName": "stage_status",
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
                        "sysName": "stage_status",
                        "name": "Статус этапа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_stage_statuses"
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
                        "fieldSysName": "payment_doc",
                        "fetch": [],
                        "sysName": "payment_doc",
                        "name": "Платежный документ",
                        "dataType": "file",
                        "format": "image",
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
                    },
                    {
                        "fieldSysName": "stage_status",
                        "fetch": [],
                        "sysName": "stage_status",
                        "name": "Статус этапа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_stage_statuses"
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
                    "invoices_arrayLink": {
                        "id": "invoices_arrayLink",
                        "content": "Инвойсы",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "invoice",
                        "actions": []
                    },
                    "offer_date": {
                        "id": "offer_date",
                        "content": "Дата начало",
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
                    "stage_status": {
                        "id": "stage_status",
                        "content": "Статус этапа",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "4_stage_statuses",
                        "actions": []
                    },
                    "payment_doc": {
                        "id": "payment_doc",
                        "content": "Платежный документ",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "write": true,
                        "link": "",
                        "actions": []
                    },
                    "action__77911639409041124": {
                        "content": "  ",
                        "id": "action__77911639409041124",
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
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "company_name": {
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
                        "displayAsHint": true,
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
                        "include": false,
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
                    "email_send_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_descr": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "sum": {
                        "include": true,
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
                    },
                    "payment_doc": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "stage_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": true,
                        "fileImageSize": 200,
                        "clickable": false,
                        "quickSearchSL": "getStatuses4stage"
                    },
                    "invoices_arrayLink": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": true,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1640865252633",
                                    "field": "invoiceDate"
                                },
                                {
                                    "id": "1640861324860",
                                    "field": "invoice_status"
                                },
                                {
                                    "id": "1640865282772",
                                    "field": "payment_date"
                                }
                            ]
                        },
                        "configureLinkedCard": {
                            "fields": {
                                "company_inn": {
                                    "id": "company_inn",
                                    "content": "ИНН",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "company_name": {
                                    "id": "company_name",
                                    "content": "Компания",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "invoiceDate": {
                                    "id": "invoiceDate",
                                    "content": "Дата инвойса",
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
                                        "dateFormat": "DD/MM/Y,",
                                        "timeFormat": " HH:mm",
                                        "isUTC": "false"
                                    }
                                },
                                "invoice_status": {
                                    "id": "invoice_status",
                                    "content": "Статус инвойса",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "order_description": {
                                    "id": "order_description",
                                    "content": "Назначение платежа",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "order_id": {
                                    "id": "order_id",
                                    "content": "ID  заявки",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "order_sum": {
                                    "id": "order_sum",
                                    "content": "Сумма инвойса",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "paymentMethod_terminalID": {
                                    "id": "paymentMethod_terminalID",
                                    "content": "paymentMethod_terminalID",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "paymentStatus": {
                                    "id": "paymentStatus",
                                    "content": "Статус оплаты",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "paymentUrl": {
                                    "id": "paymentUrl",
                                    "content": "Ссылка для оплаты",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": "webLink",
                                    "formatOptions": {}
                                },
                                "payment_date": {
                                    "id": "payment_date",
                                    "content": "Дата оплаты",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "date",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "invoiceID": {
                                    "id": "invoiceID",
                                    "content": "ID в системе Инвойс",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "company_inn": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "company_name": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "invoiceDate": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "invoice_status": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "order_description": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "order_id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "order_sum": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "paymentMethod_terminalID": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "paymentStatus": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "paymentUrl": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "payment_date": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "invoiceID": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "company_name",
                                "company_inn",
                                "order_id",
                                "invoiceDate",
                                "order_sum",
                                "invoice_status",
                                "order_description",
                                "paymentUrl",
                                "paymentMethod_terminalID",
                                "paymentStatus",
                                "payment_date",
                                "invoiceID"
                            ]
                        },
                        "sortArrayLink": true,
                        "sortByField": "invoiceDate"
                    }
                },
                "columns": {
                    "tab-1": {
                        "id": "tab-1",
                        "title": "Статус",
                        "fieldIds": [
                            "id",
                            "company_inn",
                            "company_name",
                            "offer_date",
                            "stage_status",
                            "requestID_link",
                            "payment_color"
                        ]
                    },
                    "93301640543644372": {
                        "id": "93301640543644372",
                        "title": "Оплата",
                        "fieldIds": [
                            "payment_status",
                            "payment_date",
                            "payment_sum",
                            "payment_doc"
                        ]
                    },
                    "85181640543680908": {
                        "id": "85181640543680908",
                        "title": "Офер клиенту",
                        "fieldIds": [
                            "offer_text",
                            "payment_webLink",
                            "clients_email",
                            "email_send_date",
                            "action__77911639409041124"
                        ]
                    },
                    "57191640861044741": {
                        "id": "57191640861044741",
                        "title": "Инвойсы",
                        "fieldIds": [
                            "invoices_arrayLink"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1",
                    "85181640543680908",
                    "93301640543644372",
                    "57191640861044741"
                ],
                "actions": [
                    {
                        "sysName": "sendEmail",
                        "id": "77911639409041124",
                        "name": "  ",
                        "displayAs": "form",
                        "buttonIcon": "mail",
                        "buttonType": "accent",
                        "buttonTitle": "Отправить",
                        "showMessage": true,
                        "closePopup": false,
                        "resultMessage": "Отпрвлено!",
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
                                    "fieldSysName": "clients_email",
                                    "fetch": [],
                                    "sysName": "clients_email",
                                    "name": "Эмейл",
                                    "dataType": "string",
                                    "format": "email",
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
                                }
                            ]
                        },
                        "formFields": [
                            {
                                "id": "68371639409116019",
                                "field": {
                                    "fieldSysName": "clients_email",
                                    "fetch": [],
                                    "sysName": "clients_email",
                                    "name": "Эмейл",
                                    "dataType": "string",
                                    "format": "email",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "71541639409119688",
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
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "company_name": {
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
                    "displayAsHint": true,
                    "quickSearchSL": "offers_status",
                    "searchData": [
                        {
                            "key": "0",
                            "value": "Не оплачен"
                        },
                        {
                            "key": "1",
                            "value": "Оплачен"
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
                    "include": false,
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
                "email_send_date": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_descr": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "sum": {
                    "include": true,
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
                },
                "payment_doc": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "stage_status": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": true,
                    "fileImageSize": 200,
                    "clickable": false,
                    "quickSearchSL": "getStatuses4stage",
                    "searchData": [
                        {
                            "key": "0",
                            "value": "Ожидание оплаты"
                        },
                        {
                            "key": "1",
                            "value": "Успешно завершено"
                        },
                        {
                            "key": "2",
                            "value": "Отказ клиента"
                        }
                    ]
                },
                "invoices_arrayLink": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": true,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1640865252633",
                                "field": "invoiceDate"
                            },
                            {
                                "id": "1640861324860",
                                "field": "invoice_status"
                            },
                            {
                                "id": "1640865282772",
                                "field": "payment_date"
                            }
                        ]
                    },
                    "configureLinkedCard": {
                        "fields": {
                            "company_inn": {
                                "id": "company_inn",
                                "content": "ИНН",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "company_name": {
                                "id": "company_name",
                                "content": "Компания",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "invoiceDate": {
                                "id": "invoiceDate",
                                "content": "Дата инвойса",
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
                                    "dateFormat": "DD/MM/Y,",
                                    "timeFormat": " HH:mm",
                                    "isUTC": "false"
                                }
                            },
                            "invoice_status": {
                                "id": "invoice_status",
                                "content": "Статус инвойса",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "order_description": {
                                "id": "order_description",
                                "content": "Назначение платежа",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "order_id": {
                                "id": "order_id",
                                "content": "ID  заявки",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "order_sum": {
                                "id": "order_sum",
                                "content": "Сумма инвойса",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "paymentMethod_terminalID": {
                                "id": "paymentMethod_terminalID",
                                "content": "paymentMethod_terminalID",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "paymentStatus": {
                                "id": "paymentStatus",
                                "content": "Статус оплаты",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "paymentUrl": {
                                "id": "paymentUrl",
                                "content": "Ссылка для оплаты",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": "webLink",
                                "formatOptions": {}
                            },
                            "payment_date": {
                                "id": "payment_date",
                                "content": "Дата оплаты",
                                "type": "field",
                                "read": true,
                                "dataType": "date",
                                "format": null,
                                "formatOptions": {}
                            },
                            "invoiceID": {
                                "id": "invoiceID",
                                "content": "ID в системе Инвойс",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "company_inn": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "company_name": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "invoiceDate": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "invoice_status": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "order_description": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "order_id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "order_sum": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "paymentMethod_terminalID": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "paymentStatus": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "paymentUrl": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "payment_date": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "invoiceID": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "company_name",
                            "company_inn",
                            "order_id",
                            "invoiceDate",
                            "order_sum",
                            "invoice_status",
                            "order_description",
                            "paymentUrl",
                            "paymentMethod_terminalID",
                            "paymentStatus",
                            "payment_date",
                            "invoiceID"
                        ]
                    },
                    "sortArrayLink": true,
                    "sortByField": "invoiceDate"
                }
            },
            "tableParams": {
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
                        "fieldSysName": "invoices_arrayLink",
                        "fetch": [
                            {
                                "fieldSysName": "company_inn",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "company_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "invoiceDate",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "invoiceID",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "invoice_status",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "order_description",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "order_id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "order_sum",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paymentMethod_terminalID",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paymentStatus",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "paymentUrl",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "payment_date",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "invoices_arrayLink",
                        "name": "Инвойсы",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "invoice"
                    },
                    {
                        "fieldSysName": "offer_date",
                        "fetch": [],
                        "sysName": "offer_date",
                        "name": "Дата начало",
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
                    },
                    {
                        "fieldSysName": "stage_status",
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
                        "sysName": "stage_status",
                        "name": "Статус этапа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_stage_statuses"
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
                        "fieldSysName": "payment_doc",
                        "fetch": [],
                        "sysName": "payment_doc",
                        "name": "Платежный документ",
                        "dataType": "file",
                        "format": "image",
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
                    },
                    {
                        "fieldSysName": "stage_status",
                        "fetch": [],
                        "sysName": "stage_status",
                        "name": "Статус этапа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "4_stage_statuses"
                    }
                ],
                "fields": {
                    "clients_email": {
                        "id": "clients_email",
                        "content": "Эмейл клиента",
                        "dataType": "string",
                        "format": "email",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "company_inn": {
                        "id": "company_inn",
                        "content": "ИНН",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "company_name": {
                        "id": "company_name",
                        "content": "Название компании",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "email_send_date": {
                        "id": "email_send_date",
                        "content": "Дата отправки эмейла",
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
                        "link": ""
                    },
                    "id": {
                        "id": "id",
                        "content": "ID",
                        "dataType": "id",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": ""
                    },
                    "invoices_arrayLink": {
                        "id": "invoices_arrayLink",
                        "content": "Инвойсы",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "invoice"
                    },
                    "offer_date": {
                        "id": "offer_date",
                        "content": "Дата начало",
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
                        "link": ""
                    },
                    "offer_text": {
                        "id": "offer_text",
                        "content": "Офер",
                        "dataType": "string",
                        "format": "markdown",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "payment_color": {
                        "id": "payment_color",
                        "content": "payment_color",
                        "dataType": "string",
                        "format": "color",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "payment_date": {
                        "id": "payment_date",
                        "content": "Дата оплаты",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "payment_status": {
                        "id": "payment_status",
                        "content": "Статус оплаты",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "4_stage_payment_status"
                    },
                    "payment_sum": {
                        "id": "payment_sum",
                        "content": "Сумма оплаты",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "payment_webLink": {
                        "id": "payment_webLink",
                        "content": "Ссылка на страницу с оплатой",
                        "dataType": "string",
                        "format": "webLink",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "requestID_link": {
                        "id": "requestID_link",
                        "content": "ID заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "scoring_request_tgbot"
                    },
                    "stage_status": {
                        "id": "stage_status",
                        "content": "Статус этапа",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "4_stage_statuses"
                    },
                    "payment_doc": {
                        "id": "payment_doc",
                        "content": "Платежный документ",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "write": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "clients_email": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "company_inn": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "company_name": {
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
                    "offer_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "offer_text": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payment_date": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payment_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payment_sum": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payment_webLink": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payments_link": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "requestID_link": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "email_send_date": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payment_color": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "payment_doc": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "stage_status": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "invoices_arrayLink": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "id",
                    "offer_date",
                    "company_name",
                    "company_inn",
                    "stage_status",
                    "payment_status",
                    "payment_date",
                    "clients_email",
                    "offer_text",
                    "payment_sum",
                    "payment_webLink",
                    "requestID_link",
                    "email_send_date",
                    "payment_color",
                    "payment_doc",
                    "invoices_arrayLink"
                ]
            },
            "actions": [
                {
                    "sysName": "sendEmail",
                    "id": "77911639409041124",
                    "name": "  ",
                    "displayAs": "form",
                    "buttonIcon": "mail",
                    "buttonType": "accent",
                    "buttonTitle": "Отправить",
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Отпрвлено!",
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
                                "fieldSysName": "clients_email",
                                "fetch": [],
                                "sysName": "clients_email",
                                "name": "Эмейл",
                                "dataType": "string",
                                "format": "email",
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
                            }
                        ]
                    },
                    "formFields": [
                        {
                            "id": "68371639409116019",
                            "field": {
                                "fieldSysName": "clients_email",
                                "fetch": [],
                                "sysName": "clients_email",
                                "name": "Эмейл",
                                "dataType": "string",
                                "format": "email",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "71541639409119688",
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "invoices_arrayLink",
                "dataType": "arrayLink",
                "name": "Инвойсы",
                "id": "20461640858093584",
                "link": "invoice",
                "group": "1639403909672",
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
                "arrayLink": true,
                "linkOrArrayLinkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "offer_date",
                "dataType": "date",
                "name": "Дата начало",
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": true,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "stage_status",
                "dataType": "link",
                "name": "Статус этапа",
                "id": "26741640542688653",
                "link": "4_stage_statuses",
                "group": "0",
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
                "arrayLink": false,
                "linkOrArrayLinkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": true,
                "array": false
            }
        ],
        "data": [
            {
                "company_inn": "7743330499",
                "offer_date": 1640865358000,
                "company_name": "ООО \"СЕВЕРСТРОЙГРУПП\"",
                "stage_status": {
                    "name": "Ожидание оплаты",
                    "id": "0"
                },
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 3000000р. до 5000000р. на Карме:\n- Исполнение государственного контракта/закупки ;\n- Ставка 2% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 8 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 3 дней c момента подписания документов;\n- Прочие существенные условия: Перевод выручки на номинальный счет под контроль Кармы\n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов.\n\n**Ссылка для оплаты комиссии - https://pay.invoice.su/P16408653586022**\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nС уважением, команда инвестиционной платформы Карма",
                "payment_status": {
                    "name": "Не оплачен",
                    "status_color": "#FFE4B5",
                    "id": "0"
                },
                "payment_webLink": "https://pay.invoice.su/P16408653586022",
                "id": "90a10744-4be9-4f38-a61c-04e2a4bda7a3",
                "requestID_link": "90a10744-4be9-4f38-a61c-04e2a4bda7a3",
                "invoices_arrayLink": [
                    {
                        "company_inn": "7743330499",
                        "company_name": "ООО \"СЕВЕРСТРОЙГРУПП\"",
                        "order_sum": "10",
                        "paymentMethod_terminalID": "60efa0a81b6c4ae8f0b846df5432e210",
                        "id": "ad06944f-ef8c-4eb9-aa3f-2bbfe51b1978",
                        "invoiceID": "16408646773676",
                        "order_description": "ООО \"СЕВЕРСТРОЙГРУПП\""
                    },
                    {
                        "company_inn": "7743330499",
                        "company_name": "ООО \"СЕВЕРСТРОЙГРУПП\"",
                        "order_sum": "10",
                        "invoiceDate": 1640864892000,
                        "paymentUrl": "https://pay.invoice.su/P16408648927763",
                        "invoice_status": "init",
                        "paymentMethod_terminalID": "60efa0a81b6c4ae8f0b846df5432e210",
                        "id": "47f24ad9-025f-425a-901d-86b06a96814c",
                        "invoiceID": "16408648927763",
                        "order_description": "ООО \"СЕВЕРСТРОЙГРУПП\""
                    },
                    {
                        "company_inn": "7743330499",
                        "company_name": "ООО \"СЕВЕРСТРОЙГРУПП\"",
                        "order_sum": "10",
                        "invoiceDate": 1640865358000,
                        "paymentUrl": "https://pay.invoice.su/P16408653586022",
                        "invoice_status": "Ожидает оплаты",
                        "paymentMethod_terminalID": "60efa0a81b6c4ae8f0b846df5432e210",
                        "id": "db6c2e65-8c3e-4637-a590-0df02e74ed25",
                        "invoiceID": "16408653586022",
                        "order_description": "ООО \"СЕВЕРСТРОЙГРУПП\""
                    }
                ],
                "payment_doc": ""
            },
            {
                "company_inn": "7719857830",
                "offer_date": 1640849051000,
                "company_name": "ООО СК \"СТРОЙОТЕЛЬ\"",
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 4500000р. до 4500000р. на Карме:\n- Исполнение государственного контракта/закупки 2772939766021000144;\n- Ставка 1.5% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 7 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 2 дней c момента подписания документов;\n- Прочие существенные условия: \n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов.\n\n**Ссылка для оплаты комиссии - pay.karma.red/nwx**\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nС уважением, команда инвестиционной платформы Карма",
                "payment_status": "не оплачено",
                "payment_webLink": "pay.karma.red/nwx",
                "id": "7719857830|2772939766021000144",
                "requestID_link": "7719857830|2772939766021000144",
                "payment_doc": "",
                "stage_status": ""
            },
            {
                "company_inn": "4632057986",
                "offer_date": 1640795656000,
                "company_name": "ООО \"Курскгазопровод\"",
                "stage_status": {
                    "name": "Ожидание оплаты",
                    "id": "0"
                },
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 4000000р. до 4000000р. на Карме:\n- Исполнение государственного контракта/закупки ;\n- Ставка 1.7% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 5 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 2 дней c момента подписания документов;\n- Прочие существенные условия: \n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов.\n\n**Ссылка для оплаты комиссии - pay.karma.red/ijz**\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nС уважением, команда инвестиционной платформы Карма",
                "payment_status": "не оплачено",
                "payment_webLink": "pay.karma.red/ijz",
                "id": "e1be4df0-6098-4c99-87fa-a5bdd84314e3",
                "requestID_link": "e1be4df0-6098-4c99-87fa-a5bdd84314e3",
                "payment_doc": ""
            },
            {
                "company_inn": "7611997952",
                "offer_date": 1640693798000,
                "company_name": "ООО СК \"ДЕЛИКАТСТРОЙ\"",
                "stage_status": {
                    "name": "Успешно завершено",
                    "id": "1"
                },
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 3000000р. до 3000000р. на Карме:\n- Исполнение государственного контракта/закупки 32110762916;\n- Ставка 1.5% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 11 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 2 дней c момента подписания документов;\n- Прочие существенные условия: \n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов.\n\n**Ссылка для оплаты комиссии - pay.karma.red/y7q**\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nС уважением, команда инвестиционной платформы Карма",
                "payment_status": {
                    "status_color": "#7CFC00",
                    "name": "Оплачен",
                    "id": "1"
                },
                "payment_webLink": "pay.karma.red/y7q",
                "id": "7611997952|32110762916",
                "payment_color": "#7CFC00",
                "requestID_link": "7611997952|32110762916",
                "clients_email": "zaem@karma.red",
                "email_send_date": 1640784548000,
                "payment_doc": ""
            },
            {
                "company_inn": "2365024766",
                "offer_date": 1640243524000,
                "company_name": "ООО \"ЮТ-ЖИЛСТРОЙ\"",
                "stage_status": {
                    "name": "Ожидание оплаты",
                    "id": "0"
                },
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 1000000р. до 1000000р. на Карме:\n- Исполнение государственного контракта/закупки 32110651643;\n- Ставка 1.7% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 5 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 1000000 дней c момента подписания документов;\n- Прочие существенные условия: \n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов.\n\n**Ссылка для оплаты комиссии - pay.karma.red/spx**\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nС уважением, команда инвестиционной платформы Карма",
                "payment_status": {
                    "name": "Не оплачен",
                    "status_color": "#FFE4B5",
                    "id": "0"
                },
                "payment_webLink": "pay.karma.red/spx",
                "id": "2365024766|32110651643",
                "payment_color": "#FFE4B5",
                "requestID_link": "2365024766|32110651643",
                "payment_doc": ""
            },
            {
                "company_inn": "5321178517",
                "offer_date": 1639663203000,
                "company_name": "ООО \"ТСК-ВН\"",
                "stage_status": {
                    "name": "Успешно завершено",
                    "id": "1"
                },
                "offer_text": "Поздравляем!\n\nМы одобрили вам заём в сумме от 4000000р. до 4000000р. на Карме:\n- Исполнение государственного контракта/закупки 3470503110021000028;\n- Ставка 1.6% в месяц;\n- Комиссия: 3% от суммы займа;\n- Срок: 11 месяцев, погашение в конце срока, с условием обязателого досрочного погашения за счет выручки по госконтракту;\n- Поручительство бенефициаров (учредителей) с долей более 30%;\n- Внесение номинального счета в Банке Точка в реквизиты госконтракта;\n- Срок предоставления займа: до 2 дней c момента подписания документов.\n\nДля размещения заявки на платформе оплатите комиссию 9900 рублей за подготовку документов \n\nСсылка для оплаты - pay.karma.red/dg3\n\nДанное предложение действительно в течение 14 дней!\nДля уточнения деталей вы можете связаться с вашим менеджером - Тереховой Евгенией или ответить на данное электронное письмо.\n\nКоманда инвестиционной платформы Карма",
                "payment_status": {
                    "status_color": "#7CFC00",
                    "name": "Оплачен",
                    "id": "1"
                },
                "payment_webLink": "pay.karma.red/4r7",
                "id": "5321178517|3470503110021000028",
                "payment_color": "#7CFC00",
                "requestID_link": "5321178517|3470503110021000028",
                "clients_email": "a@karma.red",
                "email_send_date": 1639976457000,
                "payment_doc": ""
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
                "invoices_arrayLink.company_inn",
                99059324
            ],
            [
                "invoices_arrayLink.company_name",
                99059324
            ],
            [
                "invoices_arrayLink.invoiceDate",
                99059324
            ],
            [
                "invoices_arrayLink.invoiceID",
                99059324
            ],
            [
                "invoices_arrayLink.invoice_status",
                99059324
            ],
            [
                "invoices_arrayLink.order_description",
                99059324
            ],
            [
                "invoices_arrayLink.order_id",
                99059324
            ],
            [
                "invoices_arrayLink.order_sum",
                99059324
            ],
            [
                "invoices_arrayLink.paymentMethod_terminalID",
                99059324
            ],
            [
                "invoices_arrayLink.paymentStatus",
                99059324
            ],
            [
                "invoices_arrayLink.paymentUrl",
                99059324
            ],
            [
                "invoices_arrayLink.payment_date",
                99059324
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
                "requestID_link.id",
                1350501
            ],
            [
                "stage_status.id",
                99058963
            ],
            [
                "stage_status.name",
                99058963
            ]
        ],
        "writeFields": [
            "id",
            "payment_doc",
            "payment_status",
            "stage_status"
        ],
        "structures": {
            "1350501": {
                "networkID": 4355,
                "sysName": "scoring_request_tgbot",
                "name": "Заявки на КИК",
                "id": 1350501,
                "dateCreated": "2021-03-03T10:27:37Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_cred_history\",\"dataType\":\"string\",\"name\":\"Согласие на запрос БКИ\",\"id\":\"10041628778275617\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_current_count_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_current_count_Plus_contracts_aff\",\"id\":\"10081637505600973\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_HasDebtFNS\",\"dataType\":\"string\",\"name\":\"company_HasDebtFNS\",\"id\":\"10151637411847904\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_fssp_active_1\",\"dataType\":\"number\",\"name\":\"affilates_fssp_active_F1\",\"id\":\"10401617642939913\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_contractsFinished_sum\",\"dataType\":\"number\",\"name\":\"founder2_contractsFinished_ALL_sum\",\"id\":\"11821619592355477\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_date\",\"dataType\":\"date\",\"name\":\"founder1_date\",\"id\":\"12121619588352045\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_employees_payroll_forTKB\",\"dataType\":\"number\",\"name\":\"ul_employees_payroll_forTKB\",\"id\":\"12441637924600253\",\"link\":\"\",\"group\":\"1637399992291\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"revenue_lastYear_Plus_revenue_aff\",\"dataType\":\"number\",\"name\":\"revenue_lastYear_Plus_revenue_aff\",\"id\":\"12881637505447216\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"inn_check_status_tkb\",\"dataType\":\"boolean\",\"name\":\"inn_check_status_tkb\",\"id\":\"13101637848458693\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_count_F2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_count_F2\",\"id\":\"13981637488704282\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tkb_response\",\"dataType\":\"string\",\"name\":\"Результат ТКБ\",\"id\":\"14381638209202523\",\"link\":null,\"group\":\"1635316815357\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_phone\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"14561637762342313\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courtsSum_devide_revenueLastYear\",\"dataType\":\"decimal\",\"name\":\"courtsSum_devide_revenueLastYear\",\"id\":\"14601637505819611\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"14601637686491408\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"listing_fee\",\"dataType\":\"number\",\"name\":\"Комиссия за выдачу\",\"id\":\"15171636451157189\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_region_code\",\"dataType\":\"string\",\"name\":\"company_region_code\",\"id\":\"16001637411810443\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_email\",\"dataType\":\"string\",\"name\":\"Эмейл\",\"id\":\"16351637762331766\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF2_courts_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF2_courts_active_count\",\"id\":\"16721637490137239\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"verification_link\",\"dataType\":\"link\",\"name\":\"verification_link\",\"id\":\"16821637863153646\",\"link\":\"vertification\",\"group\":\"1639220671976\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"experience_stop\",\"dataType\":\"boolean\",\"name\":\"experience_stop\",\"id\":\"17341633343130460\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bankruptcy_stop\",\"dataType\":\"string\",\"name\":\"bankruptcy_stop\",\"id\":\"17381615309644031\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"newDB_founder1_check_status\",\"dataType\":\"string\",\"name\":\"newDB_founder1_check_status\",\"id\":\"17411619711934154\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_status\",\"dataType\":\"string\",\"name\":\"company_status\",\"id\":\"17571622211293259\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courts_to_finishedContracts_36M\",\"dataType\":\"number\",\"name\":\"courts_to_finishedContracts_36M\",\"id\":\"17651622103928902\",\"link\":\"\",\"group\":\"1637487441419\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fssp_active_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Текущие исполнительные производства\",\"id\":\"17901639311484601\",\"link\":\"8_1_seldon_cases_list\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"founder1_passport_2page_parse_link\",\"dataType\":\"link\",\"name\":\"founder1_passport_2page_parse_link\",\"id\":\"18931637757146406\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_tkb_loan_sum\",\"dataType\":\"number\",\"name\":\"Запрашиваемая у ТКБ сумма займа\",\"id\":\"18971638207443027\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tg_chat\",\"dataType\":\"link\",\"name\":\"Ссылка на ТГ чат\",\"id\":\"19081614769919099\",\"link\":\"TChat\",\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link_user\",\"dataType\":\"link\",\"name\":\"link_user\",\"id\":\"20051617913201594\",\"link\":\"WebUser\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_company_cred_history_consent\",\"dataType\":\"file\",\"name\":\"Скан согласия на запрос КИ юрлица\",\"id\":\"20061635494973366\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_2\",\"id\":\"20121617642785998\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_comments\",\"dataType\":\"string\",\"name\":\"Комментарии к заявке\",\"id\":\"20161640158848392\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_hand_input\",\"dataType\":\"string\",\"name\":\"Заполнить данные паспорта вручную\",\"id\":\"20231638899256561\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_stop\",\"dataType\":\"string\",\"name\":\"affilates_courts_stop\",\"id\":\"20651616949252452\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_bankrapcy_1\",\"dataType\":\"number\",\"name\":\"affilates_bankrapcy_F1\",\"id\":\"21191617643024089\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status_2nd_stage\",\"dataType\":\"link\",\"name\":\"Статус 2 этап\",\"id\":\"21401638543027682\",\"link\":\"statuses_2nd_stage\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_massCoowner_stop\",\"dataType\":\"string\",\"name\":\"ceo_massCoowner_stop\",\"id\":\"21531637661861027\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_cred_history_UL_bki\",\"dataType\":\"string\",\"name\":\"Выгрузка КИ ЮЛ\",\"id\":\"22161629466294917\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"purchase_number_isFilled\",\"dataType\":\"string\",\"name\":\"purchase_number_isFilled\",\"id\":\"22251640153510570\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"revenue_lasteYear\",\"dataType\":\"string\",\"name\":\"revenue_lasteYear\",\"id\":\"22731631474126844\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_contractsFinished_sum\",\"dataType\":\"number\",\"name\":\"founder1_contractsFinished_ALL_sum\",\"id\":\"22951619592333725\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_taxDue_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Долги по налогам учредитель 1\",\"id\":\"22951639677451830\",\"link\":\"dolgi_fl\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"affilates_fssp_active\",\"dataType\":\"number\",\"name\":\"affilates_fssp_active\",\"id\":\"23121616701407928\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_contract_link\",\"dataType\":\"link\",\"name\":\"Ссылка на контракт под займ\",\"id\":\"23591638207337667\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_sum_string_separated\",\"dataType\":\"string\",\"name\":\"request_sum_string_separated\",\"id\":\"24091629378568200\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_name\",\"dataType\":\"string\",\"name\":\"Компания\",\"id\":\"24101615328068558\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_disqualificationStatus_stop\",\"dataType\":\"string\",\"name\":\"ceo_disqualificationStatus_stop\",\"id\":\"24261637661744631\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link_requests_gpn\",\"dataType\":\"string\",\"name\":\"link_requests_gpn\",\"id\":\"24621615381028707\",\"link\":\"\",\"group\":\"1615572593280\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[\"\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_email\",\"dataType\":\"string\",\"name\":\"Эмейл\",\"id\":\"24651637762401750\",\"link\":null,\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_F1\",\"id\":\"24961617642770537\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"result_isSend_TG\",\"dataType\":\"boolean\",\"name\":\"result_isSend_TG\",\"id\":\"24961619796626173\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_employees_forTKB_fact\",\"dataType\":\"number\",\"name\":\"ul_employees_forTKB_fact\",\"id\":\"25521637924699311\",\"link\":\"\",\"group\":\"1637399992291\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_passport_1page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"26011638708833723\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_json\",\"dataType\":\"json\",\"name\":\"founder2_json\",\"id\":\"26331615568570232\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_count_F1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_count_F1\",\"id\":\"26381637488646957\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"26411638708813690\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_recordDate_stop\",\"dataType\":\"string\",\"name\":\"ceo_recordDate_stop_6months\",\"id\":\"26441637659889904\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_status\",\"dataType\":\"link\",\"name\":\"Статус заявки\",\"id\":\"26821618985864619\",\"link\":\"kik_requests_statuses\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_contractsFinished_count_1m\",\"dataType\":\"number\",\"name\":\"founder2_contractsFinished__ALL_count100к\",\"id\":\"26861619592319330\",\"link\":\"\",\"group\":\"1637487441419\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cred_score_FL_bki\",\"dataType\":\"string\",\"name\":\"cred_score_FL_bki\",\"id\":\"26951629466389634\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_passport_issuer\",\"dataType\":\"date\",\"name\":\"орган, выдавший паспорт\",\"id\":\"27371619035813042\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link_founder2_fl_scoring\",\"dataType\":\"link\",\"name\":\"link_founder2_fl_scoring\",\"id\":\"27531616666577907\",\"link\":\"fl_scoring\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_sum_stop\",\"dataType\":\"string\",\"name\":\"contracts_lastYear_sum_stop\",\"id\":\"27771615309529993\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"okb_creditburo_report\",\"dataType\":\"file\",\"name\":\"Отчет ОКБ\",\"id\":\"27791638900271255\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_file\",\"dataType\":\"file\",\"name\":\"Паспорт разворот с пропиской\",\"id\":\"27891637757230132\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier\",\"dataType\":\"number\",\"name\":\"affilates_badSupplier\",\"id\":\"28071616701415658\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fssp_active_count\",\"dataType\":\"number\",\"name\":\"fssp_active_count\",\"id\":\"28201637411684148\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affiliated_copmanies_array\",\"dataType\":\"array\",\"name\":\"affiliated_copmanies_array\",\"id\":\"28261637566298044\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"founder1_stop\",\"dataType\":\"string\",\"name\":\"founder1_taxDue_stop\",\"id\":\"28281636624393637\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_founder1_persdata_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на обработку ПД поручителя 1\",\"id\":\"28771635494836156\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fl_scoring_status\",\"dataType\":\"string\",\"name\":\"Статус проверки\",\"id\":\"29011638795259743\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_passport_foto\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"29061619035843312\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ready_for_verification\",\"dataType\":\"boolean\",\"name\":\"Корректность введенных данных для проверки ФЛ\",\"id\":\"30011637859979186\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_passport_2page_file\",\"dataType\":\"file\",\"name\":\"Паспорт разворот с пропиской\",\"id\":\"30091637756680508\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"purchase_link\",\"dataType\":\"link\",\"name\":\"Ссылка на закупку под займ\",\"id\":\"30631639206951914\",\"link\":\"6_3_purchases\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_passport_2page_status_success\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"30841638709060139\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"scoring_result\",\"dataType\":\"string\",\"name\":\"Проверка стоп-факторов для эмейл рассылки\",\"id\":\"31141615326583640\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_passport_num\",\"dataType\":\"string\",\"name\":\"номер/серия паспорта\",\"id\":\"31201619035751898\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tkb_credit_report\",\"dataType\":\"file\",\"name\":\"tkb_credit_report\",\"id\":\"31251635316843214\",\"link\":\"\",\"group\":\"1635316815357\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_osv_58\",\"dataType\":\"file\",\"name\":\"ОСВ 58 счет\",\"id\":\"31281638816900683\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_contract_term_mo\",\"dataType\":\"number\",\"name\":\"request_contract_term_mo\",\"id\":\"31341629125617381\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"disc_to_front\",\"dataType\":\"string\",\"name\":\"Описание для фронта\",\"id\":\"31541618986305964\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courtsSum_devide_contractsOnProcess\",\"dataType\":\"decimal\",\"name\":\"courtsSum_devide_contractsOnProcess\",\"id\":\"31601637505770383\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"verification_result_text\",\"dataType\":\"string\",\"name\":\" \",\"id\":\"31911638281685268\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF2_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF2_net_income_lastYear\",\"id\":\"32401637490364521\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_name\",\"dataType\":\"string\",\"name\":\"ФИО учредитель 2\",\"id\":\"32721616333603481\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_id\",\"dataType\":\"string\",\"name\":\"ID заявки\",\"id\":\"33801639125590548\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courtsSum_Plus_aff\",\"dataType\":\"number\",\"name\":\"courtsRisk_Plus_aff\",\"id\":\"33941637505625624\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fsspSum_Plus_aff\",\"dataType\":\"number\",\"name\":\"fssp_Plus_aff\",\"id\":\"34251637505670142\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"verification_finished_date\",\"dataType\":\"date\",\"name\":\"Дата завершения андеррайтинга\",\"id\":\"34471637935419649\",\"link\":\"\",\"group\":\"1639220671976\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tkb_anketa\",\"dataType\":\"file\",\"name\":\"tkb_anketa\",\"id\":\"34611635316824859\",\"link\":\"\",\"group\":\"1635316815357\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts44_finished_qnt\",\"dataType\":\"number\",\"name\":\"contracts44_finished_qnt\",\"id\":\"34971637411596051\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_stop_factors_array\",\"dataType\":\"array\",\"name\":\"Стоп-факторы\",\"id\":\"35111637942430315\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"ceo_passport_1page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"35261638708779186\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"2nd_step_check_result\",\"dataType\":\"string\",\"name\":\"Результат 2 этап\",\"id\":\"35381638210687318\",\"link\":null,\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bubble_user_id\",\"dataType\":\"string\",\"name\":\"bubble_Scroing_Request2\",\"id\":\"35901628509165840\",\"link\":\"\",\"group\":\"1637402544308\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_email\",\"dataType\":\"string\",\"name\":\"Эмейл\",\"id\":\"36181637762366774\",\"link\":null,\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_active_1\",\"dataType\":\"number\",\"name\":\"affilates_courts_active_F1\",\"id\":\"36391617642903688\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_stop\",\"dataType\":\"string\",\"name\":\"founder2_taxDue_stop\",\"id\":\"36551636624409683\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"inn_check_link\",\"dataType\":\"string\",\"name\":\"inn_check_link\",\"id\":\"36641639402982794\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_phones_array\",\"dataType\":\"string\",\"name\":\"company_phones_array\",\"id\":\"37161637411884622\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"revenue_str\",\"dataType\":\"string\",\"name\":\"Выручка\",\"id\":\"37171639733567462\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_current_Sum_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_current_Plus_contracts_aff\",\"id\":\"37771637505478416\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_bankrapcy_2\",\"dataType\":\"number\",\"name\":\"affilates_bankrapcy_2\",\"id\":\"37961617643042780\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_is_ceo\",\"dataType\":\"boolean\",\"name\":\"Является генеральным директором\",\"id\":\"38791637838680229\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_founder2_tgInfo\",\"dataType\":\"string\",\"name\":\"founder1_founder2_tgInfo\",\"id\":\"38931631300363141\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_okved_array\",\"dataType\":\"string\",\"name\":\"company_okved_array\",\"id\":\"39161637411979167\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"addContract_operation_result\",\"dataType\":\"string\",\"name\":\" \",\"id\":\"39781639399961381\",\"link\":null,\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bad_supplier_stop\",\"dataType\":\"string\",\"name\":\"bad_supplier_stop\",\"id\":\"40001615309623326\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"transfer_to_tkb\",\"dataType\":\"boolean\",\"name\":\"Передавать в ТКБ\",\"id\":\"40071638205752928\",\"link\":\"\",\"group\":\"1635316815357\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_pers_data\",\"dataType\":\"string\",\"name\":\"Согласие на обработку перс.данных\",\"id\":\"40151628778231470\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilates_net_income_lastYear\",\"id\":\"40331637487098610\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stop_factors_front\",\"dataType\":\"string\",\"name\":\"Стоп-факторы\",\"id\":\"40441638282820478\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_fl_scoring_link\",\"dataType\":\"link\",\"name\":\"ceo_fl_scoring_link\",\"id\":\"40921637686542776\",\"link\":\"fl_scoring\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_affilatedCompanies_30percPlus\",\"dataType\":\"array\",\"name\":\"founder2_affilatedCompanies_30percPlus\",\"id\":\"41391637567276403\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"file_beneficiary_passport\",\"dataType\":\"string\",\"name\":\"Скан паспорта бенефициара\",\"id\":\"41701628778649076\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"source\",\"dataType\":\"string\",\"name\":\"source\",\"id\":\"42861615329015776\",\"link\":null,\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contract_end_date_day\",\"dataType\":\"string\",\"name\":\"contract_end_date_day\",\"id\":\"43091629128753712\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_to_lastYear_revenue\",\"dataType\":\"decimal\",\"name\":\"affilates_courts_to_lastYear_revenue\",\"id\":\"43371637487393611\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_active_count\",\"dataType\":\"number\",\"name\":\"affilates_courts_active_count\",\"id\":\"43891637487244818\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_fssp_stop\",\"dataType\":\"string\",\"name\":\"affilates_fssp_stop\",\"id\":\"43901616949269751\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF1_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF1_revenue_lastYear\",\"id\":\"43951637488756526\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_form_1_2\",\"dataType\":\"file\",\"name\":\"Бухгалтерская отчетность\",\"id\":\"44191635494996001\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_deBrain_passport_parse_1str\",\"dataType\":\"link\",\"name\":\"Данные паспорта\",\"id\":\"44671637756509725\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier_1\",\"dataType\":\"number\",\"name\":\"affilates_badSupplier_F1\",\"id\":\"45431617642980165\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF1_fssp_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF1_fssp_active_count\",\"id\":\"45541637488919412\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isMassHeadFNS\",\"dataType\":\"string\",\"name\":\"isMassHeadFNS\",\"id\":\"45741637651311907\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"karma_fee\",\"dataType\":\"number\",\"name\":\"karma_fee\",\"id\":\"46791629125635235\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_current_sum\",\"dataType\":\"number\",\"name\":\"contracts_current_sum\",\"id\":\"47421615308655979\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"date_of_verification_str\",\"dataType\":\"string\",\"name\":\"Дата заявки\",\"id\":\"47561637677738812\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"approved_APR\",\"dataType\":\"decimal\",\"name\":\"Одобренная ставка годовых\",\"id\":\"47611636451087461\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_founder2_dolgi_TG\",\"dataType\":\"array\",\"name\":\"founder1_founder2_dolgi_TG\",\"id\":\"47691619369642713\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"soglasie_persDannie\",\"dataType\":\"string\",\"name\":\"согласие на передачу персональных данных\",\"id\":\"47781619035988898\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"soglasie_Bki\",\"dataType\":\"string\",\"name\":\"согласие на запрос БКИ\",\"id\":\"49411619036028075\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_date\",\"dataType\":\"date\",\"name\":\"Дата заявки\",\"id\":\"49591618987063315\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_cred_history_sig\",\"dataType\":\"string\",\"name\":\"Согласие на запрос БКИ. ЭЦП\",\"id\":\"49601628778845466\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_courts_active_count\",\"dataType\":\"number\",\"name\":\"company_courts_active_count\",\"id\":\"49601637487195860\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_osv_67\",\"dataType\":\"file\",\"name\":\"ОСВ 67 счет\",\"id\":\"49791638817030735\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bubble_status\",\"dataType\":\"string\",\"name\":\"bubble_status\",\"id\":\"50741629363590527\",\"link\":null,\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bad_supplier\",\"dataType\":\"number\",\"name\":\"bad_supplier\",\"id\":\"50901615306200181\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_osv_62\",\"dataType\":\"file\",\"name\":\"ОСВ 62 счет\",\"id\":\"50931638817051973\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_passport_2page_parse_link\",\"dataType\":\"link\",\"name\":\"founder2_passport_2page_parse_link\",\"id\":\"51071637756766920\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_active\",\"dataType\":\"number\",\"name\":\"affilates_courts_active\",\"id\":\"51451616701381065\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_disp_on_front\",\"dataType\":\"boolean\",\"name\":\"f2_disp_on_front\",\"id\":\"51651637848494483\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tg_user\",\"dataType\":\"link\",\"name\":\"ТГ Юзер\",\"id\":\"51801614767283835\",\"link\":\"TUser\",\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"cred_score_UL_bki\",\"dataType\":\"string\",\"name\":\"cred_score_UL_bki\",\"id\":\"52481629466359222\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_disqualificationStatus\",\"dataType\":\"string\",\"name\":\"ceo_disqualificationStatus\",\"id\":\"52571637412331774\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"approved_MPR\",\"dataType\":\"decimal\",\"name\":\"Одобренная ставка в мес\",\"id\":\"52751636451134250\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"newDB_check_status\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"52891619711876525\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"reg_date_stop\",\"dataType\":\"string\",\"name\":\"reg_date_stop\",\"id\":\"52961637572803439\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fssp_tax\",\"dataType\":\"number\",\"name\":\"Исполнительные производства по налогам 12 мес.\",\"id\":\"52971639311627555\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_osv_66\",\"dataType\":\"file\",\"name\":\"ОСВ 66 счет\",\"id\":\"53061638817020634\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isMassHeadSeldon\",\"dataType\":\"string\",\"name\":\"isMassHeadSeldon\",\"id\":\"54141637651302617\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_affilatedCompanies_30percPlus\",\"dataType\":\"array\",\"name\":\"founder1_affilatedCompanies_30percPlus\",\"id\":\"54871637567087280\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"fsspCount_Plus_aff\",\"dataType\":\"number\",\"name\":\"fsspCount_Plus_aff\",\"id\":\"54901637505741499\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_count_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_lastYear_count_Plus_contracts_aff\",\"id\":\"55591637505570990\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founders_json_test\",\"dataType\":\"string\",\"name\":\"founders_json_null_test\",\"id\":\"55611633353758385\",\"link\":\"\",\"group\":\"1615568532385\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"55821616333612266\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts44_finished_all_sum\",\"dataType\":\"decimal\",\"name\":\"contracts44_finished_all_sum\",\"id\":\"56221634556076890\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"56361638345550170\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF1_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF1_net_income_lastYear\",\"id\":\"56451637488798888\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"net_assets\",\"dataType\":\"string\",\"name\":\"Чистые активы\",\"id\":\"56501639728317096\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"1st_stage_scoring_status\",\"dataType\":\"string\",\"name\":\" \",\"id\":\"58271639293425314\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_founder2_Stake_stop\",\"dataType\":\"string\",\"name\":\"founder1_founder2_Stake_stop\",\"id\":\"58391615309661185\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_NotReportFNS\",\"dataType\":\"string\",\"name\":\"company_NotReportFNS\",\"id\":\"58611637411824187\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"58841637412314390\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_fssp_active_2\",\"dataType\":\"number\",\"name\":\"affilates_fssp_active_2\",\"id\":\"59081617642967324\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"inn\",\"dataType\":\"string\",\"name\":\"ИНН\",\"id\":\"59451614767265195\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"loan_cost_from_contract\",\"dataType\":\"decimal\",\"name\":\"loan_cost_from_contract\",\"id\":\"60901629125710951\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contract_end_date_month\",\"dataType\":\"number\",\"name\":\"contract_end_date_month\",\"id\":\"61111629128742312\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ul_employees_forTKB\",\"dataType\":\"number\",\"name\":\"ul_employees_forTKB\",\"id\":\"61151637924568907\",\"link\":\"\",\"group\":\"1637399992291\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_passport_2page_status_success\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"61511638708908864\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_founder2_stake\",\"dataType\":\"number\",\"name\":\"founder1_founder2_stake\",\"id\":\"61731615573275242\",\"link\":\"\",\"group\":\"1615568532385\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fssp_stop\",\"dataType\":\"string\",\"name\":\"fssp_stop\",\"id\":\"61961615309612494\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_passport_date\",\"dataType\":\"string\",\"name\":\"дата выдачи паспорта\",\"id\":\"61991619035776449\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courts_stop\",\"dataType\":\"string\",\"name\":\"courts_stop\",\"id\":\"62271615309588548\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_legal_form\",\"dataType\":\"string\",\"name\":\"company_legal_form_stop\",\"id\":\"62451633500675635\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founders_json\",\"dataType\":\"json\",\"name\":\"founders_json\",\"id\":\"62841615567878056\",\"link\":\"\",\"group\":\"1615568532385\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"223fz_contracts\",\"dataType\":\"arrayLink\",\"name\":\"223fz_contracts\",\"id\":\"63031634478736587\",\"link\":\"look_for_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"courts_active_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Текущие судебные дела\",\"id\":\"63311639234462712\",\"link\":\"5_2_seldon_courts_cases\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"company_reg_date\",\"dataType\":\"date\",\"name\":\"company_reg_date\",\"id\":\"63771637411775435\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"debt_lasteYear\",\"dataType\":\"string\",\"name\":\"debt_lasteYear\",\"id\":\"64351631474223275\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affiliated_copmanies\",\"dataType\":\"arrayLink\",\"name\":\"affiliated_copmanies_ulAnalisys\",\"id\":\"64921633501212085\",\"link\":\"ul_analysys\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"request_status_history\",\"dataType\":\"array\",\"name\":\"request_status_history (удалить)\",\"id\":\"65081637943008627\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"massCoowner\",\"dataType\":\"string\",\"name\":\"massCoowner\",\"id\":\"65201637651320862\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_passport_2page_file\",\"dataType\":\"file\",\"name\":\"Паспорт разворот с пропиской\",\"id\":\"66371637757113797\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilates_revenue_lastYear\",\"id\":\"66861637487084786\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"rejected_contracts_link\",\"dataType\":\"arrayLink\",\"name\":\"Отмененные контракты 2 года\",\"id\":\"67191638433925288\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"courtsCount_Plus_aff\",\"dataType\":\"number\",\"name\":\"courtsCount_Plus_aff\",\"id\":\"67481637505721992\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_F1\",\"id\":\"68041617642799008\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"main_request_link\",\"dataType\":\"link\",\"name\":\"main_request_link\",\"id\":\"68391633504139121\",\"link\":\"scoring_request_tgbot\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess_count\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess_count\",\"id\":\"68641637486998049\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_stake\",\"dataType\":\"number\",\"name\":\"Доля в компании учредитель 2\",\"id\":\"68721615568917905\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_scoring_tgInfo\",\"dataType\":\"string\",\"name\":\"ceo_scoring_tgInfo\",\"id\":\"68751638435918581\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_name\",\"dataType\":\"string\",\"name\":\"ФИО учредитель 1\",\"id\":\"69811616333588416\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_contract_sum\",\"dataType\":\"number\",\"name\":\"Сумма контракта\",\"id\":\"69881638207965679\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stop_factors_persons\",\"dataType\":\"boolean\",\"name\":\"Стоп-факторы\",\"id\":\"70141637942504135\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Нет\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contract_number_isFilled\",\"dataType\":\"string\",\"name\":\"contract_number_isFilled\",\"id\":\"70341640153122885\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF2_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"affilatesF2_revenue_lastYear\",\"id\":\"70741637490340743\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"bankruptcy\",\"dataType\":\"number\",\"name\":\"bankruptcy messages\",\"id\":\"70841615306222455\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"inn_length\",\"dataType\":\"number\",\"name\":\"Длина ИНН\",\"id\":\"71051614769408307\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tgUser_name\",\"dataType\":\"string\",\"name\":\"tgUser_name\",\"id\":\"71311620811321031\",\"link\":null,\"group\":\"1637402544308\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_inProcess\",\"dataType\":\"number\",\"name\":\"affilates_contracts_inProcess\",\"id\":\"71551616701312169\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M\",\"id\":\"72031616701358703\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_passport_hand_input\",\"dataType\":\"string\",\"name\":\"Заполнить данные паспорта вручную\",\"id\":\"72231638899438216\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":34,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_passport_1page_parse_link\",\"dataType\":\"link\",\"name\":\"Данные паспорта\",\"id\":\"72361637757074262\",\"link\":\"dbrain_passports_check\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_parse_link\",\"dataType\":\"link\",\"name\":\"ceo_passport_2page_parse_link\",\"id\":\"72891637757288880\",\"link\":\"dbrain_passports_check\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_sites_array\",\"dataType\":\"string\",\"name\":\"company_sites_array\",\"id\":\"72981637411904875\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_stake\",\"dataType\":\"number\",\"name\":\"Доля в компании учредитель 1\",\"id\":\"73481615568909612\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_phone\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"73531637762410972\",\"link\":null,\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_stop_factors_array\",\"dataType\":\"array\",\"name\":\"Стоп-факторы\",\"id\":\"74131637942404270\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":30,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"fssp_active\",\"dataType\":\"number\",\"name\":\"fssp_active_sum\",\"id\":\"74631615306175574\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_stop_factors_array\",\"dataType\":\"array\",\"name\":\"Стоп-факторы\",\"id\":\"74961637942338248\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"founder1_json\",\"dataType\":\"json\",\"name\":\"founder1_json\",\"id\":\"75141615568550421\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":true,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_accept_pers_data_founder1\",\"dataType\":\"string\",\"name\":\"Согласие на ПД от Беника1\",\"id\":\"75371631631544470\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"mailto_directual\",\"dataType\":\"string\",\"name\":\"mailto_directual\",\"id\":\"75391629470333919\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"max_term_mo\",\"dataType\":\"number\",\"name\":\"max_term_mo\",\"id\":\"75421629125622914\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_phone\",\"dataType\":\"string\",\"name\":\"Контактный телефон\",\"id\":\"75611637762375558\",\"link\":null,\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":28,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_count_F1\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_count_F1\",\"id\":\"75941637488550122\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"approved_sum\",\"dataType\":\"number\",\"name\":\"Одобренная сумма займа\",\"id\":\"75981636451053113\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF2_fssp_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF2_fssp_active_count\",\"id\":\"76011637490151140\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_term\",\"dataType\":\"number\",\"name\":\"Ожидаемый срок кредита\",\"id\":\"76431636451183068\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_sum\",\"dataType\":\"number\",\"name\":\"contracts_lastYear_sum\",\"id\":\"76721615305960960\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"tkb_requests_link\",\"dataType\":\"link\",\"name\":\"tkb_requests_link\",\"id\":\"77001638206802791\",\"link\":\"requests_for_loans_kik_1_10m\",\"group\":\"1635316815357\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"netIncome_str\",\"dataType\":\"string\",\"name\":\"Чистая прибыль\",\"id\":\"77451639733874476\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_founder2_passport\",\"dataType\":\"file\",\"name\":\"Паспорт основной разворот или несколько станиц\",\"id\":\"77481635494955482\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_badSupplier_stop\",\"dataType\":\"string\",\"name\":\"affilates_badSupplier_stop\",\"id\":\"77591616949293970\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link_founder1_fl_scoring\",\"dataType\":\"link\",\"name\":\"link_founder1_fl_scoring\",\"id\":\"78321616666592749\",\"link\":\"fl_scoring\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"credit_limit\",\"dataType\":\"number\",\"name\":\"Кредитный лимит max\",\"id\":\"78461636017393639\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_ALL\",\"dataType\":\"decimal\",\"name\":\"affilates_contracts_finished_ALL\",\"id\":\"78801637489078131\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"purchase_law\",\"dataType\":\"string\",\"name\":\"purchase_law\",\"id\":\"79081640157260240\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_51acc_report\",\"dataType\":\"file\",\"name\":\"Карточка 51 счета\",\"id\":\"79091638816819060\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_tgInfo\",\"dataType\":\"string\",\"name\":\"founder1_tgInfo\",\"id\":\"79391631299594735\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts44_onProcess_qnt\",\"dataType\":\"number\",\"name\":\"contracts44_onProcess_qnt\",\"id\":\"80771634556118813\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_recordDate\",\"dataType\":\"date\",\"name\":\"ceo_recordDate\",\"id\":\"81351637412323165\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_taxDue_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Долги по налогам учредитель 2\",\"id\":\"81491639677547506\",\"link\":\"dolgi_fl\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":36,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"ulanalis_link\",\"dataType\":\"link\",\"name\":\"Ссылка на базу анализа ЮЛ \",\"id\":\"81541614770111873\",\"link\":\"ul_analysys\",\"group\":\"1637399992291\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_is_ceo\",\"dataType\":\"boolean\",\"name\":\"Является генеральным директором\",\"id\":\"82041637838436048\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link_massScoring\",\"dataType\":\"string\",\"name\":\"link_massScoring\",\"id\":\"82121615386191476\",\"link\":\"\",\"group\":\"1615572593280\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"scoring_errors\",\"dataType\":\"array\",\"name\":\"Ошибки при проверке\",\"id\":\"82391638433227333\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"date_of_verification\",\"dataType\":\"date\",\"name\":\"Дата заявки\",\"id\":\"82671637572228767\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ogrn\",\"dataType\":\"string\",\"name\":\"ogrn\",\"id\":\"82681637676541032\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_HasDebtFNS_stop\",\"dataType\":\"string\",\"name\":\"company_HasDebtFNS_stop\",\"id\":\"82951637661792053\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":19,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_inn\",\"dataType\":\"string\",\"name\":\"founder2_inn\",\"id\":\"83491616333620078\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"stop_factors_array\",\"dataType\":\"array\",\"name\":\"stop_factors_array\",\"id\":\"83551636629851082\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":true},{\"sysName\":\"company_emails_array\",\"dataType\":\"string\",\"name\":\"company_emails_array\",\"id\":\"83581637411864419\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_contract_buyer\",\"dataType\":\"string\",\"name\":\"Заказчик\",\"id\":\"83631638207480382\",\"link\":null,\"group\":\"1638688560441\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_NotReportFNS_stop\",\"dataType\":\"string\",\"name\":\"company_NotReportFNS_stop\",\"id\":\"84161637661709579\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_founder2_Stake\",\"dataType\":\"number\",\"name\":\"НЕ ИСПОЛЬЗОВАТЬ!\",\"id\":\"84171615306238000\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"verification_finished_date_str\",\"dataType\":\"string\",\"name\":\"Дата завершения андеррайтинга\",\"id\":\"84961637935483930\",\"link\":\"\",\"group\":\"1639220671976\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_to_currentContracts\",\"dataType\":\"decimal\",\"name\":\"affilates_courts_to_currentContracts\",\"id\":\"85081637487268092\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"purchase_contract_num\",\"dataType\":\"string\",\"name\":\"purchase_contract_num\",\"id\":\"85101639220036375\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"isAffilatedCompanyScoring\",\"dataType\":\"boolean\",\"name\":\"isAffilatedCompanyScoring (удалить)\",\"id\":\"85521617031440970\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_2page_status_success\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"85561638708961087\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":18,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_count_F2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_count_F2\",\"id\":\"85811637488612819\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"nbki_creditburo_report\",\"dataType\":\"file\",\"name\":\"Отчет НБКИ\",\"id\":\"85961638900313182\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilatesF1_courts_active_count\",\"dataType\":\"number\",\"name\":\"affilatesF1_courts_active_count\",\"id\":\"86161637488883362\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_address\",\"dataType\":\"string\",\"name\":\"company_address\",\"id\":\"86271637411769316\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"verification_result_text2\",\"dataType\":\"string\",\"name\":\"Результат проверки\",\"id\":\"86301638283259404\",\"link\":\"\",\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"loan_cost_from_loan\",\"dataType\":\"decimal\",\"name\":\"loan_cost_from_loan\",\"id\":\"86491629125681914\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_bankruptcy_alert\",\"dataType\":\"string\",\"name\":\"affilates_bankruptcy_stop\",\"id\":\"86601617552110402\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_founder2_cred_history_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на запрос КИ поручителя 2\",\"id\":\"86861635494941092\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_regDate_stop\",\"dataType\":\"string\",\"name\":\"founder1_regDate_stop\",\"id\":\"86921637572823406\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"percent_to_pay\",\"dataType\":\"number\",\"name\":\"percent_to_pay\",\"id\":\"87131629125664389\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"link_GasContract\",\"dataType\":\"link\",\"name\":\"link_GasContract\",\"id\":\"87181615572602843\",\"link\":\"GasContract\",\"group\":\"1615572593280\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"profit_lasteYear\",\"dataType\":\"string\",\"name\":\"profit_lasteYear\",\"id\":\"88141631474204216\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_massHead\",\"dataType\":\"string\",\"name\":\"ceo_massHead\",\"id\":\"88211637651291032\",\"link\":null,\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"loan_contract\",\"dataType\":\"string\",\"name\":\"Контракт для финансирования (удалить)\",\"id\":\"88361638546128308\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_fssp_count\",\"dataType\":\"number\",\"name\":\"affilates_fssp_count\",\"id\":\"88551637486970921\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"passport_user\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"88651619023702760\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":25,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_tgInfo\",\"dataType\":\"string\",\"name\":\"founder2_tgInfo\",\"id\":\"88771631299608516\",\"link\":null,\"group\":\"1631474118117\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_sum\",\"dataType\":\"number\",\"name\":\"Сумма запрошенного займа\",\"id\":\"88801629096458022\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_1page_file\",\"dataType\":\"file\",\"name\":\"Паспорт основной разворот или несколько станиц\",\"id\":\"89231637757206387\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"front_request_link\",\"dataType\":\"link\",\"name\":\"front_request_link\",\"id\":\"89321639221152526\",\"link\":\"look_for_contracts\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":17,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_courts_to_lastYear_revenue\",\"dataType\":\"decimal\",\"name\":\"company_courts_to_lastYear_revenue\",\"id\":\"89481637487358412\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":27,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"fssp_closed_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Завершенные исполнительные производства\",\"id\":\"89631639311549729\",\"link\":\"8_1_seldon_cases_list\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":31,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"finished_contracts_link\",\"dataType\":\"arrayLink\",\"name\":\"Завершенные контракты 2 года\",\"id\":\"89791638347060068\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"ceo_name\",\"dataType\":\"string\",\"name\":\"ФИО генеральный директор\",\"id\":\"90081637412292133\",\"link\":\"\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contract_end_date_year\",\"dataType\":\"number\",\"name\":\"contract_end_date_year\",\"id\":\"90111629128730811\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":23,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_contract_url\",\"dataType\":\"string\",\"name\":\"request_contract_url\",\"id\":\"90701629096471245\",\"link\":\"\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"approved_term\",\"dataType\":\"number\",\"name\":\"Одобренный срок займа в мес\",\"id\":\"91661636451068994\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_passport_1page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки основной разворот\",\"id\":\"92181638709026065\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder1_contractsFinished_count_1m\",\"dataType\":\"number\",\"name\":\"founder1_contractsFinished_ALL_count100к\",\"id\":\"92971619592251815\",\"link\":\"\",\"group\":\"1637487441419\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"newDB_founder2_check_status\",\"dataType\":\"string\",\"name\":\"newDB_founder2_check_status\",\"id\":\"92981619711951008\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"request_contract_end_date\",\"dataType\":\"number\",\"name\":\"request_contract_end_date\",\"id\":\"94011629096485355\",\"link\":\"\",\"group\":\"1637397537360\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courts_closed_arrayLink\",\"dataType\":\"arrayLink\",\"name\":\"Завершенные судебные дела\",\"id\":\"94071639234503811\",\"link\":\"5_2_seldon_courts_cases\",\"group\":\"1637410768588\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":29,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"f2_scoring_tgInfo\",\"dataType\":\"string\",\"name\":\"f2_scoring_tgInfo\",\"id\":\"94111638435902771\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_employeesFNS\",\"dataType\":\"string\",\"name\":\"company_employeesFNS\",\"id\":\"94181637411815099\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_passport_2page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"94451638709034118\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":33,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"current_contracts_link\",\"dataType\":\"arrayLink\",\"name\":\"Текущие контракты\",\"id\":\"94711638342955962\",\"link\":\"6_2_gos_contracts\",\"group\":\"1638688560441\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":true,\"array\":false},{\"sysName\":\"affilates_badSupplier_2\",\"dataType\":\"number\",\"name\":\"affilates_badSupplier_2\",\"id\":\"94841617643008238\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_count\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_count\",\"id\":\"94841637487029829\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f2_passport_hand_input\",\"dataType\":\"string\",\"name\":\"Заполнить данные паспорта вручную\",\"id\":\"94861638899460880\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":35,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_net_income_lastYear\",\"dataType\":\"decimal\",\"name\":\"company_net_income_lastYear\",\"id\":\"95091637412370243\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_passport_2page_status_fail\",\"dataType\":\"string\",\"name\":\"Статус загрузки разворот с пропиской\",\"id\":\"95261638708845803\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":32,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_passport_1page_parse_link\",\"dataType\":\"link\",\"name\":\"Данные паспорта\",\"id\":\"95281637757249759\",\"link\":\"dbrain_passports_check\",\"group\":\"1637685688438\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":true,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":true,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_okved_main\",\"dataType\":\"string\",\"name\":\"company_okved_main\",\"id\":\"95701637412872207\",\"link\":null,\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"2nd_step_addcontract_success_error\",\"dataType\":\"string\",\"name\":\"Результат\",\"id\":\"95721638816210367\",\"link\":null,\"group\":\"1639206012090\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_contracts_finished_12M_2\",\"dataType\":\"number\",\"name\":\"affilates_contracts_finished_12M_2\",\"id\":\"95841617642839408\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"ceo_massHead_stop\",\"dataType\":\"string\",\"name\":\"ceo_massHead\",\"id\":\"96011637661829987\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_status_stop\",\"dataType\":\"string\",\"name\":\"company_status_stop\",\"id\":\"96201622212091176\",\"link\":\"\",\"group\":\"1615309515999\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_courts_to_currentContracts\",\"dataType\":\"decimal\",\"name\":\"company_courts_to_currentContracts\",\"id\":\"96211637487337696\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":26,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_founder2_persdata_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на обработку ПД поручителя 2\",\"id\":\"96441635494923300\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"f1_scoring_tgInfo\",\"dataType\":\"string\",\"name\":\"f1_scoring_tgInfo\",\"id\":\"96441638435864095\",\"link\":\"\",\"group\":\"1631474118117\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"contracts_lastYear_Plus_contracts_aff\",\"dataType\":\"number\",\"name\":\"contracts_lastYear_Plus_contracts_aff\",\"id\":\"96731631453056084\",\"link\":\"\",\"group\":\"1637505341738\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"founder2_date\",\"dataType\":\"date\",\"name\":\"founder2_date\",\"id\":\"97801619588363357\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_bankrapcy\",\"dataType\":\"number\",\"name\":\"affilates_bankrapcy\",\"id\":\"98641616701433777\",\"link\":\"\",\"group\":\"1637403982889\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"company_revenue_lastYear\",\"dataType\":\"decimal\",\"name\":\"company_revenue_lastYear\",\"id\":\"98871637412360715\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"scor_Result\",\"dataType\":\"string\",\"name\":\"Результат проверки\",\"id\":\"98931616950347813\",\"link\":null,\"group\":\"1615309515999\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_osv_60\",\"dataType\":\"file\",\"name\":\"ОСВ 60 счет\",\"id\":\"99481638817037528\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":21,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"courts_active\",\"dataType\":\"number\",\"name\":\"courts_active\",\"id\":\"99521615306135268\",\"link\":\"\",\"group\":\"1637410768588\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":24,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_founder1_passport\",\"dataType\":\"file\",\"name\":\"Паспорт основной разворот или несколько станиц\",\"id\":\"99531635494902371\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":22,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"affilates_courts_active_2\",\"dataType\":\"number\",\"name\":\"affilates_courts_active_2\",\"id\":\"99651617642920101\",\"link\":\"\",\"group\":\"1617642741592\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_cred_history_FL_bki\",\"dataType\":\"string\",\"name\":\"Выгрузка КИ ФЛ\",\"id\":\"99671629466324332\",\"link\":\"\",\"group\":\"1637685839307\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file_founder1_cred_history_consent\",\"dataType\":\"file\",\"name\":\"Cкан согласия на запрос КИ поручителя 1\",\"id\":\"99801635494872457\",\"link\":\"\",\"group\":\"1617642712846\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":20,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"Контракты\",\"id\":1638688560441,\"order\":2},{\"name\":\"Request source/contacts\",\"id\":1637402544308,\"order\":16},{\"name\":\"New Group 16\",\"id\":1637685839307,\"order\":4},{\"name\":\"Сводный результат аффилированные компании\",\"id\":1637403982889,\"order\":8},{\"name\":\"ссылки\",\"id\":1615572593280,\"order\":18},{\"name\":\"Учредители\",\"id\":1615568532385,\"order\":14},{\"name\":\"founder 2\",\"id\":1617642741592,\"order\":11},{\"name\":\"main UL + aff. campanies\",\"id\":1637505341738,\"order\":9},{\"name\":\"founder 1\",\"id\":1617642712846,\"order\":10},{\"name\":\"New Group 20\",\"id\":1639231449924,\"order\":0},{\"name\":\"3й этап андеррайтинг\",\"id\":1639220671976,\"order\":1},{\"name\":\"UL Info\",\"id\":1637399992291,\"order\":5},{\"name\":\"Удалить\",\"id\":1637397537360,\"order\":19},{\"name\":\"Генеральный директор\",\"id\":1637685688438,\"order\":7},{\"name\":\"TKB\",\"id\":1635316815357,\"order\":17},{\"name\":\"TG fields\",\"id\":1631474118117,\"order\":15},{\"name\":\"Стоп-Факторы Чек Лист\",\"id\":1615309515999,\"order\":12},{\"name\":\"ScorResults UL data\",\"id\":1637410768588,\"order\":6},{\"name\":\"удалить2\",\"id\":1637487441419,\"order\":13},{\"name\":\"Второй этап доп. проверка\",\"id\":1639206012090,\"order\":3}]",
                "jsonViewIdSettings": "[{\"sysName\":\"company_name\"},{\"sysName\":\"id\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-22T07:41:52Z",
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
                    "linkOrArrayLinkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkType": false,
                    "array": false
                },
                "folderId": 33607201
            },
            "99055927": {
                "networkID": 4355,
                "sysName": "4_stage_offers_payments",
                "name": "4 этап. Предложение заёмщикам",
                "id": 99055927,
                "dateCreated": "2021-12-13T13:50:40Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"ID\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_inn\",\"name\":\"ИНН\",\"dataType\":\"string\",\"id\":\"10131639406091671\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"underrating_link\",\"name\":\"underrating_link\",\"dataType\":\"link\",\"id\":\"15081639410515779\",\"link\":\"vertification\",\"group\":\"1639403909672\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"invoices_lastInvoice_link\",\"name\":\"invoices_lastInvoice_link\",\"dataType\":\"link\",\"id\":\"17501640860031125\",\"link\":\"invoice\",\"group\":\"1639403909672\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"email_send_date\",\"name\":\"Дата отправки эмейла\",\"dataType\":\"date\",\"id\":\"17941639410299451\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"invoices_arrayLink\",\"name\":\"Инвойсы\",\"dataType\":\"arrayLink\",\"id\":\"20461640858093584\",\"link\":\"invoice\",\"group\":\"1639403909672\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_color\",\"name\":\"payment_color\",\"dataType\":\"string\",\"id\":\"23961639718760502\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_name\",\"name\":\"Название компании\",\"dataType\":\"string\",\"id\":\"24331639406110698\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"stage_status\",\"name\":\"Статус этапа\",\"dataType\":\"link\",\"id\":\"26741640542688653\",\"link\":\"4_stage_statuses\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":16,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_text\",\"name\":\"Офер\",\"dataType\":\"string\",\"id\":\"44141639403468400\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"markdown\",\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_status\",\"name\":\"Статус оплаты\",\"dataType\":\"link\",\"id\":\"46131639403829927\",\"link\":\"4_stage_payment_status\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_text_email\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"52881639923778640\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":15,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_id\",\"name\":\"ID платежа\",\"dataType\":\"string\",\"id\":\"60191639641813114\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_doc\",\"name\":\"Платежный документ\",\"dataType\":\"file\",\"id\":\"62741639737591552\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":13,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"requestID_link\",\"name\":\"ID заявки\",\"dataType\":\"link\",\"id\":\"64301639406053197\",\"link\":\"scoring_request_tgbot\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_sum\",\"name\":\"Сумма оплаты\",\"dataType\":\"number\",\"id\":\"67961639403853161\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"5stage_link\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"72581639921786799\",\"link\":\"5_stage_documents_signing\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":14,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_webLink\",\"name\":\"Ссылка на страницу с оплатой\",\"dataType\":\"string\",\"id\":\"76831639403924581\",\"link\":\"\",\"group\":\"1639403909672\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_date\",\"name\":\"Дата начало\",\"dataType\":\"date\",\"id\":\"82591639403449086\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_date\",\"name\":\"Дата оплаты\",\"dataType\":\"date\",\"id\":\"93341639403865328\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"clients_email\",\"name\":\"Эмейл клиента\",\"dataType\":\"string\",\"id\":\"97771639403501712\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"email\",\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1639403909672,\"name\":\"offer_params\",\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"company_name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-30T10:27:46Z",
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
                    "linkOrArrayLinkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkType": false,
                    "array": false
                },
                "folderId": 33638913
            },
            "99056814": {
                "networkID": 4355,
                "sysName": "4_stage_payment_status",
                "name": "Статусы 4 этап. Оплата по оферу",
                "id": 99056814,
                "dateCreated": "2021-12-17T05:43:31Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"64771639719820213\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"status_color\",\"dataType\":\"string\",\"name\":\"status_color\",\"id\":\"97901639719913038\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"color\",\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-17T10:39:28Z",
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
                    "linkOrArrayLinkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkType": false,
                    "array": false
                },
                "folderId": 33673948
            },
            "99058963": {
                "networkID": 4355,
                "sysName": "4_stage_statuses",
                "name": "Статусы 4 этап",
                "id": 99058963,
                "dateCreated": "2021-12-26T18:19:43Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false},{\"sysName\":\"name\",\"dataType\":\"string\",\"name\":\"Статус\",\"id\":\"19071640542816542\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"json\":false,\"linkOrArrayLinkType\":false,\"arrayLink\":false,\"linkType\":false,\"indexExists\":false,\"typeVariable\":{},\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"name\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-26T18:20:28Z",
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
                    "linkOrArrayLinkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkType": false,
                    "array": false
                },
                "folderId": 33673948
            },
            "99059324": {
                "networkID": 4355,
                "sysName": "invoice",
                "name": "4.3 Invoice",
                "id": 99059324,
                "dateCreated": "2021-12-28T15:05:39Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paymentUrl\",\"name\":\"Ссылка для оплаты\",\"dataType\":\"string\",\"id\":\"12661640760576471\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"webLink\",\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paymentMethod_terminalID\",\"name\":\"paymentMethod_terminalID\",\"dataType\":\"string\",\"id\":\"13321640762617610\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"order_id\",\"name\":\"ID  заявки\",\"dataType\":\"string\",\"id\":\"19011640760816694\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"json_resp\",\"name\":\"json_resp\",\"dataType\":\"json\",\"id\":\"19711640704000408\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"arrayLink\":false,\"json\":true,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_name\",\"name\":\"Компания\",\"dataType\":\"string\",\"id\":\"20101640856347310\",\"link\":\"\",\"group\":\"1640856317089\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"payment_date\",\"name\":\"Дата оплаты\",\"dataType\":\"date\",\"id\":\"44691640762838963\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"loanRequest_link\",\"name\":\"loanRequest_link\",\"dataType\":\"link\",\"id\":\"45361640856359323\",\"link\":\"tgbot_moderation_requests\",\"group\":\"1640856317089\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"order_sum\",\"name\":\"Сумма инвойса\",\"dataType\":\"string\",\"id\":\"47851640760609416\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"invoiceDate\",\"name\":\"Дата инвойса\",\"dataType\":\"date\",\"id\":\"63931640760632101\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y,\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"invoiceID\",\"name\":\"ID в системе Инвойс\",\"dataType\":\"string\",\"id\":\"71741640760666369\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"invoice_status\",\"name\":\"Статус инвойса\",\"dataType\":\"string\",\"id\":\"72921640762761441\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"order_description\",\"name\":\"Назначение платежа\",\"dataType\":\"string\",\"id\":\"79261640760754687\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"offer_stage_link\",\"name\":\"offer_stage_link\",\"dataType\":\"link\",\"id\":\"81741640858540846\",\"link\":\"4_stage_offers_payments\",\"group\":\"1640856317089\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"typeVariable\":{},\"linkType\":true,\"indexExists\":false,\"array\":false},{\"sysName\":\"company_inn\",\"name\":\"ИНН\",\"dataType\":\"string\",\"id\":\"83221640856328068\",\"link\":\"\",\"group\":\"1640856317089\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"paymentStatus\",\"name\":\"Статус оплаты\",\"dataType\":\"string\",\"id\":\"90321640846259379\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"arrayLink\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"typeVariable\":{},\"linkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"name\":\"company\",\"id\":1640856317089,\"order\":0}]",
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-12-30T12:24:09Z",
                "createBy": 4798,
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
                    "arrayLink": false,
                    "linkOrArrayLinkType": false,
                    "typeVariable": {},
                    "json": false,
                    "indexExists": false,
                    "linkType": false,
                    "array": false
                },
                "folderId": 33638913
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
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
                "array": false
            },
            {
                "sysName": "payment_doc",
                "dataType": "file",
                "name": "Платежный документ",
                "id": "62741639737591552",
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
                "format": "image",
                "formatOptions": {},
                "groupName": null,
                "arrayLink": false,
                "linkOrArrayLinkType": false,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": false,
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
                "linkOrArrayLinkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": true,
                "array": false
            },
            {
                "sysName": "stage_status",
                "dataType": "link",
                "name": "Статус этапа",
                "id": "26741640542688653",
                "link": "4_stage_statuses",
                "group": "0",
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
                "arrayLink": false,
                "linkOrArrayLinkType": true,
                "typeVariable": {},
                "json": false,
                "indexExists": false,
                "linkType": true,
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