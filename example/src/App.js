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
        "sl": "testFiles",
        "pageSize": "10",
        "headerField": null,
        "params": {
            "data": {
                "readFields": [
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
                    },
                    {
                        "fieldSysName": "string",
                        "fetch": [],
                        "sysName": "string",
                        "name": "",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "file": {
                        "id": "file",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
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
                    "multiFiles": {
                        "id": "multiFiles",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleFiles",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "multiImages": {
                        "id": "multiImages",
                        "content": "",
                        "type": "field",
                        "dataType": "file",
                        "format": "multipleImages",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "string": {
                        "id": "string",
                        "content": "",
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
                    "file": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true,
                        "descriptionFlag": true,
                        "description": "хэллоу ебта"
                    },
                    "id": {
                        "include": false,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "image": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "fileUpload": true,
                        "fileImage": false,
                        "descriptionFlag": true,
                        "description": "второе "
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
                        "fileUpload": true,
                        "descriptionFlag": true,
                        "description": "третье"
                    },
                    "string": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false,
                        "descriptionFlag": true,
                        "description": "и компот"
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
                            "multiImages",
                            "string"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": []
            },
            "fields": {
                "file": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true,
                    "descriptionFlag": true,
                    "description": "хэллоу ебта"
                },
                "id": {
                    "include": false,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "image": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "fileUpload": true,
                    "fileImage": false,
                    "descriptionFlag": true,
                    "description": "второе "
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
                    "fileUpload": true,
                    "descriptionFlag": true,
                    "description": "третье"
                },
                "string": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false,
                    "descriptionFlag": true,
                    "description": "и компот"
                }
            }
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
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
            },
            {
                "sysName": "string",
                "dataType": "string",
                "name": "",
                "id": "77721631613586739",
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
                "json": false,
                "typeVariable": {},
                "indexExists": false,
                "linkOrArrayLinkType": false,
                "arrayLink": false,
                "linkType": false
            }
        ],
        "data": [
            {
                "string": "aa",
                "id": "c51eb1c7-d7b3-444e-b193-fb96c47132dd",
                "multiFiles": "https://api.alfa.directual.com/fileUploaded/testfiles/ee79ed98-5e00-4d51-948e-3ba2d5448ffc.jpeg,https://api.alfa.directual.com/fileUploaded/testfiles/ee79ed98-5e00-4d51-948e-3ba2d5448ffc.jpeg",
                "multiImages": "https://api.alfa.directual.com/fileUploaded/testfiles/ee79ed98-5e00-4d51-948e-3ba2d5448ffc.jpeg",
                "file": "https://api.alfa.directual.com/fileUploaded/testfiles/ee79ed98-5e00-4d51-948e-3ba2d5448ffc.jpeg"
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "file",
                99022456
            ],
            [
                "id",
                99022456
            ],
            [
                "image",
                99022456
            ],
            [
                "multiFiles",
                99022456
            ],
            [
                "multiImages",
                99022456
            ],
            [
                "string",
                99022456
            ]
        ],
        "writeFields": [],
        "structures": {
            "99022456": {
                "networkID": 9337,
                "id": 99022456,
                "dateCreated": "2021-09-13T16:26:04Z",
                "hidden": false,
                "dateHidden": null,
                "name": "files",
                "sysName": "files",
                "jsonObject": "[{\"sysName\":\"id\",\"dataType\":\"id\",\"name\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"file\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"39501631550751631\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"multiImages\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"64151631550776568\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleImages\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"multiFiles\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"77061631550759737\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"multipleFiles\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"string\",\"dataType\":\"string\",\"name\":\"\",\"id\":\"77721631613586739\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false},{\"sysName\":\"image\",\"dataType\":\"file\",\"name\":\"\",\"id\":\"78161631550767971\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"typeVariable\":{},\"json\":false,\"indexExists\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"array\":false}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": null,
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-14T10:44:34Z",
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
                    "json": false,
                    "typeVariable": {},
                    "indexExists": false,
                    "linkOrArrayLinkType": false,
                    "arrayLink": false,
                    "linkType": false
                },
                "objectIDSysName": "id",
                "folderId": null
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
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
        "sl": "finalScoreCLUB",
        "pageSize": "20",
        "headerField": null,
        "params": {
            "tableParams": {
                "readFields": [
                    {
                        "fieldSysName": "category",
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
                        "sysName": "category",
                        "name": "Весовая категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Categories"
                    },
                    {
                        "fieldSysName": "finalScore",
                        "fetch": [],
                        "sysName": "finalScore",
                        "name": "Баллы",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "fullName",
                        "fetch": [],
                        "sysName": "fullName",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "protocol_ids",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "protocol_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "referee_id",
                                "condition": null,
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
                                        "fieldSysName": "photo",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "score_ids",
                                "condition": null,
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
                                        "fieldSysName": "mark",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "total_score",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "protocol_ids",
                        "name": "Протоколы",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "protocols"
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
                        "name": "Вес",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "category": {
                        "id": "category",
                        "content": "Весовая категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Categories"
                    },
                    "finalScore": {
                        "id": "finalScore",
                        "content": "Баллы",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "fullName": {
                        "id": "fullName",
                        "content": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null
                    },
                    "photo": {
                        "id": "photo",
                        "content": "Фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "read": true,
                        "link": ""
                    },
                    "protocol_ids": {
                        "id": "protocol_ids",
                        "content": "Протоколы",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "protocols"
                    },
                    "school": {
                        "id": "school",
                        "content": "Школа",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
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
                    "category": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "finalScore": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "fullName": {
                        "include": true,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "photo": {
                        "include": true,
                        "fileImageFormat": "circle",
                        "fileImageSize": 60,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40,
                        "fileImage": true
                    },
                    "protocol_ids": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "school": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    },
                    "weight": {
                        "include": false,
                        "fileImageFormat": "square",
                        "fileImageSize": 80,
                        "colorCode": false,
                        "colorFormat": "square",
                        "colorSize": 40
                    }
                },
                "fieldOrder": [
                    "photo",
                    "category",
                    "fullName",
                    "finalScore",
                    "protocol_ids",
                    "school",
                    "weight"
                ]
            },
            "data": {
                "readFields": [
                    {
                        "fieldSysName": "category",
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
                        "sysName": "category",
                        "name": "Весовая категория",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "link": "Categories"
                    },
                    {
                        "fieldSysName": "finalScore",
                        "fetch": [],
                        "sysName": "finalScore",
                        "name": "Баллы",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "fullName",
                        "fetch": [],
                        "sysName": "fullName",
                        "name": "Имя",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "link": null
                    },
                    {
                        "fieldSysName": "photo",
                        "fetch": [],
                        "sysName": "photo",
                        "name": "Фото",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "link": ""
                    },
                    {
                        "fieldSysName": "protocol_ids",
                        "fetch": [
                            {
                                "fieldSysName": "id",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "protocol_name",
                                "condition": null,
                                "fetch": []
                            },
                            {
                                "fieldSysName": "referee_id",
                                "condition": null,
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
                                        "fieldSysName": "photo",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "score_ids",
                                "condition": null,
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
                                        "fieldSysName": "mark",
                                        "condition": null,
                                        "fetch": []
                                    }
                                ]
                            },
                            {
                                "fieldSysName": "total_score",
                                "condition": null,
                                "fetch": []
                            }
                        ],
                        "sysName": "protocol_ids",
                        "name": "Протоколы",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "link": "protocols"
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
                        "name": "Вес",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "link": ""
                    }
                ],
                "writeFields": [],
                "fields": {
                    "category": {
                        "id": "category",
                        "content": "Весовая категория",
                        "type": "field",
                        "dataType": "link",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "Categories",
                        "actions": []
                    },
                    "finalScore": {
                        "id": "finalScore",
                        "content": "Баллы",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "fullName": {
                        "id": "fullName",
                        "content": "Имя",
                        "type": "field",
                        "dataType": "string",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": null,
                        "actions": []
                    },
                    "photo": {
                        "id": "photo",
                        "content": "Фото",
                        "type": "field",
                        "dataType": "file",
                        "format": "image",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    },
                    "protocol_ids": {
                        "id": "protocol_ids",
                        "content": "Протоколы",
                        "type": "field",
                        "dataType": "arrayLink",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "protocols",
                        "actions": []
                    },
                    "school": {
                        "id": "school",
                        "content": "Школа",
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
                        "content": "Вес",
                        "type": "field",
                        "dataType": "decimal",
                        "format": "",
                        "formatOptions": {},
                        "read": true,
                        "link": "",
                        "actions": []
                    }
                },
                "fieldParams": {
                    "category": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "finalScore": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "fullName": {
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
                    "protocol_ids": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
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
                                "protocol_name": {
                                    "id": "protocol_name",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "string",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "referee_id": {
                                    "id": "referee_id",
                                    "content": "",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "link",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "score_ids": {
                                    "id": "score_ids",
                                    "content": "Оценки",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "arrayLink",
                                    "format": null,
                                    "formatOptions": null
                                },
                                "total_score": {
                                    "id": "total_score",
                                    "content": "Баллы",
                                    "type": "field",
                                    "read": true,
                                    "dataType": "number",
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
                                "protocol_name": {
                                    "include": false,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "referee_id": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "score_ids": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                },
                                "total_score": {
                                    "include": true,
                                    "fileImageFormat": "square",
                                    "fileImageSize": 200
                                }
                            },
                            "fieldOrder": [
                                "id",
                                "protocol_name",
                                "referee_id",
                                "total_score",
                                "score_ids"
                            ]
                        },
                        "subHeader": "Ghjnjrjk% "
                    },
                    "school": {
                        "include": true,
                        "fileImageFormat": "square",
                        "quickSearch": false,
                        "fileImageSize": 200,
                        "clickable": false
                    },
                    "weight": {
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
                            "photo",
                            "fullName",
                            "school",
                            "weight",
                            "category",
                            "finalScore",
                            "protocol_ids"
                        ]
                    }
                },
                "columnOrder": [
                    "tab-1"
                ],
                "actions": {}
            },
            "fields": {
                "category": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "finalScore": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "fullName": {
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
                "protocol_ids": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
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
                            "protocol_name": {
                                "id": "protocol_name",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "string",
                                "format": null,
                                "formatOptions": null
                            },
                            "referee_id": {
                                "id": "referee_id",
                                "content": "",
                                "type": "field",
                                "read": true,
                                "dataType": "link",
                                "format": null,
                                "formatOptions": null
                            },
                            "score_ids": {
                                "id": "score_ids",
                                "content": "Оценки",
                                "type": "field",
                                "read": true,
                                "dataType": "arrayLink",
                                "format": null,
                                "formatOptions": null
                            },
                            "total_score": {
                                "id": "total_score",
                                "content": "Баллы",
                                "type": "field",
                                "read": true,
                                "dataType": "number",
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
                            "protocol_name": {
                                "include": false,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "referee_id": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "score_ids": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            },
                            "total_score": {
                                "include": true,
                                "fileImageFormat": "square",
                                "fileImageSize": 200
                            }
                        },
                        "fieldOrder": [
                            "id",
                            "protocol_name",
                            "referee_id",
                            "total_score",
                            "score_ids"
                        ]
                    },
                    "subHeader": "Ghjnjrjk% "
                },
                "school": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                },
                "weight": {
                    "include": true,
                    "fileImageFormat": "square",
                    "quickSearch": false,
                    "fileImageSize": 200,
                    "clickable": false
                }
            },
            "largeFont": true,
            "autoRefresh": true,
            "autoRefreshPeriod": 10,
            "hideExpandTD": true
        },
        "tableTitle": "",
        "actions": null,
        "headers": [
            {
                "sysName": "category",
                "name": "Весовая категория",
                "dataType": "link",
                "id": "24331630830561455",
                "link": "Categories",
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
                "array": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": true,
                "arrayLink": false,
                "typeVariable": {}
            },
            {
                "sysName": "finalScore",
                "name": "Баллы",
                "dataType": "decimal",
                "id": "90741631026216776",
                "link": "",
                "group": "1631026469551",
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
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {}
            },
            {
                "sysName": "fullName",
                "name": "Имя",
                "dataType": "string",
                "id": "16451631715522892",
                "link": null,
                "group": "0",
                "tags": null,
                "indexing": false,
                "ordering": false,
                "description": null,
                "weight": null,
                "order": 12,
                "linkIndexFieldSysName": [],
                "defaultValue": null,
                "constraints": null,
                "synthetic": false,
                "format": null,
                "formatOptions": null,
                "groupName": null,
                "array": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {}
            },
            {
                "sysName": "photo",
                "name": "Фото",
                "dataType": "file",
                "id": "80051630845397917",
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
                "format": "image",
                "formatOptions": {},
                "groupName": null,
                "array": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {}
            },
            {
                "sysName": "protocol_ids",
                "name": "Протоколы",
                "dataType": "arrayLink",
                "id": "99451631026468294",
                "link": "protocols",
                "group": "1631026469551",
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
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": true,
                "linkType": false,
                "arrayLink": true,
                "typeVariable": {}
            },
            {
                "sysName": "school",
                "name": "Школа",
                "dataType": "string",
                "id": "73151630830426463",
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
                "array": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {}
            },
            {
                "sysName": "weight",
                "name": "Вес",
                "dataType": "decimal",
                "id": "56521630830431627",
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
                "array": false,
                "indexExists": false,
                "json": false,
                "linkOrArrayLinkType": false,
                "linkType": false,
                "arrayLink": false,
                "typeVariable": {}
            }
        ],
        "data": [
            {
                "weight": 85,
                "photo": "https://img.pokemondb.net/artwork/crawdaunt.jpg",
                "fullName": "Сидоров Владимир",
                "protocol_ids": [
                    {
                        "protocol_name": "Сидоров (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631643217000,
                                "mark": 4,
                                "id": "aedf3f05-6648-4b82-bc46-96ea6f6397f9"
                            },
                            {
                                "mark": 4,
                                "date": 1631643540000,
                                "id": "ded82f7a-30e2-4880-bdf7-9c3244ab1dc2"
                            },
                            {
                                "date": 1631645762000,
                                "mark": 2,
                                "id": "2dff92ce-c914-4303-84c6-e290b2cfe1e8"
                            },
                            {
                                "date": 1631643867000,
                                "mark": 4,
                                "id": "f1ff3481-05b9-4835-ba94-3ba0402bd614"
                            },
                            {
                                "date": 1631643200000,
                                "mark": 3,
                                "id": "9978f4f9-2212-48b3-988f-acb269de78a0"
                            },
                            {
                                "date": 1631644905000,
                                "mark": 4,
                                "id": "b83ec6ac-6e59-493c-ab66-51803f5f6dc7"
                            },
                            {
                                "date": 1631645753000,
                                "mark": 2,
                                "id": "3b24eac9-2490-4f84-8855-67b268c29417"
                            },
                            {
                                "mark": 2,
                                "date": 1631644857000,
                                "id": "82b77580-8363-432a-82d8-710d109a67a7"
                            },
                            {
                                "date": 1631645756000,
                                "mark": 2,
                                "id": "1dcf3442-db40-41da-b6ee-a9ddbbe265bf"
                            },
                            {
                                "date": 1631643186000,
                                "mark": 2,
                                "id": "e4b64ee5-b2bb-43fe-950d-79e5fb7fded6"
                            },
                            {
                                "date": 1631643494000,
                                "mark": 4,
                                "id": "60e58922-3828-41cc-b968-11a0f39a4a3b"
                            },
                            {
                                "date": 1631643853000,
                                "mark": 2,
                                "id": "6ac58628-3616-4ad7-842b-4166cc0f5198"
                            },
                            {
                                "date": 1631643899000,
                                "mark": 2,
                                "id": "2cf4fbc9-1e0d-435c-99fe-93f13bd75f4b"
                            },
                            {
                                "date": 1631643519000,
                                "mark": 4,
                                "id": "8312489d-3ded-4b85-82cf-ac85aca84331"
                            },
                            {
                                "mark": 4,
                                "date": 1631644871000,
                                "id": "9d8252e3-6a6f-4a37-be56-d67cc1aedfc0"
                            }
                        ],
                        "total_score": 45,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "a77ef88ab716bcd5b5d6347a36eb70ab"
                    },
                    {
                        "protocol_name": "Сидоров (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631643505000,
                                "mark": 4,
                                "id": "cfe6de79-0911-4e7a-baaa-d114dbe59e20"
                            },
                            {
                                "date": 1631643858000,
                                "mark": 2,
                                "id": "e3b9366b-a1ce-4782-b0cf-85bd0515f23d"
                            },
                            {
                                "date": 1631644880000,
                                "mark": 4,
                                "id": "0fad431e-04b9-4d9b-9d45-7a7cd40aee7f"
                            },
                            {
                                "date": 1631643904000,
                                "mark": 2,
                                "id": "717e31e8-a61e-4c7c-8bc1-4c3f22f8e5ba"
                            },
                            {
                                "date": 1631644861000,
                                "mark": 2,
                                "id": "6f6e5e83-0b0b-4d86-9029-b6efff16ab65"
                            },
                            {
                                "date": 1631645771000,
                                "mark": 2,
                                "id": "ca7ef87f-882d-43fc-9d98-e2e1f2f37eb9"
                            },
                            {
                                "mark": 0,
                                "date": 1631644540000,
                                "id": "dce40a98-fa02-47cf-987d-1edffebaeb68"
                            },
                            {
                                "date": 1631643551000,
                                "mark": 4,
                                "id": "8a9b2c4d-da2d-494b-9217-d068e8d2df24"
                            },
                            {
                                "mark": 2,
                                "date": 1631645761000,
                                "id": "4ebe45fe-8c30-4196-8282-c63c084dd64b"
                            },
                            {
                                "date": 1631643555000,
                                "mark": 4,
                                "id": "5192bea9-5f99-4c42-8fce-66aba5857a7f"
                            },
                            {
                                "date": 1631644914000,
                                "mark": 4,
                                "id": "90235fd4-f34b-4390-bdc4-ad9f095f1fb2"
                            },
                            {
                                "date": 1631643222000,
                                "mark": 4,
                                "id": "4bdb7909-9d49-483a-a0be-e90af6f0caa2"
                            },
                            {
                                "mark": 3,
                                "date": 1631643210000,
                                "id": "42105cbc-6e2c-4a47-8196-2dda44d2946a"
                            },
                            {
                                "date": 1631643197000,
                                "mark": 2,
                                "id": "6be183fe-37f7-4d87-a399-283cbe0d0a79"
                            },
                            {
                                "date": 1631643872000,
                                "mark": 4,
                                "id": "1efd41da-f093-4e6e-954d-5053be4954b1"
                            },
                            {
                                "date": 1631645765000,
                                "mark": 2,
                                "id": "148ee4a1-9197-4532-af2c-6490d570e201"
                            }
                        ],
                        "total_score": 45,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "a87a71e83ac23042d0142c5b433d37a1"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 45
            },
            {
                "school": "Cheng Long",
                "weight": 70,
                "photo": "https://img.pokemondb.net/artwork/patrat.jpg",
                "fullName": "Антонов Антон",
                "protocol_ids": [
                    {
                        "protocol_name": "Антонов (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631645668000,
                                "mark": 1,
                                "id": "466a2e3b-90f8-4cc4-91e4-ed811c7df930"
                            },
                            {
                                "date": 1631645129000,
                                "mark": 2,
                                "id": "995e1503-f136-47bc-99e5-04517eea4544"
                            },
                            {
                                "mark": 4,
                                "date": 1631645116000,
                                "id": "e3ec5eb2-022a-436f-88ce-5708a4fc187d"
                            },
                            {
                                "mark": 4,
                                "date": 1631645099000,
                                "id": "c395f260-bc6b-4502-aa4d-0d5fa0d7b885"
                            },
                            {
                                "date": 1631644845000,
                                "mark": 4,
                                "id": "98c5ee04-fb48-4416-8eb1-380bc200fa7c"
                            },
                            {
                                "date": 1631644348000,
                                "mark": 2,
                                "id": "365a6fed-abe8-467f-8afe-7996b304f5cc"
                            },
                            {
                                "date": 1631645313000,
                                "mark": 2,
                                "id": "3694162b-c6d4-4506-999e-d5ab28fbf188"
                            },
                            {
                                "date": 1631645825000,
                                "mark": 1,
                                "id": "2b2757a1-bc0c-4fd6-bb89-b5a7c62ece4c"
                            },
                            {
                                "mark": 4,
                                "date": 1631644360000,
                                "id": "f475a412-fc4d-494b-8218-992b38f605dd"
                            },
                            {
                                "date": 1631644692000,
                                "mark": 2,
                                "id": "0fdc4878-74a5-4e76-9c17-3a974d0b6c4f"
                            },
                            {
                                "date": 1631645694000,
                                "mark": 4,
                                "id": "24eba8d1-8702-4244-afc4-9f08d54af26b"
                            },
                            {
                                "date": 1631644827000,
                                "mark": 4,
                                "id": "c4a9b248-2d38-424b-b00c-a5244616a222"
                            }
                        ],
                        "total_score": 34,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "a7fff2e4e186c78ba1bcf35a0cd3434b"
                    },
                    {
                        "protocol_name": "Антонов (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631644368000,
                                "mark": 4,
                                "id": "38493830-1e27-4579-825d-5717fcfa4a84"
                            },
                            {
                                "date": 1631645123000,
                                "mark": 4,
                                "id": "d224a283-acf1-4d55-9d65-11f65433b171"
                            },
                            {
                                "mark": 0,
                                "date": 1631645503000,
                                "id": "060727d5-3e71-4fd1-b666-9d9242aacf3c"
                            },
                            {
                                "date": 1631645137000,
                                "mark": 2,
                                "id": "30983f72-4a5c-4eb8-9ddb-9146d6dadd7f"
                            },
                            {
                                "date": 1631645694000,
                                "mark": 4,
                                "id": "343c22d9-7d50-40b2-bcc4-4d5e2f8f414d"
                            },
                            {
                                "mark": 0,
                                "date": 1631643611000,
                                "id": "160e8fee-d2db-4d1f-b7d8-c86b300af4f7"
                            },
                            {
                                "date": 1631645679000,
                                "mark": 1,
                                "id": "1aa5a172-a800-4ed8-bf65-76b18b3b2b47"
                            },
                            {
                                "date": 1631644850000,
                                "mark": 4,
                                "id": "80a8d13f-8fec-4fdf-97dd-c13bc43522aa"
                            },
                            {
                                "date": 1631645894000,
                                "mark": 0,
                                "id": "a18d9efe-e2fb-425d-ac1f-74b20f371f25"
                            },
                            {
                                "mark": 2,
                                "date": 1631645322000,
                                "id": "50429723-72be-4648-9898-f49416d4e232"
                            },
                            {
                                "mark": 1,
                                "date": 1631644351000,
                                "id": "0956227f-3761-49c8-923e-6f7ae2efe158"
                            },
                            {
                                "date": 1631645836000,
                                "mark": 1,
                                "id": "953c1c07-abaf-4700-adbd-69d9576195f5"
                            },
                            {
                                "date": 1631645110000,
                                "mark": 4,
                                "id": "fad9ea83-fbeb-4180-b8fa-ae4e9c96259f"
                            },
                            {
                                "mark": 4,
                                "date": 1631644833000,
                                "id": "9920d841-fc37-4c6e-97a6-e31eb9b7c32c"
                            },
                            {
                                "mark": 0,
                                "date": 1631645725000,
                                "id": "a058455d-575e-4d29-9445-18abf4eed447"
                            }
                        ],
                        "total_score": 31,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "a5a435bd161a175993aceb367ab99cfd"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 32.5
            },
            {
                "weight": 100,
                "photo": "https://img.pokemondb.net/artwork/kubfu.jpg",
                "fullName": "Тюляев Георгий",
                "protocol_ids": [
                    {
                        "protocol_name": "Тюляев (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631645357000,
                                "mark": 2,
                                "id": "6a87d45e-8a7e-4413-88ba-85d667867fc5"
                            },
                            {
                                "mark": 2,
                                "date": 1631643036000,
                                "id": "94eb521f-1b56-4f16-bf99-e2cae443948b"
                            },
                            {
                                "mark": 4,
                                "date": 1631645912000,
                                "id": "cbff184a-38cc-4757-a870-56a31c4bf21c"
                            },
                            {
                                "date": 1631645348000,
                                "mark": 1,
                                "id": "7ce7acde-50b2-487c-aea3-921516dfbd2b"
                            },
                            {
                                "date": 1631645524000,
                                "mark": 2,
                                "id": "1b53b386-623a-4a64-9bd4-b22356e3e738"
                            },
                            {
                                "date": 1631645742000,
                                "mark": 2,
                                "id": "1d739b42-fa56-456c-908f-89edd1e93d5e"
                            },
                            {
                                "date": 1631644953000,
                                "mark": 2,
                                "id": "dcab35a8-b322-4795-b659-6aeea8cbf78d"
                            },
                            {
                                "mark": 0,
                                "date": 1631643300000,
                                "id": "3e202897-2299-41f6-96bb-b361516cfecb"
                            },
                            {
                                "date": 1631644617000,
                                "mark": 2,
                                "id": "ed9ed298-9fa5-4dce-b684-43feab1773a3"
                            },
                            {
                                "mark": 0,
                                "date": 1631643866000,
                                "id": "8816266a-1d5e-479f-86ea-20cf3217b304"
                            },
                            {
                                "date": 1631645600000,
                                "mark": 1,
                                "id": "fb026a11-11ba-4d52-aa6d-16214f7decf5"
                            },
                            {
                                "date": 1631645579000,
                                "mark": 2,
                                "id": "a6305300-7867-4960-a2ab-e2da8d57deec"
                            },
                            {
                                "mark": 1,
                                "date": 1631643242000,
                                "id": "f8a6db77-0488-4fc8-95a2-153d32a23721"
                            }
                        ],
                        "total_score": 21,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "97fceb9ecd460fa6e4ba04e14635d488"
                    },
                    {
                        "protocol_name": "Тюляев (реф. Харламова)",
                        "score_ids": [
                            {
                                "mark": 2,
                                "date": 1631645331000,
                                "id": "984439b9-fda0-4054-ba71-575131848d40"
                            },
                            {
                                "date": 1631645572000,
                                "mark": 2,
                                "id": "1bb98140-53a8-4fab-8bf2-57c51977d6d6"
                            },
                            {
                                "date": 1631645516000,
                                "mark": 2,
                                "id": "388299e6-55f3-46c4-a64e-3d6e913c7845"
                            },
                            {
                                "date": 1631644946000,
                                "mark": 2,
                                "id": "ddd5e6b9-619b-4f39-bd9e-5885ec2c691e"
                            },
                            {
                                "date": 1631645732000,
                                "mark": 2,
                                "id": "4e61f93b-09d9-4048-966e-f1aed142e7a1"
                            },
                            {
                                "date": 1631644610000,
                                "mark": 2,
                                "id": "5484d556-f7bf-49bc-99b0-c27ba05924d2"
                            },
                            {
                                "date": 1631645901000,
                                "mark": 4,
                                "id": "849eacb8-5eb9-4b01-b364-19e3d454c6a7"
                            },
                            {
                                "date": 1631644232000,
                                "mark": -1,
                                "id": "d4dbb705-d891-41c7-8081-58a906ecf1d7"
                            },
                            {
                                "date": 1631645613000,
                                "mark": 1,
                                "id": "3500fe61-3c73-4558-8626-5c67c3ab94ed"
                            },
                            {
                                "date": 1631643034000,
                                "mark": 2,
                                "id": "8de835ff-4194-4d5a-b98f-a084b6089793"
                            },
                            {
                                "date": 1631645346000,
                                "mark": 2,
                                "id": "fd68442a-5a99-4faa-8d54-457a320bb4c3"
                            },
                            {
                                "date": 1631643229000,
                                "mark": 2,
                                "id": "680c3975-b898-4da6-a843-814ddcbecf83"
                            }
                        ],
                        "total_score": 22,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "56d349b22b963998baeb52494a003cdf"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 21.5
            },
            {
                "weight": 55,
                "photo": "https://img.pokemondb.net/artwork/wigglytuff.jpg",
                "fullName": "Симагина Мария",
                "protocol_ids": [
                    {
                        "protocol_name": "Симагина (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631643640000,
                                "mark": 3,
                                "id": "b4fa5516-e259-43c1-8a4a-a2770be574ee"
                            },
                            {
                                "date": 1631645017000,
                                "mark": 1,
                                "id": "00baddea-8b8f-454c-b691-10f9d3984e1e"
                            },
                            {
                                "mark": 1,
                                "date": 1631644422000,
                                "id": "ffbda31e-ca85-40ae-933a-42d96a418bd3"
                            },
                            {
                                "date": 1631645976000,
                                "mark": 2,
                                "id": "e8117c6a-2d96-457b-8e2c-d39a1609a33d"
                            },
                            {
                                "date": 1631644719000,
                                "mark": 2,
                                "id": "a7f9d9ea-1158-4a54-8eb4-6aae50c35542"
                            },
                            {
                                "date": 1631643175000,
                                "mark": 2,
                                "id": "cc654f7f-1fc2-49dc-9c7f-a33bf5068503"
                            },
                            {
                                "date": 1631643390000,
                                "mark": 2,
                                "id": "08c8ece1-76ff-4c8c-8ccf-ea9d2c36ed00"
                            },
                            {
                                "date": 1631643159000,
                                "mark": 3,
                                "id": "f0cd5112-a4eb-48b0-a09f-9a1e4c546ef5"
                            },
                            {
                                "date": 1631646014000,
                                "mark": 2,
                                "id": "3f737a69-2daf-4178-b29f-fbb5f72da6e7"
                            },
                            {
                                "date": 1631644504000,
                                "mark": 2,
                                "id": "3fa7ad1a-0e59-418b-917e-62c92579371b"
                            }
                        ],
                        "total_score": 20,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "6d2ebdfc700e8b7dda87cc64bebc1d95"
                    },
                    {
                        "protocol_name": "Симагина (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631643181000,
                                "mark": 3,
                                "id": "5455ad20-27ce-4b18-8512-a1c2d9dce5a5"
                            },
                            {
                                "mark": 0,
                                "date": 1631643945000,
                                "id": "7f13d037-a9e4-489b-ba49-7a56f7ebc908"
                            },
                            {
                                "date": 1631645029000,
                                "mark": 1,
                                "id": "0bb61b7c-aebc-45e3-a930-9d342a23dd48"
                            },
                            {
                                "date": 1631645986000,
                                "mark": 2,
                                "id": "a461640f-7d15-44ce-bf77-9f04435ee1ae"
                            },
                            {
                                "mark": 0,
                                "date": 1631645793000,
                                "id": "c3018bf5-dfce-4d4b-a744-e9dc4c6d0212"
                            },
                            {
                                "date": 1631646026000,
                                "mark": 2,
                                "id": "e720fe3d-e6aa-4bd9-bd9c-53fe52d54308"
                            },
                            {
                                "date": 1631643403000,
                                "mark": 2,
                                "id": "b8662440-1858-4d1d-84fb-e13b22c20c0a"
                            },
                            {
                                "mark": 0,
                                "date": 1631645643000,
                                "id": "3eb4137e-8b39-46e9-a656-1f96eec326ab"
                            },
                            {
                                "date": 1631644512000,
                                "mark": 2,
                                "id": "85f1ec33-6253-434d-8fec-904761d2884b"
                            },
                            {
                                "mark": 1,
                                "date": 1631644429000,
                                "id": "df7dc9fb-321e-4f77-acf2-b45754a9fb47"
                            },
                            {
                                "mark": 0,
                                "date": 1631645425000,
                                "id": "fb4526ae-42be-46a2-9f8e-781eed557920"
                            },
                            {
                                "date": 1631643188000,
                                "mark": 2,
                                "id": "9282b105-8b36-4c93-ae48-2b504f4d9c64"
                            },
                            {
                                "date": 1631643642000,
                                "mark": 3,
                                "id": "5bfdc804-e769-4025-a167-d4ed55961e41"
                            }
                        ],
                        "total_score": 18,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "1dc1e36938f277766636b23f46327caf"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 19
            },
            {
                "weight": 80,
                "photo": "https://img.pokemondb.net/artwork/krookodile.jpg",
                "fullName": "Равилов Булат",
                "protocol_ids": [
                    {
                        "protocol_name": "Равилов (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631643663000,
                                "mark": 2,
                                "id": "fe64f25b-d6e9-445d-80cb-606a59023d40"
                            },
                            {
                                "date": 1631643319000,
                                "mark": 1,
                                "id": "ce72bd98-b6a5-4d4e-ae32-a996ac03db5a"
                            },
                            {
                                "date": 1631645823000,
                                "mark": 4,
                                "id": "cfc3b552-67e8-4875-b8aa-16aacf2babbe"
                            },
                            {
                                "date": 1631645293000,
                                "mark": 4,
                                "id": "defd0110-2ab2-4ae2-ba9f-edf48daea136"
                            },
                            {
                                "mark": 0,
                                "date": 1631645506000,
                                "id": "d114f992-9613-401c-88a9-6e355fdba005"
                            },
                            {
                                "mark": 0,
                                "date": 1631644538000,
                                "id": "88473b82-6c57-4d0f-b5a8-aa9a642c0282"
                            },
                            {
                                "date": 1631645304000,
                                "mark": 2,
                                "id": "0ae503b4-0210-41f6-989b-0b1d8c1a5051"
                            },
                            {
                                "date": 1631643061000,
                                "mark": 2,
                                "id": "20807b83-c1ce-49d3-a89e-e21d2d6f7c51"
                            },
                            {
                                "mark": 0,
                                "date": 1631643956000,
                                "id": "0e6b4203-b183-44cc-9612-7b99fef34e06"
                            },
                            {
                                "mark": 0,
                                "date": 1631643107000,
                                "id": "1f3aa5b3-9813-46d9-88e2-1aa857336082"
                            },
                            {
                                "mark": 0,
                                "date": 1631643338000,
                                "id": "d50030af-9553-4090-9ce9-b93fb6758baf"
                            },
                            {
                                "mark": 0,
                                "date": 1631645012000,
                                "id": "29411428-073a-4483-9e7b-983f6c208317"
                            },
                            {
                                "date": 1631644525000,
                                "mark": 1,
                                "id": "35309989-0fc7-4e3a-9de4-11623d54688a"
                            }
                        ],
                        "total_score": 16,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "a86cd93b5e2c7fc198d2ad816b724579"
                    },
                    {
                        "protocol_name": "Равилов (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631644527000,
                                "mark": 1,
                                "id": "e37b0c14-1e17-402c-84e5-1fbf93af8781"
                            },
                            {
                                "mark": 0,
                                "date": 1631643113000,
                                "id": "bc799350-1479-4c84-b0c4-fdc97286ceea"
                            },
                            {
                                "date": 1631643656000,
                                "mark": 2,
                                "id": "57857a2d-9544-4878-84e0-3035c2c78b39"
                            },
                            {
                                "mark": 1,
                                "date": 1631643310000,
                                "id": "7760c50c-1b03-46b8-a500-aff304fd6806"
                            },
                            {
                                "date": 1631643053000,
                                "mark": 2,
                                "id": "2ef69ab5-f9df-43b7-9b5c-59b1ac6f53c8"
                            },
                            {
                                "mark": 4,
                                "date": 1631645811000,
                                "id": "7d3b9e0f-a8fc-4a61-9855-48368bd01477"
                            },
                            {
                                "mark": 4,
                                "date": 1631645287000,
                                "id": "61eceb6d-62b8-4887-9893-9fc5fe85977a"
                            },
                            {
                                "date": 1631645296000,
                                "mark": 2,
                                "id": "69767fba-6508-41e6-97d0-3078e906adad"
                            }
                        ],
                        "total_score": 16,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "b840e843c12254ba5fb467021403460f"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 16
            },
            {
                "weight": 60,
                "photo": "https://img.pokemondb.net/artwork/zangoose.jpg",
                "fullName": "Черганцева Оксана",
                "protocol_ids": [
                    {
                        "protocol_name": "Черганцева (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631643013000,
                                "mark": 2,
                                "id": "326b967e-a94a-4e44-b5b3-be5272e3af22"
                            },
                            {
                                "date": 1631643919000,
                                "mark": 2,
                                "id": "d0b2b772-d1cc-4b7f-a9d4-19deaed0c03d"
                            },
                            {
                                "date": 1631643611000,
                                "mark": 2,
                                "id": "aa5421f7-af7b-4263-a6b7-4aa0080eda2e"
                            },
                            {
                                "date": 1631644742000,
                                "mark": 2,
                                "id": "d439bd1b-c29f-45d7-b7d7-c120fd8a81cf"
                            },
                            {
                                "date": 1631644381000,
                                "mark": 4,
                                "id": "e2e4e616-6a89-42a8-988c-3f7255c0aac2"
                            },
                            {
                                "date": 1631644800000,
                                "mark": 2,
                                "id": "b6553358-ddc0-4bb7-a9e6-edcd78190891"
                            },
                            {
                                "date": 1631643346000,
                                "mark": 2,
                                "id": "e523030d-5a56-45fe-b9f9-3c62465e54ad"
                            }
                        ],
                        "total_score": 16,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "299f55b1237d4fe4087cb0907ce915e5"
                    },
                    {
                        "protocol_name": "Черганцева (реф. Воронова)",
                        "score_ids": [
                            {
                                "mark": 0,
                                "date": 1631643941000,
                                "id": "498ab1c4-33f6-4c1f-9d43-a9cabf6d4db8"
                            },
                            {
                                "date": 1631643622000,
                                "mark": 2,
                                "id": "7e44c860-2f4c-4d43-a65a-1621d35e7212"
                            },
                            {
                                "date": 1631644813000,
                                "mark": 2,
                                "id": "f5995333-bce3-4423-a35d-58eeb5779e02"
                            },
                            {
                                "date": 1631644390000,
                                "mark": 4,
                                "id": "17ee7c21-baa3-48c7-a580-68d5048f33dd"
                            },
                            {
                                "date": 1631643927000,
                                "mark": 2,
                                "id": "4ae956f4-114f-4363-b928-9396825a18a1"
                            },
                            {
                                "date": 1631643353000,
                                "mark": 2,
                                "id": "497b13bf-170c-4968-9a40-3726b58dc5ac"
                            },
                            {
                                "date": 1631643021000,
                                "mark": 2,
                                "id": "85fa86b4-7637-4dee-a299-37e217270366"
                            }
                        ],
                        "total_score": 14,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "7dd7940e37633f35837ad55af986d7c4"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 15
            },
            {
                "weight": 82,
                "photo": "https://img.pokemondb.net/artwork/pinsir.jpg",
                "fullName": "Самулекин Александр",
                "protocol_ids": [
                    {
                        "protocol_name": "Самулекин (реф. Воронова)",
                        "score_ids": [
                            {
                                "mark": 2,
                                "date": 1631643418000,
                                "id": "11025820-df83-4510-a2eb-7f4d848920cc"
                            },
                            {
                                "date": 1631643483000,
                                "mark": 4,
                                "id": "74e82135-ede8-4553-a470-f6096f9f3aad"
                            },
                            {
                                "date": 1631643733000,
                                "mark": 4,
                                "id": "2cd80019-cb63-4355-a19b-95b17cb23fbb"
                            },
                            {
                                "mark": 0,
                                "date": 1631643862000,
                                "id": "b539edb5-7b4f-452e-91c8-e2e5fab845bf"
                            },
                            {
                                "mark": 1,
                                "date": 1631643777000,
                                "id": "238dae98-0812-4b18-9ab4-a1ebe879f267"
                            },
                            {
                                "date": 1631643444000,
                                "mark": 4,
                                "id": "da7a10a4-dd5d-4d55-bbe3-ef1cbc4b7126"
                            }
                        ],
                        "total_score": 15,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "ce5e2d445d3e06ef5254180e2f3b2c70"
                    },
                    {
                        "protocol_name": "Самулекин (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631643409000,
                                "mark": 2,
                                "id": "8ceea5d0-150b-4694-a235-29864adf01d4"
                            },
                            {
                                "date": 1631643727000,
                                "mark": 4,
                                "id": "18448f10-496c-4d0a-aad8-87a09a5a78c7"
                            },
                            {
                                "mark": -1,
                                "date": 1631644225000,
                                "id": "68a385d4-84c8-4036-834a-69a1af2ebe2c"
                            },
                            {
                                "date": 1631643771000,
                                "mark": 1,
                                "id": "e2eb9897-3a83-421f-a3c9-96b6410b2637"
                            },
                            {
                                "date": 1631643478000,
                                "mark": 4,
                                "id": "b0fbb33a-abd1-4a6d-bb30-26381f16b829"
                            },
                            {
                                "date": 1631643433000,
                                "mark": 4,
                                "id": "e435cba5-f1b7-4f36-bcc1-a00a3b9cbb77"
                            }
                        ],
                        "total_score": 14,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "a4ac4c41092f4314b2900b5c07a22382"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 14.5
            },
            {
                "school": "Cheng Long",
                "weight": 68,
                "photo": "https://img.pokemondb.net/artwork/cradily.jpg",
                "fullName": "Лавлинский Вадим",
                "protocol_ids": [
                    {
                        "protocol_name": "Лавлинский (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631645224000,
                                "mark": 4,
                                "id": "7ba15239-3c2a-4a55-949c-2bdcb77ce93f"
                            },
                            {
                                "date": 1631645375000,
                                "mark": 4,
                                "id": "2743641a-eb4a-4620-b521-d7ab709b1a04"
                            },
                            {
                                "date": 1631644298000,
                                "mark": 2,
                                "id": "2cf18ac7-8a7f-4ce2-ad25-da0d83685fbd"
                            },
                            {
                                "date": 1631645161000,
                                "mark": 1,
                                "id": "74bfcb80-da3c-4e39-87ef-5b04cfded067"
                            },
                            {
                                "date": 1631643135000,
                                "mark": 1,
                                "id": "3ce2d03d-ead7-49cd-b8dd-7a3d7c6dab8a"
                            }
                        ],
                        "total_score": 12,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "7f5c0b3ce83eba1bc8767559b42f435c"
                    },
                    {
                        "protocol_name": "Лавлинский (реф. Воронова)",
                        "score_ids": [
                            {
                                "mark": 0,
                                "date": 1631645268000,
                                "id": "0508017a-6d9b-4ac0-99c2-93c2592d1ceb"
                            },
                            {
                                "date": 1631644303000,
                                "mark": 2,
                                "id": "70e4744a-34b8-4c97-b5f9-734ffd7a8ee7"
                            },
                            {
                                "mark": 0,
                                "date": 1631643341000,
                                "id": "8d46f91b-9cf7-4ea8-82bd-8885029f1840"
                            },
                            {
                                "mark": 0,
                                "date": 1631643609000,
                                "id": "9b5302c5-dc2e-42dc-9c45-2880979f06dd"
                            },
                            {
                                "date": 1631645729000,
                                "mark": 0,
                                "id": "ca96d2b4-9bad-46be-8ae4-e3c5068a7774"
                            },
                            {
                                "mark": 0,
                                "date": 1631645892000,
                                "id": "b3cbefb4-cbff-4d4a-8aca-3b87818dfc16"
                            },
                            {
                                "mark": 4,
                                "date": 1631645388000,
                                "id": "11d74118-c85d-4089-ae68-6c7a8f042b21"
                            },
                            {
                                "date": 1631645233000,
                                "mark": 4,
                                "id": "05e43ed6-c0d3-4415-975d-d96b317fa5c8"
                            },
                            {
                                "date": 1631645381000,
                                "mark": 4,
                                "id": "c4d92de0-546e-4c4f-99d1-e8036ccffd90"
                            },
                            {
                                "mark": 1,
                                "date": 1631643150000,
                                "id": "4946451c-54c0-4d78-a871-53847ac50015"
                            },
                            {
                                "date": 1631645170000,
                                "mark": 1,
                                "id": "10c39108-6122-4646-a32f-f16a528962a3"
                            }
                        ],
                        "total_score": 16,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "3f5e26c2395cabc2116dcf36676e0297"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 14
            },
            {
                "weight": 80,
                "photo": "https://img.pokemondb.net/artwork/amoonguss.jpg",
                "fullName": "Ковалев Игорь",
                "protocol_ids": [
                    {
                        "protocol_name": "Ковалев (реф. Воронова)",
                        "score_ids": [
                            {
                                "mark": 0,
                                "date": 1631645271000,
                                "id": "bdcada3f-1586-466f-adcc-5b1ca530ea28"
                            },
                            {
                                "mark": 0,
                                "date": 1631645657000,
                                "id": "50f97715-2115-42c9-ab77-2876ccbf917f"
                            },
                            {
                                "mark": 0,
                                "date": 1631645008000,
                                "id": "3d1e754e-e5dd-407c-8ecd-7f3643cee222"
                            },
                            {
                                "mark": 1,
                                "date": 1631644995000,
                                "id": "3b6c2ed0-88e5-4667-9132-81ef62f2bb7c"
                            },
                            {
                                "date": 1631645940000,
                                "mark": 2,
                                "id": "e601d482-4298-41a7-af61-da0c345bdec5"
                            },
                            {
                                "date": 1631645479000,
                                "mark": 0,
                                "id": "dc39fbdf-718e-4bce-bf32-c670add12e49"
                            },
                            {
                                "date": 1631645430000,
                                "mark": 2,
                                "id": "ac380bfe-c000-4fbd-be02-a0447d87d564"
                            },
                            {
                                "date": 1631645955000,
                                "mark": 2,
                                "id": "8d3c9d3c-74aa-4ad5-b244-9015b57ca726"
                            },
                            {
                                "date": 1631644978000,
                                "mark": 2,
                                "id": "654a4b5f-05a4-456c-9451-2c246cfdc29c"
                            },
                            {
                                "date": 1631645447000,
                                "mark": 1,
                                "id": "17d1084b-2934-4792-97ab-9854b1cc492b"
                            }
                        ],
                        "total_score": 10,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "a5d1eef9e5bdc40517efd3c7c70e04eb"
                    },
                    {
                        "protocol_name": "Ковалев (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631645946000,
                                "mark": 2,
                                "id": "555cf8f4-1ba4-4658-9f53-e5df1b0ecf5b"
                            },
                            {
                                "mark": 2,
                                "date": 1631644971000,
                                "id": "8f7a20a1-2a11-49f5-b3be-78b66c6c5a5e"
                            },
                            {
                                "date": 1631644988000,
                                "mark": 1,
                                "id": "2e0bb77c-4069-4003-9a6c-541a12402fbf"
                            },
                            {
                                "date": 1631645440000,
                                "mark": 1,
                                "id": "133ecd13-8372-4d9a-8a47-f849afc43fc5"
                            },
                            {
                                "date": 1631645933000,
                                "mark": 2,
                                "id": "586d6b69-6a49-4031-9b3e-1184ae3bca98"
                            },
                            {
                                "date": 1631645421000,
                                "mark": 2,
                                "id": "550a2105-d272-4cd1-84ad-6dcbcc38337f"
                            },
                            {
                                "date": 1631644647000,
                                "mark": 2,
                                "id": "a8b5c353-447b-46e1-b955-108b254830c6"
                            }
                        ],
                        "total_score": 12,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "f7b4747496a32d3513bccc9ac8f434e0"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 11
            },
            {
                "weight": 90,
                "photo": "https://img.pokemondb.net/artwork/regirock.jpg",
                "fullName": "Малыхин Иван",
                "protocol_ids": [
                    {
                        "protocol_name": "Малыхин (реф. Харламова)",
                        "score_ids": [
                            {
                                "date": 1631643000000,
                                "mark": 2,
                                "id": "9088f19b-4e73-40ef-8804-f72f0cff4295"
                            },
                            {
                                "date": 1631643669000,
                                "mark": 2,
                                "id": "a26144dc-8456-4e1b-a695-d16f4a269a74"
                            },
                            {
                                "mark": 2,
                                "date": 1631643700000,
                                "id": "4dade9c8-fafe-4592-8e4d-963180a06365"
                            }
                        ],
                        "total_score": 6,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "3e243acde881127bc3eb3176a46b0424"
                    },
                    {
                        "protocol_name": "Малыхин (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631643007000,
                                "mark": 2,
                                "id": "5cf24388-e31e-4995-8799-78713f2cf8a2"
                            },
                            {
                                "date": 1631643679000,
                                "mark": 2,
                                "id": "fb5bc61a-fb72-49c3-8d04-5f2164a17854"
                            },
                            {
                                "date": 1631643706000,
                                "mark": 2,
                                "id": "c5be41bc-94d6-49b3-a9ec-ac5e681562d4"
                            },
                            {
                                "mark": 0,
                                "date": 1631643986000,
                                "id": "8570f8b4-8c7b-4d7f-a635-ab1130f324ef"
                            }
                        ],
                        "total_score": 6,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "1706b13d4a359a381a1bda187a936402"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 6
            },
            {
                "weight": 88,
                "photo": "https://img.pokemondb.net/artwork/regice.jpg",
                "fullName": "Федосов Виктор",
                "protocol_ids": [
                    {
                        "protocol_name": "Федосов (реф. Харламова)",
                        "score_ids": [
                            {
                                "mark": 0,
                                "date": 1631643107000,
                                "id": "c038a9a5-4106-4c6c-b59b-2b51d7edea0b"
                            },
                            {
                                "date": 1631644550000,
                                "mark": 4,
                                "id": "2f6b0336-6e3e-4b0c-a71e-baf1f2be8607"
                            }
                        ],
                        "total_score": 4,
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "ddd2348119ba40ec4f35228c62e0aac8"
                    },
                    {
                        "protocol_name": "Федосов (реф. Воронова)",
                        "score_ids": [
                            {
                                "mark": 0,
                                "date": 1631645653000,
                                "id": "cc0a2409-85ff-4a0d-9331-100ea2c83628"
                            },
                            {
                                "mark": 0,
                                "date": 1631645483000,
                                "id": "8b925a4e-8a48-4150-a8d7-81e0728256c9"
                            },
                            {
                                "mark": 0,
                                "date": 1631643304000,
                                "id": "478b0450-5ca8-4270-8d1e-33050a3db062"
                            },
                            {
                                "mark": 0,
                                "date": 1631643983000,
                                "id": "f88e9531-0731-4ad4-a887-ceef1124ae2b"
                            },
                            {
                                "mark": 0,
                                "date": 1631643109000,
                                "id": "ddf85d40-e397-4e3c-814c-24447fda2b63"
                            },
                            {
                                "date": 1631644558000,
                                "mark": 4,
                                "id": "e1bdfc34-4ded-4923-a378-2ee3493180d4"
                            }
                        ],
                        "total_score": 4,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "f64abcb1eb8031e336a0f9a8f5aee94d"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 4
            },
            {
                "weight": 60,
                "photo": "https://img.pokemondb.net/artwork/bisharp.jpg",
                "fullName": "Кичатов Владимир",
                "protocol_ids": [
                    {
                        "protocol_name": "Кичатов (реф. Харламова)",
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "14ff61178b8fe1a3270172923c305dac"
                    },
                    {
                        "protocol_name": "Кичатов (реф. Воронова)",
                        "score_ids": [
                            {
                                "date": 1631643960000,
                                "mark": 0,
                                "id": "f87342e6-f1fd-4b8a-b24e-d82ae7443ae2"
                            }
                        ],
                        "total_score": 0,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "69fed35132fae279e269a186dd881df7"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 0
            },
            {
                "weight": 55,
                "photo": "https://img.pokemondb.net/artwork/psyduck.jpg",
                "fullName": "Бакотина Ксения",
                "protocol_ids": [
                    {
                        "protocol_name": "Бакотина (реф. Харламова)",
                        "referee_id": {
                            "firstName": "Алина",
                            "lastName": "Харламова",
                            "id": "0939601e-7149-4277-97e6-05eb6d93b29c"
                        },
                        "id": "2e1d96536a8200880f6bb968c2466a56"
                    },
                    {
                        "protocol_name": "Бакотина (реф. Воронова)",
                        "score_ids": [
                            {
                                "mark": 0,
                                "date": 1631645412000,
                                "id": "515438ac-71b2-4c5b-b20c-8750ed5382f7"
                            },
                            {
                                "mark": 0,
                                "date": 1631645641000,
                                "id": "ef9053db-f113-4537-b49a-94e56a8e422b"
                            },
                            {
                                "date": 1631645798000,
                                "mark": 0,
                                "id": "33e3cc97-eb62-45c8-b8e1-6d8ac835688e"
                            }
                        ],
                        "total_score": 0,
                        "referee_id": {
                            "firstName": "Анастасия",
                            "lastName": "Воронова",
                            "photo": "https://api.alfa.directual.com/fileUploaded/tuishou/64f4d0cb-94a2-4a78-90b8-16521ad44169.jpg",
                            "id": "aa3bb53f-bfaf-46c3-a4cb-33bce6aa0b4c"
                        },
                        "id": "d71b5450b0c943a75d54d594cc77ef6e"
                    }
                ],
                "category": {
                    "name": "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ",
                    "id": "f33bcac9-4230-4f4f-b6e0-cb9dea854178"
                },
                "finalScore": 0
            }
        ],
        "totalPages": 1,
        "pageNumber": 0,
        "error": null,
        "fieldScheme": [
            [
                "category.id",
                99019611
            ],
            [
                "category.name",
                99019611
            ],
            [
                "finalScore",
                99019606
            ],
            [
                "fullName",
                99019606
            ],
            [
                "photo",
                99019606
            ],
            [
                "protocol_ids.id",
                99019951
            ],
            [
                "protocol_ids.protocol_name",
                99019951
            ],
            [
                "protocol_ids.referee_id.firstName",
                99019819
            ],
            [
                "protocol_ids.referee_id.id",
                99019819
            ],
            [
                "protocol_ids.referee_id.lastName",
                99019819
            ],
            [
                "protocol_ids.referee_id.photo",
                99019819
            ],
            [
                "protocol_ids.score_ids.date",
                99019952
            ],
            [
                "protocol_ids.score_ids.id",
                99019952
            ],
            [
                "protocol_ids.score_ids.mark",
                99019952
            ],
            [
                "protocol_ids.total_score",
                99019951
            ],
            [
                "school",
                99019606
            ],
            [
                "weight",
                99019606
            ]
        ],
        "writeFields": [],
        "structures": {
            "99019606": {
                "networkID": 9312,
                "sysName": "sportsmen",
                "name": "Участники",
                "id": 99019606,
                "dateCreated": "2021-09-05T08:24:02Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"fullName\",\"name\":\"Имя\",\"dataType\":\"string\",\"id\":\"16451631715522892\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":12,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"lastName\",\"name\":\"Фамилия\",\"dataType\":\"string\",\"id\":\"19871630830408416\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"category\",\"name\":\"Весовая категория\",\"dataType\":\"link\",\"id\":\"24331630830561455\",\"link\":\"Categories\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"description\",\"name\":\"Описание\",\"dataType\":\"string\",\"id\":\"26521630847309053\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":9,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"city\",\"name\":\"Город\",\"dataType\":\"string\",\"id\":\"42701630830417740\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"weight\",\"name\":\"Вес\",\"dataType\":\"decimal\",\"id\":\"56521630830431627\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"58681630852410734\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":10,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"isWeighed\",\"name\":\"Прошел взвешивание\",\"dataType\":\"boolean\",\"id\":\"68241630924761778\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":11,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"Прошел взвешивание\",\"Не походил взвешивания\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD/MM/Y\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"school\",\"name\":\"Школа\",\"dataType\":\"string\",\"id\":\"73151630830426463\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"age\",\"name\":\"Возраст\",\"dataType\":\"string\",\"id\":\"76031630830413579\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"80051630845397917\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"firstName\",\"name\":\"Имя\",\"dataType\":\"string\",\"id\":\"88411630830369791\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"finalScore\",\"name\":\"Баллы\",\"dataType\":\"decimal\",\"id\":\"90741631026216776\",\"link\":\"\",\"group\":\"1631026469551\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"protocol_ids\",\"name\":\"Протоколы\",\"dataType\":\"arrayLink\",\"id\":\"99451631026468294\",\"link\":\"protocols\",\"group\":\"1631026469551\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{}}]",
                "jsonGroupSettings": "[{\"name\":\"ИТОГ\",\"id\":1631026469551,\"order\":0}]",
                "jsonViewIdSettings": "[{\"sysName\":\"fullName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-16T12:29:32Z",
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
                    "array": false,
                    "indexExists": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33657238
            },
            "99019611": {
                "networkID": 9312,
                "sysName": "Categories",
                "name": "Категории",
                "id": 99019611,
                "dateCreated": "2021-09-05T12:37:13Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"name\",\"name\":\"Название категории\",\"dataType\":\"string\",\"id\":\"34241630845441302\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"participants\",\"name\":\"Количество участников\",\"dataType\":\"number\",\"id\":\"83591630845451672\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"positiveNum\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"23961630845476759\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}}]",
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
                    "indexExists": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33657238
            },
            "99019819": {
                "networkID": 9312,
                "sysName": "referee",
                "name": "Рефери",
                "id": 99019819,
                "dateCreated": "2021-09-06T10:22:16Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"firstName\",\"name\":\"Имя\",\"dataType\":\"string\",\"id\":\"88411630830369791\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"lastName\",\"name\":\"Фамилия\",\"dataType\":\"string\",\"id\":\"19871630830408416\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"photo\",\"name\":\"Фото\",\"dataType\":\"file\",\"id\":\"80051630845397917\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":\"image\",\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"isDelete\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"58681630852410734\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"role\",\"name\":\"Роль\",\"dataType\":\"string\",\"id\":\"78341630923765697\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"category_ids\",\"name\":\"Боковой судья в категориях\",\"dataType\":\"arrayLink\",\"id\":\"65671630948880743\",\"link\":\"Categories\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{}},{\"sysName\":\"webUser_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"84601630949425689\",\"link\":\"WebUser\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":7,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"referee_car_ids\",\"name\":\"Рефери в категориях\",\"dataType\":\"arrayLink\",\"id\":\"15781630964072116\",\"link\":\"Categories\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":8,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{}}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"firstName\"},{\"sysName\":\"lastName\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-14T11:35:37Z",
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
                    "array": false,
                    "indexExists": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33657238
            },
            "99019951": {
                "networkID": 9312,
                "sysName": "protocols",
                "name": "Протоколы",
                "id": 99019951,
                "dateCreated": "2021-09-06T17:10:01Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"referee_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"34661630948252978\",\"link\":\"referee\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[\"webUser_id\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"sportsman_id\",\"name\":\"Участник\",\"dataType\":\"link\",\"id\":\"19791630948264385\",\"link\":\"sportsmen\",\"group\":\"0\",\"tags\":null,\"indexing\":true,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[\"category\"],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":true,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"total_score\",\"name\":\"Баллы\",\"dataType\":\"number\",\"id\":\"72971630948284168\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"score_ids\",\"name\":\"Оценки\",\"dataType\":\"arrayLink\",\"id\":\"50671630948309425\",\"link\":\"scores\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":false,\"arrayLink\":true,\"typeVariable\":{}},{\"sysName\":\"last_score_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"13721630963134773\",\"link\":\"scores\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"protocol_name\",\"name\":\"\",\"dataType\":\"string\",\"id\":\"88981631027665119\",\"link\":null,\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":6,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"protocol_name\"},{\"sysName\":\"total_score\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-08T09:51:50Z",
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
                    "array": false,
                    "indexExists": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33657423
            },
            "99019952": {
                "networkID": 9312,
                "sysName": "scores",
                "name": "Оценки судей",
                "id": 99019952,
                "dateCreated": "2021-09-06T17:13:28Z",
                "hidden": false,
                "dateHidden": null,
                "jsonObject": "[{\"sysName\":\"id\",\"name\":\"id\",\"dataType\":\"id\",\"id\":\"0\",\"link\":\"\",\"group\":\"0\",\"tags\":\"\",\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":0,\"linkIndexFieldSysName\":[],\"defaultValue\":\"\",\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"protocol_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"85631630948431660\",\"link\":\"protocols\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":1,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"mark\",\"name\":\"\",\"dataType\":\"number\",\"id\":\"62721630948449790\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":2,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"date\",\"name\":\"\",\"dataType\":\"date\",\"id\":\"69051630948457728\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":3,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":{\"customOptionLabel\":\"My option\",\"keyValue\":{\"key\":\"key\",\"value\":\"value\",\"button\":\"One more\"},\"dateLocale\":\"en-gb\",\"booleanOptions\":[\"True\",\"False\"],\"validWeekDays\":{\"mon\":true,\"thu\":true,\"tue\":true,\"sun\":true,\"fri\":true,\"sat\":true,\"wed\":true},\"customOptionPlaceholder\":\"Describe your option\",\"range\":{},\"customOptionType\":\"textarea\",\"dateFormat\":\"DD MMM\",\"timeFormat\":\" HH:mm\",\"isUTC\":\"false\"},\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"isUndone\",\"name\":\"\",\"dataType\":\"boolean\",\"id\":\"21231630954927208\",\"link\":\"\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":4,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":false,\"linkType\":false,\"arrayLink\":false,\"typeVariable\":{}},{\"sysName\":\"prev_score_id\",\"name\":\"\",\"dataType\":\"link\",\"id\":\"44871630963155715\",\"link\":\"scores\",\"group\":\"0\",\"tags\":null,\"indexing\":false,\"ordering\":false,\"description\":null,\"weight\":null,\"order\":5,\"linkIndexFieldSysName\":[],\"defaultValue\":null,\"constraints\":null,\"synthetic\":false,\"format\":null,\"formatOptions\":null,\"groupName\":null,\"array\":false,\"indexExists\":false,\"json\":false,\"linkOrArrayLinkType\":true,\"linkType\":true,\"arrayLink\":false,\"typeVariable\":{}}]",
                "jsonGroupSettings": null,
                "jsonViewIdSettings": "[{\"sysName\":\"mark\"}]",
                "jsonSettings": null,
                "jsonNativeIndexSettings": null,
                "indexEnabled": true,
                "lastIndexUpdate": 0,
                "indexName": "",
                "dateChanged": "2021-09-06T21:19:28Z",
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
                    "array": false,
                    "indexExists": false,
                    "json": false,
                    "linkOrArrayLinkType": false,
                    "linkType": false,
                    "arrayLink": false,
                    "typeVariable": {}
                },
                "objectIDSysName": "id",
                "folderId": 33657423
            }
        },
        "isSuccessWrite": false,
        "writeError": null,
        "writeResponse": null,
        "fileds": [],
        "quickSearch": "false"
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



    return (
        <FpsWrapper>
            <Router>
                <MainMenuWrapper themeName={currentTheme} />
                <ContentWrapper whiteLabel={true} themeName={currentTheme}>
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