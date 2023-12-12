import React, { useEffect, useState, useRef } from 'react'
import {
    FpsCards, FpsForm, MainMenu, NewMainMenu, FpsTable, FpsTheme,
    FpsWrapper, ContentWrapper, SignIn, Media, CodeSnippet, Chart,
    Dnd, Profile, TabsPane, Stopwatch, Button, SignUp, RestorePass, FpsKanban, FpsChart, NewMobileTabs
} from 'directual-web-components'
import 'directual-web-components/dist/index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useHistory
} from 'react-router-dom'

//pages:
import ButtonsPage from './pages/buttons'
import InputsPage from './pages/inputs'
import IconsPage from './pages/icons'
import TypoPage from './pages/typo'
import WhatIsIt from './pages/wtf'
import LayoutPage from './pages/layout'
import PlatformPage from './pages/platform'


const newMenuEexample = {
    "mainMenu": {
        "id": "rootMenu",
        "icon": "folder",
        "name": "Main menu",
        "isFolder": true,
        "children": [
            {
                "id": "group_1702032834666",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1702032623640",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    }
                ],
                "isFolder": true,
                "icon": "folder"
            },
            {
                "id": "group_1702032845969",
                "name": "New group",
                "children": [
                    {
                        "id": "item__1702035114482",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702035125602",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    },
                    {
                        "id": "item__1702035160342",
                        "name": "New page",
                        "children": [],
                        "isFolder": false,
                        "icon": "application"
                    }
                ],
                "isFolder": true,
                "icon": "folder"
            }
        ]
    },
    "menuConfig": {
        "rootMenu": {
            "logoOption": "upload",
            "addSign": true,
            "remixIcon": {
                "Content": "M12 17C14.2091 17 16 15.2091 16 13H14C14 14.1046 13.1046 15 12 15 10.8954 15 10 14.1046 10 13H8C8 15.2091 9.79086 17 12 17ZM6.5 2C4.01472 2 2 4.01472 2 6.5 2 7.85729 2.60121 9.07332 3.54934 9.89751 3.19384 10.8656 3 11.911 3 13 3 17.9706 7.02944 22 12 22 16.9706 22 21 17.9706 21 13 21 11.911 20.8062 10.8656 20.4507 9.89751 21.3988 9.07332 22 7.85729 22 6.5 22 4.01472 19.9853 2 17.5 2 15.8737 2 14.4505 2.8624 13.6601 4.15297 13.1215 4.05246 12.5665 4 12 4 11.4335 4 10.8785 4.05246 10.3399 4.15297 9.5495 2.8624 8.12635 2 6.5 2ZM4 6.5C4 5.11929 5.11929 4 6.5 4 7.58033 4 8.50304 4.68577 8.8517 5.64896L9.1696 6.52718 10.0675 6.26991C10.6801 6.09435 11.3282 6 12 6 12.6718 6 13.3199 6.09435 13.9325 6.26991L14.8304 6.52718 15.1483 5.64896C15.497 4.68577 16.4197 4 17.5 4 18.8807 4 20 5.11929 20 6.5 20 7.43301 19.4894 8.24804 18.7275 8.67859L17.9141 9.13832 18.3176 9.98107C18.7547 10.8939 19 11.9169 19 13 19 16.866 15.866 20 12 20 8.13401 20 5 16.866 5 13 5 11.9169 5.24529 10.8939 5.6824 9.98107L6.08595 9.13832 5.27248 8.6786C4.51064 8.24805 4 7.43301 4 6.5Z",
                "Category": "User & Faces",
                "id": "bear-smile-line"
            },
            "googleFont": {
                "id": "ABeeZee",
                "subsets": [
                    "latin",
                    "latin-ext"
                ],
                "category": "sans-serif",
                "family": "ABeeZee",
                "variants": [
                    "regular",
                    "italic"
                ],
                "selectedStyle": "regular"
            },
            "sideMenuSize": "resizeble",
            "generatedLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><div></div><svg width=\"187\" height=\"52\" viewBox=\"0 0 94 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"10%\"><stop offset=\"0%\" stop-color=\"#dd3e54\"></stop><stop offset=\"100%\" stop-color=\"#6be585\"></stop></linearGradient><text letter-spacing=\"0\" fill=\"rgba(0,0,0,.8)\" font-size=\"30\" x=\"0\" y=\"23\">Directual Dev</text></svg></div>",
            "generatedSmallLogo": "<div><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\"><div></div><svg width=\"52\" height=\"52\" viewBox=\"0 0 26 26\"><linearGradient id=\"grad10\" x1=\"10%\" y1=\"10%\" x2=\"90%\" y2=\"10%\"><stop offset=\"0%\" stop-color=\"#dd3e54\"></stop><stop offset=\"100%\" stop-color=\"#6be585\"></stop></linearGradient></svg></div>",
            "logoGenerationSettings": {
                "logoColor": "rgba(0,0,0,.8)",
                "logoSubtitleColor": "rgba(0,0,0,.8)",
                "signColor": "#058efc",
                "signColorGrad1": "#dd3e54",
                "signColorGrad2": "#6be585",
                "signFillType": "solid",
                "signGradDirection": "hor",
                "signSize": 30,
                "logoTextSize": 30,
                "scaleSign": 1.1555555555555554,
                "moveSign": 0,
                "moveHorSign": 0,
                "lineSpacing": 1.2,
                "titleLetterSpacing": 0,
                "subtitleLetterSpacing": 0,
                "titleY": 23,
                "subtitleY": 13,
                "logoSubtitleSize": 6
            },
            "menuCompactWidth": 50,
            "menuPadding": 15,
            "menuLogoMargin": 20,
            "menuBorderWidth": 3
        },
        "item__1702032623640": {
            "linkToPage": "/open-pipeline",
            "name": "Public Roadmap",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "kanban"
        },
        "group_1702032834666": {
            "name": "Public pages"
        },
        "group_1702032845969": {
            "name": "My pages",
            "permissions": "all_registered"
        },
        "item__1702035114482": {
            "linkToPage": "/new-feature",
            "name": "Suggest a Feature",
            "permissions": "all_registered",
            "specifyRoles": "",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "idea"
        },
        "item__1702035125602": {
            "linkToPage": "/feature-requests",
            "name": "Vote for the Features",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "arrowUp"
        },
        "item__1702035160342": {
            "linkToPage": "/my-subscriptions",
            "name": "Features I watch",
            "iconType": "directual_icon",
            "menuDirectualIconSet": "view"
        }
    }
}

function MainMenuWrapper(props) {
    let location = useLocation()
    const { currentBP } = props
    let history = useHistory();

    const [logoUrl, setlogoUrl] = useState('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')

    const handleRoute = href => {
        console.log('route to => ' + href)
        history.push(href);
    }

    useEffect(() => {

        if (props.themeName.colorScheme === 'darkMint' || props.themeName.colorScheme === 'warmNight' || props.themeName.colorScheme === 'hacker') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/b652c768-32eb-4309-bc7f-974863107528.svg')
        }
        if (props.themeName.colorScheme === 'classic' || props.themeName.colorScheme === 'tiffany' || props.themeName.colorScheme === 'white') {
            setlogoUrl('https://api.alfa.directual.com/fileUploaded/directual-site/31f7185d-f0cc-4063-bc59-1ca46d9f8b7c.svg')
        }
    }, [props.themeName])

    if (props.mobileTabs && currentBP == 'mobile') {
        return <NewMobileTabs
            theme='ural'
            mainMenu={newMenuEexample.mainMenu}
            mobileMenuOption={newMenuEexample.mobileMenuOption}
            menuConfig={newMenuEexample.menuConfig}
            mobileMenu={newMenuEexample.mobileMenu}
            currentRoute={location.pathname || '/'}
            custom_labels={{
                "counter": "0",
                "foo": "3"
            }}
            currentBP={currentBP}
            handleRoute={href => e => {
                handleRoute(href);
            }}
            auth={props.auth}
        />
    }

    return <NewMainMenu
        title='directual-design'
        theme='ural'
        oldLogoUrl="https://api.directual.com/fileUploaded/dev/48294569-8ce6-4d95-822a-af2eecdd8462.png"
        compactState
        currentBP={currentBP}
        handleRoute={href => e => {
            handleRoute(href);
        }}
        //horizontal={props.horizontal}
        logOut={e => console.log('log out!')}
        auth={props.auth}
        mainMenu={newMenuEexample.mainMenu}
        mobileMenuOption={newMenuEexample.mobileMenuOption}
        menuConfig={newMenuEexample.menuConfig}
        mobileMenu={newMenuEexample.mobileMenu}
        currentRoute={location.pathname || '/'}
        custom_labels={{
            "counter": "0",
            "foo": "hello brave new world, how are you?!"
        }}
    />

    return (
        <MainMenu
            title='directual-design'
            showUserButtons={true}
            loggedIn={true}
            logoSize={{
                height: 52,
                width: 187
            }}
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
                { name: "Chart", group: 'Components', route: "/chart", icon: "chart" },
                { name: "Comments (soon)", group: 'Components', route: "/comments", icon: "version", hidden: true },
                { name: "Design system", subheader: true },
                { name: "Typography", route: "/system-typography", icon: "paragraph", link: <Link to="/system-typography">Typography</Link> },
                { name: "Directual Icons", route: "/system-icons", icon: "babai", link: <Link to="/system-icons">Directual icons</Link> },
                { name: "Buttons", route: "/system-button", icon: "done", link: <Link to="/system-button">Action panel, Buttons</Link> },
                { name: "Data entry", route: "/system-data-entry", icon: "import", link: <Link to="/system-data-entry">Data entry</Link> },
                { name: "Media", route: "/system-media", icon: "play", link: <Link to="/system-media">Media</Link> },
                { name: "Layout", route: "/system-layout", icon: "dashboard", link: <Link to="/system-layout">Layout</Link> },
                { name: "Platform", group: 'Design system', route: "/platform", icon: "babai", link: <Link to="/platform">Platform</Link> },
            ]}

        />)
}

const App = (props) => {
    let exampleDataHtml = {
        html: '<b>test</b>'
    }

    let cardActions = {
        "sl": "vpnKey",
        "pageSize": "4",
        "headerField": null,
        "params": {
            "cardListLayout": "looseGrid",
            "cardHeaderComment": "user",
            "deleteField": "",
            "cardBodyText": "paid_up_to",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "country",
                        "fetch": [],
                        "sysName": "country",
                        "name": "Страна",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "servers"
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
                        "fieldSysName": "idVPN",
                        "fetch": [],
                        "sysName": "idVPN",
                        "name": "ID VPN",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "paid_up_to",
                        "fetch": [],
                        "sysName": "paid_up_to",
                        "name": "Оплачен до",
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
                            "isUTC": "true"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "servserVPN",
                        "fetch": [],
                        "sysName": "servserVPN",
                        "name": "Какой VPN",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "servers"
                    },
                    {
                        "fieldSysName": "ss_key",
                        "fetch": [],
                        "sysName": "ss_key",
                        "name": "Ключ для подключения к VPN",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "Статус",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "user",
                        "fetch": [],
                        "sysName": "user",
                        "name": "Пользователь",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    }
                ],
                "writeFields": [],
                "fields": {
                    "country": {
                        "id": "country",
                        "content": "Страна",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "servers",
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
                    "idVPN": {
                        "id": "idVPN",
                        "content": "ID VPN",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "paid_up_to": {
                        "id": "paid_up_to",
                        "content": "Оплачен до",
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
                            "isUTC": "true"
                        },
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "servserVPN": {
                        "id": "servserVPN",
                        "content": "Какой VPN",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "servers",
                        "actions": []
                    },
                    "ss_key": {
                        "id": "ss_key",
                        "content": "Ключ для подключения к VPN",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "Статус",
                        "type": "field",
                        "dataType": "array",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "user": {
                        "id": "user",
                        "content": "Пользователь",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "action__71551694689685262": {
                        "id": "action__71551694689685262",
                        "content": "Отмена подписки",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "email": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "paid_up_to": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "ss_key": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "tariff": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": false
                    },
                    "country": {
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
                    "idVPN": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "servserVPN": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "user": {
                        "include": false,
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
                            "paid_up_to",
                            "ss_key",
                            "status",
                            "country",
                            "id",
                            "idVPN",
                            "servserVPN",
                            "user",
                            "action__71551694689685262"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "email": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "paid_up_to": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "ss_key": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "tariff": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": false
                },
                "country": {
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
                "idVPN": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "servserVPN": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "user": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "cardHeaderStyle": "p",
            "cardColor": "status",
            "cardColorOption": "none",
            "cardLayoutType": "default",
            "actions": [
                {
                    "sysName": "cancel_paymentnut_lk",
                    "id": "71551694689685262",
                    "name": "Отмена подписки",
                    "displayAs": "button",
                    "buttonIcon": "ban",
                    "conditionals": [
                        {
                            "id": "74461694690822939",
                            "target": "field",
                            "value": "Оплачен",
                            "field": "status"
                        }
                    ],
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
                                "fieldSysName": "country",
                                "fetch": [],
                                "sysName": "country",
                                "name": "",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": null
                            },
                            {
                                "fieldSysName": "email",
                                "fetch": [],
                                "sysName": "email",
                                "name": "",
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
                            }
                        ]
                    },
                    "formMapping": [
                        {
                            "id": "11471694689740746",
                            "target": "country",
                            "type": "objectField",
                            "value": "country"
                        },
                        {
                            "id": "55631694689756718",
                            "target": "email",
                            "type": "objectField",
                            "value": "user"
                        }
                    ],
                    "showMessage": true,
                    "closePopup": false,
                    "resultMessage": "Запрос на отмену подписки отправлен, вам придет письмо",
                    "resultButton": "Подписка отменяется"
                }
            ]
        },
        "tableTitle": "Ключи для VPN",
        "actions": null,
        "headers": [
            {
                "sysName": "country",
                "dataType": "link",
                "name": "Страна",
                "id": "15411673282156887",
                "link": "servers",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 8,
                "linkIndexFieldSysName": [
                    "country"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": true,
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
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "idVPN",
                "dataType": "string",
                "name": "ID VPN",
                "id": "85101673281869481",
                "link": null,
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "paid_up_to",
                "dataType": "date",
                "name": "Оплачен до",
                "id": "60121673281813015",
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
                    "isUTC": "true"
                },
                "groupName": null,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "servserVPN",
                "dataType": "link",
                "name": "Какой VPN",
                "id": "72501673281886265",
                "link": "servers",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 7,
                "linkIndexFieldSysName": [
                    "country"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": true,
                "array": false
            },
            {
                "sysName": "ss_key",
                "dataType": "string",
                "name": "Ключ для подключения к VPN",
                "id": "48521673281776493",
                "link": null,
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "array",
                "name": "Статус",
                "id": "67281673281863015",
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
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "indexExists": false,
                "array": true
            },
            {
                "sysName": "user",
                "dataType": "link",
                "name": "Пользователь",
                "id": "20071673281951832",
                "link": "WebUser",
                "group": "0",
                "tags": null,
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 2,
                "linkIndexFieldSysName": [
                    "servserVPN.country",
                    "id"
                ],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "indexExists": true,
                "array": false
            }
        ],
        "data": [
            {
                "idVPN": "213",
                "country": "Netherlands",
                "id": "7b0669f7-9497-4971-bc3c-8c57622833ab",
                "ss_key": "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo3TlZ6aDV3S2c0elJlZzVZb0NRNFI5@51.15.102.5:32243/?outline=1",
                "status": [
                    "Оплачен"
                ],
                "paid_up_to": 1699976745175,
                "servserVPN": "ab3a8a64-41a4-4f69-be7f-5e851e032e4d",
                "user": "test13@bubuvpn.com"
            },
            {
                "idVPN": "1",
                "country": "Turkey",
                "id": "a6952aaa-c988-4125-b562-c5235bee545c",
                "ss_key": "ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpjUmtZSW1pNmpwcW9tbUtYNnNKeDdi@185.123.100.29:1337/?outline=1",
                "status": [
                    "Оплачен"
                ],
                "paid_up_to": 1697298706534,
                "servserVPN": "ea9a6be4-12d6-450c-8cbd-140f642a9a6e",
                "user": "test13@bubuvpn.com"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "country",
                99165310
            ],
            [
                "id",
                99165310
            ],
            [
                "idVPN",
                99165310
            ],
            [
                "paid_up_to",
                99165310
            ],
            [
                "servserVPN",
                99165310
            ],
            [
                "ss_key",
                99165310
            ],
            [
                "status",
                99165310
            ],
            [
                "user",
                99165310
            ]
        ],
        "writeFields": [],
        "structures": {
            "99165310": {
                "networkID": 14030,
                "id": 99165310,
                "dateCreated": "2023-01-11T14:20:41Z",
                "hidden": false,
                "dateHidden": null,
                "name": "vpn_key",
                "sysName": "vpn_key",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"dateCreated\",\"dataType\":\"date\",\"name\":\"Дата создания\",\"id\":\"44761675095209850\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"user\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"20071673281951832\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"servserVPN.country\",\"id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"ss_key\",\"dataType\":\"string\",\"name\":\"Ключ для подключения к VPN\",\"id\":\"48521673281776493\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"paid_up_to\",\"dataType\":\"date\",\"name\":\"Оплачен до\",\"id\":\"60121673281813015\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"ru\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD.MM.Y\",\"timeFormat\":\"\",\"isUTC\":\"true\"},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"array\",\"name\":\"Статус\",\"id\":\"67281673281863015\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":true},{\"sysName\":\"idVPN\",\"dataType\":\"string\",\"name\":\"ID VPN\",\"id\":\"85101673281869481\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"servserVPN\",\"dataType\":\"link\",\"name\":\"Какой VPN\",\"id\":\"72501673281886265\",\"link\":\"servers\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[\"country\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"country\",\"dataType\":\"link\",\"name\":\"Страна\",\"id\":\"15411673282156887\",\"link\":\"servers\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[\"country\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":true,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"accessUrl\",\"dataType\":\"string\",\"name\":\"Ответ от сервера\",\"id\":\"10391673448202267\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false},{\"sysName\":\"type_purchase\",\"dataType\":\"string\",\"name\":\"Тип покупки\",\"id\":\"47341675520436360\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\",\"multipleChoice\":[{\"value\":\"new\",\"label\":\"Новый\"},{\"value\":\"add\",\"label\":\"Дополнительный\"}]},\"groupName\":null,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"array\":false}]",
                "jsonGroupSettings": "[]",
                "jsonViewIdSettings": "[{\"sysName\":\"status\"},{\"sysName\":\"country\"}]",
                "jsonSettings": "{\"inMemory\":false,\"isCacheable\":false,\"timeCache\":0,\"indexEnabled\":true,\"lowPriority\":false}",
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-06-27T09:49:52Z",
                "createBy": 14363,
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
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "indexExists": false,
                    "array": false
                },
                "folderId": null
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
        "sl": "getKanban",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "cardHeaderComment": "",
            "cardBodyText": "",
            "cardImage": false,
            "cardImageField": "",
            "cardImageType": "none",
            "cardImageSize": 100,
            "objectView": {},
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "arrival_date",
                        "fetch": [],
                        "sysName": "arrival_date",
                        "name": "Date of Arrival",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "back_wheel_part",
                        "fetch": [],
                        "sysName": "back_wheel_part",
                        "name": "Back Wheel Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bicycle_part",
                        "fetch": [],
                        "sysName": "bicycle_part",
                        "name": "Choose Bicycle Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "biycle_problem_message",
                        "fetch": [],
                        "sysName": "biycle_problem_message",
                        "name": "Problem Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "choose_wheel",
                        "fetch": [],
                        "sysName": "choose_wheel",
                        "name": "Choose Wheel",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "client",
                        "fetch": [],
                        "sysName": "client",
                        "name": "Client",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "date_created",
                        "fetch": [],
                        "sysName": "date_created",
                        "name": "Date Created",
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
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "front_wheel_part",
                        "fetch": [],
                        "sysName": "front_wheel_part",
                        "name": "Front Wheel Part",
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
                        "fieldSysName": "max_arrival_time",
                        "fetch": [],
                        "sysName": "max_arrival_time",
                        "name": "Latest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "message",
                        "fetch": [],
                        "sysName": "message",
                        "name": "Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "min_arrival_time",
                        "fetch": [],
                        "sysName": "min_arrival_time",
                        "name": "Earliest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_method",
                        "fetch": [],
                        "sysName": "payment_method",
                        "name": "Payment Method",
                        "dataType": "string",
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
                        "name": "Status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "kanban_columns"
                    },
                    {
                        "fieldSysName": "time_interval",
                        "fetch": [],
                        "sysName": "time_interval",
                        "name": "Time Interval",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "uploads_images_array_link",
                        "fetch": [],
                        "sysName": "uploads_images_array_link",
                        "name": "Images",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "appointments_images"
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Weight",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
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
                        "fieldSysName": "arrival_date",
                        "fetch": [],
                        "sysName": "arrival_date",
                        "name": "Date of Arrival",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "back_wheel_part",
                        "fetch": [],
                        "sysName": "back_wheel_part",
                        "name": "Back Wheel Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bicycle_part",
                        "fetch": [],
                        "sysName": "bicycle_part",
                        "name": "Choose Bicycle Part",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "biycle_problem_message",
                        "fetch": [],
                        "sysName": "biycle_problem_message",
                        "name": "Problem Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "choose_wheel",
                        "fetch": [],
                        "sysName": "choose_wheel",
                        "name": "Choose Wheel",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "client",
                        "fetch": [],
                        "sysName": "client",
                        "name": "Client",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "date_created",
                        "fetch": [],
                        "sysName": "date_created",
                        "name": "Date Created",
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
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "link": ""
                    },
                    {
                        "fieldSysName": "front_wheel_part",
                        "fetch": [],
                        "sysName": "front_wheel_part",
                        "name": "Front Wheel Part",
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
                        "fieldSysName": "max_arrival_time",
                        "fetch": [],
                        "sysName": "max_arrival_time",
                        "name": "Latest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "message",
                        "fetch": [],
                        "sysName": "message",
                        "name": "Message",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "min_arrival_time",
                        "fetch": [],
                        "sysName": "min_arrival_time",
                        "name": "Earliest arrival time",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "payment_method",
                        "fetch": [],
                        "sysName": "payment_method",
                        "name": "Payment Method",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "status",
                        "fetch": [],
                        "sysName": "status",
                        "name": "Status",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "kanban_columns"
                    },
                    {
                        "fieldSysName": "time_interval",
                        "fetch": [],
                        "sysName": "time_interval",
                        "name": "Time Interval",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "uploads_images_array_link",
                        "fetch": [],
                        "sysName": "uploads_images_array_link",
                        "name": "Images",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "appointments_images"
                    },
                    {
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Weight",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "fields": {
                    "arrival_date": {
                        "id": "arrival_date",
                        "content": "Date of Arrival",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "back_wheel_part": {
                        "id": "back_wheel_part",
                        "content": "Back Wheel Part",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bicycle_part": {
                        "id": "bicycle_part",
                        "content": "Choose Bicycle Part",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "biycle_problem_message": {
                        "id": "biycle_problem_message",
                        "content": "Problem Message",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "choose_wheel": {
                        "id": "choose_wheel",
                        "content": "Choose Wheel",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "client": {
                        "id": "client",
                        "content": "Client",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "date_created": {
                        "id": "date_created",
                        "content": "Date Created",
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
                            "timeFormat": "",
                            "isUTC": "false"
                        },
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "front_wheel_part": {
                        "id": "front_wheel_part",
                        "content": "Front Wheel Part",
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
                    "max_arrival_time": {
                        "id": "max_arrival_time",
                        "content": "Latest arrival time",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "message": {
                        "id": "message",
                        "content": "Message",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "min_arrival_time": {
                        "id": "min_arrival_time",
                        "content": "Earliest arrival time",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "payment_method": {
                        "id": "payment_method",
                        "content": "Payment Method",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "status": {
                        "id": "status",
                        "content": "Status",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "kanban_columns",
                        "actions": []
                    },
                    "time_interval": {
                        "id": "time_interval",
                        "content": "Time Interval",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "uploads_images_array_link": {
                        "id": "uploads_images_array_link",
                        "content": "Images",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "appointments_images",
                        "actions": []
                    },
                    "weight": {
                        "id": "weight",
                        "content": "Weight",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "@dateChanged": {
                        "id": "@dateChanged",
                        "content": "date changed",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
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
                        "link": "",
                        "actions": []
                    },
                    "action__46951693334766477": {
                        "id": "action__46951693334766477",
                        "content": "New action",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "arrival_date": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "back_wheel_part": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bicycle_part": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "biycle_problem_message": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "choose_wheel": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "client": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "date_created": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "front_wheel_part": {
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
                    "max_arrival_time": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "message": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "min_arrival_time": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "payment_method": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "status": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "time_interval": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "uploads_images_array_link": {
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
                    },
                    "@dateChanged": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@dateCreated": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "@who": {
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
                            "arrival_date",
                            "back_wheel_part",
                            "bicycle_part",
                            "biycle_problem_message",
                            "choose_wheel",
                            "client",
                            "date_created",
                            "front_wheel_part",
                            "id",
                            "max_arrival_time",
                            "message",
                            "min_arrival_time",
                            "payment_method",
                            "status",
                            "time_interval",
                            "uploads_images_array_link",
                            "weight",
                            "@dateChanged",
                            "@dateCreated",
                            "@who",
                            "action__46951693334766477"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "arrival_date": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "back_wheel_part": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bicycle_part": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "biycle_problem_message": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "choose_wheel": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "client": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "date_created": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "front_wheel_part": {
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
                "max_arrival_time": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "message": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "min_arrival_time": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "payment_method": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "status": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "time_interval": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "uploads_images_array_link": {
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
                },
                "@dateChanged": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@dateCreated": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "@who": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "kanbanParams": {
                "columnField": "status",
                "columnsStruct": "kanban_columns",
                "columns": [
                    {
                        "id": "1",
                        "name": "To Do"
                    },
                    {
                        "id": "2",
                        "name": "In Progress"
                    },
                    {
                        "id": "3",
                        "name": "Completed"
                    }
                ],
                "columnsVisibility": {},
                "sortField": "weight",
                "userIDfield": null
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "46951693334766477",
                    "name": "New action"
                }
            ]
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "arrival_date",
                "dataType": "string",
                "name": "Date of Arrival",
                "id": "16131692638537162",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "back_wheel_part",
                "dataType": "string",
                "name": "Back Wheel Part",
                "id": "92211692638522018",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "bicycle_part",
                "dataType": "string",
                "name": "Choose Bicycle Part",
                "id": "67561692638644338",
                "link": "",
                "group": "1692638633142",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "biycle_problem_message",
                "dataType": "string",
                "name": "Problem Message",
                "id": "62471692638653105",
                "link": "",
                "group": "1692638633142",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "choose_wheel",
                "dataType": "string",
                "name": "Choose Wheel",
                "id": "58441692638381014",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "client",
                "dataType": "link",
                "name": "Client",
                "id": "88971692557371477",
                "link": "WebUser",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    "role"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "date_created",
                "dataType": "date",
                "name": "Date Created",
                "id": "62221692977312800",
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
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "front_wheel_part",
                "dataType": "string",
                "name": "Front Wheel Part",
                "id": "43731692638513352",
                "link": "",
                "group": "1692638412820",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "max_arrival_time",
                "dataType": "string",
                "name": "Latest arrival time",
                "id": "77471692638668493",
                "link": "",
                "group": "1692638633142",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "message",
                "dataType": "string",
                "name": "Message",
                "id": "44951692638527107",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "min_arrival_time",
                "dataType": "string",
                "name": "Earliest arrival time",
                "id": "50521692638659436",
                "link": "",
                "group": "1692638633142",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "payment_method",
                "dataType": "string",
                "name": "Payment Method",
                "id": "14281692638467603",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "link",
                "name": "Status",
                "id": "80061693332942643",
                "link": "kanban_columns",
                "group": "1693332936503",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "time_interval",
                "dataType": "string",
                "name": "Time Interval",
                "id": "19021692638553575",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "uploads_images_array_link",
                "dataType": "arrayLink",
                "name": "Images",
                "id": "18281692638740800",
                "link": "appointments_images",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "weight",
                "dataType": "decimal",
                "name": "Weight",
                "id": "31311693332958118",
                "link": "",
                "group": "1693332936503",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "data": [
            {
                "uploads_images_array_link": [
                    "1ef8322f-d6fd-4e66-8b4b-77ee91450e57"
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "10:00",
                "biycle_problem_message": "Our Electric Cargo bike needs to have its brakes and gears cleaned and adjusted. The pads on the hydraulic brakes needs replacing. If possible the hydralic arm between the front and rear part of the bike needs welding.",
                "payment_method": "MobilePay",
                "id": "bf75b49b-cc95-4402-a004-9cd9b449a05d",
                "client": "kasper_rud@hotmail.com",
                "arrival_date": "24-08-2023",
                "max_arrival_time": "14:30"
            },
            {
                "time_interval": "8,12",
                "uploads_images_array_link": [
                    "0ba17b88-b3b8-4b10-b645-c57c08695208"
                ],
                "back_wheel_part": "Slange på baghjul - 450 kr.",
                "payment_method": "MobilePay",
                "id": "37b29869-e7f9-4a99-8d6f-a3799662f821",
                "client": "j.dalby@hotmail.com",
                "arrival_date": "22-08-2023",
                "choose_wheel": "Baghjul",
                "message": "Cyklen står i forhaven MBK Comanche"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Gear og kæde",
                "min_arrival_time": "09:00",
                "biycle_problem_message": "Mine cykel gear bliver ved med at hoppe ud af det gear man er i så den kan kun kører i 1, mangler luft i hjulene ",
                "payment_method": "Kontant",
                "id": "574be768-5f62-400c-8e85-ac37b342032b",
                "client": "amalie.lodberg@icloud.com",
                "arrival_date": "22-08-2023",
                "max_arrival_time": "10:00"
            },
            {
                "uploads_images_array_link": [
                    "7bf84d48-0404-4134-970e-c4f3a258ffc1",
                    "21fc7c6d-63e6-43ae-957c-617dec891b26"
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "10:00",
                "biycle_problem_message": "Både hjul, bremser og kæde skal tjekkes igennem. Dæk er helt flade. Det er to specialdesignet cargo cykler. Billederne er inden de blev brugt",
                "payment_method": "MobilePay",
                "id": "4be37981-4c64-43fe-8cc9-8906bc87e585",
                "client": "amalie.norgaard@wmglobal.com",
                "arrival_date": "28-08-2023",
                "max_arrival_time": "15:00"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "10:30",
                "biycle_problem_message": "Jeg kan ikke skrue mit styr fast efter jeg forsøgte at hæve styret. Kilen der normalt skal komme med op på frempinden sidder fast i bunden og er rusten. Resten af udstyret virker fuldkommen intakt. ",
                "payment_method": "MobilePay",
                "id": "ab66fe13-216a-412a-abb3-128533ba9df8",
                "client": "michellaholstkontakt@gmail.com",
                "arrival_date": "23-08-2023",
                "max_arrival_time": "15:00"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "12:00",
                "biycle_problem_message": "Sco elcykel trækker ikke køre i hug har fået nyt batteri",
                "payment_method": "MobilePay",
                "id": "1e361e1e-4dc5-43e3-98db-c222e54b243e",
                "client": "reimannsren@gmail.com",
                "arrival_date": "24-08-2023",
                "max_arrival_time": "12:00"
            },
            {
                "uploads_images_array_link": [
                    ""
                ],
                "bicycle_part": "Andet",
                "min_arrival_time": "17:15",
                "biycle_problem_message": "Forhjulet er muligvis punkteret og så binder batteriet så jeg ikke kan få det ud og det er sket før. ",
                "payment_method": "MobilePay",
                "id": "d4052ac9-6d72-4677-a2c2-487d8e6089bc",
                "client": "rikke_harms@hotmail.com",
                "arrival_date": "23-08-2023",
                "max_arrival_time": "20:00"
            },
            {
                "time_interval": "0",
                "uploads_images_array_link": [
                    ""
                ],
                "back_wheel_part": "Dæk og slange på baghjul - 750 kr.",
                "id": "7a37a716-b796-4b95-a841-ff0803ab3bec",
                "client": "kattenpuk@hotmail.com",
                "arrival_date": "01-09-2023",
                "choose_wheel": "Baghjul"
            },
            {
                "time_interval": "0",
                "uploads_images_array_link": [
                    ""
                ],
                "front_wheel_part": "Dæk og slange på forhjul - 750 kr.",
                "id": "f77dc505-8283-4899-92c4-512c4b2cd202",
                "client": "alextasha1370@gmail.com",
                "arrival_date": "26-08-2023",
                "choose_wheel": "Forhjul"
            },
            {
                "time_interval": "8,12",
                "uploads_images_array_link": [
                    ""
                ],
                "back_wheel_part": "Slange på baghjul - 450 kr.",
                "payment_method": "MobilePay",
                "id": "71b39b3c-75ad-4d78-bd19-4d722e0c4fb0",
                "client": "sanne.johansen@icloud.com",
                "arrival_date": "24-08-2023",
                "choose_wheel": "Baghjul"
            }
        ],
        "totalPages": 7,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "arrival_date",
                99243887
            ],
            [
                "back_wheel_part",
                99243887
            ],
            [
                "bicycle_part",
                99243887
            ],
            [
                "biycle_problem_message",
                99243887
            ],
            [
                "choose_wheel",
                99243887
            ],
            [
                "client",
                99243887
            ],
            [
                "date_created",
                99243887
            ],
            [
                "front_wheel_part",
                99243887
            ],
            [
                "id",
                99243887
            ],
            [
                "max_arrival_time",
                99243887
            ],
            [
                "message",
                99243887
            ],
            [
                "min_arrival_time",
                99243887
            ],
            [
                "payment_method",
                99243887
            ],
            [
                "status.id",
                99245426
            ],
            [
                "status.status",
                99245426
            ],
            [
                "time_interval",
                99243887
            ],
            [
                "uploads_images_array_link",
                99243887
            ],
            [
                "weight",
                99243887
            ]
        ],
        "writeFields": [
            "@dateChanged",
            "@dateCreated",
            "@who",
            "arrival_date",
            "back_wheel_part",
            "bicycle_part",
            "biycle_problem_message",
            "choose_wheel",
            "client",
            "date_created",
            "front_wheel_part",
            "id",
            "max_arrival_time",
            "message",
            "min_arrival_time",
            "payment_method",
            "status",
            "time_interval",
            "uploads_images_array_link",
            "weight"
        ],
        "structures": {
            "99243887": {
                "networkID": 18213,
                "sysName": "appointments",
                "name": "appointments (FORM)",
                "id": 99243887,
                "dateCreated": "2023-08-20T18:45:20Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"payment_method\",\"name\":\"Payment Method\",\"dataType\":\"string\",\"id\":\"14281692638467603\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"arrival_date\",\"name\":\"Date of Arrival\",\"dataType\":\"string\",\"id\":\"16131692638537162\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"uploads_images_array_link\",\"name\":\"Images\",\"dataType\":\"arrayLink\",\"id\":\"18281692638740800\",\"link\":\"appointments_images\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"time_interval\",\"name\":\"Time Interval\",\"dataType\":\"string\",\"id\":\"19021692638553575\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"weight\",\"name\":\"Weight\",\"dataType\":\"decimal\",\"id\":\"31311693332958118\",\"link\":\"\",\"group\":\"1693332936503\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"front_wheel_part\",\"name\":\"Front Wheel Part\",\"dataType\":\"string\",\"id\":\"43731692638513352\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"message\",\"name\":\"Message\",\"dataType\":\"string\",\"id\":\"44951692638527107\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"min_arrival_time\",\"name\":\"Earliest arrival time\",\"dataType\":\"string\",\"id\":\"50521692638659436\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"choose_wheel\",\"name\":\"Choose Wheel\",\"dataType\":\"string\",\"id\":\"58441692638381014\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"date_created\",\"name\":\"Date Created\",\"dataType\":\"date\",\"id\":\"62221692977312800\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\"\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"biycle_problem_message\",\"name\":\"Problem Message\",\"dataType\":\"string\",\"id\":\"62471692638653105\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"bicycle_part\",\"name\":\"Choose Bicycle Part\",\"dataType\":\"string\",\"id\":\"67561692638644338\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"max_arrival_time\",\"name\":\"Latest arrival time\",\"dataType\":\"string\",\"id\":\"77471692638668493\",\"link\":\"\",\"group\":\"1692638633142\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"status\",\"name\":\"Status\",\"dataType\":\"link\",\"id\":\"80061693332942643\",\"link\":\"kanban_columns\",\"group\":\"1693332936503\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false},{\"sysName\":\"client\",\"name\":\"Client\",\"dataType\":\"link\",\"id\":\"88971692557371477\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":\"\",\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"role\"],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":true},{\"sysName\":\"back_wheel_part\",\"name\":\"Back Wheel Part\",\"dataType\":\"string\",\"id\":\"92211692638522018\",\"link\":\"\",\"group\":\"1692638412820\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"indexExists\":false}]",
                "jsonGroupSettings": "[{\"id\":1692638412820,\"name\":\"Wheel service\",\"order\":0},{\"id\":1692638633142,\"name\":\"Repair or overhaul\",\"order\":1},{\"id\":1693332936503,\"name\":\"Kanban\",\"order\":2}]",
                "jsonViewIdSettings": "[{\"sysName\":\"client\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T18:16:31Z",
                "createBy": 8272,
                "changedBy": 8272,
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
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33770298
            },
            "99245426": {
                "networkID": 18213,
                "sysName": "kanban_columns",
                "name": "Kanban Columns",
                "id": 99245426,
                "dateCreated": "2023-08-29T18:12:17Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"status\",\"dataType\":\"string\",\"name\":\"Status\",\"id\":\"39921693332754786\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"indexExists\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"status\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": false,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-08-29T18:12:48Z",
                "createBy": 8272,
                "changedBy": 8272,
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
                    "indexExists": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "array": false
                },
                "folderId": 33770298
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "@dateChanged",
                "dataType": "string",
                "name": "@dateChanged",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "@dateCreated",
                "dataType": "string",
                "name": "@dateCreated",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "@who",
                "dataType": "string",
                "name": "@who",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "arrival_date",
                "dataType": "string",
                "name": "Date of Arrival",
                "id": "16131692638537162",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "back_wheel_part",
                "dataType": "string",
                "name": "Back Wheel Part",
                "id": "92211692638522018",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "bicycle_part",
                "dataType": "string",
                "name": "Choose Bicycle Part",
                "id": "67561692638644338",
                "link": "",
                "group": "1692638633142",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "biycle_problem_message",
                "dataType": "string",
                "name": "Problem Message",
                "id": "62471692638653105",
                "link": "",
                "group": "1692638633142",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "choose_wheel",
                "dataType": "string",
                "name": "Choose Wheel",
                "id": "58441692638381014",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "client",
                "dataType": "link",
                "name": "Client",
                "id": "88971692557371477",
                "link": "WebUser",
                "group": "0",
                "tags": "",
                "indexing": true,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 1,
                "linkIndexFieldSysName": [
                    "role"
                ],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "date_created",
                "dataType": "date",
                "name": "Date Created",
                "id": "62221692977312800",
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
                    "timeFormat": "",
                    "isUTC": "false"
                },
                "groupName": null,
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "front_wheel_part",
                "dataType": "string",
                "name": "Front Wheel Part",
                "id": "43731692638513352",
                "link": "",
                "group": "1692638412820",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "max_arrival_time",
                "dataType": "string",
                "name": "Latest arrival time",
                "id": "77471692638668493",
                "link": "",
                "group": "1692638633142",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "message",
                "dataType": "string",
                "name": "Message",
                "id": "44951692638527107",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "min_arrival_time",
                "dataType": "string",
                "name": "Earliest arrival time",
                "id": "50521692638659436",
                "link": "",
                "group": "1692638633142",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "payment_method",
                "dataType": "string",
                "name": "Payment Method",
                "id": "14281692638467603",
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
                "indexExists": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "status",
                "dataType": "link",
                "name": "Status",
                "id": "80061693332942643",
                "link": "kanban_columns",
                "group": "1693332936503",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "time_interval",
                "dataType": "string",
                "name": "Time Interval",
                "id": "19021692638553575",
                "link": "",
                "group": "1692638412820",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            },
            {
                "sysName": "uploads_images_array_link",
                "dataType": "arrayLink",
                "name": "Images",
                "id": "18281692638740800",
                "link": "appointments_images",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "array": false
            },
            {
                "sysName": "weight",
                "dataType": "decimal",
                "name": "Weight",
                "id": "31311693332958118",
                "link": "",
                "group": "1693332936503",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "array": false
            }
        ],
        "quickSearch": null,
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let exampleTable = {
        "sl": "getRequest",
        "pageSize": "12",
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
                        "fieldSysName": "additionalPhotoFront",
                        "fetch": [],
                        "sysName": "additionalPhotoFront",
                        "name": "Дополнительное фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "adminId",
                        "fetch": [],
                        "sysName": "adminId",
                        "name": "Кто провел верификацию",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "age",
                        "fetch": [],
                        "sysName": "age",
                        "name": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bio",
                        "fetch": [],
                        "sysName": "bio",
                        "name": "О себе",
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
                        "fieldSysName": "comment",
                        "fetch": [],
                        "sysName": "comment",
                        "name": "Комментарий",
                        "dataType": "string",
                        "format": "",
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
                        "fieldSysName": "gallery",
                        "fetch": [],
                        "sysName": "gallery",
                        "name": "Галерея",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "gender",
                        "fetch": [],
                        "sysName": "gender",
                        "name": "Пол",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "height",
                        "fetch": [],
                        "sysName": "height",
                        "name": "Рост",
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
                        "fieldSysName": "isInvitedAdmin",
                        "fetch": [],
                        "sysName": "isInvitedAdmin",
                        "name": "Пригласил администратор?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                        "fieldSysName": "isInvitedUser",
                        "fetch": [],
                        "sysName": "isInvitedUser",
                        "name": "Пригласил пользователь?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                        "fieldSysName": "location",
                        "fetch": [],
                        "sysName": "location",
                        "name": "Координаты",
                        "dataType": "json",
                        "format": "geo",
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
                            "geoType": "oneObject",
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
                        "fieldSysName": "mainPhotoFront",
                        "fetch": [],
                        "sysName": "mainPhotoFront",
                        "name": "Главное фото",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photoInFullHeightFront",
                        "fetch": [],
                        "sysName": "photoInFullHeightFront",
                        "name": "Фото в полный рост",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photoMemFront",
                        "fetch": [],
                        "sysName": "photoMemFront",
                        "name": "Мем",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photoSelfieFront",
                        "fetch": [],
                        "sysName": "photoSelfieFront",
                        "name": "Фото лица",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "requestDate",
                        "fetch": [],
                        "sysName": "requestDate",
                        "name": "Время заявки",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "requestStatus",
                        "fetch": [],
                        "sysName": "requestStatus",
                        "name": "Статус заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_status"
                    },
                    {
                        "fieldSysName": "requestType",
                        "fetch": [],
                        "sysName": "requestType",
                        "name": "Тип заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_type"
                    },
                    {
                        "fieldSysName": "verificationData",
                        "fetch": [],
                        "sysName": "verificationData",
                        "name": "Дата проверки",
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
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Вес",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "adminId",
                        "fetch": [],
                        "sysName": "adminId",
                        "name": "Кто провел верификацию",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "comment",
                        "fetch": [],
                        "sysName": "comment",
                        "name": "Комментарий",
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
                        "fieldSysName": "requestStatus",
                        "fetch": [],
                        "sysName": "requestStatus",
                        "name": "Статус заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_status"
                    }
                ],
                "fields": {
                    "additionalPhotoFront": {
                        "id": "additionalPhotoFront",
                        "content": "Дополнительное фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "adminId": {
                        "id": "adminId",
                        "content": "Кто провел верификацию",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser",
                        "actions": []
                    },
                    "age": {
                        "id": "age",
                        "content": "Возраст",
                        "type": "field",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "bio": {
                        "id": "bio",
                        "content": "О себе",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "comment": {
                        "id": "comment",
                        "content": "Комментарий",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
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
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "gallery": {
                        "id": "gallery",
                        "content": "Галерея",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "gender": {
                        "id": "gender",
                        "content": "Пол",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "height": {
                        "id": "height",
                        "content": "Рост",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
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
                    "isInvitedAdmin": {
                        "id": "isInvitedAdmin",
                        "content": "Пригласил администратор?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                    "isInvitedUser": {
                        "id": "isInvitedUser",
                        "content": "Пригласил пользователь?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                    "lastName": {
                        "id": "lastName",
                        "content": "Фамилия",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "location": {
                        "id": "location",
                        "content": "Координаты",
                        "type": "field",
                        "dataType": "json",
                        "format": "geo",
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
                            "geoType": "oneObject",
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
                    "mainPhotoFront": {
                        "id": "mainPhotoFront",
                        "content": "Главное фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "photoInFullHeightFront": {
                        "id": "photoInFullHeightFront",
                        "content": "Фото в полный рост",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "photoMemFront": {
                        "id": "photoMemFront",
                        "content": "Мем",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "photoSelfieFront": {
                        "id": "photoSelfieFront",
                        "content": "Фото лица",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "requestDate": {
                        "id": "requestDate",
                        "content": "Время заявки",
                        "type": "field",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "requestStatus": {
                        "id": "requestStatus",
                        "content": "Статус заявки",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "request_status",
                        "actions": []
                    },
                    "requestType": {
                        "id": "requestType",
                        "content": "Тип заявки",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "request_type",
                        "actions": []
                    },
                    "verificationData": {
                        "id": "verificationData",
                        "content": "Дата проверки",
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
                    "weight": {
                        "id": "weight",
                        "content": "Вес",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "action__77161695113320580": {
                        "content": "Одобрить",
                        "id": "action__77161695113320580",
                        "type": "action",
                        "actions": []
                    },
                    "action__68841695113405656": {
                        "content": "Одобрить, отправить рекомендацию",
                        "id": "action__68841695113405656",
                        "type": "action",
                        "actions": []
                    },
                    "action__47921695113445712": {
                        "content": "Отклонить",
                        "id": "action__47921695113445712",
                        "type": "action",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "requestStatus": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "requestType": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "age": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "bio": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "city": {
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
                    "gender": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "height": {
                        "include": true,
                        "disableEditing": false,
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
                    "location": {
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
                    },
                    "mainPhoto": {
                        "include": true,
                        "disableEditing": false,
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
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                },
                                "urlLink": {
                                    "id": "urlLink",
                                    "content": "urlLink",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": {}
                                }
                            },
                            "fieldParams": {
                                "id": {
                                    "include": false,
                                    "disableEditing": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "urlLink": {
                                    "include": true,
                                    "disableEditing": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "urlLink"
                            ]
                        },
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1701341506019",
                                    "field": "urlLink"
                                }
                            ]
                        }
                    },
                    "photoInFullHeight": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1701341514002",
                                    "field": "urlLink"
                                }
                            ]
                        }
                    },
                    "photoSelfie": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1701341510333",
                                    "field": "urlLink"
                                }
                            ]
                        }
                    },
                    "photoMem": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "veiwOption": "table",
                        "tableView": {
                            "columns": [
                                {
                                    "id": "1701341518037",
                                    "field": "urlLink"
                                }
                            ]
                        }
                    },
                    "adminId": {
                        "include": true,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "veiwOption": "tags",
                        "configureLinkedCard": {
                            "fields": {},
                            "fieldParams": {},
                            "fieldOrder": []
                        }
                    },
                    "comment": {
                        "include": true,
                        "disableEditing": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "displayAsHint": true,
                        "hintType": "ok"
                    },
                    "requestDate": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "verificationData": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "isInvitedAdmin": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "isInvitedUser": {
                        "include": false,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "gallery": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "mainPhotoFront": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "photoInFullHeightFront": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "photoMemFront": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "photoSelfieFront": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "additionalPhotoFront": {
                        "include": true,
                        "disableEditing": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    }
                },
                "columns": {
                    "21601695115078305": {
                        "id": "21601695115078305",
                        "title": "User  ",
                        "fieldIds": [
                            "firstName",
                            "lastName",
                            "gender",
                            "age",
                            "height",
                            "weight",
                            "location",
                            "city",
                            "bio",
                            "id",
                            "requestStatus",
                            "requestType",
                            "requestDate",
                            "isInvitedAdmin",
                            "isInvitedUser",
                            "gallery"
                        ]
                    },
                    "74451695115445324": {
                        "id": "74451695115445324",
                        "title": "Action",
                        "fieldIds": [
                            "action__77161695113320580",
                            "action__68841695113405656",
                            "action__47921695113445712"
                        ]
                    },
                    "36341695115871428": {
                        "id": "36341695115871428",
                        "title": "Photo",
                        "fieldIds": [
                            "mainPhotoFront",
                            "photoSelfieFront",
                            "photoInFullHeightFront",
                            "additionalPhotoFront",
                            "photoMemFront"
                        ]
                    },
                    "68471696239821660": {
                        "id": "68471696239821660",
                        "title": "Модерация",
                        "fieldIds": [
                            "verificationData",
                            "adminId",
                            "comment"
                        ]
                    }
                },
                "columnOrder": [
                    "21601695115078305",
                    "36341695115871428",
                    "68471696239821660",
                    "74451695115445324"
                ],
                "actions": [
                    {
                        "sysName": "",
                        "id": "77161695113320580",
                        "name": "Одобрить",
                        "displayAs": "button",
                        "buttonIcon": "done",
                        "buttonType": "accent",
                        "showMessage": false,
                        "closePopup": true,
                        "callFrom": "main",
                        "formMapping": [
                            {
                                "id": "63731695119066877",
                                "target": "adminId",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "92091695119199363",
                                "target": "requestStatus",
                                "type": "const",
                                "value": "approved"
                            },
                            {
                                "id": "52141695119245703",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ]
                    },
                    {
                        "sysName": "",
                        "id": "68841695113405656",
                        "name": "Одобрить, отправить рекомендацию",
                        "displayAs": "form",
                        "buttonIcon": "edit",
                        "SLtype": "same",
                        "formFields": [
                            {
                                "id": "47801695119219110",
                                "field": {
                                    "fieldSysName": "comment",
                                    "fetch": [],
                                    "sysName": "comment",
                                    "name": "Комментарий",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "58041695119228243",
                                "target": "adminId",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "50061695119233557",
                                "target": "requestStatus",
                                "type": "const",
                                "value": "partiallyApproved"
                            },
                            {
                                "id": "18031695119255848",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ],
                        "closePopup": true,
                        "showMessage": false
                    },
                    {
                        "sysName": "",
                        "id": "47921695113445712",
                        "name": "Отклонить",
                        "displayAs": "form",
                        "buttonIcon": "ban",
                        "buttonType": "danger",
                        "SLtype": "same",
                        "formFields": [
                            {
                                "id": "60571695119279159",
                                "field": {
                                    "fieldSysName": "comment",
                                    "fetch": [],
                                    "sysName": "comment",
                                    "name": "Комментарий",
                                    "dataType": "string",
                                    "format": "",
                                    "formatOptions": {},
                                    "link": ""
                                }
                            }
                        ],
                        "formMapping": [
                            {
                                "id": "73881695119282334",
                                "target": "adminId",
                                "type": "user",
                                "value": null
                            },
                            {
                                "id": "39581695119285340",
                                "target": "requestStatus",
                                "type": "const",
                                "value": "rejected"
                            },
                            {
                                "id": "14401695119294047",
                                "target": "id",
                                "type": "objectField",
                                "value": "id"
                            }
                        ],
                        "closePopup": true,
                        "showMessage": false
                    }
                ]
            },
            "fields": {
                "id": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "requestStatus": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "requestType": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "age": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "bio": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "city": {
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
                "gender": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "height": {
                    "include": true,
                    "disableEditing": false,
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
                "location": {
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
                },
                "mainPhoto": {
                    "include": true,
                    "disableEditing": false,
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
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            },
                            "urlLink": {
                                "id": "urlLink",
                                "content": "urlLink",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": {}
                            }
                        },
                        "fieldParams": {
                            "id": {
                                "include": false,
                                "disableEditing": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "urlLink": {
                                "include": true,
                                "disableEditing": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "urlLink"
                        ]
                    },
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1701341506019",
                                "field": "urlLink"
                            }
                        ]
                    }
                },
                "photoInFullHeight": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1701341514002",
                                "field": "urlLink"
                            }
                        ]
                    }
                },
                "photoSelfie": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1701341510333",
                                "field": "urlLink"
                            }
                        ]
                    }
                },
                "photoMem": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "veiwOption": "table",
                    "tableView": {
                        "columns": [
                            {
                                "id": "1701341518037",
                                "field": "urlLink"
                            }
                        ]
                    }
                },
                "adminId": {
                    "include": true,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "veiwOption": "tags",
                    "configureLinkedCard": {
                        "fields": {},
                        "fieldParams": {},
                        "fieldOrder": []
                    }
                },
                "comment": {
                    "include": true,
                    "disableEditing": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "displayAsHint": true,
                    "hintType": "ok"
                },
                "requestDate": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "verificationData": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isInvitedAdmin": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "isInvitedUser": {
                    "include": false,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "gallery": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "mainPhotoFront": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "photoInFullHeightFront": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "photoMemFront": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "photoSelfieFront": {
                    "include": true,
                    "disableEditing": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "additionalPhotoFront": {
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
                        "fieldSysName": "adminId",
                        "fetch": [],
                        "sysName": "adminId",
                        "name": "Кто провел верификацию",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "age",
                        "fetch": [],
                        "sysName": "age",
                        "name": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "bio",
                        "fetch": [],
                        "sysName": "bio",
                        "name": "О себе",
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
                        "fieldSysName": "comment",
                        "fetch": [],
                        "sysName": "comment",
                        "name": "Комментарий",
                        "dataType": "string",
                        "format": "",
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
                        "fieldSysName": "gender",
                        "fetch": [],
                        "sysName": "gender",
                        "name": "Пол",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "height",
                        "fetch": [],
                        "sysName": "height",
                        "name": "Рост",
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
                        "fieldSysName": "isInvitedAdmin",
                        "fetch": [],
                        "sysName": "isInvitedAdmin",
                        "name": "Пригласил администратор?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                        "fieldSysName": "isInvitedUser",
                        "fetch": [],
                        "sysName": "isInvitedUser",
                        "name": "Пригласил пользователь?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                        "fieldSysName": "location",
                        "fetch": [],
                        "sysName": "location",
                        "name": "Координаты",
                        "dataType": "json",
                        "format": "geo",
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
                            "geoType": "oneObject",
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
                        "fieldSysName": "mainPhoto",
                        "fetch": [],
                        "sysName": "mainPhoto",
                        "name": "Главное фото",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photoInFullHeight",
                        "fetch": [],
                        "sysName": "photoInFullHeight",
                        "name": "Фото в полный рост",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photoMem",
                        "fetch": [],
                        "sysName": "photoMem",
                        "name": "Мем",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "photoSelfie",
                        "fetch": [],
                        "sysName": "photoSelfie",
                        "name": "Фото лица",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "requestDate",
                        "fetch": [],
                        "sysName": "requestDate",
                        "name": "Время заявки",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "requestStatus",
                        "fetch": [],
                        "sysName": "requestStatus",
                        "name": "Статус заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_status"
                    },
                    {
                        "fieldSysName": "requestType",
                        "fetch": [],
                        "sysName": "requestType",
                        "name": "Тип заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_type"
                    },
                    {
                        "fieldSysName": "verificationData",
                        "fetch": [],
                        "sysName": "verificationData",
                        "name": "Дата проверки",
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
                        "fieldSysName": "weight",
                        "fetch": [],
                        "sysName": "weight",
                        "name": "Вес",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [
                    {
                        "fieldSysName": "adminId",
                        "fetch": [],
                        "sysName": "adminId",
                        "name": "Кто провел верификацию",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "WebUser"
                    },
                    {
                        "fieldSysName": "comment",
                        "fetch": [],
                        "sysName": "comment",
                        "name": "Комментарий",
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
                        "fieldSysName": "requestStatus",
                        "fetch": [],
                        "sysName": "requestStatus",
                        "name": "Статус заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "request_status"
                    }
                ],
                "fields": {
                    "adminId": {
                        "id": "adminId",
                        "content": "Кто провел верификацию",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "WebUser"
                    },
                    "age": {
                        "id": "age",
                        "content": "Возраст",
                        "dataType": "number",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "bio": {
                        "id": "bio",
                        "content": "О себе",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "city": {
                        "id": "city",
                        "content": "Город",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "comment": {
                        "id": "comment",
                        "content": "Комментарий",
                        "dataType": "string",
                        "format": "",
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
                        "read": true,
                        "link": ""
                    },
                    "gender": {
                        "id": "gender",
                        "content": "Пол",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "height": {
                        "id": "height",
                        "content": "Рост",
                        "dataType": "decimal",
                        "format": "",
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
                    "isInvitedAdmin": {
                        "id": "isInvitedAdmin",
                        "content": "Пригласил администратор?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                    "isInvitedUser": {
                        "id": "isInvitedUser",
                        "content": "Пригласил пользователь?",
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
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
                    "lastName": {
                        "id": "lastName",
                        "content": "Фамилия",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "location": {
                        "id": "location",
                        "content": "Координаты",
                        "dataType": "json",
                        "format": "geo",
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
                            "geoType": "oneObject",
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
                    "mainPhoto": {
                        "id": "mainPhoto",
                        "content": "Главное фото",
                        "dataType": "file",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "photoInFullHeight": {
                        "id": "photoInFullHeight",
                        "content": "Фото в полный рост",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "photoMem": {
                        "id": "photoMem",
                        "content": "Мем",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "photoSelfie": {
                        "id": "photoSelfie",
                        "content": "Фото лица",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "requestDate": {
                        "id": "requestDate",
                        "content": "Время заявки",
                        "dataType": "date",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "requestStatus": {
                        "id": "requestStatus",
                        "content": "Статус заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "write": true,
                        "read": true,
                        "link": "request_status"
                    },
                    "requestType": {
                        "id": "requestType",
                        "content": "Тип заявки",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "request_type"
                    },
                    "verificationData": {
                        "id": "verificationData",
                        "content": "Дата проверки",
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
                    "weight": {
                        "id": "weight",
                        "content": "Вес",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    }
                },
                "fieldParams": {
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "requestStatus": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "requestType": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "age": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "bio": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "city": {
                        "include": true,
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
                    "gender": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "height": {
                        "include": true,
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
                    "location": {
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
                    },
                    "mainPhoto": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "photoInFullHeight": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "photoSelfie": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "photoMem": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "adminId": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "comment": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "requestDate": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "verificationData": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "isInvitedAdmin": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "isInvitedUser": {
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
                    "requestStatus",
                    "requestType",
                    "mainPhoto",
                    "photoSelfie",
                    "photoInFullHeight",
                    "photoMem",
                    "lastName",
                    "firstName",
                    "age",
                    "gender",
                    "height",
                    "weight",
                    "city",
                    "location",
                    "bio",
                    "adminId",
                    "comment",
                    "requestDate",
                    "verificationData",
                    "isInvitedAdmin",
                    "isInvitedUser"
                ]
            },
            "autoRefresh": false,
            "autoRefreshPeriod": 300,
            "filterParams": {
                "isSorting": true,
                "isFiltering": true,
                "filteringType": "regular",
                "filterFields": {
                    "id": {
                        "active": false,
                        "format": "",
                        "formatOptions": {},
                        "name": "id"
                    },
                    "isInvitedAdmin": {
                        "active": true,
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "name": "Пригласил администратор?"
                    },
                    "isInvitedUser": {
                        "active": true,
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
                                "Без приглашения"
                            ],
                            "validWeekDays": {
                                "mon": true,
                                "thu": true,
                                "tue": true,
                                "sun": true,
                                "fri": true,
                                "sat": true,
                                "wed": true
                            },
                            "customOptionPlaceholder": "Describe your option",
                            "range": {},
                            "customOptionType": "textarea",
                            "dateFormat": "DD/MM/Y",
                            "timeFormat": " HH:mm",
                            "isUTC": "false"
                        },
                        "name": "Пригласил пользователь?"
                    }
                }
            },
            "actions": [
                {
                    "sysName": "",
                    "id": "77161695113320580",
                    "name": "Одобрить",
                    "displayAs": "button",
                    "buttonIcon": "done",
                    "buttonType": "accent",
                    "showMessage": false,
                    "closePopup": true,
                    "callFrom": "main",
                    "formMapping": [
                        {
                            "id": "63731695119066877",
                            "target": "adminId",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "92091695119199363",
                            "target": "requestStatus",
                            "type": "const",
                            "value": "approved"
                        },
                        {
                            "id": "52141695119245703",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ]
                },
                {
                    "sysName": "",
                    "id": "68841695113405656",
                    "name": "Одобрить, отправить рекомендацию",
                    "displayAs": "form",
                    "buttonIcon": "edit",
                    "SLtype": "same",
                    "formFields": [
                        {
                            "id": "47801695119219110",
                            "field": {
                                "fieldSysName": "comment",
                                "fetch": [],
                                "sysName": "comment",
                                "name": "Комментарий",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "58041695119228243",
                            "target": "adminId",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "50061695119233557",
                            "target": "requestStatus",
                            "type": "const",
                            "value": "partiallyApproved"
                        },
                        {
                            "id": "18031695119255848",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "closePopup": true,
                    "showMessage": false
                },
                {
                    "sysName": "",
                    "id": "47921695113445712",
                    "name": "Отклонить",
                    "displayAs": "form",
                    "buttonIcon": "ban",
                    "buttonType": "danger",
                    "SLtype": "same",
                    "formFields": [
                        {
                            "id": "60571695119279159",
                            "field": {
                                "fieldSysName": "comment",
                                "fetch": [],
                                "sysName": "comment",
                                "name": "Комментарий",
                                "dataType": "string",
                                "format": "",
                                "formatOptions": {},
                                "link": ""
                            }
                        }
                    ],
                    "formMapping": [
                        {
                            "id": "73881695119282334",
                            "target": "adminId",
                            "type": "user",
                            "value": null
                        },
                        {
                            "id": "39581695119285340",
                            "target": "requestStatus",
                            "type": "const",
                            "value": "rejected"
                        },
                        {
                            "id": "14401695119294047",
                            "target": "id",
                            "type": "objectField",
                            "value": "id"
                        }
                    ],
                    "closePopup": true,
                    "showMessage": false
                }
            ]
        },
        "tableTitle": "Заявки на верификацию от активных пользователей",
        "actions": null,
        "headers": [
            {
                "sysName": "additionalPhotoFront",
                "name": "Дополнительное фото",
                "dataType": "file",
                "id": "54481701936531921",
                "link": "",
                "group": "1701341718430",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "adminId",
                "name": "Кто провел верификацию",
                "dataType": "link",
                "id": "91981695118231259",
                "link": "WebUser",
                "group": "1695109558257",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "age",
                "name": "Возраст",
                "dataType": "number",
                "id": "36251695113852132",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "bio",
                "name": "О себе",
                "dataType": "string",
                "id": "39161695114000516",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "city",
                "name": "Город",
                "dataType": "string",
                "id": "75811695113912128",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "comment",
                "name": "Комментарий",
                "dataType": "string",
                "id": "82751695118262723",
                "link": "",
                "group": "1695109558257",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "firstName",
                "name": "Имя",
                "dataType": "string",
                "id": "50981695113791757",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "gallery",
                "name": "Галерея",
                "dataType": "file",
                "id": "98191699567497507",
                "link": "",
                "group": "1695115505401",
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
                "format": "multipleImages",
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "gender",
                "name": "Пол",
                "dataType": "string",
                "id": "29041695113809536",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "height",
                "name": "Рост",
                "dataType": "decimal",
                "id": "72361695113863888",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "isInvitedAdmin",
                "name": "Пригласил администратор?",
                "dataType": "boolean",
                "id": "84371696579625530",
                "link": "",
                "group": "1696579618561",
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
                        "Да",
                        "Без приглашения"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "isInvitedUser",
                "name": "Пригласил пользователь?",
                "dataType": "boolean",
                "id": "76231696579651454",
                "link": "",
                "group": "1696579618561",
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
                        "Да",
                        "Без приглашения"
                    ],
                    "validWeekDays": {
                        "mon": true,
                        "thu": true,
                        "tue": true,
                        "sun": true,
                        "fri": true,
                        "sat": true,
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "lastName",
                "name": "Фамилия",
                "dataType": "string",
                "id": "65251695113805100",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "location",
                "name": "Координаты",
                "dataType": "json",
                "id": "77441695113898518",
                "link": "",
                "group": "1695109500288",
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
                "format": "geo",
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
                    "geoType": "oneObject",
                    "customOptionPlaceholder": "Describe your option",
                    "range": {},
                    "customOptionType": "textarea",
                    "dateFormat": "DD/MM/Y",
                    "timeFormat": " HH:mm",
                    "isUTC": "false"
                },
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "json": true,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "mainPhotoFront",
                "name": "Главное фото",
                "dataType": "file",
                "id": "27991701341738328",
                "link": "",
                "group": "1701341718430",
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
                "format": "multipleImages",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "photoInFullHeightFront",
                "name": "Фото в полный рост",
                "dataType": "file",
                "id": "55601701341758893",
                "link": "",
                "group": "1701341718430",
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
                "format": "multipleImages",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "photoMemFront",
                "name": "Мем",
                "dataType": "file",
                "id": "81101701341761041",
                "link": "",
                "group": "1701341718430",
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
                "format": "multipleImages",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "photoSelfieFront",
                "name": "Фото лица",
                "dataType": "file",
                "id": "76121701341759401",
                "link": "",
                "group": "1701341718430",
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
                "format": "multipleImages",
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "requestDate",
                "name": "Время заявки",
                "dataType": "date",
                "id": "56021695203566005",
                "link": "",
                "group": "1695109537270",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "requestStatus",
                "name": "Статус заявки",
                "dataType": "link",
                "id": "69101695109544540",
                "link": "request_status",
                "group": "1695109537270",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "requestType",
                "name": "Тип заявки",
                "dataType": "link",
                "id": "45301695112324592",
                "link": "request_type",
                "group": "1695109537270",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "verificationData",
                "name": "Дата проверки",
                "dataType": "date",
                "id": "94391695118616229",
                "link": "",
                "group": "1695109558257",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "weight",
                "name": "Вес",
                "dataType": "decimal",
                "id": "74841695113883414",
                "link": "",
                "group": "1695109500288",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "data": [
            {
                "weight": 188,
                "city": "Москва",
                "requestDate": 1701958542000,
                "isInvitedUser": false,
                "requestType": "active",
                "height": 88,
                "age": 22,
                "gallery": [],
                "bio": "Ha-ha-ha",
                "firstName": "Noname",
                "id": "98a2aaca-5839-4b8f-b491-199d13a30fcd",
                "requestStatus": "wait",
                "isInvitedAdmin": false,
                "gender": "Ж",
                "adminId": "",
                "comment": ""
            },
            {
                "weight": 188,
                "city": "Москва",
                "requestDate": 1701958525000,
                "isInvitedUser": false,
                "requestType": "active",
                "height": 88,
                "age": 22,
                "gallery": [],
                "bio": "Ha-ha-ha",
                "firstName": "Noname",
                "id": "3d2c31c8-8f16-4143-a4bb-70dea98cbf17",
                "requestStatus": "wait",
                "isInvitedAdmin": false,
                "gender": "Ж",
                "adminId": "",
                "comment": ""
            },
            {
                "weight": 188,
                "city": "Москва",
                "requestDate": 1701958120000,
                "isInvitedUser": false,
                "requestType": "active",
                "height": 88,
                "age": 22,
                "gallery": [],
                "bio": "Ha-ha-ha",
                "firstName": "Noname21",
                "id": "0efdeb71-6de8-401a-8d22-e3d65b7c4adb",
                "requestStatus": "wait",
                "isInvitedAdmin": false,
                "gender": "Ж",
                "adminId": "",
                "comment": ""
            },
            {
                "weight": 188,
                "city": "Москва",
                "requestDate": 1701957365000,
                "isInvitedUser": false,
                "requestType": "active",
                "height": 88,
                "age": 22,
                "gallery": [],
                "bio": "Ha-ha-ha",
                "firstName": "Noname21",
                "id": "bf04b8ba-e523-46ad-8202-d2868bebe1b8",
                "requestStatus": "wait",
                "isInvitedAdmin": false,
                "gender": "Ж",
                "adminId": "",
                "comment": ""
            },
            {
                "weight": 188,
                "city": "Москва",
                "requestDate": 1701957283000,
                "isInvitedUser": false,
                "requestType": "active",
                "height": 88,
                "age": 22,
                "gallery": [],
                "bio": "Ha-ha-ha",
                "firstName": "Noname12",
                "id": "2a81eee6-d6ce-4fe2-bd6e-dfd4a030da68",
                "requestStatus": "wait",
                "isInvitedAdmin": false,
                "gender": "Ж",
                "adminId": "",
                "comment": ""
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "additionalPhotoFront",
                99251064
            ],
            [
                "adminId",
                99251064
            ],
            [
                "age",
                99251064
            ],
            [
                "bio",
                99251064
            ],
            [
                "city",
                99251064
            ],
            [
                "comment",
                99251064
            ],
            [
                "firstName",
                99251064
            ],
            [
                "gallery",
                99251064
            ],
            [
                "gender",
                99251064
            ],
            [
                "height",
                99251064
            ],
            [
                "id",
                99251064
            ],
            [
                "isInvitedAdmin",
                99251064
            ],
            [
                "isInvitedUser",
                99251064
            ],
            [
                "lastName",
                99251064
            ],
            [
                "location",
                99251064
            ],
            [
                "mainPhotoFront",
                99251064
            ],
            [
                "photoInFullHeightFront",
                99251064
            ],
            [
                "photoMemFront",
                99251064
            ],
            [
                "photoSelfieFront",
                99251064
            ],
            [
                "requestDate",
                99251064
            ],
            [
                "requestStatus",
                99251064
            ],
            [
                "requestType",
                99251064
            ],
            [
                "verificationData",
                99251064
            ],
            [
                "weight",
                99251064
            ]
        ],
        "writeFields": [
            "adminId",
            "comment",
            "id",
            "requestStatus"
        ],
        "structures": {
            "99251064": {
                "id": 99251064,
                "dateCreated": "2023-09-19T07:43:19Z",
                "hidden": false,
                "dateHidden": null,
                "networkID": 18487,
                "name": "Request",
                "sysName": "request",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"inviteId\",\"dataType\":\"link\",\"name\":\"Кто пригласил? \",\"id\":\"22071696579880559\",\"link\":\"WebUser\",\"group\":\"1696579618561\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"mainPhotoFront\",\"dataType\":\"file\",\"name\":\"Главное фото\",\"id\":\"27991701341738328\",\"link\":\"\",\"group\":\"1701341718430\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"gender\",\"dataType\":\"string\",\"name\":\"Пол\",\"id\":\"29041695113809536\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"shareCollectionPhotoIdsJson\",\"dataType\":\"json\",\"name\":\"Общая коллекция фоточек\",\"id\":\"29571695457778391\",\"link\":\"\",\"group\":\"1695109537270\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"age\",\"dataType\":\"number\",\"name\":\"Возраст\",\"id\":\"36251695113852132\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"photoInFullHeight\",\"dataType\":\"arrayLink\",\"name\":\"Фото в полный рост\",\"id\":\"36541695115517967\",\"link\":\"FileUpload\",\"group\":\"1695115505401\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"additionalPhoto\",\"dataType\":\"arrayLink\",\"name\":\"Дополнительное фото\",\"id\":\"37271701934773599\",\"link\":\"FileUpload\",\"group\":\"1695115505401\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"bio\",\"dataType\":\"string\",\"name\":\"О себе\",\"id\":\"39161695114000516\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"requestType\",\"dataType\":\"link\",\"name\":\"Тип заявки\",\"id\":\"45301695112324592\",\"link\":\"request_type\",\"group\":\"1695109537270\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"mainPhoto\",\"dataType\":\"link\",\"name\":\"Главное фото\",\"id\":\"45351695115516687\",\"link\":\"FileUpload\",\"group\":\"1695115505401\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"firstName\",\"dataType\":\"string\",\"name\":\"Имя\",\"id\":\"50981695113791757\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"additionalPhotoFront\",\"dataType\":\"file\",\"name\":\"Дополнительное фото\",\"id\":\"54481701936531921\",\"link\":\"\",\"group\":\"1701341718430\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"photoInFullHeightFront\",\"dataType\":\"file\",\"name\":\"Фото в полный рост\",\"id\":\"55601701341758893\",\"link\":\"\",\"group\":\"1701341718430\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"requestDate\",\"dataType\":\"date\",\"name\":\"Время заявки\",\"id\":\"56021695203566005\",\"link\":\"\",\"group\":\"1695109537270\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"photoMem\",\"dataType\":\"arrayLink\",\"name\":\"Мем\",\"id\":\"58621695116720467\",\"link\":\"FileUpload\",\"group\":\"1695115505401\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"lastName\",\"dataType\":\"string\",\"name\":\"Фамилия\",\"id\":\"65251695113805100\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"requestStatus\",\"dataType\":\"link\",\"name\":\"Статус заявки\",\"id\":\"69101695109544540\",\"link\":\"request_status\",\"group\":\"1695109537270\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"height\",\"dataType\":\"decimal\",\"name\":\"Рост\",\"id\":\"72361695113863888\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"weight\",\"dataType\":\"decimal\",\"name\":\"Вес\",\"id\":\"74841695113883414\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"city\",\"dataType\":\"string\",\"name\":\"Город\",\"id\":\"75811695113912128\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"photoSelfieFront\",\"dataType\":\"file\",\"name\":\"Фото лица\",\"id\":\"76121701341759401\",\"link\":\"\",\"group\":\"1701341718430\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isInvitedUser\",\"dataType\":\"boolean\",\"name\":\"Пригласил пользователь?\",\"id\":\"76231696579651454\",\"link\":\"\",\"group\":\"1696579618561\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Без приглашения\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"location\",\"dataType\":\"json\",\"name\":\"Координаты\",\"id\":\"77441695113898518\",\"link\":\"\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"geo\",\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"geoType\":\"oneObject\",\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":true,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"photoMemFront\",\"dataType\":\"file\",\"name\":\"Мем\",\"id\":\"81101701341761041\",\"link\":\"\",\"group\":\"1701341718430\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":null,\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"comment\",\"dataType\":\"string\",\"name\":\"Комментарий\",\"id\":\"82751695118262723\",\"link\":\"\",\"group\":\"1695109558257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"isInvitedAdmin\",\"dataType\":\"boolean\",\"name\":\"Пригласил администратор?\",\"id\":\"84371696579625530\",\"link\":\"\",\"group\":\"1696579618561\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Да\",\"Без приглашения\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"photoSelfie\",\"dataType\":\"arrayLink\",\"name\":\"Фото лица\",\"id\":\"85241695115727356\",\"link\":\"FileUpload\",\"group\":\"1695115505401\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"adminId\",\"dataType\":\"link\",\"name\":\"Кто провел верификацию\",\"id\":\"91981695118231259\",\"link\":\"WebUser\",\"group\":\"1695109558257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"verificationData\",\"dataType\":\"date\",\"name\":\"Дата проверки\",\"id\":\"94391695118616229\",\"link\":\"\",\"group\":\"1695109558257\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"userId\",\"dataType\":\"link\",\"name\":\"Пользователь\",\"id\":\"95061695118588098\",\"link\":\"WebUser\",\"group\":\"1695109500288\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false},{\"sysName\":\"gallery\",\"dataType\":\"file\",\"name\":\"Галерея\",\"id\":\"98191699567497507\",\"link\":\"\",\"group\":\"1695115505401\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"json\":false,\"typeVariable\":{},\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": "[{\"id\":1695109558257,\"name\":\"Admin\",\"order\":3},{\"id\":1695115505401,\"name\":\"User files\",\"order\":1},{\"id\":1701341718430,\"name\":\"Foto to admin Front\",\"order\":2},{\"id\":1696579618561,\"name\":\"Invite\",\"order\":5},{\"id\":1695109537270,\"name\":\"System\",\"order\":4},{\"id\":1695109500288,\"name\":\"User\",\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"lastName\"},{\"sysName\":\"firstName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-12-07T08:09:13Z",
                "createBy": 7868,
                "changedBy": 7868,
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
                    "array": false,
                    "typeVariable": {},
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false
                },
                "objectIDSysName": "id",
                "folderId": 33773562
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [
            {
                "sysName": "adminId",
                "name": "Кто провел верификацию",
                "dataType": "link",
                "id": "91981695118231259",
                "link": "WebUser",
                "group": "1695109558257",
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "comment",
                "name": "Комментарий",
                "dataType": "string",
                "id": "82751695118262723",
                "link": "",
                "group": "1695109558257",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false
            },
            {
                "sysName": "requestStatus",
                "name": "Статус заявки",
                "dataType": "link",
                "id": "69101695109544540",
                "link": "request_status",
                "group": "1695109537270",
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
                "array": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false
            }
        ],
        "quickSearch": "false",
        "httpParams": {
            "requestStatusActive": "wait",
            "requestType": "active"
        },
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    let authExample = {
        "isAuth": false,
        "custom_labels": "{\n   \"foo\": \"hello brave new world!\",\n   \"bar\": \"foobar\"\n}",
        "role": "admin",
        "lastName": "Watson",
        "firstName": "David",
        "token": "1a9f10d0-d45f-4bf2-9e7e-d6ce2e752d03",
        "notifications_counter": "",
        "nid": 18924,
        "user": "david@directual.com",
        //"userpic": "https://api.directual.com/fileUploaded/basic-template/efdd480a-d36a-4a01-ac82-baf871ffd2fd.jpg"
    }

    let exampleForm = {
        "sl": "editClient",
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
            "useEditing": true,
            "editObject": "url",
            "auth": {
                "isPerson": false
            }
        },
        "fileds": [
            {
                "sysName": "address",
                "dataType": "string",
                "name": "Address",
                "id": "99561692639142683",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "client_tag",
                "dataType": "link",
                "name": "Client Tag",
                "id": "40291696233077937",
                "link": "tags",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": true,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": true,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "firstName",
                "dataType": "string",
                "name": "First name",
                "id": "5",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 3,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
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
                "weight": 0,
                "order": 0,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "lastName",
                "dataType": "string",
                "name": "Last name",
                "id": "4",
                "link": "",
                "group": "0",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "phone",
                "dataType": "string",
                "name": "Phone",
                "id": "10",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 8,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": "Contacts",
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "post_number",
                "dataType": "string",
                "name": "Post",
                "id": "89351692639178868",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 4,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": {},
                "groupName": null,
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            },
            {
                "sysName": "userpic",
                "dataType": "file",
                "name": "User pic",
                "id": "1",
                "link": "",
                "group": "-502807437",
                "tags": "",
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": 0,
                "order": 13,
                "linkIndexFieldSysName": [],
                "defaultValue": "",
                "constraints": null,
                "synthetic": false,
                "format": "image",
                "formatOptions": {},
                "groupName": "Contacts",
                "indexExists": false,
                "linkType": false,
                "typeVariable": {},
                "json": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "array": false,
                "params": {
                    "include": true,
                    "hidden": false,
                    "required": false,
                    "isTextarea": false,
                    "isMarkdown": false,
                    "textareaRows": 4,
                    "defaultValue": "",
                    "isPositive": false,
                    "quickSearch": true,
                    "allowAddLinks": false,
                    "dateTimeOn": true,
                    "isValid": true,
                    "weight": 0,
                    "jsonDisplay": "default",
                    "range": {
                        "min": 0,
                        "max": 100,
                        "step": 1,
                        "unitName": ""
                    }
                },
                "isValid": true
            }
        ],
        "error": null,
        "isSuccessWrite": false,
        "response": null,
        "data": [],
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
        email: 'puzyrcult',
        role: 'admin',
        socialGoogle: 'jack@directual.com'
    }

    const chartData1 = {
        "sl": "charts",
        "pageSize": "15",
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
            "chart_type": "bar",
            "show_grid": true,
            "chart_strokeDasharray": "3 3",
            "x_axis": "day",
            "x_axis_format": "MMM DD",
            "chart_lines": [
                {
                    "id": "46351688806958485",
                    "color": "#7ed321",
                    "line_data": "tea_cups",
                    "line_label": "🫖 Tea cups",
                    "line_stackedID": "a",
                    "line_dot": true,
                    "line_width": 3
                },
                {
                    "id": "20401688806976761",
                    "color": "#4581eb",
                    "line_data": "coffee_cups",
                    "line_label": "☕️ Coffee cups",
                    "line_stackedID": "a",
                    "line_dot": true,
                    "line_width": 3
                },
                {
                    "id": "98841688806995895",
                    "color": "#d13f50",
                    "line_data": "whiskey_glasses",
                    "line_label": "🥃 Whiskey glasses",
                    "line_dot": true,
                    "line_width": 3
                }
            ],
            "paging_is_on": true,
            "show_legend": true,
            "show_tooltip": true,
            "filter_lines": true
        },
        "tableTitle": "Bar chart",
        "actions": null,
        "headers": [
            {
                "sysName": "coffee_cups",
                "name": "",
                "dataType": "number",
                "id": "27881688757041175",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "day",
                "name": "",
                "dataType": "string",
                "id": "36551688757035272",
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
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "tea_cups",
                "name": "",
                "dataType": "number",
                "id": "64901688757048476",
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            },
            {
                "sysName": "whiskey_glasses",
                "name": "",
                "dataType": "number",
                "id": "17731688757054436",
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
                "coffee_cups": 676,
                "tea_cups": 25,
                "whiskey_glasses": 292,
                "day": "2023-06-06",
                "day_formatted": "Jun 06",
                "🫖 Tea cups": 25,
                "☕️ Coffee cups": 676,
                "🥃 Whiskey glasses": 292
            },
            {
                "coffee_cups": 795,
                "tea_cups": 919,
                "whiskey_glasses": 415,
                "day": "2023-06-05",
                "day_formatted": "Jun 05",
                "🫖 Tea cups": 919,
                "☕️ Coffee cups": 795,
                "🥃 Whiskey glasses": 415
            },
            {
                "coffee_cups": 648,
                "tea_cups": 184,
                "whiskey_glasses": 306,
                "day": "2023-06-04",
                "day_formatted": "Jun 04",
                "🫖 Tea cups": 184,
                "☕️ Coffee cups": 648,
                "🥃 Whiskey glasses": 306
            },
            {
                "coffee_cups": 131,
                "tea_cups": 266,
                "whiskey_glasses": 214,
                "day": "2023-06-03",
                "day_formatted": "Jun 03",
                "🫖 Tea cups": 266,
                "☕️ Coffee cups": 131,
                "🥃 Whiskey glasses": 214
            },
            {
                "coffee_cups": 297,
                "tea_cups": 887,
                "whiskey_glasses": 399,
                "day": "2023-06-02",
                "day_formatted": "Jun 02",
                "🫖 Tea cups": 887,
                "☕️ Coffee cups": 297,
                "🥃 Whiskey glasses": 399
            },
            {
                "coffee_cups": 607,
                "tea_cups": 243,
                "whiskey_glasses": 224,
                "day": "2023-06-01",
                "day_formatted": "Jun 01",
                "🫖 Tea cups": 243,
                "☕️ Coffee cups": 607,
                "🥃 Whiskey glasses": 224
            },
            {
                "coffee_cups": 341,
                "tea_cups": 60,
                "whiskey_glasses": 487,
                "day": "2023-05-31",
                "day_formatted": "May 31",
                "🫖 Tea cups": 60,
                "☕️ Coffee cups": 341,
                "🥃 Whiskey glasses": 487
            },
            {
                "coffee_cups": 657,
                "tea_cups": 112,
                "whiskey_glasses": 221,
                "day": "2023-05-30",
                "day_formatted": "May 30",
                "🫖 Tea cups": 112,
                "☕️ Coffee cups": 657,
                "🥃 Whiskey glasses": 221
            },
            {
                "coffee_cups": 572,
                "tea_cups": 600,
                "whiskey_glasses": 266,
                "day": "2023-05-29",
                "day_formatted": "May 29",
                "🫖 Tea cups": 600,
                "☕️ Coffee cups": 572,
                "🥃 Whiskey glasses": 266
            },
            {
                "coffee_cups": 501,
                "tea_cups": 886,
                "whiskey_glasses": 99,
                "day": "2023-05-28",
                "day_formatted": "May 28",
                "🫖 Tea cups": 886,
                "☕️ Coffee cups": 501,
                "🥃 Whiskey glasses": 99
            },
            {
                "coffee_cups": 36,
                "tea_cups": 951,
                "whiskey_glasses": 138,
                "day": "2023-05-27",
                "day_formatted": "May 27",
                "🫖 Tea cups": 951,
                "☕️ Coffee cups": 36,
                "🥃 Whiskey glasses": 138
            },
            {
                "coffee_cups": 608,
                "tea_cups": 638,
                "whiskey_glasses": 26,
                "day": "2023-05-26",
                "day_formatted": "May 26",
                "🫖 Tea cups": 638,
                "☕️ Coffee cups": 608,
                "🥃 Whiskey glasses": 26
            },
            {
                "coffee_cups": 100,
                "tea_cups": 774,
                "whiskey_glasses": 16,
                "day": "2023-05-25",
                "day_formatted": "May 25",
                "🫖 Tea cups": 774,
                "☕️ Coffee cups": 100,
                "🥃 Whiskey glasses": 16
            },
            {
                "coffee_cups": 627,
                "tea_cups": 480,
                "whiskey_glasses": 232,
                "day": "2023-05-24",
                "day_formatted": "May 24",
                "🫖 Tea cups": 480,
                "☕️ Coffee cups": 627,
                "🥃 Whiskey glasses": 232
            },
            {
                "coffee_cups": 651,
                "tea_cups": 76,
                "whiskey_glasses": 440,
                "day": "2023-05-23",
                "day_formatted": "May 23",
                "🫖 Tea cups": 76,
                "☕️ Coffee cups": 651,
                "🥃 Whiskey glasses": 440
            }
        ],
        "totalPages": 5,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "coffee_cups",
                99232716
            ],
            [
                "day",
                99232716
            ],
            [
                "tea_cups",
                99232716
            ],
            [
                "whiskey_glasses",
                99232716
            ]
        ],
        "writeFields": [],
        "structures": {
            "99232716": {
                "networkID": 17743,
                "sysName": "daily_beverage_consumption",
                "name": "Daily beverage consumption",
                "id": 99232716,
                "dateCreated": "2023-07-07T19:04:56Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"whiskey_glasses\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"17731688757054436\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"coffee_cups\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"27881688757041175\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"day\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"36551688757035272\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false},{\"sysName\":\"tea_cups\",\"dataType\":\"number\",\"name\":\"\",\"id\":\"64901688757048476\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{},\"json\":false,\"linkOrArrayLinkType\":false,\"indexExists\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"day\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2023-07-07T19:11:30Z",
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
        "fileds": [],
        "quickSearch": "false",
        "httpParams": {},
        "cardCustomHtml": null,
        "cardCustomLayout": null
    }

    const chartData = {
        "sl": "dashboardMonthlyFin",
        "pageSize": "12",
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
            "chart_type": "bar",
            "chart_lines": [
                {
                    "id": "92861690919195721",
                    "color": "#3FCA52",
                    "line_data": "balance___sum",
                    "line_stackedID": "A"
                }
            ],
            "x_axis": "period",
            "show_grid": true,
            "chart_strokeDasharray": "3 3",
            "show_legend": true,
            "show_tooltip": true,
            "x_axis_format": "MMM",
            "lines_from_data": "from_data",
            "line_labels": "type",
            "filter_lines": true
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
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
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "indexExists": false,
                "typeVariable": {},
                "array": false
            }
        ],
        "data": [
            {
                "balance___sum": 507.37,
                "id___count": 5,
                "id": "64c95cd519b12a4adbe42d95",
                "type": "paddle_payment",
                "period": "2023-08",
                "paddle_payment": 507.37,
                "period_formatted": "Aug"
            },
            {
                "balance___sum": 885.16,
                "id___count": 14,
                "id": "64c95cd519b12a4adbe42d97",
                "type": "tinkoff",
                "period": "2023-08",
                "tinkoff": 885.16,
                "period_formatted": "Aug"
            },
            {
                "balance___sum": 2264.8,
                "id___count": 66,
                "id": "64c95cd519b12a4adbe42d9a",
                "type": "tinkoff",
                "period": "2023-07",
                "tinkoff": 2264.8,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 2162.28,
                "id___count": 34,
                "id": "64c95cd519b12a4adbe42db5",
                "type": "paddle_payment",
                "period": "2023-07",
                "paddle_payment": 2162.28,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 1103.22,
                "id___count": 4,
                "id": "64c95cd519b12a4adbe42df2",
                "type": "bank_payment",
                "period": "2023-07",
                "bank_payment": 1103.22,
                "period_formatted": "Jul"
            },
            {
                "balance___sum": 1589.43,
                "id___count": 31,
                "id": "64c95cd519b12a4adbe42d9f",
                "type": "paddle_payment",
                "period": "2023-06",
                "paddle_payment": 1589.43,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 2462.77,
                "id___count": 68,
                "id": "64c95cd519b12a4adbe42da0",
                "type": "tinkoff",
                "period": "2023-06",
                "tinkoff": 2462.77,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 4615.135,
                "id___count": 9,
                "id": "64c95cd519b12a4adbe42e3b",
                "type": "bank_payment",
                "period": "2023-06",
                "bank_payment": 4615.135,
                "period_formatted": "Jun"
            },
            {
                "balance___sum": 2269.15,
                "id___count": 69,
                "id": "64c95cd519b12a4adbe42da2",
                "type": "tinkoff",
                "period": "2023-05",
                "tinkoff": 2269.15,
                "period_formatted": "May"
            },
            {
                "balance___sum": 3485.11,
                "id___count": 53,
                "id": "64c95cd519b12a4adbe42daa",
                "type": "paddle_payment",
                "period": "2023-05",
                "paddle_payment": 3485.11,
                "period_formatted": "May"
            },
            {
                "balance___sum": 2587.37,
                "id___count": 4,
                "id": "64c95cd519b12a4adbe42dcf",
                "type": "bank_payment",
                "period": "2023-05",
                "bank_payment": 2587.37,
                "period_formatted": "May"
            },
            {
                "balance___sum": 2438,
                "id___count": 3,
                "id": "64c95cd519b12a4adbe42da9",
                "type": "bank_payment",
                "period": "2023-04",
                "bank_payment": 2438,
                "period_formatted": "Apr"
            }
        ],
        "totalPages": 5,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "balance___sum",
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
                "type",
                99155789
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
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "indexExists": false,
                    "typeVariable": {},
                    "array": false
                },
                "folderId": 33576258
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

    const brakePoints = {
        mobile: { from: 0, to: 768 },
        desktop: { from: 769, to: 10000 },
    }

    const layoutRef = useRef(null);
    const [currentBP, setCurrentBP] = useState('desktop')
    const [layoutWidth, setLayoutWidth] = useState(brakePoints[currentBP].display)

    // Calculating layout width:
    useEffect(() => {
        if (layoutRef.current && layoutRef.current.offsetWidth != layoutWidth) {
            setLayoutWidth(layoutRef.current.offsetWidth)
        }
    })
    useEffect(() => {
        if (layoutWidth <= brakePoints.mobile.to) {
            setCurrentBP('mobile')
        }
        if (layoutWidth >= brakePoints.desktop.from) {
            setCurrentBP('desktop')
        }
    }, [layoutWidth])

    useEffect(() => {
        const resizeListener = () => {
            if (layoutRef.current && layoutRef.current.offsetWidth !== layoutWidth) {
                setLayoutWidth(layoutRef.current.offsetWidth);
            }
        }
        window.addEventListener("resize", resizeListener);
        return () => { window.removeEventListener('resize', resizeListener); };
    }, []);
    // =========================

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
        { key: '1', title: 'Table', content: <FpsTable data={exampleTable} auth={authExample} locale='FRA' /> },
        // { key: '2', title: 'Tab 2', content: <div>Tab content 2</div> },
    ]

    return <Router>
        <div style={{ width: '100%', position: 'absolute', height: 0 }} ref={layoutRef}></div>
        <FpsWrapper
            horizontal={false || currentBP == 'mobile'}
            showMobileTabs
            mobileTabsPlace='bottom'
            mobileLeftSide={currentTheme.mobileMenu == 'left'}
            whiteLabel={false}
            locale='ESP'
            themeName={currentTheme}
            mainMenu={
                <MainMenuWrapper
                    themeName={currentTheme}
                    currentBP={currentBP}
                    auth={authExample}
                />
            }
            mobileTabs={
                <MainMenuWrapper
                    themeName={currentTheme}
                    auth={authExample}
                    mobileTabs
                    currentBP={currentBP}
                />
            }
            components={<React.Fragment>
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
                    <Route exact path="/chart">
                        <FpsChart data={chartData} />
                        <FpsChart data={chartData1} />
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
                        <FpsCards locale="ESP" data={cardActions} auth={authExample} currentBP='mobile' />
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
                        <h2>Youtube</h2>
                        {/* <CodeSnippet code="<Media type='video' source='https://www.youtube.com/watch?v=JAwEWLP-G_M' width='550' height='300'/>" /> */}
                        <Media type='video' source="https://www.youtube.com/watch?v=JAwEWLP-G_M" width='550' height='300' />
                        {/* <Stopwatch timer min={60} direction='reverse' sec={0} /> */}
                    </Route>

                </Switch>
            </React.Fragment>}
        >
        </FpsWrapper>
    </Router>
}

export default App